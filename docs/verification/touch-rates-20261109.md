# Estimated-touch rate revision — 9 November 2026

Private implementation checkpoint: `5a3e1c374eec6800bc1088d0e5b6e28a9b178b37` (pushed to GitHub). This records source synchronization, not a new app build.

The owner supplied revised per-minute rates for 15 drills, including D20 and D21 separately. The other eight catalogue rates remain unchanged. These are duration estimates, not measured contacts or a validated skill assessment. D13 and D14 are absent from the current catalogue.

## Current rate table

| ID | Drill | Touches/min | 30 seconds | 60 seconds | 90 seconds |
|---|---|---:|---:|---:|---:|
| D01 | Inside touches | 75 | 38 | 75 | 113 |
| D02 | Sole rolls | 40 | 20 | 40 | 60 |
| D03 | Dribble and stop | 60 | 30 | 60 | 90 |
| D04 | Cone weave | 45 | 23 | 45 | 68 |
| D05 | Pass through a gate | 30 | 15 | 30 | 45 |
| D06 | Receive and return | 30 | 15 | 30 | 45 |
| D07 | Open-body receive | 20 | 10 | 20 | 30 |
| D08 | Pull-back turn | 30 | 15 | 30 | 45 |
| D09 | Feint and escape | 30 | 15 | 30 | 45 |
| D10 | Receive and finish to a target | 15 | 8 | 15 | 23 |
| D11 | Thigh juggling | 30 | 15 | 30 | 45 |
| D12 | Head juggling | 30 | 15 | 30 | 45 |
| D15 | Sole taps | 100 | 50 | 100 | 150 |
| D16 | Lace stop | 45 | 23 | 45 | 68 |
| D17 | V taps | 60 | 30 | 60 | 90 |
| D18 | Croquetas | 60 | 30 | 60 | 90 |
| D19 | Step-over | 40 | 20 | 40 | 60 |
| D20 | Inside outside | 60 | 30 | 60 | 90 |
| D21 | Outside inside | 60 | 30 | 60 | 90 |
| D22 | L drags | 45 | 23 | 45 | 68 |
| D23 | Samba taps | 100 | 50 | 100 | 150 |
| D24 | Ball cross over — no touch | 0 | 0 | 0 | 0 |
| D25 | Feet juggling | 45 | 23 | 45 | 68 |

## Calculation and history

Estimated touches = active work milliseconds × touches/minute ÷ 60,000, rounded to the nearest whole touch; positive halves round up. Rest, pauses and readiness time are excluded. Stopped attempts use actual active work. Zero-touch D24 remains zero at every duration.

New estimates use the revised rates. Existing journal entries with saved estimates retain their original rate and count. Older entries without saved estimates can use the current table only where valid active-work facts exist. The duration-estimate-v1 schema is unchanged; stored rates remain authoritative for recorded history. This revision does not rewrite history.

## Local verification and delivery

Thirteen targeted Flutter tests pass, covering all revised rates at 30/60/90 seconds, rounding, stored historical rates, saved review, estimate-card layout and dashboard/history behavior. This follows the package-separation checks: 1,892 full-suite tests passed with 14 existing skips, 38 release-flag tests, seven packaging checks, seven research prototype tests and clean Flutter analysis. The full-suite figures precede the addition of two rate-specific tests; they are not a claim of another full-suite run.

The implementation is in the private Soccolo-app repository. The owner authorized keeping both GitHub repositories updated. **No Codemagic build, app deployment or service upload is authorized or started.** Installed Build 74 remains the existing version; these rates and the engine package exclusion await a separately approved build. Native compilation, signed size and device recording/playback/export checks are still pending.

See [engine package separation](engine-package-separation-20261109.md) for measured IPA components and retained dependencies.
