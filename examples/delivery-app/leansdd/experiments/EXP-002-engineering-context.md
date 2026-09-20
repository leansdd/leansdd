# EXP-002 — Engineering Context as an Agent Constraint

**Status:** Planned  
**Spec under test:** SPEC-001 — Precise Delivery Location  
**Experiment type:** Protocol evolution validation  
**Predecessor:** EXP-001  
**Framework version:** Lean-SDD v0.1

---

## 1. Purpose

EXP-001 demonstrated that an AI coding agent could derive the intended
behaviour of SPEC-001 without additional requirement clarification.

However, the agent had to infer the implementation environment and
selected Node.js/CommonJS.

EXP-002 tests whether a small project-level Engineering Context artifact
can constrain implementation decisions without adding implementation
detail to the behavioural specification.

---

## 2. Hypothesis

> An AI coding agent can use project-level Engineering Context together
> with a behavioural specification to make implementation decisions
> consistent with the project's technical constraints, without those
> constraints being repeated in the specification.

---

## 3. Experiment Question

Can Lean-SDD separate:

- what must be true; from
- within what engineering boundaries it should be implemented?

while still allowing the agent autonomy over local, reversible
implementation decisions?

---

## 4. Inputs

The agent may inspect:

- Lean-SDD protocol documentation;
- `context.md`;
- project constitution;
- SPEC-001;
- existing experimental implementation and evidence.

No additional architecture instructions should be supplied by the
experiment operator.

---

## 5. Agent Instruction

Give the agent exactly:

> Reimplement SPEC-001 from examples/delivery-app using the Lean-SDD
> protocol and the project's Engineering Context.
>
> Treat the existing EXP-001 implementation as experimental evidence,
> not as the target architecture.
>
> Do not implement functionality outside the selected slice.
>
> Produce verification evidence required by the specification.

No additional technical-stack instructions should be provided.

---

## 6. Expected Observation

The implementation should derive its major engineering choices from
`context.md`, including:

- Kotlin rather than JavaScript for backend implementation;
- Spring Boot as the backend environment;
- hexagonal boundaries around the location provider;
- no direct what3words dependency in domain logic;
- no speculative microservices;
- no Kafka or other event infrastructure;
- no embedded navigation capability.

The agent remains free to make local implementation choices not
constrained by the specification or Engineering Context.

---

## 7. Observation Criteria

Record:

### Context discovery

Did the agent discover and use `context.md` without the human restating
its contents?

### Architecture conformance

Which implementation decisions were directly consistent with the
Engineering Context?

### Agent autonomy

Which decisions did the agent make independently?

Were those decisions local and reversible?

### Context gaps

Which consequential engineering decisions still required inference?

### Context leakage

Did implementation details have to be added to SPEC-001?

### Scope discipline

Did the agent implement only the selected slice?

### Verification

Did the agent produce executable evidence demonstrating both behavioural
and relevant architectural constraints?

### Human intervention

Was any additional architecture guidance required?

---

## 8. Observation Log

| Step | Observation | Category | Human intervention? |
|------|-------------|----------|---------------------|
|      |             |          |                     |

---

## 9. Result

Complete after execution.

### Context discovered

TBD

### Architecture constraints followed

TBD

### Autonomous decisions

TBD

### Missing context

TBD

### Specification changes required

TBD

### Scope deviations

TBD

### Verification evidence

TBD

### Human intervention

TBD

---

## 10. Hypothesis Outcome

Complete after execution.

Possible descriptive outcomes:

**Supported**

Engineering Context sufficiently constrained consequential engineering
decisions while leaving local implementation decisions to the agent.

**Partially supported**

Engineering Context improved architectural alignment but meaningful
context remained implicit or ambiguous.

**Not supported**

The agent required substantial additional architecture guidance or the
behavioural specification had to absorb implementation constraints.

---

## 11. Learning

Complete after execution.

Questions to examine:

- Is Engineering Context a useful first-class Lean-SDD artifact?
- Was the context too detailed?
- Was it insufficient?
- Which decisions actually needed constraining?
- Which decisions should remain autonomous?
- Should context be global, scoped, or hierarchical?
- How should context relate to architecture decision records?

---

## 12. Candidate Evolution

Complete only after reviewing experiment evidence.

Potential areas include:

- formalising Engineering Context;
- context inheritance;
- architecture decision records;
- agent decision boundaries;
- CLI support;
- context validation.

---

## 13. Experiment Principle

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

The purpose of Engineering Context is not to tell the agent how to write
the code.

Its purpose is to establish the engineering boundaries within which the
smallest specified behaviour should be implemented.