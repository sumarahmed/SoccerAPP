# Selected development path — 22 October 2026

## D03 baseline follow-up — 23 October 2026

The owner subsequently authorized a D03-specific initial-contact rule for a
stationary ball started by a foot. The new experimental stage requires observed
stationarity, foot intersection/movement, ball movement and independent pixel
response, retaining hand safeguards and all-body accounting. Shared primitives
are unchanged. 52 focused tests pass. Six frozen case/round replays retain their
existing events, including stationary/no-touch negatives. The first new case
gains no contact because its intermittent early direct ball observations cannot
establish the rule's stationary history. No accuracy improvement is claimed;
approximate human event frames and event-level diagnosis remain pending.
Personal traces/images remain local; no production defaults, build or push.

Owner whole-video count references and initial rolling-contact notes have since
arrived for both sources. They remain local with source/report provenance.
Timestamped contacts, uncertainty and reviewed negative intervals are still
needed for event matching. Count discrepancies alone do not identify misses,
false positives or duplicates; candidates remain unreviewed. No tuning occurred.

Two newly supplied D03 diagnosis videos completed unchanged drill-owned Tiny/crop
analysis with a 1280-pixel cap and fresh per-video inference. Both maintained
nominal/measured 30 FPS and cleared existing diagnostic quality gates; contact
accuracy remains unscored pending the owner's human event report. Source/code
identity, evidence digests, frame timestamps and candidate accounting were checked.
Detailed personal counts, timestamps, source hashes and standalone local timings
remain in ignored private evidence. No phone performance claim or tuning result.

Entire files were processed to retain available context; scoring intervals and
boundary uncertainty remain explicit pending review. Neither file is sealed
holdout. Diagnose the first case before selecting a fix. Use one-to-one event
matching and distinguish matched contacts, misses, confirmed false positives,
uncertain/unreviewed candidates and duplicates. An unmatched candidate is not a
false positive without human-confirmed non-contact in the reviewed interval.
Unclassified body attribution is separate from uncertain contact existence.

No detector/counting changes, app build, push or media upload. The frozen
benchmark, installed Build 62 and previous accepted estimates are preserved.

## Selected direction

The owner selects **NEW: Drill-owned crop** for forward optimization, one drill
and case at a time on new videos. This is a development choice, not an accuracy
acceptance, production promotion or authorization to build or publish.

The private implementation uses Tiny full-frame ball detection, full pose and
drill-directed targeted Tiny crop rescue. Crops supplement full-frame evidence.
Each D01–D12 module owns its workflow; common low-level primitives still require
cross-drill regression when changed. No larger ball-model inference is planned.

| Benchmark column | Role |
| --- | --- |
| Baseline Tiny | Previous shared counter without crop rescue; historical comparator |
| Baseline crop | Previous counter with whole-person crop rescue; historical comparator |
| NEW: Drill-owned Tiny | Feedback-driven per-drill workflow without crop rescue; ablation |
| NEW: Drill-owned crop | Feedback-driven per-drill workflow with targeted rescue; selected path |

Before tuning each drill, establish source identity, front-view round ranges,
actual FPS and human contact labels; separate diagnosis material from held-out
evaluation. Run the selected configuration unchanged, retain versioned evidence
and rejection reasons, diagnose event-level misses, then version the relevant
module and compare before/after. Include negative controls and all-body playing
contacts. Do not match only totals or turn insufficient evidence into zero.
Keep D02 repetition metrics separate from the shared playing-contact total.

Pre-register evaluation metrics and winning margins before inspecting held-out
results. Report manual counts, candidate totals/body breakdown, actual FPS,
processing time and pass/fail/open status. Device heat, lifecycle and phone
accuracy remain separate validation requirements after an approved build.

The frozen benchmark remains 28 videos / 34 rounds / 136 results, two low-FPS
rejections and four side/mixed deferrals. 197 tests and 952 integrity assertions
passed; 76 outputs fail diagnostic gates. D03 Round 2 and other positive-case
regressions remain unresolved. Choosing the path does not claim an accuracy win.
See [benchmark protocol and outcome](tiny-diagnostics-protocol.md).

Preserve Build 62, the accepted stronger milestone and previous saved results.
Private videos, human labels, traces and the linked local HTML report stay local
and ignored. No new optimization, app build, publication or upload is part of
this documentation/commit checkpoint.
