# SoccerTrainingApp — End-to-End Platform and Business Plan

## Product shape

One product serves two routes:

- **Direct family:** parent/guardian manages player profiles, purchases, recording choices and sharing.
- **Club managed:** club staff manage teams/activities/plans; coaches assign work and review only explicitly shared media.

A user may hold multiple roles. Permissions remain workspace/resource scoped.

## Planned architecture

### Mobile

Flutter/Dart application for iOS and Android. The phone owns the live training session, timers, downloaded content, camera state, local history and pending sync work.

### Local persistence

Drift/SQLite stores structured device records. Media files are stored separately and referenced through a local file catalog. Migrations must preserve history and must not silently wipe data. Sensitive temporary/WAL data needs the same protection consideration as primary records.

### Backend

Supabase PostgreSQL/Auth/storage is the planned managed backend. Domain authorization is enforced centrally. Core records include households, players, clubs, memberships, roles, plans, drills, activities, assignments, consent, media grants, entitlements, quotas, billing-source records, jobs and audit/recovery metadata.

### Web portal

Next.js/TypeScript responsive portal for parent, coach, club and platform administration. Browser clients use server-mediated/scoped access and do not receive broad service credentials.

### Media pipeline

Local save first. Optional cloud upload reserves a scoped upload, validates the object, then exposes it through authorized private access. Derivatives/thumbnails follow the same permission lifecycle. Export is performed on device where feasible and adds a brand/logo intro before footage.

### Jobs and recovery

Durable workers handle upload validation, deletion, billing reconciliation, notifications, cleanup and recovery. Jobs are idempotent, retry with bounded backoff and have explicit failed-item ownership. Recovery copies are protected separately from the primary system and restore procedures must reapply deletion/revocation state.

## Core domain boundaries

- Household/guardian authority is separate from club membership.
- Billing ownership is separate from content/media visibility.
- Published drill versions are immutable references for historical sessions.
- Coach-authored/proposed content follows draft → review → publish.
- Consent is purpose-specific rather than one global checkbox.
- Media sharing is grant-based and revocable.
- Adult transition at 18 changes control explicitly rather than silently inheriting historic guardian authority.

## Commerce model

Planned offers include family and club subscriptions. Earlier planning used illustrative values such as Family AUD 14.99/month or AUD 119.99/year and Club AUD 5/player/month or AUD 48/player/year with a 25-seat minimum, but these remain assumptions until P09/P10 validation.

Mobile purchases may use store subscriptions/RevenueCat; web/club billing may use Stripe. A central entitlement ledger reconciles purchase source and beneficiary. Refund/cancellation behavior follows the actual purchase source.

## Cost model categories

Budget planning must include engineering, UX, youth-coach review, animation, privacy advice, security verification, devices, business setup, cloud/media services, delivery tools, support and founder capacity. Supplier quotes are recorded separately from illustrative assumptions.

## Operational requirements

- Organization-owned accounts and recovery methods.
- Staging and production separation.
- Signed/versioned release artifact and configuration manifest.
- Monitoring for capture/export/upload/auth/billing/deletion failures.
- Backup and restore drills, not backup existence alone.
- Support and safeguarding coverage with genuine alternate owners.
- Current app-store/privacy declarations tied to the actual build and SDK inventory.

## Repository boundaries

Planned source areas:

- `apps/mobile/`
- `apps/web/`
- `backend/`
- `workers/`
- `contracts/`
- `content/`
- `infra/`
- `tests/`
- `docs/`

Business rules should not be duplicated inconsistently across mobile and web. Versioned contracts/fixtures are the shared source of truth.
