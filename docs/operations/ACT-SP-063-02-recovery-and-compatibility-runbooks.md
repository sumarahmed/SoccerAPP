# ACT-SP-063-02 — Recovery, alerts, withdrawal and compatibility runbooks

| Field | Value |
|---|---|
| Activity | `ACT-SP-063-02` — Specify recovery and compatibility operations |
| Runbook version | 1.0 review candidate |
| Prepared | 16 September 2026 |
| Pilot owner | Proposed: Syed Ahmed |
| Alternate | Unassigned; required before real participant cloud data |
| Recovery posture | Accepted SP-050 lean pilot: no Soccolo backup/RPO/RTO promise; users retain original device recordings |
| Runtime status | Specification only; no Supabase project, deployed app, alert route or restore rehearsal exists |

## 1. Honest pilot recovery boundary

The free pilot does not pay for dedicated database recovery, point-in-time
recovery, replicated media, a warm environment or 24/7 operations. Provider
defaults may exist but are not represented as a Soccolo feature. Database,
authentication records and cloud media may be permanently lost.

Recoverable material at this stage is limited to versioned planning in the
public repository, implementation/configuration-as-code in the private
repository and an operator's verified local clone. Secrets, participant data and
media are never restored from Git history.

Before real participant use, the app and consent copy must tell pilot users to
keep their original device recording and must not promise availability, RPO,
RTO, backup or restoration.

## 2. Internal response targets, not customer promises

| Event | Primary target | Alternate target | Safe first action |
|---|---|---|---|
| Suspected privileged compromise | Acknowledge within 15 minutes when notified; revoke/contain within 1 hour when access is available | Act if primary has not acknowledged within 30 minutes | Stop automation, revoke sessions/tokens, block releases/uploads if scope is unclear |
| Lost primary factor/account lockout | Begin recovery within 1 hour during waking/operator hours | Use separately held factor/ownership | Do not weaken MFA or create a shared account |
| Unsafe or rights-withdrawn content | Acknowledge within 1 hour; block new online use within 4 business hours, immediately for credible safety harm | Verify withdrawal and affected versions | Mark exact version withdrawn; stop publication/download; preserve minimal audit |
| Application configuration failure | Stop changes; reproduce from exact commit and redacted config manifest | Review restored scope | Rebuild development first; never test recovery against sole production data |
| Database/media loss | Declare the honest pilot-loss boundary | Confirm user/support notice | Do not claim Supabase database backups restore Storage objects |
| Unsafe old client | Deny sensitive cloud mutation; allow only safe local practice where possible | Verify minimum-version rule | Require update or enter read-only/degraded mode |

These are internal targets for a small pilot with no 24/7 roster. If the team
cannot meet them, pause cloud/private-media onboarding rather than publishing an
unsupported response promise.

## 3. Auth and configuration rebuild

When a future environment exists:

1. identify the exact incident-free private repository commit and dependency
   lock;
2. create a clean development project in the approved region;
3. apply versioned migrations, RLS/storage policies, functions and non-secret
   configuration from source;
4. create new secrets in provider/CI stores and rotate any possibly exposed
   value—never recover a secret from documentation;
5. configure authentication providers, redirect URLs, MFA settings, email and
   storage from a redacted expected-state checklist;
6. load synthetic fixtures only and run isolation/denial tests;
7. compare the redacted configuration manifest and security-advisor output;
8. obtain technical/security review before changing pilot-production routing;
9. notify users honestly of unrecoverable cloud records/media; and
10. replay deletion/withdrawal suppression before any recovered or re-created
    object can become readable.

This rebuild restores application capability, not lost participant data. An
actual data/media restore becomes a new post-pilot decision and must be rehearsed
before any durability claim.

## 4. Alert and audit route

Free-plan controls are deliberately simple:

- provider security/login/billing notices go to the owner-designated monitored
  account;
- the primary operator checks active sessions, installed apps and API keys
  weekly while pilot activity is running;
- the redacted service/token inventory is reviewed monthly and after every
  account, role, device or integration change;
- GitHub/CI security events and failed deployments are reviewed before release;
- Supabase account audit records are reviewed when that account exists; paid
  organization audit-log drains are not required for the free pilot;
- sensitive incident details, participant information and secrets remain in a
  private incident record, never public GitHub or Linear; and
- the alternate must receive a tested notification without receiving routine
  participant-data access.

The event record contains incident ID, detected time/source, affected service and
scope, containment timestamps, revoked/rotated credential identifiers, user
impact, follow-up owner and closure reviewer. It never contains secret values or
private media.

## 5. Content withdrawal

1. identify the exact content, drill, animation, plan and asset version;
2. classify ordinary rights/quality withdrawal versus urgent safety withdrawal;
3. mark that exact version withdrawn in the authoritative manifest and block new
   publication, assignment, download and streaming;
4. prevent stale queues from republishing it;
5. show a safe replacement or no-media practice path;
6. notify affected adults/clubs with minimal necessary information;
7. retain attributable approval/withdrawal evidence without retaining withdrawn
   private media unnecessarily; and
8. record the offline residual: previously downloaded or exported bytes cannot be
   remotely guaranteed to disappear.

## 6. Older-client compatibility and emergency controls

- Use additive schema/API changes within the supported contract version.
- Never delete or change a field until all supported clients tolerate the new
  representation and queued/offline operations have a migration path.
- Every sensitive command carries a contract/client version and idempotency key.
- The server rejects an unsafe or unsupported version with a stable upgrade/read-
  only response; it never guesses privileged intent.
- A minimum-supported-version setting may block cloud upload, sharing, export,
  role/guardian change and billing while retaining safe local non-recorded
  practice where technically possible.
- Emergency switches are scoped by exact content version, upload, sharing,
  export or privileged operation; there is no single unaudited global bypass.
- A schema/app rollback must not resurrect deleted, revoked or withdrawn data.
- Store rollout/rollback is not immediate, so server-side compatibility and
  scoped denial remain mandatory.

## 7. Tabletop rehearsal

Use synthetic accounts/data only and record timestamps/outcomes for:

1. the primary phone is lost and the owner enters GitHub through an independent
   recovery method;
2. a Linear or GitHub token label shows unexplained use and is revoked/rotated;
3. the only future Supabase operator loses the primary TOTP factor and uses the
   separately stored backup factor;
4. one animation/content version is urgently withdrawn while an older client is
   offline;
5. a future Supabase project is deleted or corrupted and the team truthfully
   rebuilds configuration without claiming participant-data restore; and
6. the primary operator is unavailable and the alternate receives the alert and
   executes only the documented containment scope.

The first four account/configuration cases can be rehearsed only after their
accounts/settings exist. No destructive live test is authorized by this document.

## 8. Completion state

This document completes ACT-SP-063-02 at the specification level. ACT-SP-063-03
must record the owner decisions and non-secret setup/rehearsal evidence before
SP-063 can be accepted.
