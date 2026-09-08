# SoccerTrainingApp — competitive market gap analysis

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/docs/soccer_market_gap_analysis.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

**Research date: 6 September 2026. Status: planning recommendations for review.**

**Planning update, 8 September:** This analysis describes the 150-task baseline as it stood on the research date. Its five immediate recommendations are now reconciled into the [165-task backlog](../delivery/soccer_delivery_backlog.md) and [390-activity plan](../delivery/soccer_agent_activity_plan.md). The research itself has not been refreshed.

Our requirements cover much of the expected product structure. The largest competitive gaps are the actual curriculum, guidance on what to practise next, meaningful progress evidence, repeat use, and the speed of the coach feedback workflow. Recording, timers, downloadable demonstrations and club dashboards already appear in competing products. They are useful requirements, but individually they are not a defensible claim of uniqueness.

The recommended positioning is **age-appropriate practice between club sessions, with a clear next activity, reliable optional recording, and useful feedback under family control**. Treat this as a proposition to validate. Neither competitive superiority nor improved football performance has been demonstrated.

This analysis identifies **18 findings, MG-01–MG-18**, distinguishes existing delivery work from proposed additions, and maps recommendations to the current SP-001–SP-150 backlog. The existing Linear CSVs have not been changed or imported. No application, database, coaching service or competitor test account was created.

## 1. Comparison method and limits

The category spans individual training, coaching content and club administration. A single app does not adequately benchmark our combined scope. This review uses five direct training/content comparators and two adjacent club platforms. Techne is the primary comparator for recurring individual practice and coach oversight; MyPersonalFootballCoach is especially relevant to the video and club workflow.

“Leading” here means a relevant established product, supported where available by published adoption signals. It does **not** mean a verified ranking by revenue, Australian market share, monthly active users or learning effectiveness. Vendor user totals are self-reported and use different definitions. A club-management audience across many sports cannot be compared numerically with soccer training users.

Evidence comes from current official product pages, help centres and developer-authored app-store descriptions/release notes. Advertised functionality is distinguished from hands-on verification. Missing public evidence is marked **unverified**, not “the competitor cannot do it.” Historical reviews were not used to estimate present defect rates. App-store age ratings are not proof of drill suitability or guardian-control quality.

The current baseline is the 150-task delivery package and its feature map, together with the business plan, administration specification, design pack and security review. Older baseline documents that mention 74 tasks are historical snapshots; the current delivery backlog supersedes that count. Our entire product remains unimplemented, including features marked specified below.

## 2. The products that set expectations

| Product | Why included | Publicly documented benchmark | Evidence limit |
|---|---|---|---|
| **Techne Futbol** | Closest recurring-practice comparator | Guided sessions, skill tests, personal progress and motivation; club manager tools | Established training/club offering; no audited market-share figure used |
| **Train Effective** | Broad player-development comparator | Technical, tactical, physical and mentality content; individual and club offers | Homepage reports over two million players; cumulative vendor claim, not active paid users |
| **Dribbleup Soccer** | Immediate-feedback and household comparator | App-guided practice using its Smart Soccer Ball | Product page reports over 100,000 soccer players; hardware-based experience differs from ordinary-ball recording |
| **MyPersonalFootballCoach (MPFC)** | Close specialist comparator for video and clubs | Downloadable training, club dashboard, training clock and player video sharing | Relevant feature overlap; not asserted to lead by scale |
| **Coerver Soccer** | Curriculum and coach-resource comparator | Progressive technical lessons and coach practice resources | Current listing describes replacing an earlier app used by over 95,000 coaches/players; not current-app active users |
| **360Player** | Adjacent club development/operations comparator | Shared methodology, content authoring, communication and administration | Multi-sport club platform; adoption logos are not a measured soccer-app ranking |
| **TeamSnap / TeamSnap ONE** | Adjacent club buyer and switching-cost comparator | Rosters, scheduling, registration, communication and coaching resources | Company reports over 30 million parents/players/coaches and 19,000 organizations across sports |

Sources: [Techne](https://www.technefutbol.com/), [Train Effective](https://www.traineffective.com/en/), [Dribbleup Soccer](https://dribbleup.com/products/smart-soccer-ball), [MPFC club offering](https://mypersonalfootballcoach.com/clubpartnership/), [Coerver current app](https://apps.apple.com/us/app/coerver-soccer/id6737722162), [360Player](https://www.360player.com/), [TeamSnap company](https://www.teamsnap.com/company). All accessed 6 September 2026.

### Product evidence used in the comparison

**E1 — Techne learning and engagement.** Its training page describes weekly programming, follow-along classes, adjustable drill levels and more than 50 one-minute skill tests. Its homepage lists reminders, goals, streaks and training rewards. These establish a benchmark for repeatable practice and visible progress; they do not prove transfer into match performance. [Training experience](https://www.technefutbol.com/training-experience), [progress features](https://www.technefutbol.com/).

**E2 — Techne recording and personalization.** Developer release notes mention recording/uploading drill videos, timer/audio coordination, interruption handling, daily recommendations and suggested drills following skill tests. Exact simultaneous camera/demo layouts, recording modes and branded exports were not verified. Therefore our recording workflow cannot safely be described as absent from Techne. [Techne release notes](https://apps.apple.com/us/app/techne-futbol-soccer-training/id1298569303).

**E3 — Techne clubs.** Publicly listed functions include roster administration, training statistics, weekly reports, club branding, private leaderboards, assignments and coach messages. This overlaps substantially with our planned club route. [Techne teams and clubs](https://www.technefutbol.com/group-pricing).

**E4 — Train Effective development.** Game Brain teaches decisions using professional match analysis. Its commercial offering separates content access from a higher tier with personal mentorship. The Apple listing advertises an “AI Coach,” but the reviewed material did not establish its exact inputs, safeguards or whether it evaluates recorded technique. Do not equate that label with validated computer vision. [Game Brain](https://www.traineffective.com/en/tactics), [membership scope](https://www.traineffective.com/en/pricing), [developer listing](https://apps.apple.com/hk/app/train-effective-football/id1425844780?l=en-GB).

**E5 — Dribbleup feedback.** The soccer product advertises real-time ball tracking, a large guided-content offering and fresh content. The help centre describes rep counts, movement feedback, individual session history, programs/challenges and up to six household profiles. Tracking its ball is different from saving an ordinary camera video or judging overall football technique. [Soccer product](https://dribbleup.com/products/smart-soccer-ball), [membership functions](https://help.dribbleup.com/en/articles/6570863-what-s-included-in-the-membership).

**E6 — MPFC video and club overlap.** Its club page describes downloadable videos, a branded club dashboard, player usage tracking, a performance clock, player video uploads to a club/team library and coach resources. Its app listing also describes position-specific programs. This is direct evidence that video sharing plus club oversight already exists. It does not verify in-app camera capture, granular sharing grants or our two recording modes. [Club partnership](https://mypersonalfootballcoach.com/clubpartnership/), [app functions](https://apps.apple.com/us/app/mypersonalfootballcoach/id1320840506).

**E7 — Coerver curriculum.** The current app listing describes more than 99 tutorial videos, illustrated PDF practice resources, progressive technical learning and small-sided application. Its broader organization also offers coach education and in-person programs. Those wider services are not automatically included in the app subscription. [Current Coerver app](https://apps.apple.com/us/app/coerver-soccer/id6737722162), [Coerver programs](https://www.coervercoaching.com/).

**E8 — 360Player authoring and communication.** Its training tools support visual drill drawing/animation, tagging, session collections, distribution and training activity reporting. The platform also advertises role-based communication and automatic parent visibility when a minor chats with an adult. That is a relevant safeguard claim, not independently verified assurance. Diagram animation is not the same deliverable as our proposed realistic body-and-ball demonstrations. [Training tools](https://www.360player.com/development/training), [communication tools](https://www.360player.com/management/communication), [platform description](https://www.360player.com/).

**E9 — TeamSnap club operations.** TeamSnap ONE combines registration/payment collection, schedules, rosters, communication, coaching resources and live-streaming functions. Its pricing page describes customized club pricing and a free entry point for single teams. It is an adjacent competitor for the club's budget and staff attention, rather than proof of an identical solo-training recorder. [Platform](https://www.teamsnap.com/), [pricing](https://www.teamsnap.com/pricing).

## 3. Requirements comparison

**Specified** means an explicit baseline requirement with mapped work. **Partial** means related requirements exist but the competitive workflow or operating detail needs elaboration. **Deferred** means a deliberate future choice. None means built or accepted. Evidence references E1–E9 refer to the cited passages above.

| Capability | Market benchmark | Our requirement and status | Competitive conclusion |
|---|---|---|---|
| Guided individual practice | E1, E4, E5, E7 | **Specified:** catalog, programs, timer, cues and demonstrations; FT-02–FT-05 | Expected core capability; delivery and ease of use determine parity |
| Ages 5–18 with ability separate | E7 addresses this age span; competing products also span skill levels | **Specified:** five experience bands and suitability rules; FT-01, FT-26 | Broad age coverage alone is not unique; validate each experience |
| Curriculum depth and continuity | E1, E4, E7 | **Partial:** 12 draft drill families and production tasks, not a complete released progression | Major content and execution gap, not a hard limit of twelve |
| What to practise next | E2; E4 mentorship | **Partial:** Today, ordered paths, filters and manual coach assignment; FT-02 | Specify a constrained recommendation and reassessment loop |
| Measurable technical progress | E1 skill tests; E5 tracking | **Partial:** attributed assessments separate from attendance; FT-18 | Need repeatable protocols, result quality and retest logic |
| Habits and returning to practice | E1, E2, E5 | **Partial:** personal milestones and responsible-growth principles | Define a complete motivation experience without volume pressure |
| Tactical understanding | E4; E7 game application | **Partial:** position tags, scanning drill and role paths | Tags and isolated drills do not constitute a tactical curriculum |
| Live camera, timer and demo | E2 partially overlaps | **Specified:** coordinated capture, work/rest, cues, PiP, both modes; FT-04–FT-06 | Promising execution focus; exact competitor parity unverified |
| Save and share player footage | E2, E6 | **Specified:** source retention, private cloud and explicit grants; FT-19–FT-21 | Video capability is not itself a differentiator |
| Automatic movement measurement | E5; E4 AI label has unclear scope | **Deferred:** validated technique assistance | Real capability gap versus ball tracking; do not rush general AI scoring |
| Review that changes the next practice | E4 human mentoring; E6 video/club oversight | **Partial:** replay, comparison, structured feedback; FT-07, FT-18 | Specify submission, review status, actionable feedback and follow-up |
| Club drill authoring and assignment | E3 assignments; E8 visual authoring | **Specified:** add/remove/reorder/publish/assign beyond twelve; FT-16 | Core scope is present; fast authoring and rollout need validation |
| Printable plans and visual editor | E7, E8 | **Partial:** media-based drill authoring; no explicit drawing tool/print contract | Candidate later enhancement, not a reason to build a 3D editor |
| Rosters, scheduling and staff | E3, E8, E9 | **Specified:** hierarchy, invitations, teams, schedules, attendance; FT-15–FT-17 | Need low-effort adoption and coexistence with existing club systems |
| Collecting club participation fees | E8, E9 | **Outside current commerce scope:** we sell app subscriptions | App seat billing must not be described as club fee collection |
| Downloads and offline practice | E6 explicitly documents downloads | **Specified:** local DB/files, downloads and synchronization; FT-10–FT-11 | Useful access capability, not unique; verify actual degraded-network behavior |
| Family subscriptions and club-funded access | E3, E4, E5 | **Specified:** separate payer, beneficiary and media authority; FT-23 | Validate package value and avoid redundant purchases |
| Parent visibility and safeguarding | E8 documents parent-visible communication | **Specified:** stronger detail in our own permission/recovery contracts | Cannot infer superior security from specification detail |
| Phone light/dark appearance | Cross-product behavior not verified | **Specified:** follow system plus overrides on mobile/web; FT-09 | Required quality feature; no exclusivity claim |
| App-logo opening frame on export | Exact cross-product behavior not verified | **Specified:** logo then footage, preserve original; FT-08 | Branded presentation, unlikely to be the main purchase reason |

## 4. What we should preserve as the product proposition

These are hypotheses about customer value, not claims that no competitor can deliver them:

1. **A complete practice-to-feedback journey.** Choose an appropriate activity, learn it, practise with or without recording, review, receive one useful improvement cue, and know what to do next.
2. **Family control across club relationships.** Club funding and assignments do not silently expose all home practice or private footage. This must remain understandable through transfers, multiple clubs and adulthood.
3. **Reliable practice using an ordinary ball and phone.** Keep cloud upload optional and support downloaded approved sessions. The phone setup still needs a suitable support and enough space; this is not a claim of zero setup or zero data use.
4. **A well-tested experience for both younger children and older beginners.** Short spoken instructions and adult assistance where appropriate; mature language for older players. One generic child-themed screen will not satisfy the full age range.
5. **Clear, useful demonstrations.** Realistic animation should make movement easier to understand. Visual novelty without better comprehension will not justify its production cost.

The logo intro, system appearance and administration hierarchy remain requested requirements. They support product quality and brand consistency, but the pilot should test whether the central training benefit is strong enough to earn repeat use and payment.

## 5. Prioritized findings and proposed actions

**Priority:** High = resolve the specified decision/evidence before the relevant pilot or paid-release gate. Medium = scope deliberately for release or later. **Type:** Extend = clarify existing work; Evidence = existing requirement needs proof; New = a distinct capability proposal; Defer = retain as future discovery. These types prevent an existing open task being counted as a newly discovered missing feature.

### MG-01 — Complete learning pathways, not just a drill inventory

**High · Extend/Evidence · P01/P05, release expansion in P10.** E1/E4/E7 establish the content benchmark. The baseline already requires approval of every released variant, but there is no approved full progression spanning every advertised age, ability and position.

**Human:** coaching lead defines learning outcomes, prerequisites, progression, retest points and a funded publication schedule. Keep twelve families as the pilot foundation; publish the actual supported coverage.

**Agents:** extend catalog coverage reporting and publication checks after approval; never invent safe prescriptions.

**Acceptance:** every offered pathway has an approved entry point, sequence, completion meaning and actual assets; no empty premium path. Map: SP-005, SP-006, SP-096, SP-114, SP-125, SP-147; FT-02/03.

### MG-02 — An explicit next-session decision

**High · Extend · P01/P05.** E2 makes recommendations a concrete competitive expectation. Our filters, Today screen and ordered programs do not fully specify how the next suitable activity is selected.

**Human:** coach approves rules using goal, ability evidence, available time/space/equipment, assistance and current assignments. Explain conflicts and let the adult/coach override within approved limits.

**Agents:** implement deterministic selection and a readable reason; use only approved variants. Do not infer workload from hidden health assumptions.

**Acceptance:** synthetic mixed-age, no-equipment, missed-session and conflicting-club cases select a valid next step or explain why none is available. Map: SP-086, SP-096, SP-113, SP-115, SP-116; FT-02/17/18.

### MG-03 — Repeatable skill assessment

**High · Extend · P01/P05/P09.** E1/E5 establish visible measurement expectations. Our source-labelled assessments are a sound foundation but lack a complete repeatable benchmark experience.

**Human:** select a small set of coach-approved assessments, define setup, permitted assistance, both-foot handling where relevant, invalid attempts and retest intervals. Do not present app users as a representative age norm.

**Agents:** store protocol/version, result source, conditions and comparability; display personal change and uncertainty.

**Acceptance:** two comparable attempts can be reviewed; incompatible conditions are flagged; timer completion never certifies technique. Map: SP-005, SP-086, SP-098, SP-116, SP-139; FT-07/18.

### MG-04 — A complete, healthy motivation experience

**High · Extend/New · design P01, pilot P05/P09.** E1/E2/E5 show sustained habit mechanics. We have milestones and principles, but not a complete reward, reminder and return-after-a-break specification.

**Human:** approve personal weekly goals, rest handling, supportive return messages and optional private achievements. Avoid rewards for unlimited minutes or public child rankings.

**Agents:** build only approved mechanics, with quiet hours, opt-out and idempotent progress updates.

**Acceptance:** missing a week or stopping early does not shame the player, remove essential access or encourage unsafe extra practice. Measure return behavior without maximizing screen time. Map: SP-077, SP-096, SP-116, SP-119, SP-139; FT-18/25/26.

### MG-05 — Tactical learning that connects to a match

**Medium · Extend · scope P01, expand after pilot.** E4/E7 set a broader learning benchmark. D11 scanning and position tags already exist, but a position label is not a decision-making lesson.

**Human:** specify age-appropriate scenarios, off-ball actions, teammate/opponent context and one match application per relevant pathway. Approve or license any match footage.

**Agents:** later support scenario choices, explanations and links to practical drills; no unsupported talent prediction.

**Acceptance:** a learner can explain when to use the skill, not only copy the movement. Map: SP-005, SP-096, SP-125, SP-143; FT-02/03. This does not add a full match-analysis platform to the pilot.

### MG-06 — A usable coaching review queue

**High · Extend · P01/P06/P09.** E4/E6 indicate demand for human feedback. Our recording sharing and structured comments need a clearer operational loop.

**Human:** define who owes a review, clip limits, expected response window, feedback rubric and how a player receives a next action. Club coaches are included as users; their labour is not automatically an unlimited platform service.

**Agents:** add submission/withdrawal/review states, an authorized queue, optional timestamped comments and linked follow-up assignments.

**Acceptance:** one shared attempt can receive one actionable cue and a follow-up; expired permission prevents new viewing; time spent per review is measured. Map: SP-098, SP-104, SP-116, SP-117, SP-138, SP-147; FT-07/18/19.

### MG-07 — Automatic feedback is a separate research product

**Medium · Defer · P11.** E5 is an actual measurement benchmark; E4's AI label does not establish comparable capability. Our baseline correctly defers technique assistance.

**Human:** first select a narrow observable outcome, such as counting one clearly defined ball action. Obtain separately authorized representative data and coach-labelled evaluation; resolve rights, consent and costs.

**Agents:** only after authorization, prototype with confidence thresholds and a visible unable-to-assess state.

**Acceptance before release:** measured errors by device, lighting, body/kit variation and permitted drill; no score when evidence is inadequate. Counting touches must not become a general technique or talent score. Map: SP-143 plus a future bounded feasibility issue; FT-30. Exclude from the initial revenue promise.

### MG-08 — Club adoption without duplicate administration

**High · Extend/New · discovery P01, validated workflow P06/P09.** E3/E8/E9 establish mature club workflows. Our invitations and rosters lack a specific migration/interoperability contract.

**Human:** document the actual design partner's source roster, season, guardianship process and calendar system. Prefer coexistence during the pilot.

**Agents:** if approved, implement a minimal roster import with preview/errors/deduplication, and a limited calendar export. Importing a row must not grant guardianship or video access.

**Acceptance:** an authorized administrator can prepare a sample team without duplicate players or cross-club disclosure; invitations remain a separate deliberate action. Map: SP-085, SP-112, SP-115, SP-138; FT-15/17. No named vendor integration is promised until access is verified.

### MG-09 — Faster coach authoring and printable field plans

**Medium · New · prototype P01, delivery after pilot if justified.** E7/E8 provide authoring/field-use benchmarks. The baseline permits drill creation but does not specify a visual pitch editor or print-ready session sheet.

**Human:** observe whether coaches struggle to describe setups and use plans outdoors. Define a small approved diagram vocabulary and print layout before funding an editor.

**Agents:** start with reusable diagram attachments and printable approved plans if that meets the need. A drawing tool is a separate later choice.

**Acceptance:** a coach can understand setup, sequence and safety cues on the field; the printed version identifies its source/version and can become stale after withdrawal. Map: SP-113, SP-114, SP-125, SP-138, SP-143; FT-16. No automatic realistic 3D drill generation.

### MG-10 — Self-service parents need coaching guidance

**High · Extend · P01/P05/P09.** Competing adult content/resources in E3/E7 reinforce this need. Our five age bands specify assistance but do not constitute a tested parent learning journey.

**Human:** write short setup, encouragement and observation guidance; explain the limits of parent assessment and how to ask for help. Include a family without a club or coach.

**Agents:** present just-in-time guidance, correct age-language variants and a short first-session route.

**Acceptance:** a parent can start suitable practice and understand the next step without configuring cloud video or interpreting technical coaching jargon. Map: SP-077, SP-095, SP-096, SP-101, SP-125, SP-137; FT-01/26.

### MG-11 — Prove the exact recording promise

**High · Evidence · P03/P05/P08.** E2 establishes partial market overlap. Our requirements are detailed; their combined reliability is unproven.

**Human:** finalize supported devices, recording modes, timer tolerance, interruption behavior and outdoor setup criteria before the trials.

**Agents:** implement and gather evidence for confirmed capture, simultaneous demo/cues, full-session chapters, exercise clips, local save, review and logo-first export.

**Acceptance:** real-device evidence includes long sessions, calls, storage pressure, thermal behavior, offline use and theme changes. Preserve source footage; report gaps honestly. Map: SP-014–SP-016, SP-080–SP-083, SP-092–SP-095, SP-126, SP-127; FT-04–FT-09. This is existing work, not a newly missing recorder feature.

### MG-12 — Validate realistic animation as an educational choice

**High · Evidence · P01/P03.** E1/E7 demonstrate that conventional instruction is a credible alternative. Our realistic animation remains a proposed production method with three sample briefs.

**Human:** compare coach-approved animation against a licensed human demonstration of the same movement. Assess comprehension, both-foot cues, ball contact and usefulness at practice distance.

**Agents:** build the approved playback controls and collect minimal consented usability measures, not inferred skill scores.

**Acceptance:** observed task comprehension justifies the chosen asset format; production time and revision cost are known. Keep the requested animation direction unless a product decision changes it. Map: SP-006, SP-095, SP-125, SP-130, SP-137, SP-147; FT-03/26.

### MG-13 — Subscription value must fund the service

**High · Extend/Evidence · P01/P09/P10.** The price comparison below shows different buyers, content bundles and service levels. We already model subscriptions and video costs, but have no paid-demand evidence or fully updated estimate.

**Human:** test recurring content access, optional storage and club sponsorship as distinct benefits. Define seasonal seats, renewal, included coach accounts and any human review service precisely.

**Agents:** implement only the approved products and beneficiary rules; expose existing club benefits before a redundant family purchase.

**Acceptance:** adults can explain what they receive, what expires, who reviews footage and how they cancel; current costs and real willingness-to-pay evidence inform pricing. Map: SP-057, SP-120–SP-122, SP-129, SP-139, SP-147, SP-148; FT-23/28/29.

### MG-14 — Trust needs demonstrated controls and understandable claims

**High · Evidence · P08/P10.** E8 already advertises a minor/adult communication safeguard. Our extensive security plan does not prove that our product is safer than competitors.

**Human:** obtain independent review of implemented controls and publish a plain-language explanation tied to actual behavior. Define support, safeguarding and recovery ownership.

**Agents:** provide role/MFA tests, media grant/revocation evidence, deletion/restore evidence and an accurate inventory of processors and data flows.

**Acceptance:** family/club isolation and restricted child access pass the existing gates; external exports' limits are explained; public claims match the tested build. Map: SP-065–SP-074, SP-128, SP-131, SP-134, SP-136; FT-12–FT-14/19–FT-22/25. No competitor vulnerability or certification finding is asserted.

### MG-15 — Validate an acquisition channel and the reason to return

**High · Extend/Evidence · P00/P09/P10.** The adoption signals in section 2 establish an incumbent distribution advantage. Our baseline already proposes design partners and family research; neither is secured.

**Human:** run the planned family and club research, identify the budget owner, and test the proposition against their current free content and existing tools. Measure whether another app creates enough value to justify its effort.

**Agents:** after development authorization, instrument minimal activation, return, assignment and cost events with clear denominators; do not track children for behavioral advertising.

**Acceptance:** pilot findings explain activation drop-off, repeat use, coach workload and voluntary willingness to pay by route. Map: SP-004, SP-029, SP-030, SP-057, SP-133, SP-137–SP-140; FT-28/30.

### MG-16 — Content renewal is an operating responsibility

**Medium · Extend · P01/P10/P11.** E1/E5 set expectations for fresh training. Our publishing controls exist in requirements; the recurring editorial workload is not yet a funded service.

**Human:** appoint an editor and qualified reviewers; plan a rolling publication calendar based on gaps and use, including older beginners and goalkeeper coverage where sold.

**Agents:** support draft/review queues, rights expiry, content health checks and safe publication metrics.

**Acceptance:** actual approved releases and maintenance capacity support the marketed cadence; no promise of weekly new 3D assets without resources. Map: SP-114, SP-125, SP-142, SP-147; FT-03/16/30.

### MG-17 — Protect the boundary between training and club management

**High · Extend/decision · P00/P01.** E8/E9 could pull us toward registration, club fee collection, team websites, match streaming and tournament operations. Those are separate product areas from our app licence billing.

**Human:** describe the initial club product as managing training activities and development; validate which existing tools it must coexist with. A full operations replacement requires a new business case.

**Agents:** implement the approved hierarchy, training administration and entitlements. Do not infer authorization for payment custody, club merchant onboarding or a social network.

**Acceptance:** scope, sales description and backlog agree; a club buyer understands the boundary. Map: SP-001, SP-037, SP-048, SP-075, SP-138, SP-143; FT-15–FT-17/23/30.

### MG-18 — Validate access across age, device and assistance

**High · Evidence · P01/P03/P08/P09.** Our accessibility, light/dark, no-camera and offline contracts are already specified. Their benefit depends on actual usability, particularly shared phones and younger players.

**Human:** recruit the existing five age bands, standalone and sponsored families, both device platforms, assistance variations and relevant access needs. Treat translation as a later market decision; English is still a launch assumption.

**Agents:** deliver paired themes, accessible controls, captions/cues, mature beginner language and scoped shared-device behavior.

**Acceptance:** findings are reported by subgroup with honest sample limits; no age band is declared supported solely because another succeeded. Map: SP-077–SP-079, SP-095, SP-099, SP-101, SP-126, SP-130, SP-137; FT-01/09/13/26.

## 6. Commercial comparison

These are **publicly displayed offers observed on the research date**, not purchased or negotiated quotations. US App Store amounts are USD; dollar amounts on provider websites are reproduced as displayed where currency was not explicit. No foreign-exchange conversion, Australian checkout verification or like-for-like cost ranking has been performed. Taxes, geography, promotions and purchase channel can change the payable amount.

| Product | Observed offer | What it tells us |
|---|---|---|
| Techne | US listing: Pro USD 37.99/month or 279.99/year; Fundamentals USD 9.99/month. Website family offer: $600/year or $60/month, up to five players; club quotation | Family access and coach-facing value are existing buying options. [US listing](https://apps.apple.com/us/app/techne-futbol-soccer-training/id1298569303), [family/club offers](https://www.technefutbol.com/group-pricing) |
| Train Effective | Website: Pro $13/month billed annually; Academy $33/month billed annually; Clubs $50/player billed annually | Mentoring and content access have different cost structures. Monthly equivalents on annual contracts are not month-to-month prices. [Published offers](https://www.traineffective.com/en/pricing) |
| Dribbleup | Soccer page: membership $19.99/month plus tax after the displayed trial; Smart Soccer Ball purchased separately. Help centre supports six household users | Hardware acquisition, recurring instruction and multi-profile access form the bundle. [Soccer offer](https://dribbleup.com/products/smart-soccer-ball), [household membership](https://help.dribbleup.com/en/articles/5790438-dribbleup-all-access-membership-faq) |
| Coerver | US App Store lists Player Monthly USD 5.99 and Coach Monthly USD 9.99; a promotional item is also listed | Separate player and coach content offers exist. Listed purchase items do not prove every item is currently offered to every account. [US purchase listing](https://apps.apple.com/us/app/coerver-soccer/id6737722162) |
| MPFC | Public surfaces contain both course purchases and subscriptions; the app description and web course page use different prices/terms | Exact comparable product and checkout must be checked. Do not combine different offers into a single “current price.” [App description](https://apps.apple.com/us/app/mypersonalfootballcoach/id1320840506), [web course offers](https://mypersonalfootballcoach.com/dynamic-ball-masterweb/), [purchase terms](https://mypersonalfootballcoach.com/terms-conditions/) |
| 360Player | Flexible club quotation; no reliable comparable per-player public price established here | Operational scope and payment services require a scoped quote. [Provider pricing description](https://www.360player.com/) |
| TeamSnap | Customized club pricing; single teams can start at $0 with upgrades | Clubs can already enter established administration products cheaply; ours must earn an additional place. [Pricing](https://www.teamsnap.com/pricing) |
| Our proposal | Family AUD 14.99/month or 119.99/year, up to four profiles; Club AUD 5/player/month or 48/year, 25-seat minimum. Family assumed GST-inclusive; club exclusive | Unvalidated prices, not live offers. Family includes proposed 20 GB shared cloud storage; club pool 5 GB/seat; 30-day active retention. Human coaching labour is not an unlimited inclusion |

**Pricing recommendations:**

- Test the current Family proposal before changing it. The annual price implies roughly AUD 10/month; that discount still has to fund content, media, recovery and support.
- The club minimum implies AUD 125/month or AUD 1,200/year before GST at 25 seats. Test whether that excludes small teams and whether seasonal commitments fit the buyer. Do not silently lower the minimum.
- Lead with the learning and coaching benefit; storage capacity is a supporting allowance. Four frequent users and full-session video can have different economics from one occasional player.
- Include coach accounts in club licensing as planned, but state who provides feedback and their capacity. If platform-paid reviews are offered later, price them separately with a bounded service level.
- Retain a meaningful no-camera/local entry route. Test whether a future content-only paid package is needed; another tier also adds entitlement and support complexity.
- Use the existing cost and pricing tasks to update the model. This market review does not validate the old financial assumptions or calculate a new budget.

## 7. Security and privacy comparison: what can and cannot be concluded

The reviewed public product pages do not provide enough consistent evidence to rank all seven vendors on mandatory MFA, recovery security, family isolation, at-rest encryption, deletion from backups or independent penetration testing. Those fields remain **unverified**, not absent. Our own entries remain **specified, not operating**.

Techne's privacy policy describes encryption/authentication measures and acknowledges that transmission cannot be guaranteed fully secure. Coerver's Apple privacy section explicitly identifies its information as developer-provided and not verified by Apple. Neither establishes a comparative security test. [Techne privacy policy](https://www.technefutbol.com/privacy-policy), [Coerver privacy disclosure](https://apps.apple.com/us/app/coerver-soccer/id6737722162).

| Trust question | Our explicit baseline | Comparative conclusion |
|---|---|---|
| Adult MFA and recovery | Scoped TOTP requirements, fresh verification, restricted recovery | Detailed requirement; external verification still required |
| Children's credentials | Restricted player credentials and shared-device boundaries | Important proof obligation; no blanket claim that competitors retain parent authority |
| Coach viewing of footage | Specific grants separate from club funding and administration | Test comprehension and enforcement together |
| Coach/minor communication | Structured feedback and safeguarding controls | E8 shows that parent visibility is already a market feature |
| Offline copies and external exports | Defined limitations, deletion suppression, preserved source, authorized handoff | Do not promise recall of copies already exported to another app/device |
| Security assurance | Independent review and evidence gates before release | Do not market “hack-proof,” certification or superior security without evidence |

There is no market-driven reason to weaken the existing security baseline. At the same time, do not turn every practice start into an adult account-administration flow. Test the existing provisioned player route and step-up boundaries, preserving server enforcement.

## 8. Recommended delivery response

The baseline already contains 150 tasks and 543 planned acceptance criteria. Adding every competitor feature would obscure the core objective and increase content, support and safeguarding obligations.

| Delivery point | Proposed response | Evidence or decision |
|---|---|---|
| **P00–P01: definition/design** | Resolve MG-17 scope; design the next-session, assessment, motivation and review loops; commission MG-01/12 curriculum samples | Approved scope and coaching rules; editable journeys; source rights; costed content plan |
| **P02–P03: workspace/feasibility** | Preserve existing security/process gates and prove MG-11/18 on actual target devices | Device evidence for both recording modes, correct timing, interruptions and usable setup |
| **P04–P08: pilot build/verification** | Deliver the existing core plus approved minimum clarifications from MG-02/03/04/06/10; validate one club onboarding workflow | Complete family and club journeys; approved assets; permission and reliability evidence |
| **P09: family/club pilot** | Test learning clarity, return behavior, review workload, club rollout and payment value | Findings with subgroup denominators, failures, actual costs and limits |
| **P10: commercial release** | Expand content to match what is sold; resolve pricing/service capacity; publish accurate trust/support information | Approved commercial scope and updated estimate; existing release gates still apply |
| **P11: further product work** | Evaluate automatic measurement, visual editor, deeper tactics and integrations only against evidence | Separate feasibility, operating cost, rights and acceptance contracts |

The pilot should remain based on twelve approved drill families and the agreed family/club routes, both recording modes, logo-first export and system light/dark behavior. Broader age/position promises require matching assets and tests. This recommendation does not narrow the agreed audience without an explicit product decision.

### How to carry findings into Linear later

MG identifiers are analysis references, **not imported issues or replacements for SP identifiers**. Each finding above names the relevant existing tasks. Extend those cards where the work already exists; create new tasks only for approved distinct additions such as a recommendation ruleset, engagement state model, review queue or roster import.

For each approved change, capture: MG reference, linked SP parent, scope, accountable human, agent role, permissions, acceptance evidence, dependencies, phase, cost impact and exclusions. Keep existing human-only coaching, safety and release decisions human-owned. After any edit, regenerate the full CSV and smoke/remaining split from one source and rerun the existing structural checks; maintain actual Linear ID mappings if an import has since occurred. Until then, the reviewed CSV baseline remains unchanged.

## 9. Research needed to turn this into stronger evidence

The next comparison should use lawfully accessed product trials and synthetic/adult examples, under a bounded research budget. No account creation, purchase or outreach was performed here.

| Test | Compare or observe | Record |
|---|---|---|
| First useful practice | Techne, MPFC, Dribbleup and our prototype | Time and actions to reach an appropriate drill; permissions and adult assistance needed |
| Exact capture behavior | Techne and our feasibility build; MPFC upload flow separately | In-app capture versus upload, simultaneous demo, saved output, interruptions and full-session behavior |
| Finding the next activity | Techne, Train Effective and our prototype | Inputs used, explanation, ability adjustment and handling of missing equipment |
| Parent understands progress | Relevant competitor result screens and our proposed assessment | Whether adults distinguish participation, a test result and observed skill |
| Coach closes the loop | Club trials and our review prototype | Assignment time, review time, useful next action and permission boundaries |
| Club adopts without disruption | A design partner's actual existing tools | Roster migration effort, invitation acceptance and duplicate administration |
| Commercial comparison | Australian offers at checkout and our tested propositions | Exact currency/tax, renewal, trial, cancellation, included profiles, content and services |
| Trust verification | Public documents plus vendor responses where obtained | Documented controls versus tested behavior; unknowns stay unknown |

Use the existing pilot metrics rather than create a parallel dashboard: activation, successful practice/save rates, return behavior, assignment completion, coach effort, support, voluntary renewal and cost per active player. Set quantitative decision thresholds before the study through SP-126/SP-139. Report younger and older players separately; a small sample does not establish long-term football improvement.

## 10. Baseline references and review record

The comparison was grounded in the current feature map and task scopes/acceptance, the business plan's mobile/web and commercial sections, the design pack's age/drill/recording/theme requirements, and the administration plan's publishing, feedback, roster and permission model. Security conclusions use the existing gap-review mapping. Current saved versions were checked for the delivery backlog (v4), design pack (v4) and business plan (v1); the feature map and gap review had no numeric version exposed in the retrieval result.

- [Current feature map](../delivery/soccer_feature_traceability.md)
- [Current delivery backlog (165 source tasks after the 8 September planning update)](../delivery/soccer_delivery_backlog.md)
- [Business and platform baseline](../architecture/soccer_end_to_end_platform_and_business_plan.md)
- [Design baseline, including appearance](../design/soccer_pilot_and_design_pack.md)
- [Administration baseline](soccer_club_parent_and_coach_administration.md)
- [Security gap baseline](../security/soccer_end_to_end_security_and_gap_review.md)

Review checks: findings distinguish missing specification from implementation evidence; referenced SP identifiers exist in the current manifest; competitor claims have direct sources; dollar offers preserve their stated billing periods; unknown functionality is not marked absent; no numerical security or market-share ranking is invented. This is a public-source competitive analysis, not a hands-on product benchmark, independent security audit or validation of learning outcomes.
