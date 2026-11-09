# Local analysis engine package separation — 9 November 2026

Private implementation checkpoint: `5a3e1c374eec6800bc1088d0e5b6e28a9b178b37`, pushed with the rate revision. All 38 preserved native inputs match their staged Git blob checksums; portable paths and archive-specific attributes preserve those bytes across Windows/macOS checkouts.

The owner confirmed Build 74 installed and authorized inspection of its IPA, preservation of the analysis engine for private research, exclusion from the app package, and local tests. **No further app build is authorized or started.**

## Artifact findings

The installed Build 74 artifact is from source `c15c3bfea361b80ca76fa1adf9519977f9578656`, Codemagic run `6af0e4922d5c0983eda15abc`. It is 96.27 MiB compressed, with 150.25 MiB of unpacked files.

The optical-flow/ONNX bridge is 38.18 MiB unpacked, YOLOX Tiny model 19.28 MiB, and Full pose model 8.96 MiB. Together those separable analysis components contribute **66.42 MiB unpacked / 36.69 MiB compressed**. MediaPipe is statically linked into the 15.68 MiB Runner executable; its additional savings require a newly linked binary. These are measured components of the existing artifact, not a verified size for the unbuilt candidate or the phone's installed-storage figure.

The 16.95 MiB CoreML setup detector is retained because automatic camera framing still uses it. Demo media, Flutter, recording, playback and export remain. The package reduction does not disable automatic framing.

## Local implementation boundary

Native analysis source, headers, licenses, original test suite and build-configuration snapshots are preserved in `Soccolo-app/tools/analyser/native`, within the existing private implementation repository's research area. They are outside the mobile build target. The public documentation repository receives no engine code, model weights, signed IPA or personal videos.

The mobile target no longer references the analysis bridge, MediaPipe CocoaPod, touch-analysis sources or live calibration engine. ONNX/pose model entries are excluded from the asset allowlist. App workflows no longer fetch analysis models or compile the analysis bridge. Existing offline tools point at the preserved sources; the independent research workflow remains.

Recording/playback retain their AVFoundation Flutter plugins. Export/segment joining retain AVFoundation, CoreImage, CoreGraphics, QuartzCore, UIKit and existing sandbox/timeline protections. Photos/share, audio and Speech controls remain. Native media/setup/voice implementations and regression tests are checked against the preserved baseline.

## Evidence and release boundary

Local checks pass: seven packaging/preservation/artifact-negative checks; Flutter analysis; 1,892 Flutter tests with 14 existing skips; 38 release-flag tests; seven D25 prototype tests; synthetic research-harness preparation. The real Build 74 IPA correctly fails the new analysis-exclusion gate. Known static analysis symbols were confirmed in its Runner binary.

Windows cannot run the iOS compiler or native runtime tests. A separately approved future build must compile/test the native target, verify the final signed IPA contains no excluded components, measure its actual size, and confirm recording/playback/export on device. No paid build, deployment or service upload was performed for this work.
