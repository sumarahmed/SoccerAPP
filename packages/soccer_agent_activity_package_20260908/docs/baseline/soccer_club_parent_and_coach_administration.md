**Soccer app: club, parent, coach, and player administration**

Prepared 6 September 2026. This extends the foundation, design pack, and security/delivery review with the user's requested club and direct-parent hierarchy. It is a product and systems specification. No application code, running database, authentication service, administration portal, or live club workspace has been created.

**1. Product model and hierarchy**

Support two entry routes in one product: a club organizes training for its members, or a parent manages practice directly for their family. An adult player can manage their own account. A family can also participate in a club while retaining its independent family area.

Use the requested Levels 0, 1, and 3, with **Level 2 accepted for coaches**. These levels explain responsibility; they are not a rule that everyone higher up can read everything below.

| Level | Role | Administrative responsibility | Access boundary |
|---|---|---|---|
| 0 | Platform administrator | Club provisioning/suspension, platform configuration, global content governance, support, entitlements and audit oversight | Separate operational, content-review and exceptional support permissions; no routine browse-all access to private recordings |
| 1 | Club administrator | Own club's settings, coaches, groups, rosters, training schedule, plan-publishing permissions and club reporting | Own club only; no control of a family's independent account, recording consent or unrelated activity |
| 1 | Parent/guardian administrator | Own family's profiles, suitable home plans, schedules, consent, recordings, club invitations and sharing | Own authorized children and household; no club-wide staff or roster powers |
| 2 | Coach | Assigned groups/players, age-based plan editing, drill selection, sessions, attendance and coaching assessments | Explicit club/team or family grant; publishing permission and coaching qualification are separate checks |
| 3 | Child/player user | Own assigned practice, permitted self-directed drills, recording controls, reflections and progress | Personal self-service; no staff-role assignment, access-policy changes or other-player administration |
| 3 | Adult player | Own practice and adult account/privacy controls | Own information and explicitly granted club/family relationships; adulthood does not confer club administration |

A person can be both a parent and a coach. Show the active workspace and role clearly, and check permissions for that context on every protected operation. Do not combine permissions from two clubs or treat a parent role as club administrator access. Direct-parent use does not require a club or a hired coach. A parent may optionally grant a coach limited access later.

**2. Club membership and family authority**

The club owns its plans, activities, staff assignments and necessary membership records. The family/adult controls personal practice media and its sharing under the selected consent design. Club subscription payment does not transfer guardianship or viewing rights. Define the precise legal data responsibilities in the first-market review; this specification sets the intended product boundaries.

Joining a club uses a verified, expiring invitation or enrollment process. For minors, link an existing or newly created player through the authorized guardian; do not let a coach claim guardianship by entering a child's name. Avoid a public directory of children. A pending invitation gives no access to the family's data.

A player can hold more than one club membership without exposing one club's roster, plans or assessments to another. Clubs receive only the enrollment details and activity information needed for their agreed purpose. Independent home practice remains private unless specifically shared. A club-assigned session may return its disclosed completion summary; recording and uploading video are optional and separately authorized.

When a coach leaves, remove the relevant assignments and grants and re-check authorization on subsequent requests. When a family leaves a club, stop future club assignments and access under that membership; preserve its private household practice history. Do not immediately erase a club's legitimate historical attendance record without applying its defined retention and deletion process. Club closure follows the same explicit separation. Club-created training content follows its declared license and access terms, rather than silently becoming permanent family property.

At 18, apply the adult-account transition to guardian permissions. Review existing club and sharing relationships with the adult player; do not automatically extend parental video access or introduce a new club grant. Do not infer an exact birthday from an age band. Collect only the age information required by the agreed eligibility process, with correction and review paths.

**3. Coach administration capabilities**

Provide a responsive administration portal usable on desktop and tablet, with essential roster/session controls usable on a phone. The child-facing training app remains focused on practice. The portal uses the same governed backend; hiding controls in the interface is not sufficient authorization.

| Area | Coach capability within assigned scope | Club/platform management capability |
|---|---|---|
| Overview | See upcoming activities, assigned groups, draft plans and work awaiting review | Club dashboard; scoped staffing and operational summaries |
| Drill library | Search by age suitability, skill, position, equipment, assistance and duration; preview demos; save suitable selections | Govern global and club-owned catalogs, licenses and publication rights |
| Plan editor | Add, remove, replace and reorder drills; select approved variants; arrange sets/rest within approved limits | Decide which coaches can draft, review or publish club plans |
| Age/group plans | Maintain plans for age bands, ability groups, teams and individual players | Create cohorts and eligibility rules; assign coaches and enrollment permissions |
| Plan reuse | Copy an approved template into an editable club plan; create a new version; compare changes | Manage template ownership and adoption of updated platform content |
| Individual adaptation | Propose an appropriate substitution or reduced workload within reviewed choices | Require qualified review for changes outside the approved suitability/prescription |
| Scheduling | Schedule practices and activities; assign plans to a group or player; cancel/reschedule future sessions | Club-wide calendar and coach allocation |
| Attendance/progress | Record attendance, completion and source-labelled coaching assessments for assigned activity | Scoped reporting and authorized exports; no public child leaderboard by default |
| Feedback | Provide structured comments on assigned work; review specifically shared recordings | Configure allowed recipient channels and safeguarding rules; no unrestricted child messaging in the baseline |
| New drill proposals | Draft instructions, media, suitability and rationale | Qualified content review, asset-rights checks and controlled publication |
| Lifecycle | Archive obsolete drafts, withdraw an unsafe assignment and propose replacements | Global safety withdrawal; audit of publication, role and scope changes |

Administrative access and coaching qualification are different properties. Being a club administrator or receiving a Coach role does not automatically authorize approval of new youth training prescriptions. A club can grant a qualified coach both authoring and publishing capabilities, with an identifiable review record and appropriate separation for higher-risk new content.

Parents can add/remove/reorder suitable approved drills in their own home plan and choose reviewed variants. They cannot edit the platform's master drill, relax published safety limits, or modify the club's shared plan for other players. A parent may skip or stop a child's activity and request a club-plan adjustment; this must never prevent immediate stopping of recording.

**4. Plan inheritance, age suitability, and publication**

Maintain a global, versioned drill catalog and plan templates. A club or household can create its own plan derived from a template, referencing approved drill versions. Club additions stay private to that club unless deliberately licensed and approved for wider distribution.

Suggested publication sequence: Draft, In review, Approved, Scheduled/Published, Archived; Withdrawn applies when safety or rights require removal. Membership administration and editorial approval use distinct permissions. A person with draft rights cannot publish through a direct API call.

1. Select the workspace, age band/team, ability goal and practice context.
2. Start from a template or an existing plan version.
3. Add/remove/reorder drills and choose supported variants. Show equipment, assistance, prerequisites and estimated total work/rest time.
4. Validate every recipient's suitability. A group label alone is not evidence that every member is eligible. Mixed-age groups need a safe shared plan or explicit per-player variants.
5. Review the changes and any new content. Block publication of unapproved variants, missing demonstrations, withdrawn assets or unsafe parameter changes.
6. Publish an immutable plan version and assign it to explicit recipients or a defined cohort. Record who assigned it, its effective dates, and whether it is club or home practice.
7. At session start, preserve the exact approved plan/drill versions and resolved work/rest settings. Historical sessions continue to show what was actually practised.

Removing a drill from a plan changes that plan's future version. It does not delete the platform drill, another club's plan or completed session history. Updates to a global template produce a reviewable change for derived plans; they do not silently overwrite club customization. Global safety withdrawal is different: block affected future online starts and offer reviewed replacements. Offline devices cannot receive an immediate withdrawal, so define and test the permitted freshness window before launch.

Edits to ordinary plans do not reorder a session already recording. A safety withdrawal may stop an online session with an explanation; it must not silently switch the drill. A downloaded assignment includes its origin and version; reconnection re-checks membership, cancellation, suitability and deletion state. Revocation stops new server access, while previously cached/exported data has the limitations documented in the security review.

Club and home plans remain separately labelled. If two assignments overlap, show both with source and due date; do not silently concatenate workloads or assume the app can prescribe a safe combined load. The guardian/adult and relevant coach resolve conflicting schedules. The current pilot drills remain drafts awaiting coaching approval.

**5. Permissions that must remain separate**

| Action | Platform admin | Club admin | Assigned coach | Parent admin | Player |
|---|---|---|---|---|---|
| Create/suspend a club workspace | Authorized operator | No | No | No | No |
| Invite/revoke club staff | Scoped operational support only | Own club | Only with separately delegated staff-management permission | No | No |
| Edit a club plan | Only with content scope | With plan permission | With plan permission, assigned scope | Request change; own home copy only | No |
| Publish new drill instructions | Qualified approval plus publishing scope | Same requirement | Same requirement | No | No |
| Select existing suitable drills for home practice | No routine family access | No routine family access | Only with family grant | Own family | Within permitted self-directed choices |
| Change guardian links or recording consent | Controlled verified support only | No | No | Authorized guardian process | Adult self; minors cannot grant guardian authority |
| See club completion/attendance | Aggregate operations by default | Necessary own-club records | Assigned activity only | Own child's records | Own records |
| See private practice footage | Exceptional, justified support process only | Explicit grant; admin title is insufficient | Explicit recipient/purpose/time grant | Authorized family access | Own access under age/account rules |
| Export player information | Narrow authorized process | Permitted club records only | Separately granted, scoped export | Own authorized information | Adult self; minor export under guardian policy |
| Assign a platform role or bypass a safety control | Protected platform authority | No | No | No | No |

Use current membership, action permission, resource scope and relevant consent/grant together. Test aggregate dashboards, exports, search, background jobs, notifications and storage access as well as detail screens. Avoid confidential free-text coaching notes in the initial scope; structured, age-appropriate feedback is easier to govern.

**6. Database design and present status**

**There is no working database.** Supabase/PostgreSQL for the backend, SQLite for device state, and private object storage for videos are proposed components. No tables, SQL migrations, seeded drill records, live accounts, policies, API integration or backup jobs have been built. Design files and example screens do not persist real app activity.

The recommended initial architecture is one managed backend with logically isolated club and household workspaces, rather than a database per child or a separate app per club. Global approved content sits outside private workspace ownership. Player/guardian identity has a protected home context; clubs receive deliberately limited enrollment records. A single generic role or club identifier on the account cannot represent all these relationships.

| Proposed record group | Responsibility and relationship |
|---|---|
| Account and player profile | Sign-in identity separated from player identity; minor supervision and adult transition |
| Workspace and club/household details | Distinguish club and home context, settings, lifecycle and ownership |
| Membership and capability assignment | Account, workspace, role/capabilities, active state and validity; multiple scopes per person |
| Guardian relationship | Verified authority over a player, independent of club membership or payment |
| Team/cohort and eligibility rule | Workspace-owned grouping, age/season basis and suitability settings |
| Enrollment and coach assignment | Player/cohort relationship plus coach scope; limited club-visible profile and agreed purpose |
| Drill and drill version | Global or club-owned learning content, age/ability variants, approval state and media references |
| Content approval and license | Reviewer, scope, version, date, rights and withdrawal record |
| Plan and immutable plan version | Home/club ownership, source template, approved sequence and published state |
| Plan item | Exact drill version, sequence and approved work/rest/variant parameters |
| Assignment and recipient | Plan version, assigning scope, player/cohort recipient, schedule and cancellation state |
| Activity and attendance | Club session/calendar event, coach, participants and permitted attendance record |
| Practice session and attempts | Player, originating assignment/workspace, immutable practice snapshot and actual completion |
| Assessment and feedback | Author, player, activity scope, source, visible recipients and retention |
| Recording, part and chapter | Media references controlled by family/adult, independent of sponsoring club; upload/deletion state |
| Consent and sharing grant | Purpose, notice version, authorizing guardian/adult, specific recipient/resources, expiry and withdrawal |
| Storage allowance and sponsorship | Who pays or allocates capacity; never a substitute for media-viewing authorization |
| Audit, sync and deletion records | Attributable administrative changes, idempotent offline events and suppression after deletion |

Private records and their relationships must preserve workspace ownership; a client cannot attach one club's plan to another club's team or reassign a recording owner. Joining records must not accidentally expose the full player/household profile. Quotas, retention tasks, reports and storage paths need the same boundaries. Account recovery and exceptional platform support require attributable, limited actions; avoid unrestricted impersonation.

Supabase supports row-level security for database records and access policies for Storage operations. These are implementation primitives: the proposed club/household policy must still be written and verified. Do not rely on interface filtering or expose a service key in an admin browser; a service key can bypass Storage policies. [Database row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security), [Storage access control](https://supabase.com/docs/guides/storage/security/access-control).

When development is commissioned, database readiness means reproducible migrations, approved seed content, scoped authentication, positive/negative permission tests, integrated read/write flows, deletion/revocation behavior and a demonstrated restore. First validate two unrelated clubs, two unrelated households, one parent who also coaches, one multi-club player, one revoked coach, one adult transition and one standalone family. Those are acceptance scenarios, not test results obtained today.

**7. Administration screen specification**

Extend the existing F01–F13 inventory with F14–F22. These are specified screens; no additional visual board or editable Figma frame has been produced in this update.

| ID | Screen | Required controls and states |
|---|---|---|
| F14 | Workspace and role switcher | Own family, permitted club/team contexts; active role label; revoked/pending membership; no cross-context carryover |
| F15 | Platform administration | Club lifecycle, global content-review queue, scoped operator permissions, support audit; private-media access excluded by default |
| F16 | Club dashboard and settings | Activities, cohorts, staff allocation, publishing permissions and club-scoped usage; empty/suspended/read-only states |
| F17 | Coach/team/roster management | Invite status/expiry, assign or revoke coaches, guardian-approved enrollment, transfer/leave, restricted player details |
| F18 | Age/cohort plan editor | Template selector, suitable-drill picker, add/remove/reorder, approved variants, work/rest summary, prerequisites, draft save, change comparison |
| F19 | Plan review and publishing | Version diff, suitability failures, reviewer, rights, effective date, recipients, publish/withdraw; stale/concurrent-edit conflicts |
| F20 | Activity calendar and assignment | Team/player selection, date, origin, plan version, schedule conflict, cancel/reschedule, offline delivery status |
| F21 | Attendance, progress and coaching feedback | Assigned players only, source-labelled assessment, permitted shared media, expired access, restricted exports |
| F22 | Parent/adult club access and sharing | Join/leave, purpose notice, club completion visibility, per-recipient video grant, expiry, revoke and adult transition |

Update F01 to offer direct-family/adult use and joining an existing club; staff entry leads to its authorized admin area. F03 labels Home plan versus the named club assignment. F11/F12 explain that club funding does not enable recording, cloud upload or coach playback. Do not expose the global child roster when choosing recipients.

Prototype routes must cover: club admin inviting a coach; coach adapting and publishing an age plan; parent accepting membership; child completing a club assignment without video; parent granting then revoking one clip; direct-parent plan editing; an adult player; and a parent/coach switching contexts without data leakage.

**8. Delivery impact and completed work**

This is a substantive scope extension: it adds club administration, scoped membership, plan publishing, scheduled activities, coach workflow and a wider privacy model. The earlier 12–19 week family-focused estimate does not price this expansion. Re-estimate after the new contracts, admin design and database-isolation feasibility; do not assert a delivery date before evidence or specialist estimates.

The backlog now contains **74 proposed tasks**, including SP-037–SP-046 for this extension. The security register contains S01–S27; S18–S22 concern club/coach administration, with the new R01–R20 review providing detailed closure actions across the product. The existing foundation and pilot/design pack are updated to match. Club behavior is part of the intended product; any decision to launch only one route first must be explicit, with the other route's status visible.

The deliverable completed here is the administration and database specification. The database, portals, permissions, club records, coach approvals and running workflows remain unimplemented under the current no-code instruction.


**9. Hosting, purchases and administrative commercial controls**

**soccer_end_to_end_platform_and_business_plan.md** is the current decision document for device data, hosting, subscriptions and business operations. **soccer_subscription_and_cost_model.xlsx** contains editable pricing, usage, operating-cost and build-budget assumptions. All prices are proposals; Australia/English remains an assumption. No working app, database or subscription service exists.

The accepted hierarchy is Level 0 platform, Level 1 club or parent, Level 2 coach, Level 3 player. Treat these as separate scoped capability sets. The responsive Next.js web portal is the primary coach/club management surface; the Flutter mobile app owns camera practice, local media and offline history.

A club administrator manages contracted player capacity, seat assignment, billing contacts and invoices through protected web flows. Coaches invited by the club do not need an additional paid coach plan. Club sponsorship grants eligible assigned content without requiring a second Family subscription. Parents may separately buy Family for independent household programs and its 20 GB cloud allowance. Club storage pools 5 GB per licensed seat; guardian/adult grants still govern viewing. Neither platform billing support nor coach billing creates routine video access.

Maintain separate purchaser, workspace beneficiary, provider subscription, licensed seats, player enrollment, feature entitlement and media-sharing records. Refunds and cancellation are provider-specific. Leaving a club revokes club privileges and future sponsorship under the documented transition policy while preserving authorized personal history. Do not silently move a store purchase between households during restoration.

Use the F23–F26 billing/offline/cloud design requirements and SP-047–SP-058 backlog extension alongside F14–F22. Production responsibilities include seat reconciliation, failed-payment handling, invoices/tax records, consent requests, club offboarding, support and recovery rehearsals.


**10. Identity assurance and end-to-end review requirements**

**soccer_end_to_end_security_and_gap_review.md** defines the current MFA, account recovery, restricted child-session, web/API, retention and verification requirements. It records **20 review actions (R01–R20)** mapped to the existing **27 security risk themes (S01–S27)**. These are open design/verification actions, not discovered vulnerabilities in a running app. The delivery backlog now contains **74 proposed issues**; no security control is implemented by these documents.

Club administrators and coaches must enroll and verify TOTP MFA before their protected workspace is usable. Google and Microsoft Authenticator operate as compatible code generators. Inviting, paying for or promoting a user never bypasses MFA, establishes coaching qualification or grants guardianship. A newly invited coach with no factor has enrollment-only access. Recovery does not rely solely on email or on a colleague's claim.

Parents and adult players require MFA before private cloud access, sharing and sensitive account changes. Child practice runs under its own restricted player/device grant. Workspace switching cannot aggregate roles across clubs or retain adult tokens in the child's usable context. Current server checks and the review's session/step-up policy apply to role changes, exports, billing authority, factor management and exceptional support.

Define verified club onboarding, pending/expired single-use invitations, duplicate identities, separate second-guardian authority, contested guardianship, coach departure and the age-18 transition. A coach cannot resolve a family dispute or reset a parent's authenticator. Use a named restricted support process, safe handling of safeguarding reports, minimal identity evidence and attributable decisions. No public child directory or routine operator impersonation is introduced.

Apply the reviewed retention schedule to rosters, attendance and assessments as well as video. Coach feedback and imports/exports are untrusted inputs; server validation and output safety are required. F27–F33 specify identity, handoff, report and rights-request screens. SP-059–SP-074 define additional delivery evidence, without provisioning any portal or database.
