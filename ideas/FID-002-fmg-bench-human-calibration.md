# FID-002: Validating Human and AI Judgments of Faith-Facing Systems

Status: `active`

Primary area: `evaluation-science`

Additional areas: `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: expert reviewers, statistics

## Question

Can qualified human reviewers consistently evaluate how faith-facing AI systems
use sources, handle authority, defer to people and institutions, preserve human
agency, and respect pastoral boundaries? Where do automated model judges diverge
from those human judgments?

## Why It Matters

Benchmarks are easy to publish and hard to validate. Fide AI should not rely on
synthetic judges or aggregate scores unless it knows which dimensions are
reliable enough to guide deployment, procurement, or public claims.

## Hypothesis

Some dimensions will be reliable enough for decision support, while others will
require narrower rubrics, more reviewer training, or removal from high-stakes
claims.

## Proposed Method

- Recruit a small calibrated reviewer panel.
- Score a stratified subset of outputs from Fide AI's published faith-facing
  evaluation, FMG-Bench.
- Measure inter-rater reliability, judge-human disagreement, strictness/leniency,
  failure-tag consistency, and disagreement concentration by scenario type.
- Compare expert review, trained non-expert review, and model judge scores where
  feasible.

## Needed Controls

- Reviewer conflict checks.
- Blind model/system labels where practical.
- Rubric versioning.
- Adjudication protocol for high-disagreement items.
- Public/private separation for sensitive notes.

## Outputs

- Calibration report.
- Reviewer protocol.
- Updated guidance for faith-facing evaluation rubrics.
- Evidence map classifying dimensions as decision-relevant, conditional, or not
  yet validated.

## Open Questions

- What minimum reliability threshold should Fide require for public claims?
- How should theological tradition metadata be represented without tokenizing
  reviewers?
- Which disagreement patterns are legitimate pluralism rather than rubric
  failure?

## Ways to Help

- Serve as an expert reviewer.
- Review scoring rubrics.
- Help with reliability analysis.
- Build annotation and adjudication tooling.

## Public Claim Boundary

Calibration can validate specific dimensions, reviewer protocols, and use cases.
It cannot establish that one benchmark fully measures theological or pastoral
quality, or that a system is trustworthy across faith settings.
