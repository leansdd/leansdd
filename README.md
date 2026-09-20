# Lean-SDD

**Specify less. Learn faster. Build the right thing.**

Lean-SDD is an open protocol and emerging toolchain for applying Lean principles to spec-driven, AI-enabled software development.

> Intent → Spec → Slice → Implement → Verify → Observe → Learn → Evolve

Lean-SDD treats specifications as first-class engineering artifacts—but also as inventory. Create only enough specification to remove meaningful uncertainty, implement the smallest behaviour worth learning from, verify it with evidence, and let production learning evolve the spec.

## Why Lean-SDD?

Modern software delivery can produce code faster than teams can validate whether they are building the right thing. AI accelerates this further: unclear intent can become incorrect software at unprecedented speed.

Lean-SDD addresses this by treating specification as a flow problem. It gives humans and agents a compact contract for intent, behaviour, constraints and evidence, while Lean principles limit specification inventory, batch size and work in progress.

The goal is not more specification. The goal is faster validated learning.

## Core ideas

- **Outcomes over outputs** — start with the problem and measurable outcome.
- **Minimum sufficient specification** — specifications constrain uncertainty; they do not eliminate learning.
- **Small vertical slices** — build the smallest end-to-end behaviour worth learning from.
- **Evidence over assertion** — important behaviour should be objectively verifiable where practical.
- **Specifications are inventory** — limit spec WIP and elaborate just in time.
- **Production closes the loop** — verification proves conformance; production evidence validates the hypothesis.
- **Human intent bounds AI** — agents implement selected slices and should not invent speculative scope.

## v0.1 protocol

The canonical Lean-SDD artifacts are:

1. **Intent** — why the capability should exist and the outcome sought.
2. **Spec** — observable behaviour and constraints.
3. **Slice** — the smallest valuable/testable increment selected for implementation.
4. **Evidence** — verification and production signals.
5. **Learning** — what the evidence changed in our understanding.

Implementation sits between Slice and Evidence, but is deliberately not a Lean-SDD planning artifact.

## Quick start

```bash
npm install
npm run build
node packages/cli/dist/index.js init ./my-project
node packages/cli/dist/index.js new ./my-project "Precise delivery location"
node packages/cli/dist/index.js status ./my-project
node packages/cli/dist/index.js verify ./my-project
```

The CLI is intentionally small in v0.1. Its purpose is to prove the protocol before adding agent integrations and production evidence adapters.

## Reference example

[`examples/delivery-app`](examples/delivery-app) demonstrates Lean-SDD using a map-first delivery application in which customers can specify a precise destination using what3words. The first slice resolves a three-word address, shows the location on a map, requires customer confirmation, and makes the confirmed coordinates available to the driver.

Start with [`SPEC-001`](examples/delivery-app/leansdd/specs/SPEC-001-precise-delivery-location.md).

## Agent contract

An AI coding agent implementing a Lean-SDD slice should:

1. Read the selected spec and project constitution.
2. Implement **only** the selected slice.
3. Respect declared constraints and existing architecture.
4. Generate or update the evidence required by the spec.
5. Avoid speculative features.
6. Report unresolved ambiguity instead of silently inventing product behaviour.

See [`docs/agent-model.md`](docs/agent-model.md).

## Status

**v0.1 — Protocol bootstrap.** The format is experimental and expected to evolve through use.

## License

Apache License 2.0. See [LICENSE](LICENSE).
