# ACT-SP-038-01 — Administration journeys and field inventory

| Field | Review value |
|---|---|
| Activity | `ACT-SP-038-01` — Specify administration journeys |
| Specification version | 1.0 accepted design direction |
| Prepared | 15 September 2026 |
| Repository base | `32deae4df0f0903a892abb0bdf183657d9642508` on `main` |
| Current status | Accepted by Syed Ahmed as the locked design direction; final family completion waits for accepted SP-007 and ACT-SP-038-03 |

## 1. Common authority boundary

Every page derives its workspace, actor, purpose and current grant from the
accepted SP-037 authorization tuple. Switching family/club/team context clears
selections and cached authority. A role title, club payment, invitation or
prior successful request never grants broader access.

Draft, review, approval, publication, withdrawal, assignment and attendance are
distinct attributable commands. Edits create a new immutable version; completed
or active sessions retain the exact snapshot actually used.

## 2. Journey map

| Journey | Frames | Required progression |
|---|---|---|
| Enter/switch workspace | F01 → F14 → F16 | authenticate/MFA as required → choose only current scope → show active role/workspace on every page |
| Invite/enrol | F16 → F17 → updated F02/F11 | invite exact adult/role with expiry → guardian/adult accepts → explicit player/club scope established; no implicit guardianship |
| Staff change/departure | F17 → F14/F21 | revoke assignment → block new reads/feedback immediately online → preserve attributable history → clear old context |
| Build age/cohort plan | F16 → F18 → F19 | choose approved template/variants → resolve prerequisites/workload → save immutable draft → independent review/publish |
| Assign/calendar | F19 → F20 → updated F03 | choose exact published plan and recipients → expose conflicts/source → schedule/cancel/reschedule → deliver current version |
| Attendance/feedback | F20 → F21 → updated F10/F13 | exact assignment → source-labelled attendance/result → current media grant → one structured cue/approved follow-up |
| Parent/adult sharing | updated F11 → F22 → F21 | join/leave separately from media → grant exact coach/purpose/expiry → current check at preview/playback → revoke/expire |
| Platform operations | F15 → affected resource | purpose-bound support/content/club action → attributable result/audit → no browse-all private media |

## 3. F14–F22 fields and actions

| Frame | Minimum fields | Controlled actions |
|---|---|---|
| F14 workspace/role | workspace ID/name, role, scope, status, last authority refresh | select/switch; no cross-context carryover |
| F15 platform admin | actor/purpose, target, reason, expiry, approval/audit link | scoped club lifecycle, content review, support; emergency review next business day |
| F16 club dashboard | exact club, cohorts, staff, publisher roles, usage, suspension/read-only reason | enter activity/cohort/staff/permission routes |
| F17 staff/roster | invite ID/role/scope/expiry, membership generation, guardian approval, assignment | invite/revoke, assign/remove, leave/transfer without merging identities |
| F18 plan editor | draft/version, age/ability/assistance, approved variant, prerequisites, work/rest, source | add/remove/replace/reorder and save new draft only |
| F19 review/publish | diff, exact content/assets/rights, reviewers, recipients, effective time, conflict generation | request changes, approve, schedule/publish, emergency/ordinary withdraw |
| F20 calendar | assignment ID, recipient, origin, exact plan version, local timezone, conflict and delivery status | schedule/reschedule/cancel idempotently |
| F21 attendance/feedback | assignment, player scope, source, observation, grant/expiry, cue taxonomy, follow-up | record attendance; one structured cue; approved follow-up; withdraw submission |
| F22 club access/share | membership, purpose notice, completion fields, media recipient/purpose/expiry/generation | join/leave, grant/expire/revoke per recipient; adulthood ends guardian access |

## 4. Prohibited shortcuts

- A club cannot create guardian authority, enable recording/cloud or share
  family media on an adult's behalf.
- Coach or club membership does not expose household, sibling, billing or
  ungranted private media.
- Platform support cannot browse all child data/media by default.
- One approval cannot cover a modified plan or missing content/right variant.
- Attendance/completion cannot automatically raise ability or create a health,
  talent or performance claim.
- Feedback has no unrestricted adult–child private chat.
- Linear receives only opaque identifiers and sanitized operational state.

## 5. Handoff

Syed Ahmed reviewed the interactive handoff and locked this specification as
the accepted administration design direction on 15 September 2026. Its visual
states are in the shared prototype and fixture. This acceptance does not close
SP-038: the implementation must retain the eventual accepted SP-007 version
and exact SP-037 authorization decision, and ACT-SP-038-03 must verify the
integrated family.
