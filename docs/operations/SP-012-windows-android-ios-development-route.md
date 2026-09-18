# SP-012 — Windows development and iPhone-target pilot route

| Field | Record |
|---|---|
| Owner decision | Syed Ahmed accepted this recommended route on 16 September 2026 |
| Scope | Synthetic-only, single-owner implementation foundation in the private `Soccolo-app` repository |
| Product target | iPhone-first pilot remains unchanged |
| Local development target | Flutter/Dart on Windows; Android emulator and the owner's Samsung device for rapid integration checks |
| Required later target | Named macOS/Xcode build environment and physical iPhone/iPad verification before iOS acceptance |
| SP-012 result | Interim route accepted; `ACT-SP-012-03` and `SP-012` remain **open** |

## Route accepted for the current stage

Use one Flutter codebase. Build shared UI, state, content playback and synthetic
fixtures on Windows, then use Android locally to catch integration problems.
Android is a development/test route, **not** an Android-first release decision
or substitute evidence for iOS camera, permissions, interruption, recording,
playback or export behavior.

Create a small internal prototype containing only the three accepted SP-006
design videos (D01, D04 and D06). Keep every other drill unavailable in that
prototype. The videos remain `playerReleaseAllowed: false`; do not publish this
prototype to children, distribute it as a player pilot or treat its results as
SP-125 content-release approval. The D01–D10 pathway and D11/D12 deferral remain
the accepted product scope. [SP-125 production](../content/ACT-SP-125-01-pilot-asset-readiness-review.md)
is deferred while the owner researches the best way to generate the complete
videos; this does not change its completion criteria.

The first implementation batch may install or pin the free development
toolchain, scaffold a thin mobile harness and add executable static/unit checks
in the private repository. It must use synthetic fixtures and no hosted
production service, real-child account, real-child footage or public sharing.
The [SP-009 owner exception](../security/ACT-SP-009-02-owner-risk-exception.md)
permits that bounded work; it does not complete SP-009 or replace independent
security/privacy review.

## Evidence and cost gates

1. Record exact Flutter/Dart, Android/JDK and build-tool versions and lockfiles
   when selected. A tool missing from PATH is **pending**, not a passed check.
2. Keep the implementation repository private/free and single-writer for this
   stage. CI checks may run, but are not branch protection. `AC-SP-012-02` and
   `AC-SP-012-08` remain blocked until enforceable rules and a failed-then-fixed
   pull-request proof exist.
3. Before iOS integration acceptance, name a macOS/Xcode route (owned,
   borrowed, or hosted), signing owner and exact devices. Do not spend or
   subscribe to a service under this decision; seek separate authority for
   any cost. Android tests cannot close iOS device criteria.
4. Before an additional writer, hosted environment or participant data, revisit
   reviewer identity, isolated development/staging, scoped credentials,
   branch rules and the source-required SP-009 specialist gate.

See the [SP-012 acceptance evidence](ACT-SP-012-03-acceptance-evidence.md) for
the unchanged criterion-level partial/blocked result. This is a dated platform
choice and work authorization, not a completion record or release approval.

## 18 September 2026 — Codemagic trial selected

Syed Ahmed selected Codemagic's personal macOS build route because he has no
local Mac. The private `Soccolo-app` repository is connected to his Codemagic
personal account with access restricted to that repository. A manual-only,
unsigned iOS simulator workflow is versioned on the private
`feat/sp014-local-camera-feasibility` branch. It runs the project's pinned
Flutter version, analysis and tests before an iOS simulator build; it has no
automatic trigger, signing credential, publishing step or child-data route.

The 18 September manual build at private commit `f92c555` passed Flutter
analysis, tests and an unsigned iOS simulator compile. Codemagic retained a
downloadable simulator app and ZIP in the [build artifacts](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aac949fcc80aea022028fcc).
This is a feasibility probe, not a physical iPhone result. Syed Ahmed reports
an active paid Apple Developer Program membership; signing access and device
provisioning are not configured or verified. Do not add Apple credentials,
enable TestFlight or claim physical iPhone support until the exact signing
route receives separate approval and is tested. Codemagic access and this
unsigned build do not resolve the protected-branch or operator-review gaps in
SP-012.
