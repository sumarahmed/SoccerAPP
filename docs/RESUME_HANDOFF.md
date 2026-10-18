# Soccolo current handoff

Updated 18 October 2026. Current signed internal iPhone candidate: **0.2.0+48**. Automated checks and package verification passed; device acceptance remains pending.

Read [current status](CURRENT_STATUS.md), the [build 48 iPhone checklist](verification/build48-iphone-checklist.md), and the [current backlog](content/current-backlog.md).

Latest changes preserve active iPhone rounds across app switching, retaining remaining time and completed rounds. Resume starts a new silent camera segment without setup; saved parts join locally for playback. Saved-video analysis now uses closer ball detection and a single-person pose fallback. Confidence checks remain conservative and counting accuracy is unconfirmed. Build 47 theme/safe-area/identity changes are retained. This is not background capture or force-quit recovery.

Owner testing of build 47 confirmed rest recovery but found resets during active recording in both rounds and unavailable counts on a completed recording. Prioritize switching apps and screenshots during rounds 1 and 2, repeated interruptions and camera reopening. Recheck rest recovery and silent joined playback/export. Evaluate counting only on uninterrupted completed rounds against a manually counted reference; split/paused rounds remain ineligible.

Final-source cloud checks: clean analyzer, 241 Flutter tests with five gated skips, 36 enabled-feature tests and 27 native iOS tests passed (one skipped, zero failures). Six local static/synthetic contract suites passed; signed IPA verified. Device accuracy is separate: post-recording touch estimates remain experimental and accent accuracy is not established.

Source and detailed handoff are maintained in the private Soccolo-app repository, on `feat/sp014-local-camera-feasibility`, at `apps/mobile/RESUME_HANDOFF_BUILD48.md`. This public repository uses `main` and contains sanitized product documentation. The public Pages site is https://sumarahmed.github.io/SoccerAPP/.

Preserve local-only silent media, unchanged Guardian protections, optional on-device voice input, tones-only practice output and simulated coach bookings. No new difficulty levels, live counts or manual count entry. Video deletion keeps aggregate round history; player deletion removes it. Historical delivery criteria are not newly accepted by a successful build.
