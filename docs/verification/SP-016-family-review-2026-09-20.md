# SP-016 family review — interruptions and device limits

| Field | Review record |
|---|---|
| Date | 20 September 2026 |
| Source family | [SP-016 — Test media interruptions and device limits](../delivery/soccer_delivery_backlog.md#sp-016--test-media-interruptions-and-device-limits) |
| Candidate | Private Soccolo-app build 4, Codemagic `6aaf07998be471e28abda84b`, source `323aa848c49c18a48f948f48b30c6b3d3c6dfa0c` |
| Disposition | Preparatory review only; no ACT-SP-016 activity or acceptance criterion completed |

## Current evidence

The private [SP-016 clip-safety review](https://github.com/sumarahmed/Soccolo-app/blob/feat/sp014-local-camera-feasibility/apps/mobile/SP016_CLIP_ONLY_SAFETY_REVIEW.md) records owner-reported iPhone camera denial, background interruption and playable retained-part observations. The later [SP-014 build 4 record](https://github.com/sumarahmed/Soccolo-app/blob/feat/sp014-local-camera-feasibility/apps/mobile/SP014_PILOT_FEASIBILITY_EVIDENCE.md) adds a new playable six-second interrupted clip, normal-round playback and retention after app restart. These are useful physical-device smoke results for the exercise-clip candidate.

The source [SP-016 criteria](../delivery/soccer_delivery_backlog.md#sp-016--test-media-interruptions-and-device-limits) additionally require call/permission/camera-loss, low-space, abrupt-termination, heat/battery and recoverable-part cases, truthful failure states and a supported-device floor. The private review identifies open gaps in pre-capture storage reserve/refusal, staging-file recovery/quarantine, re-verification of final files on relaunch and iOS backup exclusion. It has no independent QA acceptance. SP-016 also formally depends on SP-014 and SP-015; the [SP-015 family review](SP-015-family-review-2026-09-20.md) has not found a full-session implementation in build 4.

## Recommendation

1. Prepare a controlled `ACT-SP-016-01` failure matrix using disposable synthetic fixtures. Implement and test free-space reserve/refusal, failed-write/finalization behavior, staging-file recovery or quarantine and relaunch re-verification before repeating the affected device cases. A failure must never become a false `REC` or `Saved` claim.
2. Keep the owner's personal iPhone tests to ordinary-space, non-destructive interruption and playback checks. Do not fill the device or delete personal files to create low-storage pressure. Use a controlled target and injected failures for pressure cases.
3. For `ACT-SP-016-02`, capture battery and thermal observations on the named iPhone, inspect recoverable verified parts, and propose truthful fallback or exclusion. Record the exact build, OS, pre-run storage and result for each case under the accepted [SP-126 protocol](ACT-SP-126-01-device-threshold-review-packet.md).
4. Send `ACT-SP-016-03` to the independent QA reviewer only after the matrix and recovery evidence exist. Keep SP-016 open; the current clip smoke evidence cannot establish full-session recovery or a supported-device floor.

This review changes no product support claim or participant-data authorization.
