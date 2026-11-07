# Build 72 local investigation · 8 November 2026

Investigation was performed locally before build authorisation. The owner subsequently authorised consolidated Build 73 on 8 November 2026; see BUILD73_RELEASE.md for shipping scope and remaining limitations. Keep full pose, the 60 fps target/30 fps fallback and all accepted decisions unchanged.

## Findings

The new D01/D17 reports disprove endpoint round-off as an adequate explanation: hundreds of finite negative values reach cropped-mask validation, down to -0.211 and -0.354 respectively. They are already present at frame 0/1 with ample available memory. These are distinct from D25's Dart evidence-retention cap.

Pinned MediaPipe 0.10.21 source exposes a concrete row-padding hazard. Its [iOS pose-result helper](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/pose_landmarker/utils/sources/MPPPoseLandmarkerResult%2BHelpers.mm) passes ImageFrame.PixelData, width and height into MPPMask without a row stride. [MPPMask](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/core/sources/MPPMask.mm) deep-copies width*height floats with memcpy. [ImageFrame](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/framework/formats/image_frame.h) explicitly permits row padding and defaults to 16-byte alignment. The actual mask allocation/stride on the failing device has not been observed: this is a supported mechanism and strong hypothesis, not a confirmed device root cause.

Synthetic tests reproduce contamination and geometry displacement at the reported widths 391, 390 and 239 when storage is padded. A row-aware copy restores exact geometry; clipping negative values does not. Widths divisible by four are controls. Do not read beyond the public SDK mask to recover presumed missing rows: the SDK has already copied a truncated flat buffer. Do not widen tolerance, change crop geometry or silently drop mask evidence as a speculative repair.

Existing private workspace D01, D17 and D25 clips were sampled with full-pose Python IMAGE inference at widths 239/390/391/392. D17 returned four valid masks and D25 one; all returned values were finite in [0,1]. Other sampled crops returned no pose, including D01. This Windows/Python experiment does not exercise the iOS wrapper, use the exact failing phone clip, or establish production count parity. Its output stays in the ignored workspace review area; no footage or derived geometry is added to Git.

D25's native processing completed before its 64 MiB serialized Dart evidence budget failed. The initial synthetic 3,600-frame/60 fps retention test reproduced the default cap and verified subsequent-job recovery. The local fix now spools complete contour/candidate proofs to a private temporary file, retaining timeline/pose/ball/response metadata under the existing 64 MiB budget. It has a separate 512 MiB disk limit, 1 MiB proof-record limit and eight-row decoded-proof cache. The synthetic minute now completes above the old cumulative cap. These bounds do not establish total process-heap or iPhone RSS bounds. The long native multipass runtime is separate and remains unresolved.

## Implemented troubleshooting and limited fixes

- Retain an attempt ID across the native facts, Dart result and copyable report; explicitly mark whether the latest native snapshot matches the selected attempt.
- Preserve Dart partial acquisition/counting times, exact serialized total and cap, received/retained counts, offending record kind/frame and per-field sizes for that record. Field sizes include their encoding envelopes and are not a whole-session attribution. No recording paths or evidence arrays enter this report.
- Record reference cleanup state even after failure. These logs distinguish cleared references from RSS/garbage-collection guarantees.
- Hold the SDK mask owner alive while copying. For anomalies, record flat index samples, hypothetical padding-position matches and raw-to-owned bit changes. Compare a second SDK-owned copy; report raw min/max, negative/above-one/nonfinite counts, mask data type, crop and mode. No raw mask images are retained. Padding matches are explicitly labelled hypothetical.
- Record native analyser, accepted-pose-model, reader and transport-job lifetime counts, transport batch/queue state, and memory/thermal samples at producer return and after 1/5 seconds. Delayed samples cannot modify another attempt. Counts track app-owned lifetimes, not internal SDK allocations.
- Remove the abandonment timer's unnecessary strong reference to completed transport jobs. This is a lifetime correction, not evidence that it caused the reported high footprint.
- Keep the original terminal failure when subsequent diagnostic persistence occurs. Cleanup records append without replacing the original failure duration/stage.
- Separate D25 pass wall times from generic per-operation stage buckets, including partial-pass time on failure. The existing operation counts and wall buckets remain available.
- D25 evaluates lazy disk-backed rows and a lazy template view, so selecting template evidence does not expand every contour. The existing lossless codec preserves nonfinite markers as well as ordinary values; no proof vertices, contact thresholds, frame samples or estimator passes are removed. The evaluator isolate receives only the file descriptor metadata, opens its own read handle and closes it before the parent deletes the temporary directory.
- Report spooled bytes/rows, resident serialized metadata, decoded-cache peak/read count and deletion outcome. Success and ordinary failure delete the spool; OS termination can leave a temporary file for OS cleanup. These files contain derived private evidence and are not exported into reports or Git. No claim of resumable analysis is made.

## Local validation

The local Python installation is MediaPipe **1.1.1**, not the iOS-pinned **0.10.21**; the video sample run is exploratory and cannot establish pinned-SDK parity.

History review found the strict mask guard and evidence cap in the Build 63 integration (`00d288c`), with the strict mask guard also present in shipped Build 64 source `986a4d9`. Their original introduction predates the latest diagnostic releases. This does not prove identical device inputs or SDK behavior across releases.

The pinned [CPU affine-warp runner](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/calculators/image/affine_transformation_runner_opencv.cc) allocates its output with ImageFrame's default-alignment constructor. This further supports the padding hypothesis; the actual failing device buffer layout remains unobserved.

- Flutter static analysis: no issues.
- Focused budget/cleanup/report tests: 36 passed, including the full-minute serialized-budget reproduction and subsequent-job success.
- Python synthetic mask-layout tests: 2 passed.
- Full Flutter suite: 1,848 passed, 14 skipped at concurrency 2. The initial higher-concurrency run had 1,847 passes, 14 skips and one UI assertion failure for `0:40`; that case passed alone and in the lower-concurrency suite.
- Final focused report/stream tests: 56 passed. Production-enabled accepted runtime/round/D25-stream tests: 15 passed. Static analysis was repeated after final stream/report changes with no issues. Later retained-estimate reporting changes were checked with the report and saved-analysis tests.
- New native tests cover padding-position diagnostics and cleanup attempt isolation/failure retention. The SDK header confirms Mask, dataType and NSCopying APIs. Swift compilation and native test execution are unavailable on this Windows host and have not been performed.
- Storage revision: the first focused run passed 103 tests, including full D25 accepted-output fixtures through a two-row disk cache, existing parity/numerical tests and the long-session test. The final full suite passed **1,886 tests, 14 skipped**, including actual compute-isolate descriptor transfer, evaluator failure cleanup and resident-metadata budget cleanup. All **15 production-enabled runtime/round/stream tests** passed. A subsequent **4-test cleanup/long-session run** also passed, adding explicit cancellation-during-evaluation coverage: the file remains readable until evaluation returns and is then deleted. Final targeted static analysis reports no issues.

## Before another paid build

1. Use the diagnostic's position counts/raw-copy comparison to test the row-padding hypothesis, and confirm actual internal layout in an Apple SDK reproduction before claiming the device cause. The public mask does not expose its original stride. The exact exported failing D01/D17 recordings would improve input matching; they are not substitutes for an iOS test.
2. Select a verified row-aware SDK conversion or another tested acquisition correction. Public flattened masks cannot safely be reconstructed by guessing stride.
3. Review the locally verified D25 storage change and obtain iPhone memory/runtime measurements when an Apple test environment is available. The original cumulative 64 MiB failure is addressed locally; native processing time and total on-device memory remain unverified.
4. Replay the exact failing phone inputs. Synthetic accepted-output parity passes, but this does not establish a correct count, timestamp or foot attribution for the user's unseen saved rounds. No speed improvement is claimed.
5. Present the changes and remaining device-only questions to the owner before requesting build approval.

The original exported failing D01, D17 and D25 round clips would help align future input replay with the reports. Existing workspace clips were sufficient for exploratory sampling but are not confirmed to be those exact 60-second saved rounds. Keep any supplied clips outside both Git repositories.

## Supplied exports inspected · 8 November 2026

The owner supplied `Feet Juggling.MP4` and `V taps.MP4` in the workspace's private `device-feedback/MemoryTroubleshooting` directory. No Inside Touches file was present during inspection. Neither recording nor extracted images/geometry were added to either Git repository.

Both files decode fully: 3,662 frames, 720×1280, constant 30 fps, first timestamp 0 and final timestamp 122.033 seconds, maximum frame gap 33.333 ms. They are composed exports, not the approximately 60.018-second, 60-fps source rounds in the failure reports. Visual inspection shows an intro and two numbered rounds. `AppDelegate.swift` confirms a two-second intro and an explicit 30-fps video-composition frame duration. Re-exporting through the same workflow cannot recover the original frame sequence. File hashes and complete decoding metadata are stored only in the private review directory.

Local full-pose replay examined the first 90 frames after the intro for each export (three seconds per clip). Sequential VIDEO inference supplied primary landmarks/masks; independent IMAGE inference evaluated person crops using the app's visibility/presence thresholds and 0.1 crop-padding formula. Crops were evaluated for diagnosis even when the native boundary-validity gate might not request them, so this is not a complete native acquisition replay. All 180 full-frame masks and 180 crop masks were finite and within [0,1], including many crop widths not divisible by four. The first V Taps crop was 250×553 rather than the failing phone report's 239×552.

This experiment did **not** reproduce the invalid confidence values. It does not clear the iOS SDK: the local Python version remains 1.1.1, the device version is 0.10.21, and export rendering/re-encoding/cadence changes the inputs. No D25 count or full native-runtime claim is derived from the composed two-round exports. The storage regression and accepted-output fixture tests remain the verification for the local storage fix.

An exact device reproduction still needs the unmodified saved round plus an Apple runtime. The current composed-export route is insufficient for that purpose; a diagnostic source-round export should preserve source bytes and metadata rather than add overlays, concatenate rounds or convert frame rate. Do not request repeated composed exports as if they were originals, and do not start a paid build merely to retrieve them.
