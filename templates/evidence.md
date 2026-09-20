# Evidence: <SPEC-ID>

**Specification:** <SPEC-ID>  
**Slice:** <selected slice>  
**Verification status:** Pending

---

## Behavioural Verification

### VER-001

**Requirement:** <spec/scenario/behaviour>

**Type:** automated-test | contract-test | integration-test | inspection | other

**Artifact:** <path or evidence source>

**Command:** `<command if applicable>`

**Expected:** <expected result>

**Observed:** <observed result>

**Result:** PASS | FAIL | NOT VERIFIED

---

## Engineering Verification

### VER-ENG-001

**Requirement:** <ENG-ID>

**Type:** structural | dependency | architecture | policy | inspection | other

**Expected:** <expected engineering condition>

**Observed:** <observed implementation condition>

**Evidence:** <artifact, command, report, or inspection>

**Result:** PASS | FAIL | NOT VERIFIED

---

## Scope Verification

**Selected slice:**  
<slice>

**Observed implementation scope:**  
<what was actually implemented>

**Out-of-scope functionality observed:**  
None | <describe>

**Result:** PASS | FAIL

---

## Evidence Sufficiency

For each conformance claim, determine whether the evidence is:

- relevant;
- reproducible where practical;
- traceable to a governing requirement;
- capable of detecting violation.

**Known evidence gaps:**  
<gaps or "None">

**Result:** PASS | FAIL | INCOMPLETE

---

## Conformance Summary

| Dimension | Result |
|---|---|
| Behavioural Conformance | PASS / FAIL |
| Engineering Conformance | PASS / FAIL |
| Scope Conformance | PASS / FAIL |
| Evidence Sufficiency | PASS / FAIL / INCOMPLETE |

### Mandatory Constraint Failures

<ENG-ID and explanation, or "None">

### Overall Conformance

**CONFORMANT | PARTIALLY CONFORMANT | NON-CONFORMANT**

### Rationale

<short evidence-based explanation>

---

## Production Evidence

Production evidence is intentionally distinct from pre-release
verification.

### Measures

- <metric>
- <metric>

### Observations

Not yet observed.

---

## Learning

What did verification or production evidence teach us?

Do not modify the governing specification merely to make the current
implementation conform.

---

## Next Decision

What should happen because of this evidence?

Possible outcomes include:

- accept implementation;
- change implementation;
- evolve specification;
- evolve Engineering Context;
- create an experiment;
- gather additional evidence.