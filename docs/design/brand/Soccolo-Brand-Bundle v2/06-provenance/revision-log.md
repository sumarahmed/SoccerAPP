# Soccolo, revision log

The sequence of decisions taken during creation, Sep 14, 2026. Recorded because
a provenance bundle that shows only the finished artwork proves nothing about
how it got there.

---

## v0, prior sketch (date and author not established)

Supplied as two raster images. Established: the name SOCCOLO, the tagline
"Train, Play, Grow", a double-C symbol concept, a navy-mint-green palette
(`#0D202A`, `#59EFB5`, `#126640`), and a horizontal-plus-app-icon lockup family.

Issues identified on inspection:

- Mint accent specified on both light and dark grounds. On white it measures
  roughly 1.4:1, well below any usable threshold.
- Standalone symbol showed the two C forms overlapping, the closest possible
  approach to protected interlocking opposed-C monograms.
- Wordmark appeared to be set in a typeface, carrying an unrecorded font licence.
- No optical size variant, so the symbol could not survive tile sizes.

---

## Directing decisions, taken in session

| # | Question put | Decision |
|---|---|---|
| 1 | How far should the symbol move? | Rebuild the double C precisely, and develop one genuinely different alternate |
| 2 | How to build the letterforms? | Custom-drawn outlines, no typeface |
| 3 | Keep the palette? | Rework it from scratch |
| 4 | Standard of craft | Construction discipline comparable to Apple's |

---

## v1.0 build sequence

**Palette.** Re-derived as two ramps, ink and pitch, with the accent split into
two values: mint for dark grounds, deep green for light. Nine required contrast
pairs defined with floors, and a validator written that fails the build if any
pair drops below its floor. All nine pass with headroom.

**Construction engine.** Skeleton-to-outline system: centrelines of circular
arcs and straight lines, offset exactly by half the stroke weight to each side.
Offsetting an arc is exact (a concentric arc) and offsetting a line is exact, so
nothing in the artwork is an approximated curve. Corners between straight
offsets are mitred to their true intersection; other corners are bevelled.

**Letterforms.** Drawn on a shared grid: cap 100, x-height 72, stem 19, round
stroke 18.43, overshoot ±1.5. Two optical sizes, because the tagline is set
small and needs a relatively heavier stem than the wordmark.

Corrections made during drawing, each caught by rendering and looking:

- The S was too narrow at first. Its width is controlled solely by the
  horizontal offset between its two tangent bowls, since tangency fixes the sum
  of the radii once the cap height is set. Offset raised to 11.8% of the cap.
- The S's terminals wrapped too far and read as a spiral. Cut back to -6° and
  174°.
- The `w` and `y` had spiked vertices and terminals cut square to the stroke
  rather than to the baseline. A horizontal-terminal option was added to the
  engine and applied.
- **The G read as an `e`.** The aperture had been placed below the crossbar. In
  a G the aperture sits above the bar; below it, the same anatomy is an `e`.
  Rebuilt as one continuous stroke: ring, short vertical wall, crossbar turning
  left.
- The P's bowl did not meet its stem solidly. The arc was extended a few degrees
  past the stem at both ends.

**Symbol.** Built from the same circle, stroke and aperture as the letter c, so
it is the "cc" of the word rather than a drawing that resembles it.

- First construction had both apertures facing outward, which put the dot
  against two closed backs and fused it to both. Corrected so the apertures face
  inward and the dot is cradled.
- Separation set so the dot clears each aperture by 7.50 units (0.39 stems),
  measured rather than intended.
- A small-size optical variant added: wider aperture, thicker stroke, greater
  separation, for use below 24 px.

**Alternate symbol, Orbit.** Two broken concentric rings around the same dot.
Square, so it solves the app-tile and 16 px favicon problems the primary mark
has, and it contains no letter C at all. Built to finished standard, not as a
sketch, so that an unfavourable clearance result does not restart the project.

**Lockups.** The stacked symbol was initially used at its inline size and read
as a dropped letter pair. Scaled against the width of the word beneath it, which
is the measure the eye compares: 50% for the double C, 30% for the square Orbit.

**Clear space and minimum size.** Clear space set at two dot diameters, chosen
because the dot is a visible part of the mark and can be measured off a printed
sheet. Minimum sizes derived by rendering each lockup at a ladder of real pixel
widths and reading the result, not by applying a rule of thumb.

**Distancing changes made for the reasons in `similarity-review.md`:**

1. The two c-forms never touch or overlap, at any size or in any variant.
2. The dot was made structural rather than decorative.
3. Terminals cut radially, giving square stroke ends rather than tapered ones.
4. Animation of the mark's own geometry prohibited in the export treatment, so
   that no frame can be produced in which the forms interlock.

---

## v1.1, same day, after review

The first version's letterforms were constructed from circles and straight lines
by the generator. On review two defects were identified, both correctly:

1. **The S was skewed.** Its two bowls had been offset sideways by 11.8 units to
   widen the letter, which tilted the whole glyph off its vertical axis. The
   offset was removed. A geometric cap S is simply narrower than a lowercase o,
   and that is correct.
2. **The tagline was unevenly fitted.** The baseline was sound, but the spacing
   rhythm was not, and several glyphs were weak: the `w` had a low middle apex
   and splayed arms, the `P` bowl was too small and set too high, the `y` was
   splayed with a flat-cut descender, the `a` showed a step where bowl met stem,
   and the commas were a blob with a stub tail.

The S correction fixed the tilt but not the underlying limit. An S built from
two tangent circles has the sum of its bowl radii fixed by the cap height, so
its counters cannot open up. Poppins achieves larger counters at a heavier
stroke because its bowls are not circles at all. That is a limit of the drawing
method, not of the drawing, and it settled the decision.

**The wordmark and tagline are now set in Poppins SemiBold (SIL OFL 1.1).** The
eleven glyphs the tagline needs are the work of a type designer rather than a
generator, and it shows in the fitting as much as in the letterforms.

**The symbol stayed constructed.** It is not the typeface's c. It is drawn from
ellipses whose axes, stroke weights and aperture are measured off the font's own
o and c, so it belongs in the word while remaining separately constructed
geometry. This improves the provenance record without deciding copyright,
exclusivity or trade-mark clearance. It also leaves the similarity
argument intact, since the symbol is still constructed and still documented.

Re-solved as a consequence:

- The symbol now occupies **exactly the width of two c's** as the font sets them,
  so the word's rhythm runs straight through the device. Earlier it ran about
  nine units wide and opened a visible hole in the middle of the word.
- The aperture opens to ±27.3° from the letter's own ±18.6°, because Poppins's c
  is closed enough that the dot had nowhere to sit. This is the one place the
  symbol deliberately departs from the letterforms.
- The dot grew to 22.79, which improved small-size performance: at 24 px it now
  separates cleanly where before it was welding to the terminals.
- The clear-space unit changed with it, from 20 to 22.79.
- The minimum for the horizontal-with-tagline lockup dropped from 170 px to
  140 px, because Poppins's higher x-height holds better small.

The constructed letterform module was retired from the build. The construction
engine it used survives in `geom.py`, which still draws both symbols.

---

## v1.2, same day: print artwork and the timing specification

Two gaps closed, and one defect found while closing them.

**Outlines now carry real curves.** The font outlines had been flattened to
polylines, 254 points around a single lowercase o. The chord error at a
metre-wide wordmark was about 0.02 mm, so it would have printed correctly, but
the artwork was uneditable: several hundred anchor points per word, which no
designer can adjust and no printer should have to handle. Quadratic and cubic
segments are now preserved end to end, through the path translator and into the
PDF writer. Path data fell from 27 KB to 4.6 KB per wordmark with no change to a
single measured dimension.

Found while doing it: the path translator did not move curve control points,
only endpoints. It had never been exercised on curves before, so nothing was
wrong in the shipped files, but it would have silently distorted any translated
curve. Fixed, and it now raises on an unknown command rather than passing it
through.

**Print artwork, in CMYK.** The bundle had no PDF at all. `07-print/` now holds
56 vector PDFs: every main lockup in four colourways, written twice, once in
CMYK for press and once in sRGB for office use. They are written directly rather
than exported and converted, so the colour is specified where it will be
printed, and the CMYK files carry an embedded FOGRA39L Coated output intent. No
fonts, no transparency, non-zero winding fills, pages trimmed to the artwork plus
its clear space.

**The finding: the mint does not print.** Converting the palette through FOGRA39L
at relative colorimetric intent and measuring the round trip, `pitch-300` lands
**30.1 dE** from its screen value. Anything past about 3 dE is visible; 30 is a
different colour. The whole bright end of the green ramp is outside the gamut.
The deep green `pitch-700` converts at 0.5 dE, which is as close as process
colour gets, and it is already the accent on light grounds, so most print is
unaffected. Where the mint is genuinely required it needs a fifth plate as a spot
colour. No spot reference is given, because none has been verified against a
physical sample, and guessing one would be worse than leaving it open.

**The timing specification is now a drawing.** It had existed only as prose. It
is now a one-page sheet with the timeline against a frame-accurate axis at both
25 and 30 fps, the easing curve plotted, the three crops with their safe areas
drawn to scale, and the animation prohibition stated on the same page as the
timings it constrains. The long-form document remains alongside it.

---

## Known limitations of v1.2

Stated here rather than discovered later.

- At 16 px neither symbol variant holds the dot cleanly. See
  `../03-app/proofs/small-size-proof.png`. Options are set out in the usage
  specification, section 8.
- The wordmark is not exclusive. Anyone with Poppins can set the word and reach
  the same letterforms. Protection for the name rests on trade mark
  registration, not on the artwork. The symbol is separately constructed, but
  its legal exclusivity is not asserted by this design record.
- Minimum sizes for embroidery, etching, debossing and vinyl are not set.
  Physical trials are required.
- No spot colour is specified for the mint. A printer must match and drawdown
  one before any job that needs it.
- The CMYK build is measured against FOGRA39L Coated. Uncoated and other
  conditions will differ and need their own proof.
- The PDFs are clean CMYK vector files with an output intent, but no PDF/X
  compliance claim is made or verified.
- The prior sketch's provenance is not established, and the name, tagline and
  symbol concept all originate there.
- Clearance searching is outstanding. The founder accepted this disclosed risk
  for bundle v2; see `similarity-review.md`, sections 4 and 5.

---

## v2.0, same day: portable release and founder acceptance

- The generator now uses bundled fonts and ICC profiles, requires an explicit
  separate output directory and refuses in-place or unsafe non-empty output.
- Direct and transitive Python dependencies are pinned in `requirements.txt`.
- The two founder-supplied reference PDFs are copied unchanged rather than
  regenerated; 28 CMYK and 28 RGB placement-ready logo PDFs remain generated
  from the controlled source.
- Syed Ahmed identified the source as his Claude for Work account `sumarahmed`,
  accepted the applicable Anthropic terms and approved this bundle as the
  current launch identity on 14 September 2026.
- Syed Ahmed expressly declined to make IP Australia or external trade-mark
  clearance a condition of SP-076 completion. The double-C risk remains recorded
  and accepted, not described as cleared.
