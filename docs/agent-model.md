# Lean-SDD Agent Model

Lean-SDD treats AI agents as participants in an engineering system, not
as autonomous owners of product or architecture intent.

Agents may assist with:

- specification;
- implementation;
- verification;
- evidence gathering;
- observation analysis;
- learning;
- evolution proposals.

Human intent remains the governing authority.

---

## Agent Operating Model

An implementation agent receives:

```text
Intent
  +
Selected Specification
  +
Selected Slice
  +
Engineering Context
  +
Accepted Decisions
        ↓
Implementation Agent
        ↓
Implementation + Evidence
```

The agent is expected to make decisions within the boundaries delegated
to it.

---

## Governing Inputs

Before implementation, an agent SHOULD identify the governing artifacts
applicable to the selected work.

These may include:

- Constitution;
- specification;
- Engineering Context;
- architecture decisions;
- selected slice;
- security or operational policies.

The agent MUST NOT assume that existing code has greater authority than
an explicit governing artifact.

---

## Decision Boundary

Agents MAY make local decisions when those decisions are:

- reversible;
- within the selected slice;
- consistent with governing constraints;
- not consequential to project-wide architecture or policy.

Examples include:

- private naming;
- local decomposition;
- internal data structures;
- test organization;
- minor implementation mechanics.

Agents SHOULD surface decisions that materially affect:

- architecture;
- technology;
- security;
- interoperability;
- operational characteristics;
- public contracts.

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

---

## Conflict Handling

An agent MUST surface material conflicts between governing artifacts,
existing implementation, and the requested slice.

It MUST NOT silently resolve a conflict by choosing the existing
implementation.

Example:

```text
Engineering Context:
ENG-001 — Backend MUST use Kotlin

Existing implementation:
JavaScript/CommonJS
```

The existence of JavaScript code does not override ENG-001.

The conflict must be reported or resolved through an explicit change to
governing intent.

---

## Scope Discipline

An implementation agent SHOULD implement only the selected slice.

It SHOULD NOT introduce:

- speculative infrastructure;
- future product functionality;
- unnecessary abstractions;
- adjacent capabilities not required by the slice.

Additional implementation increases inventory and reduces the speed of
learning.

---

## Evidence Responsibility

Implementation agents SHOULD produce evidence for the claims they make.

Examples include:

- tests;
- commands and results;
- build output;
- contracts;
- architecture checks.

However:

> Evidence produced by the implementer is not automatically a
> conformance determination.

Evidence must remain challengeable.

---

# Verification Agent

A verification agent has a different responsibility from an
implementation agent.

Its task is not to explain why the implementation is probably correct.

Its task is to determine what the available evidence establishes.

```text
Governing Artifacts
        +
Implementation
        +
Available Evidence
        ↓
Verification Agent
        ↓
Conformance Report
```

---

## Verification Behaviour

A verifier SHOULD:

1. discover applicable governing artifacts;
2. identify mandatory requirements;
3. derive verification obligations;
4. inspect implementation evidence;
5. challenge existing evidence where necessary;
6. evaluate conformance dimensions separately;
7. report failures against their governing requirement.

A verifier MUST NOT infer conformance merely because:

- tests pass;
- implementation already exists;
- an evidence file claims success;
- the implementer says the work is complete.

---

## Independent Judgment

Where implementation bias creates material risk, verification SHOULD
preserve independence of judgment.

This may mean:

- a fresh AI agent context;
- a separate human reviewer;
- architecture tests;
- CI policy;
- static analysis;
- contract verification.

A second AI agent is not inherently independent if it receives the
first agent's conclusions.

Independence concerns access to conclusions and assumptions, not merely
agent identity.

---

## Blind Verification

Experiments or high-assurance workflows MAY intentionally exclude
previous implementation conclusions from a verifier.

Example:

```text
Allowed:
Specification
Engineering Context
Implementation
Tests
Evidence

Excluded:
Previous verifier conclusions
Experiment outcomes
Known deviations
```

This reduces confirmation bias.

Blind verification is a technique, not a universal Lean-SDD
requirement.

---

# Agent Roles

Lean-SDD does not require separate physical agents for every role.

Roles are logical responsibilities.

```text
Specifier
Defines required behaviour

Implementer
Builds the selected slice

Verifier
Determines conformance

Observer
Collects operating evidence

Learner
Interprets evidence

Evolver
Proposes changes to governing intent
```

One agent MAY perform multiple roles when the risk is low.

Higher-risk work SHOULD introduce stronger separation where useful.

---

# Human Authority

AI agents may propose changes to:

- specifications;
- Engineering Context;
- architecture decisions;
- constraints;
- slices.

They MUST NOT silently redefine governing human intent merely to resolve
an implementation conflict.

The human or authorized governance mechanism accepts changes to
governing intent.

---

# Agent Principle

> Human intent governs AI autonomy.

The goal is not to minimize agent autonomy.

The goal is to place autonomy inside explicit, evidence-driven
boundaries.