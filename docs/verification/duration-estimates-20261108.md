# Duration estimates and diagnostics retirement — 8 November 2026

## Decision and delivery state

The owner chose immediate duration-based estimated touches while video analysis continues as a separate service research workstream. Provisional drill-specific rates are approved. This checkpoint is local source/documentation work, not a newly installed app or published website. The latest supplied device report is Build 73; it does not contain this replacement experience. No further Codemagic build is authorized without fresh approval.

## Current candidate

- All 23 catalog drills have provisional rates; D24 has zero touches. Estimated touches use active work duration, excluding rest and pauses. Stopped work uses actual active time. Unknown or skipped work receives no credit.
- Results and dashboards explicitly identify estimates. Counts are not observations from video, technique assessments or verified achievements.
- Estimates persist their rate/version/time basis. Dashboard totals use practice identities and exclude legacy video-analysis counts to prevent duplication.
- On-device analysis is disabled even when old build flags are supplied. Recording, playback, comparison and sharing remain available.
- Temporary analysis report UI, memory experiments and persistent native performance/memory logging are retired. Basic errors, resource safeguards and cancellation remain in retained research code.
- The service is not deployed; no upload or server dependency has been introduced.

## Evidence and limitations

Build 73 spent approximately 41 minutes processing a one-minute D25 video before the owner stopped it. That is not a completed runtime benchmark. Cleanup measurements showed tracked resources returning to zero and memory declining; that attempt does not support a persistent resource-leak diagnosis. Local faster prototypes failed strict event regression and are retained as research, not accepted counting implementations.

The private implementation handoff records local Flutter checks, research unit tests and native source-review limitations. Windows validation does not replace Xcode compilation or iPhone acceptance. Private footage, device paths and raw diagnostic reports are not published here.

## Next acceptance

- Review provisional rates as product assumptions; do not describe them as calibrated contact counts.
- On the next separately approved device build, check instant estimates, pause/rest exclusion, stopped sessions, journal idempotency, video preservation, dashboard isolation and absence of diagnostic screens.
- Continue offline service research with explicit event-accuracy, throughput, retention and cost criteria before hosting or app integration.
- Preserve historical build records as dated evidence; they do not authorize more builds, pushes or deployment.

Implementation commit: `d6025bc` in the private Soccolo-app repository. Local checks passed: Flutter analysis, 34 targeted Flutter tests, a separate five-test legacy-flag blocking run, 11 research unit tests and documentation validation. Native Swift changes are source-reviewed only on Windows; no new iOS build or device acceptance is claimed.

## Subsequent Build 74 authorization

The owner subsequently approved pushing both repositories to GitHub and building the internal app, then requested an estimated-touch results UI fix. The candidate now emphasizes the count, active time and rate, with responsive light/dark layouts and explicit no-touch/unavailable states. Version 0.2.0+74 is being validated locally before submitting one Codemagic build. The earlier no-build restriction is superseded for this specific build only. Cloud completion and device acceptance remain unconfirmed.

Build 74 local validation passed: 1,892 Flutter tests (14 existing skips), 38 release-configuration tests, Flutter static analysis and four model-packaging checks. The results card is tested at 320-pixel width and 3× text in both themes.

The authorized Build 74 cloud run failed at native compilation after both repositories were pushed. A leftover call to the retired memory-probe object caused the compiler error; no installable IPA was produced. The source correction removes that reference and adds a local native-reference check. A second paid run has not been started and requires owner approval. Local Flutter success is not native build success.
