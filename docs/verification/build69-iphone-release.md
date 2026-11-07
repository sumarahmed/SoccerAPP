# Build 69 · iPhone analysis timing

Version 0.2.0 (69) is available for registered iPhones. The user approved the build on 7 November 2026 to collect analysis timing reports.

Codemagic run 94 succeeded from app commit `356367938df7702ef98a94515f328efef11763d4`. Native simulator tests, Flutter analysis, all Flutter verification suites, accepted-analysis checks and signed packaging passed. The published `soccolo_mobile.ipa` identifies version `0.2.0`, build `69`, with size 101,497,560 bytes (96.80 MiB). [Build and installation artifacts](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aee98d817c8b705587f055b)

## Tester steps

1. Open Videos and select a recording and round.
2. Run **Analyse again** for results created with an older build, or wait for a new analysis to finish.
3. Tap **Copy analysis report** below the result and paste it into the testing conversation.

The same action is available inside video comparison and for unavailable counts. It copies drill, round, duration, frame rate, count, coverage, algorithm and build identifiers together with the timing breakdown. Recording paths, player names and source hashes are excluded. The report identifies missing timing data for older results.

New reports separate queue wait, video acquisition/transfer and counting. Exclusive native stage times cover pose, detection, tracking, image work, decoding and transfer. Native stages are included in video acquisition time. Save duration is available on the fresh result only. OS, thermal states and Low Power Mode provide context for performance comparisons.

## Scope and verification

### Device failure follow-up

The owner reported D17 round 1, 60 seconds, failing after 446 ms on Build 69 source `3563679`, without stage timings. Cause remains unconfirmed. The copied report omitted the failure reason, and the native bridge discarded partial timings and specific error categories.

The supplied Settings checkpoint shows loading-model at frame 0 and 0 ms, 212.31 MiB footprint, 3163.69 MiB available and thermal state 2. It contains no terminal error. The owner confirmed the regression began with Build 69. The accepted source only stops for critical thermal state, so the snapshot does not establish heat as the cause.

The local recovery restores Build 68's native acquisition, transport, tracking, model runtime and app lifecycle source exactly from `4417628`, together with the prior Dart foreground analysis lifecycle. Background execution, native stage profiling and the backward-tracking shortcut are deferred as a group. The individual failing change remains unconfirmed. The earlier native diagnostic experiment is excluded from this recovery.

The recovery retains camera Zoom, copyable reports and Dart totals for queue wait, acquisition/transfer and counting. Reports include failure reasons and steps. Local Flutter analysis, 12 focused runtime/report/UI tests and the foreground lifecycle test passed. The full local suite passed 1,844 tests with 14 skips. Device validation and a separately approved recovery build remain pending.

The affected clip is an older saved recording. Source review confirmed current-directory discovery in the library and identical saved-video entry points and round-window logic between Builds 68 and 69. No changed storage-path logic was found to explain the regression. Existing recordings remain available for device testing.

Local Flutter analysis passed, and the full default suite passed 1,846 tests with 14 skips. Enabled tests verified the copy button and background retry. Counting parity checks continue comparing all decision fields while validating timing metadata separately.

This release includes the pending camera Zoom controls, saved-analysis background execution requests, timing instrumentation and the redundant reverse-tracking shortcut. Local Python replay preserved D01/D18 counts, timestamps, foot attribution and frame evidence. The speed difference was small, so device reports will guide further optimization. Capture retains the 60 fps target with 30 fps fallback and production full pose.

Local tests exercise copied timing values, privacy filtering, old results and the actual copy button. The internal Codemagic workflow performs Swift compilation, native tests, Flutter checks and signed IPA packaging. Native background scheduling and real iPhone performance require device testing.

Private recordings and generated results remain outside Git. Real iPhone timings and background continuation await owner testing. Documentation-only commits after the build record this outcome separately from the built app revision.
