# Research Evidence Commons

This directory tracks papers, benchmarks, datasets, reports, policy documents,
product documentation, and other sources that are relevant to Fide AI's research
ideas. It is meant to complement, not replace, `research-landscape.md`:

- `research-landscape.md` is the narrative map of the field.
- `research/sources.yaml` is the canonical structured registry of sources.
- `research/source-tags.yaml` is the controlled vocabulary for source tags.
- `research/reviews/*.md` contains optional short annotations for especially
  important sources.

The goal is to make prior work easy to find, connect sources to Fide research
ideas, and keep public claims grounded in reviewed evidence.

## Files

```text
research/
  README.md              # This guide
  sources.yaml           # Canonical structured source registry
  source-tags.yaml       # Controlled vocabulary for relevance tags
  funding-inspired-call-map.md
                         # External funding priorities that informed selected calls
  reviews/               # Short annotations for selected sources
templates/
  source-note.md         # Template for adding a reviewed source note
```

## Source Status Vocabulary

| Status | Meaning |
|---|---|
| `candidate` | Someone found the source, but Fide has not yet reviewed it for relevance or quality. |
| `to-review` | The source appears relevant enough to review soon. |
| `reviewed` | A contributor has read and summarized the source. |
| `core` | A foundational source for Fide AI's research agenda or infrastructure. |
| `superseded` | Useful historically, but replaced by newer work. |
| `excluded` | Considered and intentionally not used; include a reason in notes. |

Statuses are about Fide AI's internal review process, not about whether the
source is true, peer-reviewed, or endorsed.

## Source Types

Use one of these values in `sources.yaml` unless a new type is added to this
README and `source-tags.yaml`:

- `paper`
- `preprint`
- `benchmark`
- `dataset`
- `code`
- `report`
- `policy`
- `book`
- `article`
- `theology`
- `product-doc`
- `incident`
- `website`

## `sources.yaml` Schema

Each source should include these fields:

```yaml
- id: short-stable-id
  title: "Source title"
  authors:
    - Author or organization name
  year: 2026
  type: preprint
  venue: arXiv
  url: https://example.org/source
  status: to-review
  relevance:
    - benchmark-validity
  related_ideas:
    - FID-044
  summary: >
    One or two sentences describing why this source matters for Fide AI.
```

Optional fields include:

```yaml
doi:
arxiv:
publisher:
repository_url:
dataset_url:
code_url:
bibtex_key:
key_claims:
limitations:
methods:
stakeholders:
traditions:
languages:
geographies:
notes_path:
added_by:
added_at:
last_reviewed_at:
```

## Adding a Source

1. Add the source to `research/sources.yaml`.
2. Use an existing tag from `research/source-tags.yaml`; add a new tag only when
   the existing vocabulary does not fit.
3. Link the source to relevant research ideas with `related_ideas`.
4. If the source is important enough to summarize, copy
   `templates/source-note.md` into `research/reviews/` and set `notes_path`.
5. Keep summaries cautious. Do not treat a benchmark score, press release, or
   single paper as a complete answer to a research question.

## Relationship to Idea Files

The source registry is the default place to link papers to idea IDs. Individual
idea files may add a `Related Sources` section later when an idea moves into
`scoping`, `active`, or publication work, but seed ideas do not need embedded
bibliographies.

## Funding-Inspired Call Map

[`funding-inspired-call-map.md`](funding-inspired-call-map.md) records how
selected external funding priorities informed a small set of Fide AI research
questions. It is an agenda map, not a source registry, funder endorsement, or
statement of grant eligibility. Keep new calls mission-led and evidence-ready;
do not reshape an idea around a funding category that is not a genuine fit.

## Public Claim Boundaries

- `sources.yaml` is an evidence map, not an endorsement list.
- Source inclusion does not mean Fide AI accepts every claim in the source.
- Publication counts do not by themselves prove social importance or neglect.
- Preprints, press releases, dashboards, and product documentation should be
  clearly labeled by type and status.
