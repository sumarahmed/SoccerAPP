# SP-077 — Paired theme components and screen states

| Field | Decision |
|---|---|
| Source issue | SP-077 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Acceptance criterion | AC-SP-077-01 through AC-SP-077-04 |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Review status | Accepted for design handoff; native-device and assistive-technology verification remains an implementation-stage obligation |

Syed Ahmed explicitly accepted the SP-077 design on 16 September 2026. The
accepted baseline is the paired Light, Dark and Follow-device token/component
contract, the F01–F33 paired state inventory and the supportive SP-155 states.

## Accepted evidence

- [Paired theme tokens and components](../design/ACT-SP-077-01-paired-theme-tokens.md).
- [Paired F01–F33 state inventory](../design/ACT-SP-077-02-paired-f01-f33-states.md).
- [ACT-SP-077-03 acceptance evidence](../design/ACT-SP-077-03-acceptance-evidence.md).
- [Interactive labelled handoff](../design/prototypes/soccolo-screen-review.html).
- `node tests/design/validate-sp077-theme.cjs`.
- `node tests/design/validate-sp007-sp038-handoff.cjs`.

## Decision

The design follows the device appearance setting by default, retains an
explicit Light/Dark override, uses the measured accessible contrast pairs and
covers recording, identity, error, billing, goals, rest, missed-week, opt-out
and supportive-return states in both modes.

This closes SP-077 as design/specification work. It does not claim that a
Flutter/web implementation, physical device, large-text mode, screen reader,
switch input, outdoor display or live theme transition has been tested.
