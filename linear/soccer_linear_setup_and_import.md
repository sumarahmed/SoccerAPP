# SoccerTrainingApp — Linear Setup and Import Guide

## Intended workspace

Use one initial Linear team named `SoccerTrainingApp` unless the workspace owner chooses otherwise.

### Gate projects

- G0 — Definition and delivery setup
- G1 — Content, experience and security contracts
- G2 — Technical feasibility
- G3 — Pilot implementation and verification
- G4 — Family and club pilot
- G5 — Commercial release
- G6 — Operation and expansion

### Phases

P00 through P11 are represented with labels/milestones and may span gate projects where required.

### Workflow

Backlog → Ready → In Progress → Review → Validation → Done, with Blocked and Cancelled.

Do not silently map imported Backlog items into active work.

## Labels

Use labels such as:

- `phase-P00` … `phase-P11`
- `gate-G0` … `gate-G6`
- areas: mobile, web, identity, media, billing, operations, content, quality, security, design, backend, research, business, delivery, release
- execution: `mode-human`, `mode-agent`, `mode-hybrid`
- risk: `risk-high`, `risk-standard`
- kind: work-package, task, human-action, gate
- requirement: `required-p0`, `required-p1`, `required-p2`

Initial priority mapping: P0→High, P1→Medium, P2→Low. Priority never bypasses dependency or review requirements.

## Source IDs

Keep `[SP-001]` style source IDs in issue titles/descriptions. Linear will create its own native issue identifiers. Maintain an explicit mapping between source SP ID and live Linear ID/UUID.

## Relationships

CSV import alone does not fully recreate projects, milestones, parents or dependencies. After issue creation, perform a deliberate second pass from the source manifest to establish:

- project assignment;
- phase milestone/label;
- parent/child links;
- predecessor/dependency links;
- actual owners/reviewers;
- source-ID ↔ Linear-ID mapping.

## Import strategy

The dated planning package defined two mutually exclusive routes:

1. Full import of all 150 source issues, or
2. Smoke import of SP-001, SP-003 and SP-075, then the remaining 147 after mapping is verified.

Do not execute both routes into the same workspace or duplicate issues may be created.

## Agent delegation

Importing issues does not itself activate a coding agent. Before delegation, each live issue must be Ready with exact repo/branch/base commit, environment, allowed paths, acceptance criteria, fixtures, reviewer and run limits.

Parent work packages should normally coordinate bounded child tasks rather than being assigned as one large agent run.

## First setup actions

1. Create/confirm team and workflow states.
2. Create G0–G6 projects and P00–P11 milestone/label structure.
3. Configure labels.
4. Import the smoke set first if using the safer route.
5. Confirm multiline descriptions, priority/status mapping and source IDs.
6. Import remaining records.
7. Apply parent/dependency/project mappings.
8. Assign real human owners and reviewers.
9. Only then move bounded tasks from Backlog to Ready.
