# Local usability milestone — 29 September 2026

The owner authorized one combined local usability update after reviewing Build 20.
Build 21 covers the four retained observations and the proposed local management
family: plans, session guidance, media/history, device storage and offline readiness.

Implemented scope:

- Plan rename, duplication, template deletion and timed work/rest estimates.
- Current/next drill guidance and finished-session summaries.
- Separate practice history with removable details; finished plan-session removal
  recalculates plan progress while preserving recordings and exports.
- Original deletion from both My Videos and Verified local sessions, with the
  existing confirmation, durable deletion journal and retry behavior.
- Full-session WORK/REST timers and timeline; elapsed self-paced no-camera timer
  that checkpoints/restores paused and excludes background time.
- Drill/date media filters, readable recording labels, no empty/staging video cards.
- Original/export byte totals and selected cleanup through existing libraries.
- Offline bundled-demo availability, with all D01-D10 temporary labels retained.

Deleting templates preserves immutable run snapshots. Removing individual practice
records does not rewrite plan progress. Finished plan-session removal does remove
its contribution to progress counts. Media deletion leaves history intact. No bulk
or automatic storage deletion was added; unfinished parts are counted but retained.

The photographed no-recording cards were practice records, not proof of orphaned
video files. Capturing the current drill still does not automatically record every
drill in a plan. Progress measures participation rather than skill. Cloud, accounts,
payments and public release remain deferred. Physical-device acceptance is pending.

Local analysis, all 97 Flutter tests, Android debug control compilation, repository
contracts, asset hashes and documentation validation passed. Nine new tests cover
plan/history operations, pause/restore timing, storage accounting and library
filtering/deletion. The private implementation packet contains the device checklist.

## Signed Build 21 evidence

[Codemagic Build 21](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6abb442cac4cd795b1d9b0dd) completed successfully.

- Version: `0.1.0 (21)`; source: `4fb41acfd79b74615cbca51bd35e062c765e4a83`.
- Apple-host analysis and all 97 Flutter tests passed.
- Native XCTest: 15 discovered, 14 passed, one skipped, zero failures.
  `testOfflineRenderedDissolveAndHeldFrameRemoval` requires a physical device;
  its simulator skip is not a pass.
- Signed Ad Hoc IPA verified: bundle `com.soccolo.soccoloMobile`, exact source SHA
  embedded, ten-drill catalogue identical to source, four brand asset hashes
  matched, one registered pilot device, debug entitlement disabled.
- IPA size: 30,417,735 bytes. SHA-256:
  `ac555c3b613a090652ef06a144188a5fd082f3c4dff38820a52b8e9cfa5761c5`.
- No App Store/TestFlight submission or cloud activation. Physical-device
  acceptance remains pending; install over the existing app and run the checklist.
