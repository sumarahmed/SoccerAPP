# Build 55 device memory experiments

19 October 2026. Build 55 (0.2.0+55) is signed and package-verified. Eleven manual on-device memory experiments are enabled in Settings / Guardian. Build 54 memory growth remains unresolved; this is a diagnostic candidate, not a counting or stability fix. Device experiment reports are pending.

Static analysis passed; 249 Flutter tests passed with seven existing skips, two probe-enabled screen tests passed, 38 enabled-feature tests passed, and 49 native tests passed with one existing skip and zero failures.

## Scope

Manual modes compare decoding, Core Image conversion, post-frame cache clearing, CPU rotation, complete analysis stages and fixed-frame tensor/ball/flow/pose workloads. Reports contain bounded scalar measurements, a clip fingerprint, cleanup readings and stop reasons. No footage is uploaded and no probe counts are saved to history. The normal analyzer models/rules and 128 MiB headroom guard are unchanged.

## Device checklist

Install over the existing app and confirm build 55 in Settings. Fully swipe away, reopen and go directly to Settings / Guardian > Analysis memory experiments without opening Videos. Choose the same saved individual round for each experiment. Leave the repeat option off initially. Run Decode only, copy the report, then repeat with fresh launches for Decode + Core Image and Decode + Core Image + clear caches. Copy each report before the next run. Further modes depend on these results.

Do not force repeated attempts after a low-memory stop. The 240-frame comparison is not full-length acceptance. Any eventual production fix requires full-length/repeated-round stability, rotation/color checks and count comparisons.

## Build evidence

The first native run compiled but two probe tests failed during preparation and signing was blocked. A codec-metadata lookup correction passed the full native suite; no failing test was bypassed. CPU marker placement, cancellation/report retention, controlled-texture flow fallback and owned-object release checks passed on the simulator. These results validate the diagnostic tool, not the physical-device memory hypothesis. Signed package identity, ZIP integrity and model hashes were verified.

[Current status](../CURRENT_STATUS.md) · [Previous investigation](build54-memory-investigation.md).
