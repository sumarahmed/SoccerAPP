# ACT-SP-063-03 — Operator, key and recovery acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-063-03` — Verify and hand off: Specify operator, key and recovery runbooks |
| Source issue | `SP-063` |
| Evidence version | 0.1 review candidate |
| Prepared | 16 September 2026 |
| Repository base | `1fc31583e404846d49e3bcebd9e9a9b639d67a47` on `main` before this preparation revision |
| Accountable owner/reviewer | Operator/security reviewer; not yet assigned independently |
| Current outcome | **REVIEW-READY / HUMAN SETUP EVIDENCE REQUIRED / NOT ACCEPTED** |

## 1. Evidence bundle

- [Privileged access and key custody](ACT-SP-063-01-privileged-access-and-key-custody.md), version 1.0.
- [Recovery, alerts, withdrawal and compatibility runbooks](ACT-SP-063-02-recovery-and-compatibility-runbooks.md), version 1.0.
- [Machine-checkable operator-control fixture](../../contracts/operations/sp063-operator-controls.json), version 1.0.
- `node tests/operations/validate-sp063-contract.cjs`.

## 2. Criterion assessment

| Criterion | Current result | Evidence / missing input |
|---|---|---|
| AC-SP-063-01 — vendor MFA, backup factor/custodian, privileged recovery, separate deletion authority, auth/config rebuild, audit/alerts and mobile compatibility | **PASS — written contract; LIVE EVIDENCE PENDING** | Both runbooks specify the controls. Human confirmation of actual provider settings, alternate custody and a tabletop remains missing. |
| AC-SP-063-02 — R10/R11/R15/R16/R18 | **PASS — mapped design; SPECIALIST/RUNTIME EVIDENCE PENDING** | Recovery honesty, key compromise, compatible clients, operator coverage and supplier gates are mapped. No live restore, alert delivery, old-client test, privacy review or independent security decision is claimed. |

## 3. What the owner needs to obtain, and where

Do not send the resulting codes, QR images, keys or phone numbers to Codex,
Linear, GitHub issues or this repository. Report only `confirmed`, `not set` or
`not applicable` plus a non-secret date.

| Step | Where | Required non-secret result |
|---|---|---|
| 1. GitHub primary and backup sign-in | [GitHub Password and authentication](https://github.com/settings/security) | 2FA enabled; two independent methods or one method plus securely stored recovery codes; active sessions/keys/PATs/apps reviewed |
| 2. Google identity recovery | [Google Account Security](https://myaccount.google.com/security) | Two-step verification, current recovery route and at least two sign-in/recovery methods confirmed |
| 3. Linear access | Linear → Settings → Account → Security & Access | Browser passkey added where practical; sessions, authorized apps and personal API keys reviewed; unused keys revoked |
| 4. Alternate recovery custodian | Private operator record, outside public repository | One trusted adult/contracted operator accepts the limited duty; contact tested; no routine child/media access |
| 5. Alert recipient | Provider security-notification settings | Primary monitored route confirmed and a test notification to the alternate recorded |
| 6. Supabase controls | Only when the account/project is created: Account → MFA and Organization → Team | Primary plus backup TOTP factors on separate devices/locations; second owner before real participant data; development and production kept separate |
| 7. Tabletop | Use section 7 of ACT-SP-063-02 with synthetic data | Lost-factor, token compromise, content withdrawal/old-client and unavailable-primary outcomes recorded without destructive production testing |

GitHub recommends recovery codes plus two or more authentication methods and
warns that Support cannot restore accounts after all 2FA recovery methods are
lost. Supabase supports platform TOTP but no recovery codes, so it recommends a
backup TOTP factor in a different app/device or separately secured location.
Linear supports multiple browser/mobile passkeys, session revocation, authorized-
application review and permission/team-scoped API keys.

## 4. Proposed owner decisions

1. Accept Syed Ahmed as primary pilot operator.
2. Keep the SP-050 no-backup/no-RPO/no-RTO pilot posture and make no durability
   claim.
3. Require provider-native MFA and two independent recovery paths without buying
   a paid security plan.
4. Keep secrets and sensitive incidents out of the public planning repository,
   Linear and ordinary agent context.
5. Require a named alternate before real participant cloud data; until then use
   synthetic/consenting-adult development data only.
6. Require a second Supabase owner plus backup factor before pilot production;
   organization-wide MFA enforcement may remain unavailable on the free plan.
7. Use weekly session/key checks, monthly inventory review and scoped incident
   targets rather than 24/7 monitoring for the lean pilot.
8. Rebuild service/configuration from versioned sources after loss, but state
   truthfully that participant database/media recovery is unavailable.
9. Fail sensitive cloud actions closed for unsupported clients while preserving
   safe local practice where possible.
10. Retain independent security/privacy review as a gate before real child data;
    owner acceptance of this specification does not replace that reviewer.

## 5. Remaining decision

SP-063 should be marked accepted only after the owner accepts the proposed
decisions and reports the non-secret results for steps 1–5. Step 6 is a mandatory
future provisioning gate because Supabase does not yet exist. The first tabletop
may be limited to existing accounts plus synthetic content/configuration; actual
cloud restore evidence remains a later implementation activity under the SP-050
pilot posture.
