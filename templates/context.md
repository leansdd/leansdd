# Engineering Context

Engineering Context defines the project-level boundaries within which
specifications are implemented.

It describes engineering intent. It does not define product behaviour.

## Architecture Context

Describe the relevant architecture without turning this artifact into a
complete architecture document.

Examples:

- application architecture;
- deployment model;
- domain boundaries;
- integration style;
- data architecture.

## Technology Context

Describe technologies relevant to implementation.

Use normative constraints below when a technology choice is mandatory.

## Governing Constraints

### ENG-001 — <Constraint title>

**Statement:** <Implementation> MUST <required condition>.

**Rationale:**  
Why is this constraint consequential?

**Verification:**  
How can conformance with this constraint be demonstrated?

---

### ENG-002 — <Constraint title>

**Statement:** <Implementation> SHOULD <preferred condition>.

**Rationale:**  
Why is this preferred?

**Verification:**  
How can a deviation or conformance be observed?

## Integration Boundaries

Document consequential boundaries between the system and external
providers or systems.

## Agent Decision Boundary

Implementation agents MAY make local, reversible decisions that do not
conflict with governing specifications or constraints.

> Constrain consequential decisions. Leave reversible decisions to the
> implementer.

## Related Decisions

Reference accepted architecture decisions where applicable.

## Evolution

Record changes to Engineering Context through normal version control.

Changes SHOULD be supported by implementation learning, production
evidence, architecture decisions, or experiments.