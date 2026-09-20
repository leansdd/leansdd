# Engineering Context — Delivery App

Engineering Context defines the engineering boundaries within which
delivery-app specifications are implemented.

It does not define product behaviour.

---

## Architecture Context

The delivery application uses a client/server architecture.

The backend begins as a modular monolith with explicit domain and
integration boundaries.

Current domain capabilities include:

- Delivery
- Location
- Driver

New modules should be introduced only when required by a selected
specification or supported by architectural evidence.

---

## Mobile Context

The customer and driver applications use Kotlin Multiplatform and
Compose Multiplatform.

Shared domain and application logic may be reused across mobile
applications where valuable.

Platform-specific capabilities remain behind platform boundaries.

---

## Backend Context

The backend is implemented using Kotlin and Spring Boot.

It follows a modular-monolith deployment model and uses hexagonal
architecture to isolate domain behaviour from external systems.

---

## Data Context

PostgreSQL is the primary persistence technology.

PostGIS provides geospatial capabilities where required.

Coordinates are the canonical operational representation of a delivery
location.

Provider-specific identifiers are retained as provenance.

---

# Governing Constraints

The following constraints are normative.

An implementation that violates a MUST or MUST NOT constraint is not
fully conformant unless the governing constraint itself is explicitly
changed.

---

## ENG-001 — Backend Language

**Statement:** Backend implementation MUST use Kotlin.

**Rationale:**  
The delivery backend standardizes on Kotlin so domain and application
components share a consistent implementation environment.

**Verification:**  
Inspect backend source files and build configuration.

Expected evidence includes Kotlin source and a Kotlin-compatible build.

---

## ENG-002 — Backend Framework

**Statement:** Backend implementation MUST use Spring Boot.

**Rationale:**  
Spring Boot is the established backend application framework for the
delivery system.

**Verification:**  
Inspect build dependencies and application configuration for Spring
Boot.

---

## ENG-003 — Deployment Architecture

**Statement:** The backend MUST begin as a modular monolith.

**Rationale:**  
The selected product slices do not currently justify independently
deployable services.

**Verification:**  
Inspect deployment and module structure.

Multiple domain modules MAY exist inside the same deployable
application.

---

## ENG-004 — Provider Isolation

**Statement:** External location providers MUST be accessed through a
domain-owned abstraction.

**Rationale:**  
Delivery-location behaviour must remain independent of a specific
external location provider.

**Verification:**  
Inspect dependencies between domain/application code and provider
adapters.

Domain logic MUST NOT directly depend on the what3words API or SDK.

---

## ENG-005 — Canonical Location

**Statement:** Confirmed coordinates MUST be the canonical operational
delivery location.

**Rationale:**  
External provider identifiers represent location provenance rather than
the operational identity used by delivery workflows.

**Verification:**  
Inspect the confirmed delivery-location model and driver-facing
contract.

---

## ENG-006 — Provider Provenance

**Statement:** Provider-specific location identifiers SHOULD be retained
as provenance when available.

**Rationale:**  
Provider references are useful for traceability, display, and future
diagnostics without becoming the canonical location identity.

**Verification:**  
Inspect persisted or exposed confirmed-location data.

A deviation SHOULD include an explicit rationale.

---

## ENG-007 — Messaging Infrastructure

**Statement:** The implementation MUST NOT introduce Kafka or another
event broker unless required by a selected specification or accepted
architecture decision.

**Rationale:**  
Messaging infrastructure should not be introduced speculatively.

**Verification:**  
Inspect dependencies, deployment configuration, and infrastructure
artifacts.

---

## ENG-008 — Navigation

**Statement:** The implementation MUST NOT build embedded turn-by-turn
navigation unless required by a selected specification.

**Rationale:**  
Navigation can initially be delegated to external navigation
applications.

**Verification:**  
Inspect implementation scope and dependencies.

---

## ENG-009 — Persistence

**Statement:** Production persistence SHOULD use PostgreSQL, with PostGIS
for geospatial capabilities that require spatial queries.

**Rationale:**  
This provides the project's standard relational and geospatial data
platform.

**Verification:**  
Inspect persistence configuration and dependencies when persistence is
part of the selected slice.

A slice that requires no persistence MAY remain in-memory during
experimentation.

---

# Integration Boundaries

Location resolution is a domain capability.

what3words is an external provider of that capability.

The intended dependency direction is:

```text
Delivery / Location Domain
          │
          ▼
   LocationResolver
          ▲
          │
 what3words Adapter
```

The provider depends on the domain-owned boundary.

The domain does not depend on the provider.

---

# Agent Decision Boundary

Implementation agents MAY make local, reversible decisions that do not
conflict with the selected specification or governing constraints.

Examples include:

- local class and function decomposition;
- private naming;
- test organization;
- internal representations that do not escape governed boundaries.

Agents MUST NOT silently replace or ignore a governing constraint
because an existing implementation uses a different approach.

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

---

# Existing Implementation

Existing implementation is evidence of previous decisions.

It is not automatically a governing artifact.

When existing code conflicts with a governing constraint, the conflict
MUST be surfaced during implementation or verification.

Existing code MUST NOT silently override Engineering Context.

---

# Verification

Conformance with Engineering Context is evaluated separately from
behavioural conformance.

For example:

```text
ENG-001
Backend MUST use Kotlin

Expected: Kotlin
Observed: JavaScript/CommonJS

Result: FAIL
```

A passing behavioural test suite does not override a failed mandatory
engineering constraint.

---

# Evolution

Engineering Context may evolve when supported by:

- production evidence;
- implementation learning;
- accepted architecture decisions;
- experiments.

Constraints should not be retained merely because they already exist.

Changes to governing constraints should be explicit and versioned.