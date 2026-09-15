# ACT-SP-155-02 — Adult reminder and week-boundary policy

| Field | Recommended pilot value |
|---|---|
| Reminder default | Off |
| Recipient | Authorized adult account; no child-directed push |
| Frequency ceiling | One scheduled reminder per player per local week; no nagging follow-up |
| Quiet hours | 20:00–08:00 in the adult's selected IANA timezone |
| Week | Monday 00:00 through Sunday 23:59:59 in that timezone |
| Retry | One idempotent retry inside the permitted window; never cross a week boundary |

The adult explicitly chooses the player, local day/time and timezone. A timezone
change recomputes future reminders only and never duplicates the current week.
Delivery after quiet-hours entry moves to the next permitted time only when it
is still useful that week; otherwise it is skipped. Offline devices may display
a queued local reminder only if the current preference/generation is known.

Disabling reminders or goals immediately prevents new schedules. Cancellation,
adult transition, guardian revocation, account restriction or deleted player
context invalidates older queued notifications. Notification surfaces contain
only neutral copy and no performance, video, club, coach or child-sensitive
detail.

Example copy: `A Soccolo practice is available when it suits your family.` The
app does not say `Don't lose your streak`, `You're behind`, `Your coach is
waiting` or make unsupported promises about improvement.
