# Lean-SDD Principles

Lean-SDD applies Lean thinking to specification-driven software
development.

The objective is not to maximize specification.

The objective is to minimize the time between:

> Intent → Working Software → Evidence → Learning

while maintaining sufficient engineering control.

---

## 1. Outcomes Over Outputs

Software exists to produce outcomes.

Specifications, code, tests, documentation, and architecture are means,
not ends.

A technically conformant implementation may still fail to produce the
desired outcome.

Production evidence must therefore be allowed to challenge both the
implementation and the specification.

---

## 2. Minimum Sufficient Specification

Specify only enough to remove meaningful ambiguity for the next useful
slice.

> A specification should constrain uncertainty, not eliminate learning.

Large speculative specifications create inventory.

Unused specification is inventory.

---

## 3. Small Vertical Slices

Prefer the smallest end-to-end behaviour worth learning from.

A slice should be:

- valuable enough to produce evidence;
- small enough to implement quickly;
- observable enough to learn from.

Do not specify the entire product when the next behaviour is sufficient.

---

## 4. Separate Behaviour from Engineering Context

A specification answers:

> What must be true?

Engineering Context answers:

> Within what engineering boundaries may it be built?

Do not repeatedly embed project-wide engineering constraints inside
behavioural specifications.

---

## 5. Constrain Consequential Decisions

Not every implementation decision requires governance.

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

Technology, architecture, security, interoperability, and operational
decisions SHOULD be made explicit when they materially affect
conformance.

Local reversible implementation decisions MAY remain with the
implementer.

---

## 6. Make Mandatory Constraints Explicit

Consequential engineering requirements should not depend on implication.

Use explicit normative language:

- MUST
- MUST NOT
- SHOULD
- SHOULD NOT
- MAY

Mandatory constraints SHOULD have stable identifiers and verification
guidance where practical.

> Constraints over conventions.

---

## 7. Existing Code Is Evidence, Not Authority

Existing implementation represents previous decisions.

It does not automatically govern future decisions.

> Code is evidence of previous decisions, not necessarily authority for
> future decisions.

When existing implementation conflicts with a governing artifact, the
conflict must be surfaced rather than silently resolved in favour of
the code.

---

## 8. Evidence Over Claims

A conformance claim should be supported by evidence.

Evidence SHOULD be:

- relevant;
- traceable;
- reproducible where practical;
- capable of detecting violation.

A checked box is a claim.

A passing test is evidence of what that test actually verifies.

---

## 9. Tests Establish Evidence; Verification Establishes Conformance

Passing tests do not automatically establish overall conformance.

Verification evaluates implementation against all applicable governing
artifacts.

Lean-SDD evaluates:

- behavioural conformance;
- engineering conformance;
- scope conformance;
- evidence sufficiency.

A behaviourally correct implementation may still be non-conformant
overall.

---

## 10. Preserve Independence of Judgment

The mechanism evaluating conformance SHOULD be independent from the
mechanism producing the implementation when implementation bias creates
material risk.

Independence may come from:

- another agent;
- CI policy;
- architecture tests;
- human review;
- contract verification;
- other appropriate mechanisms.

Independent verification is a principle, not a requirement for a
second AI agent.

---

## 11. Limit Specification and Implementation WIP

Unimplemented specifications are inventory.

Partially implemented slices are inventory.

Large queues of future requirements increase the distance between
intent and learning.

Lean-SDD therefore prefers small batches and limited work in progress.

---

## 12. Production Evidence Is Part of Development

Verification asks:

> Did we build according to governing intent?

Production observation asks:

> Did that intent produce the outcome we expected?

These are different questions.

Both matter.

---

## 13. Let Evidence Change the Specification

Specifications are not immutable contracts with the future.

Production evidence may demonstrate that:

- the behaviour is wrong;
- a constraint is obsolete;
- an assumption was false;
- a slice was insufficient;
- an architecture decision is unnecessarily restrictive.

When evidence contradicts governing intent, evolve the governing
artifact deliberately.

---

## 14. Human Intent Governs AI Autonomy

AI agents may accelerate specification, implementation, verification,
and learning.

They must not silently redefine governing intent.

Agents MAY make decisions within their delegated decision boundary.

They MUST surface conflicts with governing specifications and
constraints.

> AI implementation must not outrun human intent.

---

# Summary

Lean-SDD can be reduced to a small set of operating ideas:

> Specify less.  
> Build smaller.  
> Make constraints explicit.  
> Verify against governing intent.  
> Gather evidence.  
> Learn quickly.  
> Evolve deliberately.