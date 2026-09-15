# ACT-SP-011-01 — Cloud lifecycle and user-visible copy states

| Field | Recorded value |
|---|---|
| Activity | `ACT-SP-011-01` — Specify cloud lifecycle and user choices |
| Source | `SP-011` — Fix cloud, consent, deletion and recovery contracts |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-011-01` complete as a design/specification activity |
| Repository base | `0bf1b190d7cb69df44c8829f9c3a6d5c0af986fc` on `main` |
| Executor | Codex acting as Media/delivery agent |
| Accountable owner | Syed Ahmed acting as founder/backend product decision owner |
| Required later reviewer | Named mobile lead/device QA; privacy/provider review remains required before real participant data |
| Predecessors | Accepted `ACT-SP-001-02` and `ACT-SP-008-01` |
| Deliverable | Cloud lifecycle state table and user-visible copy-state specification |

## 1. Scope and boundary

This activity fixes the user choices and truthful copy states for optional cloud
media. It does not provision a provider, upload a file, approve a processor,
implement quota, create a signed link or claim Australian residency has been
verified in a deployed system.

`ACT-SP-011-02` must next define executable API invariants for reservation,
short-lived access, partial-upload cleanup, offline suppression and deletion
replay after restore. `ACT-SP-011-03` must verify all eight `SP-011` acceptance
criteria before `SP-011` can close.

The accepted `SP-008` boundary remains binding: all server-side private data,
media, processing, logs, caches, queues and recovery copies stay in Australia,
while authorized users may connect from anywhere over encrypted transport.

## 2. Authority and explicit opt-in

Cloud participation starts off for every owner context. It is never inferred
from camera permission, local recording, payment, club membership, assignment,
social export or another profile's setting.

| Actor/context | May enable or change cloud media? | Boundary |
|---|---:|---|
| Adult player | Yes, for their own player context | Requires the current notice and deliberate confirmation |
| Verified parent/guardian | Yes, separately for each authorized under-18 player | A household-wide shortcut may present multiple choices but must record each player decision separately |
| Child/player credential | No | May see age-appropriate status and stop recording; cannot grant cloud consent |
| Coach | No | Assignment or feedback does not grant media storage or access |
| Club administrator | No | A club may fund capacity but cannot enable upload for a guardian/adult |
| Billing/support staff | No | Payment and support access do not create media authority |
| Service/job | No independent decision | May execute only a current, purpose-bound operation already authorized by the owner context |

Before enabling automatic cloud copies, the adult sees and confirms:

- the selected player/owner context;
- what recordings are eligible and whether Wi-Fi-only is enabled;
- the exact allowance source and remaining capacity;
- that each verified cloud copy expires after 30 days;
- what remains on the device after cloud expiry/deletion;
- the limits of withdrawal for downloaded, exported or socially shared copies;
- that strict Australian server-side residency remains a provider gate; and
- the current notice version and a route to change the choice later.

The consent record binds actor, owner context, purpose, notice version, media
scope, allowance source, network choice, timestamp and authorization generation.
Changing the notice materially requires a new explicit choice before new
uploads; it does not silently rewrite the authority for an existing copy.

Wi-Fi-only upload is the default. Cellular transfer is a separate setting with a
clear data-usage warning. Changing network preference is not consent withdrawal.

## 3. Accepted allowance model

| Offering | Cloud media allowance | User-facing qualification |
|---|---:|---|
| Starter | None; local recording only | `Cloud copies are not included. Your recordings stay on this device unless you deliberately export them.` |
| Family | 20 GB shared across up to four player profiles | Show household total plus per-player usage; pooled capacity is not hidden from the adult owner |
| Club | 5 GB per licensed player seat, pooled with per-player safeguards | Funding does not give the club ownership, consent or access to media |
| Complimentary pilot | Explicit temporary allowance | Show capacity, sponsor/source and the date new uploads stop; do not present it as a paid subscription |

Allowances are ceilings, not expected consumption, permanent archives or a
promise that every device can upload at the maximum rate. Local practice remains
available when cloud capacity is unavailable, subject to device storage.

One upload is charged to exactly one selected allowance source. Ending a club
sponsorship or paid allowance stops new sponsored reservations. Existing
verified copies retain their original displayed expiry unless the authorized
owner deletes them or withdraws consent.

## 4. Separate local and cloud dimensions

The interface never collapses local and cloud state into one ambiguous `Saved`
label. Each logical recording shows independent local and cloud rows.

### 4.1 Local copy states

| Internal state | Required label | Meaning |
|---|---|---|
| `local_finalizing` | `Saving on this device…` | Local capture is being verified/finalized; it is not uploadable yet |
| `local_available` | `On this device` | Verified app-controlled local media exists |
| `local_partial` | `Partial recording recovered on this device` | Only identified playable parts remain; gaps are visible |
| `local_delete_pending` | `Removing from this device…` | Exact local objects are being removed |
| `local_absent` | `Not on this device` | No app-controlled local copy exists on this device |
| `local_failed` | `Could not save on this device` | No false local or cloud success claim is allowed |

### 4.2 Cloud copy states

| Internal state | Required label | Meaning/action |
|---|---|---|
| `cloud_off` | `Cloud copy off` | No automatic upload authority for this owner context |
| `upload_queued` | `Upload queued` | Local file is ready; reservation/upload has not completed |
| `upload_waiting_wifi` | `Waiting for Wi-Fi` | Consent remains current; network preference prevents transfer |
| `uploading` | `Uploading` | Bytes are transferring under a scoped reservation |
| `verifying` | `Verifying cloud copy` | Uploaded bytes remain non-readable pending server verification |
| `cloud_available` | `Cloud copy — expires {date}` | Every required object is verified and currently authorized |
| `quota_paused` | `Upload paused — cloud allowance full` | Local copy remains available; no automatic deletion is performed |
| `upload_failed` | `Upload failed — retry` | Failure is visible; retry must use current authority |
| `upload_incomplete` | `Upload incomplete` | A logical multi-object recording is not fully verified and is not called backed up |
| `cloud_delete_pending` | `Deleting cloud copy…` | New playback/share authorization is denied while deletion completes |
| `cloud_expired` | `Cloud copy expired` | Active cloud access ended; a local copy may still exist |
| `cloud_absent` | `No cloud copy` | No current active cloud media object exists |

`Backed up` may appear only as explanatory text after every required cloud
object has passed verification. The primary status remains `Cloud copy — expires
{date}` so the temporary retention is always visible.

## 5. Logical recording and object groups

A logical recording may contain multiple source parts, dual-camera views,
chapters and derived thumbnails. Copy status applies to the required object
group, not merely the first uploaded file.

- A single-camera recording includes all required source parts and metadata.
- A dual-camera recording includes both synchronized source views, all required
  parts and their relationship metadata.
- Quota is based on actual stored bytes for every required object.
- A dual recording is not `cloud_available` if only one view verifies.
- A one-source or one-part failure produces `upload_incomplete`, preserves the
  truthful local state and exposes retry/delete choices.
- A picture-in-picture, split-screen or branded social export is a separate
  derived object and is not uploaded automatically.
- If the owner deliberately stores an original group and a derived export, both
  consume allowance and have their own copy/expiry records.
- Thumbnails are subordinate to their cloud recording and cannot remain
  generally readable after that recording loses authorization or expires.

## 6. Retention start, expiry and warnings

An active cloud recording expires 30 days after the entire required object group
passes server verification. Capture time, queue time, upload start and a partial
object's verification do not start retention.

```text
expiresAt = groupVerifiedAt + 30 calendar days
```

Playback, download, retry, plan renewal, sponsor renewal, metadata repair and
routine re-verification do not extend `expiresAt`. A new post-expiry upload is a
new deliberate operation requiring current consent, capacity and a new receipt;
the old object identity is not silently resurrected.

The application shows the date while the copy is active and issues best-effort
adult notices seven days, three days and one day before expiry. Notification
delivery is not guaranteed, so the in-app date remains authoritative. At expiry:

1. deny new playback, download and share authorization;
2. mark the active object group and thumbnails noncurrent;
3. queue their active-store deletion;
4. retain the local copy if one exists; and
5. prevent automatic re-upload of the expired asset.

The user-facing term is `30-day cloud copy`. Marketing and product text must not
imply indefinite archival storage or guaranteed disaster recovery.

## 7. Turning cloud copies off

Turning the feature off is a settings change, not automatically a consent
withdrawal or deletion request.

The default action:

- prevents future automatic upload reservations for that owner context;
- cancels queued transfers;
- attempts to abort in-flight incomplete transfers and schedules their private
  fragments for cleanup;
- leaves already verified cloud copies available until each displayed expiry;
  and
- preserves all local copies.

The adult is then offered a separate, unbundled choice: `Delete existing cloud
copies now`. The interface must not preselect deletion or imply that turning off
future uploads already removed existing copies.

## 8. Consent withdrawal and deletion choices

Consent withdrawal is stronger than disabling future automatic upload. From the
accepted withdrawal generation onward, the system:

- denies new reservation, resume, finalization, playback, download and sharing;
- cancels queued work and aborts/purges incomplete private uploads where the
  provider permits;
- makes verified cloud media and thumbnails unavailable and queues deletion;
- preserves only restricted recovery copies for their separately disclosed
  bounded recovery period;
- writes suppression/tombstone state so an offline, restored or stale device
  cannot re-upload the asset; and
- explains that previously downloaded, exported, gallery or social copies
  cannot be remotely retracted.

| User action | Exact effect | Required confirmation/result copy |
|---|---|---|
| `Remove from this device` | Delete the selected app-controlled local objects only | State whether a verified cloud copy remains and show its expiry |
| `Delete cloud copy` | Revoke/delete cloud media, parts and thumbnails; suppress automatic re-upload | State whether a local copy remains |
| `Delete everywhere` | Apply both actions, revoke cloud access and queue suppression/deletion for offline clients | Explain restricted recovery processing and external-copy limits |
| `Turn cloud copy off` | Stop future automatic uploads; existing verified copies keep their expiry | Offer separate deletion; do not claim existing copies were removed |
| `Withdraw cloud consent` | Revoke the purpose/authority and delete affected cloud objects as above | Show what is immediate, what is queued, the recovery window and external-copy limits |

Account deletion, statutory retention and guardian disputes require the wider
record inventory and specialist review in `SP-061`; this media setting does not
pretend to resolve every account record.

## 9. Ending an allowance or sponsorship

When a subscription, entitlement, complimentary allowance or club sponsorship
ends:

- stop new reservations against that allowance source;
- do not interrupt an active local recording;
- preserve existing verified cloud copies until their original expiry;
- offer migration to another valid allowance through a deliberate, currently
  authorized operation; and
- never grant the payer, club or sponsor media access.

Loss of capacity is not consent withdrawal. Conversely, valid payment is not
consent and cannot revive an expired, deleted or withdrawn object.

## 10. Truthful user copy

### Enable

> Create temporary cloud copies for this player. New verified copies expire 30
> days after upload. Wi-Fi only is on. You can remove device and cloud copies
> separately. Copies you export or share outside Soccolo cannot be deleted by
> Soccolo.

### Allowance full

> Cloud allowance is full. Your recording remains on this device. Delete a cloud
> copy, wait for one to expire, or choose another available allowance. Nothing
> will be deleted automatically.

### Turn off

> Future automatic uploads will stop. Existing cloud copies will remain until
> the dates shown. You can choose to delete those copies now.

### Expiry

> This cloud copy expires on {date}. The copy on this device will remain unless
> you remove it separately. Downloaded or shared copies are outside Soccolo's
> control.

### Withdrawal/deletion pending

> New access has stopped. Soccolo is deleting active cloud files and thumbnails.
> Restricted recovery processing may continue for the disclosed recovery period.
> Copies already exported or shared cannot be remotely removed.

## 11. Handoff to ACT-SP-011-02

The following are deliberately not claimed complete by this activity:

- exact quota-reservation identifiers, byte accounting and concurrency rules;
- upload credential/reservation lifetime and the proposed five-minute playback
  link maximum;
- multipart/fragment cleanup deadlines and retry ownership;
- withdrawal/deletion races against upload and verification;
- suppression/tombstone retention and forced resynchronization;
- restricted recovery-copy expiry and deletion replay after restore; and
- executable positive/negative fixtures for all transitions.

`ACT-SP-011-02` must define these invariants without weakening the user choices
or labels in this specification.

## 12. Activity completion assessment

| `ACT-SP-011-01` check | Result |
|---|---|
| Explicit opt-in and authorized decision maker | Accepted in section 2 |
| Allowances and truthful plan qualification | Accepted in section 3 |
| Independent local/cloud copy states | Accepted in section 4 |
| Dual/multi-object recording treatment | Accepted in section 5 |
| Retention start, expiry and warnings | Accepted in section 6 |
| Turning backup off | Accepted in section 7 |
| Withdrawal/deletion notices | Accepted in sections 8 and 10 |
| Unresolved downstream inputs identified | Retained explicitly in section 11 |

Syed Ahmed accepted these exact recommendations and authorized a local Git
commit on 15 September 2026. `ACT-SP-011-01` is complete as a design activity.
`ACT-SP-011-02`, `ACT-SP-011-03` and the overall `SP-011` outcome remain open.
