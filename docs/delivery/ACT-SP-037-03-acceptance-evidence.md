# ACT-SP-037-03 — SP-037 acceptance evidence

| Field | Recorded value |
|---|---|
| Artifact version | 1.2 accepted |
| Prepared | 13 September 2026 |
| Activity | `ACT-SP-037-03` — Verify and hand off: Specify hierarchy and scoped capabilities |
| Source issue | `SP-037` |
| Phase / gate | P01 / G1 |
| Executor | Codex acting as QA / Identity agent |
| Accountable owner | Syed Ahmed acting as Product/technical lead |
| Required reviewer | Independent adversarial agents reviewed versions 1.0 and 1.1; version 1.2 incorporates every returned correction; accountable human security reviewer remains a production gate |
| Repository/base | `https://github.com/sumarahmed/SoccerAPP.git`; `main`; review lineage begins at `613640a3d0454df291229204717571d1e383537b` |
| Run identity | `RUN-ACT-SP-037-03-20260913-01`; attempt 1 of 2 |
| Approved paths | `docs/delivery/ACT-SP-037-01-actor-action-resource-matrix.md`; `docs/delivery/ACT-SP-037-02-role-and-departure-transitions.md`; this evidence artifact |
| Data/environment | Repository specifications only; local Windows checkout; no accounts, child data, media, database, API, identity service or production environment |
| Authority | Syed Ahmed's 13 September 2026 instruction to apply the recommended corrections comprehensively and avoid another external review round before owner acceptance |
| External effects | Local remediation draft only; no commit, push, Linear mutation, identity/role change, test account, invitation or deployment |
| Spend/time | AUD 0 incremental; attempt 1; within the 90-minute checkpoint; exact elapsed time not separately metered |
| Status | Accepted by Syed Ahmed on 13 September 2026; `AC-SP-037-01` and `AC-SP-037-02` pass for the design phase and SP-037 is complete as a specification task; implementation and later human production gates remain pending |

This activity preserves both independent adversarial agent reviews, corrects the previous overstatement of completeness, and maps version 1.2 corrections to every original and newly introduced finding. It does not convert specified behavior into evidence that controls have been implemented or tested, and it is not a formal human security certification.

## 1. Exact evidence bundle

| Artifact | Exact version | SHA-256 | Review status |
|---|---|---|---|
| [ACT-SP-037-01 actor/action/resource matrix](ACT-SP-037-01-actor-action-resource-matrix.md) | Historical version 1.0; commit `9fd6535d7202aae3a2aabb067e110d3ea37e640f` | `89588BC66EE9A1F9AFEC7EA4FDB6E4D4F3192459B2408DE9D51A68A8CD8F70E3` | Owner-accepted predecessor; independently reviewed at the version 1.0 bundle commit with changes required |
| [ACT-SP-037-02 role and departure transitions](ACT-SP-037-02-role-and-departure-transitions.md) | Historical version 1.0; commit `52a379c9dd631b255c5d4b92b93ef336c0a31bf5` | `14F99F46B53922A1BE9B9BACCDB1001AE0BE36DD0DD83CA3A8E2058ED950C055` | Owner-accepted predecessor; independently reviewed at the version 1.0 bundle commit with changes required |
| [SP-037 source backlog](soccer_delivery_backlog.md#sp-037--specify-hierarchy-and-scoped-capabilities) | Current at base commit | Git-tracked at base | Defines `AC-SP-037-01` and `AC-SP-037-02` |
| Independent adversarial agent report | Reviewed the three version 1.0 blobs at commit `613640a3d0454df291229204717571d1e383537b`; supplied to the owner on 13 September 2026 | External report; material findings transcribed in section 6 | Changes required: nine High and four Medium findings; specification review only |
| Independent version 1.1 follow-up report | Reviewed exact local hashes `A4017E...D3CD`, `14DFE5...A724` and `1D79D2...9536`; supplied to the owner on 13 September 2026 | External report; dispositions and new risks transcribed in section 6 | Four closed, nine partially remediated and two new Medium findings; not ready for owner acceptance |
| Version 1.2 owner-review candidate | Exact pre-acceptance working-tree hashes: `5CAC3126...8033`, `218D640E...9F1F`, `7435A5FE...61BB` | Complete correction set in the three approved paths | Accepted by Syed Ahmed on 13 September 2026; acceptance metadata is the only subsequent change before validation/commit |

The historical hashes identify the exact blobs reviewed. Version 1.2 working-tree hashes are calculated after validation and supplied with the owner-review handoff. Final committed hashes must be recorded after acceptance without inserting a self-referential hash into this file.

## 2. Verification performed

| Check | Result | Evidence boundary |
|---|---|---|
| `git diff --check` before each predecessor commit | PASS | Text-format check |
| `node tools/validate-docs.cjs` before each predecessor commit | PASS | 16 documentation checks, generated activity map, source hashes and repository-relative links |
| Predecessor identity/hash read-back | PASS | Exact commits and SHA-256 values in section 1 |
| Actor/level coverage comparison | PARTIAL for version 1.0 | Actors were named, but Level 0 and machine-principal rules were not enforceable or testable |
| Route/context coverage comparison | PARTIAL for version 1.0 | Contexts were distinct in prose, but the server authorization tuple and resource provenance were incomplete |
| Capability-plane comparison | PARTIAL for version 1.0 | Planes were separated conceptually, but media grants and content separation of duties were incomplete |
| Lifecycle/transition comparison | PARTIAL for version 1.0 | Lifecycle intent was present, but disputes, adulthood, revocation convergence, invitations and anti-resurrection lacked enforceable semantics |
| Allowed/denied example review | PARTIAL for version 1.0 | Expected outcomes were listed, but several could not be objectively verified from the policy |
| Owner acceptance | PASS | Syed Ahmed accepted the proposed matrix defaults and transition decisions before each predecessor commit |
| Independent adversarial agent review | CHANGES REQUIRED | Separate agent reviewed exact version 1.0 blobs and returned nine High and four Medium findings; not a formal human certification |
| Independent version 1.1 follow-up | CHANGES REQUIRED | Four findings closed, nine remained partial and two new Medium risks were identified |
| Version 1.2 correction traceability | PASS for specification remediation | Every remaining scenario, contradiction and undefined term maps to normative text in sections identified below |
| Accountable human security review | NOT PERFORMED | No qualified person is named or has accepted responsibility |
| Runtime authorization tests | NOT PERFORMED | No working identity service, database policies, API, Storage policy, portal or seeded test identities exist |

## 3. AC-SP-037-01 evidence

**Criterion:** Levels 0–3, club/direct-parent routes, guardian authority, multi-role/multi-club cases, draft/review/publish permissions and separate media grants.

| Required element | Evidence | Outcome |
|---|---|---|
| Levels 0–3 | ACT-SP-037-01 section 3 identifies Level 0 platform operator, Level 1 club and parent administrators, Level 2 coach, and Level 3 child/adult players | Covered as specification |
| Club and direct-parent routes | ACT-SP-037-01 sections 3, 4 and 7 define isolated club and household contexts and minimum cross-context projections | Covered as specification |
| Guardian authority | ACT-SP-037-01 sections 2, 4 and 7 plus ACT-SP-037-02 sections 2–3 define independent verified guardian state, dispute/revocation and adulthood handling | Covered as specification |
| Multi-role cases | ACT-SP-037-01 section 6 and ACT-SP-037-02 section 4 require visible context selection and prohibit capability union for a parent/coach | Covered as specification |
| Multi-club cases | Both artifacts prohibit cross-club composition and specify isolated memberships, queries, exports and assessments | Covered as specification |
| Draft/review/publish | ACT-SP-037-01 section 4 and ACT-SP-037-02 sections 2–3 separate draft, review, approval, schedule/publish and withdrawal; immutable versions bind approval | Covered as specification |
| Separate media grants | ACT-SP-037-01 sections 4–5 and ACT-SP-037-02 sections 2–4 require recipient/resource/purpose/time grants; the accepted baseline is streaming-only | Covered as specification |
| Billing separation | Both artifacts state that payment, seat allocation and feature entitlement create no guardianship or media access | Covered as specification |
| Revocation/departure | ACT-SP-037-02 sections 3, 5 and 6 apply current-state denial to API, data, Storage, export, realtime, notification and background jobs | Covered as specification |

**Verification outcome:** PASS for normative documented coverage of `AC-SP-037-01` in version 1.2. This is based on correction traceability against both adversarial reports, not runtime evidence. Implementation and adversarial runtime proof remain mandatory later gates.

## 4. AC-SP-037-02 evidence

**Criterion:** Accountable owners accept the matrix.

| Owner area | Recorded disposition | Outcome |
|---|---|---|
| Product/technical authorization baseline | Syed Ahmed accepted exact version 1.2 candidate SHA-256 `5CAC31266066C2D065A4D69588A7945765D81349EA54650BE8080EDDFD878033` on 13 September 2026 | Accepted for the design phase |
| Feedback, club completion projection and media-grant defaults | Syed Ahmed accepted structured feedback, minimum completion projection and streaming-only media baseline | Accepted for specification progression |
| Lifecycle and immediate revocation | Syed Ahmed accepted exact version 1.2 candidate SHA-256 `218D640E656B7DA4373E3C8286D6568A1FACEC7E0D722600B63B062DCB0E9F1F` | Accepted for the design phase |
| Context non-composition and adulthood | Included in the exact accepted version 1.2 bundle | Accepted for the design phase |
| Publication and governed-history preservation | Included in the exact accepted version 1.2 bundle | Accepted for the design phase |
| Independent adversarial agent reviewers | Separate agents reviewed versions 1.0 and 1.1 and returned concrete corrections | Review requirement performed for design development; version 1.2 applies the complete returned correction set |
| Accountable human security owner/reviewer | No person is named or has accepted the role | Missing before production use involving real youth, guardian or private-media data |
| Privacy/safeguarding and qualified content roles | Roles are named but actual specialists remain vacant | Missing for later specialist decisions; this verification cannot impersonate them |

**Verification outcome:** PASS for `AC-SP-037-02`. Syed Ahmed accepted the exact version 1.2 candidate bundle on 13 September 2026 after reviewing the disposition and authorizing completion, commit and publication. Accountable human security and runtime verification remain explicit pre-production gates.

## 5. Consistency and negative design review

| Attempted unsafe inference | Expected result in both artifacts | Consistency result |
|---|---|---|
| Higher hierarchy level can read every lower-level resource | Deny; level is descriptive and every action/resource/context is scoped | PASS |
| Club payment gives a coach or admin access to recordings | Deny; entitlement and media grants are separate | PASS |
| Parent role can be combined with coach role in one request | Deny; version 1.2 binds selected context, canonical origin and a typed set of every relationship/grant dependency | PASS for specified outcome; runtime proof pending |
| Membership in two clubs permits cross-club joins/exports | Deny; version 1.2 requires canonical origins, immutable projections and per-resource dependency enforcement | PASS for specified outcome; runtime proof pending |
| Draft permission can publish by direct API call | Deny; version 1.2 defines explicit identity inequalities, server-derived risk and approval-digest binding | PASS for specified outcome; runtime proof pending |
| Invitation immediately grants roster/player access | Deny; version 1.2 fixes the pre-acceptance schema and requires separate approval for every invitation type | PASS for specified outcome; runtime proof pending |
| Revoked coach can use stale token or renew media URL | Deny; version 1.2 uses proof-of-possession delivery, per-segment checks, scoped versions and measurable revocation limits | PASS for specified outcome; runtime proof pending |
| Age 18 automatically preserves guardian video access | Deny; version 1.2 defines a synchronous cutoff, conservative residence fallback and high-risk invalidation | PASS for specified outcome; runtime proof pending |
| Subscription end deletes personal footage or changes guardianship | Deny; entitlement lifecycle is separate from ownership and guardian state | PASS |
| Repository agent authority permits child-media access or approval | Deny; the agent has only its exact run scope and cannot self-approve | PASS |

This is a consistency exercise against written rules, not execution against a live authorization system.

## 6. Independent review findings

The report's introductory count was internally inconsistent: it stated seven High and six Medium findings. The detailed findings contain **nine High and four Medium findings**, which is the authoritative count below.

| Finding | Severity after follow-up | Version 1.1 disposition | Version 1.2 correction | Later implementation/specialist evidence |
|---|---|---|---|---|
| `SP037-SEC-01` Exceptional operator access undefined | High | Partially remediated | ACT-SP-037-01 sections 4 and 10.3 allow immediate unilateral/automatic suspension, restrict dual control to issuance/renewal, and define approver eligibility, incompatibility, expiry and authority-loss cancellation | Operator matrix, JIT/dual-control/expiry/audit, emergency-revocation and impersonation-negative tests |
| `SP037-SEC-02` Machine identities bypass human model | High if misimplemented | Closed | ACT-SP-037-01 section 10.4 retained; authorization tuple is server-constructed and independently verified | IAM, database/RLS, queue, credential-rotation and cross-tenant worker tests |
| `SP037-SEC-03` Signed URLs survive revocation | High | Partially remediated | ACT-SP-037-01 section 10.5 replaces independently authorizing bearer URLs with proof-of-possession credentials and checked gateway authorization for every manifest/key/segment; section 7.3 fixes high-risk timing | Copied/pre-revocation credential, CDN, segment, device/session mismatch and direct-object tests |
| `SP037-SEC-04` Media grant not bound to role context | High | Partially remediated | ACT-SP-037-01 sections 10.1 and 10.5 bind recipient context, canonical origin, grant/version and every relationship dependency; any changed dependency invalidates the grant | Wrong-context, multi-club, grant rollback, future-resource and cache-isolation tests |
| `SP037-SEC-05` Guardian dispute not fail-closed | High if misimplemented | Closed | ACT-SP-037-02 section 7.1 retained and expanded with controlled intake/triage | Qualified privacy/safeguarding review; session/grant/export/notification tests |
| `SP037-SEC-06` Age-18 cutoff not atomic | Medium | Partially remediated | ACT-SP-037-02 section 7.2 adds earliest-supported-zone fallback, earlier-conflicting-cutoff precedence, protected residence changes and ten-second active-channel invalidation | Qualified privacy/identity review; boundary, residence, DST, failed-job and stale-state tests |
| `SP037-SEC-07` No revocation convergence contract | High | Partially remediated | ACT-SP-037-02 section 7.3 defines scoped dependency epochs, high-risk precedence, measurement points, in-flight behavior and exact checked boundaries | Architecture, load, partial-failure and measured latency evidence |
| `SP037-SEC-08` Offline/restore anti-resurrection undesigned | High if misimplemented | Closed | ACT-SP-037-02 section 7.4 retained; recovery creates a new generation without clearing historical tombstones | Replay, ordering, duplicate, long-offline, recovery and restore tests |
| `SP037-SEC-09` Context/resource provenance incomplete | High | Partially remediated | ACT-SP-037-01 section 10.1 uses typed dependency/version sets, resource generation, grant/capability/projection versions and canonical origin rules | Schema/API, mixed-origin bulk, rollback and two-household/two-club IDOR tests |
| `SP037-SEC-10` Pending invitation ambiguity | Medium | Partially remediated | ACT-SP-037-02 section 7.5 fixes the pre-acceptance response fields and supplies an approval/state table for every invitation type; acceptance alone never activates | Pending/expired/replayed/forwarded/concurrent/wrong-identity and response-differential tests |
| `SP037-SEC-11` Separation of duties undefined | Medium | Partially remediated | ACT-SP-037-01 section 10.6 defines exact identity inequalities, three-person high-risk handling, server-derived risk and higher-risk default | Qualified content/safety review; collision, downgrade, substitution and TOCTOU tests |
| `SP037-SEC-12` Core policy terms untestable | Medium | Partially remediated | ACT-SP-037-01 section 10.2 defines assurance, membership, capability assignment, purpose, generations, scoped epochs, cross-context grant, freshness and deterministic invalidation | Endpoint-rule register, policy lint and cross-surface conformance tests |
| `SP037-SEC-13` Acceptance evidence overstated completeness | Medium | Closed | This artifact preserves both reviews, separates design/runtime closure and does not inherit historical owner acceptance | Evidence-chain validation after commit and runtime evidence for underlying controls |
| `SP037-NEW-01` Dispute initiation denial of service | Medium | Open | ACT-SP-037-02 section 7.1 separates intake from accepted review, restricts triage, requires minimum grounds, rate/abuse controls, urgent continuity and escalation | Qualified safeguarding review; frivolous/repeated dispute, dual-guardian and continuity tests |
| `SP037-NEW-02` Global epoch denial of service | Medium | Open | ACT-SP-037-02 section 7.3 prohibits a global counter and scopes versions to affected dependencies so unrelated tenants remain available | High-churn and epoch-isolation load tests |

For version 1.2, “correction supplied” means the exact issue returned by the independent version 1.1 reviewer is addressed in normative text and has passed local consistency/traceability checks. Owner acceptance closes the design decision for planning; implementation closure still requires the evidence in the final column. Human specialist gates cannot be closed by owner or agent acceptance.

## 7. Remediation acceptance and test route

1. Present the complete version 1.2 correction map and exact working-tree hashes to Syed Ahmed for acceptance.
2. If accepted, record acceptance metadata without changing the normative controls, run validation, commit the three-file bundle and record the commit as the immutable design baseline.
3. Feed the accepted controls into SP-084 and later identity/API/database/storage implementation work.
4. Use synthetic accounts and data for all negative tests. Do not use real child, guardian or customer data to create evidence.
5. Before production or pilot use involving real youth, guardian or private-media data, obtain accountable human security review and the required privacy/safeguarding/content decisions.

Mandatory implementation evidence remains: exhaustive actor/action/resource tests; two-household/two-club IDOR coverage; multi-role context confusion; content self-approval and approved-version substitution; capability-plane negative tests; media forwarding and revocation; stale sessions and cross-system convergence; adulthood and dispute boundaries; every human and service database/storage identity; offline replay/restore; Level 0 JIT/dual-control; invitation abuse; and partial-failure timing against the section 7.3 limits.

## 8. Security, privacy and recovery

- No account, personal identifier, child record, media, credential, test identity or private service configuration was used.
- No role, permission, invitation, revocation, Linear issue or external system was changed.
- All examples are synthetic specifications and expected outcomes.
- The two committed predecessor changes are isolated and recoverable by reverting their commits without resetting unrelated work.
- This remediation draft remains uncommitted and can be revised without rewriting accepted predecessor history.

## 9. Completion and handoff

- [x] The independent version 1.0 report is recorded with the corrected total of nine High and four Medium findings.
- [x] `AC-SP-037-01` is corrected from PASS to PARTIAL.
- [x] Both adversarial reports are preserved with their exact review targets and dispositions.
- [x] Every original partial finding and both new risks map to a version 1.2 normative correction and later evidence.
- [x] Historical Product/technical lead acceptance remains distinguishable from acceptance of this remediation.
- [x] Missing implementation, test identities, runtime evidence and specialist roles are explicit.
- [x] No design rule or expected outcome is represented as a live test PASS.
- [x] Version 1.2 correction traceability and cross-document consistency checks pass locally.
- [x] Exact version 1.2 candidate working-tree hashes were supplied in the owner-review handoff; the final commit records the acceptance-metadata update.
- [x] Syed Ahmed accepted the version 1.2 remediated design and authorized completion, commit and publication on 13 September 2026.
- [ ] An accountable human security reviewer is named before production use involving real youth, guardian or private-media data.

Handoff status: version 1.2 is accepted. `AC-SP-037-01` and `AC-SP-037-02` pass for the design phase, and SP-037 is complete as a specification task. Runtime, accountable human security, privacy/safeguarding and qualified content reviews remain mandatory pre-production gates and are not represented as complete.
