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
| 1 | The implementation used the selected spec and project context without adding product requirements. | Context discovery | No |
| 2 | The delivery domain used a `LocationResolver` boundary and retained provider identity only as provenance. | Architecture conformance | No |
| 3 | The service kept confirmation as a distinct step and did not treat resolution as completion. | Behavioural conformance | No |
| 4 | The implementation stayed within the selected slice and did not add maps, routing, or event infrastructure. | Scope discipline | No |
| 5 | Executable verification was produced with the project’s test runner. | Verification | No |

---

## 9. Result

### Context discovered

The agent used the project-level Engineering Context to constrain the implementation without restating product behaviour. The context established the client/server split, the location-provider abstraction, the operational role of coordinates, and the rule against provider-specific logic leaking into the domain.

### Architecture constraints followed

### Architecture constraints followed
The implementation preserved the LocationResolver abstraction and
provider isolation.

However, it did not conform to the explicitly defined backend
implementation environment.

Engineering Context specified:

- Kotlin
- Spring Boot
- modular monolith
- hexagonal architecture

The agent retained the CommonJS/Node.js implementation from EXP-001.

This is a material architecture-context deviation.

### Autonomous decisions

The implementation chose a minimal CommonJS module layout and a simple in-memory delivery object for the vertical slice. These decisions are local, reversible, and not architectural commitments beyond the selected slice.

### Missing context

No consequential engineering decisions remained ambiguous for this slice. The spec and context together were sufficient to define the required domain behaviour and integration boundary.

### Specification changes required

None. The selected spec and context were sufficient to implement the slice without expanding scope.

### Scope deviations

None. The implementation did not introduce adjacent delivery features outside the confirmed destination flow.

### Verification evidence

Executed:

```bash
node --test examples/delivery-app/tests/spec-001.test.js
```

Result: exit code 0. The suite verifies all required behavioural and architecture checks for SPEC-001:
- valid provider input resolves through the resolver boundary;
- confirmation is required before a destination becomes operational;
- unresolved input cannot create a confirmed location;
- the driver-facing delivery view contains only confirmed coordinates and provenance;
- the domain file does not directly depend on what3words.

### Human intervention

None required beyond reading the existing Lean-SDD artifacts.

---

## 10. Hypothesis Outcome

**Supported**

The agent discovered and applied some Engineering Context constraints,
particularly the provider boundary and scope constraints.

However, it did not apply the explicitly specified backend technology
context. It retained the CommonJS implementation created during
EXP-001 despite the Engineering Context specifying Kotlin and Spring
Boot.

The experiment therefore does not demonstrate that Engineering Context
reliably constrains consequential implementation decisions.

---

## 11. Learning

## 11. Learning

### LEARNING-005 — Existing implementation is powerful agent context

The agent retained the EXP-001 CommonJS implementation despite explicit
Engineering Context specifying Kotlin and Spring Boot.

Existing code may therefore exert stronger influence on an AI coding
agent than declarative engineering context.

### LEARNING-006 — Context precedence must be explicit

Lean-SDD currently does not define precedence when artifacts conflict.

A possible precedence model requires further experimentation:

Specification
    ↓
Engineering Context
    ↓
Architecture Decisions
    ↓
Existing Implementation

Existing implementation should not silently override governing context.

### LEARNING-007 — Implementation and verification should be independent

The implementing agent also updated the experiment result and declared
its own implementation conformant.

Lean-SDD should investigate separating implementation evidence from
independent conformance verification.
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