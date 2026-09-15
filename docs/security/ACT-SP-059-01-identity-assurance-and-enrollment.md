# ACT-SP-059-01 — Identity assurance and enrollment

| Field | Review value |
|---|---|
| Activity | `ACT-SP-059-01` — Specify identity assurance and enrollment |
| Source | `SP-059` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `9ef21e3179036b518a4a06c6b472bd6c12451547` on `main` |
| Executor | Codex acting as Identity design agent |
| Accountable owner | Syed Ahmed acting as Founder/identity lead |
| Evidence scope | Written and synthetic identity contract only; no provider account or application flow tested |

## 1. Lean-pilot authentication choice

The pilot uses standard authenticator-app TOTP as its only application second
factor. Google Authenticator, Microsoft Authenticator and compatible TOTP apps
may scan the standard enrollment QR code or use its manual secret.

The pilot does not add SMS MFA, push approval, passkeys, enterprise SSO or a
paid identity add-on. A social sign-in, magic link or email code establishes
ordinary first-factor sign-in only and does not satisfy Soccolo's MFA policy.

Supabase documents TOTP as enabled on all projects without an additional MFA
charge, and exposes enrollment, challenge, verification and assurance-level
APIs: <https://supabase.com/docs/guides/auth/auth-mfa/totp>.

## 2. Role and action assurance matrix

| Actor/action | Minimum assurance | Pilot behavior |
|---|---|---|
| Platform administrator | Verified TOTP (`aal2`) | Enrollment-only until complete; no shared administrator account |
| Club administrator | Verified TOTP (`aal2`) | Required before roster, staff, billing or publishing administration |
| Coach | Verified TOTP (`aal2`) | Required before assigned-player information, feedback or granted private media |
| Parent/adult player using local-only practice | Ordinary adult sign-in (`aal1`) | MFA encouraged but not required merely to run local practice |
| Parent/adult enabling cloud | Fresh TOTP | Required before changing the exact player cloud setting |
| Parent/adult viewing or sharing private cloud media | Verified TOTP; fresh challenge for a new share | Media grant and ownership checks remain separately required |
| Guardian, identity, factor or recovery change | TOTP verified within five minutes | Bind approval to actor, session, purpose and intended change |
| Private-data export or new player-device pairing | TOTP verified within five minutes | No stale `aal2`-only approval |
| Under-18 player | Restricted player/device credential | No email address, password or authenticator required |
| Service job | Scoped service identity | Human MFA never converts a job into an unrestricted actor |

Supabase includes an `aal` claim in its JWT, but the UI check alone is not
enforcement. APIs, server-rendered routes, database policies and Storage paths
must apply the same role/action requirement:
<https://supabase.com/docs/guides/auth/auth-mfa>.

## 3. Enrollment state machine

```text
signed_out
  -> adult_aal1
  -> enrollment_explanation
  -> secret_issued
  -> initial_code_challenge
  -> factor_verified_aal2
  -> protected_scope_allowed
```

- A mandatory-MFA role at `adult_aal1` receives enrollment-only access.
- The enrollment QR/manual secret is displayed only in the active enrollment
  flow and never written to analytics, logs, screenshots, support tickets or
  agent prompts.
- The first TOTP code must verify before the factor becomes usable.
- Cancelling or failing enrollment leaves the user in enrollment-only scope.
- An already enrolled user at `aal1` receives a challenge, not a duplicate
  factor enrollment flow.
- Wrong/expired codes return a neutral retry state and are throttled; they do
  not reveal whether another account or factor exists.

The same-phone route exposes the standard manual/import secret deliberately,
warns about clipboard exposure and clears the visible secret when enrollment
finishes or is cancelled.

## 4. Factor management

- Adding, renaming or removing a factor requires a TOTP verification no older
  than five minutes.
- A mandatory-MFA role cannot remove its last verified factor.
- Replacement order is: verify another factor, enroll replacement, verify it,
  remove the lost factor, then revoke older sessions.
- A newly promoted administrator or coach without a factor cannot enter the
  protected workspace until enrollment completes.
- Payment, invitation, club role or an existing browser session cannot suppress
  the MFA requirement.

For the pilot, administrators and coaches are strongly encouraged to enroll a
second TOTP factor on a separate device. A second factor stored only on the same
lost phone is not meaningful device-loss protection.

## 5. F27–F29 required states

| Screen | Required states and content |
|---|---|
| F27 — Authenticator setup | Explanation, QR, manual/same-phone route, accessible secret entry, first-code verification, cancellation, invalid/expired code, enrollment-only status and no-secret telemetry |
| F28 — Challenge and adult step-up | Sign-in challenge, fresh-action challenge, wrong/expired code, clock-help, throttling, cancellation and safe return without exposing protected content |
| F29 — Security and active devices | Factors, sessions/devices, last activity, revoke action, factor replacement, last-factor denial and security notification status |

## 6. Session boundary

An `aal2` token proves that MFA occurred in that authentication context; it does
not grant every role or resource and does not prove five-minute recency by
itself. Soccolo records the successful action challenge against the current
server session and purpose.

Supabase sessions are long-lived by default and issued JWTs may remain usable
until their expiry. The application therefore checks current membership,
device, revocation and authorization generation at protected operations rather
than relying solely on the token's historical claims:
<https://supabase.com/docs/guides/auth/sessions>.

## 7. Completion result

`ACT-SP-059-01` passes as design/specification work. TOTP coverage, enrollment,
assurance, factor management, action recency, child exclusion and F27–F29 are
explicit. Runtime and usability evidence remains for later implementation.
