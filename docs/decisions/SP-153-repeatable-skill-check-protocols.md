# SP-153 — Repeatable skill-check protocol decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Source issue | SP-153 |
| Acceptance criterion | AC-SP-153-01 through AC-SP-153-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, founder/content owner |
| Coaching reviewer | Aaron M, A Diploma |
| Review status | Product-owner and qualified-coach pilot approval recorded; participant/runtime evidence remains later work |
| Repository base | `099c4b068503931bab2ad21e1ede6e628e4b81ed` on `main` before the accumulated SP-152/SP-153 revision |

## 1. Accepted evidence

- [ACT-SP-153-01 skill protocols](../content/ACT-SP-153-01-skill-protocols.md), `sp153-v1`.
- [ACT-SP-153-02 comparability and corrections](../content/ACT-SP-153-02-comparability-corrections.md), `sp153-v1`.
- [ACT-SP-153-03 acceptance evidence](../content/ACT-SP-153-03-acceptance-evidence.md), version 1.0.
- [Shared portable fixture contract](../../contracts/content/sp151-sp153-fixtures.json), `soccolo-sp151-sp153-foundation-v1`.
- [Dependency-free validator](../../tests/content/validate-sp151-sp153-contract.cjs).

## 2. Recorded human review

Syed Ahmed accepted the SP-153 recommendations after the prior Aaron M coaching
review. The accepted pilot decisions are the three protocol definitions, one
unscored familiarisation attempt/set, seven-day comparable retest interval, one
replacement for each externally invalid attempt, `NO_RESULT` boundary,
attributed observation sources and parent limits, expanded comparison fields,
standalone early retests and append-only corrections.

## 3. Accepted outcomes

1. D01, D03 and D05 have repeatable, versioned personal skill checks.
2. Unsuccessful execution remains a valid measured outcome; external invalidity
   and inability to safely complete the protocol produce an invalid/no-result state.
3. Comparison requires matching protocol and material conditions and is always
   against the player's own comparable history.
4. Recording is optional; observation provenance and parent limitations remain visible.
5. No age norms, rankings, talent scores, automatic technique certification or
   automatic pathway/ability changes are authorized.

## 4. Limits retained

- Runtime assessment records, corrections, comparison UI and participant
  evidence remain implementation and pilot-validation work.
- This content decision is not medical advice or proof that every player can
  safely perform a protocol in every environment.
- Protocol changes require a new immutable reviewed version.
