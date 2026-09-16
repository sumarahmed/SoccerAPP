# ACT-SP-152-03 — Acceptance evidence

| Field | Value |
|---|---|
| Evidence version | `1.0` |
| Ruleset | `sp152-v1` |
| Accountable owner | Syed Ahmed, founder/product owner |
| Coaching reviewer | Aaron M, A Diploma |
| Decision | Recommendations jointly approved for the pilot on 16 September 2026 |
| Device evidence | Not applicable; this activity verifies a portable rules/fixture contract |

| Criterion | Result | Evidence |
|---|---|---|
| AC-SP-152-01 required cases | Pass | Concrete fixtures cover no equipment, limited time, missed session, younger advanced player, older beginner and conflicting assignments |
| AC-SP-152-02 one action or explicit none | Pass | Every fixture has one exact action or `null`, stable reason code and explanation |
| AC-SP-152-03 no completion escalation | Pass | Invariants and a completion fixture prohibit ability, progression and workload changes without coach-approved reassessment |

## Verification

Run from the repository root:

```powershell
node tests/content/validate-sp151-sp153-contract.cjs
```

The validator checks approval metadata, exact editable/immutable fields,
precedence, full-duration handling, assignment conflict behavior, same-day/24h
offline limits, reassessment authority and all concrete fixture results.

## Retained limits

- This is a deterministic design contract, not a deployed evaluator or Today-screen implementation.
- Runtime work must reconstruct authority and current resource state on the server; a fixture PASS cannot prove API, database, offline-device or authorization enforcement.
- The evaluator may select only accepted SP-151 variants. New prescriptions, AI technique scoring and automatic workload increases remain excluded.
