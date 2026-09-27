# SP-016 current-state review — interruptions, storage, recovery, heat and battery

| Field | Review record |
|---|---|
| Review date | 27 September 2026 |
| Source family | [SP-016 — Test media interruptions and device limits](../delivery/soccer_delivery_backlog.md#sp-016--test-media-interruptions-and-device-limits) |
| Planning source | `5e2932cdb2825af429492cbc80b6c7dc2e601cff` |
| App source reviewed | `d8d4b757bed7df3f42ed4c220c7d898ee25dae14` |
| Recovery-fixture source | [`8bc319b`](https://github.com/sumarahmed/Soccolo-app/commit/8bc319b83b7f6c033e07d89cb9b4591e6f368a2e) |
| Validation repeated | `node tools/dev/verify.cjs` — SP-016 18/18; complete local verification passed |
| Accepted device input | [SP-015 bounded iPhone evidence](ACT-SP-015-03-iphone-full-session-acceptance.md), build 7 on iPhone 16 Pro Max |
| Disposition | **SP-016 remains open. Implement the recovery/storage boundary before the controlled device matrix.** |

## Executive assessment

SP-016 is the recommended next media family. SP-014 and SP-015 now provide the
bounded iPhone clip and full-session inputs that the 20 September family review
did not have. The 18-case synthetic fixture is useful as a state-transition
specification and passes locally. It does not yet implement or prove the same
behavior in the Flutter/iOS recorder.

The current app can stop an ordinary foreground recording, copy it to app
support, verify playability and show a truthful error when that path throws.
It also produced a measured 30-minute two-part full session. The remaining
SP-016 risk is concentrated at the boundaries: low space, process death while
starting/finalizing/publishing, persisted-state recovery, native capture
interruptions, and thermal/battery pressure. Those boundaries must be fixed
before deliberately stressing the physical phone.

## Implementation progress — 27 September 2026

The first recommended implementation slice now exists in the private app
working tree based on `d8d4b757bed7df3f42ed4c220c7d898ee25dae14`, prepared as
Soccolo Mobile `0.1.0 (8)`. It is not yet committed, built on iOS or exercised
on the named phone, so it is implementation preparation rather than accepted
SP-016 evidence.

The slice adds:

- a persisted `starting` manifest before native capture starts and a separate
  confirmation transition before the UI may claim `REC`;
- recoverable `manifest.next.json` / `manifest.previous.json` replacement
  instead of deleting the canonical manifest first;
- cold-launch reconciliation that checks safe app-owned filenames, exact
  recorded byte length and actual media playability before listing a session
  as saved;
- quarantine markers for missing, changed, unreadable or foreign media rather
  than a stale **Verified local sessions** row;
- full-session iOS available-important-capacity preflight with planned-capture,
  finalization-copy and protected-floor accounting;
- iOS battery, Low Power Mode and thermal snapshots at preflight/finalization;
  and
- iOS backup-exclusion and file-protection application with read-back of the
  backup flag for manifests and finalized video parts.

Local results for this slice are: Flutter analysis clean, 28/28 Flutter tests
passed, the full repository verifier passed (including the existing 18/18
SP-016 synthetic cases), and an Android debug APK compiled. Five new recovery
tests plus two reserve/rotation cases cover disk re-verification,
missing/changed/unreadable quarantine, foreign-path refusal, journal
replacement, interrupted-rotation restoration and reserve calculation. The
accepted support claim does not change from these local results.

Still required before the controlled iPhone matrix: an iOS compile/signed
candidate, native interruption/runtime-error and capture-pressure reason
capture, deterministic runtime write/finalization failure injection, recovery
or truthful quarantine of unfinished native camera output, physical-device
results and independent QA.

## Findings

### F1 — Blocker: the tested recovery state machine is not integrated with the recorder

`workers/media/local-recovery.cjs` is a dependency-free Node fixture. Its
attempt map, byte count and `journalDurable` value exist only in memory. The
Flutter recorder does not import or reproduce this state machine, and a new
process cannot reload the fixture's attempts. Similarly, `backupExcluded` is
only a Boolean in the test model; the iOS runner does not set or verify the
corresponding file resource value.

Consequently, the 18 passing tests establish contract preparation, not
`AC-SP-016-02` recovery or a durable-journal implementation. The current
[local evidence record](SP-016-local-recovery-evidence-2026-09-26.md) states
that limit correctly and must remain the interpretation.

### F2 — High: a persisted `saved` claim is trusted before its files are re-verified

`FullSessionPage._findLatestSavedSession` and `FullSessionLibraryPage._load`
select a session from manifest fields (`state == saved` and part
`verified == true`). They do not first confirm that every source file still
exists, has the recorded nonzero size and digest, contains a readable video
track, and has a usable duration. Playback discovers a missing or corrupt part
only after the user opens a chapter.

This can present a corrupt or missing session in **Verified local sessions**
and enable **Review latest verified full session**. That conflicts with
`AC-SP-016-03`, which forbids a false saved claim. Cold-launch reconciliation
must demote or quarantine the session before it appears in a saved library.

### F3 — High: the full-session journal replacement has a process-death window

`_writeManifest` flushes `manifest.partial.json`, deletes the prior
`manifest.json`, and then renames the partial file. Termination between delete
and rename leaves no canonical manifest. Starting native recording also occurs
before the first manifest write completes, so termination can leave camera
output without a durable owned attempt record.

Use one native filesystem transaction boundary: persist an owned `starting`
record before capture, update it to `recording` only after native start
confirmation, and replace the journal atomically without deleting the last
known-good record first. Recovery must scan only app-owned attempt directories
and treat every unknown or partial state as not saved.

### F4 — High: no real storage reservation or finalization-space calculation exists

The mobile app does not query available capacity or reserve it before capture.
The fixture checks an abstract capacity, but it does not reserve bytes at
preflight and can overcommit if more than one ready attempt exists. The real
finalization path also copies the camera-plugin temporary file to staging,
temporarily requiring both copies on the same volume before verification and
rename.

The reserve calculation therefore must include planned remaining capture,
temporary-source plus staging-copy overlap, journal/metadata overhead and a
protected floor. The measured SP-015 30-minute run produced about 1.294 GB of
original media; it is a useful sizing observation, not a universal bitrate or
support threshold.

### F5 — Medium: interruption causes and device pressure are not observable

The Flutter lifecycle handlers treat every non-`resumed` transition as the
same interruption. The iOS bridge exposes only media inspection and idle-timer
control. It does not record AVFoundation interruption/runtime-error reasons,
capture system pressure, `ProcessInfo.thermalState`, Low Power Mode, battery
level/state or available-important capacity.

This is enough for a cautious generic stop, but not enough to distinguish a
lock/background transition, incoming call/audio conflict, camera loss,
system-pressure shutdown or thermal condition in the SP-016 evidence. It also
prevents evidence-based heat/battery fallback decisions.

## Acceptance status

| Criterion | Current result | Evidence-based reason |
|---|---|---|
| AC-SP-016-01 — interruption, low storage, permission, termination, heat and battery scenarios | **OPEN** | Permission/background smoke evidence and synthetic injections exist; no complete integrated matrix, native pressure telemetry, controlled low-space run or battery/thermal run exists |
| AC-SP-016-02 — recoverable parts discoverable | **OPEN** | Ordinary stopped parts are discoverable; abrupt in-progress recovery and cold-launch quarantine are modeled only in memory |
| AC-SP-016-03 — no false saved or continuous-recording claim | **OPEN** | Foreground paths are cautious, but the saved-session library trusts persisted verification flags before checking the source files |
| AC-SP-016-04 — proposed supported-device floor | **OPEN** | One iPhone 16 Pro Max is the only accepted physical candidate; SP-016 limits have not been measured or independently reviewed |

## Recommended delivery sequence

### 1. Integrate the contract at the native storage boundary

Create one app-owned attempt directory and durable journal per source part.
Persist states such as `starting`, `recording`, `finalizing`, `saved`,
`recovery-needed` and `quarantined`. Flush the journal before native capture
starts and before every user-visible state promotion. Do not show `REC` until
native start succeeds; do not show `Saved` until the final file is re-opened,
inspected and the committed journal points to it.

Add an iOS bridge that:

- reads capacity suitable for important usage before start and during long
  capture;
- sets and then reads back the backup-exclusion value on each saved source;
- applies and verifies the accepted file-protection class;
- reports battery level/state, Low Power Mode and thermal state; and
- records AVFoundation interruption, runtime-error and system-pressure reasons.

### 2. Make launch reconciliation authoritative

On cold launch, enumerate only owned attempt directories. Re-verify every
manifest-marked saved or recovered source against existence, nonzero size,
expected digest/size, readable video track and usable duration. Publish a
recovered partial only after the same checks; otherwise quarantine it. The
library must be built from this reconciled index, never directly from stale
manifest flags.

### 3. Add deterministic failure injection around real mobile adapters

Keep the 18 contract tests, then add adapter tests for:

- insufficient space before start and storage loss during write/finalization;
- process death after journal creation, after native start, during stop, during
  copy/verification and during journal replacement;
- missing, truncated, corrupt and foreign staging/final files;
- permission denied before start and revoked while active;
- duplicate lifecycle callbacks and an interruption while finalization is
  already running; and
- battery/thermal/system-pressure telemetry mapping and fallback selection.

The injection layer should fail filesystem and native-camera operations without
filling or overheating a personal device.

### 4. Run the controlled iPhone matrix

After the integrated tests pass, run one complete SP-016 set on the named
iPhone 16 Pro Max and exact signed build. Cover exercise-clip and full-session
modes where the failure surface differs:

| Family | Minimum controlled cases | Required observation |
|---|---|---|
| Permission/camera | denied before start; revoke/loss while active | no false REC/Saved; retained earlier parts survive; explicit new Resume part only |
| Lifecycle/call | Home/background, lock, incoming non-emergency test call | exact interruption reason where available; gap labelled; no automatic continuity claim |
| Storage | reserve refusal, injected runtime write failure, injected finalization-space failure | floor preserved; existing verified media survives; failed attempt recoverable or quarantined |
| Termination/relaunch | kill at start, active capture, stop/finalize and journal publish | cold-launch reconciliation; recovered verified part or truthful loss; no stale saved row |
| Heat/system pressure | 30-minute capture with start/end and transition telemetry | no corrupt output or forced shutdown; serious/critical pressure triggers the approved degrade/stop behavior |
| Battery/power | start/end level and state, unplugged and Low Power Mode observations | measured delta and truthful result; no universal battery-life claim from one run |

Do not manufacture low storage by filling the owner's phone and do not induce
unsafe heat. Use injected failures for destructive edges and ordinary device
telemetry for the physical run.

### 5. Bound the support claim and obtain independent QA

The first floor should name only the tested iPhone 16 Pro Max, exact iOS/build,
single-camera H.264 mode(s), orientations and maximum duration that pass the
matrix. Exclude untested Android, dual capture and other Apple devices. A miss
should disable the affected mode or offer no-recording practice; it must not be
averaged away. Send the evidence bundle to the independent QA role required by
`ACT-SP-016-03` before accepting any SP-016 criterion.

## Authoritative references

Internal contracts and evidence:

- [SP-016 local recovery evidence](SP-016-local-recovery-evidence-2026-09-26.md)
- [SP-015 iPhone full-session acceptance](ACT-SP-015-03-iphone-full-session-acceptance.md)
- [SP-126 device threshold protocol](ACT-SP-126-01-device-threshold-review-packet.md)
- [SP-010 recording and local-protection contract](../decisions/SP-010-recording-and-local-protection-contract.md)

Platform references:

- [Flutter camera lifecycle and permission handling](https://pub.dev/packages/camera)
- [Apple: preparing an app for background execution](https://developer.apple.com/documentation/uikit/preparing-your-ui-to-run-in-the-background)
- [Apple: extending background execution time for crucial finalization](https://developer.apple.com/documentation/uikit/extending-your-app-s-background-execution-time)
- [Apple: AVCaptureSession state, interruption and runtime-error notifications](https://developer.apple.com/documentation/avfoundation/avcapturesession)
- [Apple: capture interruption caused by system pressure](https://developer.apple.com/documentation/avfoundation/avcapturesession/interruptionreason/videodevicenotavailableduetosystempressure)
- [Apple: system-pressure shutdown behavior](https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown)
- [Apple: volume available-capacity resource keys](https://developer.apple.com/documentation/foundation/urlresourcekey)
- [Apple: backup-exclusion resource key](https://developer.apple.com/documentation/foundation/urlresourcekey/isexcludedfrombackupkey)
- [Apple: thermal-state monitoring](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.property)
- [Apple: battery monitoring and level](https://developer.apple.com/documentation/uikit/uidevice/batterylevel)
- [Apple: file-protection levels](https://developer.apple.com/documentation/foundation/fileprotectiontype)

This review authorizes no child footage, production publishing, unsafe device
stress, new support claim or SP-016 acceptance. It supersedes the implementation
status in the 20 September SP-016 family review while retaining that review's
historical owner-reported clip observations.
