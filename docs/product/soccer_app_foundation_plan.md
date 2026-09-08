# SoccerTrainingApp — Foundation Plan

## Direction

Build a cross-platform youth soccer training companion for ages 5–18 using Flutter, with local-first training and optional private cloud services. Use realistic pre-rendered drill demonstrations, deterministic timers, optional camera recording, progress history and scoped family/club administration.

## Audience bands

Design separately for:

- 5–7
- 8–10
- 11–13
- 14–17
- 18

Age suitability and skill level are separate dimensions. Younger players may need parent-assisted setup; 18-year-olds manage their own adult account and permissions.

## Training model

Players can train by:

- structured program;
- playing position;
- individual drill library;
- coach/club assignment.

Every drill declares prerequisites, space, equipment, surface, assistance, work/rest, cues and age/ability suitability.

## Starter content

Pilot begins with 12 coach-reviewed drills covering close control, receiving/passing and movement-oriented exercises. Production design must allow coaches/content owners to add more drills and variants without an application-level 12-drill cap.

## Recording

Support:

- no-camera training;
- per-exercise clip recording;
- full-session recording with chapters.

Training must continue locally if internet is unavailable. Camera/video failures must be represented honestly.

## Storage

Local save is primary. Optional cloud backup occurs only after local success and owner choice. Show copy state, quota, retention, deletion and sync/recovery status clearly.

## Administration hierarchy

- Level 0 — Platform administration
- Level 1 — Club administrator or direct-parent administrator
- Level 2 — Coach
- Level 3 — Player

The hierarchy is descriptive; real permissions are scoped by resource/action/context.

## Club route

Clubs manage teams, memberships, coaches, activities, plans, assignments and scoped progress. Families retain their own accounts, consent and media-sharing authority. Club sponsorship/payment never gives automatic access to private practice footage.

## Direct-parent route

Parents create/manage player profiles, choose plans, record locally, purchase family access, configure optional cloud backup and decide whether to share specific attempts.

## Technology baseline

- Flutter mobile
- Drift/SQLite local records
- Supabase managed backend
- Next.js adult/admin web portal
- private object storage
- RevenueCat/store billing plus Stripe for web/club cases
- Blender/approved animation production
- GitHub + Linear delivery workflow

## Critical early risks

1. simultaneous demo/timer/camera performance on representative phones;
2. long-recording reliability and interruption recovery;
3. safe local/cloud media lifecycle for children;
4. realistic, age-appropriate coaching content;
5. identity/recovery design that prevents player-to-adult privilege escalation;
6. sustainable support, media and animation economics.
