# Soccolo current handoff

Updated 19 October 2026. Current signed internal iPhone candidate: **0.2.0+51**. Automated checks and package verification passed. Read [current status](CURRENT_STATUS.md), the [build 51 checklist](verification/build51-iphone-checklist.md) and [backlog](content/current-backlog.md).

The owner approved an approximate-count trial in the existing app before collecting further footage. D01 Inside touches uses bundled YOLOX Tiny, bounded optical flow and heel/toe landmarks; other drills retain v3. Videos → Recordings → Review video → Round 1/2 → card below the buttons. Eligible old D01 originals refresh automatically; keep the app foreground. Completed results are cached. Saved exports are separate rendered copies; incomplete/split rounds remain ineligible.

Desktop counts were 27/26 against approximately 29/29 for build 47, and 37 against 38 for build 48. These are small-sample totals. Camera-motion false positives remain; keep the camera still. Native count accuracy, analysis latency, warming and offline operation require owner testing. Active-round resume is owner-confirmed.

Static analysis clean; 242 Flutter tests passed (seven gated skips), 38 enabled-feature tests passed, and 39 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed. Private source/handoff: Soccolo-app branch `feat/sp014-local-camera-feasibility`, `apps/mobile/RESUME_HANDOFF_BUILD51.md`. This public repository uses main; https://sumarahmed.github.io/SoccerAPP/ publishes sanitized status. Owner footage and traces remain local, outside repositories and CI.

Preserve Guardian/player ownership, silent local media, tones-only output, optional on-device commands, automatic post-recording analysis and no difficulty levels. Video deletion retains aggregate history; player deletion removes it. No force-quit recovery or Android analyser parity is claimed.
