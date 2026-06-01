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

- **32 open research ideas**
- **2 research tracks**
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
ideas/                         # One Markdown brief per research idea
templates/                     # Reusable templates for briefs and claims
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

## Near-Term Priorities

1. Make `FID-001` concrete enough to support repeatable model and harness
   comparisons.
2. Complete `FID-002` so FMG-Bench claims rest on calibrated human evidence.
3. Scope `FID-003`, `FID-006`, and `FID-010` as deployment-like pressure suites
   beyond single-turn benchmark scoring.
4. Advance `FID-025`, `FID-026`, `FID-027`, and `FID-028` as explicitly
   church-serving research directions.
5. Advance `FID-013`, `FID-014`, and `FID-018` as bridges between
   religion-and-AI research, bias, persuasion, and human-AI interaction safety.
6. Scope `FID-017`, `FID-021`, and `FID-023` as bridges to frontier safety work
   on agents, monitoring, red-teaming, and evaluation awareness.

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

## Claims Discipline

Research ideas are hypotheses and collaboration invitations. They are not Fide
AI findings. A public claim requires a separate reviewed report, benchmark
release, paper, or evidence artifact with methods, limitations, and named
evaluation conditions.

Read [`CLAIMS_POLICY.md`](CLAIMS_POLICY.md) before citing, summarizing, or
promoting an idea from this repository.
