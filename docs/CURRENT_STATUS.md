# Soccolo current product status

Updated **18 October 2026**. Current signed internal iPhone candidate: **0.2.0+45 (build 45)**. Automated verification passed; physical iPhone acceptance is pending. This is a family pilot, not a production or App Store release.

## Where documentation is maintained

- **Public:** this SoccerAPP repository and the [published status/activity map](https://sumarahmed.github.io/SoccerAPP/) contain product scope, public release summaries, backlog and acceptance checklists.
- **Private:** [Soccolo-app](https://github.com/sumarahmed/Soccolo-app) contains Flutter/native source, implementation plans, detailed build evidence and internal installation instructions. Access requires signing in with an authorized account. Latest implementation documentation is on `feat/sp014-local-camera-feasibility`, under `apps/mobile/CURRENT_STATUS.md` and the dated build review files; the default branch is not the current pilot handoff.
- Public documentation was last published in September while October implementation notes were maintained privately. Local October public drafts were also left unpublished. This update reconciles those records. Historical plans and signed-off decisions remain historical; this release does not automatically accept their activity criteria.

## Implemented pilot scope

| Area | Current behaviour |
| --- | --- |
| Family and Guardian | Account sign-in, local player profiles and switching, protected Guardian management, player-owned plans/history/media and progress |
| Training | D01–D10 drill experience, plans/pathways, timed rounds/rest, camera and no-camera practice; temporary demonstrations remain labelled |
| Interface | Home, Train, Plans, Library, Videos and Settings; System/Light/Dark green/lime design, 48-point controls and large-text layouts; content completeness is separate from screen availability |
| Camera setup | Direct setup and labelled Start countdown; aspect-preserving preview, optional player/feet/ball checks, foreground screen-awake handling and interruption recovery |
| Practice | Circular timer retained: compact during work, large for countdown/final five seconds; round/rest timeline, movable/expandable/tuckable demo and optional visual cues |
| Sound and commands | Supplied Soft/Energetic tones or Off, separate music/volume; old spoken countdown/start/rest output removed. Optional on-device voice input is off by default; pause/resume act immediately, stop confirms |
| Review and exports | Local Videos library, playback, silent branded exports and saved exports; post-recording demo/player comparison with round/speed selection |
| Touch analysis | Experimental automatic post-recording estimates on eligible rounds; cached finished outcomes, explicit retry, player-owned aggregate summaries separate from the video |
| Coach screens | Discovery, bookings and payment presentation remain local simulations; no live payments or marketplace |

Native automatic detection, touch analysis and on-device voice commands are iOS capabilities in this review candidate. Android has unavailable/manual fallbacks, not equivalent verified detection or voice support. Review features are gated in source and enabled in the internal candidate; microphone listening still requires opt-in and permission.

## Build 45 changes

- Guided camera completion goes directly to one Practice summary with drill picture, measured activity and comparison/touch analysis. The floating demo and duplicate completion step are removed from that handoff; existing no-camera completion is unchanged.
- A durably saved attempt is no longer labelled unsaved solely because derived rewards/history refresh fails. Real persistence failures still show retry. The original device exception was not captured, so the reported case still needs retesting.
- Smaller docked circular timer and less panel whitespace preserve more camera view. Every round/rest label has a dot. One lime cue sits above the timeline, fading over four seconds without a secondary Next label. Reduced motion keeps it opaque until hidden.
- Setup checks align with the preview. Returning from interruption tries to resume the camera and recheck positioning; Resume camera is available on failure. Recovery never starts recording automatically.
- Expanded demo playback uses tap-to-pause and a central Play overlay. Completed analysis estimates and tracking-unavailable outcomes are cached; explicit retry reruns analysis.
- Voice handling supports revised partial transcripts and microphone-compatible tones/music. Actual device command reliability remains an acceptance check.

## Verification and remaining work

Build 45 passed static analysis, **227 Flutter tests** (four feature-gated skips), **21 enabled-feature tests**, and **24 native simulator tests** (one skipped, zero failures). Six local repository contract suites passed; these do not establish deployed backend acceptance. Signing and package checks succeeded. Automated light/dark large-text setup captures used a test camera.

Use the [iPhone acceptance checklist](verification/build45-iphone-checklist.md). Device checks still cover progress saving, camera recovery, command reliability, immediate playback, analysis accuracy, exports, ownership and accessibility. Successful compilation is not real-camera accuracy evidence. Earlier owner-reported export fixes supersede the old build-21 failure for the cases actually retested; broad regression acceptance remains separate.

## Data and scope boundaries

Recordings and exports remain silent and on-device. No new video/audio uploads, face/body data retention or media analytics telemetry are introduced. Deleting a video retains its touch total and round summary; protected player deletion removes that player's history. Estimates record drill/duration/algorithm context; best comparisons require matching player, drill, duration and algorithm. Unavailable analysis is never a fabricated zero. These summaries prepare for future analytics, not a delivered challenge dashboard.

New difficulty/challenge levels, live counting, manual touch entry, cloud media sync, club administration/content publishing and live payments are outside this release. Final drill demonstrations and wider device acceptance remain open. See the [current backlog](content/current-backlog.md).
