# ACT-SP-011-02 — Quota, deletion and recovery invariants

| Field | Review value |
|---|---|
| Activity | `ACT-SP-011-02` — Specify quota and deletion/recovery races |
| Source | `SP-011` — Fix cloud, consent, deletion and recovery contracts |
| Contract version | 1.0 accepted |
| Review date | 15 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; `ACT-SP-011-02` complete as design/specification work |
| Repository base | `024007d` on `main` |
| Executor | Codex acting as Media/backend design agent |
| Accountable owner | Syed Ahmed acting as founder/backend product decision owner |
| Predecessor | Accepted [ACT-SP-011-01 lifecycle and copy states](ACT-SP-011-01-cloud-lifecycle-and-copy-states.md) |
| Deliverable | API invariants and synthetic quota/delete/restore race fixtures |

## 1. Boundary

This contract makes the accepted cloud lifecycle enforceable at an API/domain
boundary. It does not provision storage, select or approve a provider, process a
real recording, establish actual Australian residency or measure a production
cleanup job.

The review fixtures are:

- [cloud-lifecycle-fixtures.json](../../contracts/sp-011/cloud-lifecycle-fixtures.json); and
- [validate-sp011-contract.cjs](../../tests/media/validate-sp011-contract.cjs).

They are synthetic contract checks, not service integration tests.

## 2. Accepted numeric and feature controls

| Control | Contract value |
|---|---:|
| User-facing resumable upload | Disabled |
| Unstarted reservation lifetime | 15 minutes |
| Upload credential lifetime | Maximum 15 minutes |
| Continuous upload-attempt ceiling | 60 minutes |
| Upload inactivity timeout | 5 minutes |
| Interrupted/failed fragment handling | Cleanup requested immediately; verified cleanup ceiling of 60 minutes from terminal interruption/failure |
| Playback/download URL lifetime | Maximum 5 minutes |
| Active cloud-copy retention | 30 days after complete group verification |
| Restricted recovery history after noncurrent | Seven days |

The one-hour cleanup ceiling is not a resume window. When a transfer is
interrupted, cancelled or fails, its fragments become unusable immediately and
cleanup begins. They cannot be attached to a later attempt. Any retry is a new
operation, new reservation and byte-zero upload.

A continuous request may use bounded transport retry that does not detach the
attempt or expose a Resume action. Five minutes without accepted progress ends
the attempt. No attempt may remain active beyond 60 minutes. If representative
files cannot upload within this limit, the app reports the limitation and keeps
the local copy; it does not silently enable resumable storage.

## 3. Quota ledger and atomic reservation

For one allowance source:

```text
availableBytes = limitBytes - usedBytes - reservedBytes
requestedBytes <= availableBytes
```

Reservation creation is one atomic server transaction. It binds:

- `reservationId` and stable `operationId`;
- principal and selected owner context;
- logical recording/object-group ID and immutable payload digest;
- current consent, owner, deletion and allowance generations;
- exactly one allowance source;
- required source/part/thumbnail roles and their byte ceilings;
- `reservedBytes`, `createdAt`, `startBy` and terminal state; and
- the contract/configuration version.

Two concurrent requests cannot spend the same available bytes. Client-reported
quota, entitlement, file type or final byte count is never authoritative.

The locally finalized object group supplies expected byte counts. The server
adds a versioned bounded derivative allowance for required thumbnails. It rejects
any object or group that would exceed its reserved ceiling; it does not borrow
from another owner, player, club or allowance implicitly.

On successful group verification, actual accepted bytes move atomically from
`reservedBytes` to `usedBytes` and unused reservation capacity is released. A
group is not successful until every required part/view and subordinate object
passes. For dual capture, both synchronized views are required unless the adult
created a new deliberate single-view upload operation.

On cancellation, failure, withdrawal or attempt expiry, capacity remains
reserved until fragments are verified absent. Cleanup failure remains visible
and alerts the operator; it is not treated as released capacity or success.

Active-store deletion/expiry releases displayed customer usage only after the
active objects are verified deleted. Restricted recovery copies do not count
against the customer-visible allowance, but remain a disclosed Soccolo
operational cost.

## 4. Authorization checkpoints

The server reauthorizes with current state at:

1. reservation creation;
2. upload-request admission;
3. verification/finalization;
4. retry as a new byte-zero attempt;
5. playback/download URL minting;
6. external recipient/share authorization; and
7. deletion, withdrawal or allowance migration.

Every checkpoint verifies canonical owner context, current adult authority,
consent generation, deletion/suppression generation, selected allowance and
object-group state. A valid payment, old reservation, uploaded byte, cached role
or previously valid link does not override a newer withdrawal/deletion.

Server time decides every expiry. Device time is display input only.

## 5. Upload quarantine and verification

Upload credentials are scoped to one reservation, object role, byte ceiling and
private quarantine destination. They are never playable URLs.

While `uploading`, `upload_incomplete`, `verifying` or `cleanup_pending`:

- no family, coach, club, client or ordinary support route can read the bytes;
- a client cannot promote its own object;
- the server does not trust client MIME, filename, duration, hash or thumbnail;
- verification runs inside a bounded worker without arbitrary outbound fetches;
- fragments never enter normal object-recovery backups; and
- logs contain IDs, byte counts and sanitized categories, not media, credentials
  or playable paths.

Only a verified complete group transitions to `cloud_available` and receives
`groupVerifiedAt` plus `expiresAt = groupVerifiedAt + 30 days`.

## 6. Idempotency and receipts

Every consequential command follows the accepted `SP-084` contract:

```text
idempotency scope =
  (principalId, selectedContextId, commandType, operationId)
```

The server records the normalized payload digest and the first durable effect in
one transaction. An identical retry returns the existing receipt. Reuse of an
operation ID with a changed digest is rejected without mutation.

Receipts record the authoritative generations, reservation/usage deltas, object
group, terminal state, server timestamps and sanitized error. A network timeout
is resolved by reading the receipt before an identical bounded retry. Duplicate
commands never create a second reservation, quota charge, object group,
withdrawal or deletion job.

## 7. Interrupted upload and cleanup

Because user-facing resume is disabled:

1. transfer interruption moves the attempt to `cleanup_pending`;
2. its upload credential becomes unusable;
3. a cleanup command is queued immediately;
4. fragments remain private and cannot be reused;
5. the user sees `Upload interrupted — restart` and retains the local copy;
6. cleanup completion releases the reservation; and
7. a new user retry starts from byte zero with new authority and capacity checks.

The cleanup watchdog must verify fragments absent no later than 60 minutes after
the terminal interruption, cancellation or failure. If it cannot, it preserves
the reservation, raises an operator alert and records a breach of the proposed
cleanup objective. It must not falsify deletion or quota release.

Cancellation, consent withdrawal and delete actions use the same immediate
denial but receive priority cleanup. No incomplete fragment is copied into the
seven-day operational recovery store.

## 8. Playback and residual access

A playback/download URL is minted only after a current authorization check and
expires within five minutes. It binds the exact object/group, recipient purpose
and permitted operation. Range requests and renewal repeat current checks.

Withdrawal/deletion prevents minting or renewal immediately. A URL already
issued may remain usable for its remaining bounded lifetime; the product states
this residual window accurately. Bytes already downloaded, exported or handed
to a social destination cannot be remotely retracted.

## 9. Deletion and withdrawal ordering

The server accepts a deletion/withdrawal by atomically:

1. advancing the relevant monotonic generation;
2. writing a durable, privacy-minimized tombstone/suppression record;
3. denying new access and consequential media operations; and
4. emitting idempotent cleanup effects for active objects, thumbnails,
   quarantine fragments and applicable device instructions.

Physical deletion is asynchronous, but access denial is immediate. If an upload
or verification completes after the newer generation was accepted, finalization
returns `dependency_revoked`, the object never becomes readable and cleanup
continues.

| Intent | Server suppression | Returning device behavior |
|---|---|---|
| Delete cloud copy | Prevent automatic re-upload of that asset | Keep authorized local copy; show `No cloud copy` |
| Delete everywhere | Prevent re-upload and enqueue per-device deletion | Remove the app-controlled local copy after current instruction verification |
| Withdraw cloud consent | Block cloud operations under the withdrawn purpose/generation | Local copy may remain but cannot upload without a new valid consent decision |
| Cloud expiry | Prevent automatic resurrection of expired object identity | Keep local copy if present; a new upload is a deliberate new operation |
| Turn cloud off | Block future automatic reservations only | Keep local and already verified cloud copies through their displayed expiry |

## 10. Offline reconciliation

Reconnect order is fixed:

1. refresh identity, selected context and current generations;
2. fetch/apply critical withdrawal, deletion and suppression records;
3. apply authorized device deletion instructions;
4. pull permitted current state;
5. submit idempotent session/history events; and
6. create new upload reservations only for still-authorized intent.

An old queued upload never runs before the suppression pull. If the client's
cursor is expired or untrusted, consequential queued media operations remain
held until a complete authorized resynchronization. Server generations, not
timestamps or queue order, resolve conflict.

Tombstones remain at least through every supported offline/retry/recovery window
and as long as an accepted object identity could be replayed. Their later
privacy-minimized retention rule belongs to `SP-047`/`SP-061`; deleting them
merely to reduce storage before resurrection is impossible is prohibited.

## 11. Recovery-copy isolation and restore replay

Active verified objects receive separate restricted Australian recovery
coverage only after they become active. Incomplete/quarantine bytes are
excluded.

When an active object expires, is deleted or loses consent:

- it becomes noncurrent and user access ends immediately;
- its ordinary recovery version is retained for no more than seven days, unless
  a separately approved legal hold applies;
- no family, coach or ordinary support role can browse it;
- the user receipt distinguishes active deletion from recovery expiry; and
- an approved emergency-purge route can remove it sooner where required.

A restore occurs into an isolated environment. Before opening access, the
operator replays all later tombstones, withdrawals and grant revocations,
verifies object/metadata consistency and checks unrelated owner contexts. A
restored object with an older generation remains deleted. Recovery is never a
route around current authorization.

## 12. Required race scenarios

The synthetic corpus covers:

- concurrent requests for the final allowance bytes;
- identical reservation retry and changed-payload operation-ID reuse;
- unstarted reservation expiry;
- same-attempt transient transport retry without detached resume;
- interrupted upload cleanup and byte-zero restart;
- consent withdrawal while queued and while transferring;
- deletion during verification;
- incomplete dual-camera object group;
- insufficient capacity before finalization;
- expiry while an older playback URL exists;
- stale offline automatic re-upload;
- delete-everywhere on device reconnect;
- restore after a newer tombstone;
- fragment-cleanup deadline failure/alert; and
- sponsorship ending while an active copy retains its original expiry.

## 13. Review limits

Passing the fixtures proves that the JSON corpus obeys this design contract. It
does not prove provider token revocation, physical deletion, decoder isolation,
Australian routing, quota transaction isolation, mobile reconciliation or
restoration. Those require implemented service/device evidence and provider
review.

## 14. Owner decision

Syed Ahmed accepted this exact contract, including disabled resumable upload,
byte-zero retry, immediate fragment cleanup with a one-hour verification ceiling
and all retained limits, on 15 September 2026. He authorized activity completion,
commit and GitHub publication with the final `SP-011` evidence.
