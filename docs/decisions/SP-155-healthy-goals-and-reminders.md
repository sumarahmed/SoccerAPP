# SP-155 — Healthy weekly goals and reminders decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Source issue | SP-155 |
| Acceptance criterion | AC-SP-155-01 through AC-SP-155-03 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, founder/product owner |
| Coaching reviewer | Aaron M, A Diploma |
| Review status | Accepted product/coaching design; child-wellbeing/copy and runtime gates retained before real minor notifications |
| Repository base | `099c4b068503931bab2ad21e1ede6e628e4b81ed` on `main` before the accumulated SP-152–SP-155 revision |

## 1. Accepted evidence

- [ACT-SP-155-01 goals and milestones](../design/ACT-SP-155-01-goals-and-milestones.md), `sp155-v1`.
- [ACT-SP-155-02 reminder policy](../design/ACT-SP-155-02-reminder-policy.md), `sp155-v1`.
- [ACT-SP-155-03 acceptance evidence](../design/ACT-SP-155-03-acceptance-evidence.md), version 1.0.
- [Shared SP-154/SP-155 synthetic contract](../../contracts/design/sp154-sp155-fixtures.json).
- [Dependency-free validator](../../tests/design/validate-sp154-sp155-contract.cjs).

## 2. Recorded human review

Syed Ahmed and Aaron M approved the recommended default-off goals, 1–3 session
limit, safe early-stop participation, one count per stable session, no
coach-imposed household goal, default-off one-per-week adult reminder, one
designated adult recipient, 20:00–08:00 quiet hours, Monday local week,
private/break-resilient milestones, lawful-deletion recomputation and complete
exclusion of streak pressure, rankings, points and automatic difficulty changes.

## 3. Accepted design outcomes

1. Goals are optional and cannot alter access, content, workload, assessment or progression.
2. Active, safely finalized practice counts once even after an early safe stop; retries cannot duplicate it.
3. Missed weeks and rest produce no debt, loss or pressure.
4. Milestones are private, factual, idempotent and deletion-aware.
5. Reminders are adult-controlled, quiet-hour aware, neutral, deduplicated and revoked with authority.

## 4. Limits retained

- Real minor notification copy/comprehension requires named child-wellbeing or safeguarding review.
- No runtime notification, goal store, timezone/DST transition or participant evidence exists yet.
- Material goal, reminder, milestone, counting, quiet-hour or recipient changes require a new reviewed version.
