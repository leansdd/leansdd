# Specification Format

A Lean-SDD specification describes the behaviour required for the next
valuable slice.

A specification should be as small as possible while removing meaningful
ambiguity.

> Specify the next behaviour worth learning from.

---

## Identity

Every specification SHOULD have a stable identifier and concise title.

Example:

```text
SPEC-001 — Precise Delivery Location
```

---

## Intent

Why should this capability exist?

Describe the problem or desired outcome rather than the implementation.

---

## Expected Outcome

What observable result should improve if the behaviour is valuable?

This establishes the hypothesis that production evidence may later
validate or challenge.

---

## Behaviour

What must be true from the perspective of the system's observable
behaviour?

Prefer explicit scenarios and acceptance conditions.

Behavioural rules MAY use normative language where useful.

Example:

> A delivery location MUST NOT become operational until the customer
> confirms the resolved location.

This is a behavioural requirement, not an engineering constraint.

---

## Scenarios

Describe important examples of required behaviour.

A useful structure is:

```text
Given <relevant state>
When <behaviour occurs>
Then <observable result>
```

Scenarios should remove meaningful ambiguity without attempting to
enumerate every possible interaction.

---

## Behavioural Boundaries

Document behavioural conditions that constrain the capability.

Examples include:

- confirmation requirements;
- invalid-state behaviour;
- externally visible invariants;
- domain rules.

Project-wide architecture, technology, security, integration, and
operational constraints SHOULD normally be defined in Engineering
Context rather than duplicated here.

---

## Selected Slice

Identify the smallest end-to-end behaviour being implemented now.

The slice establishes current implementation scope.

Example:

```text
Enter location
    ↓
Resolve
    ↓
Display
    ↓
Confirm
    ↓
Driver receives destination
```

---

## Out of Scope

Explicitly identify adjacent behaviour that is intentionally deferred.

Out-of-scope functionality remains inventory until selected.

Examples:

- route optimization;
- embedded navigation;
- arrival detection;
- proof of delivery.

---

## Verification Expectations

Describe the evidence required to demonstrate the specified behaviour.

Examples include:

- acceptance tests;
- contract tests;
- integration tests;
- executable examples;
- policy checks where directly relevant to behaviour.

Verification expectations describe what evidence is required.

The resulting evidence belongs in the evidence artifact.

---

## Production Measures

Where useful, identify signals that can later validate whether the
specified behaviour produced the intended outcome.

Examples:

```text
location.resolve.success_rate
location.confirmation_rate
delivery.location_related_failure_rate
```

Production measures validate the product hypothesis.

They do not replace pre-release conformance verification.

---

# Specification Readiness

A specification is ready for implementation when:

- intent is sufficiently clear;
- required behaviour is sufficiently clear;
- the selected slice is explicit;
- meaningful behavioural ambiguity has been reduced;
- verification expectations are identifiable;
- applicable Engineering Context exists or is intentionally absent.

A specification does not need to describe the complete future product.

It needs to make the next useful slice implementable and verifiable.

---

# Specification vs Engineering Context

Lean-SDD deliberately separates these concerns.

```text
Specification
"What must be true?"
        │
        │
        ├──────────────┐
        │              │
        ▼              ▼
 Behaviour       Selected Slice


Engineering Context
"Within what engineering boundaries?"
        │
        └──────────────┐
                       ▼
                Implementation
```

Do not copy project-wide engineering constraints into every
specification merely to make them visible to an implementation agent.

Both artifacts govern implementation, but they govern different
concerns.