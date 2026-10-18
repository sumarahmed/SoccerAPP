# Build 49 iPhone acceptance checklist

Version 0.2.0+49. Updated 18 October 2026. Signed internal build, automated checks and package verification passed; device counting acceptance remains pending. See [current status](../CURRENT_STATUS.md).

Owner testing confirms active-round resume works in build 48. Counting is not accepted: an uninterrupted Inside touches recording returned 7 against an owner reference of 38. Build 49 uses the selected drill to separate overlapping foot contacts for Inside touches. Other drills retain their experimental generic counter; this is not universal contact recognition.

- [ ] Reopen the original uninterrupted round corresponding to the reference clip and let automatic analysis finish. The new algorithm replaces the cached build 48 result; Retry analysis is available if counting is unavailable. Record the result against the manual reference of 38. Keep footage local.
- [ ] Check a separate Inside touches recording against a manual reference, including close and wider foot spacing.
- [ ] Check a stationary ball with still and moving feet, small camera/detection jitter, and a ball rolling straight past the feet without contact/reversal. These must not create touches.
- [ ] Check partial occlusion and tracking loss. Do not infer accuracy from a non-unavailable result or tracking coverage alone.
- [ ] Verify other drills do not use the Inside touches transfer rule. They remain experimental and require separate reference validation.
- [ ] Recheck active-round app switching, rest recovery, screenshots and silent playback/export. Preserve the build 48 improvement; force-quit recovery is not included.
- [ ] Confirm split/paused rounds remain ineligible and previous algorithm results are reanalysed rather than reused as current estimates.
- [ ] Confirm Guardian, local-only silent media and deletion ownership. Video deletion retains aggregate history; player deletion removes it.

Automated synthetic tests validate logic, not physical recognition accuracy. The initial touch may lack observed approach evidence, and tracking gaps can still discard contacts. Record device/iOS version and actual results; do not mark this checklist passed from a signed build alone.
