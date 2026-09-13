# ACT-SP-037-01 — Actor, action and resource matrix

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-037-01` — Model actors and scoped capabilities |
| Source issue | `SP-037` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Identity agent |
| Accountable owner | Syed Ahmed acting as Product/technical lead |
| Required reviewer | Independent security reviewer — vacant; review cannot be represented as independent |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `f2a4d3aa86d6f0765a186977af2240896bb32d29` |
| Run identity | `PREP-ACT-SP-037-01-20260913-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-037-01-actor-action-resource-matrix.md` |
| Authority | Syed Ahmed's 13 September 2026 instruction to start the next review |
| External effects | Local documentation draft only; no commit, push, Linear mutation, identity creation, invitation or permission change |
| Spend/time | AUD 0 incremental; attempt 1; 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 13 September 2026 as the predecessor for `ACT-SP-037-02`; not implementation evidence and not final SP-037 acceptance |

This artifact begins `ACT-SP-037-01`. It converts the accepted hierarchy and current security/product contracts into a deny-by-default authorization matrix. It does not create accounts, roles, database policies, API middleware, media grants or billing entitlements.

## 1. Inputs and exact versions

| Input | Exact identity | Use |
|---|---|---|
| [SP-001 launch and account assumptions](../decisions/SP-001-launch-and-account-assumptions.md) | Decision 1.0; SHA-256 `0352189D9137F8A9ABAD48A4B5E88500CA304D270D28E5EEDD874BC3BE9160D7` | Accepted Australia/English, age representation, adult treatment and recording modes |
| [SP-003 agent scope and evidence policy](../decisions/SP-003-agent-scope-and-evidence-policy.md) | Decision 1.0; SHA-256 `31CFFF42CF8BD9F1F783BE2FF0155665B799EFFAE68D868FF2C23AF652C9EDF0` | Bounded agent authority, evidence and human-acceptance rules |
| [Club, parent, coach and player administration](../product/soccer_club_parent_and_coach_administration.md) | Synchronized 8 September 2026; SHA-256 `A15F2A3FDDA14E2CA3D6D617BC1D351AA60F0D2BFE999D203D7113B8E9F39548` | Accepted hierarchy, membership, plan, media and transition boundaries |
| [End-to-end platform and business plan](../architecture/soccer_end_to_end_platform_and_business_plan.md) | Review edition synchronized 8 September 2026; SHA-256 `006DA2F46C035BC51DD7BB0155A5A1EDE91DDF852D4DE73E99CFAC7B12B9E51B` | Backend authority, entitlement, storage and operating separation |
| [End-to-end security and gap review](../security/soccer_end_to_end_security_and_gap_review.md) | Current synchronized view; SHA-256 `D8A6344193AD6EC636747DEA9506E77F59AEEC407190E0DB9DB013E07C176D8C` | MFA, session, RLS/API, revocation and negative-test requirements |

## 2. Authorization decision model

A protected request is allowed only when every applicable condition is true:

```text
allow = authenticated_actor
    AND active_membership_for_selected_context
    AND explicit_capability_for_action
    AND resource_belongs_to_that_context_or_is_explicitly_shared
    AND required_assurance_and_recency
    AND current_guardian_or_adult_authority_when_applicable
    AND current_purpose_specific_consent_or_media_grant_when_applicable
    AND resource_and_relationship_are_not_revoked_expired_deleted_or_suspended
```

Billing entitlement and media access are never implied by the hierarchy. Payment may enable product features or capacity, but cannot create guardianship, coaching qualification, roster authority or a right to view recordings. A media grant may permit specified playback without permitting editing, export, billing or administration.

The server evaluates the selected workspace/role on every protected operation. The client, hidden controls, cached role claims, a higher numerical level, a billing receipt, an invitation or a relationship identifier supplied by the caller is not sufficient authority.

## 3. Actor and context baseline

| Actor | Level | Permitted context | Baseline authority | Explicit exclusions |
|---|---:|---|---|---|
| Platform operator | 0 | Platform operations under a named scoped role | Provision/suspend clubs, platform configuration, global content governance, restricted support, entitlement and audit operations | No routine browse-all child roster, household data or private recordings; no unrestricted impersonation |
| Club administrator | 1 | One explicitly selected club | Club settings, staff, groups, roster enrollment, schedules, publishing permissions, licensed seats and club-scoped reporting | No family guardianship, household account control, recording consent, unrelated club data or automatic media access |
| Parent/guardian administrator | 1 | Own verified household and authorized children | Profiles, suitable home plans, schedules, consent, recordings, club invitations and deliberate sharing | No club-wide staff/roster authority, platform publishing, unrelated family data or automatic coach authority |
| Assigned coach | 2 | Explicit club/team/player or family grant | Assigned plans, drills, sessions, attendance, assessments and structured feedback | No guardianship, billing control, unassigned players, automatic publishing, unrestricted messaging or private media without a grant |
| Child/player | 3 | Own restricted player/device context | Assigned practice, permitted self-directed drills, immediate recording stop, reflection and own progress | No staff/guardian/billing/MFA/media-grant administration, other-player data or adult workspace token |
| Adult player | 3 | Own adult account plus explicit relationships | Own practice, privacy, cloud/media and account controls; explicit club/family participation | No automatic club administration and no automatic continuation of former guardian access |
| Service job/agent | Not a human level | One named task and service scope | Only the exact machine capability, resource set, time window and action authorized by its run contract | No inherited human role, MFA approval, guardian decision, youth-content approval, unrestricted media access or self-approval |

## 4. Core action/resource matrix

`Allow` means the actor may receive a narrowly implemented capability after authentication and scope checks. `Conditional` names an additional required grant, qualification or approval. All unlisted combinations deny.

| Action / resource | Platform operator | Club admin | Assigned coach | Parent/guardian | Child/player | Adult player |
|---|---|---|---|---|---|---|
| Create or suspend club workspace | Allow, scoped operator | Deny | Deny | Deny | Deny | Deny |
| View or change platform configuration | Allow, separate privileged role | Deny | Deny | Deny | Deny | Deny |
| Invite/revoke club staff | Conditional restricted support | Allow, own club | Conditional delegated staff-management capability | Deny | Deny | Deny |
| Enroll player in club | Deny by default; restricted support only | Conditional verified guardian/adult enrollment | Deny; may initiate invitation only | Allow for authorized child after verified invitation | Deny | Allow for self |
| View club roster minimum fields | Aggregate/support scope only | Allow, own club | Allow, assigned team/player subset | Own child only | Own record only | Own record only |
| Create/edit club plan draft | Conditional content scope | Conditional plan-edit capability | Conditional assigned scope and plan-edit capability | Own home copy only | Deny | Own home plan only |
| Review club plan | Conditional qualified content-review role | Conditional separately granted reviewer role | Conditional qualification plus reviewer role | Deny | Deny | Deny |
| Publish or withdraw club plan | Conditional qualified publishing/safety role | Conditional separately granted publishing role | Conditional qualification plus publishing role | Deny | Deny | Deny |
| Publish global drill/content | Conditional global qualified approval and publishing scope | Deny | Deny | Deny | Deny | Deny |
| Select approved home drills | No routine family access | Deny | Conditional explicit family coaching grant | Allow within suitability rules | Conditional permitted self-directed choices | Allow for self within suitability rules |
| Schedule/assign club activity | Deny by default | Allow, own club | Allow, assigned team/player scope | Request or manage home schedule only | Deny | Own schedule; club assignment only through club scope |
| Record attendance/completion | Audit/support only | Allow, necessary own-club scope | Allow, assigned activity | View own child's disclosed result | Record own completion | Record/view own completion |
| Write coaching assessment/feedback | Deny by default | Conditional qualified assigned role | Allow, assigned activity and approved structured fields | Deny; may respond through approved route | Reflection only | Own reflection; coach feedback only if acting in a separate coach context |
| View private recording | Exceptional, justified, time-bound support grant | Conditional explicit media grant; title alone insufficient | Conditional recipient/resource/purpose/time media grant | Allow under current guardian/household rules | Own access under age/account rules | Allow for own media |
| Share or revoke recording access | Deny by default; restricted support recovery only | Deny | Deny | Allow for authorized child under current consent | Deny | Allow for own media |
| Export player information | Conditional narrow support process | Conditional permitted club records only | Conditional separate scoped export grant | Allow for authorized household information | Deny for minor; approved guardian route | Allow for own information |
| Manage club subscription/seats | Conditional billing-support scope, not media | Allow, own club billing capability and fresh assurance | Deny | Deny | Deny | Deny unless also acting as club admin |
| Buy/manage Family subscription | Deny by default | Deny | Deny | Allow for own household with fresh assurance | Deny | Allow for own account |
| Allocate sponsored entitlement | Conditional entitlement-support scope | Allow within contracted seats | Deny | Accept/decline for authorized child where required | Deny | Accept/decline for self |
| Change guardian relationship/consent | Conditional verified exceptional support process | Deny | Deny | Conditional authorized guardian process and fresh assurance | Deny | Own adult consent; cannot grant guardianship over another person |
| Assign platform role or bypass safety control | Allow only through protected dual-control policy to be specified | Deny | Deny | Deny | Deny | Deny |

## 5. Billing and media are separate capability planes

| Fact or event | Product/feature effect | Media effect | Administrative effect |
|---|---|---|---|
| Club pays for a player seat | May enable eligible club-assigned content and storage allocation | None without guardian/adult consent and a specific media grant | Does not create guardianship or coach access |
| Parent buys Family | Enables household premium features and the stated allowance | Enables the adult to opt into eligible cloud features; sharing remains deliberate | Does not grant club or platform authority |
| Coach is invited by a paying club | May enable assigned coaching tools after verification | None without an explicit recipient/resource/purpose/time grant | Does not create billing, guardian, review or publishing authority |
| Platform operator supports billing | May reconcile provider and entitlement state under a scoped role | None | Does not permit routine household or recording access |
| Recording is shared with a coach | Permits the named playback operation for the grant lifetime | Only named recording/resource, recipient, purpose and time window | Does not permit download/export unless separately granted; grants no billing or plan-publishing power |
| Subscription, membership or grant ends | Stop future affected entitlement or access after authoritative reconciliation | Revoke new media access; retained/downloaded bytes follow disclosed residual limits | Preserve required history and audit without retaining active authority |

Required data separation:

- purchaser and billing contact;
- workspace beneficiary and licensed-seat allocation;
- provider subscription and normalized feature entitlement;
- player enrollment and coach assignment;
- guardian relationship;
- recording consent; and
- media-sharing grant.

No identifier or join across these records may be treated as proof of another capability.

## 6. Context switching and non-composition rules

1. A parent who is also a coach chooses a visible household or club context before a protected action.
2. Capabilities from two contexts do not combine. Parent access cannot widen a coach session, and coach access cannot widen household access.
3. A person associated with multiple clubs selects exactly one club context; queries, exports, background jobs and notifications remain scoped to it.
4. An adult player who is also a coach or administrator receives those capabilities only in the separately selected context.
5. Child/player mode never retains or exposes an adult token, cached admin screen or privileged background action.
6. Pending, expired, suspended and revoked memberships grant no protected resource access.
7. Global content is readable only through its published/suitable form; ownership of global content does not imply access to private workspaces.

## 7. Resource ownership and minimum projection

| Resource | Owning authority | Minimum cross-context projection |
|---|---|---|
| Household/player profile | Adult/guardian or adult player under the approved account model | Club receives only verified enrollment fields required for the agreed purpose |
| Club workspace, roster and attendance | Club within the relevant lawful/contractual purpose | Household receives its own child's membership, assignments and disclosed results |
| Global drill/version | Platform content governance | Published suitable version and required provenance/rights metadata |
| Club plan/version | Club | Assigned recipient receives immutable approved version needed to perform the session |
| Home plan/version | Household/adult | Coach sees it only under a specific family coaching grant |
| Practice session/history | Player/household or adult, retaining assignment origin | Club receives only the disclosed completion/attendance projection for its assignment |
| Recording/part/chapter | Family/authorized guardian or adult player | No club projection by default; explicit media grant only |
| Assessment/feedback | Originating authorized coaching scope with player linkage | Only approved recipients and fields; no confidential unrestricted free text in initial scope |
| Billing/entitlement record | Purchaser/provider plus normalized backend ledger | Only eligibility/capacity result required by the selected workspace; never raw payment authority in media checks |
| Audit/deletion/suppression record | Protected operational control plane | Minimum evidence needed for accountability, rights handling and no-resurrection enforcement |

## 8. Required transitions for ACT-SP-037-02

| Transition | Required authorization result |
|---|---|
| Coach leaves a club | Revoke that club's memberships, team/player assignments, media grants and future protected requests; retain only governed history |
| Family/player leaves a club | Stop future club assignments/sponsorship/access; preserve private household history and apply club-record retention separately |
| Player joins a second club | Create a distinct membership; never expose either club's roster, plans, assessment or media to the other |
| Parent also becomes coach | Add a separate club/coach context; never merge it with guardian authority |
| Child reaches 18 | Establish adult control and review every guardian, club and media relationship; no automatic parental continuation |
| Guardian authority is disputed/revoked | Suspend affected consequential actions and sharing; route to the approved human process; coach/club cannot resolve the dispute |
| Club is suspended or closed | Block active club operations, staff access and future assignments; preserve/export/delete records under the approved lifecycle |
| Plan or content is withdrawn | Block affected future online use and offer reviewed replacements; preserve immutable completed-session history and disclose offline freshness limits |
| Subscription or sponsored seat ends | Stop future entitlement according to policy; do not delete personal footage or transfer guardianship |
| Media grant expires or is revoked | Deny new URLs/streams and renewals; record the known limit that previously downloaded bytes cannot be retracted |

## 9. Verification scenarios carried forward

ACT-SP-037-02 and `ACT-SP-037-03` must turn this matrix into transition examples and review evidence for at least:

- two unrelated households and two unrelated clubs;
- one parent who is also a coach and switches contexts;
- one player with memberships in two clubs;
- a pending and expired invitation;
- a revoked/departed coach;
- a child/player attempting guardian, billing, staff, export and other-player routes;
- a club administrator attempting household consent and recording access;
- completion of a club assignment without recording or video sharing;
- one recording granted to one coach and then revoked without losing home history;
- an adult transition at 18 with no automatic continuation of former guardian media access; and
- direct API, list, search, export, storage, realtime, notification and background-job paths, not only hidden user-interface controls.

These are required test specifications, not results. Real sessions, policies and negative evidence do not exist yet.

## 10. Review findings and decisions required

| ID | Review item | Proposed disposition |
|---|---|---|
| `OD-037-01` | Confirm the matrix as the product/technical authorization baseline | Accepted by Syed Ahmed for `ACT-SP-037-02` on 13 September 2026 |
| `OD-037-02` | Name the independent security reviewer | Keep final SP-037 acceptance blocked until a real reviewer accepts the role; owner review must not be relabeled independent |
| `OD-037-03` | Define Level 0 role assignment/dual-control and exceptional support boundaries | Carry as an explicit open security design item; do not grant a browse-all or impersonation role |
| `OD-037-04` | Confirm initial coach feedback fields and whether any free text is permitted | Accepted: structured, recipient-scoped feedback; unrestricted confidential free text is excluded |
| `OD-037-05` | Confirm exact club-visible completion projection | Accepted baseline: assignment ID, completion state/time and approved assessment fields; exclude home history and media |
| `OD-037-06` | Confirm whether media grants permit streaming only or controlled download | Accepted baseline: streaming/playback only; any download/export requires a separate explicit capability and residual-access disclosure |

## 11. Completion and handoff

- [x] Platform, club, parent, coach, child and adult-player actors are separated by active context.
- [x] Protected actions are mapped to resource ownership and explicit capabilities.
- [x] Billing entitlement, guardianship, coaching qualification and media grants are independent.
- [x] Multi-role and multi-club capabilities cannot compose across contexts.
- [x] Draft, review and publish permissions are distinct.
- [x] Departure, revocation, adulthood and club-closure transitions are identified for the next activity.
- [x] Required positive and negative fixtures are recorded without claiming tests were run.
- [x] Syed Ahmed reviewed version 0.1 and accepted `OD-037-01`, `OD-037-04`, `OD-037-05` and `OD-037-06` on 13 September 2026; version 1.0 records acceptance metadata only.
- [ ] A real independent security reviewer is named before final SP-037 acceptance.

Handoff status: Syed Ahmed accepted this matrix as the input to `ACT-SP-037-02`, with streaming-only media grants, structured feedback, minimum club completion projection and the independent-review vacancy retained exactly as stated. Final SP-037 acceptance remains blocked until the remaining activities and required review are complete.
