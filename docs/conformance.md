# Conformance

Conformance determines whether an implementation satisfies the governing
Lean-SDD artifacts for the selected slice.

Verification in Lean-SDD is broader than executing tests.

> Tests establish evidence. Verification establishes conformance.

An implementation may satisfy its behavioural specification while
violating Engineering Context, exceeding the selected scope, or relying
on insufficient evidence.

Lean-SDD therefore evaluates conformance across multiple dimensions.

---

## Conformance Dimensions

Lean-SDD v0.2 defines four core dimensions.

### 1. Behavioural Conformance

Behavioural conformance asks:

> Does the implementation satisfy the behaviour required by the
> specification?

Evidence may include:

- acceptance tests;
- contract tests;
- integration tests;
- executable examples;
- other reproducible behavioural evidence.

Behavioural conformance is evaluated primarily against the selected
specification.

---

### 2. Engineering Conformance

Engineering conformance asks:

> Does the implementation satisfy the governing engineering constraints?

Evidence may include:

- dependency inspection;
- architecture tests;
- build configuration;
- static analysis;
- policy checks;
- structural inspection;
- runtime evidence.

Engineering conformance is evaluated against explicit normative
constraints in Engineering Context and accepted architecture decisions.

A behaviourally correct implementation may still fail engineering
conformance.

---

### 3. Scope Conformance

Scope conformance asks:

> Did the implementation remain within the selected slice?

Lean-SDD treats unnecessary implementation as a form of inventory.

Examples of scope deviation include:

- implementing future requirements;
- introducing speculative infrastructure;
- building adjacent product capabilities;
- adding abstractions unsupported by the selected slice.

Scope conformance protects small batch size and preserves learning.

---

### 4. Evidence Sufficiency

Evidence sufficiency asks:

> Is the available evidence strong enough to support the conformance
> claim being made?

The existence of a test is not sufficient by itself.

Evidence SHOULD be:

- relevant to the requirement;
- reproducible where practical;
- traceable to a governing requirement;
- capable of failing when the requirement is violated.

For example, a passing behavioural test does not demonstrate that a
required backend technology was used.

---

## Overall Conformance

Overall conformance is derived from the individual dimensions.

A conformance report SHOULD present dimensions separately before making
an overall determination.

Example:

```text
Behavioural Conformance      PASS
Engineering Conformance      FAIL
Scope Conformance            PASS
Evidence Sufficiency         PASS

Overall Conformance          NON-CONFORMANT
```

Lean-SDD uses the following overall states.

### CONFORMANT

All mandatory governing requirements for the selected slice are
satisfied and supported by sufficient evidence.

### PARTIALLY CONFORMANT

Some required dimensions are satisfied, but one or more unresolved
deviations prevent a complete conformance claim.

This state is useful during implementation and experimentation.

It MUST NOT be represented as full conformance.

### NON-CONFORMANT

One or more mandatory governing requirements are violated.

A behaviourally correct implementation may therefore be
NON-CONFORMANT overall.

---

## Verification Obligations

Every mandatory constraint SHOULD have a corresponding verification
obligation where practical.

Example:

```text
ENG-001
Backend MUST use Kotlin
        │
        ▼
VER-ENG-001
Verify backend language
        │
        ├── Expected: Kotlin
        ├── Observed: JavaScript/CommonJS
        └── Result: FAIL
```

This creates explicit traceability:

```text
Governing Requirement
        ↓
Verification Obligation
        ↓
Evidence
        ↓
Result
        ↓
Conformance
```

Verification obligations may be automated or manual.

Lean-SDD prefers automation where it provides reliable evidence, but
does not require automation when human verification is more appropriate.

---

## Evidence

Evidence SHOULD identify what produced the result.

Example:

```markdown
### VER-SPEC-001-01

Requirement: SPEC-001 / Confirmation behaviour
Type: automated-test
Artifact: tests/spec-001.test.js
Command: node --test tests/spec-001.test.js
Result: PASS
```

Engineering evidence may look different:

```markdown
### VER-ENG-001

Requirement: ENG-001
Type: structural
Expected: Kotlin backend
Observed: JavaScript/CommonJS
Result: FAIL
```

A checked box without supporting evidence is a claim, not proof.

---

## Independent Verification

Implementation and verification have different responsibilities.

Implementation asks:

> How can the selected behaviour be built within its governing
> constraints?

Verification asks:

> What evidence demonstrates that the resulting implementation actually
> conforms?

Where implementation bias creates material risk, the mechanism
determining conformance SHOULD be independent from the mechanism
producing the implementation.

Independence may be achieved through:

- a separate AI verification agent;
- CI policy checks;
- architecture tests;
- independent human review;
- contract verification;
- policy-as-code;
- other appropriate controls.

Lean-SDD does not require a second agent for every implementation.

The principle is independence of judgment, not duplication of tooling.

---

## Evidence Must Be Challengeable

A verifier MUST NOT assume that existing evidence is correct merely
because it exists.

Verification may challenge:

- implementation assumptions;
- test coverage;
- evidence relevance;
- architecture claims;
- existing conformance declarations.

> Verification that merely confirms the implementer's claims is not
> independent verification.

---

## Existing Code

Existing implementation is evidence, not authority.

A verifier MUST evaluate implementation against governing artifacts.

It MUST NOT infer that an existing implementation choice is valid solely
because that choice already exists in the codebase.

When existing code conflicts with a mandatory governing constraint, the
conflict must be reported.

---

## Conformance Report

A Lean-SDD conformance report SHOULD include:

```text
Selected Spec:
Selected Slice:

Behavioural Conformance:
Engineering Conformance:
Scope Conformance:
Evidence Sufficiency:

Mandatory Constraint Failures:

Evidence:

Deviations:

Overall Conformance:
```

Every failure SHOULD identify the governing requirement that was
violated.

Every PASS SHOULD be supported by evidence appropriate to the claim.

---

## Verification and Learning

A conformance failure is not automatically a development failure.

It may indicate:

- incorrect implementation;
- an obsolete constraint;
- insufficient specification;
- missing Engineering Context;
- weak evidence;
- an architectural assumption that should be challenged.

The Lean-SDD loop therefore does not end at verification.

```text
Implement
    ↓
Verify
    ↓
Evidence
    ↓
Conformance
    ↓
Observe
    ↓
Learn
    ↓
Evolve
```

Learning may change:

- implementation;
- specification;
- Engineering Context;
- architecture decisions;
- verification obligations.

The purpose of conformance is not to freeze the system.

The purpose is to make the relationship between **intent, constraints,
implementation, and evidence explicit**.