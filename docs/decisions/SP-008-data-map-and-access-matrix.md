# SP-008 — Data map and access matrix

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 14 September 2026 |
| Source issue | SP-008 |
| Acceptance criterion | AC-SP-008-01 through AC-SP-008-04 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Technical lead |
| Review status | Owner acceptance recorded; Australian residency is a binding architecture constraint, not a claim of implemented or legally certified compliance |
| Repository base | `9d94a1a3efb7b8ac05947c9bccef4322b79a8dac` on `main` |

Syed Ahmed accepted the integrated SP-008 data/access outcome on 14 September 2026 with one explicit constraint: in-scope data must stay in Australia while authorized users may access the service worldwide. This decision integrates the accepted SP-001 market assumptions, SP-037 authorization/lifecycle rules and SP-084 domain/compatibility contracts.

## 1. Accepted access matrix

The server applies the accepted SP-037 authorization tuple to every protected operation. A caller's role label, client state, hidden control, billing record, invitation, cached claim or supplied context identifier is not authority.

| Actor/context | Minimum permitted scope | Explicit exclusions |
|---|---|---|
| Player/child device | Assigned or permitted self-directed practice, immediate recording stop, reflection and own permitted progress | Adult administration, other-player data, staff/billing functions and authority to grant consent |
| Adult player | Own household/player context, consent, media and deliberate sharing | Other households/clubs except through an explicit projection or grant |
| Parent/guardian | Verified household and authorized children; profiles, plans, schedules, consent, media and deliberate sharing | Club-wide roster/staff authority, unrelated households and automatic coach authority |
| Club administrator | One selected club's settings, staff, roster enrollment, schedules, publishing permissions, seats and reporting | Household control, guardianship, recording consent and automatic media access |
| Assigned coach | Exact club/team/player or family assignment; scoped plans, attendance, assessments and structured feedback | Unassigned players, guardianship, billing, publishing and private media without a grant |
| Platform/support staff | Named operational capability and purpose, with fresh assurance and audit | Routine browsing of household detail or private media; hierarchy level alone grants nothing |
| Service job/agent | One named machine capability, context/resource set, purpose and time window | Human-role inheritance, unrestricted tenant selection, consent decisions, media browse and self-approval |

Every private resource retains one canonical owner context. Cross-context behavior uses an immutable, versioned, purpose-bound projection or grant and reauthorizes all current dependencies.

## 2. Limited enrollment projections

The accepted club-visible enrollment/assignment projection is limited to the fields necessary for the named club purpose:

- opaque player/member projection identifier and current generation;
- age band or eligibility result only where required for assignment/suitability;
- exact club/team membership and assignment identifiers/statuses;
- assignment identifier, completion state/time, attendance where applicable, and specifically approved assessment fields;
- current consent/guardian eligibility result where required, without exposing underlying household evidence; and
- lifecycle state required to stop access after withdrawal, departure, dispute, adulthood transition or deletion.

The projection excludes household history, unrelated club memberships, raw guardian evidence, detailed birth date unless strictly required, private practice history, recordings/media, billing-provider identifiers, unrestricted notes and unrelated assessments. A recording requires its own recipient/resource/purpose/time-bound media grant.

## 3. Binding Australian data-residency requirement

### 3.1 In-scope data

The following server-side data must be stored, backed up, logged, cached, indexed, queued, analyzed and processed only in Australian regions:

- account, identity, guardian, player, household, club, membership and enrollment data;
- plans, schedules, attendance, practice, progress, assessment, feedback and goal data tied to a person or private context;
- recordings, thumbnails, transcripts, derived media/analysis and private sharing grants;
- consent, authorization, audit, security, support and lifecycle records;
- normalized entitlement/billing records held by SoccerAPP;
- backups, recovery copies, search indexes, event/outbox payloads, dead-letter records and telemetry containing any in-scope identifier or content; and
- derived or pseudonymized data that can reasonably be linked back to a person, household, club or private resource.

This requirement applies to production, staging, support, analytics, monitoring, recovery and disaster-recovery systems. A non-Australian failover, read replica, shared cache, log drain or support copy is not permitted for in-scope data merely because it is temporary.

### 3.2 Worldwide access

Authorized users may connect from anywhere in the world over encrypted transport. Worldwide access does not authorize a foreign server-side replica or shared cache. Data may necessarily transit to and be displayed/cached under platform controls on the authorized user's device outside Australia; the server-side authoritative copy, processing, logs and recovery copies remain in Australia.

Private/authenticated responses and media must not enter a globally distributed shared CDN cache. They require private/no-store cache controls or an Australian-resident, authorization-checking delivery path. Public, non-personal marketing assets may use a global CDN.

### 3.3 Provider gate

No provider is approved for in-scope data until its current contract, sub-processors, configured regions, logs, backups, support paths, failover behavior and deletion process demonstrate this boundary. A provider that offers only “primary data” or “primarily processed” regional placement is insufficient for the strict requirement unless every residual path is resolved.

The proposed Supabase project must use the specific Sydney region, not a broad APAC region. Supabase documents Sydney as `ap-southeast-2` and states that project-region selection controls primary project data location, while also describing data residency as a customer configuration/shared-responsibility matter: [Supabase regions](https://supabase.com/docs/guides/platform/regions) and [Supabase residency responsibility](https://supabase.com/docs/guides/security/soc-2-compliance).

Any web/API host must execute private-data functions in an approved Australian region. Global CDN behavior cannot be used for private responses because Vercel documents that CDN caches may serve content from regions worldwide: [Vercel CDN cache](https://vercel.com/docs/caching/cdn-cache). Queue, monitoring, email, billing, analytics, crash-reporting and customer-support providers receive no in-scope data until the same residency gate passes.

External app-store/payment records independently created and controlled by Apple, Google or another payment provider require a separate privacy/legal/vendor decision. SoccerAPP sends only the minimum opaque commerce reference permitted by that approved decision, never child profile or media data, and keeps its authoritative normalized entitlement ledger in Australia.

## 4. Consent and lifecycle

- Consent records bind the adult, purpose, notice version, specific data/resources, recipient where applicable, timestamp, expiry/renewal rule and withdrawal generation.
- Consent, membership, guardian relationships, projections, grants and protected resources use monotonic generations and durable tombstones.
- Withdrawal, dispute, departure, adulthood transition, deletion and club closure invalidate affected current access and queued/offline actions; old state cannot resurrect authority or data.
- Retention, recovery and deletion notices must distinguish active data, user-device copies and Australian recovery copies and must state any unavoidable external provider record separately.
- Access from another country does not change ownership, consent, authorization, retention or Australian server-side residency rules.

## 5. Billing and media separation

Billing enables only an entitlement, capacity or eligibility result for the selected context. Payment, subscription, sponsorship, seat allocation, refund or billing-support access cannot create guardianship, coaching qualification, content-publishing authority or media access.

Media access always requires current ownership/guardian authority or a separate, versioned recipient/resource/purpose/time-bound grant. Billing identifiers cannot be joined into media authorization, and ordinary billing support cannot browse private recordings.

## 6. Acceptance criteria

- **AC-SP-008-01 — Accepted for design:** sensitive records/actions are mapped to player, guardian, club administrator, coach, staff and service scopes through the accepted deny-by-default matrix.
- **AC-SP-008-02 — Accepted for design:** enrollment and assignment use the limited projection in section 2; household history and private media are excluded.
- **AC-SP-008-03 — Accepted with binding constraint:** in-scope server-side data remains in Australia while encrypted, authorized worldwide access is allowed. Consent and lifecycle behavior remains current-state, versioned and deletion-aware. Provider and legal verification remains a pre-deployment gate.
- **AC-SP-008-04 — Accepted for design:** billing/entitlement and media/guardian capability planes remain separate.

## 7. Evidence and limits

- [SP-001 launch assumptions](SP-001-launch-and-account-assumptions.md) fixes Australia/English as the first market and the guardian-to-adult transition.
- [SP-037 hierarchy and scoped capabilities](SP-037-hierarchy-and-scoped-capabilities.md) accepts the deny-by-default authorization and lifecycle baseline after adversarial design review.
- [SP-084 versioned contracts](SP-084-versioned-domain-and-api-contracts.md) accepts canonical ownership, server authority, shared fixtures, versioning and idempotency/event rules.
- [ACT-SP-037-01](../delivery/ACT-SP-037-01-actor-action-resource-matrix.md) sections 3–7 contain the detailed actor/action/resource and minimum-projection evidence.
- [ACT-SP-037-02](../delivery/ACT-SP-037-02-role-and-departure-transitions.md) contains lifecycle and billing/media negative cases.
- [ACT-SP-084-01](../delivery/ACT-SP-084-01-domain-schema-and-ownership-catalog.md) contains the domain ownership catalog and cross-context constraints.

This is an architecture and product decision, not implementation, provider-contract, legal-compliance or production evidence. No cloud project, database, storage bucket, CDN, log service, payment integration, client or residency test exists. The strict residency constraint may disqualify proposed managed services or require an Australian-hosted/self-managed alternative; feasibility and cost must be proven before vendor selection or production use.

## 8. Owner decision

Syed Ahmed accepted `ACT-SP-008-01` and `AC-SP-008-01` through `AC-SP-008-04` on 14 September 2026, explicitly requiring that in-scope server-side data stay in Australia while authorized users can access it worldwide. He authorized completion, commit and publication.

Any proposed cross-border storage, processing, logging, caching, backup, recovery, support access or sub-processor use for in-scope data requires a new explicit owner decision plus applicable privacy/legal/security review before implementation.
