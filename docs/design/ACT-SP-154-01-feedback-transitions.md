# ACT-SP-154-01 — Bounded coach-feedback transitions

| Field | Value |
|---|---|
| Version | 1.0 recommended for owner acceptance |
| Prepared | 15 September 2026 |
| Initial catalog | D01–D10 exact approved variants only |
| Boundary | Design contract; no live coach, child media or messaging service exercised |

## Workflow

```text
adult_draft -> submitted -> coach_queue -> reviewed -> delivered -> closed
                    \-> adult_withdrawn
                    \-> expired
                    \-> access_revoked
                    \-> returned_without_review
```

An authorized guardian/adult deliberately submits for one exact player,
assigned coach, approved activity version and stated improvement purpose. The
adult selects text-only or one bounded clip; nothing uploads automatically.
Every transition uses current authority, an idempotency key, server time,
version/generation and an attributable adult/coach actor.

The coach returns exactly one structured improvement cue and zero or one
follow-up chosen from the player's currently eligible approved pathway. A short
240-character clarification may accompany the structured cue, is visible to
the submitting adult, and cannot become a reply thread. The player sees simple
supportive wording and the approved next action.

Withdrawal, expiry, coach unassignment, club departure, guardian dispute,
adult transition or media-grant revocation blocks new preview/playback. It does
not erase the audit receipt or a narrowly retained safeguarding/legal record.

## Visibility

| Actor | Permitted | Never permitted by this service |
|---|---|---|
| Submitting guardian/adult | Own submission, status, cue and follow-up | Other families, coach queue or another guardian's private case |
| Restricted player session | Age-appropriate cue/next action after adult delivery | Submit/share media, open coach profile/chat, adult controls |
| Assigned coach | Minimal queue row and current-grant preview/playback | Download/export, browse household/media library, unassigned players |
| Club admin | Aggregate capacity and sanitized overdue state | Clip, narrative or cue content by role alone |
| Platform support | Opaque receipt and sanitized operational state | Private clip or coaching narrative by default |
| Safeguarding route | Restricted minimum case information when separately reported | Automatic browsing of every coaching submission |

No coach-to-child direct/private channel, reactions, typing indicator, presence,
free-form thread or social feed is created.
