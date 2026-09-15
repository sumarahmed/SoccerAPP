# ACT-SP-047-02 — Reconciliation and F25 states

| Field | Recorded value |
|---|---|
| Activity | `ACT-SP-047-02` — Specify reconciliation and F25 states |
| Source | `SP-047` — Finalize device persistence and sync contract |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-047-02` complete as a design/specification activity |
| Repository base | `0a0044b768b028b63211076b4bdb54cb59bfda64` on `main` |
| Executor | Codex acting as Mobile design agent |
| Accountable owner | Syed Ahmed acting for the Mobile/backend leads |
| Required later reviewer | Named mobile lead/device QA; backend and security review before real participant data |
| Predecessor | Accepted [ACT-SP-047-01 protected device records](ACT-SP-047-01-protected-device-records.md), version 1.0 |
| Deliverable | Sync protocol, conflict fixtures and offline UI state table |

## 1. Scope and authority boundary

This contract defines durable offline intent, synchronization ordering,
conflict ownership, delete-wins behavior, bounded offline access and the F25
downloads/offline-status presentation. It consumes the protected per-context
vault from `ACT-SP-047-01` and the shared operation/event rules from accepted
`SP-084`.

The device expresses intent and may preserve local history. The backend remains
authoritative for identity, guardian and club relationships, consent,
withdrawal, deletion generations, published plans, content suitability,
entitlements, cloud reservations and media access. Local timestamps, cached
roles, payment state or file presence never manufacture authority.

This is a design contract with synthetic fixtures. It does not implement a sync
engine, API, database, UI or background worker and does not claim a named-device
result.

## 2. Durable operation and outbox identity

Every consequential mutation receives one opaque `operationId` when the user or
trusted local controller first expresses the intent. The same ID and normalized
payload digest survive process restarts and network retries.

The idempotency scope is:

```text
(principalId, selectedContextId, commandType, operationId)
```

The local repository atomically commits the user-visible local transition and
its `outbox_event` row in one SQLite transaction. An identical retry returns the
existing server receipt and repeats no domain or external effect. Reusing an ID
with a different digest is rejected without overwriting the original intent.

An outbox record contains only:

- operation ID, command/event type and contract version;
- selected owner/player/resource identifiers;
- normalized payload or a protected local reference and its digest;
- relevant local and last-known authoritative generations;
- dependency ordering, attempt count and bounded retry time;
- state, safe problem code and server receipt reference; and
- creation and observation times used for display, never conflict authority.

It contains no password, refresh/access token, TOTP value, raw key, reusable
upload credential, signed URL or absolute filesystem path.

### 2.1 Outbox states

```text
queued
  -> waiting_for_connection
  -> checking_authority
  -> sending
  -> awaiting_receipt
  -> succeeded
```

Any active state may move to one of these explicit outcomes:

| State | Meaning and permitted action |
|---|---|
| `waiting_for_sign_in` | Preserve safe intent; require authentication before retry |
| `retry_scheduled` | Retryable transport/service error; bounded automatic retry remains |
| `conflict_needs_attention` | A person with current authority must resolve a semantic conflict |
| `rejected_by_current_authority` | Role, consent, membership or entitlement no longer permits the action; no blind retry |
| `superseded_by_deletion` | A newer tombstone wins; the stale intent cannot be restored or resubmitted |
| `failed_needs_attention` | Terminal or exhausted retry; show a safe reason and next action |
| `cancelled_locally` | User cancelled a cancellable pending intent; an accepted server effect is not falsely undone |

An application crash between request transmission and response receipt is
resolved by querying the receipt with the original operation ID. A replacement
worker never invents another ID for the same intent.

## 3. Retry policy

Small session/progress operations may retry automatically only when the shared
problem contract says `retryable=true`. Each foreground/background sync run is
bounded to five automatic attempts over no more than 15 minutes, using
exponential backoff with jitter and any longer server `retryAfterSeconds`.
Unacknowledged durable intent remains queued for a later connectivity or
foreground run; it is not discarded because one run exhausted its attempts.

Authentication, authorization, validation, unsupported-contract and generation
conflicts stop automatic retry. A visible correction, reauthentication, client
update, conflict-resolution or cancellation route is required.

Media transfer follows the accepted `SP-011` exception: no detached resumable
upload is offered in the pilot. Five minutes without accepted progress ends a
continuous attempt, and no continuous attempt exceeds 60 minutes. Fragments are
unusable and cleanup begins. The user sees `Upload interrupted — restart`; a
new byte-zero operation requires current consent, authority and quota. Soccolo
does not automatically repeat the complete file and create avoidable transfer
or storage cost.

## 4. Fixed reconciliation order

Every reconnect, foreground recovery and manual `Try again` uses this order:

1. authenticate and confirm the selected canonical owner/player context;
2. fetch current authorization, relationship, consent, entitlement, deletion
   and minimum-client generations plus authoritative server time;
3. apply withdrawals, suppression tombstones and authorized device-deletion
   instructions;
4. if the cursor is absent, expired, context-mismatched or untrusted, hold all
   consequential pushes and perform a complete authorized resynchronization;
5. pull permitted current profiles, assignments, published content and plans;
6. submit idempotent session/progress events in dependency order;
7. re-evaluate remaining queued commands against current authority and resolve
   or expose conflicts; then
8. request eligible new media upload reservations or offer a deliberate
   byte-zero restart.

`Retry all` cannot change this sequence. An old upload, share, edit or completion
event never runs before current withdrawals and tombstones have been applied.
Bounded batches preserve progress and checkpoint the authenticated cursor only
after the batch is durably applied.

## 5. Cursor and event behavior

A sync cursor is opaque, authenticated by the server and bound to the principal,
selected context, dataset, contract version and authorization dependencies. A
device never edits or advances it itself. Context switching invalidates the
active cursor in memory.

Server events use immutable global event IDs and per-aggregate sequences. The
client durably deduplicates event IDs. A duplicate is ignored after its existing
effect is confirmed; a sequence gap is parked until missing state arrives or a
bounded authoritative reconciliation replaces the projection. No global order
between unrelated aggregates is assumed.

If a cursor has exceeded the server's supported age, the server does not rely
on a possibly incomplete delta. It returns a forced-resynchronization result.
The device first preserves its outbox, isolates the old projection, retrieves
the current authorized snapshot, applies suppression, and only then replays
still-valid intents.

## 6. Conflict ownership matrix

Timestamps do not decide consequential conflicts. Monotonic authoritative
generations, stable operation receipts and the owning domain decide them.

| Data or action | Resolution owner and rule |
|---|---|
| Identity, guardian relationship, role or membership | Current backend generation wins; removed authority cannot be restored locally |
| Consent, withdrawal, sharing grant and media permission | Current backend generation wins; withdrawal blocks old queued actions |
| Deletion and retention expiry | Newer tombstone/suppression always wins over edit, upload, restore or cached availability |
| Premium entitlement, purchase or club sponsorship | Verified backend/provider state wins; the device cannot extend a paid period |
| Published plan and content suitability | Server version governs future sessions; unavailable/withdrawn content cannot start anew |
| Completed practice session | Preserve the immutable content/plan snapshot that actually started the session |
| Practice and recording events | Append with unique IDs and per-aggregate order; duplicates create no extra session, credit or effect |
| Concurrent household plan edits | Compare base generations and show a resolvable adult conflict; silently discarding either edit is prohibited |
| Consequential player/profile correction | Authorized adult resolves a versioned conflict; age/guardian fields are never timestamp last-write-wins |
| Upload after consent, membership or allowance loss | Reject cloud operation; keep the authorized local copy where its local lifecycle permits |
| Account/context mismatch | Stop and return the privacy-safe context error; reveal no foreign resource or count |

The interface never offers `Keep mine` where the competing state is a deletion,
withdrawal, role removal, safeguarding restriction or unsupported client gate.

## 7. Delete-wins and tombstone lifecycle

An offline local delete immediately hides and removes the selected app-controlled
local copy according to `ACT-SP-047-01`, then queues a stable deletion intent if
a server/cloud effect was requested. The intent is prioritized ahead of
ordinary pushes on reconnect.

A server tombstone carries resource/owner identity, monotonically newer
generation, scope and a privacy-minimized reason class. Once observed, it:

- cancels or supersedes older queued edits, uploads and shares;
- blocks orphan-file adoption and restored metadata;
- denies current presentation before asynchronous cleanup completes; and
- remains effective across retry, account switch, reinstall/restore and worker
  replacement within the supported lifecycle.

Server tombstones remain at least until no supported stale client, queued job or
restorable copy can recreate the resource. The exact privacy-minimized retention
schedule belongs to `SP-061`; no arbitrary short TTL is introduced here. A local
suppression may be compacted only after a complete authoritative
resynchronization proves that its protection is represented by current server
state.

## 8. Accepted offline validity

Previously verified premium access and approved downloaded content may remain
usable offline for at most seven days. Effective validity ends at the earliest
of:

```text
lastAuthoritativeVerification + 7 days
verified paid/grace-period end
downloaded content offline-valid-until
explicit shorter security or content-validity boundary
```

The server-time baseline plus monotonic elapsed time is used while the process
can establish it. Wall-clock rollback, implausible clock movement, missing
baseline or elapsed-time uncertainty never extends access; the app requires a
connection before starting another premium session.

Free Starter exercises, completed history and existing authorized local
recordings remain usable after premium expiry. Expiry never deletes local media
or history. If premium validity ends during an already active session, the
session and recording may finish and save locally, but another premium session
cannot start until authority is valid again.

New purchases, publication, administrative changes, guardian/share grants,
cloud reservation/finalization and other consequential server-authorized
actions require connectivity. A fully offline device cannot receive immediate
revocation; the bounded validity and clear status are the accepted limitation.

## 9. F25 downloads and offline-status contract

F25 presents local availability, synchronization and cloud transfer as separate
dimensions. It must show:

- online/offline/reconnecting state and last successful authoritative sync;
- premium offline-valid-until date and whether verification is required;
- demonstration-pack version, actual download bytes and current device free
  space;
- download state: available, downloading, incomplete, corrupt, update
  available, update required or removed;
- queued practice/history items and queued/interrupted cloud uploads as
  separate counts;
- conflicts, current-authority rejections and deletion work without exposing
  protected detail;
- next retry or the exact manual action required;
- an account-switch warning naming counts, not private record content; and
- continued free/local access after premium expiry.

| Internal condition | Required primary copy and action |
|---|---|
| Offline within verified window | `Working offline — premium access available until {date}` |
| Offline validity unavailable/expired | `Connect to verify access before starting another premium session` |
| Pending small events | `{count} practice updates waiting to sync` with safe details and `Try again` |
| Media queued but not started | `{count} cloud uploads waiting` with local-copy status shown separately |
| Interrupted media | `Upload interrupted — restart`; no automatic full-file restart |
| Retrying small event | `Trying again…` plus cancel where cancellation is still valid |
| Semantic conflict | `Changes need your attention` and an authorized resolution route |
| Authority changed | `This action was cancelled because access changed`; no blind retry |
| Account switch with local work | `Switching accounts will lock this account's local files` plus unsynced counts |
| Premium expired | `Premium access ended. Your local recordings and completed history remain.` |
| Fully reconciled | `Up to date — last checked {time}` only when no pending, failed, conflict or deletion state remains |

Color is never the sole status signal. States require accessible text, screen
reader labels, logical focus order, large-text support and a non-animated
equivalent. The child view uses age-appropriate language without exposing
guardian, billing or security detail. `Everything synced`, `Backed up` and
`Deleted everywhere` are prohibited until their exact independent conditions
are actually verified.

## 10. Account switching and cancellation

Before an account/context switch, show unsynchronized history count, pending
upload count and local recording count. The user may switch without uploading;
the former vault is locked and its queue remains isolated for its next
authorized sign-in. Switching never copies records into the new context.

Cancelling a queued upload removes only that upload intent and does not delete
the local recording. Cancelling an unaccepted edit leaves the last durable
authoritative version visible and records the local cancellation. If the server
already accepted an effect, the client displays its receipt and requires a new
authorized compensating operation rather than pretending the effect vanished.

## 11. Fixture and verification requirements

The accepted fixture corpus contains 18 synthetic scenarios covering operation
identity, crash/receipt recovery, event ordering, cursor expiry, deletion,
withdrawal, account isolation, seven-day expiry, clock tampering, semantic
conflicts, membership removal, media restart and terminal-error handling.

The dependency-free validator must verify:

- the exact reconciliation order and seven-day maximum;
- five bounded small-event attempts within one 15-minute sync run;
- no automatic or fragment-reusing media restart;
- delete-wins outcomes before stale replay;
- stable IDs/digests and no duplicate effects;
- conservative clock behavior and continued free/local access; and
- all required F25 states and all 18 unique scenarios.

## 12. Retained implementation risks

1. Background scheduling and monotonic-clock behavior require named iOS/Android
   evidence.
2. The seven-day maximum is not immediate revocation while a device is fully
   offline; content may later require a shorter reviewed window.
3. Cursor snapshot size, batching, retry intervals and database growth require
   measurement with representative data.
4. Tombstone compaction remains blocked on the complete `SP-061` retention
   decision and proof that supported stale clients/restores cannot resurrect
   data.
5. Concurrent adult edit UX requires design/usability review; this contract
   specifies the safety behavior, not a finished screen.
6. No server receipt, client queue, migration, device clock, upload or UI state
   has been implemented or device-tested by this specification.
