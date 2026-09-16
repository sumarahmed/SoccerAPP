# ACT-SP-155-03 — Acceptance evidence

| Field | Value |
|---|---|
| Evidence version | `1.0` |
| Contract | `sp-154-sp-155-lean-pilot-v1` / `sp155-v1` goals section |
| Accountable owner | Syed Ahmed, founder/product owner |
| Coaching reviewer | Aaron M, A Diploma |
| Decision | Product/coaching recommendations accepted 16 September 2026 |
| Device/runtime evidence | None; specification and synthetic scenarios only |

| Criterion | Result | Evidence |
|---|---|---|
| AC-SP-155-01 healthy goal behavior | Pass for design | Default-off 1–3 session goal, safe early-stop counting, stable-ID deduplication, missed-week/rest behavior and no automatic workload/content change are explicit |
| AC-SP-155-02 equivalent opt-out access | Pass for design | Opt-out preserves training access; recording, rankings, points, streak pressure and competitive-minute targets are excluded |
| AC-SP-155-03 milestones and reminders | Pass for design | Private idempotent milestones, deletion recomputation, one designated adult reminder, one-per-week ceiling, quiet hours and timezone/retry boundaries are explicit |

## Verification

Run from the repository root:

```powershell
node tests/design/validate-sp154-sp155-contract.cjs
```

The validator checks goal authority/defaults/limits, active-practice counting,
safe early stop, stable session deduplication, goal changes, deletion and
anti-resurrection, designated adult delivery, quiet hours, local-week identity,
timezone/DST behavior, revocation and notification-permission handling.

## Retained gates

- A safeguarding/child-wellbeing reviewer must confirm final child-facing copy and comprehension before real minor notifications.
- No notification service, device, timezone transition, participant comprehension or runtime goal store was tested.
- Implementation must prove deduplication, revocation, deletion suppression and authorized-context visibility.
