# Revised drill catalogue — 31 October 2026

## Latest verified work — 31 October 2026

See the [consolidated work checkpoint](../verification/work-checkpoint-2026-10-31.md) for Drill Timing (60–30–60), both themes, saved settings, the 22-drill catalogue including no-touch D24, card previews, Build 63 preparation and accepted local analyser variants. The local Android debug build succeeded; installed iPhone Build 62 is unchanged. Codemagic has not been started. Touch-target pathways remain a proposal. This section supersedes older current-state summaries below; dated evidence is retained.

## Current drill status — 31 October 2026

**24 numbered drills: 22 selectable, 11 accepted, 11 pending and 2 reserved.** Ten drills have accepted local pipelines or variants (D01/D02/D03/D04/D15/D16/D17/D18/D22/D23). D24 is separately accepted by the owner as a no-touch exercise; ball touch analysis is disabled and no touch score is produced.

“Available in app catalogue” means present in the current local app source, not verified in the installed phone build. Acceptance does not imply that a development pipeline is mobile-integrated. D17/D22 retain their accepted-variant status. See the [acceptance register](../verification/accepted-local-pipelines.md).

D24 validation: 16 targeted Flutter tests passed, with one existing skipped baseline test; Flutter static analysis reported no issues. This historical check preceded the later successful local Android build.

## D16 V3 accepted — 28 October 2026

The owner accepts D16's local `drill-owned-v3-push-return-cycles` pipeline and
authorizes local Git commits. D16 is a forward lace push followed by a roll-back;
one cycle counts as one D16 touch. The current catalogue corrects the earlier
hand-drop wording. Six of 21 pipelines are now accepted: D01/D02/D03/D04/D15/D16;
D05 stays pending. Counts are 7/13 on the two exposed sources, with unresolved
D16_1 evidence and event review still open. Acceptance does not certify accuracy
or update installed Build 62. No native build, media upload or push.

[D16 operation, validation and limits](../verification/d16-pipeline-acceptance.md).


## Current analyser acceptance — 28 October 2026

Accepted local pipelines are D01 Image-side v1 (`drill-owned-v11-image-side`),
D02 v3, D03 v5, D04 v11, D15 V11 (`drill-owned-v11-single-foot-release`)
and D16 V3 (`drill-owned-v3-push-return-cycles`). D05
remains pending, as explicitly clarified by the owner. This supersedes the
older four-drill review snapshot. The local draft catalogue's six accepted
entries are pipeline selections, not verified accuracy or native build approval.
See [the committed acceptance register](../verification/accepted-local-pipelines.md).
The 21-drill catalogue and its existing app support are included in this
checkpoint. Library work is recorded in its separate implementation checkpoint; historical numbering,
saved results and Build 62 are preserved.

D16 acceptance validation (28 October): all 555 Python unit tests and
14 focused Flutter catalogue tests pass on the acceptance working tree.
The 21 selectable IDs, six accepted pipelines and pending D05 are checked.
The accepted local pipeline documentation records event-level regression
checks and the fresh D15 selected-CLI run. No device build was produced.

Validation for the 26 October catalogue expansion: all 14 targeted Flutter tests passed (`local_training_test.dart` and `juggling_catalog_test.dart`); Flutter static analysis reported no issues. Checks used cached dependencies and required execution outside the sandbox because of temporary-file and telemetry access restrictions. No device build was produced.

Historical validation for the 22 October change: 169 importable Python tests pass; 24 targeted
Flutter tests pass (one existing skip); Flutter static analysis reports no issues.
Companion documentation validation passes. Flutter execution required a retry
outside the sandbox for its localhost test connection, using cached dependencies.
No device build or native performance/accuracy validation was performed.

This is the current activity-number reference. The owner requested D11 thigh
juggling and D12 head juggling, then requested that the previously reserved
activities be retained under new numbers. D13/D14 below preserve those deferred
activities. Historical approved documents and saved D01–D10 records are not
rewritten or relabelled.

## Full revised list

| ID | Drill | Available in app catalogue | Drill accepted |
| --- | --- | --- | --- |
| D01 | Inside touches | Yes | Yes |
| D02 | Sole rolls | Yes | Yes |
| D03 | Dribble and stop | Yes | Yes |
| D04 | Cone weave | Yes | Yes |
| D05 | Pass through a gate | Yes | No — pending |
| D06 | Receive and return | Yes | No — pending |
| D07 | Open-body receive | Yes | No — pending |
| D08 | Pull-back turn | Yes | No — pending |
| D09 | Feint and escape | Yes | No — pending |
| D10 | Receive and finish to a target | Yes | No — pending |
| D11 | Thigh juggling | Yes | No — pending |
| D12 | Head juggling | Yes | No — pending |
| D13 | Scan, choose and pass | No — reserved | No — reserved |
| D14 | Goalkeeper set and ground-ball collection | No — reserved | No — reserved |
| D15 | Sole taps | Yes | Yes |
| D16 | Lace stop | Yes | Yes |
| D17 | V taps | Yes | Yes — accepted variant |
| D18 | Croquetas | Yes | Yes |
| D19 | Step-over | Yes | No — pending |
| D20 | Inside outside | Yes | No — pending |
| D21 | Outside inside | Yes | No — pending |
| D22 | L drags | Yes | Yes — accepted variant |
| D23 | Samba taps | Yes | Yes |
| D24 | Ball cross over — no touch | Yes | Yes — no touch analysis required |

The selectable IDs are D01–D12 and D15–D24; D13/D14 remain reserved. Earlier dated review counts below are historical.

## D24 — Ball cross over — no touch

Practise alternating cross-over movements around a stationary ball without touching or moving it.

1. Stand balanced behind the stationary ball.
2. Lift one foot and sweep it across and around the front of the ball without making contact, then plant it beside the ball.
3. Reset your balance and repeat with the other foot, alternating sides at a comfortable pace.
4. Keep the ball still throughout. If you accidentally touch it, stop, reset the ball and continue; there is no ball-touch score.

Accepted by the owner on 31 October 2026. Timing: two 60-second rounds, 30 seconds rest. No touch analysis, touch total or retry-analysis action. A dedicated demonstration remains pending; the D01 sample is unrelated.

## Pipeline review register — 28 October 2026

**6 of 21 selectable drill pipelines reviewed and accepted: D01, D02, D03, D04, D15 and D16.** D01–D04 were previously accepted; the owner accepts D15 V11 and D16 V3 on 28 October 2026 and explicitly keeps D05 pending. This is pipeline acceptance, not a new accuracy measurement or release approval. The remaining 15 selectable drills are pending pipeline review. D13/D14 remain reserved and deferred, outside the selectable count (23 numbered entries in total).

The JSON catalogue stores a `pipelineStatus` for each drill and a `pipelineReview` summary with the accepted IDs, count, date and basis.

## Added ball-mastery drills — D15–D23

Each new drill uses two 60-second rounds with 30 seconds rest as a draft practice default, and a labelled temporary D01 interface sample. Dedicated demonstrations remain pending; D15 V11 and D16 V3 are accepted locally and D17–D23 pipelines remain pending. Samba taps uses the sole-tap/inside-touch variation confirmed by the owner. Lace stop uses the owner-confirmed forward lace push and roll-back cycle.

### D15 — Sole taps

Alternate light sole contacts on top of a stationary ball to develop balance and foot coordination.

1. Start with the ball still in front of you.
2. Lightly tap the top of the ball with the sole of one foot, then place that foot back on the ground.
3. Repeat with the other foot, alternating without moving the ball away.
4. Keep your weight on the supporting leg; slow down or reset if the ball rolls away.

Cue: Light taps. Alternate feet. Stay balanced.

### D16 — Lace stop

Push the ball forwards with the laces, then roll it back under control.
One forward push and roll-back cycle counts as one D16 touch.

1. Start with the ball still in front of you and your weight on your supporting leg.
2. Use the laces of your other foot to gently push the ball forwards.
3. Place the sole on the ball and roll it back towards you under control.
4. Repeat at a comfortable pace, resetting your balance when needed. Count each cycle once.

Cue: Laces forward. Roll back. One cycle.

Owner-confirmed definition and accepted local V3 pipeline, 28 October 2026.
This supersedes the earlier hand-drop wording. Native integration remains separate.

### D17 — V taps

Pull the ball back with the sole and push it diagonally forwards with the inside of the same foot to trace a V.

1. Place the ball slightly ahead and to one side.
2. Use the sole to pull it back towards you.
3. Use the inside of the same foot to push it diagonally forwards in the other direction.
4. Reset and repeat with the other foot, keeping the V small and controlled.

Cue: Pull back. Push diagonally. Reset.

### D18 — Croquetas

Transfer the ball across your body with two inside-foot touches while stepping sideways.

1. Start with the ball beside one foot and knees relaxed.
2. Use the inside of that foot to pass the ball across your body.
3. Meet it with the inside of the other foot and guide it sideways into space.
4. Move with the ball, stop under control and repeat in the opposite direction.

Cue: Across. Across again. Move with the ball.

### D19 — Step-over

Circle one foot around the front of the ball to feint, then take the ball away with the outside of the other foot.

1. Start with the ball still or moving very slowly in front of you.
2. Move one foot from inside to outside around the front of the ball without touching it.
3. Plant that foot and use the outside of the opposite foot to push the ball away in the other direction.
4. Follow the ball, stop and reset; practise on both sides.

Cue: Circle. Plant. Outside and away.

### D20 — Inside outside

Use the inside and then the outside of the same foot to move the ball from side to side.

1. Start with the ball close beside your working foot.
2. Tap it across your body with the inside of that foot.
3. Move the same foot across and use its outside to bring the ball back out.
4. Repeat slowly with small touches, then reset and switch feet.

Cue: Inside. Outside. Keep it close.

### D21 — Outside inside

Use the outside and then the inside of the same foot to control the ball through a change of direction.

1. Start with the ball close in front of your working foot.
2. Push it slightly outwards with the outside of that foot.
3. Step with the ball and bring it back across your body with the inside of the same foot.
4. Reset and repeat, then switch feet.

Cue: Outside. Inside. Stay with the ball.

### D22 — L drags

Pull the ball back with the sole, then guide it sideways behind the supporting leg with the inside of the same foot.

1. Place the ball in front of your working foot with space behind your standing leg.
2. Drag it backwards with the sole until it is behind the supporting leg.
3. Use the inside of the same foot to guide it sideways behind that leg, tracing an L.
4. Turn to follow the ball, stop and reset; alternate sides at a comfortable pace.

Cue: Drag back. Across behind. Follow.

### D23 — Samba taps

Repeat a sole tap followed by an inside-foot touch, alternating feet in a controlled rhythm.

1. Start with the ball between your feet and your weight balanced.
2. Tap the top lightly with one sole, release, then use the inside of that foot to nudge the ball towards the other foot.
3. Repeat the sole tap and inside touch with the other foot.
4. Continue alternating, keeping touches small; stop and reset whenever needed.

Cue: Sole. Inside. Switch feet.

Technique terminology cross-check: [KC Kick skill moves](https://kckick.com/player-zone/skill-moves/) and [Hills Football Discovery Phase programme](https://hillsfootball.com.au/app/uploads/2024/10/Discovery-Phase-Training-Program.pdf). Descriptions above specify the app’s chosen variations.

## D01 and D02: separate experimental strategies

Both support `tiny` and `tiny-crop` in `tools/analyser/run_tiny_strategy.py`.
Their own modules and versioned review checklists isolate later tuning from D03
and juggling. They currently delegate to the unchanged shared contact counter;
no new accuracy improvement is claimed.

- D01: review inside-foot transfers, ball response and observed separation;
  exclude noncontact steps, stationary holds and hand resets.
- D02: an uninterrupted sole roll is one episode even when direction changes;
  another same-foot contact needs release/recontact. A distinct stop then pass
  remains two contacts. Do not count stationary contact or floor impacts.
- Shared totals include all playing foot/head/thigh contacts regardless of the
  selected activity. Uncertain attribution stays Unclassified.
- Full-frame Tiny and full-body pose remain primary evidence. At most ten extra
  person-crop Tiny calls per video second supplement misses, not replace frames.
- Real D01/D02 phone timing, manual event validation and high-FPS heat remain
  open. Synthetic regression checks are not end-to-end accuracy evidence.

## D11 — Thigh juggling

- Goal/prerequisite: controlled thigh contacts; comfortable balance and ability
  to follow the coach's instructions.
- Setup/equipment: suitable ball, clear level area and retrieval space; front
  camera view includes full body and complete flight, with overhead margin.
- Steps: balanced start; gentle release towards a thigh; controlled upward
  contact; catch/reset initially, linking contacts only with coach agreement.
- Cue: Balance. Gentle thigh touch. Reset with control.
- Timing: two 20-second windows with 30 seconds rest; resets are permitted,
  with no required contact target. Stop whenever uncomfortable.
- Review: count genuine thigh contacts even if the ball subsequently falls;
  hands, releases, catches and floor impacts do not count. Do not infer contact
  from proximity alone. Foot/head playing contacts remain in the shared total.
- Easier variation: one touch then catch/reset. Further alternating contacts
  require coach review. Avoid chasing a missed ball or prioritizing height.
- Demo: no dedicated approved juggling video supplied. Existing D01 media is
  explicitly an unrelated temporary interface sample, not juggling instruction.

## D12 — Head juggling

- Goal/prerequisite: review controlled head contacts only after a qualified coach
  confirms player suitability and applicable age/association/club restrictions.
- Setup/equipment: qualified coach, coach-approved ball/service, clear level
  space and no contested balls. If eligibility is unknown, use a non-heading
  activity. Full body and complete flight must remain visible from the front.
- Steps: confirm permission and limits; follow only the coach-approved technique
  and service; stop/reset after the approved attempt; manually end the attempt.
- Cue: Coach approval first. Controlled attempt. Stop and reset.
- Timing: one self-paced attempt, no automated repeated rounds or prescribed
  heading-contact target. The displayed repetition is an attempt, not a header
  quota. Do not chase a juggling record or practise where heading is prohibited.
- Review: genuine head contact counts even if the ball falls afterward; exclude
  hand and ground events. Other playing contacts still contribute to the total.
- Easier alternative: a non-heading activity when clearance is absent; no
  harder heading variation is prescribed by this draft.
- Demo: dedicated reviewed footage is missing; D01 is only an explicitly labelled
  unrelated interface sample. New wording is not a qualified-coach sign-off.
- Restrictions are instructional, not an automated age/medical clearance engine.
  D12 is not inserted into existing youth pathways or default session templates.

Youth heading guidance varies by association. This cautious draft does not
claim a universal safe heading age or load. See [UEFA's youth heading guidance](https://www.uefa.com/news-media/news/025e-0fb60fba795d-c82533c13f87-1000--uefa-unveils-heading-guidelines-for-youth-players/).

## D13 — Scan, choose and pass (deferred)

Former reserved D11. Prerequisites: D06/D07 control. Partner, ball and two gates
labelled with shapes/numbers as well as colour. Observe an early partner cue,
receive under control, pass to the matching gate and reset. Cue: Check the cue.
Receive. Find the gate. Historical draft: six decisions with resets, not a new
approved prescription. Review decision and execution separately; easier static
ball/early cue, later reception only after review. Show cue, player and targets;
never require reading a phone while moving. Exact content/assets remain deferred.

## D14 — Goalkeeper set and ground-ball collection (deferred)

Former reserved D12. Qualified goalkeeper review, helper, suitable ball and level
clear rolling lane required. Ready position, watch a controlled ground roll,
collect using reviewed technique, return and reset. Cue: Ready. Watch the ball.
Gather and reset. Historical draft: six gentle services, not a new prescription.
No diving, collisions or overhead service. Easier stationary setup; progression
requires review. Show full body, hands and service from outside the ball path.
Goalkeeper collections are not playing foot/head/thigh touches: do not enable
the current shared-touch counter as a collection-success score. Still deferred.

## Implementation and preservation

Catalogue source: `assets/local-training-catalog.json`; UI search/detail/plans
use the same catalogue, and Training/Video filters include Juggling. Existing
pathways and saved snapshots are unchanged. Analysis strategies D11/D12 are local
research only; legacy `research-head`/`research-thigh` identifiers remain for
reproducibility. D13/D14 have no analyser strategy or app entry yet.

No native Tiny integration, media upload or public release is included in the timing update. Build 62 and its historical stronger estimates remain preserved.
