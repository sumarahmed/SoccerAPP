# Build 73 · D25 storage and analysis troubleshooting

Version 0.2.0 (73). The owner explicitly authorised this consolidated Codemagic build on 8 November 2026 after local investigation. No private footage or derived video evidence is included in Git or CI.

## Changes

- Store complete D25 contour/candidate evidence in private temporary files instead of retaining a full round as expanded maps. Keep the existing 64 MiB resident serialized-metadata limit, separate 512 MiB disk limit and eight-row decoded-proof cache. Lazy template views preserve accepted decisions. Close worker handles before deleting temporary proofs on success, error or cancellation.
- Add attempt-bound reports, partial timings, evidence budgets, cache/deletion diagnostics, mask range/copy/layout evidence, native resource lifetimes, transport state, delayed cleanup memory samples and D25 per-pass wall times. Remove the transport abandonment timer's unnecessary strong reference. Keep originating failures intact during cleanup.
- Add **Share original round** below the existing recording export controls. It shares only the selected saved source URL. Choose **Save to Files** for the unchanged source file: no branding, concatenation or frame-rate conversion. Native validation restricts this route to saved MP4 rounds inside app Application Support; it cannot share arbitrary files.

## Verification and remaining limits

The preceding full Flutter suite passed 1,886 tests with 14 skips. Production-enabled runtime tests passed 15; the additional cleanup/long-session run passed four. D25 complete-output fixtures match through disk-backed evidence, including a two-row test cache. A 3,600-frame synthetic minute exceeding the old cumulative 64 MiB limit completes, with cleanup and subsequent-job recovery checked. Python row-layout controls passed two tests. Final release checks also cover selected-round original sharing and static analysis.

**D01/D17 mask failure is not claimed fixed.** The pinned iOS SDK has a supported row-padding hypothesis, but actual failing device layout remains unconfirmed. Full-pose Windows replay of supplied composed exports returned valid masks; those exports are 30 fps and differ from the original source rounds. No tolerance widening, guessed stride reconstruction or evidence removal is included.

**D25 native runtime remains unresolved.** This release addresses the locally reproduced transfer-retention failure, not the approximately 32-minute native multipass runtime. iPhone memory/count accuracy and Swift compilation/tests are separate verification steps. Codemagic runs the existing native regression suite before producing the signed Ad Hoc IPA.

Full pose, all 12 accepted analysers, the 60 fps capture target/30 fps fallback and foreground-only analysis remain. No Lite production model or live calibration changes.

## Device checks

Install over the existing app to preserve saved rounds. First share the original D01/D17/D25 round files through Save to Files. Retry a short D01/D17 analysis and copy its report if it fails; then test D25, inspect cleanup diagnostics and verify successful counts/timestamps/foot attribution. Keep cloud build success distinct from device recovery.

[Approved Codemagic run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aefa9e6b7c317b7ba43df26) was submitted once on 8 November 2026. Codemagic confirmed source `a66d2e09d4c76701c709387104f541f75ad0417f` and status `preparing`. Cloud success and IPA availability are not yet confirmed. Final release-focused tests passed 81 cases; the original-share test passed separately after correcting its asynchronous initialization and lazy-list scrolling. Final Flutter analysis passed. See BUILD72_INVESTIGATION.md for detailed evidence and limitations.
