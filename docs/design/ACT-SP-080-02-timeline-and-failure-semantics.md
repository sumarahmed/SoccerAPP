# ACT-SP-080-02 — Timeline and failure-semantics review

| Field | Review value |
|---|---|
| Activity | `ACT-SP-080-02` — Specify timeline and failure semantics |
| Source | `SP-080` — Specify branded export and timeline contract |
| Review version | 1.0 |
| Review date | 14 September 2026 |
| Status | Accepted by Syed Ahmed on 15 September 2026; `ACT-SP-080-02` complete as a design/specification activity |
| Repository base | `6c3ffb24d4130ac12c563a42d247d7ed7f66aa1f` on `main` |
| Executor | Media agent |
| Accountable owner / reviewer | Syed Ahmed accepted this design contract; mobile/media implementation and device-QA roles remain to assign |
| Predecessor | [Accepted ACT-SP-080-01 composition contract](ACT-SP-080-01-logo-first-composition.md) |
| Deliverable | Chapter-transform fixtures and export/copy-state table |

## 1. Contract boundary

This activity fixes how the accepted Soccolo composition behaves when source
media has chapters, interruptions, cancellation, low storage, retries or a later
copy/share request. It does not implement a mobile renderer, create a cloud
upload, invoke a share sheet or process real user media.

The executable review fixtures are:

- [export-contract-fixtures.json](../../contracts/sp-080/export-contract-fixtures.json), contract `1.0`; and
- [validate-sp080-contract.cjs](../../tests/media/validate-sp080-contract.cjs).

The accepted [Soccolo Brand Bundle v4](<brand/Soccolo-Brand-Bundle v4/README.md>)
and its reference exporter remain the visual and local-render baseline. Product
implementation must use an adapter behind a replaceable brand-manifest reference;
it must not embed the working brand name or a machine path.

## 2. Four separate clocks

| Clock | Meaning | May include the logo intro? | May include capture gaps? |
|---|---|---:|---:|
| Capture clock | Device/media timestamps within each finalized recording part | No | Each part records its own timestamps; interruption gaps are metadata |
| Source presentation clock | Contiguous playback time of the selected source parts | No | No invented frames; a known gap remains labelled metadata |
| Training clock | Authoritative active/rest/paused practice semantics from the session engine | No | Yes, according to the session contract; it is never derived from export duration |
| Export presentation clock | Frames in the newly composed file | Yes | Only frames that actually exist in the source presentation |

No metric may infer training duration from the exported file. The two-second
intro and any explicitly requested outro are presentation branding, not training.
An interruption can be fifteen seconds in wall time while adding zero frames to
the source presentation; the export must not silently turn that gap into training
or pretend it never occurred in its chapter metadata.

## 3. Frame-exact transform

The first implementation supports constant output rates of 25 or 30 frames per
second. Other or variable rates require an explicit, disclosed conversion plan
and device evidence under `SP-081`; they must not be rounded silently.

All ranges are half-open: `[startFrame,endFrame)`. For output rate `F`:

```text
introFrames       = 2.00 × F
fixedPlateFrames  = 1.60 × F
dissolveFrames    = 0.40 × F
sourceStartFrame  = introFrames
exportFrame       = introFrames + sourceFrame
outputFrames      = introFrames + sourceFrames + optionalOutroFrames
optionalOutroFrames = outroRequested ? 4.00 × F : 0
```

At 30 fps, frames 0–47 are the fixed plate, frames 48–59 dissolve to a
held copy of source frame zero, and source playback begins at frame 60. At
25 fps the corresponding ranges are 0–39, 40–49 and frame 50. The held copy
during the dissolve does not consume or advance a source frame. Source audio,
if present and authorized, begins with source playback; a silent source produces
no audio stream.

### Chapter mapping

Every source chapter is copied with:

```text
exportStartFrame = introFrames + sourceStartFrame
exportEndFrame   = introFrames + sourceEndFrame
```

The transform is applied once per exported file. A full-session export receives
one intro, not one per chapter or recording part. A deliberate export of three
separate clip files creates three independently named exports and therefore one
intro per file.

Chapters must be positive, ordered ranges within the selected source
presentation. Gaps between capture parts retain `captureGapBeforeMs` and the part
identifiers. The initial renderer concatenates finalized parts on the source
presentation clock and does not invent black/silent frames for interruption
wall time. Any later product choice to visualize gaps requires a new contract
version because it changes output length and chapter mapping.

## 4. Export operation state machine

```text
requested
  → authorizing
  → preflighting
  → reserving-space
  → composing
  → validating
  → local-export-ready

Any pre-ready state → cancelled
Any active state    → failed-authority | failed-input | failed-space |
                      failed-render | failed-validation
local-export-ready  → copy/share intent only through a separate user action
```

Only `local-export-ready` identifies a usable output. A filename, encoder exit,
or partially written file does not. Publication is one same-volume atomic rename
after duration, decoded-frame count, stream presence and digest checks pass and
the success receipt is durable.

| State/event | Required result | Source | Staging/final output | User-visible outcome |
|---|---|---|---|---|
| Authorization denied or expires before start | Stop | Unchanged | None | Export unavailable; explain the authority category without leaking another account/resource |
| Invalid, missing or changed source | Stop | Never rewritten | None | Source unavailable or changed; select/retry from the current recording |
| Insufficient space at preflight | Do not launch renderer | Unchanged | None | Show required/available space and safe recovery choices |
| Cancel during preflight/render | Signal cancellation and wait for worker exit | Unchanged | Remove only operation-owned staging | Cancelled; no export created |
| Device reports no space during render | Stop writes and renderer | Unchanged | Remove operation-owned staging; no final file | Export failed—storage; source remains available |
| Renderer/codec failure | Stop | Unchanged | Remove operation-owned staging | Export failed; preserve a sanitized diagnostic code |
| Frame, duration, stream or digest mismatch | Reject | Unchanged | Remove/quarantine staging; never publish | Export failed validation |
| All validation passes | Commit receipt and atomic rename | Digest still matches pre-run value | One new local export plus restricted metadata | Ready on this device |
| App/process crash | Reconcile registered operation on next start | Unchanged | Verify owned staging; clean or resume only under this policy | Interrupted; safe retry available |

## 5. Storage reservation and low-space behavior

The adapter must measure or conservatively bound these values before rendering:

```text
requiredAvailableBytes = estimatedStagedOutputBytes
                       + measuredPeakScratchBytes
                       + maximumReceiptBytes
                       + configuredSafetyMarginBytes
```

The reservation is against the destination volume because staging and final
publication must occur there. `measuredPeakScratchBytes` and the safety margin
are adapter/device-floor values produced by `SP-081`; this specification does
not fabricate a universal number. If the selected adapter cannot provide a
bounded estimate, preflight fails as unsupported rather than assuming enough
space.

The product may offer deletion or a different destination as a separate user
action. It must not delete recordings, older exports, photos, caches belonging
to other operations or cloud copies automatically to make room. Space becoming
unavailable mid-render follows the failed-space row above.

## 6. Cancellation, retry and crash recovery

- Cancellation is effective before final publication. Once an export is ready,
  removing it is a separate explicit delete action.
- The worker observes a cancellation signal, stops accepting output, exits, and
  then allows cleanup of only paths registered to that operation.
- Each logical request has a stable `operationId`; each execution has a distinct
  `attemptId`. A retry repeats current authority, source-digest and storage
  checks and does not inherit a stale grant or estimate.
- If a matching successful receipt already exists, an identical retry returns
  that result instead of creating a duplicate. A mismatched input/brand/contract
  digest creates a new logical operation.
- A crash journal contains operation-owned staging paths but no authorization
  token. On startup, a staged file without a valid receipt is never exposed as
  ready. It may be verified and finalized only when the operation contract and
  current authority still match; otherwise it is cleaned as operation-owned
  temporary data.
- Retry counters are bounded and user-visible. There is no automatic retry loop
  that can consume storage, battery or encoder time indefinitely.

## 7. Export, copy and share are different states

| State/action | Authority check | Copy created? | What the app may claim |
|---|---|---:|---|
| Local export becomes ready | Export authority accepted at request and rechecked before publication | One app-controlled export | Ready on this device |
| Do nothing | None beyond normal protected playback | No | Still local; not shared |
| Save a copy to Photos/files | Recheck current media authority immediately before handoff | Yes, after platform API success | External copy created; app deletion will not necessarily remove it |
| Open OS share sheet | Recheck current media authority before invocation | Potentially | Share handoff opened; not “delivered” unless a destination supplies a reliable receipt |
| Cancel before OS handoff | No external transfer | No | Share cancelled; local export remains |
| Authority revoked before handoff | Deny | No | Sharing unavailable; retain only access allowed by the current ownership/deletion policy |
| Destination accepts bytes | Destination is outside app control | Yes | External custody possible; revocation/deletion limits must be stated honestly |

Export completion never opens the share sheet, uploads the file or grants a
coach/club access. A club relationship, subscription or assignment is not media
authority. Recipient-specific cloud sharing requires its own current,
purpose-bound grant and is outside this local compositor.

The internal receipt/sidecar is not co-shared by default. It records a source
digest and basename, not an absolute local path, authorization token, player
name or recipient. Logs use operation IDs and sanitized error categories; they
must not contain playable URLs or media bytes.

## 8. Required receipt

The durable operation record contains:

- `operationId`, `attemptId`, contract version and adapter/build version;
- source resource/capture version, basename, immutable digest, frames, duration,
  dimensions, rotation, time base and audio presence;
- brand bundle version and release digest resolved at operation start;
- authority decision reference and generation, without credentials or tokens;
- intro/dissolve/outro frame ranges and every source-to-export chapter mapping;
- output digest, frames, duration, streams, dimensions, codec conversion and
  contain/padding result;
- terminal state, sanitized failure category and cancellation actor/time; and
- monotonic elapsed measurements plus wall-clock audit timestamps.

The source digest is checked again after composition. A mismatch fails the
operation and no result is published.

## 9. Review assessment

| Completion check | Review result |
|---|---|
| Source/export offsets and overlap math | **READY:** exact 25/30 fps transforms and held-frame rule are fixture-backed |
| Chapters, parts and capture gaps | **READY:** one intro per output; source presentation remains distinct from capture/training clocks |
| Cancellation and low space | **READY:** no final/partial publication and no source mutation; numeric device margins remain measured `SP-081` inputs |
| Retry/crash behavior | **READY:** stable operation identity, distinct attempts, current reauthorization and owned-staging recovery |
| Deliberate sharing authority | **READY:** local export, external copy and OS handoff are separate states with a current authority check |
| Source acceptance linkage | **READY:** all four `AC-SP-080` criteria map into the fixtures and `ACT-SP-080-03` evidence |

## 10. Owner decision

Syed Ahmed accepted on 15 September 2026:

1. the frame-exact mapping and one-intro-per-output rule;
2. concatenated source-presentation parts with explicit capture-gap metadata,
   rather than invented gap video;
3. failure/cancellation leaving no published or shareable partial output;
4. storage thresholds being measured per adapter/device in `SP-081`, with an
   unsupported result when no conservative bound exists; and
5. the separation of local export, external copy and share handoff, including
   honest post-handoff revocation limits.

This decision completes `ACT-SP-080-02` as a design/specification activity and
fixes this contract for the accepted `ACT-SP-080-03` evidence. It does not
select or prove a mobile media library.
