# ACT-SP-059-02 — Recovery and shared-device handoff

| Field | Review value |
|---|---|
| Activity | `ACT-SP-059-02` — Specify recovery and shared-device handoff |
| Source | `SP-059` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `9ef21e3179036b518a4a06c6b472bd6c12451547` on `main` |
| Executor | Codex acting as Identity design agent |
| Accountable owner | Syed Ahmed acting as Founder/identity lead |
| Predecessor | Accepted [ACT-SP-059-01](ACT-SP-059-01-identity-assurance-and-enrollment.md) |
| Evidence scope | Written protocol and synthetic bypass cases; no real recovery, device or provider administration performed |

## 1. Lean recovery choices

The pilot does not build custom recovery codes or automatic email-only MFA
reset. Recovery must never become an easier route to child, family, club or
media access than ordinary authentication.

### Usable backup factor

1. Verify the usable backup TOTP factor.
2. Enroll and verify a replacement factor.
3. Remove the lost factor.
4. Revoke older application sessions/device grants where appropriate.
5. Notify the established account contact.

### Every factor lost

1. An established email route may create a restricted recovery request and show
   its status, but exposes no protected account content.
2. The founder or named identity-support operator performs a documented manual
   review using previously established, proportionate evidence.
3. Email access, payment evidence, knowledge of a child's name, or a coach/club
   assertion is insufficient by itself.
4. Support never requests a password, live TOTP code, QR code or seed secret.
5. Approval revokes existing sessions and issues a single-use enrollment token
   valid for at most 15 minutes.
6. The token permits only enrollment and verification of a new factor.
7. Protected access returns only after the new factor verifies and current
   role/resource authorization is checked.
8. The established contact receives a recovery notification where safe.

If identity/authority cannot be established safely, recovery remains denied.
For a small pilot, losing the account is preferable to exposing another
family's information through a weak override.

NIST's current guidance treats account recovery as a distinct controlled
process and requires recovery notification. Soccolo uses it as design guidance,
not as a certification claim:
<https://pages.nist.gov/800-63-4/sp800-63b.html>.

## 2. Player-device pairing

```text
adult sign-in + fresh TOTP
  -> choose exact player and device purpose
  -> create single-use pairing code (10 minutes)
  -> device redeems code
  -> server issues restricted player/device grant
  -> adult credential is absent from child-accessible context
```

The player credential is bound to one player, one device, allowed actions,
issuance/expiry and current guardian/device generations. It may:

- read the player's permitted plans;
- record and retain local practice;
- append that player's practice events;
- upload only under an already authorized guardian policy and allowance; and
- stop recording immediately, including offline.

It may not:

- read sibling or unrelated-player data;
- manage billing, guardians, factors, recovery or club administration;
- enable cloud, grant consent or create media-sharing recipients;
- hold or reconstruct an adult refresh credential; or
- convert a local profile selection into server authority.

Pairing codes are single-use and expire after ten minutes. Expired, replayed,
wrong-player or revoked-device redemption fails without disclosing account
membership.

## 3. Shared-phone handoff

- Handoff clears adult access from ordinary app memory and child-accessible
  navigation.
- Any retained adult session material is protected behind the separate adult
  boundary; it is never embedded in the player credential.
- App restart while handed to the player returns to restricted player mode,
  not the adult dashboard.
- Switching siblings changes the complete data/media namespace and requires a
  currently authorized local player selection; it never unions their records.
- OS biometric or a local PIN may unlock the established adult area for
  convenience, but it is not proof of guardianship and cannot replace required
  server MFA for consequential actions.
- Adult return is deliberate. Protected server actions re-check current adult
  session, role and step-up requirements.
- App-switcher previews hide private information and recording thumbnails.

A dedicated child phone contains no reusable parent refresh token. Revoking its
device grant prevents online renewal and new protected operations; previously
prepared offline practice retains only the separately accepted bounded offline
behavior.

## 4. F30–F31 required states

| Screen | Required states and content |
|---|---|
| F30 — Lost authenticator | Backup-factor route, all-factors-lost request, restricted status, denied/approved result, 15-minute enrollment-only token, new-factor verification, session revocation, notification and safe failure |
| F31 — Pair device and hand to player | Exact player/device selection, ten-minute one-use code, redeemed/expired/replayed/revoked states, current player identity, restricted permissions, sibling switch, safe restart and deliberate adult return |

## 5. Synthetic bypass coverage

The [SP-059 fixtures](../../contracts/sp-059/identity-assurance-fixtures.json)
cover 24 role, assurance, recovery, factor and shared-device cases. The local
[validator](../../tests/identity/validate-sp059-contract.cjs) requires:

- direct API denial at inadequate assurance;
- no social/email substitution for TOTP;
- last-required-factor denial;
- enrollment-only promotion and recovery;
- recovery expiry, replay denial and old-session revocation;
- one-player/one-device pairing scope and one-use expiry;
- sibling, cloud, guardian, billing and club-administration denial; and
- safe player-mode restart, adult return and revoked-device behavior.

## 6. Completion result

`ACT-SP-059-02` passes as design/specification work. Backup-factor replacement,
all-factors-lost containment, enrollment-only recovery, notification, pairing,
player scope, sibling isolation and F30–F31 are explicit. No real recovery or
device behavior is claimed.
