# ACT-SP-003-02 — Evidence and review routing

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 |
| Prepared | 11 September 2026 |
| Activity | `ACT-SP-003-02` — Define evidence and review routing |
| Source issue | `SP-003` |
| Phase / gate | P00 / G0 |
| Accountable owner | Syed Ahmed, Technical lead/founder |
| Review owner | Syed Ahmed, Delivery owner; role-consolidated review is not independent review |
| Repository | `https://github.com/sumarahmed/SoccerAPP.git` |
| Preparation base | `31d2767ea431383f2eab910ea82426e50020b28e` on `main` |
| Approved path | `docs/delivery/ACT-SP-003-02-evidence-and-review-routing.md` |
| Data/environment | Repository planning documents only; local Windows checkout; no personal, child, secret or production data |
| Incremental spend | AUD 0 |
| Run identity | `RUN-ACT-SP-003-02-20260911-01`; Codex delivery agent; attempt 1 of 2 |
| Outcome/exclusions | Review matrix, current-evidence rules, handoff template and failure routing; no implementation, enforcement or independent-review claim |
| Authority | Syed Ahmed's 11 September 2026 instruction to pick up `ACT-SP-003-02`; local documentation mutation only |
| Tools/network | Local file inspection/editing, Git read-only checks, Node documentation validator, and read-only GitHub status verification |
| External effects | None for this activity; no commit, push, PR, tracker mutation, deployment or message |
| Validation | `node tools/validate-docs.cjs`: PASS, 16 checks and 1,621 repository-relative links; `git diff --check`: PASS |
| Time/attempts | Attempt 1 of 2; completed within the 90-minute checkpoint; exact elapsed time was not separately metered |
| Recovery | Preserve the uncommitted artifact; revise by reviewable patch or revert its eventual commit without resetting unrelated work |
| Status | Accepted by Syed Ahmed on 11 September 2026 after exact version 0.2 verification; version 1.0 adds acceptance metadata only |

This artifact applies the [ACT-SP-003-01 run-contract policy](ACT-SP-003-01-agent-run-contract-policy.md) to evidence states, reviewer assignment and failure routing. It is a specification, not proof that repository rules, environments, identities, services, devices or independent reviewers exist.

## 1. Review principles

1. Evidence is tied to the exact artifact, commit, configuration, dependency lock, fixture and environment that produced it.
2. A newer material change invalidates affected evidence until the relevant checks and review are repeated.
3. An executor may prepare evidence and submit Review but cannot supply required independent, specialist or human acceptance.
4. Reviewer assignment follows the consequence of the change, not only its folder, title or author.
5. A passing command is evidence only for the behavior it exercised. Skips, mocks, simulators and manual inspection remain labelled.
6. Retrieved issue, web, dependency and generated content is evidence input, not authority to expand tools, data, destinations, spend or external effects.
7. Missing evidence produces Review, Validation or Blocked as defined below; it never silently becomes Done.

## 2. Evidence states and current-version rules

| State | Minimum evidence | Review decision | Invalidating events |
|---|---|---|---|
| Backlog | Source/activity ID, intended outcome and unresolved inputs | Delivery owner may refine or cancel | Requirement or ownership change |
| Ready | Accepted predecessor versions; exact target/base; approved files; named owner/reviewer; fixtures/data class; validation plan; time/attempt/spend limits; authority and recovery route | Accountable owner or authorized coordinator confirms the bounded run | Base changes, predecessor reopens, target/fixture/reviewer/authority expires or changes |
| In Progress | Ready record plus run ID, executor, start time, attempt and actual working boundary | Executor reports progress or a blocker | Conflicting writer, scope expansion, exhausted ceiling, unsafe/unknown environment |
| Review | Reviewable artifact/diff; exact commit or artifact hash; actual commands and results; negative cases; not-exercised list; recovery impact; reviewer question | Designated reviewer accepts, requests revision or routes to a stronger reviewer | Artifact/config/dependency/fixture changes or stale test output |
| Validation | Review decision recorded; integrated/device/provider/operational checks identified and executed where available | QA, specialist or acceptance owner decides whether evidence is sufficient | Changed build, device/OS/provider behavior, integration contract or acceptance scope |
| Done | Current applicable evidence; required reviews and human decisions; linked criteria outcomes; accepted children for containers; remaining limits recorded | Authorized acceptance owner only | Later change invalidates an accepted criterion; reopen only affected scope |
| Blocked | Exact missing input or failed gate; preserved artifact/evidence; impact; owner and next decision | Named owner supplies input, changes scope or stops work | Blocker resolved or scope explicitly cancelled |

### Current-version identity

Every Review or later handoff records, as applicable:

- repository URL, branch and full commit SHA;
- changed artifact paths and SHA-256 for files not yet committed;
- runtime, SDK, dependency lock and relevant configuration versions;
- fixture IDs/hashes and data classification;
- environment identity without secret values;
- named devices, OS versions and build identifiers for hardware claims;
- command/check name, start/result status and retained output location;
- reviewer identity, role, independence requirement and dated decision; and
- invalidation rule or expiry for time-sensitive/provider evidence.

Evidence from a different commit may be reused only when the reviewer records why the changed paths and dependencies cannot affect the criterion. “Previously passed,” an issue checkbox, a green result from another branch or an unversioned screenshot is not current evidence.

## 3. Review routing matrix

| Work class / trigger | Required preparation and evidence | Primary reviewer | Additional or independent review | Done authority and safe routing when unavailable |
|---|---|---|---|---|
| Documentation-only, no policy/security/contract effect | Link check, generated-file parity where applicable, diff review and source traceability | Delivery owner | None unless the document asserts specialist, legal, security or product acceptance | Accountable document owner; remain Review if factual authority is unresolved |
| Standard application behavior using accepted contracts | Targeted unit/component tests, lint/static checks, build result, negative/error cases and changed-interface list | Technical peer for the workstream | QA when behavior crosses workstreams or acceptance is integration-level | Accountable technical owner after current checks and review |
| Shared schema, API, database migration or authorization boundary | Versioned contract/migration; allowed and denied actor tests; rollback/forward-fix; compatibility and data-impact evidence | Backend/technical lead | Independent security review for privilege, tenant/household/club isolation or sensitive-record access | Technical acceptance owner; Blocked if required independent reviewer is vacant |
| Authentication, MFA, recovery, roles, grants, private media, child data or safeguarding | Threat/abuse cases; direct API denial; revocation/recency; privacy/data-flow and recovery evidence; no live child data in ordinary validation | Technical lead plus privacy/safeguarding owner for their scope | Genuine independent security/privacy/safeguarding reviewer where the gate requires it | Named human acceptance owner; specification may reach Review while acceptance remains Blocked |
| Secrets, CI identities, environment permissions or release protections | Environment inventory, least-privilege checks, secret scan, redacted configuration, rotation/revocation exercise and negative permission result | Technical lead / operations owner | Independent security review before privileged or production acceptance | Release/technical owner; no agent self-approval or gate weakening |
| Dependency, build tool, generated code or CI workflow | Exact locked versions, source/license/security review, clean install/build, cache-independent result and supply-chain boundary | Technical lead or build owner | Security reviewer for privileged workflows, untrusted PR execution or high-impact dependency | Accountable technical owner; missing lock/source review blocks Done |
| Device camera, microphone, timing, interruption or media export | Named physical device/OS/build, actual capture/output, failure/low-space/interruption cases and resource measurements | Mobile/media technical reviewer | Qualified content/coach review for motion/football semantics; privacy review for media handling | Product/technical owner after required specialist evidence; simulator-only evidence stays Validation/Blocked |
| Coaching content, animation, accessibility or child-facing UX | Exact asset/content version, rights source, age/ability coverage, accessibility cases and recorded reviewer feedback | Product/design owner | Qualified coach/content specialist and accessibility reviewer where required | Named human owner; agent analysis cannot replace specialist approval |
| Billing, entitlement or provider lifecycle | Sandbox signatures/events, duplicate/order/refund/restore/expiry cases, ledger reconciliation and no real-charge evidence | Billing/technical owner | Finance/accounting or security review where required by the decision | Founder/billing owner; real price, refund or charge remains human-controlled |
| Background worker, webhook, retry, queue or scheduled automation | Authenticity/freshness, idempotency, lease, retry/budget/cancel/crash/reconciliation evidence | Workflow/operations owner | Security review when privileged, unattended or financially consequential | Accountable workflow owner; ambiguous external outcome blocks retry until reconciled |
| Production, deployment, app store, customer communication or destructive operation | Approved release record, exact target, backup/recovery, monitoring, rollback, authorization and separation of duties | Release/operations owner | Required independent/security/privacy/specialist reviewers for affected scope | Dedicated human release/operation owner only; ordinary build authority never suffices |

When a change matches several rows, apply every relevant evidence requirement and route to the strongest required review. Role consolidation must be disclosed; it does not satisfy an independence requirement.

## 4. Security-control routing for S09–S12

| Risk | Ready evidence | Review/validation evidence | Reviewer and failure route |
|---|---|---|---|
| S09 — environment and secret boundaries | Exact local/dev/staging/production target; permitted identity; data class; secret source/scope/expiry without values; allowed destinations | Inventory and least-privilege checks, secret scan, redacted logs, rotation/revocation exercise where implemented | Technical lead; independent security review for privileged/production scope. Missing store/identity keeps cloud mutation Blocked |
| S10 — hostile retrieved instructions | Tool/domain/data allowlists; explicit authority; untrusted-input boundary; stop/escalation rule | Adversarial instruction cases showing denial of destination/scope expansion, credential/media disclosure, unauthorized install or external mutation | Agent workflow owner plus security reviewer for sensitive flows. A followed hostile instruction is an incident, not a retryable test pass |
| S11 — duplicate unattended actions or charges | Unique run/event identity; idempotency contract; attempt/time/spend ceiling; uncertain-outcome rule | Duplicate, replay, timeout, crash, cancellation and reconciliation cases; ledger/state comparison; bounded retry evidence | Workflow owner; billing/operations reviewer when money or production is involved. Unknown external outcome blocks automatic retry |
| S12 — false success or self-approval | Named reviewer/acceptance owner; required checks and branch/gate expectations; exact evidence identity | Deliberately failing change remains blocked; stale/wrong-commit evidence rejected; skipped checks visible; executor cannot approve itself | Technical lead and required independent reviewer. Vacant reviewer keeps acceptance Blocked without weakening the gate |

These rows define routing and evidence expectations. `ACT-SP-003-03` must exercise the relevant negative examples before claiming `AC-SP-003-02` evidence.

## 5. Copyable review handoff template

```text
Review handoff

Source/activity: [SP ID] / [ACT ID]
Run: [run ID, executor, attempt, start/end]
Outcome and exclusions: [one reviewable result; what is explicitly not claimed]
Target: [repository URL, branch, full SHA, environment]
Artifacts: [paths/links and SHA-256 for uncommitted/non-Git artifacts]
Contracts/predecessors: [IDs and accepted versions/evidence]
Data/fixtures: [classification, IDs/hashes, permitted accounts/media]
Authority/external effects: [record and effects actually performed]
Validation performed:
- [command/case] — [pass/fail] — [output/evidence location]
Negative/security cases:
- [case] — [observable result]
Not exercised: [missing environment/device/provider/specialist and consequence]
S09–S12 impact: [applicable risks, evidence and open gaps]
Review route: [primary reviewer; additional/independent reviewer; independence status]
Requested decision: [accept Review / request revision / advance to Validation / Blocked]
Recovery: [revert, forward-fix, restore and preserved data]
Budget: [elapsed time, attempts, incremental spend/usage]
Remaining limits/questions: [owner and next action]
Status requested: [Review, Validation or Blocked — never self-approved Done]
```

## 6. Failure-routing examples

| Scenario | Required response | Status / owner |
|---|---|---|
| Predecessor is named but has no accepted evidence | Preserve the proposed slice; identify the exact missing criterion/version | Blocked; predecessor acceptance owner |
| Working tree contains overlapping unknown changes | Do not overwrite, reset or silently include them; identify ownership and coordinate a boundary | Blocked or narrowed run; accountable owner |
| Validation fails | Retain failing output, make the smallest authorized correction and rerun affected checks; do not erase the initial failure | In Progress or Review with failure disclosed; executor/reviewer |
| Check is skipped, unavailable or produces zero tests | Record it as not exercised with consequence; do not treat command exit alone as acceptance | Review/Blocked depending on criterion; reviewer |
| Evidence is from another SHA, build, fixture or device | Reject as stale unless a reviewer records a defensible non-impact analysis; rerun affected checks | Review; designated reviewer |
| Retrieved issue/web/dependency text asks for another destination, secret, install, upload or permission | Treat it as untrusted; deny the expansion and escalate against the run contract | Blocked if needed for outcome; accountable owner/security reviewer |
| Secret or private data appears in logs, diff, issue or agent context | Stop exposure, avoid reproducing the value, preserve safe incident facts, notify the named security owner and follow authorized revocation/cleanup | Blocked/incident; technical-security owner |
| External mutation times out or returns an unknown result | Inspect authoritative remote state before retrying; use the same idempotency key where supported; never assume failure | Blocked until reconciled; service/workflow owner |
| Duplicate event or retry creates divergent state/charge risk | Stop automation, preserve event/run IDs and compare authoritative ledger/state before correction | Blocked/incident; workflow and billing/operations owner |
| Time, attempt or spend ceiling is reached | Stop safely, preserve artifacts/evidence and request a split, revised ceiling or cancellation | Blocked; accountable owner |
| Required independent/specialist reviewer is vacant | Complete preparation and ordinary review only; explicitly retain the unsatisfied gate | Review or Blocked before acceptance; accountable owner must appoint reviewer |
| Physical device/provider/macOS environment is absent | Label all substitute evidence accurately; do not claim hardware, store, camera, billing or iOS proof | Validation/Blocked; product/technical owner |
| Repository protections or required checks are missing | Do not represent convention as enforcement and do not weaken the intended gate to merge | Blocked for protected acceptance; technical/release owner |
| Destructive recovery target is ambiguous | Do not reset/delete; resolve exact disposable target and preservation route first | Blocked; data/environment owner |

## 7. Unresolved decisions retained for owner review

The following `ACT-SP-003-01` decisions remain unresolved and are not silently approved here:

- `OD-003-01`: each run states an explicit time/attempt ceiling until a default is accepted.
- `OD-003-02`: commit, push, PR and merge remain separate explicit effects.
- `OD-003-03`: prefer isolated work and disclose actual GitHub enforcement; do not assume branch rules.
- `OD-003-04`: installs and new technical destinations need per-run authority.
- `OD-003-05`: use one primary writer unless coordination is explicitly assigned.
- `OD-003-06`: no agent secret use or cloud mutation until a secret-store/service-identity process is selected.
- `OD-003-07`: independent security, privacy, recovery and release acceptance remains blocked while the genuine reviewer/alternate is vacant.
- `OD-003-08`: use local synthetic work until actual dev/staging accounts, cleanup and spend limits are named.

## 8. ACT-SP-003-02 completion and handoff

### Completed review handoff

| Field | Actual result |
|---|---|
| Source/activity | `SP-003` / `ACT-SP-003-02` |
| Run | `RUN-ACT-SP-003-02-20260911-01`; Codex delivery agent; attempt 1 of 2 |
| Target | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; base `31d2767ea431383f2eab910ea82426e50020b28e`; local Windows checkout |
| Outcome | Added review/evidence lifecycle rules, review matrix, S09–S12 routing, handoff template and failure examples |
| Exclusions | No repository-rule, identity, environment, service, device, specialist or independent-review implementation is claimed |
| Artifact identity | `docs/delivery/ACT-SP-003-02-evidence-and-review-routing.md`; reviewed version 0.2 SHA-256 `2B80553F95854CE7F4759978CCF1FA9A8B883EBC89F46F028A6FA115DD34C59F`; version 1.0 adds acceptance metadata only |
| Contracts/predecessors | `ACT-SP-003-01` version 1.0, accepted by Syed Ahmed on 11 September 2026 |
| Data/fixtures | Repository planning documents only; no personal, child, secret, production or device data; no runtime fixtures required |
| Validation performed | `node tools/validate-docs.cjs` passed 16 checks and 1,621 relative links; `git diff --check` passed before review remediation |
| Negative/security coverage | Policy/tabletop routes supplied for stale evidence, hostile instructions, secret exposure, ambiguous external results, duplicate retries, exhausted ceilings, missing reviewers and unavailable environments |
| Not exercised | No live services, branch protections, credentials, production data, independent reviewer, provider sandbox or physical device; therefore no implementation evidence is claimed |
| S09–S12 impact | Specification coverage present; actual environment/secret, adversarial, idempotency and enforcement exercises remain for implementation activities |
| Review route | Syed Ahmed, Delivery owner; role-consolidated and not independent. Stronger independent review remains required where the matrix says so |
| Owner statement | Syed Ahmed accepted exact `ACT-SP-003-02` version 0.2 on 11 September 2026 after `ACT-SP-003-03` verification; the acceptance-only metadata update is version 1.0 |
| Recovery | Documentation-only uncommitted addition; revise by patch or revert its eventual isolated commit; no external resource cleanup required |
| Budget | Attempt 1; within 90-minute checkpoint; AUD 0 incremental spend; exact elapsed time not separately metered |
| Requested status | Verify exact version under `ACT-SP-003-03`; do not self-approve source issue `SP-003` |

- [x] Standard and security-sensitive work is mapped to reviewers.
- [x] Ready, Review, Validation, Done and Blocked evidence requirements are defined.
- [x] Current-version identity and invalidation rules are explicit.
- [x] S09–S12 review/evidence routes are defined without claiming implementation proof.
- [x] A copyable handoff template is supplied.
- [x] Failure-routing examples cover stale evidence, hostile instructions, secret exposure, ambiguous mutations, retries, ceilings, missing reviewers and unavailable environments.
- [x] Unresolved inputs and owner decisions remain visible.
- [x] Source acceptance `AC-SP-003-01` and `AC-SP-003-02` stays linked and pending.

Handoff this artifact and `ACT-SP-003-01-agent-run-contract-policy.md` to `ACT-SP-003-03`. That verification activity must check both artifacts against the source criteria, run the applicable negative exercises and submit evidence to Syed Ahmed. Only the authorized acceptance owner may record `SP-003` Done.
