# Analyser candidate comparison — 18 October 2026

A local-only comparison tested YOLOX Nano/Tiny, MediaPipe foot landmarks, bounded OpenCV tracking and two experimental contact rules. A separate synthetic-only Codemagic run tested Apple's native object tracker. No personal footage, extracted frames or traces entered repositories or cloud builds. Build 50 is unchanged.

## Findings

| Approach | Measured result | App decision |
|---|---|---|
| YOLOX Tiny | Ball detected in 598/600 frames of one authorised local practice clip | Preferred detector candidate for an iPhone prototype |
| YOLOX Nano | Ball detected in 566/600 frames | Smaller/faster alternative, weaker coverage on this clip |
| MediaPipe Full | Confident ankle, heel and toe outputs throughout the 600-frame clip | Promising foot geometry; confidence is not location accuracy |
| OpenCV short tracking | Tiny coverage 598 to 600; Nano 566 to 597 with predictions | Useful fallback; predictions must remain distinguishable from detections |
| Apple native tracking with current detector | Synthetic available ball boxes 60 to 115 out of 240; zero raw touches | Helps continuity, insufficient to fix current pipeline |
| New motion-based contact rule | 37 against owner reference 38, but 22 false contacts in a camera-motion control | Not suitable for release |
| Additional shoe-relative safeguard | Camera-motion false contacts removed, but owner-clip count fell to 17 | Not suitable for accuracy acceptance |

The v3 counter evaluation port matched 54 native synthetic cases. With Tiny detections and MediaPipe ankles it still produced only 19 raw touches; replacing ankles with toes produced 13. A stronger detector and extra landmarks do not, by themselves, repair the counter.

A visual spot-check of 20 evenly spaced frames found Tiny boxes around the actual ball. This is not a full precision/recall measurement. The owner reference has not been independently timestamp-labelled; **37 versus 38 is not an accuracy percentage**. The private input was an export, not the exact original analysed by the installed app, so historical app totals are not a matched pipeline comparison.

Six negative coordinate controls and one positive contact control were run. The motion rule passed stationary-ball, straight-roll, small-jitter, distant-ball and missing-contact controls but failed whole-scene camera movement. The stricter rule passed those controls and the positive control, while still undercounting real practice. All tested pipelines produced zero raw counts on the no-player brand video.

## What can be used next

Take Tiny and MediaPipe into further prototype work, subject to Core ML conversion/adapter work, model provenance review and physical iPhone performance checks. Keep counting experimental. The next counter needs camera-motion handling, recording-boundary/recovery cases and event-by-event testing on independently labelled, held-out clips. No candidate has been accepted for a release.

Local Windows component timings for the 20-second clip were 21.72 seconds for Tiny and 10.48 seconds for MediaPipe Full. These exclude initialisation and are not iPhone performance claims. Model downloads were approximately 20.22 MB and 9.40 MB respectively.

Detailed evidence, hashes, implementation notes and reproduction commands are in the private `Soccolo-app/apps/mobile/ANALYSER_APPROACH_COMPARISON_2026-10-18.md`. Owner-derived overlays and traces remain local. The earlier [synthetic investigation](analyser-synthetic-2026-10-18.md) remains historical evidence.