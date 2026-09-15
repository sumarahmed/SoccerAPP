# ACT-SP-077-03 — Acceptance evidence

| Criterion | Result | Evidence |
|---|---|---|
| AC-SP-077-01 Follow device default | Pass for contract/prototype | Fixture F26 and prototype initialize `follow` |
| AC-SP-077-02 measured contrast | Pass | Brand v4 contains nine measured passing pairs; validator recalculates ratios |
| AC-SP-077-03 recording, identity, errors, billing in both modes | Pass for inventory | F07–F12 and F23–F31 are governed by the paired-mode contract |
| AC-SP-077-04 SP-155 supportive states | Pass for inventory | Goals off by default, rest, missed week, opt-out, and supportive return states are included |

Commands: `node tests/design/validate-sp077-theme.cjs` and `node tests/design/validate-sp007-sp038-handoff.cjs`.

**Remaining limit:** actual native-device and assistive-technology review is implementation-stage evidence, not available from this HTML handoff. Product-owner visual acceptance is still required before SP-077 is marked Done.
