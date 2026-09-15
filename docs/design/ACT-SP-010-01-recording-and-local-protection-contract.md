# ACT-SP-010-01 — Recording and local-protection contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-010-01` — Accept integrated outcome: Fix recording and local-protection contracts |
| Source | `SP-010` — Fix recording and local-protection contracts |
| Contract version | 1.0 accepted |
| Review date | 15 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; `ACT-SP-010-01` and `SP-010` complete as design/specification work |
| Repository base | `b21410255d546451a5a3e9a81b99aceae5b901d8` on `main` |
| Executor | Codex acting as delivery/design agent |
| Accountable decision owner | Syed Ahmed acting as interim mobile/product decision owner for this design contract |
| Required later verification | Named mobile lead and device QA on representative iOS and Android devices |
| Predecessors | Accepted `ACT-SP-001-02`, `ACT-SP-008-01` and `ACT-SP-080-03` |
| Deliverable | Integrated recording, timing, interruption, finalization, permission and device-protection contract |

## 1. Contract boundary

This contract fixes the product behavior that later mobile implementation and
device feasibility work must satisfy. It does not claim that a mobile app,
camera adapter, protected database, encryption-key lifecycle or crash recovery
has been implemented or tested.

The contract covers:

- grouped exercise clips and full-session recording;
- single-camera capture plus an optional capability-detected dual-camera mode;
- work, programmed rest, manual pause and system interruption behavior;
- authoritative clock and media timestamp sources;
- local stopping, finalization, recovery and truthful status;
- independent camera and microphone controls;
- app-private files, backup exclusion, account locking and key custody; and
- deliberate export without claiming control of external copies.

Cloud upload, retention, quota and deletion races are specified by `SP-011`.
Device database tables, WAL/temp-file protection and synchronization are
specified by `SP-047`. Measured device limits belong to `SP-126`, `SP-014` and
`SP-015`. Branded composition and external-copy semantics remain governed by
the accepted `SP-080` contract.

## 2. Recording modes

The recording mode is selected before capture begins and is recorded in the
session snapshot. Changing mode during an active session is not supported in
the first implementation; the user finishes or discards the current attempt and
starts a new one.

| Behavior | Exercise clips | Full session |
|---|---|---|
| Active exercise/work | Record one grouped clip or part for the active exercise | Record into the current full-session part |
| Programmed rest | Do not record; retain the rest interval in session history | Continue recording; mark the rest as a chapter interval |
| Manual Pause | Stop practice timing and close the current capture part | Stop practice timing and close the current capture part |
| Resume after Pause | Start a new clip/part when capture is confirmed | Start a new full-session part when capture is confirmed |
| Interruption | Preserve finalized/recoverable parts and record a truthful gap | Preserve finalized/recoverable parts and record a truthful gap |
| Review | Group playable clips under the session and exercise attempts | Present one logical session made from ordered parts and chapter metadata; do not duplicate the source video merely to create chapters |

Practice without camera remains a valid route. It records session history and
timing but creates no video object and must never display `REC` or a saved-video
claim.

### 2.1 Camera topology

Single-camera capture is the supported baseline on both iOS and Android. The
user selects one available front or rear camera before recording.

Dual capture is an optional enhanced mode, not a universal launch promise. On
iOS it may be offered only when the device and selected camera combination
report multi-camera support at runtime and the proposed formats remain within
the measured hardware/system-pressure budget. Android requires its own
capability and concurrent-camera checks; iPhone support cannot be generalized to
Android devices.

Apple exposes simultaneous inputs through
[`AVCaptureMultiCamSession`](https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/),
reports compatible combinations through
[`supportedMultiCamDeviceSets`](https://developer.apple.com/documentation/avfoundation/avcapturedevice/discoverysession),
and requires the app to remain within the reported hardware and
[`systemPressureCost`](https://developer.apple.com/documentation/avfoundation/avcapturemulticamsession/systempressurecost).

| Topology | Source treatment | Required behavior |
|---|---|---|
| Single | One original camera source | Baseline behavior; available even when dual capture is unsupported |
| Dual | Two separately identified, synchronized original sources | Preserve both sources; identify primary/secondary camera and shared timing relationship |
| Dual presentation/export | Replaceable layout references the two originals | Picture-in-picture, split or selected-angle output is derived; never destructively bake over or replace either original |
| Unsupported/over-budget dual request | No dual capture starts | Explain the limitation and offer a truthful single-camera choice |
| Dual source failure | Close the current dual part and enter `interrupted` | Offer explicit Resume using a supported single or dual topology; the new part records the changed topology |

Dual capture does not mean that every physical iPhone lens can run together.
The adapter uses only camera sets and formats reported as concurrently supported
on the current device. It must not silently reduce quality, frame rate or camera
count after the user has started recording; any negotiated reduction is shown
before capture, while a runtime fallback creates an interruption and new part.

## 3. Authoritative clocks and timestamps

Four clocks remain separate:

| Clock | Authority | Use |
|---|---|---|
| Training clock | A platform-appropriate monotonic elapsed-time source owned by the session engine | Work/rest countdowns, active time and manual-pause exclusion |
| Capture clock | Recorder/media presentation timestamps for each source in each part | Actual playable duration, part-relative offsets and dual-source synchronization |
| Session presentation clock | Ordered part durations plus explicit gap/chapter metadata | Review timeline without inventing missing frames |
| Wall-clock audit time | System UTC time, recorded with device/time-source context | Human-readable event history only; never duration arithmetic |

The training clock never derives its duration from an exported video. The
capture clock never assumes that wall-clock time equals playable media. A clock
correction, time-zone change or unreliable user-set date cannot add training
credit or alter chapter offsets.

The session engine accumulates training elapsed time only while its phase is
`work_running` or `rest_running`. Manual pause and a system interruption move the
session to a non-running phase. The user explicitly resumes after the app has
restored a truthful camera/recording state; hidden countdown time is not added.

During live capture, the UI may show the recorder's current elapsed estimate.
After finalization, stored media timestamps are authoritative and the durable
receipt is reconciled to them. Material mismatches become visible diagnostic
failures rather than silently rewritten training history.

In dual mode, both sources share one session/part identity but retain their own
media timestamps. The adapter records their common synchronization basis,
measured start offset and drift. Device thresholds in `SP-126` determine the
maximum permitted skew/drift; an unmeasured or exceeded result cannot be labelled
a synchronized dual capture.

## 4. Session and recording state contract

Session state and capture state are related but independent. A session may
continue in no-camera mode after capture stops.

### 4.1 Session states

```text
prepared
  -> work_running <-> rest_running
  -> manually_paused -> resuming -> work_running|rest_running
  -> interrupted -> resuming -> work_running|rest_running
  -> finishing -> completed|completed_with_gap|session_failed
```

### 4.2 Capture-attempt states

```text
not_requested
  -> permission_pending
  -> starting
  -> capturing
  -> stopping
  -> finalizing
  -> saved|partial_recovered|recovery_needed|failed|cancelled
```

The UI displays `REC` only after the camera/recorder confirms `capturing`.
`Starting camera`, `Recording`, `Saving`, `Saved on this device`, `Recording
interrupted`, `Partial recording recovered` and `Save failed` are distinct
states. `Saved` is prohibited while the attempt remains in staging or has not
passed the local verification checks.

`Stop recording` is immediate and is never hidden behind a guardian gate or a
confirmation dialog that leaves the camera active. Destructive deletion may ask
for confirmation only after capture has stopped.

## 5. Pause, rest and interruption semantics

| Event | Training clock | Capture | Required record and user-visible result |
|---|---|---|---|
| Programmed rest, exercise mode | Rest clock runs | No capture | Rest interval remains in session history; no video is implied |
| Programmed rest, full-session mode | Rest clock runs | Continues | Rest chapter points to real source frames |
| Manual Pause | Stops | Current part closes | Pause event and gap start are durable; display `Paused — not recording` |
| Manual Resume | Restarts only after explicit resume | New part starts after confirmed capture | Gap ends at confirmed resume; never backfill frames |
| Camera/OS interruption | Stops and enters `interrupted` | Current part closes if possible | Preserve cause category, known timing and last valid part; display interruption |
| App moves to unsupported background state | Stops and enters `interrupted` | Stop/close as platform permits | No background-capture guarantee; explicit resume is required |
| Microphone loss while camera remains valid | Continues | Video continues silently | Record audio-state transition and display `Microphone off` |
| One source fails during dual capture | Stops and enters `interrupted` | Close the dual part; preserve both valid source fragments | Show which view stopped and require explicit single/dual Resume into a new part |
| Storage/thermal/device failure | Stops | Stop and attempt bounded finalization | Show the actual saved, partial, recovery-needed or failed result |

A gap is metadata between parts, never fabricated footage. Known wall duration
may be shown as an interruption gap, but unknown duration is labelled unknown.
The product does not silently present ordered parts as an uninterrupted capture.

## 6. Local stop, finalization and recovery

Each attempt owns a unique operation directory inside app-private storage. The
directory contains only that attempt's staging media, a minimal recovery journal
and sanitized integrity metadata. A retry receives a new attempt identifier and
must not overwrite a previously finalized source or another attempt's staging
area.

### 6.1 Normal finalization

1. Stop accepting new frames/audio and close the current recorder part.
2. Flush the recovery journal and close media handles.
3. Verify that every proposed part exists, has a permitted container/stream
   structure, has internally consistent duration metadata and is locally
   playable by the supported adapter.
4. Reconcile capture timestamps, training events, chapters and gaps.
5. Atomically publish the verified catalog/receipt and move or rename owned
   staging media into its final app-private location.
6. Only then display `Saved on this device`.

Failure before step 5 leaves no falsely finalized asset. Failure after an atomic
publish is treated as saved and is reconciled idempotently on the next launch.

### 6.2 Recovery after termination or device pressure

On the next safe app launch, recovery scans only app-owned attempt journals. It
does not recursively inspect arbitrary device paths. For each incomplete
attempt, it may:

- finalize verified closed parts as `partial_recovered`;
- retain bounded owned staging as `recovery_needed` for a later retry;
- discard an empty/unplayable staging artifact only through the separately
  defined cleanup route; or
- mark `failed` while preserving the session event and diagnostic category.

Recovery never claims missing frames, repairs by changing a previously finalized
source in place or deletes another session. Storage-full handling first stops
capture, then attempts to close the current valid fragment within a bounded
reserve. The implementation must measure and approve that reserve per supported
device; this design contract does not invent a numeric threshold.

Local-only media can be lost if the device is lost, damaged, replaced or the app
is uninstalled. Account recovery is not recovery of a file that was never
uploaded. The product states this before a user relies on local-only storage.

## 7. Camera and microphone controls

- Camera and microphone permissions, toggles and status indicators are
  independent.
- Microphone recording defaults off. The app requests microphone permission only
  when an authorized adult/adult player deliberately enables it.
- Camera denial or revocation offers no-camera practice. It does not create a
  placeholder video or false recording state.
- If camera access is lost during capture, the current part stops. Practice may
  continue only in a truthful no-camera/interrupted state or after explicit
  resume once capture is confirmed again.
- If microphone access is denied, disabled or revoked while camera capture
  remains valid, the video continues silently and the audio-state transition is
  recorded. No synthetic or cached microphone audio is inserted.
- Front/rear camera selection occurs before capture. A mid-session switch closes
  the current part and starts a new confirmed part; it is not represented as one
  continuous camera stream.
- Dual capture is shown only when runtime capability and the preflight resource
  budget pass. The UI identifies both selected cameras and the primary view.
- Dual originals are captured as separate synchronized sources. A live preview
  layout or later picture-in-picture/split export is presentation metadata, not
  permission to replace the originals.
- One microphone track is selected deliberately for the attempt. Dual camera
  inputs do not create two undisclosed audio tracks or initialize a second
  microphone path.
- Losing either dual source closes the current dual part. Continuing with one
  camera requires explicit Resume and produces a new single-camera part; the app
  never silently labels mixed topology as continuous dual capture.
- A camera preview is not proof that bytes are being recorded. Likewise, a
  recording indicator is not proof of final save.
- The product never initializes the microphone merely because demonstration or
  spoken-cue audio is playing.

## 8. Device protection, backup, lock and keys

| Boundary | Required contract |
|---|---|
| File location | Recordings, thumbnails and staging fragments remain in app-private protected files, not public gallery folders or database BLOBs |
| OS/cloud backup | Personal media, keys, journals and sensitive caches are excluded from unintended OS/cloud backup and gallery synchronization; `local only` cannot become an implicit upload |
| Key custody | Cryptographic keys and authentication secrets use platform secure storage/key facilities; raw key material is absent from preferences, SQLite rows, logs, analytics, support evidence and repository files |
| Account/context isolation | Every media/catalog record has one canonical owner context; workers receive only the exact context/operation capability they require |
| Device/app lock | Returning to protected media requires the verified application account boundary and the platform protection appropriate to the device state; a shared device passcode or child biometric is not guardian authority |
| Sign-out/profile switch | Reusable adult authority is cleared from ordinary memory; another profile cannot list, preview or export retained media; removal of unsynced local media is a separate explicit choice |
| Key loss/rotation | Key references and versions are recorded without key bytes; unrecoverable local-only data is reported honestly; no invented recovery backdoor or end-to-end-encryption claim |
| Export | Current media authority is checked immediately before app-controlled export and again before an OS copy/share handoff; the original remains unchanged |
| External copy | After a successful Photos/files/share handoff, the app states that the external copy may remain after in-app deletion and cannot be remotely guaranteed deleted |

For a social-media share, the app first creates the separately authorized
branded export defined by `SP-080`. That export always receives the fixed
two-second Soccolo intro. The four-second outro remains an explicit option and
is off by default. The user then deliberately opens the operating-system share
handoff for that export. Neither intro nor outro is written into the original
single- or dual-camera recording, and opening a share sheet is not proof that a
social destination received the file.

Exact iOS Data Protection classes, Android Keystore/storage mechanisms,
database encryption choices, backup manifests and key-rotation procedures are
implementation decisions under `SP-047` and must be verified under named device
configurations. They must satisfy this boundary without claiming that managed
service encryption is end-to-end encryption.

## 9. Durable receipt and privacy-minimized diagnostics

Each capture attempt records, without credentials or playable paths:

- session, attempt and part identifiers plus owner-context reference;
- recording mode, exercise/plan snapshot and contract version;
- monotonic training-state transitions and UTC audit timestamps;
- camera topology, per-source position/camera type, primary/secondary role,
  orientation, microphone state transitions and permission result categories;
- per-source capture/media timestamps, synchronization basis, start offset,
  measured drift, duration, dimensions, rotation, container/codec and part
  status;
- interruption/gap categories and whether duration is known;
- finalization/recovery state, integrity result and sanitized failure category;
- final app-private asset reference and content digest or equivalent integrity
  record; and
- export/copy receipts only when the separate deliberate action occurs.

Diagnostics exclude faces, frames, audio, child/player names, raw local paths,
tokens, secure-storage identifiers, key bytes and playable URLs. Evidence using
real participant media requires separate consent and restricted handling;
synthetic or consenting-adult fixtures are the default.

## 10. Truthful failure language

| Observed condition | Allowed product claim | Prohibited claim |
|---|---|---|
| Recorder confirmed and active | `Recording` | `Saved` |
| Stop requested, media closing | `Saving…` | `Saved` or `Backed up` |
| All local verification passed | `Saved on this device` | `Backed up` unless cloud verification separately passed |
| Some closed parts recovered | `Partial recording recovered`; show gaps | `Complete recording` |
| No playable part recovered | `Recording could not be saved` | `No data was lost` |
| OS killed/backgrounded the app | `Recording interrupted`; actual result after recovery | `Recording continued in the background` without device evidence |
| External copy API succeeded | `External copy created` | `The app can delete every copy later` |
| User opened share sheet | `Share handoff opened` | `Delivered` without a reliable destination receipt |

The app never guarantees continuous camera capture across every OS
interruption, incoming call, permission loss, storage exhaustion, thermal event,
power loss or forced termination.

## 11. Required downstream evidence

Before implementation or feasibility work may claim compliance, attach evidence
from named representative iOS and Android devices for:

1. both recording modes with demo/cues and timers active;
2. programmed rest, manual Pause/Resume and multiple-part review;
3. foreground/background, phone/camera interruptions and explicit resume;
4. camera denied/revoked and no-camera continuation;
5. microphone off, enabled, denied and revoked, including silent output checks;
6. Stop during work/rest, repeated Stop, forced termination and next-launch
   recovery;
7. storage-low/full, thermal pressure, orientation and front/rear camera changes;
8. dual-capable and dual-incapable devices, supported camera sets, preflight
   hardware/system pressure, source synchronization, one-source failure and
   explicit single-camera fallback;
9. local file protection, backup/gallery exclusion, sign-out/profile isolation
   and lost-key behavior;
10. deliberate branded social export, optional outro, copy authority and
   unchanged single/dual source evidence; and
11. redacted receipts proving timestamps, parts, gaps and truthful terminal
    states without retaining participant media in ordinary evidence.

## 12. Acceptance mapping

| Source criterion | Contract evidence | Review assessment |
|---|---|---|
| `AC-SP-010-01` — Both modes | Sections 2 and 5 | Accepted for design |
| `AC-SP-010-02` — Work/rest versus manual Pause | Sections 2, 3 and 5 | Accepted for design |
| `AC-SP-010-03` — Interruption gaps | Sections 4–6 | Accepted for design |
| `AC-SP-010-04` — Timer source | Section 3 | Accepted for design; device clock adapters remain untested |
| `AC-SP-010-05` — Local finalization/recovery | Sections 4, 6 and 9 | Accepted for design; runtime evidence remains required |
| `AC-SP-010-06` — Microphone/camera controls | Sections 5 and 7 | Accepted for design; permission/device evidence remains required |
| `AC-SP-010-07` — Backup/export/lock/key behavior | Sections 8–10 | Accepted for design; platform mechanisms remain to select and test |
| `AC-SP-010-08` — No guaranteed capture claim | Sections 5 and 10 | Accepted for design |

## 13. Review limits

Acceptance of this document completes `SP-010` only as a design contract.
It would not claim working single- or dual-camera capture, durable files, secure
key storage, operating system backup exclusion, crash recovery, export
enforcement or supported-device performance. Those claims remain blocked until
the implementation and device evidence named above exist.

## 14. Owner decision

Syed Ahmed reviewed and accepted this exact contract on 15 September 2026. He
authorized `ACT-SP-010-01` and `SP-010` to be marked complete and the isolated
contract, evidence, decision and generated activity-map changes to be committed
and published to GitHub.

This acceptance fixes the design contract only. The named implementation,
representative-device, mobile QA and security evidence remains mandatory before
Soccolo claims working or supported single/dual capture and local protection.
