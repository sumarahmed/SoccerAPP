**Children’s Soccer Training App — Foundation Plan**

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_app_foundation_plan.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

> **Current lean-pilot override — accepted 15 September 2026:** The [SP-050 decision](../decisions/SP-050-lean-pilot-hosting-and-recovery.md) supersedes older proposals below for strict Australian-only processing, paid staging, Melbourne recovery copies and pilot RPO/RTO. Sydney primary placement and private-data authorization remain; global delivery is permitted and dedicated recovery is deferred until post-pilot.

Revised 6 September 2026. Version 6 adds the detailed MFA, recovery, restricted player-session and end-to-end gap-review requirements to the accepted hierarchy, architecture and business model. Ages 5–18, both recording modes, local/cloud storage, and the SDLC/agent workflow remain in scope. Planning and visual design only; no application code, working database, infrastructure, purchases, or deployments have been created.

**1. Recommended direction**

Build an iOS and Android training companion using Flutter, a managed Supabase backend, and realistic 3D exercise demonstrations produced in Blender and delivered as short videos. Keep training, timers, downloaded demonstrations, and camera recordings functional on the device. Include both exercise clips and full-session recording, plus optional private cloud backup in the pilot scope. Cloud uploads happen after a local save and require the account owner’s explicit choice.

The product promise is: a player aged 5–18 can choose an appropriate exercise, understand the movement, practise with guidance, record the attempt, and see progress over time. Parents control the account, recordings, and purchases for the proposed under-18 experience; an 18-year-old can operate an adult account and control any continuing family access.

Support a club-managed route and a direct-parent route in the same product. Clubs administer their activities, coaches, teams and assigned plans; families retain their own accounts and recording/sharing controls. A parent may also be a coach, and a player may join multiple clubs, with explicit workspace-scoped permissions. Club payment or administrative rank does not automatically confer access to private practice footage.

The difficult parts are reliable simultaneous media use on phones, trustworthy coaching content, and handling children’s recordings. These deserve early validation and dedicated ownership.

These recommendations are design judgments. The sources linked throughout establish available capabilities and relevant requirements; they do not establish that the complete proposed app has been built or tested.

**2. Working assumptions and product boundaries**

| Decision | Working assumption | Consequence |
|---|---|---|
| Platforms | iOS and Android phones first; tablet layouts follow | One shared mobile product with testing on both operating systems |
| Audience | Confirmed: ages 5–18 inclusive | Five design bands: 5–7, 8–10, 11–13, 14–17, and 18; age and skill remain separate |
| Initial validation group | Proposed: four players in each design band, 20 total | Validate both younger-child and older-player experiences; 18-year-olds consent for themselves |
| Buyer and account authority | Club or family may fund access; guardian authority and adult self-management remain separate | Club billing does not grant guardianship or private-video access; explicit adult-account transition |
| Administration | Confirmed: platform, club/direct-parent, coach and player areas; Level 2 is accepted for coaches | Scoped management of age plans, groups, activities and permissions; child users have personal self-service only |
| First market | Working assumption: Australia, English first; not yet explicitly confirmed | Local coaching review, an Australian primary backend region, and Australian launch review |
| Practice setting | Working assumption: solo drills with parent-assisted setup for younger children; partner drills explicitly labelled | Every drill declares space, equipment, surface, and assistance requirements |
| Hardware | One supported phone on a stable stand; ball and optional cones | Camera framing and distance are part of the experience |
| Guidance | Realistic animated demonstrations plus short spoken cues | Full explanation before movement; timer and optional looping demo during practice |
| Recording | Confirmed: both grouped exercise clips and full-session mode | Select the mode before recording; preserve chapter markers without duplicate copies |
| Video storage | Confirmed: local plus cloud; commercial limits remain proposed | Local save first; cloud off until enabled; visible quota, retention, and deletion choices |
| Initial assessment | Self-report and parent confirmation against coach-written criteria | Participation is distinguishable from assessed skill |
| Commercial hypothesis | Family subscription or club-funded access, with a free starter set | Validate both buyer routes and define storage sponsorship separately from viewing rights |

Age range, both recording modes, both storage options, club/direct-parent operation, coach administration, and proceeding with planning/design are confirmed. Market, exact assistance model, storage allowance, retention duration, and prices remain working proposals. Advanced and expert challenges remain part of the intended product; publishing any level still depends on suitable coaching content.

The design bands are a proposed interface and content segmentation, not formal sporting or legal categories. Ages 5–7 receive a play-led, spoken experience with an adult nearby; ages 8–10 use short skill missions; ages 11–13 see more combinations and role exploration; ages 14–17 see a more mature performance-oriented layout; age 18 uses the athlete layout with adult account controls. Football Australia’s MiniRoos and FIFA grassroots material support giving younger children simple, enjoyable practice, but the exact bands and drills here are original planning choices. [MiniRoos](https://playfootball.com.au/miniroos), [FIFA ball-control guidance](https://www.fifatrainingcentre.com/en/practice/grassroots/grassroots-and-youth-football-essentials/grassroots-coaching-essentials/coaching-children-to-master-ball-control.php).

**3. Product structure and navigation**

Use four primary player-facing destinations: **Today, Explore, Practice, and Progress**. Put account management, permissions, storage, and purchases in a protected parent area for minors and an account area for adult players.

Provide a responsive administration portal for platform operators, club administrators and coaches, using the same governed backend. Display the active family/club/team context. Direct-parent use remains fully usable without a club account. Level 0 is platform administration; Level 1 contains separate club and parent administrator roles; accepted Level 2 is coach; Level 3 is player/adult self-service, with no staff-administration rights by default.

| Experience | What the child or parent does | Required product behavior |
|---|---|---|
| Today | Opens a home suggestion or club assignment | Shows source, goal, approximate time, equipment, download readiness and schedule conflicts |
| Explore exercises | Filters the library | Filters by skill, age suitability, level, role, duration, space, equipment, and solo/partner |
| Programs | Follows an ordered learning path | Preserves prerequisites and includes easier or harder versions |
| Train by position | Chooses a football role | Combines relevant technical drills with position-specific explanations |
| Exercise detail | Learns the movement | Shows an animation, steps, setup, common mistakes, and completion criteria |
| Training player | Practises with the phone on a stand | Coordinates demonstration, timer, audio cues, and optional recording |
| Practice | Replays an attempt or a complete practice session | Plays grouped exercise clips or a full recording with chapter markers; labels partial or unrecorded sections |
| Progress | Reviews practice and assessed skills | Shows participation separately from parent- or coach-confirmed competence |
| Parent area | Manages the family and home plans | Controls profiles, suitable drill selections, schedules, club memberships, consent, sharing, deletion, exports and purchases |
| Club administration | Manages own club activities | Controls coaches, teams/age groups, rosters, publishing permissions, calendar, assignments and scoped reports |
| Coach administration | Manages assigned groups or granted family work | Adds/removes/reorders suitable drills, selects approved variants, schedules activities, records attendance and assesses assigned work |
| Platform/content administration | Operates the platform and governs content | Separate operator and qualified reviewer permissions; club lifecycle, drafts, review, publication, withdrawal and audited support |

**4. Exercise library, programs, and positions**

Use one exercise catalog. Programs and position paths refer to exercises in that catalog. For example, first-touch passing can belong to a foundation program, a midfielder path, and a defender path without creating three independent copies.

The platform publishes reviewed drill versions and plan templates. Clubs and households derive their own plans from these references; club-authored drills remain club-scoped until separately approved and licensed for broader use. Coaches can add, remove, replace and reorder drills for age bands, teams or individual players within their assigned scope. New instructions or changes outside approved suitability/work-rest limits require qualified review. Parents can select suitable approved drills for home practice; they cannot change a club plan for other members.

Publish immutable plan versions. Removing a drill changes future assignments, not the master catalog or completed-session history. Preserve the exact plan version and parameters at practice start; ordinary edits must not change a session already recording. Check suitability per recipient in mixed-age groups. Keep club and home workloads separately labelled rather than silently combining them. The administration specification defines publication, safety withdrawal and offline limits.

Organize the technical foundation around first touch, striking the ball, running with the ball, and 1v1 skills. These four areas appear in Football Australia’s program material. Add scanning, decision-making, coordination, and specialist goalkeeper content where a qualified coach defines appropriate progressions. This is a proposed taxonomy, not a claim of Football Australia endorsement. [Football Australia program guide](https://footballaustralia.com.au/sites/default/files/2026-01/FA%20Multicultural%20Youth%20Program%20Guide.pdf).

| Level | Meaning in this product | Illustrative content |
|---|---|---|
| Beginner | Learn the movement with simple setup and low decision complexity | Stationary touches, controlled dribbling, basic passing setup |
| Developing | Repeat with control, both feet, and modest movement | Direction changes, receiving across the body, passing to a target |
| Advanced | Combine movements and add direction or timing decisions | Receive, turn, and pass; move after a pass; directional first touch |
| Expert challenges | Apply established skills under greater technical or decision demands | Multi-step combinations and coach-designed reactive challenges |

“Expert” describes exercise difficulty. It is not a certification of professional ability or a prediction of football potential. A child’s age alone never unlocks the hardest content, and elapsed training time alone never proves mastery.

| Position path | Training themes | Example practice concept | Environment |
|---|---|---|---|
| Striker | First touch into a finish, movement, finishing choices | Receive into a marked space, then finish at a safe target | Suitable goal/target and space; partner if required |
| Winger | Changes of speed and direction, 1v1 moves, delivery | Move past a marker and pass toward a target zone | Solo variant possible |
| Central midfielder | Scanning, open body shape, passing choices | Check a cue, receive, and pass toward the selected gate | Partner or suitable rebound surface |
| Centre-back | Body orientation, receiving, passing out | Open to receive and play toward an available target | Partner or rebound surface |
| Full-back | Receiving wide, support movement, passing after movement | Receive near a marked boundary and move to a support gate | Solo/partner variant specified |
| Goalkeeper | Ready position, footwork, handling, distribution | Set position and handle an appropriate partner service | Adult/partner and suitable surface |

For younger children, make roles something to explore. Avoid locking a child into one position. All position paths retain general ball skills.

Interpret “role play” as two related experiences:

1. **Position practice:** execute a real drill connected to a position.
2. **Tactical scenarios:** watch a short animated situation, choose a movement or pass, and see a coach-approved explanation before practising the related movement.

Tactical scenarios belong before a drill or during a break, so the child does not need to read and make on-screen choices while running with the ball. Fully interactive match simulation is a later product decision.

Initial program concepts include Ball Control Foundations, First Touch and Passing, 1v1 Moves, and Finishing Foundations. A coach defines the number of sessions, repetitions, rest, prerequisite skills, and suitable age variations before publication. Session choices such as 10, 15, or 20 minutes are product options to validate, not prescribed training loads for every child.

**5. The minimum exercise content contract**

Every published exercise needs the following information. This specification describes the content model without prescribing a code or database syntax.

| Field group | Required information |
|---|---|
| Identity | Stable exercise identifier, title, version, language, publication status |
| Learning goal | Primary skill, supporting skills, success criteria, prerequisites |
| Suitability | Recommended age bands, technical level, supervision and partner requirements |
| Role links | One or more positions and a short explanation of relevance |
| Setup | Equipment, usable space, surface, layout image, and camera placement |
| Instruction | Short steps, coaching cues, common mistakes, easier and harder variants |
| Session prescription | Coach-approved work periods, rest periods, sets/repetitions, and stop guidance |
| Demonstration assets | Main animation, useful alternate view, slow version, captions, and narration |
| Recording guidance | Front/rear camera suitability and what must remain in frame |
| Review | Author, qualified reviewer, review date, approval status, and withdrawal reason if relevant |
| Rights | Rights to movement reference footage, avatar, audio, music if used, and animation assets |
| Distribution | Asset size, download version, integrity information, and availability by subscription if applicable |

Keep instructions, narration, and captions separate from the animation so localization and accessibility changes do not require remaking every visual.

**6. Training experience and recording behavior**

The intended flow is sequential and explicit:

1. **Choose.** Select a drill, program session, or position path.
2. **Prepare.** Check equipment, safe space, battery, storage, and downloaded assets.
3. **Learn.** Watch the demonstration full screen. Repeat it, slow it down, or select an alternate view.
4. **Frame.** Put the phone on a stable stand. The preview helps fit the child’s full body, ball, and relevant movement area into the shot.
5. **Get ready.** Show a clear recording choice and a configurable countdown long enough to move into position.
6. **Practise.** Show a large timer, current set, recording indicator, and an optional looping demonstration. Play concise spoken start, change, rest, and finish cues.
7. **Rest or continue.** Follow the program sequence and allow an immediate pause or stop.
8. **Review.** Replay the attempt, compare it with the demonstration, and mark how difficult it felt. The parent can apply the coach-written criteria.
9. **Save.** Save locally first and update session progress. If cloud backup has been enabled by the parent or adult player, queue a private upload according to their network and storage choices.

Use a large timer above or beside the camera preview, with a resizable demonstration panel. Make portrait and landscape layouts usable. For actual training, design for a phone several metres away: large numerals and audible cues matter more than small explanatory text.

**One-phone constraint:** a child who needs to see the screen while being filmed generally needs the front camera facing them. Rear-camera recording is useful when a parent operates the phone or the child follows audio cues after learning the drill. A small phone screen cannot deliver a detailed visual lesson from across a pitch. Validate the supported distance for each drill instead of promising unrestricted field coverage.

The app’s interface and the recorded video are separate outputs. The saved file contains the camera view. Timer events, drill identifiers, and cue timing are stored alongside it. A later export feature can combine video with a timer or demonstration if families want that format.

Provide both recording modes as first-class options. **Exercise clips** records each active drill as a separate file and groups the files into a session. **Full session** records from the start to the finish, including programmed rest periods, and stores timestamped drill chapters. Chapters refer to the original full-session file; the app does not automatically duplicate the same footage into separate clip files. An explicit later export may create a new file and must show the additional size.

In full-session mode, ordinary programmed rests continue recording. The visible **Pause** control pauses practice and camera capture together; resuming may require a new file part, so the session must be labelled as containing a recording gap. Calls, screen lock, camera loss, or app backgrounding can also interrupt capture. Promise continuous recording while the session remains active and uninterrupted by the operating system; never promise that an interrupted or terminated process can always recover a single intact file.

Propose a 30-minute pilot recording limit, with the expected duration and storage estimate visible before starting. This is a technical validation limit, not a recommendation that every age group should train for 30 minutes. Validate longer sessions only after the initial device results.

**7. Media coordination and reliability contract**

Flutter’s official camera package supports live preview and video capture, while its video player supports playback from device files. Those capabilities support the proposed design, but their simultaneous use still needs validation on actual devices. The camera documentation explicitly leaves application lifecycle management to the app. [Flutter camera](https://pub.dev/packages/camera), [Flutter video playback](https://docs.flutter.dev/cookbook/plugins/play-video).

| Component | Responsibility | Required failure behavior |
|---|---|---|
| Session controller | Owns preparation, countdown, active, rest, paused, complete, and interrupted states | Records the real state; does not mark an interrupted set complete |
| Session clock | Measures active practice time using an elapsed-time clock | Pauses correctly and remains independent of frame rate and phone clock changes |
| Camera recorder | Manages exercise clips or a full-session file with chapter timestamps | Shows “recording” only after start is confirmed; reports failures and gaps clearly |
| Demonstration player | Plays a downloaded animation and handles view/speed changes | Uses an explicit fallback or pause when playback fails |
| Audio coordinator | Schedules approved voice cues and manages audio interruptions | Avoids competing narration and handles speaker/headphone changes |
| Local session store | Saves session events and finished clip references | Retains completed work through network failure and ordinary app restarts |
| Upload queue | Transfers approved files with retry, quota reservation, and duplicate protection | Keeps the local copy until remote completion is verified; rechecks consent and deletion state |

The recording timeline and the exercise timer serve different purposes. The timer measures active work; the recording may include a lead-in, pauses, or separate clips. Store their relationship so replay accurately places a cue or set boundary within a clip.

Start with a **720p, approximately 30 fps target**, subject to what each supported device reliably produces. Use the device’s supported efficient recording settings and a broadly playable export format. Start with silent camera recordings and separate spoken coaching output; optional microphone recording adds privacy and audio-routing work. Apple provides an audio-session category for simultaneous input and output when that capability is needed, but this does not prove Flutter plugin combinations will coordinate automatically. [Apple audio session documentation](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/playandrecord).

Required recovery behavior includes:

- Denied camera permission leads to a usable practice mode without recording.
- Denied microphone permission does not prevent silent video practice.
- A phone call, screen lock, or app background transition interrupts recording visibly; return requires an explicit resume action.
- Finished clips survive an interrupted later drill. The app must not promise recovery of an unfinished file after abrupt process termination.
- Low storage is detected before a session and monitored during recording.
- Missing internet does not interrupt a session whose required content is downloaded.
- If a device cannot sustain the media workload, offer a clearly labelled simpler practice mode and define whether that device meets the full-feature support standard.

The first technical feasibility investigation, once development is authorized, should test this entire combination before general feature development.

**8. Realistic animation production system**

Use an original, human-proportioned 3D football avatar with a visible ball, boots, and simple training environment. Prioritize understandable foot contact, body orientation, and ball movement over highly detailed faces or scenery.

Recommended production workflow:

1. A qualified youth coach defines the exercise and reference movement.
2. Film an adult demonstrator with the required rights and camera views.
3. Use motion capture where useful to obtain an initial body movement.
4. A 3D animator applies and cleans up the movement in Blender.
5. Animate and verify the ball path, foot contact, ground contact, and timing explicitly.
6. Render a main view, a useful alternate angle, and a slow demonstration as required by that movement.
7. Add separate narration, captions, and setup information.
8. The coach reviews both the visual movement and the instructions.
9. Publish the approved version and retain the editable source assets.

Blender provides animation and rigging tools. Rokoko Vision is one candidate for the motion-capture step and exports motion data for use in 3D software. Their capabilities do not establish football-specific accuracy; the cleanup and review steps are essential. [Blender animation tools](https://www.blender.org/features/animation/), [Rokoko Vision](https://www.rokoko.com/products/vision).

| Approach | Product result | Recommendation |
|---|---|---|
| Pre-rendered 3D animation | Realistic moving player, repeatable instruction, fixed selectable viewpoints | Use for the first release |
| Real-time 3D avatar | Free rotation, adjustable viewpoint, interactive scene | Consider after users demonstrate a need worth the integration and device cost |
| Filmed coach demonstration | Clear reference movement with low animation overhead | Useful in research and as the animator’s reference; not a substitute for the requested animated deliverable |
| General text-to-video generation | Rapid visual drafts | Restrict to concept exploration unless movement, consistency, and rights are independently verified |

Creating one polished animation is an asset-production task. Creating dozens of accurate, reusable exercise demonstrations is a content operation. Measure the effort for three representative exercises before budgeting the full catalog.

**9. Recommended tools and technology choices**

| Layer or activity | Recommended tool/system | Why it fits and decision boundary |
|---|---|---|
| Product brief and delivery tracking | Shared planning documents and Linear | One backlog with accountable humans, phase gates, bounded agent assignments, and evidence for completion |
| Interface design | Figma Design and its normal prototyping features | Validate navigation, parent controls, and training layouts before development |
| Mobile application | Flutter | Shared iOS/Android interface with official camera and video packages |
| Camera and playback | Flutter camera and video_player packages; native platform integration if required | Establish the actual media behavior through device testing |
| App-local structured data | Drift over native SQLite | Store downloaded content manifests, sessions, and a durable synchronization queue |
| Local media | App-private device files with OS protection and deliberate backup configuration | Store recordings without automatically putting them in the gallery or cloud |
| Authentication and scoped authorization | Supabase Auth, TOTP MFA and distinct adult/player credentials with current scope rules | Parents, adult players, coaches and staff; family authority, club scope and adult-account transition enforced server-side |
| Structured backend | Supabase PostgreSQL | Related programs, exercises, families, sessions, and grants suit a relational model |
| Server operations | A small backend function layer | Handles publishing, authorization-sensitive actions, uploads, and deletion |
| Demonstration delivery | Object storage with caching and downloadable program packs | Distribute versioned instructional assets efficiently |
| Player video storage | Separate private object storage | Apply owner/family access checks and limited-duration playback authorization |
| Administration portal | Next.js/TypeScript on Vercel, using server-mediated adult sessions | Platform, parent, club and coach workflows; roster, calendar, age-plan editing, publication and audit; direct API/RLS access also checked |
| 3D asset creation | Blender; evaluate Rokoko Vision for movement capture | Reusable avatar and drill animation pipeline |
| Source, review and evidence, during build | GitHub repository, pull requests, and Actions | Protected changes, required validation, and evidence linked to Linear; GitHub Projects is the alternative if minimizing tools |
| Agent execution, during authorized build work | Codex or an equivalent bounded coding agent | Explicit repository/environment, scoped tools and data, independent review, time/spend limits; tracker access alone does not run agents |
| Mobile build and distribution | Evaluate Codemagic when mobile build/signing needs justify it; TestFlight and Google Play testing tracks | Repeatable builds and controlled device testing, with publication authority assigned separately |
| Operations | First-party event counts, redacted diagnostics, and provider logs | Measure reliability and usage without collecting practice video for analytics |
| Purchases, before commercial release | RevenueCat for covered Apple/Google purchases; Stripe for permitted web/club purchases; backend entitlement ledger | Family and club sponsorship, source-specific restoration/cancellation, server-verified benefits independent of media permissions |

Figma supports interactive design flows. Supabase combines PostgreSQL, authentication, storage, and backend functions. Codemagic supports mobile build automation. These are tool choices for the eventual build; no subscriptions or projects have been opened. [Figma prototyping](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma), [Supabase platform](https://supabase.com/), [Codemagic](https://codemagic.io/start/).

Choose a specific Sydney region for the primary Supabase project if Australia remains the initial market. Region selection addresses primary project placement; assess other processors, support access, logs, backups, and delivery services separately before making an Australia-only residency claim. [Supabase regions](https://supabase.com/docs/guides/platform/regions).

Flutter is my default recommendation for this product. React Native with Expo is a credible alternative if the available developer is stronger in TypeScript; Expo also provides camera preview and recording. Final selection should depend on engineering capability and the media feasibility results, not a claim that one framework guarantees better recording. [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/).

If maintaining C# throughout the mobile implementation is a firm preference, evaluate that requirement before selecting Flutter. A separate custom enterprise backend is unnecessary for the initial scope; introduce one only if product requirements justify its operating cost.

Plan for macOS/Xcode access and real iPhone testing, even if other work happens on Windows. Flutter’s iOS release process requires Xcode on macOS; a cloud build service can support packaging but does not replace physical-device media testing. [Flutter iOS release guide](https://docs.flutter.dev/deployment/ios).

**10. System architecture and information ownership**

Use a modular mobile application and one managed backend. Split responsibilities clearly while avoiding a fleet of separate services at launch.

| System boundary | Owns | Exchanges with other systems |
|---|---|---|
| Parent and child mobile experience | Navigation, learning, active training, parent controls | Requests approved content and authorized family data |
| Club and coach administration | Club configuration, staffing, cohorts, plans, calendar and reporting | Uses scoped operations and limited enrollment data; no automatic access to family media |
| On-device session engine | Clock, camera, cue timing, downloaded media, local session history | Sends small progress records after a session and queues video when backup is enabled |
| Identity and authorization | Account/player identity, guardian relationships, club/household memberships, coach scope and explicit grants | Checks current action permission and resource scope for every protected read and write |
| Content service | Approved catalog, program order, variants, media manifests, publication versions | Sends content updates and downloadable asset references |
| Progress service | Completed attempts, self-reports, confirmed assessments, program state | Receives duplicate-safe offline events and returns family progress |
| Instructional asset storage | Demonstrations, captions, narration, setup visuals | Delivers published assets; enforces paid access where needed |
| Private recording service | Approved videos, thumbnails, upload state, quota, expiry, deletion jobs | Authorizes playback and owner-approved transfers |
| Platform governance | Global content review, club lifecycle, scoped support and administrative audit | Operates through protected permissions with no routine private-media browsing |

Instructional demonstrations and child recordings must have separate storage and access policies. Supabase private buckets enforce access through policies or time-limited signed URLs; public buckets expose retrieval to anyone with the URL. A hard-to-guess filename is insufficient protection. [Supabase bucket access models](https://supabase.com/docs/guides/storage/buckets/fundamentals).

Signed playback URLs remain valid until expiry under Supabase's documented behavior; changing authentication keys does not revoke them. Design and test the actual authorization lifetime, current-membership checks, and caching behavior before promising revocation. Downloaded or exported bytes cannot be remotely retracted. Database backups do not include video object contents, so object recovery requires its own mechanism, retention policy, restore test, and budget. [Storage download authorization](https://supabase.com/docs/guides/storage/serving/downloads), [backup scope](https://supabase.com/docs/guides/platform/backups).

Keep privileged server credentials out of the mobile app. Enforce family ownership on the backend as well as in the interface. Editors who publish exercises should not automatically receive access to children’s videos.

**11. Conceptual data model**

**Database status: proposed only.** No live Supabase project, schema, SQL migrations, seed content, database policies, SQLite store or integrated application has been created. The following records describe the future design. Use one managed backend initially, with logical isolation of club and household workspaces and separate global approved content.

| Record | Purpose and principal relationship |
|---|---|
| Account | Authenticated adult/player or authorized staff identity; may hold several separately scoped memberships |
| Workspace | Club or household context with its own lifecycle and settings; global content is separately governed |
| Scoped membership/capability | Account, workspace, permitted actions, active state and validity; no cross-club role inheritance |
| Guardian relationship | Verified authority over a minor player, separate from club membership and payment |
| Household membership | Links authorized adults to the household; allows future second-parent support |
| Club cohort/team | Club-owned age/season/ability grouping and coach allocation |
| Club enrollment and coach assignment | Limited player membership data, guardian/adult acceptance and assigned coaching scope |
| Player profile | Nickname, confirmed age band, preferences, ownership, and adult-transition status |
| Consent record | Adult, purpose, information shown, version, timestamp, and withdrawal |
| Exercise | Reusable learning objective and core identity |
| Exercise version/variant | Approved instructions, suitability, setup, media, and difficulty |
| Program | Ordered training pathway |
| Program session | A particular set of exercise versions and their approved work/rest configuration |
| Training plan and plan version | Home/club-owned sequence derived from an optional template; immutable once published |
| Plan item and assignment | Exact drill version/settings, recipient/cohort, origin, effective date and cancellation state |
| Scheduled activity and attendance | Club event, coach allocation, participant list and scoped attendance history |
| Role mapping | Many-to-many relationship between positions and exercises/programs |
| Enrollment | A child’s selected program and progress through it |
| Practice session | Attempt linked to player, originating home/club assignment and the immutable plan/content snapshot |
| Exercise attempt | Active time, completion state, self-report, and optional assessment source |
| Recording asset | Local and optional private cloud references; mode, duration, owner, and deletion state |
| Recording chapter/part | Exercise boundaries in a full file and separately identified parts after an interruption |
| Storage entitlement | Household/adult allowance, reserved upload bytes, usage, and retention policy |
| Session event | Actual start, pause, resume, cue, finish, or interruption times |
| Consent and access grant | Declared completion visibility and separately authorized media sharing; recipient, purpose, resources, expiry and withdrawal |
| Administrative audit | Attributable membership, role, plan publication, scope, export and exceptional support actions |
| Verified entitlement | Paid/trial Family or Club feature access, beneficiary and provider source; separate from guardian authority and media grants |
| Publication review | Coach approval and asset-rights records |

Exercise histories retain the version practised so later edits do not rewrite old instructions. Offline events use stable identifiers to prevent duplicate attempts after retries. Deleted recordings use a deletion record so an older offline device cannot simply re-upload a deleted asset when it reconnects.

The backend and local database have different responsibilities: local storage enables practice without internet; server synchronization must still be deliberately designed. Selecting Supabase does not by itself implement offline conflict resolution.

The detailed administration specification defines limited club enrollment projections, cross-workspace relationship checks, plan inheritance, record ownership and database acceptance scenarios. A working database requires actual schema/policy implementation and verification with unrelated clubs/households, multi-role accounts, revoked coaches and adult transitions.

**12. Children’s privacy and parent controls**

These controls follow directly from a product that records children, rather than being optional features for a later release:

- Parent-controlled accounts and a protected parent area for the proposed under-18 experience; adult players control their own account. Minors need no personal email address, phone number, public profile, school name, or precise location.
- Age bands and nicknames where sufficient; collect extra personal data only for a defined need.
- Separate explanations and choices for camera use, microphone use, cloud backup, and any future coach sharing. Cloud backup starts off; enabling it records the purpose, account owner, notice version, and retention choice.
- Recording remains optional, visibly indicated, and easy to stop.
- Local recordings stay in app-private files. Explicitly configure automatic OS backup and gallery export behavior so “local” does not accidentally mean uploaded elsewhere.
- Parent-visible storage limits, retention choices, deletion, and export. Explain that uninstalling or losing a device can lose local-only videos.
- Cloud recording requires private access, short-lived playback authorization, a documented retention period, and deletion of clips and thumbnails. State backup-deletion timing truthfully.
- Session diagnostics exclude raw recordings, images, audio, secret links, and child-identifying values. Avoid session-replay analytics on camera screens.
- Use a generic avatar and private individual progress. Advertising, public video feeds, direct messaging, and public leaderboards are outside the first-release scope.

A parent gate prevents accidental access to adult functions. It is not automatically a legally sufficient parental-consent process. Likewise, a parent-owned account does not exempt an app that is directed at children.

Offer an adult-account transition when a player confirms they have reached 18 through the selected age/ownership process. Do not infer an exact birthday from an age band. The transition must explain video ownership, existing family access, purchases, and export/deletion choices. A family member paying for access does not automatically receive viewing rights over an adult player’s new recordings. Resolve the precise legal and verification design before implementation.

Apple’s guidelines cover recording consent and indicators and impose additional constraints on Kids Category apps. Google Play’s Families requirements apply when children are among the target audiences and specifically address microphone/camera data and third-party SDKs. Determine the intended age/category configuration and SDK eligibility before integrating tracking or billing services. [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), [Google Play Families policies](https://support.google.com/googleplay/android-developer/answer/9893335?hl=en).

As checked on 5 September 2026, the OAIC describes Australia’s Children’s Online Privacy Code as an exposure draft that must be finalized and registered by 10 December 2026. Confirm the final text, commencement arrangements, and applicability before launch; do not describe the draft as already operative law. [OAIC Children’s Online Privacy Code](https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code).

If the product expands to the United States, determine COPPA coverage and implement the applicable notice and verifiable parental-consent process before collecting covered children’s data. Photos, videos, and audio containing a child’s image or voice are specifically relevant. Other markets require their own launch review. [FTC COPPA guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions).

Before launch, have an appropriate privacy adviser review the actual data flows, vendor terms, consent experience, and deletion behavior. The foundation plan is an engineering and product specification, not a legal determination of compliance.

**13. Coaching quality and future automation**

Use a qualified youth football coach as the content owner and reviewer. The review must include setup, movement, difficulty, common mistakes, age suitability, and the animated result. Specialist goalkeeper exercises require suitable expertise. Exclude heading, contact tackling, and diving from the first pilot; any later inclusion needs specific coaching and supervision design.

Good progress measures at launch include sessions attempted/completed, skills practised, self-reported challenge, and parent-confirmed criteria. A child can view two attempts made weeks apart without the app claiming to measure improvement automatically. Rewards should recognize participation and personal progress without pressuring the child to practise through fatigue or injury.

Personalization can initially use explicit rules: age suitability, prerequisites, equipment, available time, recent practice, and requested role. A coach controls the allowable variations.

Future pose estimation and ball tracking should be separate experiments. MediaPipe offers body landmarks, but that capability does not establish reliable football touch counting, ball tracking, technique grading, or meaningful talent scores. Validation would need consented representative recordings, coach-labelled outcomes, visibility checks, uncertainty handling, and device testing. [MediaPipe Pose Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker).

AI can assist the founder with planning and content drafts, and motion capture can assist asset production. Published instruction remains coach-reviewed. The first product does not need a live language model to run a session.

**14. Phased scope and delivery plan**

Effort estimates below are planning assumptions, not quotes. They assume one experienced mobile engineer during development, with scheduled coach, animator, design, and QA support. Content production can overlap development. A founder doing every role part time should expect a materially longer calendar schedule.

| Phase | Proposed effort | Concrete output | Completion condition |
|---|---|---|---|
| Foundation and research | 1–2 weeks | Target user definition, parent/child interviews, core screen designs, curriculum structure, three animation briefs, privacy/data map | The intended audience, core recording behavior, and pilot scope are unambiguous |
| Media feasibility, after coding authorization | 2–3 weeks | One drill with both recording modes, timer, downloadable demo, cues, interruption handling, and a private resumable upload on both platforms | Recording, chapter boundaries, upload authorization, and recovery work on representative devices |
| Small pilot | 5–8 weeks after feasibility | Approximately 12 coach-reviewed drill families with suitable age/difficulty variants, one short program, role tags, local/cloud replay, account controls, offline operation | Proposed 20 players across all five design bands can complete appropriate sessions |
| First commercial version | Additional 4–6 weeks | Approximately 30 drills, three programs, stronger parent controls, catalog publishing, reliable synchronization, store preparation; billing if validated | Reliable use, approved content, deletion behavior, and store requirements are demonstrated |
| Expansion | Based on pilot evidence | More advanced/expert content, broader position paths, tactical scenarios, longer recording limits, and optional coach review | Each addition has demand, content ownership, and sustainable cost |

The earlier phase estimates totaled approximately 12–19 weeks for the family-focused scope and stated staffing, assuming animation production alongside development. They do not include the club/coach administration expansion added on 6 September 2026 and are no longer an estimate for the complete current scope. Re-estimate after administration design, database-isolation feasibility, media feasibility and the first animation samples. No supplier quote or delivery commitment has been obtained.

The pilot catalog establishes the structure for the full beginner-to-expert product. It does not claim comprehensive coverage of every age, level, and position. Goalkeeper depth and expert challenges may need separate content releases.

**15. Acceptance criteria and pilot decisions**

The following are proposed pass conditions and measurement targets to validate with the team, not already observed results:

| Area | Meaningful check |
|---|---|
| Main experience | A downloaded session runs with visible timer, looped demonstration, and readable recording status on every supported pilot device |
| Recording | Exercise clips and full-session files are playable and correctly oriented; chapter markers reference the right exercises; interruptions are labelled |
| Timing | Active-work timing stays within an agreed tolerance; propose no more than one second error over a ten-minute test |
| Performance | A typical session completes without crashes, unusable preview, or forced thermal shutdown on the pilot device set |
| Interruption | Calls, backgrounding, permission denial, and storage exhaustion produce clear states; existing completed clips remain available |
| Offline operation | A pre-downloaded session can be completed in airplane mode and later synchronize without duplicate attempts |
| Access isolation | One household cannot retrieve another household’s data; an adult player’s former family links cannot bypass their current grants |
| Cloud quota | Failed or resumed uploads cannot bypass the allowance; full quota pauses uploads while local training remains available |
| Deletion | Current authorized access is removed; the defined signed-link/cache window and offline/export limitations are respected; stale upload queues and backup restore cannot resurrect deleted media; documented behavior matches implementation |
| Coaching | Each published instruction and animation has an identifiable qualified reviewer |
| Usability | Target children understand setup and begin the drill with the expected level of parent help |
| Product value | Parents can explain what the app improves and whether they would use it between existing training sessions |

Track onboarding completion, first successful session, record/save failures, week-two return, and parent willingness to pay. A small pilot gives directional evidence, not proof of skill improvement or long-term retention. Set expansion thresholds before examining results; example business targets might be 80% first-session completion and at least half of pilot families returning in week two.

**16. Video volume and operating economics**

Video is the main variable data cost. Use recorded minutes rather than account count to plan storage and transfers.

At an assumed average video bitrate of 2 megabits per second, 15 recorded minutes are approximately **225 MB**, excluding audio, container overhead, thumbnails, or extra versions. Twelve such recordings in four weeks are approximately **2.7 GB per child**. For 1,000 children, that is approximately **2.7 TB of new video every four weeks**. This is arithmetic for a planning scenario, not a measured codec output or a vendor bill.

Actual use may be lower when only active drills are recorded. Actual files may be larger if the device chooses a higher bitrate. Playback transfers, retention length, backups, and any transcoding add costs beyond the original upload.

| Cost driver | Foundation decision |
|---|---|
| Mobile engineering | Obtain an estimate after the media feasibility result and screen specification |
| Content production | Price three representative drills before committing to a large animation catalog |
| Backend | Budget managed database, authentication, storage, and production support separately from development |
| Video transfer and retention | Include local and optional cloud storage in the pilot; enforce defined allowances, expiry, and upload controls |
| Testing | Allocate real iPhone/Android device access and outdoor testing time |
| Release and operations | Include store accounts, build services, support, and content maintenance |
| Children’s privacy | Include targeted review of the actual data flow and launch experience |

Use the companion workbook for the current budget. It distinguishes recurring cloud services, payment fees, support labor, business maintenance and founder compensation from one-time development investment. Its three operating cases are alternative scale assumptions, not sales forecasts. Its build budgets are illustrative effort/rate calculations, not quotations. The earlier family-only engineering estimate is superseded for the expanded scope.

Proposed subscriptions are free Starter; Family AUD 14.99/month or AUD 119.99/year including assumed GST; Club AUD 5/licensed player/month or AUD 48/player/year before GST, minimum 25 seats. Invited club coaches are included. Later independent Coach Pro is AUD 29/month or AUD 249/year before GST; it does not purchase client guardianship, premium programs or cloud allowances.

**Proposed storage experience:** Starter keeps local recordings; Family has an optional **20 GB shared cloud allowance** across up to four profiles; Club pools **5 GB per licensed player**, with individual limits and explicit viewing permissions. Active cloud copies expire 30 days after successful upload. Wi-Fi is the default. Local files remain until the owner deletes them or chooses cleanup. Show quota and per-recording expiry; pause new uploads at the allowance. Local removal, cloud removal and deletion everywhere remain separate actions. Operational recovery has restricted seven-day noncurrent history and deletion replay; it is not a user archive.

The workbook includes two hosted database projects, web hosting, instructional traffic, video overhead, two remote playback equivalents, backup transfer and recovery storage, with editable usage. Rates and assumptions are identified separately. Supabase's database backup does not contain stored video objects, so separate object recovery is planned. [Supabase pricing](https://supabase.com/pricing), [backup scope](https://supabase.com/docs/guides/platform/backups).

**17. Ownership and working systems**

| Responsibility | Accountable owner | Working artifact |
|---|---|---|
| Product scope and priorities | Founder | Product brief, decision log, prioritized backlog |
| Coaching correctness | Qualified youth coach | Exercise specification and review record |
| Demonstration accuracy | Animator, approved by coach | Editable source, rendered versions, review notes |
| Training reliability | Mobile engineer | Device evidence, recording/recovery behavior, release criteria |
| Data handling | Founder and engineer with privacy advice | Data map, vendor decisions, consent and deletion specification |
| Pilot learning | Founder | Interview notes, aggregate usage measures, agreed next decision |
| Production operation | Founder or designated operator | Release procedure, redacted incident record, content withdrawal procedure |

A single founder can own this product and use contractors for bounded work. Coaching judgment, animation cleanup, and testing on real devices should have named human owners. Adding multiple autonomous agents is not a requirement for the application architecture.

Use separate development and production environments. Use synthetic or adult demonstration data in development. Keep versions of content and media aligned, and publish only reviewed assets. Maintain a simple way to withdraw a faulty exercise and block it on the next content update; document that a completely offline device cannot receive an immediate withdrawal.

**18. Current deliverables and remaining dependencies**

The companion **soccer_pilot_and_design_pack.md** contains 12 proposed drill contracts, three animation briefs, exact screen behavior, a Figma handoff specification, family-research materials, supplier-request templates, and the revised feasibility scope. Two visual concept boards cover eight core screens. Their content is illustrative and their text specification is authoritative.

The age range, recording modes, and inclusion of local/cloud storage are confirmed. Australia and the proposed age-dependent assistance model remain assumptions. Figma was not installed when these concepts were produced, so no editable native Figma file has been created. Native Figma authoring depends on enabled access and the capabilities it exposes.

The drill selection and animation briefs are **drafts awaiting qualified coach review**. No coach approval, family enrollment, supplier quote, external message, paid engagement, or code implementation has occurred. Research and quote-request materials are prepared so those next actions have a concrete scope. Actual recruitment needs an agreed contact channel and consenting participants; supplier quotes need chosen recipients and a submission route.

**19. SDLC, security, and agent delivery review**

The companion **soccer_sdlc_security_and_agent_delivery_review.md** defines the recommended Linear/GitHub delivery system, G0–G6 phase gates, 27 security findings including the club-administration extension, agent permissions and reporting, verification coverage, release ownership, and operational controls. **soccer_delivery_backlog.md** translates the plan into 74 proposed issues with dependencies, accountable roles, and acceptance evidence. These are specifications, not live tracker issues or implemented controls.

Use named human ownership and bounded agent execution. A task reaches Done through accepted evidence, not an agent's status claim. Keep production publication, privileged access, and security-gate changes under their designated authority. GitHub plan limitations for private repositories must be checked before relying on release approvals. Flutter/Dart needs explicit security review and dependency scanning because CodeQL does not currently list Dart coverage. Current sources and the detailed implications are recorded in the review.

This review governs the delivery and security clarifications where earlier planning language was less precise. It does not change the current no-code scope or claim that the application is ready for a family pilot.

**20. Club, parent and coach administration specification**

**soccer_club_parent_and_coach_administration.md** specifies the hierarchy, capability matrix, club/family ownership boundaries, age-plan editing and publication, roster/calendar/assessment controls, F14–F22 administration screens, and the expanded conceptual database. Club support is now part of the intended product. Launching one route before the other would require an explicit scope decision. No functioning portal, database, user account or club workflow exists yet.


**21. End-to-end architecture and commercial operation update**

**soccer_end_to_end_platform_and_business_plan.md** is the current decision document for device data, hosting, subscriptions and business operations. **soccer_subscription_and_cost_model.xlsx** contains editable pricing, usage, operating-cost and build-budget assumptions. All prices are proposals; Australia/English remains an assumption. No working app, database or subscription service exists.

Use Flutter/Dart with Drift/native SQLite for local plan snapshots, history, recording references and durable synchronization queues. Store videos and demo files outside the database; secure tokens/keys with platform facilities. Drift is a local persistence layer, not an automatic cloud-sync service. The authoritative backend owns roles, consent, published plans and verified entitlements.

Use Next.js/TypeScript on Vercel Pro for responsive adult administration and the public site. Supabase PostgreSQL/Auth/private Storage in the specifically selected Sydney region serves both clients. Configure eligible functions appropriately; global billing/CDN/support services prevent an Australia-only processing claim. Keep separate staging/production and restricted AWS S3 Melbourne operational recovery. Native recording remains on mobile; web review accesses authorized cloud footage only.

RevenueCat coordinates store purchases; Stripe handles permitted web purchases, club seats and later professional subscriptions. A backend entitlement ledger reconciles both. Never infer recording access from payment or a higher administrative tier. Test refunds, cancellation, restoration, duplicate events, seat changes and offline expiration before a commercial release. The new security items S23–S27 and backlog SP-047–SP-058 define this additional work.


**22. MFA and full-lifecycle audit**

**soccer_end_to_end_security_and_gap_review.md** defines the current MFA, account recovery, restricted child-session, web/API, retention and verification requirements. It records **20 review actions (R01–R20)** mapped to the existing **27 security risk themes (S01–S27)**. These are open design/verification actions, not discovered vulnerabilities in a running app. The delivery backlog now contains **74 proposed issues**; no security control is implemented by these documents.

Require authenticator-app MFA for platform/club administrators and coaches, and before parents/adult players enable cloud, access private cloud footage, share or make sensitive account changes. Support Google/Microsoft Authenticator TOTP; email validation is separate. Provide verified enrollment, backup-factor and controlled lost-factor recovery flows. No child needs an email account or authenticator to practise.

Use a restricted player/device credential during child practice; do not send a parent's full session token behind a child-mode screen. Keep adult return, device pairing, current-policy checks and offline limits explicit. Complete media quarantine/validation, data-class retention, key/restore evidence, safeguarding/reporting, accessibility and old-client compatibility before the relevant pilot or release gate. A requirement in a document is not proof that the feature works.
