# SP-038 — Administration and membership flows

| Field | Decision |
|---|---|
| Source issue | SP-038 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Acceptance criterion | AC-SP-038-01 through AC-SP-038-04 |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Review status | Accepted as the labelled design handoff; implementation and runtime authorization evidence remain later gates |

Syed Ahmed accepted ACT-SP-038-03 and its recommendations after accepting the
SP-007 predecessor. This completes the F14–F22 administration design family and
the affected F01/F03/F11/F12 states.

## Accepted evidence

- [Administration journeys and field inventory](../design/ACT-SP-038-01-administration-journeys.md).
- [Denied, empty, revoked and responsive states](../design/ACT-SP-038-02-denied-empty-revoked-states.md).
- [ACT-SP-038-03 integrated acceptance evidence](../design/ACT-SP-038-03-acceptance-evidence.md).
- [Interactive labelled handoff](../design/prototypes/soccolo-screen-review.html).
- [Versioned screen/state fixture](../../contracts/design/sp007-sp038-screen-states.json).
- `node tests/design/validate-sp007-sp038-handoff.cjs`.

## Decision

The accepted design keeps workspace, role, guardian authority, club billing,
recording consent and private-media access separate. Invitation, draft, review,
approval, publication, withdrawal, assignment, attendance and sharing remain
distinct attributable actions. Denied and revoked states disclose no unrelated
person or workspace, and narrow layouts preserve actor, resource, state, expiry
and action context.

This closes SP-038 as design/specification work. It does not claim a working
portal, server/database authorization, real role revocation, responsive browser
results, assistive-technology results or participant testing.
