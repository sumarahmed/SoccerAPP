# ACT-SP-153-02 — Comparability and correction history

Version `sp153-v1` compares a player only with their own previous results. It
does not compare players with norms, cohorts, leaderboards or talent models.

## Comparison decision

Two results are directly comparable only when all relevant fields match:

- protocol and version;
- setup dimensions and measured-attempt count;
- equipment/ball, surface and footwear;
- familiarisation and rest pattern;
- assistance, partner/service and retrieval mode;
- observation source;
- foot or side; and
- material environmental conditions recorded by the protocol.

A safely completed result with changed conditions remains a valid standalone
result and is labelled `NOT_COMPARABLE_CHANGED_CONDITIONS`. A result earlier
than the seven-day interval is labelled `VALID_STANDALONE_EARLY_RETEST`.

An unsuccessful measured attempt is not automatically invalid. Invalidity is
limited to external interference, wrong setup/procedure, unsafe conditions or
inability to observe the required outcome. Missing required fields, unsafe
conditions, excessive invalid attempts or an incomplete measured set produce
`NO_RESULT` rather than a zero score.

## Observation and recording

Coach, guardian and adult-player observations remain visibly attributed. Parent
observation cannot certify technique or change assessed ability/progression.
Video is optional; a no-video result can be valid when the required outcome was
directly and sufficiently observed. Completing a timer records participation
only and never certifies technique.

## Corrections

Corrections are append-only and contain the original result reference,
replacement value, reason, author, observation source, protocol/version and
timestamp. The original remains in history. A correction does not change the
conditions, attribution or comparison eligibility of the underlying attempt.
