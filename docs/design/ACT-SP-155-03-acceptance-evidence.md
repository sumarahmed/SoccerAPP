# ACT-SP-155-03 — Acceptance evidence

| Field | Value |
|---|---|
| Evidence version | 0.1 recommended contract verification |
| Prepared | 15 September 2026 |
| Result | Specification and synthetic cases pass; product/coach/safeguarding acceptance pending |

- AC-SP-155-01 is covered by a default-off 1–3 optional session goal, private
  non-performance milestones, rest/Stop/missed-week behavior and no automatic
  content/workload change.
- AC-SP-155-02 is covered by equivalent access after opt-out, optional recording
  and explicit exclusion of rankings, points, streak pressure and competitive
  minutes targets.
- AC-SP-155-03 is covered by persistent earned milestones, reminders off,
  one-per-week ceiling, adult-only delivery, 20:00–08:00 quiet hours, timezone
  rules and idempotent retry.

Synthetic verification is implemented in
`tests/design/validate-sp154-sp155-contract.cjs`. No notification, device,
timezone transition, child/guardian comprehension or runtime goal was tested.
Syed Ahmed must accept the proposed numeric values; any different coach limit
creates a new version rather than silently changing this contract.
