# ACT-SP-125-01 — Pilot content asset readiness review

| Field | Value |
|---|---|
| Activity | `ACT-SP-125-01` — Prepare review packet: Produce and approve every pilot content asset |
| Packet version | 1.0 |
| Prepared | 16 September 2026 |
| Accountable owner | Syed Ahmed, founder/content owner |
| Required human gate | Qualified coach and animator review the exact eventual release assets |
| Status | Agent preparation accepted; SP-125 release-asset decision remains open |

## Source versions and scope

- [SP-005 decision](../decisions/SP-005-qualified-coach-drill-review.md): Aaron M reviewed D01–D12, with D01–D10 as the initial catalogue and D11/D12 deferred.
- [SP-006 decision](../decisions/SP-006-animation-samples-pilot.md): A01/D01, A02/D06 v0.2 and A03/D04 review videos and setup stills are accepted for pilot design only.
- [SP-151 decision](../decisions/SP-151-foundation-learning-pathway-contracts.md): four pathway contracts and D01–D10 `base.v1` identifiers are accepted, without releasing media.
- [SP-064 reconciliation](../delivery/ACT-SP-064-01-reconciliation-and-estimate-review-packet.md): ten released base variants imply at least 60 asset-class cells and four pathway parent-guidance sets.
- [Exact sample inventory](../../contracts/content/sp006-animation-review-assets.json): hashes, versions and `playerReleaseAllowed: false` are authoritative for the three review renders.

The current candidate scope has ten `base.v1` variants, not an unlimited age or
ability catalogue. A new/revised age, ability, assistance or drill variant adds a
new exact readiness row. No player can be offered an incomplete pathway branch.

## Twelve-family readiness matrix

`Review sample` means a design-stage video and setup still exist. It is **not**
a release-ready main demonstration, alternate/slow view, final cue, caption,
setup, rights record or rendered coach approval.

| Drill | Initial catalogue | Existing visual evidence | Exact release asset set | Rights/animator QA | Rendered coach approval | Recommendation |
|---|---|---|---|---|---|---|
| D01 | In scope | A01 review video and still | Incomplete; audio track also needs review/removal | Pending | Pending | Keep unavailable until all gates pass |
| D02 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D03 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D04 | In scope | A03 review video and still | Incomplete | Pending | Pending | Keep unavailable until all gates pass |
| D05 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D06 | In scope | A02 v0.2 review video and still | Incomplete | Pending | Pending | Keep unavailable until all gates pass |
| D07 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D08 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D09 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D10 | In scope | None | Incomplete | Pending | Pending | Keep unavailable |
| D11 | Deferred | None | Not commissioned for initial catalogue | Pending if later released | Pending if later released | Do not offer |
| D12 | Deferred | None | Not commissioned for initial catalogue | Pending if later released | Pending if later released | Do not offer |

For each of D01–D10, the release record must resolve six asset classes: main,
alternate and slow demonstration, separate cue audio, captions and setup asset.
That is a **minimum of 60 readiness cells**, all uncertified for player release
today. The four pathway parent-guidance sets need an exact released form and
named coaching approval. A shared production source may feed multiple cells,
but each consumer still needs its own checked version/rights/accessibility
record; reuse does not silently mark a cell ready.

## Recommended production and approval route

1. Keep the current A01–A03 files as labelled review references. Do not publish
   them in the player app or treat owner sample approval as coach-render approval.
2. Build one reusable source/rights register for the character, performance,
   model, tools, audio, typefaces and derived exports. Confirm commercial and
   downstream distribution rights for the exact intended use; do not infer them
   from a subscription or an asset filename.
3. For each candidate release variant, deliver editable source, final main,
   alternate and slow views, poster/setup still, caption and cue timing,
   nonvisual alternative, and a final immutable manifest with hashes.
4. Run animator QA for ball contact, scale, continuity, camera/layout, audio
   separation, legibility and export compatibility. Resolve A01's present audio
   track before any release decision.
5. Ask Aaron M or another actually qualified coach to review the final rendered
   variant, not only the written drill. Record version, exact age/ability route,
   correction/approval, reviewer and date. D12 would also require the accepted
   goalkeeper-qualified scope if later offered.
6. Keep a variant and its dependent pathway branch unavailable until every
   required asset, guidance, rights, accessibility and coach cell passes.
   Withdrawal or replacement invalidates the affected release status until the
   new exact version is reviewed.

No animator, coach or supplier is contacted by this packet, and no payment or
production commission is authorized. The [SP-004 zero-spend boundary](../decisions/SP-004-pilot-metrics-budget-and-specialist-scopes.md)
continues to apply.

## Human decision and source acceptance checklist

The qualified coach/content owner and animator still need to return an exact
asset-by-asset decision for `ACT-SP-125-02`. The current packet cannot supply
their sign-off or create missing media.

| Criterion | Present state | Required completion evidence |
|---|---|---|
| AC-SP-125-01 — Twelve-family and released-variant readiness | Twelve drill rows and ten initial base variants inventoried | Maintain a row for every subsequently offered exact age/ability variant |
| AC-SP-125-02 — Rights and coach approval at exact version | Pending for all release assets | Rights chain, immutable hashes, animator QA and named coach decision |
| AC-SP-125-03 — Incomplete variants unpublished | Required fail-closed recommendation | Implement and test release manifest/availability checks |
| AC-SP-125-04 — Full released pathway coverage and guidance | Four pathway contracts exist; release assets/guidance pending | Exact asset/guidance coverage for each offered route with named coach approval |

`ACT-SP-125-01` is a complete preparation packet. `ACT-SP-125-02` and SP-125
remain open; zero released variants or player-ready assets are claimed.
