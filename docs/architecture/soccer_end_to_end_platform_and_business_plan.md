**Soccer app: end-to-end platform and business plan**

> Synchronized 8 September 2026 from the [complete planning source](../../packages/soccer_agent_activity_package_20260908/docs/baseline/soccer_end_to_end_platform_and_business_plan.md). This page contains the full source text with repository-relative navigation. Edit the canonical file under `packages/soccer_agent_activity_package_20260908/`, then run `node tools/sync-docs.cjs` from the repository root. Plain filenames, machine-data references and package regeneration commands in the source are relative to the [canonical package](../../packages/soccer_agent_activity_package_20260908/README.md).

Review edition, 6 September 2026; revised after the end-to-end security audit. Start here for the current architecture, subscriptions, hosting and operating model. This extends the five existing planning documents. The tier hierarchy is now accepted: Level 0 platform administrators; Level 1 club or parent administrators; Level 2 coaches; Level 3 players, with adult self-management at 18.

Everything here is a specification or proposal. No application code, working database, cloud project, subscription product, customer account or production workflow has been created. Australia and English remain the proposed first market/language. Vendor facts were checked on 6 September 2026; customer prices, allowances, staffing and sales volumes are assumptions to validate.

**1. Recommended decisions**

| Decision | Recommendation | Reason and limit |
|---|---|---|
| Product purpose | Help children practise safely, understand movements and build confidence between coached sessions | Measure reliable, useful practice and coach-reviewed learning; avoid promising professional talent outcomes |
| Mobile app | Flutter/Dart for iOS and Android; native integrations where media/background work requires them | Keep training and capture on the device; prove simultaneous camera, timer, demo and audio on real phones |
| Device database | Drift over native SQLite, accessed through a background worker | Structured local history, immutable plans, recording references and durable sync queues; does not automatically synchronize with the cloud |
| Web app | Next.js/React with TypeScript; server-mediated adult portal sessions | Appropriate for roster tables, calendars, plan editors, billing and reports; share governed backend contracts with mobile |
| Core cloud | Supabase PostgreSQL, Auth with required TOTP MFA, private Storage, small Edge Functions, Queues and Cron | A managed relational backend suits clubs, households, memberships and versioned plans |
| Primary location | Specific Sydney region for Supabase; Australian compute selection for relevant web/API functions | Primary placement helps latency and data-location planning; it is not an Australia-only processing guarantee |
| Web hosting | Vercel Pro; configure Sydney for relevant server functions | Managed Next.js deployment; separate previews/staging/production and protect authenticated responses |
| Mobile subscriptions | Apple/Google billing coordinated through RevenueCat, subject to SDK/audience review | Avoid building store subscription lifecycle infrastructure from scratch |
| Web subscriptions | Stripe Checkout, Billing and Customer Portal | Family web sales, club contracts/seats/invoices and later independent-coach tools |
| Paid access | One backend entitlement ledger combining verified purchase sources | Role, paid feature access, and permission to view private information are separate |
| Video recovery | Separate encrypted operational backup in AWS S3 Melbourne, with bounded recovery retention | Supabase database backups exclude video contents; backup transfer and retained copies cost money |
| Delivery and operation | Linear, GitHub, bounded agents, automated validation and named human owners | Coaching approval, privacy judgments and production release need accountable people |

Start with managed services and a modular application. Kubernetes, a microservice fleet, custom payment processing, a public coach marketplace and automated technique scoring are unnecessary for the first commercial release. Introduce additional infrastructure when a measured requirement justifies its cost.

**2. What belongs on mobile, web and the backend**

| Capability | Mobile app | Web app | Backend responsibility |
|---|---|---|---|
| Player learning and practice | Primary experience, age-appropriate interface, downloaded demos and captions | Optional read-only preview for adults | Approved content, versions, suitability and access |
| Camera, timer and both recording modes | Primary and required; local save first | Browser recording is outside the initial promise | Metadata and authorized cloud copies after capture |
| Offline practice/history | Supported after required setup/download | No offline administrative authority in the baseline | Reconcile events and current policies after reconnect |
| Parent controls | Consent, local storage, practice scheduling and account management | Detailed family history, club relationships, sharing and billing | Guardian authority and purpose-specific grants |
| Club administration | Essential phone-accessible web controls; dedicated native coaching workspace can follow | Primary: club settings, staff, cohorts, roster, calendar, assignments, reports | Tenant isolation, membership, enrollment and audit |
| Coach plan editing | Player sees published assignments; parent edits own suitable home plan | Primary: draft/review/publish age/team/player plans and assessments | Approval workflow, immutable versions and safe parameters |
| Video review | Own local/cloud footage and authorized comparison | Authorized cloud footage only; never browse another device's local files | Current viewing grants, expiry and deletion state |
| Subscription purchase | Parent/adult area uses applicable store purchase flow | Stripe checkout/invoicing for allowed web purchases | Verify provider state, billing owner, beneficiary, seats and features |
| Refund/cancel/manage | Direct user to the correct purchase source through permitted flows | Stripe portal or clear store-management guidance | Preserve source, reconcile status, prevent duplicate benefits/charges |
| Platform operation | No platform super-admin controls in the child flow | Protected platform/content/support administration | Scoped privileged actions, audit and incident controls |

Use a shared visual system and business vocabulary, not one forced interface for children and administrators. Adult portal actions require current authorization. Sensitive pages, video links and API responses must not enter public caches or a service worker's offline store. Coaches initially use the responsive web portal; the mobile player experience stays focused on learning and practice.

**3. On-device database and files**

Use one local database namespace per signed-in household/adult context, with player ownership on every sensitive record. Adult management credentials and restricted player/device credentials are separate; a local child-mode switch cannot retain adult server authority. Keep the database, media directories and account switch behavior aligned. A parent who is also a coach must not inherit club-wide local data merely by opening the child's app.

Drift supplies typed SQLite access, reactive queries and migration utilities. Its native documentation recommends database work outside the UI isolate. Use one database worker initially; add parallel readers only if profiling demonstrates a need. [Drift native database](https://drift.simonbinder.eu/platforms/vm/), [Drift migrations](https://drift.simonbinder.eu/migrations/).

| Local record group | Stored information | Ownership and synchronization |
|---|---|---|
| Minimal player profiles | Nickname/avatar reference, age band, preferences and supervised/adult mode | Cloud-managed profile projection; no full club roster |
| Workspace/membership cache | Current permitted contexts and small display details | A cache, never authority for new privileged server actions |
| Approved exercise versions | Instructions, suitability, cues, captions and media references | Downloaded immutable versions; withdrawal/freshness rules |
| Asset manifest | File path, size, integrity value, version, download and last-use state | Only complete verified downloads become available |
| Plan snapshots and assignments | Origin, recipient, exact exercise versions, work/rest parameters, due dates | Published plans are server-authoritative; preserve the session's starting snapshot |
| Practice sessions and attempts | Actual state transitions, active time, completion and reflections | Device-originated events, synchronized idempotently |
| Recording assets/parts/chapters | Paths, mode, duration, part status, offsets, owner and deletion state | Files remain local until explicit upload choice; avoid duplicate footage for chapters |
| Upload queue | Asset identity, reservation, resumable transfer reference, bytes, retries and errors | Re-check current consent, membership, deletion and quota before transfer/finalize |
| Sync outbox and cursor | Pending operations, stable operation IDs, acknowledgements and pull position | Durable retry; acknowledge only accepted operations |
| Deletion/suppression records | Deleted or cloud-expired asset IDs and pending device actions | Deletion wins over stale uploads and restored metadata |
| Entitlement snapshot | Verified features, source, validity, offline expiry and server-time reference | Short-lived cached evidence; never a client-written subscription flag |
| Device preferences | Wi-Fi choice, sound, download budget and explicit cleanup setting | Device-specific settings stay local where appropriate |

Keep MP4 recordings, thumbnails and demonstration videos in protected app files, not SQLite BLOBs. Store authentication secrets and cryptographic keys using platform secure storage; do not put them in normal preference rows or logs. SQLite itself is not an encrypted database by default. Use platform file protection, minimize local identifiers and assess an additional compatible encrypted SQLite build if the finalized threat model requires it. Review database journal/WAL files, thumbnails, temporary media and backups as part of the same storage boundary.

Exclude sensitive app files from unintended OS/cloud backup and gallery synchronization. A “local only” choice must not silently become an upload through another mechanism. Signing out locks the previous account's data from other users; removal of unsynced recordings needs a separate clear choice. Explain that uninstalling, losing or replacing a device can lose local-only videos. Recovery of an account is not recovery of an unuploaded file.

Write a session event at meaningful state changes and lightweight recovery checkpoints, not on every video frame. Use transactions for session state plus its outbox entry. Run schema migrations before access with integrity checks and a recoverable failure path; never fix an upgrade failure by silently wiping practice history. Use stable IDs, referential constraints and explicit migration versions.

Propose a 200 MB target for the pilot's principal downloadable demonstration pack, measured after encoding, with optional views downloaded as needed. Keep demonstration cache cleanup separate from personal-video deletion. Show real file sizes and available space; quotas for hosted storage do not describe free space on the phone.

**4. Offline and synchronization contract**

The app reads locally available training data through a repository layer and deliberately reconciles it with the backend. Flutter describes several offline/read/write strategies; selecting a backend is not a synchronization implementation. [Flutter offline architecture](https://docs.flutter.dev/app-architecture/design-patterns/offline-first).

| Data or action | Conflict rule |
|---|---|
| Published plans, content suitability and staff roles | Server wins for future operations; preserve completed session snapshots |
| Practice/recording events | Append using unique operation IDs; repeated deliveries do not duplicate sessions or credits |
| Guardian consent, membership removal, media grants | Current authorization must pass before upload, sharing or administrative changes |
| Deletion and retention expiry | Suppression wins over an older device's upload queue |
| Concurrent home-plan edits | Create/compare versions; show a resolvable conflict instead of silently discarding one parent's edits |
| Profile corrections | Versioned update with explicit conflict handling for consequential fields such as age/guardianship |
| Purchases and seat limits | Verified provider/backend state wins; the device cannot allocate club seats or grant premium access |

Reconnect in this order: refresh identity/current permissions; apply critical withdrawals and suppression; pull permitted changes; submit idempotent session events; then resume approved uploads. Failed or unauthorized operations remain visible with a reason. Use bounded batches and retry/backoff, with a manual recovery route. Background execution is best-effort; resume from the foreground as well. A phone cannot guarantee continuous background camera recording or immediate upload after the OS terminates the app. [Apple background tasks](https://developer.apple.com/documentation/backgroundtasks).

Propose a maximum **seven-day offline validity window** for previously verified premium access and fresh published content, subject to coaching and commercial review. Never extend beyond the verified paid/grace period merely because the device is offline. Refresh during normal use; explain the next refresh requirement before a trip. Handle unreliable device time conservatively for premium authorization. Free downloaded starter exercises and access to the user's existing local footage remain usable. Ending a subscription must not interrupt an active recording or erase history.

A seven-day cache is not instant revocation. A fully offline device cannot receive a new safety withdrawal, membership change or sharing revocation. Validate whether some content needs a shorter freshness limit and keep high-risk, stale or unapproved content unavailable for new sessions. Administrative publication, new sharing grants and purchases require connectivity.

**5. Cloud components and hosting placement**

| Component | Proposed host/location | What runs or persists there |
|---|---|---|
| Player mobile app | Installed through Apple App Store/Google Play | Flutter UI, session engine, SQLite, downloaded content and local recordings |
| Public website | Next.js on Vercel Pro; global public delivery | Product explanation, pricing, help and approved marketing material; no child data |
| Adult/admin portal | Next.js on Vercel Pro; relevant server functions in Sydney | Scoped parent, coach, club and platform screens; no public caching of private responses |
| Core relational database/Auth | Supabase, specific Sydney region | Workspaces, memberships, content, plans, assignments, progress, consent and entitlement ledger |
| Privileged API and webhooks | Supabase Edge Functions, explicitly routed to Sydney where supported | Sensitive mutations, billing ingestion, upload reservation and permitted lookup operations |
| Durable small jobs | Supabase Queues plus Cron and bounded workers | Billing reconciliation, retention/deletion, notifications, cleanup and operational checks |
| Active private recordings | Separate private Supabase Storage bucket/policies | Owner-controlled footage and thumbnails; never mixed with public demonstrations |
| Instructional media | Separate governed Storage bucket and delivery/cache rules | Licensed published demos, captions and manifests; downloadable approved versions |
| Operational recovery | AWS S3 Melbourne; separate restricted backup process | Encrypted metadata exports and object recovery copies with bounded deletion handling |
| Backup and validation execution | AWS Lambda/scheduled jobs or another verified bounded worker | Separate scoped backup and quarantined media-validation jobs; do not expose unvalidated uploads or grant general agent access |
| Transactional email | Amazon SES in the selected supported Australian region | Adult account, invitation and service messages; authenticated sending domain and bounce handling |
| Push delivery | APNs/FCM | Minimal event notification; no private footage, sensitive child details or authorization in payloads |

Supabase lists Sydney as a specific region and supports regional function invocation. Vercel supports selecting function regions. These settings do not prove all processors, logs, support access, content delivery or payment services stay in Australia. Verify real execution and data flows; document cross-border providers. [Supabase regions](https://supabase.com/docs/guides/platform/regions), [regional functions](https://supabase.com/docs/guides/functions/regional-invocation), [Vercel function regions](https://vercel.com/docs/functions/configuring-functions/region).

Supabase Edge Functions have bounded memory, CPU and execution time. Use them for short coordination work; move large backup transfers to a bounded worker and do not run a video-render farm inside request handlers. Use the existing Blender/content-production pipeline for demonstrations. Supabase Queues/Cron supply useful job primitives; consumers still need idempotency, visibility/leases, retry limits and failed-job ownership. [Function limits](https://supabase.com/docs/guides/functions/limits), [Queues](https://supabase.com/docs/guides/queues), [Cron](https://supabase.com/docs/guides/cron), [Lambda limits](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html).

Keep development local with synthetic/adult fixtures. Use a separate hosted staging project and separate production project, credentials, storage, billing modes and email/push destinations. Preview deployments must never inherit production secrets. Retain source, schema migrations, service configuration and content manifests in version control; release through the existing reviewed CI process. Domain names and company/brand ownership remain decisions, not registered assets.

**Cloud alternatives**

| Option | When it fits | Tradeoff for this app |
|---|---|---|
| Supabase + Vercel, recommended | Small team needing relational data, managed auth/storage and a productive web stack | Offline sync, entitlements and tenant policies still require engineering; multiple processors need review |
| Firebase/Google Cloud | Team prioritizes Firebase SDK familiarity and built-in Firestore offline behavior | Different document-data model and authorization design for the many-to-many club/family relationships; video and billing operations still need their own controls |
| Azure managed PostgreSQL + .NET services + Blob storage | Enterprise procurement or a committed C# engineering team justifies more infrastructure ownership | More integration and operating decisions; obtain a scoped estimate for identity, jobs, deployment and recovery |

Firestore documents offline persistence and synchronization; Azure offers managed PostgreSQL. The preference for Supabase is a project-fit judgment, not a claim the other platforms are incapable. Move or expand only for demonstrated requirements such as contractual residency, stronger regional recovery, vendor economics or engineering capability. [Firestore offline behavior](https://firebase.google.com/docs/firestore/manage-data/enable-offline), [Azure PostgreSQL](https://learn.microsoft.com/en-us/azure/postgresql/overview).

**6. Media upload, retention and recovery**

Capture locally, finalize the file, record its owner/parts/chapters, then request a quarantine upload reservation after consent and allowance checks. Server-side verification in a bounded isolated worker must succeed before the object becomes readable; client metadata alone is insufficient. Use resumable transfer directly to private storage rather than proxying a large video through the web host. Restrict upload paths and operations to the reservation; validate actual bytes and file properties before making a cloud recording playable. Retry an expired transfer using a newly authorized reservation instead of bypassing current permissions. Supabase supports TUS resumable uploads. [Resumable uploads](https://supabase.com/docs/guides/storage/uploads/resumable-uploads).

Preserve both exercise clips and full-session mode. Full-session chapters reference one original/its interruption parts; generating extra exports is explicit and consumes additional space. Target broadly playable MP4/H.264 output, subject to device verification. Generate thumbnails on the device where practical and validate untrusted media metadata safely. Do not build server transcoding or technique analysis into the pilot without a demonstrated need. Basic server-side validation of untrusted uploaded media remains required and must be estimated separately.

**Revised allowance proposal:** Starter is local-only; Family includes 20 GB shared across up to four player profiles; Club includes a pool of 5 GB per licensed player seat, with an initial per-player limit and owner-visible allocation. These replace the earlier generic 5 GB household proposal. Cloud remains optional, Wi-Fi is the default, and active cloud copies expire 30 days after successful upload. Proposed quotas are ceilings, not expected usage or unlimited archival storage.

At 2 Mbps, 15 recorded minutes are approximately 225 MB before overhead; twelve such recordings are about 2.7 GB per player/month. Four frequent players would produce about 10.8 GB before overhead, making a 20 GB family allowance more coherent than the earlier 5 GB proposal. The financial model varies participation, minutes, bitrate, overhead, playback and retention rather than assuming every account fills its quota.

Storage sponsorship is a billing record, not ownership. A club-funded video remains controlled by the guardian/adult's permissions. Charge each upload to one selected allowance, prevent double-counting across clubs/family subscriptions, and preserve a clear source for the reservation. When sponsorship ends, stop new sponsored uploads; let existing copies reach their disclosed expiry and offer a deliberate replacement allowance. Budget that remaining retention liability.

Supabase database backups exclude Storage object contents. Use separate object recovery plus metadata exports. Recommend daily verified incremental copies of active cloud objects and daily metadata exports to a restricted S3 bucket in Melbourne. Keep active backup objects while their originals remain valid; after deletion/expiry, remove ordinary access and expire noncurrent recovery copies under the stated bounded policy. Do not simply expire every backup seven days after its first upload, which would leave older active videos unprotected. [Supabase backup scope](https://supabase.com/docs/guides/platform/backups), [S3 version lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-expire-general-considerations.html).

Propose seven days of restricted recovery history after an object becomes noncurrent, with explicit deletion replay/tombstones and an emergency purge mechanism. Deletion notices must distinguish active copies from recovery-copy expiry and account for provider lifecycle processing. No family or coach can browse recovery objects. Use scoped backup identities, protected secrets and separate recovery keys/permissions; general development agents cannot access them. S3 and Lambda list Melbourne endpoints. [S3 regions](https://docs.aws.amazon.com/general/latest/gr/s3.html), [Lambda regions](https://docs.aws.amazon.com/general/latest/gr/lambda-service.html).

Target at most 24 hours of recoverable metadata/object loss and eight hours to restore the tested accidental-deletion scenarios, subject to a successful rehearsal and cost review. A separate-region backup preserves recovery options; it does not create automatic failover or prove an eight-hour region-wide recovery time. Define regional-outage recovery separately before selling any availability guarantee. Restore must reapply revoked permissions and deletions before users regain access.

Signed playback URLs and downloaded bytes have the revocation limits in the existing security review. Prefer current authorization checks and short link lifetimes; never put playable links into analytics, customer tickets or agent prompts. Cloud status indicates verified upload to the account, not a guarantee of permanent retention.

**7. Subscription service design**

Use **RevenueCat for Apple/Google purchases** and **Stripe Billing for web subscriptions**, with an internal normalized entitlement ledger. Keep club seat allocation, guardian relationships and private-media grants in the app backend. Neither billing provider replaces those domain rules.

| Subscription concern | System of record | App behavior |
|---|---|---|
| Store purchase/renewal/refund | Apple/Google through verified RevenueCat state | Parent/adult purchase flow; restore purchases and source-specific management |
| Web checkout/invoice/payment status | Stripe | Adult web checkout, invoices, approved seat changes and portal management |
| Effective feature access | Backend entitlement ledger | Combine verified eligible benefits without multiplying the same feature |
| Licensed players/coach seats | Backend allocation linked to a paid club contract | Explicit seat assignment and atomic limits, distinct from monthly active users |
| Storage allowance/sponsor | Backend reservations and usage ledger | One chargeable allowance per upload; no benefit grants from a client value |
| Permission to view child information | Guardian/membership/grant authorization | Check independently of payment, role title or licence ownership |

RevenueCat can integrate with Stripe, but this recommendation initially keeps B2B Stripe billing direct and uses RevenueCat for store transactions. The backend combines both. Revisit forwarding web revenue to RevenueCat only if its operational benefit exceeds added tracked-revenue fees and migration effort. The mobile UI must use the backend's complete entitlement result; RevenueCat's store-only customer state will not contain all direct web/club benefits. [RevenueCat Stripe integration](https://www.revenuecat.com/docs/web/integrations/stripe).

Identify the purchaser with an opaque adult account ID and the beneficiary with an explicit household/club/professional workspace. Do not send children's names, age, videos or coaching notes to billing providers. Require sign-in and ownership checks before purchase/restore; configure cross-account restore handling so one purchase cannot be silently claimed by an unrelated household. A paid coach workspace does not grant a Coach role in someone else's club.

The billing workflow is: provider event arrives; authenticate the raw request; persist its unique ID; acknowledge after durable acceptance; queue processing; obtain authoritative current provider state; update subscription and entitlement records transactionally; notify the owner and reconcile any mismatch. Handle duplicates, delayed/out-of-order events, retries and sandbox/production separation. Settle payments and paid periods from provider state, not a success screen or one ambiguous event. Reconcile daily and on consequential restore/support cases.

Stripe documents webhook-based subscription lifecycle handling. RevenueCat documents webhook authorization, optional HMAC signing, retry behavior and fetching current subscriber state. Enable the strongest supported verification, deduplicate event IDs and retain a restricted audit trail. [Stripe subscription events](https://docs.stripe.com/billing/subscriptions/webhooks), [RevenueCat webhooks](https://www.revenuecat.com/docs/integrations/webhooks).

**8. Purchase routes and app-store constraints**

For an Australian-first baseline, sell digital Family features inside mobile using the applicable Apple/Google purchase flow, in a protected adult area. Use web Stripe sales for permitted web checkout and club administration contracts. Do not put an unrestricted cheaper-web-checkout link in the Australian mobile app based on rules applying to another storefront.

Apple's multiplatform and enterprise provisions have specific conditions. A mixed family-and-club app cannot assume that labelling a plan B2B makes every digital feature exempt from in-app purchase rules. Prepare the exact club purchase/access design for store review, including equivalent in-app availability where required. Google likewise requires its billing system for covered in-app digital purchases unless an applicable exception/program applies. [Apple purchase guidelines](https://developer.apple.com/app-store/review/guidelines/), [Google payment policy](https://support.google.com/googleplay/android-developer/answer/10281818?hl=en).

Keep paid in-person coaching or other future human services as separate products with their own consumer/safeguarding/payment assessment; they do not change the rules for a digital drill subscription. The first release does not need marketplace payouts, Stripe Connect, coach commissions or financial custody.

Show the full price, renewal frequency, included profiles/seats/storage, expiry, trial terms and correct cancellation route to the paying adult. Review RevenueCat and other SDK configuration against the actual child audience and store requirements; avoid child-facing paywalls, advertising identifiers, session replay, behavioral ads and marketing notifications to children. If a selected SDK cannot meet the approved data design, replace it or narrow its use before launch.

**9. Proposed business packages**

These are starting prices for willingness-to-pay research, not approved prices, supplier quotations or market benchmarks. Family prices below assume a GST-inclusive consumer offer; club/coach prices are business prices before GST where applicable. Confirm actual tax treatment, registration, store settlements and invoices with an accountant.

| Package | Proposed price | Included value | Boundary |
|---|---|---|---|
| Starter | Free | One player, six approved foundation drills, demonstrations, timer, both local recording modes and personal history | No hosted-video allowance; safe practice and access to existing local recordings do not depend on buying premium |
| Family | AUD 14.99/month or AUD 119.99/year | Up to four player profiles, released premium programs/position paths, home-plan tools, parent controls and 20 GB optional shared cloud storage | 30-day active cloud retention; premium means available approved content, not an unbuilt unlimited catalog |
| Club | AUD 5/licensed player/month, or AUD 48/player/year; minimum 25 seats | Club administration, teams, calendar, approved plan tools, assignments, scoped progress and a 5 GB/player pooled cloud allowance | Annual minimum AUD 1,200 before GST; monthly minimum AUD 125 before GST; coaches and parent access to club assignments included |
| Invited club coach | Included in the club licence | Assigned club coaching workspace and authorized tools | No separate charge merely to perform their club role; staff limits and abuse policy documented |
| Independent Coach Pro, later | AUD 29/month or AUD 249/year | Professional workspace for up to 20 active client relationships, plan/assignment/reporting tools | Client Starter/Family/Club content and cloud entitlements remain separate; no automatic premium media allowance or marketplace payouts |
| Extra storage, later | Price after usage evidence | Deliberately selected larger allowance | No silent overage billing; price must cover storage, playback, recovery and support |

An independent coach uses the same scoped organization model with a professional-workspace classification, rather than a second application. A client relationship is not guardianship. Defer paid Coach Pro until club/family operation is validated; invited coaches must be usable in the initial club release.

A paid club seat is an allocated player licence, not a login count or monthly active user. Staff do not consume player seats. Allow seats to be reassigned under a transparent policy; use atomic allocations to avoid exceeding the contract. Proposed upgrades add seats with disclosed proration; reductions take effect at renewal unless the agreed contract says otherwise. Do not bill unexpected additions without administrator authority. A 30-day, limited club pilot can be complimentary with explicit capacity and expiry, rather than an undisclosed auto-renewing contract.

Families covered by a club can use the relevant assigned premium content without a second Family subscription. Family remains an optional purchase for wider independent programs, additional profiles and its own allowance. Show overlapping benefits to the payer. Do not silently cancel an App Store subscription or charge both sources for the same upgrade; explain how to manage the original purchase. Multiple club memberships do not multiply access to the same footage or automatically sum every storage allowance.

**10. Subscription lifecycle and customer treatment**

| Event | Required behavior |
|---|---|
| Purchase pending or authentication required | Show pending; grant paid access only from verified state or an explicitly bounded trial |
| Successful activation/renewal | Record source, beneficiary, paid period, product version and allowance; synchronize a signed/verified local entitlement snapshot |
| Billing problem/grace | Apply the actual provider/contract grace rule; tell the adult; retain local practice/history; do not invent a universal grace period |
| Cancel at period end | Preserve paid benefits through the verified end date; show source-specific management |
| Subscription expires | Pause new paid downloads/uploads according to policy; retain Starter and personal local footage; existing cloud videos follow their visible expiry |
| Club sponsorship or membership ends | Stop new sponsored allocation; preserve household ownership and the remaining disclosed retention; offer deliberate continuation |
| Refund/chargeback | Reconcile financial and entitlement state; avoid automatically deleting personal footage as a punishment |
| Restore on another device | Verify purchaser/account mapping; recover cloud metadata and unexpired cloud files; local-only files on the old device are not recoverable remotely |
| Account deletion | Explain existing provider subscription status, remove app access/data according to policy, direct cancellation correctly and retain only necessary billing/legal records separately |
| Upgrade/downgrade or overlapping sources | Apply provider proration/period rules and one effective entitlement policy; never infer elevated administrative roles |

Before an allowance is full, show usage and clear options. When full, pause uploads and preserve local saves. Never surprise an adult with usage-based video bills. When a recording is near its disclosed expiry, an optional adult notification can help them export or retain a local copy; it must not falsely imply that all footage will be retained indefinitely after renewal.

Separate operational entitlement records from accounting records. Reconcile gross billings, GST/tax, store/processor charges, refunds, net payouts and bank settlement. Monthly recurring revenue is the normalized subscription value; it is not cash collected this month. Annual subscriptions produce cash upfront but create future service obligations. Maintain a reserve for refunds, cloud retention after departure and essential operations.

**11. Pricing evidence and financial model**

The companion **soccer_subscription_and_cost_model.xlsx** contains editable inputs, three scale scenarios, family/club unit economics, an illustrative build budget, sources and checks. It is a planning model, not a revenue forecast, tax return, vendor bill or quoted implementation cost. It separates customer counts from activity, gross charges from revenue excluding GST, and operating contribution from founder compensation.

| Cost input checked on 6 September 2026 | Published rate or modeling treatment |
|---|---|
| Supabase Pro | USD 25/month; additional projects from USD 10/month; two Micro projects modeled at USD 35 total before overages |
| Supabase storage | 100 GB included, then USD 0.0213/GB; shared allowances must be allocated across app uses |
| Supabase uncached egress | 250 GB included, then USD 0.09/GB; separate cached allowance/rate exists |
| Vercel Pro | USD 20/month starting price with included usage credit; model additional usage and developer seats when needed |
| RevenueCat | Free below the stated USD 2,500 monthly tracked revenue threshold, then 1% of total tracked revenue; not just the excess above the threshold |
| Stripe Australian domestic cards | 1.7% plus AUD 0.30 per successful charge; international cards and other methods differ |
| Stripe Billing | 0.7% of covered Billing volume under the published usage-based option, in addition to processing |
| Store commission | 15% working scenario where applicable; Apple Small Business eligibility/enrollment must be established; Google lists 15% for automatically renewing subscriptions |
| S3 recovery, backup jobs, email, observability, delivery tools | Explicit planning allowances, with source links where relevant; not a regional vendor quote |

[Supabase pricing](https://supabase.com/pricing), [Vercel pricing](https://vercel.com/pricing), [RevenueCat billing explanation](https://www.revenuecat.com/docs/welcome/set-up-revenuecat/account-management), [Stripe Australia pricing](https://stripe.com/au/pricing), [Stripe Billing pricing](https://stripe.com/au/billing/pricing), [Apple Small Business Program](https://developer.apple.com/app-store/small-business-program/), [Google subscription fees](https://support.google.com/googleplay/android-developer/answer/112622?hl=en).

Use a planning exchange rate of **AUD 1.55 per USD**, editable and explicitly not a live FX quote. The model assumes a GST-registered business for comparability; Australia generally uses 10% GST and has registration rules based on turnover. Confirm applicability and treatment of store/platform remittances rather than subtracting tax twice. [ATO GST registration](https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst), [ATO GST explanation](https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/how-australian-gst-works).

The video model includes optional cloud participation, recording frequency/minutes/bitrate, encoding overhead, active retention, remote playback and transfer to recovery storage. It also includes demonstration downloads, retained recovery copies, human support, delivery tools, business overhead and a founder compensation target. A cap is not average usage. The backup storage rate is a conservative assumption to replace with an AWS regional estimate. Restore traffic, exceptional incidents, taxes on vendor bills, additional capacity and negotiated contracts can change costs.

RevenueCat monthly tracked revenue (MTR) counts purchase/renewal events and is different from MRR. A large annual-sales month can cross its fee threshold even when normalized MRR is lower. The model uses a disclosed steady-state collections assumption and an adjustable store-collection multiplier; replace that proxy with provider reports once operating. Processor fixed fees use estimated transaction frequency, not one fee for every normalized month of an annual subscription.

Start with three scenarios: an unpaid operational pilot, an early paid business and a larger validated operation. These are alternative scale cases, not dated promises of customer acquisition. The unit-economics view shows the marginal cost of delivering a family or club seat without relying on introductory free allowances. Test 30% store commission, higher video use/playback, lower annual prices, more support and slower sales before committing expenditure.

For build spending, the workbook exposes engineering hours/rates, the fraction commissioned externally, specialist design/coaching/animation/privacy/security work, hardware and contingency. Founder effort is shown separately so using agents does not make that work disappear. Obtain quotes for the feasibility and first content samples before contracting a whole release. The earlier 12–19 week family-only schedule does not describe the expanded product.

**12. What is needed to run the business**

| Operating function | Minimum system/process | Accountable owner and evidence |
|---|---|---|
| Product management | One roadmap/decision log, staged scope and verified delivery backlog in Linear | Founder; accepted priorities and evidence at each gate |
| Coaching quality | Named youth-coaching reviewer, specialist input where needed, reviewed prescriptions and feedback criteria | Content lead/coach; approval tied to each version |
| Animation production | Reusable Blender assets, licensed adult movement references, editing/captions and release manifests | Animator/content lead; rights register and accurate samples |
| Child safeguarding | Appropriate conduct standards, staff qualification checks, enrollment/consent, complaint escalation and controlled communications | Named safeguarding contact; jurisdiction/service-specific review |
| Customer acquisition | Public site, clear adult value proposition, small club demonstration pipeline and consented parent research | Founder; adult-contact CRM/register, no child data in sales tools |
| Club onboarding | Contract, verified administrator, configuration, invitations, coach training and activation checklist | Customer-success owner; first successful assigned practice |
| Billing/accounting | Provider dashboards, entitlement reconciliation, invoices/payouts, refunds and monthly close | Founder/accountant; reconciled statements and clear tax treatment |
| Customer support | Adult support inbox/ticket process, help content, access-controlled case handling and service hours | Named support owner; response targets and escalation coverage |
| Security/privacy | Data inventory, scoped access, incident response, deletion/restore checks and vendor review | Technical/privacy owners; evidence from actual deployment |
| Reliability | Redacted diagnostics, save/upload/deletion/billing alerts, tested release and restore procedures | Operator plus designated backup person |
| Company administration | Entity/ABN decisions, banking, domain/brand, contracts/IP, insurance and supplier agreements | Founder with accountant/legal/insurance advice; actual registrations and executed agreements |
| Financial control | Spend caps, cash reserve, revenue/cost review, runway and evidence-based hiring | Founder; model reconciled to actuals rather than assumptions |

Use existing suitable business tools before adding subscriptions: a restricted adult-contact sales register, a support inbox, an accountant's preferred accounting system and a password manager can cover early operations. Add a dedicated CRM/helpdesk when volume requires assignment, audit and response tracking. Keep raw child footage and identifying research notes out of Linear, public analytics, sales systems and coding-agent context.

The founder can own priorities, sales and acceptance. Qualified coaches, animation specialists and an independent security/privacy review remain real work with budgets. A named alternate operator must be able to handle a critical incident when the founder is unavailable. State actual support hours and response targets; do not sell 24/7 coverage that nobody can provide.

Agents can draft specifications, implement authorized tasks, summarize redacted operational metrics and prepare support responses. They do not autonomously approve youth training content, grant guardian authority, issue unrestricted refunds, access children's videos or publish production changes. Reuse the existing bounded agent workflow rather than building a second orchestration system for business operations.

**13. Acquisition, retention and responsible growth**

Begin with two or three club design partners and the existing age-diverse family concept study, subject to recruitment and consent. Validate the direct-family route alongside clubs so the product does not depend on a single club's preferences. No partner, family or coach has been recruited through this plan.

The initial adult value proposition is structured, understandable practice between training sessions, with visible assignments and private review. Clubs gain repeatable coaching plans and less administrative effort; parents gain clarity about what and how to practise. Validate those outcomes before claiming measured skill improvement or professional selection benefits.

Use a limited coach-reviewed starter catalog to demonstrate value. Observe setup, distance from the screen, cue comprehension, successful local save and the adult's understanding of cloud expiry. Provide a tripod/setup guide and accessible spoken/captioned instructions. Make progress personal and age-appropriate. Rest, stopping, missed weeks and lower training frequency must not be framed as failure or trigger pressure to buy.

Monitor successful sessions, recording/save failure rate, returning households, completed club assignments, coach time saved, activation per licensed seat, support burden, voluntary renewal, refunds and cost per cloud-active player. Record denominators and separate age groups, payer types and genuinely distinct players. Do not use more uploaded child video or longer screen time as the primary success measure.

Fix the pilot's decision thresholds before looking at results. Use the existing reliability gates plus evidence that adults understand sharing, cancelling and retention. A small pilot cannot prove long-term player development. Publish only supportable claims; use authorized adult demonstrations in marketing unless a separate, appropriate consent process covers identifiable youth material. Future AI analysis requires its own validation and consent decision and should not underpin the initial revenue promise.

**14. Build and launch sequence**

| Stage | Required work | Decision before expanding |
|---|---|---|
| Foundation review | Confirm first market, accept detailed interfaces/data/subscription contracts, assign owners and set discovery spend | Current no-code work becomes a commissionable specification |
| Feasibility | Real-device media, local database migration/recovery, club/household authorization, resumable upload and sandbox billing/identity | Evidence supports the technology choices, supported device floor and a new estimate |
| Integrated pilot | Twelve approved drills, representative animations, both recording modes, family and club workflows, private optional cloud, entitlement controls and operations | Privacy/security/content/reliability gates pass for real participants |
| Consented trials | Family and coach/admin use, measured support load, pricing interviews and explicit limitations | Decide what is valuable enough to sell and what must change |
| First commercial release | Paid Family/Club products, store review, refund/restore/cancel flows, reconciliation, help/support and tested recovery | Named owner accepts actual build, store status, cost exposure and service promise |
| Proven growth | Expand catalog/programs, improve retention, evaluate Coach Pro and larger storage | Unit economics, workload and child outcomes justify additions |

Perform commercial architecture and sandbox billing feasibility before the paid build, not after every interface is finished. Keep catalog/entitlement definitions versioned so the pilot can use explicit test grants without charging families. The same permissions and limits must apply to complimentary access; a trial is not a security bypass.

The backlog now adds device/cloud/subscription/business tasks to the existing club/family work. High-risk dependencies remain attached to release gates. Estimate calendar time from productive engineering capacity, specialist availability and review cycles. A part-time founder's calendar is materially longer than the same work allocated to a full-time team; agents do not remove device testing or acceptance work.

**15. Decisions to review and present completion state**

Recommended for review: Flutter/Drift mobile; Next.js admin web; Supabase Sydney primary services; Vercel Pro; separate Australian recovery copies; RevenueCat plus Stripe with one entitlement ledger; Starter/Family/Club packages; invited coaches included; Coach Pro deferred; optional bounded cloud storage; seven-day proposed offline validity; and accountable specialist/operational coverage.

Still open: explicit launch market, company/brand/domain, actual device floor, final coaching-approved age/prescription rules, subscription prices and annual discounts, commercial cloud allowances, legally reviewed notices and retention, vendor agreements, SDK eligibility, paid-discovery budget and named specialists. These are review decisions, not reasons to leave the specification incomplete.

Completed planning artifacts include this end-to-end plan, the baseline financial workbook, the five earlier documents and the new security/gap review. All prices and capacity assumptions are identifiable. No infrastructure, working database, subscription product, application code, contract, paid engagement, recruitment or automated business workflow has been created.


**Review aid: current workbook outputs**

The editable default assumptions produce the following monthly cases in AUD. They are alternative steady-state business sizes, not a sales forecast, quote or cash-flow forecast. Revenue is normalized monthly and excludes assumed GST; annual subscriptions collect upfront. Support is costed even when a founder supplies it.

| Monthly measure | Complimentary pilot | Early paid | Larger scale |
|---|---:|---:|---:|
| Paying families / clubs | 0 / 0 | 50 / 3 | 1,000 / 30 |
| Licensed club seats | 0 | 150 | 3,000 |
| Independent Coach Pro accounts | 0 | 0 | 20, later product |
| Revenue excluding GST | 0 | 1,182.75 | 24,152.50 |
| Cloud services including recovery | 127.87 | 244.21 | 3,133.02 |
| Contribution before founder compensation target | −836.20 | −903.16 | 10,428.79 |
| Contribution after founder compensation target | −836.20 | −5,903.16 | 3,428.79 |

The early paid case does not cover the assumed operating budget before founder compensation. Positive per-customer marginal contribution is insufficient by itself: acquisition, support, content and ongoing engineering still need funding. The larger case assumes 20 optional independent coaches; set them to zero when evaluating family/club-only operation. Actual international card mix, store eligibility, annual purchase timing, usage and contractor cost can change these results.

Illustrative cash build budgets are AUD 60,337.50 founder-led, AUD 81,821.88 hybrid and AUD 137,681.25 commissioned, including the modeled 25% contingency. They leave approximately 595, 457.5 and 100 unpaid founder hours respectively. These are bottom-up assumptions for discussion, not specialist estimates or promised delivery dates; obtain bounded feasibility quotes first. Operating runway and founder living costs need separate cash reserves beyond build spend. The workbook exposes every input and includes arithmetic checks; it does not establish customer demand or production performance.

**Review package status:** seven planning documents, one editable seven-sheet baseline financial model, 74 proposed delivery issues, 27 security risk themes plus 20 detailed review actions, and written screen requirements through F33. The existing two visual concept boards remain illustrative; no new editable Figma screens, live tracker or functioning database were created by this update.


**16. Security audit amendments and estimate limits**

**soccer_end_to_end_security_and_gap_review.md** defines the current MFA, account recovery, restricted child-session, web/API, retention and verification requirements. It records **20 review actions (R01–R20)** mapped to the existing **27 security risk themes (S01–S27)**. These are open design/verification actions, not discovered vulnerabilities in a running app. The delivery backlog now contains **74 proposed issues**; no security control is implemented by these documents.

Google Authenticator and Microsoft Authenticator are supported through TOTP code generation. Mandatory MFA applies to platform/club administrators and coaches. Parents/adult players must enroll before cloud-media access, cloud enablement, sharing and sensitive account changes; MFA is offered at setup, with local-only Starter use permitted without enrollment. Email verification or social sign-in alone does not satisfy this policy. Children use guardian-provisioned restricted sessions, and Stop never requires MFA.

Use server-mediated browser sessions for adult administration, with provider credentials kept on the server and secure session cookies in the browser; direct API/RLS/Storage routes still enforce current actor/scope/assurance. Follow the review's session/recency limits, controlled lost-factor recovery, quarantine validation, guardian-dispute/age-transition rules and record-level retention schedule. Supabase passkeys are currently experimental and require separate evaluation; do not assume a production-ready substitute for the TOTP baseline.

The unchanged workbook is a baseline, not a price for the newly detailed security scope. Re-estimate identity/recovery, restricted player credentials, the web session boundary, media validation, audit retention, alternate operator coverage and content-variant production. Its existing build totals and operating contribution examples must not be treated as a fully costed security-reviewed release. SP-064/SP-073 cover scope estimates and funding; SP-065–SP-074 cover implementation evidence and release prerequisites.
