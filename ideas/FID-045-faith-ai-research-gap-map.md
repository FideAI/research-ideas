# FID-045: Faith-AI Research Gap Map and Evidence Commons

Status: `seed`

Track: `broader-faith-safety`

Primary need: literature mapping, research infrastructure, funder guidance

## Question

What does the current AI ethics, safety, fairness, HCI, and evaluation
literature actually study about religion and faith, what does it omit, and how
should Fide AI maintain a living evidence map that guides future research rather
than duplicating or overstating existing work?

## Why It Matters

Recent public claims note that religious bias appears underexamined relative to
other AI bias topics. Fide AI needs a disciplined way to verify such claims,
track the field, identify neglected communities and methods, and help funders,
researchers, and faith institutions see where new work is most needed. The first
repo-native artifacts should be `research/sources.yaml`,
`research/source-tags.yaml`, `research/reviews/`, and the reusable
`templates/source-note.md` annotation template.

## Hypothesis

Existing AI-and-religion research will be unevenly distributed: concentrated in
stereotype detection, English-language prompts, a few major religions, and
single-turn model evaluations, with less work on longitudinal formation,
low-resource languages, governance, product deployment, pastoral-adjacent care,
and community-led evaluation.

## Proposed Method

- Start with a first milestone of a 50 to 100 paper annotated bibliography and
  a one-page map of the top neglected research clusters.
- Maintain `research/sources.yaml` as the canonical structured source registry,
  with `research/source-tags.yaml` as the controlled vocabulary.
- Build a living bibliography of faith, religion, spirituality, and AI research
  across AI safety, fairness, HCI, NLP, sociology, theology, education, and law.
- Code papers by religion/tradition, language, geography, task type, evaluation
  method, stakeholder involvement, model type, and deployment context.
- Compare religious-bias coverage with better-studied bias dimensions while
  noting differences in construct and search methodology.
- Publish periodic gap reports and connect each gap to Fide AI research ideas,
  datasets, reviewer needs, and collaboration opportunities.
- Add short notes in `research/reviews/` for high-priority reviewed sources using
  `templates/source-note.md`.

## Needed Controls

- Avoid relying on keyword searches that miss adjacent work or overcount weak
  mentions.
- Include non-English and non-Western scholarship where possible.
- Distinguish faith-facing AI, religion as demographic attribute, religious
  content moderation, spiritual care, and theological technology ethics.
- Avoid using a gap map as proof that any single institution owns the field.

## Outputs

- Initial annotated bibliography and one-page neglected-cluster map.
- Public faith-AI bibliography and taxonomy.
- Lightweight evidence-entry schema for papers, datasets, reports, and tools.
- Annual or semiannual research gap report.
- Evidence map linking literature clusters to Fide AI idea files.
- Funder and collaborator brief on neglected research areas.

## Open Questions

- Which search strategy best captures religious and spiritual AI research across
  disciplines?
- How should gaps be prioritized: by stakeholder harm, scientific tractability,
  neglectedness, or institutional readiness?
- What metadata can be public without misrepresenting communities or authors?
- Should the evidence commons live as a repo artifact, website page, Zotero
  library, JSON feed, or periodic report, and what update cadence is realistic?

## Ways to Help

- Contribute papers, datasets, and non-English sources.
- Review taxonomy labels and coding criteria.
- Build literature-search and evidence-map tooling.
- Connect funders and researchers to neglected question areas.

## Public Claim Boundary

This work can summarize visible literature and identify likely gaps. It cannot
prove that all relevant work has been found or that publication counts alone
measure social importance.
