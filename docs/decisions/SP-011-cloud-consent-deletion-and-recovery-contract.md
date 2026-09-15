# SP-011 — Cloud, consent, deletion and recovery contract

| Field | Recorded value |
|---|---|
| Decision version | 1.1 |
| Decision date | 15 September 2026 |
| Source issue | SP-011 |
| Acceptance criterion | AC-SP-011-01 through AC-SP-011-08 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/backend product decision owner |
| Review status | Owner acceptance recorded; pilot recovery and strict residency clauses amended by accepted SP-050 lean-pilot policy |
| Repository base | `024007d` on `main` before the completion revision |

## 1. Accepted evidence

| Artifact | Accepted identity | SHA-256 |
|---|---|---|
| [ACT-SP-011-01 cloud lifecycle and copy states](../design/ACT-SP-011-01-cloud-lifecycle-and-copy-states.md) | Version 1.0 | `BE3EEE9703DE717C1E3709CA9BE47CF1BCE20055EDD790E5EA4AA4DE38697127` |
| [ACT-SP-011-02 quota/deletion/recovery invariants](../design/ACT-SP-011-02-quota-deletion-recovery-invariants.md) | Version 1.0 | `F83BB9A5BB8E58B6A35D989F8674D2BE79CA4D21F98CD7964F767EB3C00693DB` |
| [ACT-SP-011-03 acceptance evidence](../design/ACT-SP-011-03-acceptance-evidence.md) | Version 1.0 | `DC62B39A41640F6EF77A109880677DFC62A9F26D4DC9FD495FE400D5C27367C4` |
| [Synthetic race fixtures](../../contracts/sp-011/cloud-lifecycle-fixtures.json) | `sp-011-cloud-lifecycle-v1`; contract 1.0; 17 cases | `A8B955E9E3021C862D584BEFB094553F001BF7828B08513D6B4A978E1D19D6A4` |
| [Dependency-free validator](../../tests/media/validate-sp011-contract.cjs) | Node contract validator | `0357EDACAE16342E923A7B9707281967206CD394198DF65FD83F3E309DAF2F90` |

The linked version 1.0 artifacts remain the exact historical evidence for the
original review. Version 1.1 changes only the deployment policy: dedicated
recovery is deferred during the lean pilot and strict Australia-only processing
is replaced by Sydney primary placement with global delivery permitted. The
upload, quota, authorization, deletion, retention and incomplete-fragment
controls remain unchanged.

## 2. Accepted outcomes

1. Cloud media starts off. Only the authorized adult player or guardian can
   enable it for an exact owner/player context under the current notice.
2. Starter is local-only; Family includes 20 GB shared across up to four player
   profiles; Club includes 5 GB per licensed player seat with per-player
   safeguards; a complimentary pilot allowance is explicitly temporary.
3. Wi-Fi-only is the default. Cellular upload is a separate adult choice.
4. A complete verified cloud object group expires 30 days after
   `groupVerifiedAt`; seven-, three- and one-day notices are best-effort and do
   not replace the in-app expiry date.
5. Local and cloud copy states remain independent. A group is not `Backed up`
   until every required part/view and subordinate object verifies.
6. Quota uses an atomic `limit - used - reserved` ledger, one allowance source
   per reservation, complete-group byte ceilings and no automatic deletion to
   make room.
7. User-facing resumable upload is disabled for the initial pilot. Interrupted
   attempts cannot reuse fragments; retry is a new byte-zero operation.
8. Unstarted reservations and upload credentials have a 15-minute maximum;
   continuous attempts have a 60-minute ceiling and five-minute inactivity
   timeout.
9. Fragment cleanup begins immediately after interruption, cancellation or
   failure and must be verified within one hour or alert without falsely
   releasing quota. Quarantine is unreadable and excluded from any
   provider-managed or future recovery process.
10. Playback/download URLs have a maximum five-minute lifetime and require
    current authorization when minted or renewed.
11. Withdrawal/deletion advances authoritative generations and writes durable
    suppression before asynchronous cleanup. It defeats queued, transferring,
    verifying, offline and restored state.
12. The lean pilot has no Soccolo-operated recovery copy for active media, no
    cross-region replication and no customer recovery guarantee. Any
    provider-managed backup is incidental and is not described as a product
    feature.
13. If recovery is introduced after the pilot, it must restore in isolation and
    replay newer deletion, withdrawal and grant revocation before any object
    becomes readable.
14. The primary application-data project uses Sydney. Global network delivery,
    operational provider infrastructure and authorized worldwide access are
    permitted; personalized/private responses remain authorization-checked and
    excluded from shared caching.
15. Dual-camera recordings are one logical group of synchronized source objects;
    all required sources count toward quota and must verify for cloud success.
    Branded/social exports are separate and never uploaded automatically.

## 3. Verification result

The accepted dependency-free command:

```powershell
node tests/media/validate-sp011-contract.cjs
```

passed all 17 synthetic quota, idempotency, upload, withdrawal, deletion,
dual-source, offline, restore, cleanup and sponsorship cases. The result validates
the design corpus only; it is not evidence from a cloud service or mobile app.

## 4. Acceptance criteria

- **AC-SP-011-01 — Accepted for design:** allowances, 30-day expiry and its
  complete-group verification start point are fixed.
- **AC-SP-011-02 — Accepted for design:** explicit adult/guardian opt-in and
  Wi-Fi/cellular choices are fixed per owner context.
- **AC-SP-011-03 — Accepted for design:** authorization checkpoints and
  reservation, credential and five-minute playback-link lifetimes are fixed.
- **AC-SP-011-04 — Accepted for design:** atomic quota reservation and
  complete-group accounting are fixture-backed.
- **AC-SP-011-05 — Accepted for design:** withdrawal, distinct delete intents,
  suppression-first reconnect and offline denial are fixture-backed.
- **AC-SP-011-06 — Accepted for design:** subordinate thumbnails, unreadable
  quarantine, disabled resume and one-hour fragment cleanup are fixed.
- **AC-SP-011-07 — Accepted as amended for the lean pilot:** dedicated media
  recovery is deliberately deferred. No backup/recovery promise is made; the
  original device copy is the user's practical fallback. If recovery is later
  commissioned, deletion replay before access remains mandatory.
- **AC-SP-011-08 — Accepted for design:** local/cloud, expiry, full allowance,
  turn-off, withdrawal, pending deletion and external-copy notices are explicit.

## 5. Limits retained

This decision does not claim:

- a selected or contractually approved processor/provider;
- provisioned storage, functions, logs, queues or recovery systems;
- an implemented upload, quarantine validator, quota ledger or signed-link
  service;
- provider-enforced token revocation or one-hour physical fragment deletion;
- working mobile offline reconciliation or device deletion;
- any pilot media recovery capability, recovery-copy purge or isolated restore rehearsal;
- privacy/legal approval, production readiness or authorization to use real
  youth media; or
- completion of future `SP-017`/`SP-023` resumable-upload requirements.

`SP-017` and `SP-023` must be reconciled to the deliberately suppressed pilot
resume behavior or receive a later versioned owner decision supported by cost,
abuse, provider and device evidence.

## 6. Owner decision

Syed Ahmed accepted the exact version 1.0 lifecycle, invariant, fixture and
evidence artifacts on 15 September 2026. Later that day he accepted version 1.1
through SP-050, retaining all access/upload/deletion controls while deferring
dedicated recovery and allowing global delivery around a Sydney primary. He
authorized the amendment and SP-050 completion to be committed.

Any material change to authority, allowance, expiry, upload resume, credential
or link lifetime, quota accounting, cleanup window, withdrawal/deletion order,
offline suppression, recovery retention, residency or multi-object completion
requires a versioned contract and affected evidence update.
