# ACT-SP-037-02 — Role, authority and departure transitions

| Field | Recorded value |
|---|---|
| Artifact version | 1.2 accepted design baseline |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-037-02` — Resolve multi-role and departure transitions |
| Source issue | `SP-037` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Identity agent |
| Accountable owner | Syed Ahmed acting as Product/technical lead |
| Required reviewer | Independent adversarial agent review completed against version 1.0; accountable human security reviewer remains unassigned |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; remediation based on review of commit `613640a3d0454df291229204717571d1e383537b` |
| Run identity | `PREP-ACT-SP-037-02-20260913-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-037-02-role-and-departure-transitions.md` |
| Authority | Syed Ahmed's 13 September 2026 instruction to commit the accepted predecessor and move to the next activity |
| External effects | Local remediation draft only; no push, Linear mutation, account/role change, invitation, revocation or production action |
| Spend/time | AUD 0 incremental; attempt 1; 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 13 September 2026 as the SP-037 lifecycle design baseline; not implementation evidence or production authorization |

This artifact applies the accepted [ACT-SP-037-01 capability matrix](ACT-SP-037-01-actor-action-resource-matrix.md) to lifecycle transitions. Every transition below changes only its named relationship or capability. No transition silently grants guardianship, billing control, coaching qualification, publishing power or media access.

## 1. Historical predecessor and remediation dependency

| Input | Exact identity | Effect on this activity |
|---|---|---|
| [ACT-SP-037-01 actor/action/resource matrix](ACT-SP-037-01-actor-action-resource-matrix.md) | Historical version 1.0: commit `9fd6535d7202aae3a2aabb067e110d3ea37e640f`; SHA-256 `89588BC66EE9A1F9AFEC7EA4FDB6E4D4F3192459B2408DE9D51A68A8CD8F70E3`. Current dependency: version 1.2 remediation draft | Preserves the accepted baseline and adds normative authorization, operator, service-principal, media-delivery and separation-of-duties controls that this transition specification must follow |

The historical predecessor remains evidence of what was reviewed. The current version 1.2 files form one remediation bundle and must be accepted together. There is no live identity service, database policy, administration portal or test session.

## 2. State families

### Membership and assignment

```text
Invited -> Active -> Suspended -> Active
    |         |          |
    v         v          v
 Expired    Left      Revoked
```

- `Invited` grants enrollment-only operations and no protected workspace data.
- `Active` is necessary but not sufficient; action capability, resource scope and assurance are still checked.
- `Suspended` denies protected operations while preserving a reversible investigation/administration record.
- `Expired`, `Left` and `Revoked` are terminal for that membership. Re-entry creates or deliberately reactivates a reviewed relationship; it does not reuse stale grants silently.

Coach-to-team/player assignment and staff-management capability have their own validity and state. An active club membership does not imply either.

### Guardian authority

```text
Pending verification -> Active -> Under review -> Active
                              \-> Revoked / Ended at adult transition
```

Guardian authority is a verified relationship to a player, independent of club membership, payment, household contact details and media sharing. `Under review` blocks consequential changes and new sharing while preserving immediate safety/Stop and the approved human dispute route.

### Media grant

```text
Requested -> Active -> Expired
               |  \-> Revoked
               \----> Resource withdrawn/deleted
```

Each grant binds recipient, resource set, purpose, allowed operation, issued/expiry time and authorizing adult/guardian. The accepted baseline permits streaming/playback only. A new or materially changed purpose requires a new grant.

### Content and plan lifecycle

```text
Draft -> In review -> Approved -> Scheduled/Published -> Archived
   ^          |           |               |
   |          v           v               v
   +------ Revision     Withdrawn <-------+
```

Draft, review and publish are separate capabilities. Approval binds an immutable version; editing creates a new draft. Safety/rights withdrawal can stop future online starts without rewriting completed-session history.

## 3. Transition authority table

| Transition | Initiator | Required approval/checks | Immediate authorization effect | Preserved record / next action |
|---|---|---|---|---|
| Invite club administrator | Existing authorized club admin or scoped operator | Own-club scope, fresh MFA, permitted seat/staff rule, single-use expiry | Enrollment-only; no protected club data until verified and activated | Inviter, recipient, club, intended role, expiry and result |
| Invite coach | Authorized club admin; coach cannot self-promote | Own-club scope, fresh MFA, intended team/player scope; qualification remains separate | Enrollment-only; no player/media access | Invitation and verification audit; assign scope only after activation |
| Activate staff membership | Verified invited adult through the approved identity flow | Invite unused/current, identity verified, MFA enrolled, club active | Enables only separately assigned capabilities in selected club | Activation identity/time and capability assignments |
| Assign/reassign coach | Club admin with staffing capability | Coach active, qualification state recorded, team/player scope valid | Adds named coaching scope; no guardianship, billing, publishing or media | Previous/current assignment history and affected future sessions |
| Delegate staff management | Club admin with delegation authority | Fresh MFA, allowed role ceiling, no self-escalation | Adds only invite/revoke staff capability in one club | Delegator, recipient, validity and review date |
| Suspend staff/coach | Authorized club admin or restricted operator | Own scope, attributable reason; emergency route constrained | Deny protected club actions immediately; stop new URLs/tokens at checked requests | Suspension reason, owner, review deadline and active-session handling |
| Coach leaves or is revoked | Club admin or authorized lifecycle process | Exact club membership and assignments identified | Revoke club capability, assignments, new access and active media grants for that scope | Retain governed attendance/authorship/audit; reassign future work |
| Club admin leaves | Another authorized club admin or scoped platform process | Alternate admin verified; no sole-admin silent removal | Revoke own-club administration and billing authority | Transfer accountable operations explicitly; preserve audit |
| Parent accepts minor enrollment | Current verified guardian | Invitation current, child matched without unsafe account merge, purpose notice accepted | Creates limited club enrollment only | Household retains guardianship and private history |
| Family/player leaves club | Guardian for minor, adult player, or governed club process | Current relationship and retention notice | Stop future assignments, club access and sponsorship; revoke club-purpose media grants | Preserve private household history and separately governed club records |
| Add second guardian | Existing authority plus approved verification/dispute controls | New adult identity verified; relationship basis recorded; no email-only merge | Adds only the reviewed guardian capabilities | Separate guardian grants, notices and revocation path |
| Dispute guardian authority | Authorized adult/support/safeguarding route | Case accepted by restricted human process | Put consequential changes/new sharing under review; deny coach/club resolution | Restricted case record, safe contact and named decision owner |
| Revoke guardian authority | Approved guardian/legal/support process | Identity, scope, safety and notification checks; fresh assurance | Revoke future guardian actions and grants derived solely from that authority | Preserve minimum audit and rights-handling evidence |
| Child becomes adult | Adult-transition process with the player | Age/eligibility evidence under approved policy; adult authentication established | End automatic guardian authority; adult chooses continued relationships and grants | Preserve historical origin; review club, family and media links individually |
| Parent also becomes coach | Club invitation/activation in addition to existing guardian role | Separate club membership, MFA, qualification and assignment | Adds a distinct selectable coach context only | Household and club sessions/tokens/audit remain separate |
| Player joins second club | Guardian/adult plus second club enrollment process | Separate verified invitation and agreed minimum projection | Adds a second isolated membership | No roster/plan/assessment/media visibility between clubs |
| Club suspended | Scoped platform operator under protected policy | Exact club, reason, authorization and recovery owner | Deny new protected club operations and new entitlement allocations | Preserve evidence; communicate safe member next actions |
| Club closed | Authorized club and platform lifecycle process | Export/retention/deletion/contract plan accepted; no active disputes ignored | End memberships, staff roles, future assignments and sponsorship | Household history remains; club records follow approved retention |
| Grant media playback | Verified guardian/adult owner | Current authority/consent, recipient identity, named resources/purpose/expiry | Streaming/playback only for the exact grant | Grant audit and visible revoke control |
| Revoke/expire media grant | Authorizing guardian/adult or authoritative lifecycle | Current grant identified | Deny new playback URLs/streams and renewal immediately at checked requests | Disclose that already downloaded/cached bytes follow residual limits |
| Grant plan draft right | Club admin with publishing administration scope | Active qualified staff context and exact club | Draft creation/edit only | Cannot review or publish the same version through draft right |
| Submit plan for review | Draft owner | Immutable candidate/version, suitability and required asset checks | Draft becomes read-only candidate; no publication | Reviewer, failures and revision route |
| Approve plan version | Separately authorized qualified reviewer | Reviewer independence/separation required by risk; exact version and evidence | Marks exact version approved; does not schedule/publish automatically | Approval identity/date/evidence and any constraints |
| Publish/schedule approved plan | Separately authorized publisher | Exact approved version, eligible recipients, current rights/suitability | Creates immutable published assignment/version | Publisher, recipients, dates and origin |
| Withdraw plan/content | Authorized safety/content owner | Exact versions and reason; emergency route attributable | Block affected future online starts; revoke publication availability | Preserve completed history; replacement and offline-freshness action |
| Subscription or seat ends | Authoritative provider/backend reconciliation | Verified source state, effective date and beneficiary mapping | Stop future affected feature entitlement/sponsorship | Never delete personal media or change guardian authority automatically |

## 4. Multi-role and multi-club examples

| Scenario | Decision | Reason |
|---|---|---|
| Parent acting in household context edits own home plan | Allow | Current guardian authority and household resource scope |
| Same person, while in coach context, edits that household plan without a family coaching grant | Deny | Parent capability cannot compose into the coach context |
| Parent/coach switches to an assigned club and records attendance | Allow | Active coach context plus assigned activity scope |
| Parent/coach uses household authority to view another club player's recording | Deny | Household authority has no effect in another resource scope |
| Coach assigned to Club A searches Club B roster | Deny | Selected context and membership/resource ownership mismatch |
| Player belongs to Clubs A and B and Club A queries Club B assessment | Deny | Memberships remain distinct; no cross-club projection |
| Club A receives completion state for its own assignment | Allow | Minimum accepted club projection for the named assignment |
| Club A receives the player's independent home history or recording | Deny | Not necessary for assignment completion; no media grant |
| Club admin allocates a paid seat to a player | Allow conditionally | Own-club billing capability and capacity; creates entitlement only |
| The seat allocation lets the admin or coach watch player recordings | Deny | Billing does not create media authority |
| Guardian grants one clip to one assigned coach for one week | Allow conditionally | Exact recipient/resource/purpose/time media grant |
| Coach downloads, forwards or browses other clips under that grant | Deny | Accepted baseline is streaming-only and resource-specific |
| Adult player keeps a former guardian's access automatically at age 18 | Deny | Adult transition requires deliberate relationship/grant review |
| Platform support opens private footage to resolve an ordinary billing ticket | Deny | Billing support and exceptional media support are separate scopes |
| Agent reads raw child footage because it can edit repository code | Deny | Repository authority is not media authority; child media is excluded |

## 5. Departure and revocation sequence

For coach, staff, family or club departure, the authoritative transaction must:

1. identify the exact relationship and selected workspace;
2. set the membership/assignment to a non-authorizing state before issuing new access;
3. invalidate or reject affected privileged sessions at checked requests;
4. revoke active media grants derived from the departing scope;
5. stop future assignments, notifications, exports, background jobs and sponsored allocations for that relationship;
6. preserve immutable completed-session, attendance, authorship and audit records only under their approved purpose/retention;
7. reassign future operational work to a verified active person where required;
8. apply deletion/suppression without resurrecting access from an offline device, restore or stale queue; and
9. show the affected adult the truthful residual limits for cached/exported media and offline content.

A failed or partial transition remains visible with a named owner and next action. The system must not report departure complete merely because the UI hides the member.

## 6. Denial and stale-state requirements

- Every protected route rejects inactive, expired, revoked, suspended or wrong-context memberships.
- Revocation checks apply to database/API, Storage, RPC, search, list, export, realtime, notification and background-job paths.
- A valid token, remembered MFA state, cached interface or client-supplied relationship ID cannot override current server state.
- Direct calls cannot use draft permission to publish, club administration to change guardianship, billing authority to read media, or a media grant to export unrelated records.
- A revoked coach cannot renew a signed URL or regain access by switching to another still-active club context.
- An older offline queue cannot recreate a removed membership, withdrawn consent or deleted recording.
- Exceptional support never becomes a routine impersonation mechanism and requires a separate attributable scope.

## 7. Enforceable lifecycle contracts

### 7.1 Guardian dispute and revocation

Dispute processing has separate `Intake`, `Accepted review`, `Rejected intake`, `Resolved confirmed` and `Resolved dismissed` states. Filing creates `Intake` only and does not suspend another guardian. A safeguarding/identity triager who is not a disputing party accepts review only when the submission identifies the relationship, asserts a safety/legal/identity ground, passes authenticated-contact checks and is not a duplicate of a resolved claim without new evidence. Repeated or automated submissions are rate-limited and grouped for abuse review; filing volume never determines authority.

`Accepted review` is fail-closed for existing sensitive access, not only new sharing. At acceptance, the system increments the relationship generation and, within the high-risk limits in section 7.3, suspends the disputed person's active sessions, media grants, exports, schedule/location visibility, notifications, realtime subscriptions and queued jobs for the affected player.

The only operations available to the disputed person are:

- authenticate and maintain their own account security;
- view the minimum dispute notice and case contact route;
- submit evidence or a response to the restricted safeguarding case; and
- receive a specifically approved safe-contact communication that contains no schedule, location, roster, private media or unrelated household data.

Any exception preserving sensitive access requires a named safeguarding decision owner, exact allowed operations/resources, reason, issue and expiry time, independent approval and audit. Urgent continuity for the child is routed to a separately verified safe contact and reveals only the minimum approved information; it never automatically restores either disputing guardian. Accepted reviews receive an expedited queue and escalation deadline defined by the safeguarding policy. Coaches and club administrators cannot triage or decide guardian authority. Revocation makes the relationship permanently non-authorizing unless a new verified relationship with a new generation is established.

### 7.2 Adult transition

For the Australian launch baseline, the authorization cutoff is 00:00 at the beginning of the player's eighteenth birthday in the timezone of their verified legal residence; `Australia/Sydney` is used only when that residence is recorded as New South Wales. The policy service derives the cutoff synchronously from the authoritative date of birth and residence record. If residence/timezone is missing, use the earliest cutoff instant among supported Australian legal-residence timezones. If an old and new residence conflict, use the earlier cutoff until identity review resolves it. A residence/timezone change within 30 days of the calculated boundary requires step-up authentication and identity review and cannot move the cutoff later without approval. Tokens, caches, jobs and client state cannot extend it.

At the cutoff, former guardian relationships and every grant derived from them become non-authorizing by default. The high-risk transition rules in section 7.3 apply: controlled media credentials enter the deny set before transition completion and sessions, realtime channels, caches, exports and jobs stop within ten seconds. Adult authentication is not a precondition for ending former guardian authority. Continued family, club or media access requires a deliberate adult decision creating a new relationship or grant. An uncertain or disputed birth date routes to the restricted identity/safeguarding process and cannot silently extend guardian authority.

### 7.3 Revocation convergence contract

An authoritative suspension, accepted dispute, revocation, deletion or adult transition increments only the affected principal, context, relationship, grant, capability-assignment and resource epochs/generations in one durable transaction. There is no platform-global invalidation counter. Each enforcement surface compares the complete dependency-version set at use time, so unrelated tenants, users and jobs remain available.

| Surface | Maximum convergence from authoritative commit | Required behavior |
|---|---:|---|
| New API, RPC, database and storage request | Before protected access begins | Deny before reading or mutating protected data |
| Accepted guardian dispute, guardian revocation and adult cutoff: active session, realtime, cache, export, notification, job and media delivery | 10 seconds | Disconnect, cancel, invalidate or deny at the next checked boundary; no protected mutation may commit without rechecking current dependencies |
| Other membership/grant suspension or revocation: active session, realtime, search/list/count cache, export, notification and job | 60 seconds | Disconnect, cancel or invalidate; reauthorize before protected continuation, assembly, delivery or commit |
| Media gateway and CDN | Before every manifest, key and segment; high-risk transitions within 10 seconds | Check proof-of-possession token and current dependency versions; deny copied or stale credentials and invalidate controlled cache/object paths |

Timing begins when the authoritative transaction commits and ends when the surface can no longer disclose or commit protected data under the old dependency versions. A read already delivered cannot be recalled. A streaming response stops at its next segment. An in-flight mutation must recheck immediately before commit and fail if a dependency changed. “Immediate” elsewhere in this bundle means before a new checked request begins, or the ten-second limit for explicitly identified high-risk active channels.

If the policy service, revocation stream or required authoritative store is unavailable or stale beyond these limits, protected access fails closed and raises an operational alert. Already delivered bytes and external screen captures remain a disclosed residual limitation, not an authorization success.

### 7.4 Offline, replay and restore safety

- Memberships, guardian relationships, grants, consent and protected resources have monotonic generations and durable tombstones.
- Every mutation contains an idempotency key, expected generation and authenticated server-issued context. Conditional writes reject older, duplicate, reordered, expired or wrong-context commands.
- Offline clients and queues carry identifiers and requested actions, never reusable authorization. The server reauthorizes against current state on receipt.
- A tombstone dominates every command or backup value created before it. Deletion or revocation can be reversed only by an explicit authorized recovery that creates a new generation; replay cannot reactivate the old record.
- Restore procedures first restore tombstones and policy epochs, then reconcile dependent data before serving traffic. Realtime consumers and jobs discard messages whose generation is no longer current.

### 7.5 Pending invitation protocol

A pending invitation is not a membership or authorization. The only pre-acceptance response fields are invitation type, inviting organization display name, proposed role display name, expiry time and a generic action label. Child/player identity, roster, team, schedule, location, media, household members, internal IDs and whether an account already exists are never returned. Pre-acceptance operations are limited to retrieving that schema, verifying the intended recipient, accepting or declining, and requesting a new token through an anti-enumerating route.

Invitation tokens are high entropy, single use, stored hashed, expire within 72 hours, and bind intended recipient identity, role, club/household context and proposed minimum scope. Acceptance requires authenticated identity verification and is atomic: exactly one concurrent request consumes the token. Forwarded, expired, replayed, wrong-identity and already-consumed tokens reveal no protected records and create no assignment, grant, role or cache entry.

| Invitation type | State created after verified acceptance | Additional approval before Active | Authority while waiting |
|---|---|---|---|
| Club staff/administrator | Pending verification | Club staffing approver; qualification where the capability requires it | Enrollment and own-account security only |
| Coach | Pending verification | Club staffing approver, current qualification and explicit team/player assignment | Enrollment and own-account security only |
| Minor player/household enrollment | Pending verification | Current verified guardian plus club enrollment approval | Enrollment and own-account security only; no child or roster data |
| Adult player | Pending verification | Adult identity verification plus club enrollment approval | Enrollment and own-account security only |
| Additional guardian | Pending verification | Existing-authority and identity/safeguarding process in section 7.1 | Dispute/evidence route and own-account security only |
| Platform operator or Level 0 approver | Pending verification | Two-person Level 0 issuance under ACT-SP-037-01 section 10.3 | Own-account security only |

No invitation type creates an Active relationship merely through token acceptance. Each required approval is separately attributable; activation atomically creates a new relationship generation only after all applicable approvals are current.

## 8. Evidence scenarios for ACT-SP-037-03

| Scenario | Required outcome |
|---|---|
| Parent/coach switches between household and club | Allowed operations work only in the selected context; no cached cross-context data or token reuse |
| Multi-club player and coach | Each club sees only its membership, assignments and minimum projections |
| Draft author calls publish API | Denied unless a separate authorized publishing capability and exact approved version are present |
| Club admin calls guardian/media endpoints | Guardian change denied; playback denied without a specific media grant |
| Coach departure during active access | Subsequent checked requests and URL renewals deny; governed history remains attributable |
| Family leaves club with home history | Future club access/assignments stop; private household history remains |
| Media grant revoked | New streams/URLs deny; no unrelated household or entitlement data changes |
| Age-18 transition | Former guardian access does not continue automatically; adult reviews every relationship |
| Suspended/closed club | Active club operations stop across API, jobs and exports; household ownership is preserved |
| Seat/subscription termination | Feature entitlement changes; guardianship and personal-media ownership do not |

These are design-level expected outcomes. `ACT-SP-037-03` must bind actual implementation/test evidence when the relevant services exist or explicitly record the unavailable environment; it must not turn these rows into fabricated PASS results.

## 9. Accountable owners

| Area | Accountable role | Required separate review/operation |
|---|---|---|
| Product hierarchy and context behavior | Product/technical lead | Independent security reviewer for final authorization design |
| Club membership and staff lifecycle | Club administration/identity owner | Restricted platform operator for exceptional recovery |
| Guardian verification/dispute/adult transition | Product/privacy/identity owner | Qualified privacy/safeguarding route where applicable |
| Coach qualification and assignment | Club/content owner | Qualified coaching/content reviewer |
| Plan review/publishing/withdrawal | Content owner | Qualified reviewer and separately authorized publisher as risk requires |
| Media consent and grants | Guardian/adult plus privacy owner | Technical/security review of enforcement and residual limits |
| Billing and entitlement reconciliation | Billing owner | Provider/backend reconciliation; no media authority |
| Session, API, RLS, Storage and job enforcement | Technical/identity owner | Independent security verification before affected pilot use |

Actual people remain unassigned except Syed Ahmed's recorded owner roles. Role names do not constitute permission grants or specialist acceptance.

## 10. Review decisions

| ID | Decision requested from Syed Ahmed | Proposed baseline |
|---|---|---|
| `OD-037-07` | Approve the membership, guardian, media and content state families | Accepted as the minimum lifecycle vocabulary; implementation may add non-authorizing substates |
| `OD-037-08` | Approve immediate suspension/revocation behavior | Accepted: deny new protected requests and renewals from current authoritative state; preserve governed history |
| `OD-037-09` | Approve parent/coach and multi-club non-composition | Accepted: require explicit selected context and forbid capability union across contexts |
| `OD-037-10` | Approve age-18 handling | Accepted: end automatic guardian authority and require the adult to review each continued club/family/media relationship |
| `OD-037-11` | Approve plan separation | Accepted: Draft, review, approve and publish remain distinct capabilities; approval binds an immutable version |
| `OD-037-12` | Approve departure preservation | Accepted: preserve only governed history/audit while stopping future access, assignments, grants and sponsorship |
| `OD-037-14` | Approve the dispute allowlist, atomic adult cutoff, convergence limits, anti-resurrection protocol and invitation protocol | Accepted by Syed Ahmed in version 1.2 on 13 September 2026 after both adversarial reviews |

Independent agent reviews of versions 1.0 and 1.1 returned the corrections incorporated into version 1.2. Owner acceptance remains unresolved, and it cannot substitute for later runtime or accountable human security evidence.

## 11. Completion and handoff

- [x] Membership, assignment, guardian, media and content lifecycles are explicit.
- [x] Draft, review, approve and publish capabilities are separate.
- [x] Parent/coach and multi-club context switching has allowed and denied examples.
- [x] Coach, administrator, family, club and subscription departures have explicit effects.
- [x] Revocation covers API, data, Storage, export, realtime, notification and job paths.
- [x] Billing, guardianship, coaching qualification, publishing and media grants remain independent.
- [x] Accountable roles and required specialist/independent reviewers are recorded without inventing identities.
- [x] Syed Ahmed reviewed version 0.1 and accepted `OD-037-07` through `OD-037-12` on 13 September 2026; version 1.0 records that historical acceptance.
- [x] Version 1.1 received independent adversarial follow-up review: four findings closed, nine partial and two new Medium risks.
- [x] Version 1.2 addresses every remaining guardian-dispute, adult-transition, revocation, media-timing, epoch-scope and invitation issue returned by that review.
- [x] Syed Ahmed accepted the version 1.2 remediated decisions and candidate SHA-256 `218D640E656B7DA4373E3C8286D6568A1FACEC7E0D722600B63B062DCB0E9F1F` on 13 September 2026.
- [ ] An accountable human security reviewer is named before production use involving real youth, guardian or private-media data.

Handoff status: Syed Ahmed accepted version 1.2 after both independent agent-review cycles. The lifecycle contract is the completed SP-037 design baseline and may feed dependent specification work. It remains design evidence, not runtime or accountable human-security evidence.
