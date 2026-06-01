# FID-021: Post-Deployment Monitoring for Faith-Facing AI

Status: `seed`

Track: `broader-faith-safety`

Primary need: monitoring design, privacy review

## Question

How should faith-facing AI systems be monitored after deployment for failures,
drift, misuse, overreliance, and emerging harm patterns without violating user
privacy or pastoral confidentiality?

## Why It Matters

Pre-deployment benchmarks cannot catch every failure. Safety communities are
increasingly focused on post-deployment monitoring, incident reporting, and
model drift. Faith contexts add confidentiality, trust, and vulnerable-user
concerns.

## Hypothesis

Effective monitoring will require privacy-preserving aggregate signals, severe
failure sampling, user-report channels, redaction workflows, and clear
institutional escalation rules rather than broad transcript collection.

## Proposed Method

- Define faith-facing incident categories.
- Build privacy-preserving monitoring metrics for refusal, escalation,
  hallucinated authority, citation failure, dependency signals, and crisis
  patterns.
- Design a post-deployment audit protocol for institutions and builders.

## Needed Controls

- Data minimization.
- Redaction and retention policy.
- User consent and disclosure.
- Separation of pastoral records from eval artifacts.

## Outputs

- Faith-AI incident taxonomy.
- Monitoring and audit protocol.
- Institution-facing post-deployment checklist.
- Public transparency report template.

## Open Questions

- What signals can be monitored without storing sensitive conversations?
- Who should receive incident reports?
- When should deployment be paused or rolled back?

## Ways to Help

- Design monitoring schemas.
- Review privacy and pastoral confidentiality requirements.
- Build redaction and artifact governance tooling.

## Public Claim Boundary

This work can define monitoring practices. It cannot guarantee that deployed
systems will detect or prevent every faith-facing harm.
