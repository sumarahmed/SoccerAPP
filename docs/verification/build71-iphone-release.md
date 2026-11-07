# Build 71 · Analysis troubleshooting

Version 0.2.0 (71). The owner authorised a comprehensive diagnostic iPhone build on 7 November 2026 to reduce repeated diagnostic releases. Codemagic status is pending.

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

Local Flutter analysis passed. The full default suite passed 1,845 tests with 14 skips; after the final report/redaction additions, all 14 focused runtime/report/UI/round tests passed. Native regression tests cover startup error retention, redaction and D25 progress across real acquisition passes. Windows cannot execute the Apple tests; Codemagic must compile and run them before signing. Device success remains pending.

## iPhone test

1. Install Build 71 over the existing app; retain the saved recordings.
2. Retry the older D01 or D17 recording, keeping Soccolo open.
3. Tap **Copy analysis report** after failure, or while running if it appears stuck, and paste the full report. It now includes native diagnostics automatically.
4. Retry D25 separately and copy its report if progress stops. Moving to another screen inside Soccolo is supported; leaving the app pauses/cancels this foreground-only build.

Cloud result and exact source revision will be recorded after the authorised build.
