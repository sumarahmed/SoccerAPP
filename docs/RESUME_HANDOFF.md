# Soccolo current handoff

Updated 18 October 2026. Current signed internal iPhone candidate: **0.2.0+49**, with package verification passed. Read [current status](CURRENT_STATUS.md), the [build 49 checklist](verification/build49-iphone-checklist.md) and [current backlog](content/current-backlog.md).

The owner confirms active-round resume works in build 48. Counting remains unaccepted: an Inside touches round returned 7 against an owner reference of 38. Footage and extracted frames stay local and are not published or uploaded to build services.

Build 49 uses the selected drill code. Inside touches separates overlapping foot contacts and requires ball travel and a direction reversal near the foot. Other drills retain the experimental generic rule; do not apply Inside touches rules to sole rolls or infer drill identity from placeholder demonstrations. Algorithm v3 forces fresh analysis and separates best comparisons. Detection confidence and coverage thresholds are unchanged.

Reanalyse the original uninterrupted round against the 38-touch reference, then independent footage and stationary-ball/straight-roll negative controls. Synthetic counting tests are not a replay of the owner's video. Missing approach evidence and tracking loss can still cause undercounting; no accuracy claim is made. Preserve confirmed active-round resume and rest recovery, and continue other device checks.

Final-source cloud analyzer clean; 241 Flutter tests passed (five gated skips), 36 enabled-feature tests passed and 33 native iOS tests passed (one skipped, zero failures). Six local static/synthetic contract suites passed. Signed IPA and package verification passed. Detailed source/handoff are in private Soccolo-app, branch `feat/sp014-local-camera-feasibility`, under `apps/mobile/RESUME_HANDOFF_BUILD49.md`. This public repository uses `main`; https://sumarahmed.github.io/SoccerAPP/ contains sanitized status.

Preserve local-only silent media, Guardian protections, optional on-device voice input, tones-only output, player ownership and automatic post-recording counts. No difficulty levels, live counts or manual count entry. Split/paused rounds stay ineligible. Video deletion retains aggregate history; player deletion removes it. No force-quit recovery or public-release readiness is claimed.
