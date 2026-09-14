# Soccolo export treatment

Version 1.2, 14 September 2026.

The controlling motion and safe-area reference is the supplied
[`soccolo-export-timing-specification.pdf`](soccolo-export-timing-specification.pdf).
It was visually reviewed on 14 September 2026 and is preserved unchanged.

## Approved treatment summary

- Total duration: 4.00 seconds at 25 or 30 fps.
- Navy field fades in from 0.00 to 0.30 seconds.
- Empty navy holds from 0.30 to 0.50 seconds.
- Complete lockup fades from 0% to 100% opacity from 0.50 to 0.90 seconds.
- Mark remains absolutely still from 0.90 to 3.40 seconds.
- Whole frame fades out or cuts from 3.40 to 4.00 seconds.
- Use `cubic-bezier(0.33, 0, 0.15, 1)` for both fades.
- The mark may optionally scale uniformly from 98% to 100%; no element or geometry may animate independently.
- Preserve the PDF's crop-specific 16:9, 1:1 and 9:16 safe areas.

The PDF is authoritative if this summary is ever inconsistent with it.
