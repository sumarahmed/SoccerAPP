# ACT-SP-061-02 — Retention, holds and data-rights contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-061-02` — Specify record-class retention and rights |
| Source | `SP-061` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `6b522b8c1e8efc522c4bcdc7877065038506bcfb` on `main` |
| Executor | Codex acting as Identity/privacy design agent |
| Accountable owner | Syed Ahmed acting as Founder/privacy-identity owner |
| Predecessor | Accepted [ACT-SP-061-01](ACT-SP-061-01-authority-and-identity-transitions.md) |
| Evidence scope | Written schedule and synthetic rights/lifecycle cases; no participant request, deletion, export, provider or legal hold executed |

## 1. Retention principles

Soccolo keeps a record only for its current stated service, security, dispute or
legal purpose. Each class has an owner, purpose, start event, duration,
disposal action and hold exception. Expiry disables access first and then
deletes or irreversibly de-identifies the record through an attributable job.

SP-050 supersedes older dedicated-recovery proposals for the lean pilot. There
is no Soccolo media replica, point-in-time recovery service, secondary region or
customer restore promise. Provider-default protection may exist under provider
terms, but is not a product recovery feature and cannot be represented as one.

The primary authoritative production data remains in the selected Sydney
region. Authorized worldwide access, encrypted transit, public CDN delivery and
ordinary disclosed provider operations remain permitted under SP-008/SP-050.

## 2. Record-class schedule

| Record class | Purpose and start event | Pilot retention/disposal | Hold/exception |
|---|---|---|---|
| App-controlled local recording | User's local practice copy | Until deliberate local deletion, app removal or selected cleanup | Soccolo cannot delete a gallery/export/third-party copy outside app control |
| Upload reservation/quarantine fragment | Complete and validate one upload attempt | Terminal failure/cancellation requests immediate deletion; absence verified within one hour or alerted | No backup/recovery copy and never playable |
| Verified cloud recording, parts, thumbnails/derivatives | Optional private cloud access | 30 days from complete group verification, then access disabled and objects deleted | Narrow documented legal/safeguarding hold only |
| Permanent media recovery replica | Recovery | None during lean pilot | Requires a new owner-approved post-pilot decision |
| On-demand export package | Deliver one verified rights export | Maximum 24 hours after creation; delete after first completed handoff where practical | Five-minute signed download URL; no permanent export archive |
| Household/player/profile/guardian/consent | Operate the active service and authority | Active service; review after 12 months inactivity; propose closure after 24 months with at least 30 days' adult notice | Retain only separately justified minimal evidence |
| Practice/progress/reflection history | User history and current program | Same active/inactivity schedule; earlier user deletion where no other purpose applies | Immutable completion facts are corrected by linked statements, not silent rewriting |
| Club membership, enrollment, attendance and assessment | Operate and evidence the club relationship | Active membership plus 12 months after departure, then delete/de-identify | Different club/statutory period requires recorded legal purpose |
| Plan/content version and non-personal catalog | Reproduce what was assigned or published | While product/content history needs it; remove personal recipient links on expiry | Rights/license or safety-withdrawal evidence may remain |
| Consent/sharing/media-grant receipt | Demonstrate exact authority and withdrawal | Current relationship plus 12 months after closure; content/media expires separately | Extend only for a named dispute/legal requirement |
| Routine diagnostic/analytics log | Reliability and abuse diagnosis | 30 days; aggregate/de-identify sooner where possible | Escalated incident facts move to restricted audit |
| Security/administrative audit | Investigate consequential access/change | 12 months | Narrow incident/legal hold with review/expiry |
| Revoked session/device detail | Security and revocation investigation | 90 days; significant event retained in the 12-month audit | No credential/secret retained |
| Ordinary support case | Resolve a user request | 90 days after closure | Safeguarding/legal case uses its separately approved restricted schedule |
| MFA/identity recovery document | One manual identity review | Delete incidental document immediately after verification | Never retain TOTP/seed/password; record only decision category |
| Minimal recovery decision | Security accountability | 90 days; significant event in restricted 12-month audit | Named incident/legal hold only |
| Guardian dispute/data-rights case | Resolve authority/access/correction/deletion | 12 months after closure | Narrow legal/safeguarding hold; minimize evidence |
| Accounting/tax transaction evidence | Statutory/accounting obligations | Provisional five years from the applicable transaction/record event | Accountant/legal owner confirms longer requirements; separate from child/media data |
| Deletion suppression/tombstone | Prevent stale device/job resurrection | Minimal opaque identifier/generation for 30 days after verified deletion | SP-047 devices older than seven days must full-resync; retain longer only with stated purpose |
| Marketing contact/suppression | Separate adult marketing choice | Delete contact on withdrawal; retain minimal suppression marker only as needed | Never derived from child practice/media |

No scheduled deletion job reports success until required active stores,
derivatives, search/index/cache entries and processor tasks are checked. A
failed deletion remains visible and is retried/escalated; it never silently
releases quota or closes a rights request.

## 3. F33 data-rights flow

```text
submitted -> acknowledged -> identity/authority_verified -> scoped
  -> collecting_and_reviewing -> fulfilled | partly_refused | refused
  -> receipt_and_complaint_route -> closed
```

F33 supports access, portable export, correction, deletion and authority-change
requests. It states which person/player and record classes are in scope, the
current case status, expected response date, retained-record explanation and a
safe contact/complaint route.

The pilot targets a decision/fulfilment within 30 calendar days for access,
correction and deletion requests. This is an operational target, not a claim
that every request has an unconditional statutory erasure right. Complex
third-party, dispute or legal-hold cases record the reason, revised expectation
and escalation rather than disappearing from the queue.

## 4. Requester verification and authority

- Use the existing authenticated account and fresh TOTP for export, deletion,
  guardian/authority changes and other consequential operations.
- Do not demand new identity documents when existing authenticated evidence is
  sufficient.
- Permit the individual, a capable young person, an authorized guardian or a
  verified authorized agent to submit the relevant request.
- Recheck current authority at fulfilment; an old case token, payment or prior
  guardian status does not grant current access.
- A disputed guardian cannot use a rights request to obtain the opposing
  guardian's evidence or the child's unrelated records.
- A child/player credential can open age-appropriate help/status but cannot
  directly export or delete a household; route consequential completion to the
  appropriate verified individual/guardian.

Rights-case content stays in a restricted application store. Linear or another
general tracker may hold only an opaque case identifier, non-sensitive workflow
status and accountable owner—never identity documents, child information,
private media, detailed allegations or export links.

## 5. Access and export

An export includes only the requester's currently authorized personal
information, the relevant notice/consent and lifecycle facts, and a readable
explanation. Structured records use a documented JSON/CSV schema. Media is
included only where current media authority exists, using a short-lived private
handoff rather than embedding public links.

Before release, a server-side review removes or separates:

- another person's personal information where access is not appropriate;
- guardian/dispute/safeguarding reporter evidence requiring protection;
- authentication secrets, recovery evidence and live credentials;
- internal detection thresholds or information that would undermine security;
- private club/coach information outside the requester's scope; and
- deleted, expired or unrelated-tenant records.

The bundle is encrypted at rest, access-checked when generated and downloaded,
deleted within 24 hours, and uses a playback/download URL no longer than five
minutes. Export creation and access are auditable, but audit logs do not contain
the exported content.

## 6. Correction

Simple account details may be corrected through an authenticated portal.
Guardian authority, date of birth, club facts, assessments and disputed fields
use the applicable reviewed workflow. A correction:

1. verifies the requester and record/purpose;
2. records old/new values or a privacy-preserving digest where appropriate;
3. updates current authoritative data and derived projections;
4. notifies relevant recipients/processors where required and practicable;
5. preserves immutable historical context through a linked correction event;
6. returns a receipt; and
7. if refused, gives reasons, a complaint route and a way to associate the
   individual's correction statement where appropriate.

No fee is charged for a correction request or the correction itself.

## 7. Deletion and account closure

Deleting a Soccolo account is distinct from cancelling an Apple/Google or other
provider subscription. Neither action is made a precondition of the other; the
adult receives the correct separate route and any retained billing explanation.

After fresh verification and a short revocable confirmation state, deletion:

1. records an idempotent request and authoritative deletion generation;
2. prevents new sign-in/renewal, grants, sharing, exports and uploads;
3. revokes sessions, player/device credentials and signed-link renewal;
4. cancels queued/outbox work and prevents stale offline replay;
5. removes active database records or de-identifies justified aggregates;
6. deletes cloud objects, thumbnails and other derived copies;
7. removes search, cache, analytics and support copies within their systems;
8. directs approved processors to delete/return their copies;
9. retains only narrow statutory/hold records in segregated access; and
10. issues a completion/exception receipt only after checks finish.

SP-050 provides no pilot restore. Incidental provider backup retention follows
the provider's disclosed expiry/deletion terms and is stated honestly; it is not
immediate active access or a Soccolo recovery feature. If a provider cannot
support required deletion/expiry, it is not approved for real pilot data.

## 8. Holds

Only a named privacy/legal/safeguarding owner can apply a hold. The record
contains the authority/reason, exact people and record classes, approving
person, restricted readers, start, 30-day review date and expiry/release rule.

A hold suspends disposal only for its exact items; unrelated data follows the
normal schedule. Media holds are exceptional, separately protected and audited.
The affected person is notified unless prohibited or a documented safety risk.
A hold cannot become a generic backup, indefinite retention label or reason to
keep every account record. Release resumes the ordinary deletion schedule and
records verification.

## 9. Processor and cross-border terms

Before a provider receives real pilot personal information, record its service,
purpose, record classes, primary/support locations, subprocessors, security
assurance and contract/version. Required terms cover:

- instructions and purpose limitation;
- confidentiality and least-privilege support access;
- appropriate security and incident notification/cooperation;
- subprocessor disclosure and change notice;
- deletion/return during service, on request and at termination;
- export/access/correction assistance and response timing;
- ability to retrieve and permanently delete data;
- no sale, advertising profile or AI/model training using Soccolo child,
  family or private-media data; and
- evidence/notification when a required deletion or incident action fails.

Sydney remains the primary authoritative application-data region. Worldwide
authorized access and ordinary global delivery/support are permitted, but every
overseas recipient/support path remains disclosed and assessed. A free/cheap
tier is acceptable only if its current terms support these boundaries.

## 10. Completion result

`ACT-SP-061-02` passes as accepted design/specification work. Record-level
retention, data-rights handling, deletion, suppression, holds, exports and
processor terms are explicit. No request, provider contract, deletion, export,
hold, accountant determination or privacy/legal review has been performed.
