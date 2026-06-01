# FID-002: FMG-Bench Human Calibration and Construct Validity

Status: `active`

Track: `broader-faith-safety`

Primary need: expert reviewers, statistics

## Question

Do FMG-Bench dimensions measure stable, decision-relevant constructs when scored
by calibrated human reviewers, and where do model judges diverge from expert
human judgment?

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
- Score a stratified subset of FMG-Bench outputs.
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
- Updated FMG-Bench rubric guidance.
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

Calibration can validate specific dimensions and use cases. It cannot make a
blanket claim that FMG-Bench fully measures theological or pastoral quality.
