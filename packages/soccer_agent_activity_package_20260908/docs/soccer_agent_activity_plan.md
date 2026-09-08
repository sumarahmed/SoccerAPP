# SoccerAPP — agent activity plan

Prepared 2026-09-08 from the delivery master plan and its IP-01–IP-05 additions. This is the execution breakdown for future assignments: **165 source tasks → 390 activities**, comprising **327 agent activities**, **21 human actions/decisions** and **42 human acceptance rollups**. All twelve phases are covered. No activity has been dispatched or marked Ready/Done.

## How the work is organized

- **SP source task:** retains the complete requirement and stable acceptance IDs. SP-001–SP-150 are preserved; SP-151–SP-165 add the missing priority work.
- **ACT activity:** one named goal, deliverable, executor role, inputs, predecessor IDs, completion checks and proposed file boundary. Non-human leaves have two concrete delivery slices and one verification/handoff activity. Human leaves have an agent preparation packet and a human action. Containers have a human integration acceptance rollup.
- **Acceptance:** 613 planned source criteria are retained in the [evidence register](soccer_acceptance_evidence_register.json). The register preserves evidence fields; creating activity records does not satisfy criteria. Earlier slices trace all source criteria; the final verification/decision checks them all.

Use the [activity manifest](soccer_agent_activity_manifest.json) for assignment data, [flat activity CSV](soccer_agent_activity_tasks.csv) for sorting, and phase cards below for the full briefs. The flat activity CSV is a planning view, **not an additional Linear import route**. Source-task CSVs include the activity goals in their descriptions. Create live ACT sub-issues only after choosing tracker hierarchy and retaining their actual ID map; do not import both levels blindly.

## Phase activity packs

| Phase | Goal | Source tasks | Activities | Pack |
|---|---|---:|---:|---|
| P00 — Definition and accountable ownership | Resolve assumptions, assign people and approve bounded discovery. | 4 | 8 | [Open P00](activities/P00.md) |
| P01 — Experience, coaching and system contracts | Approve behaviours, complete content specifications and design all critical states. | 29 | 74 | [Open P01](activities/P01.md) |
| P02 — Delivery workspace and controlled agent trial | Establish a private development environment and prove one bounded assignment. | 4 | 10 | [Open P02](activities/P02.md) |
| P03 — Technical feasibility and build decision | Prove recording, identity, sync, billing and branded export before full commitment. | 10 | 28 | [Open P03](activities/P03.md) |
| P04 — Shared data, identity and offline foundation | Implement reproducible records, scoped identities, migrations and reconciliation. | 20 | 50 | [Open P04](activities/P04.md) |
| P05 — Player learning, recording, replay and export | Deliver the complete player journey with reviewed assets and both themes. | 16 | 43 | [Open P05](activities/P05.md) |
| P06 — Parent, coach, club and platform web workflows | Deliver scoped administration, plan publishing, assignments and feedback. | 15 | 37 | [Open P06](activities/P06.md) |
| P07 — Cloud media, sandbox commerce and operations | Integrate private media, jobs, recovery and production-shaped sandbox billing. | 18 | 44 | [Open P07](activities/P07.md) |
| P08 — Integrated verification and pilot acceptance | Prove safety, access boundaries, device reliability and operating readiness. | 15 | 31 | [Open P08](activities/P08.md) |
| P09 — Family and club pilot, correction and economics | Run controlled research, fix failures and choose the commercial scope. | 8 | 14 | [Open P09](activities/P09.md) |
| P10 — Commercial preparation and controlled launch | Approve products, business operations and the exact production release. | 19 | 35 | [Open P10](activities/P10.md) |
| P11 — Operate, improve and evaluate expansion | Maintain the service and fund additional capabilities only from evidence. | 7 | 16 | [Open P11](activities/P11.md) |

Phases indicate purpose, not a strict wall between teams. Follow predecessor acceptance: a source container waits for its children, while a child does not wait for its own parent. Shared interfaces are settled before parallel writers touch them.

## First assignment batch

| Sequence | Activity | Goal / output | Executor | Required predecessor |
|---|---|---|---|---|
| 1A | ACT-SP-001-01 | Assemble first-market, language, ages, assistance and account/recording decisions into an options packet | Delivery / analysis agent | No source predecessor; current baseline and actual assignment |
| 1B | ACT-SP-003-01 | Draft tools/data/target/budget and stop/retry boundaries | Delivery agent | No source predecessor; actual assignment |
| 2A | ACT-SP-001-02 | Record real product-owner decisions and remaining exclusions | Founder / product owner | ACT-SP-001-01 |
| 2B | ACT-SP-003-02 then ACT-SP-003-03 | Complete evidence/reviewer policy and verify the reviewable policy packet | Delivery agent, then QA/handoff | Previous SP-003 activity |
| 3 | ACT-SP-075-01 then ACT-SP-075-02 | Prepare role/backup/budget gaps, then obtain actual ownership and discovery funding decisions | Agent preparation, then accountable human | ACT-SP-001-02 |
| 4 | ACT-SP-004-01 | Accept discovery scope, pilot metrics and specialist work after SP-001/SP-075 | Founder | Both source outcomes accepted |

1A and 1B are independent candidates. These are recommendations for assignment, not already-running jobs. Scope decisions remain real human inputs. Technical role-matrix work SP-037 and contract SP-084 can follow their own accepted predecessors; coach/content/brand work follows discovery inputs. The phase packs carry the full graph for subsequent work.

## The five priorities now have concrete task homes

| Priority | Contract / decision preparation | Implementation ownership | Validation |
|---|---|---|---|
| IP-01 Learning pathways | SP-151 with SP-005/SP-006 | SP-156 eligibility; SP-096 presentation; SP-114/SP-125 reviewed assets | SP-165, SP-130, SP-137 |
| IP-02 Next session | SP-152 | SP-157 evaluator/Today; SP-115 assignment inputs; SP-113 publication constraints | SP-165, SP-127, SP-138 |
| IP-03 Personal skill checks | SP-153 | SP-158 attributed records/comparability; SP-159 capture/progress | SP-165, SP-127, SP-139 |
| IP-04 Feedback loop | SP-154 | SP-160 submission/authorization; SP-161 queue/cue/next action; SP-117 controls | SP-165, SP-128, SP-138 |
| IP-05 Healthy goals | SP-155 | SP-162 persistence; SP-163 mobile views; SP-164 reminders | SP-165, SP-130, SP-139 |

SP-086/SP-116/SP-119 own base interfaces; extension tasks own their new behavior. SP-019/SP-043/SP-044/SP-027 integrate the applicable children. This avoids assigning two agents ownership of the same state or rule implementation. Estimates include the new work through SP-147. Wishlist items remain deferred.

## Assignment and completion rules

1. Choose an activity whose predecessor **evidence is accepted**, then fill its actual target, accountable owner, reviewer, contract versions, fixtures, run ceiling and authorization. Planning metadata is not Ready.
2. Assign a named agent run with a narrow file/interface boundary. Initial proposal: one or two active implementation activities and one review lane. Use one writer per shared mutable area; separate worktrees do not remove shared-contract conflicts.
3. Treat 90 minutes/two attempts as a proposed checkpoint, not a duration estimate. Split at a named behavior/interface boundary if inspection shows the slice will not fit. Device/specialist work requires actual access and its own estimate. Do not total containers plus their children.
4. Return the deliverable, exact version, checks actually executed, failures/unexercised limits and review handoff. Actual hardware, coaching approval, participant consent and independent security acceptance cannot be replaced by an agent claim.
5. The acceptance owner records Review/Validation/Done from evidence. A source task closes only after all its activities and criteria are accepted; a container also checks its original integrated outcome. Operating work is instantiated as dated occurrences when commissioned.

## Copyable agent brief

> Complete **[ACT ID]** from the activity manifest and its phase card. Goal: **[exact goal]**. Deliver **[artifact]** in **[actual repo/base/environment/approved files]**. Use accepted predecessor artifacts **[versions]**, contracts **[versions]** and safe fixtures **[IDs]**. Accountable owner: **[person]**; reviewer: **[person]**. Authority and allowed external effects: **[existing record]**. Run/spend ceiling: **[values]**. Coordinate write lane **[lane]**. Meet this activity's checks and preserve source acceptance **[AC IDs]**. Return the exact diff/artifact, actual validation, remaining limitations and handoff; do not self-approve the source task.

The current folder contains planning/design material, with no application repository, database or deployment. Proposed source paths must be resolved when implementation is commissioned. [Execution playbook](soccer_agent_execution_playbook.md) supplies the full workflow; this plan adds the smaller work units.

## Verification and regeneration

Run `node tools/build-activity-plan.cjs` from the package folder to regenerate the source backlog, activity cards/manifests, acceptance links and source CSVs from the preserved manifest plus versioned activity configuration. Run `node tools/validate-activity-plan.cjs` to verify IDs, coverage, dependencies, CSV parity, source hashes and package checksums. The original seven baseline documents and financial workbook are not changed. A dated ZIP is built after validation; original dated snapshots are not overwritten.
