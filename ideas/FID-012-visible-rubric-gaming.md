# FID-012: Optimization Pressure and Visible-Rubric Gaming

Status: `seed`

Track: `broader-faith-safety`

Primary need: eval science

## Question

If builders can see Fide AI rubrics or optimize against public benchmark items,
do systems become genuinely safer or merely better at passing the visible test?

## Why It Matters

Public standards need transparency, but visible benchmarks can be gamed. Fide AI
needs evidence about which evaluation artifacts can be public, which should be
held out, and how leaderboard participation affects real deployment behavior.

## Hypothesis

Visible rubric optimization will improve surface compliance on known dimensions
while leaving held-out pressure failures intact unless the evaluation includes
multi-turn, adversarial, and human-reviewed cases.

## Proposed Method

- Create public, private, and held-out benchmark splits.
- Allow controlled optimization against visible rubrics.
- Compare improvement on public items, private items, and deployment-like
  pressure tests.
- Measure whether failure modes shift rather than disappear.

## Needed Controls

- Strict split management.
- Versioned benchmark releases.
- Builder disclosure of tuning and prompt changes.
- Adversarial held-out sets.

## Outputs

- Benchmark governance policy.
- Evidence on visible-rubric robustness.
- Recommendations for leaderboard release cadence.
- Claims guidance for evaluated builders.

## Open Questions

- How much transparency is enough for legitimacy without enabling gaming?
- Should Fide publish item-level examples or only scenario cards?
- How should retests after remediation be labeled?

## Ways to Help

- Design split and leakage controls.
- Build optimization-pressure experiments.
- Review leaderboard governance policy.

## Public Claim Boundary

This work can assess robustness under known optimization conditions. It cannot
guarantee that future participants will not overfit new public artifacts.
