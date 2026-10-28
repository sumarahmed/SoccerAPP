# D15 V11 acceptance — 28 October 2026

The owner accepts V11 for D15 Sole taps and authorizes documentation and local
Git commits in both repositories. The ordinary local command now selects
`drill-owned-v11-single-foot-release`, counter `d15-single-foot-release-v11`.
Historical `d15.STRATEGY` remains V1 and `d15_single_foot_release.STRATEGY`
remains `experiment-v11-single-foot-release`; no counting threshold changes.

## Operation

Run from the private Soccolo-app repository with the existing local environment:

```text
.build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_tiny_strategy.py --input SOURCE --output .build-artifacts/NEW_D15_RUN --drill D15 --pipeline drill-owned --variants tiny-crop --max-dimension 1280 --range 0:FULL_SOURCE_DURATION
```

Use a new ignored output folder. D15 requires the complete original source,
one range starting at zero, Tiny crop and 1280 px analysis. Scoring intervals are
separate; split/partial context, cached pose-only observations, other variants
and other dimensions are rejected. No D04 scene map is required or accepted.
The CLI baseline default and every other drill's execution path are retained.
The original run_d15_visible.py experiment selector remains available for V4–V11.
All source timestamps/frame numbers refer to the original video.

## Accepted composition

`d15_selected.py` binds the existing V11 counter to FullFootReleaseEvidence.
The ordinary CLI delegates to the existing full-source V11 runner, including
fresh Tiny/full VIDEO pose with person segmentation, unchanged targeted ball
recovery/tracking, the second complete appearance decode, and canonical masks.
The person mask constrains appearance seeds; it is not contact proof.

The retained chain is visible onset and release (V4/V5), whole-foot release (V6),
short local ball-response pulses (V7), mixed direct separation (V8), direct image
contact continuity (V10), then measured same-foot release (V11). The V9 seed
calibration and private sphere-flow/dense-crop/wrist probes are not selected.
Historical source modules/tests and private packets are preserved.

V11's extra witness can re-arm only a consumed, continuously observed episode.
Two adjacent original frames 0.025–0.05s apart must have selected direct/final
ball agreement, trusted target ankle/heel/toe and other ankle, pose distance
at least 1.25r, positive above-ball clearance, and the entire observed component
outside 1.25r, with at least 4 visible pixels and 8 seed pixels. Target movement
is at most 1.0r; nearest-ankle and inter-ankle direction checks reject projected
swaps/crossings. Existing release branches retain precedence. Unknown geometry
does not prove separation; the witness cannot cold-start an episode.

No D01 image-side restriction, D03/D04 hand bypass or D04 scene-map dependency
is inherited. Existing hand/wrist/torso, direct onset, response, feint and
reconciliation checks remain. Head/thigh contacts remain eligible. Genuine
playing contacts between cycles count; hands, pickups/releases and floor/object
impacts do not. Continuous contact is one episode; no step/pair/cycle bonus,
expected-total correction, age input or player profile is used.

Ball matching and diagnostic drawings use circles. Foot pose segments and
appearance components are uncertain 2D proxies: they can omit a foot tip, join
legs, swap attribution or overlap a ball without physical contact. Independent
ball-surface evidence can exist with a stationary centre; translation/reversal
is not universally required. Light real contacts can still lack usable evidence.
Contact existence and anatomical attribution remain separate review questions.

## Source results and human evidence

| Source | Owner reference, main drill | V11 full-source candidates | Sphere probe, full source | V11 coverage | V11 diagnostic failures |
|---|---:|---:|---:|---:|---|
| D15_1, adult |31 (corrected from 15)|29|35|87.00%|none|
| D15_2, adult |10|8|9|75.24%|tracking-coverage|
| D15_3, younger |19|15|18|100%|none|
| D15_4, younger |25|25|31|99.70%|none|

Human references count individual taps, not alternating pairs. Exact main-drill
intervals are unspecified, so full-source totals are descriptive, not accuracy.
D15_1–3 are exposed development data. D15_4 was reserved before either frozen
variant was run, with no tuning; a different player identity is not confirmed.
After this review it is exposed too. Older toe-tap files are byte duplicates of
D15_1–3 and do not supply independent player/session validation.

V11 retains candidates in human-confirmed windows A (D15_1), D/E (D15_2) and
C/I/J/N (D15_3). J at frame 119 / 3.9667 s is the V11 recovery relative to V10. D15_1 H and
child B/K/L/M remain missed windows. F has positive contact/separation review
but unresolved multiplicity/exact timing. Body sides and exact human times are
not thereby confirmed. P (D15_1, 224–232) remains unreviewed.

NC-A 110–121, NC-B 180–191, NC-C 540–551 and NC-D 797–808 are owner-confirmed no-contact
windows, including continuous rests: 48 original frames total, zero V11 candidates.
The two complete control sources also yield 0/0; only the four reviewed windows
are labelled negative. NC1 has 80.58% coverage and fails that gate; NC2 has 95.88%
and no diagnostic failures. Neither source exercises re-arming after an emitted
contact; broad negative precision and post-contact hold/reset controls remain open.

D15_4 has 56 individually unreviewed candidates across the two variants. There
are 24 tentative timestamp correspondences, seven Sphere-only candidates and one
V11-only candidate; unmatched does not mean false positive. The V11 f161/167
pair needs review for one episode versus a separate supporting-foot contact.
Sphere f331 is a possible late V11 miss, not confirmed. Matching 25 can conceal
offsetting errors. Six Sphere pairs are 0.067–0.133s apart; duplicates remain
unconfirmed. Acceptance does not discard any of these findings.

## Calibration and rejected probes

The V9 foot-seed scale change recovered no additional reviewed contacts and was
not adopted. Increased crop frequency improves D15_3 direct frames 206→223 but
recovers neither B nor K; foot geometry/appearance remain limiting. Independent
IMAGE-mode re-detection with the same pose model worsens wrist availability and
does not resolve L/M context. Hand requirements remain intact. Sphere-flow is
retained as a historical unselected comparison with duplicate/geometry concerns.
The evidence does not establish a need for a fixed age/player calibration.

## Verification and runtime

The exact staged-source export passes all 525 Python unit tests and all 14
focused Flutter catalogue tests (`local_training_test.dart` and
`juggling_catalog_test.dart`), using cached dependencies. The same suites pass
in the working checkout. The export excludes the separate Library feature,
confirming that the checkpoint does not depend on uncommitted Library code.
The obsolete 12-entry catalogue assertion now checks all 21 selectable IDs,
preserves the original 12 historical profiles, and verifies that additions do
not silently acquire an unsupported historical analyser profile.

All 78 frozen non-D15 synthetic results match exactly before and after. Six
D01 saved-evidence cases retain identical events, traces and metrics, with
counts 80, 62, 85, 72, 25 and 37. All six D15 positive/control cases retain
identical complete counter results and unchanged evidence inputs, with counts
29, 8, 15, 25, 0 and 0. These checks establish regression parity, not accuracy.

A new standalone run through the selected normal CLI on D15_4 took 102.376 s,
yielding 25 candidates, 99.70% coverage and no diagnostic failures. Its raw
evidence, canonical person/foot masks and complete counter result exactly match
the frozen experimental V11 run. The selected revision is
`drill-owned-v11-single-foot-release`; no threshold or event changed.
Companion documentation validation and final preservation checks are recorded
in the local acceptance packet alongside staging and commit provenance.

Earlier complete standalone V11 runs were 279.141 s (D15_1), 92.578 s (D15_3), 105.091 s
(D15_4), 277.791 s (NC1), 319.254 s (NC2). D15_2's V11 comparison was a saved-evidence
decision replay, not a fresh runtime. D15_4 Sphere took 94.869 s. Runs retain
source/code/model hashes and output/decision/recovery traces. Single desktop
measurements are not speed benchmarks or phone latency estimates.

Models remain yolox_tiny.onnx (SHA256
427cc366d34e27ff7a03e2899b5e3671425c262ea2291f88bb942bc1cc70b0f7)
and pose_landmarker_full.task (SHA256
5134a3aad27a58b93da0088d431f366da362b44e3ccfbe3462b3827a839011b1).
Source hashes, dimensions, actual FPS, full durations and view descriptions are
in the private D15_HANDOFF.md and each frozen private manifest. No model was enlarged.

## Evidence inventory and preserved scope

- D15_HANDOFF.md retains the complete dated development history, evidence and
  human reviews. Its older sections are historical checkpoints, superseded by
  this acceptance for current selection and commit authorization.
- .build-artifacts/d15-three-step-goal-20261028-v1/: V11 protocol, code freeze,
  reviewed event comparisons, negative controls and wrist investigation.
- .build-artifacts/d15-stationary-control-20261028-v1/ and
  d15-ncd-review-20261028-v1/: stationary source and versioned human review.
- .build-artifacts/d15-bk-onset-audit-20261028-v1/: rejected acquisition probe.
- .build-artifacts/d15-d15_4-comparison-20261028-v1/: source/code/model freeze,
  all 56 event records, 112 candidate animations plus two priority windows,
  surrounding originals, circular direct/final provenance and full context.
- .build-artifacts/d15-acceptance-20261028-v1/: Git preservation snapshots,
  exact parity checks, fresh selected-CLI run, tests, staging and commit audit.

Personal videos, frames, masks, raw traces and rendered reports remain local
and ignored. This checkpoint commits the accepted D01 and D15 source,
tests and documentation, D02 handoffs, and the existing 21-drill catalogue
support. Library work was excluded from this acceptance checkpoint. No new analyser
development on another drill, mobile build, native integration, upload,
push or production-default change is included. Build 62, saved history
and frozen benchmarks are
preserved. The broader research goal still lacks complete event annotation,
broader real negatives and independent younger/adult-player validation.
