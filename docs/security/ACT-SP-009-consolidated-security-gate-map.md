# ACT-SP-009 — Consolidated S01–S27 and R01–R20 gate map

| Field | Value |
|---|---|
| Finding addressed | M1 — enumeration did not preserve complete traceability |
| Version | 1.0 remediation candidate |
| Date | 16 September 2026 |
| Canonical sources | `soccer_sdlc_security_and_agent_delivery_review.md` S01–S27 and `soccer_end_to_end_security_and_gap_review.md` R01–R20 |
| Interpretation | This map may add specificity or cite a superseding accepted decision; it never narrows the canonical obligation |

Gate timing:

- **G1/design:** before accepting the affected product/security contract.
- **G2/feasibility:** before relying on the affected provider/device approach.
- **G3/pilot:** before enabling the affected capability with real participant data.
- **G5/release:** before sale, commercial operation or store submission.
- **Optional post-pilot:** capability remains absent and no promise may be made.

## S01–S27

| ID | Retained obligation | Accountable owner | Timing | Required evidence and fallback |
|---|---|---|---|---|
| S01 | Deny household/player metadata and objects by default; RLS plus server checks; viewing, billing and guardian authority remain separate | Backend/security lead | G3 | Two-household negative tests for every individual/list/bulk/RPC/view/realtime/storage path; disable affected remote route on failure |
| S02 | Define authenticated playback or brief signed links, expiry, caching/range/renewal and current membership; disclose residual link/download windows | Backend/security lead | G3 | Removed-recipient and leaked-link tests with measured residual access; local playback only until pass |
| S03 | Protect database, journals, media, thumbnails, temporary files, app previews, logs and secrets; document OS/gallery/backup behavior | Mobile/security lead | G3 | Named-device theft/switch/lifecycle/backup inspection; no private media on unverified device route |
| S04 | Child/player UI mode never grants adult authority; enforce privileged actions server-side and retain immediate Stop | Identity/backend lead | G3 | Direct API/RLS/storage denial from player credential plus Stop tests; local safe mode only on failure |
| S05 | Version purpose-specific consent; stop queued upload/share on withdrawal; verify current membership; handle family change, capacity and adulthood deliberately | Product/privacy/identity leads | G1 design; G3 runtime | Offline/reconnect, removal, dispute and adult-transition cases; block cloud/share/authority changes when uncertain |
| S06 | Delete originals, parts, thumbnails, fragments, queues, caches and controlled device copies consistently; suppression survives replay/restore | Backend/privacy lead | G3 | Delete-during-upload/offline/restore tests with no resurrection; disable sync/cloud if delete-wins is unproved |
| S07 | Never confuse database backup with media recovery; specify object scope, expiry, restore and deletion replay | Operator | Optional post-pilot under accepted SP-050/SP-063 | Pilot makes no recovery promise and requires device original; recovery cannot be advertised until metadata+object rehearsal passes |
| S08 | Reserve quota server-side; authorize finalize; validate size/type/duration; isolate decoding; clean orphans; rate and concurrency limit | Backend/security lead | G2/G3 | Concurrent/oversized/repeated/malformed/truncated/race tests; cloud upload remains disabled until pass |
| S09 | Separate dev/staging/production boundaries, scoped identities, privileged MFA, no service key in app/agent and short-lived CI where supported; accepted SP-050 may defer a paid standalone staging service but never permits production secrets/data in development or preview | Technical/operator lead | G2/G3 | Redacted inventory, permissions, secret scans and rotation/revocation exercise; no production/child data until pass |
| S10 | Treat issue/web/dependency text as untrusted; allowlist tools/destinations; exclude production footage/credentials; constrain installs | Agent workflow/security owner | G2 and every privileged run | Adversarial instruction and denial evidence; block expanded destination/tool/data scope |
| S11 | Verify webhook authenticity/freshness; use durable queue, atomic lease, idempotency, bounded retries/budgets and reconciliation | Workflow/backend owner | Before unattended G3 processing | Duplicate/crash/timeout/cancel/stale-webhook/reconciliation tests; keep unattended mutation/charges disabled |
| S12 | Bind evidence to exact commit/build; required checks/review cannot be weakened or self-approved | Technical/release owner | G2 and each release | Deliberately failing/stale-evidence negative test; no acceptance or release if enforcement unavailable without explicit recorded risk |
| S13 | Lock/review dependencies; secret/dependency scans; immutable CI action pins; Dart/mobile security coverage; safe PR execution | Technical/security lead | G2/G3 | Coverage map, reviewed exceptions and negative CI tests; no affected build/release if material scan gap remains |
| S14 | Every released drill/variant/animation has named coach review, licensed sources, exact version and withdrawal route | Coach/content owner | G1 content; before asset release | Approval tied to exact asset/version; unreleased placeholder/review asset remains non-player-release |
| S15 | Name operator/alternate, monitoring, alert severity/response, containment, restore boundary, withdrawal and mobile-update limits | Operator/founder | G1 runbook; G3 runtime | Account/custody evidence, alert/tabletop and any claimed restore rehearsal; pause affected onboarding/capability if coverage is absent |
| S16 | Verify server entitlements, replay-safe purchases, signing/publication, billing MFA, refunds and deletion/cancellation separation | Billing/release owner | G5 | Sandbox purchase/refund/restore/replay and controlled release rehearsal; commerce disabled until pass |
| S17 | Confirm actual jurisdiction/audience, SDKs/processors, consent/notices, data location and support handling | Founder/privacy adviser | G1 direction; G3 participant data; G5 repeat | Focused specialist findings on exact providers/build/notices; no child data/submission until required review |
| S18 | Scope every club/household membership, action and resource; deny cross-context operations; preserve ownership through joins/jobs/reports/storage | Backend/security lead | G3 | Two-club/two-household, multi-role/context and tampered-reference tests; disable remote admin/data route on failure |
| S19 | Separate content edit/review/publish; immutable versions; suitability/parameter bounds; withdrawal/cache rules | Content/technical leads | G3 | Draft cannot publish, invalid variant denied, removal preserves history, active session snapshot unchanged |
| S20 | Use verified expiring invites, guardian/adult enrollment, scope expiry and offboarding; club relationship never creates guardianship | Identity/privacy lead | G3 | Pending/replay/wrong-recipient/revoked-coach/departure/adulthood/closure tests; keep access pending/denied |
| S21 | Server-enforce admin portal/export with MFA/step-up, sessions, role protection, audit/support attribution and no browser service key | Web/security lead | G3 | Direct API escalation, stale role, web, export and audit tests; portal/export disabled until pass |
| S22 | Separate payment, assignment and media grants; bind recipient/resource/purpose/expiry; no routine platform video browsing | Product/privacy/technical owners | G3 | Complete without video; club cannot enable recording/upload; single-grant revocation preserves home history |
| S23 | Per-owner local namespace; protected DB/journals/tokens; restart-safe migration/outbox; deletion/withdrawal wins reconnect | Mobile/backend/security leads | G3 | Physical-device account switch, migration/restart, queue and stale replay tests; one-context/local-safe fallback |
| S24 | Authenticate billing events; durable unique intake and entitlement ledger; separate purchaser/beneficiary; sandbox/prod separation; no child data in payment metadata | Billing/backend lead | G3 sandbox; G5 commerce | Forged/duplicate/delayed/misbound/refund/restore/seat/reconciliation tests; commerce disabled |
| S25 | Reconcile real audience/store route, payment CTA, purchase controls, SDK behavior, disclosures, restore/cancel and parental experience | Store/privacy/billing owners | G5; child SDK behavior before G3 data | Complete build-bound store checklist and traffic evidence; disable noncompliant SDK/route or block submission |
| S26 | Do not overstate region or recovery; separately decide metadata/object recovery and rehearse any RPO/RTO/deletion replay | Operator/founder | Pilot superseded to no-recovery; optional post-pilot | Device original/no durability claim now; no recovery capability or claim until accepted rehearsal |
| S27 | Reserve quotas, cap spend/jobs, exclude media from tickets/telemetry, name support/incident owner and reconcile cost/entitlement | Founder/operator/billing owner | G3/G5 | Limits, alerts, receipts, monthly reconciliation and staffed-window truth; pause costly/unsafe capability on breach |

## R01–R20

| ID | Retained closure | Accountable owner | Timing | Required evidence and fallback |
|---|---|---|---|---|
| R01 | Role/action MFA and server enforcement; stronger phishing-resistant Level 0 entry retained for commercial administration | Identity/security lead | G1 design; G3 implementation; Level 0 G5 | TOTP enrollment/challenge plus API/RLS bypass tests; commercial Level 0 disabled until stronger entry passes |
| R02 | Backup-factor/enrollment-only recovery, alerts and **staff dual review** | Identity/support/security owners | G1/G3 | Lost-factor/recovery tests and two-human privileged approval; H1 remains open, so privileged recovery stays blocked |
| R03 | Restricted player credentials, sibling isolation, pairing/handoff and adult return | Mobile/backend/identity leads | G2/G3 | Paired-device and direct API tests; no server player credential until pass |
| R04 | Exact adult session, MFA recency, revocation and link budgets across routes | Identity/security leads | G2/G3 | Stale AAL2, revoked role, refresh race, expired grant and leaked-link tests; deny sensitive remote action |
| R05 | Club/guardian authority, expiring invites, no email-only merge, disputes, age correction and adulthood transition | Privacy/identity owners | G1/G3 | Human privacy decision plus implemented cases; H2 remains open, so real-child onboarding stays blocked |
| R06 | Authorize browser/direct API/RLS/storage/RPC/view/realtime and safe joins on every exposed route | Web/backend/security leads | G1 architecture; G3 runtime | Complete route register and positive/negative tests; untested route not exposed |
| R07 | Non-readable quarantine and isolated bounded validation before publication | Backend/security lead | G2/G3 | Malformed/container/size/duration/finalization tests; cloud media unreadable/disabled |
| R08 | Shared-device files/keys/WAL/temp/preview/metadata/microphone protection | Mobile/security lead | G1/G3 | Physical-device theft/switch/backup tests; no child/private media on unsupported route |
| R09 | Record-by-record purpose/retention/hold/erasure and restore/offline suppression | Privacy/backend leads | G1/G3 | Privacy acceptance and lifecycle tests; do not collect/use records lacking schedule |
| R10 | Whole-system restore boundaries if later offered, including auth/config/object consistency and deletion replay | Operator | Optional post-pilot | Accepted no-recovery message now; no durability claim without isolated rehearsal |
| R11 | Separate deletion authority, provider MFA/backup identity, rotation/failed-key drill and no routine production agent | Operator/security reviewer | G1/G3 | Custody inventory and drill; production/private participant service blocked until provisioning evidence |
| R12 | Coherent sign-in/enrollment/OTP/email/export/query/upload limits, bounded queues and cost breakers without permanent attacker lockout | Backend/operator | G3 | Measured thresholds and abuse/cost tests; expensive/public route disabled or throttled safely |
| R13 | Safe report route, restricted recipients, no accused-person disclosure, scoped suspension and qualified escalation | Safeguarding owner | G1/G3 | Named owner, workflow rehearsal and access evidence; real-child pilot remains blocked until pass |
| R14 | Complete released content/assets plus nonvisual, landscape, error, assistive-technology and outdoor evidence | Designer/coach/accessibility owner | G1 asset plan; G3 | Exact-version coach approval and named-device/assistive tests; unready variant not released |
| R15 | Minimum versions, compatible migrations/manifests, scoped emergency switches, degraded practice and old-client handling | Release/mobile/backend leads | G3/G5 | Old-client/stale queue/migration/switch tests; sensitive cloud actions fail closed |
| R16 | Named/alternate coverage, restricted audit, alerts for auth/role/grant/read/export/deletion and tabletop | Operator/security owner | G3 | Alert delivery/timing and alternate response evidence; pause onboarding/capability if coverage absent |
| R17 | Least-privilege provider roles, exceptional refund approvals, product/source mapping, subscription/account deletion and reconciliation | Billing/release owner | G5 | Sandbox purchase/refund/restore/delete/replay evidence; commerce disabled |
| R18 | First-market, safeguarding/privacy, subprocessor/DPA/incident/deletion terms, store declarations and age/consent criteria | Founder/privacy adviser | G1/G3; repeat G5 | Named specialist review of actual providers/build/materials; L1 applicability wording remains open |
| R19 | Scoped identity/recovery/support/validation estimates, actual auth-user counts, per-owner stress and dated cash runway | Founder/finance/delivery owners | G1 estimate; G5 funding | Updated estimates and stress cases; do not commit unsupported scale/spend/service promise |
| R20 | Correct specifications, direct dependency gates, stable requirement→design→test traceability and independent acceptance | Delivery owner | G1 and G5 | Validators plus independent review tied to exact revision; SP-009 remains open while H1–H3/L1 persist |

## Superseding decisions

- SP-050/SP-063 supersede mandatory pilot recovery/RPO/RTO with an explicit
  no-recovery posture; S07/S26/R10 remain satisfied only as truthful absence,
  not as implemented recovery.
- SP-011 v1.1 supersedes strict Australia-only processing and seven-day pilot
  recovery while retaining upload, quota, authorization, deletion, retention
  and fragment controls.
- No accepted decision supersedes H1, H2, H3 or L1. Their open consequences in
  the disposition record control.
