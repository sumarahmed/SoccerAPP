# Soccolo, brand asset and provenance bundle

Bundle version 4.0, founder-accepted Sep 14, 2026.

This release starts from the founder-accepted v2 bundle and adds the corrected
video export assets and tooling required by `ACT-SP-080-01`. The separate v3
folder is review history and is not incorporated as a release bundle.

Generated artwork is reproducible from the bundled source. Authored records and
the two approved reference PDFs are preserved unchanged by the build. Start
with `05-specification/usage-specification.md`.

---

## Read these two first

- `06-provenance/similarity-review.md` contains one material finding that could
  affect the symbol. Read it before committing spend.
- `06-provenance/rights-and-provenance.md` records how the artwork was made and
  flags an unresolved copyright question.

---

## Checklist

| Required item | Where it is |
|---|---|
| Editable master | `01-master/soccolo-master.svg`, the generator in `01-master/source/`, the typeface and its licence in `01-master/typeface/` |
| Wordmark and lockups | `02-logo/` symbol-only, horizontal and stacked, each with and without tagline |
| Colour variants | `02-logo/` light, dark, one-colour black, one-colour white; all transparent, plus an on-accent set |
| App assets | `03-app/` 1024 master, iOS crops, Android adaptive layers plus monochrome, web favicon source, small-size proofs |
| Export treatment | `04-export-treatment/` fixed navy logo-first frames, safe-area overlays, and a one-page timing specification (PDF) |
| Print-ready artwork | `07-print/` CMYK and RGB vector PDFs plus a two-page printer's reference |
| Recording-export assets | `08-video/` held-frame intros, opt-in outros, source marks, exporter and verified media manifest |
| Usage specification | `05-specification/` tokens, clear space, minimum size, prohibited uses |
| Rights and provenance | `06-provenance/rights-and-provenance.md` |
| Similarity review | `06-provenance/similarity-review.md` |
| Release integrity | `release-manifest.json` records the SHA-256 digest and size of every bundle file |

---

## Contents

```
01-master/
  soccolo-master.svg              Every component, named and separable
  soccolo-construction-grid.svg   The geometry, dimensioned
  source/                         The generator. This IS the editable master.
  typeface/                       Poppins SemiBold and its OFL licence

02-logo/
  symbol/      Primary, small-size variant, Orbit alternate
  horizontal/  Primary lockup, with and without tagline, plus plain wordmark
  stacked/     Stacked lockups
  on-accent/   Navy mark on the mint ground
  manifest.json
  Each in 4 colourways, SVG and PNG, transparent grounds.

03-app/
  soccolo-appicon-master-1024.svg/.png
  ios/         AppIcon-1024 down to AppIcon-20, full-bleed square
  android/     Foreground, background, monochrome layers, Play Store icon
  web/         favicon.svg, 16/32/48 PNG, apple-touch-icon, maskable, Orbit favicon
  proofs/small-size-proof.png

04-export-treatment/
  soccolo-endframe-{1920x1080,1080x1080,1080x1920}.svg/.png
  soccolo-export-timing-specification.pdf/.png   One page. Hand this to the editor.
  overlays/    Safe-area and clear-space guides. Do not export these.
  export-treatment.md

05-specification/
  usage-specification.md
  colour-tokens.json  colour-tokens.css
  clear-space.svg     minimum-size.png
  measurements.json

06-provenance/
  rights-and-provenance.md
  similarity-review.md
  revision-log.md

07-print/
  cmyk-for-print/    CMYK vector PDFs, FOGRA39L output intent embedded
  rgb-for-office/    sRGB vector PDFs for documents and slides
  soccolo-print-reference.pdf    Approved two-page production reference
  print-index.json

08-video/
  intro/       Two-second flat and alpha intros for 16:9, 1:1 and 9:16
  outro/       Optional four-second flat and alpha end cards; never automatic
  mark/        Transparent intro and optional-outro source marks
  soccolo-export.py              Non-overwriting reference compositor
  video-export-specification.md  Timeline, framing, audio and safety contract
  video.py                       Derived video-asset generator
  video_manifest.py              Frame, codec, size and SHA-256 verifier
  manifest.json                  Verified facts for all 18 video assets

release-manifest.json            Whole-bundle SHA-256 release record
```

---

## The source is part of the asset

`01-master/source/` is not a build artefact. It is the derivation: the radii,
the solved equations, the optical corrections and the reason for each, in
readable form. It regenerates every generated asset in this bundle (the documents are authored, and are preserved by the build):

```powershell
cd 01-master/source
python -m pip install -r requirements.txt
python build.py --output ../../../../../tmp/soccolo-brand-build/Soccolo-Brand-Bundle-v4
```

`--output` is required. The generator refuses to overwrite this checked-in
bundle and refuses a non-empty output directory unless it carries the build
marker created by an earlier run. It uses only the bundled font and ICC colour
profiles. FFmpeg and FFprobe must be available on `PATH` to build and verify the
video assets. The two approved PDFs are copied byte-for-byte rather than
recreated. The build also writes deterministic video and whole-bundle manifests.

A vector file shows the finished shapes. This shows how they were arrived at,
which is the question a similarity dispute actually turns on. Keep it with the
artwork.

---

## Ten things worth knowing before you use any of it

1. **The accent colour has two values.** Mint on dark, deep green on light. Mint
   on white measures about 1.4:1 and is unusable. This is the most likely thing
   to get wrong.
2. **The wordmark has two forms.** The accent version (mint "cc") stands alone.
   The plain version goes under or beside the symbol, so the mark is not stated
   twice.
3. **Below 24 px, switch to the small-size symbol variant.** It is the same mark
   redrawn for the size.
4. **The gap between the two c-forms is load-bearing**, for the design and for
   the argument in the similarity review. Never let them touch.
5. **The symbol is not the typeface's c.** It is separately constructed. That
   improves provenance evidence but is not, by itself, a legal conclusion about
   copyright, exclusivity or trade-mark clearance.
6. **The delivered files are outlines, not text.** They need no font installed
   and must not be re-typeset. The typeface is Poppins SemiBold under the SIL
   Open Font License, free for commercial and logo use; the licence and the exact
   font file travel in `01-master/typeface/`.
7. **The mint does not print.** In four-colour process it lands 30 dE from its
   screen value. Use the deep green for CMYK, or specify a spot colour and get a
   drawdown. `07-print/soccolo-print-reference.pdf` shows the two side by side.
8. **The Orbit alternate is finished, not a sketch.** If clearance advice goes
   against the double C, swap the symbol; nothing else in the system changes.
9. **The default opening is two seconds.** The plate is fixed for 1.60 seconds,
   then dissolves to a held copy of source frame zero for 0.40 seconds. Source
   motion and source audio begin unobscured at export time 2.00 seconds.
10. **The four-second outro is opt-in.** The reference exporter does not add it
    unless `--outro` is supplied. Product code must not make it automatic.

Syed Ahmed accepted v4 and the `ACT-SP-080-01` composition and export-permission
boundary on Sep 14, 2026. This is design/specification acceptance, not device,
production, legal-clearance or real-user-media evidence.
