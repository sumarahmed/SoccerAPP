# D11 Thigh juggling — pending acceptance, 1 November 2026

**D11 remains pending until the owner explicitly accepts it.** The selected local
experiment is now `drill-owned-v6-surface-evidence`, through `--drill D11
--pipeline drill-owned --variants tiny-crop`. The owner clarified that **±2
thigh contacts per video** is the current development target; feet remain
separate. Meeting that target is not acceptance or mobile integration.

## V6 acquisition, backward validation and surface separation — latest checkpoint

This section supersedes the preserved v5 checkpoint below. No build, deployment,
recording upload, commit or push was performed. D12 and app files were not edited.

### Starting evidence and preserved material

The preceding v5 checkpoint found 1/9/1/2 thighs against 3/12/6/9 reviewed
contacts, with zero unmatched predictions at ±0.050 seconds. Its unfinished
work was acquisition gaps, contact-time hand ambiguity and foot/thigh overlap.
The four local recordings remain in
`device-feedback/Dill-based-video-for-test/D11-Thigh-Juggling/`:

| Review ID | Recording | Frames |
|---|---|---:|
| D11_1 | FrontView_ThighJuggle_3.MOV | 160 |
| D11_2 | Juggling with thighs.MOV | 604 |
| D11_3 | thigh juggle hand reset.MOV | 463 |
| D11_4 | Thigh juggle.MOV | 509 |

The four supplied Downloads exports are preserved byte-for-byte in
`.build-artifacts/d11-owner-review-20261101-v1/original-exports/`.
Their 48 judgments comprise 30 thigh, three foot, 12 hand, two floor and one
near-miss marker. They declare complete source review, `pipelineOutputsSeen:
true` and `acceptanceGranted: false`. These are development-exposed references.
Previous videos, annotations, reviewers, failed experiments and v3/v4/v5 results
are retained. V3/V4/V5 strategies remain callable for historical replay.

### Implementation changes

- D11-only acquisition uses mildly blurred detector templates plus current-image
  chroma agreement. A weak Tiny proposal needs unique current-image agreement;
  two independently corroborated weak model observations can bootstrap recovery.
  Raw model boxes and confidence values remain unchanged and separately recorded.
- Reverse recovery retains each detector template independently. Image evidence
  older than 0.4 seconds requires agreeing opposite-direction measurements or two
  distinct strong model templates. All anchors expire by 0.9 seconds. An old,
  unconfirmed reverse match cannot erase recent measured evidence.
- Forward/backward optical flow only narrows the image search. It requires texture
  consensus, a round-trip check and consistency with observed ball motion. A flow
  position alone never becomes ball evidence; current-image matching and color
  checks still apply. Identical copies with inconsistent motion are rejected.
- Ball-directed crops retain regional recovery slots. Tiny remains the only ball
  model, crops are at least 0.1 seconds apart and images remain at most 1280 pixels
  on their longest side. No larger model or source-specific rule was introduced.
- Hand exclusion now distinguishes the fitted impact bracket from an earlier
  release/later catch. Short wrist occlusions require observed history, bounded
  reach and separation from the ball. Playing-surface impulse direction may
  resolve projected hand overlap only when hand normals cannot explain it and
  neither a hold, release nor catch is supported. Missing context stays unresolved.
- Foot proposals need a resolved local impact and evidence separating the foot
  from a stationary ground bounce. Raised, foreshortened foot/thigh overlap stays
  body-uncertain instead of contributing to the thigh count. Head contacts retain
  a separate impact stage; none is emitted on these four sources.
- A penalized impact fit handles noisy foot trajectories and additional thigh
  candidates. Additional thigh candidates must approach the moving thigh surface;
  the outbound flight after a kick cannot create a thigh touch. Stronger nearby
  fits suppress shifted duplicates even when the stronger fit is rejected as hand
  contact. Sparse outgoing windows use measured observations only, with the
  original maximum gap retained. No upward rebound or later juggle is required.
- Side attribution is withheld when projected thighs remain too close. The new
  code contains no recording names, frame numbers, annotation times or totals.

### Fresh four-video results and event changes

All 1,736 frames were decoded with fresh full-frame Tiny, fresh pose, fresh bounded
crops and current pixels. The final motion/floor checks were then replayed over
that frozen fresh evidence. Acquisition-code hashes match the fresh run; the
final decisions and source snapshots are saved separately. Original source
hashes, every source timestamp, model-box provenance, anchor validation and crop
spacing were verified. No labels enter detection.

One-to-one event comparison uses ±0.050 seconds. Exact, ±0.075 and ±0.100-second
comparisons are also retained. This timing diagnostic is separate from the
owner's ±2 per-video thigh-count target.

| Source | v5 → v6 thighs / reviewed | Count error | Separate feet | Missed playing events | Unmatched predictions | Coverage | Thigh side L / R / ? |
|---|---|---:|---:|---:|---:|---:|---|
| D11_1 | 1 → 2 / 3 | -1 | 0 | 1 | 0 | 89.375% | 0 / 0 / 2 |
| D11_2 | 9 → 11 / 12 | -1 | 1 | 1 | 0 | 74.503% | 1 / 0 / 10 |
| D11_3 | 1 → 5 / 6 | -1 | 0 | 2 | 0 | 58.531% | 1 / 0 / 4 |
| D11_4 | 2 → 7 / 9 | -2 | 1 | 2 | 0 | 53.831% | 1 / 1 / 5 |

**All four meet ±2.** Correct thigh matches improve from 13 to **25/30**; two
of three reviewed feet are detected separately. There are **zero unmatched
predictions at ±0.050 seconds**, zero wrong-body matches and zero wrong resolved
sides against known owner sides. Four thigh sides and the D11_2 foot side agree
with the owner; 21 thigh sides remain unknown. D11_4's predicted left foot has
no owner side label, so that side is unverified. Four previously resolved D11_2
thigh sides now remain uncertain; side certainty has not improved uniformly.

All 13 previously matched contacts remain matched. The 14 newly detected playing
events, shown as **reviewed time → detected time**, are:

| Source | Newly detected thigh events (seconds) | Newly detected foot events (seconds) |
|---|---|---|
| D11_1 | 2.466667 → 2.460000 | — |
| D11_2 | 7.100000 → 7.086667; 7.633333 → 7.626667 | 5.733333 → 5.700000, right |
| D11_3 | 2.900000 → 2.881667; 4.166667 → 4.151667; 11.233333 → 11.243333; 11.733333 → 11.700000 | — |
| D11_4 | 0.933333 → 0.918333; 1.366667 → 1.350000; 7.166667 → 7.161667; 14.500000 → 14.491667; 15.066667 → 15.050000 | 15.800000 → 15.823333, predicted left / owner unknown |

The D11_4 event at 7.166667 seconds is a genuine final contact followed by a
fall; it is now detected. D11_2's last reviewed thigh event remains detected
at 16.995000 versus 17.001667 seconds. D11_1's final contact is still missed.
The final approach check removes an intermediate experiment's false thigh
proposal at 5.888333 seconds in D11_2 after the separate foot contact. A chroma
check rejects an earlier false image track onto the face; held-ball checks reject
an earlier D11_3 hand proposal. Those experiments remain saved and unselected.

[Every reviewed event, previous/current timestamps, offsets, misses and negative
markers](https://github.com/sumarahmed/Soccolo-app/blob/main/.build-artifacts/d11-surface-20261101-v1/final-v6/EVENT_RESULTS.md)
are listed individually; matching totals do not substitute for event comparison.
The 12 hand, two floor and one near-miss markers have no prediction within
±0.100 seconds. Complete-source comparison also finds no unmatched prediction.

### Remaining misses and limitations

| Source | Reviewed event | Current limitation |
|---|---|---|
| D11_1 | 3.200000 thigh R | Ball is acquired; local surface/impact fit remains unresolved. Final falling contact is missed. |
| D11_2 | 11.600000 thigh R | Ball is acquired; surface fit and smooth-flight discrimination remain unresolved. |
| D11_3 | 5.600000 thigh R | Acquisition gap leaves insufficient measured flight around the contact. |
| D11_3 | 6.133333 foot R | Ball is acquired; projected foot geometry and independent pixel response do not establish the event. It is not counted as thigh. |
| D11_4 | 6.566667 thigh L | Hand/regional context remains unsafe despite acquired ball evidence. |
| D11_4 | 11.400000 thigh L | The weaker nearby fit is withheld by hand context; other fits remain unresolved. |

The D11_3 raised foot overlaps the projected thigh and the pose foot endpoint is
inaccurate. Widening foot distance indiscriminately would admit floor/near-miss
cases. D11_4 hand landmarks can project onto the knee; the current checks cannot
resolve both missed contacts. These remain misses, not annotation corrections.
Only D11_1 passes coverage; its coverage fell from 93.125% to 89.375% while its
contact recall improved. The other three improve coverage but remain below the
unchanged 85% gate. Near-source-end impacts without enough outgoing measurements,
2-D overlaps, image template drift, close impacts within the reconciliation window
and hand occlusion remain limitations. No held-out accuracy or phone runtime/heat
claim is established. `phoneIntegrationReady` remains false.

### Validation and artifact map

All new private material is under `.build-artifacts/d11-surface-20261101-v1/`:

- `final-v6/`: selected results, fresh evidence, code/model provenance, source
  checks, four timing comparisons, `EVENT_RESULTS.md`, `event-results.json` and
  `miss-diagnostics.json`. `fresh-v6-candidate/` retains the original fresh run
  before the final decision-only motion/floor checks.
- `final-regression/`: **829 tests, 828 pass, one pre-existing failure**. The
  unrelated catalogue test expects 22 selectable identifiers while the current
  catalogue has 23. All **46 D11 tests** pass. The suite is not fully green.
- All 12 v3/v4/v5 four-source decisions replay exactly without input mutation.
  Three historical negative-evidence replays remain zero. The four accepted D12
  decision replays are unchanged, including its unselected low-cadence diagnostic.
- `controls-v6-candidate/` and `final-controls-v2/`: all three recorded controls
  remain zero with fresh crops/current pixels and cached full-frame Tiny/pose,
  followed by the current decision replay. These are not fresh full-inference runs.
- `final-scope-check.json`: protected source hashes and the D11-only register/test
  changes. All existing D12/app/shared production sources match the starting
  snapshot. Earlier experimental folders and failure diagnostics remain preserved.

The original self-contained reviewers remain in
`.build-artifacts/d11-20261101-v1/review/D11_*/D11_*-review.html`. They embed the
video and every original frame, provide stepping and original timestamps, and
export annotations. No additional human review was needed for this checkpoint.

### Next unfinished step and unchanged drill rules

The requested ±2 development target is met; **D11 is still pending acceptance**.
Next technical work is the D11_3 acquisition gap and foot/pixel ambiguity, then
the D11_4 hand-pose failures and the two acquired-but-unresolved thigh fits.
Preserve the recovered falling contact, separate foot events and negative
controls while comparing each new event to these references. A separate held-out
recording would be needed to assess generalization beyond these exposed videos.

D11 retains **two 60-second rounds, 30 seconds rest**, permitted resets and no
contact target. Eligibility, balance/coach prerequisites, agreement before
linking/alternating, stop-if-uncomfortable and unapproved-demo requirements are
unchanged. D12 and other drills remain untouched. No build, deployment or upload.

---

## Preserved previous checkpoints (superseded by V6 above)


**D11 remains pending until the owner explicitly accepts it.** Local development
now selects `drill-owned-v5-current-image-impact` only through `--drill D11
--pipeline drill-owned`. This is a diagnostic experiment, not an accuracy
certificate, accepted app count or mobile integration. The historical baseline
CLI default and D11 v3 are preserved. No app build, deployment, recording upload,
commit or push was performed.

## Acquisition and backward validation — latest checkpoint, 1 November 2026

This section supersedes the v4/owner-intake checkpoint below; older results and
annotations are retained as history. The selected local experiment is now
`drill-owned-v5-current-image-impact`. D11 is still **pending owner acceptance**.

### What changed

- D11 has its own image acquisition pipeline. Both forward and reverse recovery
  require a unique match in the current image to a Tiny detector template. A
  flow box alone is no longer ball evidence. Templates expire after 0.4 seconds,
  are never reseeded by recovered images, and remain distinct from direct Tiny
  detections. The reverse buffer is bounded by source seconds.
- Recent measured ball motion can position the bounded Tiny crop, with regional
  recovery slots retained. The crop call interval remains at least 0.1 seconds;
  full-frame inference still uses Tiny and analysis images remain at most 1280
  pixels on their longest side. Raw crop proposals and selection provenance are
  now retained for diagnosis.
- Agreeing forward/reverse image measurements use the stronger normalized image
  match. A clearly weaker alternative does not erase stronger evidence. Spatially
  conflicting matches within the 0.05 correlation margin are withheld. Correlation
  is an image diagnostic, not a calibrated probability of a contact.
- D11 now requires a locally resolved velocity discontinuity at each proposed
  thigh, foot or head surface, supported by independent pixel response and safe
  regional/hand context. This removes head pass-through proposals that formerly
  contaminated thigh attribution. Foot/head eligibility remains; neither enters
  the thigh total. No upward rebound or subsequent juggle is required.
- V3 and V4 are preserved as `V3_STRATEGY` and `V4_STRATEGY`. No recording names,
  annotation timestamps, frame indices or expected totals enter detection logic.

### Fresh four-source event results

All four recordings were decoded again with **fresh full-frame Tiny, fresh pose,
fresh bounded crop inference, current-image recovery and pixel evidence**.
Source hashes and all 1,736 original frame timestamps were verified. The owner
reviews are complete but development-exposed, not held-out validation. Matching
uses one-to-one events within an explicit **±0.050-second diagnostic tolerance**.
Exact, ±0.075 and ±0.100-second comparisons are also saved; no calibrated timing
tolerance or accepted accuracy is claimed. All timestamps below are source time.
Ball evidence at the 30 owner-marked thigh frames improves from **4 to 19**
(3/10/2/4 by source), while 11 marked instants still lack a selected ball.

| Source | Thigh count v4 → v5 / owner | Playing matches / misses / unmatched predictions | Coverage v4 → v5 | Resolved L / R / unknown thigh side |
|---|---|---|---|---|
| D11_1 | 0 → 1 / 3 | 1 / 2 / 0 | 61.875% → 93.125% | 0 / 0 / 1 |
| D11_2 | 0 → 9 / 12 | 9 / 4 / 0 | 46.358% → 68.874% | 3 / 2 / 4 |
| D11_3 | 0 → 1 / 6 | 1 / 6 / 0 | 27.214% → 39.093% | 0 / 0 / 1 |
| D11_4 | 0 → 2 / 9 | 2 / 8 / 0 | 21.807% → 39.293% | 0 / 0 / 2 |

Total: **13 / 30 reviewed thigh contacts** matched and attributed to thigh;
**20 playing contacts remain missed**, including all three reviewed foot contacts.
There are **0 unmatched predictions at ±0.050 seconds**. Of the temporal matches,
5 have the owner's anatomical side, 8 retain unknown side and
0 have a wrong resolved side. Exact point-time matches total 4;
the full strict comparison remains available rather than hiding timestamp offsets.
All 12 hand, two floor and one near-miss markers remain excluded (no proposal
within 0.10 seconds). No head event is proposed. This does not establish complete
negative-class accuracy outside these development recordings.

Individual playing contacts (R/L are anatomical; ? is unresolved):

| Source | Owner event | v5 event | Result |
|---|---|---|---|
| D11_1 | 1.733333 thigh R | 1.733333 thigh ? | Δ +0.000000 s; side unresolved |
| D11_1 | 2.466667 thigh L | — | Missed |
| D11_1 | 3.200000 thigh R | — | Missed |
| D11_2 | 2.233333 thigh R | 2.246667 thigh R | Δ +0.013333 s; side correct |
| D11_2 | 2.866667 thigh R | 2.853333 thigh ? | Δ -0.013333 s; side unresolved |
| D11_2 | 4.433333 thigh L | 4.433333 thigh L | Δ +0.000000 s; side correct |
| D11_2 | 4.900000 thigh L | 4.913333 thigh L | Δ +0.013333 s; side correct |
| D11_2 | 5.733333 foot R | — | Missed |
| D11_2 | 7.100000 thigh R | — | Missed |
| D11_2 | 7.633333 thigh R | — | Missed |
| D11_2 | 9.266667 thigh L | 9.266667 thigh ? | Δ +0.000000 s; side unresolved |
| D11_2 | 11.133333 thigh R | 11.100000 thigh ? | Δ -0.033333 s; side unresolved |
| D11_2 | 11.600000 thigh R | — | Missed |
| D11_2 | 15.033333 thigh L | 15.033333 thigh L | Δ +0.000000 s; side correct |
| D11_2 | 16.635000 thigh R | 16.618333 thigh ? | Δ -0.016667 s; side unresolved |
| D11_2 | 17.001667 thigh R | 16.998333 thigh R | Δ -0.003333 s; side correct |
| D11_3 | 2.900000 thigh R | — | Missed |
| D11_3 | 4.166667 thigh L | — | Missed |
| D11_3 | 5.600000 thigh R | — | Missed |
| D11_3 | 6.133333 foot R | — | Missed |
| D11_3 | 10.800000 thigh R | 10.788333 thigh ? | Δ -0.011667 s; side unresolved |
| D11_3 | 11.233333 thigh R | — | Missed |
| D11_3 | 11.733333 thigh R | — | Missed |
| D11_4 | 0.933333 thigh R | — | Missed |
| D11_4 | 1.366667 thigh L | — | Missed |
| D11_4 | 6.133333 thigh R | 6.128333 thigh ? | Δ -0.005000 s; side unresolved |
| D11_4 | 6.566667 thigh L | — | Missed |
| D11_4 | 7.166667 thigh R | — | Missed |
| D11_4 | 10.866667 thigh R | 10.851667 thigh ? | Δ -0.015000 s; side unresolved |
| D11_4 | 11.400000 thigh L | — | Missed |
| D11_4 | 14.500000 thigh R | — | Missed |
| D11_4 | 15.066667 thigh L | — | Missed |
| D11_4 | 15.800000 foot ? | — | Missed |

The former D11_2 **4.900000 s unknown-body event** is now a left-thigh event near
that reviewed timestamp. Its old false backward-flow box is absent. A separate
local-impact check also prevents the later ball passage by the head from
recreating the original unknown-body merge. The last reviewed D11_2 thigh
contact is recovered, but D11_1's final **3.200000 s** contact remains missed.
The falling-contact requirement is therefore covered by synthetic tests and
remains an unresolved real-recording limitation; no complete claim is made.

### Experiments, verification and limitations

All new private material is under `.build-artifacts/d11-acquisition-20261101-v1/`:
`REPORT.html` contains all 48 owner judgments and before/after decisions,
`comparisons.json` preserves every match/miss/false positive at four tolerances,
and `miss-diagnostics.json` records image/crop evidence and nearby rejection
traces. `fresh-v5-final/` contains all selected evidence/results, model hashes,
code snapshots and the exact inference script hash. Earlier v3/v4 results,
original annotations and source media were not overwritten.

`image-trial-1/` records current-image recovery with the original regional crop;
`image-trial-2/` and `image-trial-2-scored/` record the recent-ball crop ablation.
Those controlled runs reuse frozen full-frame Tiny/pose with fresh crops and
pixels; their raw result files retain the then-loaded v4 decision stage.
Separate v5 scoring is explicitly named. `fresh-v5/` records the first complete
fresh v5 run before image reconciliation. The two `reconciled-trial*` folders
preserve image-only replay experiments over fixed Tiny selections. One rejected
experiment withheld strong evidence because a weaker partial-ball reverse
template disagreed. None of these supersedes `fresh-v5-final/`.
The final reconciliation restores the D11_2 last-contact candidate but withholds
the earlier trial's D11_4 candidate near 0.918 s: revised nearby ball evidence
triggers the existing hand/context veto. That reviewed 0.933333 s thigh contact
is a known miss, not a withdrawn owner label or a claimed improvement.

- The final analyser suite ran **788 tests**: 787 passed; the sole failure
  remains the pre-existing catalogue assertion expecting 22 identifiers when
  the current D25 catalogue supplies 23. The unrelated catalogue/test was not
  changed. The suite is not claimed fully green. All 30 D11 tests pass.
- All eight frozen v3/v4 four-source decisions replay exactly, without input
  mutation. Three historical negative-evidence replays remain zero.
- All 3 recorded negative-control ranges were re-decoded with current D11
  recovery, fresh crops/pixels and cached full-frame Tiny/pose; all remain zero.
  These controls are not described as fresh full inference.
- Crop spacing, image-anchor expiry/provenance, source hashes, timestamps and
  unchanged D12/app/shared source hashes are checked in the final packet.
- Coverage passes only on D11_1. The other three retain tracking-coverage
  failures. A coverage pass does not resolve D11_1's two missed contacts.
- Side ambiguity, 2-D overlap, partial/blurred Tiny templates, sparse acquisition,
  hand-context vetoes and unresolved local fits remain. The 0.15-second event
  reconciliation window can merge close impacts. A contact too near the end
  of a source to supply the required outgoing observations remains unresolved.
- No held-out accuracy or phone runtime/heat measurements are established.
  This is local research, not a mobile integration or accepted touch count.

The existing self-contained reviewers are unchanged under
`.build-artifacts/d11-20261101-v1/review/D11_*/`. They embed video and every
original frame, support stepping and original timestamps, and export annotations.
The new report links to them. No additional human label was invented or requested.

### Next unfinished step

Use the selected miss traces to improve ball/surface evidence at the remaining
owner-confirmed impacts, especially partial/blurred templates and sparse
acquisition in D11_3/D11_4. D11_1 now has current-image evidence around its missed
contacts, exposing conservative hand/context and surface-fit failures that
need image-level disambiguation. Preserve the hand/floor/near-miss negatives,
the recovered D11_2 final contact, explicit side uncertainty and all three
separate foot references. Re-run event comparisons after each change; do not
widen matching windows, force sides or tune to totals. D11 stays pending until
the owner explicitly accepts it.

D11 still uses **two 60-second rounds, 30 seconds rest**, permitted resets and
no contact target. Its eligibility, balance/coach prerequisites, agreement
before linking/alternating, stop-if-uncomfortable rule and unapproved-demo
warning remain unchanged. D12 and all app files are untouched. No build,
deployment, upload, commit or push was performed.

---

## Owner event reviews received — 1 November 2026

All four submitted `D11_*review*.json` exports have been ingested. They explicitly
declare **complete source review**, `pipelineOutputsSeen: true`, and
`acceptanceGranted: false`. These are owner-reviewed, development-exposed
annotations, not blind validation or acceptance. The exact originals from
Downloads are preserved byte-for-byte under
`.build-artifacts/d11-owner-review-20261101-v1/original-exports/`. All four source
hashes, all 48 annotation frame/time triples and all 1,736 evidence timestamps
match their reviewer manifests and original recordings. Earlier assistant
annotations, review packets, candidate results and source media remain intact.

This section supersedes the earlier requests for initial owner annotation and
the earlier use of assistant labels/clip totals as the current reference. The
older checkpoint below is retained as history.

| Source | Owner thigh contacts | Separate foot contacts | Current thigh count | Temporal playing matches / missed / false positives |
|---|---|---|---|---|
| D11_1 | 3: right 2, left 1 | 0 | 0 | 0 / 3 / 0 |
| D11_2 | 12: right 8, left 4 | 1 right | 0 | 1 / 12 / 0 |
| D11_3 | 6: right 5, left 1 | 1 right | 0 | 0 / 7 / 0 |
| D11_4 | 9: right 5, left 4 | 1, side unknown | 0 | 0 / 10 / 0 |

The reference now contains **30 thigh contacts and three separate foot
contacts**. The only prediction remains D11_2 at **4.900000 s / frame 147**,
exactly matching the owner's left-thigh timestamp but still classified as
unknown body/side. There are **32 undetected playing events** and **30 unresolved
thigh counts** (29 undetected thighs plus that one attribution failure). There
are no unmatched predictions. All 12 hand markers, two floor markers and the
near-miss marker have no prediction within 0.10 s. This does not turn the severe
recall and coverage failures into successful validation. Coverage gates remain
failed on all four sources.

Every owner playing-contact timestamp is listed below. All entries are missed
unless explicitly marked as a temporal match. Times are original decoded seconds,
not frame numbers divided by rounded FPS; the original late-source time offset
is retained.

| Source | Owner thigh times and anatomical sides | Separate foot times |
|---|---|---|
| D11_1 | 1.733333 R; 2.466667 L; 3.200000 R | None |
| D11_2 | 2.233333 R; 2.866667 R; 4.433333 L; **4.900000 L — temporal match, body/side unknown**; 7.100000 R; 7.633333 R; 9.266667 L; 11.133333 R; 11.600000 R; 15.033333 L; 16.635000 R; 17.001667 R | 5.733333 R — missed |
| D11_3 | 2.900000 R; 4.166667 L; 5.600000 R; 10.800000 R; 11.233333 R; 11.733333 R | 6.133333 R — missed |
| D11_4 | 0.933333 R; 1.366667 L; 6.133333 R; 6.566667 L; 7.166667 R; 10.866667 R; 11.400000 L; 14.500000 R; 15.066667 L | 15.800000, side unknown — missed and excluded from thigh count |

The owner resolves several earlier ambiguities:

- D11_2 frame 86 / 2.866667 s is **right thigh**, correcting the earlier assistant
  left-thigh attribution. This is a label correction, not a detector side error.
- D11_2 frame 172 / 5.733333 s is **right foot**, resolving the earlier assistant
  foot/thigh uncertainty. It is not a thirteenth thigh contact.
- D11_3 frame 368 / 12.266667 s is a **near miss, no contact**. The older provisional
  review anchor near frame 366 is not a positive target. No detector false
  positive was emitted there.
- D11_4 resolves the old 8–9 thigh range to **nine thigh contacts**. Frame 474 /
  15.800000 s is a foot contact with unknown side. Its exact annotation note,
  “foot contact not to be counted”, is preserved. It is excluded from the thigh
  count and retained in separate foot accounting under the user's explicit
  instruction; the note is not a global override of playing-contact rules.

`REPORT.html` in the new owner packet contains every judgment and its result,
including negative markers. `comparisons.json` records one-to-one comparisons
for preserved v3, current v4 and the unselected hip/knee crop. Results are stable
at 0 / 0.05 / 0.075 / 0.10-second diagnostic tolerances. No independently calibrated
tolerance is claimed. `annotation-resolutions.json` preserves the corrections;
`miss-diagnostics.json` records ball/direct-anchor availability, geometry, hand
context, independent pixels, trajectory response and nearby decision traces at
each owner-marked event.

The first fixed-evidence diagnosis identifies two concrete failures:

1. **Missing ball evidence:** 26 of the 30 owner-marked thigh frames have no ball
   track (3/3, 9/12, 6/6, 8/9 by source). The other four are flow-only; none has a
   selected direct detection at the marked instant. Target thigh landmarks are
   valid at all 30, and the regional hand/context check is available and safe at
   28. These are overlapping evidence flags, not proof of one exclusive cause.
   D11_1's three contact frames sit inside observed-track gaps of 0.400, 0.500
   and 0.333 seconds, exceeding the bounded timing stage's 0.10-second limit.
   Frame 74 has a recorded crop proposal that was not selected; its raw crop
   output/selection failure is a concrete acquisition follow-up.
2. **Cross-body contamination:** D11_2 produces a raw left-thigh proposal at
   frame 147 / 4.900000 s, followed by a raw head proposal at frame 148 /
   4.933333 s. The shared 0.15-second reconciliation window merges their body
   labels into unknown. This is not an extra final counted event. The first
   proposal uses forward flow; the next uses backward flow, whose ball centre
   jumps from about (449.6, 328.8) to (471.5, 168.7) in one frame. The head
   proposal is not supported by the owner's complete review. This pinpoints
   the attribution loss; it does not justify blindly preferring thighs over
   genuine head contacts. `ownership-diagnostics.json` preserves both raw
   proposals, geometry and trajectory evidence.

Original-frame strips and `D11_2-F147-attribution-trace.jpg` support inspection
without replacing the owner labels. The next evidence experiment should validate
flow against the current image and investigate acquisition at impact; no
threshold or contact rule was changed during this intake.

Current v3/v4 decisions replayed exactly on all four recordings with immutable
inputs. The existing **16 D11 impact and review-intake tests passed** again. No
detection, acquisition, app or D12 code changed during annotation intake; no
broader suite rerun was necessary for this documentation/evidence update. The
earlier unrelated catalogue-test limitation is retained below.

**Current next step:** owner annotation intake is complete. Diagnose and improve
image-level ball/surface acquisition at the now-confirmed missed contacts, while
using the owner hand/floor/near-miss labels as negative controls. Preserve the
separate foot labels and final falling contacts. Do not widen timing tolerances,
infer contacts from expected totals, or train detection logic on recording IDs
or marked frames. D11 remains pending explicit owner acceptance.

## Checkpoint resumed and source inventory

Read the all-drill acceptance register, optimisation handoff, annotation protocol,
analyser README, drill-owned design, mobile touch-count handoff and current
catalogue. No applicable `AGENTS.md` was found in the workspace ancestry or
implementation repository. D11 previously composed regional thigh/head flight
responses and foot release/recontact events. It had no dedicated handoff or
thigh-only count after final attribution. The existing falling-thigh test covered
the historical shared counter, not this drill-owned route.

The requested `../device-feedback/Dill-based-video-for-test/D11-Thigh-Juggling`
folder contains four MOV recordings and no annotation sidecars at intake. All
four are byte-identical to sources in the preserved 22 October
`.build-artifacts/drill-owned-benchmark-v3/manifest.json`. The new private packet
is `.build-artifacts/d11-20261101-v1/`; its `inventory.json` records full paths,
source/evidence hashes, FPS, durations and historical identities.

| Local ID / filename | Frames / nominal FPS | Available reference | v3 and current v4 events | Coverage |
|---|---|---|---|---|
| D11_1 / `FrontView_ThighJuggle_3.MOV` | 160 / 30 | Owner total 3; no owner timestamps | 0 | 61.875% |
| D11_2 / `Juggling with thighs.MOV` | 604 / 29.9975 | Old “accepted estimate 10” is not human truth. Separate single-Codex review: 12 thigh + 1 playing-body-uncertain; owner unverified | 1 unknown at 4.900000 s; 0 thigh | 46.358% |
| D11_3 / `thigh juggle hand reset.MOV` | 463 / 30 | Owner total 6 thigh, excluding hand resets; no owner timestamps | 0 | 27.214% |
| D11_4 / `Thigh juggle.MOV` | 509 / 29.9971 | Owner range 8–9 thigh; no owner timestamps | 0 | 21.807% |

All four pass the existing nominal-30-FPS input requirement, but **all fail the
85% tracking-coverage gate**. D11_3 and D11_4 also fail independent pixel coverage.
No accepted zero result follows from an empty candidate list. Historical larger
model/reverse-flow results remain historical; no larger model was run.

Human judgments were located in the source-matched historical manifest and
`.build-artifacts/touch-count-local/independent-round-3/owner-targets.json` and
`owner-reference-notes.json`. The timestamped adult reference comes from
`.build-artifacts/touch-count-local/validation/frozen-annotations-v1.json`,
`clips.thigh`, with its original annotation and decoded-frame coverage records.
It explicitly says `single-Codex-visual-review`, `ownerVerified: false`; it is not
a human annotation. Old review anchors in the hand-reset audits are explicitly
provisional windows, not accepted labels. No totals or anchors were converted
into invented human event times.

## D11-only changes

- `drill_pipelines/d11.py` preserves `V3_STRATEGY` / `identify_contacts_v3` and adds
  the new version. Evidence acquisition, crop budget, eligibility and coverage
  gates are unchanged. Foot/head stages remain eligible and separate.
- `d11_thigh.py` adds bounded impact proposals: compare smooth quadratic flight
  with continuous quadratic flight plus a velocity change, over seconds-based
  incoming/outgoing windows. Require at least three observations per branch,
  observation gaps no greater than 0.10 s, direct detector anchors on both
  branches, stable ball size, bounded fit residual, anatomical intersection,
  observed safe hand context and independent pixel response. Search only inside
  the observed gap. Inferred positions never replace tracking observations.
- A genuine impact can continue downward; no upward rebound, following contact,
  successful sequence or target total is required. Smooth falls, throw apexes,
  holds, near misses, floor rebounds and handling are negative controls.
- Thigh count and metrics are calculated after cross-body reconciliation.
  `d11ThighContactCount` excludes foot/head/unknown; `candidateCount` retains all
  playing candidates. `d11ThighSides` reports left, right and unknown separately.
  Both thighs plausible, or the other thigh unavailable, keeps side unresolved.
  Competing foot/head projection keeps body attribution unknown.
- Detection reads no recording names, annotation files, frame-number lists or
  expected counts. `touchCount` remains null, `phoneIntegrationReady` false and
  `acceptanceStatus` is pending.

The impact-fit approach is implemented independently inside D11. It does not
import or change the ongoing D12 experiment. Shared contact helpers, detection,
pose and registry routing code were not edited. The only change in the existing
cross-drill test is its D11 revision expectation; concurrent D12 expectations
were preserved. No app source or catalogue file was edited by this task.

## Event-level results

Exact v3 decisions reproduced on all four frozen Tiny-plus-crop evidence files,
with input immutability and source hashes checked. V4 adds **no events on these
real recordings**. Synthetic success must not be described as recovered real
contacts. The one existing 4.900 s unknown event is unchanged.

The table uses the preserved assistant review intervals on D11_2. These are
development labels, not owner-confirmed ground truth. Original decoded
timestamps, including the later variable-timebase offset, are retained.

| Reviewed interval (original seconds) | Legacy attribution | Current result |
|---|---|---|
| 2.200000–2.266667 | Right thigh | Missed |
| 2.866667–2.933333 | Left thigh | Missed |
| 4.400000–4.500000 | Left thigh | Missed |
| 4.900000–4.966667 | Left thigh | Temporal match at 4.900000; body/side unresolved, excluded from thigh count |
| 5.733333–5.833333 | Playing contact, foot/thigh unresolved | Missed; do not treat as confirmed thigh |
| 7.033333–7.133333 | Right thigh | Missed |
| 7.566667–7.666667 | Right thigh | Missed |
| 9.233333–9.333333 | Left thigh | Missed |
| 11.100000–11.166667 | Right thigh | Missed |
| 11.566667–11.666667 | Right thigh | Missed |
| 15.033333–15.100000 | Left thigh | Missed |
| 16.601667–16.668333 | Right thigh | Missed |
| 16.968333–17.068333 | Right thigh | Missed |

There is **1 temporal playing match, 12 missed playing events, and no unmatched
predictions**. All 12 thigh labels lack thigh attribution: 11 are undetected and
one has an unknown-body temporal match. No prediction falls in the seven saved
handling exclusions. Three uncertain intervals are preserved, including the
hand/thigh ambiguity at 15.400000–15.566667 s. Partial assistant review cannot
establish full-source precision or human event recall. For the other sources,
there are no predictions to list; missed-event timestamps and false-positive
rates cannot be derived from owner totals alone.

`event-comparison.json` records one-to-one matching against original uncertainty
intervals, separately reporting body/side attribution, misses, explicit negative
exclusions and unresolved unmatched predictions. Zero additional tolerance and
0.05/0.075/0.10-second sensitivities give the same matching outcome; these are
diagnostic sensitivities, not an independently calibrated tolerance.
`D11_2-legacy-assistant-labels.json` is a new provenance-bound derivative, not a
replacement annotation. `v4-replay/D11_2-miss-diagnostics.json` includes nearby
ball, direct-anchor, geometry, hand-context, pixel and timing rejection evidence.

## Acquisition experiment and limitations

A separate unselected hip/knee-only crop removes ankles from the targeted region
while retaining person-crop slots, the Tiny model, the existing call budget and
thresholds. It re-decodes every source frame, verifies timestamps, reruns crop
inference and pixel evidence, and reuses frozen full-frame detections/poses.
It is not fresh end-to-end inference or phone latency measurement.

| Source | Current coverage | Hip/knee trial coverage | Trial candidates |
|---|---|---|---|
| D11_1 | 61.875% | 61.875% | 0 |
| D11_2 | 46.358% | 44.040% | Same unknown event at 4.900 s |
| D11_3 | 27.214% | 25.486% | 0 |
| D11_4 | 21.807% | 18.271% | 0 |

The crop trial recovered no thigh events and is **not selected**. Its code,
results, model hash and evidence remain in `hip-knee-crop-trial/`. On the original
evidence, most bounded fits lack sufficient/anchored observations or cannot
resolve a discontinuity over smooth flight. The adult source also has hand
context, ball-size and geometry rejections. A rejected fit is not proof that the
human did not contact the ball. Missing wrist confidence is missing context,
not proof of handling. No gate was relaxed to match a reference total.

Close impacts remain subject to the inherited 0.15 s reconciliation window and
the regional stage's 0.25 s response spacing. Severe occlusion, unresolved
perspective overlap and contacts too near the recording boundary can remain
unresolved. Camera movement, generalisation, side accuracy and held-out event
accuracy are not established. These four clips are development-exposed.

## Local reviewers and annotation intake

`review_d11.py` plus `d11_reviewer.html` package each source as one self-contained
HTML file with H.264 video, every decoded original frame, original timestamps,
frame stepping, confidence/anatomical-side fields, uncertainty intervals, and
source-bound JSON export/import. Video/frame derivatives are local; originals
are unchanged. No external media or network requests are required. Predictions
and old labels are not prefilled. A partial empty draft cannot mean zero touches;
a complete negative review requires an explicit whole-source checkbox.

Open `.build-artifacts/d11-20261101-v1/REPORT.html` for all four links, or start
with `review/D11_1/D11_1-review.html` (5.33 seconds). Put exported JSON in the
requested D11 media folder. Preserve each export as a new file. A review export
does not grant acceptance.

Source-bound intake, from repository root:

```text
.build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/review_d11.py compare --annotations PATH_TO_NEW_EXPORT --manifest .build-artifacts/d11-20261101-v1/review/D11_1/manifest.json --result .build-artifacts/d11-20261101-v1/v4-replay/D11_1.json --output .build-artifacts/d11-20261101-v1/NEW_OWNER_COMPARISON.json
```

The output must be a new file. Wrong source hashes, changed timestamps, unsupported
schemas, holdout input, blank templates and invalid intervals are rejected.
Unmatched predictions in partially reviewed footage remain unresolved unless
explicit reviewed negatives establish a false positive. Foot/head/unknown
temporal matches never silently become successful thigh attribution.

## Verification and boundaries

- 28 initial D11/regional/falling-contact tests passed. The expanded D11,
  annotation-comparison and route-assertion selection passed **22 tests**.
- The full analyser suite ran **774 tests**: 772 passed; the D11 revision assertion
  was updated and passed on targeted rerun. The remaining unrelated existing
  `test_touch_count...test_catalogue_preserves_legacy_profiles_and_explicit_new_drills`
  expects 22 catalogue entries while concurrent D25 app work supplies 23. This
  task did not change that catalogue or unrelated assertion. Logs preserve the
  original failure; the whole suite is not claimed green.
- Three recorded negative controls (two stationary rounds and the original
  no-touch clip) remain exactly zero with v3 and v4; inputs remain unchanged.
- All four source hashes, exact v3 decisions and original decoded timestamps were
  checked. Annotation/source files and all earlier results remain preserved.
- Reviewer packaging checks verify all 1,736 embedded frames, exact embedded
  playback bytes, original-time mapping, stepping bounds, annotation export,
  source-bound import and empty-partial protection. QA annotations exist only in
  the isolated JavaScript test VM, not the user's browser or annotation files.
- Browser playback could not be visually tested: the in-app browser's URL policy
  rejected `file:` access and explicitly prohibited alternate routes. No bypass
  was attempted. Embedded-frame images and media metadata are checked separately.

The current app catalogue prescribes **two 60-second D11 rounds with 30 seconds
rest**, permitted resets and no required contact target. Older prose saying two
20-second windows is stale. Balance/coach-instruction prerequisites, coach
agreement before linking/alternating, stopping when uncomfortable, and the
unapproved-demo warning are retained. D11 remains `drillAccepted: false` and
`pipelineStatus: pending-review`. D12's separate eligibility and self-paced flow
are untouched. Ongoing app and D12 edits were present and progressed concurrently;
this task did not revert or incorporate them.

## Previous next step — completed by the owner intake above

The following was the pre-owner-review next step and is retained as history.
The current acquisition/attribution diagnosis and remaining work are documented
in the owner-review section at the top of this handoff.

Obtain owner event judgments, starting with the short D11_1 recording, followed
by D11_3/D11_4 and adjudication of the adult assistant labels. Import the new
exports, report individual matches/misses/false positives and body/side errors,
then inspect image-level acquisition and hand-context gaps at those verified
contacts. The next development target is reliable ball/surface evidence at real
missed impacts, not a wider timing window or fitting the owner totals. Keep D11
pending until explicit owner acceptance.
