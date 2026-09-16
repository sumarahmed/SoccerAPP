# ACT-SP-152-02 — Recommendation fixtures

Version `sp152-v1` contains concrete machine-readable inputs and expected
outputs in `contracts/content/sp151-sp153-fixtures.json`.

| Fixture | Expected deterministic result |
|---|---|
| No ball | No action, `BALL_REQUIRED`; no drill is invented |
| Limited time | One exact activity whose full approved duration fits |
| Missed session | Resume one current eligible step; no catch-up stacking |
| Younger advanced player | Repeat the exact age-suitable step; no older-age branch |
| Older beginner | Exact foundation variant with neutral explanation |
| Conflicting club assignments | No action, `ASSIGNMENT_CONFLICT`; select/reschedule through an authorized route |
| Missing supervision input | No action, `REQUIRED_INPUT_MISSING` |
| Withdrawn next variant | No action, `CONTENT_WITHDRAWN` |
| Expired assignment | No action, `ASSIGNMENT_EXPIRED` |
| Current signed offline result | Display that one signed result without recalculation |
| Stale signed offline result | No action, `OFFLINE_RECOMMENDATION_EXPIRED` |
| Parent attempts to edit ability | No action, `EDIT_NOT_ALLOWED` |
| Completion without reassessment | Repeat the current step; assessed ability remains unchanged |
| Approved easier alternative | Return the one exact named fallback |

Each expected output has one action object or `null`, a stable reason code and a
plain-language explanation. Inputs carry sufficient age, pathway, assignment,
resource, duration, authority and freshness facts for the expected decision;
unknowns are explicit rather than inferred.
