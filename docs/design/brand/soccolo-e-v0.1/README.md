# Soccolo Concept E controlled refinement — v0.1

Status: **provisional review candidate; not an approved launch identity**.

This directory contains the Section 4 asset and provenance bundle requested by [SP-076 brand assets and ownership decision](../../../decisions/SP-076-brand-assets-and-ownership.md). The mark is a deliberate code-native reconstruction of the founder-selected Double Touch Wordmark direction. It is not traced from the generated Concept E PNG.

## Review first

![Soccolo Concept E v0.1 review board](soccolo-review-board.png)

Primary review files:

- `soccolo-review-board.svg` and `.png` — combined comparison board;
- `soccolo-lockup-horizontal-light.svg` and `soccolo-lockup-horizontal-dark.svg` — primary lockups;
- `soccolo-symbol-primary.svg` and `soccolo-symbol-reversed.svg` — standalone symbol candidates;
- `soccolo-app-icon-1024.svg` and `.png` — full-bleed app-store source;
- `soccolo-export-intro-frame-16x9.svg` and `.png` — provisional fixed-navy export frame;
- `USAGE.md` — application rules, colour/spacing and minimum-size guidance;
- `PROVENANCE.md` — authorship, tools, source and rights record;
- `SIMILARITY-REVIEW.md` — preliminary collision screen and unresolved checks;
- `EXPORT-INTRO-STORYBOARD.md` — proposed composition handoff to SP-080; and
- `asset-manifest.json` — exact file sizes and SHA-256 checksums.

## Construction and reproduction

`build-assets.mjs` is the canonical editable geometry source. It uses only SVG paths, circles and rectangles defined in the repository. It contains both the custom Soccolo wordmark and a small custom vector alphabet for the tagline; no runtime or third-party font is used by the launch-candidate SVGs.

From this directory:

```powershell
node .\build-assets.mjs
powershell -NoProfile -ExecutionPolicy Bypass -File .\render-assets.ps1
node .\write-manifest.mjs
```

The PNG export script uses the locally installed Google Chrome SVG renderer and Windows image resizing for small/iOS exports. The SVG files are the masters; PNGs are deterministic review/delivery derivatives on the recorded machine.

## Approval boundary

Founder direction selection does not approve these files for launch. Approval requires review of the exact v0.1 files/checksums, resolution of the similarity-review warnings—especially the standalone `C·C` reading—and a dated approve/revise/stop decision. Trade-mark/legal clearance remains separate.
