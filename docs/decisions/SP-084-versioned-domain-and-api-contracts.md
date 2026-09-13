# SP-084 — Versioned domain and API contracts

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 14 September 2026 |
| Source issue | SP-084 |
| Acceptance criterion | AC-SP-084-01 through AC-SP-084-04 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Backend/technical lead |
| Review status | Owner acceptance recorded; role-consolidated review is not independent review |
| Repository base | `94686d30567d9aed2a1a16543fc92fd18cae60a1` on `main` |

Syed Ahmed reviewed the SP-084 contract and verification bundle, accepted its design-phase outcomes and authorized commit and publication. This decision closes SP-084 as a design/specification task while retaining every stated runtime, client, device and specialist obligation.

## 1. Accepted evidence

- [ACT-SP-084-01 domain schema and ownership catalog](../delivery/ACT-SP-084-01-domain-schema-and-ownership-catalog.md), version 1.0, commit `502e163d64e4b8ea110a09eb4fe45649b1cf0d33`.
- [ACT-SP-084-02 compatibility and idempotent event contract](../delivery/ACT-SP-084-02-compatibility-and-idempotent-events.md), version 1.0, commit `94686d30567d9aed2a1a16543fc92fd18cae60a1`.
- [ACT-SP-084-03 acceptance evidence](../delivery/ACT-SP-084-03-acceptance-evidence.md), reviewed version 0.1 SHA-256 `345B253773D797C85432AF04D339416B9C3B10432B6BDEA726C875BA0FBBA4D1`; version 1.0 adds acceptance metadata only.
- [Portable SP-084 fixture corpus](../../contracts/sp-084/contract-fixtures.json), `sp-084-contract-fixtures-v1`, contract `2026-09`, schema revision 1 and 12 synthetic scenarios.
- [Dependency-free fixture validator](../../tests/backend/validate-sp084-contracts.cjs), executed successfully before acceptance publication.

## 2. Accepted outcomes

1. Every private resource has one canonical owner context; cross-context use requires an explicit, versioned projection or grant.
2. Clients express intent while the server derives ownership, authorization dependencies, current generations, timestamps, audit identity and final decisions.
3. Mobile, web and job implementations share one calendar-major/versioned fixture corpus rather than divergent platform copies.
4. Consequential commands use stable operation identities, payload digests and durable receipts; events use immutable global IDs, per-aggregate sequences and durable effect deduplication.
5. Pathways, progression rules, assessments, structured feedback and goals have explicit owning domains and versioned extension seams before implementation.

## 3. Acceptance criteria

- **AC-SP-084-01 — Accepted for design:** ownership rules and the mixed-owner fixture prohibit foreign-resource and foreign-count disclosure. Runtime database/API enforcement remains future evidence.
- **AC-SP-084-02 — Accepted for design:** server and device authority boundaries are explicit across requests, timestamps, generations, retry, offline replay and revocation. No sync engine or service exists yet.
- **AC-SP-084-03 — Accepted for design:** one portable, versioned 12-scenario corpus names mobile, web and job consumers. Cross-runtime adapter execution remains future evidence.
- **AC-SP-084-04 — Accepted for design:** shared extensions are owned and versioned. Actual people must accept responsibility before their implementation slices.

## 4. Limits retained

- No mobile app, web client, backend, API, database, queue worker, deployment or production control is implemented by this decision.
- No Dart, TypeScript or backend adapter has consumed the fixture corpus, and no named device result is claimed.
- Runtime IDOR, ownership, cursor authentication, receipt durability, event ordering, outbox, offline replay and revocation tests remain mandatory in the activities that build those systems.
- Human security, privacy/safeguarding and content-specialist gates inherited from SP-037 remain mandatory before real youth, guardian or private-media data is used.
- The role-consolidated owner review recorded here does not replace a later independent or specialist review requirement.

## 5. Owner decision

Syed Ahmed accepted `OD-084-14` through `OD-084-16` and the exact ACT-SP-084-03 review candidate on 14 September 2026, then authorized commit and publication. SP-084 is accepted as the fixed design/contract baseline for dependent implementation work.

Any material change to ownership, authority, versioning, timestamps, errors, pagination, idempotency, event ordering or extension seams requires a new reviewed contract version and affected fixture/evidence updates.
