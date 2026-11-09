# Drill content update — 9 November 2026

The private app candidate now maps D15 Sole taps to the owner-supplied demonstration, with a setup still and a silent three-second card preview. Matching-demo selection also makes it available between drills in plans. The original 10.04-second H.264 video is retained; no video or private implementation is published here. Estimated-touch rates are unchanged.

Content is bundled today. Adding a video requires updating its catalogue mapping and derived preview assets; removing a demonstration requires clearing its references before removing files. Entire drill removal also needs plan and catalogue checks. Text is maintained in the app catalogue, rates in the central estimate table, and UI behavior in code. There is no live content administration interface. A future remotely managed catalogue could decouple supported content updates from app releases, but is not implemented.

No Codemagic build is authorized or started. Installed Build 74 does not include this addition yet.

Validation: 12 focused local Flutter tests passed for catalogue, previews and upcoming-practice flow; documentation validation passed. Device playback remains to be checked after an approved release.
