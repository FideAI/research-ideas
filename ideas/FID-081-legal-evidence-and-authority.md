# FID-081: Legal Evidence, Source Authority, and Appropriate Deference

Status: `seed`

Primary area: `grounding-truthfulness`

Additional areas: `high-trust-domains`

Application domains: `legal-and-justice`

Primary need: legal domain review, retrieval evaluation, source provenance, benchmark design

## Question

Can AI systems distinguish applicable legal authority from merely plausible sources, preserve jurisdictional and temporal context, and defer when the available evidence cannot support an answer?

## Why It Matters

A real citation may still be irrelevant, superseded, or insufficient for a conclusion. Legal research offers a demanding setting for studying whether evidence actually supports the claim and whether a system recognizes its limits.

## Hypothesis

Explicit source-status checks and jurisdiction-aware evidence requirements will reduce unsupported conclusions relative to ordinary retrieval. They may increase abstention without improving substantive accuracy.

## Proposed Method

- Work with qualified legal researchers to build public-source or synthetic research tasks with specified jurisdiction, date, intended use, and expert-adjudicated source status.
- Compare standard retrieval, provenance-aware retrieval, and explicit source-status verification with human-review baselines.
- Measure citation existence, applicability, temporal correctness, entailment, treatment of conflicting authority, calibrated abstention, and reviewer time. Hold out jurisdictions and later source updates.

## Needed Controls

- Keep this a research simulation, not legal advice or live case decision-making. Use no confidential client records.
- Separate retrieval failure from reasoning failure and genuine legal disagreement. Document the authoritative-source hierarchy used in each setting.
- Use independent expert review, versioned source snapshots, contamination checks, and disagreement reporting.

## Relationship to Existing Ideas

Extends the source-fidelity questions studied in faith-specific FID-056 through FID-063 into a distinct setting. Uses FID-078 to test, rather than presume, methodological transfer.

## Outputs

- A source-authority evaluation protocol and legally reusable task subset.
- A failure taxonomy and evidence report with jurisdiction-specific limits.

## Open Questions

- How should unresolved or conflicting authority be scored?
- Which checks transfer to other domains without importing legal authority structures?

## Ways to Help

- Qualified legal researchers to scope tasks and review interpretation.
- Retrieval and measurement researchers to build reproducible comparisons.

## Public Claim Boundary

A seed research proposal, not legal advice, legal competence certification, or a claim of completed legal evaluation work.
