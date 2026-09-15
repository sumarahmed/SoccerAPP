# ACT-SP-007-01 — Core screen and state handoff

| Field | Review value |
|---|---|
| Activity | `ACT-SP-007-01` — Accept integrated outcome: Complete core screen and state design |
| Handoff version | 0.1 review draft |
| Prepared | 15 September 2026 |
| Repository base | `32deae4df0f0903a892abb0bdf183657d9642508` on `main` |
| Design route | Clearly labelled, editable repository handoff; Figma is optional under AC-SP-007-01 |
| Brand source | `Soccolo-Brand-Bundle v4` |
| Current status | Reviewable design prepared; integrated acceptance blocked by listed predecessors and owner review |

## 1. Review artifacts

- [Interactive F01–F22 review prototype](prototypes/soccolo-screen-review.html).
- [Versioned screen/state fixture](../../contracts/design/sp007-sp038-screen-states.json).
- [Dependency resolution audit](SP-005-SP-007-SP-038-resolution-audit.md).
- [Source frame inventory](soccer_pilot_and_design_pack.md#frame-inventory-and-required-states).

The prototype is intentionally labelled `DESIGN HANDOFF — NOT A WORKING APP`.
It is editable HTML/CSS/JavaScript, uses the accepted brand tokens, and avoids
making a third-party design file the only source of truth. It can be imported
or reproduced in Figma later without changing this versioned contract.

## 2. Core navigation and audience model

The normal player navigation is `Today`, `Explore`, `Practice`, `Progress`.
Navigation is absent during active practice so the large timer, Pause, Finish,
Stop and safety route remain prominent. Parent controls/account privacy require
adult authority and are never exposed inside a restricted child session.

The handoff provides distinct modes:

| Mode | Copy and control treatment |
|---|---|
| Youngest player | Short sentences, large primary controls, grown-up setup/support cue, no account/permission responsibility assigned to child |
| Teen | Direct respectful language, visible reason and Stop/help, no childish rewards or unsupported ranking |
| Adult player | Own-account language and direct privacy/recording/sharing choices; guardian authority does not continue after transition |

Age suitability and ability remain independent. Content cards use approved
variant IDs rather than assuming that the drill name alone is releasable.

## 3. F01–F13 completion map

| Frame | Required result | High-risk alternatives retained |
|---|---|---|
| F01 Welcome/account | Guardian, adult, club invitation and staff entry stay distinct | recovery, correction, pending/expired invite, no-club route |
| F02 Player/consent | Minimum profile; camera, microphone and cloud are separate optional choices | all declined, existing household, adult transition |
| F03 Today | One suitable home session and labelled club assignments with source/version | conflict, changed/cancelled, no download, offline, three audience modes |
| F04 Explore | Suitable approved content and clear filters | empty, relax filter, downloaded-only offline |
| F05 Path | Goal, order, prerequisites, alternatives and next step | missing prerequisite, unsuitable/blocked/withdrawn variant |
| F06 Exercise detail | Exact approved demo/setup/cue/version and Prepare action | download, captions/no audio, unavailable/withdrawn, coach approval pending |
| F07 Recording setup | `No recording`, clips and full-session choices; mic separate | camera denial, unsafe framing, low space, cloud off/full, unsupported dual capture |
| F08 Countdown | Cancel is immediate; recording shown only after capture success | camera failure, cancel, recording unconfirmed |
| F09 Live practice | Large work/rest timer; separate recording elapsed/status; Pause, Finish and Stop | rest, pause/interruption, recording stop, space/thermal, offline, landscape, no recording |
| F10 Review | Exact local capture with chapters/gaps and honest cloud state | partial/gap/unsaved, queued/failed/completed, local-only |
| F11 Parent/adult privacy | Permission, consent, sharing, retention and relationships behind current adult authority | re-auth, withdrawal/revocation, leaving club, adulthood, shared-device privacy |
| F12 Storage | Device/cloud usage, queue, expiry and per-copy deletion | full quota, failed/expired/local-only, deletion pending, fragment cleanup under one hour |
| F13 Progress | Source-labelled history, reflection and observations | empty, correction/no-result/no-video; never automatic talent score |

## 4. Recording and practice truth

- `Stop now` immediately ends capture/practice without a guardian gate or
  report requirement. `Finish` finalizes what exists; it does not conceal a gap.
- Pause affects practice and capture together. Resume may create another part,
  which is shown in review.
- The recording indicator appears only after the capture API confirms success.
- Work/rest time and recording elapsed time are separate values.
- Camera and microphone denial never blocks safe non-recorded practice.
- Unsupported dual capture falls back to one selected camera or no recording;
  it never claims both cameras were captured.
- Downloaded demos/cues allow prepared practice to continue offline. A stale or
  withdrawn version cannot start after the accepted freshness/reconnect rules.

## 5. Responsive and accessible handoff

- 390×844 portrait and 844×390 landscape are reference frames, not the only
  supported sizes. F09 has a landscape treatment.
- Web targets WCAG 2.2 AA and native behavior follows the accepted SP-062
  screen-reader, keyboard/switch, scaling, contrast, target and reduced-motion
  contract.
- Light/Dark/Follow device are required. Status always includes text/icon or
  another non-colour signal.
- Safety controls meet or exceed 44 iOS points, 48 Android dp and about 44 CSS
  pixels; the active timer is approximately 64–80 logical pixels.
- The prototype uses generated/illustrative values only and requires no child
  photo or data.

## 6. Acceptance result and blockers

| Acceptance | Current result |
|---|---|
| AC-SP-007-01 editable Figma or labelled handoff | Prepared — labelled editable repository handoff supplied |
| AC-SP-007-02 all F01–F13 states and responsive training view | Prepared as design contract and machine inventory; owner review pending |
| AC-SP-007-03 youngest and adult routes reviewed | Pending actual product-owner review |

Final SP-007 acceptance also waits for SP-151–SP-155, as the source backlog
requires. Those activities carry real coaching, workload and safeguarding
inputs; placeholder copy in this handoff is not their approval.
