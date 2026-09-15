# ACT-SP-077-01 — Paired theme tokens and components

| Field | Value |
|---|---|
| Version | `1.0-review-ready` |
| Brand source | `Soccolo-Brand-Bundle v4/05-specification/colour-tokens.json` |
| Appearance default | Follow device |
| Modes | Light and Dark, with native chrome matching the active mode |

## Semantic application tokens

| Role | Light | Dark |
|---|---|---|
| Page/surface | paper `#F4F8FA` / white `#FFFFFF` | ink-900 `#04141D` / ink-800 `#0A2231` |
| Primary text | ink-800 `#0A2231` | white `#FFFFFF` |
| Secondary text | ink-600 `#1E4A63` | ink-100 `#DCE7ED` |
| Action/accent | pitch-700 `#0A5537` | pitch-300 `#54E8AC` |
| Focus | ink-800 plus visible outline | pitch-300 plus visible outline |

Shared buttons, fields, navigation, dialogs, cards, banners, status chips, recording controls, and destructive confirmations consume semantic roles, not hard-coded brand colour names. Status always combines text/icon/shape with colour. Large text, focus, disabled, error, offline, denied, empty, and revoked states remain explicit.

The v4 audit records nine passing contrast pairs. Key ratios are primary wordmark/text on light `15.28:1`, white on brand navy `16.33:1`, deep green on paper `8.30:1`, and mint on brand navy `10.51:1`.
