# Build 50 iPhone acceptance checklist

Version 0.2.0+50. Signed internal build, automated checks and package verification passed; device acceptance remains pending. See [current status](../CURRENT_STATUS.md).

Build 49 omitted analysis from the grouped saved-recording screen. Its instruction to reopen that screen for a fresh count was incorrect. Build 50 adds the analysis/comparison card beneath the round buttons; algorithm v3 is unchanged.

1. Open Videos → Recordings. Tap the original drill recording's play thumbnail, or Video actions → Review video.
2. Select Round 1 or Round 2 and scroll below the round buttons. Confirm the analysis card belongs to that round. Existing eligible originals should show a count or a clear unavailable result.
3. For a round last analysed in build 48, let the new analysis finish automatically. Compare the reference round against 38 touches (previously reported as 7). Record the actual result; accuracy is still unaccepted.
4. Switch rounds and check the count and Compare with demo use the selected original. Compare with demo must pause existing playback.
5. A split/paused or incomplete round must remain unavailable. Missing metadata must not create a guessed count. Retry analysis is offered only where the existing eligibility rules permit it.
6. Saved exports remain rendered playback/export copies. Use the original under Recordings for analysis; deleting the original cannot be undone by having an export.
7. Recheck existing playback, exporting one round/all rounds, active-round resume, rest recovery and Guardian/player ownership. Recordings remain silent/local; video deletion retains aggregate history and player deletion removes it.

Continue the [build 49 counting checks](build49-iphone-checklist.md) on independent footage and stationary-ball/straight-roll controls. Passing interface tests or signing does not establish physical counting accuracy.
