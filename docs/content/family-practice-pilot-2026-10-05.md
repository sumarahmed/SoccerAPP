> Historical dated record. For the current build, scope and acceptance status, see [current product status](../CURRENT_STATUS.md). Later releases may supersede the pending work described here.

# Combined Family Practice Pilot — 5 October 2026

Owner authorized setup after reviewing the combined activity-family recommendation.
Deliver one integrated pilot increment, with internal dependency stages rather
than a separate signed candidate for each feature. The accepted export correction
at app commit `eb8529b` is the baseline; owner reported all six iPhone retest
cases passed. The family implementation and polished UI are now integrated in source; device acceptance of the new candidate remains pending.

## Authorized families

| Family | Combined scope |
|---|---|
| Accounts/onboarding | Player/Guardian setup; Apple, Google and email-code sign-in; recovery; secure persistent sessions; refresh; offline continuation; explicit sign-out/account switch; no SMS |
| Family profiles/Guardian management | Nickname, avatar, age band; remembered player; free same-account switching; PIN/biometric protection; relock on exit/background; rename, archive/restore and separate confirmed deletion |
| Ownership/migration | Account and player isolation for plans/history/media/progress; explicit claim into Existing practice; preserve originals; bind writes to starting player; prevent switching during active recording |
| Dashboard | Continue practice; completed attempts, distinct drills and practice days; seven-day activity; recent practice/media; stars/milestones; this-device labels; deduplicated attempt identity |
| Practice/pathways | Current drills and custom plans; four existing pathways with eligibility, prerequisites/equipment and current step; explicit recorded progression, no automatic assessed mastery |
| Rewards/journey | One daily star per player/drill completion; first practice, three distinct drills and five practice days milestones; cosmetics; accessible celebrations; equal camera/no-camera rewards |
| Music | Licensed offline instrumentals; off by default; per-player settings/volume; interruption-aware lifecycle; silent originals/exports |
| Media/storage/recovery | Owner attribution across recording/review/export/deletion; independent exports; per-player and total storage; interruption recovery; retain accepted export behavior |
| Accessibility/verification | Large text, semantics, contrast/targets, reduced motion, optional cues and clear errors; integrated two-account/two-player device checks |

## Setup choices

### Club presentation UI requirement — owner clarification, 5 October

The combined pilot must include the implemented, polished family UI before it
is presented to clubs. UI completion is part of the same pilot acceptance gate.
Use the already accepted SP-007 core-screen handoff, SP-077 paired themes and
Soccolo brand v4; do not restart branding or require another approval of those
accepted design foundations. Adapt the family screens to the explicitly scoped
local pilot: welcome/sign-in, player setup/switching, Today/dashboard,
Explore/drills, pathways, drill detail, recording setup/countdown/live practice,
review/media, Guardian controls, device storage and progress/rewards. Provide
consistent navigation, typography, spacing and controls, plus loading, empty,
offline and error states. Verify large text, semantics, contrast and reduced
motion in the running app.

Current evidence: the implemented Flutter family screens use accepted brand v4,
paired themes and bundled Poppins. Automated light/dark rendering and 1.8× text
navigation checks pass; 121 Flutter tests pass and Android compilation succeeds.
The signed iPhone candidate is 0.2.0 (22), with final provider/keychain, camera,
interruption and export checks still required on the owner's registered device.
Club administration and cloud sync remain outside this family increment. Final
drill demonstration media and participant release evidence remain outstanding.

Owner chose **free music**. The candidate bundles unmodified **Carefree** by
Kevin MacLeod under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/),
with in-app attribution and an asset provenance/hash record. It plays offline,
is off by default and saves volume per player; it is excluded from originals
and exports. License/source: [official artist track](https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1400037).

References: [accepted core-screen handoff](../design/ACT-SP-007-01-core-screen-handoff.md)
and [accepted theme evidence](../design/ACT-SP-077-03-acceptance-evidence.md).

- Supabase Auth selected; Apple, Google and email codes are the intended methods.
  Custom SMTP is needed before general email invitations. Resend is proposed;
  no paid plan, sender domain or email-provider credential has been provisioned.
- Existing data stays together until explicitly claimed by the adult account.
  Do not infer which child owns earlier recordings or fabricate historic awards.
- Archive profiles first; permanent deletion separately shows affected item counts.
- Reset Guardian PIN only after fresh online account authentication. Account
  recovery does not recover device-only files.
- After history deletion, recompute current participation/stars; preserve already
  earned milestones/cosmetics and prevent retries from awarding them again.
- Cosmetic mapping: first practice → shirt colour; three distinct drills → ball
  design; five practice days → profile decoration.
- Completion does not automatically increase assessed ability. Pathway
  progression is an explicit recorded decision, not a verified coach identity.

## Historical setup and verification summary

The combined family candidate delivered account/player ownership, Guardian, dashboards, pathways, rewards, saved themes and offline music. Apple/Google sign-in used Supabase; email delivery remained deferred. Build 23 passed 121 Flutter tests and 15 native tests with one skip. Signed internal distribution was prepared; real-device acceptance remained separate at that date.

Internal provider configuration, signing details and build installation evidence are maintained privately. This public summary replaces the unpublished operational draft, which was previously held because it contained internal metadata. The 18 October documentation update publishes sanitized product information only.

Owner previously reported all six requested replacement build-21 export/storage checks passed, including legacy export, paused/resumed and uninterrupted export, duration labels, storage refresh and retention of existing plans/media. This is case-specific owner evidence, not blanket acceptance of later builds.

Later releases supersede the earlier speech, UI and build-status descriptions. See [current status](../CURRENT_STATUS.md) and [current device checklist](../verification/build45-iphone-checklist.md).
