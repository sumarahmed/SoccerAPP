# ACT-SP-059-03 — SP-059 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-059-03` — Verify and hand off: Specify MFA, recovery and restricted player credentials |
| Source | `SP-059` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-059-01`, `-02`, `-03` and `SP-059` complete as design/specification work |
| Repository base | `9ef21e3179036b518a4a06c6b472bd6c12451547` on `main` before completion revision |
| Executor | Codex acting as QA/Identity design agent |
| Accountable owner | Syed Ahmed acting as Founder/identity lead |
| Required later reviewer | Independent security reviewer for the implemented identity/device boundary |
| Evidence scope | Documentation and synthetic contract verification only; no provider, application or device result claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-059-01 identity assurance and enrollment](ACT-SP-059-01-identity-assurance-and-enrollment.md) | Accepted version 1.0 | `2A8C479DBD898E2C76A5410633FF36A451CFFCC5E23FFBEFAF5A6743F05C7956` |
| [ACT-SP-059-02 recovery and shared-device handoff](ACT-SP-059-02-recovery-and-shared-device-handoff.md) | Accepted version 1.0 | `418AE4147EC9671E0F82B676836A74DFE1F2520D7B7D770E9BB6DBD180F8886D` |
| [SP-059 identity fixtures](../../contracts/sp-059/identity-assurance-fixtures.json) | `sp-059-lean-pilot-identity-v1`; contract 1.0; 24 scenarios | `73F42A37013284832B6199F32FC684A1CAF297FBE53B079E13013CC0279B0350` |
| [SP-059 dependency-free validator](../../tests/identity/validate-sp059-contract.cjs) | Local Node validator | `7F06C6510BDF0997D95FF5769E9D6AFFFFD1B3A44A2C5148BCCB3FCD35C6F287` |

## 2. Check actually performed

Command:

```powershell
node tests/identity/validate-sp059-contract.cjs
```

Observed result:

```text
PASS: SP-059 lean identity contract; TOTP-only MFA, 24 assurance/recovery/shared-device scenarios, no paid identity add-on.
```

The validator confirms the written pilot values and expected results for role
coverage, direct-API assurance, sensitive-action recency, last-factor removal,
enrollment-only promotion/recovery, recovery expiry/replay, session revocation,
pairing expiry/replay, player/sibling scope, shared-device restart, deliberate
adult return and revoked-device renewal.

It does not enroll a TOTP factor, issue a JWT, test RLS/Storage, send recovery
email, pair a phone, inspect OS storage or perform an independent security test.

## 3. Source acceptance assessment

| Criterion | Outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-059-01` — role/action MFA, recovery state, child handoff, flags and F27–F31 | **PASS — design/fixture** | TOTP-only role/action matrix, five-minute step-up, enrollment/factor/recovery states, ten-minute player pairing and all F27–F31 states are specified; runtime untested |
| `AC-SP-059-02` — R01–R03/R08 | **PASS — design/fixture** | MFA coverage, lost-factor containment, distinct player credentials and shared-device behavior have positive/negative cases; provider/device/independent evidence remains later |

## 4. Accepted pilot decisions

1. Use free standard TOTP as the only application MFA method during the pilot.
2. Do not add SMS MFA, push approval, passkeys, enterprise SSO or paid identity
   add-ons.
3. Require MFA for platform administrators, club administrators and coaches.
4. Permit parent/adult local-only practice at ordinary sign-in, but require MFA
   before cloud/private-media, guardian, pairing, factor and export actions.
5. Require a five-minute fresh TOTP check for consequential changes.
6. Enforce assurance in APIs/database/storage as well as the interface.
7. Children need no email, password or authenticator; they receive a restricted
   player/device credential.
8. A mandatory role cannot remove its final factor. Replacement verifies
   another factor and the new factor before removing the lost one.
9. Do not build custom recovery codes. Email alone grants only recovery status,
   never protected access.
10. All-factors-lost recovery is manual and ends in a 15-minute, single-use,
    enrollment-only route with old-session revocation and notification.
11. Player pairing requires fresh adult MFA and a ten-minute, single-use code
    bound to one player and one device.
12. Child mode holds no adult refresh token, starts safely after restart and
    cannot access siblings, billing, guardians, MFA, club administration,
    consent or private-media sharing.

## 5. R01–R03/R08 disposition

| Review | Design disposition |
|---|---|
| R01 — MFA coverage/assurance | TOTP roles and actions fixed; `aal2` plus current server authorization; direct-API denial fixture included |
| R02 — Lost factor/account changes | Backup-factor replacement and contained manual enrollment-only recovery fixed; factor-change freshness and notification included |
| R03 — Child/adult credentials | Adult and restricted player/device contexts are separate; exact pairing, sibling denial and adult-return contract included |
| R08 — Shared-device disclosure | No adult refresh token in player credential; child-safe restart, namespace separation and hidden preview requirements included |

## 6. Retained limits and risks

1. TOTP is susceptible to phishing and is not claimed to be phishing-resistant.
2. A backup factor on the same lost device may not restore access.
3. Manual recovery requires careful identity/authority judgment and may deny a
   legitimate user when evidence is insufficient.
4. Supabase's default sessions do not implement Soccolo's complete
   role/recency/revocation policy.
5. No Flutter/Supabase mechanism for a restricted player credential is yet
   selected or proved.
6. OS biometric/PIN behavior, secure storage, screenshots, app-switcher
   previews, sibling switching and device revocation remain untested.
7. No independent security review of an implementation has occurred.

## 7. Acceptance outcome

Syed Ahmed reviewed and accepted the complete SP-059 family and the lean-pilot
recommendations on 15 September 2026. He subsequently authorized commit and
GitHub publication. The family is complete as design/specification work.

This acceptance does not claim implemented MFA, identity proofing, a recovery
operator, protected child data, device evidence or production readiness.
