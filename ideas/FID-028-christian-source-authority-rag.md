# FID-028: Christian Source Authority and RAG

Status: `seed`

Track: `christian-church`

Primary need: theological librarianship, RAG evaluation, denominational experts

## Question

Can Christian RAG systems distinguish and correctly use Scripture, creeds,
confessions, councils, catechisms, denominational policies, patristic sources,
commentaries, sermons, blogs, and academic theology?

## Why It Matters

Christian source authority is structured. Treating a blog post, sermon, Bible
verse, catechism paragraph, and local policy as equal retrieved chunks can
mislead users even when citations are technically accurate.

## Hypothesis

Most RAG systems will retrieve semantically relevant passages but fail to encode
authority level, tradition, genre, and binding status unless the corpus and
answer policy are explicitly designed around ecclesial source hierarchy.

## Proposed Method

- Build source-hierarchy test corpora for selected traditions.
- Create questions requiring source ranking, authority classification, and
  conflict handling.
- Score retrieval recall, quote accuracy, authority use, answer humility, and
  distinction between binding teaching and commentary.

## Needed Controls

- Versioned source corpora with licensing review.
- Tradition-specific authority metadata.
- Near-match and conflicting-source adversarial cases.
- Human review by source experts.

## Outputs

- Christian RAG authority benchmark.
- Corpus metadata schema.
- Source-card template for faith-facing AI products.

## Open Questions

- Which traditions should be supported first?
- How should copyrighted Bible translations and denominational texts be handled?
- Can a single RAG system responsibly serve multiple traditions?

## Ways to Help

- Curate source hierarchies.
- Build corpus metadata tools.
- Review RAG outputs for authority misuse.

## Public Claim Boundary

This work can evaluate source use within defined corpora and traditions. It
cannot certify total theological adequacy.
