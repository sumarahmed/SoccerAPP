# Development technology and library baseline

Prepared 10 September 2026. Proposed implementation choices for the [foundation milestones](development_foundation_milestones.md). These packages are not installed by this document. Exact versions remain unselected until DF-01 verifies compatibility and records them. Product architecture continues to follow the [master plan](../product/soccer_delivery_master_plan.md).

## Decisions and version policy

The existing baseline selects Flutter/Dart, Drift/SQLite, Next.js/TypeScript, Supabase, RevenueCat and Stripe. The supporting libraries below are proposed defaults. DF-00 records their technical owner and any justified substitution; DF-01 resolves one compatible set rather than independently installing whatever is latest. Do not treat sample versions in vendor documentation as project pins.

For each dependency record package name, exact resolved version, official source, license, purpose, platforms/minimum OS, native build requirements, transitive dependencies, known security findings, data collection, maintenance owner and replacement strategy. Commit application lockfiles and SDK/runtime pins. A vulnerability finding needs a disposition and owner; an empty scan is not proof of security. Development tools must also respect the actual organization's license terms.

## Mobile and local persistence

| Component | Proposed dependency or tool | Required foundation proof | Adoption decision |
|---|---|---|---|
| App/runtime | Flutter stable channel and its bundled Dart SDK | Clean build on the selected Android toolchain and a named macOS/Xcode environment; record exact SDK revision | Existing architecture; exact pin DF-01 |
| Routing | `go_router` | Restricted player/adult routes, deep-link denial and restart behavior; routing never substitutes for server authorization | Proposed; DF-00/DF-05 |
| State management | Flutter SDK `ChangeNotifier`/`ValueNotifier` with injected interfaces initially | Controller lifecycle is independent of theme rebuilds; clock/camera/data adapters replaceable in tests | Proposed minimal default; adopt another state library only through a recorded decision |
| Local structured data | `drift`, `drift_flutter`, `drift_dev`, `build_runner`; `path_provider` where required | Deterministic code generation, worker database access, versioned migrations and preserved history | Existing Drift choice; concrete package set DF-01/DF-05 |
| Backend client | `supabase_flutter` | Restricted player session never receives an adult credential; expired/revoked sessions denied at server routes | Candidate adapter, not authority policy |
| Protected credential storage | `flutter_secure_storage` | Check platform options, device migration/backup behavior and account switch cleanup; storing keys securely does not encrypt SQLite/video automatically | Candidate; security review DF-04/DF-05 |
| Camera | Flutter `camera` package | Actual capture confirmation, microphone choices, permission denial, interruptions and saved-file integrity on physical devices | Candidate proven in DF-08 |
| Demonstration/replay | Flutter `video_player` | Concurrent local playback/capture does not drive the timer or reset its state | Candidate proven in DF-08 |
| Branded export | Native composition adapter selected after SP-081 experiment | Logo-first output, correct source/chapter offsets, orientation/audio, cancel/low-space safety | Deliberately unresolved; no unreviewed FFmpeg wrapper or assumed cloud renderer |
| Store subscriptions | RevenueCat Flutter SDK (`purchases_flutter`) | Genuine store sandbox receipt, correct beneficiary and replay/refund behavior | Integrate in DF-09 after SDK/audience review |
| Unit/widget tests | SDK `flutter_test`; small injected fakes | Clock/state/permission rendering cases with explicit expected results | Proposed baseline |
| App integration tests | SDK `integration_test` | App-owned screens and local persistence on named emulator/device | Proposed baseline; native OS interactions require separate treatment |

Drift's documented setup uses its runtime and development/code-generation packages; preserve their compatible pairing. [Drift setup](https://drift.simonbinder.eu/setup/). `go_router` is a Flutter-published routing package. [Package documentation](https://pub.dev/packages/go_router). Review the actual Supabase session persistence and platform storage configuration before selecting defaults. [Supabase Flutter](https://pub.dev/packages/supabase_flutter), [secure storage](https://pub.dev/packages/flutter_secure_storage).

Flutter distinguishes unit, widget and integration testing. Its `integration_test` package does not operate native OS permission dialogs; DF-08 must choose a reviewed native automation tool, or a reproducible witnessed manual protocol for those cases. Camera lifecycle handling and concurrent media remain device obligations. [Flutter testing](https://docs.flutter.dev/testing/overview), [camera package](https://pub.dev/packages/camera).

## Web, shared contracts and backend

| Component | Proposed dependency or tool | Required foundation proof |
|---|---|---|
| Portal | Next.js App Router, React and TypeScript | Compatible exact versions; production build and server/client boundary check |
| JavaScript workspace | Node.js supported LTS and pnpm | Explicit runtime/package-manager versions; root workspace config and committed `pnpm-lock.yaml`; frozen install in CI |
| Server backend client | `@supabase/supabase-js`; evaluate `@supabase/ssr` only where it fits the approved session design | Adult access mediated by server; no broad refresh/service credential in browser storage, bundles or logs |
| Browser session | Secure application session cookie plus server-owned provider session handling | CSRF, session fixation, stale role and direct API denial cases; a vendor SSR sample is not sufficient proof of this contract |
| Contracts | Versioned JSON Schema/OpenAPI documents and shared JSON fixtures | Dart/TypeScript/SQL adapters accept/reject the same fixture cases; select and pin validators/generators in DF-03 |
| Web unit/components | Vitest, React Testing Library, jsdom | Pure logic and client component cases with meaningful expected outcomes |
| Web end-to-end | `@playwright/test` | Chromium baseline plus relevant Firefox/WebKit cases against a production-built local portal; asynchronous server flows tested here |
| Static checks | TypeScript compiler, ESLint and Dart analyzer/formatter | Explicit standalone commands; do not assume the framework build also runs all lint checks |
| Local backend | Supabase CLI and a Docker-compatible runtime | Isolated local PostgreSQL/Auth/Storage; rebuild from migrations and seed files without a production connection |
| Database tests | pgTAP through Supabase CLI | Real policies exercised as allowed and denied actors; superuser-only tests do not establish row security |
| Edge logic | Supabase Edge Functions with pinned compatible Deno tooling where selected | Deno unit tests for edge-only logic plus HTTP integration against local services; do not run Deno-only modules under Node and call that equivalent |
| Web billing | Stripe server SDK | Sandbox only; server verification, webhook signature checks and idempotency |
| Media validation worker | Isolated worker behind a versioned interface | Runtime, decoder, memory/time/network limits chosen in a dedicated security/media spike; no arbitrary decoder in request handlers |

Next.js documents Vitest and Playwright separately. Async Server Components need suitable end-to-end coverage rather than an unsupported unit-test substitute. [Next.js testing](https://nextjs.org/docs/app/guides/testing), [Vitest guide](https://nextjs.org/docs/app/guides/testing/vitest). Local Supabase requires its CLI and a Docker-compatible runtime; its database testing workflow uses pgTAP. [Local development](https://supabase.com/docs/guides/local-development), [database tests](https://supabase.com/docs/guides/database/testing). Inspect SSR helpers against the stricter project session contract before adoption. [Supabase SSR clients](https://supabase.com/docs/guides/auth/server-side/creating-a-client).

## Hosting, accounts, media and secrets

Vercel, a Sydney Supabase project, separate recovery storage, RevenueCat, Stripe and Apple/Google developer accounts remain planned external services. DF-09 records the actual project/account IDs, environment classification, region settings, permitted spend, owner/alternate and access method. No account creation, purchase, deployment or invitation occurs through this planning update. Keep staging and production identities separate; local development uses synthetic data and local endpoints.

Blender and licensed/consenting-adult source assets support demonstration production. The supplied concept PNGs are design references; they do not satisfy approved motion/content delivery. DF-08 can use clearly labeled adult/synthetic media fixtures without claiming coach approval for release content.

Commit `.env.example` with names and descriptions only. Each variable has an owner, scope, source and redaction rule. Never commit service credentials, TOTP seeds, signing materials or payment secrets. The tooling must reject production targets for local reset/seed commands. A project name containing `dev` is not sufficient proof of its environment.

## CI and reproducibility contract

Use GitHub Actions as the proposed CI provider, subject to DF-00 checking this private repository's actual plan, runner availability and branch-rule capabilities. At the last repository inspection no app workflows existed. Do not claim that a failing workflow prevents merge unless branch enforcement has been demonstrated. If the current plan cannot enforce the required checks, record the exact limitation and owner decision; do not mark the enforcement criterion complete.

Pin third-party Actions to full commit SHAs and use minimal workflow token permissions. Untrusted PR jobs receive no privileged environment credentials. Dependency installation uses committed locks and clean caches must work. Cache keys include OS and lock/runtime identity. [GitHub secure workflow guidance](https://docs.github.com/en/actions/reference/security/secure-use).

Proposed stable jobs: `docs`, `dependency-integrity`, `mobile-static-unit`, `web-static-unit-build`, `backend-policy`, `web-e2e`, and `foundation-evidence`. DF-02 establishes executable bootstrap jobs; DF-06 adds actual application assertions. A zero-test run, skipped required suite, missing expected result or reused artifact from an older commit must fail the aggregate readiness check. Hardware and external sandbox runs have separate reports and cannot be represented as ordinary unit tests. Playwright reports/traces must use safe fixtures and private artifact access. [Playwright CI](https://playwright.dev/docs/ci).

## Proposed repository paths and commands

These are target deliverables, not files or commands already implemented:

```text
apps/mobile/                     Flutter application and local test/integration_test
apps/web/                        Next.js portal and browser/component tests
backend/supabase/                config.toml, migrations, seed.sql, tests, functions
contracts/                      versioned schemas, errors, events, compatibility fixtures
workers/                        bounded worker interfaces and selected adapters
tests/fixtures/                 synthetic identities, content and adult media manifests
tests/evidence/                 sanitized run records; large media stays in approved storage
tools/dev/                      preflight, verify, environment checks and run orchestration
.github/workflows/              required jobs; actual branch rules configured separately
```

DF-01 defines cross-platform wrappers `node tools/dev/preflight.cjs` and `node tools/dev/verify.cjs`. `verify` invokes the relevant locked install/build/check tools and propagates failures; it does not manufacture a green result for unavailable SDKs. Plan for `flutter analyze`, `flutter test`, explicitly defined pnpm lint/typecheck/unit/build/e2e scripts, and Supabase database tests with the correct project working directory. Inspect CLI help for the pinned release before committing command syntax. Mac/iPhone access is a named external prerequisite for iOS build/device evidence; a Windows-only checkout does not satisfy it.

## Library adoption record template

Record each choice in the implementation repository with: component; proposed package; exact selected version; minimum platform versions; license and transitive review; installation/build result on each supported runner; test evidence; data/secret handling; owner/reviewer; accepted date; upgrade/rollback plan. Every field starts unresolved. The foundation is not accepted while required choices remain merely proposed.
