# ACT-SP-084-01 — Shared domain schema and ownership catalog

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 accepted |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-084-01` — Define shared domain schemas and ownership |
| Source issue | `SP-084` / Linear `SOC-89` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Backend agent |
| Accountable owner / reviewer | Syed Ahmed acting as Backend/technical lead; role-consolidated review is disclosed |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `2d7e42c48e005669a6688031f1c36c10bab19752` |
| Run identity | `PREP-ACT-SP-084-01-20260913-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-084-01-domain-schema-and-ownership-catalog.md` |
| Authority | Syed Ahmed's 13 September 2026 instruction to complete SP-037 and pick up the next dependency-ready activity |
| External effects | Local documentation draft only; no schema migration, API deployment, account, Linear mutation, commit or push for this activity |
| Status | Accepted by Syed Ahmed on 14 September 2026 as the completed `ACT-SP-084-01` design artifact and fixed predecessor for `ACT-SP-084-02`; not implementation evidence |

This catalog defines the shared domain boundaries, identifiers, ownership, references and initial request/response shapes needed before database or API implementation. It incorporates the accepted SP-037 authorization tuple rather than creating a second permission model. Detailed compatibility, error, pagination, timestamp, event and idempotency rules remain the scope of `ACT-SP-084-02`.

## 1. Fixed inputs

| Input | Exact identity | Use |
|---|---|---|
| [Soccer app foundation plan](../product/soccer_app_foundation_plan.md) | SHA-256 `AD8B3A32993BAD55030270FF6C89597C542A6C0D14862339D212A2C71AC7901F` | Product records, practice/media model and client/server split |
| [End-to-end platform and business plan](../architecture/soccer_end_to_end_platform_and_business_plan.md) | SHA-256 `006DA2F46C035BC51DD7BB0155A5A1EDE91DDF852D4DE73E99CFAC7B12B9E51B` | Backend, offline, billing, media and operational boundaries |
| [Club, parent and coach administration](../product/soccer_club_parent_and_coach_administration.md) | SHA-256 `A15F2A3FDDA14E2CA3D6D617BC1D351AA60F0D2BFE999D203D7113B8E9F39548` | Workspace, enrollment, plan and assessment ownership |
| [Accepted SP-037 authorization matrix](ACT-SP-037-01-actor-action-resource-matrix.md) | Commit `2d7e42c`; SHA-256 `C5837BD4941F3E6544FA315F7FD799551EA8B8C91ECAC4832D39F48A0CA6E7E4` | Server authorization tuple, dependency generations and capability separation |
| [Accepted SP-037 lifecycle contract](ACT-SP-037-02-role-and-departure-transitions.md) | Commit `2d7e42c`; SHA-256 `10F862E58E0EDB501003FE151F007F6E1952E37B79BE69CFEB3DDE48C8A58A97` | State transitions, revocation convergence and invitations |

## 2. Contract rules

1. External IDs are opaque strings. Clients never parse tenancy, type, time, age or authority from an ID.
2. Server-created primary IDs use UUIDv7 where the selected persistence stack supports it; interoperability accepts any validated opaque ID of the declared type.
3. Every mutable aggregate has a monotonic integer `generation`, immutable `createdAt`, server-set `updatedAt` and explicit lifecycle `status`.
4. Every private resource has one `canonicalOwnerContextId`. Cross-context use requires a versioned projection or grant; a foreign key alone never grants access.
5. References are typed. A generic unqualified `resourceId`, `userId`, `workspaceId` or caller-supplied tenant field is insufficient for authorization.
6. API inputs express intent. The server derives owner, relationship dependencies, capability assignment, policy epochs, timestamps and audit actor from authenticated state.
7. Responses disclose only fields allowed for the selected context and purpose. Internal policy, billing-provider and storage identifiers are not returned by default.
8. Deletion, withdrawal, revocation and recovery use generations and durable tombstones defined by SP-037; an old client event cannot reactivate an earlier object.
9. Schema names below are logical contracts, not approval of a database vendor, table layout, public endpoint or client trust boundary.

## 3. Shared identifiers and references

```text
type OpaqueId = string
type Generation = integer >= 1
type ContractVersion = string

type ResourceRef = {
  type: ResourceType,
  id: OpaqueId,
  generation: Generation,
  canonicalOwnerContextId: OpaqueId
}

type DependencyRef = {
  type: DependencyType,
  id: OpaqueId,
  generation: Generation,
  originContextId?: OpaqueId
}

type RequestContext = {
  contractVersion: ContractVersion,
  selectedContext: { type: ContextType, id: OpaqueId },
  requestedPurpose: PurposeCode,
  operationId?: OpaqueId
}
```

`RequestContext` is not authorization proof. The server constructs the complete SP-037 tuple using authenticated principal, current capability assignments, typed dependency versions, resource provenance and scoped policy epochs.

## 4. Domain ownership catalog

| Domain | Canonical aggregate / resources | Canonical owner | Responsible implementation owner | May reference | Must not imply |
|---|---|---|---|---|---|
| Identity | Account, credential binding, assurance event | Adult account or restricted player identity | Identity service owner | Context membership, guardian relationship | Workspace access, guardianship or qualification |
| Context and authorization | Household context, club context, capability assignment, scoped epoch | Named household/club/platform control plane | Identity/authorization owner | Identity and typed dependency refs | Resource ownership from role title |
| Guardian authority | Guardian relationship, dispute case, adult transition | Exact player relationship under identity/safeguarding authority | Identity/privacy owner | Adult identity, player identity, evidence refs | Club or coach authority |
| Club membership | Staff/player membership, team assignment, qualification ref | One club context | Club administration owner | Identity, club, team and player projection | Household control or media access |
| Household/player | Household, player profile, preferences, adult-control state | Household or adult player context | Profile/identity owner | Guardian relationships and limited club projections | Every household member seeing every player resource |
| Global content | Drill, drill version, suitability, rights, publication | Platform content domain | Content owner | Taxonomy, media demonstration refs | Private workspace or recording access |
| Plans | Plan, immutable plan version, plan item, assignment | One household or club context | Training-plan owner | Published drill versions, target projections | Editing global content or another context's plan |
| Schedule and attendance | Activity, participant projection, attendance record | Creating household/club context | Scheduling/club owner | Plan version, scoped player/coach projections | Broader roster/profile visibility |
| Practice and progress | Practice session, exercise attempt, session event, reflection | Player/household or adult context; assignment origin retained | Practice/progress owner | Plan/activity versions and disclosed completion projection | Skill assessment from participation alone |
| Assessment and feedback | Assessment, rubric version, structured feedback | Originating authorized coaching context with exact player link | Coaching/assessment owner | Activity, author, player projection, rubric | Public ranking, unrestricted free text or unrelated media |
| Media | Recording, part/chapter, media grant, deletion tombstone | Household/authorized guardian or adult player | Media/privacy owner | Practice session, grant dependencies, storage object alias | Billing, club or editor access |
| Billing and entitlement | Purchase source, subscription, entitlement, seat/sponsorship allocation | Purchaser/provider ledger and named beneficiary context | Billing owner | Opaque adult purchaser, beneficiary context | Guardianship, qualification or media access |
| Audit and lifecycle | Audit event, deletion/suppression, policy decision evidence | Protected operational control plane | Security/operations owner | Typed actor/context/resource/dependency refs | Routine support browse access |
| Sync and jobs | Operation receipt, outbox entry, job run, failure/dead-letter record | Originating aggregate/context | Platform/sync owner | Immutable command payload and dependency versions | Reusable authorization or tenant selection by worker |
| Pathways and rules | Pathway, progression rule set, rule version | Platform content/rules domain | Coaching/rules owner | Drill versions, suitability taxonomy | Automated diagnosis or unrestricted personalization |
| Goals | Goal definition, player goal selection, evidence link | Definition: platform content; selection: player/household | Product/progress owner | Pathway and progress refs | Coach ownership of a private player goal |

Each “responsible implementation owner” is a role placeholder until an actual person accepts it. This table does not provision permissions.

## 5. Core aggregate shapes

The following fields are minimum logical contracts. `...` represents domain fields governed by the owning service; it does not permit undeclared authority fields.

```text
Context {
  id, generation, type: Household | Club | Platform,
  status, displayName, jurisdiction, createdAt, updatedAt
}

Relationship {
  id, generation, type,
  principalId, subjectId, contextId,
  scope[], status, effectiveAt, expiresAt?, createdAt, updatedAt
}

CapabilityAssignment {
  id, generation, principalId, contextId,
  capabilities[], status, issuedBy, issuedAt, expiresAt?
}

PlayerProfile {
  id, generation, canonicalOwnerContextId,
  identityId?, displayProfile, ageBand, adultControlStatus,
  status, createdAt, updatedAt
}

ContentVersion {
  id, generation, contentId, version,
  immutablePayloadDigest, suitability, rights, audience, locale,
  derivedRisk, reviewStatus, publishedAt?, withdrawnAt?
}

PlanVersion {
  id, generation, planId, canonicalOwnerContextId,
  immutableItems[{contentVersionId, order, approvedParameters}],
  sourceTemplateVersionId?, status, approvalDigest?, createdAt
}

Activity {
  id, generation, canonicalOwnerContextId,
  planVersionId, scheduledWindow, participantProjectionIds[],
  assignedCoachRelationshipIds[], status
}

PracticeSession {
  id, generation, canonicalOwnerContextId,
  playerId, sourceActivityId?, planVersionId,
  deviceOriginId, startedAt, finishedAt?, activeDuration?, status
}

Assessment {
  id, generation, canonicalOwnerContextId,
  playerId, activityId, authorRelationshipId,
  rubricVersionId, structuredValues, visibleRecipientRefs[], status
}

Recording {
  id, generation, canonicalOwnerContextId,
  playerId, practiceSessionId, captureMode,
  parts[], storageAlias, consentDependencyRefs[], status, createdAt
}

MediaGrant {
  id, generation, grantVersion,
  principalId, recipientContextId, canonicalResourceOriginContextId,
  dependencyRefs[], resourceRefs[], operations[], purpose,
  authorizingRelationshipRef, issuedAt, expiresAt, status
}

Entitlement {
  id, generation, beneficiaryContextId,
  productCode, sourceProvider, sourceAccountAlias,
  effectiveAt, expiresAt?, status
}

LifecycleTombstone {
  id, aggregateType, aggregateId, finalGeneration,
  canonicalOwnerContextId, reasonCode, effectiveAt, auditRef
}
```

Birth date, legal evidence, payment-provider identifiers, storage keys and private audit payloads are separate restricted records; ordinary aggregate responses expose only derived values necessary for their purpose.

## 6. Reference and ownership invariants

| Invariant | Required enforcement |
|---|---|
| One canonical owner | Database constraints and service validation prevent changing owner context through ordinary update APIs |
| Same-context reference | Plan items, activities, sessions and internal joins require matching canonical owner unless a named projection/grant contract permits the edge |
| Exact player authority | Guardian and media operations carry the exact player relationship dependency, not household membership alone |
| Version preservation | Practice, assessment and publication history retain the exact immutable content/plan/rubric versions used |
| Minimum club projection | Club membership contains only agreed enrollment/assignment fields; it is not a foreign-key path to the household profile |
| Billing isolation | Entitlement returns eligibility/capacity only; billing identifiers cannot be joined into guardian/media authorization |
| Media isolation | Storage aliases are resolved only by the media service after current grant/dependency checks |
| Multi-club isolation | A player identity may link to multiple separately owned club projections; neither projection references the other's private data |
| Delete/revoke wins | Conditional generation checks and tombstones reject stale updates, offline replay and backup resurrection |
| No polymorphic bypass | Generic resource references are resolved through a registry that verifies declared type, owner and generation before dispatch |

## 7. Initial API boundary

```text
CommandRequest<T> {
  context: RequestContext,
  target?: ResourceRef,
  expectedGeneration?: Generation,
  payload: T
}

QueryRequest<T> {
  context: RequestContext,
  query: T
}

ResourceResponse<T> {
  contractVersion,
  resource: ResourceRef,
  data: T,
  permittedActions[]
}

CollectionResponse<T> {
  contractVersion,
  items: T[],
  page
}
```

- `permittedActions` is presentation guidance derived from the same server decision model; clients cannot send it back as authority.
- Create commands omit canonical owner fields unless the endpoint explicitly allows the server to choose among authenticated contexts.
- Update/delete commands require the current resource reference and expected generation.
- Collection queries never accept an unrestricted tenant list. The selected context is singular; cross-context dashboards call a separately governed aggregate projection.
- Media playback returns a gateway session, never a raw storage location.
- Provider webhooks, device sync and background jobs use dedicated machine contracts rather than these human-client envelopes.

`ACT-SP-084-02` must specify the error taxonomy, pagination cursor, canonical timestamps, operation receipts, idempotency behavior, event envelope, retry rules and client-version compatibility for these shapes.

## 8. Shared extension seams

| Extension | Stable shared contract | Owning domain | First dependent slices |
|---|---|---|---|
| Pathways | Versioned pathway and ordered content/rule references | Coaching/rules | SP-151, SP-152, SP-153 |
| Progression rules | Immutable inputs, precedence, result and rule-version provenance | Coaching/rules | SP-152, SP-162 |
| Assessments | Rubric version, evidence source, author scope and recipient projection | Assessment | SP-153, SP-158, SP-160 |
| Structured feedback | Submission/activity/player refs, one governed cue, status and visibility | Assessment/feedback | SP-154, SP-155, SP-161 |
| Goals | Goal definition version, private selection and evidence refs | Goals/progress | SP-156, SP-157, SP-163 |

Extensions add versioned resource types and typed dependencies; they cannot add free-form authority, bypass canonical ownership, reinterpret historical versions or expose private media implicitly.

## 9. Verification scenarios carried to ACT-SP-084-02/03

- Create two households and two clubs with overlapping multi-role identities; every cross-owner link and query is denied unless an exact projection/grant exists.
- Attempt to attach Club A's plan, team or assessment to Club B; reject before persistence.
- Attempt to attach one household's recording or player reference to another household; reject without leaking existence.
- Revoke one dependency from a request requiring membership, assignment and media grant; the complete request denies.
- Replay an older resource or grant generation; return the future versioned conflict outcome without restoring state.
- Complete a club assignment without creating a recording; completion projection remains valid and reveals no home history.
- Change published content after approval; the digest/version changes and existing history continues to resolve the old immutable version.
- Process the same device/provider operation more than once; ACT-SP-084-02 must define one durable result without duplicate domain effects.
- Query list/search/export/job paths with mixed-owner resources; every item is independently scoped.
- Confirm mobile, web and worker fixtures deserialize the same versioned logical shapes without trusting client authority fields.

These are specifications, not executed tests.

## 10. Owner decisions requested

| ID | Decision | Proposed disposition |
|---|---|---|
| `OD-084-01` | External ID contract | Accepted: opaque typed strings; UUIDv7 is the preferred internal/server-generated format where supported |
| `OD-084-02` | Ownership representation | Accepted: one canonical owner context per private resource; explicit immutable projections/grants for cross-context use |
| `OD-084-03` | Concurrency/version field | Accepted: monotonic aggregate generation plus immutable domain version where historical content must remain addressable |
| `OD-084-04` | API authority boundary | Accepted: clients express intent; server constructs SP-037 authorization dependencies and ownership |
| `OD-084-05` | Domain owners | Accepted: responsibility roles in section 4 are placeholders that must be assigned before implementation |
| `OD-084-06` | Extension seams | Accepted: pathways, rules, assessments, feedback and goals use the shared resource/dependency/version contracts in section 8 |

## 11. Completion and handoff

- [x] Priority domains and one responsible role per domain are proposed.
- [x] Shared identifiers, resource/dependency references and ownership rules are explicit.
- [x] Initial command/query/response shapes preserve server authority.
- [x] Household, club, billing and media boundaries agree with accepted SP-037.
- [x] Pathway, rules, assessments, feedback and goal extension seams are versioned and owned.
- [x] Negative ownership and version scenarios are specified without claiming execution.
- [x] Syed Ahmed reviewed and accepted `OD-084-01` through `OD-084-06` on 14 September 2026.
- [x] Version 1.0 is the fixed predecessor for `ACT-SP-084-02`.

Handoff status: `ACT-SP-084-01` is complete and accepted. `ACT-SP-084-02` must preserve these identifiers, canonical ownership rules, server-authority boundary, domain responsibilities and extension seams while defining compatibility, errors, pagination, timestamps, event identity and idempotency. No code, schema or live API has been implemented.
