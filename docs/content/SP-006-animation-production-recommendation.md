# SP-006 — Professional animation production recommendation

| Field | Value |
|---|---|
| Recommendation version | 1.0 |
| Reviewed | 15 September 2026 |
| Recommended route | Adult reference performance → AI mocap → manual contact/ball cleanup → coach review |

## Recommended pilot pipeline

1. Film an appropriately skilled adult performing D01, D06 and D04 from clear
   full-body angles. Obtain a written performer/location release.
2. Use Rokoko Vision/Studio Basic to derive the starting body motion. Its
   official listing currently advertises video-to-motion, custom-character
   retargeting and 600 seconds per month at USD 12 monthly.
3. Finish in Blender, which is free/open source and covers rigging, animation,
   rendering, compositing and editing. An animator must manually lock feet,
   correct balance and ground contact, animate the separate ball path/contact
   events, stage cameras, add markers and render the required variants.
4. Optionally use Cascadeur Indie for physics-aware motion cleanup and FBX/DAE
   export. Its official plan page currently lists USD 19 monthly or USD 8 per
   month billed annually for eligible indie users.
5. If a simpler commercial desktop workflow is preferred, trial iClone
   Personal for blocking, then use a commercial iClone subscription/perpetual
   licence before product use. Verify every imported character, motion, prop,
   font and texture licence—software ownership does not automatically clear
   third-party assets.
6. Export editable project sources, FBX/BVH where applicable, a high-resolution
   master and the separate player-facing variants required by the source brief.
   Aaron M reviews the actual rendered results, not only the source drills.

## Buying recommendation

Start with one month of Rokoko Basic plus Blender and hire an experienced 3D
character animator for cleanup/rendering if nobody on the team already knows a
3D package. Add Cascadeur only if foot sliding, balance and transitions remain
difficult. Do not invest in multi-camera enterprise capture for three pilot
samples. A Reallusion/iClone subscription is reasonable when ease of staging
and rendering is more important than the lowest cost.

Prices and plan terms change; verify the official checkout and commercial-use
terms before purchase:

- https://www.rokoko.com/products/studio
- https://create.rokoko.com/
- https://www.blender.org/features/
- https://cascadeur.com/plans
- https://www.reallusion.com/iclone/download.html
- https://www.reallusion.com/plan-and-pricing/individual/subscription

## Quality controls specific to football

- Treat the ball as an independently keyed/simulated object; mocap captures the
  performer, not a trustworthy ball path.
- Inspect every contact frame for foot sliding, ground penetration, hidden
  touches, implausible acceleration and continuity between loops.
- Keep the player’s full body and ball visible in the main view; use alternate
  close views only to clarify contact.
- Keep narration and captions separate from movement exports for localisation.
- Retain source, performer, tool, model/asset and licence provenance.
