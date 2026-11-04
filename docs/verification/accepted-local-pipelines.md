# All-drill acceptance register — 4 November 2026

Current mobile integration/build status: [Build 63 candidate](build63-integrated-candidate.md).
Earlier local-pipeline checkpoints below remain historical; known accuracy limits remain.

## Latest verified work — 31 October 2026

See the [consolidated work checkpoint](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/WORK_CHECKPOINT_2026-10-31.md) for Drill Timing (60–30–60), both themes, saved settings, the 22-drill catalogue including no-touch D24, card previews, Build 63 preparation and accepted local analyser variants. The local Android debug build succeeded; installed iPhone Build 62 is unchanged. Codemagic has not been started. Touch-target pathways remain a proposal. This 31 October build checkpoint predates D25; current catalogue counts are listed below. Dated evidence is retained.

Current catalogue: **25 identifiers, 23 selectable, 13 accepted drills, 10 pending; D13/D14 reserved**. Twelve accepted drills have local development pipelines or variants; D24 is separately owner-accepted without touch analysis. D12 V5 was explicitly accepted on 1 November 2026; D25 v12 on 4 November 2026. The local app catalogue flags reflect this register. Installed app behavior and development-pipeline integration remain separate.

| Drill | Current status | Local selection / evidence |
|---|---|---|
| D01 Inside touches | Accepted | **v11 image-side**. Current local registry; image-side v1. Known contact losses remain. |
| D02 Sole rolls | Accepted | **v3**. Current local registry; latest intake 24 proposals, 76.67% coverage; no new tuned acceptance. |
| D03 Dribble and stop | Accepted | **v5 camera-motion**. Current local registry; tracking/accuracy limitations remain. |
| D04 Cone weave | Accepted | **v11 local-passage**. Current local registry; requires source-matched reviewed scene map; false proposal/timing review remains. |
| D05 Pass through a gate | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D06 Receive and return | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D07 Open-body receive | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D08 Pull-back turn | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D09 Feint and escape | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D10 Receive and finish to a target | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D11 Thigh juggling | Pending | Experimental **v6 surface-evidence**, 1 November. Fresh four-source acquisition plus final decision replay gives thighs 2/11/5/7 versus reviewed 3/12/6/9, all within the owner’s ±2 per-video tolerance. Event comparison at ±0.050 s: 25/30 thigh contacts plus two separate feet, five thigh/one foot misses, zero unmatched predictions. Sides stay uncertain where needed; only D11_1 passes coverage. V3/v4/v5 and original annotations preserved. Count tolerance does not grant acceptance; see [D11 handoff](d11-pipeline-handoff.md). |
| D12 Head juggling | Accepted | **v5 current-image-head**, explicitly owner-accepted 1 November. Current drill-owned selection. Fresh full-source D12_1/2/4 runs match 4/6/9 reviewed contacts with 0 misses or unmatched predictions; owner-marked hands and near miss remain excluded. Circular overlays match recent drills. D12_3 remains rejected below 30 fps; its separate native-frame diagnostic (0 versus owner total 8) is unselected. Acceptance changes only metadata: four-source decision parity and 19 D12 tests pass. Earlier 61-test checkpoint and v3/v4 preserved. Coverage gates fail and an older D12_4 label remains disputed; coach/eligibility requirements remain. See [D12 handoff](d12-pipeline-acceptance.md). |
| D13 Scan, choose and pass | Reserved / not selectable | No acceptance or scoring pipeline inferred. |
| D14 Goalkeeper set and ground-ball collection | Reserved / not selectable | No acceptance or scoring pipeline inferred. |
| D15 Sole taps | Accepted | **v11 single-foot-release**. Current local registry; fourth-source result 25 versus human 25, event accuracy not certified. |
| D16 Lace stop | Accepted | **v3 push-return-cycles**. Current local registry; one forward lace push plus roll-back = one cycle/touch. Outputs 7/13; raw contacts are a different unit. |
| D17 V taps | Accepted variant | **v8 foot-ankle-proxy; wide lower-leg**. Accepted development variant, standalone runner. 21 candidates vs 21 markers; 96.64% coverage. Unresolved misses/extras remain; second video unopened. |
| D18 Croquetas | Accepted | **v8 visible-guiding-contact-episodes**. Accepted and selected in current local registry; v5 preserved. Outputs 10/11/9/8. Fourth source fails coverage at 79.98%; marked misses remain. |
| D19 Step-over | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D20 Inside outside | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D21 Outside inside | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D22 L drags | Accepted variant | **v4 visible-foot-contacts + accepted 1.5× crop variant**. Standalone. Historical v4 outputs 23/10 vs human 25/13; wider-crop outputs 22/10/10/4. Fourth source fails coverage at 64.98%. |
| D23 Samba taps | Accepted | **v6 person-mask-consecutive-contacts**. Standalone/frozen evaluator. Accepted outputs 16/21; first human reference 18. No numeric human total supplied for second recording; known misses remain. |
| D24 Ball cross over — no touch | Accepted — no analysis required | Owner acceptance on 31 October 2026. Alternate cross-over movements around a stationary ball without contact. No ball-touch scoring pipeline; app skips touch analysis. |
| D25 Feet juggling | Accepted | **v12 circular/template foot**, explicitly owner-accepted 4 November 2026. Selected standalone entry: `run_d25_accepted_v12.py`; generic registry/mobile integration unchanged. Fresh five-source outputs: 10/13/4/7/5 feet; separate thigh/head/unknown counts and owner/assistant references remain in [D25 handoff](d25-pipeline-handoff.md). D25_4 misses F121/F215 against nine owner marks; text notes say 6–7. D25_5 opening F5 is a suspected floor false positive; D25_3 has attribution issues. Only D25_3 passes existing quality gates; D25_1 also fails pixel coverage. Acceptance does not waive gates or certify event accuracy. Original evidence, instructions and 60–30–60 timing preserved. |

## Scoring and exposure

- D17 counts individual foot/ankle contacts: continuous rolling counts once, separate ankle recontact adds one, and another-foot contact adds one. Direction change alone adds nothing. The 21 matching totals do not establish 21 correct events. Its first source is development evidence; no second source was opened in this work.
- D18 counts active guiding-contact episodes; receiving stops and repeated same-foot members do not automatically add counts. All four sources are development-exposed. The latest v8 acceptance supersedes the older v5 selection without erasing it.
- D22 counts individual foot contacts, not completed L repetitions. All four sources are development evidence. Wider-crop acceptance preserves, rather than replaces or deletes, the historical verified v4 packet.
- D23 counts individual contacts; its accepted second result is a detector output, not an invented human annotation. Preserve frozen source/model/configuration and the initial second-video prediction.
- D16 uses completed push/roll-back cycles, unlike D17/D22/D23. Do not impose one drill's unit or scoring rules on another.

## Validation and boundaries

Latest D17 refinement recorded 739 passing analyser tests, exact D17 original/refined replays, D18 pre-edit behavior equality, and D22/D23 saved-result equality. These are historical verification results, not new inference in this documentation task. Count agreement, owner acceptance, synthetic tests and tracking coverage do not individually prove event accuracy or mobile readiness.

Preserve historical outputs, accepted source/model/configuration snapshots, annotations and failed experiments. Private evidence remains local; no recordings, model binaries, review-frame images or personal annotation files are published by this checkpoint. Build 62 remains the latest documented installed build; Build 63 is uncommitted source preparation. No build or deployment is performed.

## Detailed handoffs

- [D01 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D01_HANDOFF.md)
- [D02 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D02_HANDOFF.md)
- [D04 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D04_HANDOFF.md)
- [D11 handoff](d11-pipeline-handoff.md)
- [D12 handoff](d12-pipeline-acceptance.md)
- [D15 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D15_HANDOFF.md)
- [D16 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D16_HANDOFF.md)
- [D17 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D17_HANDOFF.md)
- [D18 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D18_HANDOFF.md)
- [D22 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D22_HANDOFF.md)
- [D23 handoff](https://github.com/sumarahmed/Soccolo-app/blob/main/tools/analyser/tiny_strategy/D23_HANDOFF.md)
