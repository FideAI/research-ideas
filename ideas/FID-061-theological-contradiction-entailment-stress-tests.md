# FID-061: Theological Contradiction and Entailment Stress Tests

Status: `seed`

Track: `broader-faith-safety`

Primary need: natural language inference, theology review, benchmark design

## Question

Can faith-facing AI systems be tested for whether their answers contradict,
entail, overstate, understate, or misrepresent claims within a bounded source
set and specified faith tradition?

## Why It Matters

AI systems can appear balanced while quietly producing contradictions or
unsupported implications. In faith contexts, these errors may affect doctrine,
moral reasoning, formation, education, and trust in community authorities.
Theological contradiction and entailment tests could make some high-impact
reasoning failures measurable.

## Hypothesis

Bounded natural language inference tasks can identify useful categories of
faith-facing reasoning error when the task is scoped to a named corpus,
tradition, source hierarchy, and claim type. These tests will be most reliable
when they report disagreement and uncertainty rather than forcing universal
answers.

## Proposed Method

- Build small entailment and contradiction sets from source-grounded theological,
  historical, moral, and institutional-policy claims.
- Label pairs as supported, contradicted, overextended, contested, underspecified,
  or outside scope.
- Test whether AI systems can preserve distinctions between source claims,
  inferred claims, contested claims, and unsupported claims.
- Compare model judges, trained reviewers, and expert reviewers for agreement
  and failure modes.

## Needed Controls

- Do not collapse inter-tradition disagreement into a single ground truth.
- Scope every item by tradition, corpus, source status, and claim type.
- Include cases where the correct answer is uncertainty, disagreement, or human
  authority required.
- Measure judge disagreement and avoid using entailment labels as doctrinal
  verdicts.

## Outputs

- Faith-facing contradiction and entailment stress-test protocol.
- Labeled seed dataset for bounded theological inference tasks.
- Error taxonomy for overstatement, contradiction, flattening, and unsupported
  synthesis.
- Human-versus-model judge agreement report.
- Guidelines for using NLI methods in faith-facing evaluation.

## Open Questions

- Which theological claims are suitable for entailment-style testing?
- How should contested claims be represented in benchmark labels?
- Can formal methods help detect contradictions without pretending to resolve
  interpretive disputes?
- What reviewer expertise is needed for reliable labels?

## Ways to Help

- Contribute bounded claim pairs and source-grounded edge cases.
- Label contradiction, entailment, and uncertainty cases as an expert reviewer.
- Build NLI baselines and compare them with model-judge evaluations.
- Design reporting methods that show disagreement and claim boundaries clearly.

## Public Claim Boundary

This work can test bounded reasoning behavior against specified source sets and
labels. It cannot establish final theological truth or eliminate the need for
human interpretation and community authority.
