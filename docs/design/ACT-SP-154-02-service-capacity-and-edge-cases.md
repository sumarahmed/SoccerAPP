# ACT-SP-154-02 — Service capacity and access edge cases

| Field | Accepted pilot value |
|---|---|
| Service model | Club-provided/currently assigned coaches only; no Soccolo marketplace or platform-paid coaching promise |
| Submission initiator | Authorized guardian or adult player only |
| Media | Optional; text-only supported; maximum one 30-second clip |
| Open submissions | One per player; ten per coach |
| Response target | Three staffed business days after a ready item enters a capacity-accepted coach queue; not an SLA |
| Coach access | Until review, withdrawal, revocation or seven days, whichever occurs first |
| Playback URL | Maximum five minutes and freshly authorized before each issue |
| Coach result | One controlled-vocabulary cue, optional 240-character adult-first clarification, up to one exact eligible follow-up |
| Download/export/reply | Disabled |
| Notifications | Neutral adult/coach status only; no child push and no clip/title/report detail on lock screen |
| Monitoring promise | No 24/7 monitoring; F32 is a separately governed report route |

The three-business-day clock starts only after media is validated (or the item
is text-only), the submission enters the ready queue and the coach has accepted
declared pilot capacity. The queue counts open items assigned to that coach.
Capacity rejection happens before upload authorization and never reveals queue
details or reroutes media automatically.

A known over-duration clip is blocked by the client before upload where
possible. Server quarantine still validates duration, type, size and safety
because client claims are untrusted. Rejected media is never previewable; the
adult may use text-only or deliberately replace/delete it.

Prefer an expiring grant to an existing owner-controlled clip. If a temporary
review copy is required, delete only that service copy after review, withdrawal,
revocation or seven days. Never delete the family's source media. Keep only a
minimal non-media receipt unless a separately authorized safeguarding/legal
case requires restricted retention.

Preview thumbnails are private media and receive the same current context,
assignment, guardian/adult authority, player/clip grant, generation, expiry and
MFA/session checks as playback. Lists contain no object key or signed URL.

| Edge case | Required result |
|---|---|
| Adult withdraws while coach screen is open | Current check fails; preview/playback closes; minimum neutral receipt remains |
| Seven-day access expires | No new link/preview; adult may submit again deliberately |
| Coach removed, leaves or becomes unavailable | Access ends; return without review; neutral adult notice; deliberate resubmission only |
| Player becomes adult | Guardian grant ends; adult player creates a new submission/grant |
| Media validation fails | Quarantine remains inaccessible; offer text-only and deliberate replace/delete choices |
| Follow-up is withdrawn/ineligible | It cannot be delivered or started; return to exact eligible choices or no follow-up |
| Coach reaches capacity | Reject before upload authorization without disclosing queue details |
| Response target missed | Show an honest delayed state; do not invent review or pressure the player |
| Safety concern discovered | Move to restricted F32 reporting; no allegation or discussion appears in feedback |
| Duplicate submit/retry | Return the same receipt and one queue item; never double-count or double-notify |

This product/coaching design remains disabled for real children or private media
until a named safeguarding/privacy reviewer accepts visibility, adult-delivery,
reporting, retention and operating-response boundaries.
