# Build 53 analyser evidence and recommendation

19 October 2026. Owner authorized another build and alternative-analyser evaluation after build 52 closed near its recorded pose-inference checkpoint at frame 390. The owner corrected an earlier reply: automatic restart did not occur; recovery guard worked. Root cause remains unconfirmed.

## Fresh local pose comparison

Same original build 47 and build 48 clips; same 1,963 evaluation frames and previous fixed boundaries (762, 601, 600 frames). Fresh pose inference only; identical cached YOLOX Tiny detections/flow and unchanged radius-based motion/contact rules. Six foot landmarks evaluated, with heel/toe visibility/presence threshold 0.6; combined tracking coverage must reach 85%. No parameters fitted to owner totals. Desktop MediaPipe 1.1.1 differs from pinned iOS Tasks 0.10.21.

Owner references: approximately 29, approximately 29, and 38. Build 47's first evaluation window is longer than 20 seconds because these are the previously fixed export boundaries; not a new segmentation claim.

| Pose configuration | Counts R1 / R2 / build48 | Pose CPU wall time, all frames | Peak sampled process RSS | Model bytes |
|---|---|---:|---:|---:|
| full | 27 / 26 / 37 | 32.06 s | 291.4 MiB | 9,398,198 |
| lite | 27 / 28 / 37 | 24.55 s | 279.3 MiB | 5,777,746 |
| full640 | 27 / 27 / 36 | 29.50 s | 288.3 MiB | 9,398,198 |

Each variant ran in a separate Windows process, processing build47 then build48. Timings include RGB conversion and pose invocation, exclude initialization, resizing, ball inference and flow. RSS samples were taken every 30 frames and include Python, cached traces, decoding and runtime allocations: they are not a model-only footprint or iPhone memory estimate. Lite reduced this measured pose time by about 24%, with about 12 MiB lower peak sampled process RSS. Full640 was faster than Full, but returned 36 on the 38-reference clip. All three configurations passed the combined tracking coverage gate on these windows. Net count agreement cannot establish individual-event accuracy; misses and false positives can cancel.

## Other alternatives

Prior matched detector results: YOLOX Nano + flow 26/27/34; Tiny 27/26/37; Small 26/27/38. Small was 3.6–3.7 times slower in detector CPU processing and its raw ONNX file about 77% larger. These are earlier runs, not fresh detector inference in this experiment. Retain Tiny as the ball detector; Small does not address a suspected pose-stage problem. See [prior comparison](analyser-candidates-2026-10-18.md).

[MoveNet](https://www.tensorflow.org/hub/tutorials/movenet) and [Apple Vision body pose](https://developer.apple.com/documentation/vision/vnhumanbodyposeobservation/jointname) supply ankles but not the heel/toe segments required by the current counter. They are candidates for a separately validated ankle-based counter, not drop-in substitutes. No new accuracy or memory benchmark for either is claimed. Removing foot validation is not recommended: ball direction changes alone can be false touches.

## Recommendation and build 53 scope

Trial YOLOX Tiny + bounded optical flow + **MediaPipe Pose Lite** on iPhone. Keep counter thresholds unchanged; use distinct algorithm ID `yolox-tiny-flow-pose-lite-v5` so Full outcomes are not silently reused. Existing crash markers still require explicit Retry after an update. Both Full and Lite models are bundled in this diagnostic candidate to run a matched native A/B test; therefore the IPA may grow despite Lite's smaller individual model file.

Record physical footprint, current available process-memory budget, peak sampled footprint, elapsed time and the last eight stage checkpoints. Record before/after pose every ten frames. Check memory headroom before inference; pause gracefully below 128 MiB. This is an engineering reserve, not a measured safe boundary. Apple's [headroom API](https://developer.apple.com/documentation/os/os_proc_available_memory) is advisory and can change immediately; no guarantee against jetsam or native faults. Simulator headroom is unavailable rather than treated as zero.

Native tests generate a repository-owned 720×1280, 30-FPS, 20-second animation and run Full and Lite through the same production entry point, asserting 600 processed frames and logging wall time and memory. This better matches input geometry/rate but does not reproduce personal-footage content or iPhone behaviour. Native results and signed package evidence are recorded below.

Official [MediaPipe pose models](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker): Lite file SHA-256 `59929e1d1ee95287735ddd833b19cf4ac46d29bc7afddbbf6753c459690d574a`, Full `5134a3aad27a58b93da0088d431f366da362b44e3ccfbe3462b3827a839011b1`. No runtime upgrade was made. Personal media and per-frame traces remain ignored/local; no footage or diagnostics are uploaded automatically.

## Native comparison and verification

Codemagic `6ad53d7a945eed1874c27fcf`, source `2eb1d270f7358e1247d496c9b106870123bf8cd8`: 41 native tests passed, one existing simulator skip, zero failures (42 total). Both Full and Lite completed the same 600-frame portrait input through the production entry point. The memory-budget boundary test passed, including unknown simulator budget versus exhausted budget.

| Pose | End-to-end analysis wall time | Peak sampled physical footprint | Footprint at completion |
|---|---:|---:|---:|
| Full | 88.65 s | 376.6 MiB | 205.3 MiB |
| Lite | 95.48 s | 306.6 MiB | 206.7 MiB |

These are simulator process measurements, not physical iPhone measurements. Full ran first, Lite second in the same process; warm caches, order and shared CI load confound performance comparison. Lite had about 70 MiB (19%) lower sampled peak, but was about 8% slower end to end in this run. Both returned close to the same completion footprint. Do not generalize the desktop pose-only speed improvement to iPhone or whole-job speed. Retain Lite as the lower-peak-memory trial; require owner completion and diagnostics before declaring stability fixed.

The first build attempt failed at compile time on an unsupported `outputSegmentationMasks` iOS option; the assignment was removed for the pinned runtime. No failed-attempt app was delivered. No model/runtime version or counting thresholds were changed to address that compile error.

## Signed package and final checks

Static analysis clean; 247 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 41 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed.

[Codemagic build](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ad53d7a945eed1874c27fcf), source `2eb1d270f7358e1247d496c9b106870123bf8cd8`. IPA: 100,103,805 bytes; SHA-256 `71eb61b4053e621b405c981929962c2e206b3d2fc48520c81ddbaa96caad8049`. Package inspection verified ZIP integrity, bundle/version/build, pinned model hashes, provisioning profile and signature resources, plus the signed isolated bridge. About 4.96 MB larger than build 52 because both pose variants remain bundled. Physical iPhone acceptance is pending.
