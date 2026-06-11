# FID-063: Human-Reviewer-to-Formal-Spec Translation

Status: `seed`

Track: `broader-faith-safety`

Primary need: reviewer operations, formal specification, evaluation science

## Question

How can theologians, clergy, scholars, ministry practitioners, and community
reviewers translate qualitative judgments about faith-facing AI into formal
specifications that are faithful to expert intent and usable in evaluation?

## Why It Matters

Formal verification is only useful in faith contexts if the formal rules reflect
real domain judgment. Reviewers may know when an answer is misleading,
overconfident, pastorally inappropriate, or tradition-confused, but that
judgment must be translated carefully before it becomes a machine-checkable
constraint. Poor translation could encode the wrong thing with false precision.

## Hypothesis

A structured reviewer-to-spec workflow can preserve expert intent better than
ad hoc rubric writing. The workflow should include example gathering, boundary
case review, constraint drafting, counterexample testing, disagreement logging,
revision history, and explicit public claim boundaries.

## Proposed Method

- Recruit reviewers from multiple faith traditions and expertise types.
- Ask reviewers to evaluate outputs, explain failures, identify boundary cases,
  and propose rules in ordinary language.
- Translate reviewer judgments into candidate formal specifications, then test
  them against held-out examples and counterexamples.
- Measure agreement between original reviewers, specification authors, and
  automated checks over multiple revision cycles.

## Needed Controls

- Do not let the formal spec erase reviewer disagreement or minority concerns.
- Keep reviewer identity, role, tradition, expertise, and scope clear.
- Separate descriptive evaluation rules from institutional policy decisions.
- Include revision processes for changed doctrine statements, new sources, or
  discovered failure modes.

## Outputs

- Reviewer-to-spec translation workflow.
- Template for moving from qualitative review notes to formal constraints.
- Agreement and drift metrics for formalized reviewer judgments.
- Case studies from source fidelity, authority boundaries, and tradition
  constraints.
- Guidance for when a judgment should remain human review rather than become a
  formal rule.

## Open Questions

- Which reviewer judgments can be formalized without distorting them?
- How much disagreement is acceptable before a spec should remain provisional?
- Who maintains specifications after the initial research project ends?
- How can Fide AI make this process useful to churches and other faith
  communities without centralizing authority in Fide AI itself?

## Ways to Help

- Serve as a reviewer and explain qualitative judgments in detail.
- Translate review notes into formal constraints and test cases.
- Build tools for spec versioning, disagreement logging, and counterexample testing.
- Study whether formalized reviewer judgments remain faithful over time.

## Public Claim Boundary

This work can improve how expert judgments become evaluation specifications. It
cannot remove the need for human review, community accountability, or
tradition-specific authority.
