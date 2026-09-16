# SP-126 — Measurable feasibility and device thresholds

| Field | Value |
|---|---|
| Source issue | SP-126 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/product owner acting as current mobile owner |
| Acceptance criterion | AC-SP-126-01 through AC-SP-126-03 |
| Acceptance scope | Dated protocol, thresholds, named Apple candidate scope and truthful exclusions; no implementation or physical test result |
| Exact artifact | [Device feasibility threshold review packet](../verification/ACT-SP-126-01-device-threshold-review-packet.md), version 1.1 |

## Accepted decision

Syed Ahmed accepted the SP-126 measurement protocol and fixed the initial pilot
feasibility scope to iPhone:

- iPhone 16 Pro Max is the primary physical candidate;
- iPhone 17 Pro is the additional/newer physical iPhone candidate;
- iPad Air 5th generation provides supplemental layout and applicable device
  evidence but does not replace phone testing;
- Apple simulators cover applicable OS-version, layout and deterministic-state
  combinations but cannot establish physical camera, battery, storage, thermal,
  interruption or signing behaviour; and
- the owner-reported Samsung phone is excluded from the initial Android support
  claim because its exact product/model and evidence were not supplied.

The accepted media profile is app-generated MP4/MOV with H.264/AVC at 720p and
approximately 30 fps, with optional deliberate AAC-LC audio. Single-camera capture
is the baseline. Dual capture remains capability-detected and experimental, with
the accepted pre-test proposal requiring no more than 100 ms start skew and no
more than 100 ms drift over ten minutes before it may be labelled synchronized.

The packet fixes the ten-minute timer/capture, typical clip session, 30-minute
full-session, interruption, storage-pressure, orientation and dual-camera cases,
including repeats, measurement fields and truthful disable/exclusion fallbacks.

## Acceptance results

| Criterion | Result | Evidence and limit |
|---|---|---|
| AC-SP-126-01 — Dated thresholds and measurement method | **ACCEPTED** | Packet version 1.1 fixes the method before SP-014 onward; results remain unexecuted |
| AC-SP-126-02 — Truthful fallback or exclusion | **ACCEPTED** | Every specified miss disables/excludes the affected mode/device; Android is explicitly outside the initial claim |
| AC-SP-126-03 — Synthetic/adult footage | **ACCEPTED** | Owner authorized the named Apple devices only for synthetic and consenting-adult test footage; no child footage is authorized |

## Required per-run evidence and retained limits

Before each physical run, record the exact build SHA, device OS/build, free
storage, current condition, selected camera/orientation and media properties. An
authorized signed iOS build route is still required; no paid plan, developer
membership, build service or hardware purchase is authorized here.

The iPhone 16 Pro Max battery inventory is owner-reported as Normal, 90% maximum
capacity, 503 cycles, manufactured October 2024 and first used April 2025. No
physical feasibility run has occurred. The iPhone 17 Pro and iPad condition must
be recorded at execution time.

This decision completes SP-126 as a protocol and scope decision only. It does not
claim supported hardware, working capture, Android support, iOS build access,
thermal performance, timer accuracy or successful media finalization. Those
claims require the later named-device evidence.
