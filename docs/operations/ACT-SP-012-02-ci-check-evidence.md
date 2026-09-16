# ACT-SP-012-02 — CI configuration and check evidence

| Field | Value |
|---|---|
| Activity | `ACT-SP-012-02` — Install checks and prove a failing change is blocked |
| Evidence version | 0.1 candidate |
| Candidate commit | `cc21c9c12fadcf6c014244adc822b598b7867381` |
| Workflow run | [`35044438851`](https://github.com/sumarahmed/Soccolo-app/actions/runs/35044438851) |
| Result | Configuration/check execution PASS; enforced merge blocking NOT PROVEN |

## Configuration under test

The private implementation repository contains:

- [foundation workflow](https://github.com/sumarahmed/Soccolo-app/blob/cc21c9c12fadcf6c014244adc822b598b7867381/.github/workflows/foundation-security.yml);
- [SP-039 static contract validator](https://github.com/sumarahmed/Soccolo-app/blob/cc21c9c12fadcf6c014244adc822b598b7867381/tests/backend/validate-sp039-contract.cjs);
- [foundation security guard](https://github.com/sumarahmed/Soccolo-app/blob/cc21c9c12fadcf6c014244adc822b598b7867381/tests/operations/validate-foundation-security.cjs);
- [developer preflight](https://github.com/sumarahmed/Soccolo-app/blob/cc21c9c12fadcf6c014244adc822b598b7867381/tools/dev/preflight.cjs); and
- [developer verification entry point](https://github.com/sumarahmed/Soccolo-app/blob/cc21c9c12fadcf6c014244adc822b598b7867381/tools/dev/verify.cjs).

The workflow pins GitHub actions by immutable commit, pins Supabase CLI `2.117.0`,
uses no remote Supabase project or secret, and grants only `contents: read`.

## Exact run result

Authenticated GitHub evidence captured on 16 September 2026:

| Job | Result | What it established |
|---|---|---|
| `static-contract` | Success | 15 SP-039 structure/control checks, six secret/path/remote-mutation guards and the negative self-test passed |
| `database-policy` | Success | Disposable Supabase stack started, migrations and synthetic seed rebuilt, and 18 pgTAP policy assertions passed |

Workflow `35044438851`, attempt 1, ran against exact head
`cc21c9c12fadcf6c014244adc822b598b7867381` and completed successfully.

## Negative-test interpretation

The dependency-free security validator includes a synthetic unsafe input containing
a literal privileged-credential assignment and a machine-specific path. The self-test
passes only when both patterns are rejected. This establishes that the guard detects
those two prohibited patterns.

It does **not** establish `AC-SP-012-08`. No protected branch exists, so a red workflow
cannot yet be shown to prevent merge/push. Creating a deliberately failing PR without
an enforceable rule would demonstrate failure detection but not blocking and would
not satisfy the source criterion.

## Remaining evidence needed

After branch protection becomes available:

1. create a short-lived candidate branch containing a harmless failing fixture;
2. open a pull request to `main` and bind the evidence to its exact SHA;
3. show `static-contract` or `database-policy` red and the merge action blocked;
4. correct the fixture on the same PR, rerun both required checks and show green;
5. obtain the named reviewer decision; and
6. merge only the corrected candidate, preserving the failed and successful runs.
