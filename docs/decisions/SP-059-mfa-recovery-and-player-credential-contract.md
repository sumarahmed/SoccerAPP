# SP-059 — MFA, recovery and player credential contract

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-059 |
| Acceptance criterion | AC-SP-059-01 through AC-SP-059-02 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/identity lead |
| Review status | Owner acceptance recorded; implementation and independent security evidence remain later gates |
| Repository base | `9ef21e3179036b518a4a06c6b472bd6c12451547` on `main` before completion revision |

Syed Ahmed accepted the complete SP-059 family and its lean-pilot
recommendations on 15 September 2026. He subsequently authorized commit and
GitHub publication. SP-059 is complete as a design/specification family.

## 1. Accepted evidence

- [ACT-SP-059-01 identity assurance and enrollment](../security/ACT-SP-059-01-identity-assurance-and-enrollment.md), accepted version 1.0.
- [ACT-SP-059-02 recovery and shared-device handoff](../security/ACT-SP-059-02-recovery-and-shared-device-handoff.md), accepted version 1.0.
- [ACT-SP-059-03 acceptance evidence](../security/ACT-SP-059-03-acceptance-evidence.md), accepted version 1.0.
- [SP-059 identity fixtures](../../contracts/sp-059/identity-assurance-fixtures.json), contract 1.0 with 24 synthetic scenarios.
- [SP-059 validator](../../tests/identity/validate-sp059-contract.cjs), executed successfully before handoff.

## 2. Binding decisions

1. Standard authenticator-app TOTP is the only pilot application MFA method.
   SMS, push approval, passkeys, enterprise SSO and paid identity add-ons are
   excluded.
2. Platform administrators, club administrators and coaches require TOTP.
3. Parents/adult players may use local-only practice at `aal1`; cloud,
   private-media, guardian, pairing, factor and export operations require MFA.
4. Consequential operations require a TOTP verification within five minutes.
5. MFA is enforced at API/database/storage boundaries, not only in the UI.
6. Children receive a restricted player/device credential and need no email,
   password or authenticator.
7. A required role cannot remove its last factor. Factor replacement verifies
   another factor and the replacement before removing the lost one.
8. Email-only or payment-only recovery never opens protected data. Manual
   all-factors-lost recovery ends in a 15-minute single-use enrollment-only
   state, revokes old sessions and sends notification.
9. Player pairing uses a ten-minute single-use code after fresh adult MFA and
   binds one player to one device.
10. Player mode contains no adult refresh token and cannot access siblings,
    billing, guardians, factors, consent, club administration or sharing.

## 3. Acceptance criteria

- `AC-SP-059-01` accepted for design: the role/action assurance matrix,
  TOTP/factor/recovery state machine, server requirement flags, player pairing
  and F27–F31 states are documented and fixture-backed.
- `AC-SP-059-02` accepted for design: R01, R02, R03 and R08 have explicit design
  dispositions and bypass-denial fixtures.

## 4. Retained limits

- No TOTP factor, JWT, recovery case, email, pairing code or player credential
  was created.
- No API, RLS, Storage or shared-device implementation was tested.
- TOTP is not phishing-resistant; a stronger administrator method remains a
  later commercial-release consideration.
- The independent security reviewer must test the implemented identity and
  shared-device boundary before real child-data use.
- No cloud account, subscription, paid add-on or external communication is
  authorized by this decision.
