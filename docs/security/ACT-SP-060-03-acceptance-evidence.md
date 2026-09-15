# ACT-SP-060-03 — SP-060 acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-060-03` — Verify and hand off: Specify web/API sessions and media validation |
| Source | `SP-060` |
| Evidence version | 1.0 accepted |
| Evidence date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; `ACT-SP-060-01`, `-02`, `-03` and `SP-060` complete as design/specification work |
| Repository base | `bdba6724d7ad59a87cc3a482af80d0b2a07a27cf` on `main` before completion revision |
| Executor | Codex acting as QA/Security design agent |
| Accountable owner | Syed Ahmed acting as Founder/web-backend-security owner |
| Required later reviewer | Independent security reviewer for the implemented web/API/media boundary |
| Evidence scope | Documentation and synthetic contract verification only; no application, provider, RLS, Storage, worker, file or device result claimed |

## 1. Exact evidence set

| Artifact | Version / identity | SHA-256 |
|---|---|---|
| [ACT-SP-060-01 web/API session and authorization](ACT-SP-060-01-web-api-session-authorization.md) | Accepted version 1.0 | `DE4C3E9AC5B94D9CE72A5199B46F490E2CA9F38614E5118D32588BFB300828DC` |
| [ACT-SP-060-02 bounded media validation](ACT-SP-060-02-bounded-media-validation.md) | Accepted version 1.0 | `176CD1A5F982A525EA7AB3F81757526DCE24E4077B9EE80B8D37C4EF1E4B962A` |
| [SP-060 web/media security fixtures](../../contracts/sp-060/web-media-security-fixtures.json) | `sp-060-lean-web-media-v1`; contract 1.0; 36 scenarios | `0BE4DE3A1F1D483FD0571FDEF98C1DCC3751B3E19F4E2386581D0352DE67FA93` |
| [SP-060 dependency-free validator](../../tests/security/validate-sp060-contract.cjs) | Local Node validator | `9D5615C3DC49DC6E373CFC7790C6CD6E680A3A237EC1635469199287EBA941B4` |

## 2. Check actually performed

Command:

```powershell
node tests/security/validate-sp060-contract.cjs
```

Observed result:

```text
PASS: SP-060 lean web/media security contract; 36 authorization and hostile-media scenarios, cloud upload fail-closed by default.
```

The validator confirms the accepted cookie/session, MFA freshness, workspace
timeout, cache, signed-link, quarantine, upload/cleanup, media-profile and abuse
values. It also asserts expected outcomes across cross-tenant/API/RPC/realtime,
stale-role, CSRF, secret-boundary, malformed-media, group-completeness, worker,
queue and rate-control cases.

It does not issue or refresh a session, exercise an API, create an RLS policy,
upload/read/delete an object, run FFmpeg, inspect a device recording, measure a
provider limit or perform an independent security test.

## 3. Source acceptance assessment

| Criterion | Outcome | Evidence and retained limit |
|---|---|---|
| `AC-SP-060-01` — portal token contract, assurance/recency/revocation, direct API/RLS/Storage, quarantine and abuse | **PASS — design/fixture** | Server-held opaque browser session, current-state request algorithm, route matrix, non-readable quarantine, bounded validator/finalize flow and configurable pilot abuse values are explicit; runtime remains untested |
| `AC-SP-060-02` — R04/R06/R07/R12 | **PASS — design/fixture** | Each review has positive/negative synthetic cases and a retained implementation gate; no independent or provider-integrated result is claimed |

## 4. Accepted pilot decisions

1. Use a server-held adult portal session with an opaque Secure/HttpOnly cookie;
   browser JavaScript receives no provider refresh credential.
2. Keep mobile adult and restricted player/device credentials distinct from the
   portal cookie.
3. Reauthorize current role, resource, membership/guardianship, consent,
   deletion, allowance/grant and assurance state at every protected operation.
4. Preserve five-minute fresh TOTP for consequential actions; `aal2` alone is
   not action recency or resource authority.
5. Protect cookie mutations with CSRF and Origin/Referer checks; no GET mutation.
6. Apply least-privilege grants and RLS to tables, views, RPCs, realtime and
   Storage; keep service/secret clients separate and server-only.
7. Do not shared-cache authenticated, personalized or session-refreshing
   responses.
8. Private media URLs last at most five minutes and retain a disclosed residual
   access window until expiry.
9. Keep cloud recording upload disabled until the bounded private-quarantine
   validator is deployed and verified; local recording remains available.
10. Initially admit app-generated MP4/MOV with H.264 and optional AAC, targeting
    720p/approximately 30 fps and a maximum 30-minute logical session. Other
    profiles remain local-only until versioned evidence exists.
11. Finalization is server-only, current-state checked, idempotent and atomic;
    incomplete or failed single/dual groups are never partly playable.
12. Preserve 15-minute credentials, 60-minute continuous attempt, five-minute
    inactivity, byte-zero retry, one-hour cleanup and 30-day active retention.
13. Use bounded, network-isolated, low-privilege media inspection with generated
    paths and explicit protocol/container/stream/resource limits.
14. Apply the recorded account/device/household counters, bounded fair queue and
    cost circuit breaker without letting abuse lock the entire family account.
15. Do not purchase a commercial WAF, antivirus/media-scanning or transcoding
    service for the lean pilot. Reject or defer instead of bypassing validation.
16. Full-session cloud upload is not claimed on Supabase Free Storage because
    its current per-file limit is 50 MB; SP-017 must prove a viable storage path.

## 5. R04/R06/R07/R12 disposition

| Review | Design disposition |
|---|---|
| R04 — assurance, revocation and session races | Current state plus five-minute action recency; stale-role, revoked/grant-changed and signed-link residual cases included |
| R06 — exposed route/data boundary | Same authorization across individual/list/bulk/export/API/RPC/view/realtime/Storage routes; service secret is separately bounded |
| R07 — hostile media | Non-readable quarantine, allowlisted media, generated keys, bounded isolated worker, fail-closed finalization and hostile fixture classes included |
| R12 — abuse and cost | Actor/device/household limits, fair bounded queue, circuit breaker, response-byte controls and cloud-only temporary pauses included |

## 6. Retained limits and risks

1. SP-038 remains an unresolved formal input. Administration/invitation/
   attendance/publishing route fields are provisional until that family is
   accepted; this is not evidence that those journeys exist.
2. A Supabase secret/service credential bypasses RLS; compromise or a generic
   admin client could expose the complete data/storage boundary.
3. Views, security-definer functions, RPCs and realtime topics can bypass an
   otherwise correct table policy if not separately reviewed and tested.
4. A signed media URL can continue working for up to five minutes after a role,
   grant or consent change.
5. Hostile media is processed by native parser/decoder code. Pinning, patching,
   isolation and hard resource ceilings remain mandatory implementation work.
6. The initial cloud profile and byte ceiling require representative-device
   evidence; HEVC/higher-quality files may remain local-only.
7. Supabase Free Storage is unsuitable for ordinary 30-minute recordings under
   its current 50 MB per-file limit. No paid tier or alternative is selected.
8. No production recovery is accepted for the lean pilot under SP-050.
9. No independent security review of an implementation has occurred.

## 7. Acceptance outcome

Syed Ahmed reviewed and accepted the complete SP-060 family and its lean-pilot
recommendations on 15 September 2026, and authorized moving to the next family.
The family is complete as design/specification work and may be committed and
published as the isolated accepted revision.

This acceptance does not claim implemented authorization, a working portal,
secure child data, configured RLS/Storage, a media worker, cloud-upload
feasibility, representative-device evidence or production readiness.
