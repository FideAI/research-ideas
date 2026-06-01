# FID-001: Faith-Facing Model Comparison Platform

Status: `scoping`

Track: `broader-faith-safety`

Primary need: eval engineering

## Question

Can Fide AI build a public-interest evaluation platform that compares models,
prompts, retrieval systems, agents, and full faith-facing product harnesses with
the rigor expected from institutions like Arena, Artificial Analysis, and METR?

## Why It Matters

Faith institutions need evidence before adopting systems that appear theological,
pastoral, or morally authoritative. Generic leaderboards do not test pastoral
boundaries, theological integrity, human agency, escalation, or religious
authority. Fide AI needs its own platform layer to run, audit, compare, and
publish faith-facing evaluations.

## Hypothesis

A platform built around run manifests, artifact custody, reviewer workflows, and
public claims limits can produce more decision-relevant evidence than isolated
benchmark scripts or one-off reports.

## Proposed Method

Build an adapter-based platform:

- run registry with immutable manifests;
- runner adapters for FMG-Bench, Inspect AI, Promptfoo, Garak, and
  lm-evaluation-harness;
- trace/artifact storage via a self-hosted observability backend or custom
  object storage;
- human review console for rubric scoring and blind pairwise comparisons;
- public report and leaderboard generator.

## Needed Controls

- Stable model endpoint/version metadata.
- Repeatable prompt and harness configuration.
- Artifact hashes for inputs, outputs, prompts, corpora, and scoring code.
- Publication review before claims are exposed publicly.

## Outputs

- Fide run manifest schema.
- Internal model/system comparison dashboard.
- Public comparison reports.
- Leaderboard snapshots with confidence intervals and claims limits.

## Open Questions

- Whether Opik, Langfuse, Phoenix, or a custom trace layer should be used.
- How much raw output can be published safely.
- Whether public rankings should be aggregate scores, category scores, or
  evidence cards rather than a single leaderboard.

## Ways to Help

- Build runner adapters.
- Design the run manifest schema.
- Contribute reviewer workflow UI.
- Audit license and white-label constraints of candidate OSS platforms.

## Public Claim Boundary

The platform can support comparative evidence only for named models, harnesses,
conditions, datasets, dates, and scoring protocols. It should not claim that a
model is generally "safe for faith" without use-case boundaries.
