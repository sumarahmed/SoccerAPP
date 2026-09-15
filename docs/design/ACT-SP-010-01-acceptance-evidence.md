# ACT-SP-010-01 — Recording/local-protection acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-010-01` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; `ACT-SP-010-01` and `SP-010` complete as design/specification work |
| Repository base | `b21410255d546451a5a3e9a81b99aceae5b901d8` on `main` |
| Evidence scope | Design/source trace and consistency review only; no mobile or device test claimed |

## 1. Evidence reviewed

- [SP-010 recording and local-protection contract](ACT-SP-010-01-recording-and-local-protection-contract.md), version 0.1.
- [SP-001 launch and account assumptions](../decisions/SP-001-launch-and-account-assumptions.md), accepted version 1.0.
- [SP-008 data map and access matrix](../decisions/SP-008-data-map-and-access-matrix.md), accepted version 1.0.
- [SP-080 branded export and timeline contract](../decisions/SP-080-branded-export-and-timeline-contract.md), accepted version 1.0.
- [Pilot and design pack](soccer_pilot_and_design_pack.md), especially the live-practice and storage-choice behavior.
- [End-to-end platform and business plan](../architecture/soccer_end_to_end_platform_and_business_plan.md), especially protected local files, synchronization, capture and recovery boundaries.
- [End-to-end security and gap review](../security/soccer_end_to_end_security_and_gap_review.md), especially shared-device, backup, key and mobile-evidence requirements.

## 2. Criterion assessment

| Criterion | Result for this review candidate | Evidence/limit |
|---|---|---|
| `AC-SP-010-01` Both modes | **PASS — design** | Exercise clips and full-session parts/rest behavior are explicit; single-camera is baseline and optional dual capture preserves synchronized originals; no mobile implementation exists |
| `AC-SP-010-02` Work/rest/manual Pause | **PASS — design** | Programmed rest differs by mode; Pause stops timing and capture; Resume creates a new part |
| `AC-SP-010-03` Interruption gaps | **PASS — design** | Gaps are metadata and never fabricated footage; explicit resume and truthful labels are required |
| `AC-SP-010-04` Timer source | **PASS — design** | Monotonic training time, media timestamps and UTC audit time are separated; platform adapters remain untested |
| `AC-SP-010-05` Local finalization/recovery | **PASS — design** | Owned staging, verification, atomic publication and bounded next-launch recovery are defined; runtime behavior remains untested |
| `AC-SP-010-06` Microphone/camera | **PASS — design** | Separate permissions, mic-off default, no-camera route, capability-detected dual capture, single-camera fallback and permission/source-loss behavior are fixed; device evidence remains required |
| `AC-SP-010-07` Backup/export/lock/key | **PASS — design** | App-private storage, backup/gallery exclusion, secure key custody, account isolation and external-copy limits are fixed; exact platform mechanisms remain downstream |
| `AC-SP-010-08` No guaranteed capture | **PASS — design** | Unsupported-background, OS termination, storage, thermal and power limits are expressly retained |

## 3. Consistency checks

| Check | Result |
|---|---|
| Preserves both modes accepted in SP-001 | Pass |
| Preserves canonical owner/context and worldwide-access/Australian-server-residency boundaries from SP-008 | Pass |
| Keeps source capture, training and export clocks separate from SP-080 branding time | Pass |
| Keeps export distinct from external copy/share | Pass |
| Keeps single-camera capture as the baseline and dual capture as capability-detected | Pass |
| Preserves both dual-camera originals and makes composed layouts non-destructive | Pass |
| Applies the fixed two-second intro and optional four-second outro only to a separate branded export | Pass |
| Does not turn local-only into implicit cloud or OS backup | Pass |
| Does not claim end-to-end encryption | Pass |
| Does not infer `Saved` from preview/REC or `Backed up` from local save | Pass |
| Does not claim unperformed mobile/device/security evidence | Pass |

## 4. Required reviewer checks

The owner should confirm that the exact contract correctly reflects the intended
product behavior:

- [x] Exercise clips omit programmed rests; full-session capture includes them.
- [x] Manual Pause stops both training time and capture, and Resume creates a new part.
- [x] System interruption pauses training until explicit Resume.
- [x] Monotonic training time, media timestamps and UTC audit time are separate.
- [x] `Saved on this device` appears only after local verification and atomic publication.
- [x] Recovery may produce an honestly labelled partial recording; it never invents frames.
- [x] Microphone defaults off; camera loss stops the part; microphone loss permits silent video.
- [x] Front/rear switching creates a part boundary during a session.
- [x] Single-camera capture is the guaranteed baseline; dual capture appears only on devices and camera sets that pass runtime capability/resource checks.
- [x] Dual mode preserves two synchronized originals; a one-source failure interrupts the part and fallback requires explicit Resume.
- [x] Social sharing uses a separate branded export with the fixed two-second intro; the four-second outro is optional and off by default.
- [x] Personal media is app-private and excluded from unintended backup/gallery synchronization.
- [x] Secure-storage keys, sign-out/profile isolation and external-copy limits are acceptable.
- [x] Local-only loss and OS interruption limitations are stated truthfully.
- [x] Completion is design acceptance only, with device evidence still required.

## 5. Acceptance outcome

Syed Ahmed accepted the exact contract and this evidence checklist on 15
September 2026. `ACT-SP-010-01` and `SP-010` are complete as
design/specification work. He authorized the isolated contract, evidence,
decision and generated activity-map changes to be committed and published to
GitHub. All mobile implementation, supported-device and independent verification
limits remain open and must not be represented as completed evidence.
