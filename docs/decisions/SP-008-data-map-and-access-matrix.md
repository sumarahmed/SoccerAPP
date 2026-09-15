# SP-008 — Data map and access matrix

| Field | Recorded value |
|---|---|
| Decision version | 1.1 |
| Decision date | 14 September 2026 |
| Source issue | SP-008 |
| Acceptance criterion | AC-SP-008-01 through AC-SP-008-04 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Technical lead |
| Review status | Owner acceptance recorded; amended for a lean pilot with Sydney primary placement and global delivery permitted |
| Repository base | `9d94a1a3efb7b8ac05947c9bccef4322b79a8dac` on `main` |

Syed Ahmed accepted the integrated SP-008 data/access outcome on 14 September
2026. On 15 September 2026 he explicitly replaced its strict Australia-only
processing rule with the lean-pilot boundary in section 3: Sydney remains the
primary application-data region, while global network delivery and ordinary
managed-provider support paths are permitted. This decision integrates the
accepted SP-001 market assumptions, SP-037 authorization/lifecycle rules and
SP-084 domain/compatibility contracts.

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

## 3. Lean-pilot data-location and delivery requirement

### 3.1 In-scope data

The primary authoritative copy of the following application data is placed in
the specifically selected Supabase Sydney region for the pilot:

- account, identity, guardian, player, household, club, membership and enrollment data;
- plans, schedules, attendance, practice, progress, assessment, feedback and goal data tied to a person or private context;
- recordings, thumbnails, transcripts, derived media/analysis and private sharing grants;
- consent, authorization, audit, security, support and lifecycle records;
- normalized entitlement/billing records held by SoccerAPP;
- search indexes, event/outbox payloads and dead-letter records containing any in-scope identifier or content; and
- derived or pseudonymized data that can reasonably be linked back to a person, household, club or private resource.

Sydney placement is a product/cost choice for the pilot, not a representation
that every processor, log, support operation, network hop or provider-managed
backup remains in Australia. Global transit, CDN delivery and ordinary
provider infrastructure are permitted. Production application records must
not be deliberately relocated from the configured Sydney primary without a
new owner decision.

Development uses synthetic or adult demonstration data. The pilot has a
development environment and production environment with separate projects,
credentials and secrets; a paid standalone staging environment is deferred.

### 3.2 Worldwide access

Authorized users may connect from anywhere in the world over encrypted
transport. Vercel and other approved delivery networks may route traffic and
serve public/static content globally.

Public, non-personal content may use long-lived shared CDN caching. Personalized
API responses and private media still require current authorization and
`private` or `no-store` cache controls. That restriction prevents cross-user
disclosure; it is not an Australia-only residency restriction. Authorized
private media may transit the global delivery network.

### 3.3 Provider gate

Pilot providers are selected for minimum practical cost, basic security,
service fit and transparent data handling. They do not need to prove that every
subprocessor, support path, log or network hop remains in Australia. Their
current terms and privacy disclosures still require review before real pilot
participants are enrolled.

The proposed Supabase project must use the specific Sydney region, not a broad APAC region. Supabase documents Sydney as `ap-southeast-2` and states that project-region selection controls primary project data location, while also describing data residency as a customer configuration/shared-responsibility matter: [Supabase regions](https://supabase.com/docs/guides/platform/regions) and [Supabase residency responsibility](https://supabase.com/docs/guides/security/soc-2-compliance).

Web/API functions should use Sydney when the selected plan exposes that choice,
but global routing is permitted. Vercel documents that its CDN serves content
worldwide; Soccolo uses that network while preventing shared caching of
personalized/sensitive responses: [Vercel CDN cache](https://vercel.com/docs/caching/cdn-cache)
and [cache-control guidance](https://vercel.com/docs/caching/cache-control-headers).
Queue, monitoring, email, billing, analytics, crash-reporting and support
providers receive only the data needed for their approved purpose.

External app-store/payment records independently created and controlled by Apple, Google or another payment provider require a separate privacy/legal/vendor decision. SoccerAPP sends only the minimum opaque commerce reference permitted by that approved decision, never child profile or media data, and keeps its authoritative normalized entitlement ledger in Australia.

## 4. Consent and lifecycle

- Consent records bind the adult, purpose, notice version, specific data/resources, recipient where applicable, timestamp, expiry/renewal rule and withdrawal generation.
- Consent, membership, guardian relationships, projections, grants and protected resources use monotonic generations and durable tombstones.
- Withdrawal, dispute, departure, adulthood transition, deletion and club closure invalidate affected current access and queued/offline actions; old state cannot resurrect authority or data.
- Retention and deletion notices must distinguish active data, user-device copies and any incidental provider-held backup. The pilot must not imply that such a backup is a Soccolo recovery feature.
- Access from another country does not change ownership, consent, authorization or retention rules.

## 5. Billing and media separation

Billing enables only an entitlement, capacity or eligibility result for the selected context. Payment, subscription, sponsorship, seat allocation, refund or billing-support access cannot create guardianship, coaching qualification, content-publishing authority or media access.

Media access always requires current ownership/guardian authority or a separate, versioned recipient/resource/purpose/time-bound grant. Billing identifiers cannot be joined into media authorization, and ordinary billing support cannot browse private recordings.

## 6. Acceptance criteria

- **AC-SP-008-01 — Accepted for design:** sensitive records/actions are mapped to player, guardian, club administrator, coach, staff and service scopes through the accepted deny-by-default matrix.
- **AC-SP-008-02 — Accepted for design:** enrollment and assignment use the limited projection in section 2; household history and private media are excluded.
- **AC-SP-008-03 — Accepted as amended for the lean pilot:** the primary application-data project is placed in Sydney; encrypted worldwide access and global delivery infrastructure are permitted. Personalized/private responses remain authorization-checked and excluded from shared CDN caching. Consent and lifecycle behavior remains current-state, versioned and deletion-aware.
- **AC-SP-008-04 — Accepted for design:** billing/entitlement and media/guardian capability planes remain separate.

## 7. Evidence and limits

- [SP-001 launch assumptions](SP-001-launch-and-account-assumptions.md) fixes Australia/English as the first market and the guardian-to-adult transition.
- [SP-037 hierarchy and scoped capabilities](SP-037-hierarchy-and-scoped-capabilities.md) accepts the deny-by-default authorization and lifecycle baseline after adversarial design review.
- [SP-084 versioned contracts](SP-084-versioned-domain-and-api-contracts.md) accepts canonical ownership, server authority, shared fixtures, versioning and idempotency/event rules.
- [ACT-SP-037-01](../delivery/ACT-SP-037-01-actor-action-resource-matrix.md) sections 3–7 contain the detailed actor/action/resource and minimum-projection evidence.
- [ACT-SP-037-02](../delivery/ACT-SP-037-02-role-and-departure-transitions.md) contains lifecycle and billing/media negative cases.
- [ACT-SP-084-01](../delivery/ACT-SP-084-01-domain-schema-and-ownership-catalog.md) contains the domain ownership catalog and cross-context constraints.

This is an architecture and product decision, not implementation,
provider-contract, legal-compliance or production evidence. No cloud project,
database, storage bucket, CDN, log service, payment integration or client is
proved by this document. The pilot intentionally favors inexpensive managed
services and accepts their disclosed global delivery/support footprint.

## 8. Owner decision

Syed Ahmed accepted `ACT-SP-008-01` and `AC-SP-008-01` through
`AC-SP-008-04` on 14 September 2026 and authorized completion, commit and
publication. On 15 September 2026 he approved version 1.1 through the accepted
SP-050 lean-pilot review: Sydney primary placement remains, global delivery is
allowed and strict all-processing-in-Australia verification is no longer a
pilot gate.

A later move of the authoritative production data store away from Sydney, or a
change that weakens authorization, consent, deletion or private-response cache
isolation, requires a new versioned owner decision and the applicable review.
