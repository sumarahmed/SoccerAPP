# ACT-SP-154-01 — Bounded coach-feedback transitions

| Field | Value |
|---|---|
| Version | `sp154-v1` |
| Status | Accepted product/coaching design baseline |
| Accountable owner | Syed Ahmed, founder/product owner |
| Coaching approver | Aaron M, A Diploma |
| Approval date | 16 September 2026 |
| Initial catalogue | D01–D10 exact approved variants only |
| Boundary | No live coach, child media or messaging service exercised |

## Workflow

```text
adult_draft
→ capacity_checked
→ media_pending_validation or text_ready
→ submitted
→ coach_queue
→ reviewed
→ adult_delivery
→ closed
```

Exception/terminal states are `capacity_rejected`, `media_rejected`,
`adult_withdrawn`, `expired`, `access_revoked`, `returned_without_review` and
`safeguarding_referred`.

An authorized guardian or adult player deliberately submits for one exact
player, currently assigned coach, approved activity version and stated
improvement purpose. Capacity is reserved before upload. The adult selects
text-only or one bounded clip; nothing uploads automatically. A clip remains in
private quarantine until server validation succeeds and never enters a coach
queue while pending or rejected.

Every transition uses current server-reconstructed authority, selected context,
idempotency key, server time, immutable version/generation and attributable
adult/coach identity.

## Feedback result

The assigned coach returns exactly one structured improvement cue from the
approved vocabulary and zero or one exact follow-up currently eligible under
SP-151/SP-152. An optional 240-character clarification is shown to the submitting
adult first. The player receives an age-appropriate rendered cue only through
`adult_delivery`; the raw clarification never creates a reply thread.

Clarification cannot contain personal contact requests, external links,
location/private-meeting requests or safeguarding allegations. A safety concern
moves to F32's restricted report process and closes ordinary feedback access.

The follow-up is rechecked when selected, delivered and started. A withdrawn or
newly ineligible follow-up is blocked without inventing a replacement.

## Visibility

| Actor | Permitted | Never permitted by this service |
|---|---|---|
| Submitting guardian/adult | Own submission, status, cue, clarification and follow-up; deliberate child delivery | Other families, coach queue or another guardian's private case |
| Restricted player session | Age-appropriate rendered cue and eligible next action after adult delivery | Submit/share media, raw clarification, coach profile/chat or adult controls |
| Assigned coach | Minimal queue row and currently authorized preview/playback | Download/export, household/media-library browsing, unassigned players or direct child contact |
| Club admin | Aggregate capacity and sanitized overdue state | Clip, thumbnail, narrative or cue content by role alone |
| Platform support | Opaque receipt and sanitized operational state | Private clip or coaching narrative by default |
| Safeguarding route | Restricted minimum case information after a separate report | Automatic browsing of every coaching submission |

There is no coach-to-child direct/private channel, reply, reaction, typing
indicator, presence, free-form thread, contact exchange or social feed.

Withdrawal, expiry, coach unassignment/departure, guardian dispute, adulthood,
media revocation or failed current authorization closes preview/playback. It may
retain a minimum audit receipt or separately authorized safeguarding/legal case,
but not ordinary coach access.
