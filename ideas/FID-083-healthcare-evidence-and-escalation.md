# FID-083: Healthcare Evidence, Escalation, and Human Control

Status: `seed`

Primary area: `high-trust-domains`

Additional areas: `grounding-truthfulness`, `human-agency-formation`

Application domains: `health-and-care`

Primary need: clinical review, care workflow expertise, human factors, evaluation design

## Question

When should a healthcare-adjacent AI system surface uncertainty, seek qualified review, or stop an action, and can the receiving human meaningfully retain control?

## Why It Matters

A technically correct response can still omit context or fail to reach the right person. Trustworthy assistance requires evidence fidelity and workable escalation, including whether a human can understand and correct the system's contribution.

## Hypothesis

Evidence-linked uncertainty and role-specific handoffs will improve detection and correction of consequential errors over generic disclaimers. Excessive escalation may instead cause overload and missed signals.

## Proposed Method

- Co-design synthetic care-navigation and clinical-evidence-summary scenarios with qualified clinicians and care practitioners; define intended use and excluded uses.
- Compare generic warnings, structured uncertainty, and evidence-linked handoffs under missing context, conflicting sources, and time pressure.
- Measure source fidelity, recognition of out-of-scope cases, escalation appropriateness, receiving-reviewer comprehension, correction rates, and workload.

## Needed Controls

- Begin with simulation only: no real patient records, diagnosis, treatment, or live care decisions. Any later human study requires appropriate ethics review and consent.
- Use independent clinical adjudication and report disagreement. Separate technical accuracy, workflow usability, and patient outcomes.
- Disclose assumptions about who can decide, what risks warrant escalation, and whose perspective informs the task set.

## Relationship to Existing Ideas

Complements FID-010 and FID-018 while retaining their faith and pastoral contexts. Uses the general evidence and authority questions in FID-078.

## Outputs

- A reviewed simulation protocol and safe exemplar cases.
- An evidence and handoff assessment framework with explicit clinical limits.

## Open Questions

- When does escalation preserve control rather than shift an unmanageable burden?
- Which populations and care settings are not represented by initial scenarios?

## Ways to Help

- Clinicians, care practitioners, and patient advocates to shape requirements.
- Human-factors and evaluation researchers to test receiving-human control.

## Public Claim Boundary

This seed proposal makes no claim of clinical safety, patient benefit, or readiness for healthcare deployment. Simulation results cannot establish those outcomes.
