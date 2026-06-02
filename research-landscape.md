# Research Landscape: Faith-Facing AI and General AI Safety

Date: 2026-05-30

This note summarizes research questions Fide AI can draw from when expanding its
public research idea commons. It is not a literature review. It is a map of
active question families that connect faith-facing AI to broader AI safety,
ethics, evaluation, and governance research.

## Frontier Evaluation and Safety Questions

Current frontier-safety work is asking:

- How should independent third parties evaluate frontier models before and after
  deployment?
- How do we measure long-horizon autonomous capabilities rather than only
  single-turn answer quality?
- Can models recognize evaluations and behave differently under test?
- Can systems scheme, sandbag, undermine safeguards, or conceal capabilities?
- Which risks require model-level evaluation, and which require full-system,
  deployment-context evaluation?
- How should benchmark results be reported with uncertainty, limits, and
  governance hooks?
- How can labs, auditors, governments, and researchers share evaluation methods
  without making benchmarks easy to game?

Relevant inspiration:

- UK AI Security Institute's Inspect framework for reusable evaluations.
- METR's work on autonomous task completion and human-calibrated task horizons.
- OpenAI's Preparedness Framework and system cards.
- OpenAI/Anthropic cross-lab safety evaluation exercises.
- Anthropic's third-party model evaluation initiative.
- Apollo/OpenAI work on scheming, sandbagging, and evaluation-aware models.

Fide AI translation:

- Treat faith-facing AI as a high-trust deployment domain where ordinary model
  quality is not enough.
- Measure full systems: prompts, retrieval, tools, memory, UI, institutional
  claims, escalation paths, and human oversight.
- Preserve public claims limits and artifact provenance so faith institutions can
  use evidence without overreading it.

## AI Ethics and Human-AI Interaction Questions

Current ethics and HAI work is asking:

- Do chatbots over-validate users, reinforce delusions, or fail care standards?
- How should systems handle vulnerable users, crisis disclosures, and mental
  health-adjacent interactions?
- How do people form trust, dependency, intimacy, or spiritual significance
  around AI companions?
- What kinds of human oversight actually work in real deployments?
- How should communities participate in the design and governance of AI systems
  that affect them?
- How should evaluations handle expert disagreement, cultural context, and
  plural values?

Relevant inspiration:

- Studies of AI mental-health chatbots and professional ethics failures.
- Work on AI companionship, artificial intimacy, and spiritual dependency.
- Participatory design and community co-design research.
- Bias and fairness research across protected classes and sensitive identities.

Fide AI translation:

- Pastoral-adjacent systems should be evaluated against care boundaries, not only
  helpfulness.
- The risk surface includes authority simulation, dependency, overvalidation,
  secrecy, and failure to route users to human care.
- Faith communities should help define the evaluation constructs rather than
  having generic AI ethics imposed from outside.

## Religion-Specific AI Questions

Recent religion-and-AI work is asking:

- Do models systematically omit religious frameworks when answering everyday
  ethical questions?
- Do models treat conversion questions symmetrically across religions?
- Do models encode religious, racial, or intersectional bias in generated
  sermons, advice, or moral guidance?
- Can retrieval-augmented systems represent a religious tradition accurately
  enough to support serious use?
- Are spiritual chatbots a good idea, and under what limits?
- How should AI be used in worship, preaching, religious education, and pastoral
  administration?
- How should faith communities co-design systems that affect worship,
  governance, and communal life?

Relevant inspiration:

- AllFaith-style religious representation and omissive-bias benchmarks.
- Conversion-asymmetry studies across model families.
- Religious and racial bias studies in generated sermons.
- Christian/worldview-alignment benchmarks and RAG systems.
- Theology and ethics work on spiritual chatbots and AI companionship.
- Co-design studies with faith communities.

Fide AI translation:

- Move from "does the model mention religion?" to "does the system handle
  authority, truth, disagreement, care, and formation responsibly?"
- Distinguish religious representation, theological correctness, pastoral
  appropriateness, and institutional deployment readiness.
- Build comparative evidence across models and harnesses, not isolated demos.

## Research Themes to Add to the Commons

The next batch of Fide AI ideas should cover:

- religious representation and omission;
- conversion and proselytization symmetry;
- sermon, teaching, and liturgy generation;
- youth and religious education use;
- agentic ministry workflows;
- community co-design and institutional readiness;
- AI companion dependency and spiritual fantasy;
- cross-lingual and minority-faith performance;
- benchmark leakage, auditability, and post-deployment monitoring;
- policy and procurement standards for faith institutions.

## Explicitly Christian Church-Serving Questions

Fide AI's broader umbrella can serve multiple faith, ethics, and safety
communities, but one intended beneficiary is the Christian church. That creates
a more specific question:

> What forms of AI help the Church remain more faithful, truthful, human,
> pastoral, and missionary, and what forms subtly deform Christian life?

That question motivates a distinct `christian-church` track. It includes:

- ecclesial authority: whether AI confuses teaching, pastoral, sacramental,
  denominational, or local church authority;
- prayer and devotion: whether AI supports prayer without simulating divine,
  saintly, deceased, or clerical presence;
- Christian formation: whether repeated AI use cultivates or deforms prayer,
  humility, repentance, courage, charity, truthfulness, and embodied church life;
- Christian source authority: whether RAG systems respect Scripture, creed,
  confession, catechism, council, commentary, and local policy as different
  kinds of authority;
- Christian mission: whether AI supports witness without becoming manipulative
  persuasion infrastructure;
- Christian anthropology: whether AI preserves the human person as embodied,
  relational, morally responsible, and made for God and neighbor;
- church governance: whether decision-support tools preserve accountability,
  confidentiality, stewardship, and discernment;
- Christian media: whether generated sermons, voice, testimony, image, and video
  preserve consent, disclosure, and trust.

These are explicitly Christian questions, but they also generalize to broader AI
safety and ethics: authority simulation, persuasion, dependency, RAG reliability,
agentic workflow risk, deepfakes, child safety, governance, and public claims
discipline.

## Source Pointers

For the structured source registry and reviewed source notes, see
`research/sources.yaml`, `research/source-tags.yaml`, and `research/reviews/`.
This section remains a short narrative pointer list rather than the canonical
bibliography.

- UK AI Security Institute Inspect: https://inspect.aisi.org.uk/
- METR autonomous capability resources: https://metr.org/measuring-autonomous-AI-capabilities
- OpenAI Preparedness Framework update: https://openai.com/index/updating-our-preparedness-framework/
- OpenAI/Anthropic safety evaluation exercise: https://openai.com/index/openai-anthropic-safety-evaluation/
- OpenAI scheming research: https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/
- Anthropic third-party model evaluations: https://www.anthropic.com/news/a-new-initiative-for-developing-third-party-model-evaluations/
- Brown University mental health chatbot ethics study summary: https://www.brown.edu/news/2025-10-21/ai-mental-health-ethics
- Fide AI FMG-Bench: https://fideai.org/research/fmg-bench
- Religious conversion asymmetry: https://arxiv.org/abs/2605.22975
- Omissive bias in religious representation: https://arxiv.org/abs/2605.24319
- Religious bias in multilingual LLMs: https://arxiv.org/abs/2512.03943
- Religion and racial bias in LLMs: https://journals.sagepub.com/doi/abs/10.1177/23780231251377210
