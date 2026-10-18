# Build 46 iPhone acceptance checklist

Version 0.2.0+46. Updated 18 October 2026. Signed build and automated checks passed; physical acceptance pending. See [current status](../CURRENT_STATUS.md).

- [ ] New practice defaults to Exercise clips. Explicit No camera still works.
- [ ] Switch front/rear on camera setup; checks reset and Start remains clear. Switching never starts recording automatically.
- [ ] Screenshot near round 2's end: keep the current round/time or pause for Resume, never restart round 1. Screenshot during saving still reaches the summary. Test actual background/lock separately; retained partial video is distinct from a completed round.
- [ ] Summary shows player avatar/name at the right. Select Round 1/2 in one analysis section; Retry appears only for an eligible round without an estimate. Successful results remain cached.
- [ ] Comparison retains both videos in frames, with a round timeline, speed controls and replay. No View in Videos link. Check seek boundaries and immediate playback.
- [ ] Cues contain short player instructions, no editorial age guidance or quotation marks.
- [ ] In Settings select Follow device or a regional English variety, then enable Voice commands. Test pause/resume/stop with different speakers and offline; stop confirms. Unavailable on-device models must report unavailable.
- [ ] Recheck both themes, 200% text, screen reader, reduced motion, Guardian, separate players, silent recordings/exports and video-deletion history retention.

Record device/iOS version and reproduction steps for failures. Touch counts remain experimental; unavailable is not zero. No claim of validated accent or count accuracy is made by the build checks.
