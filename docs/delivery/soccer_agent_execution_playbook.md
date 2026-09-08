# SoccerTrainingApp — Agent Execution Playbook

This file defines how agents may contribute to SoccerTrainingApp without replacing human authority.

## Read before acting

1. Read the assigned issue and current repository instructions.
2. Confirm the actual repository, branch/base commit and environment.
3. Read the current delivery master plan and only the baseline references linked to the task.
4. Check predecessor evidence rather than assuming dependency completion from issue status.
5. Confirm approved file paths, fixtures, reviewer, time/spend ceiling and recovery path.

## Definition of Ready

An agent assignment needs: one bounded outcome; exact source/live issue reference; accountable human and reviewer; repository/base commit; environment; current contract versions; approved paths; synthetic/authorized test data; measurable acceptance criteria; risk classification; max attempts/time/spend; and revert/forward-fix expectations.

## Role boundaries

| Agent role | Typical outputs | Human boundary |
|---|---|---|
| Delivery | dependency checks, task drafts, evidence index | funding, staffing, gate acceptance |
| Design | component/state specs and accessible variants | user comprehension/design approval |
| Backend | schemas, policies, APIs, tests | security acceptance/production authority |
| Mobile/media | session, camera, export and device evidence | supported-device promise/coaching semantics |
| Web | scoped adult/admin portal flows | staff/guardian permissions |
| Billing | sandbox ledger and lifecycle tests | live prices/refunds/accounting |
| QA/security | reproducible positive/adverse-case evidence | independent sign-off where required |
| Operations | versioned config/runbooks/recovery evidence | production actions/customer communication |
| Content/research | inventories, briefs, de-identified analysis | qualification, rights, consent, motion approval |

## Non-negotiable product invariants

- Ages 5–18; direct-family and club routes remain distinct but interoperable.
- Level 0/1/2/3 permissions are resource/action scoped, not simple numerical inheritance.
- A club payment or admin role never automatically grants private-media access.
- No-camera training must remain usable.
- Timer state is deterministic and must not depend on UI frame rate.
- Exercise clips and full-session recording are separate supported modes.
- Full-session capture preserves chapters and interruptions honestly.
- Light/Dark switching must not interrupt or reset capture/session state.
- Export uses one logo-first intro followed by source footage; source is not overwritten.
- Cloud upload follows local save and is optional.
- Player credentials cannot reach adult/admin operations.
- Adult MFA/recovery and revocation must be enforced at server/API boundaries.
- Deleted/revoked data wins during later sync reconciliation.
- Released coaching assets require qualified human approval tied to the exact version.

## Evidence return contract

Every agent handoff must include:

- source issue/live issue/run reference;
- repository, branch, commit and environment;
- what changed and user-visible outcome;
- tests/checks actually run and their results;
- devices/build/content/config versions used;
- cases not exercised and why;
- named reviewer and requested decision;
- recovery/revert implications;
- actual time/attempts/spend where available;
- status: Review, Validation or Blocked with concrete reason.

Never fabricate a device run, test result, human approval, supplier quote, cloud resource, price acceptance or production state.

## Stop conditions

Stop and return Blocked when required authority, current contract, secret, fixture, environment, reviewer, dependency evidence or spending permission is missing. Do not widen scope to bypass the blocker.

## High-risk areas requiring tighter review

Identity/recovery, child access, guardianship, private media, deletion, billing, production release, safeguarding, credential/key rotation, backups/restore, store declarations and security-control changes require explicit review evidence and may require independent specialist acceptance.
