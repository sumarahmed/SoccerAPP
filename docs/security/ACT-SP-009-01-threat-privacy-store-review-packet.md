# ACT-SP-009-01 — Threat, privacy and store-audience review packet

| Field | Value |
|---|---|
| Activity | `ACT-SP-009-01` — Prepare review packet: Review threats, privacy, and store audience |
| Source | `SP-009` |
| Packet version | 1.1 bounded remediation candidate |
| Prepared | 16 September 2026 |
| Accountable decision | Security reviewer/privacy adviser with founder |
| Independent review | [Claudia review preserved verbatim](reviews/ACT-SP-009-claudia-independent-review-2026-09-16.md); disposition `revise` |
| Status | H4 and M1–M4 remediated in specification by owner instruction; H1, H2, H3 and L1 remain open; `ACT-SP-009-02` and `SP-009` remain open |

The exact finding-by-finding status is in the
[bounded remediation disposition](ACT-SP-009-02-claudia-findings-disposition.md).
“Remediated” means a missing classification or gate is now explicit; it does
not claim runtime, provider, store, device or specialist evidence.

## 1. Recommended decision

Approve this packet as the design and gate map for an Australia-first lean pilot,
subject to all of the following boundaries:

1. Soccolo serves players aged 5–18 plus adult guardians, coaches and operators.
   A minor never supplies the authority for recording, cloud upload, purchase,
   external sharing, free-form communication or a new club/coach relationship.
2. The pilot has no advertising, behavioural marketing, public profiles, public
   rankings, unrestricted chat, stranger discovery or routine coach access to
   private recordings.
3. Local practice remains useful when camera, microphone, temporary private cloud
   copy or sharing is declined. Recording and temporary private cloud copy remain
   optional adult choices. The cloud copy is not a backup and has no recovery promise.
4. Australian primary hosting and worldwide authenticated access are retained.
   No statement promises that every processor, support path, log or delivery edge
   is physically confined to Australia.
5. Treat the product as child-directed for privacy and safety design even if the
   final Apple category is broader than the Kids category. Do not make the
   irreversible Apple `Made for Kids` selection until the exact release build,
   metadata and age segmentation have received store/privacy review.
6. Declare every genuine target age group in Google Play. Because the product
   includes children, the release must meet the Families Policy rather than using
   a false adult-only declaration or a cosmetic age screen.
7. No real child account, video or store release is authorized until a named
   privacy/security reviewer and safeguarding owner accept the current build and
   notices. Founder acceptance can approve product direction but cannot replace
   that specialist gate.
8. Recheck the Australian Children's Online Privacy Code immediately before pilot
   onboarding and again before 10 December 2026. The OAIC states that the Code is
   to be finalised and registered by that date.

This is a product/security recommendation, not legal advice or a store approval.

## 2. Current predecessor state

| Predecessor | Repository evidence | State for SP-009 |
|---|---|---|
| SP-007 | [Accepted core-screen decision](../decisions/SP-007-core-screen-and-state-design.md) | Accepted design input; runtime/device evidence remains later |
| SP-008 | [Data map and access matrix](../decisions/SP-008-data-map-and-access-matrix.md) | Accepted design input |
| SP-010 | [Recording/local-protection evidence](../design/ACT-SP-010-01-acceptance-evidence.md) | Accepted design input |
| SP-011 | [Governing cloud lifecycle decision v1.1](../decisions/SP-011-cloud-consent-deletion-and-recovery-contract.md); [historical v1.0 evidence](../design/ACT-SP-011-03-acceptance-evidence.md) | Accepted as amended: Sydney-primary/global delivery; dedicated recovery and strict Australia-only processing superseded; upload/quota/auth/deletion/fragment controls retained |
| SP-038 | [Accepted administration-flow decision](../decisions/SP-038-administration-and-membership-flows.md) | Accepted design input; runtime authorization/browser evidence remains later |
| SP-059 | [Identity and MFA evidence](ACT-SP-059-03-acceptance-evidence.md) | Accepted design input |
| SP-060 | [Web/API and media evidence](ACT-SP-060-03-acceptance-evidence.md) | Accepted design input |
| SP-061 | [Retention and data-rights evidence](ACT-SP-061-03-acceptance-evidence.md) | Accepted design input |
| SP-062 | [Safeguarding/accessibility evidence](../design/ACT-SP-062-03-acceptance-evidence.md) | Accepted design input; qualified safeguarding review still a release gate |
| SP-063 | [Accepted operator/key/recovery decision](../decisions/SP-063-operator-key-and-recovery-runbooks.md) | Accepted pilot design/setup input; live Supabase/runtime and independent-review gates remain |

`ACT-SP-009-01` may be reviewed as a packet. `ACT-SP-009-02` and `SP-009`
must not be marked complete until the named security/privacy human decision is
resolved.

## 3. S01–S27 control, owner and gate map

The [consolidated S01–S27/R01–R20 gate map](ACT-SP-009-consolidated-security-gate-map.md)
is normative for obligation, owner, timing, evidence and capability-disable
fallback. The tables below are a compact status view and must not narrow that map.

Status meanings: **Design** means a reviewed contract exists; **Runtime** means
implementation evidence is still required; **Human** means a named accountable
specialist or operator decision remains required.

| ID | Control/reference | Accountable owner and gate | Current disposition |
|---|---|---|---|
| S01 | SP-008/SP-037 deny-by-default matrix; private SP-039 two-household RLS proof | Backend/security lead, G3 | Design fixed; first runtime policy suite passes; full API coverage remains |
| S02 | SP-011/SP-060 current authority, five-minute playback links and revocation | Identity/backend lead, G3 | Design; provider/cache measurement remains Runtime |
| S03 | SP-010/SP-047 protected local records, thumbnails and temporary-file rules | Mobile/security lead, G3 | Design; real-device inspection remains Runtime |
| S04 | SP-037/SP-059 server-side adult capability and restricted player sessions | Identity/backend lead, G3 | Design; paired-device/API bypass tests remain Runtime |
| S05 | SP-011/SP-061 versioned consent, guardianship and adulthood transitions | Product/privacy owner, G1/G3 | Design; privacy review and reconnect tests remain Human/Runtime |
| S06 | SP-011/SP-061 deletion-first suppression and no resurrection | Backend/privacy lead, G3 | Design; storage, restore and offline races remain Runtime |
| S07 | SP-011/SP-050 separate metadata/object recovery | Operator, G3 | SP-063 accepts the truthful no-recovery pilot runbook; actual post-pilot restore evidence remains later |
| S08 | SP-011/SP-060 reservation, quarantine, validation and bounded processing | Backend lead, G3 | Design; malformed/concurrent upload tests remain Runtime |
| S09 | SP-003 plus private SP-012 repository/CI boundary | Technical/operator lead, G2/G3 | Private repo and read-only CI exist; protected branch and reviewer unresolved |
| S10 | SP-003 untrusted-instruction and destination policy | Agent workflow owner, G2 | Design; later adversarial run evidence required |
| S11 | SP-084 idempotency/version contracts and later durable worker tasks | Workflow/backend owner, G3 | Contract only; crash/retry/reconciliation evidence remains Runtime |
| S12 | SP-003 evidence binding plus private current-commit checks | Technical lead, G2 | Checks pass; GitHub plan cannot enforce them on private `main` |
| S13 | Pinned GitHub Actions and secret/static guards in private repo | Technical lead, G2/G3 | Partial Runtime; app dependency locks and Dart/mobile scans do not yet exist |
| S14 | SP-005/SP-006/SP-151–153 content and review records | Coach/content owner, G1/G3 | Pilot drills reviewed; animation placeholders and release-asset gates remain explicit |
| S15 | SP-050 plus accepted SP-063 operations | Operator/founder, G1/G3 | Pilot runbooks, account/custody attestation and tabletop accepted; deployed alerts/restore and independent review remain later |
| S16 | SP-048 commerce contract and later sandbox/release activities | Billing/release owner, G5 | Design only; no production payments or store release authorized |
| S17 | SP-001/SP-050/SP-061 market/data assumptions | Founder/privacy adviser, G1/G5 | Australia-first direction fixed; specialist review and final notices remain Human |
| S18 | SP-037 scope model and private SP-039 RLS/projection proof | Backend/security lead, G3 | First two-club/two-household runtime suite passes; wider APIs remain Runtime |
| S19 | SP-037/SP-084/SP-151–153 immutable content/pathway rules | Content/technical leads, G3 | Design; SP-086/SP-156 implementation remains |
| S20 | SP-037/SP-059/SP-061 invitations, departures and guardian transitions | Identity/privacy owner, G3 | Design; runtime lifecycle coverage remains |
| S21 | SP-037/SP-059/SP-060 privileged web/API boundaries | Web/security reviewer, G3 | SP-038 design accepted; portal/API implementation remains open |
| S22 | SP-037/SP-048/SP-154 separate billing, assignment and media grants | Product/privacy/technical owners, G3 | Design; end-to-end grant/revocation tests remain Runtime |
| S23 | SP-047 and planned SP-051 local namespaces/migration/outbox work | Mobile/backend lead, G3 | Design only; real SQLite/device evidence remains Runtime |
| S24 | SP-048 and planned SP-052/SP-054 billing ledger/webhook work | Billing/backend lead, G3/G5 | Design only; provider sandbox evidence remains Runtime |
| S25 | SP-049 direction plus current Apple/Google child-audience rules | Founder/store/privacy reviewer, G1/G5 | Store declaration decision and release review remain Human |
| S26 | SP-050 cheapest-pilot hosting decision and planned SP-055 | Operator/founder, G3/G5 | No pilot recovery promise accepted; no durability claim until rehearsed |
| S27 | SP-011/SP-048/SP-050 lean cost limits and future operations | Founder/operator, G3/G5 | Pilot bounds designed; named support/incident owner and measured costs remain Human |

## 4. R01–R20 action map

| ID | Accepted or proposed control | Gate and evidence still required |
|---|---|---|
| R01 | SP-059 TOTP/assurance model | G3 identity implementation and API/RLS bypass tests |
| R02 | SP-059 lost-factor and recovery states | Named support/identity reviewers and recovery drills |
| R03 | SP-059 restricted player credentials | Paired-player, sibling-isolation and secure-handoff runtime tests |
| R04 | SP-060 freshness/revocation budgets | Stale AAL2, refresh-race, role/grant and link-expiry tests |
| R05 | SP-061 authority, dispute and adulthood rules | Privacy/identity review and implemented transition tests |
| R06 | SP-060 route contract plus first SP-039 RLS proof | Complete portal/API/RPC/view/realtime coverage |
| R07 | SP-060 quarantine and bounded validation contract | Isolated media-worker implementation and malformed-file tests |
| R08 | SP-010/SP-047 device-protection contract | Physical-device theft, switch, preview, backup and temporary-file tests |
| R09 | SP-061 record schedule and rights workflow | Privacy acceptance and implemented restore/offline suppression |
| R10 | Accepted SP-063 no-recovery/rebuild runbook | Actual post-pilot restore remains a later implementation decision |
| R11 | Accepted SP-063 key/custody runbook and owner attestation | Provider/runtime review and independent security evidence remain |
| R12 | SP-060 abuse-budget design | Measured thresholds, queue limits and cost circuit breakers |
| R13 | SP-062 safeguarding state machine | Named qualified safeguarding owner and rehearsal |
| R14 | SP-005/SP-006/SP-062 content/accessibility work | Final release assets, assistive-technology and outdoor/device evidence |
| R15 | Accepted SP-063 compatibility/emergency runbook | Deployed old-client and scoped-switch evidence remain later |
| R16 | Accepted SP-063 primary/alternate ownership and alert runbook | Runtime alert/timing and coverage evidence remain later |
| R17 | SP-048 commerce boundaries | Provider roles, refund/deletion/reconciliation sandbox evidence |
| R18 | SP-061 processor terms plus SP-063 provider-provisioning gates | Named privacy adviser and current supplier/DPA/store review remain |
| R19 | Lean-pilot scope decisions exist | Updated implementation/support estimates and measured usage remain open |
| R20 | Stable SP/ACT/AC manifests and repository validators | Open predecessors and independent acceptance must not be bypassed |

## 5. Mobile, web and API coverage

| Surface | Required boundary | Review status |
|---|---|---|
| Flutter player experience | Restricted player credential; local-first practice; immediate Stop; camera/microphone optional; no adult capability inherited from device mode | Design covered; app/device implementation absent; H3 recording-authority finding remains open |
| Adult/guardian mobile experience | Explicit player context; guardian authority; recording/upload/share/purchase behind adult authorization | Design covered; implementation absent |
| Coach/club experience | Limited enrollment/completion projection; no household authority or media access by role; structured assigned feedback only | [Sharing/feedback classification](ACT-SP-009-sharing-feedback-and-reporting-classification.md) supplied for H4; grants remain disabled pending runtime/store evidence |
| Administrative web | Server-mediated adult session, MFA/step-up, no service key/browser-wide token, attributable privileged actions | SP-038 design accepted; portal/runtime evidence absent |
| Direct API/database/storage | Canonical server scope, RLS and ownership-preserving references; direct-client negative tests; purpose-bound media grants | First SP-039 suite passes; complete endpoint/storage coverage absent |
| Offline/reconnect | Local namespace isolation; deletion/withdrawal wins; expired authority cannot silently replay | Design covered; exact disable gates and negative suites are in the [provider/device matrix](ACT-SP-009-provider-device-capability-gates.md) |

## 6. First-market and store recommendation

### Australia-first pilot

- Retain Australia as the first market and a Sydney primary data region where the
  selected service offers it.
- Provide worldwide authenticated access, but do not promise Australia-only global
  processing or delivery.
- Do not collect precise location. Do not use child data for advertising, profiling
  or behavioural analytics. Keep telemetry minimal, purpose-bound and free of media.
- Complete a current Australian privacy review before real-child onboarding. The
  OAIC says its Children's Online Privacy Code applies to online services likely to
  be accessed by children and must be finalised by 10 December 2026.

### Apple

- Implement Kids-grade privacy and parental gates now because the product genuinely
  serves children and handles names, camera/microphone data and videos.
- Do not use third-party advertising in the pilot. Avoid third-party analytics unless
  a specialist verifies the exact SDK/configuration against Apple's child-data rules.
- Defer the irreversible `Made for Kids` choice until the actual age segmentation,
  metadata and build are reviewed. Apple states that an approved Made for Kids
  selection cannot later be changed.
- Provide an accurate privacy policy describing collection, use, recipients,
  retention, withdrawal and deletion.
- Complete the [build-bound Apple/Google release checklist](ACT-SP-009-store-release-verification-checklist.md)
  against the exact build, SDK inventory, traffic and store draft.

### Google Play

- Declare every genuine target age group. Do not select adult-only merely to avoid
  Families Policy obligations.
- Apply Families Policy to children and unknown-age users, including child-suitable
  content, accurate Data safety/IARC answers, approved SDK behavior and disclosure of
  camera/microphone data.
- Keep chat, stranger discovery and public sharing out of the pilot. Existing
  local external handoff, private coach media grants, structured feedback and
  safeguarding reports are classified in the
  [sharing/feedback artifact](ACT-SP-009-sharing-feedback-and-reporting-classification.md).
  Private coach grants remain disabled until adult management, safety notice,
  report/revoke/block-or-withdraw, authorization and store evidence passes.
- Complete the [build-bound Apple/Google release checklist](ACT-SP-009-store-release-verification-checklist.md)
  against the exact build, SDK inventory, traffic, Data safety and deletion flows.

Current official references:

- [Apple App Review Guidelines — Kids and privacy](https://developer.apple.com/app-store/review/guidelines/)
- [Apple safe and age-appropriate experiences](https://developer.apple.com/kids/)
- [Apple App Store category guidance](https://developer.apple.com/app-store/categories/)
- [Google Play Families Policy](https://support.google.com/googleplay/android-developer/answer/9893335)
- [Google Play target audience declarations](https://support.google.com/googleplay/android-developer/answer/9867159)
- [OAIC Children's Online Privacy Code](https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code)

## 7. Outstanding findings and human decisions

Claudia's H4 and M1–M4 findings have bounded specification remediations linked
above. The following owner-directed findings remain preserved and unresolved:

1. **H1 — privileged recovery:** two-human approval and the stronger commercial
   Level 0 entry gate remain missing. Privileged recovery stays blocked.
2. **H2 — guardian verification:** the operational verification standard,
   uncertainty/pending states and capacity/refusal route remain missing. Real-child
   onboarding stays blocked.
3. **H3 — other people captured:** authority/removal rules for teammates,
   spectators and other people remain missing. Real-child recording/group capture
   stays blocked; H4 sharing classification does not cure H3.
4. **L1 — Australian Code wording/applicability:** Claudia's wording and
   specialist-applicability finding remains open by owner instruction.

Additional human/release inputs remain:

5. Name the accountable privacy/security reviewer and independent reviewer for
   `ACT-SP-009-02`.
6. Name a safeguarding owner before any real-child pilot.
7. Obtain a current store/privacy decision on Apple Kids Category participation,
   Google target-age selections, SDK inventory and the release privacy policy.
8. Keep real child data and store publication prohibited until those decisions are
   tied to the exact build/configuration under review.

Recommended owner response to `ACT-SP-009-02` after those inputs exist:

- **Approve** the mapped controls and Australia-first boundaries;
- **approve with release gates** the child/store recommendation;
- **do not claim runtime security certification** from design documents; and
- record every remaining Runtime/Human item in the release gate rather than silently
  marking the underlying risk closed.

## 8. Owner disposition

Syed Ahmed accepted the version 1.0 recommendations in this packet on 16 September 2026,
including the Australia-first child-safety boundary, truthful store declarations,
no advertising/behavioural analytics for the pilot, and the requirement to retain
specialist and runtime gates. This completes `ACT-SP-009-01` as preparation work.

Version 1.1 preserves Claudia's independent `revise` report and implements only
the owner-authorized H4/M1–M4 remediation. H1, H2, H3 and L1 remain findings.
The earlier preparation acceptance does not perform `ACT-SP-009-02`, resolve
those findings, authorize real-child data or authorize store release.
