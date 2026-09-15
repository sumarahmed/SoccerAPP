# ACT-SP-060-01 — Web/API session and authorization contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-060-01` — Specify current web and API authorization |
| Source | `SP-060` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `bdba6724d7ad59a87cc3a482af80d0b2a07a27cf` on `main` |
| Executor | Codex acting as Security design agent |
| Accountable owner | Syed Ahmed acting as Founder/web-backend-security owner |
| Evidence scope | Written and synthetic authorization contract only; no deployed portal, API, RLS, Storage or CDN behavior tested |

## 1. Decision and boundary

The pilot uses the existing web/API/database architecture. It does not add a
paid API gateway, commercial WAF or separate authorization product. This
contract combines the accepted SP-008 access model, SP-037 scoped capability
rules, SP-050 lean hosting choices and SP-059 assurance rules.

`SP-038` is a declared predecessor but has no accepted repository artifact at
this version. Administration, invitation, attendance and publishing rows below
are therefore binding security defaults but their exact screen/field mapping is
provisional until SP-038 is accepted. This family does not claim an implemented
administration journey.

## 2. Server-mediated adult portal session

The adult web portal uses a server-held session. The browser receives an opaque
Soccolo session identifier in a cookie with these properties:

- `Secure`, `HttpOnly`, `SameSite=Lax`, `Path=/` and no `Domain` attribute;
- a `__Host-` name where the deployed framework/provider permits it;
- rotation after sign-in, verified MFA, recovery, factor change, role change
  and selected-context change; and
- invalidation on sign-out, account suspension, role revocation, recovery and
  explicit device/session revocation.

Provider access/refresh credentials remain in the server session store. They
are not returned to browser JavaScript. The server uses PKCE for the interactive
sign-in exchange and an allowlisted callback/redirect target.

Mobile authentication remains distinct. Adult mobile and restricted
player/device credentials cannot be exchanged for this portal cookie. Large
media bytes use the scoped direct-upload reservation in SP-011 rather than
passing through the web application server.

## 3. Session duration and assurance

| Scope | Accepted limit and behavior |
|---|---|
| General adult sign-in | Maximum 30 days absolute; current revocation and authorization still checked |
| Parent management workspace | Lock after 30 minutes of actual inactivity; reauthenticate after eight hours maximum |
| Staff/coach/administrator workspace | Lock after 15 minutes of actual inactivity; reauthenticate after eight hours maximum |
| Consequential SP-059 action | Verified TOTP no older than five minutes and bound to actor, session, action and target |
| Access JWT used server-side | Target maximum 15 minutes; never the only source of current role/resource authority |
| Player/device renewal | Only while the exact device grant, player, guardian policy and allowed action remain current |
| Media playback/download URL | Maximum five minutes after a current authorization check |

Background token refresh is not user activity. An `aal2` claim proves that MFA
occurred in that authentication context; it does not establish five-minute
freshness, a role, guardianship, membership, consent or media permission.

## 4. Request authorization algorithm

Every protected server route performs these checks in order:

1. authenticate the current server session or scoped bearer credential;
2. enforce account, session, device and credential revocation state;
3. resolve the canonical actor and explicitly selected context;
4. read current role/membership/guardian relationships from authoritative data;
5. resolve the requested resource, owner, tenant and current lifecycle state;
6. apply consent, deletion/suppression, entitlement and media-grant generations;
7. enforce required assurance and five-minute action recency;
8. authorize the exact operation and response fields; and
9. record a sanitized decision/receipt for consequential operations.

A role label, route name, client-supplied `householdId`/`clubId`, payment,
invitation, object key, cached claim or possession of an old URL is never
authority. Cross-context requests return a neutral denial and do not disclose
whether another family's or club's resource exists.

Cookie-authenticated state changes require an unpredictable CSRF token and an
allowlisted `Origin`/`Referer`. `GET`, `HEAD` and link prefetch never mutate
state. Redirect and mobile deep-link targets use explicit allowlists.

## 5. Direct API, database, Storage and realtime rules

- Enable RLS on every table in an exposed schema and revoke default grants
  before granting only required operations to `anon` or `authenticated`.
- Apply equivalent row/field rules to views, RPCs, bulk/list/export routes and
  realtime subscriptions. A security-definer function is exceptional, has a
  fixed safe `search_path`, minimal executable grants and an explicit review.
- Use the actor's scoped token for ordinary data operations so RLS remains a
  second authorization boundary.
- Keep the Supabase secret/service client separate from user-scoped clients.
  It is server/worker-only, accepts no generic user-selected table/path/action
  and performs its own exact authorization or job-capability check.
- Private quarantine and active-media buckets require explicit
  `storage.objects` policies. Public buckets are prohibited for recordings.
- Storage keys are generated from server-held identifiers. A display filename
  is metadata only and never becomes an executable path.
- Realtime topics and change feeds repeat current tenant/resource checks and
  terminate when membership, role or grant generation changes.

## 6. Media delivery and caching

The preferred highest-revocation route is an authorization-checking streaming
endpoint. The lean pilot may instead mint a private signed URL for at most five
minutes after checking current owner, recipient purpose, consent, deletion and
grant state. The residual access window is explicit: a previously minted URL
may work until it expires.

Authenticated, personalized and media responses use `Cache-Control: private,
no-store`. They are excluded from static generation, ISR and shared CDN caches,
including responses that set or refresh a session cookie. Range requests use
the same authorization or short-lived object capability. Playable URLs and
credentials are excluded from logs, analytics and referrers; protected pages
use `Referrer-Policy: no-referrer`.

Production web responses also require an allowlisted Content Security Policy,
`frame-ancestors 'none'`, `X-Content-Type-Options: nosniff` and HSTS after HTTPS
is confirmed across the production host.

## 7. Allowed/denied route matrix

| Actor/context | Allowed examples | Always denied or additionally gated |
|---|---|---|
| Signed-out/anonymous | Public legal/help content and neutral sign-in/recovery entry | Family, player, club, billing, media, roster and account-existence data |
| Adult at `aal1` | Own local-only practice entry and MFA enrollment/challenge | Cloud enablement, private cloud media, sharing, export, factor/guardian changes and player pairing |
| Parent at required assurance | Exact household/player management allowed by current guardianship; current private-media grant | Other households, club administration, sibling union, stale/withdrawn/deleted media |
| Adult player | Own profile, practice and permitted subscription context | Child guardianship, other players, club/staff administration |
| Restricted player/device | Own permitted plans, practice events and upload under an existing guardian policy | Adult session, siblings, billing, consent, sharing, factors, recovery, guardians or club administration |
| Coach with current assignment and MFA | Assigned plan/progress fields and expressly granted media | Global child roster, unassigned players, household/guardian/billing data and media without a current grant |
| Club administrator with MFA | Exact club roster, invitations, publishing and attendance operations eventually accepted by SP-038 | Family media by role alone, guardian decisions, unrelated clubs and platform administration |
| Platform administrator with MFA | Narrow audited support/operator operation | Generic browsing of child media/data, use without a recorded purpose, shared administrator identity |
| Scoped service job | Exact queued operation and named records | Interactive user behavior, arbitrary table/object access or expansion from a human's prior MFA |

The same result is required for individual, list, bulk, export, RPC, view,
realtime and Storage access. UI hiding is never counted as a denial control.

## 8. Completion result

`ACT-SP-060-01` passes as accepted design/specification work. Server-mediated
sessions, assurance freshness, revocation, current authorization, direct
API/RLS/Storage boundaries and cache rules are explicit. SP-038 field mapping
and all runtime/provider evidence remain unresolved and are not claimed.
