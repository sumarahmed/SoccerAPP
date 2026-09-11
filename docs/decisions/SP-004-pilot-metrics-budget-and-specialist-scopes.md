# SP-004 — Pilot metrics, budget and specialist scopes

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 11 September 2026 |
| Source issue | SP-004 |
| Acceptance criterion | AC-SP-004-01, AC-SP-004-02, AC-SP-004-03, AC-SP-004-04, AC-SP-004-05 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder |
| Review status | Founder acceptance recorded; no specialist sign-off claimed |
| Repository base | `c40af89953cd398b477f9f7bc10183e0016bbba1` on `main` |

This record contains the integrated founder decision required by `ACT-SP-004-01`. It fixes thresholds, access boundaries and prepared specialist scopes before research while preserving every unperformed specialist, device and implementation obligation.

## 1. Accepted predecessor evidence

- [SP-001 decision version 1.0](SP-001-launch-and-account-assumptions.md), accepted 10 September 2026, fixes Australia/English, the five-band 20-participant representation target, solo/assisted expectations, adult account treatment and both recording modes.
- [SP-075 decision version 1.0](SP-075-ownership-and-discovery-authority.md), accepted 11 September 2026, names Syed Ahmed for every primary accountable role, records all human backups/independent reviewers as vacant, caps discovery spend at AUD 0 and gives external-contact authority only to Syed Ahmed.
- The required [platform and business baseline](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_end_to_end_platform_and_business_plan.md) is review edition 6 September 2026, SHA-256 `08c6a47e56f12f665dd9a9e35370d3a2f3c5f3ad40e8cab175ee644d39ee7231`.

## 2. Accepted founder decision

Accept the following as the pre-research baseline:

1. use the metrics and decision rules in section 3 before examining concept/pilot results;
2. retain the hard AUD 0 incremental discovery-spend cap and zero-by-default authority in section 4;
3. use the staged physical-device access plan in section 5, with unavailable equipment recorded as a blocker rather than purchased implicitly;
4. accept the four specialist scope briefs in section 6 as prepared scopes only; issue none and commission no work under this version; and
5. classify every existing number according to section 7 so no internal estimate, published price or workbook assumption is called a quote.

## 3. Success criteria fixed before research

### Sample and measurement rules

- Target 20 participants: four in each band 5–7, 8–10, 11–13, 14–17 and age 18. The 16 minors require a participating guardian and appropriate assent; 18-year-olds consent for themselves.
- Report exact numerator and denominator for every metric, overall and by age band. Withdrawn/missing observations are not silently counted as passes.
- Concept research and a working-app pilot are separate rounds. Static concepts cannot pass device, recording, offline, security or synchronization metrics.
- Use example data for concept research and synthetic or appropriately consenting-adult media for technical tests. No real-child footage is required for feasibility.
- Results are directional usability/reliability evidence. They do not prove long-term development, skill improvement, medical safety or population-level demand.

### Precommitted thresholds

| ID | Measure | Pass threshold before expansion | If threshold is missed |
|---|---|---|---|
| PM-01 | Appropriate first-session completion | At least 16 of 20 participants (80%) choose, start and complete a suitable session with no help beyond the age-appropriate assistance model | Revise the affected flow/content and repeat that age-band evidence |
| PM-02 | Recording and immediate Stop comprehension | All observed participants can identify whether recording is active and can locate/use Stop without an adult-protected gate | Safety-critical revise; do not expand the affected flow until corrected and rechecked |
| PM-03 | Adult storage/privacy comprehension | At least 16 of 20 participating adults/adult players (80%) correctly distinguish on-device, queued/uploading, cloud, expired and delete-everywhere outcomes using the tested copy | Revise copy/flow and repeat; no real upload consent from a person who does not understand the applicable choice |
| PM-04 | Week-two return | At least 10 of 20 participants/households (50%) voluntarily complete another eligible session in week two | Treat retention/value as unproven; investigate by age band before expansion |
| PM-05 | Between-session value | At least 12 of 20 participating adults/adult players (60%) say they would use the tested experience between existing training sessions and can state the useful outcome in their own words | Revisit the value proposition; do not compensate with unsupported skill-improvement claims |
| PM-06 | Capture/finalization reliability | At least 95% of attempted captures on the named supported-device set finalize to a playable, correctly oriented file; 100% of failures show an accurate non-success state | Any false `REC`/`Saved`, lost completed source, or repeatable critical failure blocks the affected device/mode; other misses require correction/retest |
| PM-07 | Timer accuracy | No more than one second active-work timing error over a ten-minute controlled test on every supported pilot device | Correct/retest or explicitly exclude the device/combination |
| PM-08 | Normal-operation device run | Every named supported pilot device completes the defined typical session without crash, unusable preview or forced thermal shutdown | Provide a truthful fallback or remove the device from the proposed support floor |
| PM-09 | Full-session technical limit | A 30-minute technical capture completes on the selected older iPhone and midrange Android target without unacceptable heat or file failure; rests/chapters and any gaps remain accurate | Revise duration/mode/fallback; 30 minutes is never presented as a youth training prescription |
| PM-10 | Offline/reconnect integrity | Every required airplane-mode case completes locally; reconnect creates no duplicate attempt and no stale upload/deletion resurrection | Critical technical blocker until corrected and rerun |
| PM-11 | Authorization and deletion | Zero successful cross-household/cross-club unauthorized reads/writes; zero deletion/withdrawal resurrection in the accepted adverse-case set | Stop the affected pilot scope and remediate before any expansion |
| PM-12 | Coaching/content readiness | 100% of content offered in a participant round is tied to an exact version and an appropriately qualified reviewer approval | Unapproved content stays unavailable; a draft or agent output cannot substitute |

### Go, revise or stop

- **Go to the next bounded stage** only when PM-02, PM-06 failure-state accuracy, PM-10, PM-11 and PM-12 have no open critical failure and all other applicable thresholds pass on the exact tested scope.
- **Revise and repeat affected evidence** when a non-critical threshold misses but there is a credible correction within the approved scope and budget.
- **Stop or narrow the scope** when a child-safety/privacy boundary fails, unauthorized access or deletion resurrection occurs, the core two-mode experience is infeasible on both target platforms, required specialist/device access cannot be obtained, or correction would require unapproved spend.

## 4. Spending boundaries

| Boundary | Accepted value |
|---|---|
| Currency | AUD |
| Incremental discovery-spend cap | **AUD 0** |
| Permitted resources | Existing repository, existing already-paid entitlements with no incremental charge, public information, founder time and agent assistance within separately bounded tasks |
| Prohibited without a new decision | Paid accounts/plans, supplier or adviser fees, participant incentives, devices, travel, cloud/build minutes that incur incremental charges, store fees and any other commitment |
| External commitment authority | Syed Ahmed only; the current version authorizes no commitment |
| Agent authority | Prepare documents, internal analysis, code/tests when separately commissioned and draft unsent inquiries; no contact, purchase, acceptance of terms or charge |
| Stop condition | Stop before any action that would create a charge or exceed an existing no-increment-cost entitlement; record the need and obtain a new dated cap first |
| Review trigger | Any proposed spend above AUD 0, issued specialist brief, paid participant activity, device/service acquisition or scope change |

“Absolutely required” is a reason to request a new decision, not permission to override AUD 0. A later budget change must version both the ownership/authority decision and this integrated decision where affected.

## 5. Device access plan

### Current evidence

- Windows is the only available development machine. Node, npm, Git and GitHub CLI are available on it.
- Flutter, Dart, ADB and Xcode tooling were not found on PATH during the 11 September 2026 inspection.
- Syed Ahmed has confirmed access at home to current-generation Android phone(s), iPhone(s) and an iPad running their current operating systems. Exact model identifiers, OS versions, free storage and battery condition still need to be recorded before `SP-126` accepts the test matrix.
- No local or borrowed Mac/macOS/Xcode development host or store/provider sandbox is currently available. The iPad is an additional physical test device; it does not replace the macOS/Xcode build environment required for the planned Flutter iOS application.

### Zero-cost access sequence

| Stage | Required access | Owner and deadline | If unavailable under AUD 0 |
|---|---|---|---|
| Inventory | Record the exact available Android, iPhone and iPad models, OS versions, free storage, battery condition and whether they may hold synthetic/adult test media | Syed Ahmed before `DF-00-03` / `SP-126` acceptance | Keep any unidentified device outside the accepted matrix |
| Android development | Install a compatible free Flutter/JDK/Android SDK/ADB toolchain on Windows and connect at least one available physical Android phone; emulator may supplement but not replace camera evidence | Syed Ahmed / assigned agent before Android feasibility execution | Android media feasibility remains blocked until setup and connection are demonstrated |
| iOS build | Because Windows is the only development machine, check whether an existing entitlement provides an included/no-incremental-cost hosted macOS build route compatible with Flutter/Xcode and the required signing boundary; otherwise obtain separately approved hosted or physical Mac access | Syed Ahmed before iOS build evidence | Under AUD 0, stop before a paid hosted build or Mac rental/purchase; iOS build/signing evidence remains blocked |
| iOS media test | Use an available physical iPhone after a valid signed test build can be produced; use the iPad for applicable layout/device coverage, not as the build host; simulator may supplement but not replace camera/thermal evidence | Syed Ahmed before iOS feasibility execution | iOS/iPad support cannot be claimed until the build route and physical results exist |
| Cross-platform measurement | Synthetic or consenting-adult media, stable stand, known free space, repeatable ten-minute timing and 30-minute capture protocol | Syed Ahmed / device-test executor before `SP-014` onward | Do not start the affected device run |
| Detailed floor | `SP-126` records named devices, repeat counts, orientation/codec, storage/battery/thermal measurements and truthful fallback/exclusion rules | Syed Ahmed acting as current QA/mobile owner before feasibility | `SP-014`–`SP-016` remain blocked |

Owned device access and hosted build capacity already included in an existing entitlement with no incremental charge are permitted. The accepted plan does not assume that another physical development machine will become available. Mac rentals, metered hosted macOS/build overages, new hardware or paid developer accounts require a new budget decision before use. Remote/simulated devices cannot establish physical camera, heat, battery or interruption behavior. A hosted build may solve compilation/package access, but it does not replace physical iPhone/iPad tests.

## 6. Specialist estimate requests and deliverables

The following are accepted as **prepared scope briefs only** under this decision. They are not issued inquiries, quotes, appointments or approval evidence. SP-075 v1.0 must be reviewed before any brief is issued.

| Brief | Bounded request | Required response/deliverables | Current state |
|---|---|---|---|
| SC-01 Youth coaching | Review D01–D12, age/ability eligibility, setup, equipment, assistance, safety, work/rest, cues, prerequisites, progression and assessment; review rendered A01–A03; include goalkeeper-qualified input for D12 | Named reviewer and qualification scope; written corrections; per-version approval format; animation-review method; rights/reuse position; effort, elapsed time, assumptions, exclusions and AUD/GST basis | Prepared; not issued; no coach approval claimed |
| SC-02 Animation samples | Price one reusable original avatar and A01–A03 with adult reference/mocap decision, cleanup, ball contact, main/alternate/slow views, setup/poster stills, captions/narration separation, editable licensed sources and two review rounds | Reviewable sample/source files; rights and third-party-asset register; technical delivery spec; itemized setup/per-drill/revision cost; estimate for scaling only after sample evidence | Prepared; not issued; no asset or rights approval claimed |
| SC-03 Australian privacy/safeguarding | Review ages 5–18 data/actor/purpose flows, guardian/adult consent and assent, age-18 transition, club/family boundaries, private media, retention/deletion/recovery, processors/regions, reporting/escalation and store audience | Named adviser and scope; prioritized findings mapped to flows; required policy/notice/control changes; unresolved legal questions; alternate-handler requirements; effort, timing, assumptions and AUD/GST basis | Prepared; not issued; mandatory before real-child pilot/data |
| SC-04 Engineering/media feasibility | Prove both recording modes with local demo/cues, timer/camera coordination, accurate pause/interruption/chapters, local save, one authorized resumable upload and quota/deletion behavior on named iOS/Android hardware | Exact prototype/build/source; device/OS matrix; measured PM-06–PM-11 results; limitations and fallback; security/data boundaries; three-point remaining effort; elapsed dependencies and itemized AUD/GST cost | Prepared; not issued; internal agent work still needs tool/device authorization |

Every later response must be labeled **binding quote**, **non-binding supplier estimate**, **internal estimate**, **workbook assumption** or **published price observation**. It must state currency/tax, scope, assumptions, exclusions, named performer/reviewer, deliverables, review rounds, rights, third-party costs, milestones, lead time and validity date.

## 7. Quotes distinguished from assumptions

| Existing figure | Classification | Accepted treatment |
|---|---|---|
| 80% first-session completion and 50% week-two return | Baseline example thresholds | Replaced by the explicit PM-01/PM-04 accepted precommitments; still not observed results |
| No more than one second timing error over ten minutes | Proposed technical threshold in the baseline | Adopted as PM-07; not measured yet |
| 30-minute capture | Proposed technical-test limit in the baseline | Adopted as PM-09; not a child training recommendation |
| Two to three weeks for experienced-engineer feasibility | Internal estimate | Not a quote, schedule commitment or approved spend |
| Earlier 12–19 week delivery range | Superseded family-only internal estimate | Must not be used for the expanded scope |
| 550 engineering, 40 security-review and 120 animation hours | Workbook assumptions | Not supplier estimates; replace after scoped feasibility/samples |
| AUD 60,337.50 / 81,821.88 / 137,681.25 build scenarios | Workbook assumptions with modeled contingency | Not funded, quoted or permitted under AUD 0 |
| Vendor pages or listed service prices | Published price observations | Recheck when selecting a service; not a project quote |
| Actual custom supplier quotes | None obtained | The quote register is empty; do not infer a price or specialist availability |

## 8. Integration and acceptance checklist

- [x] `ACT-SP-001-02` has accepted predecessor evidence: SP-001 v1.0.
- [x] `ACT-SP-075-02` has accepted predecessor evidence: SP-075 v1.0.
- [x] `AC-SP-004-01` — Founder accepted section 3 on 11 September 2026 before research results were examined.
- [x] `AC-SP-004-02` — Founder accepted section 4 and its AUD 0 stop rule on 11 September 2026.
- [x] `AC-SP-004-03` — Founder accepted section 5, including Windows-only development, available Android/iPhone/iPad hardware, the missing Mac build host and zero-cost blockers.
- [x] `AC-SP-004-04` — Founder accepted SC-01–SC-04 as prepared deliverable-bearing scopes, with none issued or funded.
- [x] `AC-SP-004-05` — Founder accepted section 7 and confirmed that no custom quote exists.

## 9. Founder decision

| Field | Recorded decision |
|---|---|
| Decision | Accepted draft 0.1 as decision version 1.0 |
| Decision-maker | Syed Ahmed, Founder |
| Decision date | 11 September 2026 |
| Metric changes | None; PM-01–PM-12 accepted as written |
| Device access facts | Windows is the only development machine; current Android phone(s), iPhone(s) and an iPad with current operating systems are available; exact models/versions remain an SP-126 inventory action; no Mac is available |
| Specialist scope changes | None; SC-01–SC-04 accepted as prepared but not issued or funded |
| Budget/authority changes | None; AUD 0 incremental cap and Syed-only external-contact authority retained |
| Review trigger | Any threshold, device scope, issued brief, external authority or spend change |

## 10. Acceptance statement

Accepted `AC-SP-004-01`, `AC-SP-004-02`, `AC-SP-004-03`, `AC-SP-004-04` and `AC-SP-004-05` for SP-004 decision version 1.0, dated 11 September 2026.

This accepts the pre-research thresholds, spending boundary, device access plan, prepared specialist scopes and evidence classification. It does not claim that research, a device build, physical testing, specialist review, a quote, an app implementation or a release has occurred.

## 11. Evidence and limits

- No participant was contacted or recruited and no research result was inspected before these thresholds were accepted.
- No custom supplier estimate or quote exists. SC-01–SC-04 remain unsent scopes.
- No incremental spend is permitted. Existing devices and no-incremental-cost tools/entitlements may be used within separately commissioned tasks.
- Android/iPhone/iPad access is owner-confirmed at device-class level. Exact hardware/OS/storage condition remains to be inventoried before SP-126; no supported-device claim is made.
- Windows is the sole development host and no Mac is available. iOS compilation/signing remains dependent on a verified no-incremental-cost hosted macOS route or a later spending/access decision.
- Syed Ahmed holds all primary roles. Vacant specialists, backups and independent reviewers continue to block the sensitive actions identified by SP-075 v1.0.
- The frozen 8 September planning manifests retain their historical Backlog state. The operational repository and generated activity map link this dated artifact as current acceptance evidence.

## 12. Review triggers and next work

Version this decision again before changing a metric/threshold, target participant scope, device-platform promise, AUD 0 cap, external-contact authority, issued specialist brief or quote classification.

SP-004 may now be treated as accepted where the operational tracker links this artifact and records Syed Ahmed and the decision date. Content/design preparation whose source dependencies are now satisfied may proceed, but actual coach/privacy/security approvals remain blocked. Before controlled implementation-agent runs, complete the independent G0 agent-scope/evidence policy activities under SP-003; this decision does not authorize unbounded development or bypass each implementation task's own predecessors.
