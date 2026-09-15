# ACT-SP-060-02 — Bounded media validation contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-060-02` — Specify bounded media validation |
| Source | `SP-060` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `bdba6724d7ad59a87cc3a482af80d0b2a07a27cf` on `main` |
| Executor | Codex acting as Security test/design agent |
| Accountable owner | Syed Ahmed acting as Founder/web-backend-security owner |
| Predecessor | Accepted [ACT-SP-060-01](ACT-SP-060-01-web-api-session-authorization.md) |
| Evidence scope | Written worker contract and synthetic hostile-media cases; no recording uploaded or decoder executed |

## 1. Lean-pilot choice

Cloud recording upload is feature-disabled by default until a bounded validator
and private quarantine path are deployed and pass integration/security checks.
Local practice and recording remain available. The pilot does not purchase a
commercial WAF, antivirus, media-transcoding or content-scanning service merely
to satisfy this specification.

If safe validation cannot run within the chosen low-cost compute and storage
limits, Soccolo rejects new cloud reservations and keeps the local copy. It
never promotes an unvalidated file as a fallback.

## 2. Admission and quarantine

The upload starts from the SP-011 one-use reservation and preserves its limits:

| Control | Accepted value |
|---|---:|
| Unstarted reservation | 15 minutes |
| Upload credential | Maximum 15 minutes |
| Continuous attempt | Maximum 60 minutes |
| Inactivity | Five minutes without accepted progress |
| User-facing resume | Disabled; retry is a new byte-zero operation |
| Failed-fragment cleanup | Requested immediately and verified within one hour or alerted |
| Active cloud retention | 30 days after complete group verification |
| Playback/download URL | Maximum five minutes after current authorization |

The reservation binds principal, owner/player, device, logical recording,
object-group and part/view role, exact generated object key, expected digest,
actual locally finalized byte count, per-object ceiling, allowance source,
consent/authority/deletion generations and contract version.

Bytes go directly to a private, non-readable quarantine bucket. A client cannot
list, read, rename, overwrite, copy or promote quarantined objects. An upload
credential admits only its exact key and byte ceiling. Client MIME, extension,
filename and metadata are convenience signals, not verification.

## 3. Initial accepted media profile

The first cloud profile deliberately accepts only Soccolo app-generated
recordings:

| Property | Pilot profile |
|---|---|
| Container | ISO BMFF MP4 or QuickTime MOV |
| Video | H.264/AVC; one video stream per source file |
| Audio | AAC-LC or absent; at most one deliberately selected audio stream |
| Capture target | 720p landscape or portrait, approximately 30 fps |
| Logical session duration | Maximum 30 minutes, derived from authoritative media timestamps |
| Single capture | One required source and all finalized parts |
| Dual capture | Two separately identified synchronized originals and all finalized parts in one logical group |
| Unexpected streams/attachments | Reject |
| Location/private metadata | Reject; the app should avoid producing it |

HEVC, higher resolutions/frame rates and other containers/codecs remain
local-only until named device evidence and a versioned profile extend the
allowlist. The pilot does not silently transcode them.

The absolute byte ceiling is configuration, not an invented constant. SP-126
device evidence must determine the approved capture bitrate; the ceiling then
equals the permitted duration at that bitrate plus a small documented
container tolerance. The server still binds each reservation to the file's
actual locally finalized size. Cloud upload remains off until provider limits
can safely hold the resulting file.

## 4. Isolated validation worker

The worker runs as an unprivileged, disposable process/container with no
arbitrary outbound network access and read access only to the named quarantined
object. It uses a pinned, patched media probe/decoder and:

- passes an internal generated path through an argument API, never a shell
  command assembled from a user filename;
- restricts input protocols to local object/file transport and allowlists the
  expected MP4/MOV demuxers;
- caps probe bytes, metadata bytes, stream count, CPU, memory, temporary disk,
  open files and wall time;
- validates container signature and structure as well as MIME/extension;
- checks complete bytes, declared/actual size, immutable digest, stream types,
  codec/profile, duration, dimensions, rotation and frame-rate bounds;
- performs a bounded decode/sample integrity check sufficient to reject
  malformed/truncated media without decoding an unbounded timeline;
- rejects archives, executable/active attachments, unexpected programs,
  excessive streams, impossible timestamps, metadata bombs, path-bearing
  references and unsupported external resources;
- emits only a sanitized result category and bounded numeric facts; and
- creates no thumbnail, preview, waveform or playable derivative before the
  original passes.

The worker never fetches a URL embedded in media, calls a user-selected
protocol, writes into the application image, or receives a generic service
secret. Its capability is limited to the named quarantined object/group and a
single result record.

## 5. Group finalization

Finalization is a server-only, idempotent transaction. Immediately before it,
the server rechecks:

1. current session/device and exact upload authority;
2. owner/player/tenant and reservation identity;
3. consent, guardianship, membership, deletion and allowance generations;
4. every required part/view and subordinate object's verified result;
5. expected versus observed digest and bytes;
6. permitted media profile, duration and stream structure; and
7. dual-source completeness/synchronization receipt when dual was reserved.

Only a complete passing group moves atomically from `quarantine` to
`cloud_available`, converts reserved bytes to used bytes and starts the 30-day
active retention clock. A missing or failed dual source rejects the group; an
adult who deliberately wants one view creates a new authorized single-view
operation rather than silently weakening the original contract.

Thumbnail generation occurs only after validation and remains subordinate to
the source's owner, permissions, retention and deletion state.

## 6. Failure and cleanup visibility

| Condition | Safe result |
|---|---|
| Unsupported profile | Keep local; show `This recording format cannot be uploaded yet` |
| Network interruption/inactivity | End attempt; keep local; show `Upload interrupted — restart` |
| Malformed, digest or structure failure | Deny promotion, queue deletion and show a neutral validation failure |
| Worker timeout/resource ceiling | Fail closed, queue cleanup and retain a sanitized timeout category |
| Consent/authority/deletion changed | Deny finalization and prioritize cleanup |
| Missing required part/view | Reject the logical group; do not expose partial playback |
| Cleanup not verified within one hour | Keep quota reserved, alert the operator and disclose no success |
| Queue/cost circuit open | Admit no new reservation; keep local and offer a later deliberate retry |

Raw parser output, object URLs, credentials, filenames, participant media and
private metadata never enter user errors, analytics, support exports or normal
logs. Logs retain sanitized IDs, contract version, bytes, timings, state
transitions and bounded failure categories.

## 7. Abuse controls

Starting pilot defaults are configuration and must be measured before wider
release:

- one active logical upload group per player/device;
- at most two active logical groups per household;
- ten new reservations per player per rolling hour;
- thirty new reservations per household per rolling hour;
- three validation failures per player per hour or ten per household per day
  pauses cloud uploads for one hour;
- the pause affects cloud upload only, never local training/recording or the
  whole account;
- exact-account, device, household and selected-tenant counters, plus provider
  IP/auth rate limits;
- bounded queue depth, per-household fair scheduling and a configured compute/
  storage cost circuit breaker; and
- retry information that does not reveal another tenant, object or policy.

Repeated abuse can require fresh adult authentication and operator review, but
an attacker cannot permanently lock a family's entire account merely by
generating failures. Export and download routes receive independent request and
response-byte limits because a small request can trigger an expensive transfer.

## 8. Cost boundary

Supabase's documented Free Storage plan currently limits a single file to 50
MB. A representative 30-minute 720p recording is expected to exceed that, so
full-session cloud upload is not claimed on the free tier. SP-017 must prove a
suitable paid tier or alternative object-storage path before the feature is
enabled. No purchase is authorized by this contract.

## 9. Completion result

`ACT-SP-060-02` passes as accepted design/specification work. Quarantine,
allowlisted media, decoder limits, group finalization, failure visibility,
cleanup and abuse/cost controls are explicit. No real file, bucket, worker,
provider tier or hostile decoder behavior has been tested.
