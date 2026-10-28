# D16 V3 accepted local pipeline — 28 October 2026

The owner accepts `drill-owned-v3-push-return-cycles` for local D16 Lace stop
and authorizes documentation and local Git commits. The private app repository
contains the implementation and complete D16_ACCEPTANCE.md / D16_HANDOFF.md.

D16 means push the ball forwards with the laces and roll it back. One forward
push and roll-back cycle is one D16 touch. This supersedes the original hand-drop
wording. The current catalogue definition and acceptance metadata are updated;
saved historical snapshots and results are preserved.

The D16-owned pipeline retains Tiny/full pose, bounded crop/flow recovery,
camera compensation, circular ball-to-foot-hull evidence, independent pixel
response and measured outward/return motion. Brief offscreen turns require
visible edge approach/return; unobserved positions and contacts are not invented.
The frontal/oblique projection and foot hull remain uncertain 2D proxies.

|Source|Automatic D16 cycles|Owner reference|Raw physical candidates|Coverage|Standalone|
|---|---:|---:|---:|---:|---:|
|D16_1|7|9|11|90.88%|71.687s|
|D16_2|13|13|16|100%|112.059s|

Both diagnostic gates pass. D16_1 has unresolved camera evidence and an ending
outward action without an observed completed return. D16_2 matching 13 does not
establish event accuracy. Exact main intervals, individual labels and real
negative controls remain open. Both sources are exposed; no independent holdout
accuracy claim is made. Existence and body attribution remain separate.

The local CLI prints `d16TouchCount` with the cycle unit; raw physical contact
candidates remain separate. Accepted result counts stay null and phone-readiness
false. Fresh inference followed by a D16-only gap-continuity guard retains exact
complete counter results on replay. Runtime refers to the fresh acquisition run;
final-code replay hashes are recorded separately. No acceptance threshold change.

The implementation checkpoint passes 555 analyser tests. All 78 pre-existing
synthetic outputs and six D15 saved counter results remain identical. Six of 21
selectable pipelines are now accepted: D01/D02/D03/D04/D15/D16. D05 stays pending;
D13/D14 remain reserved. Build 62, saved history, Library work, frozen results and
other drill behavior are preserved. No native build, media upload or push.

See [accepted local pipelines](accepted-local-pipelines.md) and the private D16
handoff for full commands, exact thresholds, local evidence and review animations.

Acceptance checks: 555 Python tests and 14 focused Flutter tests pass; all 78
prior synthetic outputs and six D15 saved counter outputs are unchanged. The
companion documentation validator passes, including 2,239 relative links.
