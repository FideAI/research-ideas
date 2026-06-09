# Fide AI Research Ideas

This repository is Fide AI's public research commons: a place to propose,
review, claim, and track research ideas about faith-facing AI systems.

Fide AI studies how AI systems reason, retrieve, and respond in contexts of
theology, moral formation, religious education, family life, ministry workflows,
and pastoral-adjacent care before high-trust communities rely on them. The goal
of this repo is to make that research agenda visible, reviewable, and easy to
join.

The companion website publishes a readable snapshot of these ideas at
`fideai.org/research/calls`. This repository remains the source of truth for the
research backlog, issue discussions, pull requests, and generated JSON feed.

## Current Snapshot

- **55 open research ideas**
- **2 research tracks**
- **4 public research agendas** that group the backlog into shareable research
  campaigns
- **4 public issue paths** for proposing ideas, claiming work, commenting on
  methodology, and volunteering as a reviewer
- **1 generated feed** at `dist/research-ideas.json` for the website and other
  downstream uses

## Who This Is For

- **Churches, ministries, pastors, and Christian leaders** who want AI adoption
  to be evaluated against real pastoral, theological, educational, and
  institutional needs.
- **Parents and educators** who need better evidence about children, tutoring,
  companionship, disclosure, safety, and formation.
- **Theologians, clergy, ministry practitioners, and domain reviewers** who can
  help define responsible boundaries and evaluate outputs.
- **AI researchers, engineers, and evaluation scientists** who can turn ideas
  into benchmarks, harnesses, datasets, scoring protocols, and reproducible
  artifacts.
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
  if your context involves a ministry, family, institution, or sensitive
  workflow that should not start in a public GitHub issue.

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the full contributor guide.

## Research Tracks

| Track | Meaning |
|---|---|
| `christian-church` | Explicitly designed to benefit the Christian church: churches, clergy, Christian educators, ministries, denominations, seminaries, publishers, and Christian families. |
| `broader-faith-safety` | Relevant to faith communities, AI ethics, AI safety, evaluation science, governance, pluralism, or high-trust deployment more broadly, while still fitting under Fide AI's mission. |

## Research Agendas

The website organizes the public calls into four larger agendas. The agenda
pages are not separate sources of truth; they are curated entry points over the
idea briefs in this repository.

| Agenda | Public route | Primary audience | Included ideas |
|---|---|---|---|
| AI, work, meaning, and the common good | `/research/calls/work-meaning` | churches, economists, sociologists, funders | `FID-030`, `FID-033`, `FID-034`, `FID-037`, `FID-038`, `FID-040`, `FID-046`-`FID-055` |
| Pastoral care, spiritual companionship, and formation | `/research/calls/pastoral-formation` | pastors, churches, parents, educators, builders | `FID-003`, `FID-004`, `FID-010`, `FID-015`, `FID-016`, `FID-018`, `FID-025`-`FID-027`, `FID-035`, `FID-041`, `FID-042`, `FID-050`, `FID-052`, `FID-053` |
| Faith-facing AI evaluation infrastructure | `/research/calls/evaluation-infrastructure` | AI researchers, builders, reviewers, funders | `FID-001`-`FID-003`, `FID-006`, `FID-008`, `FID-011`, `FID-012`, `FID-023`, `FID-028`, `FID-044`, `FID-045` |
| Governance, authority, and religious representation | `/research/calls/governance-representation` | church leaders, ministries, safety researchers, interfaith reviewers | `FID-005`-`FID-007`, `FID-009`, `FID-013`, `FID-014`, `FID-017`, `FID-019`-`FID-025`, `FID-028`, `FID-029`, `FID-031`, `FID-032`, `FID-036`, `FID-039`-`FID-044` |

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

The feed currently includes the idea ID, title, status, track, primary need,
summary, why-it-matters excerpt, ways to help, source path, and GitHub URL.

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

## License

This repo is intended for open research reuse.

- Research ideas, documentation, issue templates, and other written materials
  are licensed under [CC BY 4.0](LICENSE-DOCS.md).
- Code, scripts, workflow files, and machine-readable configuration are
  licensed under [Apache 2.0](LICENSE-CODE.md).

See [`LICENSE.md`](LICENSE.md) for the full license summary. Reuse does not
imply endorsement by Fide AI.

## Near-Term Priorities

1. Turn **AI, work, meaning, and the common good** into a field-ready research
   campaign around labor disruption, vocation, church support, household welfare,
   generosity, and access to AI benefits.
2. Turn **pastoral care, spiritual companionship, and formation** into practical
   evaluation protocols for triage, escalation, overvalidation, dependency,
   devotional boundaries, youth formation, and embodied referral.
3. Turn **faith-facing AI evaluation infrastructure** into repeatable public
   benchmarks, reviewer calibration studies, harness comparisons, red-team suites,
   and evidence commons infrastructure.
4. Turn **governance, authority, and religious representation** into standards
   for institutional adoption, source authority, religious omission, persuasion
   boundaries, incident reporting, and cross-faith measurement validity.

## Idea Index

### Christian Church Research

These ideas are explicitly intended to benefit the Christian church.

| ID | Idea | Status | Primary need | Brief |
|---|---|---:|---|---|
| `FID-015` | Sermon, liturgy, and religious teaching generation | `seed` | clergy, educators, source reviewers | [brief](ideas/FID-015-sermon-liturgy-teaching-generation.md) |
| `FID-016` | Youth, religious education, and AI guidance | `seed` | educators, child safety experts, policy reviewers | [brief](ideas/FID-016-youth-religious-education-ai.md) |
| `FID-017` | Agentic ministry and institutional workflow risk | `seed` | agent evaluation, institutional operators | [brief](ideas/FID-017-agentic-ministry-workflows.md) |
| `FID-025` | AI and ecclesial authority | `seed` | ecclesiology, denominational polity, evaluation design | [brief](ideas/FID-025-ai-and-ecclesial-authority.md) |
| `FID-026` | AI prayer and devotional boundaries | `seed` | pastoral theology, liturgy, product review | [brief](ideas/FID-026-ai-prayer-devotional-boundaries.md) |
| `FID-027` | Christian formation over time | `seed` | discipleship, longitudinal study design, HAI research | [brief](ideas/FID-027-christian-formation-over-time.md) |
| `FID-028` | Christian source authority and RAG | `seed` | theological librarianship, RAG evaluation, denominational experts | [brief](ideas/FID-028-christian-source-authority-rag.md) |
| `FID-029` | AI and Christian mission | `seed` | missiology, persuasion safety, interfaith review | [brief](ideas/FID-029-ai-and-christian-mission.md) |
| `FID-030` | AI and Christian anthropology | `seed` | theological anthropology, eval design | [brief](ideas/FID-030-ai-and-christian-anthropology.md) |
| `FID-031` | AI in church governance and discernment | `seed` | church leadership, governance, decision-support evaluation | [brief](ideas/FID-031-ai-in-church-governance-and-discernment.md) |
| `FID-032` | AI-generated Christian media, voice, and deepfakes | `seed` | media ethics, church communications, safety review | [brief](ideas/FID-032-ai-generated-religious-media-and-deepfakes.md) |
| `FID-046` | AI displacement, meaning, and vocation | `seed` | labor economics, pastoral care, vocation, survey design | [brief](ideas/FID-046-ai-displacement-meaning-vocation.md) |
| `FID-047` | Churches as labor-transition support institutions | `seed` | institutional partners, labor transition, social support, field research | [brief](ideas/FID-047-churches-labor-transition-support.md) |
| `FID-048` | AI career guidance and vocational discernment | `seed` | career guidance, pastoral theology, HAI research, product evaluation | [brief](ideas/FID-048-ai-career-guidance-vocational-discernment.md) |
| `FID-049` | Unequal AI access through faith communities | `seed` | access research, community partners, digital literacy, equity | [brief](ideas/FID-049-unequal-ai-access-through-faith-communities.md) |
| `FID-050` | Youth career formation in an AI economy | `seed` | educators, youth ministry, career preparation, longitudinal study design | [brief](ideas/FID-050-youth-career-formation-ai-economy.md) |
| `FID-054` | Church signals of AI-era economic stress | `seed` | church partners, privacy governance, sociology, benevolence and care data | [brief](ideas/FID-054-church-economic-stress-signals.md) |
| `FID-055` | AI disruption, generosity, and benevolence | `seed` | church finance, household welfare, philanthropy, economic sociology | [brief](ideas/FID-055-ai-disruption-generosity-benevolence.md) |

### Broader Faith, Ethics, and Safety Research

These ideas are broader than the Christian church but still fit Fide AI's public
mission.

| ID | Idea | Status | Primary need | Brief |
|---|---|---:|---|---|
| `FID-001` | Faith-facing model comparison platform | `scoping` | eval engineering | [brief](ideas/FID-001-faith-facing-model-comparison-platform.md) |
| `FID-002` | FMG-Bench human calibration and construct validity | `active` | expert reviewers, statistics | [brief](ideas/FID-002-fmg-bench-human-calibration.md) |
| `FID-003` | Held-out multi-turn pastoral pressure tests | `scoping` | scenario design, review | [brief](ideas/FID-003-pastoral-pressure-tests.md) |
| `FID-004` | Relational substitution risk in faith-facing AI | `seed` | theology, UX research | [brief](ideas/FID-004-relational-substitution-risk.md) |
| `FID-005` | Scripture, tradition, and moral-framing interventions | `seed` | eval design, replication | [brief](ideas/FID-005-scripture-tradition-moral-framing.md) |
| `FID-006` | Faith-facing retrieval grounding and citation reliability | `scoping` | RAG evaluation | [brief](ideas/FID-006-retrieval-grounding-citation-reliability.md) |
| `FID-007` | Tradition-specific disagreement and pluralism handling | `seed` | domain experts, rubric design | [brief](ideas/FID-007-tradition-specific-disagreement.md) |
| `FID-008` | Evaluation-awareness and faith-facing honesty tests | `seed` | red-team design | [brief](ideas/FID-008-evaluation-awareness-honesty.md) |
| `FID-009` | Multimodal religious reasoning and sacred imagery | `seed` | multimodal evaluation | [brief](ideas/FID-009-multimodal-religious-reasoning.md) |
| `FID-010` | Human agency, authority, and escalation benchmarks | `scoping` | pastoral/legal/clinical review | [brief](ideas/FID-010-agency-authority-escalation.md) |
| `FID-011` | Reviewer reliability for faith-facing AI evaluation | `scoping` | statistics, reviewer ops | [brief](ideas/FID-011-reviewer-reliability.md) |
| `FID-012` | Optimization pressure and visible-rubric gaming | `seed` | eval science | [brief](ideas/FID-012-visible-rubric-gaming.md) |
| `FID-013` | Religious representation and omission in everyday guidance | `seed` | benchmark design, domain reviewers | [brief](ideas/FID-013-religious-representation-omission.md) |
| `FID-014` | Conversion and proselytization symmetry | `seed` | prompt design, interfaith review | [brief](ideas/FID-014-conversion-proselytization-symmetry.md) |
| `FID-018` | Spiritual companionship, dependency, and overvalidation | `seed` | pastoral care, psychology, HAI research | [brief](ideas/FID-018-spiritual-companionship-dependency.md) |
| `FID-019` | Cross-lingual and minority-faith evaluation | `seed` | multilingual reviewers, dataset design | [brief](ideas/FID-019-cross-lingual-minority-faith-evaluation.md) |
| `FID-020` | Community co-design and faith-AI governance | `seed` | participatory design, institutional partners | [brief](ideas/FID-020-community-co-design-governance.md) |
| `FID-021` | Post-deployment monitoring for faith-facing AI | `seed` | monitoring design, privacy review | [brief](ideas/FID-021-post-deployment-monitoring-faith-ai.md) |
| `FID-022` | Procurement and readiness standards for faith institutions | `seed` | institutional policy, legal review | [brief](ideas/FID-022-procurement-readiness-standards.md) |
| `FID-023` | Faith-facing red-team suite | `seed` | red-team design, safety reviewers | [brief](ideas/FID-023-faith-facing-red-team-suite.md) |
| `FID-024` | Faith-AI incident database | `seed` | taxonomy design, reporting governance | [brief](ideas/FID-024-faith-ai-incident-database.md) |
| `FID-051` | Economic disruption and religious meaning-seeking | `seed` | sociology of religion, labor economics, privacy-preserving measurement, aggregate usage analysis | [brief](ideas/FID-051-economic-disruption-religious-meaning-seeking.md) |
| `FID-052` | AI as private first counsel during economic stress | `seed` | pastoral care, HAI research, mental health boundaries, privacy-preserving measurement | [brief](ideas/FID-052-ai-as-private-first-counsel.md) |
| `FID-053` | AI as bridge or substitute for faith community | `seed` | sociology of religion, pastoral care, UX research, aggregate and field measurement | [brief](ideas/FID-053-ai-bridge-or-substitute-for-faith-community.md) |

## Claims Discipline

Research ideas are hypotheses and collaboration invitations. They are not Fide
AI findings. A public claim requires a separate reviewed report, benchmark
release, paper, or evidence artifact with methods, limitations, and named
evaluation conditions.

Read [`CLAIMS_POLICY.md`](CLAIMS_POLICY.md) before citing, summarizing, or
promoting an idea from this repository.
