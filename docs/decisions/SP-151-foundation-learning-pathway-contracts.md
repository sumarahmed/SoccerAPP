# SP-151 — Foundation learning pathway contract decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Source issue | SP-151 |
| Acceptance criterion | AC-SP-151-01 through AC-SP-151-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, founder/content owner |
| Coaching reviewer | Aaron M, A Diploma |
| Review status | Owner acceptance and qualified-coach pilot approval recorded; runtime and asset-release evidence remain separate gates |
| Repository base | `e650279f48cc18af556d3a39357a10d6496bc95c` on `main` before acceptance revision |

## 1. Accepted evidence

- [ACT-SP-151-01 pathway coverage](../content/ACT-SP-151-01-pathway-coverage.md), version 1.0.
- [ACT-SP-151-02 eligibility and parent guidance](../content/ACT-SP-151-02-eligibility-parent-guidance.md), version 1.0.
- [ACT-SP-151-03 acceptance evidence](../content/ACT-SP-151-03-acceptance-evidence.md), version 1.0.
- [Portable SP-151–SP-153 fixture contract](../../contracts/content/sp151-sp153-fixtures.json), `soccolo-sp151-sp153-foundation-v1`.
- [Dependency-free validator](../../tests/content/validate-sp151-sp153-contract.cjs).

## 2. Recorded human review

Syed Ahmed accepted every recommendation from the SP-151 family review and
confirmed that Aaron M reviewed and passed the proposed coaching decisions for
the pilot. Aaron's approval covers the four pathway families, D01–D10
`base.v1` promotion, age-banded endpoints, exact branches and fallbacks,
coach-controlled progression, advisory position relevance, supervision and
parent setup guidance.

The approved D01–D10 content is frozen against
`docs/design/soccer_pilot_and_design_pack.md` SHA-256
`2C7A98FF06845863CAB03648CFD7115E744A8832D3B2B3B44DB62B1D8D1AC43D`.

## 3. Accepted outcomes

1. Four pilot pathway families have learning goals, entry requirements,
   age-banded ordered exact variants, coach-controlled progression, exact next
   actions and exact easier alternatives.
2. Ages 5–7, 8–10 and 11–18 receive explicit eligible routes or endpoints; the
   system does not silently truncate a pathway.
3. Age suitability and assessed ability remain separate. Older beginners use
   neutral language and position relevance is advisory.
4. Missing, withdrawn, unapproved or superseded content blocks its affected
   route or branch without inventing a replacement.
5. D11 and D12 remain unavailable for the initial release. Twelve is a pilot
   review set and not a future authoring limit.
6. Parents may record practice, but only coach-approved assessment evidence may
   change ability, progression or branch selection.

## 4. Acceptance assessment

- **AC-SP-151-01 — Accepted:** every offered age route has an exact start,
  ordered variants and an exact repeat, return or branch action.
- **AC-SP-151-02 — Accepted:** eligibility separates age from ability and
  includes mature older-beginner language plus pathway-specific parent setup.
- **AC-SP-151-03 — Accepted:** the contract and validator enforce affected-route
  blocking, D11/D12 deferral and an extensible catalogue.

## 5. Limits retained

- This closes SP-151 as a pilot design/content contract; it is not evidence that
  a runtime recommendation engine, mobile client or backend has implemented it.
- SP-006 retains animation source, rights, accessibility, rendered-result and
  participant-release gates. This decision does not release participant media.
- Any material coaching, age, safety, setup, sequence, progression or variant
  change requires a new immutable contract version and affected review.
- Product/runtime work must test actual missing, withdrawn, stale and
  age-ineligible cases when it consumes this contract.
