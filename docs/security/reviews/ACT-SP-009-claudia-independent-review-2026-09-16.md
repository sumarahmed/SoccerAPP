# ACT-SP-009 — Claudia independent adversarial design review

| Field | Value |
|---|---|
| Reviewed commit | `2a4f4001d7b1d50078c065f075db542d27f09670` |
| Received | 16 September 2026 |
| Reviewer attribution | Claudia, as supplied by the product owner |
| Original SHA-256 | `1E5B1A7027B186459638D35F9DFDBBB8D515D7D5F481C645B959A840A6F9FCEB` |
| Disposition at receipt | Revise; no real-child pilot or store authorization |

The report below is preserved verbatim from the owner-supplied attachment.
Disposition and remediation notes are maintained separately so the original
review is not rewritten.

## Preserved report

**Recommendation: revise.** SP-009 has a sound security direction, but its mapping and privacy/store decisions are not yet complete enough for design acceptance. Real-child pilot and store submission remain blocked.

Reviewed commit `2a4f4001d7b1d50078c065f075db542d27f09670`, including all ten requested predecessor decisions and their linked evidence/contracts. The checkout matched that commit. The SP-009 validator passed, but it primarily checks ID presence, uniqueness and selected wording—not control completeness or runtime security. No deployed controls, private-repository test results or provider configurations were independently verified.

**Acceptance assessment**

| Criterion | Assessment |
|---|---|
| AC-SP-009-01 | **Partial.** All S01–S27 and R01–R20 appear exactly once. Owners, gate timing and several original obligations are incompletely carried forward. |
| AC-SP-009-02 | **Pass for design coverage only.** Mobile, administrative web, direct API/database/storage and offline boundaries are represented. Enforcement remains unproved. |
| AC-SP-009-03 | **Partial.** Australia-first and child-audience direction is appropriate; recording responsibilities, authority verification and actionable store flows need correction. |
| AC-SP-009-04 | **Partial.** Many missing inputs are explicit, but some are reduced to ambiguous “later” gates or omitted from the consolidated packet. |

Below, **packet** means [ACT-SP-009-01-threat-privacy-store-review-packet.md](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-009-01-threat-privacy-store-review-packet.md).

**Critical**

None established. This is a design review; absence of a demonstrated critical vulnerability is not evidence of runtime safety.

**High**

**H1 — Privileged recovery loses the mandatory second approver.**

References: packet §4/R02; [SP-059 recovery contract §1](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-059-02-recovery-and-shared-device-handoff.md); [original security review §2, verification step](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/soccer_end_to_end_security_and_gap_review.md).

The original requirement explicitly demands a second authorized approver for platform/staff recovery. The accepted recovery contract permits review by “the founder or named identity-support operator” without retaining that distinction. Enrollment-only recovery does not resolve this: an attacker approved by one compromised or deceived operator can enroll a new factor and regain privileges.

Required correction: distinguish family recovery from privileged recovery; require two independent authorized humans for the latter, prohibit self-approval, and deny recovery while the second approver is unavailable. Restore the original mandatory phishing-resistant commercial Level 0 entry gate, which SP-059 describes merely as a later “consideration.”

**Blocks:** design acceptance; privileged real-child pilot workflows; commercial/store release with platform administration.

**H2 — “Verified guardian” lacks an operational verification standard.**

References: packet §1(1), §3/S05/S20; [authority contract §§1–4](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-061-01-authority-and-identity-transitions.md).

The first guardian uses a “verified adult account” plus attestation, but the contract does not specify what verifies adulthood or when an attestation is insufficient. The second-guardian flow primarily proves invitation possession, account control and TOTP. These authenticate accounts; they do not independently establish lawful authority over a child.

The design correctly rejects email/payment/club status alone and supports disputes. However, an apparently uncontested false claim can bypass an escalation triggered only when authority is “unclear.”

Required correction: define proportionate first- and additional-guardian checks, uncertainty triggers, restricted pending states and prohibited disclosures before verification. Distinguish product adult authorization from the young person’s privacy capacity and refusal. Preserve a safe rights/reporting route when a guardian is the concern. OAIC guidance treats capacity individually, rather than equating every under-18 person with incapacity. [OAIC capacity guidance](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-b-key-concepts)

**Blocks:** design acceptance; real-child onboarding; store release.

**H3 — Recording authority covers the selected player, not everyone captured.**

References: packet §§1, 5–6; [recording contract §§2, 7–8](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/design/ACT-SP-010-01-recording-and-local-protection-contract.md); [administration journeys §§2–4](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/design/ACT-SP-038-01-administration-journeys.md).

Full-session, dual-camera and optional audio capture can include teammates, spectators, conversations and other children. Authority over one player cannot establish permission for those people. Microphone-off and optional recording are useful controls but do not settle this responsibility.

Required correction: specify family, club and operator duties before capture, upload and external sharing; include child refusal, venue restrictions, other-person permission, unsafe/private locations and an unwanted-recording removal route. A lean pilot can prohibit group/bystander capture pending a reviewed workflow. Australian sport guidance explicitly addresses consent and removal after withdrawal. [Sport Integrity Australia guidance](https://www.sportintegrity.gov.au/dos-and-donts/taking-photos-or-videos)

**Blocks:** design acceptance of recording scope; child-recording pilot; submission containing those features. A separately approved non-recording pilot could avoid this exposure.

**H4 — Existing sharing is omitted from the social/UGC policy assessment.**

References: packet §6/Google Play; [SP-010 decision §2(10)](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/decisions/SP-010-recording-and-local-protection-contract.md); [SP-038 journeys §2/F22→F21](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/design/ACT-SP-038-01-administration-journeys.md).

The packet says safety flows are needed “if any social feature is later added.” Accepted designs already include coach media grants and branded external sharing. No public feed or unrestricted chat does not settle whether these features trigger social/UGC requirements.

Required correction: classify each actual sharing, feedback and reporting route. Determine applicable filtering, reporting, blocking, adult-management and child-safety notices; implement them or explicitly disable the affected feature in the pilot. Existing safeguarding reporting is valuable but does not demonstrate all store controls. [Google Families policy](https://support.google.com/googleplay/android-developer/answer/9893335), [Apple guidelines §1.2](https://developer.apple.com/app-store/review/guidelines/)

**Blocks:** design acceptance of sharing scope; sharing-enabled child pilot; store submission.

**Medium**

**M1 — Complete ID enumeration is mistaken for complete traceability.**

References: packet §§3–4; original [S register](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/soccer_sdlc_security_and_agent_delivery_review.md), [R register §5](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/soccer_end_to_end_security_and_gap_review.md); [validator](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/tests/security/validate-sp009-sp012-review.cjs).

Examples:

- R rows have no consistent accountable-owner or explicit gate columns.
- S09 is summarized as repository/CI controls, obscuring environment separation, privileged MFA and secret boundaries.
- S11 does not explicitly retain webhook authenticity/freshness and atomic worker leasing.
- S25 emphasizes audience declarations but omits its original payment-route, external-payment CTA and purchase-experience obligations.
- R15/R16 runtime evidence is “later,” without clearly stating that affected pilot capabilities cannot launch first.

Required correction: retain each original obligation, owner, gate, evidence requirement and any superseding decision. Explicitly distinguish **before pilot**, **before capability enablement**, **before sale/submission**, and **optional post-pilot**. Roles may remain vacant, but vacancies and consequences must be named.

**Blocks:** design acceptance; affected pilot/release gates. Missing implementation alone need not block corrected design acceptance.

**M2 — The principal SP-011 link presents superseded recovery and residency evidence.**

References: packet §2/SP-011 and §1(3); [SP-011 evidence §§3–7](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/design/ACT-SP-011-03-acceptance-evidence.md); [SP-011 decision v1.1 §§1–2](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/decisions/SP-011-cloud-consent-deletion-and-recovery-contract.md); [SP-063 runbook §1](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/operations/ACT-SP-063-02-recovery-and-compatibility-runbooks.md).

The packet links historical evidence requiring seven-day recovery and strict Australian processing. Version 1.1 explicitly supersedes both. The packet also calls the optional service “private cloud backup,” while SP-063 prohibits a backup/restoration promise.

Required correction: link the governing v1.1 decision first, label historical evidence and list superseded clauses. Review “backup/Backed up” copy against the accepted temporary-cloud-copy/no-recovery posture. No-recovery is an accepted product tradeoff; contradictory promises are the defect.

**Blocks:** design acceptance; cloud-enabled pilot and associated store claims. Building dedicated recovery remains optional later work.

**M3 — Store requirements remain principles rather than a release-verifiable contract.**

References: packet §§6–7; [retention/data-rights contract §§3–7](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-061-02-retention-and-data-rights.md).

The packet lacks explicit acceptance artifacts for:

- Apple age-rating answers versus Kids Category age bands and metadata restrictions;
- Google’s exact target-age selections and treatment of unknown-age sessions;
- SDK behavior before age/consent resolution, including prohibited identifier transmission;
- in-app account deletion and Google’s external deletion-request resource;
- privacy labels/Data safety reconciled with actual SDK, diagnostic and provider traffic.

“No advertising” does not prove that crash, analytics or authentication SDKs avoid prohibited collection.

Required correction: create a build/configuration-bound checklist with owners, exact declarations, screenshots/flows, SDK inventory and traffic evidence. Preserve the no-advertising/no-behavioural-analytics boundary. [Apple age-rating guidance](https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating), [Google target-audience guidance](https://support.google.com/googleplay/android-developer/answer/9867159), [Google deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111)

**Blocks:** design acceptance of the gate map; store submission. SDK/privacy behavior also blocks real-child data collection.

**M4 — Material provider and device conditions disappear into broad “runtime later” wording.**

References: packet §§3–5, 7; [SP-060 evidence §§4, 6](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-060-03-acceptance-evidence.md); [SP-061 retention contract §§2, 7, 9](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/security/ACT-SP-061-02-retention-and-data-rights.md).

Important retained conditions need explicit consolidated entries: unresolved full-session storage feasibility; cloud upload disabled until isolated validation is proved; actual upload-token residual access; one-hour fragment cleanup; five-minute playback-link behavior; processor backup expiry; and 30-day tombstone expiry versus seven-day full-resync.

These are not demonstrated vulnerabilities. They are unverified conditions whose omission could permit premature enablement.

Required correction: enumerate each condition, its capability-disable fallback and required evidence. Test stale clients after tombstone expiry, clock rollback, offline withdrawal/deletion, namespace switching, cached media and provider restore/recreation. Document that downloaded/exported bytes cannot be recalled.

**Blocks:** design acceptance of the consolidated gate map; affected real-child capabilities and release. Optional recovery implementation remains later.

**Low**

**L1 — Australian Code wording overstates settled applicability.**

References: packet §6/Australia-first; [SP-061 decision §4](C:/Users/Home/Documents/SoccerApp/SoccerAPP-repo/docs/decisions/SP-061-retention-guardianship-and-data-rights.md).

The packet says the Code “applies” to services likely accessed by children. Current OAIC material describes qualifying APP entities/service categories and a Code still being finalized for registration by 10 December 2026.

Required correction: distinguish existing obligations, draft/future requirements, registration and commencement; retain adviser determination of Soccolo’s and participating clubs’ positions. Recheck before onboarding and submission, not solely on a calendar date. [OAIC Code status and scope](https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code)

**Blocks:** wording correction before design acceptance; specialist applicability review before pilot/release. No implementation blocker by itself.

The accepted designs already establish useful boundaries: payment and club membership confer no media authority; player credentials are restricted; current authorization extends to RPCs/views/realtime/storage; recording is optional; deletion precedes replay; and safeguarding reports avoid automatic disclosure to the accused.

**Final disposition: revise.** Preserve those controls, correct the nine findings, and retain named independent security/privacy and safeguarding acceptance. This review does not satisfy the packet’s required human specialist sign-off or authorize real-child data or store submission.
