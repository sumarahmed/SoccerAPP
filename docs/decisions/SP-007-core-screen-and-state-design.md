# SP-007 — Core screen and state design

| Field | Decision |
|---|---|
| Source issue | SP-007 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Acceptance criterion | AC-SP-007-01 through AC-SP-007-03 |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Review status | Accepted as the labelled design handoff; implementation and device evidence remain later gates |

Syed Ahmed accepted SP-007 after accepting SP-077 and reviewing the integrated
F01–F13 handoff. The accepted scope includes the youngest-player and adult
routes, portrait and landscape practice treatment, parent/adult controls, the
large practice timer, truthful recording state, interruption, quota and
per-copy deletion states.

## Accepted evidence

- [ACT-SP-007-01 core screen and state handoff](../design/ACT-SP-007-01-core-screen-handoff.md).
- [Interactive labelled F01–F33 review](../design/prototypes/soccolo-screen-review.html).
- [Versioned screen/state fixture](../../contracts/design/sp007-sp038-screen-states.json).
- [Integrated SP-007/SP-038 verification](../design/SP-007-SP-038-integrated-verification.md).
- Accepted SP-077 and SP-151–SP-155 decision records.
- `node tests/design/validate-sp077-theme.cjs`.
- `node tests/design/validate-sp007-sp038-handoff.cjs`.

## Decision

The clearly labelled repository handoff is the accepted alternative to an
editable Figma file. F01–F13 retain distinct child, teen and adult language and
authority. A denied camera or microphone does not block non-recorded practice;
the recording indicator appears only after capture succeeds; unsupported dual
capture falls back truthfully; and progress never invents a talent score.

This closes SP-007 as design/specification work. It does not claim native/web
implementation, live permissions, capture behavior, database authorization,
assistive-technology results or real participant testing.
