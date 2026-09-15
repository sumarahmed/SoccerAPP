# SP-060 — Web/API sessions and media validation decision

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 15 September 2026 |
| Source issue | SP-060 |
| Acceptance criterion | AC-SP-060-01 through AC-SP-060-02 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Founder/web-backend-security owner |
| Review status | Owner acceptance recorded; implementation and independent security evidence remain later gates |
| Repository base | `bdba6724d7ad59a87cc3a482af80d0b2a07a27cf` on `main` before completion revision |

Syed Ahmed accepted the complete SP-060 family and its lean-pilot
recommendations on 15 September 2026 and authorized movement to the next family.
SP-060 is complete as a design/specification family.

## 1. Accepted evidence

- [ACT-SP-060-01 web/API session and authorization](../security/ACT-SP-060-01-web-api-session-authorization.md), accepted version 1.0.
- [ACT-SP-060-02 bounded media validation](../security/ACT-SP-060-02-bounded-media-validation.md), accepted version 1.0.
- [ACT-SP-060-03 acceptance evidence](../security/ACT-SP-060-03-acceptance-evidence.md), accepted version 1.0.
- [SP-060 web/media security fixtures](../../contracts/sp-060/web-media-security-fixtures.json), contract 1.0 with 36 synthetic scenarios.
- [SP-060 validator](../../tests/security/validate-sp060-contract.cjs), executed successfully before handoff.

## 2. Binding decisions

1. Adult portal provider credentials remain server-held; the browser receives
   an opaque Secure/HttpOnly session cookie.
2. Current role/resource/membership/guardianship, consent, deletion,
   allowance/grant and assurance state are checked for every protected route.
3. Five-minute fresh TOTP applies to consequential SP-059 actions. Cookie
   mutations require CSRF and trusted-origin controls.
4. RLS and least-privilege grants cover every exposed database, RPC, view,
   realtime and Storage path. Service/secret access is exceptional, separated
   and server-only.
5. Authenticated/session-refreshing responses are private and not shared-cached.
   Signed media URLs last no more than five minutes after a current check.
6. Cloud recording upload remains feature-disabled until the private
   quarantine and bounded worker are implemented and tested; local use remains.
7. The initial cloud profile is app-generated MP4/MOV, H.264, optional AAC,
   720p/approximately 30 fps and at most 30 minutes. Other formats require a
   versioned extension.
8. Media finalization is server-only, fail-closed, current-authority checked and
   atomic across all required single/dual parts.
9. Upload credentials, attempt, inactivity, cleanup, retention and playback
   limits remain those accepted in SP-011.
10. Starting upload/validation counters, a bounded fair queue and a cost circuit
    breaker protect availability without locking an entire family account.
11. No commercial WAF, paid scanner/transcoder or recovery infrastructure is
    added for the lean pilot. No purchase is authorized.
12. Full-session cloud upload cannot be claimed on the current 50 MB Supabase
    Free Storage file limit; SP-017 must prove a viable storage path.

## 3. Acceptance criteria

- `AC-SP-060-01` accepted for design: server-mediated portal sessions,
  current assurance/recency/revocation, direct API/RLS/Storage/cache rules,
  quarantine validation and abuse limits are documented and fixture-backed.
- `AC-SP-060-02` accepted for design: R04, R06, R07 and R12 have explicit
  dispositions and positive/negative synthetic cases.

## 4. Retained limits

- SP-038 remains an unresolved formal predecessor. Its administration field/
  journey mapping is provisional and no implementation is claimed.
- No session, token, API, RLS policy, bucket, signed URL, upload, media decoder,
  queue, rate limiter or cleanup job was exercised.
- The media byte ceiling and supported device profile remain subject to SP-126
  measurements; storage-provider feasibility remains for SP-017.
- Signed links retain a maximum five-minute residual access risk.
- Native media parsers remain a hostile-input boundary requiring isolation and
  patching.
- An independent security reviewer must test the implemented boundary before
  real child/family data or media is admitted.
