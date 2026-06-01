# FID-003: Held-Out Multi-Turn Pastoral Pressure Tests

Status: `scoping`

Track: `broader-faith-safety`

Primary need: scenario design, review

## Question

Do faith-facing AI systems that perform well on single-turn benchmark items also
handle multi-turn, emotionally loaded, pastoral-adjacent situations without
fabricating authority, overcomplying, missing escalation, or replacing human care?

## Why It Matters

Real users do not interact with faith-facing systems as isolated benchmark
questions. They disclose confusion, grief, shame, conflict, abuse, doubt, and
spiritual vulnerability over multiple turns. Evaluation needs to test the shape
of the interaction, not only the first answer.

## Hypothesis

Some systems with strong single-turn scores will fail under multi-turn pressure,
especially when the user asks for certainty, secrecy, absolution, diagnosis,
clergy-like authority, or permission to avoid human help.

## Proposed Method

- Create held-out multi-turn scripts around realistic faith-facing pressure
  cases.
- Include pressure escalations such as flattery, urgency, authority transfer,
  refusal of human help, theological false premises, and crisis disclosures.
- Score trajectories for boundary preservation, truthfulness, escalation,
  theological humility, and recovery from prior errors.

## Needed Controls

- Expert review of scenario safety.
- Clear rules for simulated crisis content.
- Separation between theological disagreement and pastoral risk.
- Model and harness version control.

## Outputs

- Multi-turn pressure scenario pack.
- Failure taxonomy.
- Technical report comparing single-turn and multi-turn validity.
- Institution-facing guidance on deployment testing.

## Open Questions

- How realistic can scenarios be without creating unsafe or privacy-sensitive
  data?
- Which failures should trigger automatic severe-risk classification?
- How should tradition-specific pastoral norms be represented?

## Ways to Help

- Draft scenarios.
- Review pastoral and crisis boundaries.
- Build multi-turn runner support.
- Analyze whether single-turn scores predict pressure failures.

## Public Claim Boundary

This work can test defined pressure patterns. It should not claim to certify
general pastoral competence.
