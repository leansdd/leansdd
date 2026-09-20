# Lean-SDD Concepts

Lean-SDD separates the artifacts and activities required to move from
intent to evidence without turning specification into a large batch of
up-front work.

---

## Intent

Intent explains why a behaviour is worth building.

It describes the desired outcome or problem being addressed.

Intent should be stable enough to guide decisions but small enough to
evolve when evidence changes what is understood.

---

## Specification

A specification defines what must be true.

It describes observable behaviour, constraints on behaviour, scenarios,
acceptance conditions, and relevant evidence expectations.

A specification should avoid repeating project-wide engineering
constraints already governed elsewhere.

---

## Engineering Context

Engineering Context defines the project-level boundaries within which
specifications are implemented.

Examples include:

- architecture;
- technology;
- security;
- integration;
- interoperability;
- operational constraints.

Engineering Context may contain both descriptive information and
normative constraints.

Normative constraints use explicit language such as MUST, MUST NOT,
SHOULD, SHOULD NOT, and MAY.

---

## Governing Constraint

A governing constraint establishes an implementation condition against
which conformance can be evaluated.

Example:

```text
ENG-001
Backend implementation MUST use Kotlin.