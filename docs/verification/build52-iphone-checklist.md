# Build 52 analysis recovery iPhone checklist

Signed internal candidate verified. Static analysis clean; 246 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 40 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed. Build 51's analysis crash remains unconfirmed as resolved. Install the internal update over the existing app; retain local recordings.

1. Open Settings / Guardian and confirm App version is **0.2.0 (build 52)**.
2. Open Videos → Recordings → Review video → select an existing Inside touches round. Keep the app foreground and camera still when recording new footage.
3. Let analysis finish. Record completion time, result and any warming. Repeat for the other round, and check that previously completed estimates remain available.
4. If the app closes, reopen it. The interrupted round must offer Retry rather than loop automatically. Copy **Settings / Guardian → Analysis diagnostics** and send those details before retrying. The checkpoint identifies the last recorded stage, not necessarily the root cause.
5. Confirm active-round pause/resume, rest progression and playback still work. Existing Guardian protections and silent local recordings remain unchanged.

Recovery applies to jobs begun under build 52; build 51 did not leave a recovery marker. Diagnostics contain only technical stage/frame progress, time, algorithm, app version/build and thermal state. No images, file paths or player names are included, and nothing is automatically uploaded.

The same Tiny/flow counting rules remain experimental. Native synthetic tests are not physical-device acceptance or evidence of touch-count accuracy. Android analyser parity is not claimed.
