# ACT-SP-063-01 — Privileged access and key custody

| Field | Value |
|---|---|
| Activity | `ACT-SP-063-01` — Specify privileged access and key custody |
| Contract version | 1.0 review candidate |
| Prepared | 16 September 2026 |
| Accountable owner | Operator/security reviewer; Syed Ahmed is the proposed pilot primary operator |
| Current state | Review-ready specification; account settings and alternate operator still require human confirmation |
| Cost posture | Free-plan pilot; no paid security or recovery add-on authorized |
| Secret handling | No password, TOTP seed, recovery code, API key, private key, phone number or personal address belongs in this public repository or Linear |

## 1. Lean pilot decision

Use provider-native MFA and recovery controls rather than building or buying an
operator-vault service for the pilot. The password manager and an offline copy
held outside the development computer are the two approved custody locations.
The repository records only redacted control status, owner role, scope, last
review date and rotation trigger.

No routine agent receives a production credential. An agent may use a scoped,
revocable credential only for an explicitly authorized run, and the credential
must remain outside source, issues, prompts, command output and build artifacts.

## 2. Current and gated service inventory

| Service | Current purpose/state | Pilot privileged identity | Required control before use with private participant data |
|---|---|---|---|
| GitHub personal account | Active; owns public planning and private implementation repositories | Syed Ahmed | 2FA plus at least one independent recovery method; recovery codes outside repository; review sessions, SSH keys, PATs and installed apps |
| Public `sumarahmed/SoccerAPP` | Active; public planning/evidence and Pages | GitHub owner | No secrets or private incidents; repository deletion remains an owner-only deliberate action |
| Private `sumarahmed/Soccolo-app` | Active; implementation repository | GitHub owner | Keep private; scoped automation only; no production or child data; branch protection is deliberately deferred on the free plan |
| Linear workspace | Active; planning only | Workspace owner | Browser passkey recommended; review active sessions/apps/API keys; keep child data, secrets and detailed incidents out of issues |
| Owner-designated Google identity | Active identity/recovery dependency; address not recorded here | Account owner | Two-step verification, at least two sign-in methods and current recovery contact; backup codes outside repository |
| Runway Standard | Active for review media generation | Account owner through designated identity | No API key required for the current workflow; retain invoices/terms privately and do not treat generated review files as cleared release assets |
| Supabase development | Not provisioned | Future project owner | Account TOTP plus a backup TOTP factor on a different device/location before creation of private data or secrets |
| Supabase pilot production | Not provisioned | Future project owner plus alternate owner before real participant use | Separate project/credentials; no service-role key in clients or general agent access; no recovery promise under accepted SP-050 |
| Domain/email, Apple, Google Play, monitoring and billing services | Not provisioned | Future release/operator owners | Add to this inventory before account creation; enable MFA/recovery and use separate scoped credentials |

Provider controls change. Before configuring them, use the current official
pages: [GitHub 2FA recovery methods](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods),
[Supabase platform MFA](https://supabase.com/docs/guides/platform/multi-factor-authentication),
[Linear Security & Access](https://linear.app/docs/security-and-access) and
[Linear API keys](https://linear.app/docs/api-and-webhooks).

## 3. Custody roles

| Role | Pilot assignment | May do | Must not do |
|---|---|---|---|
| Primary operator | Proposed: Syed Ahmed | Configure provider account, revoke/rotate scoped credentials, invoke documented containment | Place secrets in public planning, use child data for testing or claim a restore capability that does not exist |
| Alternate account-recovery custodian | **Unassigned — human decision required** | Hold one sealed/offline recovery path or retain separate provider ownership after accepting the duty | Use routine development credentials, browse participant media or hold every primary factor |
| Destructive-data approver | **Unassigned until a real participant-data service is provisioned** | Confirm account/project deletion and independently verify scope | Be the same sole actor who initiated a consequential production deletion |
| Independent security reviewer | **Unassigned** | Review this design now and exact implemented accounts/configuration before real participant data | Self-approve controls they alone implemented |

The destructive-data approver is the required **separate deletion authority**
once a participant-data service or recovery copy exists.

For the current solo, pre-data stage, the absence of an alternate does not
authorize real participant data. It is a provisioning gate. Before the first
private participant account or cloud video, appoint a trusted adult or contracted
operator as alternate and record their identity/contact only in the private
operator register, not this public repository.

## 4. Authentication and recovery minimum

Every privileged account must have:

1. a unique password where the provider uses passwords;
2. provider MFA or a strong passkey/identity-provider equivalent;
3. two independent recovery methods where the provider supports them;
4. recovery material stored in a password manager and/or sealed offline copy,
   never on the same sole device as the primary factor;
5. current recovery email/phone where applicable;
6. session, authorized-app, SSH-key and API-token review after enrollment and
   at least quarterly; and
7. immediate review after a lost device, suspicious login, staff departure,
   accidental disclosure or unexpected automation action.

GitHub recovery codes are single-use and should be stored in a password manager
or offline. Supabase does not issue recovery codes for its platform MFA; its
official guidance is to enroll a backup TOTP factor using a different device/app
or separately secured secret. Linear supports multiple passkeys in browsers,
while its desktop app currently does not support passkeys.

## 5. Key and token register

The private register records metadata only:

| Field | Required value |
|---|---|
| System/environment | Exact provider and `development` or `pilot-production` |
| Credential ID | Provider label or last four characters only; never the value |
| Purpose/scope | Exact API/team/project/repository operations permitted |
| Custodian | Named human or service identity |
| Created/last used | Timestamp or provider evidence |
| Expiry/review | Expiry where supported; otherwise next quarterly review |
| Storage | Password-manager item, CI secret name or provider-managed identity |
| Rotation trigger | Exposure, scope change, lost device, departure, unexplained use or provider notice |
| Revocation evidence | Date, actor and provider receipt/log reference |

Personal API keys are a last resort. Prefer provider OAuth/installations,
repository-scoped GitHub Apps or short-lived service identities. Linear keys must
be permission- and team-scoped. Supabase service-role and management tokens must
never be embedded in the app, public planning repository or general agent context.

## 6. Lost-factor or suspected-compromise procedure

1. Stop the affected automation and do not paste the credential into a ticket or
   chat.
2. Use an independent recovery method; if none exists, use the provider's formal
   recovery route and treat the account as unavailable.
3. Revoke active sessions, affected tokens, installed apps and delegated access.
4. Rotate downstream credentials that the identity could read or change.
5. Check provider/account audit evidence for new logins, token creation, settings,
   repository/project changes and destructive actions.
6. Preserve only redacted timestamps, actor, scope and provider event identifiers
   in the incident record.
7. Restore access from a known device, enroll replacement and backup factors, and
   test one non-destructive privileged action.
8. If scope is uncertain, block cloud uploads/sharing and release activity until
   the security reviewer accepts containment.

No support process may request a password, TOTP seed, recovery code or complete
API key. GitHub warns that losing all 2FA recovery methods can permanently lose
the account; Supabase states it cannot restore access after all MFA credentials
are lost. This is why the second method is mandatory before real participant use.

## 7. Completion state

The operator inventory, custody model and loss/compromise procedure satisfy
ACT-SP-063-01 at the specification level. Live settings, a named alternate and
an independent reviewer remain open and are listed in ACT-SP-063-03.
