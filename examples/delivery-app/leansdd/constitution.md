# Delivery App Constitution

## Product principles
- Precise location is a domain capability; what3words is a provider.
- Customer confirmation is authoritative: resolution alone is not confirmation.
- Confirmed coordinates are the operational delivery point.
- Build the smallest vertical slice that produces useful evidence.

## Architecture constraints for the reference implementation
- Mobile: Kotlin Multiplatform / Compose Multiplatform.
- Backend: Kotlin + Spring Boot.
- Initial deployment: modular monolith.
- Persistence: PostgreSQL with PostGIS when geospatial persistence is implemented.
- External location providers must be behind a `LocationResolver` port.
- REST contracts should be described with OpenAPI.
- Do not introduce Kafka or microservices without evidence that they solve a current problem.
