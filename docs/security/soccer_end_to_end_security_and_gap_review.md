# SoccerTrainingApp — End-to-End Security and Gap Review

## Security objective

Protect children, families, clubs and staff by enforcing authority at the API/resource level, minimizing exposure of private training media, and keeping recovery/deletion behavior explicit and testable.

## Identity and sessions

- Adult accounts use MFA/TOTP for privileged access.
- Player credentials are restricted and cannot reach adult/admin operations.
- Guardian pairing and household authority are explicit relationships.
- A parent may also be a coach, but role context remains scoped.
- A player may belong to multiple clubs without merging club authority.
- Session revocation, step-up authentication and recent-auth requirements apply to sensitive changes.
- Lost-authenticator recovery restores enrollment capability only until the factor is re-established; privileged recovery needs controlled review.

## Authorization

Authorization must be based on actor + resource + action + context, not on a simple role number. Payment, club ownership or staff membership never grants private-video access by itself.

## Media protection

- Local media remains private to the device/account context.
- Cloud upload is optional and follows successful local save.
- Uploads enter a non-readable validation/quarantine path before becoming available.
- Media playback/share uses short-lived scoped access where possible.
- Coach/club viewing requires a specific purpose grant that can expire or be withdrawn.
- Revocation applies to queue previews, thumbnails and playback, not only the main file URL.

## Offline and sync

Offline use is allowed, so remote revocation cannot be claimed as instantaneous on a disconnected phone. On reconnect, deletion/revocation/guardianship changes take precedence over stale local writes. Sync operations are idempotent and recoverable.

## Data lifecycle

Define retention by record class: account, training history, source media, exported media, consent/grants, billing evidence, support/safeguarding records, operational logs and backups. Deletion includes primary records, objects, derivatives, queues and recovery copies according to documented retention windows.

## Child safety and safeguarding

- No unrestricted private adult–child messaging.
- Safeguarding reports have named recipients and an alternate route if the report concerns the primary handler.
- Notifications expose minimal information.
- Research consent and product/media permission are separate.
- Real child data is not used for basic technical feasibility testing.

## Logging and observability

Operational events must avoid raw secrets, OTPs, tokens and unnecessary child/media content. Track auth abuse, upload validation failures, quota health, capture/export failures, deletion jobs and recovery actions with redacted identifiers.

## Secrets and operations

Secrets stay in approved secret stores, not source control. Production and staging are separated. Key rotation, compromised-credential response, backup restore and alternate-operator access must be rehearsed before launch.

## High-risk verification scenarios

- Direct API attempts using player credentials against adult routes.
- Cross-household and cross-club resource access.
- Revoked media grant with cached preview/link.
- Shared-device account switching.
- Lost phone/session revocation.
- MFA recovery and privilege escalation attempts.
- Deleted media reappearing after offline sync.
- Duplicate billing/webhook/job delivery.
- Malformed or unvalidated uploaded media.
- Restore from backup without reintroducing deleted/revoked records.
- Compromised operator key/credential response.

## Release rule

No security document is itself proof of security. High-impact findings require remediation and independent retest on the current build/config before release acceptance.
