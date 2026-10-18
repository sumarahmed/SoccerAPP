# Build 48 iPhone acceptance checklist

> Subsequent owner feedback confirms active-round resume. Counting remains unaccepted: 7 reported versus a reference of 38. Continue with the [build 49 checklist](build49-iphone-checklist.md); the other detailed checks below are not automatically accepted.

Version 0.2.0+48. Updated 18 October 2026. Signed build, automated checks and package verification passed; device acceptance remains pending. See [current status](../CURRENT_STATUS.md).

Build 47 owner feedback confirmed rest-stage pause/resume, but switching apps during either active recording round reset practice. Touch analysis also returned unavailable on a completed recording. Build 48 addresses active-round recovery and improves saved-video ball detection; recognition accuracy is not yet accepted.

- [ ] During round 1 recording, switch apps/Home, wait, return and Resume. Preserve the same remaining time, round and attempt; no setup restart.
- [ ] Repeat during round 2 and repeatedly within one round. Completed round 1 must remain present.
- [ ] Take screenshots during both rounds and during camera startup. Return paused and resume without resetting.
- [ ] Switch during rest, round saving and camera reopening at rest end. Keep the already-passed rest recovery and continue to round 2 without repeating rest.
- [ ] Stop while paused. Retain available footage and correct stopped progress. A temporarily unavailable camera must leave Resume available.
- [ ] Complete both rounds after interruptions. Verify silent playback, comparison and branded export, with the correct round order and no footage of time spent away from the app.
- [ ] Retry analysis on an uninterrupted completed recording. Compare the estimate with a manual reference count; test stationary-ball footage for false touches. Unavailable remains distinct from zero. Split/paused rounds remain ineligible for estimates.
- [ ] Recheck light/dark setup and comparison, safe-area controls, identity removal, large text, screen reader, reduced motion and No camera.
- [ ] Recordings/exports stay silent and local. Guardian and player ownership remain intact. Video deletion retains aggregate round history; player deletion removes it.

Switching apps is supported by stopping the camera and saving a local segment, then restarting it only on Resume. This is not background recording or recovery after force-quitting/process termination. Saved-video detection uses closer ball crops without lowering confidence/coverage requirements. It remains experimental and needs device evidence. Record device/iOS version, timing and observed result for each check; do not mark acceptance from automated tests alone.
