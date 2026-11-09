# Drill content update — 9 November 2026

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
