# SP-014 — iPhone-first pilot feasibility scope amendment

| Field | Value |
|---|---|
| Source issue | SP-014 |
| Decision date | 19 September 2026 |
| Accountable owner | Syed Ahmed |
| Decision | Accepted for the bounded, synthetic/consenting-adult pilot feasibility review |
| Completion status | Scope decision complete; SP-014 measurement and handoff **not complete** |

## Accepted scope

The required physical phone for the initial pilot feasibility claim is the
owner's **iPhone 16 Pro Max**, running iOS **26.6.2** at the latest reported
check. The secondary iPhone 17 is not part of this test round. Android builds
and the owner's Android test are accepted as an internal prototype smoke result,
not as measured Android release support. Android emulators may provide repeatable
state, UI and synthetic-camera evidence but do not substitute for physical-iPhone
camera, storage, battery, thermal, orientation or media measurements. No child
footage, player release, cloud upload or public sharing is authorized here.

This dated pilot amendment narrows the device claim in the original
[SP-014 source criteria](../delivery/soccer_delivery_backlog.md#sp-014--prove-exercise-clips-with-timer-and-demo),
which mention representative iOS/Android devices. Preserve the original text as
the broader requirement; do not record it as passed for Android. Any future
Android support claim needs its own named-device measurements and acceptance.
The accepted [SP-126 threshold protocol](SP-126-measurable-feasibility-and-device-thresholds.md)
and repeat counts are not waived by this scope change.

## Evidence boundary and remaining work

The owner reports that the internal Android build worked as expected, and that
the signed iPhone build permitted both cameras, multiple local recordings and
playback of an interrupted part. The iPhone 16 Pro Max clip count rose from
three to four after the app-switcher interruption and the fourth clip played.
These are useful owner-reported smoke results; the exact per-run stopwatch,
frame/media properties, orientation metadata and repeat measurements were not
recorded. The iPhone had approximately 68 GB free from a later reported
444-of-512-GB-used storage reading, not a low-space result.

The current [private SP-014 evidence packet](https://github.com/sumarahmed/Soccolo-app/blob/feat/sp014-local-camera-feasibility/apps/mobile/SP014_PILOT_FEASIBILITY_EVIDENCE.md)
records three fresh Android API 36 emulator D01 attempts on 19 September:
each completed both rounds, produced two separate nonempty clips and left the
camera off. The retained count moved from 11 to 17 across those attempts, and
the newest clip opened for playback. The APK and six file digests are recorded
there. These results supplement, but do not replace, the named-iPhone runs.

For `ACT-SP-014-02`, capture the exact signed build and device state for each
run, the approved clip/timer repeats, independent timer error, usable frames,
actual codec/container/frame rate, orientation and playable file duration/size.
The ten-minute timer/capture case in SP-126 needs a dedicated bounded fixture;
the current D01 20-second work rounds cannot establish it. Simulator and unit
results must be labelled supplemental. Then `ACT-SP-014-03` can assemble a
criterion-by-criterion evidence bundle for owner review.

SP-012 and SP-013 remain formal predecessors in the source activity graph.
Their accepted interim-risk route permits bounded synthetic development; it
does not automatically mark those gates or SP-014 Done. SP-015 full-session and
SP-016 storage/termination work remain separate later claims.
