# Soccolo, usage specification

Version 1.1, Sep 14, 2026. Every figure below is measured from the geometry in
`01-master/source/`, not estimated. Regenerating the bundle regenerates these
numbers.

---

## 1. The unit

The whole system is dimensioned in one unit: **the diameter of the dot at the
centre of the symbol**, which is **22.79 units at cap height 100**.

It was chosen because it is visible. Anyone holding a printed sheet can measure
clear space with a ruler against the mark itself, without this document.

---

## 2. Which lockup to use

| Lockup | Use it for | File |
|---|---|---|
| Primary horizontal | The default. App headers, web nav, documents, signage | `02-logo/horizontal/` |
| Horizontal with tagline | First impression surfaces: home page hero, cover slides, stand graphics | `02-logo/horizontal/` |
| Stacked | Square and tall spaces: social avatars, badges, kit, stamps | `02-logo/stacked/` |
| Stacked with tagline | Video end frames, posters, print covers | `02-logo/stacked/` |
| Symbol alone | App icon, favicon, watermark, pattern, anywhere the name is already present | `02-logo/symbol/` |
| Wordmark, plain | Running text settings, partner lists, co-branded lockups | `02-logo/horizontal/` |

**The wordmark has two forms and they are not interchangeable.** In the
horizontal lockups the symbol stands in for the "cc" and is set in the accent
colour. In the stacked lockups the word is set plainly, in one colour, because
the symbol already appears above it. Using the accent wordmark under the symbol
states the mark twice.

---

## 3. Colour

### Tokens

Machine-readable versions: `colour-tokens.json`, `colour-tokens.css`.

**Ink** (the navy ground and its neutrals)

| Token | Hex | Role |
|---|---|---|
| `ink-900` | `#04141D` | Deepest ground, rich-black substitute in print |
| `ink-800` | `#0A2231` | **Primary brand navy** |
| `ink-700` | `#123449` | Raised surfaces, dividers on dark |
| `ink-600` | `#1E4A63` | Tagline on light grounds, secondary text |
| `ink-400` | `#4E7E96` | Tertiary text, disabled |
| `ink-200` | `#AFC6D2` | Rules, borders |
| `ink-100` | `#DCE7ED` | Tagline reversed on dark, subtle fills |
| `paper` | `#F4F8FA` | **Primary light ground** |

**Pitch** (the green)

| Token | Hex | Role |
|---|---|---|
| `pitch-900` | `#06301F` | Deep fills |
| `pitch-700` | `#0A5537` | **Accent on light grounds** |
| `pitch-600` | `#0C6B45` | Hover, pressed on light |
| `pitch-500` | `#12A26C` | Mid-tone, charts |
| `pitch-400` | `#2ACE8C` | Hover on dark |
| `pitch-300` | `#54E8AC` | **Accent on dark grounds** |
| `pitch-200` | `#8DF3C9` | Tints |
| `pitch-100` | `#CDFAE6` | Lightest tint |

### The accent has two values and this matters

The mint reads at 10.5:1 against the brand navy and at roughly **1.4:1 against
white**, which is unusable. On light grounds the accent is `pitch-700`, the deep
green, at 8.3:1.

The previous sheet used one mint on both grounds. That is the single change here
most likely to be noticed in practice: the mint version of the mark on a white
page effectively disappears for anyone with reduced contrast sensitivity, and
fails to reproduce in most print conditions.

### Measured contrast

| Pair | Ratio | Floor | Result |
|---|---|---|---|
| Mint accent on brand navy | 10.51:1 | 4.5 | Pass |
| Mint accent on deepest navy | 12.04:1 | 4.5 | Pass |
| Reversed wordmark on brand navy | 16.33:1 | 7.0 | Pass |
| Tagline reversed on brand navy | 12.98:1 | 7.0 | Pass |
| Deep green accent on light ground | 8.30:1 | 4.5 | Pass |
| Deep green accent on pure white | 8.87:1 | 4.5 | Pass |
| Wordmark on light ground | 15.28:1 | 7.0 | Pass |
| Tagline on light ground | 8.87:1 | 4.5 | Pass |
| Navy mark on mint ground | 10.51:1 | 4.5 | Pass |

The audit runs on every build and fails the build if any pair drops below its
floor. Source: `01-master/source/palette.py`.

### Approved colourways

1. **Primary on light.** Navy wordmark, deep green accent, on `paper` or white.
2. **Primary on dark.** White wordmark, mint accent, on `ink-800` or `ink-900`.
3. **On accent.** Navy mark entirely, on `pitch-300`.
4. **One colour black.** For fax-grade reproduction, engraving, single-colour print.
5. **One colour white.** For dark photography and dark single-colour print.

Anything else is not a colourway.

---

## 4. Clear space

**Two units on every side** (see `clear-space.svg`).

Nothing enters that band: no type, no rule, no image edge, no other logo, no
crop. The band scales with the mark, so the rule holds at every size without
re-specification.

---

## 5. Minimum size

Derived from a rendered legibility ladder, not from a rule of thumb. See
`minimum-size.png` to check the judgement yourself.

| Lockup | Screen | Print |
|---|---|---|
| Primary horizontal | 88 px wide | 22 mm wide |
| Horizontal with tagline | 140 px wide | 34 mm wide |
| Stacked | 88 px wide | 22 mm wide |
| Stacked with tagline | 140 px wide | 34 mm wide |
| Primary symbol | 24 px wide | 6 mm wide |
| Small-size symbol variant | 20 px wide | 5 mm wide |

Below 24 px the primary symbol's dot begins to weld itself to the terminals.
**Switch to the small-size variant** (`soccolo-symbol-compact-*.svg`), which
opens the apertures, thickens the stroke and moves the two forms apart. It is
the same mark redrawn for the size, and at a glance nobody can tell them apart.

At 16 px neither variant holds the dot cleanly. See
`03-app/proofs/small-size-proof.png`, which shows exactly what happens, and
section 8 for what to do about it.

Embroidery, etching, debossing and vinyl need their own physical trials before
a minimum is set. Screen and print figures do not transfer to them.

---

## 6. Typography

### The typeface

**Poppins SemiBold**, designed by Indian Type Foundry, released under the **SIL
Open Font License 1.1**. The licence and the exact font file are in
`01-master/typeface/`.

It is free for commercial use, including in a logo, with no payment and no
attribution required in the finished work. It can be embedded in web, app and
print output. Use it for running text and interface type too, so the brand stays
in one family.

**The delivered logo files contain outlines, not text.** They do not need the
font installed to render, and they must not be re-typeset. If a lockup needs to
change, regenerate it from `01-master/source/`.

### Letterform metrics

Measured off the face at cap height 100, because the symbol is built from these
numbers.

| Property | Value |
|---|---|
| Cap height | 100 |
| x-height | 79.03 |
| Overshoot on round letters | ±1.28 |
| Stroke, top and bottom of the o | 17.40 |
| Stroke, flanks of the o | 20.40 |
| o outer | 81.31 × 81.60 |
| o counter | 40.51 × 46.79 |
| Aperture of the letter c | ±18.6° |

The o is not a ring of even thickness: its flanks are heavier than its top and
bottom, which is the standard optical correction. The symbol is built from
ellipses for exactly this reason, so it does not read thin beside the letters.

### Symbol geometry

| Property | Value |
|---|---|
| Outer ellipse | 81.31 × 81.60 |
| Counter | 40.51 × 46.79 |
| Aperture | ±27.28° |
| Centre separation | 85.88 |
| Dot diameter | 22.79 |
| Dot clearance | 8.51 (0.45 of the stroke) |
| Gap between the two forms | 13.61 (0.72 of the stroke) |

Two of these are rules rather than values. **The separation is exactly the
distance the font sets between two c's**, so the word keeps its rhythm straight
through the device. **The aperture opens past the letter's own ±18.6°** to
±27.28°, because the dot needs room; that is the one place the symbol
deliberately departs from the letterforms.

## 7. Prohibited uses

These are not preferences. Each one breaks something specific.

1. **Do not recolour.** The five colourways above are the whole set.
2. **Do not use mint on white or any light ground.** It fails contrast.
3. **Do not stretch, condense or skew.** Scale uniformly.
4. **Do not rotate.** The mark sits level.
5. **Do not add effects.** No shadow, glow, bevel, gradient, outline or stroke.
6. **Do not let the two c-forms touch or overlap.** The gap is load-bearing,
   both to the design and to the argument in `06-provenance/similarity-review.md`.
7. **Do not remove the dot.** It is structural, not decoration.
8. **Do not re-typeset the wordmark.** The files are outlines. Retyping it in
   Poppins at a different weight, tracking or optical size will not match, and
   the provenance record will no longer describe what you shipped.
9. **Do not use the accent wordmark beneath the symbol.** Use the plain one.
10. **Do not place the mark on a busy image** without a solid or heavily
    darkened panel behind it.
11. **Do not box, frame or put the mark in a container** unless it is the
    approved app tile.
12. **Do not alter the spacing** between symbol and word, or inside the word.
13. **Do not use the mark in a sentence** as a word substitute.
14. **Do not animate the mark's own geometry.** See the export treatment note.
15. **Do not reproduce below the minimum sizes** in section 5.

---

## 8. Application notes

### App icons

- **iOS.** Supply the full-bleed square; the system applies the mask. Do not
  pre-round the corners. Source at `03-app/ios/`.
- **Android adaptive.** Foreground, background and monochrome layers at
  `03-app/android/`. The mark sits inside the central 264 of the 432 canvas, so
  no launcher mask can crop it.
- **Maskable web icon.** The mark sits smaller again, inside the central 80%.

### Favicon

At 32 px the small-size variant holds. At 16 px it does not, and neither does
anything else two-and-a-bit times wider than it is tall.

Two honest options, both supplied:

- Ship the small-size variant and accept a soft 16 px rendering. Most browsers
  now request 32 px, so this is a smaller problem than it used to be.
- Ship the **Orbit** alternate for the 16 px slot only
  (`03-app/web/favicon-orbit-16.png`). It is square, so it holds structure at
  that size. The cost is a second mark in the wild.

The first is recommended unless the 16 px favicon is somewhere the brand is
actually judged.

### Partner and co-branded lockups

Use the plain wordmark. Separate the two marks by a vertical rule with two
units of clear space each side, and match **cap heights**, not bounding boxes.

---

## 9. Files

```
01-master/      Editable master artboard, construction sheet, generator source
02-logo/        Every lockup in every colourway, SVG and PNG, transparent ground
03-app/         iOS, Android, web icons, and the small-size proof
04-export-treatment/  Fixed navy end frames and safe-area overlays
05-specification/     This document, tokens, clear space, minimum size
06-provenance/  Rights record, similarity review, revision log
```

All SVGs carry transparent grounds. The colourway in the filename says which
ground the file is drawn for, not which ground is baked in.
