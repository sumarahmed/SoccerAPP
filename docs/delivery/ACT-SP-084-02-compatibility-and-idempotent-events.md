# ACT-SP-084-02 — Compatibility and idempotent event contract

| Field | Recorded value |
|---|---|
| Artifact version | 1.0 accepted |
| Prepared | 14 September 2026 |
| Activity | `ACT-SP-084-02` — Define compatibility and idempotent events |
| Source issue | `SP-084` / Linear `SOC-89` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as Backend agent |
| Accountable owner / reviewer | Syed Ahmed acting as Backend/technical lead; role-consolidated review is disclosed |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; `502e163d64e4b8ea110a09eb4fe45649b1cf0d33` |
| Run identity | `PREP-ACT-SP-084-02-20260914-01`; attempt 1 of 2 |
| Approved path | `docs/delivery/ACT-SP-084-02-compatibility-and-idempotent-events.md` |
| Authority | Syed Ahmed's 14 September 2026 acceptance of `ACT-SP-084-02`, authorization to commit/publish and instruction to move to the next step |
| External effects | Repository documentation acceptance and publication only; no API, database, worker, client or Linear change for this activity |
| Status | Accepted by Syed Ahmed on 14 September 2026 as the completed `ACT-SP-084-02` design artifact and fixed predecessor for `ACT-SP-084-03`; not implementation evidence |

This contract completes the shared protocol rules intentionally deferred by `ACT-SP-084-01`: version negotiation, errors, timestamps, pagination, command idempotency, event identity, retry behavior and common fixtures for mobile, web and jobs. It does not implement an API or claim that any fixture has run against software.

## 1. Fixed predecessor

| Input | Exact identity | Binding effect |
|---|---|---|
| [ACT-SP-084-01 domain schema and ownership catalog](ACT-SP-084-01-domain-schema-and-ownership-catalog.md) | Version 1.0; commit `502e163d64e4b8ea110a09eb4fe45649b1cf0d33`; SHA-256 `91195D5F465A51D390250D104D79696A0357A668AD34A531AE319C4AB39DE956` | Fixes opaque typed identifiers, canonical ownership, generations, request intent, domain owners and extension seams |
| [Accepted SP-037 authorization matrix](ACT-SP-037-01-actor-action-resource-matrix.md) | Version 1.2; commit `2d7e42c` | Fixes server authorization dependencies and scoped epochs |
| [Accepted SP-037 lifecycle contract](ACT-SP-037-02-role-and-departure-transitions.md) | Version 1.2; commit `2d7e42c` | Fixes revocation convergence, invitations and anti-resurrection behavior |

## 2. Compatibility policy

1. The public logical contract uses a calendar major version such as `2026-09`; additive schema revisions use a separately returned `schemaRevision` integer.
2. A major version changes only when a client-visible field meaning, required input, state transition or invariant becomes incompatible. Removing or renaming a field, narrowing a previously valid enum or changing ownership is breaking.
3. Additive optional response fields and new ignorable event types may increase `schemaRevision` without changing the major version. Clients must ignore unknown response fields but must not silently accept unknown command fields.
4. Every request declares one exact supported major version. The server never guesses from user agent, platform or account age.
5. Mobile, web and workers share the same canonical fixtures. Platform-specific view models may differ but cannot change IDs, generations, ownership, timestamps, states or authorization meaning.
6. A released client version has a recorded support window and minimum safe server contract. Forced upgrade is allowed only for an unsupported or security-unsafe contract and returns a machine-readable upgrade error without disclosing protected data.
7. Historical resources retain the contract/version provenance required to interpret them. A migration may add a new projection but cannot rewrite the meaning of an accepted historical event.

### Compatibility response

```text
ContractMetadata {
  contractVersion,
  schemaRevision,
  minimumSupportedClientVersion?,
  serverTime,
  deprecations[]
}

DeprecationNotice {
  code,
  affectedFieldOrRoute,
  announcedAt,
  removalNotBefore,
  replacement
}
```

Deprecations are observable before removal in staging and production telemetry. No deprecation notice overrides a security withdrawal or legal/safety requirement to deny immediately.

## 3. Time contract

- All persisted instants use UTC and serialize as RFC 3339 strings with an explicit `Z`, with millisecond precision unless a domain requires finer precision.
- Calendar dates such as birth date remain date-only values and are never converted to UTC midnight.
- A local scheduled time stores `localDateTime`, IANA `timeZone`, and the resolved UTC instant. Offset alone is insufficient for future schedules.
- `createdAt`, `updatedAt`, `acceptedAt`, `effectiveAt` and server event time are server-authoritative. A client observation uses a separately named `observedAtClient` and never orders security decisions.
- Monotonic aggregate generation, not timestamp ordering, resolves competing writes. Clock skew cannot revive an older relationship, grant or resource.
- The server returns `serverTime` so clients can display drift warnings. Expiry and revocation are evaluated with server time.

## 4. Error contract

```text
Problem {
  contractVersion,
  code,
  category,
  message,
  requestId,
  retryable,
  retryAfterSeconds?,
  fieldErrors[]?,
  currentResourceRef?,
  minimumSupportedClientVersion?
}
```

| Category | Stable codes | Retry rule |
|---|---|---|
| Authentication | `authentication_required`, `assurance_required`, `session_revoked` | Reauthenticate/step up; do not blind retry |
| Authorization | `forbidden`, `context_mismatch`, `dependency_revoked` | Do not retry without a changed authoritative relationship; do not reveal resource existence |
| Validation | `invalid_request`, `invalid_field`, `unsupported_value` | Correct input; do not retry unchanged |
| Conflict | `generation_conflict`, `already_completed`, `state_transition_denied` | Fetch authoritative state or use the returned completed receipt |
| Not found | `not_found` | Same external response for absent and unauthorized private resources |
| Rate/capacity | `rate_limited`, `temporarily_unavailable` | Retry only when `retryable=true`, honoring backoff and `retryAfterSeconds` |
| Contract | `unsupported_contract`, `client_upgrade_required` | Change client contract/version; do not retry unchanged |
| Internal | `internal_error` | Bounded retry only for idempotent operations; show recoverable user state |

Messages are safe for the selected audience and contain no stack trace, SQL/storage key, policy internals, unrelated identifier or confirmation that a protected foreign resource exists. Logs may use `requestId` to reach restricted diagnostics.

## 5. Pagination and collection stability

```text
PageRequest {
  limit,
  cursor?
}

PageInfo {
  nextCursor?,
  hasMore
}
```

- Cursor pagination is mandatory for unbounded collections. Default limit is 50; maximum is 100 unless a separately reviewed export contract applies.
- A cursor is opaque, authenticated, expires within 15 minutes, and binds contract version, selected context, principal/session, purpose, query/filter digest, sort definition and the collection snapshot boundary.
- Default ordering is deterministic: domain sort key followed by opaque ID as a tie-breaker.
- Cursor use reauthorizes current dependencies. Revocation, context change or query modification invalidates it rather than returning stale data.
- Items created after the snapshot boundary are not inserted into later pages. Deleted/revoked items disappear; the client may receive fewer items and must not infer their identity.
- Counts are separate governed projections; a page response does not promise a precise total that could leak protected membership.

## 6. Command idempotency and operation receipts

Every externally retried mutation carries an `operationId` generated once by the initiating client or trusted adapter and stable across retries.

```text
OperationReceipt {
  operationId,
  principalId,
  selectedContextId,
  commandType,
  normalizedPayloadDigest,
  status: accepted | processing | succeeded | failed_terminal,
  targetResourceRef?,
  problem?,
  acceptedAt,
  completedAt?
}
```

The server atomically records the operation receipt and the first durable domain effect. The idempotency scope is `(principalId, selectedContextId, commandType, operationId)`.

- Same scope, operation ID and payload digest returns the existing receipt and never repeats the domain effect.
- Same scope and operation ID with a different payload returns `generation_conflict`/`invalid_request`; it never overwrites the original intent.
- A completed terminal failure remains stable unless a new operation ID expresses new intent.
- Receipts remain available for at least the maximum offline/retry window plus the applicable financial, audit or safety retention requirement.
- Provider events preserve the provider's immutable event ID in a provider-specific namespace; client operation IDs cannot collide with provider IDs.
- Side effects such as notification, entitlement change, media job or export are driven from a transactional outbox and are themselves deduplicated by stable effect IDs.

Reads need no operation ID. Non-idempotent convenience endpoints are prohibited for payment, membership, guardian, media grant, deletion, publication and other consequential changes.

## 7. Event envelope and ordering

```text
DomainEvent<T> {
  eventId,
  eventType,
  eventVersion,
  aggregate: ResourceRef,
  aggregateSequence,
  canonicalOwnerContextId,
  dependencyVersions[],
  occurredAt,
  recordedAt,
  causationOperationId?,
  correlationId,
  producer,
  purpose,
  payload: T
}
```

- `eventId` is globally unique and immutable. Consumers deduplicate it durably.
- `aggregateSequence` increases by one for each accepted event of one aggregate; consumers reject or park gaps and ignore already-applied sequences.
- Cross-aggregate global ordering is not promised. Work requiring multiple aggregates uses an explicit process/saga with compensating or terminal states, not timestamp assumptions.
- `occurredAt` describes the domain occurrence; `recordedAt` is server persistence time. Security decisions use current authoritative state/generation, never an old event payload.
- Event payloads contain the minimum data required by the named consumer/purpose. Notifications carry references and generic presentation text, not private media or child detail.
- Event schemas are immutable per `eventType`/`eventVersion`. Consumers must explicitly register supported versions; unknown consequential events go to a visible failure route rather than being acknowledged and discarded.
- Reprocessing an event repeats no external effect because each consumer records `(consumer, eventId, effectId)` before or atomically with its effect.

## 8. Retry, offline and job behavior

| Situation | Required behavior |
|---|---|
| Network timeout after command submission | Query receipt using the same operation ID, then retry the identical command only if needed |
| Retryable server failure | Exponential backoff with jitter, bounded attempts and visible recoverable state |
| Terminal validation/auth failure | Stop retrying; retain user intent locally with safe correction/re-authentication route |
| Offline queued command | Preserve original operation ID and payload digest; refresh identity/permissions and reauthorize at reconnect/execution |
| Out-of-order aggregate event | Park until the missing sequence arrives or reconciliation fetches authoritative state |
| Revoked/deleted dependency | Fail the queued command with `dependency_revoked`; tombstone/generation wins |
| Worker lease expires | Another worker may resume using the same job/effect IDs; completed effects are not repeated |
| Poison/unsupported event | Bounded retries, then restricted dead-letter record with owner, reason and replay procedure |
| Partial multi-step process | Persist process state and compensation/repair action; never report success from one completed step |

Retry policies have a named owner, maximum attempts, maximum elapsed time and alert threshold. A dead-letter queue is not silent completion and stores no reusable credentials.

## 9. Canonical cross-client fixtures

`ACT-SP-084-03` must bind actual fixture files. This activity fixes their required logical coverage:

| Fixture | Required assertions |
|---|---|
| `contract-version-additive` | Mobile/web/worker ignore a new optional response field while preserving known values |
| `contract-version-breaking` | Unsupported major returns `unsupported_contract`; unsafe old client returns `client_upgrade_required` |
| `timestamp-dst-boundary` | Sydney schedule retains local intent across DST and resolves one explicit UTC instant |
| `private-not-found` | Absent and unauthorized foreign resource produce indistinguishable external problems |
| `cursor-context-revoked` | Cursor cannot continue after session/context/dependency revocation |
| `operation-retry-identical` | Same ID/digest yields one resource/effect and the same receipt |
| `operation-reuse-different-payload` | Same ID with changed payload is rejected without mutation |
| `offline-delete-wins` | Old queued update cannot recreate a tombstoned resource |
| `event-duplicate` | One consumer effect after repeated delivery |
| `event-gap-and-reorder` | Gap is parked/reconciled; later sequence is not silently applied first |
| `worker-lease-loss` | Replacement worker completes once using stable effect identity |
| `multi-owner-collection` | Mixed-owner search/list/export never emits a foreign resource or count leak |

Fixtures contain synthetic identifiers and no real child, household, media, credential or provider data.

## 10. Owner decisions requested

| ID | Decision | Proposed disposition |
|---|---|---|
| `OD-084-07` | Contract version form | Accepted: calendar major (`YYYY-MM`) plus additive integer schema revision |
| `OD-084-08` | Timestamp rules | Accepted: UTC RFC 3339 instants; date-only birthdays; IANA timezone plus resolved instant for schedules |
| `OD-084-09` | Error privacy | Accepted: stable problem codes; private not-found and forbidden existence are externally indistinguishable |
| `OD-084-10` | Pagination | Accepted: authenticated 15-minute snapshot cursor bound to principal/session/context/purpose/query |
| `OD-084-11` | Idempotency | Accepted: stable operation ID plus normalized payload digest and durable receipt for every consequential mutation |
| `OD-084-12` | Event ordering | Accepted: global event ID, per-aggregate sequence, no global order assumption and durable consumer/effect deduplication |
| `OD-084-13` | Fixture baseline | Accepted: the twelve synthetic common fixtures in section 9 are binding inputs for `ACT-SP-084-03` |

## 11. Completion and handoff

- [x] Version negotiation and deprecation behavior are proposed.
- [x] Error, timestamp and pagination contracts are explicit.
- [x] Consequential commands have stable idempotency scope and receipts.
- [x] Events have identity, versions, per-aggregate ordering and consumer-effect deduplication.
- [x] Offline, worker, retry and dead-letter behavior remain visible and bounded.
- [x] Mobile, web and job fixture requirements are shared and synthetic.
- [x] Syed Ahmed reviewed and accepted `OD-084-07` through `OD-084-13` on 14 September 2026.
- [x] Version 1.0 is the fixed predecessor for `ACT-SP-084-03`.

Handoff status: `ACT-SP-084-02` is complete and accepted. `ACT-SP-084-03` must bind executable synthetic fixtures to these compatibility, timestamp, error, cursor, idempotency, event-ordering and retry contracts while preserving the accepted `ACT-SP-084-01` domain ownership rules. No endpoint, migration, client or worker has been implemented.
