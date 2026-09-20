# Workflow

```text
Intent
  ↓
Specify
  ↓
Slice
  ↓
Implement
  ↓
Verify
  ↓
Observe
  ↓
Learn
  ↓
Evolve ─────────────→ Specify
```

## Intent
State the problem and outcome without prematurely embedding a solution.

## Specify
Capture minimum sufficient behaviour, constraints, and evidence.

## Slice
Choose the smallest end-to-end behaviour worth learning from. Defer adjacent functionality.

## Implement
Humans and/or agents implement the selected slice within architectural constraints.

## Verify
Collect evidence that the implementation satisfies the specification.

## Observe
Measure actual behaviour in the operating environment.

## Learn
Compare the intended outcome with evidence. Record what changed in the team's understanding.

## Evolve
Modify the spec or create the next slice. Do not preserve obsolete intent merely because it was previously documented.
