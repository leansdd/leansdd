# Lean-SDD Manifesto

Software development is a learning system.

Specifications help humans and AI agents turn intent into software, but
specification has a cost.

Too little specification creates ambiguity.

Too much specification creates inventory, delays feedback, and encodes
assumptions before they can be tested.

Lean-SDD exists to find the smallest amount of specification and
engineering governance required to build the next valuable behaviour,
verify it, learn from reality, and evolve.

## We Value

**Outcomes over outputs**

**Small specifications over comprehensive requirements**

**Vertical slices over large implementation plans**

**Explicit constraints over implicit conventions**

**Evidence over assertions**

**Production learning over specification certainty**

**Flow over utilization**

**Evolution over conformance to an obsolete plan**

**Human intent over AI autonomy**

The items on the right may have value.

We value the items on the left more when they improve the speed and
quality of learning.

## Therefore

We specify only enough to remove meaningful uncertainty.

We build the smallest behaviour worth learning from.

We separate behavioural specification from Engineering Context.

We make consequential engineering constraints explicit and verifiable.

We leave reversible implementation decisions to the implementer.

We limit specification and implementation work in progress.

We treat unimplemented specifications as inventory.

We treat existing code as evidence of previous decisions, not automatic
authority for future decisions.

We require evidence for meaningful conformance claims.

We distinguish passing tests from overall conformance.

We distinguish verification from validation.

We allow production evidence to challenge specifications, constraints,
and architecture decisions.

We preserve independent judgment where implementation bias creates
material risk.

We evolve governing intent deliberately when evidence changes what we
understand.

We use AI to increase engineering autonomy without allowing
implementation to outrun human intent.

## The Loop

Intent → Spec → Slice → Implement → Verify → Evidence → Conformance →
Observe → Learn → Evolve

Then repeat.

## The Principle

> Specify less. Learn faster. Build the right thing.