# Soccolo current product status

The owner approved an internal iPhone trial of YOLOX Tiny + bounded optical flow for D01 Inside touches, accepting approximate counts. Earlier research advice to postpone packaging is superseded. [Local comparison](verification/analyser-candidates-2026-10-18.md): Tiny + flow counted 27 and 26 against approximately 29 each on build 47, and 37 against 38 on build 48. These are small-sample totals, not event-level accuracy. Camera-motion false positives remain unresolved; keep the camera still. Personal clips and traces stayed local.

Updated **19 October 2026**. Build 53 is signed and package-verified for a YOLOX Tiny + optical-flow + Pose Lite trial, with expanded local memory diagnostics. Build 52 stays open at Count unavailable, but the owner confirms Retry analysis crashes. The guard prevents automatic reruns; build 53 phone stability remains pending. This is a family pilot, not a production or App Store release.

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

## Build 53 measured pose alternative

Fresh local comparisons held the Tiny detector, flow and count rules constant. Full pose counted 27/26/37; Lite counted 27/28/37; smaller-input Full counted 27/27/36. Owner references are approximately 29/29/38. Lite pose invocation was about 24% faster on the Windows CPU run, with modestly lower sampled process RSS. This does not establish iPhone performance or contact-level accuracy. See [comparison and alternatives](verification/build53-analyser-evidence.md).

The trial uses Lite under algorithm v5 and retains the tested interrupted-job guard. An interrupted build 52 round requires an explicit Retry after updating. Settings diagnostics now include physical footprint, available process headroom, sampled peak footprint, elapsed time and eight recent checkpoints before/after inference. Analysis pauses below an advisory 128 MiB reserve; this cannot guarantee prevention of a native fault or OS termination. Full remains bundled for internal native A/B testing, so the diagnostic package is not a size reduction.

## Retained build 52 recovery

An interrupted native analysis leaves a per-round recovery marker; reopening that round offers Retry instead of automatically repeating the job. Previously saved aggregate history is retained. Older build 51 crashes did not leave this marker and cannot be detected retroactively.

D01 releases the legacy setup detector, scopes the Tiny runtime to one job and releases decoded samples inside each frame's cleanup scope. Model weights and counting rules are unchanged. Settings / Guardian → App version reads the installed version/build. Analysis diagnostics shows a copyable, bounded local checkpoint of stage/frame progress, timestamp, version/build, algorithm and thermal state. It contains no player names, file paths or images and is not uploaded automatically.

The native test adds two full 20-second jobs using the bundled animated demo. Synthetic success cannot establish stability on the owner's footage. Follow the [build 53 checklist](verification/build53-iphone-checklist.md); if analysis closes the app, copy diagnostics after reopening and before retrying.

## Retained build 51 experimental analyser

D01 Inside touches receives YOLOX Tiny ball detection, bounded optical flow and heel/toe landmarks. A directly detected ball is required to confirm a candidate; flow only fills short gaps in motion context. Analysis remains automatic after recording. Insufficient tracking returns unavailable.

Existing eligible original D01 recordings refresh old counts under Videos → Recordings → Review video → select Round 1/2 → analysis card below the buttons. Keep the app foreground while analysis runs. Other drills retain their previous v3 counter. Start with existing footage and supply new clips only for poor results. Use the [build 53 checklist](verification/build53-iphone-checklist.md).

The models and native processing are bundled for local execution. Runtime differences from the desktop prototype mean identical iPhone counts and speed are not promised. This trial does not establish Android implementation or performance.

## Retained build 50 saved-recording access

Grouped saved recordings now show the selected round's analysis and Compare with demo beneath the round buttons. Open Videos → Recordings → Review video, then choose a round and scroll below the buttons. Build 49 omitted this card, so its instruction to reopen this screen for reanalysis was incorrect. Original metadata and split/incomplete eligibility are retained; saved exports are separate rendered copies. Build 50 retained v3; build 51 replaces D01 only. See the [build 50 checklist](verification/build50-iphone-checklist.md).

## Historical build 49 counting correction

- The selected drill now selects the counting rule. Inside touches uses separate foot contacts, direction reversal and ball travel, so overlapping proximity zones do not merge repeated contacts. Portrait geometry and foot-selection jitter are handled explicitly.
- Other drills retain the existing experimental generic rule; sole rolls and other actions need their own reference validation. Demonstration placeholders are not used to infer a drill.
- Algorithm version 3 triggers fresh analysis and keeps historical best comparisons separate. Confidence and tracking-coverage requirements are unchanged.
- Owner feedback confirms build 48 active-round resume. A new uninterrupted round returned 7 against a manual reference of 38; recognition remains unaccepted. Synthetic tests do not establish performance on the owner's video.

## Retained build 48 changes

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

Static analysis clean; 247 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 41 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed. Physical stability and count accuracy require the [build 53 iPhone checklist](verification/build53-iphone-checklist.md).

Build 48 final-source cloud validation: clean static analysis, 241 Flutter tests passed (five gated skips), 36 enabled-feature tests passed and 27 native iOS tests passed (one skipped, zero failures). Six local repository contract suites passed. Signed build, artifact publication and package verification succeeded. Automated checks do not establish physical interruption or recognition accuracy.

Continue remaining [build 48 recovery checks](verification/build48-iphone-checklist.md) alongside the build 49 counting checklist. App switching during active iPhone recording saves a local segment and returns paused; recording restarts only on Resume. This is not background recording or force-quit recovery. Touch analysis and regional voice accuracy remain device acceptance items. Historical evidence: [build 47 checklist](verification/build47-iphone-checklist.md), [build 46 checklist](verification/build46-iphone-checklist.md).

## Data and scope boundaries

Recordings and exports remain silent and on-device. No new video/audio uploads, face/body data retention or media analytics telemetry are introduced. Deleting a video retains its touch total and round summary; protected player deletion removes that player's history. Estimates record drill/duration/algorithm context; best comparisons require matching player, drill, duration and algorithm. Unavailable analysis is never a fabricated zero. These summaries prepare for future analytics, not a delivered challenge dashboard.

New difficulty/challenge levels, live counting, manual touch entry, cloud media sync, club administration/content publishing and live payments are outside this release. Final drill demonstrations and wider device acceptance remain open. See the [current backlog](content/current-backlog.md).

For continuation in a new chat, read the [current handoff](RESUME_HANDOFF.md).
