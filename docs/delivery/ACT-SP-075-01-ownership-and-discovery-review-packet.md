# ACT-SP-075-01 — Ownership and discovery review packet

| Field | Recorded value |
|---|---|
| Packet version | 0.1 |
| Prepared | 11 September 2026 |
| Requested as | `CT-SP-075-01` |
| Authoritative activity | `ACT-SP-075-01` — Prepare review packet: Name owners and fund discovery work |
| Source issue | `SP-075` |
| Phase / gate | P00 — Definition and accountable ownership / G0 |
| Repository / branch | `SoccerAPP-repo` / `main` |
| Base commit | `40c22c7e90bcf42950280b415039ce97020d132f` |
| Prepared by | Codex acting as the assigned delivery / analysis agent |
| Human decision owner | Unassigned Delivery owner; founder must confirm the actual decision-maker |
| Status | Preparation completed; human decision recorded separately on 11 September 2026 |

This packet prepared the human decision required by `ACT-SP-075-02`. It did not itself appoint people, accept a vacancy, approve spend, authorize supplier contact, create an account, obtain a quote, or supply a second approver. The subsequent outcome is recorded in [SP-075 decision version 1.0](../decisions/SP-075-ownership-and-discovery-authority.md); that dated human artifact, rather than this preparation packet, is the source acceptance evidence.

## 1. Decision requested

The founder must record one dated decision that:

1. names an accountable person and a backup for product, technology, coaching, safeguarding, privacy, operations and release, or explicitly accepts a vacancy and its delivery consequence;
2. records who may contact each external party, what may be disclosed, and whether the authority is inquiry-only, quote-only or contracting authority;
3. records the discovery budget currency, total cap, per-work-package limits, approval thresholds, expiry and who can commit funds; and
4. identifies every genuinely independent or alternate reviewer required for privileged recovery, safeguarding escalation, operational recovery and release/security acceptance. A title, agent, shared account or blank signature line is not a second approver.

The recommended sequence is **quote-only discovery authorization first**, with no paid commitment, followed by a separate funding decision against comparable scoped responses. The founder may instead approve capped discovery work now, but must fill every monetary and authority field before anyone incurs a charge.

## 2. Accepted predecessor and fixed boundaries

The required predecessor is satisfied by [SP-001 decision version 1.0](../decisions/SP-001-launch-and-account-assumptions.md), accepted by Syed Ahmed as Founder/product owner on 10 September 2026.

The following inputs are fixed for this discovery packet unless SP-001 is formally revised:

- first market Australia and first language English;
- a 20-participant representation target across ages 5–7, 8–10, 11–13, 14–17 and age 18, without claiming recruitment;
- solo drills by default, adult-nearby support for ages 5–7 and explicit labeling of drills needing help;
- guardian-controlled accounts below 18 and a deliberate access decision by the player at 18; and
- grouped exercise clips plus full-session recording with chapters, selected before recording.

No participant recruitment, coaching suitability, safeguarding process, privacy/legal compliance, device support, implementation feasibility, commercial price, cloud allowance, retention period or launch readiness was accepted by SP-001.

## 3. Exact source ledger

| Source | Version / date represented | Exact version evidence | Use in this packet |
|---|---|---|---|
| [SP-001 launch and account assumptions](../decisions/SP-001-launch-and-account-assumptions.md) | Decision 1.0; accepted 10 September 2026 | SHA-256 `0352189d9137f8a9abad48a4b5e88500ca304d270d28e5eedd874bc3be9160d7` | Accepted predecessor and fixed market/audience/recording inputs |
| [SDLC, security and agent delivery review](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_sdlc_security_and_agent_delivery_review.md) | Prepared 5 September 2026; extended 6 September 2026 | SHA-256 `6178d7a054af8e4220d2ad99ff0f6e3e8c389ae15e105ca2d39f3e1cff3f38cd` | Required roles, gates, access limits, release/operations duties and planning figures |
| [End-to-end security and gap review](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_end_to_end_security_and_gap_review.md) | Review edition 6 September 2026 | SHA-256 `6c108250716b9d4f0a57d927d55e3486969592623bf202c70fc06114fcd21728` | R01–R20 owner gaps, specialist scope, operations coverage and estimate gaps |
| [Agent execution playbook](soccer_agent_execution_playbook.md) | Updated 8 September 2026 | Canonical SHA-256 `44a7dd406ceda4769fa0759d4865f3858e6db22db508298726fe6e91b0813015` | Ready/run/evidence boundaries and prohibition on invented approval or quotes |
| [Human action playbook](soccer_human_action_playbook.md) | Dated 6 September 2026 | Canonical SHA-256 `a0dde6fdcb94a730b1ef984044ebbf24e5f41b82ffa7158cb59b9cc626274342` | Role responsibilities, backup requirements and the H01 decision return |
| [P00 activity card](activities/P00.md#act-sp-075-01--prepare-review-packet-name-owners-and-fund-discovery-work) | Synchronized 8 September 2026 | SHA-256 `c6c4e98cc54eb9a3a605e6134c67480fe34751e3fbb90428682129072cef6dbb` | Activity goal, dependencies, deliverable and completion checks |
| Activity manifest record | Package `20260908` | Whole-manifest SHA-256 `d72bbb9bc084c7d0e9560a9565b60efef689680654a65e10045f1698578b810f`; record `ACT-SP-075-01` | Machine-recorded role, criteria, write lane and unresolved run fields |

The two required baseline hashes agree with [the historical source manifest](source_manifest.json). The planning package remains frozen; this execution artifact does not rewrite its original Backlog state.

## 4. Accountable owner and backup register

An appointment counts only when the named person has accepted the described scope. “Founder,” “TBD,” a company name, an agent or an inbox is not a person. An explicit vacancy is allowed for `AC-SP-075-01`, but work that depends on the vacant role remains blocked.

| Required role | Minimum accountable scope | Candidate / evidence available | Human decision still required | Backup requirement and independence |
|---|---|---|---|---|
| Product | Scope, audience, pilot outcomes, priority, budget and business trade-offs | Syed Ahmed is named Founder/product owner in accepted SP-001 v1.0 | Confirm Syed Ahmed for SP-075, name another person, or accept a vacancy; record accepted scope and availability | Name a decision substitute where appropriate; the substitute cannot silently change SP-001 |
| Technology | Architecture, code/security implementation, migrations, supported-device evidence and technical gate recommendations | No person named | Name and obtain acceptance, or accept vacancy; state whether identity, mobile, backend and web leads report to this role | Name an engineer/operator able to contain incidents; independent security acceptance cannot be self-approved |
| Coaching | Drill/variant suitability, parameters, work/rest, assessment and actual animation/content approval | No qualified person or qualification scope recorded | Name a qualified youth coach/content owner or accept vacancy; separately cover goalkeeper input where required | Name an appropriate specialist replacement; a general backup is not goalkeeper approval |
| Safeguarding | Recipient rules, safe reporting, restricted handling, escalation and pilot procedures | No person named | Name and obtain acceptance, or accept vacancy; record jurisdiction and escalation limits | A real alternate must handle a report concerning the primary handler |
| Privacy | Data flows, consent/assent, guardian disputes, age-18 transition, retention, processors/regions and launch-market findings | No person or adviser named | Name the accountable privacy owner and any external adviser, or accept vacancy; distinguish advice from formal acceptance | Record escalation and independent review where required; no fictional qualification or certification |
| Operations | Deployments, alerts, credentials, backups, restore, deletion/revocation replay, incident coverage and cost controls | No person named | Name an operator/recovery custodian or accept vacancy; define staffed windows and response promise | Name a genuine alternate with tested access; separate ordinary operation from backup-deletion authority |
| Release | Go/no-go, signing/publication custody, exact build/config/content acceptance, rollout and rollback/forward-fix limits | No person named | Name the release owner or accept vacancy; record who may hold store/signing authority | Name an authorized substitute and avoid shared accounts; builder/agent cannot approve release |

### Supporting roles to resolve with the minimum seven

| Supporting role | Why it must be assigned or explicitly covered |
|---|---|
| Delivery owner | Owns the board, dependencies, task contracts, evidence routing and suspension of dispatch. The activity metadata currently contains only the role label, not a person. |
| Identity / support lead | Required for MFA enrollment, lost-factor recovery, role changes and attributable support; privileged recovery needs real dual review. |
| Animator / designer | Owns licensed source assets, editable UI, paired theme states, accessibility and recoverable source workflow. |
| Research / club coordinator | Owns approved recruitment channels, consent-aware pilot observation and separation of research records. |
| Billing / accounting adviser | Owns tax/terms, product-source mapping, invoices, refunds, costs and a dated cash-runway model. |
| Independent security reviewer | Reviews the exact implemented boundary and retest evidence; cannot be the sole approver of their own implementation. |

### Role-consolidation rules

- One person may hold multiple roles during discovery if each scope, capacity and conflict is recorded.
- Consolidation does not remove the need for a genuine alternate for safeguarding reports, recovery access and operational continuity.
- The same person may prepare and decide ordinary product work, but may not manufacture “independence” for privileged recovery or required security/release review.
- Every accepted vacancy must name the blocked work, next recruiting/contracting action, owner of that action and review date.

## 5. Spending and external-contact authority

### Proposed authority register for the human decision

| Action | Current position | Person allowed to act | Required boundary before action |
|---|---|---|---|
| Prepare or revise repository documents using existing non-sensitive sources | Authorized for this activity by the user's 11 September 2026 instruction | Assigned delivery / analysis agent | `docs/delivery/**`; no external side effect |
| Contact a coach, privacy adviser, safeguarding specialist, engineer, designer, security reviewer, supplier or pilot organization | **Not authorized** | Unassigned | Name sender and recipient category; approve the exact brief, disclosure class and contact channel |
| Request a non-binding estimate or quote | **Not authorized** | Unassigned | State inquiry/quote-only authority, number of suppliers, deadline and whether any NDA/DPA is required |
| Accept a quote, sign terms, create a paid account or incur any cost | **Not authorized** | Unassigned | Currency, tax treatment, total cap, work-package cap, approval threshold, expiry and commitment owner |
| Share child/player data, recordings, identities, recruitment lists or credentials | **Prohibited for discovery outreach** | None under this packet | Use sanitized requirements and synthetic or consenting-adult material; any later exception requires its own lawful, scoped authority |
| Recruit or contact pilot participants | **Not authorized** | Unassigned | Approved recruitment channel, consent/assent process, safeguarding/privacy review and separate research record |
| Change release protections, publish, deploy to production, submit to a store or perform real charges/refunds | **Not authorized** | Unassigned | Dedicated downstream gate and exact production/release authority |

### Budget fields the founder must complete

| Budget field | Human entry |
|---|---|
| Currency and tax basis | `____________________` |
| Quote-only stage cap | `____________________` (`0` means no paid discovery, not unlimited work) |
| Paid discovery total cap | `____________________` |
| Per-work-package caps | `____________________` |
| Maximum single commitment without renewed approval | `____________________` |
| Agent/CI/tool allowance included or separate | `____________________` |
| Devices, travel, checks and pass-through costs included or separate | `____________________` |
| Commitment owner | `____________________` |
| Invoice/payment verifier | `____________________` |
| Authority effective date and expiry/review trigger | `____________________` |
| Stop condition when cap or scope is reached | `____________________` |

If a field is left blank, the authority for that item remains zero/none; it must not be interpreted as unlimited.

## 6. Scoped discovery estimate briefs

No request below has been sent and no response has been received. The person named for external-contact authority should issue only the founder-approved briefs.

| Brief | Specialist / owner | Required priced deliverables | Boundaries and estimate trigger |
|---|---|---|---|
| DE-01 Product and pilot discovery | Product owner plus research/club coordinator | Measurable pilot outcomes; feasibility of the five-band/20-participant representation target; recruitment-channel plan; adult/guardian consent and child-assent workflow; research instruments; de-identification and finding format | Australia/English; family and club routes; no recruitment in the estimate stage. Re-estimate if audience, market or pilot route changes |
| DE-02 Coaching and content review | Qualified youth coach/content owner, with goalkeeper input where required | Review of D01–D12 and every proposed age/ability variant; setup, equipment, assistance, safety, cues, work/rest, prerequisites, progression and assessment; review rounds for A01–A03; complete asset/variant gap list and approval-record format | Twelve is the pilot catalog, not an authoring limit. Separate coach time, goalkeeper time, corrections and later full-catalog approval |
| DE-03 Safeguarding, privacy and launch-market advice | Safeguarding owner and Australian privacy/legal adviser | Report/triage/escalation procedure and alternate route; data/actor/purpose map; guardian disputes and age-18 transition; consent/assent; retention and deletion; processors/regions/DPA terms; staff-check and notification questions; store-audience/declaration review | Advice must state jurisdiction, assumptions and qualifications. No compliance certification or final-law claim is inferred from a quote |
| DE-04 Technical architecture and device feasibility | Technical lead with mobile/backend/web/identity coverage | Interface inspection and three-point effort ranges; two recording modes with timer/demo/local save; named iOS/Android device matrix; interruption/long-capture/export checks; account/MFA/recovery and restricted-player design; web/API authorization; private media/quarantine validation; environment/CI boundaries; revised implementation estimate after G2 | Use synthetic or consenting-adult media. Separate discovery/prototype work from full build and supplier/service costs |
| DE-05 Design, accessibility and animation production | Product designer/accessibility reviewer and animator | Editable F01–F33 flow/state review in Light/Dark, portrait/landscape and failure states; youngest/teen/adult/parent/coach/club routes; A01–A03 sample production; source rights, caption/audio work and revision rounds; estimate for remaining approved variants | A generated concept is not an accepted design or rights-cleared animation. Quote source licensing and ownership separately |
| DE-06 Security verification and recovery operations | Independent security reviewer plus operator/recovery custodian | Threat/control review for S01–S27 and R01–R20; targeted mobile/web/API/storage/CI tests; media isolation and child/adult negative cases; restore/deletion replay; incident tabletops; credential rotation; alert coverage and alternate operator cost; verification-worker and audit-retention cost | Separate implementer remediation from independent retest. State environments, tools, evidence handling and retest allowance |
| DE-07 Commercial, support and release readiness | Release owner with billing/accounting and support input | Store/signing/release responsibilities; compatibility and rollout rehearsal; support/MFA-recovery/safeguarding case load; provider/security-plan costs; taxes/terms/refunds; monthly cash runway; actual identity and per-owner usage stress assumptions | No live products, charges or store submission. Separate one-off readiness work from recurring operating coverage |

### Required response format for every estimate

Each responder should provide:

- legal supplier/person name, relevant qualification and named person who will perform/review the work;
- fixed price or rate, currency, tax, estimated hours/range, pass-through costs and payment milestones;
- deliverable list mapped to the applicable `DE-*` brief and explicit exclusions;
- assumptions, dependencies, client inputs, lead time, delivery duration, availability and quote-validity date;
- number of review/correction/retest rounds included and the price basis for additional work;
- data, device, account, travel and third-party-service access required;
- confidentiality, intellectual-property/source-rights and evidence-handling terms; and
- an explicit label of **binding quote**, **non-binding estimate**, **planning assumption** or **published price observation**.

Responses that combine several workstreams must allocate cost and effort by deliverable so the founder can approve or defer them independently.

## 7. Existing figures — classification only

These figures are evidence of earlier planning, not quotes, approved spend or a current total budget:

| Figure | Classification | Decision use |
|---|---|---|
| About USD 28/month for two Linear Basic and GitHub Team seats at prices checked 5 September 2026 | Published-price planning example, excluding tax, billing terms, agent usage, CI and other services | Re-check only if those paid plans are selected; free/other routes remain possible |
| One 90-minute run and at most two attempts | Proposed agent checkpoint, not a specialist estimate or approved cost | Set an actual limit for each later assigned run |
| Earlier 12–19 week schedule | Superseded family-focused estimate | Do not use for the enlarged club/admin/security scope |
| 550 core-engineering hours, 40 security-review hours and 120 animation hours | Workbook assumptions | Replace with scoped responses; animation assumption does not prove variant coverage |
| 24-hour metadata recovery point and eight-hour recovery time | Internal feasibility targets | Price and demonstrate before turning them into a service promise |
| AUD 1,182.75 monthly revenue and negative AUD 903.16 contribution before founder compensation | Modeled scenario, not actual performance | Extend into a dated cash-runway and usage-stress model before commercial commitment |

## 8. Options for the human decision

### Ownership model

| Option | Description | Consequence |
|---|---|---|
| A — Lean internal ownership with explicit vacancies | Founder temporarily accepts product, delivery and release; every unfilled specialist role is recorded as vacant | Lowest immediate commitment, but coaching, privacy/safeguarding, technical and independent acceptance gates remain blocked until filled |
| B — Internal accountable leads plus scoped external specialists | Founder retains product/release; named internal technology/delivery/operations leads commission qualified coaching, safeguarding/privacy and independent security work | Clear accountability with limited specialist commitments; requires contact authority, budget and availability management |
| C — Fully named cross-functional discovery group | A primary and appropriate backup are confirmed for all minimum and supporting roles before discovery begins | Strongest continuity and parallel capacity; highest near-term coordination and funding demand |

### Funding model

| Option | Description | Consequence |
|---|---|---|
| 1 — Quote-only stage | Authorize named people to send approved sanitized briefs; no paid commitment until responses return | Recommended starting point while there are no actual scoped estimates |
| 2 — Capped discovery commissions | Approve selected `DE-*` work now within filled total/per-package limits | Faster work start, but only valid when scope, person, cost, terms and stop rules are concrete |
| 3 — Internal discovery only | Use named internal capacity and incur no external spend | External/specialist evidence remains missing; downstream gates that require it stay blocked |

The founder may mix options by work package, provided every authority and vacancy is explicit.

## 9. Open-decision register

| ID | Decision or missing input | Decision owner | Required record | Blocks |
|---|---|---|---|---|
| OD-01 | Confirm actual human Delivery owner and reviewer for SP-075 | Founder | Name, accepted scope, date | ACT-SP-075-02 acceptance and operational status change |
| OD-02 | Name/confirm each minimum primary owner or accept the vacancy | Founder / Delivery owner | Completed owner register with acceptance evidence | Work dependent on each role |
| OD-03 | Name appropriate backups/alternates and required independent reviewers | Each primary owner; founder accepts | Names, scope, conflict check and acknowledgment | Recovery, safeguarding escalation, security/release acceptance |
| OD-04 | Choose ownership option or a documented hybrid | Founder | Dated rationale and capacity assumptions | Discovery sequencing |
| OD-05 | Choose funding option and fill every applicable budget field | Founder / funding authority | Currency, cap, thresholds, expiry and stop rule | Any paid action |
| OD-06 | Authorize named external-contact sender(s) and approved disclosure | Founder / privacy owner where applicable | Party category, brief IDs, channel, data class and limits | Quote/estimate outreach |
| OD-07 | Select which `DE-*` briefs to issue, response deadline and comparison method | Delivery owner | Approved versions and recipients | Obtaining actual scoped estimates |
| OD-08 | Decide whether a supplier NDA/DPA, insurance, checks or rights terms are prerequisites | Privacy/safeguarding/release owners | Requirement and owner | Affected specialist engagement |
| OD-09 | Record review date for every vacancy and unissued brief | Delivery owner | Date and next action | Visibility of unresolved readiness |

## 10. Acceptance evidence checklist

### ACT-SP-075-01 completion

- [x] Every source criterion has evidence or a specifically named missing input.
- [x] Proposed values, options and historical figures are labeled; no proposal is represented as approved.
- [x] Actual specialist and owner decisions remain open for `ACT-SP-075-02`.
- [x] Required source versions and accepted predecessor evidence are identified exactly.

### SP-075 source acceptance — for the human reviewer

- [ ] `AC-SP-075-01` — Each required role has an accepted named owner or an explicitly accepted vacancy. Evidence required: completed section 4 with person/acceptance date or vacancy decision, consequence and review date.
- [ ] `AC-SP-075-02` — Spending and external-contact authority are recorded. Evidence required: completed section 5 plus the named sender/brief decisions in OD-05–OD-07.
- [ ] `AC-SP-075-03` — No fictional second approver. Evidence required: actual names and acknowledgments for every required alternate/independent function, or an explicit vacancy that leaves the affected action blocked.

Writing this packet satisfies neither the three source criteria nor `SP-075`. Only the authorized human decision can accept them.

## 11. ACT-SP-075-02 decision record template

| Field | Human decision |
|---|---|
| Packet reviewed | `ACT-SP-075-01` packet version `0.1` |
| Decision | `[ ] Accept` `[ ] Return for revision` `[ ] Stop` |
| Accountable decision-maker | `____________________` |
| Decision date | `____________________` |
| Ownership option / hybrid | `____________________` |
| Funding option / approved cap reference | `____________________` |
| Approved external-contact brief IDs | `____________________` |
| Accepted vacancies and consequences | `____________________` |
| Genuine alternates / independent reviewers | `____________________` |
| Unresolved items and next owner/date | `____________________` |
| Review/expiry trigger | `____________________` |
| Acceptance evidence location | `____________________` |

If accepted, create a dated artifact under `docs/decisions/**` for `ACT-SP-075-02`; do not replace the packet's blank fields in place because the preparation and the human decision must remain distinguishable.

## 12. Preparation handoff

| Field | Result |
|---|---|
| Outcome | Review-ready owner, backup, authority and discovery-estimate packet prepared |
| Changed artifact | `docs/delivery/ACT-SP-075-01-ownership-and-discovery-review-packet.md` |
| External effects | None; no contact, account creation, invitation, recruitment, purchase, charge, deployment or publication |
| Sensitive data | None used; no child/player records, footage, credentials or supplier personal data |
| Quotes / estimates obtained | None; scoped request briefs are ready for human authorization |
| Monetary spend caused by this activity | None recorded; no external paid action was taken |
| Not exercised | Human role acceptance, external outreach, specialist qualification checks, quote comparison, contracting and all implementation/device/security validation |
| Recovery | Documentation-only addition; review comments can be applied in a new packet version, or the file can be removed through an ordinary reviewed Git change |
| Requested next status | Review for `ACT-SP-075-01`; then human `ACT-SP-075-02` |
| Acceptance limit | Agent submits the packet but does not approve `SP-075` or mark it Done |
