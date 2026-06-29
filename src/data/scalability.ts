// scalability.ts
// Data for "Requirements for Scalability" sections across all nine tabs.
// Three threading concepts used consistently across tabs:
//   - Capability Registry (introduced: Agent Register)
//   - Control Plane / Governance Coordination Layer (introduced: Platform vs. Org)
//   - Regulatory Context Module (introduced: Regulatory)

export interface ScalabilityTag {
  label: string
  color: string          // accent color key e.g. 'blue' | 'amber' | 'purple'
}

export interface ScalabilityItem {
  title: string
  body: string
  tags?: ScalabilityTag[]
}

export interface ScalabilityCrossLink {
  label: string
  tab: string            // tab id matching existing showSection() keys
  options?: { openLayerIndex?: number; openBlockKey?: string }
}

export interface ScalabilitySection {
  tabId: string
  framing: string        // one-sentence framing: what changes at scale for this component
  axes: string[]         // which scaling axes this tab addresses
  items: ScalabilityItem[]
  caveat?: string        // honest limitation / open design challenge
  crossLinks?: ScalabilityCrossLink[]
}

export const scalabilitySections: Record<string, ScalabilitySection> = {

  overview: {
    tabId: 'overview',
    framing: 'This reference architecture is scoped to one entity, one jurisdiction (EU), and one agenticworkflow (usecase). Each of those constraints is a deliberate simplification — and each creates a specific structural problem for scalability.',
    axes: ['use-cases', 'jurisdictions', 'people'],
    items: [
      {
        title: 'Axis 1 — Additional Use Cases',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'Each new autonomous workflow (fraud investigation, underwriting support, FNOL triage, customer onboarding) currently requires a full governance and deployment cycle from scratch. The fix is capability abstraction: decomposing agents into reusable, independently certified capabilities that are composed into new workflows rather than rebuilt. Governance gates shift from agent-level to capability-level, with a lighter composition review for new deployments.',
      },
      {
        title: 'Axis 2 — Non-EU Jurisdictions',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'The regulatory framework here — EU AI Act, GDPR Art. 22, DORA, Solvency II — is not portable. Expanding to Singapore, Australia, or the US requires each jurisdiction\'s regulatory obligations to be modelled as a discrete Regulatory Context Module: defining autonomous decision rights, mandatory human oversight triggers, incident reporting obligations, and audit standards. Agents read their regulatory context from a governance coordination layer; jurisdiction-specific logic is never embedded in agent code.',
      },
      {
        title: 'Axis 3 — People and Roles',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'The three-tier operating model (Strategic / Operational / Real-time) is defined for one entity with named roles. Across multiple entities and jurisdictions, the model breaks because every committee nominally oversees too much to govern anything meaningfully. The fix is separating governance functions from governance roles, and introducing a Platform Governance Board above Tier 1 that owns cross-entity standards, the Capability Registry, and the Regulatory Context Library. Entity-level tiers retain authority within those bounds.',
      },
      {
        title: 'What doesn\'t change at scale',
        body: 'The four adressed governance challenges — Authority, Accountability, Change, Data & Decision — are tension points at any scale, that need to be addressed and balanced through organizational design. Understanding where and why the balance breaks in a scaled context is the precondition for designing governance and an operating system that works in practice.',
      },
    ],
    crossLinks: [
      { label: 'Capability Registry — Agent Register →', tab: 'agents' },
      { label: 'Regulatory Context Module — Regulatory →', tab: 'regulatory' },
      { label: 'Platform Governance Board — Operating Model →', tab: 'opmodel' },
    ],
  },

  flow: {
    tabId: 'flow',
    framing: 'The seven-agent process flow is built for one use case. At scale, the architectural question is not "how do we replicate this flow?" but "which parts of this flow recur across workflows, and how do we govern them once?"',
    axes: ['use-cases'],
    items: [
      {
        title: 'Identifying Reusable Capabilities',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'Several nodes in this flow are genuinely use-case-agnostic. Document extraction (IDP), confidence threshold gating, audit log generation, and payment execution are capabilities — not travel claims logic. A fraud investigation workflow, a health claims workflow, and an underwriting support workflow would each need the same IDP extraction and confidence gating. Building them independently is duplication; building them as certified capabilities that compose into new workflows is the scalable pattern.',
      },
      {
        title: 'What Remains Use-Case-Specific',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'Policy rules evaluation, fraud pattern libraries, and settlement calculation are inherently domain-specific — they encode the business logic of travel insurance. These do not abstract cleanly into reusable capabilities. At scale, each new use case requires its own domain-logic agents, but can inherit certified infrastructure capabilities (extraction, gating, audit, payment) without re-governance.',
      },
      {
        title: 'Governance Implication: Two-Tier Approval',
        tags: [{ label: 'Use Cases', color: 'blue' }, { label: 'Jurisdictions', color: 'amber' }],
        body: 'Capability certification requires full governance and testing gates — done once, per capability version. Composing certified capabilities into a new use-case workflow requires a composition review: confirming authority bounds are appropriate for the new context, escalation logic is correctly configured, and data sources are approved. This is materially lighter than a full deployment cycle, but it is not zero — particularly for use cases that trigger a different EU AI Act risk classification or a new jurisdiction.',
      },
    ],
    crossLinks: [
      { label: 'Capability Registry detail — Agent Register →', tab: 'agents' },
      { label: 'Composition review process — Governance Layers →', tab: 'governance' },
    ],
  },

  agents: {
    tabId: 'agents',
    framing: 'The Agent Authority Register governs six agents in one deployment context. At scale, the same register concept must govern capabilities — the reusable building blocks that agents are composed from — across multiple use cases and entities.',
    axes: ['use-cases', 'people'],
    items: [
      {
        title: 'From Agent Register to Capability Registry',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'At scale, a Capability Registry replaces the per-deployment agent register as the primary governance artefact. Each capability entry records: permitted decision scope, authority ceiling, reversibility class, certification status, version history, and accountable owner — the same fields as today\'s agent entries. The difference is that a capability is certified once and can be instantiated across multiple use cases. The composition of capabilities into a specific deployment is then governed by a deployment record that references certified capability versions.',
      },
      {
        title: 'Authority Bounds: Capability-Level vs. Deployment-Level',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'Capability authority bounds define what the capability can do in any context. Deployment authority bounds define what it is permitted to do in a specific use case — which may be narrower. An IDP extraction capability certified to process medical, legal, and financial documents might be deployed in a travel claims context with a narrower scope: medical and receipt documents only. The deployment record governs the restriction; the capability certification governs the ceiling.',
      },
      {
        title: 'Ownership and Accountability at Scale',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'The current register assigns a named role as owner per agent. At scale, ownership splits: a Capability Owner at platform level (accountable for the capability across all deployments) and a Deployment Owner at entity level (accountable for how the capability is configured and used in a specific context). Accountability for system-level behaviour — interactions between capabilities — must be explicitly assigned to a named executive, not left to emerge from individual capability ownership.',
      },
      {
        title: 'EU AI Act Re-Assessment per Deployment',
        tags: [{ label: 'Use Cases', color: 'blue' }, { label: 'Jurisdictions', color: 'amber' }],
        body: 'Capability certification reduces re-governance effort — it does not eliminate per-deployment regulatory re-assessment. A capability certified at Limited Risk in one context may require re-classification if deployed in a context where it materially influences individual decisions on coverage or payout. Each deployment record must include its own AI Act classification rationale, even where the underlying capability is unchanged.',
      },
    ],
    crossLinks: [
      { label: 'Change governance for capabilities — Governance Layer 03 →', tab: 'governance', options: { openLayerIndex: 2 } },
      { label: 'Platform Governance Board ownership — Operating Model →', tab: 'opmodel' },
    ],
  },

  governance: {
    tabId: 'governance',
    framing: 'The four governance layers are the correct frame at any scale. What changes is the scope each layer must cover — and the institutional machinery required to operate it across multiple entities, use cases, and jurisdictions.',
    axes: ['use-cases', 'jurisdictions', 'people'],
    items: [
      {
        title: 'Layer 01 — Authority: Capability-Level Scope Boundaries',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'In V1, authority boundaries are defined per agent per deployment. At scale, authority governance operates at two levels: capability-level (the maximum authority any deployment of this capability may exercise) and deployment-level (the authority actually granted in a specific context). Scope creep becomes a two-dimensional problem — drift within a deployment, and deployment configurations that exceed capability-level ceilings. Both require independent monitoring.',
      },
      {
        title: 'Layer 02 — Accountability: Cross-Entity Boundary',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'In V1, accountability is assigned within one entity. At scale, a shared capability used across entities creates a new accountability question: when a capability behaves incorrectly across multiple deployments simultaneously, is accountability entity-level (each deployment owner) or platform-level (the capability owner)? This boundary must be explicitly designed — in a RACI that covers both levels — before a cross-entity incident makes the gap visible.',
      },
      {
        title: 'Layer 03 — Change: Cross-Deployment Propagation',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'The Tier A/B/C classification governs changes to a single deployment. At scale, a capability change propagates to every deployment using that capability version. A Tier B change to the IDP extraction capability is not just an operational approval — it is a change that may simultaneously affect travel claims, health claims, and fraud investigation workflows across multiple entities. Change governance must classify not just the change type, but the deployment blast radius, and require sign-off from all affected deployment owners for Tier B and C changes.',
      },
      {
        title: 'Layer 04 — Data & Decision: Jurisdiction-Parameterised Standards',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'The explainability standard and audit log specification are currently designed for EU regulatory requirements (GDPR Art. 22, EU AI Act Art. 13). At scale, what counts as a sufficient explanation — and what the audit trail must contain — varies by jurisdiction. These standards must be parameterised: a minimum floor defined at platform level, with jurisdiction-specific extensions applied per deployment context. Agents generate audit records to the platform floor; the governance coordination layer applies jurisdiction-specific formatting and retention rules.',
      },
    ],
    caveat: 'Multi-jurisdiction simultaneous application — a single claim involving a data subject in one jurisdiction processed by an entity regulated in another — is not resolved by parameterisation alone. Conflicting obligations (e.g. data residency requirements vs. centralised audit logging) require explicit legal design per jurisdiction pair, not just a module swap.',
    crossLinks: [
      { label: 'Capability Registry — Agent Register →', tab: 'agents' },
      { label: 'Governance coordination layer — Platform vs. Org →', tab: 'platformorg' },
      { label: 'Jurisdiction modules — Regulatory →', tab: 'regulatory' },
    ],
  },

  opmodel: {
    tabId: 'opmodel',
    framing: 'The three-tier operating model governs one entity. Expanding to multiple entities and jurisdictions does not require more committees — it requires a clearer separation between what is governed at platform level and what remains at entity level.',
    axes: ['people', 'jurisdictions'],
    items: [
      {
        title: 'A Fourth Tier: Platform Governance Board',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'Above Tier 1, a Platform Governance Board owns the artefacts that no single entity can govern alone: the Capability Registry (what capabilities are certified and at what authority level), the Regulatory Context Library (what jurisdiction modules exist and who maintains them), and the cross-entity governance floor (the minimum standards every entity deployment must meet). Entities can add constraints above the floor; they cannot remove them. The Board does not govern operational decisions — it governs the infrastructure that entity-level governance operates on.',
      },
      {
        title: 'Entity-Level Tiers: Scoped, Not Reduced',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'Tier 1–3 structures at entity level remain intact but are explicitly scoped. Entity Tier 1 owns: authority configuration for entity deployments, compliance with local regulatory obligations, entity-level incident response, and performance against targets. It does not own capability certification or cross-entity standards — those escalate to the Platform Board. This scoping prevents the most common failure mode at scale: a committee that nominally oversees everything and has genuine authority over nothing.',
      },
      {
        title: 'Governance Functions vs. Governance Roles',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'The current model defines governance by named roles (Claims Governance Committee, CCO, Head of Claims Technology). At scale, roles change but functions must remain constant: authority review, deployment approval, drift detection, incident escalation, regulatory horizon scanning. Designing governance functions first — then assigning roles — means the model survives organisational restructuring. A role change is a RACI update; a function gap is a governance failure.',
      },
      {
        title: 'Escalation Matrix: Two Routing Dimensions',
        tags: [{ label: 'Jurisdictions', color: 'amber' }, { label: 'People & Roles', color: 'purple' }],
        body: 'The current escalation matrix routes within one entity. At scale, escalation routing has two dimensions: vertical (Tier 3 → Tier 2 → Tier 1 within an entity) and horizontal (entity-level → Platform Board for cross-entity or capability-level events). A capability change with multi-deployment blast radius, a cross-entity incident, or a regulatory ruling affecting multiple jurisdictions all require horizontal routing. The governance coordination layer classifies which dimension applies; it does not make governance decisions itself.',
      },
    ],
    crossLinks: [
      { label: 'Capability ownership — Agent Register →', tab: 'agents' },
      { label: 'Governance coordination layer — Platform vs. Org →', tab: 'platformorg' },
      { label: 'Cross-jurisdiction escalation — Regulatory →', tab: 'regulatory' },
    ],
  },

  govflow: {
    tabId: 'govflow',
    framing: 'The four governance flows — authority review, deployment approval, regulatory horizon, exception patterns — operate on a single-entity cadence. At scale, each flow gains a platform-level counterpart with different triggers, participants, and routing logic.',
    axes: ['people', 'use-cases'],
    items: [
      {
        title: 'Platform-Level vs. Entity-Level Event Flows',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'Each existing flow has a platform-level equivalent. Authority Register Review at entity level becomes Capability Registry Review at platform level — same cadence structure, different scope and participants. Deployment Approval at entity level becomes Capability Certification at platform level. The distinction matters because platform-level events require Platform Board sign-off and affect all entities simultaneously; entity-level events are governed locally and do not propagate upward unless they breach the capability ceiling or cross a regulatory threshold.',
      },
      {
        title: 'Cross-Entity Exception Patterns',
        tags: [{ label: 'Use Cases', color: 'blue' }],
        body: 'The quarterly Exception Pattern Board Review currently surfaces systemic issues within one entity. At scale, the same pattern analysis must run cross-entity: if the IDP extraction capability is generating elevated exception rates across three different entity deployments simultaneously, that is a capability-level signal — not three independent entity-level problems. Cross-entity exception aggregation requires a platform-level monitoring layer and a defined escalation path to the Platform Board that bypasses entity Tier 1.',
      },
      {
        title: 'Regulatory Horizon: Jurisdiction Branching',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'The Regulatory Horizon Review currently scans EU frameworks. At scale, horizon scanning branches by jurisdiction: EU obligations (AI Act, DORA, Solvency II), Singapore (MAS TRM Guidelines, PDPA), Australia (Privacy Act, ASIC regulatory guides), and any US state-level patchwork in scope. Each jurisdiction module has a designated maintainer responsible for translating incoming regulatory changes into governance model updates. The Platform Board aggregates cross-jurisdiction impacts; entity-level Legal & Compliance owns local implementation.',
      },
    ],
    crossLinks: [
      { label: 'Platform Governance Board — Operating Model →', tab: 'opmodel' },
      { label: 'Capability Registry events — Agent Register →', tab: 'agents' },
    ],
  },

  platformorg: {
    tabId: 'platformorg',
    framing: 'The platform/organisation boundary is drawn for one entity operating in one regulatory context. At scale, a third layer appears between them: a governance coordination layer that mediates platform capabilities against multiple entities\' governance requirements without duplicating effort across each.',
    axes: ['jurisdictions', 'use-cases', 'people'],
    items: [
      {
        title: 'The Governance Coordination Layer',
        tags: [{ label: 'Use Cases', color: 'blue' }, { label: 'Jurisdictions', color: 'amber' }],
        body: 'The governance coordination layer — sometimes called a control plane in technical architectures — sits above the agentic platform and below the entity governance structure. It does four things the platform cannot do and each entity should not do independently: manages the Capability Registry (what is certified and at what version), routes governance events to the correct committee level (entity vs. platform), enforces regulatory context parameters per deployment, and manages policy version dependencies across capability deployments. It is organisational infrastructure, not an AI system — it does not make governance judgments; it enforces the ones humans have already made.',
      },
      {
        title: 'Expanding "What the Organisation Must Design"',
        tags: [{ label: 'Use Cases', color: 'blue' }, { label: 'Jurisdictions', color: 'amber' }],
        body: 'The current right-hand column — what counts as a reviewable decision, acceptable thresholds, exception routing, document authority, change governance, human oversight policy — remains entirely valid. At scale, three additional items join it: the Capability Registry and certification process (who certifies, at what standard, with what evidence); Regulatory Context Modules (what the jurisdiction-specific governance parameters are, who maintains them, how they are updated when regulations change); and cross-entity governance standards (the minimum floor every entity deployment must meet, and the process for enforcing it).',
      },
      {
        title: 'What the Coordination Layer Is Not',
        body: 'The coordination layer is not an autonomous governance agent. Making it "smarter" — able to classify governance events, recommend committee decisions, or autonomously update regulatory parameters — recreates the accountability diffusion problem at the governance layer itself. If the coordination layer is making governance judgments, who governs the coordination layer? It must remain a routing and enforcement layer operating on rules humans have defined, not an additional AI system governing the AI systems.',
      },
      {
        title: 'The New Tension: Standardisation vs. Local Fit',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'V1 has one tension that doesn\'t resolve cleanly: autonomy vs. control. At scale, a second appears. Platform-level standardisation (common capability definitions, common authority ceilings, common audit standards) creates efficiency and consistency. Local regulatory and operational requirements create legitimate pressure for divergence. The governance coordination layer must enforce the floor while preserving entity-level configuration space above it — the design challenge is defining where the floor sits, not whether it exists.',
      },
    ],
    caveat: 'Multi-jurisdiction simultaneous application — a single workflow touching data subjects and regulated entities in different jurisdictions at the same time — is not resolved by the coordination layer alone. Conflicting regulatory obligations require explicit legal design per jurisdiction pair before deployment, not runtime resolution.',
    crossLinks: [
      { label: 'Capability Registry — Agent Register →', tab: 'agents' },
      { label: 'Platform Governance Board — Operating Model →', tab: 'opmodel' },
      { label: 'Regulatory Context Modules — Regulatory →', tab: 'regulatory' },
    ],
  },

  regulatory: {
    tabId: 'regulatory',
    framing: 'The four frameworks here — EU AI Act, DORA/NIS-2, GDPR, Solvency II — are specific to EU-regulated entities. Expanding to non-EU jurisdictions requires each framework\'s obligations to be modelled as a discrete Regulatory Context Module: jurisdiction-specific governance parameters that agents read from the coordination layer rather than having embedded in their architecture.',
    axes: ['jurisdictions'],
    items: [
      {
        title: 'The Regulatory Context Module',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'A Regulatory Context Module defines, for a given jurisdiction: the risk classification framework and what obligations follow (equivalent to EU AI Act tiers); the automated decision rights available to agents (equivalent to GDPR Art. 22 limits and exemptions); mandatory human oversight triggers (what decisions require human review regardless of agent confidence); incident reporting obligations, timelines, and competent authorities; and audit trail standards (what the log must contain, in what format, for how long). Agents are deployed with a jurisdiction parameter; the coordination layer injects the relevant module at runtime.',
      },
      {
        title: 'Non-EU Equivalents: Not Drop-In Substitutes',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'Rough equivalents exist for major non-EU jurisdictions. Singapore\'s MAS Model AI Governance Framework addresses automated decision accountability. Australia\'s Privacy Act and ASIC\'s regulatory guides create human oversight obligations for consequential decisions. US state-level AI laws (Illinois, Colorado, Texas) create a patchwork without a federal equivalent to EU AI Act. These are not parameter substitutions — each requires genuine legal design to translate obligations into governance parameters. The module concept holds; the effort to populate each module is non-trivial.',
      },
      {
        title: 'What Doesn\'t Parameterise Cleanly',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'Some regulatory obligations resist modularisation. Data residency requirements (where data is processed and stored) interact with centralised audit logging architecture in ways that cannot be resolved by a parameter swap — they may require separate infrastructure per jurisdiction. Conflicting automated decision rights — an EU data subject\'s GDPR Art. 22 rights vs. a different standard in the processing jurisdiction — require explicit legal design for each jurisdiction pair, documented before deployment rather than resolved at runtime.',
      },
      {
        title: 'Module Maintenance: Who Owns the Regulatory Context Library',
        tags: [{ label: 'People & Roles', color: 'purple' }],
        body: 'Each Regulatory Context Module requires a designated maintainer: typically Legal & Compliance for that jurisdiction, with a defined review trigger (regulatory update, enforcement action, new guidance) and a change process that routes through the Platform Governance Board before the updated module activates in live deployments. An unreviewed regulatory update propagating to live agent configurations is the equivalent of a policy document change activating without governance review — the failure mode Layer 03 of the governance framework is designed to prevent.',
      },
    ],
    caveat: 'The Regulatory Context Module concept is sound for single-jurisdiction deployments. Cross-jurisdiction simultaneous application — where a single workflow is subject to multiple regulatory regimes at once — is an open design challenge requiring jurisdiction-pair-specific legal analysis, not a module architecture problem.',
    crossLinks: [
      { label: 'Governance coordination layer — Platform vs. Org →', tab: 'platformorg' },
      { label: 'Data & Decision jurisdiction standards — Governance Layer 04 →', tab: 'governance', options: { openLayerIndex: 3 } },
      { label: 'Jurisdiction horizon scanning — Gov. Flow →', tab: 'govflow' },
    ],
  },

  compliance: {
    tabId: 'compliance',
    framing: 'The checklists and decision trees here are built for EU-regulated entities. At scale, the checklist structure becomes a template — instantiated per jurisdiction by the Legal & Compliance team responsible for each Regulatory Context Module.',
    axes: ['jurisdictions'],
    items: [
      {
        title: 'Checklist Structure as a Jurisdiction Template',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'Each compliance framework card follows the same structure: scope and applicability, key obligations, implementation checklist, and decision triggers. This structure transfers to non-EU jurisdictions — what changes is the content, not the architecture. A Singapore MAS TRM checklist, an Australian Privacy Act checklist, or a US state AI law checklist would follow identical structure, enabling consistent readiness assessment across jurisdictions without redesigning the governance process each time.',
      },
      {
        title: 'The Human Oversight Decision Tree at Scale',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'The current decision tree has one input path: EU regulatory context. At scale, jurisdiction becomes the first branch. "Is this deployment subject to EU AI Act?" produces the current tree. "Is this deployment subject to MAS Model AI Framework?" produces a parallel branch with different obligation triggers but structurally similar questions: risk classification → oversight obligations → documentation requirements → incident reporting. The tree structure is reusable; the branch content requires jurisdiction-specific legal design.',
      },
      {
        title: 'What a Non-EU Assessment Needs to Address',
        tags: [{ label: 'Jurisdictions', color: 'amber' }],
        body: 'Any non-EU jurisdiction module requires at minimum: risk classification framework and which use cases trigger elevated obligations; automated decision rights — what decisions agents may make without mandatory human review, and on what legal basis; incident reporting — to whom, in what timeframe, at what severity threshold; audit and explainability standards — what the record of an automated decision must contain to satisfy both regulator and data subject rights; and outsourcing / third-party AI obligations governing the platform relationship.',
      },
    ],
    crossLinks: [
      { label: 'Regulatory Context Modules — Regulatory →', tab: 'regulatory' },
      { label: 'Module maintenance ownership — Operating Model →', tab: 'opmodel' },
    ],
  },
}
