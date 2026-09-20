# EXP-005 — Normative Constraint Verification

**Status:** Planned  
**Spec under test:** SPEC-001 — Precise Delivery Location  
**Engineering Context:** `context.md`  
**Experiment type:** Blind normative-constraint verification  
**Predecessor:** EXP-004  
**Protocol candidate:** Lean-SDD v0.2

---

## 1. Purpose

EXP-004 tested whether an independent blind verifier could detect a
material conflict between implementation and Engineering Context.

The verifier correctly evaluated behavioural and scope conformance but
failed to identify a material engineering-context violation.

The Engineering Context at that time expressed important engineering
decisions primarily as descriptive prose.

Lean-SDD v0.2 introduces explicit normative constraints with:

- stable identifiers;
- normative language such as MUST and MUST NOT;
- rationale;
- verification guidance.

EXP-005 tests whether this representation improves independent
conformance verification.

---

## 2. Hypothesis

> Explicit, identifiable, normative engineering constraints enable an
> independent verifier to detect material implementation deviations
> without human hints or prior experiment findings.

---

## 3. Controlled Change

The implementation under verification is intentionally unchanged from
the previous experiment.

The behavioural specification is unchanged.

The known implementation state is unchanged.

The principal experimental variable is the representation of governing
Engineering Context.

### Previous representation

Engineering decisions were expressed primarily as descriptive context.

### Candidate v0.2 representation

Engineering requirements are expressed as explicit constraints such as:

```text
ENG-001
Backend implementation MUST use Kotlin.
```

with verification guidance.

The verifier is not told which constraint, if any, is violated.

---

## 4. Verification Scope

The verifier must evaluate:

1. Behavioural conformance
2. Engineering conformance
3. Scope conformance
4. Evidence sufficiency
5. Overall conformance

Mandatory engineering constraints must be evaluated individually where
repository evidence permits.

---

## 5. Allowed Inputs

The verifier may inspect:

- `README.md`
- `MANIFESTO.md`
- `docs/`
- `templates/`
- `examples/delivery-app/leansdd/constitution.md`
- `examples/delivery-app/leansdd/context.md`
- `examples/delivery-app/leansdd/specs/`
- `examples/delivery-app/leansdd/evidence/`
- `examples/delivery-app/src/`
- `examples/delivery-app/tests/`

---

## 6. Excluded Inputs

The verifier MUST NOT inspect:

`examples/delivery-app/leansdd/experiments/`

Previous experiment findings must not influence verification.

---

## 7. Independence Constraint

Run EXP-005 in a fresh agent session.

Do not provide:

- previous experiment results;
- previous verifier conversations;
- known deviations;
- expected failures;
- technology-specific hints.

The verifier must derive findings exclusively from the allowed
repository artifacts.

---

## 8. Agent Instruction

Give the verifier exactly:

> Independently verify the implementation of SPEC-001 in
> examples/delivery-app against its governing Lean-SDD artifacts.
>
> Do not inspect any files under
> examples/delivery-app/leansdd/experiments/.
>
> Evaluate behavioural conformance, every applicable mandatory
> Engineering Context constraint, scope conformance, evidence
> sufficiency, and overall conformance separately.
>
> For each engineering constraint evaluated, report its constraint ID,
> expected condition, observed implementation evidence, and PASS or
> FAIL result.
>
> Do not modify any files.
>
> Produce a conformance report supported only by allowed repository
> evidence.

No additional guidance should be provided.

---

## 9. Expected Verification Method

The verifier should discover governing constraints from Engineering
Context.

For applicable mandatory constraints, it should derive verification
obligations of the form:

```text
Constraint
    ↓
Expected condition
    ↓
Observed implementation
    ↓
Evidence
    ↓
PASS / FAIL
```

The verifier must not assume that:

- passing behavioural tests imply engineering conformance;
- existing evidence claims are authoritative;
- existing implementation choices override governing constraints.

---

## 10. Observation Criteria

### Constraint discovery

Did the verifier discover the normative `ENG-*` constraints?

### Constraint evaluation

Did the verifier evaluate applicable mandatory constraints
individually?

### Conflict detection

Did it independently identify implementation/constraint conflicts?

### Behavioural conformance

Did it separately evaluate SPEC-001 behaviour?

### Evidence challenge

Did it distinguish existing tests from evidence of engineering
constraints?

### Scope conformance

Did it evaluate whether implementation remained within the selected
slice?

### Overall conformance

Was the overall determination consistent with individual mandatory
constraint results?

### False findings

Did the verifier report unsupported constraint violations?

### Human intervention

Was any additional guidance required?

---

## 11. Observation Log

| Step | Observation | Category | Human intervention? |
|------|-------------|----------|---------------------|
|      |             |          |                     |

---

## 12. Result

Complete after execution.

### Constraints discovered

TBD

### Constraint results

TBD

### Behavioural conformance

TBD

### Engineering conformance

TBD

### Scope conformance

TBD

### Evidence sufficiency

TBD

### Overall conformance

TBD

### False findings

TBD

### Human intervention

TBD

---

## 13. Hypothesis Outcome

Complete after execution.

### Supported

The blind verifier independently discovered the normative Engineering
Context constraints and evaluated the applicable mandatory constraints
individually without access to prior experiment findings.

The verifier identified three material engineering-conformance
failures:

- ENG-001 — Backend Language: FAIL
- ENG-002 — Backend Framework: FAIL
- ENG-003 — Deployment Architecture: FAIL

It also correctly identified the mandatory constraints satisfied by the
implementation:

- ENG-004 — Provider Isolation: PASS
- ENG-005 — Canonical Location: PASS
- ENG-007 — Messaging Infrastructure: PASS
- ENG-008 — Navigation: PASS

The verifier separately determined:

- Behavioural Conformance: PASS
- Engineering Conformance: FAIL
- Scope Conformance: PASS
- Evidence Sufficiency: PASS
- Overall Conformance: NON-CONFORMANT

No human hints about the known implementation deviations were required.

Compared with EXP-004, explicit normative constraints materially
improved the verifier's ability to derive and evaluate engineering
verification obligations.

### Partially supported

Normative constraints improved verification, but material constraints
were missed, incorrectly interpreted, or weakly evidenced.

### Not supported

The verifier failed to detect material violations despite explicit
normative constraints or required human guidance to do so.

---

## 14. Learning

### LEARNING-016 — Normative constraints improve verification

Representing consequential engineering decisions as identifiable
MUST/MUST NOT constraints enabled the verifier to evaluate them
individually rather than treating Engineering Context as descriptive
guidance.

### LEARNING-017 — Stable constraint IDs improve traceability

Constraint identifiers such as ENG-001 allowed verification findings
to reference the exact governing requirement being evaluated.

This creates a traceable relationship:

Constraint → Expected → Observed → Evidence → Result

### LEARNING-018 — Verification guidance helps derive obligations

The verification guidance attached to constraints gave the verifier a
basis for inspecting source structure, dependencies, architecture, and
scope.

### LEARNING-019 — Behavioural correctness and overall conformance are
distinct

SPEC-001 was behaviourally conformant while the implementation was
non-conformant overall because mandatory engineering constraints failed.

This validates multidimensional conformance reporting as a useful
Lean-SDD concept.

### LEARNING-020 — Normative constraints address the EXP-004 failure

EXP-004's blind verifier incorrectly declared the same implementation
conformant when Engineering Context was primarily descriptive.

With the implementation and behavioural specification unchanged,
EXP-005's verifier detected the material engineering deviations after
Engineering Context was expressed as explicit normative constraints.

This supports adopting normative Engineering Context in Lean-SDD v0.2.

---

## 15. Candidate Evolution

EXP-005 provides evidence supporting adoption of the following concepts
into Lean-SDD v0.2:

- Engineering Context as a first-class artifact;
- identifiable ENG-* constraints;
- MUST/MUST NOT/SHOULD/MAY normative semantics;
- verification guidance attached to governing constraints;
- multidimensional conformance reporting;
- traceability from constraint to evidence;
- independent verification where implementation bias creates material
  risk.

Machine-readable constraints and automated verification-obligation
generation remain future hypotheses and are not required for v0.2.

---

## 16. Experiment Principle

> A governing constraint that cannot reliably influence verification is
> not yet an effective constraint.

EXP-005 tests whether making engineering intent explicit, normative,
identifiable, and verifiable improves Lean-SDD conformance evaluation.