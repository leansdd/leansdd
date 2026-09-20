# Lean-SDD Workflow

Lean-SDD is an evidence-driven development loop.

The objective is to minimize the distance between intent, working
software, evidence, and learning.

```text
Intent
  ↓
Specification
  ↓
Select Slice
  ↓
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
  └────────────→ Next Slice
```

Engineering Context governs implementation and verification throughout
the loop.

---

## 1. Establish Intent

Start with the outcome or problem.

Ask:

> What are we trying to change, improve, enable, or learn?

Intent should explain why the work matters without prematurely
describing the complete solution.

Example:

> Improve first-attempt delivery success by allowing customers to
> specify a precise delivery location.

---

## 2. Establish Governing Context

Before implementation, identify the engineering boundaries that govern
the project.

Engineering Context may include:

- architecture;
- technology;
- security;
- integration;
- interoperability;
- operational constraints.

Consequential mandatory decisions SHOULD be expressed as identifiable
normative constraints.

Example:

```text
ENG-001
Backend implementation MUST use Kotlin.
```

Do not encode every implementation choice as a constraint.

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

---

## 3. Specify the Behaviour

Describe what must be true.

A specification SHOULD contain enough information to remove meaningful
ambiguity for implementation and verification.

It SHOULD NOT attempt to describe the entire future product.

Prefer observable behaviour and examples over implementation
instructions.

---

## 4. Select the Slice

Choose the smallest end-to-end behaviour worth learning from.

Ask:

> What is the smallest behaviour we can implement that produces useful
> evidence?

Explicitly identify what is outside the selected slice.

Unselected functionality remains inventory.

---

## 5. Implement

Implement the selected slice according to:

```text
Specification
      +
Engineering Context
      +
Accepted Decisions
      +
Selected Slice
      ↓
Implementation
```

The implementer MAY make local, reversible decisions within the
delegated decision boundary.

The implementer MUST surface conflicts between governing artifacts and
existing implementation.

Existing code MUST NOT silently override current governing intent.

---

## 6. Verify

Verification evaluates the implementation against applicable governing
artifacts.

It does not merely execute tests.

Verification SHOULD evaluate:

- behavioural conformance;
- engineering conformance;
- scope conformance;
- evidence sufficiency.

Mandatory constraints SHOULD be evaluated individually where practical.

Example:

```text
ENG-001
Backend MUST use Kotlin
        ↓
Expected: Kotlin
Observed: JavaScript
        ↓
FAIL
```

---

## 7. Produce Evidence

Conformance claims require evidence appropriate to the claim.

A useful trace is:

```text
Requirement
    ↓
Verification Obligation
    ↓
Evidence
    ↓
Result
```

Evidence may include:

- automated tests;
- build output;
- dependency inspection;
- architecture checks;
- static analysis;
- contracts;
- manual inspection.

Do not treat a passing behavioural test as evidence for an unrelated
engineering constraint.

---

## 8. Determine Conformance

Evaluate each conformance dimension separately.

Example:

```text
Behavioural Conformance      PASS
Engineering Conformance      FAIL
Scope Conformance            PASS
Evidence Sufficiency         PASS

Overall Conformance          NON-CONFORMANT
```

Overall conformance must not hide failed mandatory constraints.

---

## 9. Observe

After deployment or realistic execution, observe what actually happens.

Useful evidence may include:

- product outcomes;
- operational metrics;
- failures;
- user behaviour;
- support signals;
- performance;
- reliability;
- qualitative feedback.

Observation extends development into the operating environment.

---

## 10. Learn

Convert evidence into changed understanding.

Ask:

- Did the behaviour produce the intended outcome?
- Was the specification correct?
- Were engineering constraints useful?
- Did implementation reveal an incorrect assumption?
- Is more evidence required?
- What should we do next?

Learning should lead to a decision.

---

## 11. Evolve

Evidence may cause any of the following to change:

```text
Implementation
Specification
Engineering Context
Architecture Decision
Verification Obligation
Selected Slice
```

Do not modify a governing artifact merely to make an existing
implementation appear conformant.

Change it because evidence justifies changing the governing intent.

---

# The Lean-SDD Loop

The complete loop can therefore be viewed as:

```text
                     GOVERNING CONTEXT
              ┌──────────────────────────┐
              │ Constitution             │
              │ Engineering Context      │
              │ Accepted Decisions       │
              └────────────┬─────────────┘
                           │
                           ▼
Intent → Spec → Slice → Implement → Verify → Evidence
   ▲                                          │
   │                                          ▼
   └────────── Evolve ← Learn ← Observe ← Conformance
```

---

# Work in Progress

Lean-SDD applies WIP thinking to both specification and implementation.

Avoid accumulating:

- large queues of unimplemented specifications;
- partially implemented slices;
- speculative architecture;
- verification debt;
- unvalidated assumptions.

Prefer completing the learning loop before substantially expanding the
next batch of work.

---

# Workflow Principle

> Don't specify the entire product.

> Specify the next behaviour worth learning from.