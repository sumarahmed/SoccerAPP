# Build 54 memory investigation: iPhone checklist

Cloud and signed package verification passed. 247 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 42 native tests passed (one existing simulator skip). Static analysis and signed package verification passed. The change reuses the orientation image buffer, retains the starting memory reading, and adds bounded stage and post-frame-cleanup checkpoints. Counting rules and Lite v5 are unchanged; the low-memory guard remains at 128 MiB.

1. Install over the existing app and confirm Settings / Guardian → App version shows 0.2.0 (build 54).
2. Fully close and reopen the app for a comparable starting point. Go straight to one existing Inside touches round and tap Retry analysis once if offered.
3. Keep the app foreground. Note whether analysis completes, the estimated count and approximate duration.
4. Copy Analysis diagnostics even on success. It should contain initial, releasedFrameCheckpoints and latestStageFootprintMiB as well as recent events.
5. If the low-memory stop returns, copy diagnostics before retrying. If the app closes, reopen and copy diagnostics before another attempt.

A completed native synthetic test is not proof of physical-device memory stability or count accuracy. Do not delete your recordings to troubleshoot this. [Investigation report](build54-memory-investigation.md).
