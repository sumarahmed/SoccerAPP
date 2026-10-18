# Build 51 experimental analyser iPhone checklist

Updated 19 October 2026. Signed internal iPhone build **0.2.0+51** is verified; physical acceptance is pending.

Static analysis clean; 242 Flutter tests passed (seven gated skips), 38 enabled-feature tests passed, and 39 native iOS tests passed (one existing simulator skip, zero failures). Signed IPA and package verification passed.

The owner approved testing approximate YOLOX Tiny + optical-flow counts in the app before collecting more footage. D01 Inside touches is the only drill receiving the new counter. Other drills retain their previous experimental counting rules.

## Try existing recordings first

1. Install the internal update over the existing app, retaining recordings.
2. Open Videos → Recordings → Review video → choose Round 1 or Round 2.
3. Keep Soccolo in the foreground while the result refreshes. Old D01 results are recalculated by the new analyser; incomplete/split rounds remain ineligible.
4. Compare the displayed estimate with your manual count, and note roughly how long analysis took.
5. Reopen the same round: the completed result should load from history. Switching rounds must show the matching count.

Desktop references: the two supplied build 47 rounds were approximately 29 each; Tiny + flow produced 27 and 26. The build 48 reference was 38; the desktop prototype produced 37. These are small-sample totals, not an accuracy percentage or a promise of identical iPhone results.

## Record only where more evidence is useful

- Try Inside touches with a stationary camera, the full ball and both feet visible, and ordinary lighting.
- If a count is materially wrong or unavailable, retain/export that original round and supply its manual count for local investigation.
- Also try a stationary ball and a ball rolling without foot contact. Camera movement is a known false-positive risk; camera-motion handling is not solved.
- Note unusually long analysis, warming or pauses. Switching apps during analysis should cancel safely and allow a retry on reopening the round.

## Preserve earlier acceptance

Active-round/rest pause and resume; silent local recordings and exports; Guardian and player ownership; aggregate history retained when deleting a video and removed when deleting its player; opt-in on-device voice and tones-only output.

This internal iPhone trial does not establish Android support or production accuracy. Personal footage and per-frame traces remain local and are not sent to cloud build jobs.
