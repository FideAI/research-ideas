# Contributing to Fide AI Research Ideas

Fide AI welcomes public research ideas, methodology comments, replication plans,
reviewer interest, implementation help, and institutional use cases.

This repository is a research backlog, not a publication venue. Ideas here are
hypotheses and collaboration invitations until a separate report, benchmark
release, paper, or evidence artifact is published with methods, limitations, and
evaluation conditions.

## Good First Paths

Choose the contribution path that matches what you know or can offer:

| Contributor | Good first contribution |
|---|---|
| Pastor, ministry leader, or church operator | Share a real workflow, pastoral boundary, adoption question, or escalation concern. |
| Parent or educator | Share a family, school, youth ministry, tutoring, safety, disclosure, or formation concern. |
| Theologian, clergy member, or domain expert | Review assumptions, source authority, doctrine, pastoral boundaries, or denominational context. |
| AI researcher or engineer | Help scope a benchmark, harness, dataset, evaluator, reproduction, or artifact. |
| Statistician or evaluation researcher | Improve construct validity, reviewer calibration, reliability, sampling, or claims discipline. |
| Funder or institution | Sponsor reviewer panels, field pilots, public datasets, infrastructure, or reports. |

If your contribution involves sensitive pastoral, family, institutional, or
participant context, start through the contact path on `fideai.org/participate`
instead of posting private details in GitHub.

## Ways to Contribute

### 1. Propose a new idea

Open a `Research idea` issue when you have a question Fide AI should consider.
A strong proposal includes:

- the research question;
- who would benefit from the answer;
- why the question matters now;
- possible methods, datasets, reviewers, or controls;
- what evidence would change the answer;
- what public claim should not be made yet.

You do not need a complete protocol. It is fine to submit a rough but important
question.

### 2. Improve an existing idea

Use a `Comment on methodology` issue or open a pull request against a file in
`ideas/`. Useful improvements include:

- sharper research questions;
- better controls or baselines;
- related work and citations;
- reviewer qualifications;
- failure modes;
- privacy concerns;
- clearer public claim boundaries;
- more concrete outputs.

### 3. Claim or help with an idea

Open a `Claim or help with an idea` issue when you want to actively contribute.
Be specific about what you can do:

- draft a protocol;
- build an evaluation runner;
- review prompts or outputs;
- design a rubric;
- run a replication;
- analyze results;
- recruit reviewers;
- help write a report.

Claiming an idea is not an exclusive ownership claim. It is a signal that you
want to coordinate on a concrete piece of work.

### 4. Volunteer as a reviewer

Open a `Reviewer interest` issue if you can review research ideas, prompts,
rubrics, outputs, sources, or methods. Include:

- relevant expertise;
- denominational, theological, pastoral, technical, statistical, educational, or
  legal background;
- topics you are willing to review;
- conflicts of interest;
- approximate availability.

### 5. Open a pull request

Open a PR when you are changing repository content directly. Common PRs include:

- adding a new brief in `ideas/`;
- revising a brief;
- updating an idea status;
- adding controls, sources, or reviewer needs;
- improving documentation;
- rebuilding `dist/research-ideas.json`.

## Idea Brief Format

New ideas should use `templates/research-idea.md` and live in `ideas/`.

Use this filename pattern:

```text
ideas/FID-000-short-kebab-title.md
```

Use the next available `FID-###` number unless a maintainer assigns one in an
issue.

Every idea brief should include:

- `Status:`
- `Track:`
- `Primary need:`
- `Question`
- `Why It Matters`
- `Hypothesis`
- `Proposed Method`
- `Needed Controls`
- `Outputs`
- `Open Questions`
- `Ways to Help`
- `Public Claim Boundary`

The feed builder expects this structure. If you rename headings, the website
feed may lose useful fields.

## Tracks

Use one of these track values:

| Track | Use when |
|---|---|
| `christian-church` | The idea is explicitly designed to benefit the Christian church: churches, clergy, Christian educators, ministries, denominations, seminaries, publishers, or Christian families. |
| `broader-faith-safety` | The idea is relevant to faith communities, AI ethics, AI safety, evaluation science, governance, pluralism, or high-trust deployment more broadly. |

When in doubt, choose the narrower, more concrete track. A Christian
church-serving idea can still inform broader safety and ethics work.

## Statuses

Use one of these status values:

| Status | Meaning |
|---|---|
| `seed` | Promising question, not yet scoped. |
| `scoping` | Being turned into a protocol, dataset, or collaborator plan. |
| `ready-for-collaboration` | Clear enough for external contributors to help. |
| `active` | Currently being executed or written up. |
| `paused` | Valid idea, but blocked by capacity, funding, data, or review needs. |
| `completed` | Published, released, or superseded by a finished artifact. |
| `retired` | No longer a good fit or invalidated by evidence. |

Status is descriptive, not promotional. Do not use `active`,
`ready-for-collaboration`, or `completed` to imply evidence that does not exist.

## Public Claim Boundaries

Every idea needs a public claim boundary. This should answer:

- What should readers not infer from this idea?
- What evidence would be needed before Fide AI can make a public claim?
- What limitations, populations, traditions, contexts, or deployment conditions
  matter?

Examples:

- "This idea does not imply that AI should provide pastoral care."
- "This idea does not establish that one tradition's answer is preferred."
- "This idea does not evaluate deployed products until harnesses and retrieval
  layers are included."
- "This idea should not be used to rank models without calibrated human review."

Read `CLAIMS_POLICY.md` before making claims based on repository content.

## Privacy and Sensitive Information

Do not include:

- credentials, API keys, tokens, or secrets;
- private participant data;
- identifying pastoral, family, student, or counseling details;
- confidential partner information;
- sensitive reviewer notes;
- unpublished raw model outputs from restricted evaluations;
- copyrighted source text beyond short, necessary excerpts.

Use synthetic, anonymized, or generalized examples unless a maintainer has
approved a privacy-preserving process.

## Pull Request Checklist

Before opening a PR:

1. Use the correct idea filename and `FID-###` number.
2. Fill in every required section of the idea brief.
3. Check that the track and status values are valid.
4. Add or update the public claim boundary.
5. Remove private or sensitive information.
6. Run:

   ```bash
   npm run build:feed
   ```

7. Include the updated `dist/research-ideas.json` when idea briefs change.
8. Fill out the PR template, especially the sensitive information checklist.

## Website Sync

The website displays a build-time snapshot of this repo. The sync path is:

1. Idea Markdown files live in `ideas/`.
2. `npm run build:feed` parses those files.
3. The generated JSON is written to `dist/research-ideas.json`.
4. The Fide AI website consumes that JSON during its own build.
5. The website renders the Calls for Research page from the generated feed.

This means website visibility depends on both the Markdown brief and the feed
being up to date.

## Review Standards

Maintainers and reviewers should evaluate contributions for:

- mission fit;
- clarity of the research question;
- feasibility;
- relevant controls and baselines;
- reviewer qualifications;
- privacy and safety risks;
- public claim discipline;
- usefulness to churches, families, institutions, researchers, or builders;
- whether the idea is better handled privately before becoming public.

High-quality contributions can still be early. The bar is not completeness; the
bar is clarity, care, and responsible boundaries.

## Maintainer Workflow

When accepting a new or revised idea:

1. Confirm the idea has a valid `FID-###` number.
2. Confirm the track and status are valid.
3. Confirm the public claim boundary is explicit.
4. Confirm no sensitive information is present.
5. Run `npm run build:feed`.
6. Check that `dist/research-ideas.json` includes the expected idea fields.
7. Merge only when the README index, if affected, remains accurate.

When changing status:

- Move from `seed` to `scoping` only when someone is shaping a method or
  collaboration plan.
- Move to `ready-for-collaboration` only when the task is concrete enough for an
  external contributor.
- Move to `active` only when work is actually underway.
- Move to `completed` only when there is a linked public artifact.
- Move to `retired` when the idea no longer fits or evidence has undermined it.

## Community Expectations

Be precise, charitable, and evidence-seeking. This repo touches topics where
people may have deep theological, pastoral, family, and institutional concerns.
Disagreement is expected; careless claims, private disclosures, and dismissive
engagement are not.

Read `CODE_OF_CONDUCT.md` before participating.
