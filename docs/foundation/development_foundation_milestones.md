# Detailed development foundation milestones

Prepared 10 September 2026. **11 milestones, 33 bounded work items and 36 written foundation test cases.** This plan turns the documented technology stack into a sequence for building a reproducible development environment and proving risky integrations. No SDK, library, app scaffold, cloud service or executable app test is installed by this document.

Read the [technology/library baseline](technology_and_libraries.md), [test catalog](foundation_test_catalog.md), [structured milestone records](foundation_milestones.json) and [review report](foundation_review.md). The [existing activity plan](../delivery/soccer_agent_activity_plan.md) and [master plan](../product/soccer_delivery_master_plan.md) remain the product source of truth.

## Baseline and scope

Repository inspected: `sumarahmed/SoccerAPP`, `main`, source baseline commit `667f041649d88d02a2b153a8caf565af3a048269`. It contains planning artifacts and documentation validators, with no app projects, app dependency locks, backend migrations or app CI workflows. On the inspected Windows host Node/npm/Git/GitHub CLI were on PATH; Flutter/Dart/Android device tools/Docker/Supabase CLI were not found on PATH. This does not prove they are absent from every machine or location.

The foundation is delivered through the existing SP/ACT tasks. **The counts remain 165 SP tasks, 390 ACT activities and 613 planned acceptance criteria.** DF IDs organize this refinement and are not extra Linear imports or completed work. Mapping a source task means contributing evidence to it; it never closes that task automatically. The 8 September package is preserved unchanged. This 10 September plan is an additional authoritative refinement under `docs/foundation/`.

Before executing a work item, satisfy both its DF predecessors and every applicable existing SP predecessor, including real contract, coaching, scope and funding decisions. Planning drafts can proceed within the current request, while implementation stays unstarted. In particular, do not treat scaffolding as completion of SP-090 or SP-085 before SP-018. Early scaffolds and schemas are disposable feasibility harnesses under SP-012/SP-039/SP-051.

## Milestone sequence

| Milestone | Outcome | DF predecessors | Accountable role |
|---|---|---|---|
| [DF-00](#df-00) | Resolve foundation scope, owners and technical decisions | None; source decisions still required | Technical lead / delivery owner |
| [DF-01](#df-01) | Build a repeatable developer toolchain and workspace | DF-00 | Platform agent / technical lead |
| [DF-02](#df-02) | Establish CI, review rules and evidence handling | DF-01 | Platform agent |
| [DF-03](#df-03) | Define shared contracts and repeatable synthetic fixtures | DF-01 | Backend / contract agent |
| [DF-04](#df-04) | Prove isolated local backend and identity boundaries | DF-02, DF-03 | Backend / identity agent |
| [DF-05](#df-05) | Build client and persistence feasibility harnesses | DF-02, DF-03, DF-04 | Mobile and web agents with separate file ownership |
| [DF-06](#df-06) | Turn foundation test specifications into executable suites | DF-04, DF-05 | QA / test automation agent |
| [DF-07](#df-07) | Complete one controlled agent assignment end to end | DF-06 | Delivery agent with a named implementing agent |
| [DF-08](#df-08) | Prove camera, timing, interruption and export on devices | DF-07, DF-05 | Mobile/media agent |
| [DF-09](#df-09) | Verify scoped development services and provider sandboxes | DF-04, DF-07, DF-08 | Backend/billing/operations agents with separate scopes |
| [DF-10](#df-10) | Review foundation readiness and the full-build decision | DF-00, DF-01, DF-02, DF-03, DF-04, DF-05, DF-06, DF-07, DF-08, DF-09 | Delivery / technical lead |

DF-02 (CI) and DF-03 (contracts/fixtures) can proceed in parallel after DF-01 where their source inputs allow it. Other apparent parallel opportunities require non-overlapping file ownership and accepted interfaces; no agents have been launched.

**Checkpoint A — workspace usable:** DF-00 through DF-07 accepted, with actual SDKs, local services, executable local tests, enforcement and one reviewed agent run. This does not prove native camera/export or provider billing.

**Checkpoint B — feasibility measured:** DF-08 and DF-09 add physical-device and genuine provider sandbox evidence. Missing macOS/iPhone access or a sandbox account cannot be substituted with a mock pass.

**Checkpoint C — full-build decision:** DF-10 reviews these results together with every remaining SP-018 predecessor. Content approval, security review and revised funding remain required; this checkpoint is not pilot readiness or release approval.

## Assignment, estimates and evidence

Each work item below states an executor/reviewer role, goal, deliverable, proposed file area and acceptance condition. Resolve actual people, base SHA, environment, allowed files and run/spend ceiling before Ready. The structured records intentionally leave these values blank. Proposed first checkpoint is 90 minutes/two attempts, inherited from the execution playbook, only after an actual ceiling is accepted; larger work must be split by the named behavior/interface. No dates, total budget or completion percentages are promised without actual capacity and device/provider access. Estimate hands-on work separately from account, review and equipment waits; do not sum a milestone and its children.

An implementing agent may validate its change and submit Review. A named authorized reviewer accepts evidence. Security-sensitive scope uses the designated security reviewer, and actual human gates require actual people. Never satisfy independent review by inventing another approver. One writer owns each actual mutable path/interface; shared fixture changes require coordinating every consuming suite.

Every evidence record contains DF work/test ID; source SP/ACT/AC IDs; commit/build/config/content/fixture versions; actual command and exit code; tool/OS/device/provider mode; pass/fail/skipped counts; sanitized artifact link/hash; observed versus expected behavior; untested limits; reviewer and decision time. Source criteria remain unverified until this evidence exists.

## Failure and recovery policy

- On a failed install/build/test, keep the failing output and identify the smallest correction; rerun affected cases on the new SHA. A retry pass does not erase the initial failure.
- A required skipped/zero-test suite or missing device/provider evidence blocks the applicable checkpoint. Distinguish an unavailable service from a product failure.
- Local destructive reset/seed commands must positively identify a disposable target; preserve useful unsynced data and fixture evidence before reset. Source and exported media are different copies.
- Missing branch-rule support, reviewer, toolchain, Mac/device, sandbox access or cost authority gets an owner and next action. Do not silently weaken an acceptance criterion.
- No live charges, customer data, real-child footage, production deployment or unapproved invitation is part of the foundation experiment. Reuse already-recorded authority where it applies.

## Detailed milestone cards

<a id="df-00"></a>

### DF-00 — Resolve foundation scope, owners and technical decisions

**Goal:** Define exactly which development work can start, who reviews it, which contracts constrain it and how success will be measured.

**Status:** Proposed; not started. **Owner/executor role:** Technical lead / delivery owner. **Reviewer:** Product owner and security reviewer.

**DF prerequisites:** None. **Source work:** [SP-003](../delivery/soccer_delivery_backlog.md), [SP-037](../delivery/soccer_delivery_backlog.md), [SP-084](../delivery/soccer_delivery_backlog.md), [SP-126](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** No additional source tasks.

**Entry inputs:**

- Current SP-001/SP-004/SP-075 scope, discovery funding and named ownership decisions
- Existing data/authority, recording, identity and privacy contracts; record any unaccepted predecessor explicitly

**Proposed file boundaries:** `docs/foundation/**`, `docs/decisions/**`. Replace these areas with exact approved files for each run.

#### DF-00-01 — Record accountable people and assignment authority

- **Goal:** Resolve owner/reviewer/alternate, run ceiling, permitted effects and environment for each foundation activity; reuse existing authority.
- **Deliverable:** Foundation assignment matrix and decision log
- **Predecessors:** DF-00 source inputs and actual assignment
- **Completion check:** Every activity has an actual named owner/reviewer before Ready; unresolved names and spend are not treated as approvals.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner and security reviewer; no self-approval of a human/source gate.

#### DF-00-02 — Approve the dependency and architecture decision list

- **Goal:** Review the library baseline, monorepo paths, session boundary, contract format and runner needs without implementing product features.
- **Deliverable:** Architecture decision records and dependency adoption checklist
- **Predecessors:** DF-00-01
- **Completion check:** Each proposed choice is accepted, replaced with rationale or explicitly blocking; no contradictory mobile/web rule owner.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner and security reviewer; no self-approval of a human/source gate.

#### DF-00-03 — Set feasibility measurements and platform access

- **Goal:** Name Android/iOS devices, macOS/Xcode access, media/clock tolerances, repeat counts and storage/thermal limits before experiments.
- **Deliverable:** Dated device/measurement protocol and source-gate mapping
- **Predecessors:** DF-00-02
- **Completion check:** SP-126 owners accept measurable thresholds; missing physical devices or provider accounts have named next actions.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner and security reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Technical decisions and real ownership recorded
- [ ] Source-task prerequisites classified as accepted or blocking
- [ ] Device and CI enforcement requirements measurable before work starts

**Test specifications:** [DF-T036](foundation_test_catalog.md#df-t036). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-01"></a>

### DF-01 — Build a repeatable developer toolchain and workspace

**Goal:** A clean authorized machine can install pinned tools and restore a minimal mobile/web/backend workspace using documented steps.

**Status:** Proposed; not started. **Owner/executor role:** Platform agent / technical lead. **Reviewer:** Second developer or designated technical reviewer.

**DF prerequisites:** DF-00. **Source work:** [SP-012](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-090](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- DF-00 decisions
- Accepted SP-003/SP-008/SP-009 inputs required by SP-012; placeholder contracts do not satisfy these prerequisites

**Proposed file boundaries:** `apps/mobile/pubspec*`, `apps/web/package.json`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `backend/supabase/config.toml`, `tools/dev/**`, `docs/development/**`. Replace these areas with exact approved files for each run.

#### DF-01-01 — Pin the toolchain and dependency set

- **Goal:** Resolve compatible Flutter/Dart, Android/JDK, macOS/Xcode, Node/pnpm, Supabase CLI and Docker-runtime versions.
- **Deliverable:** Version inventory, SDK pins, application lockfiles and installation guide
- **Predecessors:** DF-00-03
- **Completion check:** Clean locked installs succeed; each platform/tool version and any licensing/access constraint is recorded.
- **Handoff:** actual artifacts/checks and remaining limits to Second developer or designated technical reviewer; no self-approval of a human/source gate.

#### DF-01-02 — Scaffold minimal buildable projects

- **Goal:** Create thin mobile/web harnesses, backend configuration and shared-contract directories; keep business logic out of scaffolding.
- **Deliverable:** Buildable harness layout with documented package ownership
- **Predecessors:** DF-01-01
- **Completion check:** The harness builds independently of production services; no template auth/paywall behavior is represented as final product capability.
- **Handoff:** actual artifacts/checks and remaining limits to Second developer or designated technical reviewer; no self-approval of a human/source gate.

#### DF-01-03 — Add preflight and environment guards

- **Goal:** Detect missing/mismatched SDKs, ports and container runtime; provide non-secret environment examples and refuse destructive commands against production.
- **Deliverable:** Cross-platform preflight and developer runbook
- **Predecessors:** DF-01-02
- **Completion check:** A missing SDK or unsafe target exits nonzero with a useful remedy; a clean setup can be reproduced without undocumented global packages.
- **Handoff:** actual artifacts/checks and remaining limits to Second developer or designated technical reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Exact versions and locks committed
- [ ] Clean setup demonstrated on Windows/Android and the named macOS/iOS build environment
- [ ] Missing tooling and unsafe targets fail explicitly

**Test specifications:** [DF-T001](foundation_test_catalog.md#df-t001), [DF-T002](foundation_test_catalog.md#df-t002), [DF-T003](foundation_test_catalog.md#df-t003). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-02"></a>

### DF-02 — Establish CI, review rules and evidence handling

**Goal:** Every proposed change is checked on its exact commit and the repository demonstrably enforces the agreed merge/review policy.

**Status:** Proposed; not started. **Owner/executor role:** Platform agent. **Reviewer:** Technical / security reviewer.

**DF prerequisites:** DF-01. **Source work:** [SP-012](../delivery/soccer_delivery_backlog.md), [SP-003](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** No additional source tasks.

**Entry inputs:**

- DF-01 harness and toolchain pins
- Actual private-repository plan, runner permissions and branch-rule capabilities

**Proposed file boundaries:** `.github/workflows/**`, `.github/CODEOWNERS`, `tools/dev/**`, `docs/development/ci-and-review.md`. Replace these areas with exact approved files for each run.

#### DF-02-01 — Create deterministic bootstrap jobs

- **Goal:** Run documentation, lockfile, static checks and minimal harness tests/builds from a clean runner; pin Actions and keep credentials scoped.
- **Deliverable:** Workflow files with stable job names and artifact rules
- **Predecessors:** DF-01-03
- **Completion check:** A fresh runner succeeds from locks; untrusted PR jobs cannot obtain privileged secrets.
- **Handoff:** actual artifacts/checks and remaining limits to Technical / security reviewer; no self-approval of a human/source gate.

#### DF-02-02 — Demonstrate required review and failed-check handling

- **Goal:** Configure available branch controls and run a harmless failing PR; record unsupported plan features rather than claiming enforcement.
- **Deliverable:** Actual branch-rule record and passing/failing PR evidence
- **Predecessors:** DF-02-01
- **Completion check:** A required failure prevents the configured acceptance/merge route; otherwise the enforcement gap stays open for owner resolution.
- **Handoff:** actual artifacts/checks and remaining limits to Technical / security reviewer; no self-approval of a human/source gate.

#### DF-02-03 — Bind evidence to the candidate commit

- **Goal:** Store sanitized test reports with SHA, runner, tool versions and suite counts; invalidate evidence after subsequent changes.
- **Deliverable:** Evidence schema, retention/access policy and current-SHA check
- **Predecessors:** DF-02-02
- **Completion check:** An older green run cannot satisfy the new candidate; reports contain no tokens, TOTP seeds or private media.
- **Handoff:** actual artifacts/checks and remaining limits to Technical / security reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Required jobs run on current commits
- [ ] Actual enforcement verified or milestone remains blocked
- [ ] Evidence artifacts are private, redacted and version-bound

**Test specifications:** [DF-T004](foundation_test_catalog.md#df-t004), [DF-T005](foundation_test_catalog.md#df-t005), [DF-T006](foundation_test_catalog.md#df-t006), [DF-T007](foundation_test_catalog.md#df-t007). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-03"></a>

### DF-03 — Define shared contracts and repeatable synthetic fixtures

**Goal:** All client/backend experiments use the same ownership, event, error and compatibility expectations with safe reproducible data.

**Status:** Proposed; not started. **Owner/executor role:** Backend / contract agent. **Reviewer:** Technical lead with identity/content owners.

**DF prerequisites:** DF-01. **Source work:** [SP-084](../delivery/soccer_delivery_backlog.md), [SP-037](../delivery/soccer_delivery_backlog.md), [SP-047](../delivery/soccer_delivery_backlog.md), [SP-059](../delivery/soccer_delivery_backlog.md), [SP-060](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-085](../delivery/soccer_delivery_backlog.md), [SP-086](../delivery/soccer_delivery_backlog.md), [SP-087](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- Accepted source contract decisions and version policy
- DF-00 actor/action matrix and approved fixture handling

**Proposed file boundaries:** `contracts/**`, `tests/fixtures/**`, `docs/development/fixture-guide.md`. Replace these areas with exact approved files for each run.

#### DF-03-01 — Publish versioned schemas and invariants

- **Goal:** Define IDs, actor/resource scope, event idempotency, timestamps, errors and compatibility seams including the five priority extensions.
- **Deliverable:** Contract schemas, version policy and ownership matrix
- **Predecessors:** DF-01-03
- **Completion check:** Accepted/rejected fixtures have unambiguous expected outcomes; wire compatibility is shared rather than duplicated business logic.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead with identity/content owners; no self-approval of a human/source gate.

#### DF-03-02 — Create deterministic fixture factories

- **Goal:** Seed two unrelated households/clubs, parent/coach/player/alternate roles, expired grants and attributed content versions with fixed clocks.
- **Deliverable:** Synthetic fixture factory, seed manifest and reset recipe
- **Predecessors:** DF-03-01
- **Completion check:** Re-running seed creates the same fixture graph without duplicate credits; no real child identity or unlicensed media is required.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead with identity/content owners; no self-approval of a human/source gate.

#### DF-03-03 — Review sensitive negative cases

- **Goal:** Specify forged ownership, player-to-adult access, MFA freshness, deletion/retry and offline state examples before implementing adapters.
- **Deliverable:** Reviewed fixture expectations and cross-language validation samples
- **Predecessors:** DF-03-02
- **Completion check:** Denied cases assert no read/write side effects; assumptions requiring coach/privacy decisions remain visibly pending.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead with identity/content owners; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Versioned fixture expectations reviewed
- [ ] Synthetic reset/replay is deterministic
- [ ] Dart/TypeScript/backend contract ownership is explicit

**Test specifications:** [DF-T008](foundation_test_catalog.md#df-t008), [DF-T010](foundation_test_catalog.md#df-t010). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-04"></a>

### DF-04 — Prove isolated local backend and identity boundaries

**Goal:** A disposable local backend rebuilds from source and proves representative tenant and credential boundaries with real database/API policies.

**Status:** Proposed; not started. **Owner/executor role:** Backend / identity agent. **Reviewer:** Security reviewer.

**DF prerequisites:** DF-02, DF-03. **Source work:** [SP-039](../delivery/soccer_delivery_backlog.md), [SP-065](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-085](../delivery/soccer_delivery_backlog.md), [SP-088](../delivery/soccer_delivery_backlog.md), [SP-100](../delivery/soccer_delivery_backlog.md), [SP-101](../delivery/soccer_delivery_backlog.md), [SP-102](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- DF-03 fixtures and accepted SP-008/SP-011/SP-037/SP-059/SP-060 contracts
- Disposable local Supabase target with no production link

**Proposed file boundaries:** `backend/supabase/**`, `tests/backend/**`, `tests/fixtures/**`. Replace these areas with exact approved files for each run.

#### DF-04-01 — Implement minimal feasibility migrations and local lifecycle

- **Goal:** Build only the schema and private storage required for the scoped identity/ownership experiment; preserve migration ordering.
- **Deliverable:** Local migrations, seed/config and rebuild instructions
- **Predecessors:** DF-02-03, DF-03-03
- **Completion check:** Fresh database rebuild and repeated seed succeed; reset tooling positively identifies the disposable target.
- **Handoff:** actual artifacts/checks and remaining limits to Security reviewer; no self-approval of a human/source gate.

#### DF-04-02 — Exercise policies as real allowed and denied actors

- **Goal:** Test table/RPC/API/storage access, forged linked records, unrelated households/clubs and restricted player credentials.
- **Deliverable:** pgTAP and HTTP integration suites with explicit actor sessions
- **Predecessors:** DF-04-01
- **Completion check:** Allowed actions succeed and unauthorized actions reveal/mutate no protected record; service-role execution is not the sole test path.
- **Handoff:** actual artifacts/checks and remaining limits to Security reviewer; no self-approval of a human/source gate.

#### DF-04-03 — Prove MFA freshness, recovery and revocation routes

- **Goal:** Demonstrate provider-backed enrollment/challenge and the approved enrollment-only recovery boundary using safe identities.
- **Deliverable:** Identity feasibility report and direct-path denial evidence
- **Predecessors:** DF-04-02
- **Completion check:** Email-only restoration/refresh cannot satisfy privileged assurance; local provider gaps require a scoped staging proof before acceptance.
- **Handoff:** actual artifacts/checks and remaining limits to Security reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Rebuildable local services and fixtures
- [ ] Representative isolation/MFA/recovery cases execute
- [ ] All provider limitations recorded; full identity product still deferred

**Test specifications:** [DF-T009](foundation_test_catalog.md#df-t009), [DF-T010](foundation_test_catalog.md#df-t010), [DF-T011](foundation_test_catalog.md#df-t011), [DF-T012](foundation_test_catalog.md#df-t012), [DF-T013](foundation_test_catalog.md#df-t013), [DF-T014](foundation_test_catalog.md#df-t014). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-05"></a>

### DF-05 — Build client and persistence feasibility harnesses

**Goal:** Thin clients exercise dependency injection, protected contexts, local records and server-mediated web boundaries without presenting a completed app.

**Status:** Proposed; not started. **Owner/executor role:** Mobile and web agents with separate file ownership. **Reviewer:** Mobile/web leads and QA.

**DF prerequisites:** DF-02, DF-03, DF-04. **Source work:** [SP-051](../delivery/soccer_delivery_backlog.md), [SP-047](../delivery/soccer_delivery_backlog.md), [SP-060](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-090](../delivery/soccer_delivery_backlog.md), [SP-091](../delivery/soccer_delivery_backlog.md), [SP-092](../delivery/soccer_delivery_backlog.md), [SP-105](../delivery/soccer_delivery_backlog.md), [SP-111](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- DF-03 approved contract fixtures; SP-077 appearance contract where used
- SP-051 also requires accepted SP-039 evidence from DF-04 before its execution/acceptance

**Proposed file boundaries:** `apps/mobile/**`, `apps/web/**`, `tests/fixtures/**`. Replace these areas with exact approved files for each run.

#### DF-05-01 — Create the mobile adapter and context harness

- **Goal:** Inject clock, camera, demo, repository and authority adapters; use thin restricted/adult routes and semantic appearance.
- **Deliverable:** Mobile harness with fake adapters and explicit context/lifecycle ownership
- **Predecessors:** DF-02-03, DF-03-03, DF-04-03
- **Completion check:** Appearance changes preserve controller identity; restricted navigation never claims to replace server authorization.
- **Handoff:** actual artifacts/checks and remaining limits to Mobile/web leads and QA; no self-approval of a human/source gate.

#### DF-05-02 — Exercise protected local storage and reconnect prototype

- **Goal:** Use real SQLite migrations and atomic session/outbox writes with separated file catalogs and approved deletion-first retry logic.
- **Deliverable:** Persistence feasibility implementation and recovery cases
- **Predecessors:** DF-05-01
- **Completion check:** Crash/migration/context-switch cases preserve permitted history; no sibling data leak or duplicate event credit.
- **Handoff:** actual artifacts/checks and remaining limits to Mobile/web leads and QA; no self-approval of a human/source gate.

#### DF-05-03 — Create server-mediated web session harness

- **Goal:** Use the approved cookie/session boundary with local backend fixtures; inspect caching, forged mutations and browser credential exposure.
- **Deliverable:** Minimal adult portal harness and browser/API tests
- **Predecessors:** DF-05-02
- **Completion check:** No broad service/refresh credential reaches the browser; private responses are not public-cacheable and stale/forged actions are denied.
- **Handoff:** actual artifacts/checks and remaining limits to Mobile/web leads and QA; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Mobile and web harnesses build and exercise the intended boundaries
- [ ] SQLite/crash/retry tests run against actual local storage
- [ ] Full SP-090/SP-091/SP-111 implementation gates remain separate

**Test specifications:** [DF-T015](foundation_test_catalog.md#df-t015), [DF-T016](foundation_test_catalog.md#df-t016), [DF-T017](foundation_test_catalog.md#df-t017), [DF-T018](foundation_test_catalog.md#df-t018), [DF-T019](foundation_test_catalog.md#df-t019), [DF-T020](foundation_test_catalog.md#df-t020), [DF-T021](foundation_test_catalog.md#df-t021), [DF-T022](foundation_test_catalog.md#df-t022). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-06"></a>

### DF-06 — Turn foundation test specifications into executable suites

**Goal:** Foundation assertions run locally and in CI with expected outcomes, fixture cleanup and trustworthy test counts.

**Status:** Proposed; not started. **Owner/executor role:** QA / test automation agent. **Reviewer:** Technical lead and security reviewer.

**DF prerequisites:** DF-04, DF-05. **Source work:** [SP-039](../delivery/soccer_delivery_backlog.md), [SP-051](../delivery/soccer_delivery_backlog.md), [SP-012](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-088](../delivery/soccer_delivery_backlog.md), [SP-127](../delivery/soccer_delivery_backlog.md), [SP-165](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- DF-04/DF-05 implementations
- Foundation test catalog and versioned fixture set; current CI from DF-02

**Proposed file boundaries:** `apps/mobile/test/**`, `apps/mobile/integration_test/**`, `apps/web/**`, `backend/supabase/tests/**`, `tests/**`, `.github/workflows/**`. Replace these areas with exact approved files for each run.

#### DF-06-01 — Implement the fast and local integration suites

- **Goal:** Use Flutter unit/widget tests, Vitest/components, database pgTAP and HTTP integration for the implemented foundation boundaries.
- **Deliverable:** Runnable test files and locked test dependencies
- **Predecessors:** DF-04-03, DF-05-03
- **Completion check:** Each case identifies setup, action and observable assertion; mocks are limited to external boundaries, not the policy under test.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead and security reviewer; no self-approval of a human/source gate.

#### DF-06-02 — Add browser and client integration coverage

- **Goal:** Run the production-built portal through Playwright and local client integration against safe fixtures with isolated state.
- **Deliverable:** Browser/client suites and failure traces
- **Predecessors:** DF-06-01
- **Completion check:** Async server flows receive appropriate integration coverage; test artifacts are redacted and tests do not share mutable actor state.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead and security reviewer; no self-approval of a human/source gate.

#### DF-06-03 — Enforce evidence completeness and failed-test behavior

- **Goal:** Make zero tests, required skips, stale SHAs and missing required suite results fail the aggregate job; demonstrate one real regression.
- **Deliverable:** Suite inventory, evidence collector and CI negative demonstration
- **Predecessors:** DF-06-02
- **Completion check:** Known faulty behavior fails its assertion; fixing it passes on the new SHA without hiding the first failure or retry history.
- **Handoff:** actual artifacts/checks and remaining limits to Technical lead and security reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] All required local foundation cases executable and current
- [ ] Zero tests/required skips cannot pass readiness
- [ ] Device/provider cases remain separately scheduled, not represented by mocks

**Test specifications:** [DF-T001](foundation_test_catalog.md#df-t001), [DF-T004](foundation_test_catalog.md#df-t004), [DF-T008](foundation_test_catalog.md#df-t008), [DF-T009](foundation_test_catalog.md#df-t009), [DF-T011](foundation_test_catalog.md#df-t011), [DF-T012](foundation_test_catalog.md#df-t012), [DF-T015](foundation_test_catalog.md#df-t015), [DF-T018](foundation_test_catalog.md#df-t018), [DF-T019](foundation_test_catalog.md#df-t019), [DF-T022](foundation_test_catalog.md#df-t022), [DF-T035](foundation_test_catalog.md#df-t035). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-07"></a>

### DF-07 — Complete one controlled agent assignment end to end

**Goal:** Demonstrate that a bounded agent can claim, implement, test and hand off one real foundation change without bypassing review or target restrictions.

**Status:** Proposed; not started. **Owner/executor role:** Delivery agent with a named implementing agent. **Reviewer:** Independent designated reviewer.

**DF prerequisites:** DF-06. **Source work:** [SP-146](../delivery/soccer_delivery_backlog.md), [SP-013](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** No additional source tasks.

**Entry inputs:**

- DF-02 enforcement and DF-06 executable suite
- Accepted SP-002/SP-003/SP-012 prerequisites and actual repository/branch/budget/reviewer assignment

**Proposed file boundaries:** `One explicitly selected fixture/test or harness behavior file set`, `docs/development/agent-runs/**`. Replace these areas with exact approved files for each run.

#### DF-07-01 — Commission a narrow real trial change

- **Goal:** Choose one missing assertion or small harness behavior with a before/after outcome; fill the exact SP/ACT/run contract and isolated branch.
- **Deliverable:** Named trial brief, base SHA and allowed-file list
- **Predecessors:** DF-06-03
- **Completion check:** No generic subsystem assignment; actual reviewer and duration/attempt/spend ceiling exist before the run.
- **Handoff:** actual artifacts/checks and remaining limits to Independent designated reviewer; no self-approval of a human/source gate.

#### DF-07-02 — Exercise success, failure and cancellation boundaries

- **Goal:** Run the task and harmless wrong-target/injected-instruction cases; exercise cancellation and controlled retry without external side effects.
- **Deliverable:** Run log, change diff and boundary-case evidence
- **Predecessors:** DF-07-01
- **Completion check:** Wrong repository/environment is rejected; retry cannot exceed the assigned ceiling; interrupted work is checkpointed truthfully.
- **Handoff:** actual artifacts/checks and remaining limits to Independent designated reviewer; no self-approval of a human/source gate.

#### DF-07-03 — Review current evidence and record the handoff

- **Goal:** Submit exact output, checks, limits and recovery implications to the actual reviewer and demonstrate stale/failing evidence cannot close it.
- **Deliverable:** Reviewed trial result and corrective workflow notes
- **Predecessors:** DF-07-02
- **Completion check:** Agent cannot self-approve a required independent gate; SP-013 closes only with its complete source evidence.
- **Handoff:** actual artifacts/checks and remaining limits to Independent designated reviewer; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] One real bounded task reviewed through the workflow
- [ ] Failure/cancel/wrong-target behavior demonstrated
- [ ] Team can reproduce the task from its recorded inputs

**Test specifications:** [DF-T023](foundation_test_catalog.md#df-t023), [DF-T024](foundation_test_catalog.md#df-t024), [DF-T025](foundation_test_catalog.md#df-t025). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-08"></a>

### DF-08 — Prove camera, timing, interruption and export on devices

**Goal:** Measure the risky native media behaviors on named iOS and Android hardware before committing to the full feature implementation.

**Status:** Proposed; not started. **Owner/executor role:** Mobile/media agent. **Reviewer:** Device QA and mobile lead; coach for semantics.

**DF prerequisites:** DF-07, DF-05. **Source work:** [SP-014](../delivery/soccer_delivery_backlog.md), [SP-015](../delivery/soccer_delivery_backlog.md), [SP-016](../delivery/soccer_delivery_backlog.md), [SP-081](../delivery/soccer_delivery_backlog.md), [SP-126](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-092](../delivery/soccer_delivery_backlog.md), [SP-093](../delivery/soccer_delivery_backlog.md), [SP-094](../delivery/soccer_delivery_backlog.md), [SP-082](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- Accepted SP-010/SP-080/SP-126 protocols and actual SP-013 controlled-trial evidence
- Named devices, macOS build/signing access, licensed logo and adult/synthetic media

**Proposed file boundaries:** `Bounded apps/mobile feasibility harness files`, `tests/device/**`, `docs/verification/device/**`. Replace these areas with exact approved files for each run.

#### DF-08-01 — Prove concurrent preview, capture, demo and timer

- **Goal:** Measure capture-confirmed work start, elapsed-clock behavior, audio choices and theme changes on each selected device.
- **Deliverable:** Named-device measurements and playable exercise clips
- **Predecessors:** DF-07-03, DF-05-03
- **Completion check:** No false REC/Saved; timer meets the pre-approved tolerance; both platforms have actual hardware evidence.
- **Handoff:** actual artifacts/checks and remaining limits to Device QA and mobile lead; coach for semantics; no self-approval of a human/source gate.

#### DF-08-02 — Prove full-session and interruption handling

- **Goal:** Run the approved long-capture envelope, programmed rests, pause/resume, low storage, permissions, calls, backgrounding and termination.
- **Deliverable:** Part/chapter inventory and interruption/thermal/storage report
- **Predecessors:** DF-08-01
- **Completion check:** Source offsets and gaps match observed footage; unsupported continuous capture is not promised.
- **Handoff:** actual artifacts/checks and remaining limits to Device QA and mobile lead; coach for semantics; no self-approval of a human/source gate.

#### DF-08-03 — Select and prove branded export adapter

- **Goal:** Compare licensed maintained composition options and produce orientation/audio/chapter-correct logo-first exports with cancellation/failure handling.
- **Deliverable:** Export decision record, output inspection and resource measurements
- **Predecessors:** DF-08-02
- **Completion check:** Original bytes remain intact; no partial/corrupt output is shared; measured results justify the selected adapter.
- **Handoff:** actual artifacts/checks and remaining limits to Device QA and mobile lead; coach for semantics; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Both device platforms measured against pre-approved thresholds
- [ ] Recording/export failure cases preserve source data
- [ ] Supported floor, residual limits and actual implementation decision documented

**Test specifications:** [DF-T026](foundation_test_catalog.md#df-t026), [DF-T027](foundation_test_catalog.md#df-t027), [DF-T028](foundation_test_catalog.md#df-t028), [DF-T029](foundation_test_catalog.md#df-t029), [DF-T030](foundation_test_catalog.md#df-t030), [DF-T036](foundation_test_catalog.md#df-t036). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-09"></a>

### DF-09 — Verify scoped development services and provider sandboxes

**Goal:** Prove the minimum authorized private upload and real provider sandbox paths with explicit account ownership and cost boundaries.

**Status:** Proposed; not started. **Owner/executor role:** Backend/billing/operations agents with separate scopes. **Reviewer:** Security and billing owners.

**DF prerequisites:** DF-04, DF-07, DF-08. **Source work:** [SP-017](../delivery/soccer_delivery_backlog.md), [SP-052](../delivery/soccer_delivery_backlog.md), [SP-050](../delivery/soccer_delivery_backlog.md), [SP-063](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-106](../delivery/soccer_delivery_backlog.md), [SP-120](../delivery/soccer_delivery_backlog.md), [SP-121](../delivery/soccer_delivery_backlog.md), [SP-122](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- Accepted SP-011/SP-048/SP-049/SP-050 contracts and recorded service/spend authority
- DF-08 locally saved permitted media; actual sandbox account identities and credentials delivered through approved secret stores

**Proposed file boundaries:** `backend/**`, `workers/**`, `apps/mobile sandbox adapters`, `apps/web sandbox adapters`, `infra/development/**`, `docs/operations/**`. Replace these areas with exact approved files for each run.

#### DF-09-01 — Register and verify the actual development targets

- **Goal:** Prepare and where authorized configure isolated staging/provider projects, region settings, named owners/alternates, secret references and spending limits.
- **Deliverable:** Environment inventory, config templates and access/recovery checks
- **Predecessors:** DF-04-03, DF-07-03, DF-08-03
- **Completion check:** Identifiers are verified against provider consoles/APIs; no production credentials are needed by PR checks; unsupported residency claims are excluded.
- **Handoff:** actual artifacts/checks and remaining limits to Security and billing owners; no self-approval of a human/source gate.

#### DF-09-02 — Prove one private resumable media path

- **Goal:** Exercise explicit opt-in, local save, quota reservation, quarantine/finalization, denial from a second household and deletion/withdrawal races.
- **Deliverable:** Upload/playback sandbox evidence with measured residual access
- **Predecessors:** DF-09-01
- **Completion check:** Retry converges; unvalidated objects stay unreadable; withdrawal/expiry defeats stale finalize and copy states remain truthful.
- **Handoff:** actual artifacts/checks and remaining limits to Security and billing owners; no self-approval of a human/source gate.

#### DF-09-03 — Prove provider-verified purchase state

- **Goal:** Use Apple/Google store sandbox and Stripe test events with signature verification, duplicate/out-of-order events, restore/refund and overlapping beneficiaries.
- **Deliverable:** Per-provider event/ledger evidence and reconciliation limitations
- **Predecessors:** DF-09-02
- **Completion check:** Real sandbox evidence is labeled by provider; mock-only or RevenueCat Test Store results do not substitute for required Apple/Google coverage; no real charge.
- **Handoff:** actual artifacts/checks and remaining limits to Security and billing owners; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Actual environments and owners verified within authority
- [ ] Private media feasibility and required provider sandbox cases execute
- [ ] Cost, SDK/audience and recovery gaps remain explicit

**Test specifications:** [DF-T031](foundation_test_catalog.md#df-t031), [DF-T032](foundation_test_catalog.md#df-t032), [DF-T033](foundation_test_catalog.md#df-t033), [DF-T007](foundation_test_catalog.md#df-t007). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

<a id="df-10"></a>

### DF-10 — Review foundation readiness and the full-build decision

**Goal:** Decide from current evidence whether the workspace is usable and which subsequent implementation activities can actually be commissioned.

**Status:** Proposed; not started. **Owner/executor role:** Delivery / technical lead. **Reviewer:** Product owner, technical lead and required specialists.

**DF prerequisites:** DF-00, DF-01, DF-02, DF-03, DF-04, DF-05, DF-06, DF-07, DF-08, DF-09. **Source work:** [SP-018](../delivery/soccer_delivery_backlog.md), [SP-064](../delivery/soccer_delivery_backlog.md). **Prepares but does not complete:** [SP-085](../delivery/soccer_delivery_backlog.md), [SP-090](../delivery/soccer_delivery_backlog.md), [SP-127](../delivery/soccer_delivery_backlog.md).

**Entry inputs:**

- All foundation milestone artifacts and current source acceptance evidence
- Remaining SP-018 predecessors, including content/design/security/estimate obligations, not only foundation work

**Proposed file boundaries:** `docs/foundation/**`, `docs/decisions/**`, `tests/evidence/**`. Replace these areas with exact approved files for each run.

#### DF-10-01 — Reproduce the setup through a second operator

- **Goal:** Start from a clean checkout and documented credentials/fixtures, run the required local suite and inspect linked device/provider evidence.
- **Deliverable:** Second-operator reproducibility record and unresolved blockers
- **Predecessors:** DF-00-03, DF-01-03, DF-02-03, DF-03-03, DF-04-03, DF-05-03, DF-06-03, DF-07-03, DF-08-03, DF-09-03
- **Completion check:** No undocumented manual patch, personal global dependency or inaccessible artifact is needed; platform-specific limitations remain visible.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner, technical lead and required specialists; no self-approval of a human/source gate.

#### DF-10-02 — Audit traceability and update the delivery estimate

- **Goal:** Join DF work, existing SP/ACT/AC IDs, exact artifacts and test results; estimate remaining implementation effort using measured findings.
- **Deliverable:** Foundation evidence matrix and revised scope/capacity/cost proposal
- **Predecessors:** DF-10-01
- **Completion check:** Every required case has current actual evidence or is blocking; no source task is counted twice or marked complete solely from a foundation mapping.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner, technical lead and required specialists; no self-approval of a human/source gate.

#### DF-10-03 — Record distinct readiness and build decisions

- **Goal:** Record workspace-ready, device-feasible, provider-feasible and full-build-approved decisions separately with people, date, scope and limits.
- **Deliverable:** Signed proceed/revise/stop record and first dependency-ready implementation batch
- **Predecessors:** DF-10-02
- **Completion check:** SP-018 cannot close until all original predecessors and required decisions are accepted; a foundation pass is not pilot/release approval.
- **Handoff:** actual artifacts/checks and remaining limits to Product owner, technical lead and required specialists; no self-approval of a human/source gate.

**Milestone exit checks:**

- [ ] Reproducible second-operator handoff
- [ ] Actual evidence current for every required foundation case
- [ ] Explicit scoped decision; all unfulfilled original gates remain open

**Test specifications:** [DF-T034](foundation_test_catalog.md#df-t034), [DF-T035](foundation_test_catalog.md#df-t035), [DF-T025](foundation_test_catalog.md#df-t025). These are written expectations, not executed tests. Cross-milestone cases can be rerun by later integration work; original test ownership stays in the catalog.

## First commissioned implementation batch

Start with DF-00-01 (real owners/authority), DF-00-02 (technical decisions) and DF-00-03 (device/measurement protocol), honoring the recorded work-item sequence. Once their source prerequisites are accepted, DF-01 creates the reproducible harness. DF-02 and DF-03 then provide the first opportunity for separate platform and contract agents. Current authorization covers preparing/reviewing/publishing this plan; this list does not itself start implementation.

## Maintaining this refinement

Edit `tools/foundation-plan-data.cjs` for milestone/work/test definitions and regenerate with `node tools/build-foundation-docs.cjs`. The library baseline and review report are authored directly. Run `node tools/validate-docs.cjs`, including the foundation validator, before committing. An eventual live tracker update must map DF work to actual source issue IDs instead of importing a second competing backlog.
