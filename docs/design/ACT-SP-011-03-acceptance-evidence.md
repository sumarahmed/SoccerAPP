# ACT-SP-011-03 — SP-011 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-011-03` — Verify and hand off: Fix cloud, consent, deletion and recovery contracts |
| Source | `SP-011` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; `ACT-SP-011-03` and `SP-011` complete as design/specification work |
| Repository base | `024007d` on `main` before the completion revision |
| Executor | Codex acting as QA/Media design agent |
| Accountable owner | Syed Ahmed acting as founder/backend product decision owner |
| Required later reviewer | Named mobile lead/device QA; privacy/security/provider review before real participant data |
| Evidence scope | Design contract and synthetic fixture validation only; no cloud service or device result claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-011-01 cloud lifecycle and copy states](ACT-SP-011-01-cloud-lifecycle-and-copy-states.md) | Accepted version 1.0; local commit `024007d` plus completion revision | `BE3EEE9703DE717C1E3709CA9BE47CF1BCE20055EDD790E5EA4AA4DE38697127` |
| [ACT-SP-011-02 quota/deletion/recovery invariants](ACT-SP-011-02-quota-deletion-recovery-invariants.md) | Accepted version 1.0 | `F83BB9A5BB8E58B6A35D989F8674D2BE79CA4D21F98CD7964F767EB3C00693DB` |
| [SP-011 synthetic race fixtures](../../contracts/sp-011/cloud-lifecycle-fixtures.json) | `sp-011-cloud-lifecycle-v1`; contract 1.0 | `A8B955E9E3021C862D584BEFB094553F001BF7828B08513D6B4A978E1D19D6A4` |
| [SP-011 dependency-free validator](../../tests/media/validate-sp011-contract.cjs) | Local Node validator | `0357EDACAE16342E923A7B9707281967206CD394198DF65FD83F3E309DAF2F90` |
| [SP-008 data map/access decision](../decisions/SP-008-data-map-and-access-matrix.md) | Accepted version 1.0 | Existing accepted decision |
| [SP-084 idempotency decision](../decisions/SP-084-versioned-domain-and-api-contracts.md) | Accepted version 1.0 | Existing accepted decision |

## 2. Check actually performed

Command:

```powershell
node tests/media/validate-sp011-contract.cjs
```

Observed result:

```text
PASS: SP-011 review contract; resumable upload disabled, 17 race scenarios,
60-minute fragment cleanup ceiling and 5-minute playback URL maximum.
```

The check parses the fixture corpus and verifies:

- user-facing resumable upload is disabled;
- an interrupted attempt cannot reuse fragments and retry starts at byte zero;
- reservation, upload-attempt, inactivity, cleanup and playback-link ceilings;
- atomic quota and complete-object-group requirements;
- authorization checkpoints and suppression-first reconnect ordering;
- unique coverage of all 17 required race scenarios; and
- denial/cleanup behavior for withdrawal, deletion, incomplete dual capture,
  stale offline replay and restore after a newer tombstone.

The validator checks contract consistency only. It has not called a provider,
uploaded bytes, minted a real link, deleted an object or restored a backup.

## 3. Source acceptance assessment

| Source criterion | Review outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-011-01` — Proposed allowance/expiry and start point | **PASS — design** | Starter local-only; Family 20 GB; Club 5 GB/seat with safeguards; pilot temporary allowance; active copy expires 30 days after complete group verification |
| `AC-SP-011-02` — Explicit opt-in | **PASS — design** | Adult/guardian choice per owner/player context; child, coach, club and billing cannot enable; Wi-Fi default and cellular separate |
| `AC-SP-011-03` — Authorization/link lifetime | **PASS — design** | Current-state checks at every consequential checkpoint; unstarted reservation and upload credential maximum 15 minutes; playback/download URL maximum five minutes |
| `AC-SP-011-04` — Quota reservation | **PASS — design** | Atomic `used + reserved` ledger; one allowance source; group byte ceiling; no oversubscription or automatic deletion; runtime transaction isolation untested |
| `AC-SP-011-05` — Withdraw/delete/offline rules | **PASS — design** | New generation/tombstone denies access first; suppression precedes replay; cloud/device/everywhere intents remain distinct; real-device sync untested |
| `AC-SP-011-06` — Thumbnails and fragments | **PASS — design** | Thumbnails subordinate to recording authority; quarantine unreadable; resume disabled; cleanup begins immediately and has a one-hour verification ceiling; provider behavior untested |
| `AC-SP-011-07` — Separate object recovery/deletion replay | **PASS — design** | Quarantine excluded; active objects covered separately; seven-day noncurrent recovery; isolated restore replays newer tombstones before access; rehearsal unperformed |
| `AC-SP-011-08` — Truthful notices | **PASS — design** | Exact local/cloud, allowance-full, 30-day expiry, turn-off, withdrawal, deletion-pending and external-copy limits are specified |

## 4. Accepted product values carried forward

| Decision | Value reviewed |
|---|---|
| Cloud default | Off, separately per owner/player context |
| Network default | Wi-Fi only; cellular requires a separate choice |
| Starter | Local-only |
| Family | 20 GB shared across up to four player profiles, with visible per-player usage |
| Club | 5 GB per licensed player seat, pooled with per-player safeguards; funding grants no media access |
| Active retention | 30 days after every required object in the group verifies |
| Expiry notices | Best-effort at seven, three and one day; in-app date remains authoritative |
| Resumable upload | Suppressed/disabled for the initial pilot |
| Interrupted upload | No Resume; immediate cleanup request; new attempt starts from byte zero |
| Cleanup ceiling | Verification within one hour of terminal interruption/failure/cancellation, or visible operator alert and retained reservation |
| Playback/download URL | Maximum five minutes, subject to current authority at mint/renewal |
| Recovery copy | Restricted for up to seven days after active object becomes noncurrent; no user/coach browse |
| Server-side location | Australia only for in-scope data, processing, logs, queues and recovery; authorized worldwide access remains allowed |

## 5. Race-scenario results

| Scenario group | Expected result fixed by fixtures |
|---|---|
| Concurrent/duplicate quota | One atomic reservation; identical retry reuses receipt; changed payload mutates nothing |
| Reservation/attempt expiry | Unstarted reservation expires at 15 minutes; continuous attempt ends by 60 minutes |
| Interrupted upload | Resume is not offered; fragments are unusable; cleanup starts; next retry begins at byte zero |
| Withdrawal during queue/transfer | Upload/finalization denied; suppression written; fragments cleaned |
| Delete during verification | Object never becomes readable; newer deletion generation wins |
| Dual capture incomplete | One missing view leaves the logical group incomplete and not backed up |
| Quota exceeded at finalization | No capacity borrowing; group remains unavailable and follows cleanup/retry handling |
| Expiry/revocation versus link | No new link; existing link has at most five minutes residual life; downloaded bytes remain outside control |
| Offline old device | Suppression/device deletion applies before any upload replay |
| Restore after deletion | Restore stays isolated; newer tombstone is replayed; object remains unreadable |
| Cleanup failure | Quota is not falsely released; no success claim; operator alert required |
| Sponsorship ends | No new sponsored reservation; active copy keeps original expiry; sponsor gains no access |

## 6. Risks retained after design acceptance

1. **No detached upload resume:** weak connections may require a full byte-zero
   restart, especially for large dual-camera recordings. This is the accepted
   cost-minimization choice for the initial pilot.
2. **One-hour cleanup is unproven:** a provider must demonstrate that private
   fragments can be found and deleted within the ceiling. A missed target must
   alert; it cannot be labelled deleted.
3. **Five-minute residual link window:** a URL minted before withdrawal may work
   until expiry. Already downloaded/shared bytes cannot be retracted.
4. **Seven-day recovery versus deletion:** ordinary access ends immediately, but
   physical restricted recovery copies may remain for the disclosed period. The
   app cannot promise immediate physical erasure of every recovery copy.
5. **Customer quota versus operating cost:** recovery bytes are excluded from the
   displayed allowance but remain a Soccolo cost requiring measurement.
6. **Provider gate remains open:** no service is approved until storage,
   processing, logging, support, backup, cleanup and recovery paths satisfy the
   strict Australian-residency requirement.
7. **Future backlog reconciliation:** `SP-017` and `SP-023` currently expect
   resumable upload. They must be revised to the suppressed-pilot behavior or
   explicitly reauthorize resume through a later versioned owner decision.

## 7. Reviewer checklist

- [x] Cloud starts off and only the authorized adult/guardian can enable it for an exact context.
- [x] The Starter, Family, Club and temporary-pilot allowances are acceptable.
- [x] Thirty-day retention starts only after the complete object group verifies.
- [x] Local and cloud copy states and expiry are always shown separately.
- [x] Resumable upload is disabled for the initial pilot.
- [x] Interrupted uploads are cleaned immediately, cannot resume and restart from byte zero.
- [x] A cleanup job has at most one hour to verify fragment removal or raise an alert without releasing quota falsely.
- [x] Quota is atomically reserved and dual-camera groups require both source views.
- [x] Upload credentials are limited to 15 minutes and playback/download URLs to five minutes.
- [x] Withdrawal/deletion generations defeat queued, transferring, verifying, offline and restored state.
- [x] Quarantine fragments are unreadable and excluded from recovery backups.
- [x] Noncurrent recovery copies may remain restricted for up to seven days.
- [x] Server-side in-scope data remains in Australia while authorized worldwide access is allowed.
- [x] The limits in section 6 remain explicit and are not represented as implementation evidence.

## 8. Acceptance outcome

Syed Ahmed accepted `ACT-SP-011-02`, this `ACT-SP-011-03` evidence and the
complete `SP-011` design/specification contract on 15 September 2026, subject to
the exact limitations in this evidence file. He authorized completion, commit
and GitHub publication.

This acceptance does not claim a cloud provider, working upload, quota
transaction, deletion SLA, recovery rehearsal, mobile behavior, privacy
approval or production readiness.
