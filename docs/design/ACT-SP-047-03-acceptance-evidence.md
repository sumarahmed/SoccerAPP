# ACT-SP-047-03 — SP-047 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-047-03` — Verify and hand off: Finalize device persistence and sync contract |
| Source | `SP-047` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-047-03` and `SP-047` complete as design/specification work |
| Repository base | `0a0044b768b028b63211076b4bdb54cb59bfda64` on `main` before the completion revision |
| Executor | Codex acting as QA/Mobile design agent |
| Accountable owner | Syed Ahmed acting for the Mobile/backend leads |
| Required later reviewer | Named mobile lead/device QA; backend and security review before real participant data |
| Evidence scope | Design contracts and synthetic fixture validation only; no mobile, API or device result claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-047-01 protected device records](ACT-SP-047-01-protected-device-records.md) | Accepted version 1.0 | `BBC355479A30BD1D047EA1116F5D5CE9636D853432060E68EB9014427FB7DE99` |
| [ACT-SP-047-02 reconciliation and F25 states](ACT-SP-047-02-reconciliation-and-f25-states.md) | Accepted version 1.0 | `57C4A51AA9FBF1E6BAEB684BB7F27757C3390CBA70415F17C208A236CC2E7282` |
| [SP-047 reconciliation fixtures](../../contracts/sp-047/reconciliation-fixtures.json) | `sp-047-reconciliation-v1`; contract 1.0; 18 synthetic scenarios | `A4524310B662959E2A01BF59379F3BBB05FA21C9F93A500E0E8CD7F5E7EE400A` |
| [Dependency-free fixture validator](../../tests/mobile/validate-sp047-contract.cjs) | Local Node validator | `E157FEDC8544C727A45D221FF9A7EC742BD88DFC4862F262E3154E0371AA6EDD` |
| [SP-008 data map and access matrix](../decisions/SP-008-data-map-and-access-matrix.md) | Accepted version 1.0 | Existing accepted decision |
| [SP-010 recording/local protection](../decisions/SP-010-recording-and-local-protection-contract.md) | Accepted version 1.0 | Existing accepted decision |
| [SP-011 cloud lifecycle evidence](ACT-SP-011-03-acceptance-evidence.md) | Accepted version 1.0 | Existing accepted evidence |
| [SP-037 scoped capabilities](../decisions/SP-037-hierarchy-and-scoped-capabilities.md) | Accepted version 1.2 | Existing accepted decision |
| [SP-084 shared contracts](../decisions/SP-084-versioned-domain-and-api-contracts.md) | Accepted version 1.0 | Existing accepted decision |

## 2. Checks actually performed

Command:

```powershell
node tests/mobile/validate-sp047-contract.cjs
```

Observed result:

```text
PASS: SP-047 reconciliation contract; 18 synthetic scenarios, 7-day offline
maximum, delete-wins ordering and F25 states verified.
```

The validator parses the portable fixture corpus and checks:

- the four-field idempotency scope and exact eight-step reconciliation order;
- a seven-day maximum offline-validity window and conservative device time;
- five automatic small-event attempts within a 15-minute sync run;
- non-resumable media with no automatic complete-file restart;
- continued free content, local history and local media after premium expiry;
- every required F25 status;
- the unique presence of all 18 conflict/retry scenarios; and
- expected anti-duplication, delete-wins, cursor, authority, context-isolation,
  conflict, expiry and retry results.

The repository documentation validator was also run after the accepted decision
records were added. It verified source/package parity, references and the
generated activity map. It does not compile Flutter code or exercise a device.

## 3. Source acceptance assessment

| `AC-SP-047-01` element | Review outcome | Exact evidence and retained limit |
|---|---|---|
| Drift/SQLite records | **PASS — design** | `ACT-SP-047-01` defines 14 logical record families, owner constraints, non-secret fields and one active-vault worker; no schema is implemented |
| File separation | **PASS — design** | Private recordings, derivatives, staging and recovery remain protected files with relative catalogue paths, never SQLite BLOBs; filesystem behavior is untested |
| Migration | **PASS — design** | Versioned exclusive migration, integrity validation, idempotent recovery and no-silent-wipe behavior are fixed; no real migration has run |
| Namespace | **PASS — design** | One opaque app-private vault per canonical owner context, with locked switching and no cross-context copying; device isolation is untested |
| Outbox | **PASS — design/fixture** | Stable operation ID, payload digest, transactional local write, receipt recovery and bounded visible states are specified and fixture-checked |
| Conflicts | **PASS — design/fixture** | Domain ownership matrix rejects timestamp last-write-wins for consequential state and exposes household edit conflicts |
| Delete-wins | **PASS — design/fixture** | Withdrawal/tombstone processing precedes push; stale uploads, restores and edits cannot resurrect a newer deletion |
| Offline expiry | **PASS — design/fixture** | Premium content expires no later than seven days or its earlier entitlement/content limit; unreliable time never extends it |
| F25 | **PASS — design/fixture** | Download/storage/version, last sync, validity, separate queue counts, account-switch warning, conflict/retry and retained local access states are specified |

## 4. Accepted contract summary

1. Each adult/household owner context has a separate opaque app-private vault;
   sensitive database records and media never cross vaults on account switch.
2. Drift/SQLite stores structured records, stable IDs, generations and relative
   file references. Media, thumbnails and temporary assets remain protected
   files; secrets and raw keys remain in platform secure facilities.
3. WAL/SHM, journals, staging, thumbnails and migration material inherit the
   same protection, backup exclusion, reconciliation and deletion boundary.
4. Schema migration is versioned, exclusive, integrity-checked, retry-safe and
   non-destructive; a failure blocks writes rather than wiping history.
5. A local mutation and outbox entry commit atomically. Identical retry returns
   one receipt and one effect; changed-payload ID reuse is rejected.
6. Reconnect always refreshes authority and applies withdrawal/deletion before
   ordinary pulls, progress events and any new media operation.
7. Current backend generations own roles, consent, membership, entitlements,
   published state and deletion. Timestamps do not resolve security conflicts.
8. Previously verified premium access is usable offline for at most seven days
   and never beyond an earlier paid/grace/content boundary. Free content, local
   history and authorized local recordings remain after premium expiry.
9. Small events use bounded automatic retry. Interrupted media never resumes or
   automatically restarts; the user deliberately starts a new byte-zero upload.
10. F25 exposes connectivity, last sync, validity, pack/storage data, separate
    history/upload queues, conflicts, retries, account-switch consequences and
    truthful local access.

## 5. Fixture outcome groups

| Scenario group | Accepted result |
|---|---|
| Operation identity and response loss | One durable effect and receipt; changed payload cannot reuse an ID |
| Local crash and event ordering | No half-committed local state; duplicates are harmless and gaps are reconciled |
| Cursor expiry | No queued push before a complete authorized resynchronization |
| Household/profile conflict | No silent last-write-wins; current authorized resolution is required |
| Delete/withdraw/reconnect | Newer suppression applies before stale upload/edit and prevents resurrection |
| Context switching | Warning is visible, switching without upload is allowed, old vault locks and no cross-context copy occurs |
| Offline expiry and device time | Seven-day maximum, no clock-based extension, free/local state retained and active session may finish |
| Membership removal | Queued action denied without revealing foreign details |
| Interrupted media | Fragments cannot be reused; no automatic restart; deliberate retry begins at byte zero |
| Terminal problem | No automatic retry; current-authority rejection remains visible |

## 6. Risks retained after design acceptance

1. No Flutter/Drift database, mobile repository, filesystem adapter, outbox,
   API, server receipt, UI or background task exists yet.
2. Exact iOS Data Protection, Android Keystore/storage behavior and whether
   extra SQLite/file encryption is required remain implementation/security
   decisions.
3. The seven-day offline maximum means fully offline revocation is not instant;
   content may require a shorter reviewed validity window.
4. Background scheduling, device clock behavior, power loss, low storage,
   backup exclusion and vault switching require named-device evidence.
5. Cursor age, batch sizes, queue/database growth and retry thresholds require
   representative performance and reliability measurement.
6. Tombstone compaction depends on the complete `SP-061` retention decision and
   proof that no supported stale client, queue or restore can resurrect data.
7. Concurrent adult conflict presentation requires design/usability review.
8. No real youth, guardian, private media, production credential or live cloud
   service was used by this evidence.

## 7. Reviewer checklist and outcome

- [x] Protected per-context records, files, worker access and keys are specified.
- [x] WAL/temp/backup and migration recovery are specified without a wipe path.
- [x] Outbox identities, receipts, retry states and current-authority checks are specified.
- [x] Reconciliation processes suppression before stale queued operations.
- [x] Domain conflict ownership and delete-wins behavior are explicit.
- [x] Seven-day offline validity and conservative clock behavior are explicit.
- [x] F25 download, storage, queue, switch, retry and retained-local states are explicit.
- [x] All 18 synthetic scenarios pass the dependency-free validator.
- [x] Every runtime/device/security limitation remains visible.

Syed Ahmed reviewed the complete `ACT-SP-047-01` and `ACT-SP-047-02` contract,
accepted this evidence and authorized `ACT-SP-047-01`, `ACT-SP-047-02`,
`ACT-SP-047-03` and `SP-047` to be marked complete, committed and published to
GitHub on 15 September 2026.

This closes SP-047 as design/specification work only. It does not inherit or
claim the later implementation and named-device evidence required by `SP-051`,
`SP-053` and dependent delivery activities.
