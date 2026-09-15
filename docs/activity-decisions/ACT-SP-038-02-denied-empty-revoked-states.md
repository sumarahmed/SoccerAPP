# ACT-SP-038-02 — Denied, empty and revoked states acceptance

| Field | Recorded value |
|---|---|
| Activity | ACT-SP-038-02 |
| Source issue | SP-038 |
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Acceptance scope | Paired error/revocation and responsive design direction only; ACT-SP-038-03 and SP-038 remain open |
| Repository base | `32deae4df0f0903a892abb0bdf183657d9642508` on `main` |

Syed Ahmed reviewed the interactive handoff and locked the SP-038 design on 15
September 2026.

## Accepted evidence

- [Denied, empty, revoked and responsive states](../design/ACT-SP-038-02-denied-empty-revoked-states.md), version 1.0.
- [Interactive screen review](../design/prototypes/soccolo-screen-review.html), version 0.1 handoff.
- [Screen/state contract](../../contracts/design/sp007-sp038-screen-states.json), including all F14–F22 named states.

## Accepted direction

- Empty, loading, denied, pending, expired, revoked, suspended/read-only,
  conflict, partial/offline, failed and withdrawn states state what happened,
  what remains available and the safe next action without disclosing another
  workspace or person.
- Current authority is refreshed and deletion/withdrawal/revocation is applied
  before stale queued commands or cached content.
- Narrow layouts convert tables to labelled cards without losing actor,
  resource, status, expiry or action context.
- Keyboard focus, announcements, visible state text and scoped destructive
  confirmations remain explicit implementation obligations.

## Retained limits

No responsive browser, accessibility technology, role change, queued command or
revocation was executed. Final SP-038 acceptance remains blocked by SP-007 and
ACT-SP-038-03 evidence.
