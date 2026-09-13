# ACT-SP-084-03 — SP-084 acceptance evidence

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 accepted |
| Prepared | 14 September 2026 |
| Activity | `ACT-SP-084-03` — Verify and hand off: Define versioned domain and API contracts |
| Source issue | `SP-084` / Linear `SOC-89` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as QA / Backend agent |
| Accountable owner / reviewer | Syed Ahmed acting as Backend/technical lead; role-consolidated review is disclosed |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `94686d30567d9aed2a1a16543fc92fd18cae60a1` |
| Run identity | `RUN-ACT-SP-084-03-20260914-01`; attempt 1 of 2 |
| Approved paths | `contracts/sp-084/**`; `tests/backend/**`; this evidence artifact |
| Data/environment | Synthetic contract data only; local Windows checkout; Node.js validation; no app, API, database, device, account, child, media or production data |
| Authority | Syed Ahmed's 14 September 2026 acceptance of the ACT-SP-084-03 review bundle and authorization to commit and publish |
| External effects | Repository fixture, validation, evidence and decision publication only; no Linear mutation, API call, database change or application deployment |
| Spend/time | AUD 0 incremental; attempt 1; within the proposed 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 14 September 2026; SP-084 is complete as a design/specification task, with runtime/client/device implementation evidence retained as future work |

This activity verifies the accepted SP-084 design contracts, binds the required common scenarios to one portable synthetic fixture file and submits the exact results and remaining runtime limits for owner review. It does not claim that a mobile app, web client, backend, worker, database or device has implemented or executed the contracts.

## 1. Exact evidence bundle

| Artifact | Exact identity | SHA-256 | Verification use |
|---|---|---|---|
| [ACT-SP-084-01 domain schema and ownership catalog](ACT-SP-084-01-domain-schema-and-ownership-catalog.md) | Version 1.0; commit `502e163d64e4b8ea110a09eb4fe45649b1cf0d33` | `91195D5F465A51D390250D104D79696A0357A668AD34A531AE319C4AB39DE956` | Ownership, typed references, server authority, domain responsibility and versioned extension seams |
| [ACT-SP-084-02 compatibility and idempotent event contract](ACT-SP-084-02-compatibility-and-idempotent-events.md) | Version 1.0; commit `94686d30567d9aed2a1a16543fc92fd18cae60a1` | `BAC94C47FA1CEC6B7DBA27A278B9EE7F0C3EFFA8C64ABC56E49C25B8CE999AB3` | Version, time, error, cursor, idempotency, event, retry and fixture requirements |
| [Portable SP-084 fixture corpus](../../contracts/sp-084/contract-fixtures.json) | `sp-084-contract-fixtures-v1`; contract `2026-09`; schema revision 1; 12 synthetic fixtures | `67D03E35C45C4734F849B27E890FD41BAF6973506353F5E7CAC8D078AC5B6701` | Common mobile/web/job input and expected-result baseline |
| [SP-084 contract validation](../../tests/backend/validate-sp084-contracts.cjs) | Dependency-free Node.js check; review candidate | `999451BA8CCBDB13E3A0EAAC32187C9418637F6C4162CE81CA6CA9666D4A4253` | Fixture identity, version, consumers, safety invariants and machine-portability checks |
| [SP-084 source backlog](soccer_delivery_backlog.md#sp-084--define-versioned-domain-and-api-contracts) | Current at base commit | Git-tracked at base | `AC-SP-084-01` through `AC-SP-084-04` |

Any content change to a hashed artifact invalidates the corresponding evidence row and requires the affected checks to be rerun. This evidence artifact does not contain its own hash because that would be self-referential.

## 2. Verification performed

| Check | Actual result | Evidence boundary |
|---|---|---|
| `node tests/backend/validate-sp084-contracts.cjs` | PASS: fixture set `sp-084-contract-fixtures-v1`; contract `2026-09`; schema revision 1; consumers mobile/web/job; 12 fixtures | Executes structural and invariant checks against the portable JSON corpus; not an application/API test |
| `node tools/validate-docs.cjs` | PASS: 16 checks; 1,665 repository-relative links; 165 source tasks; 390 activities; 613 planned criteria; generated activity map and inline JavaScript valid | Repository documentation integrity; not runtime contract enforcement |
| `git diff --check` | PASS | Tracked whitespace check; the new untracked files also parse/read successfully and receive a final staged check before any commit |
| SHA-256 calculation | PASS | Binds this review to the exact predecessor, fixture and validator versions in section 1 |
| Requirement-to-artifact inspection | PASS with the runtime limits in section 7 | Confirms design/fixture coverage; does not prove implementation in absent clients/services |

## 3. Source acceptance evidence

### AC-SP-084-01 — Household/club links cannot cross ownership

| Evidence | Outcome |
|---|---|
| ACT-SP-084-01 sections 2–6 require one canonical owner, typed references and explicit immutable projections/grants; foreign keys and role titles grant no access | Covered as accepted specification |
| ACT-SP-084-01 section 9 defines two-household/two-club negative cases | Covered as verification specification |
| Fixture `multi-owner-collection` supplies mixed owners and requires only the selected owner, zero foreign resources and no foreign-count disclosure | PASS in the portable fixture baseline |
| Validator fixes both `foreignResourceCount === 0` and `foreignCountDisclosed === false` | PASS as corpus-invariant execution |

**Outcome:** PASS for design and portable-fixture coverage. No database, API or object-level authorization implementation exists, so cross-owner runtime enforcement remains untested.

### AC-SP-084-02 — Server authority and device authority are explicit

| Evidence | Outcome |
|---|---|
| ACT-SP-084-01 sections 2, 3 and 7 define client request intent and require the server to construct authorization, owner, dependency, timestamp and audit facts | Covered as accepted specification |
| ACT-SP-084-02 sections 3–8 make server time, generations, current authorization, receipts, tombstones and effect identity authoritative across retry/offline paths | Covered as accepted specification |
| Fixtures `cursor-context-revoked`, `operation-retry-identical`, `operation-reuse-different-payload` and `offline-delete-wins` require current server state to defeat stale device state | PASS in the portable fixture baseline |
| Validator prevents intent overwrite, resurrection and stale cross-context continuation from becoming expected success | PASS as corpus-invariant execution |

**Outcome:** PASS for explicit authority boundaries and synthetic expected results. No device sync engine, server endpoint or persistence transaction was executed.

### AC-SP-084-03 — Mobile/web/jobs share contract fixtures and version policy

| Evidence | Outcome |
|---|---|
| ACT-SP-084-02 sections 2 and 9 define calendar-major compatibility and the 12 common fixture scenarios | Covered as accepted specification |
| The JSON corpus is platform-neutral and identifies exactly `mobile`, `web` and `job` as consumers | PASS in the portable artifact |
| The validator requires contract version form `YYYY-MM`, schema revision >= 1, the exact consumer set and the exact 12 fixture identities | PASS as corpus-invariant execution |
| Fixture data is declared synthetic; the validator rejects machine-specific absolute paths and credential-like content | PASS as safety/portability execution |

**Outcome:** PASS for one shared, versioned, portable fixture source. Dart, TypeScript and backend adapters do not yet exist and have not consumed the corpus; cross-runtime equality remains an implementation-stage test.

### AC-SP-084-04 — Shared extensions are owned and versioned

| Evidence | Outcome |
|---|---|
| ACT-SP-084-01 section 4 assigns responsible domains and section 8 fixes owning domains for pathways, progression rules, assessments, structured feedback and goals | Covered as accepted specification |
| The extension seam requires versioned resource types and typed dependencies and prohibits free-form authority, ownership bypass and historical reinterpretation | Covered as accepted specification |
| ACT-SP-084-02 applies the common contract major/schema revision and immutable event-version rules to future extensions | Covered as accepted compatibility policy |

**Outcome:** PASS for pre-implementation ownership and versioning. Actual people remain unassigned to the responsibility-role placeholders, and no extension schema or implementation exists yet.

## 4. Fixture coverage

| Fixture | Safety/property bound by the expected result | Validator protection |
|---|---|---|
| `contract-version-additive` | Unknown optional response field is ignored without losing known values | Identity/order and version-policy checks |
| `contract-version-breaking` | Unsupported/unsafe contract fails without blind retry | Identity/order and version-policy checks |
| `timestamp-dst-boundary` | Sydney local schedule retains intent and one explicit UTC instant | Identity/order and structural checks |
| `private-not-found` | Absent and unauthorized private resources are externally indistinguishable | Explicit privacy assertion |
| `cursor-context-revoked` | Context/dependency change prevents cursor continuation | Identity/order and structural checks |
| `operation-retry-identical` | Repeated identical command yields one resource/effect and one receipt | Explicit single-effect assertion |
| `operation-reuse-different-payload` | Reused operation ID cannot overwrite original intent | Explicit no-overwrite assertion |
| `offline-delete-wins` | Older offline update cannot resurrect a tombstoned resource | Explicit no-resurrection assertion |
| `event-duplicate` | Duplicate event delivery produces one consumer effect | Explicit single-effect assertion |
| `event-gap-and-reorder` | Sequence gap is parked and reconciled before later application | Explicit no-silent-gap assertion |
| `worker-lease-loss` | Replacement worker completes with one stable effect | Explicit single-effect assertion |
| `multi-owner-collection` | Foreign resource and foreign count are not disclosed | Explicit ownership/privacy assertions |

These fixtures encode inputs and expected results. They are not evidence that production serializers, authorization middleware, storage rules, queues or clients currently behave this way.

## 5. Negative and portability checks

| Attempted unsafe condition | Required result | Current evidence |
|---|---|---|
| Add, remove, rename or reorder one required fixture | Validator fails | Executed locally: check present |
| Remove mobile, web or job from the shared consumer set | Validator fails | Executed locally: exact consumer assertion present |
| Permit a duplicate command/event/worker effect | Validator fails for the protected fixture | Executed locally: explicit effect-count assertions present |
| Allow an older offline command to recreate a deleted resource | Validator fails | Executed locally: no-resurrection assertion present |
| Return a foreign resource or reveal a foreign count | Validator fails | Executed locally: two explicit disclosure assertions present |
| Insert a Windows/macOS/Linux user path | Validator fails | Executed locally: absolute-path pattern check present |
| Insert credential-like password/API-key/bearer content | Validator fails | Executed locally: credential-content pattern check present |

The check is intentionally dependency-free so it can run on any future build agent with the repository's Node.js documentation runtime. Client-specific adapters should consume this JSON rather than copy it into divergent fixture sets.

## 6. Review decisions requested

| ID | Decision | Proposed disposition |
|---|---|---|
| `OD-084-14` | Portable fixture baseline | Accepted: `sp-084-contract-fixtures-v1`, contract `2026-09`, schema revision 1 and the exact 12 synthetic scenarios are the canonical implementation input |
| `OD-084-15` | Verification boundary | Accepted: the four source criteria are complete for the design/specification phase while all absent runtime/client/device evidence remains a future implementation obligation |
| `OD-084-16` | SP-084 handoff | Accepted: ACT-SP-084-01/02 are fixed contracts and this evidence bundle is the prerequisite for dependent schema/API activities; no deployed API or runtime enforcement is claimed |

## 7. Remaining limits and required implementation evidence

- The repository contains no mobile app, web client, backend service, database schema, queue worker or deployment for SP-084.
- No Dart, TypeScript or backend validator exists, so the common corpus has not yet demonstrated identical cross-runtime accept/reject behavior.
- No named physical/emulated device is applicable at this design stage; device results are therefore not performed, not passed.
- The fixture validator checks contract invariants and portability, not full JSON Schema conformance or every field-level domain rule.
- No two-household/two-club database or API test has exercised object-level authorization, bulk/list leakage or IDOR resistance.
- No durable receipt, transactional outbox, cursor authentication, event sequence, dead-letter flow or revocation convergence mechanism has been implemented or load-tested.
- Domain responsibility roles are defined, but actual accountable people must be assigned before each implementation slice.
- Human security, privacy/safeguarding and content-specialist gates inherited from SP-037 remain mandatory before real youth, guardian or private-media data is used.

The first implementation activities that introduce each client/service must add an adapter for this fixture corpus, record exact tool/runtime versions, and run the relevant scenarios in CI. Any deliberate contract change requires a new calendar major or additive schema revision under ACT-SP-084-02 rules.

## 8. Recovery and handoff

| Field | Actual result |
|---|---|
| Repository state | Review candidate prepared from `main` at `94686d30567d9aed2a1a16543fc92fd18cae60a1`; acceptance publication authorized |
| External resources/processes | None created; no credential, account, service or temporary environment requires cleanup |
| Recovery | Revise/remove the uncommitted review candidate by targeted patch; after a future isolated commit, revert that commit rather than resetting unrelated work |
| Requested reviewer | Syed Ahmed, Backend/technical lead; role-consolidated and not independent |
| Decision | Syed Ahmed accepted exact review candidate SHA-256 `345B253773D797C85432AF04D339416B9C3B10432B6BDEA726C875BA0FBBA4D1` and authorized commit/publication on 14 September 2026 |
| Linear status | Not changed; `SOC-89` must not be marked Done until this exact review candidate is accepted and published |

## 9. Completion check

- [x] Every `AC-SP-084-01` through `AC-SP-084-04` criterion maps to exact artifact and fixture evidence.
- [x] Exact predecessor, fixture and validator versions/hashes are recorded.
- [x] All 12 accepted fixture scenarios are bound to a portable synthetic file.
- [x] A dependency-free check executes core fixture, version, ownership, privacy, idempotency and portability invariants.
- [x] Commands actually run and their results are recorded.
- [x] Missing applications, runtimes, devices, services and specialist/accountable roles are explicit.
- [x] No design rule, fixture expectation or documentation check is represented as deployed runtime enforcement.
- [x] Syed Ahmed reviewed and accepted `OD-084-14` through `OD-084-16` on 14 September 2026.
- [x] Acceptance publication is authorized before SP-084 is closed as a design/specification task.

Handoff status: the exact portable fixture baseline and design-versus-runtime evidence boundary are accepted. SP-084 may close as a design/specification task and its artifacts may be handed to dependent implementation activities without implying that an application or API already exists.
