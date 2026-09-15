# ACT-SP-050-02 — Pilot recovery deferral and cost boundary

| Field | Review value |
|---|---|
| Activity | `ACT-SP-050-02` — Specify pilot data-loss and recovery deferral |
| Source | `SP-050` |
| Specification version | 1.0 accepted |
| Decision date | 15 September 2026 |
| Status | Accepted by Syed Ahmed; complete as design/specification work |
| Repository base | `00c9a39683b832914d0e9c6a4467f5bc93751767` on `main` |
| Executor | Codex acting as Operations design agent |
| Accountable owner | Syed Ahmed acting as Founder/operator |
| Evidence scope | Pilot continuity decision only; no backup, restore or failover was created or exercised |

## 1. Binding pilot decision

The lean pilot has **no Soccolo-operated disaster-recovery system**. It has no
Melbourne copy, media replication, point-in-time-recovery add-on, restore
environment, recovery operator, recovery rehearsal, customer RPO or customer
RTO commitment.

The product must not describe a temporary cloud copy as a guaranteed backup.
Pilot participants are told to retain the original recording on their phone if
it matters to them.

## 2. What protection may exist

| Protection | Pilot treatment |
|---|---|
| Supabase Free automatic database backup | Not included or promised |
| Supabase Pro daily database backup | May exist if Pro is selected; incidental provider protection, not a Soccolo recovery promise |
| Supabase Storage object backup | Not supplied by database backups |
| Point-in-time recovery | Not purchased for the pilot |
| Separate object/media copy | Not built for the pilot |
| Phone original | Practical user fallback where the user has not deleted it |
| Source/configuration | Versioned in Git where appropriate; secrets remain outside Git |

Supabase documents that automatic daily backups are a paid-plan feature, that
Free projects should not rely on them, and that database backups do not contain
Storage objects: <https://supabase.com/docs/guides/platform/backups>.

If a paid plan provides daily database backups at no separate charge, Soccolo
does not disable them. It simply makes no product promise to restore from them
during the pilot.

## 3. Explicitly accepted loss scenarios

The owner accepts that, during the pilot:

- a provider outage may make the service unavailable for an unknown period;
- accidental or provider-side deletion may permanently lose database records;
- deleted, corrupt or unavailable Storage objects may permanently lose cloud
  videos even if database metadata survives;
- data created since any incidental provider backup may be lost;
- there is no alternate-region failover or guaranteed restoration time; and
- Soccolo may stop the pilot rather than pay for emergency recovery.

Authorization, consent withdrawal and active-store deletion still apply. The
absence of recovery does not permit deleted material to remain user-accessible.

## 4. User-facing copy

Use this meaning in pilot consent/help content:

> Soccolo's pilot cloud copy is temporary and is not guaranteed backup storage.
> Keep the original on your phone if you need it. Pilot cloud records or videos
> may be unavailable or permanently lost if the service fails.

Do not promise high availability, disaster recovery, a maximum data-loss
window, a maximum restoration time or recovery of a deleted recording.

## 5. Cost floor and controls

| Mode | Expected base subscription decision | Recovery spend |
|---|---|---:|
| Internal non-commercial development | Supabase Free plus Vercel Hobby while terms/limits permit | USD 0 |
| External commercial pilot | Lowest eligible web plan plus Supabase Free if its limits/pausing are acceptable; upgrade Supabase only when measured need justifies it | USD 0 dedicated recovery |
| More reliable paid pilot | Vercel Pro plus Supabase Pro if commercial terms and availability require them | No separate recovery/PITR/media-copy spend |

As checked on 15 September 2026, Vercel Pro starts at USD 20/month and
Supabase Pro starts at USD 25/month before tax and usage. Supabase PITR starts
around USD 100/month and is excluded. Current prices must be rechecked before
purchase: <https://vercel.com/pricing> and <https://supabase.com/pricing>.

Cost controls:

1. start on free tiers only when their terms allow the intended use;
2. retain spend caps and provider usage alerts;
3. do not create paid staging, cross-region storage or premium recovery;
4. measure database size, stored video GB, transfer and active users weekly;
5. pause new cloud uploads rather than create an uncontrolled overage; and
6. require owner approval for any recurring service or disabled spend cap.

## 6. Post-pilot recovery gate

Create a new versioned recovery decision before any of these events:

- general availability or a claim that Soccolo is production-ready;
- a promise that Soccolo can restore customer data or media;
- customers rely on Soccolo as the only copy of a recording;
- a paid offering represents cloud storage as durable protection;
- measured pilot loss, support demand or provider behavior shows recovery is
  necessary; or
- a current privacy, contractual or operational review requires it.

That later decision must reconsider database and object recovery separately,
deletion replay, encryption/key custody, recovery cost, restore testing and
measured RPO/RTO. The previous Melbourne design is an option, not an approved
pilot expense.

## 7. Completion result

`ACT-SP-050-02` passes as a deliberate recovery-deferral decision. The absence
of recovery, accepted loss, truthful participant message, cost controls and
post-pilot trigger are explicit. No recovery implementation or performance is
claimed.
