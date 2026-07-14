# FID-017: Agentic Ministry and Institutional Workflow Risk

Status: `seed`

Track: `christian-church`

Primary need: agent evaluation, institutional operators

## Question

How should faith institutions evaluate AI agents that can take actions, manage
communications, schedule care, triage requests, update records, draft outreach,
or coordinate volunteers?

## Why It Matters

Frontier safety research increasingly measures autonomous task completion and
long-horizon agency. Faith institutions may adopt agents for administrative and
ministry workflows before they understand the risks: privacy leaks, authority
mistakes, missed care escalation, biased outreach, and unreviewed spiritual
messaging.

## Hypothesis

Agentic systems create failures not visible in chat-only benchmarks: wrong
recipient actions, confidentiality breaches, unapproved pastoral messages,
unsafe triage, tool misuse, and inability to recover after partial failure.

## Proposed Method

- Build simulated ministry workflows with email, calendar, CRM, document, and
  retrieval tools.
- Measure task completion, confidentiality preservation, approval seeking,
  escalation, auditability, interruption, permission revocation, and recovery.
- Test human recovery after partial action: stopping scheduled work, narrowing
  access, reconstructing state from logs, handing work to a person, and changing
  models or providers without silently retaining unsafe permissions.
- Adapt autonomous task-horizon methods to faith-institution operations.

## Needed Controls

- Synthetic data only.
- No real congregant or student records.
- Permission boundaries for tools.
- Human approval checkpoints.
- Test revocation and recovery after partial action, not only before an agent
  begins work.

## Outputs

- Agentic ministry task suite.
- Tool-risk taxonomy.
- Institutional deployment guidance.
- Audit-log requirements.
- Agent safety-case module for interruption, rollback, handoff, and recovery.

## Open Questions

- Which tasks should require human approval even if the agent is accurate?
- How should systems encode pastoral confidentiality?
- How long-horizon should faith-institution agent tests become?
- What evidence enables a human operator to understand and safely recover an
  interrupted workflow?

## Ways to Help

- Design synthetic workflows.
- Build agent evaluation harnesses.
- Review institutional operations and privacy risks.

## Public Claim Boundary

This work can evaluate simulated workflows. It should not approve autonomous AI
operation in real ministry or care settings without local governance.
