# FID-058: Tradition-Specific Constraint Formalization

Status: `seed`

Track: `broader-faith-safety`

Primary need: formal specification, theology, pluralism, evaluator design

## Question

How can tradition-specific boundaries, source hierarchies, doctrinal
constraints, and disagreement patterns be translated into machine-checkable
specifications without flattening differences across faith traditions?

## Why It Matters

Faith-facing AI systems often answer as if there is one generic religious
perspective. In reality, traditions differ on authoritative sources, doctrine,
practice, institutional authority, and acceptable forms of counsel. Formalizing
these boundaries could help systems avoid giving tradition-confused or
overgeneralized answers.

## Hypothesis

Some tradition-specific constraints can be expressed as bounded specifications:
which sources count as authoritative, which claims require qualifiers, which
topics are contested, which roles carry authority, and when an answer should
name disagreement rather than synthesize it away.

## Proposed Method

- Select a small number of traditions, denominations, schools, or institutional
  contexts with willing reviewers.
- Define source hierarchies, required qualifiers, forbidden conflations,
  authority boundaries, and known disagreement areas.
- Convert these into structured constraints that can be applied to model and
  RAG outputs.
- Measure whether constraints reduce tradition-confusion errors without
  suppressing legitimate diversity or uncertainty.

## Needed Controls

- Do not present one group's formal specification as representative of all
  members of a broader faith tradition.
- Require named scope, source basis, reviewer basis, and expiration or revision
  process for each specification.
- Include disagreement and minority-view handling.
- Keep descriptive constraints separate from product policies or institutional
  approval decisions.

## Outputs

- Tradition-constraint specification template.
- Source hierarchy and qualifier schema.
- Evaluation set for tradition-confusion and overgeneralization failures.
- Reviewer workflow for maintaining and revising constraints.
- Public guidance on using formal constraints without overstating authority.

## Open Questions

- Who is authorized to define a tradition-specific specification?
- How should conflicting reviewers be represented in the spec?
- Which constraints are stable enough to encode, and which should remain human
  review notes?
- How can this support Christian use cases while remaining useful across faith
  traditions?

## Ways to Help

- Contribute tradition-specific source hierarchies and boundary cases.
- Translate expert review rubrics into formal constraints.
- Test constraint-checking against model and RAG outputs.
- Review whether specifications preserve disagreement rather than erase it.

## Public Claim Boundary

This work can formalize bounded constraints for specified communities and source
sets. It cannot define a tradition for everyone who belongs to it or resolve
theological disagreements by specification.
