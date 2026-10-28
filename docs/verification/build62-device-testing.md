# Build 62 device testing

## D16 V3 accepted — 28 October 2026

The owner accepts D16's local `drill-owned-v3-push-return-cycles` pipeline and
authorizes local Git commits. D16 is a forward lace push followed by a roll-back;
one cycle counts as one D16 touch. The current catalogue corrects the earlier
hand-drop wording. Six of 21 pipelines are now accepted: D01/D02/D03/D04/D15/D16;
D05 stays pending. Counts are 7/13 on the two exposed sources, with unresolved
D16_1 evidence and event review still open. Acceptance does not certify accuracy
or update installed Build 62. No native build, media upload or push.

[D16 operation, validation and limits](d16-pipeline-acceptance.md).


## D04 accepted local pipeline — 24 October 2026

The owner accepted the latest D04 response-locality experiment as the local
Cone weave pipeline, revision `drill-owned-v11-local-passage`, and authorized
cleanup, documentation and local commits. See [decision, operation and limits](d04-pipeline-acceptance.md).
D03 v5, other drills, Build 62, saved history and the frozen benchmark are preserved.
Acceptance does not certify complete touch totals or authorize a native build,
upload or push. One reviewed rolling-ball false proposal and threshold sensitivity
remain open; full-video accuracy and held-out evaluation remain unresolved.

## Latest engineering checkpoint — 22 October 2026

Owner confirms D03 Dribble and stop as the selected drill and rejects the larger
ball model for future analysis because of processing cost. Preserve Build 62,
saved results and historical stronger evidence. Private local code now provides
Tiny and Tiny + targeted person-crop variants, separate versioned D01–D10
strategy entry points and research head/thigh entry points. Initial strategies
share unchanged contact rules; they are not already optimized per drill.

Controlled cached-evidence replay reproduces the earlier Tiny and crop outcomes.
Fresh local Tiny/full-pose inference independently reproduces the candidate
totals and event frame/body sequences; evidence JSON differs, so no exact parity
claim is made. Crop inference is only one cost component: pixel/flow processing
is still substantial. Desktop timings do not predict iPhone thermal performance.
One round remains undercounted; the other crop estimate is owner-acceptable but
not exact. Diagnostic coverage gates still fail, so no accepted app result or
native accuracy is claimed. All playing foot contacts outside the prescribed
movement remain in the shared total. Detailed counts/events/media stay local.

Validation: 167 importable Python tests pass, including ten new modular tests.
The broad discovery command also encountered an existing CLI-only test filename
and sandbox temp cleanup errors; the explicit suite passes with workspace temp.
The installed analyser, saved caches and app version are unchanged. Remaining:
D03 event-level refinement, original high-FPS cost/heat, exporter repair,
cross-drill controls and native integration. No build or publication authorized.

Updated 22 October 2026 (Australia/Sydney). Build `0.2.0+62` installation is
owner-confirmed. Successful build checks and local replay parity do not establish
end-to-end phone accuracy. Preserve the accepted stronger estimation milestone.

Device testing is being issued in small batches. Batch 1 covers startup, playback
and preservation of one existing saved result, and history/dashboard retention
across an idle relaunch. Those preservation observations remain pending despite
the later analysis/export reports. Pre-upgrade preservation needs a prior baseline; current-session
retention alone cannot prove it.

| Case | Expected behavior | Actual behavior | Manual count | App total/body breakdown | Actual FPS | Processing time | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B62-01A | Startup without crash/hang and expected player selected | Awaiting evidence | N/A | N/A | N/A | N/A; launch time separate | OPEN |
| B62-01B | Saved video plays and successful count remains unchanged | Awaiting evidence/baseline | Unknown | Pending | Unmeasured | N/A; no reanalysis | OPEN |
| B62-01C | History and same-period drill/body totals survive relaunch without duplication | Awaiting evidence | N/A | Pending | N/A | N/A | OPEN |

Later batches cover highest-supported normal recording FPS and independently
verified saved cadence, below-30 rejection and 29.97 acceptance, controlled
playing-contact counts and negative controls, aggregation/export/reanalysis,
resource and interruption behavior, camera switching, and independent D03
placeholder playback. All remain OPEN.

PASS requires observed expected behavior; FAIL records a reproduced discrepancy;
OPEN means untested or unresolved. Missing results are never recorded as zero.
Personal media, screenshots, exports, traces and detailed personal observations
remain local. This tracker contains only public-safe test status. No new build
or publication is authorized. Detector edits require reproduction and evidence.

Detailed operator instructions and case records are maintained in the private
implementation repository at `apps/mobile/BUILD62_DEVICE_TESTING.md`.

## New device observations — 22 October 2026

These observations do not close the pending startup/preservation checks above.

| Case | Expected behavior | Actual behavior | Manual count | App total/body | Actual FPS | Processing time | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B62-P01 | Practical analysis latency | Owner reports prolonged stronger analysis | Pending | Pending | Unverified | Approximately 20 minutes | OPEN — profiling and clip association pending |
| B62-E01 | Saved-round export starts and completes | Device diagnostic records preparation failure in source timestamp probe | N/A | N/A | Unverified | Unknown | FAIL — logged failure; independent reproduction pending |

Source reading succeeds in the supplied diagnostic, while a timestamp check in
an image probe fails. An overly narrow tolerance for variable-cadence media is
under investigation; root cause is not yet reproduced. A thermal observation
also needs separation from analysis timing. Next is one export-only retry after
cooling, with originals and diagnostics retained locally. No detector changes,
new build or publication; accepted counting milestones remain preserved.

### Retry update — 22 October 2026

Owner reports two export failures among three recordings made at the highest FPS
setting, with one recording exporting. A second device diagnostic shows the same
source timestamp-probe failure on a different source set, at a lower reported
thermal state. Reader and carrier probes succeed. This strengthens the suspected
variable-cadence tolerance issue; original-file reproduction is still pending.

| Case | Expected behavior | Actual behavior | Manual count | App total/body | Actual FPS | Processing time | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B62-E02 | Recording exports | Repeated failure signature in second diagnostic | N/A | N/A | Unverified | Unknown | FAIL — device evidence; local reproduction pending |
| B62-E03 | Completed export plays | One export reported working | N/A | N/A | Unverified | Unknown | OPEN — completion/playback confirmation pending |

Next evidence is a three-recording outcome inventory and successful-output
playback confirmation, with original media retained locally where accessible.
No more lengthy analysis or repeated failing exports requested for this batch.
Analysis latency remains a separate open issue. No code change or build initiated.

Owner confirms originals are trapped behind the failing in-app export path.
Original transfer is a product limitation, not a pending owner action. Preserve
installed data. Next engineering work is synthetic variable-cadence reproduction
and an export correction with regression coverage; performance investigation
remains separate. A direct-original recovery option may also be needed. No fix
or new build is claimed; build approval remains required.

### Root-cause investigation — 22 October 2026

Owner confirms the originals play inside the app and can be analysed. Source
inspection confirms every saved frame receives detector/full-pose inference,
with additional conditional stronger-model passes and recovery work. Highest
capture FPS therefore multiplies an expensive per-frame workload; there is no
separate analysis sampling budget. An existing cancelled-run diagnostic confirms
slow native processing before severe thermal pressure. It does not establish
the completed 20-minute run's stage breakdown or sustained capture FPS.

Export separately has inconsistent source-probe timing contracts: covering sample
intervals can pass reader validation while failing a shortest-frame-duration
timestamp tolerance. Four local arithmetic checks demonstrate this weakness;
they are not native image-generation tests. Exact failed image timestamps are
missing from diagnostics, so native confirmation remains pending.

Next work is an export-specific regression-tested correction and complete
performance instrumentation before changing analysis scheduling. Preserve the
accepted counting milestone and highest-supported capture requirement. Private
technical findings remain in the implementation repository's
`apps/mobile/BUILD62_ROOT_CAUSE.md`. No production code change or build performed.

### Exported-video investigation

One successfully exported recording was reviewed locally with a paired
full-frame tiny/stronger detector experiment over every frame. Export cadence
is verified at 30 fps; original capture cadence remains unknown. The larger
model improves detection coverage with substantially greater compute cost,
but this does not establish improved contact accuracy or native acceptance.
Source visibility and tracking gaps remain relevant. Personal detailed evidence
and media remain local.

The latest phone diagnostic is a nonterminal decoding snapshot with no completed
round result, so it cannot identify the exact reported confidence-rejection gate.
Case B62-V01 remains OPEN; no manual or accepted app total is claimed. No detector
changes, new build or publication were performed.

Follow-up B62-C01 runs the same shared-contact rules on each model's exported
video evidence. Stronger detection produces a higher candidate total but also
loses candidates found by tiny. Visual spot checks support some gains; no complete
manual reference or native parity is established. Results remain research-only,
with personal event details and media local. Model replacement or deployment is
not justified by this single comparison; profile and validate bounded recovery
before changing the accepted milestone. Accuracy acceptance remains OPEN.

Owner clarified that additional foot contacts outside the prescribed movement
remain part of the shared count; they are not excluded hand handling. A local
tiny-only bounded-crop experiment improves one round's candidate coverage with
less detector work than the full-frame stronger comparator, but does not resolve
all misses and produces an excess total in that round. Pose/episode evidence is
a separate gap in the other round. These are unaccepted desktop experiments;
production rules, accepted milestone and build state remain unchanged.

Owner accepts the tiny + bounded-crop direction and one local round estimate as
an acceptable research checkpoint. Another round remains unresolved. Branch
tracing locates a first-contact/observed-separation gating limitation alongside
pose-evidence gaps; larger ball inference alone does not address it. Next work
must preserve stationary-ball, hand-handling and repeated-contact safeguards.
Both approaches process full frames and use crops as additional recovery, not
as a replacement for the whole input stream. Installed Build 62 has not been
changed to the research prototype. No new build authorized or initiated.
