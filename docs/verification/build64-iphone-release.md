# Build 64 iPhone testing handoff

Codemagic completed internal run 88 from app commit `986a4d9d3146a85f0b6958157ba4609a8007ca75`. The signed IPA is **0.2.0 (64)** and measures **96.75 MiB**, down 4.72 MiB from Build 63. The native, Flutter and accepted analyser checks passed. The app repository records the verified SHA-256, model inventory and changes. [Release record](https://github.com/sumarahmed/Soccolo-app/blob/main/apps/mobile/BUILD64_RELEASE.md) · [Codemagic build](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aec12cde2bf6ef80112311b)

The owner will test on iPhone and report feedback. The open performance question is how long the two previously saved Sole Rolls rounds take on the device. Record the new elapsed times alongside their estimates and frame rates. Fresh capture targets 60 fps with a 30 fps fallback. The prior 219.2 fps readout came from an existing recording.

The release includes automatic setup, the 12 accepted drill analysers, the revised Train and Coaches screens and the simplified round results. Live player calibration is deferred until the owner explicitly asks to resume it.

The first device report shows Inside Touches round 1 retaining an older 22-touch estimate after unsuccessful reanalysis. Build 64 hides timing for this case. A tested source correction displays “Not recorded” for the old estimate and the duration of a newly timed failed attempt separately. Device verification of the correction requires a subsequent build. The cause of the failed count and the Sole Rolls timings remain open. [App fix](https://github.com/sumarahmed/Soccolo-app/commit/fcb0b65)

The [Training pathways design review](../design/training-pathways.html) models the Ball control route with the existing drill cards, two pathway recording choices, automatic previews and transitions, and drill names in analysis and comparison. Full Session should close the camera for the full 30-second rest and keep the foreground display awake independently of capture. No camera should follow the same timings without requesting camera access. The owner reported dimming on Build 64; the prototype simulates these states and cannot verify device behaviour. Design approval precedes app changes; starting Codemagic requires separate explicit approval.
### Revised design review

The owner requested closer fidelity to the installed app. The review gallery now shows Flutter-rendered screens in both app themes. The design uses the Train header and navigation, DrillCard, recording-choice tiles, single-drill camera panel and comparison player from the app. Camera pixels and review data are illustrative. Approval of the pathway design and on-device validation are pending.

The revised Upcoming exercise design plays the matching full drill demonstration throughout the configured rest between drills. The video loops under an “Up next” label and the circular rest timer. When rest ends, the next drill enters its normal countdown automatically. The review uses the bundled Dribble and stop video and a 30-second example.

The [Plans and Library design review](../design/plans-and-library.html) shows a labelled add action in both themes after the owner reported an invisible plus on the weekly planner. Scheduled practices have a separate start action and share the pathway setup, session and review designs. Mindset, Physical drills and Meal guide use the drill-card arrangement with media placeholders. These are review screens pending approval.

The revised gallery opens with comparisons against the original Flutter Train tabs. Plan selection uses DrillCard with a selection mark. Scheduled plans use PracticeCollectionCard with the start action inside the card. Library resource cards adapt the drill layout and Library collections adapt the pathway layout with resource-specific labels and placeholders. Both appearances were rendered locally.

### Implementation handoff

The owner approved the reviewed designs for implementation. The local app now uses shared Flutter cards across Plans, Pathways and Library. New multi-drill Full Session runs share the individual-drill recorder, keep work clips linked to the run, and advance after successful completion. Between drills, a matching demonstration loops for the configured rest. A drill without its own demonstration shows its coaching cue. The next countdown begins automatically. A user or system interruption pauses the preview. Codemagic build approval is still pending.

On a subsequent approved iPhone build, exercise both entry points with No camera and Full Session. Check the 10-, 20- and 30-second rest choices, the iOS camera indicator and display brightness through rest, and the retained camera orientation/lens and framing across transitions. Verify pause, interruption, early stop and reopening the saved run. Confirm named round selection and playback for all completed drills. Check the planner add action and Library cards in both appearances. Build 64 remains the installed baseline.

Local verification: full Flutter suite passed (1,836 passed, 14 skipped). Additional feature checks passed (71 tests); two recording configurations passed (49 and 25 tests). On-device checks still pending: confirm camera framing, camera release and screen brightness throughout rest, and the transition into the next drill. No Codemagic build started.
