# SP-152 — Deterministic next-session rules decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Source issue | SP-152 |
| Acceptance criterion | AC-SP-152-01 through AC-SP-152-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, founder/product owner |
| Coaching reviewer | Aaron M, A Diploma |
| Review status | Product-owner and qualified-coach pilot approval recorded; runtime implementation remains a later gate |
| Repository base | `099c4b068503931bab2ad21e1ede6e628e4b81ed` on `main` before acceptance revision |

## 1. Accepted evidence

- [ACT-SP-152-01 deterministic recommendation rules](../content/ACT-SP-152-01-recommendation-rules.md), `sp152-v1`.
- [ACT-SP-152-02 concrete recommendation fixtures](../content/ACT-SP-152-02-recommendation-fixtures.md), `sp152-v1`.
- [ACT-SP-152-03 acceptance evidence](../content/ACT-SP-152-03-acceptance-evidence.md), version 1.0.
- [Shared portable fixture contract](../../contracts/content/sp151-sp153-fixtures.json), `soccolo-sp151-sp153-foundation-v1`.
- [Dependency-free validator](../../tests/content/validate-sp151-sp153-contract.cjs).

## 2. Recorded human review

Syed Ahmed and Aaron M approved the recommended pilot precedence, workload and
conflict boundaries, editable inputs, reassessment authority, age/ability
ordering, no-equipment behavior, full-duration rule, missed-session behavior and
same-day offline validity with a hard 24-hour maximum.

## 3. Accepted outcomes

1. Safety/content approval, current authority/context, age/supervision,
   resources, workload and pathway order are evaluated in a fixed precedence.
2. A result contains one exact SP-151 variant or an explicit no-action reason.
3. Conflicting assignments are explained and never merged; a missed activity is
   never stacked onto later workload.
4. Adults may edit only today's resource constraints and choose only from exact
   returned alternatives. They cannot edit assessed ability or prescriptions.
5. Completion alone cannot change assessed ability, progression or workload.
6. Offline use displays an unexpired signed recommendation without recalculation
   and stops at the earlier signed expiry/end-of-day boundary, maximum 24 hours.

## 4. Limits retained

- SP-157 must implement the evaluator and Today integration and provide runtime
  evidence for server authority, current assignments, offline behavior and UI.
- No generative prescription, automatic technique scoring, silent conflict
  resolution or automatic workload increase is authorized.
- A change to precedence, editable fields, conflict policy, expiry, reassessment
  authority or output semantics requires a new reviewed contract version.
