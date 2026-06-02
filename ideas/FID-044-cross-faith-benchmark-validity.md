# FID-044: Cross-Faith Benchmark Validity and Measurement Design

Status: `scoping`

Track: `broader-faith-safety`

Primary need: benchmark validity, statistics, open evaluation infrastructure

## Question

How should cross-faith AI benchmarks validate what they measure when scores may
depend on question sourcing, user expectations, LLM-as-judge behavior, scoring
thresholds, regenerated answers, model updates, and the difference between any
religious mention and meaningful representation?

## Why It Matters

Recent cross-faith benchmark releases make religious representation and
conversion asymmetry measurable, but the measurement choices themselves are
high-stakes. A benchmark that rewards any religious mention may miss inaccurate,
tokenizing, or shallow representation. A benchmark that penalizes persuasion may
misread legitimate pastoral or tradition-specific speech. Fide AI can help make
faith-facing benchmark claims more reproducible, interpretable, and humble.

## Hypothesis

Cross-faith benchmark results will be useful only when accompanied by construct
definitions, uncertainty estimates, judge-validation studies, held-out splits,
regeneration variance, tradition-specific review, and clear claim boundaries.
Without those controls, public leaderboards may create false precision or reward
benchmark-shaped behavior.

## Proposed Method

- Reproduce selected cross-faith benchmark results on a small audited subset.
- Compare human reviewers, expert panels, trained non-experts, and multiple
  model judges on religious-representation and conversion-symmetry scoring.
- Measure sensitivity to prompt wording, answer regeneration, judge choice,
  scoring thresholds, model version changes, and item sourcing.
- Develop reporting standards for confidence intervals, construct limits,
  evaluator metadata, leaderboard claims, and public claims.

## Needed Controls

- Do not treat benchmark scores as direct measures of theological truth.
- Separate any mention, meaningful reference, balanced representation, accuracy,
  and pastoral appropriateness.
- Include religious and nonreligious reviewers.
- Track benchmark leakage, public/private splits, and model-update drift.

## Relationship to Existing Ideas

This complements `FID-002` FMG-Bench construct validity, `FID-011` reviewer
reliability, and `FID-012` visible-rubric gaming by focusing specifically on
cross-faith benchmark design, public leaderboards, and claims about religious
representation or persuasion.

## Outputs

- Cross-faith benchmark validation protocol.
- Reporting checklist for faith-facing AI leaderboards.
- Leaderboard claim audit template.
- Judge-human agreement study for religious representation and persuasion tasks.
- Recommendations for benchmark versioning and public claim boundaries.

## Open Questions

- What minimum reliability is needed before a faith-facing benchmark can support
  procurement or product claims?
- When should disagreement among traditions be reported rather than averaged?
- How can open benchmarks remain useful without becoming easy to game?

## Ways to Help

- Reproduce benchmark subsets and audit scorer behavior.
- Serve as expert or trained non-expert reviewer.
- Design uncertainty, drift, and regeneration-variance analyses.
- Draft public-claims standards for faith-facing benchmark releases.

## Public Claim Boundary

This work can validate and improve benchmark methodology. It cannot prove that a
model, product, or benchmark fully captures religious truth, fairness, or
pastoral adequacy.
