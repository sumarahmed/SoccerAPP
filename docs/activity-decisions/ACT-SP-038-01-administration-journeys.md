# ACT-SP-038-01 — Administration journeys acceptance

| Field | Recorded value |
|---|---|
| Activity | ACT-SP-038-01 |
| Source issue | SP-038 |
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Acceptance scope | Administration journey design direction only; ACT-SP-038-03 and SP-038 remain open until SP-007 is accepted and integrated evidence passes |
| Repository base | `32deae4df0f0903a892abb0bdf183657d9642508` on `main` |

Syed Ahmed reviewed the interactive F01–F22 handoff on 15 September 2026,
stated that he liked the SP-038 design and instructed that it be locked in.

## Accepted evidence

- [Administration journeys and field inventory](../design/ACT-SP-038-01-administration-journeys.md), version 1.0.
- [Interactive screen review](../design/prototypes/soccolo-screen-review.html), version 0.1 handoff.
- [Screen/state contract](../../contracts/design/sp007-sp038-screen-states.json), version 1.0 SP-038 direction accepted/SP-007 review.

## Accepted direction

- F14–F22 use independently selected family/club/team scopes with no authority
  carried across workspace changes.
- Invitations, plan drafts, reviews, approval, publication, withdrawal,
  assignment, attendance and sharing remain separate attributable operations.
- Plans bind exact approved content versions; editing creates a new draft and
  does not rewrite active or completed history.
- Club and coach roles do not create guardianship, cloud/recording consent or
  private-media access.
- Coach feedback remains structured and does not create unrestricted private
  adult–child messaging.

## Retained limits

This is activity-level design acceptance. SP-007 remains a formal predecessor,
and no implementation, database/API authority, browser/device behavior,
assistive technology, provider or real-user flow was tested. SP-038 remains
open for final integrated verification and product-owner acceptance.
