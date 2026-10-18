# Synthetic analyser investigation — 18 October 2026

The standalone `analyser-synthetic` Codemagic workflow succeeded twice. It compiles the production Swift observation/analysis methods and counters into a macOS executable, with read-only traces. It does not build or sign Flutter, publish an app, or alter build 50. Personal recordings were not used or uploaded.

## Verified findings

- Current detector: ball found in **60/240 frames (25%)** of the internally generated D01 animation; both ankles found in **240/240**. Its result was unavailable, with raw count zero. The first run's trace contains 29 missing-ball intervals, longest about 1.04 seconds.
- Six tighter lower-image crops: **33/240 frames (13.75%)**, also unavailable. Reject this candidate. In the second run, the 10-second animation took 57.01 seconds with the current detector and 94.62 seconds with the crop candidate. These are single-run Mac timings, not an iPhone benchmark; even baseline timing varied between runs.
- Counter-only tests: **16/27** uninterrupted trajectory cases matched the reference of 38 completed departures. Other results ranged from 0 to 37. Reducing the minimum travel floor from 0.02 to 0.01 changed none of the outcomes. Reject this candidate.
- Another 27 cases removed one observation close to every contact: counts fell to 0 or 1. The current reset-on-loss rule is deliberately conservative but highly sensitive to contact-time gaps.
- All four counter negative controls returned zero for both versions. The brand-only video also produced zero raw touches and an unavailable result for both detectors.

These are controlled parameter sweeps, not a representative accuracy benchmark. Coordinates are perfect only in the sense that there is no measurement noise; sampling can still omit approach evidence, and some spacing/size combinations are deliberately extreme. The initial approach and final arrival are boundary conditions. The reference of 38 is generated independently of the owner's 38-touch video; matching it does not validate that video. The AI animation has no verified contact labels, so its coverage is not a touch-accuracy score.

## Improvements delivered and next work

The improvement delivered is an isolated, repeatable evaluation pathway: source/model fingerprints, pinned synthetic inputs, detector-versus-counter measurements, per-frame ball/ankle evidence, count-event timestamps, negative controls and downloadable reports. Unsuccessful ideas can now be rejected before another iPhone release. No production algorithm change is justified by these two experiments.

Next, use timestamp-labelled real footage under a separately agreed execution location to distinguish missed ball detections, pose loss and rejected contacts. Preserve the local-only boundary until then. Investigate ball-specific detection and short-gap temporal tracking with false-positive controls, plus approach/departure handling at recording boundaries. Do not simply lower confidence or force a target total. A Mac improvement still requires physical iPhone verification.

