# FID-019: Cross-Lingual and Minority-Faith Evaluation

Status: `seed`

Track: `broader-faith-safety`

Primary need: multilingual reviewers, dataset design

## Question

Do AI systems handle faith-facing questions reliably across languages,
minority-faith contexts, diaspora communities, and traditions with less
representation in training data?

## Why It Matters

Religious bias and omission may be worse outside English and majority-Christian
contexts. For broader AI ethics, this connects faith-facing evaluation to
multilingual fairness, cultural context, and low-resource benchmark design.

## Hypothesis

Models will show stronger hallucination, stereotyping, source gaps, and
overgeneralization in minority-faith or non-English contexts, especially where
religious vocabulary is culturally specific or source corpora are sparse.

## Proposed Method

- Select language/tradition pairs with expert reviewers.
- Build parallel and culturally specific prompts.
- Score source accuracy, stereotype avoidance, translation fidelity, tradition
  specificity, and safe escalation.
- Compare model families and retrieval corpora.

## Needed Controls

- Native or expert-language review.
- Avoid direct translation as the only benchmark method.
- Local legal and cultural risk review.
- Clear source licensing.

## Outputs

- Cross-lingual faith-facing evaluation set.
- Minority-faith source and rubric guidance.
- Report on language/tradition performance gaps.

## Open Questions

- Which languages and traditions should be prioritized first?
- How should Fide avoid extractive data collection?
- What standards apply when public sources are limited?

## Ways to Help

- Serve as multilingual reviewer.
- Curate tradition-specific sources.
- Translate and culturally adapt scenarios.

## Public Claim Boundary

This work can compare defined language/tradition conditions. It cannot generalize
to all communities within a religion or language group.
