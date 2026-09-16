# SP-063 — Non-destructive tabletop verification

| Field | Result |
|---|---|
| Version | 1.0 |
| Date | 16 September 2026 |
| Participants | Syed Ahmed as primary operator; alternate identity retained privately |
| Inputs | Owner attestation that all five account/custody/alert steps are complete; SP-063 runbooks version 1.0 |
| Data | Synthetic scenario descriptions only; no child, participant, secret or private-media data |
| Outcome | PASS for written operator response paths; live service recovery and destructive testing not performed |

## Scenarios

| ID | Synthetic event | Expected response exercised in the walkthrough | Outcome and retained limit |
|---|---|---|---|
| T01 | Primary GitHub factor/device is unavailable | Use the independent configured recovery route; do not disable MFA or create a shared account; review sessions/tokens after entry | PASS — owner confirms the required recovery controls exist; no intentional lockout was performed |
| T02 | A GitHub or Linear token shows unexplained use | Stop affected automation, revoke the token/session/app, rotate reachable downstream credentials, preserve a redacted event record | PASS — deterministic route exists; no live credential was exposed or rotated solely for this test |
| T03 | A review animation is withdrawn while an old client may be offline | Withdraw the exact version, stop new online publication/download, prevent queue replay, show a safe fallback and disclose that exported/offline bytes cannot be guaranteed deleted | PASS — contract route exists; no deployed client or server exists to test |
| T04 | The primary operator is unavailable | Alert the private alternate, limit them to documented containment, and prevent routine child/media access | PASS — owner confirms alternate selection/contact and alert test; identity/contact remains private |
| T05 | Supabase is requested before its operator controls exist | Refuse participant-data provisioning until two TOTP factors, second ownership and separated credentials are recorded | PASS — service is unprovisioned and gate remains explicit |
| T06 | Future pilot database or media is lost | Rebuild code/configuration from verified repositories, rotate secrets and tell users that cloud records/media are unrecoverable; do not claim database backup restores Storage | PASS — honest SP-050 boundary preserved; no actual data restore exists |

## Measurable response checks

- A privileged compromise is acknowledged within the internal 15-minute target
  when noticed and contained within one hour when account access is available.
- The alternate acts after 30 minutes without primary acknowledgement.
- Urgent unsafe-content withdrawal is acknowledged within one hour and blocked
  from new online use within four business hours, immediately where credible
  safety harm requires it.
- Sensitive cloud operations fail closed for an unsupported client.
- Every incident record excludes secret values and private media.

These are internal pilot targets, not 24/7 customer promises. The walkthrough
verified that each event has a named route and safe stop condition. Runtime
timing, actual alert delivery beyond the owner-confirmed test, provider restore,
old-client behavior and independent review remain later evidence.
