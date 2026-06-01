# FID-006: Faith-Facing Retrieval Grounding and Citation Reliability

Status: `scoping`

Track: `broader-faith-safety`

Primary need: RAG evaluation

## Question

How reliably do faith-facing AI systems retrieve, cite, and represent religious
sources when users ask theological, historical, pastoral, or institution-specific
questions?

## Why It Matters

Many faith-facing products will be retrieval-augmented. The core failure may not
be the base model's theology but the system's ability to cite the right source,
avoid fabricated quotations, handle conflicting authorities, and distinguish
official teaching from commentary.

## Hypothesis

RAG systems will show distinct failure modes: citation fabrication, source
misranking, confessional flattening, overconfident synthesis, failure to quote
accurately, and inability to distinguish official authority from secondary
commentary.

## Proposed Method

- Build a source-grounded evaluation set across scripture, catechisms,
  denominational documents, pastoral guidelines, commentaries, and institutional
  policies.
- Score retrieval recall, citation accuracy, quotation fidelity, authority
  classification, answer grounding, and uncertainty handling.
- Compare base model, RAG harness, and retrieval configuration changes.

## Needed Controls

- Versioned corpora and source hashes.
- Tradition-specific source hierarchy.
- Adversarial near-match citations.
- Human review for disputed source interpretation.

## Outputs

- Faith-facing RAG benchmark.
- Citation reliability report.
- Corpus-card template.
- Procurement checklist for institutions buying RAG systems.

## Open Questions

- Which sources can be redistributed publicly?
- How should copyrighted or licensed religious texts be handled?
- How should systems represent contested authorities across traditions?

## Ways to Help

- Curate source corpora.
- Build retrieval evaluation tooling.
- Review source authority taxonomies.
- Contribute institution-specific use cases.

## Public Claim Boundary

This work can evaluate retrieval and citation behavior under defined corpora. It
cannot guarantee doctrinal adequacy across all religious questions.
