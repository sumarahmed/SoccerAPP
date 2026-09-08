# SoccerTrainingApp — product priorities and wishlist

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/docs/soccer_product_wishlist.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

Updated 7 September 2026. Planning register; no implementation or live Linear import.

This register accompanies section 8 of [soccer_delivery_master_plan.md](soccer_delivery_master_plan.md). It separates the immediate improvements now included in the plan from ideas retained for later assessment. It derives from the [market gap analysis](soccer_market_gap_analysis.md) and existing deferred product decisions.

## Included in the immediate plan

| Priority | Planning reference | Minimum improvement | Status |
|---|---|---|---|
| 1 | IP-01 | Complete coach-approved foundation pathways and parent setup guidance | Included in plan; coaching approval and delivery open |
| 2 | IP-02 | Explain and select the next suitable practice using approved rules | Included in plan; rules/design/build open |
| 3 | IP-03 | Repeatable personal skill checks, separate from participation | Included in plan; protocols/design/build open |
| 4 | IP-04 | Submit, review, receive one useful cue and assign follow-up | Included in plan; service/design/build open |
| 5 | IP-05 | Optional weekly goals, private milestones and supportive reminders | Included in plan; coaching/design/build open |

Immediate means include in requirements/prototype work now, then deliver through the existing phases. It does not mean start coding before commissioned feasibility. See the master plan for human responsibilities, agent scope, acceptance and SP mappings.

## Deferred wishlist

Every entry is **Candidate — deferred**. Owners below are accountable role proposals, not named assignees. Revisit points are decision triggers, not scheduled automations or release commitments.

| ID | Candidate | Why it may be valuable | Revisit when | Owner / existing link |
|---|---|---|---|---|
| WL-01 | Narrow automatic ball-action measurement, later technique assistance | Faster feedback where a specific action can be measured reliably | Manual assessment is useful and there is a funded, consented evaluation with coach-labelled data and measurable error limits | Technical + coaching leads; MG-07; SP-143 |
| WL-02 | Deeper tactical and position-specific courses | Teach when and why to apply skills, including off-ball choices | Foundation pathways show repeat use and the coaching lead has an approved content/rights budget | Coaching/content leads; MG-05; SP-125, SP-143 |
| WL-03 | Visual pitch/drill editor and printable session sheets | Reduce coach authoring effort and support field use | Coach observation shows material difficulty using existing authoring/templates; simpler diagram attachments are insufficient | Coach + design leads; MG-09; SP-113, SP-114, SP-143 |
| WL-04 | Bulk roster migration and external calendar/club-system integrations | Reduce duplicate administration and onboarding effort | A design partner identifies its actual source format/system and manual onboarding is a measured adoption barrier | Club coordinator + technical lead; MG-08; SP-112, SP-115, SP-138 |
| WL-05 | Independent Coach Pro and bounded paid mentoring | Serve independent coaches or families wanting a supplied review service | Demand, coach availability, service limits, safeguarding and contribution after labour cost are established | Product + coaching + safeguarding leads; MG-06/13; SP-143, SP-147 |
| WL-06 | Storage add-ons or a content-only paid package | Fit different recording needs without making one bundle too expensive | Pilot usage and willingness-to-pay show a clear unmet segment and support a simple entitlement model | Commercial + technical leads; MG-13; SP-139, SP-143, SP-147 |
| WL-07 | Additional languages and markets | Make the product usable by more families | First-market product is stable; demand, translated coaching assets, support capacity and market requirements are assessed | Product + content + privacy leads; MG-18; SP-134, SP-143 |
| WL-08 | Rotatable real-time 3D demonstrations | Let learners inspect movements from arbitrary angles | Tests show that the existing rendered views fail a meaningful learning need, and device/content costs are acceptable | Design + animation + technical leads; MG-12; SP-143 |
| WL-09 | Full club business operations: registrations, participation fees, websites and tournament functions | Potentially replace more club tools | Clubs validate a separate business case strong enough to justify a substantially larger product and payment/operating scope | Founder + commercial + technical leads; MG-17; SP-143 |
| WL-10 | Advanced video review tools: timestamp annotations and comparison aids | Help coaches explain specific moments more efficiently | The basic submission/feedback loop is used regularly and measured review effort justifies extra controls | Coaching + design leads; MG-06; SP-098, SP-116, SP-143 |

Wishlist scope must not be confused with existing commitments:

- WL-02 extends the baseline program/position paths; it does not defer the existing catalog discovery and suitable-path requirements.
- WL-04 covers advanced import/integration; invitations, teams, rosters, scheduling and guardian-approved enrollment remain in the core plan. A small import may be promoted sooner if the pilot demonstrates a blocking need.
- WL-05 concerns independently sold or platform-supplied services. Included club coach accounts and the basic feedback loop remain in the plan.
- WL-06 adds packages; the existing local/optional cloud and subscription requirements remain.
- WL-08 extends the demonstration format; requested realistic pre-rendered demonstrations remain.
- WL-09 extends beyond training administration; it does not remove the agreed platform/club/parent/coach hierarchy or app licence billing.
- WL-10 extends feedback precision; a simple useful coaching review must work without it.

## Promotion and deferral rules

Review candidates during the existing pilot/commercial scope review, or earlier when a specific blocker appears. The founder/product owner records **Keep deferred**, **Discovery approved**, **Move to plan**, or **Rejected**, with date and rationale. Discovery approval does not imply production release approval.

Before moving a candidate to implementation, capture the problem and users affected, observed evidence, minimum useful scope, human owner/reviewer, agent permissions, dependencies, acceptance criteria, safety/privacy/rights impact, cost and operating capacity. Reuse existing SP tasks when their scope fits; create separately sized leaves only where needed. Update the source manifest, task cards, traceability, evidence register and CSV variants together before dispatch.

No wishlist entry can bypass existing coaching, child privacy, account security or release gates. Public child rankings, unrestricted adult–child messages, talent predictions and guaranteed football career outcomes are not accepted wishlist features.

## Change record

| Date | Change | Delivery state |
|---|---|---|
| 7 September 2026 | Added IP-01–IP-05 to the master plan and recorded WL-01–WL-10 for later assessment | Documents updated; 150-task CSV/manifest baseline not regenerated; no tasks built or imported |
| 8 September 2026 | Reconciled IP-01–IP-05 into SP-151–SP-165, affected source scopes and the activity plan | 165 source tasks, 390 activities and 613 planned criteria; no implementation, live import or wishlist promotion |
