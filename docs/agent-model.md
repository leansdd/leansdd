# AI Agent Model

Lean-SDD treats the specification as the primary contract between human intent and AI-assisted implementation.

## Apply contract

When asked to implement a selected slice, an agent MUST:

1. Read the project constitution and selected specification.
2. Identify the exact slice and its exclusions.
3. Inspect the existing codebase and architecture before proposing changes.
4. Implement only behaviour necessary for the selected slice.
5. Respect declared constraints.
6. Create/update required verification evidence.
7. Run applicable checks before claiming completion.
8. Surface unresolved product ambiguity rather than inventing requirements.

An agent SHOULD prefer the smallest coherent change that satisfies the spec.

An agent MUST NOT treat adjacent ideas, open questions, future slices, or examples as authorized implementation scope.

## Suggested commands

Future integrations may expose:

```text
/lean:explore
/lean:spec
/lean:slice
/lean:apply
/lean:verify
/lean:learn
```

The protocol is tool-independent: these commands are conveniences, not the framework itself.
