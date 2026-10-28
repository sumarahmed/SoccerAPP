# Accepted local drill pipelines — 28 October 2026

D16 V3 is now owner-accepted. [Operation, cycle unit and remaining limits](d16-pipeline-acceptance.md).
Six of 21 selectable pipelines are accepted; D05 remains pending.

Owner acceptance and Git storage are separate facts. This checkpoint records
the accepted local Python analyser selections and versions the previously
uncommitted D01 implementation and D02 handoffs together with accepted D15 V11.
The owner's latest clarification explicitly keeps **D05 pending**.

| Drill | Status | Selected local revision | Checkpoint |
|---|---|---|---|
| D01 Inside touches | Accepted | `drill-owned-v11-image-side` | Image-side v1, accepted 26 October; previously uncommitted implementation now included |
| D02 Sole rolls | Accepted | `drill-owned-v3` | Existing committed implementation retained; intake/history docs included |
| D03 Dribble and stop | Accepted | `drill-owned-v5-camera-motion` | Existing accepted implementation retained, originally `086bf8b` |
| D04 Cone weave | Accepted | `drill-owned-v11-local-passage` | Existing accepted implementation retained, originally `c979c8a` |
| D05 Pass through a gate | **Pending** | `drill-owned-v3` | Available implementation is not an acceptance; no newer dedicated variant found |
| D15 Sole taps | Accepted | `drill-owned-v11-single-foot-release` | Owner accepted 28 October; same V11 counter, normal CLI integration |
| D16 Lace stop | Accepted | `drill-owned-v3-push-return-cycles` | Owner accepted 28 October; one forward lace push and roll-back cycle per D16 touch |

D06–D12 and D17–D23 remain pending. D13/D14 remain reserved. No acceptance is
inferred from availability of a generic module. D15 is distinct from D02.

The committed local catalogue has 21 selectable entries: D01–D12 and
D15–D23, with D13/D14 reserved. It records six accepted IDs:
D01, D02, D03, D04, D15 and D16. The existing catalogue expansion, parsing, plan/history
identities, filtering and focused tests are included at the owner's request.
Library work was excluded from this pipeline checkpoint and is recorded separately. The four-ID review snapshot from
26 October is superseded by the D15 and D16 acceptances on 28 October.

Acceptance selects a local development implementation. It is not a verified
touch-total guarantee, phone integration or approval for a native build, media
upload, push or publication. Build 62, saved history, frozen benchmarks and
historical experiments remain unchanged. Research results retain null accepted
counts and false phone-readiness flags.

The private analyser handoffs retain architecture, exact commands, experiments,
source/model hashes and limitations: D01_HANDOFF.md / D01_EXPERIMENTS.md,
D02_HANDOFF.md / D02_EXPERIMENTS.md, D04_HANDOFF.md and D15_HANDOFF.md /
D15_ACCEPTANCE.md under Soccolo-app/tools/analyser/tiny_strategy/.

D01's complete saved-evidence event/trace/metric parity remains 80, 62, 85, 72, 25 and 37
over six sources. D02's latest intake has 24 candidates, 76.67% coverage and no
complete event labels; that is not a new tuned D02 revision. D04's documented
false proposal, threshold sensitivity and timing limits remain open. D15's
matching 25 on its fourth source still needs individual event review.
