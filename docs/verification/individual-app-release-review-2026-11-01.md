# Soccolo individual app release review

Reviewed 1 November 2026. Application baseline: `Soccolo-app` main at `a3deef5`, version `0.2.0+63`.

The intended release serves individual players, including children managed by a parent, on **iPhone and Android together**. Club administration, team management and club subscriptions belong in the separate club app.

**Recommendation: complete a smaller, dependable personal training product before expanding the feature catalogue.** Soccolo already has a substantial practice, recording and review foundation. The current source is an internal pilot, and I would not submit it for a public release yet. Android lacks several important iPhone capabilities; the content pipeline still requires internal placeholders; account deletion is absent; child content eligibility is not consistently enforced; and enabled analysis tests expose a timing regression.

The strongest additional product feature is **Today’s practice**: help a player choose a suitable session, finish it, understand the result and know what to do next. Pair this with a short, reviewed starter programme and simple weekly goals. More drill names, a marketplace or live AI feedback will add less launch value while these basics remain unfinished.

## Scope and confidence

This review covers the active app entry points, player and guardian flows, Train, plans and pathways, practice modes, camera integration, analysis and history, video review and export, Library, settings, storage, authentication, platform configuration and verification workflows. It combines source inspection, fresh local tests and selected Flutter-rendered screens. It is not a physical-phone acceptance test or a production-service audit.

The latest documented installed iPhone build is 62. The current source prepares Build 63; the [31 October checkpoint](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/WORK_CHECKPOINT_2026-10-31.md) records a successful Android debug build, not a public Android release. Older README sections retain historical claims. Where those disagree, this review uses current source and the latest checkpoint.

The separate `player-calibration-foundation` worktree contains an isolated development foundation. It is not part of this main checkout. Its manual setup, contracts and simulated camera states do not establish live player tracking or improved counting accuracy.

“Implemented” below means present in the reviewed source. It does not imply that every device, age group or store release has been verified. All priorities and proposed acceptance criteria are recommendations; no implementation or release approval is implied.

## The product to release

The individual app should answer five questions well:

1. What can I practise today with my time, space and equipment?
2. How do I do it correctly?
3. Can I complete a session easily, with or without recording?
4. What did I do, and what can I learn from it?
5. What should I do next, and will my progress remain safe?

Keep personal profiles, parent management of children, local plans, private videos and optional individual progress sharing. No club membership should be needed to train. Preserve stable player, drill, session and content-version identifiers so a later, explicitly consented connection to the club app is possible without rebuilding the individual product around club roles.

For launch, I recommend Home, Train, Videos and a finished Learn/Library area. Settings should expose the appropriate Account or Guardian controls. Remove the fictional Coaches destination and preview booking card from the production navigation. One-to-one coaching can be a later individual-app service, but it needs real operations, safeguarding, availability, payments and support before appearing as a customer feature.

## Feature inventory and gaps

| Area | What exists | What matters before release |
| --- | --- | --- |
| App entry | `FAMILY_PILOT` selects the family shell; the default is the older local training shell. | One deliberate production experience on both platforms. A plain build currently produces a different app from the configured iPhone build. |
| Sign-in | Apple and Google authentication, secure session/PKCE storage, cached identity and recovery messages. | Remove test-account limitations and pilot copy; verify provider access, callbacks, cancellations and offline reopening. Decide why account creation is needed for a local-only product. |
| Player profiles | Nickname, age band, photo/initials, selection, archive/restore and permanent local player deletion. Data is scoped to account/player directories. | A supported adult-player path; finer content eligibility where needed; account deletion distinct from deleting a player; child media permissions. |
| Guardian | Six-digit salted PIN verifier, five-attempt lockout, optional device biometrics, reauthentication for PIN recovery and relocking. | Extend protection to child media leaving the app and future purchases. A device PIN/biometric check does not verify legal guardianship. |
| Home | Resume unfinished practice, activity summary, last practice and touch dashboard. | Lead with a specific useful session rather than a general navigation button; remove fictional bookings; distinguish practice from analysis coverage. |
| Drill discovery | 22 selectable drills, search, focus filters, descriptions, equipment and space information. D13/D14 remain reserved. | Publish only reviewed content; add usable filters for time, equipment, space and solo practice. Current metadata is not a release eligibility system. |
| Demonstrations | Three original drill design samples, a temporary D03 video, short card previews for D01/D03/D04/D06 and fallback stills. | Dedicated, technically correct and cleared demonstrations. Most drills borrow other drill samples. The manifest explicitly prohibits player release. |
| Football pathways | Four age-routed collections: Ball control, Passing foundations, Move and turn, Receive and finish. Guardian can record a review note. | A self-service progression path for a standalone player; adult routes; distinguish a user note from qualified coach approval. Completion currently does not certify skill. |
| Custom plans and calendar | Named ordered plans, duplication/deletion, date assignment, rescheduling, guided runs, skip and explicit continuation. | Connect the next scheduled practice to Home; retain clear states for planned, started, finished, skipped and stopped work. |
| Drill timing | Global/per-drill settings, 15–600 seconds work, 0–600 seconds rest and snapshot timing for new sessions. Default is two 60-second rounds with 30 seconds rest. | Fix analysis using catalogue duration instead of the recorded prescription. Preserve historical timing during updates and reanalysis. |
| No-camera practice | Timer, cues, sounds, demo access, pause/resume, history and completion. | Keep it a complete first-class route on both phones. No camera permission or count should be needed to earn practice completion. |
| Exercise clips | Silent per-round recording with rest excluded, metadata, grouped recordings and recovery handling. | Real-device acceptance on Android and iPhone, including permission denial, app interruption, disk pressure and variable recording cadence. |
| Full-session recording | Source parts, work/rest chapters, pause gaps, explicit continuation, saved manifests and recovery. | Android storage/media checks need parity; verify long-session heat, battery, storage, app termination and export. Recording limits are not training prescriptions. |
| Practice sound and hands-free use | Bundled tone/spoken feedback options, music settings, enlarged timer and optional on-device commands. | Sound is partly portable, but voice commands depend on iOS native support. Show only available capabilities and test Bluetooth/audio interruptions. |
| Touch analysis | iOS native analysis, estimates and unavailable states, saved result versions, explicit reanalysis, baseline restoration and FPS rejection paths. | Repair timing, validate each enabled drill on phones and implement Android or postpone analysis from the common launch offer. Desktop pipeline acceptance is not mobile accuracy evidence. |
| Progress | Practice days, drills, active practice facts, rewards; touch totals by day/week/month/year, exercise and body category. | Explain what was measured and what was not. Add goals, next steps and comparable trends; counts alone do not establish better technique. |
| Videos and comparison | Player-scoped recording browser, playback, round selection, seeking, speed controls and comparison against a demo. | Replace mismatched demos; test seeking/rotation/codecs and large libraries; add brief reflection before advanced video tools. |
| Export and sharing | Branded composition, verification, saved export list, original/export distinction and iPhone Photos/Files/share actions. | Android export is explicitly unsupported. Add guardian authorization for child egress and make saved copies/retention consequences clear. |
| Physical Library | 13 written exercise resources, four descriptive pathways, calendar plans and completion records. | All video slots are empty. Exercises are labelled foundation examples for 14+, but the Library receives no age eligibility context. |
| Mindset Library | 10 written sound-bite resources, three pathways, transcripts/guides, calendar plans and completion handling. | All audio slots are empty. Supply reviewed recordings/transcripts or release a coherent written-guidance experience without disabled media controls. |
| Meal guide | Four recipes, diet filters, estimated quantities/macros/calories, allergens, methods and provenance. | Qualified review and age-appropriate presentation. Keep educational recipes separate from personalised nutrition advice, calorie goals or food intake tracking. |
| Appearance and accessibility | Paired light/dark themes, system theme, semantic controls, narrow/large-text tests and reduced-motion treatment for previews. | Preserve this work. Add actual VoiceOver/TalkBack, outdoors, distance readability and physical-device text scaling checks. |
| Storage and recovery | Local inventory, recording/export deletion distinctions, recovery copies and interruption handling across several stores. | A clearly defined device-loss/reinstall story, safe export/restore, realistic storage budgets and consistent recovery across platforms. |
| Support and diagnostics | Version details and local analysis diagnostics. | Add accessible help, privacy/terms, contact/feedback and a redacted diagnostic export. No customer support or crash-reporting flow is wired into the family shell. |
| Cloud and billing | Backend contracts, upload/entitlement models and technical readiness/sandbox tooling. | These are not a production family backup or subscription journey. Treat payment as a separate launch gate only if charging at launch. |

Primary implementation references: [family shell](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_pilot_app.dart), [Train](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/training_hub.dart), [guided practice](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/guided_practice_flow.dart), [Library implementation](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/LIBRARY_IMPLEMENTATION_2026-10-26.md), [video hub](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_video_hub.dart), [practice journal](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_journal.dart), [analysis](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_analysis.dart) and [app entry](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/main.dart).

## Release blockers

P0 means resolve before the intended public release, either by finishing the capability or deliberately excluding it from the release offer. Excluding a feature must remove its misleading entry points, marketing and paywall promises as well.

### P0 1 Establish the same production app on both platforms

`main.dart` defaults to `LocalTrainingApp`; the configured iPhone workflow sets `FAMILY_PILOT=true`. The manual Android CI command builds a debug APK without that define. The legacy local shell includes technical tools and internal-only messaging, while the family shell includes profiles and five destinations. This is a configuration difference, not just visual variation.

Create a reviewed production configuration with explicit navigation, capabilities and service configuration. Add a smoke test that launches the real entry point with the exact shipping defines and checks the intended destinations. Keep debug tools and simulations unreachable in release builds. Configure Android release signing; it currently uses the debug signing configuration. Establish signed release-candidate workflows for both stores without automatically publishing them.

Acceptance: the exact iOS and Android release artifacts open the intended individual app, carry the expected version/configuration, preserve an existing installation’s data and expose no fictional services or developer routes.

Evidence: [main.dart](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/main.dart), [Android signing](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/android/app/build.gradle.kts), [GitHub workflow](https://github.com/sumarahmed/Soccolo-app/blob/main/.github/workflows/foundation-security.yml), [Codemagic workflows](https://github.com/sumarahmed/Soccolo-app/blob/main/codemagic.yaml).

### P0 2 Close Android capability gaps

The Android activity implements camera-rate queries, version information and keeping the screen awake. It does not implement the corresponding iOS analysis, export, media-inspection or voice-command services.

| Capability | Current iPhone implementation | Current Android implementation | Launch action |
| --- | --- | --- | --- |
| Timer, plans and local profile UI | Flutter implementation | Shared Flutter implementation | Verify equivalent end-to-end behaviour. |
| Camera recording | Plugin plus native integration | Camera plugin and rate checks | Validate actual captures, recovery and cadence on devices. |
| Automatic player/feet/ball setup | iOS native channel | Manual guidance fallback | Implement or clearly expose manual setup as the supported common feature. |
| Touch analysis | iOS-only availability gate | Returns unavailable | Implement/validate Android if counting is a launch promise. |
| Branded export, saved exports and sharing | Native export service | Export rejects non-iOS | Implement Android export/share before advertising the same video product. |
| Full-session storage preflight | iOS device snapshot | iOS condition skips this preflight | Add Android space checks and storage-pressure handling. |
| Video metadata inspection | Native implementation | Missing channel returns unavailable | Supply Android inspection and equivalent verification. |
| On-device voice commands | iOS native recognizer | No corresponding channel; microphone permission removed | Hide unsupported controls or implement an explicitly optional Android route. |

A debug APK compiling successfully does not establish these capabilities. For a simultaneous launch, I recommend a common core of guided practice, reliable recording, playback and export. Treat analysis as optional until it passes independent acceptance on both platforms. If AI counting is the central paid promise, postpone the launch until that parity is real.

Evidence: [MainActivity.kt](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/android/app/src/main/kotlin/com/soccolo/soccolo_mobile/MainActivity.kt), [analysis availability](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_analysis.dart), [export guard](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/local_export_page.dart), [camera setup](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_setup_guide.dart), [full-session preflight](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/full_session_page.dart), [Android manifest](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/android/app/src/main/AndroidManifest.xml).

### P0 3 Repair timing and analysis compatibility

The new timing settings are not consistently carried into analysis eligibility. `LocalPreferences.configureDrill` creates a snapshot using the selected work duration, and recording metadata carries `targetWorkMs`. However, `TouchAnalysis._run` reloads the current catalogue and requires the supplied round duration to match its default `workSeconds` within 250 milliseconds.

An isolated test against the current source produced:

| Requested complete D01 round | Observed decision before native analysis |
| --- | --- |
| Historical 20 seconds | Incomplete or split round |
| Supported preset 30 seconds | Incomplete or split round |
| Supported preset 45 seconds | Incomplete or split round |
| Default 60 seconds | Passes duration gate; reaches the platform availability check |
| Supported preset 90 seconds | Incomplete or split round |

The reproduction uses no real video or model inference; it isolates the eligibility decision. Three existing tests also fail with shared-analysis build flags: reanalysis of a saved result, low-FPS handling, and the baseline-restoration UI journey. They use historical 20-second rounds. The separate enabled-practice configuration adds a fourth failure in analysis job queuing/progress. These failures are consistent with the duration gate preventing the expected analysis path; they are not evidence that the underlying detector’s accuracy changed.

Fix eligibility against the immutable recording/session prescription and verified work range, including an explicit rule for historical recordings without the newer fields. Do not fix this solely by rewriting every historical fixture to 60 seconds. Retain cached results and baseline restoration. Then exercise supported timing presets, interrupted rounds, genuinely incomplete rounds and old saved videos through recording metadata, review, reanalysis and aggregate history.

Evidence: [timing configuration](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/local_preferences.dart), [analysis gate](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_analysis.dart) lines 340–349, [recorded round conversion](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_results_page.dart), [timing tests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/test/drill_timing_test.dart), [shared analysis tests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/test/build61_shared_analysis_test.dart), [FPS tests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/test/build62_milestone_test.dart), [baseline review tests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/test/saved_review_baseline_test.dart), [analysis queue tests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/test/build58_analysis_test.dart).

### P0 4 Build a production content pipeline

The training catalogue requires `scope: internal-local` and `placeholder: true`. The demo parser requires `playerReleaseAllowed: false`, pending coach review and pending rights review. The asset checks deliberately enforce this internal-only contract. Changing a label or adding a video file will not turn it into a release catalogue.

Create a separate versioned production content manifest and loader. Each published drill needs its own reviewed demonstration, instructions, setup, equipment, appropriate age/ability guidance, cues, accessibility material and recorded usage rights. Keep the old manifest and evidence as historical records. Production validation should reject missing/unapproved media and unrelated demo substitution. Replace the hard-coded 22-item validation with explicit stable-ID/version validation so a smaller approved launch catalogue is possible without breaking saved history.

Choose the smallest catalogue that supports a satisfying starter programme—approximately 8–12 complete drills is a planning suggestion, not an acceptance count. D01/D04/D06 have design samples, not final publication clearance. D03 is explicitly temporary. The Library has 23 resources with `mediaAsset: null`; finish a small useful subset or omit those media-led areas from launch.

The current source contains 22 selectable drills: ten with accepted local development pipelines, D24 accepted as a no-touch drill, and eleven with pending pipeline review. These statuses do not certify coaching content, media rights, measurement accuracy or phone integration.

Evidence: [training catalogue](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/assets/local-training-catalog.json), [catalogue loader](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/training_catalog.dart), [demo manifest](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/assets/sp006-animation-review-assets.json), [demo parser](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/prototype_catalog.dart), [Library catalogue](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/assets/library-catalog.json), [media validation](https://github.com/sumarahmed/Soccolo-app/blob/main/tests/mobile/validate-prototype-assets.cjs), [accepted pipeline register](accepted-local-pipelines.md).

### P0 5 Enforce child content eligibility and support adults

The current profile age bands are 5–7, 8–10, 11–18, outside and unknown. Football pathways return no route for outside/unknown, so an adult can reach a dead end labelled for Guardian review. The Drills list filters by search/focus, not player eligibility, and the detail route receives a player name rather than an age/permission policy. A child can therefore reach content beyond the age-routed pathways.

D12 Head juggling is selectable and carries written restrictions, but there is no enforced eligibility check in this discovery path. The Library shows 14+ physical examples while its route only receives a directory; the 11–18 band cannot establish whether a player is 14. Written warnings are useful but do not resolve those product boundaries.

Add an explicit adult self-managed profile and a content eligibility policy used consistently by discovery, plans, pathways, direct navigation and resumed sessions. Use only the age information needed to make the decision; an exact birth date is not automatically necessary. Existing unknown/broad bands need a safe migration and a request for clarification where required.

My launch recommendation is to omit D12 from unsupervised practice and from all volume/touch challenges until an age- and market-specific programme has qualified review. Retain historical records. Limit strength/plyometric content to reviewed eligible audiences; publish age-appropriate alternatives for younger children. Do not treat a parent-entered note as medical clearance or a verified coach assessment.

Acceptance: a child, an adult and a profile with unknown age each get a usable, appropriate route; a restricted drill cannot be started through another tab, custom plan or old run. Safety-critical rules apply even when historical session timing is preserved.

Evidence: [profile age bands](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_pilot_store.dart), [profile editor](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/player_editor_dialog.dart), [pathway routes](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_pathways.dart), [Train filtering](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/training_hub.dart), [Library entry](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_pilot_app.dart), [Library resource guidance](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/library_resource_page.dart).

### P0 6 Finish privacy, account deletion and child media controls

Permanent local player deletion exists. Account deletion does not: the Guardian screen explicitly says it is outside the pilot. Signing out also does not delete the authentication account. Implement an adult-controlled deletion journey that covers the actual account and associated data, explains any retention and handles provider tokens and local files correctly.

Apple requires an in-app account-deletion initiation route for apps supporting account creation. Google Play also requires an external web resource for requesting deletion. [Apple account deletion guidance](https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion), [Google Play account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en).

Add accessible privacy, terms and support destinations at sign-in and Settings. Describe authentication data separately from local profiles, videos, diagnostics and any optional future backups. Check the final packaged SDKs and manifests against the store privacy declarations. Since children are an intended audience, Google Play’s Families requirements apply to content and data handling, including relevant camera/authentication information and SDK behaviour. [Google Play Families policies](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en-GB).

The Videos → Saved exports → Share path does not ask for Guardian unlock. The Dart screen invokes the native share action directly; the native action receives an export ID and library path, not guardian authorization. Add an adult gate for a child’s media leaving the app, including Photos, Files and share sheets, with a preview of what is exported. Preserve frictionless replay inside the child’s private library. Existing copies outside the app must be explained separately from app deletion.

Apple’s Kids Category has additional parental-gate restrictions; a parental gate is also distinct from legally required consent. Decide launch markets and category with a focused privacy review rather than assuming the existing adult checkbox proves consent. [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).

Evidence: [Guardian deletion disclosure](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/family_pilot_app.dart), [secure authentication](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/pilot_auth_service.dart), [Guardian lock](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/guardian_lock.dart), [share actions](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/saved_exports_page.dart).

### P0 7 Make analysis claims match the actual release

The ten accepted drill pipelines are local Python development selections. The checkpoint explicitly says they have not been promoted to native phone analysis. The app’s current global analysis configuration and `touchAnalysisEnabledFor` do not encode those independent readiness states; D24 is the explicit no-analysis exception.

Before enabling counts publicly, keep a capability record per drill/platform/model version: content approval, native integration, supported recording conditions, evaluation results and availability. Show unavailable results as unavailable, preserve practice completion, and never turn tracking failure into zero touches. Keep current baseline preservation and versioning.

Evaluate on independent, consented footage that was not used to tune the detector. Include different eligible ages, heights, clothing, skin tones, balls, surfaces, lighting, phone models, lenses and distractions. Record false events, missed events, attribution errors, total error and abstention rate—not only total-count matches. Stationary-ball and no-touch controls are essential. A model that matches a few familiar videos is not ready to make general player claims.

Standardise the unit before adding touch-goal pathways. D16 currently defines one forward-push/return cycle as one “touch”; other drills refer to contacts. Do not silently combine cycles and contacts into a universal 2,000-touch target. D24 has no touch score. Self-paced or historical rounds need explicit support rules as well.

Acceptance: every publicly enabled analysis capability passes its documented independent and on-device gates, and the UI reports supported conditions and uncertainty clearly. Thresholds should be selected before the held-out evaluation, not after observing its results. Desktop acceptance alone must not enable a feature on either phone platform.

Evidence: [checkpoint](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/WORK_CHECKPOINT_2026-10-31.md), [analysis implementation](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_analysis.dart), [analysis flags](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_features.dart), [catalogue eligibility](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/training_catalog.dart), [D16 definition](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/assets/local-training-catalog.json), [saved results](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/saved_practice_review.dart).

### P0 8 Complete the release verification and support path

The default test suite is useful but insufficient: several important paths are behind build flags, and the enabled shared-analysis run currently fails. Add both feature configurations to normal review checks and a production-entry integration test. There is no dedicated `integration_test` directory in this checkout; widget tests with integration-oriented names do not replace installed-app testing.

Test physical release candidates on the intended minimum and current iPhone versions and a representative Android set. Verify upgrades from existing pilot data, camera/microphone denial, lock/background/calls, storage exhaustion, restart recovery, audio interruptions, exports, account changes, accessibility and long sessions. Test an actual signed Android build, not just the legacy debug shell.

Provide a support contact and a way to attach diagnostics voluntarily without automatically sending player names, tokens or videos. Define who receives a report, how urgent failures are handled and how a faulty analysis capability can be disabled safely in a subsequent release. Automatic telemetry is optional; a working support path is not.

Store submission also needs accurate screenshots, working URLs, reviewer access, age/content declarations and removal of temporary customer-facing content. Apple explicitly requires a complete app and review access where login is used. [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).

## Best features to build before release

These additions improve the individual training experience. Build the first three after the blockers are addressed; keep the scope small enough to test with real families. Relative effort assumes reuse of the current app: S is a contained extension, M spans several flows, and L involves platform/backend/media or substantial content work. These are not delivery-date estimates.

| Rank | Feature | Why it is valuable | Smallest useful version | Effort |
| --- | --- | --- | --- | --- |
| 1 | Today’s practice and quick start | Reduces the decision work between opening the app and training. | Select a goal, available time and equipment; offer one reviewed session with a reason; resume unfinished practice first. Allow a different choice. | M |
| 2 | A short starter programme | Gives players a reason to return and a coherent learning sequence. | One coach-reviewed multi-session programme with beginner-friendly alternatives, explanations and a simple review point. User explicitly adds sessions to the calendar. | M plus content |
| 3 | Weekly goals and useful progress | Turns existing history into motivation and a next action. | A chosen practice-days or active-minutes goal, weekly recap, one reflection and the next suggested session. No punishment for rest days. | M |
| 4 | Backup and restore under adult control | Protects the value accumulated in plans, progress and videos. | Versioned export/import of player data and selected recordings, integrity checks, clear ownership and restore preview. State exactly what is included. | L |
| 5 | Personal reflection and baseline comparison | Helps a player learn even when counting is unavailable. | “What felt easier?” and “What will I focus on?” after practice, plus a saved earlier recording to compare with a recent comparable session. | M |
| 6 | Better drill selection | Makes the catalogue useful in real home-training conditions. | Filters for solo/partner, equipment, space and duration; favourites/recent drills; hide ineligible content. | S–M |
| 7 | Parent weekly overview | Gives parents visibility without turning the app into club administration. | Review each child’s recent practice, weekly goal, saved progress and storage/backup state, with protected sharing controls. | M |
| 8 | Optional local reminders | Helps players follow plans already created. | Opt-in reminders for selected practice days, quiet hours, easy snooze/disable and cancellation when a plan moves. | M |

### How Today’s practice should work

An adult chooses “For me” or “For my child”; child setup remains parent controlled. Ask for a broad experience level, a training goal, typical available time and available equipment. Avoid collecting position, height, weight, exact location or extensive personal information unless a concrete feature needs it.

For the current local-first offer, I recommend a useful preview or local start before optional online account creation. Implement it in the same production shell with the appropriate adult/child boundaries; do not simply send guests into the older technical local app. If an account is required, explain its actual purpose and keep first-run steps short. Login must not imply that data is backed up.

Home should prioritize an interrupted session, then today’s assigned practice, then a suitable starter session. Offer a clearly labelled no-camera option. A new user should get a helpful recommendation without having to create a custom plan. Keep manual choice and explain the recommendation in plain terms, for example: “A short ball-control session using one ball and a small clear space.”

Use deterministic rules over reviewed content initially. A generative coach is unnecessary for this feature and would add content and safety review requirements. A good rule-based suggestion is more useful than an elaborate assessment that has not been validated.

Acceptance: a new player can begin an appropriate session without a tour; an existing player can resume or start today’s plan; an empty calendar never becomes a dead end. Every suggested session has usable demonstrations and a no-camera route.

### How progress should work

Separate four concepts: planned work, completed practice, measured results and user reflection. Practice duration and completion should remain valuable when a count is unavailable or the player chooses no camera. Label AI estimates, self-reported counts and user notes distinctly.

The current personal-best calculation already compares the same drill, duration and algorithm. Preserve that discipline. The aggregate touch dashboard groups estimates by date/exercise/body, but it is not evidence of skill improvement or equivalent measurement across model versions. Do not announce improvement simply because a longer session or newer model produced more counted events.

For the first recap, show completed sessions, active minutes, the player’s selected goal, a saved reflection and the next planned practice. Allow a private celebration for consistency. Avoid public child rankings, punitive streaks and rewards for repeated heading or extreme volume.

Evidence: [comparable bests](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_history.dart), [touch aggregates](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/touch_analytics.dart), [practice facts](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_facts.dart), [journal and rewards](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/practice_journal.dart).

### How planning and Library should connect

Train, Physical and Mindset currently keep separate plan/completion records. That separation protects existing data, but users still need to see what is scheduled today in one place. Add a read-only combined agenda referencing those stores before considering a storage migration. Do not double-count a Library item as a football session or a meal affirmation as exercise.

Preserve the current rule that the user chooses what to add to the calendar. Recommended programmes can be previewed and explicitly adopted; they should not silently fill the week. For children, plan selection and prescribed workload must remain within the reviewed eligibility rules.

### How data protection should feel

Signing in currently does not back up videos, and Android automatic backup is disabled. Local journal recovery protects against some interrupted writes; it does not protect against losing the phone or uninstalling the app.

Make the storage model clear during setup and in Settings: what is local, what has been exported and what can be restored. If a complete restore feature cannot fit the initial release, offer reliable video export on both platforms and conspicuous device-loss guidance; do not imply account login provides recovery. A paid product that emphasizes long-term progress should prioritise a real backup/restore path before subscription expansion.

For backup/import, require adult authorization for child data, protect the archive, validate schema and file paths, reject corrupt/foreign data safely and preview merge/replace consequences. Test an export from one supported phone restored to another and verify history, ownership and playable selected videos. Cloud sync can follow; it is a larger problem involving conflicts, quotas, consent, deletion and costs.

## Features to defer

| Feature | Recommendation and reason to wait |
| --- | --- |
| Club management, team rosters, attendance, club payments and coach dashboards | Keep these in the separate club app. The individual app should stand on its own. |
| Live coach marketplace | Hide the preview now. A functioning service requires real supply, verification, availability, disputes, payments and adult-controlled communication. |
| Live touch counting and technique correction | Validate saved-video measurement first. Live inference adds capture, heat, battery and feedback-quality constraints. |
| Automated skill scores, talent ratings or injury prediction | Counting contacts does not validate these claims. They need different evidence and qualified review. |
| 500/1,000/2,000-touch pathways | Keep as a later, age-appropriate option after counter reliability and counting units are settled. Use a finite session, rest and stop controls; a target is not a duration guarantee. |
| Body scanning or calibration as mandatory onboarding | The isolated foundation has no live provider. Add optional framing help later only if it produces measured benefits on phones. |
| Public feeds, child leaderboards, direct messaging and public profile discovery | Add moderation, privacy and operational burdens without completing the core personal practice loop. |
| Large drill expansion and advanced position programmes | Grow after the initial content is complete and first-session/return-use feedback reveals actual demand. |
| Full nutrition tracking, weight goals and personalised calorie prescriptions | Keep the current concept educational. These are separate products with significant age/content responsibilities. |
| Cloud video processing and cross-device synchronisation | Defer until local recording/export, deletion and retention are dependable and demand/costs are understood. |
| Wearables, augmented reality and elaborate gamification | Low priority before reliable training, understandable progress and retention are established. |

## Commercial readiness

The app contains `in_app_purchase` and sandbox/readiness code, but this is not an integrated production subscription experience. Do not infer that paid release is ready from those dependencies or synthetic entitlement tests.

If the first release is free, keep billing out of the customer flow. If it is paid, add a separate gate for real products, store-compliant purchase flow, clear recurring terms, purchase restoration, cancellation guidance, pending/failed transactions, renewal/refund/expiry handling, ownership across accounts, offline access and server-authoritative entitlement checks. Parent authorization is needed for child-context purchases. Verify both stores and do not lock users out of their own recordings merely because a subscription ends.

Do not choose a price from the current prototype’s breadth. First test whether players and parents value the finished practice programme and return to it. A potential later premium offer is reviewed programmes, richer private progress and optional backup. The standalone app should not depend on club membership or pretend that a coach marketplace is already operating.

Evidence: [dependencies](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/pubspec.yaml), [readiness UI](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/pilot_readiness_page.dart), [backend client](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/pilot_backend_client.dart), [entitlement models](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/lib/pilot_foundation.dart). These identify implementation scope, not live-store verification.

## Recommended delivery order

| Stage | Deliverable | Exit condition |
| --- | --- | --- |
| 1 Define the actual release | One individual app configuration; production navigation; supported ages/markets; a reviewed launch content list; capability decisions for both platforms. | No ambiguity about what a new customer is buying or downloading. |
| 2 Make the core dependable | Timing fix; Android recording/export/storage parity; production content loader; profile eligibility; privacy/account deletion; child sharing gate; data preservation. | P0 technical/content issues closed and enabled automated checks pass. |
| 3 Complete the learning loop | Today’s practice, one starter programme, a modest weekly goal/recap, support and an explicit recovery/export story. | A player can start, finish, learn and return without the founder explaining the app. |
| 4 Validate the release candidate | Signed iPhone/Android builds, upgrade/device matrix, accessibility and a parent/player beta. | Recorded evidence meets the agreed release criteria; unresolved features are removed or the release waits. |
| 5 Grow from observed use | More programmes, optional reminders, richer comparisons, backup/sync or paid features based on feedback. | New work addresses a demonstrated problem and preserves the core journey. |

A sensible proposed beta is 15–25 households over roughly two weeks, spread across the intended age ranges and both platforms. This is a usability and failure-discovery exercise, not a statistical guarantee of safety or counting accuracy. Use consented participation, separate analysis evaluation from product usability, and never require video upload just to take part in the basic app trial.

Suggested product measures: first appropriate session started and completed, return for a second session, weekly active practice, resume success, recording/export failures, unavailable-analysis rate and support requests by device. Define denominators: a “successful recording” should mean a playable saved original, not a tapped Start button. Collection should be minimal and appropriate for child users; voluntary feedback and redacted diagnostics can establish an initial baseline without introducing broad analytics SDKs.

## Release acceptance checklist

All items below are proposed gates and remain open unless supported by separate release-candidate evidence.

- **Production identity:** same intended app on both platforms; signed Android release configuration; explicit production flags; no reachable developer/fictional-service flows.
- **New and returning users:** self-managed adult and parent/child onboarding work; provider cancel/error/recovery paths work; offline reopening preserves access to owned local practice; account changes never show another account’s library.
- **Content:** every published drill/resource has a correct reviewed demonstration or a deliberately finished text experience, clear instructions, recorded rights and appropriate eligibility. No unrelated placeholders or dead playback controls.
- **Practice:** approved timing presets and supported custom durations work in no-camera, clip and full-session modes; work/rest/countdown are distinct; skip, stop, complete and resume remain distinct in history.
- **Recording:** each supported device passes front/rear camera, interruption, app kill/relaunch, low-storage and long-session scenarios. “Saved” always means the original can be reopened and played.
- **Analysis when offered:** exact supported drill/platform/model combinations are independently validated; custom/historical durations, unavailable states, negative controls, reanalysis and restoration work. Results never silently replace earlier estimates or become invented zeros.
- **Videos/export:** playback and seek work after restart; Android and iPhone exports are playable; cancellation/failure preserves originals; deletion scope is clear; child media egress requires adult authorization.
- **Data:** upgrade preserves profiles, plans, timing, history, videos and saved results; restore behaviour is tested if advertised; device-only limitations and external copies are clearly disclosed.
- **Privacy:** accessible policy/support/terms, complete account deletion, truthful store declarations and age/category decisions; SDK and packaged-manifest checks match the actual release.
- **Accessibility:** VoiceOver and TalkBack can finish the core flow; large text, smaller screens, contrast, reduced motion and outdoor/distance use are checked on devices.
- **Reliability and operation:** no known critical data-loss/privacy defects; default and enabled test configurations pass; release-candidate logs and device identities are recorded; users have a working support route.
- **Billing only if paid:** both stores’ purchase, restore, pending, expiry and refund journeys are tested with authoritative entitlements and appropriate parent control.

## Verification performed for this review

| Check | Fresh result | What it establishes |
| --- | --- | --- |
| `flutter analyze --no-pub` | No issues found. | Dart static analysis of this checkout. |
| `flutter test --no-pub --reporter expanded` | 305 passed, 11 skipped. | Default unit/widget behaviour; skipped feature paths remain outside this result. |
| Shared-analysis build configuration, six existing test files | 21 passed, 3 failed. | Enabled release-relevant regression failures described above. |
| Enabled-practice build configuration, fourteen existing test files, shared analysis disabled | 47 passed, 1 failed. | Analysis-job queue/progress regression in `build58_analysis_test.dart`; the remaining selected checks passed. |
| Isolated duration reproduction | One observation test passed; 20/30/45/90 seconds rejected as incomplete, 60 seconds passed the duration gate. | Confirms current eligibility behaviour without invoking a model. It is not a fix. |
| `node tools/dev/verify.cjs` | Passed. | Repository security/contracts, media guards and synthetic media lifecycle fixtures; not a deployed backend or device acceptance test. |
| Selected UI renders | Inspected Library light/dark states and existing training/practice references. | Confirms media-empty Library presentation and established design direction; older renders are not proof of current device behaviour. |

The shared configuration used `config/practice-review.build.json` with `PRACTICE_SHARED_TOUCHES=true` and the six files listed in the existing Codemagic shared-counter stage. The three failures are `build61_shared_analysis_test.dart`, `build62_milestone_test.dart` and `saved_review_baseline_test.dart`. Their historical 20-second fixtures should be preserved as compatibility coverage while the duration contract is repaired.

The enabled-practice group used the same review configuration with `PRACTICE_SHARED_TOUCHES=false` and the fourteen files listed in the Codemagic enabled-practice stage. Its failing queue/progress test also supplies 20-second ranges. Across the two enabled groups there are four failing test cases; passing counts overlap with default coverage and must not be added as unique tests.

No native iOS compilation, physical-device run, live backend audit, store purchase, model-accuracy benchmark or release build was performed for this review. No private recordings were uploaded. The application source was left unchanged; this is a review and build recommendation, not an implementation patch.

## Technical follow-up that supports the product

Prioritise specific changes over a general rewrite:

- Put platform capabilities behind one typed interface so the UI can reliably distinguish supported, permission-denied, unavailable and temporarily interrupted states.
- Make content approval, analysis readiness and age eligibility separate fields. One `accepted` flag cannot represent all three.
- Pass immutable session/recording prescriptions through analysis and history. Do not reconstruct past expectations from today’s catalogue.
- Add an automated journey covering custom timing → record metadata → review → reanalyse → aggregate progress; the current regression demonstrates why individually passing components are insufficient.
- Check writer coordination and recovery across multiple store instances. `FamilyPilotStore`, `LibraryStore` and `PracticeJournal` coordinate by directory; `LocalPlanStore` uses an instance-local queue. Test any overlapping plan operations before asserting a data-loss defect.
- Preserve stable IDs and migrations when changing age bands, published drill counts or content versions. Historical records must remain readable even when a drill is no longer offered.
- Profile the real lowest-supported phones before setting recording/model performance promises. Test storage scans and thumbnails with a realistic large library rather than assuming small-fixture responsiveness will scale.
- Measure the current highest-supported-FPS capture policy against battery, heat, file size and analysis benefit. Retain high rates only where that trade-off meets the agreed device budgets; do not assume the maximum advertised rate is the best default for every session.
- Review distribution rights and required notices for models, fonts, music, tones, demonstrations and supplied transcripts, as well as SDK privacy behaviour, in the final packaged artifacts.
- Keep legacy technical tooling isolated. Split large recording/native files only where it enables parity, reliable testing or safer ownership; architecture cleanup should not displace release-critical work.

The most valuable launch outcome is a player who can open Soccolo, choose suitable practice, finish it confidently, see honest progress and return next week—with their parent and their data properly supported.
