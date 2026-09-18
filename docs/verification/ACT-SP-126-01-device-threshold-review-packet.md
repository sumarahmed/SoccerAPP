# ACT-SP-126-01 — Device feasibility threshold review packet

| Field | Value |
|---|---|
| Activity | `ACT-SP-126-01` — Prepare review packet: Approve measurable feasibility and device thresholds |
| Source issue | `SP-126` |
| Packet version | 1.2 accepted iPhone-focused protocol; 19 September device-scope amendment |
| Prepared | 16 September 2026 |
| Accountable owner | Syed Ahmed acting as current founder/mobile owner |
| Required human action | Capture OS/build, storage and current condition immediately before each physical-device run |
| Status | Accepted by Syed Ahmed on 16 September 2026; physical test scope narrowed by owner on 19 September to iPhone 16 Pro Max only. No threshold-complete physical-device result is claimed |

## 1. Accepted inputs

- [SP-004 pilot metrics, device-access and zero-incremental-cost decision](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md), version 1.0.
- [SP-010 recording and local-protection contract](../decisions/SP-010-recording-and-local-protection-contract.md), version 1.0.
- [SP-060 bounded media-validation profile](../security/ACT-SP-060-02-bounded-media-validation.md), version 1.0.
- [Foundation test catalogue](../foundation/foundation_test_catalog.md), written specifications only.

SP-004 confirms access to current Android phone(s), iPhone(s) and an iPad, but
does not identify the models, operating-system versions, free space or battery
condition. Those facts must be supplied before `ACT-SP-126-02` can be accepted.

## 2. Recommended pilot support promise

1. Focus the initial pilot feasibility matrix on the owner's iPhone 16 Pro Max
   as the **only required physical phone**. The secondary iPhone 17 is excluded
   from this test round at the owner's direction; do not claim support for it.
   Android is outside the initial support claim until an exact device is named
   and separately accepted. The iPad Air 5th generation may supplement layout
   evidence but is not a phone-support substitute.
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
| iPhone | iPhone 16 Pro Max | Record immediately before each run | Record immediately before each run | Owner-reported: Normal; 90% maximum capacity; 503 cycles; manufactured October 2024; first used April 2025 | Synthetic and consenting-adult footage authorized | Primary physical pilot candidate |
| iPhone | Secondary iPhone 17; exact variant not relied on | Not in this test round | Not in this test round | Not in this test round | Earlier Apple synthetic/adult authorization does not create a required run | Excluded from the current physical test matrix by owner on 19 September |
| iPad | iPad Air 5th generation | Record immediately before each run | Record immediately before each run | Record immediately before each run | Synthetic and consenting-adult footage authorized | Supplemental layout and applicable device candidate |
| Android phone | Owner-reported Samsung phone; exact product/model not supplied | Not accepted | Not accepted | Not accepted | Not authorized in this decision | Explicitly excluded from the initial pilot support claim |

Windows remains the development host. A physical iPhone/iPad result also requires
a valid signed build from an authorized macOS/Xcode route. No paid build service,
developer membership or hardware purchase is authorized by this packet. Apple
simulators may exercise multiple OS versions, layouts and deterministic states,
but cannot establish camera, battery, storage, thermal, interruption or signing
behaviour and never replace the named physical-device runs.

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

The owner must record the exact OS/build, free storage and current battery/device
condition at the start of each physical run. The executor must also identify an
authorized iOS build route before physical execution; its absence blocks execution
without reopening this threshold decision or authorizing spend.

Syed Ahmed accepted the support promise, repeats and thresholds in sections 2 and
4 on 16 September 2026, including the proposed dual-source skew/drift value. He
reported access to an iPhone 16 Pro Max, iPhone 17 Pro, iPad Air and a latest-model
Samsung phone. The incomplete identifiers above are intentionally not converted
into claims about generation, operating system, storage, battery condition or
test-media authority.

On 19 September 2026, the owner clarified that their actual phone for these
tests is the **iPhone 16 Pro Max**. The iPhone 17 is a secondary device they do
not wish to bring for testing. This later instruction supersedes the earlier
17 Pro candidate role; its exact variant is not needed or asserted. The accepted
thresholds and per-candidate repeats are unchanged, but the current physical
matrix contains only the 16 Pro Max. No cross-device or iPhone 17 support claim
can follow from its results.

The owner subsequently confirmed that the reported Normal battery condition,
90% maximum capacity, 503 cycles, October 2024 manufacture date and April 2025
first-use date belong specifically to the iPhone 16 Pro Max. These are retained
as owner-reported inventory facts, not an executed feasibility result.

The owner then fixed the pilot focus to iPhone, identified the tablet as an iPad
Air 5th generation, authorized the Apple devices for synthetic and
consenting-adult test footage, and required simulator coverage across applicable
versions. The unnamed Samsung phone is therefore explicitly excluded rather than
treated as Android evidence. No child footage is authorized.

## 7. Acceptance checklist

- [x] `AC-SP-126-01` — thresholds and measurement method are dated and accepted
  before SP-014 onward.
- [x] `AC-SP-126-02` — every specified failure has a truthful fallback or explicit
  exclusion; execution evidence remains future work.
- [x] `AC-SP-126-03` — the accepted Apple matrix is restricted to synthetic or
  consenting-adult test footage; child footage is not authorized.
- [x] The amended physical matrix has one named iPhone candidate; the secondary
  iPhone 17 and Android are explicitly excluded;
  exact OS/build and storage are mandatory per-run evidence rather than guessed
  decision-time values.
- [x] No physical-device result, iOS build route or paid access has been invented.

`ACT-SP-126-01`, `ACT-SP-126-02` and SP-126 are accepted as a dated threshold,
measurement and scope decision. This completion unlocks preparation for the
affected feasibility work; it does not establish device support. Actual physical
results, build access and supported/excluded outcomes remain evidence for SP-014
through SP-016 and the applicable release gates.
