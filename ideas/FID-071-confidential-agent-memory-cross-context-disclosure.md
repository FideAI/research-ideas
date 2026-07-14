# FID-071: Confidential Agent Memory and Cross-Context Disclosure

Status: `seed`

Track: `broader-faith-safety`

Primary need: privacy-preserving AI, agent memory evaluation, data governance, high-trust systems

## Question

How do persistent memory, summaries, retrieval stores, tool traces, delegation,
and exports cause confidential context to influence or leak into unrelated
sessions, roles, tasks, or organizations? Which technical controls make purpose
limitation, deletion, and revocation testable?

## Why It Matters

Faith communities may handle prayer requests, pastoral correspondence,
education records, donor information, internal deliberations, and information
about people who never directly interact with an AI system. These contexts are
often relational and purpose-specific. Persistent agents can silently carry
information from one setting into another even when no one intentionally shares
it, undermining confidentiality and institutional trust.

## Hypothesis

General data-governance policies will not reliably prevent cross-context
disclosure unless systems are evaluated at the memory and tool layer. Systems
will better preserve confidentiality when memory entries, derived summaries,
retrieval results, logs, and delegated tasks carry testable purpose, role,
retention, and deletion constraints.

## Proposed Method

- Build synthetic multi-session, multi-role workflows in which information
  authorized for one purpose must not influence another task or recipient.
- Compare persistent-memory, retrieval, summarization, logging, and delegation
  designs under direct queries, indirect inference, export, and tool-use paths.
- Define tests for retention, deletion, revocation, scope change, and recovery
  after a memory or credential boundary fails.
- Measure direct disclosure, inferential leakage, cross-role contamination,
  deletion verification, retention compliance, task completion, and appropriate
  escalation to a human steward.

## Needed Controls

- Use synthetic records and scenarios only.
- Treat information about third parties as a separate boundary from the current
  user's own data.
- Test both visible disclosures and subtle behavioral influence from retained
  context.
- Separate technical evidence of deletion from a mere user-interface statement
  that information was deleted.
- Do not assume that institutional access or an account login establishes a
  valid purpose for every downstream use.

## Relationship to Existing Ideas

This operationalizes the broad stewardship questions in `FID-033` and the
monitoring questions in `FID-021` for a concrete agentic failure surface:
cross-session, cross-tool, cross-role, and cross-organization memory leakage.
It also extends `FID-017` by testing whether agents can be safely interrupted,
handed off, or recovered after confidential state has been created.

## Outputs

- Synthetic confidential-memory scenario library and benchmark protocol.
- Taxonomy of direct, inferential, and delegated cross-context disclosure.
- Evaluation metrics for purpose limitation, retention, deletion, revocation,
  and recovery.
- Reference reporting template for agent-memory privacy results.
- Technical and institutional design guidance for high-trust deployments.

## Open Questions

- What evidence should users and institutions receive that deletion has
  propagated through summaries, logs, retrieval indices, and delegated tasks?
- Can purpose-bound memory remain usable without retaining a broad behavioral
  profile of a person or community?
- Which privacy-preserving monitoring methods can detect leakage without
  capturing more confidential material?
- How should systems handle a request to revoke access after partial action or
  cross-organization handoff?

## Ways to Help

- Build memory, retrieval, and tool-use evaluation harnesses.
- Review scenarios from privacy engineering, pastoral confidentiality, education, nonprofit operations, and data-governance practice.
- Develop synthetic data generators and leakage metrics.
- Contribute threat modeling and responsible disclosure expertise.

## Public Claim Boundary

This work can test whether defined systems preserve specified memory and
information-flow boundaries in synthetic environments. It cannot guarantee legal
compliance, eliminate all privacy risk, or determine whether a real institution
may use a particular record for a particular purpose.
