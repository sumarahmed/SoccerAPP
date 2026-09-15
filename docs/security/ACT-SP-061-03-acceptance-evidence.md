# ACT-SP-061-03 — SP-061 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-061-03` — Verify and hand off: Specify retention, guardianship and data rights |
| Source | `SP-061` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-061-01`, `-02`, `-03` and `SP-061` complete as design/specification work |
| Repository base | `6b522b8c1e8efc522c4bcdc7877065038506bcfb` on `main` before completion revision |
| Executor | Codex acting as QA/Identity/privacy design agent |
| Accountable owner | Syed Ahmed acting as Founder/privacy-identity owner |
| Required later reviewer | Privacy adviser and independent security reviewer before real child data |
| Evidence scope | Documentation and synthetic contract verification only; no legal opinion, real case, provider, export or deletion result claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-061-01 authority and identity transitions](ACT-SP-061-01-authority-and-identity-transitions.md) | Accepted version 1.0 | `CD637D0BA7BE2648B08EACA0A32D0319F54D76FD2B0A4B0234A50B62662C77B9` |
| [ACT-SP-061-02 retention and data rights](ACT-SP-061-02-retention-and-data-rights.md) | Accepted version 1.0 | `5E2EDE4A604071507534AC314840EED1BCC048D618A0D070C9CB22728B6DF3D4` |
| [SP-061 guardianship/rights fixtures](../../contracts/sp-061/guardianship-rights-fixtures.json) | `sp-061-lean-guardianship-rights-v1`; contract 1.0; 40 scenarios | `79A3CC9376DA0F935CCFC1D396D95444E2FD65805D7548E9706618E8074FAAFD` |
| [SP-061 dependency-free validator](../../tests/identity/validate-sp061-contract.cjs) | Local Node validator | `3F53C403A09340F26DB0B8524ED6ECA4F9627FC598B13CAB46B3C8E4A7DEFD86` |

## 2. Check actually performed

Command:

```powershell
node tests/identity/validate-sp061-contract.cjs
```

Observed result:

```text
PASS: SP-061 lean guardianship/rights contract; 40 authority, transition, retention and data-rights scenarios.
```

The validator confirms the accepted guardian invitation, dispute, age/adult
transition, response/export, record-retention, deletion, hold, regional and
processor defaults. It checks positive and negative outcomes for authority,
duplicate identity, third-party export, queued/offline deletion and provider
failure cases.

It does not establish legal status, verify a guardian, assess a young person's
capacity, process a dispute, configure a provider, send a notice, create an
export, delete data, inspect a backup or obtain privacy/security review.

## 3. Source acceptance assessment

| Criterion | Outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-061-01` — schedules, authority/dispute/second guardian, correction/adulthood, deletion/holds and processors | **PASS — design/fixture** | Exact authority records and transitions plus the complete proposed schedule, rights/deletion/hold flow and supplier terms are documented; law/provider/runtime results remain later |
| `AC-SP-061-02` — R05/R09/R18 | **PASS — design/fixture** | Each review has explicit design disposition and synthetic positive/negative cases; privacy adviser and independent runtime review remain required |

## 4. Accepted decisions

1. Use Australia as first market and the APPs as a voluntary design baseline
   without claiming final legal classification or a small-business exemption.
2. Treat 18 as Soccolo's account-control transition, not a statement that every
   younger person lacks privacy capacity.
3. Create guardian authority only from a verified adult and explicit exact-
   player attestation/review; email, payment, club or coach status is not proof.
4. Do not routinely collect child or guardian identity documents. Delete
   incidental documents promptly after a necessary review.
5. Give every guardian an independent account/grant. A second-guardian invite
   is single-use, seven days, exact-player bound and completed with TOTP/notice.
6. Self-withdrawal is immediate; removing another guardian enters restricted
   manual review. Credible disputes freeze new high-risk authority/media actions
   while keeping Stop and safe local practice available.
7. Do not automatically merge duplicate accounts. Use independently verified,
   reversible linking and reviewed idempotent migration.
8. Restrict exact birth information; expose derived age/suitability to coaches.
   Corrections affect current/future state without rewriting historical facts.
9. At 18, guardian/private-media authority ends unless the adult deliberately
   grants it again. Billing or club membership does not preserve parent access.
10. Apply the complete record schedule in ACT-SP-061-02, including 30-day cloud
    media, no dedicated pilot recovery, 30-day routine logs, 12-month security
    audit, 24-hour export package and five-minute export/media links.
11. Review inactive service records at 12 months and propose closure after 24
    months with 30 days' notice.
12. Target 30 days for access, correction and deletion handling. Require fresh
    TOTP for consequential fulfilment and protect other people's information.
13. Keep account deletion separate from store-subscription cancellation and
    issue a truthful receipt only after active stores/processors are checked.
14. Use narrow, authorized, 30-day-reviewed holds only; never disguise backup or
    indefinite retention as a hold.
15. Keep rights/dispute content out of Linear except an opaque ID/status/owner.
16. Require provider purpose/security/incident/subprocessor/deletion terms and
    prohibit sale, advertising profiles and AI/model training using private
    child/family/media data.
17. Keep authoritative production data in Sydney while permitting authorized
    worldwide access and disclosed global delivery/support under SP-008/SP-050.

## 5. R05/R09/R18 disposition

| Review | Design disposition |
|---|---|
| R05 — identity, guardianship and transitions | Independent guardian grants, bounded second-guardian invite, contested-authority restrictions, no automatic merge, age correction and deliberate adult transition are explicit |
| R09 — complete retention | Record-by-record purpose/start/period/disposal/hold schedule; export, deletion, suppression, offline/processor failure and no-recovery boundaries included |
| R18 — market and supplier readiness | Australia/APP baseline, current Code recheck, Sydney-primary/global-access position and minimum provider/DPA/subprocessor terms recorded |

## 6. Accepted risks and retained limits

1. The final applicability of the Privacy Act, small-business provisions,
   consent/capacity rules and other Australian/State requirements is not
   determined. Owner acceptance is not legal advice or compliance evidence.
2. The Children's Online Privacy Code is due to be finalized/registered by 10
   December 2026. The final Code must be reviewed before a child-data pilot or
   release; this contract may need revision.
3. No privacy adviser, dispute/safeguarding operator or independent reviewer is
   currently assigned.
4. The seven-day invitation, age-transition and record periods are product
   defaults subject to specialist and real-pilot review.
5. Club attendance/assessment and accounting records may require a different
   verified schedule; five years is a provisional accounting baseline.
6. No actual provider contract, support country, subprocessor, deletion path or
   backup expiry has been reviewed for a purchased production account.
7. No dedicated recovery exists; pilot data and media can be permanently lost.
8. Provider-default backup expiry may delay physical erasure without providing
   active application access. The actual terms must be disclosed accurately.
9. No real rights, guardian, dispute, adult-transition, deletion or processor
   failure behavior has been tested.

## 7. Acceptance outcome

Syed Ahmed accepted the complete SP-061 recommendations and the explicitly
listed risks on 15 September 2026, and authorized commit and movement to the
next family. SP-061 is complete as design/specification work.

This acceptance does not authorize real child data, certify legal compliance or
claim working guardian, rights, retention, deletion, hold or supplier behavior.
