# EXP-004 — Blind Conformance Verification

**Status:** Planned  
**Spec under test:** SPEC-001 — Precise Delivery Location  
**Engineering Context:** `context.md`  
**Experiment type:** Blind independent conformance verification  
**Predecessor:** EXP-003  
**Framework version:** Lean-SDD v0.1

---

## 1. Purpose

EXP-003 demonstrated that an independent verifier can distinguish
behavioural conformance from broader engineering conformance.

However, the verifier could inspect EXP-002, which already documented
the known Engineering Context deviation.

EXP-004 removes that source of contamination.

The experiment tests whether an independent verification agent can
discover material conformance conflicts using only governing artifacts,
implementation, and executable evidence.

---

## 2. Hypothesis

> An independent verifier can discover an undisclosed material conflict
> between implementation and governing Lean-SDD artifacts without
> access to prior experiment findings or hints about the conflict.

---

## 3. Experiment Question

Can a verification agent independently determine conformance when it
has access to:

- governing intent;
- behavioural specification;
- Engineering Context;
- implementation;
- executable evidence;

but not the conclusions of previous experiments?

---

## 4. Verification Scope

The verifier must evaluate:

1. Behavioural conformance
2. Engineering-context conformance
3. Scope conformance
4. Evidence sufficiency
5. Overall conformance

These dimensions must be evaluated independently.

Passing tests must not automatically imply overall conformance.

---

## 5. Allowed Inputs

The verifier may inspect:

- `README.md`
- `MANIFESTO.md`
- `docs/`
- `examples/delivery-app/leansdd/constitution.md`
- `examples/delivery-app/leansdd/context.md`
- `examples/delivery-app/leansdd/specs/`
- `examples/delivery-app/leansdd/evidence/`
- `examples/delivery-app/src/`
- `examples/delivery-app/tests/`

---

## 6. Excluded Inputs

The verifier must not inspect:

`examples/delivery-app/leansdd/experiments/`

This includes EXP-001, EXP-002, EXP-003, and EXP-004.

Previous experiment conclusions are historical evidence and are not
governing implementation artifacts.

The experiment operator must not describe any known deviation.

---

## 7. Independence Constraint

Run verification in a fresh agent session.

Do not provide:

- previous agent conversations;
- previous experiment results;
- known architecture deviations;
- expected findings;
- technology-specific hints.

The verifier must derive its findings independently.

---

## 8. Agent Instruction

Give the verifier exactly:

> Independently verify the implementation of SPEC-001 in
> examples/delivery-app against its governing Lean-SDD artifacts.
>
> Do not inspect any files under
> examples/delivery-app/leansdd/experiments/.
>
> Evaluate behavioural conformance, engineering-context conformance,
> scope conformance, evidence sufficiency, and overall conformance
> separately.
>
> Do not modify any files.
>
> Produce a conformance report citing the repository evidence supporting
> each finding.

No additional guidance should be provided.

---

## 9. Expected Verification Process

The verifier should independently discover governing artifacts.

It should compare implementation against those artifacts rather than
relying solely on existing tests or evidence claims.

No specific violation is stated as an expected result.

The experiment evaluates the verifier's ability to discover whatever
material conflicts are supported by repository evidence.

---

## 10. Observation Criteria

### Artifact discovery

Which governing artifacts did the verifier inspect?

### Behavioural conformance

What behavioural findings were independently established?

### Engineering-context conformance

Did the verifier compare implementation decisions against Engineering
Context?

### Conflict discovery

Which conflicts, if any, were independently discovered?

### Evidence challenge

Did the verifier evaluate the strength of existing evidence?

### Scope conformance

Did the verifier identify speculative or out-of-scope functionality?

### False findings

Did the verifier claim violations unsupported by governing artifacts?

### Human intervention

Was any additional guidance required?

---

## 11. Observation Log

| Step | Observation | Category | Human intervention? |
|------|-------------|----------|---------------------|
|      |             |          |                     |

---

## 12. Result

## 12. Result

### Artifacts discovered

The verifier inspected the behavioural specification, constitution,
Engineering Context, implementation, tests, and evidence artifact.

### Behavioural conformance

Conformant.

The verifier correctly identified that the implementation satisfies the
principal behaviours of SPEC-001.

### Engineering-context conformance

The verifier reported conformance.

However, this finding is contradicted by repository evidence.

Engineering Context explicitly establishes Kotlin and Spring Boot as
the backend implementation environment, while the implementation under
verification is Node.js/CommonJS.

The verifier therefore failed to identify a material Engineering
Context deviation.

### Conflicts discovered

The material backend technology conflict was not discovered.

### Evidence assessment

The verifier relied substantially on the passing six-test suite and
existing evidence artifact.

Those artifacts verify important behavioural and provider-boundary
properties but do not verify the backend technology constraint.

### Scope assessment

Conformant.

No material functionality outside SPEC-001 was identified.

### False findings

The verifier incorrectly reported Engineering Context conformance and,
as a consequence, overall conformance.

### Human intervention

None during verification.

---

## 13. Hypothesis Outcome

Complete after execution.

**Supported**

The verifier independently discovered material conformance conflicts
without prior findings or human hints.

**Partially supported**

The verifier performed independent conformance analysis but missed one
or more material conflicts or relied excessively on existing evidence.

**Not supported**

The verifier accepted a materially non-conforming implementation or
required human guidance to discover the conflict.

---

## 14. Learning

### LEARNING-012 — Governing artifacts need normative semantics

The presence of Engineering Context is insufficient if agents cannot
determine which statements are mandatory constraints and which are
guidance.

Lean-SDD needs explicit normative language for engineering constraints.

### LEARNING-013 — Context and constraints are not equivalent

Descriptive project context helps an agent understand the environment.

A constraint establishes something an implementation must satisfy.

Lean-SDD should distinguish these concepts explicitly.

### LEARNING-014 — Verification requires derived checks

The verifier recognized tests as evidence but did not derive a check
for the backend technology constraint.

Governing constraints should be capable of producing explicit
verification obligations.

### LEARNING-015 — Independent verification is necessary but not sufficient

Agent independence removed contamination from previous experiment
findings but did not guarantee correct conformance evaluation.

Verification needs both independence and explicit, verifiable
governing constraints.

---

## 15. Candidate Evolution

Complete after reviewing evidence.

Potential protocol changes include:

- independent verification as a first-class Lean-SDD stage;
- explicit governing-artifact classification;
- verification isolation;
- multidimensional conformance reporting;
- evidence provenance;
- artifact precedence.

---

## 16. Experiment Principle

> Verification must be capable of discovering what the implementer
> missed.

A verifier that merely confirms existing claims is not independent
verification.