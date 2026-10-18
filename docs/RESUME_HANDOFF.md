# Soccolo current handoff

Updated 18 October 2026. Current signed internal iPhone candidate: **0.2.0+47**. Automated checks passed; device acceptance of the latest fixes remains pending.

Read [current status](CURRENT_STATUS.md), the [build 47 iPhone checklist](verification/build47-iphone-checklist.md), and the [current backlog](content/current-backlog.md).

Latest changes preserve rest/round progression after app switching, theme setup indicators and comparison frames, fill the bottom practice card to the safe area, and remove profile identity from drill/summary screens. Remaining profile labels start uppercase. Active-recording background interruption still retains a partial clip; this is not background capture or force-quit recovery.

Owner reports build 46 camera switching, screenshots near round 2 end, cues, Settings options and framed comparison working. First build 47 retest: finish round 1, switch apps, return and Resume into round 2 without setup or round-1 reset. Also test switching while saving and camera reopening, light/dark themes and the bottom safe area.

235 Flutter tests, 30 enabled-feature tests and 25 native iOS tests passed; five Flutter and one native skip remain documented. Device accuracy is separate: post-recording touch estimates remain experimental and accent accuracy is not established.

Source and detailed handoff are maintained in the private Soccolo-app repository, on `feat/sp014-local-camera-feasibility`, at `apps/mobile/RESUME_HANDOFF_BUILD47.md`. This public repository uses `main` and contains sanitized product documentation. The public Pages site is https://sumarahmed.github.io/SoccerAPP/.

Preserve local-only silent media, unchanged Guardian protections, optional on-device voice input, tones-only practice output and simulated coach bookings. No new difficulty levels, live counts or manual count entry. Video deletion keeps aggregate round history; player deletion removes it. Historical delivery criteria are not newly accepted by a successful build.
