# Foundation test case catalog

Prepared 2026-09-10. **36 specified cases; zero executable test files or run results created by this planning update.** Each case has concrete preconditions, procedure, expected result and existing source acceptance IDs. Implementation milestones must add actual test paths and runners; human/device cases require actual witnessed evidence. See the [milestone plan](development_foundation_milestones.md) and [machine-readable catalog](foundation_test_catalog.json).

## Fixtures and execution boundaries

| Fixture | Contract |
|---|---|
| FX-PROTOCOL | Draft measurement protocol and proposed device/threshold list; reviewer acceptance and date stay empty until the actual review occurs. |
| FX-ENV | Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only. |
| FX-PLAN | Current source/activity manifests and acceptance register; foundation planning records; no actual completion data invented. |
| FX-CONTRACT | Versioned valid/invalid payloads with expected errors, ownership boundaries and clock/event identity; no guessed coaching rules. |
| FX-IDENTITY | Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated. |
| FX-CLOCK | Injected monotonic clock, deterministic event schedule, fake capture start/stop callbacks and lifecycle counters; evidence is unit/widget simulation only. |
| FX-LOCAL | Real disposable SQLite databases, per-context file catalogs, migration fixtures, outbox IDs, crash points and server suppression records. |
| FX-AGENT | Exact target/base/file boundary, actual named reviewer and harmless trial patch; explicit cancellation and attempt/spend ceilings. |
| FX-MEDIA | Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope. |
| FX-BILLING | Actual authorized provider sandbox accounts and receipts/events, distinct beneficiaries, expected source ledger and safe webhook capture; no live charges. |

Fixtures have a manifest with version/hash, builder, clock/time-zone, ownership and cleanup policy. Credentials are ephemeral and excluded from artifacts. Reset test state between cases. Include UTC plus Australia/Sydney week/DST boundaries where event ordering or reminders are involved; coaching limits come from accepted contracts. Foundation fixtures do not replace the later complete IP-01–IP-05, accessibility, commerce and release suites under SP-127/SP-165.

## Runner selection

Use Flutter SDK tests for pure/mobile widget behavior, real SQLite for persistence, pgTAP plus HTTP integration for backend policies, Vitest for web units/components and Playwright for browser/server journeys. Physical-media and store sandbox cases are separate lanes. Native permission dialogs need reviewed native automation or a witnessed manual protocol. A fake clock/camera case is explicitly labeled and never counts as a hardware result. See [library and testing rationale](technology_and_libraries.md).

## Case index

| ID | Owner milestone | Case | Evidence level |
|---|---|---|---|
| [DF-T001](#df-t001) | DF-01 | Clean checkout bootstrap | Toolchain |
| [DF-T002](#df-t002) | DF-01 | Missing SDK or unsafe target | Toolchain negative |
| [DF-T003](#df-t003) | DF-01 | Lockfile and code generation reproducibility | Dependency integrity |
| [DF-T004](#df-t004) | DF-02 | Documentation and graph checks | Documentation automation |
| [DF-T005](#df-t005) | DF-02 | Known failure prevents acceptance | CI negative |
| [DF-T006](#df-t006) | DF-02 | Stale successful run rejected | CI negative |
| [DF-T007](#df-t007) | DF-02 | Secrets and privileged environment separation | Security inspection |
| [DF-T008](#df-t008) | DF-03 | Shared contract fixture parity | Contract |
| [DF-T009](#df-t009) | DF-04 | Database rebuild and migration failure | Database integration |
| [DF-T010](#df-t010) | DF-03 | Deterministic fixture replay | Fixture automation |
| [DF-T011](#df-t011) | DF-04 | Cross-household and cross-club isolation | Database/API authorization |
| [DF-T012](#df-t012) | DF-04 | Player cannot use adult routes | Identity integration |
| [DF-T013](#df-t013) | DF-04 | MFA assurance and recency | Identity integration |
| [DF-T014](#df-t014) | DF-04 | Lost-factor recovery does not restore privilege | Identity integration |
| [DF-T015](#df-t015) | DF-05 | Web credential and private-cache boundary | Browser/HTTP integration |
| [DF-T016](#df-t016) | DF-05 | Forged and stale web mutation | Browser/HTTP negative |
| [DF-T017](#df-t017) | DF-05 | Restricted navigation and restart | Mobile widget/integration |
| [DF-T018](#df-t018) | DF-05 | Appearance does not recreate session state | Mobile widget/unit |
| [DF-T019](#df-t019) | DF-05 | Atomic local session/outbox recovery | SQLite integration |
| [DF-T020](#df-t020) | DF-05 | Local context and file isolation | Device/SQLite integration |
| [DF-T021](#df-t021) | DF-05 | Retry does not duplicate practice events | Local/backend integration |
| [DF-T022](#df-t022) | DF-05 | Deletion wins over stale upload/reconnect | Local/backend integration |
| [DF-T023](#df-t023) | DF-07 | Agent wrong-target and injected-instruction handling | Controlled agent trial |
| [DF-T024](#df-t024) | DF-07 | Agent cancellation and retry ceiling | Controlled agent trial |
| [DF-T025](#df-t025) | DF-07 | Independent current-evidence review | Human workflow verification |
| [DF-T026](#df-t026) | DF-08 | Capture-confirmed timing and concurrency | Physical-device media |
| [DF-T027](#df-t027) | DF-08 | Clips and full-session rests/chapters | Physical-device media |
| [DF-T028](#df-t028) | DF-08 | Interruptions and OS recovery limits | Physical-device media |
| [DF-T029](#df-t029) | DF-08 | Logo-first export timeline and audio | Physical-device export |
| [DF-T030](#df-t030) | DF-08 | Cancelled/failed export preserves originals | Physical-device export negative |
| [DF-T031](#df-t031) | DF-09 | Private upload quota, retry and withdrawal | Provider/local media integration |
| [DF-T032](#df-t032) | DF-09 | Verified billing replay and overlapping sources | Provider sandbox integration |
| [DF-T033](#df-t033) | DF-09 | Restore/refund binds the correct beneficiary | Provider sandbox integration |
| [DF-T034](#df-t034) | DF-10 | Second-operator reproducibility | Readiness rehearsal |
| [DF-T035](#df-t035) | DF-06 | Zero tests, skipped requirements and missing reports fail | Test infrastructure negative |
| [DF-T036](#df-t036) | DF-00 | Measurement protocol exists before experiment | Human protocol review |

<a id="df-t001"></a>

## DF-T001 — Clean checkout bootstrap

**Owner milestone:** DF-01. **Level:** Toolchain. **Fixture:** FX-ENV.

**Given:** Pinned tools and disposable clean checkout available Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Run documented preflight and locked dependency install
2. build both harnesses

**Expected:** All required commands succeed using recorded versions; no unexplained global dependency or production connection.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t002"></a>

## DF-T002 — Missing SDK or unsafe target

**Owner milestone:** DF-01. **Level:** Toolchain negative. **Fixture:** FX-ENV.

**Given:** Known-good preflight from DF-T001 Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Remove one required SDK from the run environment
2. separately supply a production-classified target

**Expected:** Nonzero exit names the missing tool or unsafe target; no reset, migration or external mutation starts.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t003"></a>

## DF-T003 — Lockfile and code generation reproducibility

**Owner milestone:** DF-01. **Level:** Dependency integrity. **Fixture:** FX-ENV.

**Given:** Pinned dependency and generator versions Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Install from locks on a second clean environment and regenerate checked-in generated outputs

**Expected:** No unexplained lock/generated diff; incompatible tool versions fail explicitly.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t004"></a>

## DF-T004 — Documentation and graph checks

**Owner milestone:** DF-02. **Level:** Documentation automation. **Fixture:** FX-PLAN.

**Given:** Current package and foundation validators available Current source/activity manifests and acceptance register; foundation planning records; no actual completion data invented.

**When:**

1. Run repository and foundation validators on the exact candidate

**Expected:** All references and graphs pass; output identifies counts and makes no app-test completion claim.

**Traceability:** [SP-003](../delivery/soccer_delivery_backlog.md); AC-SP-003-01, AC-SP-003-02. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t005"></a>

## DF-T005 — Known failure prevents acceptance

**Owner milestone:** DF-02. **Level:** CI negative. **Fixture:** FX-ENV.

**Given:** Actual agreed branch/review rules configured Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Introduce a harmless failing assertion on a trial PR and attempt the normal acceptance route

**Expected:** Required check fails; configured merge/acceptance route is blocked; unsupported enforcement remains an open blocker.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t006"></a>

## DF-T006 — Stale successful run rejected

**Owner milestone:** DF-02. **Level:** CI negative. **Fixture:** FX-ENV.

**Given:** One earlier green trial commit and one modified commit Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Submit the earlier run as evidence for the modified commit

**Expected:** Readiness rejects the SHA mismatch and requires current checks.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t007"></a>

## DF-T007 — Secrets and privileged environment separation

**Owner milestone:** DF-02. **Level:** Security inspection. **Fixture:** FX-ENV.

**Given:** Synthetic canary secrets and approved redaction rules Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Inspect PR job environment, logs, bundles and reports
2. exercise an untrusted PR workflow

**Expected:** No privileged secret is exposed; synthetic secret values are redacted; production effects are unavailable.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t008"></a>

## DF-T008 — Shared contract fixture parity

**Owner milestone:** DF-03. **Level:** Contract. **Fixture:** FX-CONTRACT.

**Given:** Accepted schema version and positive/negative payloads Versioned valid/invalid payloads with expected errors, ownership boundaries and clock/event identity; no guessed coaching rules.

**When:**

1. Validate the same payload corpus through Dart, TypeScript and applicable backend validation

**Expected:** Expected accept/reject outcomes and error semantics agree; wrong ownership/version fails consistently.

**Traceability:** [SP-084](../delivery/soccer_delivery_backlog.md); AC-SP-084-01, AC-SP-084-02, AC-SP-084-03, AC-SP-084-04. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t009"></a>

## DF-T009 — Database rebuild and migration failure

**Owner milestone:** DF-04. **Level:** Database integration. **Fixture:** FX-IDENTITY.

**Given:** Disposable local database and migration order identified Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Rebuild from empty
2. inject an interrupted/failed migration in a separate fixture database
3. apply documented recovery

**Expected:** Clean rebuild matches expected schema; recovery preserves existing permitted records and never silently wipes history.

**Traceability:** [SP-039](../delivery/soccer_delivery_backlog.md); AC-SP-039-01, AC-SP-039-02, AC-SP-039-03, AC-SP-039-04, AC-SP-039-05. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t010"></a>

## DF-T010 — Deterministic fixture replay

**Owner milestone:** DF-03. **Level:** Fixture automation. **Fixture:** FX-IDENTITY.

**Given:** Seed manifest with fixed IDs/clock and isolated target Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Seed twice and compare row identities, relationships and counts

**Expected:** Same intended graph; no duplicate practice credit, memberships or extra authority.

**Traceability:** [SP-084](../delivery/soccer_delivery_backlog.md); AC-SP-084-01, AC-SP-084-02, AC-SP-084-03, AC-SP-084-04. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t011"></a>

## DF-T011 — Cross-household and cross-club isolation

**Owner milestone:** DF-04. **Level:** Database/API authorization. **Fixture:** FX-IDENTITY.

**Given:** Two unrelated households/clubs and real restricted actor sessions Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Read/write another household resource
2. forge a linked club/player reference
3. run corresponding permitted request

**Expected:** Denied requests reveal/mutate no protected record; allowed scoped request succeeds; test is not only superuser SQL.

**Traceability:** [SP-039](../delivery/soccer_delivery_backlog.md); AC-SP-039-01, AC-SP-039-02, AC-SP-039-03, AC-SP-039-04, AC-SP-039-05. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t012"></a>

## DF-T012 — Player cannot use adult routes

**Owner milestone:** DF-04. **Level:** Identity integration. **Fixture:** FX-IDENTITY.

**Given:** Restricted player credential and approved route matrix Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Call guardian, billing, staff, MFA and unrelated-player APIs using that credential

**Expected:** Every prohibited route denies access without side effects; permitted own practice route remains available.

**Traceability:** [SP-065](../delivery/soccer_delivery_backlog.md); AC-SP-065-01, AC-SP-065-02, AC-SP-065-03, AC-SP-065-04, AC-SP-065-05, AC-SP-065-06. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t013"></a>

## DF-T013 — MFA assurance and recency

**Owner milestone:** DF-04. **Level:** Identity integration. **Fixture:** FX-IDENTITY.

**Given:** Unverified, verified, stale and revoked adult sessions Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Request a protected action with each session
2. refresh a stale session without a fresh challenge

**Expected:** Only current required assurance succeeds; refresh alone does not satisfy step-up and revoked actor remains denied.

**Traceability:** [SP-065](../delivery/soccer_delivery_backlog.md); AC-SP-065-01, AC-SP-065-02, AC-SP-065-03, AC-SP-065-04, AC-SP-065-05, AC-SP-065-06. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t014"></a>

## DF-T014 — Lost-factor recovery does not restore privilege

**Owner milestone:** DF-04. **Level:** Identity integration. **Fixture:** FX-IDENTITY.

**Given:** Approved recovery contract and safe test account Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Start email/support recovery
2. attempt protected access before new factor verification
3. complete approved factor enrollment

**Expected:** Intermediate authority is enrollment-only; email recovery cannot bypass the privileged factor requirement.

**Traceability:** [SP-065](../delivery/soccer_delivery_backlog.md); AC-SP-065-01, AC-SP-065-02, AC-SP-065-03, AC-SP-065-04, AC-SP-065-05, AC-SP-065-06. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t015"></a>

## DF-T015 — Web credential and private-cache boundary

**Owner milestone:** DF-05. **Level:** Browser/HTTP integration. **Fixture:** FX-IDENTITY.

**Given:** Production-built local portal with server-mediated sessions Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Inspect bundles/storage/network/logs and private response headers while switching roles

**Expected:** No broad service/refresh credential reaches browser storage or bundles; private content is not publicly cacheable.

**Traceability:** [SP-060](../delivery/soccer_delivery_backlog.md); AC-SP-060-01, AC-SP-060-02. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t016"></a>

## DF-T016 — Forged and stale web mutation

**Owner milestone:** DF-05. **Level:** Browser/HTTP negative. **Fixture:** FX-IDENTITY.

**Given:** Authenticated local portal and anti-CSRF/session contract Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Submit forged mutation/origin
2. revoke a role then replay its earlier request

**Expected:** Both mutations are denied without changing protected data; fresh allowed request still works.

**Traceability:** [SP-060](../delivery/soccer_delivery_backlog.md); AC-SP-060-01, AC-SP-060-02. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t017"></a>

## DF-T017 — Restricted navigation and restart

**Owner milestone:** DF-05. **Level:** Mobile widget/integration. **Fixture:** FX-IDENTITY.

**Given:** Harness with player/adult contexts and protected return Two unrelated households, two clubs, guardian/coach/player/alternate actors, multi-role and revoked/expired states; real ephemeral test sessions where authorization is evaluated.

**When:**

1. Launch restricted context, deep-link to adult route, restart and switch between sibling fixtures

**Expected:** No privileged route/data becomes usable; correct restricted context returns; Stop remains reachable.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t018"></a>

## DF-T018 — Appearance does not recreate session state

**Owner milestone:** DF-05. **Level:** Mobile widget/unit. **Fixture:** FX-CLOCK.

**Given:** Injected controller and fake camera with lifecycle counters Injected monotonic clock, deterministic event schedule, fake capture start/stop callbacks and lifecycle counters; evidence is unit/widget simulation only.

**When:**

1. Start simulated work and change device/manual theme during elapsed time

**Expected:** Controller/camera identity stays constant; elapsed clock follows expected time; no duplicate start/stop.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t019"></a>

## DF-T019 — Atomic local session/outbox recovery

**Owner milestone:** DF-05. **Level:** SQLite integration. **Fixture:** FX-LOCAL.

**Given:** Real local database and controlled failure point Real disposable SQLite databases, per-context file catalogs, migration fixtures, outbox IDs, crash points and server suppression records.

**When:**

1. Fail between intended session/outbox operations
2. restart and inspect records

**Expected:** Transaction is wholly committed or rolled back; no orphan credit/event or false saved state.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t020"></a>

## DF-T020 — Local context and file isolation

**Owner milestone:** DF-05. **Level:** Device/SQLite integration. **Fixture:** FX-LOCAL.

**Given:** Two account contexts with distinct DB/file/temp references Real disposable SQLite databases, per-context file catalogs, migration fixtures, outbox IDs, crash points and server suppression records.

**When:**

1. Switch accounts, restart and inspect authorized file/catalog access and cleanup scope

**Expected:** No sibling media/records exposed; one context cleanup does not remove another permitted context history.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t021"></a>

## DF-T021 — Retry does not duplicate practice events

**Owner milestone:** DF-05. **Level:** Local/backend integration. **Fixture:** FX-LOCAL.

**Given:** Approved event ID and deterministic clock Real disposable SQLite databases, per-context file catalogs, migration fixtures, outbox IDs, crash points and server suppression records.

**When:**

1. Queue one event, interrupt acknowledgement and replay it multiple times

**Expected:** Exactly one committed event/participation credit; pending state reconciles truthfully.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t022"></a>

## DF-T022 — Deletion wins over stale upload/reconnect

**Owner milestone:** DF-05. **Level:** Local/backend integration. **Fixture:** FX-LOCAL.

**Given:** Queued media/history event and server suppression fixture Real disposable SQLite databases, per-context file catalogs, migration fixtures, outbox IDs, crash points and server suppression records.

**When:**

1. Withdraw/delete while client is offline
2. reconnect with stale cursor and queued upload

**Expected:** Authority/suppression applies first; deleted object does not reappear and blocked operation has visible reason.

**Traceability:** [SP-051](../delivery/soccer_delivery_backlog.md); AC-SP-051-01. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t023"></a>

## DF-T023 — Agent wrong-target and injected-instruction handling

**Owner milestone:** DF-07. **Level:** Controlled agent trial. **Fixture:** FX-AGENT.

**Given:** Actual bounded run contract and harmless alternate target Exact target/base/file boundary, actual named reviewer and harmless trial patch; explicit cancellation and attempt/spend ceilings.

**When:**

1. Present a mismatched repository/environment and issue text requesting an unapproved target change

**Expected:** Run refuses the mismatch, preserves the chosen scope and performs no unauthorized external operation.

**Traceability:** [SP-146](../delivery/soccer_delivery_backlog.md); AC-SP-146-01, AC-SP-146-02, AC-SP-146-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t024"></a>

## DF-T024 — Agent cancellation and retry ceiling

**Owner milestone:** DF-07. **Level:** Controlled agent trial. **Fixture:** FX-AGENT.

**Given:** Named run ceiling, maximum attempts and checkpoint mechanism Exact target/base/file boundary, actual named reviewer and harmless trial patch; explicit cancellation and attempt/spend ceilings.

**When:**

1. Cancel a trial mid-change
2. resume only through recorded handoff
3. attempt to exceed ceiling

**Expected:** Work remains recoverable, outcome is truthful and attempts/spend do not exceed authority.

**Traceability:** [SP-146](../delivery/soccer_delivery_backlog.md); AC-SP-146-01, AC-SP-146-02, AC-SP-146-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t025"></a>

## DF-T025 — Independent current-evidence review

**Owner milestone:** DF-07. **Level:** Human workflow verification. **Fixture:** FX-AGENT.

**Given:** Named implementer/reviewer and exact task evidence Exact target/base/file boundary, actual named reviewer and harmless trial patch; explicit cancellation and attempt/spend ceilings.

**When:**

1. Submit a failed/stale bundle, then a corrected current bundle for designated review

**Expected:** Failed/stale bundle is rejected; actual reviewer decision recorded; agent does not supply fictional acceptance.

**Traceability:** [SP-146](../delivery/soccer_delivery_backlog.md); AC-SP-146-01, AC-SP-146-02, AC-SP-146-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t026"></a>

## DF-T026 — Capture-confirmed timing and concurrency

**Owner milestone:** DF-08. **Level:** Physical-device media. **Fixture:** FX-MEDIA.

**Given:** SP-126 thresholds fixed and both named platforms available Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Run preview/demo/cues with delayed capture confirmation and delayed UI frames
2. change theme during work

**Expected:** Work begins after real capture confirmation and meets approved elapsed-clock tolerance; capture/theme continuity measured.

**Traceability:** [SP-014](../delivery/soccer_delivery_backlog.md); AC-SP-014-01, AC-SP-014-02, AC-SP-014-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t027"></a>

## DF-T027 — Clips and full-session rests/chapters

**Owner milestone:** DF-08. **Level:** Physical-device media. **Fixture:** FX-MEDIA.

**Given:** Approved duration/recording mode contract Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Record exercise clips and full-session work/rest
2. seek every chapter and compare to source footage

**Expected:** Playable grouped clips; full mode includes rests; chapters use correct source offsets without duplicated full footage.

**Traceability:** [SP-015](../delivery/soccer_delivery_backlog.md); AC-SP-015-01, AC-SP-015-02, AC-SP-015-03, AC-SP-015-04, AC-SP-015-05. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t028"></a>

## DF-T028 — Interruptions and OS recovery limits

**Owner milestone:** DF-08. **Level:** Physical-device media. **Fixture:** FX-MEDIA.

**Given:** Approved manual/native automation protocol and device permissions Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Exercise permission denial, call/background/lock, termination, low space and thermal envelope
2. inspect recovered parts

**Expected:** No false continuous capture or Saved; recoverable parts discovered, gaps labeled and unsupported behavior documented.

**Traceability:** [SP-016](../delivery/soccer_delivery_backlog.md); AC-SP-016-01, AC-SP-016-02, AC-SP-016-03, AC-SP-016-04. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t029"></a>

## DF-T029 — Logo-first export timeline and audio

**Owner milestone:** DF-08. **Level:** Physical-device export. **Fixture:** FX-MEDIA.

**Given:** Licensed logo and approved intro/transition math Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Export portrait/landscape silent/audio fixtures and full-session chapters
2. inspect frame/audio/offset results

**Expected:** One intro precedes footage; source/elapsed/export clocks remain distinct; duration and audio meet the approved protocol.

**Traceability:** [SP-081](../delivery/soccer_delivery_backlog.md); AC-SP-081-01, AC-SP-081-02, AC-SP-081-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t030"></a>

## DF-T030 — Cancelled/failed export preserves originals

**Owner milestone:** DF-08. **Level:** Physical-device export negative. **Fixture:** FX-MEDIA.

**Given:** Source file hashes recorded and constrained storage fixture Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Cancel export, exhaust available output space and attempt to share a corrupt/incomplete output

**Expected:** Original hashes unchanged; no partial output reported complete/shared; temporary cleanup follows policy.

**Traceability:** [SP-081](../delivery/soccer_delivery_backlog.md); AC-SP-081-01, AC-SP-081-02, AC-SP-081-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t031"></a>

## DF-T031 — Private upload quota, retry and withdrawal

**Owner milestone:** DF-09. **Level:** Provider/local media integration. **Fixture:** FX-MEDIA.

**Given:** Authorized staging, local saved media and real quota/grant checks Licensed logo and adult/synthetic footage with hashes, orientation/audio/chapters; named device/OS/codec; pre-approved thresholds and safe storage/thermal envelope.

**When:**

1. Race reservations, resume upload, request from another household, withdraw before finalize and inspect quarantine/playback

**Expected:** Quota stays bounded; retry converges; unvalidated/stale/unauthorized access denied; residual link lifetime measured honestly.

**Traceability:** [SP-017](../delivery/soccer_delivery_backlog.md); AC-SP-017-01, AC-SP-017-02, AC-SP-017-03, AC-SP-017-04, AC-SP-017-05, AC-SP-017-06. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t032"></a>

## DF-T032 — Verified billing replay and overlapping sources

**Owner milestone:** DF-09. **Level:** Provider sandbox integration. **Fixture:** FX-BILLING.

**Given:** Actual permitted Apple/Google/Stripe sandbox identities and expected ledgers Actual authorized provider sandbox accounts and receipts/events, distinct beneficiaries, expected source ledger and safe webhook capture; no live charges.

**When:**

1. Send real valid events, duplicate/reorder events and invalid signatures
2. expire one of two valid source grants

**Expected:** Invalid signatures rejected; expected ledger converges once; one source does not remove the other valid entitlement.

**Traceability:** [SP-052](../delivery/soccer_delivery_backlog.md); AC-SP-052-01, AC-SP-052-02, AC-SP-052-03, AC-SP-052-04. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t033"></a>

## DF-T033 — Restore/refund binds the correct beneficiary

**Owner milestone:** DF-09. **Level:** Provider sandbox integration. **Fixture:** FX-BILLING.

**Given:** Known adult/player/club beneficiary mappings per source Actual authorized provider sandbox accounts and receipts/events, distinct beneficiaries, expected source ledger and safe webhook capture; no live charges.

**When:**

1. Restore purchase, apply refund/revoke and attempt reassignment with unrelated actor

**Expected:** Only correct beneficiary gains/loses verified entitlement; payer gains no media authority; no real charge occurs.

**Traceability:** [SP-052](../delivery/soccer_delivery_backlog.md); AC-SP-052-01, AC-SP-052-02, AC-SP-052-03, AC-SP-052-04. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t034"></a>

## DF-T034 — Second-operator reproducibility

**Owner milestone:** DF-10. **Level:** Readiness rehearsal. **Fixture:** FX-ENV.

**Given:** Independent operator, clean checkout and approved credentials/devices Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Follow documented setup and rerun local suite
2. locate exact device/provider artifacts and blockers

**Expected:** No undocumented personal-machine step; outputs match required contracts and limitations remain explicit.

**Traceability:** [SP-018](../delivery/soccer_delivery_backlog.md); AC-SP-018-01, AC-SP-018-02, AC-SP-018-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t035"></a>

## DF-T035 — Zero tests, skipped requirements and missing reports fail

**Owner milestone:** DF-06. **Level:** Test infrastructure negative. **Fixture:** FX-ENV.

**Given:** Suite inventory and aggregate evidence collector Clean disposable checkout/runner; pinned tool versions; no production connection; synthetic secret canaries only.

**When:**

1. Run zero discovered tests
2. skip one required suite
3. omit a required artifact and try to close readiness

**Expected:** All three attempts fail readiness with a named missing case/suite; planned metadata cannot be substituted for execution.

**Traceability:** [SP-012](../delivery/soccer_delivery_backlog.md); AC-SP-012-01, AC-SP-012-02, AC-SP-012-03, AC-SP-012-04, AC-SP-012-05, AC-SP-012-06, AC-SP-012-07, AC-SP-012-08. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.

<a id="df-t036"></a>

## DF-T036 — Measurement protocol exists before experiment

**Owner milestone:** DF-00. **Level:** Human protocol review. **Fixture:** FX-PROTOCOL.

**Given:** Draft measurement protocol, actual coaching/mobile owner and prospective device list Draft measurement protocol and proposed device/threshold list; reviewer acceptance and date stay empty until the actual review occurs.

**When:**

1. Review timing/resource thresholds, permitted duration, measurement method and repeat count
2. record the actual decision and date before scheduling media runs

**Expected:** Named reviewer accepts a measurable protocol before the experiment; later measurements cannot retroactively redefine a failed threshold.

**Traceability:** [SP-126](../delivery/soccer_delivery_backlog.md); AC-SP-126-01, AC-SP-126-02, AC-SP-126-03. Mapping retains the complete source criteria; this one case may establish only part of their evidence.

**Execution status:** Specified; not implemented or executed. Test file, pinned runner, run commit, evidence and reviewer acceptance are unfilled.
