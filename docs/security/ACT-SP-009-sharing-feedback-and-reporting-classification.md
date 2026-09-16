# ACT-SP-009 — Sharing, feedback and reporting classification

| Field | Value |
|---|---|
| Finding addressed | H4 — existing sharing omitted from social/UGC assessment |
| Version | 1.0 remediation candidate |
| Date | 16 September 2026 |
| Scope | Classify accepted sharing/feedback/reporting routes and define pilot enablement gates |
| Exclusion | Does not remediate H3 authority for other people captured in a recording |

## Route classification

| Route | Product classification | Who may initiate | Required controls | Pilot state |
|---|---|---|---|---|
| Local branded export to the operating-system share sheet | Deliberate external handoff, not an in-app public feed | Currently authorized adult; child/player mode cannot initiate | Name the exact recording/export, warn that external copies leave Soccolo control, require deliberate target selection, never preselect destination, retain no recipient/contact list by default | Design allowed; implementation and store declaration pending |
| Purpose-bound private coach media grant | In-app restricted media sharing; potentially user-supplied media and therefore assessed as a social/UGC-adjacent safety surface | Currently authorized guardian/adult for exact player/media/coach/purpose/expiry; club payment, assignment or coach role alone is insufficient | Current authorization at grant and playback, named recipient, short expiry, five-minute playback URL, revoke/report/withdraw route, no onward-share claim, no browse-all coach access, attributable audit | Disabled until implemented authorization, reporting/revocation and store assessment pass |
| Assignment completion without media | Structured club progress projection, not media sharing | Player/guardian according to current assignment scope | Media is optional; completion discloses no recording, household history or unrelated activity | Allowed by design; runtime authorization pending |
| Structured coach feedback | Bounded service response, not free-form social messaging | Assigned coach with current scope and MFA | Approved taxonomy/one cue and approved follow-up only; no unrestricted text, attachment, direct message or adult–child chat; player/guardian can report/withdraw visibility through safe route | Allowed only in structured form after runtime scope tests |
| Safeguarding/help report | Restricted safety case, not a social feed | Player, capable young person, guardian/adult or authorized staff through the applicable safe route | Trusted recipients only, no automatic disclosure to accused person, reporter-safe notifications, restricted evidence, block/escalate path | Design only; named safeguarding owner and rehearsal required before real-child use |
| Access/correction/deletion request | Rights/support workflow, not social/UGC | Verified requester or safe reporting route | Restricted case, minimal data, no public issue/ticket content, separate identity/authority decision | Design only; privacy/identity implementation pending |

## Explicitly disabled pilot capabilities

The child/family pilot has no public profile or feed, comments, likes, rankings,
stranger discovery, open groups, direct messages, group chat, unknown-recipient
media sharing, child-initiated external sharing, coach browsing of private media,
or unrestricted free-form adult–child content. An ordinary external OS share
destination is outside Soccolo control after deliberate adult handoff and must
be described that way.

## Store and safety gates

Before enabling private coach media grants or external sharing for real-child
content:

1. reconcile the route with the exact Apple age-rating/Kids-category and review
   answers and Google target-audience, social-feature and Data safety answers;
2. provide adult management, a clear safety/privacy notice and report/revoke/
   block-or-withdraw mechanisms appropriate to the route;
3. verify server authorization, recipient/purpose/expiry binding, stale-role and
   direct-link denial, audit visibility and current-grant playback;
4. demonstrate that assignment completion works without video and that revoking
   one grant does not delete household history;
5. verify that restricted reports do not notify or expose details to the accused;
6. preserve the H3 blocker: this classification does not establish permission
   for teammates, spectators or other people appearing in a recording; and
7. disable the route rather than relaxing any control when the evidence is absent.

If any later feature introduces free-form text/media, public or group exchange,
comments, messaging, discovery or child-directed sharing, this classification
expires for that route. A new Apple guideline 1.2/Google Families assessment,
moderation design, reporting/blocking controls and owner/privacy/safeguarding
decision are required before implementation or enablement.
