# D25 Feet juggling — development checkpoint, 1 November 2026

**Requested ±2 count range reached; still pending owner acceptance and failing
quality gates. The pipeline still misses genuine contacts.** No app build, deployment, recording upload, commit
or push was performed. No accepted pipeline was selected, replaced or edited.
D12 V5 remains accepted and unchanged.

## Current checkpoint — circular feet v11, 1 November 2026

The user's continuation target is met on **both available recordings**: **10
feet versus owner 12**, and **13 feet versus owner 15**. This is a development
checkpoint, not acceptance or app integration. `acceptedCount` remains null;
the catalogue and registry selections are unchanged. The earlier v1/v4/v5
checkpoints below are retained as history.

Private report: `.build-artifacts/d25-20261101-v6/REPORT-v11.html`. It links the
two circular overlays, all 27 reviewed foot contacts, strict comparisons, raw
original-frame review strips, and the existing offline annotation pages.
Final results are `final-v11/{D25_1,D25_2}/result.json` under that directory.

### Evidence, counting and timing

The source folder remains
`device-feedback/Dill-based-video-for-test/D25-Feet-Juggling`. `HumanJudgment.txt`
contains **totals only**; the owner explicitly confirmed there are no event-level
annotations. Both MOV files, that text, original assistant references, and all
previous experiments are preserved. The current assistant v3 references are in
`annotations-v11/`; positive windows are unchanged from v2. All labels are
partial, development-exposed assistant review, not owner judgments or held-out
validation.

| Source | Owner feet | Detected feet | Assistant visually associated feet | Strict time-window foot matches | Physical foot misses | Confirmed foot FP |
|---|---:|---:|---:|---:|---|---:|
| D25_1 | 12 | 10 | 10 | 8/12 against v2/v3; 7/12 against original v1 | F148, F177 | 0 in reviewed windows |
| D25_2 | 15 | 13 | 13 | 13/15 under all references | F358, F511 | 0 in reviewed windows |

D25_1's F99 estimate is **10 ms before** its unchanged F99–101 label window;
F129 is **1.667 ms before** F129–131. Consecutive original images associate these
with the already-reviewed F100 and F130 contacts. The strict zero-added-tolerance
comparison retains both as unmatched predictions and missed timing matches.
They are not silently turned into strict successes. Original v1 additionally
retains its previously documented F418 timing-window mismatch. Every estimate,
label and explicit assistant association is saved in `comparisons-v11/`.

The latest foot prediction frames (zero-based) are:

- D25_1: **99, 113, 129, 305, 321, 387, 401, 418, 435, 450**.
- D25_2: **105, 118, 128, 175, 190, 206, 222, 237, 342, 375, 477, 496, 524**.

D25_1 also emits **two thigh candidates, kept outside the foot count**. F300 is
a confirmed false positive: the ball is freely descending after hand release.
F456 remains an unresolved hip/hand/thigh interaction. D25_2 emits no extra
non-foot candidates. Head/unknown totals are zero in these runs; real head/thigh
classification has not been established. Zero confirmed foot FP is not
whole-video precision. Prior out-of-view/retrieval intervals, D25_1 F335–338,
and D25_2 F130–142/F416–424 remain unresolved.

### Implemented changes and unchanged gates

- Circular edge and source-specific ball appearance measurements supplement
  the unchanged Tiny/pose acquisition. Opposing anchored paths and current
  circular geometry corroborate blurred observations. The existing blurred
  template tracker provides another current-image estimator. Neither expected
  totals, filenames nor annotations are inputs to contact inference.
- A short ambiguous interval needs actual circular edge pixels between two
  observed circles at most **0.14 s** apart. Linear position is only a search
  check; no interpolated ball is counted. Independent background-relative
  texture response is recomputed when those measured boxes change.
- When the ball obscures foot seeds, nearby foot appearance (or visible opposite
  foot appearance) can guide a **new current-pixel** component around the foot.
  Positions and boundaries are not borrowed. This remains 2-D appearance, not
  a depth or anatomical segmentation claim.
- Foot/thigh attribution uses visible boundaries and impulse direction. A
  foot must visibly separate in two measured frames; up to one second permits
  an observed stall to release. Continuous support and adjacent proposals merge
  into one episode. Either foot works; a subsequent fall does not invalidate a
  contact. Hand releases, catches and pickups do not themselves count.
- Explicit algorithm changes: penalized impact-model evidence gain **≥6**,
  fit residual **≤0.2 ball radii**, velocity change **≥3 radii/s**, and mandatory
  independent pixel response; contact-time hand checks replace the broad hand
  neighbourhood, and raised/own-foot motion replaces the image-height floor
  proxy. v11 prevents movement of the other foot from certifying a stationary
  supporting foot. These are algorithm changes, not relaxed quality gates.
- Foot-scoop starts require stationary arrival, observed ball/foot co-lift,
  independent pixel response and subsequent separation. Hand pickup, falling
  arrival, and support without release are excluded in synthetic tests at
  30/60/120 fps. No adjudicated real scoop-start example is available here.

Input nominal/decoded FPS remains **≥29.9**; original tracking coverage **≥85%**;
maximum source gap **≤0.15 s**; independent pixel coverage
**≥max(4, frame count/4)**. Tracking remains **32.3136% / 73.3221%** and fails
for both recordings. D25_1 also fails pixel coverage (**113/523**); D25_2 has
**362/596** valid pixel frames. Circle measurements never inflate these gates.

All **523 / 596 original frames** were decoded at their original timestamps for
the image/limb stages, at the saved analysis dimensions. Verified v1 Tiny/pose
outputs were reused; these are not fresh full model-inference runs. v11 then
replays the immutable v10 measurements with the support-foot guard. Both final
manifests bind sources, evidence and code hashes. All contact times/counts and
display measurements are identical to the v10 circular overlays; the final
audit records that equivalence. Overlays retain every frame, with maximum PTS
errors **1.523 / 1.334 ms**.

### Validation, annotation and next unfinished step

The final relevant Python suite has **161 passing tests**, including D25,
accepted D12 V5 and D01/D17/D22/D23 regressions. Both original-frame annotation
pages pass the Node checks for frame stepping, deep links, original timestamps,
provenance, export and invalid imports. Browser visual execution remains
unavailable under the earlier local-file browser security block; no workaround
was attempted. Review strips and overlay frames were inspected directly.

An intermediate D25_2 run stopped on an empty off-screen foot crop; it remains
saved with a non-complete manifest. The bounded-crop guard is tested and both
sources completed after the fix. An initial scoop test exposed the stationary
prefix problem; the corrected implementation passes the positive and negative
cases at all three cadences. These failed experiments are retained privately.

For owner annotation, open the report's **Original-frame annotation page** link.
Arrow keys move one frame; Shift+arrows move ten. Import assistant JSON only if
desired, record judgments, then export to a new owner file in local artifact
storage. Do not overwrite owner totals or earlier JSON. An export does not
accept D25.

Next: adjudicate the unresolved intervals and two timing estimates; recover
D25_1 F148/F177's blurred impacts, D25_2 F358's hand projection and F511's
insufficient independent pixels; fix the non-foot false positive; then validate
with independent footage, including scoop starts and real thigh/head contacts.
No gate or acceptance status changes merely because the count band is met.

Reproduction entry point: `tools/analyser/run_d25_candidate_v11.py --input
<original MOV> --output <new .build-artifacts directory>` using the existing
analyser Python environment. It runs fresh Tiny/pose, all preserved image stages
and the final counter without labels. That complete wrapper was inspected but
not rerun end-to-end; the current evidence used the verified v1 model cache and
the independently completed stages/manifests described above.

Instructions and prescription remain **2 × 60 s, 30 s rest, 0 repetitions**;
hand-drop/soft-laces/catch-reset/linked touches remain unchanged. D25 stays
pending until explicit owner acceptance. Accepted runtime sources, including
D12 V5, are unchanged. No build, deployment, upload, commit or push occurred.

## Continuation checkpoint — 1 November 2026

**Current experiment: corroborated image v4 plus limb-seed v5; still pending.**
The earlier checkpoint below is retained as history. No shared registry or mobile
integration changed. Owner evidence remains totals only (12 / 15); all event
judgments below are partial, development-exposed assistant review.

Private continuation workspace: `.build-artifacts/d25-20261101-v4/REPORT.html`.
It links both new circular overlays, the existing offline original-frame
annotation pages, original/revised comparisons and every reviewed contact.

### What changed

- `d25_image_v4.py` measures each original image using blurred detector templates
  in forward and backward passes, with current colour agreement. A position is
  not interpolated through a missing image. Opposing measurements more than
  0.5 ball radii apart abstain. Detector selection remains **0.55**.
- The search lifetime is explicitly extended from 0.4 to **0.9 seconds**.
  This is an image hypothesis lifetime, not a new scoring-quality threshold.
  Contact evidence older than the original **0.14-second** anchor limit needs
  two distinct detector templates separated by at least 0.1 s, each with current
  correlation at least 0.7, agreeing within 0.5 radii. Uncorroborated image
  estimates older than 0.4 s are rejected. Quality coverage still uses the
  original detector/flow track; appearance does not inflate that gate.
- `d25_contacts_v4.py` preserves v1's impact, independent-pixel, hand, floor and
  duplicate rules. It uses visible limb colour boundaries and the measured
  impulse direction to resolve only separated foot/thigh evidence.
- `d25_limb_v5.py` rejects thigh seed patches projected onto a foot. Inspection
  showed that D25_2's opposite knee could otherwise seed its thigh region with
  the raised foot's pixels. Removing that shared evidence resolves F206 to a
  foot; missing or still-competing boundaries remain unknown. These are current
  2-D appearance regions, not anatomical masks or calibrated depth measurements.
- The image and attribution stages freshly decode **all original frames** but
  reuse the verified v1 Tiny/pose outputs. They are not new full model inference
  runs. A separate same-model lower-body crop variant did run fresh Tiny/pose on
  both full sources; it worsened coverage to **28.8719% / 71.6443%**, versus
  32.3136% / 73.3221%, and remains unselected. Sharpening/crop probes also remain
  saved and were not adopted.

### Event-level result and reference provenance

| Recording / stage | Detected feet | Strict foot matches, original refs | Strict foot matches, revised refs | Undetected, revised refs | Unknown-body matches | Confirmed foot false positives |
|---|---:|---:|---:|---:|---:|---:|
| D25_1 original v1 | 0 | 0 | 0 | 12 | 0 | 0 |
| D25_1 image v4 | 1 | 0 | 1 | 9 | 2 | 0 |
| D25_1 limb v5 | 1 | 0 | 1 | 9 | 2 | 0 |
| D25_2 original v1 | 4 | 4 | 4 | 8 | 3 | 0 |
| D25_2 image v4 | 5 | 5 | 5 | 8 | 2 | 0 |
| D25_2 limb v5 | 6 | 6 | 6 | 8 | 1 | 0 |

The D25_1 foot prediction is **13.920000 s**, 13.333 ms before the original
F418–420 reference interval. The original strict comparison retains one
unmatched prediction and ten undetected contacts, with two unknown-body matches.
Consecutive original F414–422 were visually re-reviewed: the ball descends
through F417, reaches its lowest contact region around F418 and separates upward
at F419. The same event's assistant bracket is revised to **F417–419, best F418**
in a new JSON file, with the prior label/hash and `pipelineOutputsSeen: true`.
There is no added contact and no owner label. The original JSON is unchanged.
Both reference sets are compared at **zero added tolerance**; original-reference
sensitivity at 1/60, 0.05 and 0.10 seconds is also saved. This is a transparent
development-reference correction, not held-out accuracy or a relaxed gate.

Individual current outcomes (all original zero-based frames):

- **D25_1:** foot F418 / 13.920000 s; unknown F129 / 4.300000 s and F450 /
  14.998333 s. Reviewed contacts at F100, F113, F148, F177, F305, F322, F387,
  F402 and F435 remain undetected. The original reference's best F419 is the
  timing re-review described above.
- **D25_2:** feet at F118 / 3.933333 s, F127 / 4.233333 s, F175 / 5.818333 s,
  F190 / 6.323333 s, F206 / 6.866667 s and F477 / 15.910500 s. F496 /
  16.540000 s remains unknown. Reviewed F105, F222, F237, F342, F358, F375,
  F511 and F525 remain undetected.
- **Regression:** D25_2 F525 was an unknown temporal candidate in v1; v4/v5
  miss it. Opposing image measurements disagree by 1.23 radii at F527, so the
  new method withholds that image and the impact fit fails. This is not hidden
  by the improved foot count.

Under revised references there are no unmatched predictions. Zero confirmed
false positives is still **not whole-video precision**: the original unresolved
intervals below remain unresolved. No thigh or head event was emitted; those
real-footage classes remain unvalidated. Missed foot attributions remain
**11 / 9**, counting unknowns as failures to attribute a foot.

### Validation, preservation and reproduction

Image measurements increase from **248 to 383 / 523** and **469 to 485 / 596**
frames. Tracking coverage and independent quality facts remain unchanged:
32.3136% / 73.3221%, both below 85%; D25_1 also fails independent-pixel coverage.
The nominal/decoded 29.9-fps minimum, maximum gap 0.15 s and independent-pixel
requirement `max(4, frames/4)` are retained. Replay entry points additionally
validate source cadence, every frame index, measured cadence and cached gap
facts so a supplied evidence file cannot bypass input requirements.

All four saved image-v4/limb-v5 source results replay their decisions and quality
gates exactly, with original timestamps. The circular overlays retain all
**523 / 596** frames, zero dropped/repeated frames, and maximum encoded timestamp
error **0.001523 / 0.001334 seconds**. The F418/F206 contact overlays were visually
inspected. Existing offline annotation pages are reused unchanged.

**139 relevant analyser tests passed**, including nine continuation tests,
the original 16 D25 tests, D12 V5, and accepted D01/D17/D22/D23 contracts.
The new replay guards were additionally exercised on both real source timebases;
saved decisions and quality gates still replay exactly. `git diff --check`
passes. The encoded D25_2 F206 overlay was visually checked after compression.
Concurrent D11 work changed its own sources and the D11 revision assertion in
`test_d01_image_side.py`; D25 did not edit those files. Accepted drill runtime
sources, including D12 V5, remain hash-identical to this continuation's intake.

The first in-memory v4 attempt was manually interrupted while processing; its
partial log and executed source remain. The replacement uses bounded 32-frame
reverse decode blocks and both runs completed. V4, limb-v5, fresh acquisition,
probes, original annotations and source snapshots remain separate. The source
snapshot before replay input-validation hardening is in `executed-source/`;
that hardening changes neither saved decisions nor analysis thresholds.

To reproduce the full candidate from fresh models, from the Soccolo-app root
and with a **new ignored output directory**:

```powershell
& .build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_d25_candidate_v5.py --input ../device-feedback/Dill-based-video-for-test/D25-Feet-Juggling/D25_1.MOV --output .build-artifacts/d25-next/D25_1
& .build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_d25_candidate_v5.py --input ../device-feedback/Dill-based-video-for-test/D25-Feet-Juggling/D25_2.MOV --output .build-artifacts/d25-next/D25_2
```

The wrapper executes the three separately exercised stages: fresh v1 acquisition,
v4 current-image measurement, then v5 limb seed measurement. It reads no labels.
The combined wrapper has not itself been run end-to-end in this continuation;
the validated current image results use the preserved verified v1 acquisition.

**Next unfinished step:** repair long blurred intervals lacking two independent
strong anchors (especially D25_1), investigate F527's directional disagreement
without overriding it, and resolve F496/D25_1 limb occlusions with additional
current evidence. Retest every event, including the F525 regression and unchanged
hand/floor exclusions. Keep all unresolved intervals for owner review. D25 stays
pending; no accepted pipeline, source, prescription or timing has changed.

## Earlier v1 checkpoint (preserved)

## Intake checkpoint and preserved prescription

At intake, D25 existed in `apps/mobile/assets/local-training-catalog.json` with
`pipelineStatus: pending-review` and `drillAccepted: false`. There was no D25
analyser or handoff. The current local `ACCEPTED_PIPELINES.md` includes the
1 November D12 V5 acceptance; the older SoccerAPP-repo acceptance summary is
stale and must not be used to downgrade D12.

The catalogue is unchanged. D25 remains **two 60-second work rounds with
30 seconds rest, zero prescribed repetitions**, with hand-drop, soft laces
touch, catch/reset, then linked/alternating touches as control improves. A real
foot contact still counts when the ball subsequently falls. The temporary D01
demo remains explicitly unrelated; a dedicated D25 demonstration is pending.

Private sources are in
`../device-feedback/Dill-based-video-for-test/D25-Feet-Juggling/`:

| Source | Original frames | Duration | Cadence | Owner total |
|---|---:|---:|---|---:|
| D25_1.MOV | 523 | 17.433333 s | nominal 30; decoded 29.997127 fps | 12 |
| D25_2.MOV | 596 | 19.868333 s | approximately 30; decoded 29.997479 fps | 15 |

`HumanJudgment.txt` says both totals include hand resets. The owner confirmed in
this chat that **only the totals exist**: there are no owner event timestamps.
The original recordings and judgment file are hash-verified and unchanged.

## Isolated implementation

- `run_d25_development.py` is the standalone, full-source v1 runner. It does not
  change the shared registry or mobile runtime. It uses the existing Tiny ball
  and full pose models, all decoded frames, maximum analysis dimension 1280,
  and feet/person recovery regions under the existing crop budget.
- `drill_pipelines/d25.py` owns D25 decisions. Current detector-anchored image
  measurements must distinguish a velocity discontinuity from smooth quadratic
  flight. The outgoing direction and a successful next juggle are **not** required.
- A contact must have playing-surface proximity, separated bounded hand regions
  and independent pixel response. Missing hand context abstains. Foot attribution
  also requires clearance from an image-floor proxy based on the supporting foot.
  Floor-height ambiguity abstains. This proxy is conservative, not a floor plane
  or a calibrated 3-D model.
- `d25FootContactCount` counts only `bodyPart: foot`; thigh, head and unknown are
  separately reported. Competing body attribution stays unknown. Adjacent impact
  fits are reconciled once within 0.15 s. Distinct faster contacts can still be
  merged; that limitation is not solved by the current tests.
- No annotation, filename rule, source hash, expected total or hard-coded event
  time enters contact decisions. These two recordings are development-exposed,
  not held-out validation.

The accepted D12 current-image appearance helper is imported read-only; its
source and configuration are unchanged. The separate v2 acquisition experiment
also reuses D23's same-model recent-ball acquisition read-only. No larger model
was downloaded or run.

## Results on every available recording

Private evidence root: `.build-artifacts/d25-20261101-v1/`.
Open `REPORT.html` there for offline reviewers, overlays, comparisons and every
reviewed contact. JSON comparisons contain full labels, predictions, timing
errors, misses, attribution errors, negative intervals and unresolved intervals.

| Source / experiment | Owner total | Assistant-reviewed feet | Detected feet | Correct foot matches | Undetected contacts | Temporally matched but unknown body | Confirmed foot false positives |
|---|---:|---:|---:|---:|---:|---:|---:|
| D25_1 fresh v1 | 12 | 12 | 0 | 0 | 12 | 0 | 0 |
| D25_2 fresh v1 | 15 | 15 | 4 | 4 | 8 | 3 | 0 |
| D25_1 recent-ball v2 | 12 | 12 | 0 | 0 | 12 | 0 | 0 |
| D25_2 recent-ball v2 | 15 | 15 | 3 | 3 | 9 | 3 | 0 |
| D25_1 image-recovery v3 | 12 | 12 | 0 | 0 | 11 | 1 | 0 |
| D25_2 image-recovery v3 | 15 | 15 | 5 | 5 | 8 | 2 | 0 |

V1 is the reproducible starting experiment, **not an accepted scoring pipeline**.
V2 worsens acquisition and is unselected. V3 remains an unselected diagnostic:
it re-decodes all original images and uses Gaussian template matching in both
directions with frozen v1 Tiny/pose observations. Disagreeing directions abstain;
current pixels and unchanged anchor/impact rules are still required. It recovers
some temporal/body evidence, but does not solve the failed quality gates.

Unknown matches are not foot successes: v1 has **12 missed foot attributions on
D25_1 and 11 on D25_2** (eight undetected plus three unknown). No prediction is
unmatched against the reviewed windows in these runs. Zero confirmed false
positives here is **not certified whole-video precision**: review is partial,
several intervals remain unresolved, and the development references are exposed.
No thigh or head candidates were emitted. Real-footage performance for those
separate classes is not established by synthetic tests.

### Individual reviewed events versus fresh v1

All frame indices are zero-based original frames. These windows are **assistant
visual review**, not owner annotations. Anatomical side is not adjudicated.

| D25_1 reference window | Best time | v1 outcome |
|---|---:|---|
| F99–101 | 3.333333 s | Missed |
| F112–114 | 3.766667 s | Missed |
| F129–131 | 4.333333 s | Missed |
| F147–149 | 4.933333 s | Missed; contact followed by escape/fall |
| F176–179 | 5.900000 s | Missed; separate foot contact after a floor bounce |
| F304–307 | 10.166667 s | Missed |
| F321–323 | 10.733333 s | Missed |
| F386–389 | 12.900000 s | Missed |
| F401–403 | 13.400000 s | Missed |
| F418–420 | 13.966667 s | Missed |
| F434–437 | 14.500000 s | Missed |
| F449–452 | 15.000000 s | Missed |

| D25_2 reference window | Best time | v1 outcome / predicted time |
|---|---:|---|
| F104–107 | 3.500000 s | Missed |
| F117–119 | 3.933333 s | Foot match, 3.931667 s |
| F127–129 | 4.266667 s | Foot match, 4.233333 s |
| F174–176 | 5.833333 s | Foot match, 5.815000 s |
| F189–192 | 6.333333 s | Foot match, 6.323333 s |
| F205–207 | 6.866667 s | Temporal match 6.868333 s; unknown body, excluded |
| F221–224 | 7.400000 s | Missed |
| F236–239 | 7.900000 s | Missed |
| F341–344 | 11.400000 s | Missed |
| F357–360 | 11.933333 s | Missed |
| F374–376 | 12.500000 s | Missed |
| F476–479 | 15.901667 s | Missed |
| F495–498 | 16.568333 s | Temporal match 16.541667 s; unknown body, excluded |
| F510–513 | 17.035000 s | Missed |
| F524–527 | 17.501667 s | Temporal match 17.468333 s; unknown body, excluded |

One-to-one chronological matching uses the reviewed uncertainty intervals with
**zero added tolerance**. Diagnostic sensitivities at 0.05/0.075/0.10 seconds
give the same foot-match/miss/unmatched counts. Matching totals alone were not
used as an accuracy claim.

## Annotation provenance and unresolved intervals

The assistant scanned the whole recordings at six-frame intervals, then reviewed
consecutive original frames around the contact bursts and selected exclusions.
This is not exhaustive frame-by-frame review of all inactive/retrieval intervals.
Owner totals were known; results were seen after the first image review. The
exports truthfully set `reviewed-partial`, `pipelineOutputsSeen: true`,
`annotatorId: assistant-visual-review` and `acceptanceGranted: false`.

- D25_1 F335–338: hand/thigh projection while catching; no confirmed additional
  playing contact. F339–355 is labelled handling, not a foot contact.
- D25_1 F193–249: ball exits view during retrieval; unseen contacts unresolved.
- D25_2 F130–142: stall/continuous support after the F128 contact. Possible tiny
  recontacts remain unresolved rather than automatically counted each frame.
- D25_2 F240–287: ball leaves view during retrieval.
- D25_2 F416–424: near miss versus light extra foot contact during retrieval
  after a floor bounce. Additional consecutive-frame inspection did not resolve
  this confidently, so it remains outside the confirmed total.

Hand releases/catches/pickups and the reviewed floor bounce are saved as explicit
negative intervals. Unreviewed/unresolved predictions cannot automatically be
called false positives. The comparison separately reports wrong-body foot
attributions, undetected contacts and unknown-body temporal matches.

### Easy offline workflow

Open `REPORT.html`, then **Blank frame reviewer** for either source. Each HTML
contains local playback and every original decoded frame; no server/network is
required. Arrow keys step one frame; Shift+arrows step ten. Mark one event per
contact, choose earliest/latest frames and a judgment, then download the JSON.
Put the downloaded file in the original `D25-Feet-Juggling` directory and report
that it is ready. Leave the whole-source checkbox unchecked for partial review.

The assistant JSON can optionally be imported. Imported event provenance is
displayed and retained; editing an event explicitly makes it an owner label.
Source hash/frame/timebase mismatches and conflicting imports are rejected.
The initial blank reviewers and their improved v2 copies are both preserved.
JavaScript interaction checks passed on the actual 523/596-frame files. Browser
visual QA was blocked by the embedded browser's `file:` URL policy; no alternate
browser route or server workaround was attempted.

## Quality gates, overlays and validation

- Unchanged input gate: nominal/decoded **at least 29.9 fps** (30 fps, allowing
  29.97). No resampling, frame thinning or low-FPS override exists in D25.
- Unchanged evaluation gates: at least **85% tracking coverage**, maximum
  timestamp gap **0.15 s**, and valid independent pixel frames at least
  `max(4, sourceFrames / 4)`.
- V1 coverage: **32.3136% / 73.3221%**. Both fail tracking; D25_1 also fails
  independent pixel evidence (113 valid frames). V2 coverage is worse at
  **26.3862% / 69.7987%**. V3 preserves the v1 original-track gates; appearance
  recovery does not turn estimated positions into direct detector observations.
- D25-only overlays use the D17/D22/D23 circle convention: center
  `(x+w/2, y+h/2)`, radius `(w+h)/4`. Cyan means direct ball evidence, magenta
  appearance/flow; a circle alone is not a contact. Captions say pending.
- Overlay verification retains **523/596 frames**, zero dropped/duplicated
  frames; maximum encoded timestamp deviation is **0.001523 / 0.001334 s**.
  These are playback derivatives; original-frame timestamps remain authoritative
  for annotations and inference. Originals and analysis inputs are unchanged.
- **130 relevant analyser tests passed** in the final run (127 at the earlier
  checkpoint), including D12 V5, D01 and accepted D17/D22/D23 contracts. This
  includes **16 D25 tests**, covering falling contacts, hand release/catch/pickup, floor/near-miss
  exclusion, missing evidence, separate attribution, 30/60/120-fps duplicate
  suppression, multiple contacts, source-bound review and false-positive/miss
  accounting. Synthetic success is not real-video recall.
- Both fresh v1 reruns reproduce the initial contact decisions exactly.
  All eight saved source/variant results replay exactly, including quality gates
  and original timestamps, in `comparisons/provenance-and-replays.json`.

The first v1 manifests failed their broad source-integrity check because another
task edited unrelated D11 acquisition/thigh files concurrently. Those files were
not changed by D25. The runner now records every changed file and fails if a
**loaded analysis module** changes; both fresh full-source v1 runs finish cleanly.
The original failed manifests/logs remain. V3 wrote both complete evidence/results
but raised a Path/string bug in its final integrity bookkeeping. The one-line
bookkeeping fix is in source; original outputs/logs and executed source snapshot
remain. Its saved decisions/gates/timebases were subsequently validated separately;
V3 is not mislabeled as a clean fresh end-to-end run.

## Reproduction and next unfinished step

From the Soccolo-app root, with a **new output directory**:

```powershell
& .build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_d25_development.py --input ../device-feedback/Dill-based-video-for-test/D25-Feet-Juggling/D25_1.MOV --output .build-artifacts/d25-next/D25_1
& .build-artifacts/analyser-venv/Scripts/python.exe tools/analyser/run_d25_development.py --input ../device-feedback/Dill-based-video-for-test/D25-Feet-Juggling/D25_2.MOV --output .build-artifacts/d25-next/D25_2
```

Use `review_d25.py compare --annotations FILE --manifest REVIEW_MANIFEST
--result RESULT --output NEW_COMPARISON` for an owner export. Results and exports
are source-bound. The runner does not consume the labels.

Next: investigate the per-contact acquisition traces in
`comparisons/D25_1-miss-diagnostics.json` first, especially loss before F100/F113
and across F322/F387/F435. Improve current-image ball acquisition through blur
without relaxing confidence/cadence/quality gates. Then add independently observed
raised-foot boundaries to resolve foot/thigh projection in D25_2 F206/F497/F525.
Review the listed uncertain intervals using the existing footage. Rerun both
complete sources and every event comparison after changes, retaining all versions.

Do not select v2/v3 or mark D25 accepted based on totals, tests or this handoff.
**D25 remains pending until the owner explicitly accepts it.**
