# Build 68 · Internal iPhone release

## Local timing and reverse-tracking verification · 7 November

Saved-round review now includes Analysis timing for newly processed rounds. It records queue wait, acquisition/transfer, counting and exclusive native stage totals. Stages cover decoding/conversion, full pose, primary/rescue ball detection, tracking, image evidence, buffer copies, model loading and transfer. Stage values are included in acquisition time. Save duration appears on the fresh result only. Native residual work is reported separately.

The shortcut skips backward tracking only when every buffered row has a ball box. If any box is missing, the full original reverse loop runs. Full pose, source-frame cadence and the 60 fps capture target with 30 fps fallback remain configured.

| Private six-second replay | Touch candidates before / after | Left / right attribution, both runs | Exact timestamps and evidence | Reverse passes skipped | Desktop wall time before / after |
| --- | --- | --- | --- | --- | --- |
| D01, 30.036 fps | 10 / 10 | 5 / 5 | Match | 70 of 78 | 29.60s / 28.55s |
| D18, 59.884 fps | 3 / 3 | 1 / 2 | Match | 19 of 57 | 68.61s / 69.54s |

These paired Python runs used full pose, original source frames and drill-owned counters. Complete event records, all frame evidence and pixel evidence were identical. D18 retained its tracking-coverage diagnostic. The results establish local parity on these inputs, with manual accuracy and native-device performance still to verify. The single-run timings show a small D01 improvement and a slight total D18 slowdown. This shortcut alone cannot resolve the reported 12-minute analysis delay.

Flutter analysis and the accepted-runtime/round/UI and background regressions passed locally. An exhaustive 64-pattern reverse-tracking test passed with real optical flow. Timing transport/history persistence has a runtime regression. Swift compilation and iPhone profiling need an Apple toolchain. No Codemagic build was started, and private recordings, generated evidence and replay outputs stay outside Git. Next device verification should run fresh analysis and inspect the stage totals to locate the dominant cost.

Performance observation, 7 November: the tester reported roughly 12 minutes for one 45-second round at 60 fps. That implies about 3.75 source frames per wall-clock second, assuming one uncached attempt. No per-stage trace accompanies this observation. At that rate the corrected 1,000 Touches pathway's 26.5 active minutes would take about 7 hours 4 minutes, before allowing for drill-specific costs. First profile one saved clip on the device: separate queue wait, decoding/conversion, full pose, primary and rescue ball detection, forward/reverse tracking, drill-specific image work, transfer, counting and saving. Benchmark skipping reverse tracking when every pending frame already has a ball box; compare event timestamps, attribution and counts on identical inputs before rollout. Keep 60 fps capture, full pose and accepted counting rules.

Local follow-up for saved-round analysis: the iOS bridge requests continued processing on iOS 26 and a time-limited UIKit assertion when available. Completed results are saved per round. During ordinary app switching, the analysis queue waits for foreground and retries its unfinished round if background time expires or is denied. A force-quit or process crash retains the existing manual recovery guard. On a registered iPhone, test switching away during a multi-round session, returning after expiry, and confirming each completed round contributes once. Native compilation, system scheduling and background inference on hardware still require verification.

The local zoom design places a labelled Zoom row above the three framing checks. Its rounded glass control groups minus, the current zoom level and plus. Each end has a 48-point minimum tap target and dims at its lens limit.

Post-build change for iPhone verification: Player camera setup offers zoom out and zoom in in 0.5× increments within the active lens's supported range. Adjusting zoom restarts framing confirmation. Verify both lenses and check the framing after rest and on the next drill.

Soccolo **0.2.0 (68)** uses the signed internal workflow for registered iPhones.

Repair verification passed Flutter analysis and the full default Flutter suite locally (1,839 passed, 14 skipped).

The [first Build 68 run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aed840d4df4604c6e315e47) stopped during Flutter tests. The light-theme Library calendar test checked for “My leg session” before it found the saved card. Native export tests and Flutter analysis had passed. IPA packaging was skipped. The same scenario passed locally in both themes on the original source. The test now waits for the saved card after both create and edit, with a bounded timeout, and still verifies the stored exercise order.

Live practice uses a compact smoked-glass timer and controls, a matching header and a glass frame for the exercise demo or unavailable-video placeholder. The tint uses 72% opacity with a clipped blur behind the controls. Setup and exercise previews share the finish. Check readability, recording smoothness and floor visibility on iPhone.

After automatic or manual framing confirmation, the first exercise opens in the same Up next preview used between drills. Its preview timer uses the configured rest duration (five seconds if rest is zero). Start countdown lets a ready player continue early. Recording begins after the drill countdown.

Touch pathways divide each drill's planned active time across its two rounds. In 1,000 Touches, D01 uses two 90-second rounds aiming for 220 touches total. Default rest is 30 seconds between rounds and between drills. Default session durations are 18:00, 35:00 and 51:00 respectively. Previously scheduled sessions adopt the correction on a new start. Active runs retain their saved timing.

Plans opens with today's local date selected and displays that day's sessions. Tapping a date switches the agenda. Week navigation keeps the selected weekday.

Local checks passed Flutter analysis, 35 UI and accessibility tests, and the camera recording recovery scenarios. Device verification should cover a fresh 1,000 Touches session launched from today's plan, the preview before round one, two 90-second D01 rounds and the glass controls in daylight.
