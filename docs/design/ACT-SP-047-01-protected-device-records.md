# ACT-SP-047-01 — Protected device records contract

| Field | Recorded value |
|---|---|
| Activity | `ACT-SP-047-01` — Specify protected device records |
| Source | `SP-047` — Finalize device persistence and sync contract |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-047-01` complete as a design/specification activity |
| Repository base | `0a0044b768b028b63211076b4bdb54cb59bfda64` on `main` |
| Executor | Codex acting as Mobile design agent |
| Accountable owner | Syed Ahmed acting for the Mobile/backend leads |
| Required later reviewer | Named mobile lead/device QA; mobile security review before real participant data |
| Predecessors | Accepted `ACT-SP-008-01`, `ACT-SP-010-01`, `ACT-SP-011-03` and `ACT-SP-037-03` |
| Deliverable | Local persistence schema and protection/recovery contract |

## 1. Scope and boundary

This contract specifies how Soccolo separates and protects structured records,
recording files, derived media, temporary material, database sidecars, keys and
migrations on one device. It fixes the design boundary needed by
`ACT-SP-047-02`; it does not implement a Flutter application or prove behavior
on an iOS or Android device.

The authoritative backend continues to own identity, roles, consent,
authorization generations, published content and verified entitlements. A
local database is a cache and durable work queue, not an independent source of
guardian or cloud authority. Local presence never upgrades access.

This activity does not specify the complete outbox/conflict protocol, offline
expiry or F25 presentation. Those belong to `ACT-SP-047-02`. End-to-end device
and reconnect evidence belongs to `ACT-SP-047-03`, `SP-051`, `SP-053` and the
named mobile-security review.

## 2. Per-context vault and path contract

Every signed-in adult or household owner context receives one app-private
vault. The vault identifier is an opaque locally generated value mapped to the
canonical server owner-context ID inside protected storage. Names, email
addresses, player names and external account identifiers never appear in file
or directory names.

```text
<platform app-private root>/
  vaults/<opaque-vault-id>/
    db/soccolo.sqlite
    media/recordings/<opaque-media-id>/...
    media/thumbnails/<opaque-media-id>/...
    staging/<operation-id>/...
    recovery/<operation-id>/...
  public-cache/demos/...
```

The paths above are logical relative paths, not Windows, macOS, iOS or Android
absolute paths. Code, records, fixtures and logs must never persist a developer
machine path, drive letter, home directory or platform container path.

The following rules are mandatory:

- unrelated owner contexts never share a sensitive SQLite database or media
  directory;
- switching context closes the current database worker, revokes its file
  capabilities, clears context-bound memory and opens only the selected vault;
- sign-out locks the vault and destroys session credentials from memory, but
  does not silently delete unsynchronized history or recordings;
- deleting local data is a separate, explicit lifecycle operation;
- a restricted player session can access only the player-scoped records and
  media authorized by the containing owner context; and
- a dedicated child credential never retains an adult refresh token or an
  adult administrative capability.

Public demonstration media is stored outside private vaults because it can be
re-downloaded and does not inherit a player's identity. A file becomes private
as soon as it contains a player recording, personalized derivative or sensitive
metadata.

## 3. Drift/SQLite record model

The initial mobile persistence implementation uses Drift over native SQLite.
The following logical tables are required; physical names and normalized
columns may change if the semantics and ownership constraints remain intact.

| Record family | Required purpose and minimum identity |
|---|---|
| `vault_context` | Opaque local vault ID, canonical owner-context ID, schema version and lock state |
| `player_scope` | Player ID, owner-context ID, local availability and latest known authority generation |
| `content_snapshot` | Immutable versioned plan/activity content and digest used for an offline session |
| `practice_session` | Stable session ID, player/owner IDs, content version, lifecycle state and timestamps |
| `attempt_event` | Stable event ID, session/player/owner IDs, event type, monotonic sequence and payload version |
| `recording_group` | Logical recording ID, session/player/owner IDs, single/dual mode and finalization state |
| `media_object` | Opaque object ID, recording group, relative path, digest, bytes, media type and lifecycle state |
| `cloud_copy_state` | Recording ID, displayed copy state, expiry if known, allowance source and last server generation |
| `upload_intent` | Stable operation ID and non-secret reservation state; never a credential or signed URL |
| `outbox_event` | Stable idempotency ID, owner/resource IDs, event version, attempt state and dependency ordering |
| `sync_cursor` | Server-issued cursor/version scoped to one owner context and dataset |
| `suppression_tombstone` | Resource ID, owner ID, authoritative generation, reason and safe retention marker |
| `operation_receipt` | Operation ID, input digest, result class and non-sensitive diagnostic fields |
| `migration_journal` | Migration ID, from/to schema versions, phase, input digest and recovery outcome |

Sensitive rows carry `ownerContextId`. Player- and resource-bound rows also
carry their canonical parent identifiers. Foreign keys, uniqueness rules and,
where needed, composite owner/resource constraints must prevent a row from
being attached to an object in another vault. Repository queries always receive
the selected owner context; an unscoped `all rows` repository API is prohibited.

SQLite stores structured state, relative file references and integrity
metadata. It must not contain:

- video, audio or image BLOBs;
- access or refresh tokens, passwords, TOTP material or raw cryptographic keys;
- reusable upload credentials or signed playback/download URLs;
- player names in diagnostic fields when stable opaque IDs suffice; or
- absolute filesystem paths.

Stable IDs are generated before local work is queued so retries reuse the same
identity. Timestamps are evidence and presentation inputs, not conflict
authority; authoritative generations and the `ACT-SP-047-02` conflict rules
decide whether state is current.

## 4. Protected file catalog

Each app-controlled media object is catalogued with:

- opaque media and recording-group IDs;
- owner context and player scope;
- a vault-relative path only;
- content digest, byte count, container/MIME type and source/derived role;
- expected parts or camera views and finalization state;
- protection class and recorded backup-exclusion state;
- key alias/version if a reviewed application encryption adapter is later used;
- local retention, deletion and tombstone state; and
- created/finalized/reconciled timestamps for diagnostics, never for authority.

Capture writes to a new operation-specific staging directory. A successful
finalization verifies the expected objects and digests, fsyncs the durable data
where the platform permits, commits the catalog transaction and atomically
moves or renames the file into its final relative location. A partially written
file is never labelled available, backed up or exported.

Dual capture is one logical recording group. Each camera view and part remains
a separate media object, but the group cannot become complete until every
required object and the synchronization relationship verify. Thumbnails and
derived files inherit the same owner, authorization, deletion and backup rules
as their source. A social export is a separate deliberately created external
copy governed by the accepted `SP-010` contract.

## 5. Worker and capability boundary

The pilot starts with one Drift/SQLite worker or isolate for the active vault.
Additional readers require measured profiling and a revised concurrency test;
they are not assumed by this contract.

Worker messages carry a typed command, selected vault and owner context,
operation ID, expected record or authorization generation, and a bounded
payload. The worker validates these fields and returns a typed result. It does
not accept arbitrary SQL, arbitrary filesystem paths, root-directory traversal
or caller-supplied secrets.

A media worker receives the exact recording/staging capability needed for one
operation. It cannot enumerate other vaults. A database worker cannot mint
server authority, and a restricted child route cannot call adult-only
repositories merely because both profiles are present on the same device.

Transactions couple a local state transition with its required outbox entry so
a crash cannot persist one without the other. Long media I/O is not performed
inside a database transaction; the operation state and recovery scan make the
two-phase file/database boundary explicit.

## 6. Platform protection and key custody

All vault directories use the strongest compatible platform app-private file
protection that still supports the explicitly tested background operations.
Authentication secrets and cryptographic key material use iOS Keychain or
Android Keystore-backed facilities. Raw keys are absent from SQLite,
preferences, source control, logs, analytics, crash reports and support
artifacts.

The database may store only a non-secret key alias and key version. If a later
threat-model decision introduces a reviewed encrypted-SQLite or file-encryption
adapter, it must use a per-vault key or wrapping boundary, authenticated
encryption, versioned rotation and a power-loss-safe migration. Soccolo must not
invent cryptography or silently fall back to plaintext after an encryption
failure.

For the pilot contract, OS file/data protection plus the app-private sandbox is
the mandatory baseline. Additional whole-database encryption remains an open
implementation decision requiring compatibility and threat-model evidence. The
product must not claim SQLCipher, end-to-end encryption or protection from a
person actively using an already unlocked device until it is implemented and
tested.

Biometric or device-passcode checks may unlock local use but do not replace
current server-side guardian authority for privileged actions. Loss of a
non-recoverable local key may make local-only data permanently unavailable; the
interface must not promise recovery that the architecture cannot provide.

## 7. WAL, journals, temporary material and backup

SQLite WAL/SHM files, rollback journals, thumbnails, staging files, recovered
fragments, migration work files and diagnostic extracts have the same
sensitivity as their source database or recording. They remain inside the
owning vault, inherit file protection, and are included in deletion and
reconciliation logic.

The complete private vault is excluded from consumer OS/cloud backup, document
provider exposure, gallery/media-library indexing and ordinary file sharing.
This prevents `local only` data from becoming an undisclosed overseas copy and
prevents a stale device restore from resurrecting deleted state. Public demo
cache may be discarded and downloaded again.

This accepted boundary has a deliberate consequence: a local-only recording
or unsynchronized session may be lost after device loss, app removal, storage
failure or key loss. Optional Soccolo cloud copying is a separate explicit
choice under `SP-011`; consumer device backup is not used as a hidden recovery
route.

Logs and crash reports use operation IDs and result classes. They exclude
player names, content payloads, tokens, raw paths, media bytes and database
pages. A support export requires a separately reviewed privacy-minimized format.

## 8. Versioned migration and failure recovery

Every schema change has a stable migration ID, explicit from/to versions and a
reviewed forward migration. The application performs migrations before any
repository is available to a user or background task.

For each vault, migration follows this state machine:

1. acquire the exclusive vault lock and stop background writers;
2. verify the expected starting schema and record the migration input digest;
3. checkpoint SQLite using its supported APIs and create only the minimum
   protected, backup-excluded recovery material required;
4. run the migration inside a transaction where SQLite permits;
5. validate schema, foreign keys, owner isolation and representative record
   counts/digests;
6. commit the new version and migration receipt; then
7. remove superseded recovery material through the protected cleanup path.

A failure leaves the last valid database and media objects untouched, records a
privacy-minimized error, blocks writes and offers a retry or supported recovery
route. The application must never silently create an empty database, discard
history, reassign a record to another context or delete recordings to make a
migration appear successful.

Migrations are idempotent after interruption. Tests must inject termination or
power loss before and after every durable phase, include WAL/journal states,
multiple owner vaults, orphaned media, missing files and low-storage failures.
Downgrade is unsupported unless a specific reversible migration is designed;
an older client encountering a newer schema must stop safely and explain the
required update.

Key rotation is a separate versioned security operation even when coordinated
with a schema migration. No migration makes an unprotected plaintext copy in a
public or backup-eligible location.

## 9. Launch reconciliation and local deletion

On launch or recovery, Soccolo scans only the selected vault's catalogued roots
and known staging operations. It never searches the whole device or another
vault.

| Condition | Required outcome |
|---|---|
| Catalog row and verified file agree | Keep available; no rewrite solely to refresh a timestamp |
| Catalog row exists but file is missing | Mark local media unavailable; retain session/history metadata and show the truthful state |
| Final file exists without a committed catalog row | Keep quarantined; adopt only after owner, operation, digest and tombstone checks pass, otherwise delete through protected cleanup |
| Staging file belongs to an incomplete/crashed operation | Keep unreadable; recover only if the operation contract proves completeness, otherwise clean up |
| Newer deletion/withdrawal tombstone exists | Deletion wins; never adopt, upload or expose the stale file |
| Database integrity check fails | Lock the vault, preserve evidence safely and enter the supported recovery path; never open a different owner's vault |

Removing local data covers the database records selected by the lifecycle
contract, media, thumbnails, staging/recovery material and relevant SQLite
sidecars. Cloud deletion and server tombstone retention remain separate; a
local cleanup result cannot claim that a cloud or external copy was removed.

## 10. Acceptance checks and retained risks

The design acceptance check for `ACT-SP-047-01` requires all of the following:

- one isolated, opaque namespace per canonical owner context;
- Drift/SQLite logical records and ownership constraints;
- database/file separation and relative-path cataloguing;
- scoped single-worker access with typed operations;
- platform secure-storage key custody and no secret database fields;
- equal handling for WAL, journal, temporary, thumbnail and migration files;
- explicit backup/gallery exclusion and truthful device-loss consequence;
- versioned, crash-safe, non-destructive migration behavior; and
- bounded launch reconciliation where newer deletion state wins.

The following remain open implementation risks rather than accepted evidence:

1. exact iOS Data Protection classes and Android storage/Keystore mechanisms;
2. whether the final threat model requires additional encrypted SQLite or
   per-file encryption beyond platform protection;
3. OS-version-specific background recording/upload access while a vault is
   locked;
4. reliable backup and gallery exclusion on named devices and restore paths;
5. filesystem atomicity, low-storage and power-loss behavior on target devices;
6. shared unlocked-device/app-switcher exposure; and
7. the complete outbox, authority refresh, conflict, offline-expiry and F25
   state contract in `ACT-SP-047-02`.

Acceptance of this document is design approval only. It does not claim a mobile
build, encrypted database, successful migration, protected backup behavior,
device inspection, penetration test or production readiness.
