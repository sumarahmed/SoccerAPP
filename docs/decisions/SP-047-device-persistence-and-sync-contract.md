# SP-047 — Device persistence and synchronization contract decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-047 |
| Acceptance criterion | AC-SP-047-01 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, acting for the Mobile/backend leads |
| Review status | Owner acceptance recorded; named mobile lead/device QA and runtime security review remain later implementation gates |
| Repository base | `0a0044b768b028b63211076b4bdb54cb59bfda64` on `main` |

Syed Ahmed reviewed the protected-device-records, reconciliation/F25 and final
evidence artifacts, accepted the recommended outcomes and authorized completion,
commit and GitHub publication on 15 September 2026. SP-047 is complete as a
design/specification task.

## 1. Accepted evidence

- [ACT-SP-047-01 protected device records](../design/ACT-SP-047-01-protected-device-records.md), accepted version 1.0.
- [ACT-SP-047-02 reconciliation and F25 states](../design/ACT-SP-047-02-reconciliation-and-f25-states.md), accepted version 1.0.
- [ACT-SP-047-03 acceptance evidence](../design/ACT-SP-047-03-acceptance-evidence.md), accepted version 1.0.
- [SP-047 synthetic reconciliation fixtures](../../contracts/sp-047/reconciliation-fixtures.json), contract 1.0 with 18 scenarios.
- [SP-047 dependency-free validator](../../tests/mobile/validate-sp047-contract.cjs), executed successfully before acceptance publication.

## 2. Accepted outcomes

1. Device records and files are isolated in one opaque app-private vault per
   canonical adult/household owner context.
2. Drift/SQLite stores structured owner-scoped state and relative media
   references; private media remains outside the database and raw credentials
   or keys never enter it.
3. WAL/SHM, journals, thumbnails, staging and migration files share the private
   protection, backup-exclusion and deletion boundary.
4. Migrations are versioned, integrity-checked, retry-safe and non-destructive;
   failed migration blocks writes rather than wiping practice history.
5. Consequential offline intent uses stable operation IDs, payload digests,
   atomic outbox records, durable receipts and bounded visible retries.
6. Reconciliation refreshes current authority and applies withdrawal, deletion
   and suppression before replaying progress or offering media transfer.
7. Server generations, not timestamps, own authorization and consequential
   conflict resolution; newer deletion always defeats stale state.
8. Previously verified premium access is bounded to seven offline days and any
   earlier entitlement/content limit. Free content, history and authorized
   local recordings remain after expiry.
9. Interrupted media is not resumable or automatically restarted in the pilot;
   a deliberate retry starts a new byte-zero operation.
10. F25 truthfully separates downloads, device storage, last sync, offline
    validity, practice queues, cloud uploads, conflicts, retries and account
    switching.

## 3. Acceptance criterion

`AC-SP-047-01` passes for design: Drift/SQLite records, file separation,
migration, namespace, outbox, conflicts, delete-wins, offline expiry and F25 are
specified and cross-checked by an 18-scenario synthetic fixture suite.

## 4. Limits retained

- No mobile application, Drift schema, API, backend database, queue worker,
  cloud upload, UI screen or production service is implemented.
- No named iOS/Android device, migration, backup/restore, clock, offline,
  power-loss, low-storage or account-switch result is claimed.
- Platform-specific file/key protection and any additional encrypted-SQLite
  requirement remain subject to implementation feasibility and security review.
- The seven-day offline window is a maximum, not an instant-revocation promise.
- Tombstone retention/compaction remains dependent on `SP-061` and actual
  stale-client/recovery guarantees.
- Real youth, guardian and private-media data remain prohibited until all
  relevant privacy, safeguarding, security and device gates are satisfied.

SP-047 design acceptance supplies a fixed input to implementation and
feasibility work. Later activities must produce current-build runtime evidence;
they cannot reuse this design-only PASS as proof of enforcement.
