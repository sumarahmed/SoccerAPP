# SP-050 — Lean pilot hosting and recovery decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-050 |
| Acceptance criterion | AC-SP-050-01 through AC-SP-050-02 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/operator |
| Review status | Owner acceptance recorded; design/specification only, with provider configuration and runtime evidence retained |
| Repository base | `00c9a39683b832914d0e9c6a4467f5bc93751767` on `main` before completion revision |

Syed Ahmed accepted the complete SP-050 family and authorized its completion
and Git commit on 15 September 2026. The accepted route keeps the pilot lean and
at the lowest practical cost.

## 1. Accepted evidence

- [ACT-SP-050-01 lean environment and processor boundaries](../operations/ACT-SP-050-01-lean-pilot-environment-and-processor-boundaries.md), accepted version 1.0.
- [ACT-SP-050-02 pilot recovery deferral and cost boundary](../operations/ACT-SP-050-02-pilot-recovery-deferral-and-costs.md), accepted version 1.0.
- [ACT-SP-050-03 acceptance evidence](../operations/ACT-SP-050-03-acceptance-evidence.md), accepted version 1.0.
- [SP-050 hosting fixtures](../../contracts/sp-050/pilot-hosting-fixtures.json), contract 1.0 with 17 synthetic scenarios.
- [SP-050 validator](../../tests/operations/validate-sp050-contract.cjs), executed successfully before commit.

## 2. Binding decisions

1. The primary application-data project uses the exact Sydney region.
2. Global CDN/network delivery and ordinary managed-provider global operations
   are permitted; Soccolo makes no Australia-only processing claim.
3. Shared caching is encouraged for public/static content. Personalized and
   private responses still require current authorization and private/no-store
   treatment to prevent cross-user disclosure.
4. The pilot uses separate development and production projects/credentials,
   but no paid standalone staging environment.
5. Free tiers are preferred where their limits and terms permit the intended
   use; spend caps remain on and recurring spend requires owner approval.
6. Dedicated recovery is absent during the pilot: no Melbourne copy, media
   replication, PITR, recovery environment or restore rehearsal.
7. There is no customer RPO, RTO, backup, availability or restore promise.
   Pilot users retain original recordings on their devices if they need them.
8. Provider-default protection may be used when bundled, but it is not a
   product feature and must not be described as media backup.
9. Recovery is reconsidered through a new versioned decision before general
   availability or any durable-cloud/recovery promise.

## 3. Superseded clauses

This decision is the explicit owner-approved successor required by the change
controls in SP-008 and SP-011. It supersedes their strict Australia-only
processing/recovery clauses and dedicated pilot recovery requirements. The
amended [SP-008 version 1.1](SP-008-data-map-and-access-matrix.md) and
[SP-011 version 1.1](SP-011-cloud-consent-deletion-and-recovery-contract.md)
record the current boundary.

Authorization, consent, deletion, private storage, secret isolation,
incomplete-upload cleanup and truthful user state are not relaxed.

## 4. Acceptance criteria

- `AC-SP-050-01` accepted for design: Sydney primary, global delivery, lean
  development/production separation, scoped secrets and private-media controls
  are documented and fixture-backed.
- `AC-SP-050-02` accepted for design: no dedicated pilot recovery or RPO/RTO
  guarantee, lowest-cost plan posture, explicit data-loss disclosure and a
  post-pilot recovery gate are documented and fixture-backed.

## 5. Retained limits

- No provider account, deployment, function, bucket, secret, CDN header,
  backup, restore, alert or spend cap was configured or observed.
- No service was purchased and no recurring spend was authorized by this
  specification.
- Current provider terms and prices must be checked at purchase time.
- Vercel Hobby is limited to personal/non-commercial use; external commercial
  use needs an eligible plan or host.
- The pilot may permanently lose records or videos, and this must remain
  visible in pilot communication.
- Privacy/legal review and authorization to use real youth data remain separate
  gates.
