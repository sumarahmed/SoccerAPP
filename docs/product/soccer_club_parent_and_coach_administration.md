# SoccerTrainingApp — Club, Parent and Coach Administration

## Operating model

The product supports direct-family and club-managed participation without collapsing authority boundaries.

## Roles

### Platform administration — Level 0

Manage platform-level configuration, support tooling, approved content publication, service operations and organization-level access. Platform admins do not receive default permission to inspect private family video merely because they are platform administrators.

### Club or parent administration — Level 1

A direct-parent admin controls household/player setup, purchases, recording choices, optional cloud backup and sharing. A club admin manages club membership, teams, coaches, activities and plan assignment inside that club.

### Coach — Level 2

Coaches can manage assigned teams/groups, propose or manage permitted training plans, assign approved activities and review progress/media only when a specific authorization permits it.

### Player — Level 3

Players access their own training experience, approved assignments, local progress and age-appropriate self-service. Restricted player credentials cannot access adult administration.

## Multi-role users

A parent may also be a coach. A coach may work across multiple clubs. A player may belong to multiple clubs. The UI should make the active role/workspace clear, and backend authorization must apply the current context rather than combining all privileges globally.

## Club management capabilities

- create/manage teams and cohorts;
- invite/remove members;
- assign coaches;
- create activities/calendar entries;
- assign training programs/drills by age/team/player;
- manage attendance where in scope;
- view scoped progress;
- review deliberately shared attempts;
- revoke access when membership ends;
- preserve immutable history of published training versions.

## Coach content workflow

Coaches may create or propose drills beyond the 12 pilot drills. New content follows a controlled workflow:

Draft → review → approved/published → versioned history.

Age/ability eligibility, movement safety, work/rest, equipment, cues, animation and rights must be reviewed before publication. Editing a published drill creates a new version rather than rewriting historical sessions.

## Parent/family capabilities

- create/manage player profiles;
- select direct-family training plans;
- configure camera/microphone choices;
- manage local/cloud media;
- choose whether a clip is shared and with whom;
- withdraw a media grant;
- manage subscription source and household entitlements;
- handle guardianship and age-18 transition through explicit flows.

## Media boundaries

Club status, coach assignment and payment do not grant automatic access to family recordings. Media review uses purpose-specific grants. Grant status must cover thumbnails/previews as well as full playback.

## Departures

When a player leaves a club:

- club plan/roster access is removed according to policy;
- family-owned training history remains with the family/adult player;
- revoked club media access is enforced;
- billing and guardianship remain separate concerns;
- offline clients reconcile revocation when they reconnect.

## Adult transition

At 18, the player moves to adult self-management. Continuing guardian access must be explicitly permitted rather than automatically retained forever.

## Administration UX requirements

Include role switching, invitations, pending/expired states, permission denial, draft/review/publish, membership revocation, sharing withdrawal, recovery, quota and support flows. Security-sensitive changes require appropriate reauthentication.
