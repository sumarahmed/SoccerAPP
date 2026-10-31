# All-drill acceptance register — 31 October 2026

## Latest verified work — 31 October 2026

See the [consolidated work checkpoint](work-checkpoint-2026-10-31.md) for Drill Timing (60–30–60), both themes, saved settings, the 22-drill catalogue including no-touch D24, card previews, Build 63 preparation and accepted local analyser variants. The local Android debug build succeeded; installed iPhone Build 62 is unchanged. Codemagic has not been started. Touch-target pathways remain a proposal. This section supersedes older current-state summaries below; dated evidence is retained.

Audited all 23 catalogue identifiers: **21 selectable, 10 with accepted local development pipelines/variants, 11 pending; D13/D14 reserved**. This supersedes the earlier six-accepted summary. App catalogue flags and installed behavior are separate from these research decisions; this documentation-only update does not migrate runtime flags or ship local analyser source.

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
| D11 Thigh juggling | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
| D12 Head juggling | Pending | No newer owner acceptance found in the current catalogue, registry and handoffs; implementation availability does not imply acceptance. |
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

## Scoring and exposure

- D17 counts individual foot/ankle contacts: continuous rolling counts once, separate ankle recontact adds one, and another-foot contact adds one. Direction change alone adds nothing. The 21 matching totals do not establish 21 correct events. Its first source is development evidence; no second source was opened in this work.
- D18 counts active guiding-contact episodes; receiving stops and repeated same-foot members do not automatically add counts. All four sources are development-exposed. The latest v8 acceptance supersedes the older v5 selection without erasing it.
- D22 counts individual foot contacts, not completed L repetitions. All four sources are development evidence. Wider-crop acceptance preserves, rather than replaces or deletes, the historical verified v4 packet.
- D23 counts individual contacts; its accepted second result is a detector output, not an invented human annotation. Preserve frozen source/model/configuration and the initial second-video prediction.
- D16 uses completed push/roll-back cycles, unlike D17/D22/D23. Do not impose one drill's unit or scoring rules on another.

## Validation and boundaries

Latest D17 refinement recorded 739 passing analyser tests, exact D17 original/refined replays, D18 pre-edit behavior equality, and D22/D23 saved-result equality. These are historical verification results, not new inference in this documentation task. Count agreement, owner acceptance, synthetic tests and tracking coverage do not individually prove event accuracy or mobile readiness.

Preserve historical outputs, accepted source/model/configuration snapshots, annotations and failed experiments. Private evidence remains local; no recordings, model binaries, review-frame images or personal annotation files are published by this checkpoint. Build 62 remains the latest documented installed build; Build 63 is uncommitted source preparation. No build or deployment is performed.

## Recent acceptance summaries

- [D17 accepted development summary](d17-pipeline-acceptance.md)
- [D18 accepted development summary](d18-pipeline-acceptance.md)
- [D22 accepted development summary](d22-pipeline-acceptance.md)
- [D23 accepted development summary](d23-pipeline-acceptance.md)

Implementation and private provenance are maintained in the Soccolo-app handoffs. Local source availability and GitHub source publication are separate facts.
