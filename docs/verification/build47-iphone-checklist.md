# Build 47 iPhone acceptance checklist

Version 0.2.0+47. Updated 18 October 2026. Signed build and automated checks passed; physical acceptance of these fixes remains pending. See [current status](../CURRENT_STATUS.md).

Already reported working on build 46: camera switching, screenshot near round 2 end, cues, Settings options and framed comparison. Profile-avatar testing is superseded by the request to remove identity from drill/summary screens.

- [ ] Finish round 1, switch apps during rest, wait and return. Resume practice must retain the remaining rest and continue to round 2. No new-camera/setup loop or reset to round 1.
- [ ] Repeat immediately after round 1 ends while saving, and just as rest ends. Repeat background/foreground more than once. Only one summary and both round clips should remain.
- [ ] Recheck the previously passed screenshot near round 2 end.
- [ ] Light/dark setup status has aligned Player/Feet/Ball indicators and matching theme colours. Comparison frames and labels follow both themes; recorded video colours are unchanged.
- [ ] Practice card covers the bottom edge, with no exposed camera strip. Controls remain above the home indicator. Circular timer and cues remain usable.
- [ ] Drill setup, recording and summary omit player name/avatar. Other profile labels capitalize the first character; player switching/ownership remain correct.
- [ ] Check 200% text, screen reader, reduced motion, No camera, silent recordings/exports, Guardian and retained touch summaries after video deletion.

App switching during an active recording still safely finalizes a partial clip; this release adds rest recovery, not background video capture or recovery after force-quitting. Counting/voice models are unchanged. Record device/iOS version and exact timing for failures. Unavailable touch analysis is not zero.
