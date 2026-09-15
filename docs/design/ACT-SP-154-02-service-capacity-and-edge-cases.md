# ACT-SP-154-02 — Service capacity and access edge cases

| Field | Recommended pilot value |
|---|---|
| Submission initiator | Authorized guardian/adult only |
| Media | Optional; text-only supported; maximum one 30-second clip |
| Open submissions | One per player; ten per coach |
| Coach response target | Three staffed business days, only after coach accepts declared capacity; not an SLA |
| Coach access | Seven days or review/withdrawal/revocation, whichever occurs first |
| Playback URL | Maximum five minutes; freshly authorized each issue |
| Coach result | One structured cue, optional 240-character clarification, up to one approved follow-up |
| Download/export | Disabled for coach |
| Notifications | Minimum neutral adult/coach status; no clip/title/report detail on lock screen |
| Monitoring promise | No 24/7 monitoring |

The queue counts only open items currently assigned to that coach. At capacity,
new submission is unavailable before any upload begins and the adult may use
the text-only self-record route or return later. Capacity never routes private
media to another coach automatically.

Preview thumbnails are private media and require the same current assignment,
purpose, player scope, MFA/session recency, grant generation and expiry checks
as playback. A list result never contains a usable object key or signed URL.

| Edge case | Required result |
|---|---|
| Adult withdraws while coach screen is open | Current check fails; preview/playback closes; neutral receipt remains |
| Seven-day access expires | No new link/preview; adult sees expired and may submit again deliberately |
| Coach removed or changes club | All affected queue/media access ends before later events are processed |
| Player becomes adult | Guardian's grant ends; adult player must create a new submission/grant |
| Submission clip fails validation | Remains unavailable; text-only route and delete/replace choices shown |
| Content follow-up withdrawn | It cannot be selected or started; use another approved eligible activity or no follow-up |
| Coach at capacity | Reject before upload and explain capacity without disclosing queue details |
| Response target missed | Show honest delayed state; do not invent a completed review or pressure the player |
| Safety concern discovered | Coach uses F32 restricted report route; no allegation appears in feedback/chat |
| Duplicate submit/retry | Same receipt and one queue item; never double-count or double-notify |

The feature remains disabled until a named coach/club owner accepts the capacity
and staffed-response wording and a safeguarding/privacy owner accepts the
visibility and reporting boundary.
