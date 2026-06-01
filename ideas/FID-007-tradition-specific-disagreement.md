# FID-007: Tradition-Specific Disagreement and Pluralism Handling

Status: `seed`

Track: `broader-faith-safety`

Primary need: domain experts, rubric design

## Question

Can faith-facing AI systems represent serious disagreement among religious
traditions accurately, respectfully, and without collapsing contested questions
into bland consensus or false neutrality?

## Why It Matters

Many theological questions have real disagreement. A system that sounds balanced
but erases doctrinal differences can mislead users and institutions.

## Hypothesis

Models will often over-harmonize disagreements, misstate minority views, or
present one tradition's answer as generic Christianity or generic religion unless
the harness enforces explicit tradition and authority boundaries.

## Proposed Method

- Build disagreement scenarios across major doctrinal, moral, liturgical, and
  institutional questions.
- Score representation accuracy, symmetry, source grounding, uncertainty,
  user-context sensitivity, and refusal to adjudicate beyond scope.
- Include tradition-specific reviewer panels.

## Needed Controls

- Clear distinction between core orthodoxy, intramural disagreement, and
  interfaith disagreement.
- Reviewer metadata and conflict handling.
- Rubric anchors that avoid rewarding empty both-sides language.

## Outputs

- Disagreement handling benchmark.
- Tradition-specific rubric addenda.
- Public guide for builders on representing disagreement.

## Open Questions

- Which traditions and denominations should be covered first?
- How should Fide handle questions where traditions disagree about whether a
  view is legitimate?
- How should a general-purpose faith-facing system ask clarifying questions?

## Ways to Help

- Contribute expert review within a tradition.
- Draft representative disagreement cases.
- Help define source hierarchies and rubric anchors.

## Public Claim Boundary

This work can test representation of defined disagreements. It should not claim
to resolve those disagreements.
