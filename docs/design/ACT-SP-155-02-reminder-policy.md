# ACT-SP-155-02 — Adult reminder and week-boundary policy

| Field | Accepted pilot value |
|---|---|
| Version | `sp155-v1` |
| Reminder default | Off |
| Recipient | One designated currently authorized adult per player; no child-directed push |
| Frequency ceiling | One scheduled reminder per player per local week; no follow-up nag |
| Quiet hours | 20:00–08:00 in the adult-selected IANA timezone |
| Week | Monday 00:00 through Sunday 23:59:59 in that timezone |
| Retry | Idempotent within the permitted window; never cross a week boundary |

The adult explicitly chooses the player, recipient, local day/time and IANA
timezone. The delivery identity contains player, local week start, reminder type
and preference generation. Multiple guardians cannot produce multiple weekly
reminders for one player.

A recipient or timezone change affects future scheduling only and cannot create
a second reminder in the current week. Daylight-saving transitions, travel,
retry, offline synchronization and device changes preserve the same delivery
identity. Delivery after quiet-hours entry moves to the next permitted time only
when still useful in that week; otherwise it is skipped.

Offline delivery requires a current known preference generation and expires at
the local week boundary. Disabling goals/reminders cancels future schedules.
Guardian revocation/dispute, adulthood, account restriction, deleted player
context or loss of recipient authority invalidates queued notifications.

Notification surfaces contain neutral copy and no child name, performance,
video, club, coach, assignment or report detail. If notification permission is
disabled, settings show that state without repeated prompts or pressure.

The app never says `Don't lose your streak`, `You're behind`, `Your coach is
waiting` or makes unsupported improvement promises.
