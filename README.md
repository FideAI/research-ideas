# Fide AI Research Ideas

This repository is Fide AI's public research commons: a place to propose,
review, claim, and track research ideas about trustworthy AI and its use in
high-trust domains.

Calls are organized first by the problem they investigate, including evaluation
science, agent systems, grounding, governance, work, human agency, and emerging
risks. Application-domain metadata then identifies where the question should be
studied. Faith and religious life is one domain among several, and a specific
religious or institutional context is named only when it matters to the method.

The companion website publishes a readable snapshot of these ideas at
`fideai.org/research/calls`. This repository remains the source of truth for the
research backlog, issue discussions, pull requests, and generated JSON feed.

## Public Scope

Keep this repository focused on research ideas, public methodology, source
reviews, collaboration needs, and claim boundaries. Do not include
product-specific plans, customer or partner work, private GTM strategy, or
company-internal implementation commitments here.

## Current Snapshot

- **86 open research ideas**
- **9 research areas** organized around the question being investigated
- **11 application domains** spanning cross-domain work and consequential settings
- **4 public issue paths** for proposing ideas, claiming work, commenting on
  methodology, and volunteering as a reviewer
- **1 generated feed** at `dist/research-ideas.json` for the website and other
  downstream uses

## Who This Is For

- **AI labs, product teams, and high-trust organizations** working on agent
  systems, evaluation, deployment assurance, and accountable human oversight.
- **Organizations in care, education, public service, workplaces, civil society,
  and faith** that need evidence grounded in their actual decisions and duties.
- **AI researchers, engineers, and evaluation scientists** who can turn ideas
  into benchmarks, harnesses, datasets, scoring protocols, and reproducible
  artifacts.
- **Domain experts and affected communities** who can define legitimate
  authority, responsible boundaries, real failure cases, and review criteria.
- **Funders and institutions** who want to support public-interest evaluation
  infrastructure, reviewer panels, field pilots, and standards.

## How to Participate

Use the lowest-friction path that fits your contribution:

- **Propose a new idea:** open a `Research idea` issue.
- **Improve an existing idea:** comment on the issue or open a pull request
  against the relevant file in `ideas/`.
- **Claim or help with an idea:** open a `Claim or help with an idea` issue.
- **Volunteer as a reviewer:** open a `Reviewer interest` issue.
- **Suggest controls or related work:** open a `Comment on methodology` issue.
- **Start privately first:** use the contact path on `fideai.org/participate`
  if your context involves sensitive personal, institutional, community, or
  operational information that should not start in a public GitHub issue.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full contributor guide.

## Research Taxonomy

Every call records a primary research area, any additional areas it materially
contributes to, and one or more application domains. This separates the problem
being investigated from the setting where it is studied. Specific Christian,
religious, institutional, or sectoral context remains visible in the brief when
it affects sources, authority, methods, interpretation, or claim boundaries.

The canonical taxonomy is maintained in `research/taxonomy.json` and validated
when the public feed is built.

| Research area | Organizing question | Public route |
|---|---|---|
| Frontier capabilities and emerging risks | What new risks appear as systems become more capable and autonomous? | `/research-areas#frontier-capabilities` |
| Agent alignment and runtime assurance | Does an agent remain aligned while it plans, uses tools, and acts? | `/research-areas#agent-alignment` |
| Evaluation science and technical assurance | Can the evidence support the decision people want to make? | `/research-areas#evaluation-science` |
| Grounding, truthfulness, and epistemic integrity | Will the system use the right source and represent it faithfully? | `/research-areas#grounding-truthfulness` |
| Human dignity, moral agency, and formation | What judgment, habits, and relationships does AI use shape? | `/research-areas#human-agency-formation` |
| Faith and religious life | How should AI behave around religious sources, authority, practice, and community? | `/research-areas#faith-religious-life` |
| Safety in high-trust domains | What does trustworthy behavior require in a consequential setting? | `/research-areas#high-trust-domains` |
| Stewardship, governance, and institutional readiness | Which safeguards and authority structures should govern deployment? | `/research-areas#governance-readiness` |
| Work, vocation, and the common good | How does advanced AI change useful work and human contribution? | `/research-areas#work-common-good` |

`FID-075` through `FID-086` extend the commons across cybersecurity, legal and
justice, finance, healthcare, education, public service, workplaces, and
cross-domain measurement. `FID-074` remains the general runtime-assurance frame,
while calls such as `FID-017` investigate related questions in a specific domain.
The shared research areas make methodological relationships visible without
turning any one setting into the boundary of the program.

## Status Vocabulary

| Status | Public label | Meaning |
|---|---|---|
| `seed` | Open question | A promising question or hypothesis, not yet scoped. |
| `scoping` | Being shaped | Being turned into a protocol, dataset, or collaborator plan. |
| `ready-for-collaboration` | Needs contributors | Clear enough for external contributors to help. |
| `active` | In progress | Currently being executed or written up. |
| `paused` | Paused | Valid idea, but blocked by capacity, funding, data, or review needs. |
| `completed` | Completed | Published, released, or superseded by a finished artifact. |
| `retired` | Retired | No longer a good fit or invalidated by evidence. |

## Repository Structure

```text
README.md                     # Public orientation and idea index
CONTRIBUTING.md                # Detailed contributor and maintainer guide
CLAIMS_POLICY.md               # How to avoid overstating research ideas
CODE_OF_CONDUCT.md             # Community expectations
research-landscape.md          # Broader question families and inspiration
research/                       # Structured evidence commons and source notes
research/taxonomy.json          # Canonical research areas and application domains
research/formal-verification-faith-facing-ai.md
                                # Program note for the formal verification lane
research/funding-inspired-call-map.md
                                # How funding priorities informed selected calls
ideas/                         # One Markdown brief per research idea
templates/                     # Reusable templates for briefs, claims, and source notes
.github/ISSUE_TEMPLATE/        # Public issue paths
.github/PULL_REQUEST_TEMPLATE.md
.github/workflows/build-feed.yml
scripts/build-feed.mjs         # Builds dist/research-ideas.json
dist/research-ideas.json       # Generated public feed used by the website
```

## Website Feed

The Fide AI website consumes `dist/research-ideas.json` at build time. When an
idea brief changes, run:

```bash
npm run build:feed
```

Then include both the changed Markdown files and the updated
`dist/research-ideas.json` in the pull request.

The feed includes the idea ID, title, status, primary and additional research
areas, application domains, optional specific context, primary need, summary,
methods, controls, outputs, open questions, claim boundaries, source path, and
GitHub URL.

## Research Evidence Commons

The `research/` directory maintains a structured evidence commons for papers,
benchmarks, datasets, reports, policy documents, theology sources, product
documentation, and other prior work that should inform Fide AI research.

- `research/sources.yaml` is the canonical source registry.
- `research/source-tags.yaml` defines controlled tags for source relevance.
- `research/reviews/` contains short notes for reviewed high-priority sources.
- `templates/source-note.md` is the template for adding a source review.

Use the evidence commons to connect prior work to idea IDs without overloading
individual seed idea files with bibliographies. See `research/README.md` for the
source schema, status vocabulary, contribution workflow, and claim boundaries.

For a disciplined map of selected external funding priorities to researchable
questions, see
[`research/funding-inspired-call-map.md`](research/funding-inspired-call-map.md).

## License

This repo is intended for open research reuse.

- Research ideas, documentation, issue templates, and other written materials
  are licensed under [CC BY 4.0](LICENSE-DOCS.md).
- Code, scripts, workflow files, and machine-readable configuration are
  licensed under [Apache 2.0](LICENSE-CODE.md).

See [`LICENSE.md`](LICENSE.md) for the full license summary. Reuse does not
imply endorsement by Fide AI.

## Near-Term Priorities

1. Develop rigorous **cybersecurity and incident-investigation research** on
   capability, authorization, containment, operational evidence, and independent
   reconstruction of agent behavior.
2. Develop **agent alignment and runtime assurance** methods for operational
   traces, policy adherence, delegation, intervention, recovery, and privacy.
3. Strengthen **evaluation science and technical assurance** through construct
   validity, reviewer calibration, benchmark integrity, red teaming, and
   full-system evaluation.
4. Advance **grounding, truthfulness, and epistemic integrity** through source
   delegation, citation fidelity, provenance, verified retrieval, and bounded
   claims.
5. Develop **governance and institutional readiness** methods for procurement,
   accountability, incident reporting, authority, and deployment decisions.
6. Study **work, human agency, and formation** as AI changes professional
   responsibility, economic participation, relationships, judgment, and care.
7. Continue rigorous **faith and religious-life research** on religious sources,
   spiritual authority, pastoral boundaries, formation, pluralism, and
   institution-specific deployment.

## Idea Index

This index is generated from each call's primary research area. Calls may also
belong to additional areas and application domains recorded in their briefs.

<!-- GENERATED_IDEA_INDEX_START -->
### 01 Frontier Capabilities and Emerging Risks

What new risks appear as systems become more capable and autonomous?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-009` | Multimodal Religious Reasoning and Sacred Imagery | `seed` | Faith and religious life | [brief](ideas/FID-009-multimodal-religious-reasoning.md) |
| `FID-032` | AI-Generated Christian Media, Voice, and Deepfakes | `seed` | Faith and religious life | [brief](ideas/FID-032-ai-generated-religious-media-and-deepfakes.md) |
| `FID-039` | Disarming AI Language in Faith, Conflict, and Peacebuilding | `seed` | Faith and religious life, Public sector and civic life, Civil society and nonprofits | [brief](ideas/FID-039-disarming-ai-language-peacebuilding.md) |
| `FID-043` | AI-Mediated Faith Persuasion and Autonomy | `seed` | Faith and religious life | [brief](ideas/FID-043-ai-mediated-faith-persuasion-and-autonomy.md) |
| `FID-064` | Collective Intelligence and Communal Discernment Under AI Mediation | `seed` | Cross-domain, Civil society and nonprofits | [brief](ideas/FID-064-collective-intelligence-communal-discernment.md) |
| `FID-067` | Religious Institutional Futures in an AI-Mediated Society | `seed` | Faith and religious life, Civil society and nonprofits | [brief](ideas/FID-067-religious-institutional-futures-ai.md) |
| `FID-072` | Religious Framing and Model Self-Report Stability | `scoping` | Faith and religious life | [brief](ideas/FID-072-religious-framing-model-self-reports.md) |
| `FID-073` | Religious Accounts of Digital Moral Status and AI Welfare | `seed` | Faith and religious life | [brief](ideas/FID-073-religious-accounts-digital-moral-status.md) |
| `FID-075` | Cybersecurity Capabilities and Whole-System Risk | `seed` | Cybersecurity | [brief](ideas/FID-075-cybersecurity-capabilities-and-system-risk.md) |

### 02 Agent Alignment and Runtime Assurance

Does an agent remain aligned while it plans, uses tools, and acts?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-017` | Agentic Ministry and Institutional Workflow Risk | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-017-agentic-ministry-workflows.md) |
| `FID-021` | Post-Deployment Monitoring for Faith-Facing AI | `seed` | Faith and religious life, Health and care, Workplace and enterprise | [brief](ideas/FID-021-post-deployment-monitoring-faith-ai.md) |
| `FID-024` | Faith-AI Incident Database | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-024-faith-ai-incident-database.md) |
| `FID-069` | Verifiable Delegation and Revocation in Multi-Agent Networks | `seed` | Cross-domain, Public sector and civic life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-069-verifiable-delegation-revocation-multi-agent-networks.md) |
| `FID-070` | Contextual Integrity and Prompt-Injection Resilience for Faith-Facing Agents | `seed` | Faith and religious life, Workplace and enterprise | [brief](ideas/FID-070-contextual-integrity-prompt-injection-faith-facing-agents.md) |
| `FID-071` | Confidential Agent Memory and Cross-Context Disclosure | `seed` | Cross-domain, Public sector and civic life, Workplace and enterprise | [brief](ideas/FID-071-confidential-agent-memory-cross-context-disclosure.md) |
| `FID-074` | Agent Alignment and Runtime Assurance | `scoping` | Cross-domain, Public sector and civic life, Workplace and enterprise | [brief](ideas/FID-074-agent-alignment-runtime-assurance.md) |
| `FID-076` | Authorization Boundaries and AI Control in Cybersecurity | `seed` | Cybersecurity, Cross-domain | [brief](ideas/FID-076-cybersecurity-authority-and-control.md) |
| `FID-077` | Independent Agent Incident Investigation and Evidence Sufficiency | `seed` | Cybersecurity, Workplace and enterprise, Cross-domain | [brief](ideas/FID-077-independent-agent-incident-investigation.md) |
| `FID-080` | Enterprise Agent Accountability in Consequential Workflows | `seed` | Workplace and enterprise | [brief](ideas/FID-080-enterprise-agent-accountability.md) |

### 03 Evaluation Science and Technical Assurance

Can the evidence support the decision people want to make?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-001` | Faith-Facing Model Comparison Platform | `scoping` | Faith and religious life | [brief](ideas/FID-001-faith-facing-model-comparison-platform.md) |
| `FID-002` | Validating Human and AI Judgments of Faith-Facing Systems | `active` | Faith and religious life | [brief](ideas/FID-002-fmg-bench-human-calibration.md) |
| `FID-003` | Held-Out Multi-Turn Pastoral Pressure Tests | `scoping` | Faith and religious life, Health and care, Education and youth | [brief](ideas/FID-003-pastoral-pressure-tests.md) |
| `FID-008` | Evaluation-Awareness and Faith-Facing Honesty Tests | `seed` | Faith and religious life | [brief](ideas/FID-008-evaluation-awareness-honesty.md) |
| `FID-011` | Reviewer Reliability for Faith-Facing AI Evaluation | `scoping` | Faith and religious life | [brief](ideas/FID-011-reviewer-reliability.md) |
| `FID-012` | Optimization Pressure and Visible-Rubric Gaming | `seed` | Cross-domain, Workplace and enterprise | [brief](ideas/FID-012-visible-rubric-gaming.md) |
| `FID-023` | Faith-Facing Red-Team Suite | `seed` | Faith and religious life, Workplace and enterprise | [brief](ideas/FID-023-faith-facing-red-team-suite.md) |
| `FID-044` | Cross-Faith Benchmark Validity and Measurement Design | `scoping` | Faith and religious life | [brief](ideas/FID-044-cross-faith-benchmark-validity.md) |
| `FID-045` | Faith-AI Research Gap Map and Evidence Commons | `seed` | Faith and religious life | [brief](ideas/FID-045-faith-ai-research-gap-map.md) |
| `FID-078` | When Trustworthiness Evaluations Transfer Across Domains | `seed` | Cross-domain | [brief](ideas/FID-078-cross-domain-evaluation-validity.md) |
| `FID-079` | Presuppositions, Disagreement, and Evaluation Judgment | `seed` | Cross-domain | [brief](ideas/FID-079-presuppositions-and-evaluation-judgment.md) |

### 04 Grounding, Truthfulness, and Epistemic Integrity

Will the system use the right source and represent it faithfully?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-005` | Scripture, Tradition, and Moral-Framing Interventions | `seed` | Faith and religious life | [brief](ideas/FID-005-scripture-tradition-moral-framing.md) |
| `FID-006` | Faith-Facing Retrieval Grounding and Citation Reliability | `scoping` | Faith and religious life | [brief](ideas/FID-006-retrieval-grounding-citation-reliability.md) |
| `FID-007` | Tradition-Specific Disagreement and Pluralism Handling | `seed` | Faith and religious life | [brief](ideas/FID-007-tradition-specific-disagreement.md) |
| `FID-013` | Religious Representation and Omission in Everyday Guidance | `seed` | Faith and religious life | [brief](ideas/FID-013-religious-representation-omission.md) |
| `FID-014` | Conversion and Proselytization Symmetry | `seed` | Faith and religious life | [brief](ideas/FID-014-conversion-proselytization-symmetry.md) |
| `FID-019` | Cross-Lingual and Minority-Faith Evaluation | `seed` | Faith and religious life, Education and youth | [brief](ideas/FID-019-cross-lingual-minority-faith-evaluation.md) |
| `FID-028` | Christian Source Authority and RAG | `seed` | Faith and religious life | [brief](ideas/FID-028-christian-source-authority-rag.md) |
| `FID-036` | Truth as a Common Good in Christian AI Communication | `seed` | Faith and religious life | [brief](ideas/FID-036-truth-common-good-communication.md) |
| `FID-056` | Formal Verification for Sacred Text Fidelity | `active` | Faith and religious life | [brief](ideas/FID-056-formal-verification-sacred-text-fidelity.md) |
| `FID-057` | Proof-Carrying Citations for Faith-Facing AI | `seed` | Faith and religious life | [brief](ideas/FID-057-proof-carrying-citations-faith-ai.md) |
| `FID-058` | Tradition-Specific Constraint Formalization | `seed` | Faith and religious life | [brief](ideas/FID-058-tradition-specific-constraint-formalization.md) |
| `FID-059` | Authority-Boundary Verification for Pastoral-Adjacent AI | `seed` | Faith and religious life | [brief](ideas/FID-059-authority-boundary-verification-pastoral-adjacent-ai.md) |
| `FID-060` | Cross-Faith Sacred Text and Source Schema | `seed` | Faith and religious life | [brief](ideas/FID-060-cross-faith-sacred-text-source-schema.md) |
| `FID-061` | Theological Contradiction and Entailment Stress Tests | `seed` | Faith and religious life | [brief](ideas/FID-061-theological-contradiction-entailment-stress-tests.md) |
| `FID-062` | Verified Retrieval Pipelines for Faith-Facing RAG | `seed` | Faith and religious life | [brief](ideas/FID-062-verified-retrieval-pipelines-faith-facing-rag.md) |
| `FID-063` | Human-Reviewer-to-Formal-Spec Translation | `seed` | Faith and religious life | [brief](ideas/FID-063-human-reviewer-to-formal-spec-translation.md) |
| `FID-081` | Legal Evidence, Source Authority, and Appropriate Deference | `seed` | Legal and justice | [brief](ideas/FID-081-legal-evidence-and-authority.md) |

### 05 Human Dignity, Moral Agency, and Formation

What judgment, habits, and relationships does AI use shape?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-004` | Relational Substitution Risk in Faith-Facing AI | `seed` | Faith and religious life | [brief](ideas/FID-004-relational-substitution-risk.md) |
| `FID-010` | Human Agency, Authority, and Escalation Benchmarks | `scoping` | Faith and religious life, Health and care | [brief](ideas/FID-010-agency-authority-escalation.md) |
| `FID-016` | Youth, Religious Education, and AI Guidance | `seed` | Faith and religious life, Education and youth, Families and households | [brief](ideas/FID-016-youth-religious-education-ai.md) |
| `FID-018` | Spiritual Companionship, Dependency, and Overvalidation | `seed` | Faith and religious life, Health and care, Families and households | [brief](ideas/FID-018-spiritual-companionship-dependency.md) |
| `FID-026` | AI Prayer and Devotional Boundaries | `seed` | Faith and religious life, Families and households | [brief](ideas/FID-026-ai-prayer-devotional-boundaries.md) |
| `FID-027` | Christian Formation Over Time | `seed` | Faith and religious life, Education and youth, Families and households | [brief](ideas/FID-027-christian-formation-over-time.md) |
| `FID-030` | AI and Christian Anthropology | `seed` | Faith and religious life | [brief](ideas/FID-030-ai-and-christian-anthropology.md) |
| `FID-035` | Digital Sobriety and AI Non-Use Recommendations | `seed` | Faith and religious life, Families and households | [brief](ideas/FID-035-digital-sobriety-ai-non-use.md) |
| `FID-038` | Non-Calculability, Forgiveness, and Predictive Profiling | `seed` | Cross-domain, Public sector and civic life | [brief](ideas/FID-038-non-calculability-forgiveness-profiling.md) |
| `FID-041` | Religious Salience, Personalization, and User Expectations | `seed` | Faith and religious life, Education and youth, Families and households | [brief](ideas/FID-041-religious-salience-personalization.md) |
| `FID-050` | Youth Career Formation in an AI Economy | `seed` | Faith and religious life, Education and youth, Workplace and enterprise, Families and households | [brief](ideas/FID-050-youth-career-formation-ai-economy.md) |
| `FID-052` | AI as Private First Counsel During Economic Stress | `seed` | Faith and religious life, Health and care, Workplace and enterprise, Families and households | [brief](ideas/FID-052-ai-as-private-first-counsel.md) |
| `FID-053` | AI as Bridge or Substitute for Faith Community | `seed` | Faith and religious life, Health and care, Workplace and enterprise, Families and households | [brief](ideas/FID-053-ai-bridge-or-substitute-for-faith-community.md) |
| `FID-068` | Christian Practices for AI-Era Youth Discernment | `seed` | Faith and religious life, Education and youth, Families and households | [brief](ideas/FID-068-christian-practices-youth-ai-discernment.md) |
| `FID-084` | Learning, Agency, and Relationships in AI-Assisted Education | `seed` | Education and youth, Families and households | [brief](ideas/FID-084-learning-agency-and-family-contexts.md) |

### 06 Faith and Religious Life

How should AI behave around religious sources, authority, practice, and community?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-015` | Sermon, Liturgy, and Religious Teaching Generation | `seed` | Faith and religious life | [brief](ideas/FID-015-sermon-liturgy-teaching-generation.md) |
| `FID-029` | AI and Christian Mission | `seed` | Faith and religious life | [brief](ideas/FID-029-ai-and-christian-mission.md) |

### 07 Safety in High-Trust Domains

What does trustworthy behavior require in a consequential setting?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-042` | Clergy and Spiritual-Leader Referral Parity | `seed` | Faith and religious life, Health and care | [brief](ideas/FID-042-clergy-spiritual-leader-referral-parity.md) |
| `FID-082` | Financial Agent Authorization and Transaction Integrity | `seed` | Finance, Workplace and enterprise | [brief](ideas/FID-082-financial-agent-transaction-integrity.md) |
| `FID-083` | Healthcare Evidence, Escalation, and Human Control | `seed` | Health and care | [brief](ideas/FID-083-healthcare-evidence-and-escalation.md) |

### 08 Stewardship, Governance, and Institutional Readiness

Which safeguards and authority structures should govern deployment?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-020` | Community Co-Design and Faith-AI Governance | `seed` | Faith and religious life, Civil society and nonprofits | [brief](ideas/FID-020-community-co-design-governance.md) |
| `FID-022` | Procurement and Readiness Standards for Faith Institutions | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-022-procurement-readiness-standards.md) |
| `FID-025` | AI and Ecclesial Authority | `seed` | Faith and religious life | [brief](ideas/FID-025-ai-and-ecclesial-authority.md) |
| `FID-031` | AI in Church Governance and Discernment | `seed` | Faith and religious life, Civil society and nonprofits | [brief](ideas/FID-031-ai-in-church-governance-and-discernment.md) |
| `FID-033` | Faith-Community Data Stewardship and the Common Good | `seed` | Faith and religious life, Civil society and nonprofits | [brief](ideas/FID-033-faith-community-data-common-good.md) |
| `FID-034` | AI Supply-Chain Dignity and Faith-Institution Procurement | `seed` | Faith and religious life, Public sector and civic life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-034-ai-supply-chain-dignity.md) |
| `FID-040` | AI Power Concentration and Subsidiarity Benchmarks | `seed` | Faith and religious life, Public sector and civic life, Civil society and nonprofits | [brief](ideas/FID-040-ai-power-subsidiarity-benchmarks.md) |
| `FID-065` | AI, Local Knowledge, and Faith-Based Civil Society | `seed` | Faith and religious life, Civil society and nonprofits | [brief](ideas/FID-065-ai-local-knowledge-faith-civil-society.md) |
| `FID-066` | AI Gatekeepers, Conscience, and Associational Pluralism | `seed` | Faith and religious life, Public sector and civic life, Civil society and nonprofits | [brief](ideas/FID-066-ai-conscience-associational-pluralism.md) |
| `FID-085` | Contestability and Recourse in AI-Mediated Public Services | `seed` | Public sector and civic life, Civil society and nonprofits | [brief](ideas/FID-085-public-service-contestability-and-recourse.md) |

### 09 Work, Vocation, and the Common Good

How does advanced AI change useful work and human contribution?

| ID | Idea | Status | Application domains | Brief |
|---|---|---:|---|---|
| `FID-037` | AI, Work, Vocation, and Ministry Labor Dignity | `seed` | Faith and religious life, Workplace and enterprise | [brief](ideas/FID-037-ai-work-vocation-ministry.md) |
| `FID-046` | AI Displacement, Meaning, and Vocation | `seed` | Faith and religious life, Workplace and enterprise, Families and households | [brief](ideas/FID-046-ai-displacement-meaning-vocation.md) |
| `FID-047` | Churches as Labor-Transition Support Institutions | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-047-churches-labor-transition-support.md) |
| `FID-048` | AI Career Guidance and Vocational Discernment | `seed` | Faith and religious life, Workplace and enterprise, Families and households | [brief](ideas/FID-048-ai-career-guidance-vocational-discernment.md) |
| `FID-049` | Unequal AI Access Through Faith Communities | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-049-unequal-ai-access-through-faith-communities.md) |
| `FID-051` | Economic Disruption and Religious Meaning-Seeking | `seed` | Faith and religious life, Workplace and enterprise, Families and households | [brief](ideas/FID-051-economic-disruption-religious-meaning-seeking.md) |
| `FID-054` | Church Signals of AI-Era Economic Stress | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits | [brief](ideas/FID-054-church-economic-stress-signals.md) |
| `FID-055` | AI Disruption, Generosity, and Benevolence | `seed` | Faith and religious life, Workplace and enterprise, Civil society and nonprofits, Families and households | [brief](ideas/FID-055-ai-disruption-generosity-benevolence.md) |
| `FID-086` | Workplace AI, Durable Skills, and Worker Agency | `seed` | Workplace and enterprise, Families and households | [brief](ideas/FID-086-workplace-ai-skills-and-worker-agency.md) |
<!-- GENERATED_IDEA_INDEX_END -->
## Claims Discipline

Research ideas are hypotheses and collaboration invitations. They are not Fide
AI findings. A public claim requires a separate reviewed report, benchmark
release, paper, or evidence artifact with methods, limitations, and named
evaluation conditions.

Read [`CLAIMS_POLICY.md`](CLAIMS_POLICY.md) before citing, summarizing, or
promoting an idea from this repository.
