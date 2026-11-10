# Drill content update — 9 November 2026
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
