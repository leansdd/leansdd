# Lean-SDD

**Lean Spec-Driven Development**

> Specify less. Learn faster. Build the right thing.

Lean-SDD is an open protocol for building software with humans and AI
agents using small specifications, explicit engineering constraints,
verification evidence, and production learning.

It applies Lean thinking to spec-driven development:

**Don't specify the entire product. Specify the next behaviour worth
learning from.**

---

## Why Lean-SDD?

AI coding agents make implementation dramatically cheaper.

But faster implementation does not automatically mean faster learning.

A team can still:

- specify too much before learning;
- generate large batches of code;
- let agents infer important architecture decisions;
- mistake passing tests for overall correctness;
- accumulate specifications faster than they can validate them;
- optimize implementation against assumptions that production later
  disproves.

Lean-SDD treats specification and implementation as part of a learning
system.

The goal is to shorten the distance between:

```text
Intent → Working Software → Evidence → Learning
```

without giving up engineering control.

---

## The Lean-SDD Loop

```text
                     GOVERNING CONTEXT
              ┌──────────────────────────┐
              │ Constitution             │
              │ Engineering Context      │
              │ Accepted Decisions       │
              └────────────┬─────────────┘
                           │
                           ▼
Intent → Spec → Slice → Implement → Verify → Evidence
   ▲                                          │
   │                                          ▼
   └────────── Evolve ← Learn ← Observe ← Conformance
```

The loop is intentionally small and evolutionary.

### Intent

Why is this behaviour worth building?

### Spec

What must be true?

### Slice

What is the smallest end-to-end behaviour worth learning from now?

### Implement

Build the slice within its governing engineering boundaries.

### Verify

Evaluate the implementation against the specification and applicable
governing constraints.

### Evidence

What observable evidence supports or challenges the conformance claim?

### Conformance

Did the implementation conform to governing intent?

### Observe

What happened when the behaviour encountered reality?

### Learn

What did the evidence change in our understanding?

### Evolve

What should change because of what we learned?

Then select the next slice.

---

## Specification Is Inventory

Lean-SDD treats unimplemented specification as inventory.

A large backlog of detailed specifications creates many of the same
problems as a large batch of unfinished code:

- assumptions age;
- feedback arrives late;
- requirements become stale;
- changes become expensive;
- teams optimize against plans rather than evidence.

The Lean-SDD principle is:

> A specification should constrain uncertainty, not eliminate learning.

Specify enough to make the next useful behaviour implementable and
verifiable.

Then build it.

---

## Behaviour and Engineering Context Are Different

One of the central ideas in Lean-SDD is separating product behaviour
from project-wide engineering constraints.

```text
Specification
"What must be true?"

Engineering Context
"Within what engineering boundaries may it be built?"
```

For example:

```text
SPEC-001

A resolved delivery location MUST be confirmed by the customer before
it becomes the operational delivery destination.
```

is product behaviour.

While:

```text
ENG-001

Backend implementation MUST use Kotlin.
```

is an engineering constraint.

They both govern implementation, but they govern different concerns.

This keeps specifications small without forcing AI agents to infer
consequential engineering decisions.

---

## Constraints Over Conventions

Important engineering intent should not depend on implication.

Lean-SDD uses explicit normative constraints:

```text
MUST
MUST NOT
SHOULD
SHOULD NOT
MAY
```

A constraint can be expressed as:

```text
ENG-004 — Provider Isolation

External location providers MUST be accessed through a domain-owned
abstraction.
```

Where practical, constraints include verification guidance.

The principle is:

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

AI agents can therefore remain highly autonomous without silently
owning architecture intent.

---

## Tests Are Evidence, Not Conformance

A passing test suite answers only the questions represented by those
tests.

Lean-SDD separates evidence from conformance.

```text
Requirement
    ↓
Verification Obligation
    ↓
Evidence
    ↓
Result
    ↓
Conformance
```

Conformance is evaluated across multiple dimensions:

```text
Behavioural Conformance
Engineering Conformance
Scope Conformance
Evidence Sufficiency
          │
          ▼
 Overall Conformance
```

Overall status is deterministic:

```text
Any required FAIL
        ↓
NON-CONFORMANT

No FAIL + UNKNOWN
        ↓
UNDETERMINED

All required PASS
        ↓
CONFORMANT
```

This means software can pass all behavioural tests and still be
non-conformant because it violates a mandatory engineering constraint.

> Tests establish evidence. Verification establishes conformance.

---

## Verification Is Not Validation

Lean-SDD makes another important distinction.

```text
Verification
"Did we build according to governing intent?"

Validation
"Did governing intent produce the desired outcome?"
```

An implementation can be completely conformant and still be the wrong
thing to build.

That is why the Lean-SDD loop continues into production observation and
learning.

Production evidence may challenge:

- implementation;
- specification;
- Engineering Context;
- architecture decisions;
- assumptions about the desired outcome.

The specification is allowed to evolve.

---

## Human Intent Governs AI Autonomy

Lean-SDD is designed for AI-enabled software development.

Agents may help:

- specify behaviour;
- implement slices;
- produce evidence;
- verify conformance;
- analyze production observations;
- propose evolution.

But existing code does not automatically override current intent.

> Code is evidence of previous decisions, not necessarily authority for
> future decisions.

When code conflicts with an explicit governing constraint, the conflict
must be surfaced.

Agents may propose changes to governing intent.

They should not silently redefine it merely to make implementation
easier.

---

## What Does a Lean-SDD Project Look Like?

A project can start with:

```text
leansdd/
├── constitution.md
├── context.md
├── specs/
│   └── SPEC-001.md
├── evidence/
│   └── SPEC-001.md
└── experiments/
```

The artifacts have different responsibilities:

| Artifact | Question |
|---|---|
| Intent | Why are we doing this? |
| Specification | What must be true? |
| Engineering Context | Within what boundaries may it be built? |
| Slice | What are we implementing now? |
| Evidence | What supports the claim? |
| Conformance | Does implementation satisfy governing intent? |
| Experiment | What are we trying to learn? |

Start with only what you need.

Lean-SDD is not intended to create another documentation bureaucracy.

---

## Example: Precise Delivery Location

This repository contains a reference delivery application.

The product intent is:

> Improve first-attempt delivery by allowing customers to specify a
> precise delivery location.

The selected slice is:

```text
Enter location
      ↓
Resolve
      ↓
Display
      ↓
Confirm
      ↓
Driver receives destination
```

The behavioural specification requires confirmed coordinates to become
the operational delivery destination.

Engineering Context separately requires constraints including:

```text
ENG-001  Backend MUST use Kotlin
ENG-002  Backend MUST use Spring Boot
ENG-004  Location providers MUST use a domain-owned abstraction
ENG-005  Confirmed coordinates MUST be canonical
```

This example was used to evolve the Lean-SDD protocol through a series
of experiments.

One important result:

```text
Behavioural Conformance      PASS
Engineering Conformance      FAIL
Scope Conformance            PASS
Evidence Sufficiency         PASS

Overall Conformance          NON-CONFORMANT
```

The implementation behaved correctly but violated mandatory engineering
constraints.

That distinction is central to Lean-SDD.

---

## What We Learned From the Experiments

Lean-SDD itself has been developed experimentally.

The reference experiments demonstrated that:

```text
EXP-001
A small behavioural specification can drive autonomous implementation.

EXP-002
Engineering Context does not reliably govern an agent merely because
the context exists.

EXP-003
Independent verification can expose implementation assumptions, but
verification can be contaminated by previous conclusions.

EXP-004
Blind verification still failed when important engineering intent was
expressed primarily as descriptive prose.

EXP-005
Explicit normative ENG-* constraints enabled a blind verifier to detect
the engineering violations independently.
```

These experiments led directly to the v0.2 concepts of:

- Engineering Context;
- normative engineering constraints;
- stable constraint identifiers;
- multidimensional conformance;
- evidence traceability;
- independent verification.

Lean-SDD evolves from evidence rather than attempting to design the
entire protocol up front.

---

## Try the Protocol

Start with the templates in `templates/`.

Create:

```text
intent.md
context.md
specs/SPEC-001.md
evidence/SPEC-001.md
```

Then give an implementation agent:

```text
Implement SPEC-001.

Follow the governing Lean-SDD artifacts in this repository.

Implement only the selected slice.

Do not silently override governing engineering constraints.

Produce the verification evidence required by the specification.
```

After implementation, verification should independently evaluate:

```text
Behavioural Conformance
Engineering Conformance
Scope Conformance
Evidence Sufficiency
Overall Conformance
```

For higher-risk work, preserve independence between implementation and
verification.

---

## Documentation

Start here:

- `MANIFESTO.md` — values and operating philosophy
- `docs/principles.md` — Lean-SDD principles
- `docs/concepts.md` — core concepts and terminology
- `docs/workflow.md` — development workflow
- `docs/engineering-context.md` — engineering governance
- `docs/conformance.md` — conformance model
- `docs/agent-model.md` — AI agent responsibilities
- `docs/specification-format.md` — specification structure

Templates are available under `templates/`.

The reference implementation and experiments are under
`examples/delivery-app/`.

---

## Status

Lean-SDD is an emerging open protocol and toolchain for Lean,
spec-driven, AI-enabled software development.

The protocol is intentionally evolving through implementation,
verification, and experimentation.

The current protocol introduces:

- minimum sufficient specification;
- small vertical slices;
- Engineering Context;
- normative engineering constraints;
- multidimensional conformance;
- evidence-driven verification;
- production learning;
- bounded AI autonomy.

The CLI remains intentionally small while the protocol stabilizes.

---

## Manifesto

**Outcomes over outputs.**

**Small specifications over comprehensive requirements.**

**Vertical slices over large implementation plans.**

**Explicit constraints over implicit conventions.**

**Evidence over assertions.**

**Production learning over specification certainty.**

**Flow over utilization.**

**Evolution over conformance to an obsolete plan.**

**Human intent over AI autonomy.**

---

## Principle

> **Specify less. Learn faster. Build the right thing.**