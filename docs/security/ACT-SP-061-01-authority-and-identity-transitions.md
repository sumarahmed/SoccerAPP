# ACT-SP-061-01 — Authority and identity transitions

| Field | Review value |
|---|---|
| Activity | `ACT-SP-061-01` — Specify authority and identity transitions |
| Source | `SP-061` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `6b522b8c1e8efc522c4bcdc7877065038506bcfb` on `main` |
| Executor | Codex acting as Identity/privacy design agent |
| Accountable owner | Syed Ahmed acting as Founder/privacy-identity owner |
| Evidence scope | Written and synthetic authority contract only; no identity, guardian, dispute or age-transition case processed |

## 1. Boundary and legal posture

Australia is the first market. The pilot adopts the Australian Privacy
Principles as its product baseline without claiming that Soccolo's final legal
classification, any small-business exception or every child-consent question
has been determined. A privacy adviser must confirm the applicable rules before
real children participate.

Age 18 is Soccolo's account-control transition. It is not a claim that every
person under 18 lacks capacity to make a privacy decision. The young person is
given an age-appropriate explanation and involved in decisions to the extent
appropriate; a capable older young person can make or participate in a privacy
request under the reviewed first-market policy.

## 2. Guardian authority record

A guardian relationship is a distinct, versioned grant. Its record contains:

- exact adult account and player identifiers;
- relationship/authority attestation and verification method;
- permitted purposes and operations;
- notice and consent versions separately accepted;
- issuer, reviewer where needed, server timestamps and effective/expiry state;
- independent authority, consent and revocation generations; and
- dispute, correction, transition or withdrawal references.

The first pilot guardian uses a verified adult account, explicitly identifies
the player and attests that they are a parent, guardian or otherwise authorized
caregiver. Email possession, payment, sponsorship, club membership, invitation,
role title or knowledge of a child's name is never sufficient by itself.

The small pilot does not routinely collect identity documents from guardians
or children. When authority is unclear, the named privacy/safeguarding operator
requests the minimum proportionate evidence through a restricted channel,
records only the evidence category and decision where possible, and deletes
incidental identity-document copies promptly after review.

A coach, club administrator or ordinary support worker cannot create, transfer,
merge or adjudicate guardianship.

## 3. Second guardian

```text
established guardian + fresh TOTP
  -> choose exact player and invitee address
  -> create seven-day single-use invitation
  -> invitee signs in to an independent adult account
  -> invitee verifies TOTP and accepts the current notice
  -> server rechecks issuer authority and dispute state
  -> create a separate guardian grant and notify existing guardians
```

The pending invitation discloses no child profile, household membership or
media. It is bound to one invitee, player, purpose, issuer and generation. It
fails after seven days, after first redemption, when the issuer loses authority,
when a dispute starts, or when consent/deletion state changes.

Guardians never share an account or credential. Each grant can be revoked and
audited independently. A guardian may withdraw their own access immediately.
Removing or materially restricting another verified guardian enters the
contested-authority process; it is not a one-click unilateral operation.

## 4. Contested authority

```text
reported -> restricted_pending_review -> evidence_review
  -> confirmed | varied | rejected | unable_to_determine
  -> notify_as_safe -> closed_or_review_due
```

On a credible guardian dispute, the server immediately:

- blocks new guardian invitations and authority changes;
- blocks new cloud uploads, media shares, exports and coach-media grants for the
  affected player;
- preserves immediate Stop, safe local practice and local recording controls;
- invalidates queued operations that rely on the disputed generation; and
- places affected private-media/authority actions behind restricted manual
  review.

The dispute does not automatically transfer authority, delete history or reveal
the reporter/evidence to the person named. Any valid consent withdrawal stops
the affected processing while the case is assessed. The named operator applies
the minimum evidence needed, avoids collecting child identity documents by
default, records an attributable decision and sets a review/expiry date.

A safeguarding report may require a separate restricted evidence hold under
SP-062. A dispute is never used to give a coach, club, payer or support worker
guardian authority.

## 5. Duplicate identities and account linking

No destructive or authority-bearing merge occurs from matching email, name,
date of birth, payment, device, club claim or imported roster row. The safe
process is:

1. authenticate both existing adult contexts or use the contained SP-059
   recovery route;
2. compare exact ownership, guardian, consent, club and media relationships;
3. stop if either side is disputed or cannot be independently verified;
4. create a reversible account alias/link first;
5. move only explicitly reviewed relationships using idempotent operations; and
6. preserve immutable ownership, receipts and audit evidence.

Merging adults never unions household, club, coach or player capabilities. A
player duplicate receives the same exact-authority review and is not merged
solely to simplify a club roster.

## 6. Age evidence and correction

Soccolo stores the minimum protected birth-date information required to derive
eligibility and schedule the adult transition. The exact value is restricted to
the player, authorized guardian and narrowly authorized identity service.
Coaches and ordinary club administrators receive only the necessary age band or
suitability result.

A correction request may be made by the individual, a capable young person, or
a currently authorized guardian. The server verifies the requester and asks for
proportionate supporting information only when needed. A change that crosses a
suitability, consent-capacity or age-18 boundary requires manual review.

Correction changes current/future derived eligibility and notifies relevant
authorized recipients where appropriate. It never rewrites immutable completed
sessions, historical notices, prior decisions or audit records. Those records
retain the fact that they were made using the previous value and link to the
correction event.

If a correction means the person is already 18, the adult transition begins
immediately. If it means the person is still under 18, any adult access created
solely by the incorrect age is revoked and the guardian/capacity route is
reviewed; no old entitlement or role preserves access.

## 7. Adult transition

Where the verified date permits it, Soccolo sends age-appropriate notice to the
young person and established guardians approximately 30 days before the
eighteenth birthday. At the transition event:

- former guardian grants no longer authorize private media, profile management,
  export, sharing or new consent on the adult's behalf;
- existing private-media and coach sharing does not silently renew;
- billing may continue as a separate payer relationship but confers no access;
- club membership remains only as its current limited relationship and creates
  no new coach/club capability;
- pending guardian invitations and queued authority/media actions are denied;
- safe local practice remains available; and
- new cloud upload/share/export and consequential account changes wait for the
  adult transition flow.

The adult verifies their contact/account, accepts the current adult notice and
enrolls/verifies TOTP before sensitive cloud or account actions. They review
each continuing club, coach, guardian/family and sharing relationship and may
grant new purpose-bound access deliberately.

An existing adult account is never automatically merged with the transitioned
profile. The verified duplicate-account procedure applies. If transition is
not completed, the profile remains restricted rather than transferring control
or silently deleting records; the inactivity/closure schedule in
ACT-SP-061-02 then applies.

## 8. Decision table

| Case | Immediate state | Permitted outcome |
|---|---|---|
| Valid first guardian | Verified independent guardian grant | Exact player/purpose access only |
| Club/coach/payment claim | No guardian grant | Verified guardian/manual route required |
| Valid second-guardian invite | Pending, non-disclosing | Independent verified grant after TOTP/notice/current-state checks |
| Expired/replayed/wrong invitee | Denied | New invitation after current authority check |
| Guardian self-withdrawal | That grant revoked | Other authority unchanged; notify safely |
| One guardian removes another | Restricted pending review | Attributable manual decision only |
| Credible dispute | High-risk operations frozen | Confirm, vary, reject or remain restricted |
| Duplicate adult/player | No automatic merge | Reversible link then reviewed idempotent migration |
| Ordinary age correction | Current/future derived values updated | Historical facts retained with correction link |
| Correction crosses age 18 | Transition/review immediately | No automatic guardian/adult authority transfer |
| Recorded eighteenth birthday | Guardian/private-media authority ends | Adult deliberately establishes continuing relationships |
| Adult transition incomplete | Restricted/local-safe mode | Inactivity/closure process; no silent transfer |

## 9. Completion result

`ACT-SP-061-01` passes as accepted design/specification work. First/second
guardian authority, disputes, duplicate identities, age correction and the
adult transition are explicit. Legal classification, privacy-adviser review,
operator assignment and real-case behavior remain unperformed.
