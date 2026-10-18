# Build 54 memory investigation — verification blocked

19 October 2026. Current signed app remains 0.2.0+53. Candidate source `f253d5452d0f6afb2ccd238844c18bf95bff14a3` on `feat/sp014-local-camera-feasibility` is version 0.2.0+54, but has NOT been compiled/tested on iOS or packaged. Codemagic rejected the build request with HTTP 402 (Payment Required); no build ID was returned. Billing/credit availability must be resolved before native verification and delivery. Do not describe this candidate as a proven fix.

## What the evidence establishes

Build 53 fresh-launch analysis reached frame 384 in 26.7 seconds before the 128 MiB headroom guard. Footprint increased about 74.9 MiB between pose-completed frames 370 and 380. Cleanup released about 107.6 MiB but left approximately 3,147.9 MiB. The initial snapshot was overwritten by the eight-entry ring, so the fresh-launch baseline is unknown. An earlier attempt started near 3,079 MiB and stopped at frame 1. Guard behavior is confirmed; exact allocation ownership and earlier termination causes remain unproven.

Source inspection found no frame-image array: counter history retains scalar/coordinate records. Optical flow replaces one previous grayscale frame; the bridge uses ARC and ONNX C++ RAII. Per-frame autorelease scopes already exist. These observations rule out obvious source-level accumulation patterns, not internal runtime caches or all leaks. Library thumbnails retain players while mounted, including under review routes, but are not proven to explain the growth during inference.

## Concrete allocation change

Previously the orientation method allocated a new full-resolution IOSurface-backed CVPixelBuffer every frame. For 720 by 1280 BGRA, pixel storage alone is about 3.52 MiB per buffer, before alignment/framework overhead. The candidate retains one destination and rewrites it during serial analysis; it replaces that buffer only if output dimensions change. This removes that per-frame destination-allocation pattern without resizing the input, changing timestamps, thresholds, models or count rules. The algorithm remains Lite v5, and the 128 MiB guard is unchanged.

The pinned upstream [MPPImage implementation](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/core/sources/MPPImage.m) balances its pixel-buffer retain/release. Its [pixel conversion implementation](https://github.com/google-ai-edge/mediapipe/blob/v0.10.21/mediapipe/tasks/ios/vision/core/utils/sources/MPPImage%2BUtils.mm) copies BGRA input into separately owned RGBA image storage before inference. Combined with synchronous serial calls, this supports reusing the input destination after a call returns. It is not evidence that Core Image caused the observed leak, nor proof of a production fix. Native pixel/reuse tests must pass before delivery.

## Diagnostic changes

Preserve the initial loading snapshot separately. Add post-decode, post-ball and post-frame-autorelease checkpoints. Existing pose-entry and pose-completed readings delimit flow and pose. Keep latest footprint per fixed stage, the last eight events, and twelve post-release snapshots sampled every sixty frames. Terminal events preserve the last frame number instead of resetting it to zero. These are bounded numeric diagnostics, with no identities, paths, images or automatic uploads.

The next device log should distinguish starting memory from accumulated retained memory and narrow which interval grows. Stage differences remain process-wide readings, not allocator attribution; concurrent UI/decoder work can affect them.

## Verification and next steps

Local Flutter static analysis passed. Repository contract checks passed. Native tests were added for destination identity across 100 conversions, rewritten pixel content and replacement on rotated dimensions. Existing matched Full/Lite 600-frame native tests now require the new diagnostics and bounded output. These native tests are **not yet run** because Codemagic rejected the request. No new app was delivered.

After resolving the Codemagic HTTP 402 response, run `ios-device-internal` against the candidate commit (or its reviewed successor), inspect the native compile and tests, final Flutter/enabled-feature gates and signed package before publishing an installable build. Keep personal footage local. Then test one existing owner round and compare starting, post-release and terminal footprint. If growth persists, use the stage evidence to isolate decoding/conversion, ball/flow or pose instead of swapping models blindly.
