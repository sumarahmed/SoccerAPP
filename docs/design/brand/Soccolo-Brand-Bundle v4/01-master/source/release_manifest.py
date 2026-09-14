#!/usr/bin/env python3
"""Write or verify a deterministic SHA-256 manifest for a Soccolo bundle."""
import argparse
import hashlib
import json
import os


MANIFEST_NAME = "release-manifest.json"
EXCLUDED = {MANIFEST_NAME, ".soccolo-brand-build-root"}


def sha256(path, chunk=1 << 20):
    digest = hashlib.sha256()
    with open(path, "rb") as stream:
        for block in iter(lambda: stream.read(chunk), b""):
            digest.update(block)
    return digest.hexdigest()


def records(root):
    items = []
    for base, directories, files in os.walk(root):
        directories[:] = sorted(d for d in directories if d != ".build-work")
        for name in sorted(files):
            path = os.path.join(base, name)
            relative = os.path.relpath(path, root).replace(os.sep, "/")
            if relative in EXCLUDED or relative.startswith(".build-work/"):
                continue
            items.append({
                "path": relative,
                "sha256": sha256(path),
                "sizeBytes": os.path.getsize(path),
            })
    return sorted(items, key=lambda item: item["path"])


def aggregate(items):
    digest = hashlib.sha256()
    for item in items:
        digest.update(f"{item['sha256']}  {item['path']}\n".encode("utf-8"))
    return digest.hexdigest()


def candidate(root):
    files = records(root)
    return {
        "schemaVersion": 1,
        "algorithm": "SHA-256",
        "excluded": sorted(EXCLUDED),
        "aggregateSha256": aggregate(files),
        "files": files,
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--write", metavar="BUNDLE_ROOT")
    group.add_argument("--check", metavar="BUNDLE_ROOT")
    args = parser.parse_args(argv)
    root = os.path.abspath(args.write or args.check)
    manifest = os.path.join(root, MANIFEST_NAME)
    current = candidate(root)
    if args.write:
        temporary = manifest + ".tmp"
        with open(temporary, "w", encoding="utf-8", newline="\n") as stream:
            json.dump(current, stream, indent=2)
            stream.write("\n")
        os.replace(temporary, manifest)
        print(f"WROTE {manifest}: {len(current['files'])} files")
        return 0
    if not os.path.isfile(manifest):
        raise SystemExit("release manifest is missing: " + manifest)
    with open(manifest, encoding="utf-8") as stream:
        recorded = json.load(stream)
    if recorded != current:
        raise SystemExit("release manifest does not match the bundle")
    print(f"PASS: {len(current['files'])} bundle files match the release manifest")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
