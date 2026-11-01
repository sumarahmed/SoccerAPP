# D12 Head juggling — V5 accepted, 1 November 2026

The owner explicitly accepted V5: **“Great - Accept V5 this as the pipilene for
D12”**. The accepted local development pipeline is
`drill-owned-v5-current-image-head`, selected by `--drill D12 --pipeline
drill-owned --variants tiny-crop`. This supersedes pending-acceptance statements
in the historical checkpoints below. V3/V4 and all pre-acceptance outputs remain
preserved; they have not been relabeled or overwritten.

Acceptance is recorded in
`.build-artifacts/d12-v5-accepted-20261101/OWNER-ACCEPTANCE.json`, with the owner
statement, source/model hashes, an `accepted-source/` snapshot and links to the
four-source comparison. V5 result metadata now says
`owner-accepted-development`; its revision, detection rules and quality gates
are unchanged. The local catalogue's D12 acceptance flags and aggregate counts
are synchronized. Future review rendering reads acceptance from the saved
result; the existing videos retain their truthful pre-acceptance captions.

The accepted checkpoint is **4/6/9 matched head contacts on D12_1/2/4**, with
zero missed reference contacts or unmatched head predictions; the reviewed
hands and near miss remain excluded. D12_3 is still unsupported at 17.14 fps;
its separate zero-candidate diagnostic is not selected. Failed coverage gates,
the disputed D12_4 label, approximate head boundaries and acquisition/hand-region
limitations remain as documented below. Acceptance supplies no new annotations.

All four saved-evidence decision replays are exactly equal apart from the V5
acceptance-status field, and **19 D12 tests pass**. Catalogue validation confirms
that only D12 acceptance metadata and aggregate review counts changed. All
**5 existing Flutter juggling/catalogue tests pass** using cached dependencies;
the test runner required localhost access outside the sandbox after its initial
connection was blocked. No app build was performed. Coach
approval, eligibility, one self-paced attempt, manual ending, no repeated
heading rounds and no contact targets remain intact. `phoneIntegrationReady`
remains false; this is local pipeline acceptance, not mobile integration or a
full-video accuracy certificate. No build, deployment, recording upload, commit
or push was performed.

Next development work: preserve V5 as the accepted baseline while investigating
existing D12_3 contact timestamps, tracking coverage and negative-contact
robustness in a separately identified experiment. The historical sections below
retain the evidence and limitations as they stood before owner acceptance.

## Circular overlays and all-four rerun — 1 November 2026

The owner requested circular ball overlays, matching the recent drills, and a
fresh comparison of all four recordings with human judgment and earlier
experiments. The earlier diagnostic renderer drew the detector box as a square.
The new D12-only `tools/analyser/report_d12_development.py` draws a circle using
the same center/radius convention as D17/D22/D23: center `(x+w/2, y+h/2)`, radius
`(w+h)/4`. Cyan denotes a direct detection, magenta an appearance/flow estimate,
and green the current head boundary. A visible ball circle does not imply a
head contact. This is a display change; the counting implementation and its
detector boxes are unchanged. Older square-overlay artifacts are preserved.

### Fresh results versus preserved experiments

| Recording | Owner total | V3 | V4 | Previous V5 | Fresh V5 | Matched / missed / unmatched |
|---|---:|---:|---:|---:|---:|---|
| D12_1 | 4 | 0 | 1 | 4 | 4 | 4 / 0 / 0 |
| D12_2 | 6 | 4 | 6 | 6 | 6 | 6 / 0 / 0 |
| D12_3 | 8 | Unsupported | Unsupported | Unsupported | Unsupported | Not event-scored |
| D12_4 | 9 | 9 | 9 | 9 | 9 | 9 / 0 / 0 against nine clear references |

All three cadence-eligible sources now have fresh full-source Tiny, pose, crop
and image-stage inference through the normal CLI. Their contact decisions are
exactly equal to the previous V5 acquisition replay, not just equal in total.
One-to-one matches pass at 0.05, 0.075 and 0.10 seconds. D12_1 uses the owner's
four timestamps; D12_2/4 use existing assistant-reviewed windows consistent
with the owner's totals. These are exposed development references, not a blind
or exhaustive accuracy assessment. Unmatched predictions would require review
before being called adjudicated false positives; none were emitted here.

For comparison, V3 misses D12_1 F43/F59/F156/F170 and D12_2 windows F174–175 and
F288–289. V4 retains only the three D12_1 misses F59/F156/F170. V5 recovers them.
The comparison records every matched timestamp, missed label ID and unmatched
prediction for each preserved version against the current references.
The D12_1 hand events at F25/F136 and owner-confirmed near miss F179–182 still
have no head prediction. The near-miss interval remains an acquisition
abstention, not a proven visual classification. No foot, thigh or unknown
events were emitted on these recordings; their separate attribution remains.
The older D12_4 tenth label at F299–301 remains disputed and uncounted; owner
total agreement does not settle it. Other uncertain windows are preserved.

### D12_3: unsupported input and separate native-frame diagnostic

The normal CLI again rejects D12_3 at **17.142857 fps**, below its unchanged
30-fps gate. Its supported-pipeline head count is **null/unsupported**, not zero.
To investigate the owner's all-four comparison, an explicitly unselected
diagnostic ran the same V5 acquisition and counter on all 348 original frames,
at their actual timestamps, with no resampling or invented observations. That
diagnostic produces **0 head candidates versus the owner's total of 8**. It
does not establish event-level miss locations: there are no reviewed contact
timestamps for this recording. This result does not enable lower-FPS input.

Its tracking coverage is 25.57%, with valid image-ball measurements on 80/348
frames and head boundaries on 41/348. Tracking coverage and independent pixel
evidence gates fail in addition to unsupported cadence. The separate diagnostic
video prominently says unsupported cadence; it is not an accepted pipeline run.
The older historical child result of zero remains preserved, but has not been
promoted into an eligible Tiny result.

### Verification, artifacts and next step

- **19 D12 regression tests passed again**, covering falling contacts, hand
  releases/catches, near misses, floor bounces and separate body attribution.
  The earlier 61-test cross-drill checkpoint remains preserved.
- Circular H.264 videos were rendered for all four sources. Every source frame
  is retained: 213/383/348/468 frames, no dropped or duplicated frames, maximum
  timestamp difference 0.000000334 s. Decoded MP4 samples were visually checked.
  The displayed green mask is approximate: at D12_2 F108 and D12_4 F87 it also
  includes part of the adjacent ball edge. It must not be read as exact head
  anatomy; this boundary limitation remains for future acquisition validation.
- Original coverage gates still fail: 40.38% / 55.87% / 52.14% on D12_1/2/4.
  Circle rendering does not improve acquisition or change these gates. Prior
  D12_2 one-pixel sensitivity and D12_1 appearance/hand-buffer limits remain.
- Source recordings, saved annotations, counting code and historical results
  remain unchanged. Analysis hashes are checked again after rendering. No
  mobile code, other drill renderer or catalogue behavior was changed here.

New private artifacts are in `.build-artifacts/d12-circular-rerun-20261101-v1/`:
normal-CLI runs/logs/statuses for all four sources; `D12_3-native-diagnostic/`;
`comparison.json`; `d12-tests.log`/`.json`; `integrity.json`; and
`review/D12_1/` through `review/D12_4/`, each containing `circular-overlay.mp4`,
`preview.png` and a timestamp/source-bound `render-manifest.json`.
`encoded-frame-qa/` retains decoded video samples. `run_review.py` and
`compare.py` record reproduction; use new directories to preserve results.
The MP4 files open directly in a local video player and do not require the
earlier HTML review preview.

Next: review contact timestamps in the existing D12_3 recording to locate its
acquisition failures, and strengthen coverage/negative-contact robustness in
the existing eligible videos. Keep D12_3 diagnostic-only unless cadence support
is separately implemented and validated. No new heading recording is required.
Coach approval, eligibility, one self-paced attempt, manual ending, no automatic
repeated rounds and no contact targets remain unchanged. **D12 remains pending
the owner's explicit acceptance.** No build, deployment or recording upload.

## Three D12_1 misses fixed — v5, 1 November 2026

The owner requested fixing frames 59, 156 and 170, then testing against their
annotations while retaining hand and near-miss exclusions. A fresh full-source
CLI run now gives **4 matched / 0 missed / 0 unmatched head predictions**.
All four predictions match one-to-one at 0.05, 0.075 and 0.10 seconds; tolerances
remain diagnostic, not independently calibrated timing uncertainty.

| Owner contact | Selected v5 prediction | Absolute timing difference |
|---|---|---|
| F43 / 1.433333 s | 1.413333 s (retained v4 event) | 20.0 ms |
| F59 / 1.966667 s | 1.955000 s (new image-supported event) | 11.7 ms |
| F156 / 5.200000 s | 5.200000 s (new image-supported event) | 0.0 ms |
| F170 / 5.666667 s | 5.665000 s (new image-supported event) | 1.7 ms |

Neither owner-marked hand event (F25 and F136) produces a head prediction.
The owner's confirmed near miss at F179–182 remains uncounted. A further
image-stage hypothesis at 4.666667 s is explicitly rejected because the hand
exclusion region overlaps the ball. There are no foot/thigh/unknown events on
D12_1; these body parts still have separate attribution and cannot inflate the
head count. This is development evaluation of the owner's partial review,
not blind validation or a full-source accuracy guarantee.

### What changed and what was preserved

- `d12_image_evidence.py` adds a separate ball appearance track anchored only
  by an actual Tiny detector box. Each continuation measures current pixels;
  it cannot refresh its detector anchor, which expires after 0.4 seconds.
  Correlation, competing eligible locations and template texture are checked.
  These records never replace `bodyDirect`, `bodyBall` or shared foot/thigh
  evidence. No source name, contact frame, expected total or annotation enters
  the runtime decisions.
- The same local full pose model supplies a current person-mask head contour.
  Face-connected contour points provide the head boundary instead of enlarging
  the existing pose ellipse. A localized-person disagreement or missing mask
  withholds the supplementary head event. This is an approximate 2-D visible
  boundary, not exact anatomy or a depth measurement.
- `d12_image_head.py` tests a bounded velocity change against smooth quadratic
  flight, then requires head-boundary proximity and pixel response. It imposes
  no upward-rebound or successful-next-contact condition; falling-after-contact
  remains supported and tested.
- The supplementary branch replaces blanket wrist visibility rejection with
  visibility-scaled hand exclusion regions, **only alongside the image evidence**.
  Wrist presence must be at least 0.8 and visibility at least 0.2; uncertainty
  expands by `(1 - confidence) × torso length`. Missing/very weak hand locations
  or an exclusion region touching the ball still withhold a new event. This
  buffer is an uncalibrated 2-D heuristic and needs broader negative testing.
  The original v3/v4 hand checks are preserved unchanged.
- `d12.py` retains `V3_STRATEGY`, `V4_STRATEGY` and exact older decision functions.
  V5 adds image-supported head proposals and deduplicates them before final
  body attribution. The existing head-only count and pending-acceptance fields
  remain. The original v4 `d12_head.py` is byte-identical to the pre-fix snapshot.

### Validation and limits

- **61 focused tests passed**, including the new image-measurement tests and
  existing D12, cross-drill composition, cadence and registry tests. Cases cover
  falling deflections, smooth near passes, throw apices, holds, floor bounces,
  releases/catches, missing/uncertain hands, image/outline absence, ambiguous
  matching, anchor expiry, translation, 30/60/120 fps and duplicate suppression.
- All three eligible recordings were compared event-by-event: D12_1 **4/0/0**,
  D12_2 **6/0/0**, D12_4 **9/0/0** matched/missed/unmatched against the current
  reference sets. The older disputed D12_4 window 299–301 stays unresolved and
  uncounted. D12_2/4 reuse saved full-frame observations with fresh image/mask
  decoding; D12_1 additionally passed **fresh full-frame Tiny + pose + crop +
  image evidence through the normal CLI**, with exact decision equality to the
  acquisition replay. Older v3/v4 results replay exactly on all three sources.
- D12_1 retains 4/0/0 when supplementary ball boxes shift ±1 or ±2 analysis
  pixels horizontally or vertically, and when the hand uncertainty buffer
  changes by ±20%. These are decision perturbations, not independent videos.
  F59's template correlation is 0.612 against a 0.600 threshold; acquisition
  robustness across image degradation remains unestablished. The earlier
  D12_2 v4 one-pixel geometry sensitivity also remains a known limitation.
- The original tracking coverage remains **40.38% / 55.87% / 52.14%**, and all
  coverage gates still fail. Supplementary image records do not inflate those
  gates. D12_1 has 116 valid image-ball frames and 115 head-boundary frames of
  213. In particular the actual near-miss interval still lacks sufficient ball
  evidence: its exclusion is abstention, not a proven automatic near-miss
  classification. Synthetic observed near passes are separately rejected.
- Fresh D12_1 added about **13.81 s** of image-stage processing for its 7.10 s
  source on this host; full-frame Tiny, pose, existing evidence and counting
  costs are additional. No phone/runtime performance claim is made.
- A wider head crop was tested first and returned no useful detections; it is
  **not selected**. The first appearance trial recovered only 3 contacts because
  it treated a subthreshold background match as a competing ball. The selected
  rule rejects close competing matches only when both meet the unchanged 0.6
  correlation eligibility threshold. Both trials are retained.
- All four source hashes and the mobile catalogue hash match the pre-fix
  snapshot. This work edited only D12 implementation/tests, its registry version
  assertion and D12 handoff/register entries. Concurrent D11 changes appeared
  during the run and were left untouched; `integrity.json` lists the actual
  workspace differences rather than claiming the whole checkout was frozen.

Private evidence is in `.build-artifacts/d12-owner-fix-20261101-v1/`:
`before-source/`, `before-manifest.json`, `crop-probe/`, `template-probe/`,
`pose-probe/`, preserved first image trials, selected `image-trial-D12_*-v2/`,
`selected-replay/comparison.json`, `fresh-D12_1/`, `fresh-validation.json`,
`decision-sensitivity.json`, `focused-tests.log`, `focused-tests.json` and
`integrity.json`. Original source recordings, owner exports, prior labels and
prior results were preserved. `experiment.py` and `validate.py` record local
reproduction; create new output directories for another inference run.

Next: strengthen acquisition and hand-region robustness using additional
reviewed negative intervals in existing recordings, measure performance and
resolve coverage before considering mobile integration. D12_3 remains rejected
by the unchanged cadence gate. No additional heading recordings are requested.
Coach approval, eligibility, one self-paced attempt, manual ending, no automatic
repeat rounds and no heading-contact targets remain unchanged. **The successful
D12_1 regression does not accept D12; only the owner can explicitly accept it.**

## D12_1 owner annotations received — 1 November 2026

The owner submitted `D12_1-owner-review-2026-10-31T23-31-57-920Z.json` and
separately adjudicated Review C, frames 179–182: **“near miss no contact”**.
The export is a partial, prediction-exposed development review, not acceptance
or a declaration that every source frame has been reviewed. The original export
and chat adjudication are preserved separately in the new ignored directory
`.build-artifacts/d12-1-owner-annotations-20261101-v1/`; earlier labels, reports,
review packets and source recordings remain unchanged.

| Owner judgment | Original frame / seconds | Current v4 result |
|---|---|---|
| Hand | 25 / 0.833333 | No head prediction |
| Head contact | 43 / 1.433333 | Matched at 1.413333 s (20 ms early) |
| Head contact | 59 / 1.966667 | Missed: ball acquisition gap and incomplete hand context |
| Hand | 136 / 4.533333 | No head prediction |
| Head contact | 156 / 5.200000 | Missed: bounded impact inferred, then rejected by head geometry |
| Head contact | 170 / 5.666667 | Missed: ball acquisition gap and incomplete hand context |
| Near miss, no contact | 179–182 / 5.966667–6.066667 | Correctly uncounted |

This corrects two errors in the earlier assistant visual review: it omitted the
real contact at frame 156 and wrongly labeled Review C as a falling head contact.
Do not reuse the former D12_1 fourth positive at frames 179–182 as ground truth.
It was a **labeling error, not a detector false positive**. Preserve it as
historical evidence with this explicit correction.

At the preserved v4 intake checkpoint, owner-label comparison was **1 matched / 3 missed / 0 unmatched head
predictions**, stable at 0.05/0.075/0.10-second tolerances. Neither marked hand
event nor the confirmed near miss has a head prediction. Unreviewed footage is
not automatically negative; no full-source precision claim follows from this
partial review. No foot, thigh or unknown events were emitted. Coverage remains
40.38% and fails the existing gate. The contact count remains one.

Frame 156 is a different failure from frames 59 and 170. The 155→158 observation
gap is 0.10 s, with direct anchors at 152 and 161 and good wrist confidence
(0.904/0.946 at 156). The timing stage resolves an impact at **5.196667 s**,
but head distance 1.316215 plus fit residual 0.031209 gives **1.347424 ball
radii**, outside the 1.25 boundary by 0.097424. Full-frame detections are absent
at 156–157, and the recovery crop at 156 detects nothing. The rejected estimate
therefore depends on surrounding flow and detector observations. This identifies
the rejecting gate, not proof that enlarging it would be correct or generalize.

`reviewed-events-owner-v1.json`, `comparison.json`, `miss-diagnostics.json`,
the exact submitted export, `owner-chat-adjudication.json` and `verification.json`
retain provenance and results. `owner-contact-F156.jpg` and `owner-near-miss-C.jpg`
show original-image strips. The intake checkpoint's next step was to inspect ball extent,
head boundary and flow accuracy around the confirmed frame-156 contact, alongside
acquisition recovery at 59 and 170. Do not tune toward the rejected C label.

The nine existing D12 tests passed again (`d12-tests.log`), including contacts
followed by a fall, hand releases/catches, near misses, floor bounces and
separate attribution of head/foot/thigh events. No detector or app code changed
during owner-label intake. The original source hash, all six submitted frame
timestamps and exact v3/v4 decision replays were checked. The first intake report
write encountered a local serialization error; its incomplete output is retained
as `comparison.failed-serialization.json.partial`. The corrected intake writes
the current complete `comparison.json`; this did not change detector results.

## D12_1 annotation follow-up — 1 November 2026

The owner offered to annotate D12_1. The current local review packet is at
`.build-artifacts/d12-1-owner-review-20261101-v1/D12_1-review-self-contained.html`.
The original `REVIEW.html` is preserved, but its relative frame images failed
to load in the owner's preview. The replacement embeds a full H.264 playback
copy and all 213 review images, with no external media references or separate
frame-folder dependency. A static embedded image is visible before JavaScript
loads; the full-video player is under “Play full video (7.1 seconds)”. It includes all
213 original frames with verified decoded timestamps, head-detail/full-frame
views, slow playback and frame stepping, unfilled per-frame judgments and a
source-bound JSON download. Owner annotations have now been ingested above.
The packet is prediction-exposed development review, not blind validation.

The table below preserves the **pre-owner-review** diagnosis. Its proposed C
positive is superseded by the owner's near-miss adjudication above.

| Review window | Proposed contact frames / seconds | Saved evidence failure |
|---|---|---|
| A | 59–60 / 1.967–2.000 | Ball missing on frames 54–61; observed gap from 53 to 62 is 0.30 s, exceeding the 0.10 s timing bound. Crop attempts at 53/56/59/62 return no detections. Right wrist confidence at 59–60 is 0.284/0.259, below 0.60. |
| B | 170–171 / 5.667–5.700 | Last direct ball at 164; three forward-flow frames 165–167, then no ball track. Crop attempts 166/169/172 return no detections. Right wrist confidence is about 0.52. |
| C | 179–182 / 5.967–6.067 | No ball track from 168 through the end (212); crops 178/181 return no detections. Both wrists are below 0.60 in the proposed contact interval. Visual review suggests a contact followed by a drop; owner timing/existence confirmation remains requested. |

At the reference contact 42–43, the gap from observed frame 40 to 43 is only
0.10 s and both wrists are visible to the pose model; v4 can infer the impact.
At B, the weak full-frame ball proposal at 175 has confidence 0.299, below the
existing 0.55 selection threshold; it does not supply an accepted track.
Poor wrist confidence is missing safety context, **not proof of hand contact**.
Do not count a contact from face proximity alone or lower thresholds to match
four. Motion blur/appearance may explain the acquisition failures, but this
saved-trace audit does not establish that image-level cause.

`diagnostic-frames.json` and `case-summary.json` retain the exact raw detection,
crop and wrist evidence. `review-A.jpg`, `review-B.jpg`, `review-C.jpg` and
`missed-contact-summary.jpg` give unmarked original-image strips. Reviewer
logic checks passed for timestamps, navigation, bounds, note round-trip and
download schema. Browser visual testing was blocked by the local-file URL
security policy; no alternate browser route was attempted. Frame strips were
visually inspected. No detector code, saved counts or old annotations changed.

The packaging fix passed `check-self-contained.cjs`: all 213 embedded images,
exact embedded-video byte equality, static image fallback, case navigation,
video-time-to-original-frame mapping and annotation JSON export. The extracted
embedded fallback image was visually inspected. Playback timestamps differ
from original decoded timestamps by at most 0.000000334 seconds. Source SHA-256
is unchanged. `self-contained-packaging.json` and `self-contained-checks.json`
record this verification; the new HTML is 19,452,774 bytes. Browser playback
remains unverified because the local-file preview policy blocked access; no
alternate browser or server route was used. QA annotations existed only in an
isolated test VM. No owner judgments or acceptance have been inferred from this
viewer repair. The D12_1 result remains one matched contact and three misses.

Owner intake is complete; use the new owner-label comparison and next steps
above, preserving this assistant review and original total.

## Checkpoint resumed

The all-drill register listed D12 as pending. Its drill-owned v3 implementation
composed regional head/thigh flight responses and foot release/recontact events.
It lacked a D12-specific between-observation timing stage. The baseline CLI
continues to use its historical shared strategy unless `--pipeline drill-owned`
is explicit.

The earlier shared/stronger head work reported 5 of 6 reviewed contacts on the
round-three recording, with a remaining contact around frames 174–175, and 9
contacts on the original adult recording. The earlier child recording produced
0 against an owner total of 8 at about 17.14 fps. Those historical model results
and their local approvals do not constitute acceptance of the present D12 Tiny
pipeline. The chosen forward path remains Tiny plus bounded crop recovery,
1280 maximum dimension, minimum nominal 30 fps (29.97 accepted).

## Available recordings and annotation provenance

The owner supplied `device-feedback/Dill-based-video-for-test/D12-Head-Juggling`
relative to the SoccerApp workspace. `HumanJudgment.txt` gives head totals
4/6/8/9 and hand resets, but no event timestamps. All four files match earlier
benchmark sources by SHA-256; **none is a new held-out recording**.

| Current file | Earlier source | Frames / nominal FPS | Owner head total |
|---|---|---|---|
| D12_1.MOV | FrontView_HeadJuggle_4.MOV | 213 / 30.007 | 4 |
| D12_2.MOV | head juggle hand reset.MOV | 383 / 30.000 | 6 |
| D12_3.MOV | independent-round-2 / Head juggle.MOV | 348 / 17.143 | 8 |
| D12_4.MOV | original / Head Juggling.MOV | 468 / 30.000 | 9 |

The unchanged CLI rejected D12_3 at intake for insufficient cadence. Its result
is **unsupported, not zero contacts**, and it has no missed-event/false-positive
score. Do not resample or invent intermediate observations to pass that gate.

D12_2 reuses the six reviewed frame windows in the earlier `head-only/
reviewed-contacts.json`. D12_1 received chronological original-frame visual
review. D12_4 retains the older annotation file, which marked ten windows
supported and additional windows uncertain. Current visual review supports nine
clear rebounds; frames 299–301 remain a disagreement (glancing contact versus
smooth fall across the projected face). The owner total of nine does not resolve
that event by itself. Frames 229–233 and 399–404 also remain uncertain.

The original timings were single-Codex visual review with detector/history
exposure. D12_1 now has the separate owner timestamps and correction above;
D12_2 and D12_4 remain assistant-reviewed. Original timings are saved in a separate,
source-bound `reviewed-events.json`; the owner note and old annotations were not
edited. Full source/model/code hashes and the prior source identities are local.

## Implementation and preserved behavior

- `drill_pipelines/d12.py` retains `V3_STRATEGY` and its exact old counter result.
  The current D12 composition adds `d12_head.bounded_head_impacts` to v3 head
  proposals and deduplicates overlapping contact windows.
- The D12-only timing stage compares smooth quadratic flight with a continuous
  trajectory having an instantaneous velocity change. Incoming and outgoing
  branches share acceleration; a smooth fall or throw apex is not an impact.
  Evidence windows use elapsed time, including at 60/120 fps.
- Contact time stays inside an observed gap of at most 0.10 seconds. Both
  branches require detector anchors, bounded ball-size variation, a resolved
  motion change and independent pixel response. Head pose is interpolated to
  the same instant as the inferred ball. Inferred positions never alter rows.
- The existing 1.25-radius head boundary remains, with fitted RMS error charged
  against it. This residual budget is **not calibrated geometric uncertainty**.
  Measured and inferred hand context must both pass the existing conservative
  visibility/proximity checks. Long gaps and missing hand context are withheld.
- There is no upward-rebound, successful-juggle, subsequent-contact or round
  completion requirement. A resolved head deflection can count while the ball
  continues downward. Synthetic evidence verifies this; the earlier purported
  falling-contact example in D12_1 was corrected by the owner to a near miss.
- `result.d12HeadContactCount` counts only final `head` attribution after overlap
  resolution. Foot, thigh and unknown events remain separate; `candidateCount`
  retains all playing candidates. `touchCount` and `acceptedCount` stay null,
  and `phoneIntegrationReady` remains false.
- Shared contact/recovery helpers, other drill implementations, acquisition,
  model files, crop budget and the historical baseline route are unchanged.
  The cross-drill registry test changes only its D12 expected version.

## Event-level results

This section preserves the v4 checkpoint. The selected v5 results and owner
comparison are above; its prior reports remain unchanged on disk.

The baseline used fresh full-source pose/Tiny/crop inference before code edits.
V4 replays that identical saved evidence, isolating the contact decision change;
it is not a fresh v4 inference-speed measurement. V3 exact result equality was
verified on all three eligible sources. The table matches events one-to-one
within 0.075 seconds of reviewed window midpoints. Results are unchanged at
0.05 and 0.10 seconds. Tolerance is diagnostic, not independently calibrated.

| Video | Reviewed clear contacts | V3 head candidates | V4 matched / missed / unmatched predictions | Tracking coverage |
|---|---:|---:|---|---:|
| D12_1 | 4 | 0 | **1 / 3 / 0** | 40.38% — fails |
| D12_2 | 6 | 4 | **6 / 0 / 0** | 55.87% — fails |
| D12_3 | owner total 8, unsupported cadence | unavailable | unavailable | unavailable |
| D12_4 | 9 clear + 1 disputed older positive | 9 | **9 / 0 clear / 0**; disputed window still unmatched | 52.14% — fails |

No foot/thigh/unknown candidates were emitted on these three source replays.
Zero unmatched predictions means no observed false positives against this
reviewed set; it is not a general precision guarantee or acceptance claim.

The original comparison used D12_1 assistant windows 42–43, 59–60, 170–171,
179–182. The **current owner-confirmed frames are 43, 59, 156 and 170**. V4
recovers the first at **1.4133 s**; confirmed misses are **1.966667, 5.200000
and 5.666667 s**. The owner rejects 179–182 as a near miss. Overall match counts
stay 1/3/0, but the identities and causes of those misses changed. Use the new
owner comparison file for current D12_1 event-level evaluation.

D12_2 retains 3.6000, 5.3667, 6.3333 and 10.1333 s and adds **5.8133** and
**9.6183 s**. The 6.3333 s proposal is early relative to reviewed frames 191–192,
but matches at each reported tolerance; timing is not subframe ground truth.
The new 5.8133 s candidate is fragile: its surface-plus-fit margin is only
**0.000779 ball radii**. A decision-only -1 analysis-pixel vertical ball shift
removes it (6 → 5). Preserve that sensitivity result; six matching events do
not establish robust acquisition or geometry.

D12_4's retained events are 2.9000, 3.4000, 6.9333, 7.3333, 9.1667, 9.6000,
12.1333, 12.5333 and 13.0333 s. Against the **older ten-positive list**, frames
299–301 are still unmatched; do not erase that older label or call it a proven
near miss. No predictions were added in the other uncertain windows.

## Experiments and verification

- Nine new D12 tests cover falling-after-contact, rebounds, smooth falls/apices,
  holds, near misses, floor bounces, hand releases/catches, unavailable hands,
  pixel/anchor requirements, short versus long gaps, deduplication, 30/60/120 fps,
  input immutability and post-attribution separation of head/foot/thigh/unknown.
- Focused analyser set: **45 passed**. Final broader unittest-only selection:
  **747 passed, 1 failed, 0 errors** (748 total). The remaining existing catalogue
  test expects 22 selectable drills and sees the current 23 after the unrelated
  D25 addition. It and the app catalogue were left untouched by D12 work.
- Initial broad discovery additionally imported the argument-driven
  `test_trace_robustness.py` CLI without `--directory`. The final run selects
  actual unittest modules; no successful full-suite result is claimed.
- **17 existing Flutter tests passed** across `juggling_catalog_test.dart`,
  `drill_timing_test.dart` and `local_training_test.dart`. The sandbox initially
  blocked telemetry-file access and then the loopback test listener; tests ran
  with analytics suppressed and local test-listener access. No app build ran.
- Two saved stationary-control rounds remain zero with both D12 v3 and v4.
  Source/video/owner-note hashes passed; all shared helpers and other drill
  source hashes match the pre-edit snapshot.
- An unselected head-only anatomical crop-routing experiment on D12_1, using
  cached full-frame observations plus fresh Tiny crops and pixel decoding,
  still produced one head candidate and 40.38% coverage. **No improvement; not
  selected.** Keep the experiment and its evidence for diagnosis.

## Local evidence and reproduction

All private files stay under `Soccolo-app/.build-artifacts/d12-20261101/`:

- `intake.json`, `before-source/`: original identities, model/source provenance.
- `baseline/D12_*/`: unchanged v3 manifests, evidence, results; D12_3 failed
  manifest and log preserve the real cadence rejection.
- `review/`, `reviewed-events.json`: chronological and detailed original-frame
  review, source binding, reviewer provenance and the annotation disagreement.
- `v4-replay/`: complete events, decisions, `comparison.json`, source snapshot
  and provenance; `geometry-sensitivity.json` preserves the one-pixel trial.
- `head-crop-trial/`: failed crop experiment, not the selected acquisition route.
- `focused-tests.log`, `analyser-suite-selected.log`, `analyser-suite-summary.json`,
  `mobile-boundary-tests-localhost.log`, `stationary-controls.json`,
  `isolation-and-integrity.json`: actual test and preservation evidence.

For a fresh full-source run, use the repository's analyser venv and a **new**
ignored output directory. Example from `Soccolo-app` (PowerShell):

```powershell
.build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_tiny_strategy.py --input "../device-feedback/Dill-based-video-for-test/D12-Head-Juggling/D12_2.MOV" --output ".build-artifacts/d12-next-D12_2" --drill D12 --pipeline drill-owned --variants tiny-crop --max-dimension 1280 --range 0:12.766666666666667
```

Use full-source ends 7.098333333333334 / 12.766666666666667 / 15.6 seconds for
D12_1 / D12_2 / D12_4 respectively. Do not overwrite the existing directories.
Do not run a larger ball model, upload evidence, or start a mobile build.

## Next unfinished step

V5 now fixes the three owner-confirmed D12_1 misses. Broader acceptance work
remains: validate appearance acquisition and uncertain-hand exclusions on more
reviewed intervals from existing recordings, assess image-stage cost, resolve
coverage failures and measure D12_2's 174–175 geometry robustness. Obtain
owner/reviewer adjudication of D12_4 frames 299–301 and retain both interpretations
until then. Preserve the owner-confirmed D12_1 near miss as a negative check.

D12 remains one self-paced coach-approved attempt with eligibility checks,
manual ending, no automatic repeat rounds and no heading-contact targets.
The current catalogue still has `drillAccepted: false` and
`pipelineStatus: pending-review`. Only explicit owner acceptance can change
that status. No additional heading recordings are requested by this handoff.
