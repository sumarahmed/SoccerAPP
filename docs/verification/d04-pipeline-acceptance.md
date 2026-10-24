# D04 local pipeline acceptance — 24 October 2026

The owner accepts `drill-owned-v11-local-passage` as the D04 Cone weave
implementation in the private local Python analyser. Cleanup, documentation
and local Git commits are authorized for this checkpoint. This supersedes the
previous selected D04 v5 route; the historical baseline CLI default is unchanged.

The accepted chain combines D04-owned Tiny/crop and camera evidence, circular
ball-to-foot matching, measured release/recontact and initial/motion proposals,
response attribution, episode recovery, duplicate suppression, scene-object
confound review and local passage response. Head/thigh contacts remain eligible.
Hands, releases, floor and cone/object impacts are excluded from the intended
playing-contact definition. Continuous contact is one episode; there is no
per-cycle addition or target-total correction.

## Operation and scene dependency

The private normal CLI `tools/analyser/run_tiny_strategy.py` now selects v11 with
`--drill D04 --pipeline drill-owned --variants tiny-crop --max-dimension 1280`.
It also requires `--scene-objects` referencing a reviewed opening-frame map
matching the source hash and analysis dimensions. Use the complete original
source from zero, a new ignored output directory, and separate scoring intervals.
The private `tools/analyser/tiny_strategy/D04_HANDOFF.md` contains the full command
and schema contract. The earlier v11 runner remains a compatibility alias.

The cone guard uses reviewed object identity and pixel silhouettes with current
appearance-supported camera projection. It assumes no fixed colour, shape or
object count, but is scene-assisted rather than an automatic unseen-cone model.
Occluded/moved objects and unsupported camera chains remain unknown. Projected
overlap does not prove impact or exclude simultaneous playing contact. Withheld
alternative-cause events remain reviewable.

## Verification and limits

372 importable analyser tests pass, including D04 scene binding, circular
geometry, positive/negative contact controls, episode/duplicate handling and
other drills. Complete results on all four exposed development sources exactly
match the accepted experiment; 75 other-drill/baseline controls match the
pre-cleanup source. A fresh full-source Tiny/full-pose run through the normal CLI
exactly matches the accepted contact result and frame/pixel/object evidence, with
unchanged models (119.34 seconds standalone desktop). This is not a controlled
speed comparison or phone latency estimate. Detailed artifacts,
source/model/code hashes and standalone desktop timing remain private and ignored
under `Soccolo-app/.build-artifacts/d04-acceptance-20261024-v1/`.

Candidate totals are not human-verified full-video touch totals. One reviewed
rolling-ball false proposal remains. A 2% synthetic velocity perturbation changes
the latest exclusion, so stability is unresolved. A confirmed final contact has
uncertain proposal timing. Body attribution uncertainty is distinct from whether
contact occurred; unmatched candidates remain unreviewed without a human negative.
There is no sealed holdout or complete event/cycle annotation. The inherited
foot hand/wrist bypass is not a validated handling exclusion. Light/spin-only
contacts, depth and unseen scenes remain open.

The cleanup consolidates event/count/metric bookkeeping and computes the circular
ball occlusion mask once per frame for all objects. Historical strategies and
reports remain available. No thresholds are retuned in this acceptance step.

## Preserved scope and next work

D03 v5 and other drill implementations, Build 62, history, prior stronger
estimates and the frozen benchmark are preserved. Results retain null accepted
counts and false phone-readiness flags. No production default, mobile/native
analyser, larger model, build, upload or push is included.

Continue D04 only: investigate the remaining rolling false proposal and timing,
retain every reviewed positive/negative control, and obtain independently
labelled held-out footage before accuracy claims. Historical dated sections in
other documents remain checkpoint records, not newer operational instructions.
