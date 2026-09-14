#!/usr/bin/env python3
"""Write or verify the derived Soccolo video-asset manifest."""
import argparse
import hashlib
import json
import os
import shutil
import subprocess

from PIL import Image


ROOT = os.path.dirname(os.path.abspath(__file__))
MANIFEST = os.path.join(ROOT, "manifest.json")


def sha256(path, chunk=1 << 20):
    digest = hashlib.sha256()
    with open(path, "rb") as stream:
        for block in iter(lambda: stream.read(chunk), b""):
            digest.update(block)
    return digest.hexdigest()


def ffprobe_version():
    executable = shutil.which("ffprobe")
    if not executable:
        raise SystemExit("required tool is not on PATH: ffprobe")
    result = subprocess.run([executable, "-version"], capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit("cannot run ffprobe: " + result.stderr.strip())
    return result.stdout.splitlines()[0]


def probe_video(path):
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-count_frames", "-print_format", "json",
         "-show_streams", "-show_format", path],
        capture_output=True, text=True,
    )
    if result.returncode != 0:
        raise SystemExit(f"cannot probe {path}: {result.stderr.strip()}")
    data = json.loads(result.stdout)
    videos = [stream for stream in data["streams"] if stream["codec_type"] == "video"]
    audio = [stream for stream in data["streams"] if stream["codec_type"] == "audio"]
    if len(videos) != 1:
        raise SystemExit(f"expected one video stream in {path}; found {len(videos)}")
    video = videos[0]
    num, den = (video.get("avg_frame_rate") or "0/1").split("/")
    rate = float(num) / float(den or 1)
    raw_frames = video.get("nb_read_frames") or video.get("nb_frames")
    frames = int(raw_frames) if raw_frames and raw_frames != "N/A" else None
    return {
        "kind": "video",
        "codec": video.get("codec_name"),
        "pixelFormat": video.get("pix_fmt"),
        "width": int(video["width"]),
        "height": int(video["height"]),
        "durationSeconds": round(float(data["format"].get("duration") or 0), 6),
        "frames": frames,
        "fps": round(rate, 6),
        "hasAlpha": "a" in (video.get("pix_fmt") or ""),
        "hasAudio": bool(audio),
    }


def probe_png(path):
    with Image.open(path) as image:
        return {
            "kind": "image",
            "format": image.format,
            "mode": image.mode,
            "width": image.width,
            "height": image.height,
            "hasAlpha": "A" in image.getbands(),
        }


def role_for(relative):
    if relative.startswith("intro/"):
        return "export-intro-alpha" if relative.endswith("-alpha.mov") else "export-intro-flat"
    if relative.startswith("outro/"):
        return "optional-outro-alpha" if relative.endswith(".mov") else "optional-outro-flat"
    if "intro-mark" in relative:
        return "intro-mark-source"
    return "optional-outro-mark-source"


def records():
    items = []
    for folder in ("intro", "outro", "mark"):
        base = os.path.join(ROOT, folder)
        if not os.path.isdir(base):
            raise SystemExit(f"missing derived asset directory: {base}")
        for name in sorted(os.listdir(base)):
            path = os.path.join(base, name)
            if not os.path.isfile(path):
                continue
            relative = os.path.relpath(path, ROOT).replace(os.sep, "/")
            details = probe_png(path) if name.lower().endswith(".png") else probe_video(path)
            items.append({
                "path": relative,
                "role": role_for(relative),
                "sha256": sha256(path),
                "sizeBytes": os.path.getsize(path),
                **details,
            })
    return sorted(items, key=lambda item: item["path"])


def make_manifest():
    # Confirm the required probe is callable, but do not put its machine-specific
    # version string into the release record. The asset facts below are portable.
    ffprobe_version()
    return {
        "schemaVersion": 1,
        "contractVersion": "1.1",
        "transition": "held-source-frame-zero; dissolve 1.60-2.00 s; source motion/audio at 2.00 s",
        "outroDefault": False,
        "verificationRequirement": "ffprobe available on PATH",
        "files": records(),
    }


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--write", action="store_true")
    group.add_argument("--check", action="store_true")
    args = parser.parse_args(argv)
    candidate = make_manifest()
    if args.write:
        temporary = MANIFEST + ".tmp"
        with open(temporary, "w", encoding="utf-8", newline="\n") as stream:
            json.dump(candidate, stream, indent=2)
            stream.write("\n")
        os.replace(temporary, MANIFEST)
        print(f"WROTE {MANIFEST}: {len(candidate['files'])} files")
        return 0

    if not os.path.isfile(MANIFEST):
        raise SystemExit("video manifest is missing")
    with open(MANIFEST, encoding="utf-8") as stream:
        recorded = json.load(stream)
    if recorded.get("files") != candidate["files"]:
        raise SystemExit("video manifest does not match the derived files")
    if recorded.get("contractVersion") != candidate["contractVersion"]:
        raise SystemExit("video manifest contract version is stale")
    print(f"PASS: {len(candidate['files'])} video assets match the manifest")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
