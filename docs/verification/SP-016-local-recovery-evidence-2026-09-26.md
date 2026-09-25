# SP-016 local interruption and recovery fixture evidence

| Field | Evidence record |
|---|---|
| Date | 26 September 2026 |
| Source | [SP-016](../delivery/soccer_delivery_backlog.md#sp-016--test-media-interruptions-and-device-limits) |
| Implementation | [`8bc319b`](https://github.com/sumarahmed/Soccolo-app/commit/8bc319b83b7f6c033e07d89cb9b4591e6f368a2e) |
| Validation | `node tests/media/validate-sp016-recovery-fixture.cjs` — 18/18 passed |
| External spend/data | AUD 0; synthetic bytes and identifiers only |
| Disposition | **Local ACT-SP-016-01 preparation improved; SP-016 remains open** |

## Evidence supplied

The dependency-free fixture models app-owned staging, a durable recovery
journal, protected free-space reserve, atomic publication, quarantine and
next-launch re-verification. The injected matrix covers:

- denied permission and preflight low-space refusal without false `REC`;
- exact expected-size plus reserve-floor acceptance;
- runtime storage pressure without consuming the reserve floor;
- failed writes and failed publication without false `Saved`;
- background, lock, incoming-call and camera-loss interruption;
- abrupt termination with recovery-needed staging;
- verified playable partial recovery;
- corrupt staging quarantine;
- re-verification that revokes a corrupt previously Saved result;
- refusal to scan a foreign attempt;
- app-private backup-exclusion metadata; and
- one final copy without double byte accounting.

## Retained limits

The fixture does not invoke a native camera, fill a real device, inspect real
filesystem protection/backup attributes, measure heat or battery, prove iOS
termination behavior, establish a supported-device floor or supply independent
QA acceptance. SP-015 and the formal device predecessors remain open. These
tests prepare the controlled failure matrix only and do not complete
`ACT-SP-016-02`, `ACT-SP-016-03` or SP-016.
