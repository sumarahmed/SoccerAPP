# SP-061 — Retention, guardianship and data-rights decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-061 |
| Acceptance criterion | AC-SP-061-01 through AC-SP-061-02 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/privacy-identity owner |
| Review status | Owner acceptance and risk acceptance recorded; privacy/legal, implementation and independent evidence remain later gates |
| Repository base | `6b522b8c1e8efc522c4bcdc7877065038506bcfb` on `main` before completion revision |

Syed Ahmed accepted the complete SP-061 recommendations and recorded risks on
15 September 2026, and authorized commit and movement to the next family.
SP-061 is complete as a design/specification family.

## 1. Accepted evidence

- [ACT-SP-061-01 authority and identity transitions](../security/ACT-SP-061-01-authority-and-identity-transitions.md), accepted version 1.0.
- [ACT-SP-061-02 retention and data rights](../security/ACT-SP-061-02-retention-and-data-rights.md), accepted version 1.0.
- [ACT-SP-061-03 acceptance evidence](../security/ACT-SP-061-03-acceptance-evidence.md), accepted version 1.0.
- [SP-061 guardianship/rights fixtures](../../contracts/sp-061/guardianship-rights-fixtures.json), contract 1.0 with 40 synthetic scenarios.
- [SP-061 validator](../../tests/identity/validate-sp061-contract.cjs), executed successfully before handoff.

## 2. Binding decisions

1. Australia is the first market; use APP principles as the product baseline
   without claiming final legal classification or exemption.
2. Guardian authority is an independent exact-player grant. Email, payment,
   club or coach status is not authority, and routine identity-document
   collection is prohibited.
3. A second guardian uses a seven-day single-use invite, independent adult
   account, fresh TOTP, current notice and current issuer/dispute checks.
4. Self-withdrawal is immediate; removal of another guardian and credible
   disputes use restricted manual review and freeze new high-risk media/
   authority operations without disabling Stop or safe local practice.
5. Duplicate identities are never merged automatically. Age corrections update
   current/future eligibility and retain linked historical facts.
6. Age 18 is Soccolo's deliberate account-control transition. Parent media/data
   access ends unless the adult grants new access; billing and club membership
   do not preserve parental authority.
7. Apply the accepted record-level schedule, 30-day rights target, 24-hour
   export lifetime, five-minute download link, narrow hold and verified
   deletion/suppression flow.
8. No dedicated pilot recovery exists. Active cloud media remains 30 days;
   provider-default backup behavior is disclosed but not offered as recovery.
9. Keep sensitive rights/dispute content out of Linear and general trackers.
10. Processor terms require purpose/security/incident/subprocessor/deletion
    controls and prohibit sale, advertising profiles and AI/model training on
    Soccolo private child/family/media data.
11. Authoritative production data remains Sydney-primary while worldwide
    authorized access and disclosed global delivery/support remain permitted.

## 3. Acceptance criteria

- `AC-SP-061-01` accepted for design: record schedules, guardian/dispute/second
  guardian, correction/adult transition, deletion/holds and processor terms are
  documented and fixture-backed.
- `AC-SP-061-02` accepted for design: R05, R09 and R18 have explicit design
  dispositions and 40 positive/negative synthetic scenarios.

## 4. Accepted risks and limits

- Owner acceptance is not legal advice or privacy-compliance certification.
- The final Children's Online Privacy Code and Soccolo's Privacy Act/State-law
  position require specialist review before real child participation.
- No named privacy adviser/operator or independent reviewer is assigned.
- Club/accounting retention and provider/subprocessor terms remain unverified.
- No rights request, identity/guardian case, export, deletion, hold, backup or
  processor operation was executed.
- No real child data is authorized by this decision.
