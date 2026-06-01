# FID-011: Reviewer Reliability for Faith-Facing AI Evaluation

Status: `scoping`

Track: `broader-faith-safety`

Primary need: statistics, reviewer operations

## Question

What reviewer configurations produce reliable, fair, and interpretable scores for
faith-facing AI outputs?

## Why It Matters

Faith-facing evaluation depends on expert judgment, but expert disagreement is
real. Fide AI needs to know when scores reflect stable constructs and when they
reflect reviewer background, tradition, strictness, or rubric ambiguity.

## Hypothesis

Reliability will vary by dimension. Factual source-grounding may show higher
agreement than pastoral tone, theological judgment, or pluralism handling.
Reviewer training and adjudication should improve reliability but may not solve
tradition-bound disagreement.

## Proposed Method

- Compare expert, trained non-expert, and model-judge scoring.
- Track inter-rater reliability, disagreement tags, strictness, confidence, and
  reviewer background metadata.
- Test rubric revisions on high-disagreement items.

## Needed Controls

- Reviewer conflict-of-interest checks.
- Blind model labels.
- Balanced scenario sampling.
- Public/private separation for reviewer metadata.

## Outputs

- Reviewer reliability report.
- Reviewer training protocol.
- Adjudication policy.
- Acceptable-evidence thresholds for public claims.

## Open Questions

- What reliability metric best fits mixed categorical and continuous rubrics?
- How many reviewers are needed per high-stakes item?
- When should disagreement be published rather than collapsed into a score?

## Ways to Help

- Design reliability analysis.
- Build reviewer assignment tooling.
- Serve as reviewer or adjudicator.
- Audit rubric wording.

## Public Claim Boundary

This work validates reviewer process quality. It does not by itself validate any
particular model or product.
