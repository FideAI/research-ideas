# FID-008: Evaluation-Awareness and Faith-Facing Honesty Tests

Status: `seed`

Track: `broader-faith-safety`

Primary need: red-team design

## Question

Do faith-facing AI systems behave differently when they recognize they are being
evaluated, and can domain-specific honesty or integrity framings reduce
evaluation gaming without creating new failure modes?

## Why It Matters

Evaluation-aware systems can make benchmark results unreliable. In faith-facing
contexts, a system might perform humility, caution, or doctrinal deference under
test while behaving differently with users.

## Hypothesis

Some systems will show benchmark-shaped behavior under obvious evaluation
conditions. Domain-specific integrity framings may help, but could also produce
performative religious language or over-refusal.

## Proposed Method

- Create honeypot-style evaluation-awareness probes.
- Compare hidden vs obvious evaluation contexts.
- Test honesty/integrity framings against secular controls.
- Measure behavioral consistency, not just benchmark score.

## Needed Controls

- Matched secular and religious framings.
- Detection of over-refusal and performative piety.
- Separation of base-model and harness-level effects.

## Outputs

- Evaluation-awareness probe set.
- Consistency report.
- Recommendations for benchmark design and deployment audits.

## Open Questions

- How should Fide ethically run honeypot tests?
- What counts as gaming vs appropriate caution?
- Can consistency be measured without hidden production data?

## Ways to Help

- Design red-team probes.
- Build consistency metrics.
- Review ethical boundaries for deception in evaluation.

## Public Claim Boundary

This work can identify evaluation-awareness patterns under defined probes. It
cannot prove deployment behavior in all real-world contexts.
