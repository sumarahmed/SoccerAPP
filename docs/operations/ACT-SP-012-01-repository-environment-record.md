# ACT-SP-012-01 — Repository and environment configuration record

| Field | Value |
|---|---|
| Activity | `ACT-SP-012-01` — Establish the authorized repository and environments |
| Record version | 1.0 accepted interim evidence |
| Captured | 16 September 2026 |
| Accountable owner | Syed Ahmed as founder/technical lead |
| Required reviewer | Security: Claudia, owner-named 18 September 2026; operator reviewer and SP-012 review evidence pending |
| Status | Interim private/free route accepted by Syed Ahmed on 16 September 2026; partially evidenced; predecessor SP-009 and protected-branch controls remain open |

## Repository split

| Purpose | Repository | Visibility | Branch/version | Evidence |
|---|---|---|---|---|
| Public planning, accepted contracts and activity map | [`sumarahmed/SoccerAPP`](https://github.com/sumarahmed/SoccerAPP) | Public by deliberate owner decision | `main` at `4f472fa900b9448d87878e02e1904cd5147a1b72` | [Accepted SP-152–SP-155 commit](https://github.com/sumarahmed/SoccerAPP/commit/4f472fa900b9448d87878e02e1904cd5147a1b72) |
| Mobile/web/backend implementation | [`sumarahmed/Soccolo-app`](https://github.com/sumarahmed/Soccolo-app) | **Private**, confirmed through authenticated GitHub API | `main` at `cc21c9c12fadcf6c014244adc822b598b7867381` | [Private foundation commit](https://github.com/sumarahmed/Soccolo-app/commit/cc21c9c12fadcf6c014244adc822b598b7867381) |

The public repository must not receive application secrets, private test evidence,
real-child fixtures or implementation-only operational material. Public references
to the private repository contain repository/commit identifiers only.

## Environment inventory

| Environment | Current target | Data/secret boundary | State |
|---|---|---|---|
| Local development | `backend/supabase/config.toml`, project id `soccolo-local` | Synthetic fixtures only; no hosted project reference or credential | Implemented; Docker-compatible runtime absent on this PC |
| GitHub Actions | Ephemeral Ubuntu runner and disposable local Supabase stack | Workflow `contents: read`; no repository/environment secrets consumed | Implemented and passed at exact commit |
| Codemagic iOS compile probe | Manual macOS M2 worker for the private `apps/mobile` Flutter app | GitHub App restricted to `sumarahmed/Soccolo-app`; no Apple signing credential, upload route or child footage | Unsigned iOS simulator build passed on 18 September 2026 at private commit `f92c555`; [build and retained simulator artifacts](https://codemagic.io/app/6aac92fbbcb7de30c265f1dd/build/6aac949fcc80aea022028fcc) |
| Hosted development | Not provisioned | Must use a dev-only project, identity and synthetic data | Intentionally absent |
| Staging | Not provisioned | Must use a separate project, scoped deploy identity and non-production fixtures | Intentionally absent |
| Production | Not provisioned or authorized | No agent or PR job access; no child data | Intentionally absent |

Absence of hosted development/staging is safe for the present local feasibility
harness, but it is not evidence that full dev/staging isolation has been completed.

## Identity and authority inventory

| Identity | Permitted scope | Prohibited scope | Evidence/state |
|---|---|---|---|
| `sumarahmed` GitHub owner | Repository administration and owner-authorized pushes | Must not treat ownership as independent review | Actual owner identity |
| GitHub Actions workflow identity | Read repository contents and run disposable checks | Cannot approve pull requests; no production/deployment credentials | Default permission is `read`; PR approval disabled through GitHub API |
| Codemagic GitHub App | Access the selected private implementation repository for manual iOS builds | No other GitHub repository selected; no Apple signing or release authority configured | Owner approved installation restricted to `Soccolo-app` on 18 September 2026; app selector showed only that repository |
| Implementation agent | Modify the explicitly authorized local/private repository and submit evidence | No production, billing, real-child data or self-approval | Governed by accepted SP-003 policy |
| Security reviewer | Review security evidence within an agreed scope | Naming alone is not review or acceptance | **Claudia, named by Syed Ahmed on 18 September 2026; this record contains no new SP-012 review from her** |
| Operator reviewer | Review environment, workflow and operational evidence | Cannot be the implementing agent's invented identity | **Unassigned** |
| Hosted Supabase dev/staging deploy identities | Future environment-specific migrations and tests | No shared production service key; no browser exposure | **Not created** |

## Branch protection result

An authenticated GitHub API request attempted to require `static-contract` and
`database-policy`, enforce the rule for administrators, dismiss stale reviews,
require resolved conversations and deny force pushes/deletions. GitHub returned:

> `403 — Upgrade to GitHub Pro or make this repository public to enable this feature.`

The owner chose a private implementation repository and the project has a prior
lean/lowest-cost direction. The repository therefore remains private and free; it is
**not branch protected**. This limitation blocks `AC-SP-012-02` and prevents a claim
that a failing change is technically unmergeable.

## Recommended next decision

Remain private/free during the single-owner, synthetic-data foundation, with direct
pushes limited to explicit owner authorization and every result recorded. Before a
second writer, hosted environment, real-child data or pilot release, either:

1. upgrade to a GitHub plan supporting protection for private repositories and
   require both current checks plus at least one actual reviewer; or
2. migrate implementation to another private host that provides enforceable branch
   rules without weakening the evidence requirements.

This cost deferral is not completion of SP-012.

Claudia is now the owner-named security reviewer. Her earlier independent SP-009
report does not constitute an SP-012 environment/CI review or fill the separate
operator-review role. No reviewer approval or protected-branch evidence is
claimed by adding her name.

## Interim owner disposition

Syed Ahmed accepted the recommendation to keep the implementation repository private
on the free GitHub plan and explicitly defer protected-branch enforcement. The
accepted interim risk is limited to the synthetic, single-owner foundation stage.
It does not satisfy `AC-SP-012-02` or `AC-SP-012-08` and expires before a second
writer, hosted environment, real-child data or pilot release.
