# ACT-SP-038-03 — Integrated administration design acceptance evidence

| Field | Review value |
|---|---|
| Activity | `ACT-SP-038-03` — Verify and hand off: Design administration and membership flows |
| Source issue | `SP-038` |
| Evidence version | 1.0 accepted |
| Evidence date | 16 September 2026 |
| Repository base | `1fc31583e404846d49e3bcebd9e9a9b639d67a47` on `main` before this acceptance revision |
| Accountable person | Syed Ahmed, acting as Founder/product design owner |
| Status | Accepted; SP-038 complete as design/specification work |

## Criterion results

| Criterion | Result | Evidence and retained limit |
|---|---|---|
| AC-SP-038-01 — F14–F22 plus F01/F03/F11/F12 | **PASS — design/fixture** | Shared fixture and labelled prototype contain every frame; no runtime route was exercised |
| AC-SP-038-02 — editor, invitation, review/publish, calendar, attendance, sharing and role switching | **PASS — design/fixture** | ACT-SP-038-01 supplies linked journeys, fields, transitions and authority boundaries |
| AC-SP-038-03 — error and revocation states | **PASS — design/fixture** | ACT-SP-038-02 covers empty, loading, denied, pending, expired, revoked, read-only, conflict, partial, failed and withdrawn states |
| AC-SP-038-04 — editable design or labelled specification | **PASS** | Repository-native HTML/CSS/JavaScript prototype and JSON contract are editable, versioned and explicitly labelled as a non-working handoff |

## Checks

```powershell
node tests/design/validate-sp077-theme.cjs
node tests/design/validate-sp007-sp038-handoff.cjs
```

The checks validate inventory and contract coverage, not a web application or
server-side access control.

## Accepted recommendations

1. Preserve the SP-037 actor/action/resource/authority tuple in every eventual
   implementation; never infer authority from a displayed role or caller ID.
2. Clear selections and cached authority when the workspace or role changes.
3. Keep club membership, guardian authority, recording/cloud consent and media
   sharing as separate permissions.
4. Use immutable plan/content versions and separate draft, review, approval,
   publication, withdrawal and assignment actions.
5. Apply revocation and withdrawal before replaying stale queued commands.
6. Preserve safe non-disclosing errors, accessible focus/announcements and
   responsive labelled-card behavior in implementation.

## Remaining implementation evidence

Later build activities must demonstrate current server authorization, direct-API
denial, two-club/two-household isolation, stale role and revoked-grant handling,
queued-command reconciliation, narrow browser layouts and assistive-technology
behavior. This accepted design evidence must not be reused as proof that those
runtime controls already exist.
