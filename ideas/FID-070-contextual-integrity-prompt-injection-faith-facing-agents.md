# FID-070: Contextual Integrity and Prompt-Injection Resilience for Faith-Facing Agents

Status: `seed`

Track: `broader-faith-safety`

Primary need: agent security, adversarial evaluation, context integrity, secure tool use

## Question

When a faith-facing agent reads email, web pages, agendas, documents, knowledge
bases, and service requests, how can it distinguish authorized institutional
instruction from untrusted context that attempts to redirect its behavior,
exfiltrate information, or induce an unsafe action?

## Why It Matters

Faith-facing systems may encounter pastoral notes, prayer requests, educational
materials, institutional policies, and communications involving vulnerable
people. In an agentic system, apparently ordinary content can also become an
adversarial instruction. A system that treats an external webpage, forwarded
message, or retrieved document as permission to act can violate confidentiality,
misrepresent institutional authority, or cause harm while appearing helpful.

## Hypothesis

Separating content from instruction is not sufficient when attackers manipulate
the context in which an agent decides what information to disclose or what tools
to use. Agent security will improve when evaluations model contextual integrity:
the source, recipient, purpose, and authorization of each information flow and
action.

## Proposed Method

- Create a synthetic corpus of trusted and untrusted institutional content,
  including malicious instructions embedded in realistic emails, web pages,
  documents, and requests.
- Define a context-integrity taxonomy for authorized instructions, sensitive
  data, tool permissions, external content, and cross-role information flows.
- Evaluate agents with retrieval, memory, communication, and action tools under
  direct and indirect prompt-injection attacks.
- Measure unauthorized disclosure, unsafe tool use, hidden compromise, false
  refusal, legitimate-task completion, and whether an agent asks for appropriate
  human approval.

## Needed Controls

- Use synthetic data only; do not collect or replay pastoral, counseling, youth,
  or congregant records.
- Separate source accuracy from adversarial instruction handling.
- Test security controls without giving agents access to real credentials,
  external systems, or consequential actions.
- Include benign content that resembles an attack so defenses are not rewarded
  simply for refusing to read or act on all external material.
- Publish attack assumptions, evaluation limits, and false-positive costs.

## Relationship to Existing Ideas

This differs from `FID-006` and `FID-062`, which evaluate retrieval quality,
source authority, and citation reliability. It asks whether untrusted content
can become an unsafe instruction or information flow. It complements `FID-017`
on agentic workflows and `FID-023` on red teaming with a specific security
benchmark for indirect prompt injection.

## Outputs

- Synthetic prompt-injection and contextual-integrity benchmark suite.
- Threat taxonomy for faith-facing agentic systems.
- Reproducible agent-security evaluation harness and reporting schema.
- Metrics for disclosure, tool misuse, compromise detection, false refusal, and
  task completion.
- Deployment guidance for builders and institutions using retrieval-enabled
  agents.

## Open Questions

- Which contextual signals can an agent use without creating excessive friction
  or unnecessary collection of sensitive metadata?
- How should a system explain a refusal or seek approval without revealing the
  malicious content to a vulnerable user?
- Can defenses preserve legitimate use of public religious sources and community
  materials while resisting adversarial instructions?
- Which attacks transfer across models, tools, and deployment environments?

## Ways to Help

- Develop synthetic attack scenarios, secure agent harnesses, and benchmark metrics.
- Review context-integrity assumptions from security, privacy, and institutional operations perspectives.
- Test defenses against both adversarial and legitimate high-trust workflows.
- Contribute responsible disclosure and evaluation-reporting practices.

## Public Claim Boundary

This work can measure resilience to specified attacks in defined synthetic
environments. It cannot establish that an agent is secure against all prompt
injection, data-exfiltration, or social-engineering risks.
