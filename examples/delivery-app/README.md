# Delivery App — Lean-SDD Reference Example

This example tests Lean-SDD against a map-first delivery application that accepts a what3words address as one way to specify a precise destination.

The product intent is technology-independent: **improve successful first-attempt delivery by allowing customers to communicate precise delivery locations.** what3words is an adapter, not the domain.

## First slice

Customer enters a what3words address → system resolves it → map shows the location → customer confirms it → confirmed coordinates become available to the driver.

See `leansdd/specs/SPEC-001-precise-delivery-location.md`.
