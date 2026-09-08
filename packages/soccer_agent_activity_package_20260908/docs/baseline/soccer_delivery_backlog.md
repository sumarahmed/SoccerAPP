**Soccer app: proposed delivery backlog**

Prepared 5 September 2026; extended 6 September 2026 for club/direct-parent administration and coach workflows. Companion to the review, foundation/design documents and soccer_club_parent_and_coach_administration.md. Contains **74 planning issues**. SP-001–SP-074 are local reference identifiers, not live Linear or Jira issues. No board, repository, working database, implementation, external engagement, or automation has been created.

The current authorization is planning and design without application code. “Ready for planning” permits specification work; it does not authorize future build tasks. Accountable roles below require named people before work is delegated. Agents may prepare drafts and evidence within their scope; they cannot invent a specialist’s approval.

**Board conventions**

Use one Soccer App team and the G0–G6 projects described in the review. Statuses: Backlog, Ready, In Progress, Review, Validation, Done, Blocked, Cancelled. Use one human assignee/owner, an optional delegated agent, relevant functional labels, and issue dependencies. Store required task details in a template when native fields are unavailable. Never put raw child footage, secrets, signed playback URLs, or identifying research notes in issues.

P0 = prerequisite for the indicated gate; P1 = required when its commercial/operational capability is included; P2 = optional future work. A priority does not waive a dependency. All rows are **Proposed**, with SP-001–SP-004 suitable to refine now as planning work. Nothing in this backlog is marked completed merely because its specification exists.

Every issue requires: problem/outcome; explicit scope and exclusions; accountable human; risk and allowed actions/data; dependencies; acceptance criteria; evidence; time/cost limit; run and artifact links; reviewer; and release implications. Add the exact repository/environment when implementation starts. Completion criteria should be refined before delegation without weakening the gate they support.

**G0 — Definition and delivery setup**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-001 — Resolve launch and account assumptions | P0 / Decision | None | Decision log names first market/language, initial pilot age representation, solo/assisted expectations, adult account treatment, and the confirmed two recording modes | Founder/product owner |
| SP-002 — Specify and configure the delivery board | P0 / Specification, later configuration | SP-001 for final scope; configuration requires enabled access | One team; phase projects; issue template; workflow; owners; dependency links; no duplicate source of progress; verify permissions and use a sample issue | Delivery owner |
| SP-003 — Set agent scope and evidence policy | P0 / Specification | None | Allowed tools/data/actions, explicit repository selection, risk routing, time/spend limits, stop/retry behavior, independent review, and Done rules; S09–S12 covered | Technical lead/founder |
| SP-004 — Set pilot metrics, budget, and specialist work scopes | P0 / Decision | SP-001 | Success criteria fixed before research; spending boundaries; device access plan; coaching, animation, privacy, and engineering estimate requests with deliverables; quotes distinguished from assumptions | Founder |

**G1 — Content, experience, and security contracts**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-005 — Review all 12 drill contracts | P0 / Content verification | SP-001, SP-004 | D01–D12 reviewed by a qualified youth coach; age/ability variants, setup, cues, timings, prerequisites and progression corrected; D12 has suitable goalkeeper input; named approval per releasable variant | Coach/content owner |
| SP-006 — Produce and review three animation samples | P0 / Content production | Drafts may start now; release approval depends on SP-005 | A01 close control, A02 receiving/passing, A03 moving drill; realistic foot/ball contact and useful camera view; caption/cue timing; source rights; coach feedback and approved version links | Animator/content owner with coach acceptance |
| SP-007 — Complete core screen and state design | P0 / Design | SP-001; SP-010 and SP-011 for final behavior | Editable Figma design if supported access is enabled, otherwise a clearly labelled handoff; all F01–F13 states, portrait/landscape training view, parent controls, large timer, actual record state, interruption, quota and deletion; youngest-player and adult routes reviewed | Product designer |
| SP-008 — Specify data map and access matrix | P0 / Security specification | SP-001, SP-037 | Sensitive records/actions mapped to player, guardian, club admin, coach, staff and service scope; limited enrollment projections; processors/regions, consent and lifecycle; billing does not grant media access | Technical lead |
| SP-009 — Review threats, privacy, and store audience | P0 / Specialist review | SP-008, SP-059–SP-063; draft SP-007, SP-010, SP-011, SP-038 | S01–S27 and R01–R20 mapped to controls, owners and gates; mobile and administrative web/API coverage; first-market club/family responsibilities and store requirements reflected in flows; outstanding findings explicit | Security reviewer/privacy adviser with founder |
| SP-010 — Fix recording and local-protection contracts | P0 / Specification | SP-001, SP-008 | Both modes; work/rest versus manual pause semantics; interruption gaps; timer source; local finalization/recovery; microphone/camera controls; device backup/export/lock/key behavior; no claim of guaranteed capture through all OS interruptions | Mobile lead |
| SP-011 — Fix cloud, consent, deletion and recovery contracts | P0 / Specification | SP-001, SP-008 | Proposed allowance/expiry and their start point; explicit opt-in; authorization/link lifetime; quota reservation; withdraw/delete/offline rules; thumbnails and fragments; separate object recovery and deletion replay; truthful notices | Backend lead/product owner |

**G2 — Technical feasibility, after implementation is commissioned**

Use synthetic profiles and licensed or consenting adult demonstration footage. Do not recruit children to prove basic camera feasibility. SP-012–SP-018 specify future implementation and tests; no code is authorized by their inclusion here.

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-012 — Establish repository, environments and secured CI | P0 / Implementation | SP-003, SP-008, relevant SP-009 findings; build commissioned | Explicit private repo; protected branch and reviewers; current-commit checks; isolated dev/staging; scoped identities; no production secrets in PR jobs; release-plan limitations addressed; failing change demonstrably blocked | Technical lead |
| SP-013 — Exercise one bounded agent assignment | P0 / Verification | SP-002, SP-003, SP-012 | Correct repo/environment; one actual run; status links; bounded cost; reviewed artifact; cancellation and injected-instruction handling; no ability to self-approve or change protection; record native integration limitations | Agent workflow owner |
| SP-014 — Prove exercise clips with timer and demo | P0 / Feasibility | SP-010, SP-012; delegation via SP-013 if used | Named representative iOS/Android devices show preview, realistic demo, countdown, timer, cues and recorded work clips together; usable frames and durable local files; behavior measured against thresholds set before testing | Mobile lead/device QA |
| SP-015 — Prove full-session mode and chapters | P0 / Feasibility | SP-014 | Proposed maximum 30-minute capture test includes programmed rests; chapter offsets refer to original recording; manual pause/resume and gaps accurately represented; no unnecessary duplicate full video; 30 minutes is a technical test, not a youth training prescription | Mobile lead/device QA |
| SP-016 — Test media interruptions and device limits | P0 / Verification | SP-014, SP-015 | Lock/background, call/interruption, low storage, denied permission, app termination, heat and battery scenarios; recoverable parts discoverable; failures never falsely show a saved or continuously recorded session; proposed supported-device floor | Device QA/mobile lead |
| SP-017 — Prove one authorized resumable cloud path | P0 / Feasibility | SP-008, SP-011, SP-012, local output from SP-014 | Upload occurs after local save and opt-in; network retry and quota handled; second household denied; deletion/withdrawal defeats stale upload; documented playback-access lifetime; no public child-media path | Backend lead |
| SP-018 — Accept feasibility and revise scope/estimates | P0 / Gate decision | SP-006, SP-009, SP-013–SP-017, SP-037–SP-039, SP-051, SP-052, SP-064, SP-065 | Media and scoped database evidence, device limits, animation/admin workload and full club/family architecture; revised engineering/content/cloud/recovery estimate supersedes family-only range; no invented supplier quote | Founder/technical lead |

**G3 — Pilot implementation and verification**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-019 — Deliver approved catalog, programs and position pathways | P0 / Implementation | SP-005–SP-007, SP-018 | Approved variants searchable by ability/program/position; downloaded demo/caption/version manifest; accurate prerequisites; content publication/withdrawal process; role exploration does not force early specialization | Content owner/mobile lead |
| SP-020 — Deliver local training and both recording modes | P0 / Implementation | SP-018, SP-019 | Session coordination, visible actual recording state, pause/stop, chaptered review, no-camera practice, offline use and local recovery meet SP-010 on supported devices; repeats/parts not mislabeled | Mobile lead |
| SP-021 — Deliver family, consent and adult transitions | P0 / Implementation | SP-007–SP-011, SP-018 | Server-enforced parent/adult management, separate permissions/consents, current membership at sync, safe account recovery, revocation and age-18 transition; child can stop recording immediately | Backend/mobile leads |
| SP-022 — Verify private family access boundaries | P0 / Verification | SP-008, SP-021, SP-040; expand as SP-023/SP-044 land | Deny unrelated household and ungranted club/coach access for metadata/media/export/delete; tampered IDs and bulk/list routes; current membership and documented token/link lifetime; coordinate final club coverage with SP-045 | Independent security reviewer/technical lead |
| SP-023 — Deliver bounded private cloud storage | P0 / Implementation | SP-011, SP-017, SP-021 | Resumable upload, server quota reservation/finalize, size/type limits, retry/orphan cleanup, rate limits, expiry dates, opt-in and Wi-Fi defaults; full quota keeps local copy; Backed up means verified completion | Backend lead |
| SP-024 — Verify deletion and offline reconciliation | P0 / Implementation and verification | SP-020, SP-021, SP-023 | Device/cloud/everywhere actions; parts/thumbnails/queues covered; withdrawal, family removal, concurrent upload and offline reconnect cannot resurrect deleted media; remaining access/download limits clearly stated | Backend/mobile leads with security review |
| SP-025 — Demonstrate metadata and object recovery | P0 / Verification | SP-011, SP-023, SP-024, SP-040, SP-042 | Restore synthetic family/club records, plan versions and videos; replay deletions/revoked permissions; measure recovery point/time, retention and cost; notices match proven scope | Operator/backend lead |
| SP-026 — Complete mobile, API and supply-chain security verification | P0 / Verification | SP-020–SP-025, SP-045, SP-053, SP-055, SP-066–SP-070; planning can begin earlier | Mobile/admin/API coverage, targeted Dart and admin-source review, secret/dependency/native scans, backup/log inspection; S01–S27 and applicable R01–R20 release blockers resolved with current-build evidence | Security reviewer/technical lead |
| SP-027 — Establish monitoring, incidents and content response | P0 / Operations preparation | SP-019–SP-025, SP-040–SP-044 | Redacted alerts with owners for recording/cloud/role/plan/export/deletion/cost health; disclosure, club offboarding, content, credential and spending rehearsals; support and offline limits | Operator/founder |
| SP-028 — Accept pilot readiness | P0 / Gate decision | SP-004–SP-007, SP-009, SP-020–SP-027, SP-040–SP-045, SP-053, SP-055, SP-071 | Exact club/family build, content, tested database, supported devices, coach approvals, current security evidence, consent/recruitment, recovery/support and metrics accepted by accountable humans | Founder, coach and technical lead |

**G4 — Consented family pilot**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-029 — Run the consented family pilot | P0 / Research execution | SP-028; chosen contact channel, appropriate consent and recruited participants | Participant experience sampled across intended age bands and assistance levels; adult participants use adult consent; separate research/media permissions; identifiable notes minimized; failures and support requests documented securely | Research owner/founder |
| SP-030 — Assess results and choose release scope | P0 / Gate decision | SP-029, SP-046, SP-057 | Family and club results against pre-agreed measures, with age/role denominators and limitations; resolve critical findings or explicitly decide staged route availability; estimates/backlog updated | Founder/coach/technical lead |

Concept-only interviews using mockups can happen earlier once their own recruitment, consent, and data-handling requirements are met. They do not establish recording reliability or count as the implemented-app pilot. No family contact or enrollment has happened through this backlog.

**G5 — Commercial release**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-031 — Accept commercial subscription readiness | P1 / Commercial gate | SP-030, SP-054 and reviewed final packaging | Store/payment approach reviewed for audience; server-verifiable entitlements; replay/refund/restore/cancellation behavior; usage allowances and spend controls; billed account does not automatically gain video access | Product/backend leads |
| SP-032 — Finalize store, privacy and support materials | P1 / Release preparation | SP-030, SP-031, SP-054, SP-072 | Audience, permissions, SDK inventory, notices, data deletion, support, account transition and cloud claims match current build and first market; latest policy review recorded | Founder/privacy adviser |
| SP-033 — Rehearse production release and recovery | P1 / Verification | SP-025–SP-027, SP-030, SP-032 | Exact signed build/config/content package; human-controlled publication; staged rollout, compatibility, incident containment and restore rehearsed; alert ownership and store-update limitations documented | Release owner/operator |
| SP-034 — Accept and publish the commercial release | P1 / Release action | SP-030, SP-031, SP-032, SP-033, SP-056, SP-072–SP-074 | Explicit release-owner action against current evidence and known limits; store submissions/status recorded separately from merged code; production checks pass; support ready | Founder/release owner |

**G6 — Operation and optional automation**

| ID / task | Priority / type | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-035 — Operate security, content and cost maintenance | P1 / Recurring work template | SP-027, SP-034 | Create dated work items for dependency response, access review, retention/deletion health, restore rehearsal, content withdrawal/review, incident follow-up, adult transitions, and usage/cost review; cadence and owners match risk | Operator/product owner |
| SP-036 — Evaluate durable unattended agent dispatch | P2 / Optional future capability | SP-013 plus demonstrated recurring need and explicit implementation scope | Decision compares native delegation with a small dispatcher; if built, verified webhooks, deduplication, atomic leases, heartbeat, cancel/retry/budget limits, crash reconciliation and evidence-controlled completion tested; account and API-preview risks documented | Agent workflow owner/founder |

**Club and coach administration extension — SP-037–SP-046**

These tasks extend the existing phase projects; they do not create a second tracker or authorize application code. Draft SP-037/SP-038 now as planning/design work. SP-039 onward requires commissioned implementation or the corresponding pilot prerequisites.

| ID / task | Phase / priority | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-037 — Specify hierarchy and scoped capabilities | G1 / P0 | SP-001, SP-003 | Levels 0–3, club/direct-parent routes, guardian authority, multi-role/multi-club cases, draft/review/publish permissions and separate media grants; accountable owners accept the matrix | Product/technical lead |
| SP-038 — Design administration and membership flows | G1 / P0 | SP-037; draft SP-007 | F14–F22 and updated F01/F03/F11/F12; age-plan editor, invitations, review/publish, calendar, attendance, sharing and role switching; error/revocation states; enabled editable design or labelled specification | Product designer/coach |
| SP-039 — Prove scoped database and storage foundation | G2 / P0 | SP-008, SP-011, SP-012, SP-037; build commissioned | Reproducible schema/policy and synthetic records; two unrelated clubs/households; membership-aware reads/writes, ownership-preserving references and media denial; no browser/client service key; recorded acceptance evidence | Backend lead/security reviewer |
| SP-040 — Implement workspaces, roles and enrollment | G3 / P0 | SP-018, SP-021, SP-037–SP-039 | Direct household and club workspace; expiring invitations, guardian/adult enrollment, scoped staff/coach permissions, role switching, revocation and audit; no accidental guardianship grant | Backend/admin lead |
| SP-041 — Deliver cohorts, rosters and coach assignments | G3 / P0 | SP-005, SP-040 | Club-owned teams/age groups, minimal player roster, assigned-coach scope, per-player eligibility and mixed-age handling; no cross-club directory or global child lookup | Admin/backend lead |
| SP-042 — Deliver age-plan editing and publication | G3 / P0 | SP-005, SP-019, SP-038, SP-041 | Add/remove/replace/reorder approved drills; own home/club plan derivation; allowed variants; draft/review/publish; immutable versions, recipient suitability, rights/withdrawal and active-session snapshot preservation | Content/admin/mobile leads |
| SP-043 — Deliver activities, assignment and scoped progress | G3 / P0 | SP-020, SP-041, SP-042 | Calendar and team/player assignments; labelled Home/Club origin; schedule conflicts and cancellations; attendance/source-labelled assessments; disclosed completion summary works without recording | Admin/mobile/backend leads |
| SP-044 — Deliver sharing, departures and adulthood across clubs | G3 / P0 | SP-021, SP-023, SP-024, SP-040 | Specific media grants/expiry/revocation; no club-enabled recording/cloud; payment does not grant viewing; coach/family departure and adult transition; home history preserved and club retention accurately handled | Identity/backend lead with privacy review |
| SP-045 — Verify club/admin security and plan integrity | G3 / P0 | SP-022, SP-025, SP-040–SP-044 | S18–S22 verified alongside original controls; multi-role/multi-club/parent cases; unauthorized role/export/publish/API attempts fail; stale grants/joins/background tasks checked; version/suitability/offline cases recorded | Independent security reviewer/QA |
| SP-046 — Run coach/admin and club-family workflow pilot | G4 / P0 | SP-028; appropriate club/family consent and participants | A club admin and coach manage scoped groups/plans; families join, complete activity without video, optionally share/revoke, and leave; direct-family route still usable; report limitations and workload for re-estimation | Research owner/club coordinator |

**Dependency and evidence rules**

- Review-ready drafts can proceed in parallel where the dependencies permit. Gate acceptance waits for final evidence; replacing a dependency with an assumption requires a recorded scope decision.
- Keep specialist approval tied to an exact version of the drill, animation, design, or data flow. Material changes reopen the affected review.
- For code, record issue, run, branch, commit, pull request, required checks, reviewer, and accepted build. For content/research, use the equivalent version and review record.
- A failing test, missing device, unavailable reviewer, or exhausted cost limit creates a Blocked item with a named owner and next step.
- Do not auto-close all children of a project because a milestone title says “complete.” Each required item needs its own evidence.
- Unattended dispatch is optional; it is not a prerequisite for producing a useful pilot. Do not add a custom orchestration platform to the critical path without demonstrated need.

**First three execution batches**

| Batch | Work | Result |
|---|---|---|
| Planning now | SP-001–SP-004, SP-037; refine SP-007–SP-011 and SP-038 | Resolved club/family scope, named owners, board blueprint and reviewable contracts; no code |
| Specialists and design | SP-005–SP-011 and SP-038 through actual reviews/design access | Approved content, player/admin interactions and actionable club/family security/privacy findings |
| After build is commissioned | SP-012–SP-018 plus SP-039 with synthetic/adult material | Controlled agent trial, media and database-isolation evidence, and a revised full-scope estimate |

The complete security rationale, tool comparison, pricing caveats, phase gates, and authoritative references are in **soccer_sdlc_security_and_agent_delivery_review.md**.


**Device, hosting, subscriptions and business extension — SP-047–SP-058**

**soccer_end_to_end_platform_and_business_plan.md** is the current decision document for device data, hosting, subscriptions and business operations. **soccer_subscription_and_cost_model.xlsx** contains editable pricing, usage, operating-cost and build-budget assumptions. All prices are proposals; Australia/English remains an assumption. No working app, database or subscription service exists.

| Issue | Gate / priority | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-047 — Finalize device persistence and sync contract | G1 / P0 | SP-008, SP-010, SP-011, SP-037 | Drift/SQLite records, file separation, migration, namespace, outbox, conflicts, delete-wins, offline expiry and F25 specified | Mobile/backend leads |
| SP-048 — Define packaging and entitlement contract | G1 / P0 | SP-001, SP-037 | Buyer/beneficiary/provider/seat/grant separation; catalog and prices marked proposed; club sponsorship, free coach invitations, restore and F23/F24 states | Founder/backend lead |
| SP-049 — Review store billing and SDK audience | G1 / P0 | SP-009, SP-048 | Current first-market store path, mixed club/family product treatment, SDK inventory and privacy behavior reviewed; purchase journeys legally/platform appropriate | Privacy/mobile leads |
| SP-050 — Specify environments, regions and recovery | G1 / P0 | SP-011, SP-037 | Sydney primary, separate staging/prod, web function routing, secrets, private media and Melbourne recovery; costs/region boundaries/RPO-RTO scope documented | Operator/security lead |
| SP-051 — Prove local persistence and reconnect | G2 / P0 | SP-012, SP-039, SP-047 | Synthetic data migration, account switch, offline session, crash/outbox retry, stale entitlement, tombstone and interrupted upload demonstrations on phones | Mobile/backend leads |
| SP-052 — Prove sandbox billing and entitlements | G2 / P0 | SP-012, SP-048, SP-049, SP-050 | Apple/Google sandbox and Stripe test mode; duplicate/out-of-order/refund/restore/reassignment/expiry cases; no real charges; server state is authoritative | Billing/backend lead |
| SP-053 — Complete device sync implementation and verification | G3 / P0 | SP-018, SP-020, SP-051 | Current-build migration/reconnect/data isolation; queued uploads and deletion; quota and local recovery; F25 verified; S23 addressed | Mobile/backend leads |
| SP-054 — Complete production billing and seat controls | G5 / P1 | SP-030, SP-048, SP-049, SP-052 | Approved catalog, invoices, store restore/cancel/refund, seat proration/renewal, reconciliation and monitoring; production configuration reviewed before real sales | Founder/billing lead |
| SP-055 — Complete hosting and operational recovery | G3 / P0 | SP-025, SP-027, SP-050 | Region/config evidence, backup jobs, restricted recovery history, restore/deletion replay, redacted alerts and adult notifications; S26/S27 covered | Operator/security lead |
| SP-056 — Prepare business launch operations | G5 / P1 | SP-030, SP-054, SP-055 | Entity/IP/contracts/accounting/tax/insurance review as applicable; support, refund and incident ownership; adult CRM and sales materials; founder accepts readiness | Founder with specialists |
| SP-057 — Validate pricing and unit economics | G4 / P1 | SP-029, SP-046 | Adult price/value feedback, device video measurements, support burden, quota adoption and workbook sensitivities; no sales forecasts presented as evidence | Founder/research owner |
| SP-058 — Evaluate independent Coach Pro and storage add-ons | G6 / P2 | SP-034, SP-035 | Demand, coach/client permissions, differentiated value, app-store treatment and positive unit economics; defer until core family/club evidence supports investment | Founder/coach |

**Gate alignment:** SP-051/SP-052 and SP-053/SP-055 are now included directly in the corresponding G2/G3 gate rows. SP-031 is the commercial acceptance umbrella for SP-054; it does not duplicate implementation. Commercial store materials SP-032 must reflect SP-054. SP-034 also requires SP-056. Existing recovery/monitoring issues supply evidence to SP-055. These additions avoid treating paid service operation as an optional afterthought while keeping the unpaid concept pilot distinct.

There are now **74 proposed planning issues**. Prices, supplier estimates and implementation remain unapproved proposals until the relevant decisions; none of these identifiers has been created in a live project tracker.


**MFA and full-lifecycle review extension — SP-059–SP-074**

**soccer_end_to_end_security_and_gap_review.md** defines the current MFA, account recovery, restricted child-session, web/API, retention and verification requirements. It records **20 review actions (R01–R20)** mapped to the existing **27 security risk themes (S01–S27)**. These are open design/verification actions, not discovered vulnerabilities in a running app. The delivery backlog now contains **74 proposed issues**; no security control is implemented by these documents.

R01–R20 are detailed review actions, not replacements for the original security IDs. G1 rows below produce specifications and reviewed decisions. Implementation rows require a separately commissioned build and actual evidence. No new external task or agent run is created by this table.

| Issue | Gate / priority | Dependencies | Acceptance evidence | Accountable role |
|---|---|---|---|---|
| SP-059 — Specify MFA, recovery and restricted player credentials | G1 / P0 | SP-008, SP-010, SP-037 | Role/action MFA matrix, TOTP/backup-factor/recovery state machine, child pairing/handoff, server requirement flags and F27–F31; R01–R03/R08 | Identity/mobile leads |
| SP-060 — Specify web/API sessions and media validation | G1 / P0 | SP-008, SP-038, SP-050 | Server-mediated portal token contract, current assurance/recency/revocation, direct API/RLS/Storage rules, quarantine worker and abuse limits; R04/R06/R07/R12 | Web/backend/security leads |
| SP-061 — Specify retention, guardianship and data rights | G1 / P0 | SP-001, SP-008, SP-011 | Record-level schedules, authority/dispute/second-guardian process, age correction/18 transition, deletion/holds and processor terms; R05/R09/R18 | Privacy/identity leads |
| SP-062 — Specify safeguarding and accessible identity journeys | G1 / P0 | SP-005, SP-007, SP-038, SP-059, SP-061 | F27–F33, safe reports, trusted recipients, support escalation, accessibility and released-variant/asset matrix; R13/R14 | Designer/coach/safeguarding owner |
| SP-063 — Specify operator, key and recovery runbooks | G1 / P0 | SP-003, SP-050 | Vendor MFA, backup factor/custodian, privileged recovery, separate deletion authority, auth/config restore scope, audit/alerts and mobile compatibility; R10/R11/R15/R16/R18 | Operator/security reviewer |
| SP-064 — Reconcile requirements and obtain scoped estimates | G1 / P0 | SP-004, SP-005, SP-006, SP-047, SP-048, SP-059–SP-063 | Requirement/design/task/test matrix; complete content quantities; bounded identity/web/validation/specialist quotes or explicit estimate gaps; baseline workbook limits; R14/R19/R20 | Founder/delivery owner |
| SP-065 — Prove MFA and child-session boundaries | G2 / P0 | SP-012, SP-039, SP-059, SP-060 | Google/MS TOTP on phones/web; backup/lost-factor enrollment-only path; AAL1/direct API denied; child cannot use adult routes; recency/revocation and media-validation feasibility; synthetic/adult data only | Identity/mobile/backend leads |
| SP-066 — Implement and verify identity lifecycle | G3 / P0 | SP-018, SP-021, SP-040, SP-065 | Enroll/challenge/change/reset, separate child credentials, pairing/handoff, session controls, scoped protected operations and security notifications; R01–R04 | Identity/mobile leads |
| SP-067 — Harden web, device, media and abuse boundaries | G3 / P0 | SP-020, SP-022, SP-023, SP-053, SP-060, SP-066 | Server/browser credential checks; web injection/CSRF/redirect protection; storage/RPC/view/realtime denial; quarantined validation; device previews/keys; rate/cost controls; R06–R08/R12 | Web/mobile/backend leads |
| SP-068 — Verify guardianship, retention and erasure | G3 / P0 | SP-021, SP-024, SP-044, SP-061, SP-066 | Disputed/second guardian, corrected age/adult transfer, class-level deletion/holds, provider identifiers and stale-cursor/tombstone behavior; R05/R09 | Privacy/identity/backend leads |
| SP-069 — Rehearse complete recovery and privileged compromise | G3 / P0 | SP-025, SP-055, SP-063, SP-068 | Aligned metadata/object/auth/config inventory; isolated restore, deletion/revocation replay, missing-key/rotation and backup-deletion-authority exercises; old-client compatibility; R10/R11/R15 | Operator/security reviewer |
| SP-070 — Verify safeguarding, content and accessibility readiness | G3 / P0 | SP-019, SP-020, SP-043, SP-062 | Named report/alternate handler; report-about-guardian/coach safety; no unrestricted child messaging; all released assets approved; screen-reader/text/landscape/OTP/Stop scenarios; R13/R14 | Safeguarding owner/coach/designer |
| SP-071 — Complete adversarial and operational acceptance | G3 / P0 | SP-026, SP-066–SP-070 | Current-build identity/API/media/recovery tests and auth abuse/incident exercises; redacted evidence, staffed response and alternate ownership; no unresolved blocker for pilot scope | Independent security reviewer/operator |
| SP-072 — Verify commercial access, billing and account deletion | G5 / P1 | SP-030, SP-054, SP-066, SP-068 | Source-specific purchase/refund/restore, fresh-MFA financial changes, seat ownership, active subscription plus deletion flow, verified Level 0 phishing-resistant entry; R01/R17 | Billing/identity/security leads |
| SP-073 — Accept revised funding and operating coverage | G5 / P1 | SP-030, SP-056, SP-064 | Scoped security/content costs, MFA recovery/support and validation processing, provider-plan allowances, per-owner usage stress, dated cash runway and actual owner coverage; R19 | Founder with accountant/technical lead |
| SP-074 — Verify release requirements and evidence traceability | G5 / P1 | SP-031, SP-032, SP-033, SP-071, SP-072, SP-073 | All applicable requirements linked to final designs/tasks/build/tests/reviewers; current market/vendor/SDK decisions; old-client/rollout limits; no missing gate or misleading completion; R15/R18/R20 | Release/delivery owner |

The gate rows above are authoritative for ordering. SP-026 consumes SP-066–SP-070; SP-071 verifies the combined operational result; SP-028 consumes SP-071. SP-032 consumes commercial identity/billing proof, and SP-034 consumes SP-074. This avoids a dependency cycle in which a release gate is required before its own verification.
