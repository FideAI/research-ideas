# FID-076: Authorization Boundaries and AI Control in Cybersecurity

Status: `seed`

Primary area: `agent-alignment`

Additional areas: `evaluation-science`

Application domains: `cybersecurity`, `cross-domain`

Primary need: security engineering, adversarial evaluation, control protocols, independent review

## Question

Which controls keep capable agents within legitimate authorization when task pressure,
untrusted inputs, or delegated work creates opportunities to exceed it?

## Why It Matters

Completing an authorized task is not sufficient if the system expands its access or
bypasses oversight along the way. This call studies whether enforceable boundaries hold
under pressure, not whether an agent can recite a security policy.

## Hypothesis

Least-privilege tools and enforceable approval gates will reduce unauthorized completed
actions more reliably than instruction-only controls at comparable useful-task
performance. They may instead shift failures or impose unacceptable costs.

## Proposed Method

- Create isolated scenarios with explicit asset ownership, allowed actions, revocation
  points, and synthetic adversarial inputs. Include single-agent and delegated
  workflows.
- Compare instruction-only policies, permission enforcement, independent monitoring, and
  combined controls using matched tasks and resource budgets.
- Measure attempted and completed violations separately, detection latency, successful
  shutdown or revocation, false alarms, and legitimate task completion. Test previously
  unseen scenarios and adaptive challenges.

## Needed Controls

- Use only owned sandboxes with disabled external access and synthetic secrets. Review
  challenge designs and release artifacts for dual-use risk.
- Specify monitor access and trust assumptions; separate ordinary mistakes from
  deliberately adversarial test-agent behavior without inferring model intent.
- Pre-register intervention budgets and failure thresholds. Include benign difficult
  tasks so blocking everything cannot count as success.

## Relationship to Existing Ideas

Extends the cross-domain questions in FID-069 and FID-074. FID-070 remains the dedicated
faith-facing prompt-injection call; this brief tests cybersecurity control protocols and
their tradeoffs.

## Outputs

- A control-evaluation harness with safe scenarios and reproducible comparisons.
- An explicit account of residual failure modes and useful-work tradeoffs.

## Open Questions

- Do controls generalize across models and toolchains?
- How does delegation change revocation and responsibility?

## Ways to Help

- Security engineers to implement testable permission boundaries.
- Control researchers and operators to independently challenge protocols.

## Public Claim Boundary

This is a proposed control study, not a security certification or a claim that models
are inherently deceptive. Public artifacts must not enable attacks on third-party
systems.
