# Build 70 · Analysis recovery

Version 0.2.0 (70) was approved for a registered-device Codemagic build on 7 November 2026.

Codemagic run 95 succeeded from app commit `ec2c5b2cbba1c97eddffb73323eb15817db6a3c4`. Native compilation/tests, Flutter analysis, all verification suites and signed packaging passed. The published `soccolo_mobile.ipa` identifies version `0.2.0`, build `70`, with size 101,486,398 bytes. [Build and installation artifacts](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aeec0d4c52544670f865ba0)

Build 69 failed analysis of an older D17 recording after 446 ms. The owner confirmed the failure began with the update. The supplied native checkpoint contains model-loading startup data and no terminal cause. Recovery therefore restores Build 68's native analysis and foreground lifecycle as a group, with the exact regression still unconfirmed.

## Included behavior

Native acquisition, transport, tracking, model runtime and app lifecycle source match successful Build 68 commit `4417628`. Background execution, detailed native profiling and the backward-tracking shortcut are deferred. Full pose, the 60 fps capture target with 30 fps fallback, accepted counters and camera Zoom remain configured.

The video result keeps Copy analysis report, including failure reason and step. Available timing totals cover queue wait, acquisition/transfer and touch counting. Owner testing should rerun the same older D17 round with the app visible, then copy the report. Existing recordings remain available.

## Verification

Local Flutter analysis passed. The full default suite passed 1,844 tests with 14 skips. Twelve focused report/runtime/UI checks and the foreground lifecycle test passed. Native sources were compared with Build 68. Cloud compilation, native tests, Flutter tests and signed packaging are required before handoff. Actual recovery on the owner's phone remains pending.

Private recordings, fixtures and generated results stay outside Git.

The package is available for owner testing with the same older D17 recording. Device recovery remains unconfirmed until that test. Documentation-only commits record this outcome after the built app revision.

## Device result and diagnostic follow-up

The owner confirmed the recovery failed for the older D17 video and that D01 also fails. D17 returned `accepted-evidence-unavailable` at the accepted-analysis step after 552 ms. The native checkpoint recorded failure at 535 ms, frame 0, with 2966.89 MiB available and thermal state 1. The exact native exception remains unknown.

A local repair addresses error suppression in the transport. Failed jobs retain their cause until the consumer reads it, and copied reports include an allowlisted native reason, error domain/code, startup checkpoint and source-video metadata. Startup checkpoints distinguish model load, source opening and initial full-pose inference. Arbitrary SDK descriptions and recording paths are excluded. Counting behavior is untouched by this diagnostic work.

Flutter analysis and 12 focused tests passed at this stage. Added native tests require Apple-toolchain execution. This does not establish the root cause or successful recovery. The owner subsequently authorised expanded troubleshooting in Build 71; see [the new release record](build71-iphone-release.md) for the final scope and verification.
