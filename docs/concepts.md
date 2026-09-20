# Concepts

## Intent
The problem, affected actor, desired outcome, and important uncertainty. Intent answers **why**.

## Specification
Observable behaviour, rules, constraints, and required evidence. A spec answers **what must be true**.

## Slice
The smallest end-to-end behaviour selected for implementation and learning. A slice is not a component task list.

## Evidence
Two forms are distinguished:

- **Verification evidence**: tests, contracts, policies, checks, and other proof that implementation conforms to the spec.
- **Production evidence**: telemetry or user/operational evidence used to validate whether the intended outcome occurred.

## Learning
A recorded change in understanding caused by evidence. Learning may evolve a spec, create a new slice, invalidate an assumption, or leave the current model unchanged.

## WIP
Specifications and implementation are both inventory while unfinished. Teams should set explicit WIP limits appropriate to their context.
