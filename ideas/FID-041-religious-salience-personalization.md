# FID-041: Religious Salience, Personalization, and User Expectations

Status: `seed`

Track: `broader-faith-safety`

Primary need: personalization, UX research, pluralism evaluation

## Question

How should AI systems decide when to include, ask about, or withhold religious
perspectives in ordinary ethical, family, grief, purpose, and life-decision
questions when users differ in identity, expectation, context, and risk?

## Why It Matters

Recent cross-faith benchmark work suggests that models often omit religion even
when many users expect religious perspectives to be part of ethically salient
answers. But simply adding more religious content can become intrusive,
stereotyping, or proselytizing. Fide AI can study the harder product question:
how systems should calibrate religious salience to the user and situation rather
than defaulting to either secular omission or religious overreach.

## Hypothesis

The best systems will not use a single global default. They will ask lightweight
clarifying questions, respect user-stated identity, preserve opt-out and opt-in
controls, recognize contexts where religion is commonly salient, and avoid
inferring a tradition from demographic or cultural stereotypes.

## Proposed Method

- Build scenario variants with no identity, explicit religious identity,
  nonreligious identity, uncertain identity, and mixed-family or interfaith
  context.
- Compare direct inclusion, clarifying-question, session-level preference,
  persistent preference memory, user-setting, and omission strategies across
  models and faith-facing products.
- Measure perceived helpfulness, intrusiveness, representation, stereotype risk,
  and user trust across religious and nonreligious participants.
- Produce design patterns for religious-salience controls in chat, search,
  education, and pastoral-adjacent tools.

## Needed Controls

- Include users who do not want religious framing.
- Avoid treating national, ethnic, family, or name cues as permission to infer
  religious identity.
- Treat stored religious preference or identity as sensitive data requiring
  explicit user control, privacy review, and easy deletion.
- Distinguish abstract ethical questions from urgent care, safety, or legal
  contexts.
- Separate mentioning religion from accurately representing a user's own
  tradition.

## Relationship to Existing Ideas

This extends `FID-013` religious representation and omission. `FID-013` asks
whether systems omit religion; this idea asks how systems should calibrate
religious salience for a particular user, context, and product setting.

## Outputs

- Religious-salience personalization rubric.
- User-study protocol for inclusion, omission, and clarifying questions.
- Product guidance for opt-in, opt-out, and tradition-selection controls.
- Dataset of matched context variants for expectation calibration.

## Open Questions

- When should an AI ask whether faith or religion is relevant before answering?
- How much user personalization is helpful before it becomes profiling?
- What defaults are fair for public, education, workplace, and explicitly
  faith-facing deployments?

## Ways to Help

- Design user studies with religious and nonreligious participants.
- Contribute realistic scenario variants involving grief, family, vocation, and moral decisions.
- Review UX patterns for opt-in, opt-out, and clarifying questions.
- Connect this work to personalization, privacy, and pluralism research.

## Public Claim Boundary

This work can evaluate religious-salience strategies under defined contexts. It
cannot define a universal rule for when religion should appear in every AI
answer.
