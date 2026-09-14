# Soccolo provisional export-intro storyboard — v0.2

Status: visual composition candidate for SP-080; timing, transition, audio and sharing authority are not approved by SP-076.

## Fixed visual input

- Canvas: 1920 × 1080, 16:9.
- Background: solid navy `#0B1D2A`.
- Identity: reversed horizontal lockup using white and mint.
- Asset: `soccolo-export-intro-frame-16x9.svg`; deterministic review PNG supplied.
- Safe area: all identity geometry remains within the centre 60% width and 40% height.
- No gradients, glow, footage, child imagery, overlays, timer, sponsor mark or additional outro.

## Proposed handoff for ACT-SP-080-01 review

| Export time | Visual | Audio | Decision state |
|---:|---|---|---|
| 0.00–1.60 s | Fixed navy Soccolo frame | Preserve the approved export-audio rule; do not create sound when the source is silent | Proposed, not approved |
| 1.60–2.00 s | Brief dissolve from identity frame to source footage | No added sting or effect by default | Proposed, not approved |
| 2.00 s onward | Original/source-derived footage begins at its own zero point | Source/export audio treatment per SP-080 | Proposed, not approved |

The proposed two-second intro is export time, not training time. The original capture remains unchanged. Cancellation, low-space behavior, orientation, exact time-base mapping and deliberate sharing authority must be specified and accepted in SP-080 before implementation.

Alternative aspect ratios must be recomposed from the SVG master; do not crop the wordmark or simply stretch the 16:9 frame.
