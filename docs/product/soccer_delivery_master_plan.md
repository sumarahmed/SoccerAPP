# SoccerTrainingApp — Delivery Master Plan

Updated 7 September 2026 • Planning and design only

## 1. Product objective

Build a youth soccer training platform for ages 5–18 that supports both direct-family and club-managed training. Players should be able to discover age/ability-appropriate drills, understand the movement, practise with a work/rest timer, optionally record their attempt, review progress, and receive safe structured guidance. Parents retain authority over child accounts, media and purchases. Clubs and coaches manage their own scoped teams, plans and activities without inheriting access to private family media.

## 2. First-release baseline

| Area | Required outcome |
|---|---|
| Audience | Ages 5–18; age suitability is separate from ability; adult control changes at 18 |
| Routes | Direct-family and club-managed routes coexist |
| Roles | Level 0 Platform Admin; Level 1 Club/Parent Admin; Level 2 Coach; Level 3 Player |
| Curriculum | Starter catalog of 12 pilot drills; coaches can later create/propose more — no permanent 12-drill limit |
| Training | Programs, positions, drill library, realistic demonstration, cues, deterministic work/rest timer |
| Recording | Exercise-clip mode and full-session mode with chapters |
| Export | App logo/brand intro first, then the recorded training footage; original source preserved |
| Appearance | Light and Dark themes, following device preference by default; switching must not interrupt recording |
| Storage | Local-first history and media; optional private cloud backup |
| Administration | Parent, coach, club and platform workflows in responsive web/admin surfaces |
| Identity | Adult MFA/TOTP; restricted player credentials; guardian authority; scoped sessions and recovery |
| Business | Family and club subscriptions, with actual prices/quotas validated before launch |

## 3. Planned technology

- **Mobile:** Flutter/Dart for iOS and Android.
- **Local data:** Drift/SQLite for structured data; video files stored separately.
- **Camera/media:** Flutter camera/video adapters with native extension only if feasibility testing proves necessary.
- **Export:** On-device composition where feasible, with a branded intro followed by source footage.
- **Adult portal:** Next.js/TypeScript.
- **Backend:** Supabase PostgreSQL/Auth/storage with explicit row/resource authorization.
- **Private media:** upload quarantine, server validation, then authorized private object access.
- **Commerce:** RevenueCat/store integrations for mobile and Stripe for web/club billing, with central entitlement verification.
- **Content:** pre-rendered realistic demonstrations produced with Blender/approved animation workflow and qualified coaching review.
- **Delivery:** GitHub for versioned source/evidence; Linear for work tracking; named human reviewers retain gate authority.

The device owns an active training session. Loss of internet must not corrupt a local recording or prevent a downloaded drill from completing. Payment never implies guardianship or private-media access.

## 4. Delivery phases

| Phase | Outcome | Gate |
|---|---|---|
| P00 | Definition, owners, assumptions and discovery budget | G0 |
| P01 | Coaching, UX, security, data and system contracts | G1 |
| P02 | Repository, environments, tracker and controlled agent trial | G2 |
| P03 | Camera/media, local data, identity, cloud and billing feasibility | G2 |
| P04 | Shared records, identity lifecycle and offline foundation | G3 |
| P05 | Training, recording, replay and branded export | G3 |
| P06 | Parent, coach, club and platform workflows | G3 |
| P07 | Private cloud media, sandbox commerce and operations | G3 |
| P08 | Integrated QA/security/accessibility and pilot acceptance | G3 |
| P09 | Consented family/club pilot, correction and economics | G4 |
| P10 | Commercial readiness, release rehearsal and launch | G5 |
| P11 | Operation, maintenance and justified expansion | G6 |

## 5. Human-owned decisions

Humans must approve product scope, coaching suitability, safeguarding, privacy, security acceptance, prices, supplier spend, release publication and any real-family research. Agents can prepare drafts, code, tests and evidence inside an explicitly bounded assignment but cannot fabricate specialist approval or mark human gates accepted.

## 6. Immediate priorities from competitive review

The market review found that camera/timer/offline/admin capabilities are necessary but not sufficient differentiation. Five immediate product priorities should be reconciled into the delivery backlog before affected implementation is dispatched:

1. **Clear next-practice recommendation:** after a session or plan completion, show an age-appropriate next activity using approved curriculum logic rather than open-ended AI coaching.
2. **Structured progression:** make skill pathways and prerequisites visible so families understand what improves next.
3. **Useful progress evidence:** private completion history and coach-approved milestones, not speculative automated technique scores.
4. **Closed coach feedback loop:** deliberate guardian/adult submission to an assigned coach, structured feedback, linked follow-up activity, revocation/expiry support, and no unrestricted private adult–child chat.
5. **Healthy weekly goals:** optional private goals/milestones and adult-configured reminders without public rankings, pressure loops, or a requirement to upload video.

Automated camera scoring, public leaderboards, talent prediction, coach marketplace, unrestricted messaging, live rotatable 3D and unattended autonomous dispatch remain outside the first-release baseline unless separately justified and reviewed.

## 7. Feasibility gates that must happen early

Before committing to the full build, prove on named iOS/Android devices:

- simultaneous camera preview/capture, timer, demonstration and audio behavior;
- both exercise-clip and long full-session recording;
- interruption/recovery behavior for calls, backgrounding, low storage, rotation and permission changes;
- deterministic session timing independent of UI frame rate;
- local persistence/migrations and safe reconnect;
- on-device logo-first export with correct orientation/audio/timeline;
- adult MFA and restricted child/player sessions;
- one authorized resumable private upload path;
- sandbox billing/entitlement verification.

The feasibility decision is **go / revise / stop** with explicit measured limits and a revised estimate.

## 8. Product invariants

- Recording is optional; no-camera training remains a first-class path.
- The UI must never show REC/Saved/Uploaded unless the underlying media operation actually succeeded.
- Theme changes must not reset timers, drills or recording.
- Full-session mode contains work and rest periods and preserves chapter markers.
- Export adds one branded intro; it does not overwrite the source recording.
- Cloud is optional and follows a successful local save.
- A coach/club only sees media through an explicit purpose-specific grant.
- Child/player credentials cannot silently become adult/admin sessions.
- Deletion, revocation and guardianship changes must reconcile after offline periods.
- Released drills/animations require qualified review tied to the exact asset/version.

## 9. Definition of Ready for agent work

A task is not agent-ready until it has: one bounded outcome; exact repository/branch/base commit; approved file paths; current contracts/design/content version; named accountable owner and reviewer; test data/device/environment; explicit acceptance criteria; security/data constraints; time/spend/attempt limits; and a clear recovery/revert path.

## 10. Definition of Done

Done means the exact change is versioned, tests/checks actually ran, negative cases relevant to the task were exercised, evidence is attached to the exact build/content/config, unresolved limits are recorded, and the named human reviewer makes the applicable decision. A percentage reported by an agent is not acceptance.

## 11. Status

This repository currently represents planning/design. It does not claim a production app, database, billing system, imported Linear workspace, verified child research, security certification or commercial release.
