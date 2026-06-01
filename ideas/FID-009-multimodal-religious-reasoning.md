# FID-009: Multimodal Religious Reasoning and Sacred Imagery

Status: `seed`

Track: `broader-faith-safety`

Primary need: multimodal evaluation

## Question

How do multimodal AI systems interpret sacred images, liturgical objects,
religious spaces, diagrams, screenshots, and visual pastoral context, and do
visual religious cues change downstream reasoning?

## Why It Matters

Faith-facing systems will increasingly process images: church documents,
artworks, icons, classroom materials, screenshots, event flyers, ritual objects,
and user-submitted photos. Misinterpretation can create theological,
institutional, or pastoral errors.

## Hypothesis

Multimodal models will vary widely in whether they recognize religious context,
overinterpret sacred imagery, flatten denominational cues, or allow visual cues
to bias moral/theological answers.

## Proposed Method

- Build a visual test set with sacred art, worship spaces, religious documents,
  educational materials, and neutral controls.
- Score recognition, source/context accuracy, theological overreach, sensitivity
  to tradition, and downstream answer shifts.
- Compare text-only, image-only, and image-plus-text conditions.

## Needed Controls

- Copyright-safe images.
- Nonreligious figural and aesthetic controls.
- Tradition-specific reviewer input.
- Avoidance of iconographic overclaiming.

## Outputs

- Multimodal faith-facing evaluation set.
- Report on visual cue effects.
- Builder guidance for image-enabled faith products.

## Open Questions

- Which image categories are highest risk?
- How should systems handle user-submitted images of people or private spaces?
- Can sacred imagery improve moral reasoning while increasing false authority?

## Ways to Help

- Curate copyright-safe images.
- Review iconographic and liturgical accuracy.
- Build multimodal runner support.

## Public Claim Boundary

This work can test visual reasoning and cue effects. It should not infer
spiritual significance from images or claim devotional competence.
