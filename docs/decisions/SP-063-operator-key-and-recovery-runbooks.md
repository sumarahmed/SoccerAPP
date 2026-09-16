# SP-063 — Operator, key and recovery runbooks

| Field | Decision |
|---|---|
| Source issue | SP-063 |
| Decision version | 1.0 |
| Decision date | 16 September 2026 |
| Outcome | Accepted |
| Acceptance criterion | AC-SP-063-01 and AC-SP-063-02 |
| Accountable person | Syed Ahmed, acting as Founder/primary pilot operator |
| Review status | Accepted for the free-plan pilot operator setup; independent review and implemented-service evidence remain pre-participant/runtime gates |

Syed Ahmed confirmed on 16 September 2026 that all five non-secret operator
security steps were completed: GitHub MFA/recovery, Google two-step/recovery,
Linear passkey/session/app/key review, a privately recorded alternate recovery
custodian and a tested primary/alternate alert route. No code, recovery material,
contact detail or key value was supplied to the repository or agent.

## Accepted evidence

- [Privileged access and key custody](../operations/ACT-SP-063-01-privileged-access-and-key-custody.md), version 1.0.
- [Recovery, alerts, withdrawal and compatibility runbooks](../operations/ACT-SP-063-02-recovery-and-compatibility-runbooks.md), version 1.0.
- [Tabletop verification](../operations/SP-063-tabletop-verification.md), version 1.0.
- [ACT-SP-063-03 acceptance evidence](../operations/ACT-SP-063-03-acceptance-evidence.md), version 1.0.
- [Machine contract](../../contracts/operations/sp063-operator-controls.json), version 1.0.
- `node tests/operations/validate-sp063-contract.cjs`.

## Accepted decisions

1. Syed Ahmed is the primary pilot operator; the alternate identity/contact is
   stored privately and is not disclosed in public planning.
2. Existing operator accounts use provider-native MFA/recovery without a paid
   security plan.
3. Secrets and sensitive incident details stay outside public GitHub, Linear,
   agent prompts, command output and build artifacts.
4. The SP-050 no-backup/no-RPO/no-RTO posture remains: pilot participant data
   and cloud media are not represented as restorable, and users retain original
   device recordings.
5. Weekly session/key review, monthly inventory review and scoped incident
   targets are accepted instead of a 24/7 operations promise.
6. Unsupported clients fail closed for sensitive cloud operations while safe
   local practice remains available where possible.
7. Supabase remains unprovisioned. Before private participant data, add primary
   and backup TOTP factors, a second owner, separate development/production
   credentials and exact implementation evidence.
8. Independent security/privacy review remains mandatory before real child data;
   this owner decision does not replace it.

SP-063 is complete as pilot operations design/setup work. It does not prove a
Supabase restore, production alert, old-client runtime, content withdrawal in a
deployed app, or independent security certification.
