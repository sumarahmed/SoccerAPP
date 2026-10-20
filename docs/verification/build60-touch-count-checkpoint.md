# Build 60 acceptance and shared Touch Count plan

Updated 20 October 2026.

Build 60 (0.2.0+60) remains the latest signed, package-verified internal iPhone build. The owner accepted experimental practicing-player/crop tracking on tested footage. This is a limited acceptance, not production validation across all drills. Shared Touch Count is the next local workstream: count playing contacts, exclude hands/reset handling, use selected drill as context, and defer optional contact-type breakdown.

Build 60 retains original/experimental analysis selection and explicit reanalysis of successful saved rounds, preserving a prior successful result if retry fails. Recording guidance covers stable phone placement, full body and ball, one ball in play and avoiding backlighting. Earlier recording, navigation, progress, analytics and export-cover work is retained.

The next contact prototype has passed nine unit tests and replayed twelve cached rounds with unchanged baseline results. However, its additional foot-cycle proposals produced a false touch on a known stationary-ball negative. It is not approved for app integration. Candidate totals are not validated counts; cached replay is not fresh inference or device performance evidence. Personal media remains local.

## Approved catalogue and rollout

| Family | Drills |
| --- | --- |
| Close control | D01 Inside touches |
| Sustained sole control | D02 Sole rolls |
| Travelling control | D03 Dribble and stop; D04 Cone weave |
| Passing/receiving | D05 Pass through a gate; D06 Receive and return; D07 Open-body receive; D10 Receive and finish to a target |
| Combined control | D08 Pull-back turn; D09 Feint and escape |

Selected drill provides movement/view context without excluding other playing contacts. One uninterrupted sole contact is provisionally one episode until release/recontact. Other-player contacts and ground/wall/net impacts are excluded. A shared total is not a score of correct exercise technique.

Next: verify individual mixed-foot contacts, resolve duplicates and near-ball false detections, then validate independent toe-tap/negative recordings. Extend to sole episodes, travelling contacts and receiving/passing in stages. Future head/thigh and side-view work needs new evidence and suitable landmarks; it is not supported automatically by the foot detector. Optional contact breakdown follows reliable totals and drill context.

Before phone integration, preserve zero-touch negatives and verify added contacts against event annotations, not only approximate totals. Then check native parity, saved/fresh clips, repeated rounds, memory, warming and latency. No new phone build was produced for this checkpoint. Camera movement, long occlusion, broader drill accuracy and Android parity remain unvalidated. Production readiness is not claimed.

Implementation plans and detailed evidence remain in the private Soccolo-app repository on `feat/sp014-local-camera-feasibility`, starting at `apps/mobile/RESUME_HANDOFF_TOUCH_COUNT.md`. [Current status](../CURRENT_STATUS.md) and [backlog](../content/current-backlog.md) remain the public entry points.
