# Local plans, progress and original deletion

The owner authorized implementation and an iPhone build following prototype
acceptance of Build 19. The scope draws on local planning/discovery and review
activities; it does not activate cloud or multi-account authority.

Implemented source:

- Named ordered D01–D10 plans, with immutable run order snapshots.
- Today/explicit continuation, phase checkpoints for no-camera practice,
  distinct completion/skip/stop outcomes and one active plan session.
- Dated plan-session history, practice counts and exact related-recording links.
- Confirmed original deletion in My Videos, including multipart sources; separate
  exports and Photos/Files copies are preserved.
- Durable retryable deletion journals, prevention of source resurrection during
  recovery, and fault-injected storage/deletion tests.

Approved drill prescriptions and placeholder video labels remain unchanged.
Plans reflect the owner's selected order, not newly prescribed combined training
loads. Progress records participation, not technique or skill scores. New capture
after process termination remains explicit; camera recording is not fabricated
across an interruption. Standalone practice history remains separately available.

The candidate is version 0.1.0 (20), implementation source
`3c79c68e36e332e5a3ed3b4bf30e567d685a5996`. Local analysis, regression tests,
Android debug compilation, repository contracts and documentation checks passed.
The 87-test regression run plus the added journal-publication failure test cover
88 tests; all ten storage tests passed in the final targeted run. Signed-build
results are recorded below. Physical-device acceptance remains pending. Requested
device checks: saved-plan order, pause/reopen/continue, completion versus skip/stop,
related recordings, and confirmed deletion with independent exports retained.
The owner does not need to fill the device to exercise storage failures; those
paths have automated fault fixtures.

## Signed Build 20 evidence

[Codemagic Build 20](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6abb38d29a17b7546299bb82)
completed successfully from the implementation SHA above. Apple-host Flutter
analysis and all 88 tests passed. Native XCTest discovered 15 tests: 14 passed,
one physical-device rendering check skipped, zero failures. Signing succeeded.

The downloaded IPA was verified as version 0.1.0 (20), with the expected source
SHA, ten-drill catalogue, four brand asset hashes, and an Ad Hoc profile for the
registered pilot iPhone. IPA SHA-256:
`a4fd57277105154f9a7e7ca8add4375627d45650e007bfbff52dcd7d5435c4fa`.
No TestFlight/App Store release or cloud activation occurred. Install over the
existing app and perform the device checks above before closing acceptance.
