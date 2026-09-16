# SP-009 — Owner risk exception for unresolved review findings

| Field | Record |
|---|---|
| Recorded | 16 September 2026 |
| Decision maker | Syed Ahmed, founder/product owner |
| Owner instruction | Do not remediate H1, H2, H3 or L1 now; explicitly bypass those findings and document the decision |
| Source review | [Claudia's independent adversarial review](reviews/ACT-SP-009-claudia-independent-review-2026-09-16.md), which recommended **revise**, not approval |
| Finding register | [Finding-by-finding disposition](ACT-SP-009-02-claudia-findings-disposition.md) |
| Decision status | **Owner accepted the residual risk for synthetic-only development planning; findings remain open** |
| Source activity status | `ACT-SP-009-02` and `SP-009` remain open; this owner exception is not the required security/privacy specialist approval |

## Decision and scope

The owner chooses not to spend this round fixing H1, H2, H3 or L1. Their
remediation is **deferred, not completed**. The owner permits work to proceed
with synthetic fixtures and consenting adult test material within existing
development controls, without waiting for those four finding remediations.
This is a workflow exception for that limited stage, not an assertion that the
design or implementation passes the independent review.

The owner did not specify that this exception authorizes use of real children's
accounts or recordings, production operation, public sharing, app-store
submission or a commercial release. Those materially broader actions are
therefore **outside this exception**. An explicit, separately reviewed
decision is required before expanding its scope. No project document or
activity status should translate this exception into a passed control.

## Residual risk being accepted

| Finding | Deliberately unfixed condition | Consequence still in force |
|---|---|---|
| H1 — privileged recovery | Mandatory second approver and stronger privileged-entry gate are absent from the reviewed design | Do not enable privileged recovery or treat commercial platform administration as security-approved |
| H2 — guardian verification | No operational standard proves that a claimed guardian has authority, including uncertainty and refusal handling | Do not onboard real children or treat the guardian journey as verified |
| H3 — other people captured | Recording authority/removal rules do not cover teammates, spectators or other identifiable people | Do not enable real-child or public/group recording on the strength of the present review; consenting-adult test footage is allowed only within the bounded development stage |
| L1 — Australian Code applicability | The review found overconfident wording about the developing Children's Online Privacy Code and no settled applicability decision | Do not claim the Code's final text or Soccolo's applicability is settled; obtain current specialist assessment before real-child/release decisions |

H4 and M1–M4 have only the bounded specification remedies identified in the
[disposition](ACT-SP-009-02-claudia-findings-disposition.md); their runtime,
provider and store evidence is still outstanding. This exception does not waive
other source requirements, including SP-012's reviewer and branch-control gaps,
release-gate checks, or any legal/platform obligation.

## Reassessment triggers and evidence rule

Reassess this exception before the **first real-child account or data**, any
child or group recording, privileged recovery, externally accessible pilot,
store submission, or material change to the product's age audience, sharing
routes, providers, or applicable rules. The accountable owner must record the
exact build/configuration, current specialist privacy/security outcome,
safeguarding decision where relevant, and which findings were remediated or
remain excepted. A changed regulator or store rule also triggers reassessment.

`ACT-SP-009-02` and `SP-009` cannot be marked Done solely because the founder
accepted this residual risk: their source task calls for a security/privacy
reviewer with the founder and an independent review outcome. Claudia's preserved
`revise` conclusion is not converted to `approve`. This record contains no
runtime test, legal opinion, regulator clearance or app-store approval.

Official references checked on 16 September 2026: [OAIC Children's Online
Privacy Code](https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code)
(OAIC describes an in-development Code due to be registered by 10 December
2026) and [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).
