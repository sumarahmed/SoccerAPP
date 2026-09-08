// Two concrete deliverable slices per non-human leaf. Verification is generated
// from the complete source acceptance list as a separate activity.
// Format: title | goal | deliverable. Bounds are refined against the real repo.
module.exports = {
  'SP-002': [
    'Draft tracker configuration | Map one team, phases, gate projects, workflow, roles and source IDs into a reviewable destination configuration | Board configuration and source-to-live-ID mapping template',
    'Apply and inspect authorized tracker configuration | Configure the named workspace, import the selected route and verify relationships and permissions without duplicate records | Actual import result, ID map and relationship comparison'],
  'SP-003': [
    'Define agent assignment boundaries | Specify allowed tools, data, paths, environments, authority, spend/time ceilings and stop/retry behavior | Run-contract policy with unresolved owner decisions',
    'Define evidence and review routing | Map standard/security-sensitive work to reviewers and current-version evidence required for Ready, Review and Done | Review matrix, handoff template and failure-routing examples'],
  'SP-011': [
    'Specify cloud lifecycle and user choices | Define opt-in, copy states, allowances, retention start points, expiry and accurate withdrawal/deletion notices | Cloud lifecycle state table and user-visible copy-state specification',
    'Specify quota and deletion/recovery races | Define reservations, short-lived access, fragment cleanup, offline suppression and deletion replay after restore | API invariants and quota/delete/restore race fixtures'],
  'SP-012': [
    'Establish the authorized repository and environments | Resolve actual remote/base, protected branch, review identities and isolated development/staging scopes | Repository/environment configuration record and scoped identity inventory',
    'Install checks and prove a failing change is blocked | Add current-commit CI checks and secret restrictions; exercise a harmless failed change through review | CI configuration plus success/failure evidence for the same candidate'],
  'SP-014': [
    'Build the bounded clip feasibility harness | Combine camera preview, local demonstration, countdown, cues and capture-confirmed work timing using adult/synthetic footage | Disposable feasibility harness and fixed measurement fixtures',
    'Measure concurrent capture on named phones | Run the approved SP-126 cases on representative iOS/Android devices and inspect durable playable clips | Per-device frame/timing/save measurements and supported-limit findings'],
  'SP-015': [
    'Prototype full-session chapters and parts | Capture work plus programmed rests and map source chapters, pauses and gaps without duplicating the video | Full-session prototype and chapter/part schema',
    'Measure long capture and chapter navigation | Exercise the approved duration envelope, seek every chapter and inspect manual pause/resume results | Named-device recordings, source-offset checks and duration/resource observations'],
  'SP-016': [
    'Exercise interruptions and storage failures | Run denied permission, background/lock, calls, low space and termination cases against the feasibility builds | Interruption matrix with observed file and UI states',
    'Measure device limits and recoverable parts | Inspect thermal/battery behavior and discover finalized parts after interruption; propose supported fallback/exclusion | Recovery evidence and supported-device floor proposal'],
  'SP-017': [
    'Prototype opt-in resumable upload | Upload only locally saved adult/synthetic media through scoped reservation, quarantine and explicit consent | One end-to-end prototype cloud path with copy-state transitions',
    'Exercise unauthorized and stale upload cases | Retry interrupted upload, exceed quota, request from another household and race withdrawal/deletion against finalize | Reproducible denial/retry cases and measured access lifetime'],
  'SP-036': [
    'Assess whether a dispatcher is needed | Compare measured manual delegation volume, failure handling and operating cost with a durable dispatcher proposal | Dated adopt/defer decision brief and prerequisites',
    'Specify conditional dispatcher controls | If separately selected, define verified events, deduplication, leases, cancellation, budgets and crash reconciliation before a new bounded build assignment | Conditional design and test matrix, or recorded defer outcome'],
  'SP-037': [
    'Model actors and scoped capabilities | Map platform, parent, club, coach and player actions separately from billing and media grants | Actor/action/resource matrix for family and multi-club fixtures',
    'Resolve multi-role and departure transitions | Define draft/review/publish, guardian authority, role switching and revocation outcomes with accountable owners | Transition table and approved/denied examples for every role combination'],
  'SP-038': [
    'Specify administration journeys | Map roster, invitations, plans, publishing, attendance and sharing across F14–F22 and affected family screens | Linked administration flow specification and field inventory',
    'Design denied, empty and revoked states | Specify multi-role switching, failures and revocation with responsive and accessible states | Reviewable paired-state designs or explicitly labeled specification'],
  'SP-039': [
    'Create isolated policy feasibility fixtures | Rebuild a minimal schema with two households, two clubs and ownership-preserving links | Reproducible migration/seed fixture and constrained policy prototype',
    'Probe membership and media boundaries | Exercise allowed and denied reads/writes, forged links and direct client attempts without broad service keys | Policy/API results and documented provider limitations'],
  'SP-045': [
    'Exercise cross-role administrative access | Probe roster, export, publication and direct APIs using unrelated, revoked and multi-club actors | S18–S22 access test evidence on the candidate',
    'Exercise plan history and stale authority | Test withdrawn content, invalid suitability, stale joins/jobs and offline version behavior | Version-integrity and revocation findings with targeted retest evidence'],
  'SP-047': [
    'Specify protected device records | Define per-context Drift data, file catalog, worker access, keys, WAL/temp handling and migrations | Local persistence schema and protection/recovery contract',
    'Specify reconciliation and F25 states | Define outbox IDs, conflict ownership, authority refresh, delete-wins, offline expiry and visible retry states | Sync protocol, conflict fixtures and offline UI state table'],
  'SP-048': [
    'Model purchase ownership and beneficiaries | Separate buyer, provider source, player beneficiary, club seat and feature grant | Entitlement domain model and overlap examples',
    'Specify package and lifecycle presentation | Mark catalog values proposed and define invited coach, restore, sponsorship and F23/F24 states | Proposed catalog and purchase-source lifecycle/state matrix'],
  'SP-050': [
    'Map environment and processor boundaries | Describe intended Sydney primary, staging/production separation, web routing, private media and secret identities | Deployment/processor inventory with unverified provider assumptions',
    'Specify whole-system recovery targets | Define Melbourne recovery copy, auth/config/object scope, cost drivers and owner-approved RPO/RTO | Recovery architecture, measurement plan and unresolved supplier decisions'],
  'SP-051': [
    'Prototype protected offline persistence | Exercise account switch, local sessions and synthetic migration in the device harness | Per-context persistence feasibility implementation and fixture set',
    'Exercise crash and reconnect ordering | Replay duplicate outbox events, stale entitlements, tombstones and interrupted uploads on phones | Device evidence for retained history, isolation and delete-first reconnect'],
  'SP-052': [
    'Connect production-shaped sandbox purchase sources | Bind Apple/Google sandbox and Stripe test identities to verified server-side beneficiary records | Sandbox adapters and fixture purchase/event mappings',
    'Reconcile duplicate and reversed billing events | Run replay, out-of-order, refund, restore, reassignment and expiry against expected ledger outcomes | Sandbox ledger convergence results and provider-limit findings'],
  'SP-059': [
    'Specify identity assurance and enrollment | Define adult TOTP, backup factor, action recency and restricted player credential boundaries | Role/action assurance matrix and F27–F31 enrollment state table',
    'Specify recovery and shared-device handoff | Define enrollment-only recovery, last-factor restrictions, guardian pairing, renewal and revocation | Recovery/handoff protocol with bypass-denial fixtures'],
  'SP-060': [
    'Specify current web and API authorization | Define server-mediated sessions, assurance freshness, revocation, direct API/RLS/storage and cache rules | Session/authorization interface and allowed/denied route matrix',
    'Specify bounded media validation | Define quarantine, decoder limits, finalize rules, abuse controls and failure visibility | Worker validation contract and hostile-media fixture specification'],
  'SP-061': [
    'Specify authority and identity transitions | Define second guardian, disputes, age correction and adulthood under the selected first-market policy | Authority transition record and case decision table',
    'Specify record-class retention and rights | Inventory deletion/holds, device/cloud/recovery copies, processor terms and authorized exports | Retention schedule and data-rights flow for specialist review'],
  'SP-062': [
    'Specify safe reporting and response routes | Define trusted recipients, escalation and handling when a report concerns a guardian/coach | F32/F33 reporting flow and accountable response matrix',
    'Specify accessible identity and content coverage | Map F27–F33 access needs and every released variant/asset to review obligations | Accessibility/asset coverage matrix and review-ready missing-input list'],
  'SP-063': [
    'Specify privileged access and key custody | Define vendor MFA, backup factors, custodians, audit and alternate deletion authority | Operator access inventory and key loss/compromise procedure',
    'Specify recovery and compatibility operations | Define auth/config restore, alerts, content withdrawal and older-client handling | Rehearsal runbooks with measurable owner/alternate responsibilities'],
  'SP-065': [
    'Prototype phone/web MFA and restricted sessions | Exercise same-phone authenticator setup and pairing without exposing adult refresh credentials | Identity feasibility harness and positive route evidence',
    'Probe recovery and direct-path bypasses | Attempt AAL1/direct API, email-only recovery, stale recency and revoked credentials; inspect media validation limits | Bypass-denial evidence and feasibility exceptions'],
  'SP-077': [
    'Define paired theme tokens and components | Translate design section 9 into semantic Light/Dark tokens, native chrome and accessible shared components | Versioned token/component specification with rendered contrast measurements',
    'Complete paired screen and appearance states | Cover F01–F33, Follow device, recording, identity, errors, billing and optional goal/return states | Paired design-state inventory with explicit missing frames'],
  'SP-078': [
    'Persist and resolve mobile appearance preference | Implement Follow device default plus Light/Dark overrides with offline persistence | Mobile appearance resolver, semantic tokens and preference storage',
    'Switch appearance during active capture | Apply scheduled/manual changes without recreating controllers or modifying source/export pixels | Live-switch integration and restart/capture continuity evidence'],
  'SP-079': [
    'Apply portal semantic appearance | Bind shared tokens to responsive adult role shells with correct initial theme | Web appearance provider and themed role shells',
    'Complete accessible component states | Cover keyboard focus, errors, disabled/loading/empty states and persisted override behavior | Paired component gallery and relevant browser interaction evidence'],
  'SP-080': [
    'Specify logo-first composition | Storyboard approved logo, duration/transition, orientation, audio choice and preserved source | Export storyboard and composition input/output contract',
    'Specify timeline and failure semantics | Define source/export offsets including overlap math, cancellation, low-space and deliberate sharing authority | Chapter-transform fixtures and export/copy-state table'],
  'SP-081': [
    'Prototype on-device branded composition | Compose licensed logo and consenting-adult footage in portrait/landscape using candidate adapters | Export feasibility prototype and documented library/license assumptions',
    'Measure output integrity and resource limits | Inspect audio sync, duration, chapter transforms, cancellation and low-space on named devices | Device export measurements and source-preservation evidence'],
  'SP-082': [
    'Compose authorized clip and session exports | Implement the proven adapter with one intro, correct chapter transforms and preserved source | Export service and versioned composition fixtures',
    'Expose honest progress and share handoff | Add cancel/retry/failure/finalized states and deliberate platform save/share only for valid output | Review/export UI and output-integrity handoff evidence'],
  'SP-083': [
    'Probe export authority and residual copies | Attempt sibling/unrelated/coach exports and inspect temp cleanup, metadata and gallery intent | Export privacy case results and copy-boundary observations',
    'Inspect exported video integrity | Validate chapters, orientation, audio and interruption/corruption handling before handoff | Named-device media inspection report and failed-output denial evidence'],
  'SP-084': [
    'Define shared domain schemas and ownership | Specify identities, references, request/response shapes, scope and extension seams for priority features | Versioned schema/API catalog with one owner per domain',
    'Define compatibility and idempotent events | Fix errors, pagination, timestamps, event identity, client versions and common fixtures | Contract fixtures and server/device authority compatibility policy'],
  'SP-085': [
    'Create identity and workspace migrations | Add accounts, players, households, clubs, membership, guardian and enrollment records with constrained links | Rebuildable schema migrations and two-household/two-club seeds',
    'Enforce scoped identity data access | Implement capability-aware reads/writes and deny forged ownership links across roles | Constrained data access and positive/negative policy evidence'],
  'SP-086': [
    'Create versioned content and plan records | Add drill versions, suitability, rights, approvals and immutable published plans/items | Content/plan migrations with version fixtures',
    'Create assignment and assessment base records | Add recipients, activities, attendance and attributed assessment interfaces for priority extensions | Assignment/assessment schema and ownership/history constraints'],
  'SP-087': [
    'Create media consent and lifecycle records | Model source parts/chapters, consent versions, exact grants, quota reservation and suppression | Media/consent migrations and immutable ownership constraints',
    'Create idempotent ledger and job records | Model entitlement/event uniqueness, outbox and bounded job metadata independently from viewing grants | Ledger/job migrations and retry/deletion constraint evidence'],
  'SP-088': [
    'Build repeatable actor and resource fixtures | Seed authorized/unrelated households, clubs, children, revoked coaches and forged links | Independently rebuildable authorization fixture factory',
    'Exercise policy and direct API surfaces | Test scoped reads/writes across tables, views, RPCs, storage, jobs, billing and media | Allow/deny coverage report tied to current migrations'],
  'SP-089': [
    'Implement compatible migration ordering | Version server/local/content/API changes and define additive rollout and backfills | Migration/version tooling and old/new client compatibility matrix',
    'Rehearse partial upgrade recovery | Inject migration failure and demonstrate history-preserving forward fix or restore | Upgrade failure evidence and recovery procedure'],
  'SP-090': [
    'Build role-separated navigation shell | Create injectable player/adult routes, capabilities and accessibility foundations | Mobile shell with explicit restricted context boundaries',
    'Handle restart and deep-link context | Restore safe context on launch and reject privileged routes while keeping Stop/settings accessible | Navigation restart/deep-link denial evidence'],
  'SP-091': [
    'Implement isolated local repositories and files | Add per-context worker database, atomic session/outbox records and protected file catalog/key references | Drift repositories, file mapping and protection integration',
    'Implement migration and crash recovery | Handle WAL/temp/backups, asset integrity, context switches and interrupted migrations without wiping history | Recovery paths and responsive-UI/context-isolation measurements'],
  'SP-092': [
    'Implement start, work and rest transitions | Build Prepare/Countdown/CaptureStarting/Work/Rest with monotonic clock and capture confirmation before recorded work | Deterministic controller core and start/duplicate/frame-delay fixtures',
    'Implement pause, interruption and completion | Add Paused/Interrupted/Finalizing/Completed/Failed and explicit no-camera path with atomic transitions | Resumable controller transitions and timing/gap/idempotency fixtures'],
  'SP-093': [
    'Implement camera permission and capture adapter | Bind front/rear preview, consent-driven microphone and capture-confirmed REC state | Camera lifecycle adapter with real-device start/Stop evidence',
    'Finalize durable exercise clips | Save grouped playable clips and preserve parts when finalization/storage fails | File finalization integration and honest Saved/failure state evidence'],
  'SP-094': [
    'Record full sessions across programmed rests | Integrate continuous capture and source-offset chapter navigation without duplicate footage | Full-session adapter and chapter metadata',
    'Preserve interruption parts and gaps | Represent pause/resume, termination and recoverable parts accurately in history | Gap/part recovery behavior with actual device interruption evidence'],
  'SP-095': [
    'Coordinate local demonstration and cues | Play looped demo, captions/narration and large timer independently of elapsed exercise time | Demonstration/cue adapter and accessible live-practice UI',
    'Complete explicit no-camera practice | Persist legitimate participation without a video object and keep immediate Stop reachable | No-camera session/history flow and cue/settings cases'],
  'SP-096': [
    'Build catalog discovery and drill detail | Implement Today/Explore filters with one catalog, independent age/ability and explicit offline/empty states | Discovery/detail UI and eligible/ineligible catalog fixtures',
    'Present complete approved pathways | Render SP-156 goals, entry requirements, sequence, easier alternative, next step and parent guidance with recommendation/goal integration seams | Program/pathway UI with withdrawn/missing-variant states'],
  'SP-097': [
    'Implement complete verified content download | Download versioned media/captions/manifests with resumable state, integrity and storage budget | Download manager and complete/incomplete asset state model',
    'Enforce freshness and safe cache cleanup | Apply agreed expiry/withdrawal rules and show refresh needs without deleting player footage | Freshness/cache policies and interrupted-download preservation cases'],
  'SP-098': [
    'Build source review and chapter seeking | Present grouped clips/full-session parts/gaps with original capture offsets and accurate local/cloud availability | Review player and chapter/part navigation',
    'Add reference comparison and attempt interfaces | Compare permitted reference/source footage and expose scoped attempt IDs to skill checks and deliberate feedback submission | Comparison UI and optional assessment/submission integration seams'],
  'SP-099': [
    'Build protected family setup | Create household/player profiles, age bands and suitable home-plan selection without child email | Adult setup/player onboarding flow',
    'Implement safe player and adult switching | Handle sibling isolation, protected adult return, coach context separation and age correction | Context-switch/handoff evidence and denial states'],
  'SP-100': [
    'Implement TOTP enrollment and backup setup | Support initial verification and same-phone authenticator use without logging secrets/QRs | Enrollment/challenge UI and protected secret handling',
    'Enforce current adult assurance at protected routes | Block unverified actors through UI and direct APIs using approved role/action requirements | Assurance enforcement and bypass-denial results'],
  'SP-101': [
    'Implement expiring guardian-player pairing | Issue single-use pairing with limited player/device authority and no adult refresh token | Pairing/renewal service and protected handoff UI',
    'Enforce player credential restrictions | Deny billing/guardian/staff/MFA routes and reused/revoked pairing while preserving offline Stop | Restricted credential policy and pairing abuse cases'],
  'SP-102': [
    'Implement fresh-action and active-session controls | Bind step-up to actor/action and expose current devices with immediate checked-route revocation | Recency/session services and protected device management',
    'Implement enrollment-only recovery | Handle backup factors and support restoration without email-only/last-factor privilege bypass | Recovery state machine and replay/stale-assurance denial evidence'],
  'SP-103': [
    'Implement guardian and dispute changes | Apply reviewed second-guardian, contested access and age correction processes | Authority transition services and audit records',
    'Transfer control at adulthood | Remove automatic inherited parental viewing at 18 and preserve only explicit valid grants | Adult transition flow with payer/membership non-authority fixtures'],
  'SP-104': [
    'Implement purpose-specific consent and exact grants | Separate recording, backup and recipient/resource/purpose/expiry choices with adult authority | Consent/grant service and protected controls',
    'Apply withdrawal and departure effects | Recheck workers, preserve authorized home history and expose SP-160 feedback withdrawal integration | Revocation/departure behavior and concurrent-worker cases'],
  'SP-105': [
    'Implement durable idempotent event sync | Add bounded outbox/pull cursors, conflict ownership and one-credit event identity | Sync service and duplicate/offline event fixtures',
    'Apply authority and deletion before upload | Recover stale cursors, refresh roles/content and apply suppression before replaying pending work | Delete-first reconnect and visible failure/retry states'],
  'SP-106': [
    'Reserve quota and start scoped quarantine uploads | Create atomic reservations, constrained resumable intents and truthful upload states | Reservation/upload initiation service and concurrent-capacity cases',
    'Finalize only current authorized valid uploads | Check consent/expiry/validation before backup status and release expired/orphan reservations | Finalize/cleanup service and withdrawal/expiry race evidence'],
  'SP-107': [
    'Implement isolated bounded media inspection | Check actual container/codec/size/duration/metadata under decoder/time/memory limits | Quarantine validation worker and accepted/rejected fixture corpus',
    'Handle hostile media and failed retries | Keep unvalidated objects unreadable, release resources and expose redacted dead-letter state | Timeout/malformed media evidence and observable retry handling'],
  'SP-108': [
    'Authorize private playback and renewal | Check current grants before issuing bounded links/gateway access with ranges and private caching | Playback authorization service and approved access contract',
    'Measure revocation and residual access | Deny unrelated/revoked minting, measure remaining link lifetime and document downloaded-copy limits | Expiry/range/cache evidence and honest residual-access notices'],
  'SP-109': [
    'Implement copy-aware erasure and expiry | Delete originals, parts, thumbnails and temp artifacts using explicit device/cloud/everywhere choices | Lifecycle coordinator and visible remaining-copy states',
    'Prevent resurrection from retries and recovery | Persist suppressed IDs across uploads, pending devices, stale cursors and recovery expiry | Deletion race/replay evidence and record-class lifecycle checks'],
  'SP-110': [
    'Implement restricted recovery copies and manifests | Align valid object bytes with metadata/auth/config references and integrity hashes | Scoped copy jobs and versioned recovery inventory',
    'Rehearse synthetic restore and deletion replay | Restore matching records/bytes, reapply revocation and demonstrate alternate deletion authority | Measured RPO/RTO restore evidence and integrity comparison'],
  'SP-111': [
    'Build server-mediated adult role sessions | Keep broad credentials out of the browser and serve secure scoped parent/coach/club shells | Session broker, cookies and role navigation',
    'Enforce request and cache boundaries | Apply CSRF/CSP/deep-link controls, current roles and private caching with redacted telemetry | Forged/stale request and cache inspection evidence'],
  'SP-112': [
    'Build expiring invitation and verified enrollment | Create family/club/team enrollment with single-use expiry and guardian/adult authority checks | Invitation/enrollment services and roster projection',
    'Enforce cohort and coach scope | Support mixed-age eligibility and assigned teams without a cross-club directory; revoke removed coaches | Scoped roster/coach UI and denial/revocation cases'],
  'SP-113': [
    'Build versioned plan editing beyond twelve drills | Add/remove/replace/reorder drafts and show source/eligibility without modifying history | Plan editor and immutable draft/version API usage',
    'Validate review, publish and recipients | Block unapproved content/invalid recipients and preserve active-session snapshots plus recommendation inputs | Publication workflow and suitability/version/assignment cases'],
  'SP-114': [
    'Build content authoring and asset rights inventory | Capture unlimited catalog entries, exact manifests, licenses and reviewer evidence by scope | Authoring UI and asset/rights/version records',
    'Enforce release review and withdrawal | Block missing rights/assets and self-bypassed approval; withdraw unsafe variants and incomplete pathways | Review queue and publication/withdrawal evidence'],
  'SP-115': [
    'Build scheduling and source-aware assignments | Schedule plans with explicit zones, due/cancel states and distinct home/club origin | Calendar/assignment service and deterministic recommendation inputs',
    'Reconcile attendance and conflicting schedules | Capture coach-scoped attendance, DST cases and offline stale assignments without merged workload | Attendance UI and conflict/time-zone/reconnect evidence'],
  'SP-116': [
    'Build attributed participation and assessment reports | Separate practice completion from observed skill and enforce source/author and scope projections | Progress/report UI using versioned assessment interfaces',
    'Integrate bounded feedback and private goals | Expose SP-158/SP-161/SP-162 interfaces without duplicating their state; keep reports private | Structured feedback/goal integration seams and no-ranking/footage-exclusion cases'],
  'SP-117': [
    'Build adult family storage and sharing overview | Show authorized history, club links, recipients, quota/expiry and truthful local/cloud copy states | Parent portal storage/history/grant views',
    'Add protected revoke, delete and submission controls | Apply current MFA to exact grants/copy types and wire SP-160 submit/withdraw without device-local browsing | Parent action UI and scope/copy-state denial evidence'],
  'SP-118': [
    'Build restricted support cases and audit | Provide attributable limited operator actions and redacted case states without unrestricted impersonation | Support case workflow and audit schema/UI',
    'Route safety reports to trusted handlers | Separate safeguarding recipients, exclude accused automatic recipients and exercise alternate escalation | Report routing and restricted-access evidence'],
  'SP-119': [
    'Implement approved notification events and templates | Create minimal adult invitation/security/service/feedback payloads and safe deep-link handling | Notification adapter, reviewed templates and preference contract',
    'Enforce recipient freshness and idempotent retries | Handle revoked recipients, bounces, duplicate jobs and shared quiet-hour/reminder integration | Delivery-state service and synthetic no-spam/no-disclosure evidence'],
  'SP-120': [
    'Verify sandbox source events and beneficiary mappings | Authenticate provider events and map purchases to correct adult/player/seat without trusting client flags | Sandbox event intake and purchase-source ledger',
    'Reconcile lifecycle and overlapping grants | Converge duplicate/out-of-order/refund/expiry events while retaining independent valid sources | Reconciliation jobs and expected-ledger scenario evidence'],
  'SP-121': [
    'Build adult-only package and source presentation | Show approved sandbox products, sponsorship overlap and pending/failure states behind adult authority | Mobile paywall and provider-source disclosures',
    'Integrate sandbox purchase, restore and management | Bind restore to correct beneficiary and preserve active capture through entitlement expiry | Sandbox purchase/restore/cancellation route evidence'],
  'SP-122': [
    'Build sandbox web checkout and invoice management | Present approved source/proration/renewal behavior through Stripe test routes | Adult billing portal/checkout integration and invoice states',
    'Enforce club player-seat capacity | Handle concurrent assignment, upgrades/renewal downgrades and excluded invited coaches without media rights | Seat allocation service and contention/sponsorship evidence'],
  'SP-123': [
    'Implement scoped durable job execution | Add leases, backoff and idempotency for billing/deletion/notification/cleanup/recovery jobs | Job runner configuration and task-specific identity boundaries',
    'Recover lost workers and bound failed work | Exercise lease expiry, retry caps, dead letters and cost limits with owner-visible recovery | Crash/retry evidence and failure ownership dashboard/runbook'],
  'SP-124': [
    'Instrument redacted training and service outcomes | Count capture start/save/failure, timing, export, upload/auth/quota health with denominators | Minimal event schema and operational metrics',
    'Validate alerts and data minimization | Exercise owner/alternate routing and inspect telemetry/crash payloads for sensitive data | Alert delivery evidence and redaction audit'],
  'SP-127': [
    'Assemble reproducible complete journey fixtures | Seed standalone and sponsored-family flows, approved content and exact versioned candidate inputs | Fresh-staging integrated fixture bundle including priority cases',
    'Run integrated offline and media journeys | Exercise both themes/modes through practice, export, backup, sharing and deletion with safe identities | Build/config/device-indexed results and reproducible failures'],
  'SP-129': [
    'Verify each provider commerce lifecycle | Exercise purchase/restore/refund/revoke/grace/renewal and overlapping sources against expected ledgers | Provider sandbox lifecycle evidence matrix',
    'Probe billing abuse and deletion interactions | Test webhook forgery, seat contention, fresh financial actions and account deletion with active subscriptions | Abuse/seat/deletion results tied to approved catalog'],
  'SP-130': [
    'Exercise accessible tasks across F01–F33 | Check text scaling, screen reader, keyboard/focus, reduced motion, errors/OTP/Stop and both themes | Screen/state accessibility evidence matrix',
    'Verify outdoor use and live appearance continuity | Check orientations, outdoor readability and theme switch during capture including pathway/goal return states | Named-device usability observations and blocker list'],
  'SP-131': [
    'Rehearse privileged compromise and loss | Simulate key/backup compromise, rotation, kill switches and owner unavailability with synthetic identities | Containment timeline and alternate-operator evidence',
    'Rehearse outage, withdrawal and restoration | Recover aligned system state and replay deletion/revocation while testing older clients and local degradation | RPO/RTO and restore integrity report with missed-window limits'],
  'SP-132': [
    'Build scoped data-rights export | Resolve requester authority and record-class retention/holds without widening family/club access | Authorized data export workflow and readable package',
    'Implement account erasure and subscription guidance | Coordinate permitted deletion and remaining-copy notices while accurately handling active purchase sources | Erasure workflow and retained-record/subscription cases'],
  'SP-133': [
    'Build approved public product and help content | Explain family/club onboarding, support and honest supported capability using licensed assets | Accessible public product/help pages separated from private data',
    'Present the approved commercial catalog | Bind public prices/package/source routes to actual approved catalog and review efficacy/audience claims | Pricing presentation and catalog/claim consistency review'],
  'SP-135': [
    'Prepare the exact release candidate and config | Produce signed versioned artifacts, content/config manifest and compatible migration sequence | Candidate manifest and reproducible release preparation',
    'Rehearse staged rollout and failure containment | Exercise canary checks, halt conditions, monitoring and mobile rollback limits before publication | Rollout rehearsal evidence and recovery/forward-fix runbook'],
  'SP-139': [
    'Calculate de-identified pilot outcome metrics | Separate accounts/seats/players, personal assessments, participation, return and price response with denominators | Reproducible metric tables and actual-versus-proposed labels',
    'Model observed service and coaching costs | Use measured export/media/retention/playback/support/review workloads and goal/reminder costs | Updated financial scenarios with inputs, formulas and uncertainty'],
  'SP-140': [
    'Convert observed pilot failures into bounded corrections | Reproduce findings, assign source requirements and define focused remediation acceptance | Prioritized correction cards with owners and evidence links',
    'Retest corrections and prepare release scope decision | Collect current blocker outcomes and estimate remaining supported-device/audience/feature obligations | Retest results and proceed/revise/stop packet for human acceptance'],
  'SP-143': [
    'Assess deferred product demand | Compare observed needs for Coach Pro, storage, markets and technique assistance with wishlist triggers | Evidence-based opportunity briefs with no implied baseline promotion',
    'Specify bounded evaluation proposals | Document technical, safeguarding, rights, cost and validation requirements for selected candidates | Scoped evaluate/defer recommendations for owner decision'],
  'SP-144': [
    'Inspect a dated maintenance scope | Inventory supported dependencies/OS/device changes and authorized credential rotation needs | Dated maintenance findings and proposed bounded changes',
    'Apply and validate accepted maintenance | Update the selected components/credentials within authority and exercise relevant old-client/security regressions | Versioned maintenance change with current evidence and incident routing'],
  'SP-145': [
    'Inventory portability and readable exports | Map vendors, auth/config/data formats, ownership boundaries and restoration options | Portability inventory and sample readable export/restore specification',
    'Specify authorized service closure | Sequence billing termination, retention/deletion and customer communication with owners and residual-copy limits | Reviewable service-exit runbook with no external action performed'],
  'SP-146': [
    'Exercise one harmless bounded agent assignment | Claim the exact authorized checkout/task and produce an isolated reviewable change with run budget and evidence | Controlled trial run record and review artifact',
    'Exercise incorrect target and failed-check handling | Attempt harmless wrong-target/injected-input cases and validate cancellation/retry/current-commit gates | Denial/cancellation/failure evidence and trial improvement findings'],
  'SP-147': [
    'Collect scoped quantities and dated cost inputs | Separate supplier quotes, internal scenarios and gaps for export/identity/media/recovery and all five priorities | Cost input inventory and quantity/review/staffing assumptions',
    'Rebuild family and club funding scenarios | Update the workbook for stress usage, coach review, support, retained/recovery copies and cash runway | Reproducible revised budget with date, owner and uncertainty'],
  'SP-149': [
    'Map candidate implementation to all requirements | Join features, screens, risks, reviews, IP priorities and ACT activities to exact build/config/content | Release traceability reconciliation and missing-coverage report',
    'Validate evidence currency and accepted deviations | Distinguish specified/built/tested/accepted and detect stale artifacts or unapproved omissions | Evidence audit and unresolved release blocker list'],
  'SP-151': [
    'Map approved foundation pathway coverage | Structure coach-provided learning goals, variants, order, alternatives and next steps from the twelve pilot drill families | Versioned pathway coverage matrix with actual approval fields',
    'Specify eligibility and parent guidance | Define unavailable/withdrawn states and age-appropriate parent setup copy without inventing prescriptions | Pathway contract and coach/content review packet'],
  'SP-152': [
    'Draft deterministic eligibility and precedence table | Translate approved pathway/assignment rules into explicit inputs, ordered decisions and reasons | Versioned recommendation rule table with open coaching decisions',
    'Define expected recommendation fixtures | Specify the six required cases, missing inputs, adult alternatives and offline fallback expected results | Coach-reviewable input/output fixture set'],
  'SP-153': [
    'Structure coach-selected skill protocols | Capture version, setup, units, valid attempts, assistance, safe conditions and retest guidance | Small protocol catalog with approval/source placeholders',
    'Specify comparability and correction examples | Distinguish matching/changed conditions, source attribution, no-result and no-video attempts | Comparison decision table and correction-history fixtures'],
  'SP-154': [
    'Specify submission and feedback transitions | Define deliberate adult submission, assigned coach queue, one cue, approved follow-up and text-only use | Workflow/state diagram and role/resource visibility matrix',
    'Specify service capacity and access edge cases | Record proposed clip/response/capacity choices and withdrawal/expiry/preview/notification limits for owner review | Service contract and safeguarding review cases'],
  'SP-155': [
    'Specify optional goal and milestone behavior | Structure approved goal limits, private completion, rest/early-stop/missed-week and opt-out rules | Goal state table and supportive copy specification',
    'Specify adult reminder and week-boundary behavior | Define preferences, quiet hours, time zones and retry semantics with explicit unresolved defaults | Reminder policy and no-pressure/duplicate-message fixture table'],
  'SP-156': [
    'Add versioned pathway records and contracts | Extend existing content versions with learning goals, ordered steps, alternatives and guidance | Pathway migration and shared schema fixtures',
    'Resolve eligible complete pathway snapshots | Reject missing/withdrawn variants and preserve active/historical version identity | Eligibility service and complete/unavailable pathway evidence'],
  'SP-157': [
    'Implement the approved pure recommendation evaluator | Evaluate the versioned input/rule fixtures to one eligible activity or explicit reason without changing skill or workload | Shared deterministic evaluator and six-case expected-output tests',
    'Integrate Today explanation and offline fallback | Bind current assignments, downloaded content and adult alternative to the evaluator without a second rule engine | Today recommendation UI and offline/conflict integration evidence'],
  'SP-158': [
    'Persist attributed protocol results and corrections | Store setup/conditions/assistance/source with protocol version and append-only correction history | Assessment extension migration and scoped result API',
    'Implement personal comparability decisions | Evaluate approved matching/changed/no-result fixtures and deny unrelated access | Comparison service and authorization/correction evidence'],
  'SP-159': [
    'Capture optional-video skill-check results | Present protocol setup and attributed result/no-result entry without requiring footage | Mobile skill-check workflow and source labels',
    'Display comparable personal progress | Show own comparable history, changed-condition reasons and corrections distinctly from participation | Personal progress views and no-automatic-mastery evidence'],
  'SP-160': [
    'Implement submission and review state transitions | Persist idempotent adult submission, coach review and withdrawal linked to exact attempts/grants | Submission state service and transition fixtures',
    'Enforce queue and playback authority | Scope queue projections/counts/previews to current coach assignment and grants including expiry/revocation | Queue API and cross-context/withdrawal authorization evidence'],
  'SP-161': [
    'Build adult submission and coach review controls | Wire deliberate submit/withdraw and submitted/reviewed queue to SP-160 with bounded cue and approved follow-up | Adult/coach UI with text-only and withdrawn cases',
    'Deliver age-appropriate next action and workload signals | Present authorized feedback to the player, emit minimal notification and measure queue review duration | Player feedback presentation and service-workload instrumentation'],
  'SP-162': [
    'Persist private optional goal state | Model per-player goal/week/preference and durable milestone events under current authority | Goal/milestone schema and scoped API',
    'Reconcile practice credit without duplicate milestones | Process retries/corrections and approved week boundaries while preserving rest/missed-week/opt-out history | Idempotent milestone logic and offline/authorization cases'],
  'SP-163': [
    'Build optional goal and milestone views | Present approved goal choices, private earned milestones and adult preferences in both themes | Mobile goal/preference UI',
    'Handle rest and supportive return states | Keep Stop/access intact after early stop, break, missed week or opt-out and preserve synchronized history | Return/opt-out experience and accessibility evidence'],
  'SP-164': [
    'Schedule authorized reminders through existing jobs | Resolve adult preferences, current recipients, time zones and quiet-hour deferral with stable delivery keys | Optional reminder scheduler and boundary fixtures',
    'Handle retry and preference changes before delivery | Recheck opt-out/revocation and deduplicate retries/DST transitions without private payloads | Reminder worker integration and no-delivery/duplicate evidence'],
  'SP-165': [
    'Verify pathway, recommendation and assessment journeys | Exercise approved path availability, all six recommendations and comparable/changed/no-video assessment fixtures | Candidate-linked IP-01/IP-02/IP-03 acceptance results',
    'Verify feedback, goal and reminder journeys | Exercise family/club preview withdrawal, text feedback, rest/opt-out/sync/quiet-hour cases and prepare specialist review | Candidate-linked IP-04/IP-05 results and coaching/privacy/accessibility review packet']
};
