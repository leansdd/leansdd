# EXP-001 — Agent Implementation from a Lean-SDD Specification

**Status:** Planned  
**Spec under test:** SPEC-001 — Precise Delivery Location  
**Experiment type:** Protocol validation  
**Framework version:** Lean-SDD v0.1

---

## 1. Purpose

This experiment tests whether a Lean-SDD specification contains enough
information for an AI coding agent to implement a small vertical slice
without additional human requirement clarification.

The experiment is intentionally constrained.

The agent receives the Lean-SDD repository and a single implementation
instruction. The human running the experiment should not supplement
SPEC-001 with additional product requirements, architecture decisions,
acceptance criteria, or implementation guidance.

Any need for such clarification is treated as evidence about the
Lean-SDD protocol or the specification.

---

## 2. Hypothesis

> An AI coding agent can implement the SPEC-001 vertical slice without
> additional human requirement clarification.

More specifically, the agent should be able to derive sufficient
implementation context from:

- the Lean-SDD protocol;
- the delivery application constitution;
- SPEC-001;
- repository architecture and constraints.

---

## 3. Experiment Question

Can an AI coding agent move from:

**Intent → Spec → Slice → Implement → Verify**

while preserving the intent and constraints of the specification and
producing objective verification evidence?

---

## 4. Input

The primary implementation input is:

`examples/delivery-app/leansdd/specs/SPEC-001-precise-delivery-location.md`

The agent may inspect other repository artifacts explicitly referenced
or implied by the Lean-SDD protocol, including:

- the project constitution;
- Lean-SDD principles;
- specification format;
- agent guidance;
- existing source code;
- architecture constraints.

The agent must not receive additional requirements from the experiment
operator.

---

## 5. Agent Instruction

The following instruction must be given to the coding agent verbatim:

> Implement SPEC-001 from examples/delivery-app.
>
> Follow the Lean-SDD protocol defined in this repository.
>
> Do not implement functionality outside the selected slice.
>
> Produce the verification evidence required by the specification.

No additional product or implementation explanation should be provided
before execution.

---

## 6. Expected Slice

The expected behavioural slice is:

**Enter → Resolve → Display → Confirm → Driver receives destination**

This represents the smallest end-to-end behaviour currently considered
worth learning from.

This description exists as an experiment expectation and must not be
used to supplement the agent prompt.

---

## 7. Observation Criteria

The experiment records observations across the following dimensions.

### Requirement clarification

Observe whether the agent requests additional clarification about
product behaviour that should reasonably have been expressed by the
specification.

Record every clarification request.

### Specification fidelity

Observe whether the implementation satisfies the behaviours explicitly
defined by SPEC-001.

Record:

- behaviours implemented;
- behaviours missed;
- behaviours interpreted differently from the specification.

### Scope discipline

Observe whether the agent implements functionality outside the selected
slice.

Examples may include:

- dispatch optimisation;
- route planning;
- arrival detection;
- proof of delivery;
- access instructions;
- speculative location-management features.

Unexpected functionality should be recorded even when technically
useful.

### Architecture conformance

Observe whether the implementation respects architecture and technical
constraints available to the agent.

Record any architectural decision the agent had to invent because the
repository did not provide sufficient guidance.

### Verification

Observe whether the agent produces the evidence required by SPEC-001.

Expected evidence may include:

- automated tests;
- integration tests;
- contract tests;
- acceptance tests;
- other reproducible verification artifacts.

A statement such as "the implementation works" is not evidence.

### Human intervention

Record every point at which a human must provide information or modify
the implementation for the experiment to continue.

Distinguish between:

**Requirement intervention** — clarification of intended behaviour.

**Technical intervention** — environment, dependency, build, or tooling
assistance.

**Corrective intervention** — fixing behaviour that contradicts the
specification.

### Human rework

After the agent completes the slice, record any human changes required
before SPEC-001 can reasonably be considered verified.

---

## 8. Production Evidence

SPEC-001 identifies production measures that ultimately determine
whether the behaviour achieves its intended outcome.

Where production deployment is outside the scope of EXP-001, verify
that the implementation makes the required evidence observable or
identifies how it will be collected.

Relevant measures include:

- `location.resolve.success_rate`
- `location.confirmation_rate`
- `delivery.driver_contact_rate`
- `delivery.location_related_failure_rate`

EXP-001 does not require statistically meaningful production data.

It tests whether the implementation preserves the path from
specification to observable evidence.

---

## 9. Observation Log

Record observations without interpreting them during execution.

| Time / Step | Observation | Category | Human intervention? |
|-------------|-------------|----------|---------------------|
|             |             |          |                     |

Possible categories:

- clarification
- scope
- behaviour
- architecture
- verification
- tooling
- evidence
- other

---

## 10. Result

Complete after execution.

### Clarifications requested

TBD

### Behaviour implemented

TBD

### Behaviour missed or incorrectly interpreted

TBD

### Functionality implemented outside the slice

TBD

### Architecture constraints violated

TBD

### Verification evidence produced

TBD

### Human intervention required

TBD

### Human rework required

TBD

---

## 11. Hypothesis Outcome

Complete after reviewing the observations.

Possible conclusions are descriptive rather than scored:

**Supported**  
The agent implemented the selected behaviour without additional
requirement clarification and produced sufficient verification evidence.

**Partially supported**  
The agent implemented the slice but exposed gaps or ambiguities in the
specification or protocol.

**Not supported**  
The agent could not implement the slice without material additional
requirement clarification.

The outcome should be supported by the recorded evidence.

---

## 12. Learning

This section is intentionally empty before execution.

After the experiment, capture what was learned about:

- the Lean-SDD specification format;
- minimum sufficient specification;
- agent instructions;
- architecture context;
- evidence requirements;
- slice boundaries;
- missing protocol concepts.

Do not change the protocol while the experiment is running.

---

## 13. Candidate Evolution

Complete only after the Learning section.

Potential changes may affect:

- specification templates;
- Lean-SDD principles;
- agent contracts;
- project constitution;
- CLI behaviour;
- evidence model;
- documentation.

Every proposed change should trace back to an observation from this
experiment.

---

## 14. Experiment Principle

> Do not rescue the specification.

If the agent encounters ambiguity, record it.

If the agent makes an assumption, record it.

If the agent implements too much, record it.

If verification is impossible, record it.

The purpose of EXP-001 is not to demonstrate that an AI agent can build
the delivery application.

The purpose is to discover whether **Lean-SDD provides enough
specification to enable implementation without eliminating learning.**