# Soccolo current product status

Updated **18 October 2026**. Current signed internal iPhone candidate: **0.2.0+46 (build 46)**. Signed build and automated checks passed; physical iPhone acceptance is pending. This is a family pilot, not a production or App Store release.

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

## Build 46 changes

- Camera clips are selected by default for new practice; No camera remains available. Setup offers front/rear switching with fresh positioning checks.
- Brief inactive events pause the same round instead of resetting it; saving tolerates transient focus loss. Actual background keeps existing partial-recording safety handling.
- Player identity is a right-aligned avatar and name. Summary analysis has one round selector and conditional retry; both rounds analyse automatically and successful results remain cached.
- Comparison keeps player and demonstration videos side-by-side in consistent frames, with a shared round timeline, speed controls and replay. View in Videos is removed from comparison.
- All ten drill cue entries are cleaned; legacy snapshot cues also suppress editorial coaching notes and presentation quotes.
- Settings offers Follow device or regional English (Australia, India, Singapore, UK, US). Explicit selection requires the selected on-device model; commands remain opt-in, output remains tones-only, and stop confirms. Device testing is needed across speakers and accents.

Build 45's single guided-camera summary, compact circular timer, setup recovery and cached results remain the baseline. See its [historical acceptance checklist](verification/build45-iphone-checklist.md).

## Verification and remaining work

Build 46 passed cloud static analysis, 233 Flutter tests (five gated skips), 28 enabled-feature tests and 25 native iOS simulator tests (one skipped, zero failures). Six local repository contract suites passed. Signed IPA publication and package checks succeeded, including the version, cleaned cue catalogue and unchanged counting model. Automated layout fixtures do not establish camera accuracy.

Use the [build 46 iPhone acceptance checklist](verification/build46-iphone-checklist.md). Priorities are screenshot interruptions at round 2/save, camera switching, voice variety selection, comparison seeking and analysis reuse. The unchanged counting model remains experimental. Existing storage failures still need an honest retry; successful signing is not device acceptance.

## Data and scope boundaries

Recordings and exports remain silent and on-device. No new video/audio uploads, face/body data retention or media analytics telemetry are introduced. Deleting a video retains its touch total and round summary; protected player deletion removes that player's history. Estimates record drill/duration/algorithm context; best comparisons require matching player, drill, duration and algorithm. Unavailable analysis is never a fabricated zero. These summaries prepare for future analytics, not a delivered challenge dashboard.

New difficulty/challenge levels, live counting, manual touch entry, cloud media sync, club administration/content publishing and live payments are outside this release. Final drill demonstrations and wider device acceptance remain open. See the [current backlog](content/current-backlog.md).
