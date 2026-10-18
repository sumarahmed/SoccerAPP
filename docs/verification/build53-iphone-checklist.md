# Build 53 Lite analyser iPhone checklist

Cloud tests and signed package verification passed. Physical stability is not yet accepted. Static analysis clean; 247 Flutter tests passed (seven existing skips), 38 enabled-feature tests passed, and 41 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed.

1. Install over the existing app. Settings / Guardian → App version must show **0.2.0 (build 53)**.
2. Open an existing Inside touches round. If it was interrupted on build 52, tap **Retry analysis** once. The confirmed recovery marker is intentionally retained across the update.
3. Keep the app foreground. Record the result and approximate analysis duration. Copy **Settings / Guardian → Analysis diagnostics**, even if analysis succeeds, so the new memory figures can be compared with failures.
4. If analysis pauses for low memory, retain the video and copy diagnostics. This is a graceful stop, not a successful count. If the app closes, reopen and copy diagnostics before another retry.
5. Check the other round, then verify active-round resume, rest progression and saved playback still work.

Diagnostics should identify `poseModel: lite`, algorithm `yolox-tiny-flow-pose-lite-v5`, build 53, physical footprint, sampled peak, available headroom on the phone, elapsed time, and up to eight stage checkpoints. Checkpoint spacing is ten frames; it is not an OS crash report or exact failing instruction. Nothing uploads automatically; no video, image, player name or file path is included.

Local comparisons favour Lite for this trial, but counts remain experimental. The [evidence report](build53-analyser-evidence.md) separates desktop count results, native synthetic results and pending phone acceptance. Guardian controls, local silent footage and aggregate-deletion rules are unchanged.
