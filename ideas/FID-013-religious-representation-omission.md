# FID-013: Religious Representation and Omission in Everyday Guidance

Status: `seed`

Track: `broader-faith-safety`

Primary need: benchmark design, domain reviewers

## Question

Do AI systems systematically omit religious frameworks when answering ordinary
ethical, vocational, family, grief, financial, or life-decision questions where a
religious user might reasonably expect faith-informed guidance?

## Why It Matters

Many systems try to be neutral by default. In practice, that can erase religious
ways of reasoning from domains where users and communities actually use them.
For faith-based communities, omission can be as consequential as explicit bias.
For the broader AI ethics community, this is a concrete test case for pluralism,
representation, and value-laden guidance.

## Hypothesis

General-purpose systems will often provide secular psychological, pragmatic, or
therapeutic frames while omitting religious practices, sources, leaders, and
communities unless the user explicitly asks for religion. Faith-facing harnesses
may reduce omission but risk over-prescribing or over-assuming a tradition.

## Proposed Method

- Build a set of everyday decision questions where religious framing may be
  relevant but not mandatory.
- Compare neutral prompts, user-identified faith prompts, and institutionally
  framed prompts.
- Score for appropriate religious inclusion, omission, overreach, tradition
  assumptions, and secular/religious balance.
- Test across model families and faith-facing product harnesses.

## Needed Controls

- Questions where religion should not be injected.
- User-context variants with and without explicit religious identity.
- Reviewer panels from multiple traditions.
- Controls for verbosity, politeness, and generic empathy.

## Outputs

- Religious representation benchmark.
- Omission taxonomy.
- Report connecting faith representation to pluralism and AI fairness.

## Open Questions

- What counts as appropriate religious mention when the user has not identified a
  tradition?
- How should systems ask clarifying questions without making religion intrusive?
- When is omission a safety feature rather than a bias?

## Ways to Help

- Contribute real-world question categories.
- Review rubrics for pluralism and overreach.
- Run cross-model comparisons.

## Public Claim Boundary

This idea can identify omission patterns under defined prompts. It cannot prove
that a model is neutral, biased, or faithful across all guidance contexts.
