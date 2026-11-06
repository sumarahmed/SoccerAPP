# Build 66 · Internal iPhone release

Version **0.2.0 (66)** adds 500 Touches, 1,000 Touches and 1,500 Touches at the top of Train → Pathways. Their default durations including between-drill rest are 15:00, 30:30 and 46:00. Each exercise has a timed block and a touch goal. Rest defaults to 30 seconds, with 10 and 20 seconds available. The optional no-touch warm-up adds 30 seconds of activity and one rest.

Local verification passed Flutter analysis, eight Home, planner, pathway and rest regression tests, and the project documentation validator.

Plans → Plan a practice lets players schedule pathways and individual drills in selection order, up to 20 drills. Home opens today's scheduled preview, offers a chooser for multiple sessions and prioritizes resuming an active practice. Saved drill history is under Settings → Device storage. Guardian → Your family omits the deferred calibration card.

The signed internal workflow uses automatic camera setup, a 60 fps target with 30 fps fallback and the 12 accepted drill analysers. Lite pose stays out of production. The preceding Build 65 finished on Codemagic from `c1feb4f`. [Build 65 run](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aec5d568597dc9767581b43)

On iPhone, schedule a touch pathway for today and start it from Home. Verify its targets and rest preview, automatic progression, camera framing, screen brightness during rest, and round comparison by drill name. Check saved history in Device storage and the player controls in Guardian.
