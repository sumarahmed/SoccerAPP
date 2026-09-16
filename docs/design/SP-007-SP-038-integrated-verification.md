# SP-007 / SP-038 — Integrated verification result

Updated 16 September 2026 after acceptance of SP-151–SP-155. This update
supersedes the dependency status in the 15 September resolution audit without
rewriting that historical artifact.

| Family | Verification result | Remaining action |
|---|---|---|
| SP-005 | PASS — D01–D10 initial; D11/D12 reviewed and deferred | None for this design/content gate |
| SP-006 | PROVISIONAL OWNER ACCEPTANCE / PLAYER-RELEASE OPEN | Actual A01/D01, A02/D06 and A03/D04 samples and setup stills exist and are accepted for now; remaining production/source-rights, accessibility, animator-QA and Aaron M rendered-result gates control asset release. SP-006 is not a direct SP-007 predecessor. |
| SP-077 | REVIEW-READY / OPEN | Product owner must explicitly accept paired Light/Dark tokens, F01–F33 state coverage and the retained implementation-stage device limitation |
| SP-151 | ACCEPTED PILOT CONTRACT | D01–D10 pathways accepted; D11/D12 remain reviewed but unavailable |
| SP-152 | ACCEPTED PILOT CONTRACT | Deterministic next-session rules and fixtures accepted |
| SP-153 | ACCEPTED PILOT CONTRACT | Repeatable skill-check protocols and comparability rules accepted |
| SP-154 | ACCEPTED PILOT CONTRACT | Bounded coach feedback and service-capacity rules accepted |
| SP-155 | ACCEPTED PILOT CONTRACT | Healthy goals/reminders, quiet hours and retry rules accepted |
| SP-007 | FINAL REVIEW-READY / OPEN | After explicit SP-077 acceptance, product owner confirms the labelled F01–F13 handoff and youngest/adult routes against the now-accepted predecessors |
| SP-038 | ACT-01/02 accepted; family open | Prepare ACT-SP-038-03 evidence against F14–F22 and updated family screens, then obtain product designer/coach acceptance after SP-007 |

## Checks

- `node tests/content/validate-sp151-sp153-contract.cjs`
- `node tests/design/validate-sp154-sp155-contract.cjs`
- `node tests/design/validate-sp077-theme.cjs`
- `node tests/design/validate-sp007-sp038-handoff.cjs`
- repository activity-map build and validation

## Conclusion

The repository-native review package covers all F01–F33 states. SP-151–SP-155
are now accepted, removing the major content-contract block recorded in the older
audit. SP-077 still lacks the explicit product-owner visual decision required by
its own evidence. Once that decision is recorded, SP-007 needs a short integrated
owner review of the labelled F01–F13 handoff, specifically the youngest-player and
adult routes. SP-038 then needs ACT-SP-038-03 verification and product designer/coach
acceptance. SP-006 remains open separately for player-release quality, rights,
accessibility and rendered-result evidence; its provisional videos must not be
represented as releasable merely because the screen design is accepted.
