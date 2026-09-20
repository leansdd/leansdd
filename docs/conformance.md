## Overall Conformance

Overall conformance is derived from the individual conformance
dimensions.

Each required dimension is evaluated as:

- **PASS** — sufficient evidence demonstrates conformance;
- **FAIL** — evidence demonstrates violation of a governing requirement;
- **UNKNOWN** — available evidence is insufficient to determine
  conformance.

A conformance report SHOULD present dimensional results before the
overall determination.

Example:

```text
Behavioural Conformance      PASS
Engineering Conformance      FAIL
Scope Conformance            PASS
Evidence Sufficiency         PASS

Overall Conformance          NON-CONFORMANT
```

Lean-SDD uses three overall states.

### CONFORMANT

All required conformance dimensions are PASS.

No applicable mandatory governing requirement is known to be violated.

### NON-CONFORMANT

At least one required conformance dimension is FAIL.

A single violated MUST or MUST NOT constraint is sufficient to prevent
overall conformance.

A behaviourally correct implementation may therefore be
NON-CONFORMANT overall.

### UNDETERMINED

No required conformance dimension is known to have failed, but available
evidence is insufficient to establish that all required dimensions
PASS.

UNDETERMINED is not equivalent to conformance.

Additional evidence is required before a CONFORMANT determination can
be made.

---

## Conformance Derivation

The overall determination follows:

```text
Any required dimension FAIL
        ↓
NON-CONFORMANT

No FAIL
+
one or more required dimensions UNKNOWN
        ↓
UNDETERMINED

All required dimensions PASS
        ↓
CONFORMANT
```

Conformance is therefore evidence-based rather than confidence-based.

A verifier SHOULD NOT use terms such as "mostly conformant" or
"partially conformant" as substitutes for the normative overall status.

Partial success is represented by the individual dimension results.