# ACT-SP-062-01 — Safeguarding report and response contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-062-01` — Specify safe reporting and response routes |
| Source | `SP-062` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `cb5ca345c810597eaee950145d7d8122a12be8c8` on `main` |
| Executor | Codex acting as Design/safeguarding analysis agent |
| Accountable owner | Syed Ahmed acting as Founder/product design owner |
| Required before child pilot | A named human safeguarding owner and named human alternate, with reviewed jurisdiction/reporting duties |
| Evidence scope | Written flow and synthetic cases only; no report, participant, authority or external escalation handled |

## 1. Boundary and prerequisite status

This contract specifies F32/F33 safety/reporting behavior. It does not create a
staffed reporting service, make a safeguarding determination or claim 24/7
monitoring. Automated agents may test synthetic workflows but cannot inspect
real child footage/allegations, decide whether abuse occurred or contact
authorities as the accountable decision-maker.

Formal inputs SP-005, SP-007 and SP-038 are incomplete at this version:

- SP-005 has an accepted preparation packet but no qualified coach release;
- SP-007 has no accepted core-screen design artifact; and
- SP-038 has no accepted administration-flow artifact.

The F32/F33 contract is accepted, but dependent screen links and every drill
release row remain blocked/provisional. SP-062 is not pilot-readiness evidence.

## 2. Entry points and immediate safety

`Safety and help` is prominent and consistently named from:

- active practice and recording;
- coach feedback and assigned plans;
- shared/private media;
- player, parent and club workspaces;
- account/help settings; and
- denied, revoked and error states where safety may be involved.

The player-facing route uses short, reassuring language:

- `You can stop at any time.`
- `You won't get in trouble for asking for help.`
- `If someone may be in immediate danger, contact a trusted adult or emergency
  services now.`
- `Soccolo is not monitored all the time.`

`Stop` remains immediate, available offline and outside every guardian/report
gate. Stopping practice or recording never requires a report, explanation,
attachment or adult approval.

## 3. Report form

The reporter selects one structured category:

1. unsafe drill, pain or unsuitable activity;
2. inappropriate coach feedback or contact;
3. unwanted recording or sharing;
4. guardian/account concern;
5. privacy or data concern;
6. bullying, threatening or sexual behaviour;
7. technical problem; or
8. immediate danger.

Optional short text is available, but no free text, media attachment, detailed
allegation, proof or repeated retelling is required to submit. The form explains
who normally receives the category and that routing may change to avoid sending
the report to a person named in it.

The report is bound to the exact reporter/context, affected player/resource,
category, selected subject where supplied, server time, notice version and
current authority generation. It is private by default. Shared-device home,
lock-screen and app-switcher states show only a neutral status such as `Help
request submitted`, not report details.

## 4. Case state and safety actions

```text
submitted
  -> safety_triage
  -> restricted_handling
  -> scoped_protection_if_needed
  -> specialist_or_external_escalation_if_required
  -> outcome
  -> safe_notification_or_review
  -> closed_or_retained_under_SP-061
```

Every transition records the accountable human, purpose, sanitized reason,
server timestamp, affected scope and next review/response time. A qualified
human decides any report to police, eSafety, a club body or another authority
under the applicable duties; the application does not automatically forward
an allegation or media.

Available temporary protections are narrow and reversible where safe:

- revoke one coach assignment or media grant;
- prevent further private feedback/contact;
- stop new sharing or cloud-media access;
- restrict a disputed guardian action under SP-061;
- withdraw one unsafe content/plan version from new online starts; or
- preserve minimum necessary evidence under an authorized reviewed hold.

A safety restriction does not delete evidence, disable the player's whole
account, prevent immediate Stop or remove safe local practice unless a human
decision records why the exact route is unsafe.

## 5. Conflict-safe recipient matrix

| Report subject/category | Initial trusted recipient | Explicit exclusion |
|---|---|---|
| Coach | Named safeguarding owner or alternate | Never the named coach; no automatic club forwarding |
| Guardian | Named safeguarding owner or alternate | Never the named guardian; no shared-household notification with details |
| Club administrator | Independent platform safeguarding route | Not that administrator or an unreviewed direct subordinate |
| Primary safeguarding owner | Named alternate/external route | Not the primary owner |
| Alternate safeguarding owner | Primary or separately named external route | Not the alternate |
| Privacy/data handling | Restricted privacy owner, with safeguarding visibility only as needed | Ordinary support/Linear receives no report content |
| Technical issue without allegation | Ordinary support using minimized diagnostics | No private footage or unrelated child data |
| Immediate danger | On-screen trusted-adult/emergency guidance plus human internal escalation during staffed windows | Never wait solely for an app response |

The reporter, reported person, guardian, coach, club and ordinary operator do not
automatically receive one another's statements, evidence, identity or case
history. Notifications use the minimum safe status and are withheld where they
could increase risk or compromise an investigation.

## 6. Pilot response expectations

| Class | User guidance and internal target |
|---|---|
| Immediate danger | Tell the user to contact a trusted adult/emergency services now; alert the staffed safeguarding route immediately when available |
| Critical safety/privacy risk | Acknowledge within one hour during declared staffed pilot windows; apply scoped containment first |
| Serious non-immediate concern | Acknowledge by the next staffed period and set an accountable review time |
| Ordinary product/technical issue | Route to support with a stated response expectation and minimized information |

These are internal pilot targets, not a 24/7 promise. The pilot notice publishes
the actual staffed window and the out-of-hours external/trusted-adult route.
Wider release requires funded coverage that matches any published promise.

## 7. Communication and evidence rules

- No unrestricted child-to-coach private messaging is introduced.
- Coach feedback remains structured and visible only to its approved recipients.
- A support worker or agent cannot browse private child media to investigate an
  ordinary case.
- Do not request passwords, live TOTP codes, seed secrets or unnecessary
  identity documents.
- Rights/dispute/report content stays in the restricted case store. Linear may
  contain only an opaque ID, sanitized status, severity and accountable owner.
- Preserve the minimum evidence required for safety/legal purpose. Apply the
  SP-061 hold/retention schedule and delete unrelated material.
- A user receives a neutral receipt, safe status, available review/complaint
  route and an explanation of any action that can be shared safely.
- Decisions affecting account, role, guardian, media or content access use
  current authorization and an attributable idempotent command.

## 8. Human ownership gate

Before any real child-data pilot, the founder must record:

- primary safeguarding owner name and reachable method;
- alternate name and independent escalation method;
- declared staffed pilot windows and out-of-hours wording;
- applicable NSW/Australian screening, reporting and referral obligations;
- approved police/emergency/eSafety/club referral criteria;
- case access list, retention and conflict-substitution rules; and
- a synthetic tabletop demonstrating owner and alternate receipt.

An advanced AI agent cannot satisfy either human role. If the two accountable
human routes are not available, child participation remains blocked.

## 9. Completion result

`ACT-SP-062-01` passes as accepted design/specification work. F32/F33 entry,
classification, triage, conflict-safe recipients, scoped protection, response,
privacy and escalation are explicit. Human staffing, jurisdictional duties,
screens and all real-case behavior remain unperformed.
