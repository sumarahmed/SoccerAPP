# SP-016 build 8 — initial physical-device evidence

| Field | Evidence record |
|---|---|
| Date | 27 September 2026 |
| Source | [SP-016](../delivery/soccer_delivery_backlog.md#sp-016--test-media-interruptions-and-device-limits) |
| App source | [`17b43d76e8170bf92aac9c173270e92e9cbed722`](https://github.com/sumarahmed/Soccolo-app/commit/17b43d76e8170bf92aac9c173270e92e9cbed722) |
| Signed build | Soccolo Mobile `0.1.0 (8)`, Codemagic [`6ab8bca92e79ab5085005183`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab8bca92e79ab5085005183) |
| IPA | 29,308,657 bytes; SHA-256 `3506F5911714B4BB35B395D236C430DDEB4A4769C0B9745552826D05841441F9` |
| Provisioning | Ad Hoc; `com.soccolo.soccoloMobile`; one registered device; profile expires 18 September 2027 |
| Executor/evidence source | Owner-supplied copied in-app reports |
| Disposition | **Owner-executed physical matrix complete; build-9 UI recheck and independent QA remain** |

## Build verification

Codemagic built the exact source SHA and produced the signed build-8 IPA after
dependency restoration, the guarded H.264 patch, Flutter analysis, Flutter
tests and provisioning. Local verification had already passed 28/28 Flutter
tests, the full repository verifier including the 18/18 SP-016 contract matrix,
and an Android debug regression build. IPA inspection confirmed version/build,
bundle identifier, minimum iOS 15.0, embedded Ad Hoc profile and code-signature
resources.

## Supplied physical reports

### 60-second calibration

- protocol `ACT-SP-015-02-v1`, session `1790492562216356`;
- one rear/portrait H.264 `avc1` MP4 source;
- 60,004 ms captured and 60,035 ms playable;
- 47,358,839 bytes, 720×1280, 29.999 fps and rotation 0°;
- 37 ms start confirmation and 104 ms finalization;
- four source-offset chapters, including both programmed rests;
- verified Saved state and no rendered duplicate.

Result: **PASS for ordinary calibration operation.** Capture error versus the
60,000 ms target was +4 ms, within the accepted one-second threshold. The
average encoded rate was approximately 6.31 Mbit/s.

### 30-minute full session

- protocol `ACT-SP-015-02-v1`, session `1790492699437105`;
- one uninterrupted rear/portrait H.264 `avc1` MP4 source;
- 1,800,004 ms captured and 1,800,012 ms playable;
- 1,400,054,089 bytes, 720×1280, 29.999 fps and rotation 0°;
- 16 ms start confirmation and 3,074 ms finalization;
- five source-offset chapters, including both two-minute programmed rests;
- verified Saved state and no rendered duplicate.

Result: **PASS for ordinary 30-minute operation.** Capture error versus the
1,800,000 ms target was +4 ms, within the accepted one-second threshold. The
average encoded rate was approximately 6.22 Mbit/s. Starting the run proves
that build 8's iOS preflight obtained at least the configured
3,508,435,456-byte requirement; the exact available-capacity value was not
included in the copied report. The owner reported starting at 85% battery and
ending at 81%, a four-percentage-point decrease, with no noticeable phone
heating and no thermal shutdown or media failure. This is a useful bounded
physical observation, not a platform thermal-state log or universal
battery-life claim.

The owner also confirmed testing Pause and the other ordinary controls. The
accepted SP-015 evidence already contains a measured Pause/Resume run with an
8,091 ms frameless gap; the general statement is retained as corroboration and
is supplemented by the later full-matrix confirmation below.

## Owner-executed interruption and recovery matrix

After the ordinary runs, the owner confirmed completion of the remaining eight
device cases. The supplied enumeration explicitly named camera-permission
denial, Home/background interruption, an incoming test call, force-quit/kill,
relaunch/playback and ordinary controls; the blanket confirmation covers the
full eight-case owner matrix, including Lock and Low Power Mode, although their
individual exact messages and platform diagnostic values were not copied.

Result: **PASS at owner-evidence scope.** Permission denial did not produce a
recording, interruption/termination did not create a false continuous or Saved
claim, and previously verified media remained playable after relaunch. This is
an owner attestation, not independent QA.

One usability defect was found: after a normal completion, build 8 closed the
camera and saved the verified file but did not show a sufficiently prominent
completion message. This did not corrupt or lose the media, but it made the
successful outcome ambiguous.

## Build-9 correction

Private source `c241bfcf7cdcae170c0721994eae5e972e5b442d` adds a persistent
**Recording saved and verified** card, explains that the camera is closed and
adds storage, battery, Low Power Mode, thermal and file-policy diagnostics to
the copied session report. Codemagic build
[`6ab8f6c65e8faa6c99a0b19c`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab8f6c65e8faa6c99a0b19c)
completed successfully. Its signed IPA is 29,309,084 bytes with SHA-256
`338498428D7DA528A338CBC3CF2BDB10F52F5FE35D06DFCECA5DB99FC6E35454`.

Only a short physical recheck of the new completion card and copied diagnostics
is required; the passed 30-minute and interruption runs do not need repetition
unless that recheck finds a regression.

## SP-016 effect

This evidence establishes working signed-build installation, native Swift
compilation, H.264 capture, ordinary finalization, truthful Saved state and the
30-minute candidate on the registered phone. It does not establish the full
SP-016 failure matrix.

| Criterion | Current result after build-8 reports |
|---|---|
| AC-SP-016-01 — interruption, storage, permission, termination, heat and battery scenarios | **PASS at owner-evidence scope.** The ordinary runs and owner-confirmed eight-case matrix are complete; exact platform diagnostics were not copied |
| AC-SP-016-02 — recoverable parts discoverable | **PASS at owner-evidence scope.** Automated reconciliation/quarantine tests and owner-confirmed force-quit/relaunch/playback behavior passed |
| AC-SP-016-03 — no false Saved/continuous claim | **PASS at owner-evidence scope.** Normal runs were verified before Saved and the owner reported no false claim in the negative cases |
| AC-SP-016-04 — proposed supported-device floor | **PROPOSED, not accepted.** iPhone 16 Pro Max, exact tested iOS/build, build 8, local single-camera H.264, rear/portrait full session up to 30 minutes; other combinations excluded unless separately passed |

## Remaining gates

Install build 9 and perform one short successful capture. Confirm that the
persistent completion card appears and copy the diagnostic report. Do not
repeat the destructive/long-running matrix unless the recheck finds a
regression.

Independent QA remains required for `ACT-SP-016-03`; owner evidence is not
relabelled independent. Therefore the owner test matrix is complete, while the
SP-016 family remains in review until the build-9 recheck and independent QA
decision are recorded.
