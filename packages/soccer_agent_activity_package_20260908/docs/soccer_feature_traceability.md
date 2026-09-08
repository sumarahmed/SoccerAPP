# SoccerTrainingApp — feature and acceptance traceability

2026-09-08. This map connects product requirements to the 165-issue delivery breakdown and 390 activities. **A mapped requirement is not an implemented or verified requirement.** All feature, screen and security acceptance remains open. Source versions are in `source_manifest.json` and `baseline/`.

The feature map covers 30 capability groups, F01–F33, S01–S27 and R01–R20. Follow device/Light/Dark is a shared requirement for every screen. Logo-first export extends F10 and its permission/storage flows; it is not a claim that a new Figma frame already exists. The detailed acceptance register gives stable IDs for each issue's planned criteria and blank fields for actual build/device/reviewer evidence.

## Feature coverage

| Feature | Capability | Build / contract issues | Verification issues | Acceptance focus |
|---|---|---|---|---|
| FT-01 | Age bands, family/club routes and ownership | SP-001, SP-037, SP-075, SP-085, SP-099, SP-103 | SP-028, SP-068, SP-074 | Explicitly preserve ages 5–18; independent adult control at 18; named approved first-market decisions |
| FT-02 | Catalog, programs and positions | SP-005, SP-019, SP-086, SP-096, SP-097, SP-125, SP-151, SP-152, SP-156, SP-157 | SP-070, SP-127, SP-130, SP-165 | One catalog; age distinct from ability; approved prerequisites/variants; no fixed twelve-drill authoring limit |
| FT-03 | Realistic demonstrations and complete rights | SP-005, SP-006, SP-114, SP-125, SP-151 | SP-070, SP-125 | Each released variant has actual reviewed assets, captions/cues, source rights and correct ball contact |
| FT-04 | Native camera setup and optional microphone | SP-010, SP-014, SP-016, SP-093 | SP-016, SP-127 | Actual permissions/capture state; silent default contract; front/rear framing; no false REC or Saved |
| FT-05 | Work/rest timer and demo coordination | SP-010, SP-092, SP-095 | SP-014, SP-015, SP-126, SP-127 | Monotonic elapsed time; start after confirmed capture; demo does not reset timer; immediate Stop |
| FT-06 | Exercise clips and full-session recording | SP-015, SP-020, SP-093, SP-094 | SP-016, SP-127 | Full mode includes rests; clips grouped; parts/chapters/gaps honest under interruptions |
| FT-07 | Replay and comparison | SP-020, SP-098, SP-159 | SP-127, SP-130 | Original capture offsets remain separate from practice and export clocks; no invented technique score |
| FT-08 | Logo-first export and safe share handoff | SP-076, SP-080, SP-081, SP-082 | SP-083, SP-130 | Logo then footage; source preserved; one intro for full session; authorized handoff and honest errors |
| FT-09 | Light/Dark system-following appearance | SP-007, SP-077, SP-078, SP-079 | SP-130 | Paired components all roles/screens; device override; live switch preserves media; video pixels unchanged |
| FT-10 | Device database, files and migrations | SP-047, SP-051, SP-053, SP-089, SP-091 | SP-051, SP-067, SP-127 | Per-context protection incl WAL/temp; worker DB access; no silent history wipe |
| FT-11 | Offline downloads, history and reconciliation | SP-047, SP-051, SP-053, SP-097, SP-105, SP-162, SP-164 | SP-024, SP-051, SP-127 | Freshness/entitlement limits; idempotent events; authority/suppression before uploads; free/local preservation |
| FT-12 | Adult MFA, fresh action and recovery | SP-059, SP-065, SP-066, SP-100, SP-102 | SP-065, SP-071, SP-128 | TOTP/backup factor; current recency; enrollment-only recovery; no email-only privilege restoration |
| FT-13 | Restricted child credentials and sibling isolation | SP-059, SP-065, SP-090, SP-099, SP-101 | SP-065, SP-088, SP-128 | Child cannot access adult APIs or other player files; guardian handoff and renewal scoped |
| FT-14 | Guardian changes, disputes and adulthood | SP-061, SP-068, SP-103, SP-132 | SP-068, SP-128 | Verified changes and explicit retained grants; payment/club membership not guardianship |
| FT-15 | Club staff, enrollment, rosters and teams | SP-037, SP-040, SP-041, SP-085, SP-111, SP-112 | SP-045, SP-088, SP-128, SP-138 | Expiring invitations, limited projections, multi-club and coach scopes with revocation |
| FT-16 | Coach plan editing, publishing and withdrawal | SP-005, SP-042, SP-086, SP-113, SP-114, SP-156 | SP-045, SP-070, SP-138 | Add/remove/replace/reorder/assign beyond twelve; reviewed suitability; immutable and active-session history |
| FT-17 | Schedules, assignments and attendance | SP-043, SP-115, SP-152, SP-157 | SP-045, SP-127, SP-138 | Time zones/cancellations; home/club sources distinct; overlaps not merged into unsafe prescribed workload |
| FT-18 | Progress, assessment and structured feedback | SP-043, SP-116, SP-153, SP-154, SP-155, SP-158, SP-159, SP-160, SP-161, SP-162, SP-163 | SP-070, SP-127, SP-138, SP-165 | Participation separate from observed skill; source/author labels; no public child rankings |
| FT-19 | Consent, exact sharing grants and departures | SP-021, SP-044, SP-061, SP-104, SP-117, SP-154, SP-160 | SP-022, SP-045, SP-068, SP-083, SP-165 | Recording/cloud/grants separate; parent/adult authority; withdrawal and offline limits visible |
| FT-20 | Private upload, quota, validation and playback | SP-011, SP-017, SP-023, SP-106, SP-107, SP-108, SP-160 | SP-067, SP-071, SP-128 | Reserve before upload; quarantine until validated; current authority; residual link expiry documented |
| FT-21 | Retention, deletion and data rights | SP-024, SP-061, SP-068, SP-109, SP-132 | SP-068, SP-069, SP-083 | Device/cloud/everywhere clarity; record classes/holds; stale upload and restore cannot resurrect deletion |
| FT-22 | Whole-system recovery and key custody | SP-025, SP-050, SP-055, SP-063, SP-110, SP-131 | SP-069, SP-071, SP-131 | Separate object copy and aligned metadata/auth/config; alternate deletion authority; measured recovery |
| FT-23 | Purchase-source ledger and subscriptions | SP-048, SP-049, SP-052, SP-054, SP-120, SP-121, SP-122, SP-148 | SP-072, SP-129 | Verified sources; correct beneficiary/seats; refunds/restore/grace; sponsorship not video authority |
| FT-24 | Hosting, durable jobs and provider boundaries | SP-012, SP-050, SP-055, SP-107, SP-110, SP-111, SP-123 | SP-067, SP-069, SP-071 | Dev/staging/prod separation; bounded worker scope and retries; regions/processor limits explicit |
| FT-25 | Support, notifications, safeguarding and audit | SP-027, SP-062, SP-063, SP-118, SP-119, SP-124, SP-136, SP-154, SP-155, SP-161, SP-164 | SP-070, SP-071, SP-131, SP-165 | Named/alternate handlers; minimal messages; restricted reports; actual alert delivery and coverage |
| FT-26 | Accessible web/mobile and age-aware experience | SP-007, SP-038, SP-062, SP-077, SP-095, SP-130, SP-155, SP-163 | SP-070, SP-130, SP-165 | F01–F33 plus appearance/export states; assistive input, large text, outdoor and both orientations |
| FT-27 | Agent controls, review and CI evidence | SP-002, SP-003, SP-012, SP-013, SP-146 | SP-013, SP-071, SP-074 | Exact repo/environment and budget; wrong-target/injection resistance; independent current-version acceptance |
| FT-28 | Consented research and commercial validation | SP-004, SP-029, SP-046, SP-057, SP-137, SP-138, SP-139, SP-140 | SP-030, SP-073 | Actual permissions, de-identified findings, denominators and measured price/cost response |
| FT-29 | Business readiness and exact-build release | SP-031, SP-032, SP-033, SP-034, SP-056, SP-073, SP-134, SP-135, SP-136, SP-141, SP-147, SP-148, SP-149, SP-150 | SP-074, SP-141, SP-150 | Approved live catalog/terms, funding, current evidence and actual publish/live status |
| FT-30 | Public marketing, operation, growth and exit | SP-035, SP-036, SP-058, SP-133, SP-142, SP-143, SP-144, SP-145 | SP-034, SP-035, SP-145 | Accurate claims and adult acquisition; dated maintenance; expansion hypotheses; billing/data closure |

## Screen coverage

All rows also depend on SP-077 design and SP-078/SP-079 theme implementations where applicable, with SP-070/SP-130 acceptance. The same screen can exist in mobile and/or responsive web; use the baseline mobile/web split.

| Screen | Name | Source issues (build, design and verification) | Required state evidence |
|---|---|---|---|
| F01 | Welcome and account context | SP-099, SP-100, SP-101, SP-102, SP-112, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F02 | Player profile and consent | SP-099, SP-103, SP-104, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F03 | Today | SP-096, SP-097, SP-115, SP-070, SP-077, SP-078, SP-079, SP-130, SP-152, SP-155, SP-157, SP-162, SP-163, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F04 | Explore | SP-096, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F05 | Program or position path | SP-096, SP-113, SP-070, SP-077, SP-078, SP-079, SP-130, SP-151, SP-156, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F06 | Exercise detail | SP-095, SP-096, SP-097, SP-070, SP-077, SP-078, SP-079, SP-130, SP-151 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F07 | Recording setup | SP-093, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F08 | Countdown | SP-092, SP-093, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F09 | Live practice | SP-078, SP-092, SP-093, SP-094, SP-095, SP-070, SP-077, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F10 | Session review | SP-082, SP-098, SP-070, SP-077, SP-078, SP-079, SP-130, SP-154, SP-159, SP-160, SP-161, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F11 | Parent controls / adult privacy | SP-099, SP-102, SP-104, SP-117, SP-070, SP-077, SP-078, SP-079, SP-130, SP-155, SP-163, SP-164, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F12 | Storage and recording manager | SP-106, SP-108, SP-109, SP-117, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F13 | Progress | SP-098, SP-116, SP-070, SP-077, SP-078, SP-079, SP-130, SP-153, SP-154, SP-155, SP-158, SP-159, SP-161, SP-162, SP-163, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F14 | Workspace/role switcher | SP-099, SP-111, SP-112, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F15 | Platform administration | SP-114, SP-118, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F16 | Club dashboard/settings | SP-111, SP-112, SP-115, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F17 | Staff and roster management | SP-112, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F18 | Age/cohort plan editor | SP-113, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F19 | Review/publication | SP-113, SP-114, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F20 | Calendar/assignments | SP-115, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F21 | Attendance/progress/feedback | SP-104, SP-116, SP-070, SP-077, SP-078, SP-079, SP-130, SP-154, SP-160, SP-161, SP-165 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F22 | Parent/adult club access | SP-103, SP-104, SP-117, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F23 | Adult subscriptions | SP-120, SP-121, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F24 | Club billing and seats | SP-120, SP-122, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F25 | Downloads and offline status | SP-091, SP-097, SP-105, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F26 | Cloud lifecycle and recovery support | SP-106, SP-108, SP-109, SP-110, SP-117, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F27 | Authenticator setup | SP-100, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F28 | MFA challenge and adult step-up | SP-100, SP-102, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F29 | Security and active devices | SP-102, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F30 | Lost authenticator | SP-102, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F31 | Pair device and hand to player | SP-099, SP-101, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F32 | Safety help and report | SP-118, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |
| F33 | Data rights and authority changes | SP-103, SP-132, SP-070, SP-077, SP-078, SP-079, SP-130 | Both modes; applicable loading/error/denial/offline/large-text/focus states from design pack |

## Security risk references

The concerns below are carried from the existing review. This is a delivery mapping, not new penetration-test evidence.

| Risk | Concern | Implementation / verification issues |
|---|---|---|
| S01 | Household identity and player permissions lack an enforceable access matrix; an identifier change could expose another child | SP-008, SP-022, SP-088, SP-128 |
| S02 | “Short-lived authorization” does not define revocation or leaked-link behavior | SP-011, SP-060, SP-108, SP-128 |
| S03 | App-private files alone do not specify device confidentiality | SP-010, SP-091, SP-067, SP-083 |
| S04 | Parent controls are mainly UX; a child-mode toggle could be mistaken for authorization | SP-059, SP-065, SP-101, SP-128 |
| S05 | Consent withdrawal, family changes, and adulthood need a consistent state model | SP-061, SP-103, SP-104, SP-068 |
| S06 | Deletion scope and stale uploads can conflict | SP-024, SP-105, SP-109, SP-132 |
| S07 | A database backup could be mistaken for a recording backup | SP-025, SP-110, SP-069 |
| S08 | Video quotas and media processing lack abuse controls | SP-106, SP-107, SP-123, SP-067 |
| S09 | Environment and secret boundaries are not detailed | SP-012, SP-063, SP-102, SP-131 |
| S10 | Agent-readable issues and dependencies can carry hostile instructions | SP-003, SP-013, SP-146 |
| S11 | Retried events and lost workers can duplicate writes or charges | SP-036, SP-123, SP-146 |
| S12 | An agent can report success without accepted evidence | SP-013, SP-071, SP-074, SP-149 |
| S13 | Supply-chain and Dart security coverage are unspecified | SP-012, SP-026, SP-144 |
| S14 | Content accuracy and rights are not yet approved | SP-005, SP-006, SP-114, SP-125, SP-130 |
| S15 | Operations, incident ownership, and recovery are incomplete | SP-027, SP-063, SP-124, SP-131, SP-135 |
| S16 | Commercial payments and release permissions require implementation evidence | SP-052, SP-054, SP-072, SP-129, SP-150 |
| S17 | Market, child audience, vendor scope, and data notices remain assumptions | SP-001, SP-009, SP-061, SP-063, SP-134 |
| S18 | Club and household relationships widen the isolation boundary; global roles or unsafe joins could expose unrelated users | SP-037, SP-039, SP-045, SP-088, SP-128, SP-154, SP-160, SP-161, SP-165 |
| S19 | Coach editing can change age suitability, prescriptions or published history | SP-042, SP-086, SP-113, SP-114, SP-045 |
| S20 | Club invitation, coach departure and family transfer could incorrectly grant guardianship or retain access | SP-040, SP-103, SP-112, SP-044, SP-045 |
| S21 | New administrative portal and exports create privileged attack paths | SP-060, SP-066, SP-111, SP-128 |
| S22 | Club-funded access or assigned practice could silently expose personal recordings and unrelated activity | SP-043, SP-044, SP-104, SP-117, SP-045, SP-154, SP-160, SP-161, SP-165 |
| S23 | Local accounts, schema migration or queued events expose/corrupt another player's data or restore deleted data | SP-047, SP-051, SP-053, SP-091, SP-105 |
| S24 | Forged, duplicated, delayed or misbound billing events grant features or charge the wrong household | SP-048, SP-052, SP-120, SP-129 |
| S25 | Store payment route, age audience or third-party SDK practices contradict the actual child experience | SP-049, SP-054, SP-121, SP-134 |
| S26 | Primary-region failure or deletion leaves orphaned footage or unusable recovery; residency claims exceed reality | SP-050, SP-055, SP-110, SP-131 |
| S27 | Quota, billing, support or operational failures harm families or leave incidents unowned | SP-027, SP-054, SP-057, SP-123, SP-124, SP-139, SP-147 |

## End-to-end review action references

| Review action | Subject | Implementation / verification issues |
|---|---|---|
| R01 | MFA coverage and assurance | SP-059, SP-065, SP-066, SP-100, SP-102, SP-128, SP-072 |
| R02 | Lost factor and account changes | SP-059, SP-066, SP-102 |
| R03 | Child versus adult credentials | SP-059, SP-065, SP-066, SP-101 |
| R04 | Session freshness and revocation | SP-060, SP-065, SP-066, SP-102, SP-108, SP-154, SP-160, SP-161, SP-165 |
| R05 | Identity, guardianship and transitions | SP-061, SP-068, SP-103, SP-112 |
| R06 | Browser and direct API routes | SP-060, SP-067, SP-088, SP-111 |
| R07 | Untrusted uploaded media | SP-060, SP-067, SP-106, SP-107 |
| R08 | Shared-device disclosure | SP-059, SP-067, SP-091, SP-083 |
| R09 | Complete data retention | SP-061, SP-068, SP-109, SP-132 |
| R10 | Restorable system, not just files | SP-063, SP-069, SP-110, SP-131 |
| R11 | Privileged compromise and keys | SP-063, SP-069, SP-131 |
| R12 | Abuse and denial of service | SP-060, SP-067, SP-071, SP-123, SP-124 |
| R13 | Safeguarding response | SP-062, SP-070, SP-118, SP-136, SP-154, SP-160, SP-161, SP-165 |
| R14 | Content and accessibility completeness | SP-062, SP-064, SP-070, SP-077, SP-125, SP-130 |
| R15 | Compatible updates and emergency controls | SP-063, SP-069, SP-071, SP-074, SP-089, SP-135 |
| R16 | Operational evidence and ownership | SP-063, SP-071, SP-118, SP-124, SP-131 |
| R17 | Commercial abuse and deletion | SP-072, SP-120, SP-129, SP-132 |
| R18 | Market and supplier readiness | SP-061, SP-063, SP-074, SP-134 |
| R19 | Funding and model scope | SP-064, SP-073, SP-139, SP-147 |
| R20 | Specification and gate drift | SP-064, SP-074, SP-149 |

## Cross-cutting acceptance scenarios

| Scenario | What must be demonstrated | Main evidence owners |
|---|---|---|
| Standalone family, no camera or cloud | Appropriate downloaded practice, timer/cues, history and safe player handoff without premium pressure | SP-127, SP-130 |
| Family recording | Actual capture, honest pause/gaps, local replay, logo-first export and optional verified backup | SP-016, SP-083, SP-127 |
| Club-sponsored player | Suitable assigned plan and completion without a second family purchase or implicit media disclosure | SP-045, SP-129, SP-138 |
| Coach edits beyond twelve drills | Scoped add/remove/reorder/assign, approval, immutable publication and correct history | SP-045, SP-070, SP-138 |
| Parent is also coach; player in two clubs | Independent scopes and limited club projections with no accidental guardian or media grants | SP-088, SP-128 |
| Lost authenticator / parent-to-child handoff | Controlled recovery and restricted credentials; no email-only or local-PIN privilege bypass | SP-065, SP-102, SP-128 |
| Offline delete, upload retry and restore | Deletion/withdrawal suppression wins; no resurrection or hidden duplicate credit | SP-068, SP-069, SP-131 |
| Phone changes appearance while recording | Theme repaint only; clock, capture, demo and original footage remain correct | SP-078, SP-130 |
| Storage, process or OS interruption | Source preservation, truthful incomplete states, bounded resources and recoverable parts | SP-016, SP-081, SP-083 |
| Subscription refund / duplicate provider source | Correct server grant convergence; no forged client access or double benefit; account-delete guidance accurate | SP-052, SP-072, SP-129 |
| Content withdrawal or coach departure | New online access denied as appropriate; offline/link/export residual limitations shown accurately | SP-045, SP-068, SP-131 |
| Report concerns guardian or coach | Restricted qualified handler and alternate; no automatic disclosure to accused person | SP-070, SP-118, SP-131 |
| Primary outage and operator unavailable | Measured restore with metadata/object/auth/config and deletion replay; alternate actually reachable | SP-069, SP-131 |
| Commercial release | Current exact-build/content/config evidence, real approvals, live status and staffed response | SP-074, SP-141, SP-150 |

## Evidence handling and change control

The acceptance register is a starting ledger. Add actual artifact links, version/build, device and reviewer decisions when work occurs. Capture positive and negative evidence appropriate to each criterion; a screenshot alone does not prove server authorization. Keep sensitive test/recovery/research material in its approved restricted system, linking only redacted references in normal issues.

After a contract, migration, UI, security, content, provider or scope change, identify affected feature/screen/risk IDs and invalidate only the relevant prior acceptance. At SP-149 reconcile this map against the final candidate and resolve missing evidence. Do not infer completion merely because all IDs exist or all tests are linked.

## Priority and activity traceability

IP-01–IP-05 are reconciled in the source manifest, acceptance register and CSV descriptions. The [activity plan](soccer_agent_activity_plan.md) links all 390 activity records back to source acceptance IDs. No implementation is implied.

| Priority | Source task coverage |
|---|---|
| IP-01 | SP-005, SP-006, SP-084, SP-086, SP-096, SP-113, SP-114, SP-125, SP-127, SP-130, SP-137, SP-147, SP-149, SP-151, SP-156, SP-165 |
| IP-02 | SP-084, SP-086, SP-096, SP-113, SP-115, SP-127, SP-137, SP-138, SP-147, SP-149, SP-152, SP-157, SP-165 |
| IP-03 | SP-005, SP-084, SP-086, SP-098, SP-116, SP-127, SP-139, SP-147, SP-149, SP-153, SP-158, SP-159, SP-165 |
| IP-04 | SP-084, SP-098, SP-104, SP-116, SP-117, SP-119, SP-127, SP-128, SP-138, SP-147, SP-149, SP-154, SP-160, SP-161, SP-165 |
| IP-05 | SP-077, SP-084, SP-096, SP-116, SP-119, SP-127, SP-130, SP-139, SP-147, SP-149, SP-155, SP-162, SP-163, SP-164, SP-165 |
