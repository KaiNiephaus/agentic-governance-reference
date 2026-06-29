import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface OverviewProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function Overview({ onNavigate }: OverviewProps) {
  return (
    <div className="section active" id="section-overview">

      {/* ── HERO ── */}
      <div className="hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
          Version 2.4 | June 2026
        </div>
        <div className="hero-label">Applied Usecase · Insurance · Autonomous Claims Processing</div>
        <h1>Agentic Governance in Practice</h1>
        <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--accent-amber)', marginTop: '0.5rem' }}>
          An applied architecture based on the Allianz Partners / Otera autonomous travel-claims resolution
        </div>
        <div className="hero-sub" style={{ marginTop: '0.75rem', maxWidth: '75%' }}>
          Agentic governance, particularly in regulated and international contexts, is genuinely complex. This interactive reference makes it explorable in context through one applied scenario, informed by the Allianz Partners / Otera case as its real-world foundation. <br />
        <br />
          While the original case reflects an ambitious international, multi-country deployment, the scope of the architecture designed for this reference is deliberately narrower: to make it tractable and to expose governance structures that remain relevant across different operational contexts.
        <br />Within that scope it defines a seven-agent autonomous claims pipeline and the organisational infrastructure required to govern it — scoped to one regulated entity operating within an EU context — showing how agents, governance mechanisms, authority boundaries, operating cadences, escalation paths, and regulatory obligations connect in practice.
        <br />
         <br />
        For the applied scenario, travel-insurance claims resolution provides the operational context; the main subject, however, is how organisations can deploy and govern autonomous agents at scale. The focus is therefore on the governance and process level, excluding product- and operation-specific aspects of travel insurance such as coverage rules, emergency response, and destination risk.
        </div>

        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-bright)', marginTop: '1.5rem', maxWidth: '75%', lineHeight: 1.6 }}>
          The value of autonomous systems depends on the governance that makes them operational, accountable, and scalable in practice.
        </div>
      </div>

      {/* ── THE CASE ── */}
      {/* Two-column layout: left = transformation case (real), right = reference design (authored) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>

        {/* ── Left column: The Transformation Case ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="section-subtitle">The Transformation Case</div>

          {/* Single card wrapping all case-sourced content */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>

            {/* Intro */}
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 0 }}>
              Allianz Partners processes millions of travel insurance and assistance claims across 30 countries — a scale at which manual processing creates structural inconsistency, cost, and speed problems that headcount alone cannot solve. Autonomous agents offer a path to consistent, fast, auditable claims handling across all markets, a transformation Allianz Partners and Otera are running in production today.
            </div>

            {/* The Problem */}
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-bright)', marginBottom: '0.5rem' }}>
                The Problem
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                Claims routed manually across 15+ systems. Adjusters in each country applying interpretation variance to identical policy rules. 29-day average resolution. Volume scaling required proportional headcount. No unified audit trail across the claims lifecycle.
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--border)' }} />

            {/* The Impact + metrics */}
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-bright)', marginBottom: '0.75rem' }}>
                The Impact
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 1.5rem' }}>
                <div className="metric-card">
                  <span className="metric-val">29→3.5<span className="metric-unit">Days</span></span>
                  <span className="metric-label">Avg resolution time</span>
                </div>
                <div className="metric-card">
                  <span className="metric-val">90%+</span>
                  <span className="metric-label">Straight-through processing rate</span>
                </div>
                <div className="metric-card">
                  <span className="metric-val">€300M</span>
                  <span className="metric-label">Targeted annual profit impact</span>
                </div>
                <div className="metric-card">
                  <span className="metric-val">30</span>
                  <span className="metric-label">Countries</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Right column: The Reference Architecture ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="section-subtitle">The Governance Architecture developed upon the case</div>

          {/* The Interpreted Target Architecture */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', flex: 1 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              The Target Architecture
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              For this reference — that covers the scenario of end-to-end travel claims resolution for a single regulated entity — specialist agents handle intake, document extraction, policy validation, fraud detection, settlement calculation, and payment, collaborating under a unified governance layer. Humans handle exceptions at the operational level and actively oversee the system through weekly reviews, monthly authority checks, and quarterly board-level scrutiny. Every agent decision is traceable and explainable. Reversibility is classified per decision class.
            </div>
          </div>

          {/* The Governance Challenge */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', flex: 1 }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              The Accountability Challenge
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              When agents make autonomous financial decisions at scale, trust requires architecture, not just policy. Authority boundaries, escalation triggers, change control, accountability assignment, and regulatory audit trails must all be designed independently of the platform that runs the agents. Under the EU AI Act, this is a legal requirement, not just good practice. The challenge compounds when operations span jurisdictions and require federated, regional governance structures — excluded here to keep the reference tractable.
            </div>
          </div>

        </div>
      </div>

      {/* Generalisation bridge */}
      <div className="callout" style={{ marginTop: '1.5rem' }}>
        While the agent pipeline, governance architecture, definitions, and thresholds have been specifically designed for this scenario, the governance relationships they demonstrate apply broadly to organisations deploying autonomous agents at scale in a regulated environment.
      </div>

      {/* Footnote */}
      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '3rem', fontStyle: 'italic', lineHeight: 1.6 }}>
        Information and metrics sourced from HFS Research / Otera case study (2025) and Allianz Partners published data. The target architecture is constructed for this scenario, informed by but distinct from Allianz's published Project Nemo.
      </div>

      {/* ── THE GOVERNANCE ARCHITECTURE ── */}
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '2rem' }}>
      <div className="section-subtitle">The Four Organisational Governance Challenges at the Center</div>
      <div className="section-desc">
        The developed architecture addresses four distinct design problems that require explicit organisational decisions — independent of whatever platform runs the agents.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            Authority
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
            What each agent may decide
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            What each agent may decide, and what it cannot. The boundaries are defined independently of the platform's technical capabilities.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
            Accountability
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
            Who owns outcomes
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Who owns outcomes when something goes wrong. Multi-agent systems diffuse responsibility by default. Solving it requires explicit organisational assignment.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-red)', marginBottom: '0.5rem' }}>
            Change
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
            How the system evolves
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            How the system evolves, including autonomous optimisation. Covers model updates, policy changes, and drift detection.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
            Data & Decision Quality
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>
            Input integrity and explainability
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Input data integrity, explainability standards, and audit trail completeness. What counts as a sufficient explanation is a governance decision, not a platform feature.
          </div>
        </div>
      </div>


      </div>

      <ScalabilitySection data={scalabilitySections.overview} onNavigate={onNavigate} />

    </div>
  )
}
