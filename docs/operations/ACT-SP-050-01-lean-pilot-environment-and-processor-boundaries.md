# ACT-SP-050-01 — Lean pilot environment and processor boundaries

| Field | Review value |
|---|---|
| Activity | `ACT-SP-050-01` — Map lean pilot environment and processor boundaries |
| Source | `SP-050` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `00c9a39683b832914d0e9c6a4467f5bc93751767` on `main` |
| Executor | Codex acting as Operations design agent |
| Accountable owner | Syed Ahmed acting as Founder/operator |
| Evidence scope | Intended pilot configuration only; no cloud account or runtime was inspected or changed |

## 1. Accepted pilot posture

Soccolo will keep the pilot lean and use the lowest-cost practical managed
services. The primary application-data project is configured in Sydney. Global
network routing, CDN delivery and ordinary managed-provider operations are
allowed; Soccolo does not claim that every processor, log, support path or
network hop remains in Australia.

This relaxes the earlier strict-residency rule without weakening tenant
authorization, consent, deletion, private storage or secret isolation.

## 2. Environment map

| Environment | Purpose | Data | Credentials and access | Cost posture |
|---|---|---|---|---|
| Local/development | Build and automated checks | Synthetic or consenting adult demonstration data only | Development-only secrets; no production access | Local/free tooling |
| Preview | Review web changes | Synthetic data or no backend | Preview credentials only; never production secrets | Included provider preview allowance where permitted |
| Pilot production | Real invited pilot use | Primary records and private media in the configured Sydney Supabase project | Production-only keys; least-privilege service identities | Free tier while permitted and adequate; upgrade only for terms, availability or measured limits |
| Staging | Deferred | None during the lean pilot | None | Avoid a paid duplicate environment until needed |

Development and pilot production remain separate even if both fit within free
allowances. No production database clone or youth media is copied to development
or preview.

## 3. Processor inventory and boundaries

| Service | Pilot purpose | Accepted boundary | Status |
|---|---|---|---|
| Supabase | PostgreSQL, Auth and private Storage | Select Sydney for the primary project; use private buckets and server-enforced authorization | Proposed; account/configuration unverified |
| Vercel | Public site, adult portal and web functions | Global delivery allowed; shared-cache public/static content; personalized/private responses use `private` or `no-store` | Proposed; external commercial pilot requires an eligible paid plan |
| GitHub Pages | Documentation/activity map | Public documentation only; no participant data or secrets | Existing public delivery |
| Apple/Google/RevenueCat/Stripe | Later distribution and billing | No payment integration is activated by SP-050 | Deferred to store and billing work |
| Email/push/analytics/support | Essential pilot messages and diagnostics only | Minimize identifiers; never attach private footage, tokens or full support exports | Provider selection deferred |
| AWS Melbourne | Separate media recovery | Not used in the pilot | Deferred until post-pilot recovery decision |

Supabase documents Sydney as a selectable project region. Region selection
controls primary placement but is not treated as proof of complete Australian
processing: <https://supabase.com/docs/guides/platform/regions>.

Vercel documents that its CDN serves cached content globally. That global
delivery is accepted for the pilot: <https://vercel.com/docs/caching/cdn-cache>.

## 4. Cache and private-media rules

Global delivery is allowed, but an authenticated response must never be reused
for the wrong person.

- Public marketing pages, logos, fonts, scripts and non-personal help content
  may use long-lived shared CDN caching.
- Personalized pages and APIs use `Cache-Control: private, max-age=0` or
  `no-store`, depending on sensitivity.
- Private media requires current authorization before a short-lived link or
  stream is issued. URLs, tokens and private responses are not placed in public
  caches.
- A CDN or browser cache is not an authorization database. Revocation and
  expiry remain server decisions.

These settings follow Vercel's distinction between shared public content and
personalized/sensitive responses:
<https://vercel.com/docs/caching/cache-control-headers>.

## 5. Secrets and service identities

| Identity | Minimum purpose | Explicitly cannot do |
|---|---|---|
| Web/browser client | Use the published client configuration under server/database authorization | Hold service-role, signing or administrative secrets |
| Application service | Perform named production API operations | Browse arbitrary media, change billing truth or administer provider accounts |
| Upload/finalize worker | Validate and finalize one authorized object group | Grant consent or reuse incomplete fragments |
| Cleanup worker | Delete named expired/revoked/incomplete objects | Read or distribute private media |
| Migration operator | Apply a reviewed schema migration | Run from preview builds or expose credentials in logs |
| Human provider owner | Configure billing, regions and emergency access | Share credentials through source, tickets or chat |

Production and development secrets are separate, environment-bound and absent
from Git history, build output and issue descriptions. Long-lived credentials
are avoided when the selected provider supports scoped or temporary identity.

## 6. Cheapest-plan decision

- Internal development may use Supabase Free and Vercel Hobby at zero platform
  subscription cost while it remains personal/non-commercial and within limits.
- Vercel states Hobby is for personal/non-commercial use. Before an external
  commercial pilot, use an eligible plan or another host whose terms permit the
  pilot: <https://vercel.com/pricing>.
- Supabase Free has no guaranteed automatic backups and may pause inactive
  projects. This limitation is accepted for the pilot:
  <https://supabase.com/pricing>.
- No add-on, duplicate paid staging project, PITR, cross-region copy, log drain,
  dedicated IP or premium support is purchased by default.
- Enable provider spending caps/alerts where available and require a new owner
  decision before disabling a cap or adding a paid service.

Prices and plan terms are a dated planning snapshot, not a purchase approval.

## 7. Completion result

`ACT-SP-050-01` passes as a design activity: Sydney primary placement, global
delivery, lean environment separation, private-media/cache behavior, scoped
identities, plan limits and unverified provider assumptions are explicit. It
does not claim that any provider project has been provisioned or tested.
