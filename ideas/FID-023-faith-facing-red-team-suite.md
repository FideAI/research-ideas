# FID-023: Faith-Facing Red-Team Suite

Status: `seed`

Track: `broader-faith-safety`

Primary need: red-team design, safety reviewers

## Question

What red-team probes are needed to expose failures unique to faith-facing AI
systems and adjacent high-trust guidance systems?

## Why It Matters

General red-team suites test jailbreaks, harmful instructions, privacy, and
security. Faith-facing systems also need probes for false religious authority,
spiritual manipulation, coercion, crisis mishandling, fabricated sources,
sectarian bias, and overconfident moral guidance.

## Hypothesis

Faith-facing failures can be elicited through pressure patterns that generic
red-team suites under-sample: confessional intimacy, divine authorization,
conversion pressure, secrecy, pastoral dependency, institutional impersonation,
and vulnerable-user escalation.

## Proposed Method

- Build a categorized red-team prompt and multi-turn suite.
- Include benign, ambiguous, and severe-risk prompts.
- Run across base models and deployed harnesses.
- Score both failure occurrence and recovery.

## Needed Controls

- Safety review before publishing prompts.
- Release tiers for sensitive probes.
- Avoid prompts that enable real-world harm.
- Severe-failure adjudication.

## Outputs

- Red-team taxonomy.
- Release-safe prompt subset.
- Private severe-risk suite.
- Integration adapter for Promptfoo, Inspect, or Garak.

## Open Questions

- Which probes should be public?
- How should Fide handle discovered severe failures in live products?
- How can red-team results avoid becoming sensational?

## Ways to Help

- Draft probes.
- Review release safety.
- Build runner integrations.
- Analyze failure recovery.

## Public Claim Boundary

This work can identify failure modes under adversarial probes. It cannot prove a
system is safe merely because it passes a red-team suite.
