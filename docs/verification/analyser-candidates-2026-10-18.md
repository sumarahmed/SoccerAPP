# Analyser candidate comparison — 18 October 2026

**Latest decision — owner-approved internal trial:** the owner accepts approximate counts and authorized integrating Tiny + bounded optical flow into the next internal iPhone build, starting with D01. This supersedes the earlier recommendation below to postpone packaging. It does not resolve camera-motion false positives or establish general accuracy. Device accuracy, latency and thermal behaviour remain acceptance items. Native build 51 uses the same model weights with pinned mobile runtimes; the desktop results below are not iPhone results.

A local-only comparison tested YOLOX Nano/Tiny, MediaPipe foot landmarks, bounded OpenCV tracking and two experimental contact rules. A separate synthetic-only Codemagic run tested Apple's native object tracker. No personal footage, extracted frames or traces entered repositories or cloud builds. Build 50 is unchanged.

**Historical research recommendation (superseded by the owner-approved trial above):** defer the separate app build pending contact-level validation and camera robustness. See the final robustness-test section; earlier prototype recommendations below are historical.

## Findings

| Approach | Measured result | App decision |
|---|---|---|
| YOLOX Tiny | Ball detected in 598/600 frames of one authorised local practice clip | Preferred detector candidate for an iPhone prototype |
| YOLOX Nano | Ball detected in 566/600 frames | Smaller/faster alternative, weaker coverage on this clip |
| MediaPipe Full | Confident ankle, heel and toe outputs throughout the 600-frame clip | Promising foot geometry; confidence is not location accuracy |
| OpenCV short tracking | Tiny coverage 598 to 600; Nano 566 to 597 with predictions | Useful fallback; predictions must remain distinguishable from detections |
| Apple native tracking with current detector | Synthetic available ball boxes 60 to 115 out of 240; zero raw touches | Helps continuity, insufficient to fix current pipeline |
| New motion-based contact rule | 37 against owner reference 38, but 22 false contacts in a camera-motion control | Not suitable for release |
| Additional shoe-relative safeguard | Camera-motion false contacts removed, but owner-clip count fell to 17 | Not suitable for accuracy acceptance |

The v3 counter evaluation port matched 54 native synthetic cases. With Tiny detections and MediaPipe ankles it still produced only 19 raw touches; replacing ankles with toes produced 13. A stronger detector and extra landmarks do not, by themselves, repair the counter.

A visual spot-check of 20 evenly spaced frames found Tiny boxes around the actual ball. This is not a full precision/recall measurement. The owner reference has not been independently timestamp-labelled; **37 versus 38 is not an accuracy percentage**. The private input was an export, not the exact original analysed by the installed app, so historical app totals are not a matched pipeline comparison.

Six negative coordinate controls and one positive contact control were run. The motion rule passed stationary-ball, straight-roll, small-jitter, distant-ball and missing-contact controls but failed whole-scene camera movement. The stricter rule passed those controls and the positive control, while still undercounting real practice. All tested pipelines produced zero raw counts on the no-player brand video.

## What can be used next

Take Tiny and MediaPipe into further prototype work, subject to Core ML conversion/adapter work, model provenance review and physical iPhone performance checks. Keep counting experimental. The next counter needs camera-motion handling, recording-boundary/recovery cases and event-by-event testing on independently labelled, held-out clips. No candidate has been accepted for a release.

Local Windows component timings for the 20-second clip were 21.72 seconds for Tiny and 10.48 seconds for MediaPipe Full. These exclude initialisation and are not iPhone performance claims. Model downloads were approximately 20.22 MB and 9.40 MB respectively.

Detailed evidence, hashes, implementation notes and reproduction commands are in the private `Soccolo-app/apps/mobile/ANALYSER_APPROACH_COMPARISON_2026-10-18.md`. Owner-derived overlays and traces remain local. The earlier [synthetic investigation](analyser-synthetic-2026-10-18.md) remains historical evidence.

## Build 47 real-footage follow-up

Tested the supplied two-round export locally with the same model weights, confidence thresholds and counter parameters used above. No tuning to a reference count. The owner later supplied approximate references of 29 per round; these are algorithm outputs, not verified manual totals.

| Measure | Round 1 | Round 2 |
|---|---:|---:|
| Frames evaluated | 762 | 601 |
| Tiny direct ball detections | 667 (87.5%) | 519 (86.4%) |
| Nano direct ball detections | 682 (89.5%) | 515 (85.7%) |
| Tiny detection or bounded flow | 684 | 557 |
| MediaPipe confident ankles | 731 | 601 |
| MediaPipe confident heels/toes | 717 | 589 |
| Tiny + v3 ankle counter, direct | 13 | 13 |
| Tiny + v3 ankle counter, with flow | 13 | 14 |
| Tiny + experimental motion counter | **26** | **26** |
| Tiny + stricter relative-contact counter | 7 | 10 |
| Nano + experimental motion counter | 25 | 27 |

Tiny is no longer a clear coverage winner over Nano on every round. The result supports continuing to compare both detectors, rather than choosing from the build 48 clip alone. The motion counter still fails the previously documented camera-motion negative control; neither experimental rule is release-ready. Better frame coverage alone does not establish accurate contacts.

Method: skip the two-second intro; round 1 is frames 60–821 and round 2 is 822–1422 (zero-based). The badge change and image cut identify the boundary at 27.4 seconds. Round 1 includes pre-practice movement, deliberately retained as a false-count check. Pose/flow inference runs continuously over the export; all counting state resets between rounds. This is not an independent native per-round app replay. In a 12-frame-per-round visual spot-check, all 22 available Tiny boxes enclosed the real ball; two round-1 samples had no detection. No full event annotation has been performed.

The v3 port again matched 54 native oracle cases; seven coordinate controls retained their previously documented outcomes. Production app code/build remains unchanged. Personal footage and diagnostic overlays remain local.


## Latest improvement experiment and app recommendation

The owner subsequently supplied approximate references of **29 touches in each build 47 round**. These remain approximate totals, not timestamp labels. The 26/26 motion outputs are a net difference of about three per round, not proof that precisely three events were missed.

Two new evaluation-only safeguards were implemented without changing model weights or tuning event thresholds to those totals:

| Tiny-based rule | Build 47 round 1 (~29) | Build 47 round 2 (~29) | Build 48 (38) | Camera-translation control (0) |
|---|---:|---:|---:|---:|
| Original motion rule | 26 | 26 | 37 | 22 |
| Ball motion relative to midpoint of feet | 19 | 23 | 29 | 0 |
| Background-translation gate | 26 | 25 | 13 | 0 |

The background estimator uses sparse flow on side-background regions, forward/backward consistency, at least 12 features, 70% agreement and bounded displacement. Its trusted-frame coverage was 723/762, 597/601 and 327/600 respectively. The gate requires a trusted event window, so weak background evidence severely reduces build 48 counts. It does not extrapolate through unknown camera motion. This translation-only method does not establish robustness to zoom, rotation, parallax or moving backgrounds.

All seven coordinate controls passed for both new gates; the v3 port retained 54-case parity. A separate 180-frame generated textured-video translation test exercised the actual background estimator: 180 trusted frames, 22 original false events reduced to zero. That test uses known ball/foot coordinates and tests the motion estimator plus gate, not a full detector/pose pipeline. No real moving-camera acceptance clip or independent contact annotations are available.

**Recommendation: proceed to a separate internal iPhone analyser prototype for D01 Inside touches, not a default production counter replacement.** Compare YOLOX Tiny and Nano with MediaPipe heel/toe landmarks on the device; keep Nano as the smaller candidate, because Tiny did not win every real round. Use the already-selected drill ID to select contact logic rather than guessing the drill from the demonstration. Preserve on-device post-recording processing and existing privacy/lifecycle behaviour. MediaPipe has an [official iOS implementation guide](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker/ios); this does not establish our integration performance.

Before enabling this by default: annotate individual contacts and evaluate matched/missed/false events; add held-out clips, camera movement and no-touch controls; measure native model parity, processing time, memory and heat on iPhone. Retain an unavailable/low-confidence result when evidence is insufficient. Reanalysis of saved clips should record the analyser version and replace the prior estimate without duplicating aggregate history. These are proposed app behaviours, not changes delivered in this experiment.

The practical improvement is a measured camera-motion rejection mechanism that mostly preserves build 47 counts, plus evidence of where it fails. Neither new gate is accepted across all real clips. Production app and signed build remain unchanged; only evaluation tooling and documentation changed.


## Tracking comparison: fixed counter, same real traces

Tested direct detections, bounded optical-flow context, constant-velocity Kalman association, and a **single-ball ByteTrack-inspired two-stage association adaptation**. This is not the upstream ByteTrack implementation and does not establish how full ByteTrack would perform. The [upstream implementation](https://github.com/ifzhang/ByteTrack/blob/main/yolox/tracker/byte_tracker.py) associates high- then low-confidence boxes; this local experiment uses OpenCV Kalman, one ball, IoU >=0.5, high confidence >=0.55, weak confidence >=0.25 and at most three prediction frames. Stored traces omit detections below 0.25, unlike upstream's 0.1 lower cutoff. No model rerun or parameter fitting to counts was performed.

All modes retain the same experimental motion/foot-proximity counter. Predictions can supply neighbouring trajectory context but cannot be the contact frame. Observed boxes are not replaced with smoothed positions. The camera gates are deliberately excluded from this comparison to isolate tracking; their unresolved limitations remain.

| Detector / tracking | Build 47 R1 (~29) | Build 47 R2 (~29) | Build 48 (38) |
|---|---:|---:|---:|
| Tiny / direct | 26 | 26 | 37 |
| Tiny / optical-flow context | **27** | **26** | **37** |
| Tiny / high-only Kalman | 25 | 22 | 33 |
| Tiny / two-stage Kalman | 25 | 24 | 33 |
| Nano / direct | 25 | 27 | 32 |
| Nano / optical-flow context | 26 | 27 | 34 |
| Nano / high-only Kalman | 23 | 20 | 21 |
| Nano / two-stage Kalman | 23 | 23 | 24 |

Two-stage Tiny recovered 11 and 40 weak detections in build 47 rounds, but no count advantage over direct evidence. It recovered none on build 48, where strong detections were already almost continuous. Association rejected some strong detections (e.g. Tiny build 48 retained 576 versus 598); association near abrupt motion is a plausible cause of the regression, not yet a contact-by-contact diagnosis.

Eight tracker assertions verify weak detections cannot initialise tracks, bounded prediction expiry, distant weak-box rejection and high-only behaviour. All four modes returned zero on five negative coordinate controls, 17 on the known 17-contact control, and **22 false events on the camera-pan control**. Tracking therefore does not solve the camera issue. Existing camera-gate controls also retained their results. Real event precision/recall is still unknown; totals are not accuracy percentages.

**Recommendation:** keep Tiny plus bounded optical-flow context as the leading internal iPhone prototype candidate, and Nano as the smaller comparison. Do not adopt the tested Kalman/two-stage variant as the default, and do not present this result as rejection of upstream ByteTrack. Prioritise labelled contacts and camera robustness before custom training or more tracker complexity. Personal traces remain local, app source/build unchanged. Source reports updated locally; no release or cloud build was performed.


## Additional local robustness tests: builds 47 and 48

The owner clarified that the requested second video is build **48**, not build 49. No build 49 personal video was used. New local tests comprised 180 seeded trace perturbations (two detectors, three rounds, three conditions, ten seeds), twelve 15-fps trace phase checks, and fresh detector/pose/flow inference on 1,963 practice frames from smaller compressed copies of both original exports. No thresholds were changed to match owner totals.

### Fresh video inference

FFmpeg resized each video to 360x640 and encoded H.264 CRF 28, retaining 30 fps and exact frame counts. This tests resolution and compression together. The same round boundaries, models and counter settings were retained. Counts below use the unchanged motion counter with flow only as neighbouring context; predicted frames cannot confirm events.

| Candidate | Build 47 R1 (~29) | Build 47 R2 (~29) | Build 48 (38) |
|---|---:|---:|---:|
| Tiny + flow, original | 27 | 26 | 37 |
| Tiny + flow, resized/compressed | 26 | 27 | 37 |
| Nano + flow, original | 26 | 27 | 34 |
| Nano + flow, resized/compressed | 24 | 26 | 33 |
| Tiny + two-stage Kalman, resized/compressed | 25 | 25 | 32 |

Tiny direct detections on compressed rounds were 677/762, 523/601 and 594/600. Nano direct detections were 674/762, 520/601 and 519/600. Tiny direct counts were 26/27/37; Nano direct counts were 25/27/25. Tiny's totals were comparatively stable in this one pixel-level transformation, not proven robust across camera conditions.

### Trace sensitivity (Tiny, direct-event rule)

| Perturbation | Build 47 R1 | Build 47 R2 | Build 48 |
|---|---:|---:|---:|
| Original | 26 | 26 | 37 |
| Remove 5% detections, ten seeds | 23-26 | 24-27 | 33-37 |
| Remove 10% detections, ten seeds | 19-25 | 21-24 | 31-36 |
| Gaussian centre jitter, sigma 2 pixels, ten seeds | 23-26 | 25-27 | 35-38 |
| Sample every second frame, two phases | 26/27 | 26/29 | 36/38 |

Trace perturbations do not rerun the detector or estimate real-world error rates; they probe sensitivity of the counter. The 15-fps minimum two-frame half-window is about 133 ms, so this is not a pure unchanged-temporal-window comparison. Missing detections remain a substantial weakness. Retain full-frame processing until an independently evaluated lower-rate design is ready.

The one extra original Tiny/flow event relative to direct evidence occurs at 11.07 seconds in build 47 round 1. A short frame strip shows foot/ball approach in that interval, making it plausible but not independently confirmed. No other events were added or lost within a 100-ms matching tolerance. Individual touch labels remain absent; net totals can hide cancelling misses/false events.

**Historical recommendation (superseded by the owner-approved build 51 trial): defer building the separate app for now.** Tiny plus foot landmarks and bounded optical-flow context remains the leading candidate, but contact annotation and camera robustness are more useful next work than packaging this counter. The previously measured 22 false camera-pan events remain unresolved by tracking; this turn did not retest them with new parameters. Revisit an internal iPhone build after event-level validation and a camera safeguard that preserves both real videos; the phone build should then measure native parity, speed, heat and memory. This supersedes earlier suggestions to proceed immediately to a prototype.

All derived videos, frames and traces remained local and ignored. Evaluation tooling and both source reports updated locally; no app, CI build, commit, push or deployment was performed in this follow-up.


## YOLOX Small versus Tiny on original build 47/48 footage

Fresh matched inference ran both detectors sequentially in the same process over 1,963 original practice frames, sharing MediaPipe pose observations, CPU settings and counting parameters. Input fingerprints and round boundaries matched earlier tests. Tiny's accepted boxes reproduced the earlier traces exactly on all 1,963 frames. The v3 parity check again passed 54 cases. Small uses its standard 640x640 input; Tiny uses 416x416. This compares standard configurations, not equal input resolution.

| Round | Owner reference | Tiny direct / flow-context count | Small direct / flow-context count | Tiny direct detections | Small direct detections |
|---|---:|---:|---:|---:|---:|
| Build 47 round 1 | ~29 | 26 / 27 | 26 / 26 | 667/762 (87.5%) | 710/762 (93.2%) |
| Build 47 round 2 | ~29 | 26 / 26 | 27 / 27 | 519/601 (86.4%) | 558/601 (92.8%) |
| Build 48 round 2 | 38 | 37 / 37 | 38 / 38 | 598/600 (99.7%) | 598/600 (99.7%) |

Bounded flow availability was Tiny 684/762, 557/601, 600/600 versus Small 725/762, 577/601, 600/600. The Kalman/two-stage variants did not outperform direct/flow: Small high-only counts 25/22/31; two-stage 25/22/31. No counting thresholds were tuned. Camera gates remain excluded to isolate the detector comparison, so the unresolved motion-rule false-count failure remains. **Small matching the build 48 total of 38 does not establish 100% contact accuracy**; event labels are still needed to rule out cancelling misses and false events.

| Resource | Tiny | Small |
|---|---:|---:|
| Actual ONNX file bytes | 20,219,662 | 35,858,002 |
| Detector time, build 47 (1,363 frames) | 57.91 s | 210.04 s |
| Detector time, build 48 (600 frames) | 25.27 s | 93.29 s |

Small is about 77% larger (+15.64 MB of raw ONNX files) and took 3.63-3.69 times the detector processing time in these matched Windows CPU runs. Timings include detector preprocessing/inference/postprocessing, exclude initialization and other pipeline stages, and are not iPhone benchmarks or final app-size estimates. Pose and flow remain extra work.

Small weights came from the [official ONNX release](https://github.com/Megvii-BaseDetection/YOLOX/releases/download/0.1.1rc0/yolox_s.onnx), SHA256 `c5c2d13e59ae883e6af3b45daea64af4833a4951c92d116ec270d9ddbe998063`. The official [ONNX guide](https://github.com/Megvii-BaseDetection/YOLOX/tree/main/demo/ONNXRuntime) documents the standard model/input configurations. A visual audit sampled twelve frames per round: Small's 34 available boxes enclosed the ball, with two round-1 samples missing. This is a spot-check, not an annotation-based precision/recall result.

**Research recommendation before the owner-approved trial:** retain Tiny as the leading mobile candidate; keep Small as a local comparison/reference candidate for the incoming varied footage. Small improved build 47 detection coverage but gave only a modest and inconsistent count improvement at substantially greater CPU cost. There is not yet enough evidence to justify bundling Small or starting the separate app build. Reassess after contact-level labels, diverse unseen videos and camera-motion validation. Production app/build unchanged; media/models/traces local and ignored; both source reports updated locally without publishing.
