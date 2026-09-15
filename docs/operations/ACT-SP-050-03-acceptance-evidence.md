# ACT-SP-050-03 — SP-050 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-050-03` — Verify and hand off: Specify environments, regions and recovery |
| Source | `SP-050` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-050-01`, `-02`, `-03` and `SP-050` complete as design/specification work |
| Repository base | `00c9a39683b832914d0e9c6a4467f5bc93751767` on `main` before completion revision |
| Executor | Codex acting as QA/Operations design agent |
| Accountable owner | Syed Ahmed acting as Founder/operator |
| Evidence scope | Documentation and synthetic contract verification only; no provider account, deployment, backup or restore claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-050-01 lean environment/processor boundaries](ACT-SP-050-01-lean-pilot-environment-and-processor-boundaries.md) | Accepted version 1.0 | `73ABCC07D8AF039A6F70FE49226F7E8B033538B6AF4B84283124191EEF02EA08` |
| [ACT-SP-050-02 recovery deferral and costs](ACT-SP-050-02-pilot-recovery-deferral-and-costs.md) | Accepted version 1.0 | `D70D3EE4975072738D4E6E0BC835A26BD2C8FF7C48D4D90962E9FAB24E2EB2A1` |
| [SP-050 synthetic hosting fixtures](../../contracts/sp-050/pilot-hosting-fixtures.json) | `sp-050-lean-pilot-hosting-v1`; contract 1.0; 17 scenarios | `51B8D9F97FD44C1A8B40CCB33215D8E78D571CF1EB84740684493AA464273199` |
| [SP-050 dependency-free validator](../../tests/operations/validate-sp050-contract.cjs) | Local Node validator | `5FB269F901B59E81827F910F49FF4CAFD9FE3E9D4BB03D4025B005029E8E93CE` |
| [SP-008 amended data-map decision](../decisions/SP-008-data-map-and-access-matrix.md) | Accepted version 1.1 | Current accepted decision |
| [SP-011 amended cloud lifecycle decision](../decisions/SP-011-cloud-consent-deletion-and-recovery-contract.md) | Accepted version 1.1 | Current accepted decision |

## 2. Check actually performed

Command:

```powershell
node tests/operations/validate-sp050-contract.cjs
```

Observed result:

```text
PASS: SP-050 lean pilot contract; Sydney primary, global delivery allowed, 17 environment/cost/recovery scenarios, no dedicated pilot recovery or RPO/RTO promise.
```

The validator confirms:

- the exact Sydney primary region is `ap-southeast-2`;
- global delivery is allowed and no strict Australia-only processing claim is made;
- development and pilot production are separated while paid staging is deferred;
- development uses synthetic/consenting-adult data and preview cannot receive production secrets;
- public assets may be shared-cached, but personalized/private responses may not;
- dedicated recovery, cross-region media copying and PITR are disabled;
- customer RPO, RTO and recovery promises are absent;
- pilot users are told to retain the original device copy; and
- paid services and post-pilot recovery require new owner decisions.

It does not verify a Supabase/Vercel configuration, CDN response, secret store,
provider backup, bill, app screen or real participant notice.

## 3. Source acceptance assessment

| Criterion | Outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-050-01` — Sydney primary, global delivery, environment/secrets/private media | **PASS — design/fixture** | Exact Sydney region, two-environment pilot, scoped identities and cache/authorization boundary are fixed; no live provider config exists |
| `AC-SP-050-02` — no dedicated recovery; cheapest plan, loss disclosure and later gate | **PASS — design/fixture** | Melbourne/PITR/media backup/RPO/RTO are deferred, cost floor and loss scenarios are explicit, and a post-pilot decision gate is defined; no restore evidence exists |

## 4. Accepted owner decisions

1. Keep the pilot lean and use the lowest-cost practical service plans.
2. Use Sydney for the primary Supabase application-data project.
3. Permit global CDN/network delivery and ordinary global provider operations.
4. Retain private storage, current authorization and non-shared caching for
   personalized/private responses; these are security boundaries, not
   residency requirements.
5. Use separate development and pilot-production credentials/projects and
   synthetic or consenting-adult development data.
6. Do not pay for a standalone staging environment during the lean pilot.
7. Do not implement Melbourne recovery, object replication, PITR, a restore
   environment or recovery rehearsals for the pilot.
8. Make no RPO, RTO, availability, backup or restore promise to pilot users.
9. Tell pilot users to retain original recordings on their devices because
   cloud records and videos may be permanently lost.
10. Accept provider-default backups if bundled, without representing them as a
    Soccolo feature or assuming they include Storage objects.
11. Require a versioned post-pilot recovery decision before general
    availability, durable-cloud claims or dependence on Soccolo as the only
    copy.
12. Require explicit owner approval before any recurring paid service, add-on
    or spend-cap removal.

## 5. Amendments and retained safeguards

This acceptance provides the explicit successor decision anticipated by the
original SP-008 and SP-011 change controls. It replaces:

- strict Australian-only processing/log/cache/support requirements;
- mandatory Australian recovery copies and seven-day noncurrent recovery;
- mandatory Melbourne media recovery; and
- pilot RPO/RTO targets and restore rehearsal.

It does not replace:

- deny-by-default tenant and resource authorization;
- adult/guardian consent for an exact player context;
- private media storage and short-lived authorized access;
- deletion/withdrawal suppression;
- environment-specific secrets;
- one-hour incomplete-upload cleanup; or
- truthful separation of device and temporary cloud-copy state.

## 6. Retained risks

1. Pilot database records and media may be permanently lost.
2. Supabase database backup does not restore Storage objects.
3. A free Supabase project may pause and has no promised automatic backup.
4. Vercel Hobby is not available for commercial use; an external commercial
   pilot may need Vercel Pro or another eligible host.
5. Provider prices, limits and terms can change and must be rechecked before
   purchase.
6. No privacy/legal approval, real youth-media authorization, cloud
   configuration or production-readiness claim is created by this acceptance.

## 7. Acceptance outcome

Syed Ahmed reviewed and accepted the complete SP-050 family on 15 September
2026, including the leanest practical pilot posture and the deliberate absence
of dedicated recovery. He authorized the amendments, family completion and Git
commit.

This closes SP-050 as design/specification work only. It does not authorize a
cloud purchase, provider configuration, participant enrollment or deployment.
