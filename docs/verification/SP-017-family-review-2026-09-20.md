# SP-017 family review — opt-in cloud media path

| Field | Review record |
|---|---|
| Date | 20 September 2026 |
| Source family | [SP-017 — Prove one authorized resumable cloud path](../delivery/soccer_delivery_backlog.md#sp-017--prove-one-authorized-resumable-cloud-path) |
| Current implementation | Private build 4 is local-only; no app upload path or hosted media test is claimed |
| Disposition | Preparatory review; no SP-017 activity or criterion completed |

## Contract and current boundary

The [SP-011 cloud contract](../decisions/SP-011-cloud-consent-deletion-and-recovery-contract.md) requires adult/guardian opt-in for an exact context, independent local/cloud copy states, atomic quota reservation, short-lived authorization and deletion/withdrawal suppression. It explicitly disables **user-facing resumable upload** for the initial pilot: an interrupted attempt discards fragments and retries from byte zero. This is narrower than the word “resumable” in the SP-017 source title. Do not implement fragment continuation or call it accepted pilot behavior without a versioned contract decision.

The [SP-008 access matrix](../decisions/SP-008-data-map-and-access-matrix.md) excludes unrelated-household media access. The [SP-017 source criteria](../delivery/soccer_delivery_backlog.md#sp-017--prove-one-authorized-resumable-cloud-path) require upload after verified local save and opt-in, retry/quota handling, denial of a second household, withdrawal/deletion defeating stale upload, bounded playback access and no public child-media path. The current private [mobile prototype](https://github.com/sumarahmed/Soccolo-app/blob/feat/sp014-local-camera-feasibility/apps/mobile/README.md) records locally only. The [SP-012 interim route](../operations/ACT-SP-012-03-acceptance-evidence.md) has no hosted development environment or production participant-data authority.

## Recommendation

1. Prepare a local synthetic contract fixture for `ACT-SP-017-01`: start only from a verified saved clip after explicit adult opt-in; model reservation, upload, verification and independent copy states. Use retry **from byte zero** after interruption per SP-011. Keep all media synthetic or from a consenting adult and do not connect a hosted service in this review slice.
2. For `ACT-SP-017-02`, exercise the accepted SP-011 race fixtures: second-household denial, quota exhaustion, expired credentials, interrupted transfer, withdrawal/deletion during transfer and stale finalization. Require the deny/suppression decision to persist across retry.
3. Resolve the source-title/contract wording before claiming SP-017 completion. Then scope a separately authorized hosted proof with named backend/mobile reviewers, test account and environment, bounded cost, exact build and no public artifact URL.
4. Keep SP-017 open until the actual end-to-end cloud path, negative cases and reviewer handoff exist. A local contract test is preparation, not a cloud result.

This review does not authorize uploading existing iPhone clips, connecting production credentials or collecting child media.
