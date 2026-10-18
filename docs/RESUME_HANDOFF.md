# Soccolo current handoff

[Standalone synthetic analyser findings](verification/analyser-synthetic-2026-10-18.md): two cloud experiments completed; detector coverage remains poor on the synthetic drill, and neither candidate improved it. Build 50 and personal-video privacy remain unchanged.

Updated 18 October 2026. Current signed internal iPhone candidate: **0.2.0+50**. Read [current status](CURRENT_STATUS.md), the [build 50 checklist](verification/build50-iphone-checklist.md) and [current backlog](content/current-backlog.md).

Build 50 adds the missing round analysis/comparison card to grouped saved recordings. Videos → Recordings → thumbnail or Video actions → Review video → Round 1/2 → scroll below round buttons. Build 49's instruction to reopen this screen was incorrect. Saved exports are rendered copies; use original recordings for analysis. Metadata and incomplete/split eligibility are preserved.

The counting algorithm remains build 49's v3. Inside touches uses the selected drill and separate foot contacts with reversal/travel evidence. Other drills retain the experimental generic rule. Reopening an original with a build 48 result triggers fresh analysis; a current v3 result may be reused. Retry is shown for eligible unavailable results. Compare the reference round against 38 (build 48 reported 7); accuracy remains unaccepted. Active-round resume is owner-confirmed.

Final-source cloud analyzer clean; 241 Flutter tests passed (seven gated skips), 38 enabled-feature tests passed and 33 native iOS tests passed (one skipped, zero failures). Six local static/synthetic contract suites passed. Signed IPA and package verification passed.

Private source/handoff: Soccolo-app branch `feat/sp014-local-camera-feasibility`, `apps/mobile/RESUME_HANDOFF_BUILD50.md`. This public repository uses main; https://sumarahmed.github.io/SoccerAPP/ publishes sanitized status. Keep owner footage and extracted frames local, outside repositories and CI. Synthetic tests are not real-video accuracy evidence.

Preserve Guardian/player ownership, silent local media, tones-only output, optional on-device commands, automatic post-recording analysis and no difficulty levels. Video deletion retains aggregate history; player deletion removes it. Split/paused rounds remain ineligible; no force-quit recovery is claimed.
