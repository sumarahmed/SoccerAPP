# ACT-SP-038-02 — Denied, empty, revoked and responsive states

| Field | Review value |
|---|---|
| Activity | `ACT-SP-038-02` — Design denied, empty and revoked states |
| Specification version | 1.0 accepted design direction |
| Prepared | 15 September 2026 |
| Current status | Accepted by Syed Ahmed as the locked paired-state direction; runtime evidence and final family acceptance pending |

## 1. State grammar

Every administration state answers: what happened, what remains safe/available,
what the person may do next and where to get help. It does not expose the name,
existence or data of an unauthorized player, household, club or report.

| State | Required presentation and behavior |
|---|---|
| Empty | Explain why the list may be empty; offer only authorized creation/invitation/filter action; never add fake/example child data to a real workspace |
| Loading | Preserve workspace/role label and skeleton structure; never flash prior-workspace data |
| Denied | Neutral non-disclosing message, current workspace/role, safe return/help; no retry loop or cached content |
| Pending | State exact pending object and expiry where safe; no rights before acceptance/approval |
| Expired | Explain that authority/content/grant ended; offer an authorized renewal/re-invite route without restoring it automatically |
| Revoked | Immediately stop new online reads/writes/previews; clear local navigation context; retain attributable history and safe appeal/help |
| Suspended/read-only | Explain scope and allowed view/export/help without implying permanent deletion |
| Conflict | Preserve both attributable drafts/commands, block silent overwrite and require explicit refresh/resolve/new version |
| Partial/offline | Label stale/local data and queue status; do not permit privileged operations without current server authority |
| Failed | Give stable operation receipt/retry guidance; reconcile before retrying an uncertain mutation |
| Withdrawn | Block new use of exact content/media permission; preserve completed history and minimum authorized evidence |

## 2. Required frame pairs

- F14 default ↔ pending/revoked/no-cross-context/role-removed.
- F15 normal scoped operation ↔ empty/read-only/denied/private-media-excluded.
- F16 active club ↔ empty/suspended/read-only/quota/wrong-club-denied.
- F17 active membership ↔ pending/expired/revoked invite, guardian pending,
  duplicate identity review and removed coach.
- F18 valid draft ↔ empty, unsuitable/missing prerequisite, workload conflict,
  concurrent edit, withdrawn content and coach-approval pending.
- F19 draft/review/approved/published ↔ changes requested, rights missing,
  stale edit, scheduled and withdrawn.
- F20 scheduled ↔ empty/conflict/cancelled/changed/offline-pending/revoked recipient.
- F21 permitted assigned work ↔ empty, no/expired grant, withdrawn submission,
  unassigned coach, text-only and denied.
- F22 invited/joined/granted ↔ guardian pending, leaving/left, expired/revoked
  grant, adult transition and club-access denied.

## 3. Revocation ordering

On refresh or reconnect:

1. refresh identity and current workspace/role;
2. apply deletions, safety restrictions, withdrawals and revocations;
3. clear unauthorized cached views/selections;
4. pull still-authorized changes;
5. reconcile idempotent pending commands; and
6. show a non-disclosing reason and safe next action.

An old invite, client, role, cached page, queued attendance/feedback command or
previously valid media URL never restores revoked authority.

## 4. Responsive and accessibility behavior

Administration uses a 1280-pixel desktop reference but supports narrower web
layouts. Tables become labelled cards without losing actor, resource, state,
expiry or action context. Keyboard order follows visual order; focus moves to
the state heading after navigation/mutation; live regions announce a concise
result once. Dialogs trap focus only while open and return it to the initiating
control. State is never colour-only. Destructive actions name the exact scope
and require current MFA/approval where the accepted contract requires it.

## 5. Handoff result

Syed Ahmed reviewed and locked this state set on 15 September 2026. It is
machine-inventoried in `contracts/design/sp007-sp038-screen-states.json`. This
activity-level acceptance does not claim that a web application, permissions,
database, assistive technology or actual revocation has been implemented or
tested, and it does not close ACT-SP-038-03 or SP-038.
