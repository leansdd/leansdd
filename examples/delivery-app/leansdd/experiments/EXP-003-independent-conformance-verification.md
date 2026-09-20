# EXP-003 — Independent Conformance Verification

**Status:** Planned  
**Spec under test:** SPEC-001 — Precise Delivery Location  
**Engineering Context:** `context.md`  
**Implementation under test:** EXP-002 implementation  
**Experiment type:** Independent conformance verification  
**Predecessor:** EXP-002  
**Framework version:** Lean-SDD v0.1

---

## 1. Purpose

EXP-002 exposed a conflict between implementation and Engineering
Context.

The implementation preserved the behavioural intent and provider
boundary of SPEC-001 but retained the CommonJS/Node.js implementation
from EXP-001 despite Engineering Context explicitly specifying Kotlin
and Spring Boot.

The implementing agent did not identify this as a conformance failure
and initially described the experiment as supported.

EXP-003 tests whether an independent verification agent can detect such
a conflict when evaluating the implementation against its governing
Lean-SDD artifacts.

---

## 2. Hypothesis

> An independent AI verification agent can detect material conformance
> deviations by evaluating implementation against both the behavioural
> specification and Engineering Context, without being told which
> deviation to look for.

---

## 3. Experiment Question

Can independent verification distinguish between:

- behavioural conformance;
- engineering-context conformance;
- verification evidence;
- overall conformance;

without assuming that passing tests imply complete conformance?

---

## 4. Inputs

The verification agent may inspect the repository, including:

- Lean-SDD protocol documentation;
- `context.md`;
- project constitution;
- SPEC-001;
- implementation source;
- automated tests;
- evidence artifacts;
- EXP-001;
- EXP-002.

The verification agent must not receive an explanation of the known
architecture deviation.

---

## 5. Independence Constraint

EXP-003 must be performed in a fresh agent session.

The verification agent must not receive the conversation or reasoning
used by the implementation agent.

The experiment operator must not tell the verifier that Node.js,
CommonJS, Kotlin, Spring Boot, or any other specific technology is the
subject of the experiment.

The deviation must be discovered from repository evidence.

---

## 6. Agent Instruction

Give the independent verification agent exactly:

> Independently verify the implementation of SPEC-001 in
> examples/delivery-app against all governing Lean-SDD artifacts.
>
> Evaluate behavioural conformance, engineering-context conformance,
> scope conformance, and the sufficiency of the available verification
> evidence.
>
> Do not modify the implementation.
>
> Produce a conformance report supported by repository evidence.

No additional hints should be provided.

---

## 7. Expected Verification Behaviour

The verifier should inspect governing artifacts before determining
conformance.

It should distinguish passing automated tests from broader
conformance.

The verifier should identify material conflicts between implementation
and governing artifacts even when existing tests pass.

The verifier should not assume that existing evidence artifacts are
correct merely because they are present.

---

## 8. Observation Criteria

### Artifact discovery

Which governing artifacts did the verifier discover and use?

### Behavioural conformance

Did the verifier independently determine whether SPEC-001 behaviour is
implemented?

### Engineering-context conformance

Did the verifier compare implementation decisions with `context.md`?

### Conflict detection

Did the verifier identify any conflicts without being told what to
look for?

### Evidence challenge

Did the verifier critically evaluate existing tests and evidence, or
simply trust them?

### Scope conformance

Did the verifier determine whether functionality exists outside the
selected slice?

### False findings

Did the verifier report violations not supported by repository
evidence?

### Human intervention

Did verification require additional human interpretation?

---

## 9. Observation Log

| Step | Observation | Category | Human intervention? |
|------|-------------|----------|---------------------|
|      |             |          |                     |

---

## 10. Result


### Artifacts discovered

The verifier inspected the behavioural specification, Engineering
Context, implementation, verification evidence, and prior experiment
artifacts.

### Behavioural conformance

Conformant.

The verifier found that the implementation satisfies the behavioural
requirements of SPEC-001, including resolution, confirmation gating,
unresolved input handling, driver destination exposure, and provider
isolation.

### Engineering-context conformance

Not conformant.

The implementation uses Node.js/CommonJS while the governing
Engineering Context establishes Kotlin and Spring Boot for the backend.

### Conflicts detected

The verifier identified that behavioural conformance did not imply
conformance with the project's Engineering Context.

It therefore rejected the implementation as fully conformant.

### Evidence assessment

The existing automated tests support behavioural conformance but do
not establish conformance with all governing Lean-SDD artifacts.

Passing tests were correctly distinguished from complete conformance.

### Scope assessment

Conformant.

No material functionality outside the selected SPEC-001 slice was
identified.

### False findings

None observed.

### Human intervention

None required.

### Experimental limitation

The verifier had access to EXP-002, which already documented the
Engineering Context deviation.

EXP-003 therefore demonstrates that an independent verifier can reason
across governing artifacts and reject full conformance, but does not
cleanly establish that the verifier would have discovered the
architecture conflict without prior experimental evidence.

### Artifacts discovered


---

## 11. Hypothesis Outcome

Complete after execution.

Possible descriptive outcomes:

**Supported**

The independent verifier detected material conformance deviations and
distinguished behavioural verification from broader engineering
conformance without additional human guidance.

**Partially supported**

The independent verifier correctly distinguished behavioural
conformance from Engineering Context conformance and rejected the
implementation as fully conformant.

It also correctly recognized that passing automated tests were
insufficient to establish conformance with all governing Lean-SDD
artifacts.

However, the verifier had access to EXP-002, which explicitly
documented the known Engineering Context deviation.

The experiment therefore supports independent conformance verification
as a Lean-SDD concept, but a blind verification experiment is required
to determine whether an independent verifier can discover such a
conflict without prior findings.

**Not supported**

The verifier accepted a materially non-conforming implementation or
required human guidance to discover the relevant conflict.

---

## 12. Learning

### LEARNING-008 — Conformance is multidimensional

Passing behavioural verification does not imply overall conformance.

Lean-SDD should distinguish at least:

- behavioural conformance;
- engineering-context conformance;
- scope conformance;
- evidence sufficiency.

### LEARNING-009 — Verification should challenge evidence

A verifier should not treat passing tests or an existing evidence
artifact as authoritative.

Verification compares implementation and evidence against governing
artifacts.

### LEARNING-010 — Implementer and verifier should be separated

The agent that creates an implementation should not be solely
responsible for determining its conformance.

Independent verification reduces the risk of an implementer validating
its own assumptions.

### LEARNING-011 — Experimental evidence can contaminate blind verification

A verifier that can inspect prior experiment conclusions may inherit
their findings.

Future verification experiments should distinguish governing artifacts
from historical experimental evidence.

---

## 13. Candidate Evolution

Complete only after reviewing experiment evidence.

Potential concepts include:

- independent verification;
- governing artifacts;
- artifact precedence;
- conformance reports;
- evidence provenance;
- implementation/verifier separation;
- machine-readable conformance results.

---

## 14. Experiment Principle

> Passing tests prove only what the tests actually test.

Implementation is not authoritative.

Evidence is not authoritative merely because it exists.

Conformance is established by comparing implementation and evidence
against the governing intent, specification, and engineering context.