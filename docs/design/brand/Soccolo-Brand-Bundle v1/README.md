# Soccolo, brand asset and provenance bundle

Version 1.2, Sep 14, 2026.

Every item in the review checklist, rebuilt from scratch. Start with
`05-specification/usage-specification.md`.

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
| Wordmark and lockups | `02-logo/` symbol-only, horizontal and stacked, each with and without tagline; supplied production reference under `02-logo/print/` |
| Colour variants | `02-logo/` light, dark, one-colour black, one-colour white; all transparent, plus an on-accent set |
| App assets | `03-app/` 1024 master, iOS crops, Android adaptive layers plus monochrome, web favicon source, small-size proofs |
| Export treatment | `04-export-treatment/` fixed navy logo-first frames, safe-area overlays, timing notes |
| Usage specification | `05-specification/` tokens, clear space, minimum size, prohibited uses |
| Rights and provenance | `06-provenance/rights-and-provenance.md` |
| Similarity review | `06-provenance/similarity-review.md` |

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
  print/        Supplied colour-build and print-production reference PDF
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
  overlays/    Safe-area and clear-space guides. Do not export these.
  export-treatment.md and supplied export-timing specification PDF

05-specification/
  usage-specification.md
  colour-tokens.json  colour-tokens.css
  clear-space.svg     minimum-size.png
  measurements.json

06-provenance/
  rights-and-provenance.md
  similarity-review.md
  revision-log.md
```

---

## The source is part of the asset

`01-master/source/` is not a build artefact. It is the derivation: the radii,
the solved equations, the optical corrections and the reason for each, in
readable form. It regenerates every generated asset in this bundle (the documents are authored, and are preserved by the build):

```bash
cd 01-master/source
python -m pip install -r requirements.txt
python build.py --output ../../../../../tmp/soccolo-brand-build/Soccolo-Brand-Bundle
```

`--output` is required. The generator refuses to overwrite this checked-in
source bundle and refuses any non-empty output directory that does not contain
its `.soccolo-brand-build-root` marker. Paths are resolved from the source
directory, so the command is portable across Windows, macOS and Linux.

A vector file shows the finished shapes. This shows how they were arrived at,
which is the question a similarity dispute actually turns on. Keep it with the
artwork.

---

## Seven things worth knowing before you use any of it

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
5. **The symbol is not the typeface's c.** It is constructed, and it is the part
   of the identity you own outright.
6. **The delivered files are outlines, not text.** They need no font installed
   and must not be re-typeset. The typeface is Poppins SemiBold under the SIL
   Open Font License, free for commercial and logo use; the licence and the exact
   font file travel in `01-master/typeface/`.
7. **The Orbit alternate is finished, not a sketch.** If clearance advice goes
   against the double C, swap the symbol; nothing else in the system changes.
