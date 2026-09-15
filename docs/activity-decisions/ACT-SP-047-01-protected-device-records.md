# ACT-SP-047-01 — Protected device records acceptance

| Field | Recorded value |
|---|---|
| Activity | ACT-SP-047-01 |
| Source issue | SP-047 |
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, acting for the Mobile/backend leads |
| Acceptance scope | `ACT-SP-047-01` design/specification only; `ACT-SP-047-02`, `ACT-SP-047-03` and `SP-047` remain open |
| Repository base | `0a0044b768b028b63211076b4bdb54cb59bfda64` on `main` |

Syed Ahmed reviewed and accepted the recommended protected-device-records
contract on 15 September 2026. The acceptance fixes the per-context storage,
record catalogue, worker, key-custody, temporary-file, backup, migration and
recovery boundaries below.

## Accepted evidence

- [Protected device records contract](../design/ACT-SP-047-01-protected-device-records.md), accepted version 1.0.
- [SP-008 data map and access matrix](../decisions/SP-008-data-map-and-access-matrix.md), accepted version 1.0.
- [SP-010 recording and local-protection contract](../decisions/SP-010-recording-and-local-protection-contract.md), accepted version 1.0.
- [SP-037 hierarchy and scoped capabilities](../decisions/SP-037-hierarchy-and-scoped-capabilities.md), accepted version 1.2.
- [SP-011 acceptance evidence](../design/ACT-SP-011-03-acceptance-evidence.md), accepted version 1.0.

## Accepted outcomes

- Each canonical adult/household owner context has a separate app-private vault
  identified by an opaque local ID.
- Drift/SQLite holds structured, context-bound records and relative media
  references; recordings and derivatives remain protected files outside the
  database.
- Every sensitive record is owner-scoped, and worker/repository operations are
  typed and bound to the selected vault rather than accepting arbitrary SQL or
  paths.
- Credentials and raw cryptographic keys remain in platform secure facilities,
  never SQLite, preferences, logs, analytics or repository files.
- WAL/SHM files, journals, thumbnails, staging fragments and migration material
  receive the same protection, exclusion and deletion treatment as their
  source.
- The private vault is excluded from consumer OS/cloud backup and gallery
  indexing; the resulting local-only device-loss risk is explicit.
- Migrations are versioned, exclusive, integrity-checked, retry-safe and
  non-destructive. Failure blocks writes and never silently wipes history.
- Recovery scans only known roots, keeps missing media distinct from history,
  and lets newer deletion/withdrawal tombstones defeat stale files.

## Retained limits

This acceptance does not implement or device-test Drift, SQLite, filesystem
protection, secure key storage, backup exclusion, migration, recovery or extra
database encryption. Exact platform mechanisms and the additional-encryption
decision require the later threat-model, implementation and named-device gates.

`ACT-SP-047-02` remains responsible for the complete outbox, conflict,
authority-refresh, delete-wins, offline-expiry and F25 presentation contract.
`ACT-SP-047-03` must verify the combined source acceptance before `SP-047` can
close.

Commit and GitHub publication were subsequently authorized with completion of
the full `SP-047` evidence on 15 September 2026.
