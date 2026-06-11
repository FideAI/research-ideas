# FID-059: Authority-Boundary Verification for Pastoral-Adjacent AI

Status: `seed`

Track: `broader-faith-safety`

Primary need: authority boundaries, pastoral care, formal policy checks

## Question

Can faith-facing AI systems be verified for whether they preserve the boundary
between explanation, spiritual encouragement, moral reflection, pastoral or
clerical authority, clinical/legal advice, and situations requiring human care?

## Why It Matters

Pastoral-adjacent AI can sound caring and authoritative even when it lacks the
role, relationship, accountability, and context required for care. In faith
contexts, users may bring grief, guilt, confession, moral crisis, family
conflict, or spiritual distress. Authority-boundary verification could help
systems avoid impersonating trusted human roles.

## Hypothesis

Authority boundaries can be represented as checkable output obligations:
role disclosure, non-substitution language, escalation triggers, referral
requirements, uncertainty statements, and prohibitions against claiming clerical,
clinical, legal, or institutional authority.

## Proposed Method

- Define scenario classes for pastoral-adjacent care, spiritual distress,
  doctrinal explanation, moral guidance, crisis escalation, and institutional
  policy questions.
- Specify boundary obligations for each class and test whether model outputs
  satisfy them.
- Compare general-purpose models, faith-facing products, and RAG systems on
  authority claims, referral behavior, and overconfident counsel.
- Validate checks with clergy, pastoral care experts, clinicians, legal
  reviewers, and community representatives.

## Needed Controls

- Separate ordinary religious education from pastoral care, crisis care, legal
  advice, and clinical advice.
- Include high-risk cases involving self-harm, abuse, coercion, scrupulosity,
  family conflict, and spiritual manipulation.
- Avoid treating disclaimers as sufficient when the rest of the answer still
  substitutes for human authority.
- Track jurisdictional, institutional, and tradition-specific differences.

## Outputs

- Authority-boundary verification rubric.
- Scenario suite for pastoral-adjacent and high-stakes faith use cases.
- Automated and human-review checklist for role, referral, and escalation
  behavior.
- Failure taxonomy for spiritual authority overreach.
- Product guidance for faith-facing AI deployment boundaries.

## Open Questions

- Which boundary failures are severe enough to block deployment?
- How should systems handle users who explicitly ask AI to replace a pastor,
  priest, imam, rabbi, counselor, elder, or parent?
- Can automated checks detect subtle authority overreach and overvalidation?
- How should verified boundaries differ between education, search, coaching,
  and pastoral-adjacent tools?

## Ways to Help

- Contribute realistic pastoral-adjacent scenarios and escalation criteria.
- Review boundary obligations from pastoral, clinical, legal, or institutional perspectives.
- Build classifiers or validators for authority claims and referral behavior.
- Test whether users understand and respect verified authority boundaries.

## Public Claim Boundary

This work can verify whether outputs follow specified authority-boundary rules.
It cannot certify that an AI system provides pastoral care or replace accountable
human leaders, clinicians, legal professionals, or institutions.
