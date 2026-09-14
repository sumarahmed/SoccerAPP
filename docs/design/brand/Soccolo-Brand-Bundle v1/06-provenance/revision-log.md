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
o and c, so it belongs in the word while remaining original artwork the brand
owns outright. This is the normal professional arrangement: the retypeable part
comes from a font, the ownable part does not. It also leaves the similarity
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

## Known limitations of v1.1

Stated here rather than discovered later.

- At 16 px neither symbol variant holds the dot cleanly. See
  `../03-app/proofs/small-size-proof.png`. Options are set out in the usage
  specification, section 8.
- The wordmark is not exclusive. Anyone with Poppins can set the word and reach
  the same letterforms. Protection for the name rests on trade mark
  registration, not on the artwork. The symbol is the exclusive part.
- Minimum sizes for embroidery, etching, debossing and vinyl are not set.
  Physical trials are required.
- The prior sketch's provenance is not established, and the name, tagline and
  symbol concept all originate there.
- Clearance searching is outstanding. See `similarity-review.md`, section 4.
