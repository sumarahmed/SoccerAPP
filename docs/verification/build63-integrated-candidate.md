# Build 63 integrated candidate — 5 November 2026

The owner authorized synchronizing both repositories and starting the internal
Codemagic iPhone build. The validated implementation is app commit
[00d288c](https://github.com/sumarahmed/Soccolo-app/commit/00d288c6f2cd8cb9264ced90fbfdd927b5ef70df).
A subsequent documentation-only revision records build authorization; the exact
remote app SHA must be verified before dispatch and against the build itself.

## Integrated scope

- Accepted runtime analysers: D01/D02/D03/D04/D12/D15/D16/D17/D18/D22/D23/D25.
  D24 remains an exercise without analysis; pending drills have no generic fallback.
- D25 acquisition, transport and lossless proof handoff are integrated. All three
  numerical failures are fixed; all five private complete outputs are unchanged.
- D04 has source-bound cone/obstacle review and supports later recording ranges.
- Counts use the work interval and preserve source timestamps/frame IDs. D16
  completed cycles remain separate from contact totals and body-part analytics.
- Historical results are preserved; unsuccessful reanalysis retains valid results.
- Live player calibration is deferred and disabled until explicitly requested.
  General continuation/build instructions do not resume it. Manual setup remains.

## Validation and outstanding checks

Local validation: 1,832 Flutter tests passed, 14 feature/device skips; 868 Python
analyser tests passed; clean Flutter static analysis; Android debug compilation
passed. Runtime/navigation/interval checks, private D25 parity, source-fixture
freshness and repository checks passed. Final publication cleanup changed only
whitespace/source hashes: 62 Dart parity tests and nine D25 Python tests passed,
with complete fixture observations and expected decisions unchanged.

Native iPhone compilation now passes. The fourth cloud attempt ran all 183
RunnerTests: eight cases produced 135 assertions/errors, with one test skipped.
The fixes cover decoder preroll, idempotent spool cleanup, model asset lookup,
watchdog callback expectations and scoped cross-backend numerical checks.
Production analyser thresholds and fixture expectations are unchanged.
Two new OpenCV backend proof checks and two model-packaging checks pass locally.

Run 85 reduced failures to three: two reverse-image tests found a duplicated
seek-boundary PTS, and one stale test expected the deliberately excluded
experimental model. The reader now seeks 100 ms before the requested identity;
the model test validates the shipped tiny model and rejects the wrong tensor.

Run 86 passed native compilation and all 183 native tests (one skipped, zero
failures), plus Flutter analysis. One Flutter demo test tapped an offscreen
control. The test-only correction settles scrolling, centers the target and
asserts hit-test visibility on Android/iOS/macOS. The complete local Flutter
suite now passes: 1,834 passed, 14 skipped. Live calibration is still deferred.

The current retry is app revision
[`e9fd4be`](https://github.com/sumarahmed/Soccolo-app/commit/e9fd4bea53d3ab2a91555803b54e25892ccedfeb),
[Codemagic run 6aebdb15bec4042bf4037d36](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aebdb15bec4042bf4037d36).
Status at publication: requested, pending cloud validation. No IPA yet.
[Failure details and validation](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/BUILD63_CLOUD_VALIDATION.md).

On-device accuracy, memory, thermal
behavior and performance remain unverified. Build 62 is the last confirmed
installed iPhone version. Do not describe Build 63 as successful or installed
until the corresponding evidence exists.

Private media/replay fixtures and generated outputs stay local. This companion
repository contains documentation only; the app repository contains source and
authored synthetic tests. No public website or App Store deployment is requested.

[App candidate handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/BUILD63_CANDIDATE.md)
