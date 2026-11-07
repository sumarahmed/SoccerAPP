# Build 72 · Mask validation and D25 evidence repair

Version 0.2.0 (72). The owner approved the combined Codemagic build on 8 November 2026 after reviewing the Build 71 device failures.

[Approved Codemagic run 98](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aef89444d92a0e61de8a736) completed successfully from `5a1941631e55e6aa195fef90f2b6bb6e8fac1d8f`. All listed stages, including native regression tests, Flutter checks, signing and publishing passed; `soccolo_mobile.ipa` was produced. The release preparation reran all 66 Python and 79 focused Flutter tests successfully. Device success is separate from these cloud checks.

## Device follow-up: D25 evidence budget

The owner supplied a Build 72 D25 report for a 60.018-second, approximately 59.98 fps video. Native processing completed all image passes and source verification; evidence transfer then failed with Dart `StateError: Accepted evidence memory budget exceeded` after 1,928,031 ms (32m 08s). This attempt passed the earlier Build 71 invalid-evidence failure point. It does not establish D01/D17 recovery: the D17 mask failure included under previousAttempts is from Build 71.

Source inspection confirms `AcceptedNativeAnalysis.run` accumulates retained rows and pixel records, counting serialized evidence against a fixed 64 MiB default. D25 is measured using `d25ProofBytes`; either row or pixel accumulation can throw the same error. The report does not identify the exact offending record/byte total. Its cancellation at native transfer frame 2526 follows Flutter cancellation and transport closure, consistent with cleanup after the Dart callback failed, rather than the originating fault. This is an application evidence limit, not an observed operating-system out-of-memory termination: final available memory is approximately 2,602 MiB and sampled process footprint 774 MiB.

Phase durations derived from first-stage timestamps (wall time):

| Phase | Seconds |
| --- | ---: |
| Initial acquisition | 396.5 |
| Forward tracking | 93.0 |
| Reverse tracking | 37.3 |
| Join | 2.3 |
| v5 refinement | 137.4 |
| v8 refinement | 462.1 |
| Bridge | 378.2 |
| v10 refinement | 401.1 |
| Source verification | 0.1 |
| Transfer until cancellation | 20.0 |

The long runtime and transfer retention are distinct problems. Increasing the cap alone is not a bounded-memory repair. A follow-up needs bounded storage/access for complete decision evidence, with complete-output parity on counts, event timestamps and attribution, and a long 60 fps regression exceeding the former serialized limit. Existing D25 tests cover complete large individual rows but did not establish full-minute retained-memory behavior. Native phase optimization must preserve all accepted decisions and full pose. No further Codemagic run is authorized by this device report, and no memory-limit fix is claimed here.

## Changes

- Normalize only tiny finite person-mask endpoint overshoots within eight Float epsilons. Preserve every valid value and reject nonfinite or materially invalid masks. Record aggregate anomalous ranges, counts and mask origin for diagnosis. Build 71 confirms the shared validation failure in D01/D17, but did not record the offending values; numerical round-off remains an unverified hypothesis.
- Leave D25 circle candidates with missing/null radial residuals unconfirmed in image corroboration and gap bridging. Preserve valid candidates and reject malformed residual types. This repairs a reproduced defect matching the reported exception, but the exact private recording has not been replayed.
- Add native regression tests for mask boundaries, ownership, unchanged thresholds and diagnostics, and synthetic D25 missing-fit cases shared with the Python reference.

## Verification and constraints

The preceding local verification passed 66 Python D25 tests and 79 focused Flutter D25 tests, with 45 existing successful fusion/bridge cases and 14 directional cases unchanged. Native compilation and tests run in Codemagic; they cannot run on this Windows host. The cloud outcome and device recovery must be verified separately.

Full pose, all 12 accepted drill analysers and the 60 fps capture target with 30 fps fallback remain. No Lite pose, live calibration or private recordings are included. Analysis remains foreground-only. See BUILD71_RELEASE.md for device evidence and detailed investigation.

## Device verification

Install over the existing app and retry saved D01, D17 and D25 rounds while keeping Soccolo open. Copy the analysis report if any attempt fails; new mask facts distinguish tiny endpoint overshoots from materially invalid data. Confirm counts, timestamps and foot attribution on successful results.
