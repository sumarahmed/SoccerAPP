# Local player, pathway and accessibility review

Date: 29 September 2026. Status: instruction update authorized; pathway and
accessibility recommendations remain for review. Subsequent owner decisions
approve the account/profile access model and bring account creation and sign-in
into scope, as recorded below. Owner authorized keeping placeholder demonstrations
while unique videos are prepared (estimated two weeks). Cross-device data access,
cloud sync/backup, payments and club administration remain deferred.
The Build 21 export correction still needs native verification and device retest.

## Subsequent owner decisions: accounts now, cross-device data later

Owner approved free switching among player profiles under an authenticated
account, with a code/PIN or Face ID protecting the Guardian area. Owner then
explicitly brought account creation and sign-in into the current scope.
This supersedes the earlier account deferral and unrestricted management
proposal below. It records approved scope, not completed implementation.

Current scope:
- Account creation and sign-in, with Player/Guardian onboarding and age-group
  setup. Minors follow guardian-assisted setup; guardians create child profiles.
- Multiple local player profiles belonging to the signed-in account; switching
  among those profiles requires no additional authentication.
- Protected Guardian area for profile creation, age changes, archiving and
  permanent deletion. Recommended unlock: device biometrics with a guardian
  PIN fallback and a PIN-only option for devices whose biometrics are shared.
- Relock Guardian management when leaving that area or backgrounding the app.
- Authentication lifecycle: account verification, session restoration, sign-out
  and account-access recovery must be designed with the selected provider.

Boundary: genuine online accounts require an authentication service now.
Deferring cloud data does not mean replacing real sign-in with an insecure
local password form. Profiles, plans, progress, recordings and exports remain
device-local in this increment; authentication must not upload them implicitly.
Signing in on another device must not imply that existing local data appears
there. Cross-device data access and synchronization remain future work.

Recommended implementation details still to settle: authentication provider and
sign-in method; guardian PIN recovery; account switch
isolation and explicit claiming of existing unassigned data. Sign-out should
preserve local files while hiding the account's library; another account must
not inherit it. Account recovery cannot promise recovery of device-only files.
No provider has been chosen or provisioned, and no authentication is implemented
by this scope decision. Payments/subscriptions and club administration remain
out of scope. Do not trigger a new build solely from this scope update.

### Owner decision: no SMS; persistent sign-in

SMS sign-in, SMS verification and SMS account recovery are excluded from the
authentication backlog, not deferred features. Use the agreed non-SMS choices:
Apple, Google and email authentication. No phone number is required for sign-in.

Persist the authenticated session securely across app closure, process restart
and device restart. Restore the account and last selected local player without
asking for credentials during normal use. Store provider session credentials
using platform secure storage, never the user's password. Refresh expiring
access tokens automatically using the provider-supported refresh mechanism.
Do not configure routine inactivity sign-outs that undermine this requirement.

Explicit sign-out clears local session credentials; choosing a different account
must preserve account isolation and authenticate the target account as needed.
Account deletion, provider revocation or an invalid/unrecoverable refresh session
may require sign-in again. Do not promise that a revoked session remains valid.
Temporary network failure alone must not erase the session or force sign-out;
previously authorized local practice remains available offline, while operations
requiring server authentication wait for reconnection. This does not provide
offline account creation, recovery or immediate remote-revocation detection.

Free player switching within the same account remains separate from account
switching. Guardian PIN/biometric protection continues to relock as specified
even while the account stays signed in. Signing out preserves device-local
recordings and histories but hides them from other accounts.

Acceptance checks: relaunch/reboot without login; token refresh during connected
use; offline launch without destructive sign-out; sign-out clears credentials;
account switching never reveals another account's records; revoked/invalid
sessions recover through sign-in; Guardian area remains protected; no SMS path.

## Subsequent request: per-player landing dashboard and authentication review

Owner requested a landing dashboard for every player profile. Include this in
the proposed profile experience; exact metrics and layout below are recommendations,
not implemented features. Retain the accepted visual style. After sign-in/profile
selection, open that player's dashboard; switching profiles updates the entire
view without reauthentication.

Recommended order: player selector and name; Continue practice/current pathway
step (or Choose a drill); three summary cards; seven-day activity view; recent
practice and recordings. Default reporting period is the last seven local calendar
days including today, with 30-day/all-time options. All labels say this device
while cross-device data remains deferred.

Recommended initial metrics:
- Practice days: distinct local dates with a completed drill attempt. Label
  accordingly so stopped-only activity is not silently reported as completion.
- Completed drills: number of completed attempts, including repeated drills;
  exclude skipped/stopped attempts and count a plan-linked practice only once.
- Different drills practised: number of distinct drill codes with a completed
  attempt, out of the current ten-drill catalogue. This measures variety, not mastery.
- Current pathway step is a separate navigation/progress card; do not represent
  practice completion as assessed skill advancement.
- Recent practice can show completed, skipped and stopped outcomes explicitly;
  recording/export counts are secondary library information, not training success.

Active practice minutes are useful later but require consistent event measurement
across recording and no-camera modes, excluding rests, setup, pauses, background
time and playback. Existing footage length/stopwatch totals cannot stand in for
active practice time. Show unavailable coverage honestly for older records, not
zero or invented estimates. Existing app progress currently covers saved plan
sessions; unified standalone/plan stats require a stable attempt identity and
deduplication before advertising whole-profile totals. Preserve existing history
deletion effects; deleting media alone must not erase participation. Do not offer
calories, accuracy, technique scores, readiness or peer rankings without evidence.

Authentication comparison reviewed against provider documentation on 29 September:
- Recommended: Supabase Auth, consistent with the existing architecture direction;
  supports email/password, email OTP/link and social providers, with Flutter support.
- Alternative: Firebase Authentication, with an official Flutter integration;
  attractive if the broader backend direction changes to Firebase.
- Alternative: Auth0, with Flutter support and a dedicated identity platform;
  consider if broader identity/enterprise requirements become central.

Recommended initial sign-in choices: Continue with Apple, Continue with Google,
and Continue with email (one-time code). Email/password is a viable alternative
if preferred; do not add every method at once. Passwordless email depends on
reliable email delivery and mailbox access. Configure production SMTP for Supabase;
its default sender is for evaluation, not a production delivery service. SMS is
excluded by owner decision. Defer passkeys pending a separate review (Supabase currently labels
passkeys experimental). Provider pricing/limits and operational setup must be
checked before provisioning; no vendor commitment or new account was created.

Account sign-in is for the adult player/guardian; child profiles need no separate
email or provider identity. Social identity does not verify guardianship or age.
PIN/Face ID unlocks Guardian management locally; it is distinct from online
account authentication and from the existing plan's MFA requirement for sensitive
account changes/future cloud-media access. Support explicit secure linking of
login methods so a second method does not accidentally create a separate household.
Profile switching remains free of additional authentication. Persistent sign-in
and offline local practice follow the owner decision above; new sign-in,
recovery and remote revocation cannot be claimed to work without connectivity.

References:
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Supabase Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)
- [Email code/link authentication](https://supabase.com/docs/guides/auth/auth-email-passwordless)
- [Production email delivery](https://supabase.com/docs/guides/auth/auth-smtp)
- [Passkey status](https://supabase.com/docs/guides/auth/passkeys)
- [Firebase Flutter authentication](https://firebase.google.com/docs/auth/flutter/start)
- [Auth0 Flutter](https://auth0.com/docs/quickstart/native/flutter)

## Instruction update completed in local app source

`apps/mobile/assets/local-training-catalog.json` in Soccolo-app now records
instruction revision `2026-09-29.1`. Each drill has four short numbered steps.
They clarify control before speed, reset actions, the intended ball path and
what counts as a repetition where applicable. D05/D10 count attempts rather
than successful outcomes. D09 retains the coach-selected move and prescribed
side counts. D06 retains the stated partner/rebound setup distinction.

The change retains all drill identities, titles, goals, setup descriptions,
prescriptions, work/rest settings, repetition counts and temporary sample
mappings. Camera recording remains silent. Placeholder media do not become
accurate demonstrations through this text change; keep their explicit labels.
The user authorized this instruction revision. Do not describe the revised
wording as having been separately reviewed by Aaron M or silently update the
frozen `base.v1` approval evidence. Match the forthcoming final demonstrations
against these exact instructions during content review.

Research supports clear control/awareness cues and age-appropriate, enjoyable
practice; it does not validate this application's exact workload or every
player's readiness. References reviewed:

- [FIFA: dribbling as a positive start](https://www.fifatrainingcentre.com/en/practice/grassroots/grassroots-and-youth-football-essentials/grassroots-coaching-essentials/jene-3-dribbling-as-a-positive-start.php): simple, enjoyable practice, frequent ball contact and adaptation to the player.
- [FIFA: ball mastery and combination play](https://www.fifatrainingcentre.com/en/practice/grassroots/4-to-8/ball-mastery-and-combination-play.php): controlled movement, readiness to receive and awareness of space.
- [FIFA: directing the first touch](https://www.fifatrainingcentre.com/en/practice/elite-sessions/in-possession/directing-the-ball-with-the-first-touch.php): body orientation and receiving into useful space. Used for technical principles only; elite session workloads were not transferred into child practice.

## Training pathways: recommended local design

Build on [the accepted pathway contract](ACT-SP-151-01-pathway-coverage.md)
and [eligibility guidance](ACT-SP-151-02-eligibility-parent-guidance.md).
These are learning sequences across practice occasions, not an instruction to
complete every listed drill in one sitting or a weekly workload prescription.

| Pathway | Existing route | Recommended presentation |
|---|---|---|
| Ball control | D01 → D02 → D03; age 5–7 repeats D03; age 8–18 coach selects D04 or D08 branch | Default introductory route where eligible; show one current step |
| Passing foundations | Age 5–7 D05; age 8–10 D05 → D06; age 11–18 D05 → D06 → D07 | Show partner/gate/rebound requirements before starting; preserve contract-specific finishing branch |
| Move and turn | Age 8–18 D03 → D04 → D08 → D09 | Offer after prerequisite review, with clear approach/exit space |
| Receive and finish | Age 8–18 D05 → D06 → D10 | Check partner, suitable target and clear retrieval area |

Each pathway should show purpose, eligible age route, prerequisites, equipment,
current step, completed practice and a clearly named easier option from the
accepted contract. Show why a step is unavailable; never silently substitute
another activity. Age suitability and ability remain separate.

Recommended completion choices: repeat, stop, or return to pathway review.
Completion does not unlock a harder step or establish mastery. A coach-approved
progression decision can be recorded locally with date, drill revision and a
short note; describe it as user-recorded, not digitally verified authority.
Parents can record observations without changing assessed ability. Avoid skill
scores, leaderboards, streak penalties or catch-up stacking. Optional player
reflection: comfortable / challenging / want help, treated as observation only.

Retain custom plans as user-arranged practice. Pathways guide learning; plans
store chosen activities. Do not force a week-by-week program or calculate a
time-fit recommendation for self-paced drills whose duration is unknown.
The existing SP-152 signed/server recommendation design is not implemented by
this local proposal; do not claim equivalent authority or introduce its cloud
dependencies. Local adaptation needs its own implementation contract.

## Multiple local players: recommended household model

| Decision | Recommendation |
|---|---|
| Profile fields | Nickname, built-in avatar, age band (5–7 / 8–10 / 11–18 / outside current catalogue), optional preferred foot and practice interest; no exact birth date or mandatory photo |
| Unknown age | Profile may exist; ask for age band before age-specific pathway recommendations. Never infer ability from age or preferred foot |
| Selection | Remember the last player; show their name prominently on Home, Practice and My Videos and on the Start action |
| Isolation | Separate run history, progress, checkpoints, originals, exports and pathway position by player |
| Shared resources | Share bundled drills/videos and device accessibility preferences; copy plan templates to another player explicitly, excluding history |
| Active practice | First version permits one unfinished run per player, but only one recording/practice execution device-wide. Pause no-camera work or stop/finalize capture before switching; resume explicitly |
| Attribution | Freeze player identity when a run/capture starts; switching profiles must never reassign a finishing write or export |
| Older data | Keep existing items together in an Existing practice profile; invite the owner to rename it. Never guess which child made a recording |
| Corrections | Later offer explicit reassignment of a run with its linked history/media as one operation; do not duplicate progress |
| Removal | Archive a profile by default, preserving its records and media. Any permanent deletion is a separate, explicit action with item counts and recovery limits |
| Storage | Show both this player's usage and total device library usage, including archived/unassigned material; count shared files once |
| Privacy | A player selector separates organisation, not access security. Anyone using the unlocked app may see other profiles. Review an optional device-authentication gate for management separately |
| Recovery | Explain that local records have no cross-device sync; full offline backup/restore is a separate priority before broad use. Photos/Files exports are not a complete progress backup |

Migration acceptance: existing files/exports survive; two players cannot see
each other's filtered histories accidentally; renaming preserves identity;
interrupted writes remain attributed correctly; archive/restore preserves
counts; a profile switch cannot carry a timer or recording into another player.
Use stable local IDs and a versioned, recoverable ledger without duplicating
video files. Do not add club rosters or coach accounts to this increment.

## Accessibility: recommended acceptance requirements

Use the product-wide requirements in
[SP-062 accessibility coverage](../design/ACT-SP-062-02-accessibility-and-asset-coverage.md)
as the baseline. Its historical blocked-content inventory predates later
approvals; it is not evidence of current runtime failures or new coaching gates.
Target applicable WCAG 2.2 AA behavior together with native platform guidance;
do not claim conformance until the relevant complete journeys are tested.

| Area | Required behavior and verification |
|---|---|
| Large text | Respect system text scaling; test largest native accessibility size and supported small screens. Instructions, player names and Stop must remain readable/operable without clipping |
| Touch | At least 44×44 pt on iOS and 48×48 dp on Android; prefer 48 logical pixels across Flutter controls and larger primary practice controls |
| Contrast | At least 4.5:1 ordinary text, 3:1 large text and meaningful UI boundaries/icons; verify light/dark themes and outdoor readability |
| Phase guidance | WORK/REST/PAUSED/RECORDING in text and accessible state, never colour alone. Show minutes/seconds with accessible unit names |
| Screen readers | Labels, roles, values, sensible focus order and stable focus after dialogs/deletions. Announce phase changes once; avoid announcing each timer tick |
| Motor access | Voice Control/Switch Control/TalkBack-compatible actions; visible focus and keyboard operation where supported. Reorder plans with Move up/down alternatives to dragging |
| Cues | Independently optional sound and haptics, with equivalent visible text. Recording files remain silent; muted sound must not hide a transition |
| Motion | Respect reduced motion and avoid flashing. Branding must carry no essential instructions that depend on its animation |
| Media/content | Plain short steps and written technique description now; final demos need matching written description, meaningful speech captions/transcript when present, and nonvisual access to essential technique information |
| Timers/interruption | Pause remains easy to find. Do not impose time limits on reading/setup. Background restores paused with no credited background time; native recording interruptions produce an explicit saved/paused/stopped result |
| Errors/permission | Camera denial still permits no-camera practice. Errors identify the problem and retry action. Export failure preserves the original; deletion confirmation names the player and item |

Verify end-to-end: choose player → find drill → read setup → practise/pause →
finish → review/export → remove selected item. Run with VoiceOver on iPhone,
TalkBack on Android, large text, reduced motion and device control aids, plus
Flutter semantics/target/contrast checks. Accessibility settings must not silently
change coach-prescribed work/rest values; any adapted activity is a distinct
content decision. Preserve the accepted prototype visual design.

Sources:
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — contrast, non-colour communication, resizing and input alternatives.
- [Flutter design guidance](https://docs.flutter.dev/ui/accessibility/ui-design-and-styling) — native target sizes, scaling and contrast.
- [Flutter accessibility testing](https://docs.flutter.dev/ui/accessibility/accessibility-testing) — target, semantic label and contrast checks.
- [Apple Dynamic Type](https://developer.apple.com/videos/play/wwdc2024/10074/) — support the user's preferred system text size.

## Approved implementation backlog: rewards and practice music

Owner accepted the gamification recommendations for implementation and explicitly
excluded adding a soundtrack to recordings or exports. These are pending backlog
items, not implemented features or authorization to trigger a new build.

| Item | Approved behavior | Acceptance evidence required |
|---|---|---|
| G01 Practice stars | One star per player, drill and local calendar day with a completed attempt; equal reward for recording and no-camera modes. Further attempts remain in history without extra stars | Persist across relaunch; deduplicate plan/history callbacks, retries and replay; skipped/stopped attempts do not award completion stars; profiles stay separate |
| G02 Personal milestones | First completed practice, three distinct completed drills, and practice on five distinct days; days need not be consecutive | Each milestone awarded once per player; accurate event attribution; no reset/penalty for missed days |
| G03 Avatar decorations | Earn cosmetic shirt colours, ball designs and profile decorations through milestones | Persist selected decoration per profile; no purchases, random prizes, skill claims or training access locked behind cosmetics |
| G04 Completion celebration | Brief celebration with optional sound and a readable completion message | Reduced motion provides a static alternative; screen reader announces once; no flashing; no obstruction of Stop or next action |
| G05 Personal journey | Dashboard shows earned stars, milestones and completed activities, separate from assessed skill/pathway progression | Completion never automatically raises assessed ability or unlocks a harder drill; no sibling/peer leaderboard |
| M01 Practice music | Small offline instrumental library cleared for app playback; optional during training, including either recording mode | Music off by default; remembered per-player preference and separate volume; works offline; licensed assets documented before bundling |
| M02 Audio lifecycle | Lower music during spoken instructions; pause on practice pause, demo viewing, interruption or background; stop on completion/exit; resume with explicit practice continuation | Test camera start/stop, pause/resume, phone interruption and audio-route changes on physical devices; visuals remain sufficient with music/cues muted |
| M03 Silent media boundary | Playback music is never captured or mixed into original recordings or exports | Microphone recording remains disabled; inspect resulting files for absence of added music/audio; no soundtrack picker, export mixing or soundtrack backlog item |

Rewards recognise recorded participation, not verified technique. Never award
extra stars for camera use, exports, sharing, greater speed or longer practice.
Never deduct rewards for rest, stopping or missed days. The daily star rule is
a reward limit, not a recommendation to perform every drill every day. Music
tempo must not alter the approved work/rest settings or prescribe movement speed.

Implementation dependencies: stable profile ownership and unique practice-attempt
IDs before reward publication; durable idempotent reward writes; dashboard
integration; accessibility settings; music asset selection and rights; physical
camera/audio checks. Finalise exact cosmetic-to-milestone mapping and reward
handling for intentional history deletion before coding the reward ledger,
preserving the already accepted semantics for participation totals and media
deletion. Do not infer historic awards where source records are incomplete.

Soundtrack export is removed from consideration, not postponed. Music is a
practice playback feature only. Existing silent originals and branded exports
retain their current behavior.

## Recommended order and decisions

1. Finish the pending export native/device verification.
2. Agree on the household profile boundaries and older-data migration; implement
   player ownership first because pathways and history depend on it.
3. Implement accessibility requirements within every changed flow, including
   existing practice/media controls, rather than leaving them until the end.
4. Introduce the four reviewed local pathways with manual, attributed progression.
5. Add approved profile rewards and practice-only music, with the dependencies
   and device checks above.
6. Integrate final videos when delivered; confirm instruction/version matching,
   orientation, written equivalents and offline playback.

Remaining owner review decisions: Existing practice migration; archive-first
removal; coach-led progression; optional sound/haptics while recordings remain
silent. Account onboarding, free profile switching and protected guardian access
were subsequently approved above. Other recommendations remain proposals;
the rewards/practice-music backlog above is also approved for implementation.
This document does not record a completed feature implementation or new build.
