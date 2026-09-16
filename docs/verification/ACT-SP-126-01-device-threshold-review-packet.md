# ACT-SP-126-01 — Device feasibility threshold review packet

| Field | Value |
|---|---|
| Activity | `ACT-SP-126-01` — Prepare review packet: Approve measurable feasibility and device thresholds |
| Source issue | `SP-126` |
| Packet version | 1.0 accepted protocol; device inventory incomplete |
| Prepared | 16 September 2026 |
| Accountable owner | Syed Ahmed acting as current founder/mobile owner |
| Required human action | Complete exact model/OS/storage/battery inventory before device trials |
| Status | Protocol accepted by Syed Ahmed on 16 September 2026; no device result or support claim is accepted by this packet |

## 1. Accepted inputs

- [SP-004 pilot metrics, device-access and zero-incremental-cost decision](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md), version 1.0.
- [SP-010 recording and local-protection contract](../decisions/SP-010-recording-and-local-protection-contract.md), version 1.0.
- [SP-060 bounded media-validation profile](../security/ACT-SP-060-02-bounded-media-validation.md), version 1.0.
- [Foundation test catalogue](../foundation/foundation_test_catalog.md), written specifications only.

SP-004 confirms access to current Android phone(s), iPhone(s) and an iPad, but
does not identify the models, operating-system versions, free space or battery
condition. Those facts must be supplied before `ACT-SP-126-02` can be accepted.

## 2. Recommended pilot support promise

1. Treat one named iPhone and one named Android phone as the minimum candidate
   pilot matrix. Test additional owned devices, including the iPad, but do not
   claim them as supported until they pass the same applicable cases.
2. Make single-camera capture the pilot baseline. Keep dual capture experimental,
   capability-detected and disabled on every unmeasured camera combination.
3. Target app-generated MP4 or MOV containing H.264/AVC at 720p and approximately
   30 fps, with AAC-LC audio only when the adult deliberately enables the
   microphone. Keep HEVC, higher resolution/frame rate and other profiles local
   and unsupported until separately measured and versioned.
4. Support both portrait and landscape layouts. Record the actual orientation and
   rotation metadata, and require correctly oriented playback. A device/mode that
   cannot do this is excluded rather than silently corrected through an unmeasured
   server transcode.
5. Cap the initial logical full-session feasibility case at 30 minutes. This is a
   technical ceiling, not a coaching prescription. Exercise-clip mode remains the
   lower-cost baseline when the full-session case fails.
6. Use only synthetic scenes or footage of a consenting adult. No child footage,
   cloud upload or public sharing is required to pass SP-126.

## 3. Device inventory required from the owner

Record values from the device settings immediately before testing. Do not infer a
model from its appearance or a retail family name.

| Slot | Exact model/model number | OS and build | Total/free storage | Battery health or observed condition | Synthetic/adult media allowed? | Candidate role |
|---|---|---|---|---|---|---|
| iPhone | iPhone 16 Pro Max; exact model number pending | Pending | Pending | Pending | Pending | Required iOS candidate |
| iPhone | iPhone 17 Pro; exact model number pending | Pending | Pending | Pending | Pending | Additional/newer iOS candidate |
| Android phone | Samsung phone described by owner as "latest"; exact product and model number pending | Pending | Pending | Pending | Pending | Required Android candidate after identification |
| iPad | iPad Air; generation and exact model number pending | Pending | Pending | Pending | Pending | Additional layout/device candidate |

Windows remains the development host. A physical iPhone/iPad result also requires
a valid signed build from an authorized macOS/Xcode route. No paid build service,
developer membership or hardware purchase is authorized by this packet.

## 4. Measurement protocol

Run the following against the exact candidate build and record the build SHA,
device facts, camera, orientation, codec/container, measured file size and result.
Use a stable stand and the same adult/synthetic scene where practical.

| Case | Repeats per candidate device | Measurement | Proposed pass threshold | Truthful fallback on miss |
|---|---:|---|---|---|
| Ten-minute timer/capture | 3 | Monotonic work timer versus independent stopwatch; playable duration; orientation | No more than 1 second active-work timing error over 10 minutes; every completed file playable and correctly oriented | Correct and rerun, or exclude the device/mode |
| Typical exercise-clip session | 3 | Start confirmation, Pause/Resume into parts, immediate Stop, finalization, playback | All status labels truthful; at least 95% aggregate finalization reliability is required before expansion and no false `REC`/`Saved` result is allowed | Offer no-recording practice; retain verified parts and show failure |
| Thirty-minute full session | 2 | Chapters/parts, file size, free-space change, battery change, thermal state, preview and finalization | Both runs complete without crash, unusable preview, forced thermal shutdown or corrupt/misoriented media | Disable full-session mode for that device; keep proven exercise clips/no-recording route |
| Interruption set | 1 complete set | Background/foreground, incoming-call simulation where available, permission revocation, camera loss and explicit Resume | Existing verified parts survive; gap is truthful; Resume starts a new confirmed part | Stop affected part; require explicit Resume or continue without recording |
| Storage-pressure set | 1 complete set | Low-space warning, insufficient-space refusal and finalization reserve | Capture never starts without the configured reserve; completed source is not relabelled saved until verified | Block capture and offer cleanup/no-recording practice |
| Orientation set | 1 per supported orientation/camera | Portrait/landscape, front/rear camera, rotation metadata and playback | Correct preview and playback orientation without destructive correction | Exclude failing orientation/camera combination |
| Dual-camera probe | 1 per runtime-supported combination | Capability report, two original sources, start skew, drift, pressure and single-camera recovery | No universal pass promise; proposed synchronized label requires start skew at or below 100 ms and drift at or below 100 ms over 10 minutes | Do not start dual capture; offer measured single-camera mode |

The 100 ms dual-source proposal is a starting product threshold, not an observed
result. The owner/mobile lead may tighten or relax it before testing, but the dated
value must be fixed before results are examined.

## 5. Evidence record for each run

Each retained run must contain:

- build/repository SHA and test-protocol version;
- executor, UTC time, device model, OS/build and pre-run free space;
- selected camera(s), orientation, requested and actual media properties;
- repeat number and exact scenario;
- timer error, playable duration, start/finalization latency and file size;
- battery before/after and platform-reported thermal/pressure state where exposed;
- interruption, warning, state transition and fallback observed;
- immutable digest for retained synthetic/adult sample media; and
- `pass`, `revise`, or `excluded`, with the exact supported claim remaining after
  the result.

Remote/simulated devices may supplement UI and deterministic state checks but
cannot establish physical camera, battery, storage or thermal behaviour.

## 6. Human decisions required for ACT-SP-126-02

Syed Ahmed, with a mobile lead if one is assigned, must:

1. complete the exact model number, OS/build, free-storage and battery fields in
   section 3;
2. confirm that every test device may hold synthetic/consenting-adult footage;
3. identify any existing no-incremental-cost iOS build route, or retain iOS as
   blocked without authorizing spend; and
4. record the final inventory decision before SP-014 through SP-016 device trials
   begin.

Syed Ahmed accepted the support promise, repeats and thresholds in sections 2 and
4 on 16 September 2026, including the proposed dual-source skew/drift value. He
reported access to an iPhone 16 Pro Max, iPhone 17 Pro, iPad Air and a latest-model
Samsung phone. The incomplete identifiers above are intentionally not converted
into claims about generation, operating system, storage, battery condition or
test-media authority.

## 7. Acceptance checklist

- [x] `AC-SP-126-01` — thresholds and measurement method are dated and accepted
  before SP-014 onward.
- [x] `AC-SP-126-02` — every specified failure has a truthful fallback or explicit
  exclusion; execution evidence remains future work.
- [ ] `AC-SP-126-03` — the owner must confirm that each named device may hold only
  synthetic/consenting-adult test footage for these trials.
- [ ] Exact named devices and OS versions are recorded.
- [ ] No physical-device result, iOS build route or paid access has been invented.

`ACT-SP-126-01` is accepted as decision preparation. Until the owner supplies and
accepts the missing inventory and test-media values, `ACT-SP-126-02` and SP-126
remain open. This packet does not itself establish device support.
