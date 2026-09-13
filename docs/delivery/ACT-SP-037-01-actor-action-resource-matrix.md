# ACT-SP-037-01 — Actor, action and resource matrix

| Field | Recorded value |
|---|---|
| Artifact version | 1.2 accepted design baseline |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-037-01` — Model actors and scoped capabilities |
| Source issue | `SP-037` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Identity agent |
| Accountable owner | Syed Ahmed acting as Product/technical lead |
| Required reviewer | Independent adversarial agent review completed against version 1.0; accountable human security reviewer remains unassigned |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; remediation based on review of commit `613640a3d0454df291229204717571d1e383537b` |
| Run identity | `PREP-ACT-SP-037-01-20260913-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-037-01-actor-action-resource-matrix.md` |
| Authority | Syed Ahmed's 13 September 2026 instruction to start the next review |
| External effects | Local remediation draft only; no commit, push, Linear mutation, identity creation, invitation or permission change |
| Spend/time | AUD 0 incremental; attempt 1; 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 13 September 2026 as the SP-037 design baseline; not implementation evidence or production authorization |

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
| Assign platform role or bypass safety control | Conditional only through the Level 0 controls in section 10.3; emergency suspension/revocation never waits for dual control | Deny | Deny | Deny | Deny | Deny |

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

## 10. Normative authorization controls

The terms in this section are requirements. Implementations may use different component names, but they must preserve these decisions and produce the listed evidence.

### 10.1 Server authorization tuple and provenance

Every protected decision uses one server-constructed tuple:

```text
(principal_id, principal_type, selected_context_type, selected_context_id,
 dependencies[{type, id, generation, origin_context_id}],
 capability_assignment_id, capability_assignment_version,
 grant_id, grant_version, action, resource_type, resource_id,
 resource_generation, canonical_resource_origin_context_id,
 projection_or_share_id, purpose, assurance_level,
 scoped_policy_epochs[{scope_type, scope_id, epoch}], request_time)
```

- The server resolves resource origin and the current relationship; caller-supplied ownership, tenant, household, club, relationship or role claims are hints only.
- The selected context and canonical resource origin must match, unless an explicit projection or cross-context grant names the recipient context, canonical origin, exact immutable resources and all authorizing dependencies.
- For a minor, household membership alone is insufficient: the tuple must include the current authority relationship for the exact player.
- `dependencies` is a typed set, not a single relationship. It includes every fact required by the decision, such as club membership, team/player assignment, guardian authority, media grant, qualification, approval and entitlement. Loss or generation change of any mandatory dependency denies.
- Each resource has one canonical owning context and generation. A multi-origin business object is represented by a canonical object plus explicit immutable projections, each with its own origin, purpose and generation; an implementation must not choose among multiple origins supplied by the caller.
- Applicable capability assignments, grants and projections are addressed by ID and version. Replacement, rollback, deletion or revocation invalidates a request carrying an older version.
- Lists, searches, counts, joins, exports, bulk operations, cache entries, realtime channels, notifications and asynchronous jobs enforce the same tuple per returned or processed resource.
- A missing, ambiguous, expired or contradictory element denies. A control-plane lookup failure denies protected access and is observable.

### 10.2 Normative policy dictionary

| Term | Testable meaning |
|---|---|
| Current authority | The authoritative relationship record is active at request time, its generation matches the request, and no newer suspension, dispute, revocation, deletion or adult-transition state exists |
| Fresh assurance | Authentication assurance at or above the capability's configured level, completed inside its recorded maximum age; sensitive guardian, operator, publishing and export actions require step-up authentication |
| Qualified | A current, independently sourced qualification record explicitly covers the action and population; absence, expiry or unverifiable state denies |
| Explicitly shared | A current grant names the principal, their exact relationship/context, immutable resource IDs, allowed operation, purpose, issue time and absolute expiry |
| Restricted support | A case-bound Level 0 capability issued through the just-in-time process in section 10.3; it never means general user impersonation or browse-all access |
| Checked request | Authorization is evaluated against current authoritative state at the point of data access or action, not only when a session, token, URL or job was created |
| Governed history | Immutable minimum records retained under a named legal, contractual, safety or audit purpose; former actors receive no access merely because they created or once viewed them |
| Derived solely | The grant has one or more recorded authorizing relationships and becomes non-authorizing when every such relationship is inactive or its generation changes |
| Active membership | An authoritative membership dependency is active now, for the selected context and requested action, and its recorded generation is current |
| Capability assignment | A server-issued, versioned association between a principal/context and named actions/resources; role names alone are not capabilities |
| Assurance level | An enumerated authentication strength from the identity policy; the capability specifies the minimum level and maximum elapsed time since verification |
| Purpose | A value from the controlled purpose registry, not free text; each purpose defines permitted actions, resource classes, recipients, retention and incompatible reuse |
| Relationship generation | A monotonic version changed by suspension, dispute, revocation, replacement or material scope change; older generations never authorize |
| Resource generation | A monotonic version changed by replacement, withdrawal, deletion, restoration or material ownership/scope change |
| Scoped policy epoch | A monotonic version for one principal, context, relationship, grant, capability assignment or resource; it never acts as one platform-global invalidation counter |
| Explicit cross-context grant | A versioned grant naming both recipient context and canonical resource-origin context, every required relationship dependency, exact resources, action, purpose and expiry |
| Authoritative-store freshness | The enforcement surface has successfully read or subscribed to a version no older than that surface's convergence limit; unknown or older state denies |
| Risk-required invalidation | The deterministic transition table in ACT-SP-037-02 section 7.3; implementations cannot choose whether invalidation applies |

The implementation must maintain an endpoint-to-rule register showing the authoritative data source, assurance level, freshness window, error behavior and tests for every protected endpoint and asynchronous consumer.

### 10.3 Level 0 and exceptional support

- Level 0 capabilities are separate named roles. No Level 0 identity receives a reusable browse-all or unrestricted impersonation capability.
- Assignment and renewal require two distinct authorized people, phishing-resistant MFA and an immutable audit record. Suspension and revocation may occur unilaterally or automatically and take effect immediately; they never wait for a second person. A second person reviews emergency action after access has stopped.
- An approver must hold the separate `level0-approver` capability in the same operator domain, must not be the requester, subject, case assignee or other approver, and must have no unresolved suspension or conflict flag. The request and each approval expire after 15 minutes. Loss of either approver's authority before issuance cancels the request.
- Routine support receives metadata needed for the case only. Access to a household, child record or private recording requires a case ID, named resource IDs, purpose, approving person and a maximum 30-minute just-in-time grant.
- A break-glass grant uses the same resource and time bounds, records the stated emergency, visibly watermarks the support session, and triggers independent next-business-day audit review. It cannot mint a reusable end-user session or token.
- The affected adult is notified after access unless a recorded safety or legal hold delays notice; the reason and notice decision are auditable.
- Level 0 grants expire automatically, are not renewable by the holder, cannot be transferred, and are revoked when the case closes or the operator relationship ends. Any authorized security operator or automated compromise control can suspend a grant immediately; only a new two-person issuance can restore access.

### 10.4 Machine and service principals

- Each workload has a distinct, rotatable workload identity; shared database owner credentials and human session tokens are prohibited.
- A job contract binds tenant/context, action, immutable resource identifiers, purpose, policy epoch, relationship generation, issuer, issue time, expiry and idempotency key. Messages are authenticated and reject modification, replay, expiry and wrong consumers.
- Tenant and resource scope is derived from server-held records. Workers reauthorize at execution and before each disclosure or mutation; authorization captured when queued is insufficient.
- Database and storage roles do not bypass tenant policy. Any narrowly unavoidable privileged procedure accepts the full authorization tuple, validates it, exposes no arbitrary query surface and produces immutable audit evidence.
- Credentials, network paths, storage permissions and queue consumption are least-privilege and separately revocable. A service principal can never approve its own run, guardian decision, youth-content decision or permission expansion.

### 10.5 Media-grant schema and delivery

A media grant binds all of: grant ID/version; principal ID; recipient role/relationship ID and generation; recipient context; canonical resource-origin context; every mandatory membership, assignment, guardian and consent dependency with ID/generation; immutable resource IDs/generations; allowed operation; purpose; authorizing adult/guardian and relationship generation; issue time; and absolute expiry. Loss or generation change of any dependency invalidates the whole grant. Resource collections are snapshots by default; later-created media is excluded.

Playback uses an authorization gateway that rechecks the current dependency set before every manifest, key and media-segment response. Delivery credentials are proof-of-possession tokens bound to the recipient principal, active session, registered client key, grant/version, resource/generation and gateway audience; copied bearer use from another session or device is denied. Tokens expire within 60 seconds and do not independently authorize a segment. Raw reusable bucket URLs are prohibited.

Revocation, accepted guardian dispute and adult cutoff add the affected token/grant/session versions to the gateway deny set before the authoritative transaction reports completion. New requests deny immediately; an in-flight segment may finish, but the next segment begins a new checked request and is denied within the ten-second high-risk convergence limit in ACT-SP-037-02 section 7.3. Controlled CDN entries and object paths are invalidated or rotated where needed. The product discloses that bytes already delivered, screen capture and uncontrolled downstream copies cannot be technically recalled.

### 10.6 Separation of duties for content

| Content risk | Required separation |
|---|---|
| Low-risk editorial correction with no change to instruction, audience, suitability, rights or media | One qualified editor may review and publish; the change remains attributable |
| Youth instruction, suitability, assessment guidance, media, rights, safety or audience change | `author_id != reviewer_id`; the publisher must hold a separate publish capability and `publisher_id != author_id`. For safety, suitability or rights changes, `publisher_id != reviewer_id`, requiring three distinct people |
| Global safety withdrawal or emergency replacement | Two-person approval unless immediate withdrawal is needed to prevent harm; emergency action is attributable and independently reviewed next business day |

The server derives risk from the immutable diff, changed field/resource classes and controlled rules; the author cannot select or lower it. An unclassified or ambiguous change defaults to the higher-risk class. Approval binds a cryptographic digest of the exact content, assets, rights, suitability labels, audience, locale, derived risk and version. Publish rechecks identity separation and capability and publishes only that digest; any mutation invalidates approval and returns the item to review.

## 11. Review findings and decisions required

| ID | Review item | Proposed disposition |
|---|---|---|
| `OD-037-01` | Confirm the matrix as the product/technical authorization baseline | Accepted by Syed Ahmed for `ACT-SP-037-02` on 13 September 2026 |
| `OD-037-02` | Obtain independent security review | Independent adversarial agent reviewed versions 1.0 and 1.1; version 1.2 applies the returned corrections, and accountable human review remains a production gate |
| `OD-037-03` | Define Level 0 role assignment/dual-control and exceptional support boundaries | Strengthened in version 1.2 section 10.3 after follow-up review; pending owner acceptance |
| `OD-037-04` | Confirm initial coach feedback fields and whether any free text is permitted | Accepted: structured, recipient-scoped feedback; unrestricted confidential free text is excluded |
| `OD-037-05` | Confirm exact club-visible completion projection | Accepted baseline: assignment ID, completion state/time and approved assessment fields; exclude home history and media |
| `OD-037-06` | Confirm whether media grants permit streaming only or controlled download | Accepted baseline: streaming/playback only; any download/export requires a separate explicit capability and residual-access disclosure |
| `OD-037-13` | Define Level 0, machine-principal, authorization-tuple, media-delivery and content-separation controls | Accepted by Syed Ahmed in version 1.2 on 13 September 2026 after both adversarial reviews |

## 12. Completion and handoff

- [x] Platform, club, parent, coach, child and adult-player actors are separated by active context.
- [x] Protected actions are mapped to resource ownership and explicit capabilities.
- [x] Billing entitlement, guardianship, coaching qualification and media grants are independent.
- [x] Multi-role and multi-club capabilities cannot compose across contexts.
- [x] Draft, review and publish permissions are distinct.
- [x] Departure, revocation, adulthood and club-closure transitions are identified for the next activity.
- [x] Required positive and negative fixtures are recorded without claiming tests were run.
- [x] Syed Ahmed reviewed version 0.1 and accepted `OD-037-01`, `OD-037-04`, `OD-037-05` and `OD-037-06` on 13 September 2026; version 1.0 records that historical acceptance.
- [x] Version 1.1 received independent adversarial follow-up review: four findings closed, nine partial and two new Medium risks.
- [x] Version 1.2 addresses every remaining authorization, operator, media, provenance, policy-definition and separation-of-duties issue returned by that review.
- [x] Syed Ahmed accepted the version 1.2 remediated decisions and candidate SHA-256 `5CAC31266066C2D065A4D69588A7945765D81349EA54650BE8080EDDFD878033` on 13 September 2026.
- [ ] An accountable human security reviewer is named before production use involving real youth, guardian or private-media data.

Handoff status: Syed Ahmed accepted version 1.2 after both independent agent-review cycles. The matrix is the completed SP-037 design baseline and may feed dependent specification work. It remains design evidence, not runtime or accountable human-security evidence.
