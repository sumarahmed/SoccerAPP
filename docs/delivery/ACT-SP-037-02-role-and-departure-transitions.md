# ACT-SP-037-02 — Role, authority and departure transitions

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-037-02` — Resolve multi-role and departure transitions |
| Source issue | `SP-037` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Identity agent |
| Accountable owner | Syed Ahmed acting as Product/technical lead |
| Required reviewer | Independent security reviewer — vacant; review cannot be represented as independent |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `9fd6535d7202aae3a2aabb067e110d3ea37e640f` |
| Run identity | `PREP-ACT-SP-037-02-20260913-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-037-02-role-and-departure-transitions.md` |
| Authority | Syed Ahmed's 13 September 2026 instruction to commit the accepted predecessor and move to the next activity |
| External effects | Local documentation draft only; no push, Linear mutation, account/role change, invitation, revocation or production action |
| Spend/time | AUD 0 incremental; attempt 1; 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 13 September 2026 as the predecessor for `ACT-SP-037-03`; not implementation evidence and not final SP-037 acceptance |

This artifact applies the accepted [ACT-SP-037-01 capability matrix](ACT-SP-037-01-actor-action-resource-matrix.md) to lifecycle transitions. Every transition below changes only its named relationship or capability. No transition silently grants guardianship, billing control, coaching qualification, publishing power or media access.

## 1. Fixed predecessor

| Input | Exact identity | Effect on this activity |
|---|---|---|
| [ACT-SP-037-01 actor/action/resource matrix](ACT-SP-037-01-actor-action-resource-matrix.md) | Version 1.0; commit `9fd6535d7202aae3a2aabb067e110d3ea37e640f`; SHA-256 `89588BC66EE9A1F9AFEC7EA4FDB6E4D4F3192459B2408DE9D51A68A8CD8F70E3` | Fixes deny-by-default evaluation, context non-composition, structured feedback, minimum club completion projection and streaming-only media-grant baseline |

The predecessor remains specification evidence. There is no live identity service, database policy, administration portal or test session.

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

## 7. Evidence scenarios for ACT-SP-037-03

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

## 8. Accountable owners

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

## 9. Review decisions

| ID | Decision requested from Syed Ahmed | Proposed baseline |
|---|---|---|
| `OD-037-07` | Approve the membership, guardian, media and content state families | Accepted as the minimum lifecycle vocabulary; implementation may add non-authorizing substates |
| `OD-037-08` | Approve immediate suspension/revocation behavior | Accepted: deny new protected requests and renewals from current authoritative state; preserve governed history |
| `OD-037-09` | Approve parent/coach and multi-club non-composition | Accepted: require explicit selected context and forbid capability union across contexts |
| `OD-037-10` | Approve age-18 handling | Accepted: end automatic guardian authority and require the adult to review each continued club/family/media relationship |
| `OD-037-11` | Approve plan separation | Accepted: Draft, review, approve and publish remain distinct capabilities; approval binds an immutable version |
| `OD-037-12` | Approve departure preservation | Accepted: preserve only governed history/audit while stopping future access, assignments, grants and sponsorship |

Independent security review remains a separate unresolved requirement and cannot be satisfied by owner acceptance of this draft.

## 10. Completion and handoff

- [x] Membership, assignment, guardian, media and content lifecycles are explicit.
- [x] Draft, review, approve and publish capabilities are separate.
- [x] Parent/coach and multi-club context switching has allowed and denied examples.
- [x] Coach, administrator, family, club and subscription departures have explicit effects.
- [x] Revocation covers API, data, Storage, export, realtime, notification and job paths.
- [x] Billing, guardianship, coaching qualification, publishing and media grants remain independent.
- [x] Accountable roles and required specialist/independent reviewers are recorded without inventing identities.
- [x] Syed Ahmed reviewed version 0.1 and accepted `OD-037-07` through `OD-037-12` on 13 September 2026; version 1.0 records acceptance metadata only.
- [ ] A real independent security reviewer is named before final SP-037 acceptance.

Handoff status: Syed Ahmed accepted the lifecycle states, immediate revocation, context non-composition, age-18 review, immutable publication sequence and governed-history preservation as the input to `ACT-SP-037-03`. Final SP-037 acceptance remains blocked until verification and the required independent security review are complete.
