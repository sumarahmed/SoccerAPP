**Soccer app: SDLC, security, and agent delivery review**

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_sdlc_security_and_agent_delivery_review.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

Prepared 5 September 2026; extended 6 September 2026 for club/direct-parent administration and scoped coach controls. “SDFC” is interpreted as **SDLC: software development lifecycle**. This governs the SDLC and original risk themes for the soccer app for ages 5–18; the companion end-to-end security/gap review audits all six plans and the financial workbook. It is a review of the proposed design and delivery process. No implemented system or working database exists to scan or penetration-test, and no security control is certified by this review. No application code has been written. Pricing and original vendor capability checks retain their stated 5 September review date.

**1. Recommendation and readiness**

Use **Linear for planning and agent progress, GitHub for versioned work and evidence, and a coding agent such as Codex for bounded execution**. Use GitHub Actions for automated validation; evaluate a managed macOS/mobile build service only when signing and device distribution need it. Keep one delivery backlog. Link Figma, coaching approvals, animation assets, and research findings to that backlog.

The existing product direction is coherent: Flutter, local practice and recording, downloaded realistic demonstrations, and optional private Supabase cloud storage. Keep these choices provisional until real-device feasibility establishes that the camera, timer, instructional video, audio cues, and local save can coexist reliably. The greatest early engineering uncertainty is the simultaneous media experience. The greatest security exposure is private recordings of children, followed by family authorization and the permissions granted to development agents.

| Area | Review conclusion | What establishes readiness |
|---|---|---|
| Product scope | Sufficient to prepare discovery and feasibility work | Record first market and age-dependent assistance decisions |
| Curriculum | Twelve detailed drafts and three animation briefs exist | Qualified coach approval of each published age/variant combination |
| Design | Eight core concept screens and detailed behavior exist | Editable design, remaining states, and family usability evidence |
| Architecture | Plausible, with significant media and synchronization questions | Real-device results and explicit backend authorization contracts |
| Security | Useful intentions; implementation and evidence remain absent | Controls and tests in this review, with named owners |
| Delivery process | Requires task contracts, evidence rules, and release ownership | The proposed board and repository controls configured and exercised |
| Pilot or release | Not yet ready | Phase gates below passed with actual evidence |

Confirmed scope includes ages 5–18, both exercise clips and full-session recording, and local plus optional cloud storage. Australia/English, parent assistance for the youngest children, the revised Family 20 GB / Club 5 GB-per-seat allowances, and 30-day cloud expiry remain planning assumptions or proposals. The published engineering time and cost estimates are planning scenarios, not supplier quotes. This review does not convert any of those assumptions into approvals.

The 6 September extension adds club and direct-parent workspaces, a responsive administration portal, coach-controlled age plans, rosters, calendar/assignments and scoped progress reporting. Accepted Level 2 is Coach; Level 0 platform, Level 1 club/parent, and Level 3 player describe responsibilities without granting automatic access to all lower-level information. The detailed contract is **soccer_club_parent_and_coach_administration.md**. This expansion requires re-estimation of the earlier family-focused schedule.

**2. Which delivery tool fits this project?**

These are fit judgments for a small product team using agents, rather than benchmark scores.

| Option | Useful capabilities | Main tradeoff | Recommendation |
|---|---|---|---|
| Linear + GitHub | Issues, dependencies, cycles, projects, agent delegation, MCP access, and linked development work | Two systems must agree on ownership and evidence; advanced agent APIs are still changing | Preferred for this app’s mixed product, design, content, and engineering work |
| GitHub Projects + Issues | Work beside repositories and pull requests; iteration fields and API automation | More configuration is needed to make family research, content approval, and cross-functional milestones comfortable | Best alternative when minimizing subscriptions and integrations is the priority |
| Jira + GitHub | Flexible organizational workflows and established governance; Rovo agents and an Atlassian MCP connection are available | More administration for a small team; agent permissions and usage still need deliberate configuration | Use if the team already operates in Jira or needs its organizational workflows |

Linear’s agents can receive delegated work while a human remains the primary issue owner. Its MCP server provides authenticated access to workspace operations. Jira also supports agents and automation; the preference for Linear is about fit and setup effort, rather than Jira lacking agent support. GitHub Projects supports iterations and programmatic management. [Linear agents](https://linear.app/docs/agents-in-linear), [Linear MCP](https://linear.app/docs/mcp), [Atlassian Rovo agents](https://support.atlassian.com/rovo/docs/agents/), [Atlassian MCP](https://support.atlassian.com/atlassian-ai-gateway/docs/get-started-with-the-atlassian-remote-mcp-server/), [GitHub iteration fields](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields/about-iteration-fields).

At the access check for this review, GitHub was installed; Linear and Atlassian Rovo were not. No external project, issue, automation rule, repository, or agent worker has been created. Installing an integration does not configure the delivery process.

| Cost item | Published starting point checked on 5 September 2026 | Planning implication |
|---|---|---|
| Linear Free | USD 0; two teams and 250 issues | Enough to trial the proposed board with one team |
| Linear Basic | USD 10 per user/month, billed yearly | Sensible upgrade for unlimited issues; do not count role profiles as human seats automatically |
| Linear Business | USD 16 per user/month, billed yearly | Consider when private teams or guest access are actually needed |
| GitHub Team | Listed at USD 4 per user/month | Relevant for an organization’s private repository protections; validate billing and required features before purchase |
| Agent execution | Separate entitlement and usage | Tracker pricing does not establish included coding-agent compute |
| CI, mobile builds, devices, security review | Separate allowances or estimates | Include macOS jobs, signing, real devices, storage, and specialist work in the budget |

Two human seats on Linear Basic and GitHub Team would be approximately **USD 28/month** at the listed rates, before taxes, applicable billing terms, agent usage, CI overages, and other services. Free Linear can reduce the initial tracker cost. [Linear pricing](https://linear.app/pricing), [GitHub pricing](https://github.com/pricing).

Start with existing delegation, repository, and CI capabilities. Do not commission a custom orchestration platform for this pilot. Linear’s dedicated Agents API is explicitly in **Developer Preview**, so any later integration needs version monitoring and a fallback to ordinary issue updates. [Linear agent developer documentation](https://linear.app/developers/agents).

**3. How agents will run and report their work**

The tracker records intent, ownership, dependencies, and progress. An execution service supplies the actual agent runtime. GitHub and CI hold the reviewable changes and validation results. A designated human owns release decisions. These responsibilities must stay explicit even when a single integration connects them.

For the first implementation phase, use a named human owner and manually delegate each eligible Ready issue. Once this works reliably, allow a documented rule to dispatch low-risk work within agreed scope and budget. Start with one builder at a time; increase to at most two builders on independent work after observing review capacity and conflicts. Planning, implementation, review, and testing are role profiles, not a requirement for four permanent agents.

OpenAI’s Linear integration supports mentioning or delegating to Codex and reports activity back to the issue. Its completion message links the result from which a pull request can be created; do not assume every delegated task automatically creates one. The documentation also describes repository fallback when context is ambiguous and account behavior for automatic triage. Explicitly name the repository and environment, and keep automatic triage off until its identity and permissions are verified. Issue content is shared with the agent when delegated. [Codex’s Linear integration](https://learn.chatgpt.com/docs/third-party/linear).

| Work status | Meaning | Evidence or authority for transition |
|---|---|---|
| Backlog | Proposed work; not executable | Product owner records purpose and dependencies |
| Ready | Scope, acceptance criteria, access, and dependencies are resolved | Human owner or an already-authorized policy confirms eligibility |
| In Progress | A worker has accepted the bounded task | Actual task/run link and start time; only one active writer per task |
| Review | A concrete deliverable is available | Pull request, design, report, or content version linked |
| Validation | Review changes are addressed; acceptance is being checked | Relevant CI, device, usability, or specialist evidence |
| Done | The defined deliverable is accepted | Required evidence and accountable reviewer recorded; code tasks merged where required |
| Blocked | A dependency, failure, access issue, or budget limit prevents progress | Reason, owner, next action, and latest recoverable state |
| Cancelled | Work deliberately stopped | Owner records reason and disposes of temporary access/artifacts |

Review and Validation can send a task back to In Progress. A dependency blocker is not a reason to invent completion. A merged pull request means the change has joined the selected branch; deployment and app-store availability are separate release states.

Use issue templates and labels for the following contract. Do not assume arbitrary fields or field-level permissions are available in every Linear plan.

| Required task information | Purpose |
|---|---|
| Issue identifier, phase, human owner, priority, risk, task type | Establish responsibility and routing |
| Problem, outcome, exclusions, dependencies | Keep the assignment bounded |
| Acceptance criteria and evidence required | Define completion before execution |
| Repository, base branch, allowed files/services, environment | Prevent work in the wrong project or privileged environment |
| Allowed tools, network destinations, data classification | Limit exposure and instruction-following authority |
| Run link/identifier, attempt, commit or asset version | Make activity attributable to a concrete result |
| Time and cost limit, stop conditions, retry limit | Prevent runaway or repetitive execution |
| Status, latest evidence, blocker, next action | Make progress useful to a human and another worker |
| Reviewer and release implications | Keep acceptance separate from production authority |

Report concise events such as “task accepted,” “draft ready,” “tests failed,” or “blocked on device access,” with evidence links. Do not request or store private chains of thought. A second agent can identify defects, but it is not a substitute for independent human judgment about youth coaching, privacy, authorization, and release risk.

**If unattended dispatch becomes necessary later**, add a small durable run registry and queue only after its need is demonstrated. Require a verified webhook, idempotent event identifier, atomic task lease, heartbeat, bounded retry with backoff, per-run budget, cancellation, and reconciliation after crashes. Never run the same issue twice merely because a delivery was retried. A lost heartbeat should trigger investigation before a conflicting replacement writes the same branch. Linear documents signature verification for webhooks; verify the raw request body and freshness before treating it as an event. [Linear webhooks](https://linear.app/developers/webhooks).

**4. Board structure and measurable progress**

Create one workspace and one team, **Soccer App**, with projects corresponding to the six time-bounded phases below and an ongoing operations project. Use labels for Mobile, Backend, Security, Content, Design, Research, and Operations. Add task-type labels for Decision, Specification, Implementation, Verification, and Release. Use dependencies for ordering, and project milestones for gates. Avoid separate trackers for every agent or specialist.

Use short cycles during implementation; do not impose sprints on asynchronous coach reviews or legal advice. A dashboard should show gate status, accepted deliverables, blocked tasks and age, failed validation, review queue size, budget consumed, and unresolved security risks. Assign one human owner to every blocker. Weekly reporting should explain what became demonstrably true and what decision is next.

Do not use number of agent messages, generated lines, story points, or an agent’s claimed percentage as evidence of readiness. Track completion of required artifacts and tests. For media work, include save success, recoverable interruptions, and timer accuracy on named devices. For security, show relevant controls tested and unresolved findings with owners. For costs, show recorded minutes, retained bytes, transfer volume, and agent/CI usage against limits.

The companion **soccer_delivery_backlog.md** provides 74 proposed issues, dependencies, accountable roles, and acceptance evidence, including SP-037–SP-046 for club/coach administration. Its identifiers are planning references, not existing Linear issues. Implementation remains outside the current no-code authorization.

**5. SDLC phases and exit gates**

| Phase | Work and artifacts | Exit gate | Accountable acceptance |
|---|---|---|---|
| G0 — Definition | Market, age/assistance model, pilot scope, success measures, ownership, risk register | Assumptions recorded as decisions or bounded experiments; no conflicting recording promise | Founder/product owner |
| G1 — Design and contracts | Coach-reviewed drills/samples, player/admin UX, club/household capability matrix, plan versioning, data map, threats, retention and consent | The team can state what to build and demonstrate both direct-family and club behavior | Product owner, coach, technical lead, relevant privacy specialist |
| G2 — Feasibility | Both recording modes with timer/demo; interruptions/local save; authorized cloud path; database and storage isolation across clubs/households | Evidence supports the device floor, media limits, membership architecture and revised full-scope estimate | Technical lead with device QA |
| G3 — Pilot build and verification | Approved content, family authorization, offline reconciliation, deletion, observability, secured builds, acceptance tests | No unresolved release-blocking defects; child-data controls demonstrated; release package reproducible | Technical lead and designated security reviewer |
| G4 — Consented family and club pilots | Appropriate recruitment/consent, instrumented practice, coach/admin plan workflows, support and issue triage | Reliability/usability and scoped club operations assessed; findings and exclusions recorded | Founder, coach, research owner |
| G5 — Commercial release | Store declarations, operational rehearsal, verified subscription controls, support, release and rollback plans | Named release owner accepts current build, evidence, known limitations, costs, and store requirements | Founder/release owner |
| G6 — Operation and change | Monitoring, vulnerability response, restore tests, access review, content updates, age-18 transitions | Each material change follows its relevant gates; incidents close with corrective actions | Designated operator and product owner |

G1 and G2 can overlap using synthetic or consenting adult demonstration material; youth-facing practice requires appropriate coaching review and consent first. Defining all age bands does not mean all need identical practice plans or release readiness. A feasibility result may narrow a pilot’s tested devices or content variants while preserving the product’s intended 5–18 scope.

No calendar duration is guaranteed. The earlier 12–19 week estimate predates club/coach administration and does not cover the current complete scope. Re-estimate after administration design, G2 and the animation samples. The founder must explicitly commission implementation before the current no-code planning stage changes into build work.

**6. Security baseline and threat boundaries**

Use **NIST SSDF 1.1**, the current final publication, to organize delivery practices: preparing the organization, protecting software, producing well-secured software, and responding to vulnerabilities. SSDF 1.2 was still an initial public draft at this review; do not label it the final baseline. [NIST SSDF 1.1](https://csrc.nist.gov/pubs/sp/800/218/final), [SSDF 1.2 draft](https://csrc.nist.gov/pubs/sp/800/218/r1/ipd).

Use the applicable **OWASP MASVS** requirements and MASTG test guidance for the mobile app. MASVS no longer places the old L1/L2 verification levels in the standard itself. For an eventual web administration interface and APIs, use applicable **ASVS 5.0.0 Level 2 requirements** as a working verification target with documented exclusions. These are coverage frameworks, not compliance certificates. Include agent-specific threats such as injected instructions, excessive privileges, and tool misuse. [MASVS](https://mas.owasp.org/MASVS/), [ASVS](https://owasp.org/www-project-application-security-verification-standard/), [OWASP agentic applications guidance](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/).

| Trust boundary | Assets or actions at risk | Required design position |
|---|---|---|
| Player/parent ↔ shared phone | Recordings, profile controls, consent, exports | Child mode has restricted authority; sensitive parent actions require appropriate verification; Stop remains immediately available |
| App ↔ operating system | Camera, microphone, local files, notifications, gallery and device backup | Minimum permissions; protected storage; intentional backup/export behavior; safe app lifecycle handling |
| Device ↔ API/database | Household membership, progress, consent, adult transition | Server-enforced current authorization and validated operations; client assertions are untrusted |
| Device/API ↔ video storage | Upload, playback, thumbnails, deletion, quota | Private objects; least privilege; explicit access lifetime; no public child-video buckets |
| Offline device ↔ current account state | Revoked access, expired consent, deleted recordings | Re-check authorization before sync; tombstones and stable IDs prevent resurrection |
| Agent ↔ issues, tools, repository and CI | Source, secrets, build artifacts, operating spend | Treat retrieved instructions as untrusted; limit tools and identity; separate build and release rights |
| Staff/suppliers ↔ production or raw footage | Sensitive data and publishing power | Named, scoped, expiring access; synthetic/adult material for routine development |
| Club/admin portal ↔ other clubs and households | Roster, plans, roles, exports, completion data and private recordings | Current workspace/action checks; limited enrollment records; independent guardian authority and media grants |

**7. Findings and required controls**

These findings identify gaps in the plans. They do not assert that an unbuilt application has exploitable vulnerabilities. P0 means a prerequisite for the relevant child-data pilot or privileged workflow. P1 means required before the corresponding public/commercial capability. A phase cannot pass by relabelling its prerequisite as future work.

| ID / priority | Gap and consequence | Required control | Acceptance evidence / owner |
|---|---|---|---|
| S01 / P0 | Household identity and player permissions lack an enforceable access matrix; an identifier change could expose another child | Deny by default for metadata and objects; RLS plus server checks for privileged operations; separate viewing, billing, and guardian authority | Two-household negative tests for every protected operation, including bulk/list routes; technical lead |
| S02 / P0 | “Short-lived authorization” does not define revocation or leaked-link behavior | Decide authenticated playback versus brief signed links; document expiry, caching, range requests, and current-membership checks | Removed-member and leaked-link tests; measured residual-access window; technical lead |
| S03 / P0 | App-private files alone do not specify device confidentiality | Use platform-protected storage and appropriate Keychain/Keystore-backed secrets; review metadata DB, thumbnails, temporary files, lock screen, crash logs, and OS backups | Device inspection and lifecycle tests; mobile lead/security reviewer |
| S04 / P0 | Parent controls are mainly UX; a child-mode toggle could be mistaken for authorization | Enforce privileged parent/adult actions server-side; step-up or scoped capability where needed; define safe offline limits | Direct API attempts from child mode fail; Stop works immediately; technical lead |
| S05 / P0 | Consent withdrawal, family changes, and adulthood need a consistent state model | Version purpose-specific consent; stop queued uploads on withdrawal; verify membership at sync; define age-18 ownership and deliberate access grants | Offline/reconnect, family-removal, and adult-transition scenarios; product/technical/privacy owners |
| S06 / P0 | Deletion scope and stale uploads can conflict | Coordinate originals, parts, thumbnails, queue records, caches, and permitted devices; preserve suppression state through restore; show pending actions accurately | Delete during upload/offline and restore tests; no resurrection; backend lead |
| S07 / P0 | A database backup could be mistaken for a recording backup | Specify separate object recovery, retention, backup expiry, restore procedure, and associated cost | Successful metadata plus video restore and deletion replay rehearsal; operator |
| S08 / P0 | Video quotas and media processing lack abuse controls | Reserve quota server-side; authorize finalize; validate size/type/duration; clean orphaned uploads; isolate decoding; rate and concurrency limits | Concurrent, oversized, repeated, and malformed upload tests; backend lead |
| S09 / P0 | Environment and secret boundaries are not detailed | Separate dev/staging/production; scoped identities; MFA for privileged humans; no service-role key in app or general agent; short-lived CI credentials where supported | Inventory, permission checks, secret scans, and rotation exercise; technical lead |
| S10 / P0 | Agent-readable issues and dependencies can carry hostile instructions | Tool and destination allowlists; treat issue/web/dependency text as data; no production footage or credentials in agent context; restrict dependency-install exposure | Adversarial instruction exercise and denial evidence; agent workflow owner |
| S11 / P0 when unattended | Retried events and lost workers can duplicate writes or charges | Verify webhook authenticity/freshness; durable queue, atomic lease, idempotency, bounded retries and budgets | Duplicate event, crash, timeout, cancellation, and reconciliation tests; workflow owner |
| S12 / P0 | An agent can report success without accepted evidence | Protect repository rules and required checks; independent review; evidence tied to exact commit/build; agent cannot approve itself or weaken gates | Deliberately failing change remains blocked; stale evidence cannot pass; technical lead |
| S13 / P0 | Supply-chain and Dart security coverage are unspecified | Lock dependencies; review updates; secret and dependency scans; immutable CI action pins; targeted Dart security review; secured PR execution | Scan coverage map, reviewed exceptions, and negative CI tests; technical lead |
| S14 / P0 | Content accuracy and rights are not yet approved | Named coach review of each released variant and animation; licensed source material; versioning and withdrawal | Recorded approvals tied to asset/version; coach/content owner |
| S15 / P0 | Operations, incident ownership, and recovery are incomplete | Redacted monitoring, alert owner, severity/response rules, containment, restore, withdrawal, and mobile update limitations | Alert and incident tabletop plus restore rehearsal; operator/founder |
| S16 / P1 before sale | Commercial payments and release permissions require implementation evidence | Verify entitlements server-side and handle duplicate/replayed purchase events; protect signing and publication; apply the detailed billing/MFA/deletion contract | Sandbox purchase/refund/restore tests and controlled release rehearsal; release owner |
| S17 / P0 | Market, child audience, vendor scope, and data notices remain assumptions | Confirm jurisdiction/audience; review actual SDKs/processors, consent, privacy notices, data location, and support handling | Focused specialist findings resolved for the launch scope; founder/privacy adviser |
| S18 / P0 | Club and household relationships widen the isolation boundary; global roles or unsafe joins could expose unrelated users | Scope every membership/action/resource; deny cross-club/team reads and writes; limit enrollment projections; preserve ownership through linked records, jobs, reports and storage | Two-club/two-household, multi-role/multi-club and tampered-reference tests; technical lead; SP-039/SP-045 |
| S19 / P0 | Coach editing can change age suitability, prescriptions or published history | Separate edit/review/publish permissions; immutable plan/drill versions; per-recipient suitability; approved parameter bounds; withdrawal and cache rules | Draft cannot publish; invalid variant blocked; removal preserves history; active session unchanged by ordinary edits; content/technical leads; SP-042/SP-045 |
| S20 / P0 | Club invitation, coach departure and family transfer could incorrectly grant guardianship or retain access | Verified expiring invites, guardian/adult enrollment, explicit scope expiry, current membership checks and offboarding; distinguish club records from household media | Pending/reused invite denial; revoked coach and departing member tests; adulthood and club closure scenarios; identity owner; SP-040/SP-044/SP-045 |
| S21 / P0 | New administrative portal and exports create privileged attack paths | Server enforcement, privileged-user MFA, suitable session/step-up controls, web security coverage, export limits, protected role changes and attributable support; no service key in browser | Direct API privilege-escalation attempts, stale roles, administrative web testing, export and audit review; security reviewer; SP-038/SP-045 |
| S22 / P0 | Club-funded access or assigned practice could silently expose personal recordings and unrelated activity | Separate billing, assignment completion and media-viewing permissions; defined data purpose; recipient/resource/time-bounded grants; no routine platform video browsing | Complete assignment without video; club/coach cannot enable recording/upload; revoke one grant without losing home history; product/privacy/technical owners; SP-043/SP-044/SP-045 |

**8. Private video, local storage, consent, and recovery decisions**

Supabase’s private buckets are a useful primitive, but privacy still depends on correct policies and application behavior. Enable and test RLS on exposed data, restrict object operations to the correct owner, and keep privileged keys out of client builds. A private bucket does not prove family isolation. [Supabase production guidance](https://supabase.com/docs/guides/deployment/going-into-prod), [row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security).

Supabase states that Storage signed URLs use a dedicated signing key and remain valid until expiry; changing authentication keys does not revoke them. Its sign-out documentation also notes that issued access tokens remain valid until expiry. Therefore “logout immediately revokes every playable link” cannot be the product promise. Prefer authorization that checks current rights where practical; if signed URLs are used, select and test a short lifetime and explain the residual window. Never put these URLs in analytics, issue bodies, public logs, or agent prompts. A device may already have downloaded bytes that cannot be remotely retracted. [Storage download authorization](https://supabase.com/docs/guides/storage/serving/downloads), [sign-out behavior](https://supabase.com/docs/guides/auth/signout).

Keep camera/microphone permission, cloud-upload consent, and optional sharing as separate choices. Cloud backup starts off. Recording indicators must reflect actual capture state, including recoverable interruptions. A child must be able to stop practice and recording without solving a parental gate. Parent verification protects privileged management actions, rather than preventing a child from stopping capture.

Treat an 18-year-old as an adult account holder under the selected legal/identity design. Paying for an account does not by itself grant viewing rights. Do not infer an exact birthday from a broad age band. Define how existing recordings, family grants, billing, and account recovery transfer without exposing new adult footage automatically.

Keep local saves in app-controlled storage with an explicit operating-system backup policy. Device backup or gallery synchronization can undermine a “local only” explanation. Use platform security facilities instead of inventing cryptography; decide whether additional file/database encryption is needed from the threat model. Define how keys are recovered or intentionally lost, and how that affects background upload and device migration. App sandboxing does not protect a video from every person with an unlocked shared phone.

For deletion, distinguish “remove this device copy,” “remove cloud copy,” and “delete everywhere.” A global deletion request suppresses future uploads of that recording and queues deletion for other authorized app installations when they reconnect. It cannot instantly erase an offline device or a copy exported outside the app. Include multipart fragments, thumbnails, upload retries, content-delivery caching, and support exports in the inventory. Account removal and consent withdrawal must not leave a stale queue able to upload later.

Supabase database backups **do not contain Storage object contents**. A restored database can therefore refer to a video that has not been restored. Define object recovery separately, with bounded retention, access restrictions, deletion replay, and an expiry policy that matches the notice. Restoring a backup must not restore permissions or deleted media that should remain withdrawn. [Supabase backup scope](https://supabase.com/docs/guides/platform/backups).

As an internal starting target, evaluate whether a 24-hour metadata recovery point and eight-hour recovery time are affordable and demonstrable for the pilot. The detailed platform plan proposes the matching object-recovery objective, subject to a demonstrated restore. These are proposed engineering targets, not customer guarantees. The current workbook includes a recovery allowance but is not a quote for archival storage or the newly detailed security scope. Do not offer indefinite retention under a 30-day-expiry product.

Confirm the first market before finalizing legal obligations. For Australia, the Children’s Online Privacy Code was still being developed at this review date, with a December 2026 finalization milestone; review the final scope and commencement as they become established. Store audience and privacy declarations must match an app explicitly intended for ages 5–18. A generic parental gate alone is not evidence that every applicable legal consent requirement has been met. [OAIC code development](https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code), [Apple review guidelines](https://developer.apple.com/app-store/review/guidelines/), [Google Play Families requirements](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en).

**9. Agent and repository permissions**

| Role | Appropriate initial access | Restricted authority |
|---|---|---|
| Planning agent | Sanitized requirements; propose issues, specifications, and dependency changes | Cannot expand scope, spending, publication, or data access by editing an issue |
| Builder agent | Explicit repository, isolated branch/worktree, synthetic fixtures, approved tools | No production credentials, raw child footage, protected-branch writes, or policy bypass |
| Review agent | Diff, relevant source, test results, sanitized artifacts | Cannot serve as sole approver for its own work or authorize a release |
| Validation runner | Controlled test environment and limited test accounts | Cannot receive production secrets through untrusted pull requests |
| Coach/content reviewer | Relevant drafts and licensed demonstration material | No household recordings by default; no infrastructure administration |
| Founder/release owner | Decisions, access grants, release and billing controls | Must not share privileged credentials through tracker comments |

A role label does not enforce permissions. Use actual scoped app installations, service identities, repository rules, environment restrictions, and token boundaries. If a connector only offers broad issue-update authority, a board status cannot serve as a security gate. Keep authoritative checks in the repository/CI and, where necessary, mediate privileged workflow actions through a narrow service or human owner.

Require reviews and passing checks on the current proposed change. Restrict writes to workflow files, authorization policies, signing settings, and repository protection changes. A builder must not make its own failing check disappear or add itself as an approver. Use protected branches/rulesets appropriate to the repository plan. GitHub makes private-repository rulesets available on paid plans such as Team. [GitHub rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets).

There is a material plan limitation: GitHub’s documented **required environment reviewers** are available only for public repositories on Free, Pro, and Team. Do not assume a private repository on Team has that production approval feature. For a small private project, retain publishing credentials with the designated human and make release a controlled owner action; alternatively choose a plan or build service that explicitly supports the required private release gate. [GitHub environment availability](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments).

Use narrowly scoped, short-lived credentials through federation where the target supports it. Pin third-party CI actions to immutable versions and prevent untrusted pull requests from executing with release secrets. Dependency installation is also an execution boundary. Codex cloud documents default restrictions on agent-phase internet access while setup has different access behavior; configure both phases deliberately. Do not assume a restricted agent phase makes dependency setup safe. [GitHub Actions security](https://docs.github.com/en/actions/reference/security/secure-use), [GitHub OIDC](https://docs.github.com/en/actions/concepts/security/openid-connect), [Codex network controls](https://learn.chatgpt.com/docs/cloud/internet-access).

Apply automatic actions only within already-authorized policy. Routine low-risk edits, tests, and disposable staging work should not create repeated approval interruptions. Production release, new privileged access, increased spending, public communications, and changes to security gates require the authority assigned to those actions. No current automation has been enabled by this document.

**10. Validation tools and meaningful test coverage**

| Layer | Proposed tools or method | What must be demonstrated |
|---|---|---|
| Flutter correctness | Flutter analyzer, unit/widget tests, selected integration tests | Timer/session transitions, mode semantics, errors and recovery; lint is not a security audit |
| Secrets and dependencies | Gitleaks; OSV-Scanner including Dart lockfiles; dependency inventory/SBOM and update review | No active exposed secrets; known dependency risks assessed; transitive/native coverage recorded |
| Source security | Targeted Dart review; applicable CodeQL checks for supported native/admin languages | Authorization and data handling inspected beyond lint; coverage gaps explicit |
| Mobile security | Applicable MASVS/MASTG tests on named iOS/Android devices | Storage, keys, backups, transport, permissions, lifecycle, privacy, and authentication behavior |
| Backend security | Positive and negative access tests; API schema checks; ZAP where applicable | Cross-family access blocked; validation, rate limits, quota, and session rules exercised |
| Media reliability | Real-device recordings and redacted diagnostic evidence | Both modes, timer/demo/camera coexistence, local finalize, storage full, interruption, heat/battery behavior |
| Synchronization and recovery | Fault injection using synthetic fixtures | Consent/deletion wins over stale uploads; retries are idempotent; restore does not resurrect data |
| Delivery controls | Deliberately failing CI, stale evidence, malicious task text, duplicate task events | No self-approval, privilege escalation, leaked secrets, false Done, or duplicate execution |
| Product/content | Coach review and consented usability sessions | Children understand cues/setup; adults understand recording and cloud controls |

CodeQL’s published supported languages do **not include Dart**. Using CodeQL on a Flutter repository cannot establish coverage of its Dart application logic. OSV-Scanner lists Dart’s pubspec.lock among supported lockfiles, which helps dependency risk detection but does not assess authorization correctness. ZAP complements targeted API tests; it does not establish complete business-logic security. [CodeQL coverage](https://docs.github.com/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql), [OSV lockfile support](https://google.github.io/osv-scanner/supported-languages-and-lockfiles/), [Gitleaks](https://github.com/gitleaks/gitleaks), [ZAP automation](https://www.zaproxy.org/docs/desktop/addons/automation-framework/).

Tie every result to the relevant commit/build and configuration, device/OS where relevant, test identity, timestamp, and artifact. Redact footage, faces, names, credentials, and playable private links from ordinary CI and tracker evidence. Retain sensitive test evidence only in its intended restricted location. Avoid tests that merely repeat implementation; prioritize the security boundaries and failure modes above.

**11. Release, operations, and incident readiness**

Before any family pilot, require no unresolved exploitable critical/high finding affecting the pilot scope, no unreviewed drill variant, and no known loss or disclosure defect inconsistent with the stated recording promise. Assess exploitability and context; any accepted residual risk needs a named owner, mitigation, review date, and exclusion from unsupported claims. An agent cannot accept its own security exception.

Prepare a release record containing the exact app build, backend/configuration versions, content manifest, privacy/permission declarations, validation links, supported devices, known limitations, and recovery steps. Maintain separate production identities and limit who holds store signing and publication permissions. Do not give agents broad store or cloud administrator accounts to save setup time.

Monitor failed saves/uploads, authorization denials and unusual download volume, quota abuse, deletion backlog, failed scheduled retention, restore health, application crashes, and build/agent spending. Use minimal first-party, redacted events. Name the person who receives each actionable alert; a dashboard without response ownership is insufficient. Never send raw child recordings, screen recordings containing private footage, or full sensitive request bodies into an LLM or routine analytics.

Rehearse at least a private-video disclosure, accidental deletion, faulty drill publication, compromised build credential, and excessive upload/agent spend. Specify containment, preservation of minimal evidence, credential/access response, owner communications, legal assessment of notification obligations, recovery, and prevention. Customer support must have a secure route for issues that does not encourage families to email children’s footage casually.

Mobile releases cannot be rolled back instantly on every installed phone. Record server compatibility and minimum supported app rules, use carefully scoped remote feature controls, and keep the local training experience safe during degraded cloud service. An offline device cannot immediately receive a content withdrawal or access change. The UI, support scripts, and launch promise must respect those limits.

**12. Concrete setup sequence and completion status**

1. Keep the current work in planning: resolve launch assumptions, assign accountable humans, and review the contracts and risk register.
2. When Linear is enabled, create the one-team board from the prepared backlog; validate workspace permissions before placing sensitive material in it.
3. When implementation is commissioned, select the explicit private repository and configure its required checks, protected branches, environment boundaries, and issue/PR linkage.
4. Exercise one harmless, bounded delegated task using synthetic material. Confirm repository selection, progress reporting, evidence, review, cancellation, and cost limits.
5. Run the media feasibility tasks, re-estimate, and only then expand the implementation queue. Keep unattended dispatch as a later decision with its own tests.
6. Admit families only after the relevant coaching, privacy, data-security, and pilot-readiness gates have actual evidence.

This review, the starter backlog, and the updated foundation plan are complete planning artifacts. The board, repositories, security controls, agents, coach approvals, external estimates, and real-device results are **not yet implemented or obtained**. This distinction should remain visible in every progress report.

**13. Club-administration extension and database readiness**

The gap register now has **27 findings**. S01–S17 remain relevant; S18–S22 address the widened club, coach and administration scope. Link both sets to verification rather than treating the new items as independent of the original privacy, deletion, agent and release controls.

The intended backend is a shared managed PostgreSQL service with logically isolated club/household workspaces and separately governed global content. No database has been provisioned or implemented. Supabase's RLS and Storage policies can support scoped access, but membership, guardian relationships, role changes, linked-record ownership and current sharing grants still require explicit implementation and tests. Portal filtering is insufficient. [Database authorization primitives](https://supabase.com/docs/guides/database/postgres/row-level-security), [Storage policies](https://supabase.com/docs/guides/storage/security/access-control).

Before the expanded pilot gate, require actual evidence for unrelated clubs/households, one person acting as both parent and coach, one multi-club player, coach revocation, club departure, adulthood, mixed-age assignment validation, plan version changes, and independent home use. Confirm that a club activity can complete without recording or sharing footage. The database must demonstrate reproducible schema creation, approved seed records, scoped read/write operations, deletion/revocation and restore behavior. These are planned acceptance criteria; none has been run.

The original media feasibility remains necessary. SP-039 adds the scoped database proof; SP-040–SP-045 add the club workflow and verification; SP-046 validates coach/admin use with an appropriately consented club pilot. Both routes are part of the intended scope. A release limited to one route requires a recorded product decision rather than an implicit omission.


**End-to-end commercial and device-data extension — S23–S27**

**soccer_end_to_end_platform_and_business_plan.md** is the current decision document for device data, hosting, subscriptions and business operations. **soccer_subscription_and_cost_model.xlsx** contains editable pricing, usage, operating-cost and build-budget assumptions. All prices are proposals; Australia/English remains an assumption. No working app, database or subscription service exists.

These are design risks requiring evidence, not vulnerabilities discovered in an existing app. The complete register now contains S01–S27.

| ID / priority | Risk | Required control and acceptance evidence | Delivery link |
|---|---|---|---|
| S23 / P0 | Local accounts, schema migration or queued events expose/corrupt another player's data or restore deleted data | Per-account namespaces; minimal identifiers; secure tokens; file protection including DB journals; migration/restart recovery; idempotent outbox; deletion wins; withdrawal-first reconnect; bounded offline rights tested on devices | SP-047, SP-051, SP-053 |
| S24 / P0 | Forged, duplicated, delayed or misbound billing events grant features or charge the wrong household | Verify provider signatures/authentication and current state; durable unique event intake; server entitlement ledger; purchaser/beneficiary separation; sandbox/prod isolation; restore/refund/seat/reconciliation tests; no child data in payment metadata | SP-048, SP-052, SP-054 |
| S25 / P0 | Store payment route, age audience or third-party SDK practices contradict the actual child experience | Review current Australian storefront routes, age categories and SDK behavior; adult-only purchase controls; no unrestricted external-pay CTA assumption; verify privacy disclosures, restore/cancel and parental experience before release | SP-049, SP-054 |
| S26 / P0 | Primary-region failure or deletion leaves orphaned footage or unusable recovery; residency claims exceed reality | Separate metadata and object recovery; S3 Melbourne region/lifecycle evidence; current objects retained while valid, seven-day noncurrent history; restore and deletion replay; region/subprocessor inventory; rehearse stated RPO/RTO rather than promise automatic failover | SP-050, SP-055 with SP-025 |
| S27 / P1 | Quota, billing, support or operational failures harm families or leave incidents unowned | Enforce/reserve quotas before uploads; spending alerts and bounded jobs; no footage in tickets/telemetry; named incident/support owner; invoicing/refund/seat controls; monthly cost and entitlement reconciliation; no false 24/7 support claim | SP-054–SP-057 with SP-027 |

G1 must resolve the data/billing/hosting contracts. G2 needs both device and sandbox purchase proof. G3 covers local sync, private access and recovery. G4 uses complimentary access for consented pilot research unless a separately reviewed paid pilot is chosen. G5 requires actual purchase, legal, tax, support and operational readiness. Store submission and release remain named human actions. No scans, policies or controls are reported as implemented by this planning review.


**14. Full-lifecycle security audit and MFA specification**

**soccer_end_to_end_security_and_gap_review.md** defines the current MFA, account recovery, restricted child-session, web/API, retention and verification requirements. It records **20 review actions (R01–R20)** mapped to the existing **27 security risk themes (S01–S27)**. These are open design/verification actions, not discovered vulnerabilities in a running app. The delivery backlog now contains **74 proposed issues**; no security control is implemented by these documents.

The companion review is authoritative for the detailed identity policy. Mandatory TOTP protects platform/club administration and coaching; parents/adult players require MFA for private cloud data and sensitive controls. Email verification/social sign-in alone does not meet the second-factor requirement. Lost-factor support must restore an enrollment-only state after verified recovery, not unlock child data. The restricted player/session boundary is a separate server authorization mechanism, not a parent-screen toggle.

Apply the review's concrete JWT, privileged-session, recent-MFA and signed-link targets, with actual provider-limit tests and current revocation checks. Default Supabase session behavior does not supply the entire policy. Passkey support is currently experimental; verify assurance and fallback before substituting it. Commercial Level 0 entry requires a demonstrated phishing-resistant method. Vendor dashboards have separate MFA and recovery arrangements.

R01–R20 also require server-mediated web sessions, direct API/RLS denial, upload quarantine and bounded validation, complete retention, guardian/age transitions, restore consistency, key ownership, abuse budgets, safeguarding reports, accessibility and funded incident coverage. Keep the original S01–S27 identifiers stable; each theme may require several review actions. All remain pending implementation/verification. No scan or penetration test has run against a working app.

SP-018 now directly includes identity/child-session feasibility and scoped estimates. SP-026/SP-028 require the new implementation, recovery, safeguarding and adversarial evidence. SP-034 requires commercial access/billing verification, funding and exact-release traceability. Changes are placed in the backlog rows so agents and reviewers see the actual gate prerequisites. Document completion cannot close a security test or authorize deployment.
