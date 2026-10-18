# Soccolo current product status

Updated **18 October 2026**. Current signed internal iPhone candidate: **0.2.0+48 (build 48)**. Automated checks and package verification passed; physical acceptance remains pending. This is a family pilot, not a production or App Store release.

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

## Build 48 changes

- Switching apps during either iPhone recording round pauses the same attempt and retains the remaining time. Resume reopens the camera without repeating setup. Completed rounds remain present.
- Silent local recording segments are joined for round playback; time away from the app is not recorded. Screenshot focus loss pauses the existing round. Interrupted camera startup/reopening remains retryable.
- Saved-video counting now uses closer ball detection and a confident single-person pose fallback previously limited to setup. Confidence and coverage requirements are unchanged; algorithm version 2 triggers reanalysis rather than reusing old failed results. Touch accuracy remains unconfirmed.
- Split/paused rounds retain footage and progress but remain ineligible for touch estimates. No totals are invented for unobserved activity.

## Retained build 47 changes

- Switching apps during rest after round 1 preserves the attempt, saved first round and remaining rest. Return to Resume practice and then round 2, without another setup loop. Saving/background races use the same paused checkpoint.
- The bottom practice card fills the safe area; controls remain above the home indicator and the circular timer remains.
- Setup status/indicators and comparison frames/labels follow light and dark themes.
- Player name/avatar are removed from drill and summary screens. Remaining profile names start with uppercase for display; ownership and stored spelling remain unchanged.
- Owner testing of build 47 confirmed rest-stage recovery but reported resets during active recording in both rounds and unavailable touch counts. This feedback drives build 48; the earlier build is not accepted for these behaviors.

## Verification and remaining work

Build 48 final-source cloud validation: clean static analysis, 241 Flutter tests passed (five gated skips), 36 enabled-feature tests passed and 27 native iOS tests passed (one skipped, zero failures). Six local repository contract suites passed. Signed build, artifact publication and package verification succeeded. Automated checks do not establish physical interruption or recognition accuracy.

Use the [build 48 iPhone acceptance checklist](verification/build48-iphone-checklist.md). App switching during active iPhone recording saves a local segment and returns paused; recording restarts only on Resume. This is not background recording or force-quit recovery. Touch analysis and regional voice accuracy remain device acceptance items. Historical evidence: [build 47 checklist](verification/build47-iphone-checklist.md), [build 46 checklist](verification/build46-iphone-checklist.md).

## Data and scope boundaries

Recordings and exports remain silent and on-device. No new video/audio uploads, face/body data retention or media analytics telemetry are introduced. Deleting a video retains its touch total and round summary; protected player deletion removes that player's history. Estimates record drill/duration/algorithm context; best comparisons require matching player, drill, duration and algorithm. Unavailable analysis is never a fabricated zero. These summaries prepare for future analytics, not a delivered challenge dashboard.

New difficulty/challenge levels, live counting, manual touch entry, cloud media sync, club administration/content publishing and live payments are outside this release. Final drill demonstrations and wider device acceptance remain open. See the [current backlog](content/current-backlog.md).

For continuation in a new chat, read the [current handoff](RESUME_HANDOFF.md).
