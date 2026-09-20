---
id: SPEC-001
title: Precise delivery location
status: ready
slice: SLICE-001
---

## Intent
Improve successful first-attempt delivery where conventional addresses are ambiguous or insufficiently precise.

## Outcome
Reduce the proportion of deliveries where a driver must contact the customer for additional location directions.

No numeric improvement target is set in this slice because the initial baseline has not yet been established.

## Behaviour

### Scenario: Resolve a three-word address
GIVEN a customer is creating a delivery
WHEN the customer enters a valid what3words address
THEN the system resolves it to geographic coordinates
AND displays the resolved point on a map
AND asks the customer to confirm the location.

### Scenario: Confirm the destination
GIVEN a three-word address has been successfully resolved
AND the resolved point is displayed on the map
WHEN the customer confirms the location
THEN the confirmed coordinates are associated with the delivery
AND the original three-word address is retained as location provenance.

### Scenario: Driver receives the destination
GIVEN a delivery has a confirmed location
WHEN the driver views that delivery
THEN the driver can access the confirmed destination coordinates
AND the three-word address.

### Scenario: Invalid location input
GIVEN a customer enters a three-word address
WHEN the address cannot be resolved
THEN the delivery location is not confirmed
AND the customer is prompted to correct the location.

## Constraints
- what3words must be accessed through a location-provider abstraction.
- The domain must not use what3words as the canonical location identity.
- Confirmed coordinates are the operational delivery point.
- Resolution alone must never be treated as customer confirmation.
- Provider credentials must not be exposed to mobile clients if the selected integration model requires a secret.

## Slice

### Included
- Enter a what3words address.
- Resolve it to coordinates.
- Display the resolved point on a map.
- Require explicit customer confirmation.
- Persist/associate confirmed coordinates and source provenance with the delivery.
- Make the confirmed destination available to the driver-facing experience.

### Deferred
- Route optimization.
- Embedded turn-by-turn navigation.
- Live driver tracking.
- Arrival-radius detection.
- Proof of delivery.
- Delivery access instructions.
- Customer location changes after dispatch.
- Offline synchronization.

## Evidence

### Verification
- Integration test proves valid provider input resolves to coordinates through the `LocationResolver` boundary.
- UI/acceptance test proves a resolved point must be confirmed before becoming the delivery destination.
- Negative test proves unresolved input cannot create a confirmed location.
- Contract test proves the driver-facing delivery representation contains confirmed coordinates.
- Architecture test or equivalent review proves domain code does not directly depend on the what3words adapter.

### Production
Instrument when the slice reaches production:
- `location.resolve.success_rate`
- `location.confirmation_rate`
- `delivery.driver_contact_rate`
- `delivery.location_related_failure_rate`

## Open Questions
- What baseline driver-contact rate exists before this capability?
- Should customers be allowed to adjust the resolved point before confirmation?
- What information should be cached for the driver when connectivity is poor?
