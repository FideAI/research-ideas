# FID-077: Independent Agent Incident Investigation and Evidence Sufficiency

Status: `seed`

Primary area: `agent-alignment`

Additional areas: `grounding-truthfulness`, `governance-readiness`

Application domains: `cybersecurity`, `workplace-and-enterprise`, `cross-domain`

Primary need: incident response, trace analysis, data provenance, privacy, independent review

## Question

What operational evidence lets independent investigators reconstruct an agent incident, distinguish competing explanations, and identify which interventions could have changed the outcome?

## Why It Matters

Logs may show an outcome without establishing its cause. Independent investigation needs an evidence standard that supports scrutiny while limiting exposure of private information and acknowledging what missing records leave unknown.

## Hypothesis

Structured, integrity-protected action and permission records will improve reconstruction accuracy over ordinary logs. Additional records may yield diminishing benefits or misleading confidence, and neither condition establishes access to a model's private reasoning.

## Proposed Method

- Generate known-cause incidents in isolated synthetic workflows, including delegation failures, unauthorized actions, and benign look-alikes.
- Give blinded investigators different evidence bundles: outcome-only, ordinary logs, and structured tool, permission, source, intervention, and delegation records.
- Score reconstruction against ground truth, calibration of uncertainty, false attribution, reviewer agreement, and time. Remove or alter records to test sensitivity; replay candidate interventions where valid.

## Needed Controls

- Use synthetic cases initially; require consent, access agreements, and independent disclosure review before any real incident study.
- Separate observed actions, inferred explanations, and unknowns. Record custody, redaction, missingness, and alternative causal accounts.
- Do not require private chain-of-thought or indiscriminate employee surveillance. Evaluate evidence minimization and confidentiality alongside investigative utility.

## Relationship to Existing Ideas

Operationalizes the evidence questions in FID-074 and complements FID-071 on confidential memory. FID-024 remains a separate faith-domain incident database proposal.

## Outputs

- A minimum-evidence schema and investigator reporting template.
- A synthetic incident corpus, evidence-ablation study, and reproducibility guidance.

## Open Questions

- When does redaction prevent meaningful independent review?
- Which causal claims remain unsupported even with complete action logs?

## Ways to Help

- Incident responders and independent researchers to reconstruct blinded cases.
- Privacy and provenance specialists to review evidence handling.

## Public Claim Boundary

A proposed study of investigative methods, not a Fide AI investigation of any named organization or incident. Reconstructed explanations must retain uncertainty and cannot establish intent from traces alone.
