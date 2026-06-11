# FID-057: Proof-Carrying Citations for Faith-Facing AI

Status: `seed`

Track: `broader-faith-safety`

Primary need: formal methods, RAG systems, evidence graphs, evaluator tooling

## Question

Can faith-facing AI answers carry checkable citation proofs that show which
claims are directly supported by sources, which are inferred, which are
uncertain, and which require human or tradition-specific authority?

## Why It Matters

Faith-facing AI often gives fluent answers with citations that look trustworthy
but do not actually support the claims being made. A user may not have the time
or expertise to verify every citation. Proof-carrying citations could make
source support inspectable rather than asking users to trust the surface form of
an answer.

## Hypothesis

Faith-facing answers can be decomposed into claim units and attached to a
checkable evidence graph that records source passages, support type, inference
steps, uncertainty, tradition constraints, and authority boundaries. This will
make citation failures easier to detect and easier for reviewers to audit.

## Proposed Method

- Define a claim decomposition scheme for theological, historical, moral,
  pastoral-adjacent, and institutional-policy answers.
- Design evidence-graph structures that connect claim units to cited passages,
  source metadata, support labels, and inference labels.
- Build prototype validators that flag unsupported claims, weakly supported
  inferences, missing citations, and claims that require human authority.
- Compare graph-based review with ordinary citation review across model outputs
  and RAG outputs.

## Needed Controls

- Separate direct textual support, reasonable summary, tradition-specific
  interpretation, contested inference, and unsupported assertion.
- Require reviewers to see the same source passages and metadata as the system.
- Track whether claims depend on a single tradition, a general religious
  concept, institutional policy, or pastoral judgment.
- Avoid making the evidence graph look more certain than the underlying sources
  or reviewer agreement justify.

## Outputs

- Proof-carrying citation schema for faith-facing AI answers.
- Claim-support labeling guide for reviewers and evaluators.
- Prototype evidence-graph validator.
- Audit report comparing ordinary citations with proof-carrying citations.
- Example answer cards showing supported, inferred, uncertain, and authority
  required claims.

## Open Questions

- What claim granularity is useful without making review impractically slow?
- Which parts of an evidence graph can be machine-checked reliably?
- How should systems represent disagreement among authoritative sources?
- Can proof-carrying citations work for consumer chat, institutional tools, and
  ministry workflows without overwhelming users?

## Ways to Help

- Design evidence-graph schemas and claim-support taxonomies.
- Build validators for citation support, inference labels, and missing evidence.
- Review faith-facing answers as a theologian, scholar, clergy member, or domain expert.
- Test whether proof-carrying citations improve user trust calibration.

## Public Claim Boundary

This work can make citation support more inspectable and auditable. It cannot
turn cited passages into automatic proof of doctrinal, moral, or pastoral
adequacy.
