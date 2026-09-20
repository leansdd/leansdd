# Lean-SDD Specification Format

A spec should be as small as possible while removing meaningful ambiguity.

```markdown
---
id: SPEC-001
title: Example capability
status: ready
slice: SLICE-001
---

## Intent
Why should this capability exist?

## Outcome
What observable result are we trying to improve?

## Behaviour
GIVEN ...
WHEN ...
THEN ...

## Constraints
- Genuine architectural, security, regulatory, or operational constraints.

## Slice
What is included now? What is explicitly deferred?

## Evidence
### Verification
- Test/contract/policy evidence.

### Production
- Signals that validate the outcome.

## Open Questions
- Uncertainty we intentionally have not invented an answer for.
```

A spec is ready when **value, behaviour, constraints, verification, and slice** are sufficiently clear to begin implementation.
