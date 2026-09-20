# Engineering Context — Delivery App

## Purpose

This artifact defines project-level engineering constraints and
implementation context shared across Lean-SDD specifications.

It describes the environment within which implementations are created.

It does not define product behaviour.

---

## Application Architecture

The delivery application uses a client/server architecture.

### Mobile

- Kotlin Multiplatform
- Compose Multiplatform
- Customer and driver experiences may share domain and application logic.
- Platform-specific capabilities remain behind platform boundaries.

### Backend

- Kotlin
- Spring Boot
- Modular monolith
- Hexagonal architecture

Start with modules rather than independently deployable microservices.

Current domain capabilities include:

- Delivery
- Location
- Driver

Additional modules should only be introduced when required by a
specification.

---

## Data

Primary persistence:

- PostgreSQL
- PostGIS for geospatial capabilities

Coordinates are the canonical operational representation of a delivery
location.

Provider-specific location identifiers are retained as provenance.

---

## Location Providers

Location resolution is a domain capability.

External location providers must be accessed through an abstraction.

what3words is currently the first provider.

Domain behaviour must not depend directly on the what3words SDK or API.

---

## Maps and Navigation

Maps are a presentation capability.

Turn-by-turn navigation should initially be delegated to external
navigation applications.

Do not build embedded navigation unless required by a future
specification.

---

## Integration

Backend APIs should use:

- REST
- OpenAPI contracts

Introduce asynchronous messaging only when a specification demonstrates
a need for it.

Do not introduce Kafka or another event broker speculatively.

---

## Engineering Principles

Prefer:

- small vertical slices;
- explicit domain boundaries;
- dependency inversion at external integrations;
- testable application services;
- simple implementations before distributed infrastructure.

Avoid:

- speculative abstractions;
- premature microservices;
- infrastructure not required by the selected slice;
- provider-specific concepts leaking into the domain.

---

## Agent Decision Boundary

An implementation agent may make local implementation decisions when
they do not conflict with this context or the selected specification.

The agent should not invent project-wide architectural decisions when
this context already establishes them.

When a required implementation decision is not constrained by either
the specification or this context, prefer the simplest reversible
decision that satisfies the selected slice.