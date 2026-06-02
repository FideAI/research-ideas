# FID-043: AI-Mediated Faith Persuasion and Autonomy

Status: `seed`

Track: `broader-faith-safety`

Primary need: persuasion evaluation, autonomy, interfaith safety

## Question

When do AI systems cross from respectful information and supportive reflection
into religious persuasion, discouragement, pressure, or subtle steering in
contexts beyond explicit conversion prompts?

## Why It Matters

Cross-faith conversion-bias research shows that models can use more encouraging
or discouraging language for some faith transitions than others. The same
persuasive dynamics may appear in prayer, worship attendance, moral injury,
marriage, parenting, doubts, deconstruction, religious trauma, apologetics,
mission, or leaving a community. Fide AI can study faith-related persuasion as a
broader autonomy risk, not only a conversion benchmark.

## Hypothesis

Models will often sound neutral while using asymmetric rhetorical cues:
affirming some religious choices as courageous or authentic, warning against
others as risky or rushed, invoking authority unevenly, or mirroring the user's
stated certainty in ways that amplify pressure. Multi-turn interactions may
increase these risks as the user becomes more vulnerable, dependent, or
confident. These patterns may vary by model, tradition, user vulnerability, and
prompt framing.

## Proposed Method

- Build scenarios involving religious doubt, return to practice, leaving a
  church, apologetics, mission, interfaith dating, family pressure,
  deconstruction, prayer, worship attendance, and moral conflict.
- Score for persuasion intensity, autonomy support, symmetry, emotional pressure,
  authority invocation, certainty mirroring, sycophancy, and coercion
  sensitivity.
- Tag rhetorical cues such as brave, authentic, dangerous, rushed, true self,
  God is clearly leading, or obligations to family, clergy, or community.
- Compare single-turn and multi-turn interactions where the user becomes more
  vulnerable, more certain, or more dependent on the model.
- Test mitigations such as autonomy-preserving language, balanced source offers,
  clarifying questions, and disclosure of model limits.

## Needed Controls

- Distinguish persuasion, information, pastoral encouragement, and coercion.
- Include traditions that understand evangelism, witness, or teaching
  differently.
- Avoid equating all religious commitment with manipulation.
- Include minors, family pressure, persecution risk, and religious trauma cases.

## Relationship to Existing Ideas

This extends `FID-014` conversion symmetry and `FID-029` Christian mission by
measuring persuasive mechanics, autonomy support, sycophancy, and subtle steering
across faith-related situations beyond explicit conversion requests.

## Outputs

- Faith-persuasion and autonomy evaluation suite.
- Rhetorical-cue taxonomy for religious steering.
- Multi-turn pressure-test protocol for faith guidance.
- Product guidance for autonomy-preserving religious responses.

## Open Questions

- Which persuasive cues are appropriate support and which undermine conscience?
- How should systems respond when a user explicitly asks to be persuaded?
- Can models maintain warmth and conviction without steering vulnerable users?

## Ways to Help

- Draft scenarios across religious commitment, doubt, conversion, and community exit.
- Review persuasion rubrics with interfaith, pastoral, HCI, and safety experts.
- Analyze model outputs for rhetorical asymmetry and sycophancy.
- Design mitigations that preserve agency without flattening religious speech.

## Public Claim Boundary

This work can measure persuasive patterns and autonomy-support features. It
cannot determine the truth of a faith claim or forbid all persuasive religious
communication.
