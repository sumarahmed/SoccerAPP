# SP-010 — Recording and local-protection contract decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-010 |
| Acceptance criterion | AC-SP-010-01 through AC-SP-010-08 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed acting as interim mobile/product decision owner |
| Review status | Owner acceptance recorded; design/specification completion only, with mobile implementation and representative-device verification retained |
| Repository base | `b21410255d546451a5a3e9a81b99aceae5b901d8` on `main` |

## 1. Accepted evidence

The proposed decision adopts the exact behavior in:

- [ACT-SP-010-01 recording and local-protection contract](../design/ACT-SP-010-01-recording-and-local-protection-contract.md), accepted version 1.0; and
- [ACT-SP-010-01 acceptance evidence](../design/ACT-SP-010-01-acceptance-evidence.md), accepted version 1.0.

Syed Ahmed first accepted the recommended direction, reviewed the resulting
files, then accepted the exact version 1.0 contract and authorized completion,
commit and GitHub publication on 15 September 2026.

## 2. Accepted decision outcomes

1. Exercise clips record active exercise periods; full-session mode also records
   programmed rests and represents chapters without duplicating source footage.
2. Single-camera capture is the supported baseline. Dual capture is an optional
   capability-detected mode that preserves two separately identified,
   synchronized originals and falls back only through an explicit interrupted
   Resume into a new part.
3. Manual Pause stops practice timing and capture together. Resume is explicit,
   starts a new confirmed part and preserves the gap.
4. System/background interruption pauses the training state. Missing frames are
   never invented or presented as continuous capture.
5. A monotonic session clock controls work/rest duration; per-source media timestamps
   control playable offsets; UTC wall time is audit-only.
6. Immediate Stop is separate from bounded local verification and finalization.
   Only a verified, atomically published asset is labelled saved.
7. Owned incomplete attempts may recover verified parts on next launch and must
   show partial, recovery-needed or failed states honestly.
8. Camera and microphone controls are independent. Microphone defaults off;
   camera loss stops a part, while microphone loss permits visibly silent video.
9. Personal media stays in protected app-private storage and is excluded from
   unintended OS/cloud backup and gallery synchronization. Keys remain in
   platform secure storage and account/profile boundaries prevent cross-user
   access.
10. Social sharing uses a separate branded export: the fixed two-second Soccolo
    intro is always applied, the four-second outro is optional and off by
    default, and every original camera source remains unchanged. Export and OS
    sharing are deliberate, separately authority-checked actions.
11. External copies may outlive app access/deletion and are described accurately.
12. The product makes no guarantee of uninterrupted capture through every OS,
    permission, storage, thermal, power or termination event.

## 3. Acceptance scope and retained limits

If accepted, this decision closes `SP-010` as a design/specification activity
only. It does not claim:

- working iOS or Android capture;
- working simultaneous multi-camera capture or support for a particular camera
  combination, resolution or frame rate;
- verified monotonic-clock or media-timestamp adapters;
- playable crash recovery or storage-full reserve behavior;
- implemented backup/gallery exclusion, app locking or key management;
- real-device thermal, background, permission or orientation results;
- independent mobile/security review; or
- authorization to use real youth media.

Those claims remain with `SP-047`, `SP-126`, `SP-014`, `SP-015`, later
implementation activities and named device/security QA.

## 4. Owner decision

Syed Ahmed accepted `AC-SP-010-01` through `AC-SP-010-08` and the exact linked
version 1.0 artifacts on 15 September 2026. `ACT-SP-010-01` and `SP-010` are
complete as design/specification work. He authorized the isolated contract,
evidence, decision and generated activity-map changes to be committed and
published to GitHub.

Any material change to recording modes, dual-camera support, timing authority,
pause/interruption semantics, local recovery, permission behavior, protected
storage, key custody or branded social export requires a versioned contract and
affected evidence update.
