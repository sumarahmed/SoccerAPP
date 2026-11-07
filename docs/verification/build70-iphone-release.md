# Build 70 · Analysis recovery

Version 0.2.0 (70) was approved for a registered-device Codemagic build on 7 November 2026.

Build 69 failed analysis of an older D17 recording after 446 ms. The owner confirmed the failure began with the update. The supplied native checkpoint contains model-loading startup data and no terminal cause. Recovery therefore restores Build 68's native analysis and foreground lifecycle as a group, with the exact regression still unconfirmed.

## Included behavior

Native acquisition, transport, tracking, model runtime and app lifecycle source match successful Build 68 commit `4417628`. Background execution, detailed native profiling and the backward-tracking shortcut are deferred. Full pose, the 60 fps capture target with 30 fps fallback, accepted counters and camera Zoom remain configured.

The video result keeps Copy analysis report, including failure reason and step. Available timing totals cover queue wait, acquisition/transfer and touch counting. Owner testing should rerun the same older D17 round with the app visible, then copy the report. Existing recordings remain available.

## Verification

Local Flutter analysis passed. The full default suite passed 1,844 tests with 14 skips. Twelve focused report/runtime/UI checks and the foreground lifecycle test passed. Native sources were compared with Build 68. Cloud compilation, native tests, Flutter tests and signed packaging are required before handoff. Actual recovery on the owner's phone remains pending.

Private recordings, fixtures and generated results stay outside Git.
