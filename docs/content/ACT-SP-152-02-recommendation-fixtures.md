# ACT-SP-152-02 — Recommendation fixtures

| Required case | Expected deterministic result |
|---|---|
| No equipment | Offer the named no-equipment/easier approved alternative; otherwise no recommendation |
| Limited time | Offer one eligible short activity; never compress or combine workload |
| Missed session | Resume the current eligible step; no punishment or automatic jump |
| Younger advanced player | Apply age/supervision gates before ability; offer only an age-suitable approved variant |
| Older beginner | Offer the foundation variant using neutral language |
| Conflicting club assignments | Current authorized club assignment wins; do not combine workloads |

Machine-readable inputs, outputs, explanations, missing-input and offline cases are in `contracts/content/sp151-sp153-fixtures.json`.
