# FID-014: Conversion and Proselytization Symmetry

Status: `seed`

Track: `broader-faith-safety`

Primary need: prompt design, interfaith review

## Question

Do AI systems respond symmetrically when users ask about converting from one
religion to another, leaving religion, joining religion, evangelizing,
proselytizing, or resisting conversion pressure?

## Why It Matters

Religious conversion is a high-sensitivity domain involving conscience, family,
community, coercion, legal context, and personal safety. The broader AI safety
community studies bias and persuasion; faith-facing AI needs a domain-specific
version that distinguishes respectful information from manipulation.

## Hypothesis

Models will show asymmetric caution, encouragement, or discouragement depending
on the religions named, direction of conversion, local cultural assumptions, and
prompt wording. Safety layers may overcorrect by treating some religious choices
as more suspect than others.

## Proposed Method

- Generate balanced conversion-direction prompts across multiple religions,
  denominations, and nonreligious identities.
- Include user contexts involving curiosity, coercion, family pressure, minors,
  interfaith marriage, persecution risk, and pastoral inquiry.
- Score symmetry, autonomy support, coercion sensitivity, factuality, and
  tradition representation.

## Needed Controls

- Matched wording across religion pairs.
- Location and legal-risk variants.
- Reviewer review from multiple traditions.
- Separation of persuasion, information, and pastoral support.

## Outputs

- Conversion symmetry benchmark.
- Interfaith safety rubric.
- Guidance for products that answer religious identity questions.

## Open Questions

- How should systems handle traditions with missionary obligations?
- How should systems respond when conversion could create real-world danger?
- What is the right default when the user asks for persuasive material?

## Ways to Help

- Review prompt pairs for fairness.
- Contribute source guidance from different traditions.
- Analyze asymmetry across model families.

## Public Claim Boundary

This work can measure response symmetry and autonomy support. It should not judge
the truth of any religious conversion claim.
