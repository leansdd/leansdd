# Engineering Context

Engineering Context defines the project-level engineering boundaries
within which Lean-SDD specifications are implemented.

A specification answers:

> What must be true?

Engineering Context answers:

> Within what engineering boundaries may it be built?

These concerns are intentionally separated.

Product behaviour should not need to repeat project-wide architecture,
technology, security, integration, or engineering constraints.

---

## Why Engineering Context Exists

A behavioural specification may be sufficient to describe what a system
must do while still leaving consequential engineering decisions
ambiguous.

Lean-SDD treats those decisions separately so that:

- specifications remain focused on behaviour and outcomes;
- project-wide constraints are not duplicated across specifications;
- implementation agents can make local decisions autonomously;
- consequential architectural decisions remain governed;
- verification can evaluate engineering conformance independently from
  behavioural conformance.

---

## Context and Constraints

Engineering Context contains both descriptive context and normative
constraints.

These are not equivalent.

### Context

Context helps an implementer understand the environment.

Example:

> The system uses a client/server architecture.

Context informs implementation but does not necessarily establish an
independently verifiable obligation.

### Constraint

A constraint establishes a condition against which implementation
conformance can be evaluated.

Example:

> ENG-001: The backend MUST be implemented in Kotlin.

Constraints should be explicit, identifiable, and verifiable.

---

## Normative Language

Lean-SDD uses the following normative keywords.

### MUST

The implementation is required to satisfy the constraint.

Violation means the implementation is not conformant with that
constraint.

### MUST NOT

The implementation is prohibited from violating the stated boundary.

Violation means the implementation is not conformant with that
constraint.

### SHOULD

The implementation is expected to satisfy the constraint.

Deviation requires an explicit rationale.

### SHOULD NOT

The implementation is expected to avoid the stated approach.

Deviation requires an explicit rationale.

### MAY

The decision is intentionally left to the implementer.

---

## Constraint Format

A governing engineering constraint SHOULD contain:

- a stable identifier;
- a normative statement;
- rationale where useful;
- verification guidance where practical.

Example:

```yaml
id: ENG-001
statement: Backend implementation MUST use Kotlin.
verification: structural