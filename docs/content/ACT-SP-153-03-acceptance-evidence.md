# ACT-SP-153-03 — Acceptance evidence

| Field | Value |
|---|---|
| Evidence version | `1.0` |
| Protocol catalog | `sp153-v1` |
| Accountable owner | Syed Ahmed, founder/content owner |
| Coaching reviewer | Aaron M, A Diploma |
| Decision | Recommended protocols jointly approved for the pilot on 16 September 2026 |
| Device evidence | Not applicable; this activity verifies a portable content/data contract |

| Criterion | Result | Evidence |
|---|---|---|
| AC-SP-153-01 protocol identity and conditions | Pass | Three exact versioned protocols specify setup, familiarisation, measured attempts, results, assistance, observation source, safety and retest rules |
| AC-SP-153-02 comparability and no-result | Pass | Concrete fixtures distinguish matching/changed conditions, valid unsuccessful attempts, external invalidity, early retests and `NO_RESULT` without norms or talent scores |
| AC-SP-153-03 optional recording and parent limits | Pass | No-video results are valid when sufficiently observed; guardian observations remain attributed and cannot certify technique or progression |

## Verification

Run from the repository root:

```powershell
node tests/content/validate-sp151-sp153-contract.cjs
```

The validator checks the complete protocol fields, seven-day trend boundary,
single invalid-attempt replacement, observation sources, expanded comparability
fields, optional recording, standalone early retests, timer limitations and
append-only corrections.

## Retained limits

- This is a protocol contract, not evidence of actual participant assessment or runtime storage/UI.
- The skill checks inform a qualified coach; they never diagnose, rank talent or automatically change ability/pathway state.
- Material setup, validity, assistance, result or retest changes require a new reviewed protocol version.
