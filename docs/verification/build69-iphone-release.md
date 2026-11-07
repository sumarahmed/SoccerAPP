# Build 69 · iPhone analysis timing

Version 0.2.0 (69) is prepared for registered iPhones. The user approved the build on 7 November 2026 to collect analysis timing reports.

## Tester steps

1. Open Videos and select a recording and round.
2. Run **Analyse again** for results created with an older build, or wait for a new analysis to finish.
3. Tap **Copy analysis report** below the result and paste it into the testing conversation.

The same action is available inside video comparison and for unavailable counts. It copies drill, round, duration, frame rate, count, coverage, algorithm and build identifiers together with the timing breakdown. Recording paths, player names and source hashes are excluded. The report identifies missing timing data for older results.

New reports separate queue wait, video acquisition/transfer and counting. Exclusive native stage times cover pose, detection, tracking, image work, decoding and transfer. Native stages are included in video acquisition time. Save duration is available on the fresh result only. OS, thermal states and Low Power Mode provide context for performance comparisons.

## Scope and verification

Local Flutter analysis passed, and the full default suite passed 1,846 tests with 14 skips. Enabled tests verified the copy button and background retry. Counting parity checks continue comparing all decision fields while validating timing metadata separately.

This release includes the pending camera Zoom controls, saved-analysis background execution requests, timing instrumentation and the redundant reverse-tracking shortcut. Local Python replay preserved D01/D18 counts, timestamps, foot attribution and frame evidence. The speed difference was small, so device reports will guide further optimization. Capture retains the 60 fps target with 30 fps fallback and production full pose.

Local tests exercise copied timing values, privacy filtering, old results and the actual copy button. The internal Codemagic workflow performs Swift compilation, native tests, Flutter checks and signed IPA packaging. Native background scheduling and real iPhone performance require device testing.

Private recordings and generated results remain outside Git. The cloud run and artifact outcome will be recorded below after launch.
