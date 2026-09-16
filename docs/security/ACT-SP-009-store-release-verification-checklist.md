# ACT-SP-009 — Build-bound Apple and Google release verification checklist

| Field | Value |
|---|---|
| Finding addressed | M3 — store requirements were principles rather than a release-verifiable contract |
| Version | 1.0 gate contract |
| Date | 16 September 2026 |
| Current result | Checklist defined; every release-build evidence field remains pending |
| Owners | Release owner with privacy/security and safeguarding reviewers |

This checklist is completed against an exact release commit, native build,
provider configuration and store draft. A design document cannot satisfy it.

## Common release inputs

| Required input | Evidence required | Current state / fallback |
|---|---|---|
| Exact release identity | Repository commit, Flutter/web build identifiers, iOS bundle ID/version, Android application ID/version code | Pending; no store submission |
| Audience and capability matrix | Actual ages, account modes, camera/microphone, recording, cloud, coach grants, exports, reports, purchases and disabled features | Pending; use accepted design only as draft input |
| SDK and processor inventory | Package/SDK/version, owner, purpose, data/events, destinations, child/unknown-age behavior, retention, DPA/subprocessors and removal route | Pending; no real-child collection |
| Network evidence | Captured startup, pre-age/pre-consent, child, adult, recording, upload, sharing, deletion and opt-out traffic mapped to inventory | Pending; no store submission or child data |
| Public materials | Privacy policy, age suitability/support, deletion resource, data-rights/help route and store review notes tied to the build | Pending |

## Apple checklist

| Apple verification | Required evidence | Gate |
|---|---|---|
| Age-rating questionnaire | Screenshot/export of every answer for actual content, messaging/sharing, UGC, parental controls, purchases and capability restrictions | Before submission |
| Kids Category decision | Dated owner/privacy decision against actual ages and release; if Made for Kids is selected, exact band and acknowledgement that approval locks the selection | Before submission; default is no irreversible selection without review |
| Category/metadata | Primary/secondary category, title/subtitle/keywords/screenshots and age language consistent with actual audience and features | Before submission |
| Guideline 1.2 classification | Exact disposition of private coach grants, external sharing, structured feedback and reporting; moderation/report/block controls or disabled feature evidence | Before sharing-enabled submission |
| Guideline 1.3/5.1.4 privacy | Data minimization, parental gates where applicable, privacy policy and third-party SDK/processor behavior | Before child-targeted submission/data |
| Privacy Nutrition Labels | Field-by-field reconciliation to SDK inventory, provider traffic, diagnostics, account, camera/microphone, recordings and identifiers | Before submission and every material SDK/config change |
| Account deletion | In-app initiation, authentication, subscription distinction, retained-record explanation and completion state | Before account-enabled submission |
| Review access | Safe demo account/data, feature notes and disabled-feature explanation without real child data | Before submission |

## Google Play checklist

| Google verification | Required evidence | Gate |
|---|---|---|
| Exact target-age selections | Screenshot/export of every genuine selected band; no adult-only selection to avoid Families requirements | Before submission |
| Unknown-age behavior | Neutral age/authority flow where used; no child/unknown-age data sent to ineligible SDKs before resolution | Before child/unknown-age data |
| Families Policy | Content, functionality, personal/sensitive data, camera/microphone, identifiers, social features and API/SDK compliance mapped to the build | Before submission |
| Social/sharing declaration | Exact route classification from the SP-009 sharing artifact; adult management, notices, report/revoke/block-or-withdraw evidence or disabled features | Before sharing-enabled submission |
| Data safety | Field-by-field reconciliation to actual SDK inventory and captured traffic, including collection, sharing, security and deletion | Before submission and every material change |
| Account deletion | In-app deletion and public web deletion-request resource; cancellation separated from deletion; response/receipt behavior | Before account-enabled submission |
| Content rating/IARC | Screenshot/export consistent with recording, sharing, interaction and user-supplied media behavior | Before submission |
| App access/review | Safe reviewer credentials/instructions and supported regions/devices; no production child account | Before submission |

## Acceptance record

The release owner records pass/fail/not-applicable for every row, exact artifact
links, reviewer names/dates and unresolved findings. A failed or missing row
disables the affected capability or blocks submission; it is never converted to
pass because the pilot is small or uses a free plan.

H1, H2, H3 and L1 from Claudia's review remain open and can independently block
the relevant release even when every checklist field is eventually populated.
