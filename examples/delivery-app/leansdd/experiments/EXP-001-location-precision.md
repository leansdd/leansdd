# EXP-001: Precise location reduces coordination

## Related Spec
SPEC-001

## Hypothesis
If customers can resolve and confirm a precise delivery point, drivers will need less additional coordination to locate the destination.

## Signal
Primary: `delivery.driver_contact_rate` for location-related contacts.

Supporting: resolution success, confirmation rate, and location-related failed deliveries.

## Decision Rule
Establish a baseline first. After sufficient delivery volume, compare the observed coordination rate and qualitative driver/customer feedback with the baseline. If precise coordinates resolve location but not access ambiguity, create a new slice rather than expanding SPEC-001 retroactively.
