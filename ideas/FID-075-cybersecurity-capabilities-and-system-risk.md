# FID-075: Cybersecurity Capabilities and Whole-System Risk

Status: `seed`

Primary area: `frontier-capabilities`

Additional areas: `agent-alignment`, `evaluation-science`

Application domains: `cybersecurity`

Primary need: security research, evaluation engineering, threat modeling, statistical design

## Question

How do autonomy, tool access, resource budgets, and human assistance change an AI
system's cybersecurity capabilities and the risk it creates?

## Why It Matters

A model score does not identify what a deployed agent can accomplish with tools, time,
permissions, and collaborators. Separating these factors could make independent
evaluations more informative without treating task success as proof of real-world harm.

## Hypothesis

System configuration will change measured capability and boundary violations beyond
model choice alone. The null is that these changes add no reproducible explanatory power
over a model-only baseline.

## Proposed Method

- Build an owned, isolated cyber range with synthetic assets, explicit authorization
  boundaries, and paired defensive and adversarial evaluation tasks.
- Vary one factor at a time and selected interactions: autonomy, tool permissions, time
  budget, scaffolding, and approved human assistance. Compare model-only, agent, and
  qualified human baselines.
- Measure verified task completion, unauthorized-action attempts, actual boundary
  crossings, intervention needs, cost, and time. Report repeated-run uncertainty and
  held-out environment results.

## Needed Controls

- Prohibit live targets, real credentials, uncontrolled egress, and production data.
  Require security review and written range authorization before execution.
- Hold task information and budgets comparable; record model versions, harness changes,
  contamination checks, and evaluator disagreement.
- Disclose whose authorization rules define a violation. Do not collapse capability,
  willingness, and opportunity into one risk score.

## Relationship to Existing Ideas

FID-074 provides the runtime-assurance frame. FID-076 tests controls rather than
capability; FID-077 examines the evidence needed after an incident.

## Outputs

- A reviewed evaluation protocol and reproducible safe task subset.
- A capability-versus-configuration report with limits on extrapolating to real
  deployments.

## Open Questions

- Which range tasks predict consequential real-world behavior rather than benchmark
  familiarity?
- Which details require restricted release after dual-use review?

## Ways to Help

- Security researchers to design and review controlled tasks.
- Evaluation engineers and statisticians to test reproducibility.

## Public Claim Boundary

A seed proposal, not evidence that Fide AI has measured frontier cyber capability. Range
performance neither establishes real-world offensive capability nor certifies a system
as secure.
