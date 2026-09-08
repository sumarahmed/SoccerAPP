# SoccerTrainingApp — Pilot and Design Pack

## Experience principles

- Designed for players ages 5–18, with younger players often parent-assisted.
- The training view must be usable outdoors and from several metres away.
- Recording is optional; no-camera training is always supported.
- Keep active-session controls simple: drill/demo, timer, record state and Stop.
- Never show a successful media state before the camera/file operation actually succeeds.

## Core mobile journey

1. Adult/player selects profile and training context.
2. Choose program, position pathway or drill.
3. See setup: space, equipment, assistance and realistic demonstration.
4. Choose recording mode: no camera, exercise clips or full session.
5. Start session. Timer begins only after required capture start is confirmed.
6. During practice show large work/rest countdown, minimal cue text and optional looping demo.
7. Stop immediately when requested; finalize actual media before showing Saved.
8. Review session and chapters/clips.
9. Optionally export/share or enable private cloud backup.

## Camera recording screen

The recording screen should prioritize:

- full camera preview;
- visible but non-obstructive drill/demo reference;
- large work/rest timer;
- clear REC state and elapsed capture indicator;
- exercise/session progress;
- large Stop control;
- camera switch and microphone state where allowed;
- safe handling of interruption, permission loss, low storage and finalize failure.

The timer/session controller owns logical time. Camera FPS or animation frames must not determine elapsed training time.

## Recording modes

### Exercise clips

Each exercise can create its own durable clip. Failed finalize remains a failed/partial item and is never silently presented as a complete clip.

### Full session

One logical session can contain multiple media parts after interruptions. Preserve work/rest sections and chapter markers so review/export accurately represents the session timeline.

## Export contract

- Preserve the original source recording.
- Export begins with the app logo/brand frame, then the training footage.
- Full-session export has one intro, not one intro per chapter.
- Orientation and audio behavior are explicit and tested.
- Share handoff happens only after export success and permission checks.
- Export failure must be recoverable without corrupting the source.

## Light and Dark themes

The product follows the device/browser preference by default and may allow an explicit in-app appearance override.

Design direction:

- Navy-led base surfaces.
- Mint/green accent for positive/action elements.
- High-contrast readable text and state indicators.
- Colour is never the only signal for REC, errors, timer phase or permission states.
- Video pixels are not tinted or theme-modified.

Theme switching during an active session must preserve drill state, timer, capture, chapters and unsaved work.

## Accessibility and outdoor use

Cover text scaling, screen readers, focus/keyboard on web, captions, reduced motion, large touch targets, colour-independent cues, portrait/landscape behavior and strong sunlight. Critical actions such as Stop, OTP entry and error recovery must remain usable in both themes.

## Administration experience

Support scoped role switching for parent/coach users, age-plan editing, club/team rosters, invitations, review/publish states, calendar/activity assignment, attendance, progress, feedback, sharing/revocation and departures. Every permission-denied and revoked state needs an explicit UX, not a blank screen.

## Pilot design

Before real-child pilot work, technical feasibility should already have been proven with synthetic/consenting-adult data. Pilot research then measures comprehension, setup time, successful completion, recording reliability, support requests, no-camera completion, sharing/revocation usability, coach workflow time and perceived training value.
