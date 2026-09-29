# Soccolo resume handoff — 29 September 2026

Owner will resume when usage renews. No scheduled follow-up, new mobile build or
provider provisioning is requested. Read this handoff and the linked scope first.

## Current device and source state

Follow-up app commit: `eb8529b` on `feat/sp014-local-camera-feasibility`.
Includes export/duration fixes, instruction revision, tests and implementation handoff.

- Installed: signed Ad Hoc `0.1.0 (21)`, implementation
  `4fb41acfd79b74615cbca51bd35e062c765e4a83`. No store submission.
- Device checks 1/2/3/5/6/7/9 reported working; filtering in check 8 works.
  Storage refresh was not explicitly confirmed. Recording works; export failed.
- Source correction measures video duration instead of the capture stopwatch for
  full-session exports, rebases chapters and adds mismatch diagnostics. My Videos
  now formats long durations as minutes/seconds.
- D01–D10 instruction revision `2026-09-29.1`: numbered steps and clearer cues.
  Work/rest, repetitions, setups and placeholder mappings remain unchanged.
- Analysis and 100 Flutter tests passed; nine training tests passed after the
  text update. Native iOS compilation and export device retest remain outstanding.
  These corrections are not installed Build 21. No new build started.
- Unique videos expected in approximately two weeks; placeholders stay. Preserve
  accepted branding, silent capture and existing local data.

See [device evidence](local-usability-2026-09-29.md) and
[complete scope/review/backlog](../content/local-player-pathway-accessibility-review-2026-09-29.md).

## Agreed scope

Accounts/sign-in are now in scope, an explicit exception to earlier cloud deferral.
Player/Guardian onboarding, age bands, guardian-managed minors, free profile
switching after sign-in, PIN/biometric Guardian area relocking on exit/background.
Persist sessions securely with token refresh, never passwords. Normal relaunch,
restart and temporary offline use do not force sign-out. Explicit logout/account
switch and invalid/revoked sessions remain boundaries. SMS is excluded entirely.

Per-player landing dashboard requested. Proposed metrics: completed attempts,
distinct drills, practice days, recent activity and Continue practice. Deduplicate
plan/standalone events. Active minutes need reliable measurement; no skill scores.

Approved implementation backlog: practice stars, personal milestones, cosmetic
avatar rewards, accessible celebrations, personal journey and optional offline
practice music. Music plays during training/recording only. Originals and exports
remain silent; soundtrack export is excluded, not deferred. No reward premium for
recording/sharing, no missed-day penalties or sibling leaderboards.

Pathway details, profile migration/deletion and accessibility recommendations
remain for review. Existing four pathway contracts are the starting point;
completion does not automatically raise assessed ability. Preserve prototype design.

Deferred: cross-device profiles/training/media, cloud sync/backup, payments,
subscriptions and club administration. No real-child release approval is implied.

## Provider/cost recommendations, not purchases

Supabase Auth recommended with Apple/Google/email-code sign-in; no provider chosen
or provisioned. Resend recommended for email delivery. Published prices checked
29 September: Supabase Free 50,000 MAU; Pro from USD 25/month including one Micro
project and 100,000 MAU. Resend Free 3,000 emails/month capped at 100/day; Pro
USD 20/month for 50,000 emails. Suggested early service budget USD 25–45/month;
free tiers can cover a small development pilot. Excludes taxes, domains, extra
projects, development/build services and future cloud media. This is not spending
approval or a capacity guarantee. Local child profiles do not each need an auth user.

Sources: [Supabase pricing](https://supabase.com/pricing),
[Resend pricing](https://resend.com/pricing). Firebase/Auth0 remain alternatives.

## Resume sequence

1. Inspect repositories and branches; preserve any intervening work.
2. Arrange native verification and export retest; do not silently start a signed
   build from this handoff.
3. Settle provider/recovery and migration; implement player ownership, account
   isolation and persistent sign-in.
4. Add dashboards and agreed rewards/music; apply accessibility throughout.
   Review pathway details before implementation.
5. Integrate final videos when supplied and check instruction matching/offline use.

Repositories: `Soccolo-app`, branch `feat/sp014-local-camera-feasibility`;
`SoccerAPP-repo`, branch `main`. GitHub Pages hosts the activity map, not the Flutter
app. Current scope is shown separately from frozen historic task/acceptance counts.
