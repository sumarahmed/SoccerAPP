# ACT-SP-011-01 — Cloud lifecycle and copy-state acceptance

| Field | Recorded value |
|---|---|
| Activity | ACT-SP-011-01 |
| Source issue | SP-011 |
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/backend product decision owner |
| Acceptance scope | `ACT-SP-011-01` design/specification only; `ACT-SP-011-02`, `ACT-SP-011-03` and `SP-011` remain open |
| Repository base | `0bf1b190d7cb69df44c8829f9c3a6d5c0af986fc` on `main` |

Syed Ahmed reviewed and accepted the recommended cloud lifecycle, allowance,
retention, copy-state, withdrawal and deletion-notice rules on 15 September
2026. He authorized the exact accepted specification and activity decision to be
committed locally.

## Accepted evidence

- [Cloud lifecycle and user-visible copy-state specification](../design/ACT-SP-011-01-cloud-lifecycle-and-copy-states.md), version 1.0.
- [SP-008 data map and access matrix](../decisions/SP-008-data-map-and-access-matrix.md), accepted version 1.0.
- [SP-010 recording and local-protection contract](../decisions/SP-010-recording-and-local-protection-contract.md), accepted version 1.0.

## Accepted outcomes

- Cloud starts off and only an authorized adult/guardian enables it for an exact
  owner/player context.
- Starter remains local-only; Family has 20 GB shared across up to four players;
  Club has 5 GB per licensed seat with per-player safeguards; a pilot allowance
  is explicitly temporary.
- Active cloud copies expire 30 days after the complete object group verifies,
  with seven-, three- and one-day best-effort warnings.
- Local and cloud status are independent; `Saved` and `Backed up` cannot hide the
  destination or expiry.
- Turning future cloud copies off preserves verified copies until expiry unless
  the adult separately deletes them; consent withdrawal revokes access and
  queues deletion/suppression.
- Dual-camera recordings are one logical group of synchronized source objects;
  all required objects must verify before cloud success, and all stored bytes
  count toward allowance.
- Branded/social exports are separate derived files and are never uploaded
  automatically.
- Server-side private media and operational copies remain subject to the binding
  Australian-residency provider gate while authorized worldwide access remains
  permitted.

## Retained limits

This acceptance does not implement or verify a cloud provider, upload,
reservation, quota, signed link, deletion, recovery copy, processor contract or
residency configuration. `ACT-SP-011-02` must specify and fixture-test the
quota/access/fragment/offline/deletion/recovery races. `ACT-SP-011-03` must
verify all eight source criteria before `SP-011` may be accepted.

No GitHub push or publication is authorized by this local-commit decision.
