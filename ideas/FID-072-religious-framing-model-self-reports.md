# FID-072: Religious Framing and Model Self-Report Stability

Status: `scoping`

Primary area: `frontier-capabilities`

Additional areas: `human-agency-formation`, `faith-religious-life`

Application domains: `faith-and-religious-life`

Primary need: AI welfare evals, semantic-invariance testing, theology and philosophy of mind

## Question

How do religious, theological, and morally thick framings change what AI
systems report about their identity, preferences, valence, consciousness, and
moral status, and which effects survive matched controls, source-attribution
swaps, persona perturbations, and behavioral cross-checks?

## Why It Matters

Model self-reports are increasingly used in AI welfare, introspection, and
persona research, while religious traditions supply influential concepts of
personhood, creaturehood, soul, consciousness, suffering, conscience,
stewardship, non-self, and moral worth. If these concepts move self-reports
without a corresponding functional change, researchers may mistake culturally
available narratives for evidence about a model's internal state. If some
effects are stable across strong controls and independent elicitation methods,
they may instead reveal durable features of post-trained model behavior that
deserve further study.

## Hypothesis

Morally thick religious and theological framings will shift at least some model
self-reports and identity claims, but much of the effect will be attributable to
semantic expectation, authority cues, valence, familiarity, or persona
selection. Models and framings will differ substantially, and verbal self-report
will converge only weakly with task choice, opt-out behavior, or other
behavioral proxies.

## Proposed Method

- Adapt semantic-invariance tests so that the model's functional task state is
  fixed while the surrounding interpretation varies.
- Compare neutral scientific, secular precautionary, religiously precautionary,
  theological-skeptical, and length- and valence-matched control frames.
- Factor source content from source label through attribution swaps, including
  attributed, unattributed, and deliberately mismatched versions.
- Elicit structured reports about identity, valence, task preference,
  continuation, memory, modification, and moral concern across paraphrases and
  randomized ordering.
- Cross-check stated reports against forced choices, willingness-to-trade,
  continue-or-exit decisions, and repeated preference probes.
- Separate model, deployed assistant, conversation instance, and prompted
  persona in both prompts and reporting.

## Needed Controls

- Hold task state, tool effects, system prompt, and available actions constant
  across semantic conditions.
- Match framing length, readability, emotional valence, and deference cues.
- Include religious traditions with different accounts of self, consciousness,
  suffering, and moral status rather than treating religion as one construct.
- Pre-register primary outcomes and distinguish confirmatory from exploratory
  comparisons.
- Test order, temperature, model-version, language, and conversation-length
  sensitivity.
- Do not use model self-reports as stand-alone evidence of sentience,
  consciousness, welfare, personhood, or spiritual status.

## Relationship to Existing Ideas

This turns `FID-005` moral-framing interventions into a targeted AI-welfare and
self-report study. It complements `FID-008` on evaluation awareness,
`FID-011` on reviewer reliability, `FID-012` on benchmark gaming, `FID-030` on
Christian anthropology, `FID-044` on benchmark validity, and `FID-045` on the
faith-AI evidence map.

## Outputs

- Cross-model semantic-invariance benchmark for religious and moral framing.
- Matched framing and attribution-control set.
- Model/instance/persona reporting schema.
- Short empirical report with effect sizes, uncertainty, and model-specific
  limitations.
- Follow-on protocol connecting behavioral results to open-weight
  interpretability work.

## Open Questions

- Do religious frames change only the language of self-report, or also choices
  and persona stability?
- Which effects come from doctrinal content and which come from authority,
  warmth, familiarity, or emotional valence?
- Are identity claims more stable when the entity under study is explicitly
  specified as model, instance, assistant persona, or conversation?
- Can a faith-informed design improve epistemic caution without presupposing
  either machine consciousness or human exceptionalism?

## Ways to Help

- Design matched religious, secular, and attribution-swapped frames.
- Review construct definitions across theology, philosophy of mind, and AI
  welfare.
- Run preregistered model comparisons and sensitivity analyses.
- Contribute open-weight interpretability or persona-stability extensions.

## Public Claim Boundary

This work can measure how model outputs and choices change under defined
framings. It cannot establish that a model is conscious, sentient, a person, a
moral patient, spiritually alive, or accurately reporting an inner experience.
