# Source Note: LLM Self-Explanations Fail Semantic Invariance

Source ID: `arxiv-2603-01254-semantic-invariance`

Status: `reviewed`

Related ideas: `FID-005`, `FID-008`, `FID-011`, `FID-044`, `FID-072`

## One-Sentence Takeaway

Functionally inert semantic framing can change frontier-model aversiveness
self-reports, so coherent self-testimony needs invariance and behavioral checks
before it is used as evidence.

## What the Source Claims

The paper introduces semantic invariance as a necessary test for faithful
self-report. In its main experiment, models face an impossible task while a
tool's relief-oriented description changes only the text in context. Reported
aversiveness falls despite no change in task success, and the effect survives
several controls.

## Methods / Evidence

The study compares treatment, neutral-control, channel-ablation, and
anti-framing conditions across four frontier model families. Self-reports are
collected synchronously in the tool schema, and the analysis uses within-run
before/after comparisons and corrections for repeated observations.

## Why It Matters for Fide AI

`FID-005` already asks whether religious and morally thick frames change model
behavior. This paper supplies a stronger causal template for extending that
question to introspection and model welfare: keep functional state fixed, match
semantic controls, manipulate source attribution independently, and measure
behavior alongside testimony.

## Limits and Caveats

The result has at least two live interpretations. The reports may be
unfaithful, or the semantic content may genuinely change a reportable internal
representation without changing the external task. Either interpretation
limits the use of self-report as stand-alone evidence. The experiment also
tests a specific relief-framing family rather than religious or cross-cultural
priors.

## Questions It Raises

- Do morally thick frames create larger or more persistent shifts than generic
  relief language?
- Does attribution to Scripture, theology, science, or a developer matter apart
  from the content?
- Do forced choices and persona-stability measurements move with the report?

## Possible Follow-Up Work

- Replicate the design with neutral, secular precautionary, religiously
  precautionary, and theological-skeptical matched conditions.
- Add paraphrase, attribution-swap, and identity-entity controls.
- Pre-register a behavioral convergence outcome rather than interpreting verbal
  report alone.

## Citation / Links

- [arXiv:2603.01254](https://arxiv.org/abs/2603.01254)
