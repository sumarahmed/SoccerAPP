# SP-003 — Agent scope and evidence policy

| Field | Recorded value |
|---|---|
| Decision version | 1.0 |
| Decision date | 11 September 2026 |
| Source issue | SP-003 |
| Acceptance criterion | AC-SP-003-01, AC-SP-003-02 |
| Outcome | Accepted |
| Accountable person | Syed Ahmed, Technical lead/founder and Delivery owner |
| Review status | Owner acceptance recorded; role-consolidated review is not independent review |
| Repository base | `31d2767ea431383f2eab910ea82426e50020b28e` on `main` |

Syed Ahmed accepted the documented agent run-contract, evidence and review-routing policy after the `ACT-SP-003-03` verification. This decision accepts the policy baseline and its explicit limitations; it does not claim that future repositories, identities, CI controls, services, devices or independent reviewers have implemented or passed the policy.

## 1. Accepted evidence

- [ACT-SP-003-01 run-contract policy](../delivery/ACT-SP-003-01-agent-run-contract-policy.md) version 1.0.
- [ACT-SP-003-02 evidence and review routing](../delivery/ACT-SP-003-02-evidence-and-review-routing.md), reviewed version 0.2 SHA-256 `2B80553F95854CE7F4759978CCF1FA9A8B883EBC89F46F028A6FA115DD34C59F`; version 1.0 adds acceptance metadata only.
- [ACT-SP-003-03 acceptance evidence](../delivery/ACT-SP-003-03-acceptance-evidence.md), reviewed version 0.1 SHA-256 `C0CA301F9B139066682608FD6979DACAFECAB548FC9E37657E00319AF2F0A790`; version 1.0 adds the final acceptance record only.
- `node tools/validate-docs.cjs` passed 16 checks and 1,625 repository-relative links before the final acceptance metadata was added.

## 2. Accepted policy outcome

The accepted baseline requires:

1. an exact repository, base, environment, approved file boundary, owner, reviewer, data class, tool/network allowlist, external-effect authority, validation plan, recovery route and time/attempt/spend ceiling for every mutating run;
2. review and evidence tied to current commits, artifacts, configuration, dependencies, fixtures, environments and devices where applicable;
3. explicit routing for standard, security-sensitive, privacy, child-data, billing, device, content, infrastructure, production and destructive work;
4. bounded stop/retry behavior, authoritative reconciliation after an uncertain mutation and no automatic retry that could duplicate state or charges;
5. separation of executor submission from authorized acceptance, with genuine independent or specialist gates left blocked while the required reviewer is vacant; and
6. Ready, Review, Validation, Done and Blocked rules that disclose failures, skips, unavailable environments and unsupported claims.

## 3. Acceptance criteria

- **AC-SP-003-01 — Accepted:** allowed tools/data/actions, repository selection, risk routing, time/spend limits, stop/retry behavior, independent-review treatment and Done rules are documented and verified by `ACT-SP-003-03`.
- **AC-SP-003-02 — Accepted:** S09 environment/secret boundaries, S10 hostile retrieved instructions, S11 duplicate unattended actions/charges and S12 false success/self-approval are mapped to Ready and review evidence, reviewers, failure routes and remaining implementation obligations.

## 4. Limits retained

- This is policy/specification evidence, not technical enforcement evidence.
- No genuine independent reviewer or alternate is currently named. Role consolidation does not satisfy a later independent-review requirement.
- No live application, backend, agent dispatcher, cloud identity, secret store, billing integration, provider sandbox or device build was tested.
- Branch/ruleset enforcement, identity inventories, secret scans/rotation, adversarial runtime tests, webhook/queue idempotency and deliberately failing CI checks remain future implementation evidence.
- Owner decisions `OD-003-01` through `OD-003-08` remain visible and unresolved unless separately decided; accepting SP-003 does not silently grant routine push, installation, cloud, secret, production or spending authority.
- Every future run must still satisfy its own exact contract and accepted predecessors.

## 5. Owner decision

Syed Ahmed accepted `ACT-SP-003-01`, reviewed `ACT-SP-003-02` version 0.2 and reviewed `ACT-SP-003-03` version 0.1 on 11 September 2026, then explicitly authorized commit. `SP-003` is accepted for its documentation-policy criteria at decision version 1.0.

Any material change to the run-contract, review-routing or evidence rules requires a new reviewed version and affected acceptance evidence. Acceptance of this decision never authorizes an agent to approve its own later work or bypass a real human, independent, specialist, device, provider or production gate.
