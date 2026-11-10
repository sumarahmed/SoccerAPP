# Drill content update — 9 November 2026
## Build 77 approved retry — 10 November 2026

The owner explicitly approved one retry after the recording-recovery test correction. Codemagic job 6af2ea839aaf7c0400edca4a uses ios-device-internal and verified source b88ddd8e7203b5f065e61487c1d417a59bf86e12. Version remains 0.2.0+77 because the first attempt produced no IPA. The queued job confirms the exact source SHA. Build: https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6af2ea839aaf7c0400edca4a . The retry finished successfully. Codemagic published soccolo_mobile.ipa for iPhoneOS, version 0.2.0, build 77 (72,321,695 bytes). All stages passed: native iOS regression tests, Flutter analysis, full Flutter tests, release-flag checks, signed IPA build and production-package verification. Artifact metadata and the build source SHA were verified via the API. Physical iPhone playback, rotation and UI acceptance remain for owner testing.

## Build 77 release preparation — 10 November 2026

The owner explicitly approved one new Codemagic iPhone build with all fixes since installed Build 76. Candidate version is 0.2.0+77. It includes summary back navigation to home; saved active-time estimates in recording playback and comparison; rate-aligned 500/1,000/1,500-touch plans with work rounds at most 60 seconds; proportional full-panel comparison previews; and the Up next plan-stage card with its live countdown.

Recordings and saved session history are preserved. Rest/pauses do not contribute to touches, absent active time is not invented, and production video analysis remains excluded. Physical iPhone playback, rotation and the new layouts require owner acceptance after installation. Earlier no-build notes below are historical; this release has explicit approval.

Release validation: the full local Flutter suite passed (1,917 tests; 14 skipped), all nine offline packaging tests passed, and the latest Flutter analysis is clean. Codemagic will also run native iOS tests, release-flag checks and signed-IPA verification.

Build 77 submitted: Codemagic job 6af2e1ba4f94d182cad0f755, ios-device-internal, source 951f017ed17fb8ed8d293ba376dbdac8bc49f0a5, version 0.2.0+77. The initial queued-job response confirms the exact source SHA. Build link: https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6af2e1ba4f94d182cad0f755 . The job failed during Flutter tests; no IPA was produced.

Build outcome: the approved job failed at Run Flutter tests (1,916 passed, 14 skipped, one failure: recording recovery: preparation). Native iOS regression tests, packaging checks and analysis passed. Release-flag checks and signed IPA creation were skipped; no installable artifact was produced. At that failure checkpoint, no second build had been submitted; the subsequently approved retry above is now successful.

The failed assertion expected one camera start after a fixed settling delay but observed zero with the readiness countdown at zero. Capture start awaits orientation locking and a flushed on-disk marker. The regression test now waits, with a ten-second bound, for the camera start and all capture/work clocks to be running; exact start-count assertions remain. The preparation scenario explicitly gates orientation locking to cover a slow asynchronous start. This is a test synchronization correction; production code is unchanged. The subsequently approved retry passed on Codemagic, confirming the correction remotely. Local retry validation passed: all seven recording-recovery scenarios, the preparation scenario with release flags, the full 1,917-test suite (14 skipped), and Flutter analysis. No production behavior was changed.

## Countdown alongside plan progress — 10 November 2026

Owner follow-up requested a visible countdown as well as whole-plan position. The plan progress card now includes a compact lime Starts in m:ss badge beside Drill X of Y. It reads the existing remaining rest time, freezes with pause and shows Paused until resumed. Large text and narrow screens stack the badge below the progress heading. The existing rest duration and automatic transition are unchanged.

Seven focused Flutter tests passed, including countdown presence, paused-time preservation, automatic advance, plan positions, large-text layout and video behavior. Flutter analysis is clean. The actual Flutter-rendered screen was visually checked with a bundled demo still replacing the native texture; physical iPhone behavior is not claimed. Both repositories are updated; no Codemagic build started.

## Plan progress during Up next — 10 November 2026

Multi-drill plan previews now replace the timer dock with a compact translucent progress card: a prominent Drill 2 of 7-style label, segmented position strip, drill title, Pause/Resume and Stop. Earlier positions are muted green, the upcoming drill is lime, and later positions are subdued. Plans longer than twelve drills use a continuous strip to avoid tiny segments. Large text and narrow screens reflow the title and controls. Single-drill previews retain their timer dock.

The production UpcomingPractice screen supplies the actual position and total for both the opening preview and between-drill transitions. The rest clock, automatic advance, screen-tap pause/resume, lifecycle interruption handling and recordings are unchanged. No instructional description appears over a playing demo.

Validation: seven focused Flutter tests passed, including first/middle/last positions, long plans, 320px/3x text layout, controls, portrait/landscape video fill, load failures and paused rest recovery. Flutter analysis and Git whitespace checks passed. An actual Flutter-rendered 390x844 preview was visually checked using the bundled demo still in place of the native video texture; it is not physical-device verification. No Codemagic build started.

## Touch-plan targets and comparison fit — 10 November 2026

Build 76 feedback showed the 1,000-touch plan finishing with 1,588 estimated touches over 26:30 active time and 18 rounds. Reproduced exactly from the old fixed durations and current per-round estimation rates: D01 226, D15 250, D02 140, D16 180, D17 240, D18 180, D23 200, D11 60, D25 112. The targets and hard-coded durations had drifted apart; the summary was correctly summing the prescribed work estimates.

All three touch pathways now derive durations from the same rates and per-round rounding used by the summary. Full prescribed completion yields 500, 1,000 or 1,500 estimated touches respectively. Work rounds never exceed 60 seconds, with 30-second rests and additional rounds as required. Planned estimate chips now also sum rounded per-round counts. Standard timed drills already default to 60 seconds work / 30 seconds rest; explicit user timing customizations remain available. Rest and pauses remain excluded; stopped or incomplete sessions report only valid saved active time.

New starts, repeats and scheduled touch-plan snapshots use the corrected prescriptions, including older two-round assignments. Active/restored runs and completed recordings retain their original snapshots and measured time. Missing active-time metadata is never inferred. Existing 1,588-touch history is not rewritten.

Both comparison previews now fill their panels proportionally with centered cropping, matching the interpreted request to remove empty bands. This affects only display, preserving source recordings. Portrait/landscape geometry is tested through Flutter widgets; physical iPhone rendering remains an acceptance check. No Codemagic build was started; these corrections are after Build 76.

Validation: 30 focused Flutter tests passed covering every pathway target, default round limits, legacy assignments, scheduled starts, proportional comparison fill, saved active-time playback and guided navigation. Flutter analysis is clean; Git whitespace checks passed. Tests use simulated video platforms and do not establish native device behavior.

## Saved-video estimate follow-up

The saved-round and individual-clip playback screens missed the earlier saved-active-time wiring applied to the summary. Both now use validated recorded active time for duration estimates and pass it to comparison. Eight focused tests passed, including round switching, paused rounds and absent metadata. Existing recordings require the saved active-time field to recover their estimate; no duration is invented. This correction follows Build 76 and no additional build was started.

## Summary back navigation follow-up

The summary back arrow and system back now use the same return-home behavior as Back to home, bypassing the previous drill page. Active practice navigation remains unchanged. Three local regression tests passed using a Home > Drill > Summary navigation stack. This correction was made after Build 76 submission and needs a later build; no additional build was started.

## Build 76: practice total and individual rounds

The owner approved a new app build with a redesigned touch summary. The private app now shows a persistent total of the round estimates, followed by one drill selector and an iOS-style round switcher for the individual count. Saved active practice time determines estimates; rest and pauses are excluded. Missing active time is identified as an incomplete subtotal. Large text and many rounds use a dropdown instead of cramped segments.

Candidate 0.2.0+76 includes the previous D15 playback filename correction, medium controls, full-screen demos, tap-to-pause/resume, paused-round estimate correction and camera preview orientation changes. Historical no-build statements below refer to earlier preparation. iPhone playback and rotation still require device acceptance.

Four focused summary/paused-estimate tests, actual Flutter rendering, static analysis and nine package checks passed. The full local Flutter suite passed: 1,905 tests, 14 skipped. Documentation validation passed. No private media or implementation is published here.

## Paused estimates and camera rotation follow-up

Owner screenshots revealed that paused D15 rounds hid their duration estimate because the review still checked a retired analyser-eligibility flag. The private source now uses saved measured active time independently of that flag. A local paused-round fixture verifies 100 estimated touches for 60 active seconds, excluding additional capture time. Unknown duration remains unavailable.

The two recording screens now share orientation-aware preview sizing and display rotation rather than always swapping dimensions for portrait. The change preserves the capture orientation and original video. Simulated iPhone orientation-transition geometry tests and static analysis pass; live iPhone orientation and saved playback require device verification. No additional Codemagic build started.

## Approved medium controls and full-screen demo follow-up

The owner approved the actual Flutter-rendered medium control card. The private app source now uses a 36 px counter, 80 px timer ring, 15 px button labels and minimum 52 px action targets. Between-drill videos fill the screen with proportional center-cropping for portrait and landscape clips. Screen taps pause and resume the rest preview and recording surfaces, alongside the existing buttons. Thirteen focused tests and two release-config recording tests passed; static analysis is clean. No additional Codemagic build started; device verification remains pending.

## Build 75 playback correction

Validation: 15 focused Flutter tests, 9 packaging tests and Dart analysis passed. Local Flutter bundle generation and exact-path/hash checks passed. Widget playback tests simulate the native player; iPhone playback remains pending.

Build 75 completed and the owner confirmed installation, but Sole taps showed text without video between plan drills. Inspection of the actual IPA found a filename mismatch: the catalogue used `D15-sole taps.mp4`, while Flutter packaged `D15-sole%20taps.mp4`. The video was present and unchanged; D25 had no such mismatch. The private source now uses `D15-sole-taps.mp4`. Local bundle checks verify exact filenames and source hashes; the expanded IPA validation rejects Build 75's mismatch. The Up next screen now provides a still and visible loading/failure message. No additional Codemagic build was started; the fix still needs a newly approved build and device verification.

The private app candidate now maps D15 Sole taps to the owner-supplied demonstration, with a setup still and a silent three-second card preview. Matching-demo selection also makes it available between drills in plans. The original 10.04-second H.264 video is retained; no video or private implementation is published here. Estimated-touch rates are unchanged.

Content is bundled today. Adding a video requires updating its catalogue mapping and derived preview assets; removing a demonstration requires clearing its references before removing files. Entire drill removal also needs plan and catalogue checks. Text is maintained in the app catalogue, rates in the central estimate table, and UI behavior in code. There is no live content administration interface. A future remotely managed catalogue could decouple supported content updates from app releases, but is not implemented.

No Codemagic build is authorized or started. Installed Build 74 does not include this addition yet.

Validation: 12 focused local Flutter tests passed for catalogue, previews and upcoming-practice flow; documentation validation passed. Device playback remains to be checked after an approved release.

## D25 follow-up

The private candidate also includes the owner-supplied D25 Feet juggling video, setup still and silent three-second preview. The unrelated D01 sample and its warning are replaced for this drill. The original 8.064-second H.264/AAC video is retained privately. Estimated-touch rates remain unchanged. Thirteen focused Flutter tests passed, including both supplied demonstrations and the upcoming-practice flow. Both videos are prepared for the next approved Codemagic build; no build has started and installed Build 74 is unchanged.
