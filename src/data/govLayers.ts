import type { GovLayer } from '../types'

export const govLayers: GovLayer[] = [
  {
    num: '01',
    name: 'Authority Governance',
    color: 'tag-blue',
    subtitle: 'What each agent is permitted to decide — and what it cannot',
    badges: ['Agent Authority Register', 'Decision Scope', 'Value Thresholds', 'Reversibility Classes'],
    what: [
      { title: 'Agent Authority Register', body: 'Central artefact mapping each agent to: permitted decision scope, financial authority ceiling, reversibility class (reversible / hard-to-reverse / irreversible), and accountable human owner. Reviewed quarterly.' },
      { title: 'Decision Scope Boundaries', body: "Each agent has a formally defined scope of what it can decide, what it cannot decide, and what triggers mandatory escalation. Scope boundaries are independent of the platform's technical capabilities." },
      { title: 'Value Thresholds', body: 'Financial authority matrix defining at what monetary value autonomous decision-making must yield to human approval. Board-approved; changes require formal governance process.' }
    ],
    how: [
      { title: 'Authority Gate', body: 'Hard system stops enforced at defined thresholds. Not configurable by operations teams — requires governance process to change.' },
      { title: 'Confidence Thresholds', body: 'Per-agent, per-decision-class minimum confidence scores below which escalation is mandatory. Set by governance committee, not platform default.' },
      { title: 'Escalation Triggers', body: 'Formal catalogue of scenarios that trigger mandatory human review, independent of confidence scores. Includes novel scenarios, regulatory exposure cases, and customer-disputed decisions.' }
    ],
    failure: [
      { title: 'Scope Creep', body: 'Agent gradually handles cases outside its original scope as edge cases accumulate. Prevented by: quarterly authority register review + anomaly detection on escalation rate changes.' },
      { title: 'Threshold Drift', body: 'Authority thresholds informally raised by operations without governance process. Prevented by: Board approval requirement + change log audit.' },
      { title: 'Authority Gap', body: 'New claim type or scenario not covered by existing authority definitions. Detected by: weekly "unclassified escalation" review.' }
    ]
  },
  {
    num: '02',
    name: 'Accountability Governance',
    color: 'tag-amber',
    subtitle: 'When something goes wrong — who is responsible, and how is that documented',
    badges: ['RACI', 'EU AI Act Art. 22', 'Incident Ownership', 'NIS-2 Reporting'],
    what: [
      { title: 'Human Accountability Assignment', body: 'Every agent in the network has a named human accountable — not for day-to-day operation, but for: scope decisions, model change approval, incident response, and regulatory reporting.' },
      { title: 'System-Level Accountability', body: 'Multi-agent interactions can produce outcomes no single agent "decided". The governance model must assign accountability for emergent system behaviour, not just individual agent behaviour.' },
      { title: 'Claimant Rights', body: 'Under EU AI Act and GDPR Art. 22, claimants have the right to human review of automated decisions with significant effect. This right must be operationally realisable. Stating it in policy is not sufficient.' }
    ],
    how: [
      { title: 'Accountability RACI', body: 'Formal RACI mapping agents to human accountables across: normal operation, exception handling, model changes, regulatory incidents, and claimant complaints.' },
      { title: 'Incident Response Protocol', body: 'Defined protocol for agent-related incidents: detection → containment → accountable owner notified → impact assessment → regulatory notification if required (NIS-2: 72-hour window).' },
      { title: 'Complaint Handling', body: 'Claimants who receive an automated decision they dispute are entitled to human review. SLA: 5 business days. Outcome documented regardless of whether original decision is upheld.' }
    ],
    failure: [
      { title: 'Diffusion of Responsibility', body: 'In multi-agent networks, bad outcomes can result from agent interaction — no single agent "decided" the wrong thing. Mitigated by: assigning system-level accountability to a named executive.' },
      { title: 'Accountability Vacuum', body: 'Agent owner leaves organisation; accountability not reassigned. Prevented by: accountability register reviewed quarterly; departures trigger immediate reassignment.' },
      { title: 'NIS-2 Clock Miss', body: '72-hour reporting window for significant incidents missed because incident detection was slow or ownership unclear. Prevented by: automated incident detection + clear escalation path.' }
    ]
  },
  {
    num: '03',
    name: 'Change Governance',
    color: 'tag-red',
    subtitle: 'How the agent network changes, who controls it, and what governs autonomous self-optimisation',
    badges: ['Model Change Classification', 'Change Board', 'Auto-Optimisation Controls', 'Drift Detection'],
    what: [
      { title: 'Change Classification Taxonomy', body: 'Three-tier classification: (A) Parameter optimisation — low risk, can be automatic within defined bounds. (B) Behaviour change — requires peer review + ops approval. (C) Scope expansion — requires full governance review.' },
      { title: 'Auto-Optimisation Controls', body: "Platforms that auto-optimise agent behaviour create a governance gap. The governance model must define what optimisation is permitted autonomously and what requires human approval — separately from what the platform technically allows." },
      { title: 'Policy Document Changes', body: "When the policy document changes, the agent's ruleset must be reviewed before the new version is activated. Policy changes cannot automatically propagate to live agents without governance review." }
    ],
    how: [
      { title: 'Change Approval Workflow', body: 'Tier A: automated, logged. Tier B: Claims Tech + Operations sign-off, 5-day SLA. Tier C: Claims Governance Committee, full impact assessment, 15-day SLA.' },
      { title: 'Drift Detection', body: 'Weekly comparison of agent decision distributions vs. baseline. Statistically significant drift in any metric triggers a Tier B change review, even if no intentional change was made.' },
      { title: 'Rollback Capability', body: 'All agent versions are retained. Any change can be rolled back within 4 hours. Rollback authority: Head of Claims Technology without governance process (emergency); retrospective review required within 48 hours.' }
    ],
    failure: [
      { title: 'Silent Drift', body: 'Auto-optimisation changes agent behaviour without triggering change process. Mitigated by: drift detection + platform configuration to require approval for behaviour-class changes.' },
      { title: 'Policy-Ruleset Mismatch', body: "Legal team updates policy document; agent continues applying old rules. Prevented by: policy document version is a dependency in the agent's change log — document change triggers mandatory ruleset review." },
      { title: 'Unapproved Scope Expansion', body: "Agent begins handling a new claim type it wasn't validated for as edge cases accumulate. Detected by: weekly new-scenario monitoring + authority register coverage audit." }
    ]
  },
  {
    num: '04',
    name: 'Data & Decision Governance',
    color: 'tag-purple',
    subtitle: 'Input data integrity, decision explainability standards, and audit trail completeness',
    badges: ['Data Quality SLAs', 'Explainability Standard', 'Audit Log Spec', 'Confidence Governance'],
    what: [
      { title: 'Input Data Quality SLAs', body: 'Agents making consequential decisions are only as reliable as their input data. Formal data quality SLAs must be defined upstream of every decision-making agent — including completeness, timeliness, and accuracy thresholds.' },
      { title: 'Decision Explainability Standard', body: 'What counts as a sufficient explanation for a regulated automated decision is a governance decision, not a platform feature. The standard must be defined in terms the claimant can understand and the regulator will accept.' },
      { title: 'Audit Log Specification', body: 'The audit log must be specified independently of the platform. Minimum required fields: agent ID, decision timestamp, input data snapshot, decision output, confidence score, policy version cited, authority gate pass/fail, human override flag.' }
    ],
    how: [
      { title: 'Data Quality Gates', body: 'Upstream data quality checks block agents from processing on out-of-spec inputs. Quality failures escalate to data stewards, not to claims adjusters — separate escalation path.' },
      { title: 'Confidence Threshold Governance', body: 'Threshold values are owned by the Claims Governance Committee. Platform default thresholds are overridden on activation. Threshold changes follow Tier B change process.' },
      { title: 'Explainability Template', body: 'Approved customer-facing explanation template for each decision class. Reviewed by Legal + Customer Experience before activation. Agent output must map to template fields.' }
    ],
    failure: [
      { title: 'Unexplainable Decision', body: 'Claimant or regulator requests explanation; audit log insufficient. Prevented by: audit log specification reviewed against regulatory requirements before go-live.' },
      { title: 'Data Poisoning Upstream', body: 'Source system data quality degrades; agents begin making decisions on corrupted inputs. Mitigated by: input quality gate + upstream SLA monitoring.' },
      { title: 'Confidence Threshold Gaming', body: 'Operations teams informally lower thresholds to reduce escalation volume. Prevented by: threshold values in governance-controlled config, not operations-accessible settings.' }
    ]
  }
]
