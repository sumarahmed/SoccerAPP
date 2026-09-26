# ACT-SP-014-03 — iPhone exercise-clip feasibility acceptance

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-014](../delivery/soccer_delivery_backlog.md#sp-014--prove-exercise-clips-with-timer-and-demo) |
| Accepted scope | [iPhone-first pilot amendment](../decisions/SP-014-iphone-first-pilot-feasibility-scope.md) |
| Accountable owner/reviewer | Syed Ahmed |
| Device | iPhone 16 Pro Max, iOS 26.6.2 |
| Build | Soccolo Mobile `0.1.0 (5)`, Ad Hoc build [`6ab75d116ef75204eb68c006`](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ab75d116ef75204eb68c006) |
| App source | [`fb2c015f415f29d685156afd2374c4ca8eac8eed`](https://github.com/sumarahmed/Soccolo-app/commit/fb2c015f415f29d685156afd2374c4ca8eac8eed) |
| Acceptance record | [`8b4af3cde30b9950214bc0d078ad88c0a8eaff17`](https://github.com/sumarahmed/Soccolo-app/commit/8b4af3cde30b9950214bc0d078ad88c0a8eaff17) |
| Disposition | **Accepted at the amended, local-only iPhone feasibility scope** |

## Executed evidence

The owner installed the signed candidate and reported all of the following as
passed using consenting-adult footage:

- three bounded ten-minute timer/capture runs;
- three typical two-round exercise-clip sessions;
- portrait and landscape layouts with both rear and front cameras;
- usable correctly oriented playback; and
- truthful completion with separate retained round clips.

One complete ten-minute record identifies the exact app source and reports rear
portrait capture, 600,000 ms target and measured active work, 605,002 ms total
capture, 605,047 ms playable duration, 44 ms start confirmation, 600 ms
stop-to-verification, MP4 HEVC `hvc1` at 30 fps, 720×1280, rotation 0°, and
235,964,969 bytes. The owner reported `10:05` for the recorded interval. This is
the expected five-second recorded ready lead-in plus ten minutes of active work,
consistent with the app's separate monotonic values. Six screenshot digests and
additional visible typical-clip measurements are retained in the private
[SP-014 evidence packet](https://github.com/sumarahmed/Soccolo-app/blob/8b4af3cde30b9950214bc0d078ad88c0a8eaff17/apps/mobile/SP014_PILOT_FEASIBILITY_EVIDENCE.md).

The owner reconfirmed the previously recorded device condition: approximately
68 GB free at the latest supplied storage check, battery condition Normal, 90%
maximum capacity and 503 cycles. Exact per-repeat copied rows and per-run
storage/battery deltas were not supplied; the owner accepted the repeated result
as an aggregate physical execution record rather than a complete laboratory
table.

## Criterion disposition

| Criterion | Disposition |
|---|---|
| AC-SP-014-01 — preview, realistic demo, countdown, timer, cues and recorded clips together | **Accepted at amended scope.** The signed iPhone build completed three long cases and three typical sessions; the owner confirmed front/rear and portrait/landscape coverage. |
| AC-SP-014-02 — usable frames and durable local files | **Accepted at amended scope.** Supplied screenshots and metadata demonstrate playable local media and separately retained round clips. |
| AC-SP-014-03 — behavior measured against thresholds fixed before testing | **Accepted with named evidence limits.** The bounded fixture reports exact monotonic timing, media and latency for the supplied run; the required repeat count passed by owner report. |

## Accepted exception and exclusions

Build 5 produced HEVC `hvc1`, not the recommended H.264/AVC baseline. Syed Ahmed
explicitly accepted HEVC only for this local iPhone feasibility result. H.264
remains the target for the main build and any broader playback/export claim.

This acceptance does **not** establish Android support, cloud/upload behavior,
combined full-session recording, H.264 output, child-facing use, production
release readiness, low-space/termination safety or thermal limits. Those remain
with their own activities, including SP-015 and SP-016. The separate statuses of
SP-012 and SP-013 are not changed by this record.

## Handoff

`ACT-SP-014-01`, `ACT-SP-014-02`, `ACT-SP-014-03` and SP-014 are accepted at the
dated amended scope. This artifact may now serve as the accepted SP-014 input to
SP-015, SP-016, SP-017 and SP-081; each downstream family retains its other
predecessors, criteria and human gates.
