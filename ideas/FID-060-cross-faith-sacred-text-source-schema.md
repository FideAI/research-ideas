# FID-060: Cross-Faith Sacred Text and Source Schema

Status: `seed`

Track: `broader-faith-safety`

Primary need: source metadata, corpus design, theological librarianship

## Question

What metadata schema is needed for faith-facing AI systems to represent sacred
texts, commentaries, institutional documents, oral traditions, translations,
editions, and authority levels across faith traditions?

## Why It Matters

Formal verification and reliable retrieval both depend on knowing what a source
is. A passage may be scripture, commentary, denominational policy, devotional
writing, historical scholarship, minority interpretation, or pastoral guidance.
Without source metadata, AI systems can cite religious material while hiding
important differences in authority, scope, translation, and context.

## Hypothesis

A cross-faith source schema can capture enough metadata to support verification
without forcing every tradition into the same authority model. Required fields
should describe source type, tradition scope, authority status, version,
translation, licensing, provenance, context-window rules, and claim types.

## Proposed Method

- Review existing metadata practices from libraries, religious publishers,
  digital scripture projects, academic databases, and RAG corpus cards.
- Draft a minimal source-card schema for faith-facing AI corpora.
- Test the schema on Christian, Jewish, Muslim, Buddhist, Hindu, and other
  faith-facing source examples where appropriate reviewers are available.
- Evaluate whether the schema improves retrieval, citation, and verification
  tasks compared with unstructured source metadata.

## Needed Controls

- Do not impose a single hierarchy of authority across traditions.
- Separate source metadata from claims about truth, orthodoxy, or institutional
  approval.
- Track licensing, redistribution rights, source provenance, and edition drift.
- Include fields for contested status, minority use, or tradition-specific
  authority where relevant.

## Outputs

- Cross-faith source-card schema.
- Example metadata records for sacred texts, commentaries, policies, and
  educational resources.
- Corpus-readiness checklist for faith-facing RAG and verification systems.
- Schema validation tool for missing or ambiguous source metadata.
- Guidance for public benchmarks that rely on copyrighted or restricted sources.

## Open Questions

- Which metadata fields are essential versus useful but too burdensome?
- How should oral, embodied, or community-governed sources be represented?
- How can the schema respect traditions that reject external classification of
  authority?
- What metadata is required before a source can support formal verification?

## Ways to Help

- Contribute source-card examples from different faith traditions.
- Review metadata fields as a librarian, publisher, scholar, clergy member, or corpus builder.
- Build schema validators and corpus-quality checks.
- Identify licensing and provenance constraints for public benchmark sources.

## Public Claim Boundary

This work can improve source description, retrieval, and verification readiness.
It cannot declare a universal authority hierarchy across religions or certify
that a source is authoritative for every community that uses it.
