# Build 62 — stronger Touch Count milestone

Milestone tag: `milestone/build62-stronger-touch-count` in the private implementation repository. Both repositories have been committed and pushed; this documentation pass records the current checkpoint without closing refinement or device testing.

21 October 2026. Owner authorizes this internal build and accepts the incremental
UI proposal rendered from Build 61 native source. Build 62 is now the latest successful internal build and the owner confirms installation.

Local implementation includes a versioned stronger shared counter, larger-model
fallback and bounded track recovery, highest-supported normal camera FPS with
nominal30 minimum, below-minimum recording rejection, and setup/result guidance.
One shared estimate includes playing feet/head/thigh contacts, excludes hands and
ground/object rebounds, and uses the drill as context. Saved prior results are
preserved. Body analytics, exports and the existing screen hierarchy remain.
D03 uses an explicitly temporary24fps demonstration; player-video analysis and
its minimum-rate requirement are independent of the demo.

## Validation and delivery

- 77 cached-evidence parity cases match event frame/body/side attribution.
- 157 Python unit tests pass;276 default Flutter tests pass (11 skipped).
- 28 enabled camera/history/shared/setup checks,49 enabled practice regressions and6 milestone/dashboard checks pass.
- Flutter static analysis passes.
- Native simulator regression tests, cloud Flutter gates and signed packaging: all passed.
- Source commit: `6d69d89a7d64331e62ef51fd5644453210984637`, pushed and confirmed by Codemagic.
- [Internal Build 62 run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6ad8a3d893707fc384745ec3) finished successfully; all stages passed. Owner confirms Build 62 installation. Artifact: `soccolo_mobile.ipa`, `0.2.0+62`, 137,410,976 bytes.

These are local and identical-evidence checks, not proof of end-to-end phone
accuracy. Personal videos, traces and detailed child results remain private/local.

## Refinement and testing remain OPEN

Child head/thigh misses, uncertain attribution, native/desktop evidence differences,
device memory/thermal/processing performance, actual high-FPS cadence on both
lenses, new front-view footage, real D03 validation and final demonstrations.
Keep accepted references and zero-touch/hand controls in every regression pass.
Mixed and side-view optimisation remain deferred. No formal delivery-plan
acceptance, public app release or website deployment is implied by this milestone.

## Cloud checkpoint at this documentation pass

Codemagic reports `finished`; every build action reports `success`, including native
simulator regression tests, static analysis, Flutter suites, enabled-feature checks,
signed IPA packaging and artifact publishing. The owner confirms Build 62 is installed.
Next: device recording, actual FPS, preserved history, count comparisons and resource
testing. Installation is not proof of counting accuracy. No new build is requested.
