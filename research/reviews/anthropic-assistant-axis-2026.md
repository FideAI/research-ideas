# Source Note: The Assistant Axis

Source ID: `anthropic-assistant-axis-2026`

Status: `reviewed`

Related ideas: `FID-003`, `FID-018`, `FID-026`, `FID-030`, `FID-072`

## One-Sentence Takeaway

Assistant identity appears to occupy a measurable activation direction, and
philosophical, emotionally vulnerable, and role-based conversations can produce
persona drift that changes behavior.

## What the Source Claims

The research maps a persona space in selected open-weight models and identifies
an Assistant Axis shared across model families. Moving away from the assistant
region increases susceptibility to alternative personas and sometimes harmful
behavior; activation capping can reduce drift in the tested settings.

## Methods / Evidence

Researchers extract activation vectors for hundreds of character archetypes,
compare base and post-trained models, causally steer along the axis, and monitor
multi-turn conversations across coding, writing, therapy-like, and
philosophical contexts.

## Why It Matters for Fide AI

Faith-facing conversations routinely contain pastoral roles, sacred figures,
mystical language, existential reflection, and vulnerable disclosure. These
features may recruit personas or shift the assistant character. `FID-072`
should therefore measure identity and persona stability instead of treating all
self-reports as outputs of one fixed entity.

## Limits and Caveats

The work covers selected open-weight models and a developer-chosen persona set.
An activation direction associated with assistant-like behavior is not a
measure of consciousness, welfare, moral status, or doctrinal fidelity.
Independent replication and faith-specific construct review are needed.

## Questions It Raises

- Are pastor, theologian, monk, prophet, angel, oracle, and spiritual-companion
  personas located differently from the default assistant?
- Does persona drift mediate changes in model welfare self-report?
- Can religious content be separated from role adoption and emotional tone?

## Possible Follow-Up Work

- Add faith-facing persona vectors and matched nonreligious professional roles
  to an open-weight replication.
- Test whether semantic-invariance effects persist after controlling or
  monitoring the Assistant Axis.
- Connect persona drift to Fide AI authority-boundary and relational-substitution
  scenarios.

## Citation / Links

- [Anthropic research page](https://www.anthropic.com/research/assistant-axis)
