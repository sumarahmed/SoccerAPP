# Build 71 · Analysis troubleshooting

## Device follow-up · 8 November 2026

### Shared D01/D17 mask-confidence failure (local, unshipped)

Subsequent owner reports identify `SoccoloTinyVision: Invalid person mask confidence`: D17 fails at frame 0 after 425 ms (another attempt 483 ms), and D01 at frame 1 after 507 ms. Both load their models and complete initial inference. This isolates these failures to the shared person-mask snapshot validation; it does not establish that the earlier D25 failure poisoned later runs or that every drill has the same failure.

The previous snapshot rejected every value outside [0, 1], including arbitrarily small finite endpoint overshoots. The local change copies the task-owned mask and normalizes only values within eight Float epsilons (approximately 0.000000954) of those endpoints. Every in-range Float remains bit-for-bit unchanged; NaN, infinity and larger deviations still fail. The device reports did not capture the actual invalid values, so numerical round-off is a hypothesis, not a confirmed root cause or a verified device repair.

Anomalies now record aggregate out-of-range extrema, corrected/invalid/nonfinite counts, dimensions, frame and mask origin (primary video, foot crop, foot-boundary video/crop or head crop). No pixel arrays or private images are logged. Native regression tests cover tolerance boundaries, unchanged valid values and threshold classifications, owned storage, hard rejection and diagnostic origin/counts. These new Swift tests have been reviewed but cannot execute on this Windows host; Apple compilation and native execution remain pending. No Codemagic build has been started. Full pose, capture rates and drill decision thresholds remain unchanged.

The owner supplied a D25 failure report from the shipped source `7609848`. The failed attempt ended after 717,791 ms with `AcceptedD25CirclePaths.Failure.invalidEvidence` at source frame 1622 during the v5 image-refinement pass. The first pass decoded all 3,600 frames of the 60.018-second, approximately 59.98 fps recording. Model loading and initial inference completed within one second. The failure checkpoint reported thermal state 0, approximately 3,084 MiB available memory and a sampled peak footprint of 509 MiB; this report does not indicate a resource-pressure stop.

The report's latest snapshot belongs to another attempt. That attempt subsequently received an explicit Flutter cancellation at frame 1783 after 171.56 seconds. It must not be substituted for the earlier invalid-evidence failure.

Approximate failed-attempt phase durations, from first-stage timestamps:

| Phase | Time |
| --- | ---: |
| Initial pose/ball acquisition | 409 s |
| Forward image tracking | 94 s |
| Reverse tracking | 68 s |
| Evidence join | 6 s |
| v5 refinement before failure | 141 s |

A reproducible defect was found in the v5 corroboration code and the later short-gap bridge: the circle extractor can return a null radial residual when refinement abstains, but both consumers throw instead of leaving that candidate unconfirmed. This matches the reported failure location and exception, but the device report does not contain the actual candidate; the exact failing row has not been replayed locally.

The local repair skips only candidates whose residual is missing/null. It does not invent a residual, confirm an unsupported circle, swallow other validation errors, change thresholds, or remove valid candidates alongside the missing fit. The Swift and Python implementations agree on this behavior. Existing complete-output comparisons are unchanged for all 45 successful fusion/bridge cases and all 14 directional-template cases. Authored synthetic regression cases cover missing/null fits, preservation of existing evidence, a valid candidate alongside a missing fit, and continued rejection of malformed residual types. No private recording or device-derived frame fixture was added.

Validation: all 66 Python D25 tests and all 79 focused Flutter D25 parity/source-frame/numerical/stream/handoff tests passed. Both reference export checks passed. Updated Swift parity tests require an Apple toolchain and have not run for this repair. Full-video counts, timestamps and foot attribution for the owner's recording remain unverified because the recording is not present locally. Capture stays at the 60 fps target with 30 fps fallback and full pose. No Codemagic build has been started for this follow-up; the changes are local and unshipped.

Version 0.2.0 (71). The owner authorised a comprehensive diagnostic iPhone build and its corrected retry on 7 November 2026. [Codemagic run 97 and installation artifacts](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aeed1afba0993363c9c765e) succeeded from `7609848528dc39c30a6a77ff86dad92ba29b5a49`. All verification, signing and publishing stages passed. Artifact metadata confirms `soccolo_mobile.ipa`, version `0.2.0`, build `71`, 101,501,187 bytes.

The first attempt, [run 96](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aeeca8c6c7d0444d2620ea1) from `2589af40db4d4956cf68fa18778e08f555f93a9d`, failed the previous diagnostic-size assertion and produced no IPA. The correction and successful retry are recorded below.

## Evidence and investigation

Build 69 failed on an older D17 recording. Build 70 restored Build 68's native acquisition, bridge, model runtime and foreground lifecycle, but the owner still reports D01 and D17 failures. D17 failed after 535 ms with ample reported available memory. D25 instead ran for 92,949 ms before cancellation when the app left the foreground. D25 previously reported no progress during its multiple acquisition passes, so frame 0/loading-model does not establish that no processing occurred. The exact device failure is unconfirmed; this is a troubleshooting build, not a claimed analyser recovery.

Source comparison against `4417628` confirms Build 70's native analyser/runtime were already restored. The current investigation found a definite diagnostic defect: the native transport discarded producer exceptions and removed the job before the next pull could retrieve the error.

## Changes

- Retain native failure details until consumed, including stage, error domain/code, redacted message, underlying error chain and Swift error type/value. Distinguish invalid requests, unavailable/active jobs, producer inactivity and consumer timeouts. Preserve existing resource-pressure codes.
- Record model discovery/readability/size, ONNX session creation, full-pose loading/first inference, sandbox/readability checks, video tracks/rate/dimensions/duration, decoder startup/completion, frame preprocessing, detector/pose calls and evidence processing.
- Keep first stage visits, bounded recent checkpoints, per-stage call counts and wall-time attribution, current frame/progress, time since a work checkpoint, OS/low-power/thermal/memory/free-disk information and up to two preceding attempts. In-memory frame breadcrumbs sample memory/disk roughly once per second; startup and terminal checkpoints persist immediately. These wall-time buckets are diagnostic observations, not a speed guarantee or complete inference profiler.
- D25 reports monotonic work-pass progress through inference, forward/reverse tracking, evidence join, image refinement and transfer. This is work progress, not an estimate of time remaining. Frame numbers can descend in reverse passes.
- Copy analysis report is available while running and includes the latest native snapshot and prior attempts alongside the selected round report. Native diagnostics are explicitly labelled as the latest device attempt, which may differ from the selected saved round. A separate Settings copy is no longer required.
- Dart validation errors retain a redacted message; lifecycle cancellations identify the app state. The UI explicitly says to keep Soccolo open. This release retains foreground-only execution.

Capture remains targeted at 60 fps with 30 fps fallback; full pose and all 12 accepted drill analysers/decision thresholds remain. Lite pose stays outside production and live player calibration stays deferred. Private recordings, fixtures and generated files are excluded from Git. Logs contain technical metadata, not images, poses, contact trajectories, recording paths or player identities; location text in SDK errors is redacted.

## Verification

Local Flutter analysis passed. The full default suite passed 1,845 tests with 14 skips; after the final report/redaction additions, all 14 focused runtime/report/UI/round tests passed. Codemagic's corrected native run executed 186 tests with one skipped and zero failures, including startup-error retention, redaction, D25 multipass progress and bounded diagnostic history. Flutter analysis, the full Flutter suite and all enabled-feature/accepted-runtime verification stages also passed. Actual analysis recovery on the owner's iPhone remains pending.

## iPhone test

1. Install Build 71 over the existing app; retain the saved recordings.
2. Retry the older D01 or D17 recording, keeping Soccolo open.
3. Tap **Copy analysis report** after failure, or while running if it appears stuck, and paste the full report. It now includes native diagnostics automatically.
4. Retry D25 separately and copy its report if progress stops. Moving to another screen inside Soccolo is supported; leaving the app pauses/cancels this foreground-only build.

## Cloud result and correction

Native compilation succeeded. The suite executed 185 tests with one skipped; the only failing test was the portrait-round test's two assertions that diagnostics remain below the old 16 KiB limit. The expanded reports were 32,650 and 33,296 bytes. Startup-error retention, private-location redaction and D25 multipass/progress tests passed. No analyser count/inference assertion failed. Later Flutter cloud stages and signing were skipped because this gate failed.

The follow-up correction enforces a 64 KiB native diagnostic-file limit, trims oldest previous attempts/checkpoints first, retains the current error and facts whenever possible, and marks truncation. An oversized-payload regression test verifies the cap and preservation of the current failure. The portrait test now checks that enforced limit. Both tests passed in the authorised retry, which completed on 7 November 2026 at 07:44 UTC. The successful package is ready for owner testing; it does not yet establish that the original device analysis failure is repaired. Documentation-only commits record the cloud outcome separately from the built source revision.
