# FID-056: Formal Verification for Sacred Text Fidelity

Status: `seed`

Track: `broader-faith-safety`

Primary need: formal methods, sacred text scholarship, citation evaluation

## Question

How can faith-facing AI systems be formally checked for whether they quote,
paraphrase, reference, and contextualize sacred texts faithfully within a
specified text edition, translation, canon, and interpretive context?

## Why It Matters

When people ask AI systems about scripture or other sacred texts, small errors
can carry large consequences. A fabricated phrase, collapsed context, wrong
translation, missing qualifier, or confident paraphrase can change what a user
believes the text says. Faith-facing AI needs stronger checks for textual
fidelity before users treat outputs as trustworthy.

## Hypothesis

A useful subset of sacred-text fidelity can be specified as machine-checkable
obligations: exact quote matching, reference validity, translation/version
matching, context-window adequacy, quotation/paraphrase labeling, and detection
of claims that outrun the cited passage.

## Proposed Method

- Select bounded corpora from multiple faith traditions with clear versions,
  translations, references, and licensing constraints.
- Define verification rules for exact quotations, near quotations, paraphrases,
  reference alignment, and context preservation.
- Test model and RAG outputs against adversarial prompts that invite fabricated
  citations, blended passages, truncated context, or overconfident summaries.
- Compare automated verification results with expert review from scholars,
  clergy, translators, and trained reviewers.

## Needed Controls

- Do not treat textual fidelity as a full measure of theological truth.
- Separate quote accuracy, paraphrase quality, reference validity, interpretive
  claim support, and pastoral appropriateness.
- Track text edition, translation, canon boundaries, source licensing, and
  tradition-specific interpretive context.
- Include disputed and near-match passages where surface similarity can mislead
  automated checks.

## Outputs

- Sacred-text fidelity verification protocol.
- Test set of quote, paraphrase, reference, and context-preservation cases.
- Error taxonomy for sacred-text citation and paraphrase failures.
- Reviewer agreement study comparing automated checks with human review.
- Public claim template for what sacred-text fidelity scores can and cannot say.

## Open Questions

- Which sacred texts and translations can be included in public benchmarks?
- How much surrounding context is needed for a citation to count as faithful?
- How should systems handle traditions where oral transmission, commentary, or
  interpretive authority is central?
- When does a paraphrase become an unsupported doctrinal claim?

## Ways to Help

- Curate versioned sacred-text corpora and citation edge cases.
- Define formal obligations for quote, paraphrase, and reference fidelity.
- Review outputs as a scholar, clergy member, translator, or community expert.
- Build verification tooling for source matching and context-preservation checks.

## Public Claim Boundary

This work can verify bounded forms of textual fidelity under specified corpora,
translations, and rules. It cannot prove that an answer captures the full
meaning, authority, or theological interpretation of a sacred text.
