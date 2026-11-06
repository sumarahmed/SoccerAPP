# Build 68 · Internal iPhone release

Soccolo **0.2.0 (68)** uses the signed internal workflow for registered iPhones.

Live practice uses a compact smoked-glass timer and controls, a matching header and a glass frame for the exercise demo or unavailable-video placeholder. The tint uses 72% opacity with a clipped blur behind the controls. Setup and exercise previews share the finish. Check readability, recording smoothness and floor visibility on iPhone.

After automatic or manual framing confirmation, the first exercise opens in the same Up next preview used between drills. Its preview timer uses the configured rest duration (five seconds if rest is zero). Start countdown lets a ready player continue early. Recording begins after the drill countdown.

Touch pathways divide each drill's planned active time across its two rounds. In 1,000 Touches, D01 uses two 90-second rounds aiming for 220 touches total. Default rest is 30 seconds between rounds and between drills. Default session durations are 18:00, 35:00 and 51:00 respectively. Previously scheduled sessions adopt the correction on a new start. Active runs retain their saved timing.

Plans opens with today's local date selected and displays that day's sessions. Tapping a date switches the agenda. Week navigation keeps the selected weekday.

Local checks passed Flutter analysis, 35 UI and accessibility tests, and the camera recording recovery scenarios. Device verification should cover a fresh 1,000 Touches session launched from today's plan, the preview before round one, two 90-second D01 rounds and the glass controls in daylight.
