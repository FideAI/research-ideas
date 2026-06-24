# Research-to-Product Translation

Date: 2026-06-24

This artifact maps the strongest Fide AI research ideas into product lines,
backlog epics, evidence needed, pilot candidates, and public claim boundaries.
It is a translation layer, not a roadmap commitment or product approval memo.

## Productization Throughline

Fide AI should turn research into five reinforcing product lines:

| Product line | Research role | Product promise |
|---|---|---|
| Eval Engine | Runs repeatable faith-facing evaluations across models, prompts, RAG systems, agents, and full product harnesses. | Evidence infrastructure for comparison, regression testing, and publication-ready reports. |
| Fide-Check | Checks a specific answer, workflow, or vendor artifact for source support, citation fidelity, authority boundaries, and escalation behavior. | A focused review surface for builders, institutions, and reviewers before or during deployment. |
| Lexicon | Maintains source, claim, tradition, risk, authority, and reviewer vocabularies used across evaluations. | Shared language and schemas so research artifacts can become product controls. |
| Gateway | Gives institutions and builders an intake path for use-case triage, risk tiering, eval selection, and human review routing. | A front door from research evidence to deployment decisions. |
| Readiness reviews | Packages evidence into use-case-specific readiness decisions with explicit limits. | Practical adoption guidance without claiming blanket safety or theological adequacy. |

## Translation Map

| Research ideas | Primary product line | Backlog epics | Evidence needed | Pilot candidates | Claim boundary |
|---|---|---|---|---|---|
| `FID-001`, `FID-002`, `FID-011`, `FID-012`, `FID-044` | Eval Engine | Run manifest schema; adapter layer for FMG-Bench, Inspect, Promptfoo, Garak, and custom harnesses; reviewer assignment and adjudication; confidence intervals and evidence cards. | Versioned prompts, model IDs, harness configs, artifact hashes, reviewer reliability studies, benchmark leakage controls. | FMG-Bench calibration sprint; model comparison report for a narrow pastoral-adjacent use case; internal regression suite for Fide product harnesses. | Can compare named systems under named conditions. Cannot certify a model as generally safe for faith-facing use. |
| `FID-003`, `FID-010`, `FID-018`, `FID-023`, `FID-059` | Fide-Check | Multi-turn pressure checks; severe-failure taxonomy; authority-boundary validator; escalation-path review; red-team pack with public and private tiers. | Expert-reviewed scenarios, crisis and abuse handling policy, severe-failure thresholds, transcript redaction rules, human adjudication for ambiguous failures. | Pastoral-adjacent chatbot preflight; youth or devotional assistant boundary review; vendor answer audit before institutional rollout. | Can identify boundary and escalation failures in scoped scenarios. Cannot certify pastoral, clinical, legal, or spiritual competence. |
| `FID-006`, `FID-028`, `FID-056`, `FID-057`, `FID-062` | Fide-Check + Eval Engine | Citation fidelity checker; source-support evidence graph; retrieval proof obligations; corpus cards; authority-aware RAG benchmark. | Versioned corpora, source licenses, source hashes, translation or edition metadata, authority hierarchy labels, quote/paraphrase/reference test sets. | Christian RAG authority pilot; sacred-text citation audit; institution policy RAG retrieval review. | Can check retrieval, citation, and source-support behavior for specified corpora. Cannot prove doctrinal adequacy or completeness. |
| `FID-005`, `FID-007`, `FID-013`, `FID-014`, `FID-019`, `FID-058`, `FID-060`, `FID-061`, `FID-063` | Lexicon | Cross-faith source schema; claim-type taxonomy; tradition constraint template; disagreement and qualifier vocabulary; reviewer-to-spec workflow. | Domain reviewer notes, tradition-specific source hierarchies, disagreement examples, controlled terms, version and scope metadata for each spec. | Source authority metadata pack for one Christian tradition; cross-faith sacred-text source schema draft; reviewer-to-spec workshop. | Can encode scoped vocabularies and constraints. Cannot define a tradition for all adherents or resolve theological disagreement by schema. |
| `FID-017`, `FID-020`, `FID-021`, `FID-022`, `FID-024`, `FID-031`, `FID-032` | Gateway + readiness reviews | Use-case intake; risk tiering; vendor disclosure template; monitoring and incident taxonomy; deployment pause criteria; readiness report template. | Institutional workflows, privacy requirements, incident categories, monitoring signals, legal review, conflict-of-interest disclosures, post-deployment audit plan. | Church or school AI procurement review; ministry workflow automation review; post-deployment monitoring pilot for a limited assistant. | Can state evidence expectations and readiness gaps. Cannot provide legal advice or blanket vendor approval. |
| `FID-015`, `FID-016`, `FID-025`, `FID-026`, `FID-027`, `FID-029`, `FID-030`, `FID-041`, `FID-042`, `FID-050`, `FID-052`, `FID-053` | Gateway + Fide-Check | Role and use-case classification; youth and formation risk gates; devotional boundary checks; human referral requirements; longitudinal evaluation plan. | Parent, educator, clergy, and pastoral-care review; age and vulnerability criteria; disclosure and consent language; formation-oriented outcome measures. | Youth religious education assistant review; devotional app boundary review; Christian formation assistant pilot with human oversight. | Can evaluate bounded product behavior and stated safeguards. Cannot claim measured spiritual formation, discipleship quality, or replacement of embodied community. |

## First Product Epics

1. **Eval Engine evidence backbone**
   - Ship run manifests, artifact hashes, model/harness metadata, reviewer
     assignments, and confidence-limited evidence cards.
   - Prove it with `FID-002` calibration and one scoped model comparison from
     `FID-001`.

2. **Fide-Check answer and workflow review**
   - Start with citation fidelity, source-support labeling, authority-boundary
     checks, and escalation behavior.
   - Prove it on one RAG answer set and one pastoral-adjacent multi-turn suite.

3. **Lexicon source and claim vocabulary**
   - Define the minimum shared schemas: source type, authority level, claim
     type, support label, risk category, reviewer role, and tradition scope.
   - Prove it by feeding the same vocabulary into Eval Engine reports and
     Fide-Check evidence graphs.

4. **Gateway intake and readiness review**
   - Convert institutional use cases into risk tiers, required evidence,
     reviewer needs, and deployment limits.
   - Prove it through one church, school, ministry, or vendor pilot where the
     output is a readiness review, not a certification badge.

## Evidence Thresholds Before Product Claims

| Claim type | Minimum evidence package |
|---|---|
| Comparative eval result | Run manifest, fixed harness version, model/provider metadata, scored artifacts, uncertainty statement, and public claim boundary. |
| Citation or retrieval check | Versioned corpus, source licensing status, source hashes, retrieval configuration, quote/reference tests, and human spot review. |
| Authority-boundary check | Scenario class, boundary obligations, severe-failure rules, escalation policy, and expert adjudication for contested cases. |
| Readiness review | Use-case scope, risk tier, data handling review, vendor disclosure, required evaluations, monitoring plan, and unresolved gaps. |
| Lexicon or schema release | Named scope, reviewer basis, version history, examples, non-representativeness warning, and revision process. |

## Pilot Selection Rules

Prefer pilots that are narrow, evidence-generating, and institutionally useful:

- A pilot should exercise at least two product lines, such as Eval Engine plus
  Fide-Check, or Gateway plus readiness reviews.
- A pilot should end in a reusable artifact: benchmark fixture, schema, report
  template, reviewer protocol, or readiness package.
- A pilot should include a known non-claim, such as "not a pastoral care
  certification" or "not doctrinal approval."
- A pilot should avoid sensitive live user data unless privacy, consent,
  retention, and redaction controls are already in place.

## Near-Term Product Bets

1. **Christian RAG authority pilot:** use `FID-006`, `FID-028`, `FID-056`,
   `FID-057`, and `FID-062` to build the first Fide-Check citation and
   retrieval review package.
2. **Pastoral-adjacent boundary pilot:** use `FID-003`, `FID-010`, `FID-023`,
   and `FID-059` to produce a severe-failure and escalation readiness check.
3. **Institution readiness pilot:** use `FID-021` and `FID-022` to produce a
   Gateway intake flow, readiness review template, and monitoring checklist.
4. **Reviewer reliability pilot:** use `FID-002` and `FID-011` to decide which
   Eval Engine scores are mature enough for product-facing reports.

## Global Claim Boundary

Fide AI product artifacts can make scoped evidence claims: what was tested, with
which sources and reviewers, under which conditions, and what limits remain.
They should not claim that a model, product, vendor, or institution is generally
"faith-safe," theologically approved, pastorally competent, legally compliant,
or suitable for every community.
