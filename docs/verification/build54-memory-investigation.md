# Build 54 memory investigation

19 October 2026. Build 54 source `730851a0ade665f30ab335c0dddc5052e0cc165f` on `feat/sp014-local-camera-feasibility` passed native verification in Codemagic `6ad55079fe02de86d4f98ed2`. Final Flutter gates and signed package verification passed. The earlier request returned HTTP 402; the owner subsequently enabled pay-as-you-go. Do not describe the physical-device memory problem as fixed until accepted on iPhone.

## What the evidence establishes

Build 53 fresh-launch analysis reached frame 384 in 26.7 seconds before the 128 MiB headroom guard. Footprint increased about 74.9 MiB between pose-completed frames 370 and 380. Cleanup released about 107.6 MiB but left approximately 3,147.9 MiB. The initial snapshot was overwritten by the eight-entry ring, so the fresh-launch baseline is unknown. An earlier attempt started near 3,079 MiB and stopped at frame 1. Guard behavior is confirmed; exact allocation ownership and earlier termination causes remain unproven.

Source inspection found no frame-image array: counter history retains scalar/coordinate records. Optical flow replaces one previous grayscale frame; the bridge uses ARC and ONNX C++ RAII. Per-frame autorelease scopes already exist. These observations rule out obvious source-level accumulation patterns, not internal runtime caches or all leaks. Library thumbnails retain players while mounted, including under review routes, but are not proven to explain the growth during inference.

## Concrete allocation change

Previously the orientation method allocated a new full-resolution IOSurface-backed CVPixelBuffer every frame. For 720 by 1280 BGRA, pixel storage alone is about 3.52 MiB per buffer, before alignment/framework overhead. The candidate retains one destination and rewrites it during serial analysis; it replaces that buffer only if output dimensions change. This removes that per-frame destination-allocation pattern without resizing the input, changing timestamps, thresholds, models or count rules. The algorithm remains Lite v5, and the 128 MiB guard is unchanged.

The pinned upstream [MPPImage implementation](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/core/sources/MPPImage.m) balances its pixel-buffer retain/release. Its [pixel conversion implementation](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/core/utils/sources/MPPImage%2BUtils.mm) copies BGRA input into separately owned RGBA image storage before inference. Combined with synchronous serial calls, this supports reusing the input destination after a call returns. It is not evidence that Core Image caused the observed leak, nor proof of a production fix. Native pixel/reuse tests must pass before delivery.

## Diagnostic changes

Preserve the initial loading snapshot separately. Add post-decode, post-ball and post-frame-autorelease checkpoints. Existing pose-entry and pose-completed readings delimit flow and pose. Keep latest footprint per fixed stage, the last eight events, and twelve post-release snapshots sampled every sixty frames. Terminal events preserve the last frame number instead of resetting it to zero. These are bounded numeric diagnostics, with no identities, paths, images or automatic uploads.

The next device log should distinguish starting memory from accumulated retained memory and narrow which interval grows. Stage differences remain process-wide readings, not allocator attribution; concurrent UI/decoder work can affect them.

## Verification and next steps

Local Flutter static analysis passed. Repository contract checks passed. Native tests were added for destination identity across 100 conversions, rewritten pixel content and replacement on rotated dimensions. Existing matched Full/Lite 600-frame native tests now require the new diagnostics and bounded output. These native tests subsequently passed in the single paid attempt below. Signed delivery is verified below.

Complete the final Flutter/enabled-feature gates and signed package checks before publishing an installable build. Keep personal footage local. Then test one existing owner round and compare starting, post-release and terminal footprint. If growth persists, use the stage evidence to isolate decoding/conversion, ball/flow or pose instead of swapping models blindly.

## Paid CI continuation

Owner enabled pay-as-you-go and requested optimized usage. One manual M2 attempt was started: `6ad55079fe02de86d4f98ed2`, source `730851a0ade665f30ab335c0dddc5052e0cc165f`. This supersedes the billing block above; completion succeeded. Added dependency caching for Dart, CocoaPods, hash-verified model assets and the two pinned native archives. Native binaries are rebuilt rather than trusting a stale compiled framework. Timeout reduced from 60 to 40 minutes; no automatic triggers/retries or additional concurrency. Required test gates remain enabled. Cache benefit will need measurement across runs; this initial run populates it.

Future usage: local preflight first, batch changes, no app build for documentation-only updates, and inspect failure evidence before another paid attempt. At the published M2 rate, 20–30 billed minutes would be $1.90–$2.85; the invoice determines actual charges. Do not imply the timeout is a spending cap across runs.

## Native verification result

43 tests executed: 42 passed, one existing simulator skip, zero failures. The new test verified identical destination identity across 100 conversions, rewritten pixel content, and replacement when rotated dimensions change. Full and Lite each completed the same 600-frame portrait workload through the production entry point; retained initial readings, post-pool samples, stage measurements and bounded diagnostic output passed.

| Pose | Whole-job time | Initial footprint | Peak sampled footprint | Completion footprint |
|---|---:|---:|---:|---:|
| Full | 65.68 s | 202.7 MiB | 378.2 MiB | 206.4 MiB |
| Lite | 58.27 s | 206.4 MiB | 316.2 MiB | 206.9 MiB |

These are simulator process readings from Full then Lite in the same process. Cross-run speed changes can reflect CI load and cache/order effects; they are not proof of optimization magnitude. The 3 GiB phone growth was not reproduced here. Reusable-buffer behavior is tested, but physical-device benefit remains unverified.

## Signed delivery and paid-run record

247 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 42 native tests passed (one existing simulator skip). Static analysis and signed package verification passed.

[Internal build 54](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ad55079fe02de86d4f98ed2). IPA 100,104,810 bytes; SHA-256 `8d0e8d3f0326eff854e1aeab99489dfaf62594cfe95feaf0b4455c874b676e6a`. Verified package integrity, bundle/version/build, pinned model hashes, provisioning/signature resources and isolated native bridge.

One paid attempt, 19 October 2026 10:04:30–10:27:06 Sydney time: 22 minutes 36 seconds elapsed. At $0.095/minute that is approximately $2.15, not an invoice amount; billing rounding/tax may differ. Dependency caching was enabled on this run; future savings remain unmeasured. No automatic retry was used.


## Build 54 physical-device result and focused follow-up

The owner's fresh-launch build 54 log confirms the problem remains. Initial process footprint was 225.7 MiB. Post-frame-pool footprint rose from 415.9 MiB at frame 0 to 880.3 at frame 60, 1320.7 at 120, 1761.6 at 180, 2200.3 at 240, 2639.9 at 300 and 3074.6 at 360. The warmup-excluded slope is approximately 7.32 MiB/frame. The unchanged low-memory guard stopped analysis at frame 384 / 28.3 seconds with peak sampled footprint 3251.6 MiB and 124.4 MiB headroom. Cleanup left 3141.4 MiB. Thermal state was nominal. Counting remains unavailable; the handled stop is not a successful analysis.

This disproves an already-high fresh-launch baseline as a necessary explanation and shows that destination-buffer reuse alone did not resolve accumulation. Process-wide stage readings do not identify the owner of allocations; similar byte sizes and small immediate pose deltas are not proof of a particular component.

One focused M2 diagnostic run was authorized and started at source `3f48b21ce4a4a43efe98adf98a33f33421baca67`, Codemagic `6ad55a8160ff6987c5fa7c52`. It compares decoder-only, orientation, ball inference and optical flow passes, then the existing Full/Lite production-entry tests, using optimized Swift (`-O`) in the simulator. Only repository-owned synthetic footage is used. No signed app, counter change or new release is included. The workflow has a 25-minute timeout and no automatic retry. Simulator results cannot establish physical-device stability.


## Optimized Swift isolation results

Both targeted native tests passed (zero failures). The actual Runner compiler command contains `-O`; this is verified from the log, not inferred from the workflow setting. All four cumulative stage passes processed 240 frames. Values below are process footprint in MiB, sampled after the frame autorelease pool:

| Cumulative pass | Frame 60 | Frame 239 | After session cleanup |
|---|---:|---:|---:|
| Decode | 208.24 | 208.29 | 199.90 |
| Decode + orientation | 235.04 | 235.60 | 205.67 |
| Above + ball inference | 246.87 | 254.85 | 207.31 |
| Above + optical flow | 266.18 | 268.20 | 207.75 |

The full production-entry pipeline also completed 600 frames per model:

| Pose | Time | Initial footprint | Peak sampled | Completion footprint |
|---|---:|---:|---:|---:|
| Full | 80.06 s | 212.81 | 357.92 | 210.07 |
| Lite | 66.63 s | 210.09 | 310.82 | 210.32 |

Lite post-pool footprint was 303.70 MiB at frame 60 and 304.03 at frame 540. The phone's approximately 7.32 MiB/frame accumulation was not reproduced. Optimized Swift alone is therefore insufficient to reproduce it in this environment; neither a device-specific decoder/graphics/runtime path nor content-dependent behavior is ruled out. Full showed smaller stepwise growth before releasing memory, not the phone's steep slope. These tests assess memory/completion, not touch-count accuracy.

Limitations: one simulator run, synthetic portrait fixture, fixed pass order and shared process, Debug Flutter engine with optimized native Swift rather than full Release equivalence. The orientation pass creates an analyser session even though it does not execute inference; compare warmed samples rather than attributing initial model allocation to rendering. Flow is called, but the report does not count direct/fallback branch coverage. No personal footage was uploaded.

Recommendation: retain the current memory guard and Lite counter while diagnosing. The next useful experiment is one signed diagnostic build with selectable decode, orientation, ball, flow, pose and full passes on the same local saved round. Collect bounded post-pool and post-session memory samples; run separate fresh launches to control carryover. A pose-only pass and optional software-renderer comparison would help separate MediaPipe from device graphics behavior. Do not claim a fix or spend on repeated simulator/model substitutions without discriminating evidence. Build 54 remains the latest signed app; this run produced diagnostic artifacts only.
