# Soccolo, export treatment

The fixed logo-first frame, and the timing and safe-area rules that govern it.
Version 1.1, Sep 14, 2026.

**`soccolo-export-timing-specification.pdf`** in this folder is the sheet to hand
an editor: one page, the timeline drawn against a frame-accurate axis at both 25
and 30 fps, the easing curve, the three crops with their safe areas, and the
animation prohibition. A PNG of the same sheet sits beside it. This document is
the long form.

---

## 1. The frame

One frame, three crops. Solid `ink-800` navy, stacked lockup with tagline,
optically centred. No gradient, no texture, no vignette, no photography.

| Crop | File | Mark width |
|---|---|---|
| 16:9, 1920 × 1080 | `soccolo-endframe-1920x1080.png` | 40% of frame width |
| 1:1, 1080 × 1080 | `soccolo-endframe-1080x1080.png` | 40% of frame width |
| 9:16, 1080 × 1920 | `soccolo-endframe-1080x1920.png` | 62% of frame width |

The mark sits **1.5% of the frame height above true centre**. A lockup centred
by its bounding box reads low, because the eye weights the top of a composition.
At end-frame scale this is visible, so it is corrected rather than ignored.

The 9:16 mark is proportionally wider because the frame is narrow, and because
platform chrome eats the vertical, not the horizontal.

---

## 2. Safe area

Overlays in `overlays/` show both the platform safe area and the mark's own
clear space. They are guides: do not export them.

| Crop | Horizontal margin | Vertical margin |
|---|---|---|
| 16:9 | 5% of the short edge | 5% |
| 1:1 | 6% | 6% |
| 9:16 | 6% | **14%** |

The 9:16 vertical figure is large because it has to be. Captions, handles,
follow buttons, progress bars and the platform's own watermark occupy the top
and bottom of a vertical video. Anything inside those bands will be covered on
some proportion of devices.

Two rules the overlay cannot enforce:

- The mark's clear space is measured from the **mark**, not from the safe area.
  Both must hold. Where they conflict, shrink the mark.
- Never crop the frame in post. Export the crop you need from the source.

---

## 3. Timing

A four-second end card. Frame numbers are rounded to the nearest frame and are
inclusive of the start.

| Phase | Seconds | 25 fps | 30 fps | What happens |
|---|---|---|---|---|
| Ground in | 0.00 to 0.30 | 0 to 8 | 0 to 9 | Navy field fades up from the preceding shot |
| Hold | 0.30 to 0.50 | 8 to 13 | 9 to 15 | Empty navy. A beat before the mark |
| Mark in | 0.50 to 0.90 | 13 to 23 | 15 to 27 | Lockup fades in, opacity 0 to 100 |
| **Hold** | **0.90 to 3.40** | **23 to 85** | **27 to 102** | **Mark held absolutely still, 2.5 s minimum** |
| Out | 3.40 to 4.00 | 85 to 100 | 102 to 120 | Whole frame fades to black, or cuts |

At 24 fps, keep the seconds and let the frames fall where they fall. Do not
shorten the hold to make the arithmetic tidy.

Easing: `cubic-bezier(0.33, 0, 0.15, 1)` on both fades. Linear fades read
mechanical at this length.

**The hold is the rule that matters.** Two and a half seconds of stillness is
what makes an end card read as a signature rather than a transition. Shortening
it is the most common way this treatment gets ruined.

---

## 4. Animating the mark

The mark's own geometry does not animate. The dot does not travel, orbit, bounce
or ping. The c-forms do not rotate, close, open or interlock.

This is a design rule and a legal one. The gap between the two forms and the
independence of the dot are the features that distance this mark from
interlocking opposed-C monograms (see `../06-provenance/similarity-review.md`).
An animation that closes the gap or overlaps the forms, even for four frames,
creates a frame that can be screenshot, and that frame is exactly the
configuration being avoided.

What is allowed: the whole lockup fades, or the whole lockup scales uniformly
from 98% to 100% across the mark-in phase. Nothing else.

---

## 5. Audio and captions

- No audio sting is specified. If one is added, it ends before the hold ends,
  never during the fade out.
- If a URL or call to action is needed, it goes **below** the lockup, outside the
  clear space, at no more than 40% of the tagline's cap height, in `ink-100`. It
  fades in with the mark, not separately.

---

## 6. Delivery

- Export at the source resolution. Do not upscale.
- H.264, high profile, constant frame rate, matching the parent edit.
- Colour: sRGB / Rec. 709. The navy is a flat fill and will band visibly under
  aggressive compression, so keep the bitrate above 10 Mbps at 1080p, or supply
  the end card as a still and cut to it.
