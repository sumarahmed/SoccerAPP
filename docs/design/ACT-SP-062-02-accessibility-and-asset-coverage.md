# ACT-SP-062-02 — Accessibility and asset coverage contract

| Field | Review value |
|---|---|
| Activity | `ACT-SP-062-02` — Specify accessible identity and content coverage |
| Source | `SP-062` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `cb5ca345c810597eaee950145d7d8122a12be8c8` on `main` |
| Accessibility target | WCAG 2.2 AA for web and equivalent native behavior |

## 1. Scope and release rule

This contract maps F27–F33 and released practice/media assets to accessibility
review. It does not claim that unbuilt screens or unapproved coaching content
have passed. A row is releasable only when its exact content and asset versions,
rights, safeguarding review and required accessibility evidence are recorded.
Missing variants display an accessible unavailable state; they are never
silently replaced with a misleading variant.

SP-005 coach approval, SP-007 core-screen design and SP-038 administration
flows remain incomplete. Therefore D01–D12 and their variants are blocked, core
screen evidence is blocked and administration entries are provisional.

## 2. Product-wide accessibility contract

- Support VoiceOver and TalkBack names, roles, values, order and announcements;
  full keyboard/switch navigation; visible focus; and no keyboard traps.
- Preserve content and operation at 200% web zoom, native large-text settings,
  portrait, landscape and supported small screens without clipped safety paths.
- Minimum contrast is 4.5:1 for ordinary text and 3:1 for large text and
  meaningful UI/graphic components. Colour is never the only signal.
- Safety targets are at least 44×44 iOS points, 48×48 Android dp and about
  44×44 CSS pixels on web, with adequate spacing.
- Respect reduced motion; prohibit flashing; provide captions, written cues,
  transcripts and non-visual descriptions for essential video information.
- Never make sound, vibration, colour, shape or animation the sole instruction.
- Permit password-manager paste/autofill. QR and anti-abuse checks need an
  accessible manual alternative. Errors identify the field and correction.
- Warn before a session timeout and preserve safe input where appropriate.
- `Stop` remains operable and announced when offline or when camera/microphone
  permission is declined. Recording is optional to complete safe practice.
- Plain Australian English is externalized for later localization.

## 3. F27–F33 coverage matrix

| Flow | Required coverage | Current disposition |
|---|---|---|
| F27 sign-in/MFA/recovery | Labels, autofill/paste, QR manual path, non-visual error/recovery, no forced recording | Contract defined; runtime evidence pending |
| F28 player/guardian authority | Accessible player selection, authority explanation, dispute state and safe exit | Contract defined; SP-007 screen evidence blocked |
| F29 coach/club access | Exact scope, expiry/revocation, readable status and conflict-safe route | Contract defined; SP-038 admin evidence provisional |
| F30 practice/recording | Immediate accessible Stop, permission denial, captions/cues, orientation and reduced motion | Contract defined; content and runtime evidence blocked |
| F31 media/export/share | Recipient/purpose/expiry stated, non-colour status, intro/outro has no flashing or essential visual-only instruction | Brand/export assets accepted; runtime evidence pending |
| F32 safety/help | Obvious heading/progress, safe exit, no required narrative/attachment, private receipt, trusted recipient and no reported-person notice | Accepted written flow; human staffing and screens pending |
| F33 data rights | Accessible request/player selection, retained-record explanation, separate subscription path, correction/refusal/complaint and non-pressured five-minute link | Accepted written contract; runtime evidence pending |

Shared-device confirmations expose only a neutral result. F32 must say who will
receive the report and adapt conflict routing. F33 must not use legal jargon or
countdown pressure and must explain that subscription cancellation and data
rights are separate.

## 4. Released-content and asset matrix schema

Every released drill/asset row records:

1. drill and exact version/digest;
2. age band, ability and assistance assumptions;
3. light/dark, portrait/landscape and small-screen variants;
4. main, alternate, slow and setup demonstration coverage;
5. captions, transcript, spoken cue and non-visual description;
6. colour-independent markers and safe-motion outcome;
7. adult demonstrator, source licence and rights record;
8. coach, safeguarding and accessibility reviewers with dates;
9. tested devices, browsers and assistive technology; and
10. state: `blocked`, `in_review`, `approved` or `withdrawn`.

## 5. Current inventory disposition

| Asset/content | Disposition | Reason or next evidence |
|---|---|---|
| D01–D11 | Blocked | Exact qualified-coach and variant/accessibility approval absent |
| D12 goalkeeper activity | Blocked | Requires a qualified goalkeeper reviewer in addition to normal review |
| Heading, contact, diving/collision and overhead work | Excluded | Outside this pilot unless separately risk-assessed and approved |
| SP-007 core identity/practice screens | Blocked | No accepted screen artifact or runtime accessibility evidence |
| SP-038 administration screens | Provisional only | Accepted admin-flow artifact is absent |
| `Soccolo-Brand-Bundle v4` | Accepted for brand/export identity | UI contrast, naming, motion, screen-reader and device behavior remain per-screen checks |
| Intro/outro video assets | Conditionally usable | No flashing and no essential visual-only instruction; captions/description required if meaning is added |

## 6. Verification gate

Synthetic fixtures verify the written rules. Release additionally requires real
checks on an iPhone with VoiceOver, Android with TalkBack, keyboard-only web,
200% zoom/native large text, portrait/landscape, small screens and an outdoor
use case. Child/guardian comprehension testing must use approved synthetic or
non-sensitive material until the human safeguarding and child-data gates pass.

## 7. Completion result

`ACT-SP-062-02` passes as accepted design/specification work. The target,
F27–F33 obligations, row schema and honest blocked inventory are explicit. No
screen, drill or runtime accessibility certification is implied.
