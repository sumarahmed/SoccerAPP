# Build 72 · Mask validation and D25 evidence repair

Version 0.2.0 (72). The owner approved the combined Codemagic build on 8 November 2026 after reviewing the Build 71 device failures.

## Changes

- Normalize only tiny finite person-mask endpoint overshoots within eight Float epsilons. Preserve every valid value and reject nonfinite or materially invalid masks. Record aggregate anomalous ranges, counts and mask origin for diagnosis. Build 71 confirms the shared validation failure in D01/D17, but did not record the offending values; numerical round-off remains an unverified hypothesis.
- Leave D25 circle candidates with missing/null radial residuals unconfirmed in image corroboration and gap bridging. Preserve valid candidates and reject malformed residual types. This repairs a reproduced defect matching the reported exception, but the exact private recording has not been replayed.
- Add native regression tests for mask boundaries, ownership, unchanged thresholds and diagnostics, and synthetic D25 missing-fit cases shared with the Python reference.

## Verification and constraints

The preceding local verification passed 66 Python D25 tests and 79 focused Flutter D25 tests, with 45 existing successful fusion/bridge cases and 14 directional cases unchanged. Native compilation and tests run in Codemagic; they cannot run on this Windows host. The cloud outcome and device recovery must be verified separately.

Full pose, all 12 accepted drill analysers and the 60 fps capture target with 30 fps fallback remain. No Lite pose, live calibration or private recordings are included. Analysis remains foreground-only. See BUILD71_RELEASE.md for device evidence and detailed investigation.

## Device verification

Install over the existing app and retry saved D01, D17 and D25 rounds while keeping Soccolo open. Copy the analysis report if any attempt fails; new mask facts distinguish tiny endpoint overshoots from materially invalid data. Confirm counts, timestamps and foot attribution on successful results.
