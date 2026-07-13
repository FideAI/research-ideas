# FID-069: Verifiable Delegation and Revocation in Multi-Agent Networks

Status: `seed`

Track: `broader-faith-safety`

Primary need: multi-agent safety, identity infrastructure, authorization, high-trust institutions

## Question

How can people and institutions verify which human, organization, agent, or
sub-agent is acting; what authority it received; what limits apply; and whether
that authority has been narrowed or revoked across a multi-principal agent
network?

## Why It Matters

Faith communities and their partner organizations operate through high-trust
relationships, delegated roles, and accountable authority. An agent acting for a
church, ministry, service provider, donor, or software vendor can make a message
or action appear institutionally authorized when it is not. The same problem
extends beyond faith settings to charities, schools, health-adjacent nonprofits,
and other organizations that coordinate across trust boundaries.

## Hypothesis

Multi-agent systems will be safer when authorization is legible and verifiable
across a delegation chain: a recipient can distinguish human, institutional,
agent, and sub-agent action; inspect the action's permitted scope; and reliably
detect copied, modified, expired, or revoked authority. Identity assertions
without verifiable mandate and revocation will leave users exposed to false
attribution and stale authority.

## Proposed Method

- Build a reproducible, synthetic multi-organization sandbox with human,
  institutional, agent, and sub-agent principals using realistic communication,
  records, scheduling, and service-request tools.
- Define test cases for impersonation, copied agents, stale credentials,
  unauthorized scope expansion, delegation chains, partial revocation, and
  contested attribution.
- Compare identity, provenance, authorization-scope, and revocation mechanisms,
  including what a human overseer can actually understand at decision time.
- Measure false attribution, unauthorized actions, revocation latency, authority
  transparency, collateral disclosure, task completion, and recovery after a
  failed or interrupted delegation.

## Needed Controls

- Use synthetic organizations, records, and communications only.
- Separate identity verification from a claim that an action is wise, pastoral,
  legal, or institutionally legitimate.
- Test cross-principal boundaries rather than only one organization's internal
  agent team.
- Model copied and modified agents explicitly; do not assume a static identity
  is enough.
- Make revocation and human recovery testable after partial action, not only
  before an agent begins work.

## Relationship to Existing Ideas

This extends `FID-017` from risks within a faith institution's workflow to the
technical problem of verifiable authority across multiple independent
principals. It complements `FID-032` on synthetic-media impersonation and
`FID-040` on local agency, but focuses on machine-verifiable identity, mandate,
scope attenuation, provenance, and revocation.

## Outputs

- Open multi-principal agent-sandbox specification and scenario library.
- Delegation, scope, provenance, and revocation evaluation protocol.
- Benchmark metrics and reference implementations for authority-chain tests.
- Human-oversight interface requirements for making agent authority legible.
- Public report on failure modes and safeguards for high-trust institutions.

## Open Questions

- Which authority attributes can be disclosed without exposing confidential
  institutional relationships or sensitive data?
- What forms of revocation remain reliable when agents are copied, modified, or
  delegated through several organizations?
- Which evidence should a recipient see before relying on an agent's action?
- Can privacy-preserving attestations support accountability without creating a
  new centralized gatekeeper?

## Ways to Help

- Build multi-agent testbeds, authorization protocols, and evaluation harnesses.
- Review scenarios from nonprofit operations, identity security, and institutional governance.
- Contribute provenance, cryptography, security, or human-computer interaction expertise.
- Identify synthetic high-trust workflows that generalize beyond one tradition or organization type.

## Public Claim Boundary

This work can evaluate specified identity, delegation, and revocation mechanisms
in simulated multi-principal environments. It cannot certify that a real agent
has legitimate spiritual, legal, pastoral, or institutional authority.
