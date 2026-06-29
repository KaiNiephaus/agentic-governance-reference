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
      <div className="hero">
        <div className="hero-label">Applied Use Case · Insurance · Claims Processing</div>
        <h1>Allianz Partners<br /><em>Autonomous Claims Architecture</em></h1>
        <div className="hero-sub">
          End-to-end governance architecture for an agentic claims processing network — covering process flow, agent authority boundaries, governance layers, operating model, and regulatory obligations under EU AI Act and NIS-2.
        </div>
        <div className="hero-metrics">
          <div className="metric-card">
            <span className="metric-val">29→3.5<span className="metric-unit">Days</span></span>
            <span className="metric-label">avg resolution (Otera/HFS)<br /><span style={{ fontStyle: 'italic' }}>19→4 days (Allianz)</span></span>
          </div>
          <div className="metric-card">
            <span className="metric-val">90%+<span className="metric-unit">STP</span></span>
            <span className="metric-label">(Otera platform)<br /><span style={{ fontStyle: 'italic' }}>65% (Allianz)</span></span>
          </div>
          <div className="metric-card">
            <span className="metric-val">€300M</span>
            <span className="metric-label">Targeted annual profit impact (Allianz)</span>
          </div>
          <div className="metric-card">
            <span className="metric-val">30<span className="metric-unit">Countries</span></span>
            <span className="metric-label">In scope (Otera/HFS)</span>
          </div>
        </div>
      </div>

      <div className="callout">
        <strong>How to use this reference:</strong> Each tab represents a distinct governance domain. Start with Process Flow to understand what the agent network actually does, then work through Agent Register (authority boundaries), Governance Layers (structural controls), Operating Model (who does what), and Regulatory (compliance obligations). Every section is interactive — click nodes and cards for detail. <strong>Note:</strong> The process flow and agent architecture are illustrative governance models grounded in the Allianz Partners case — not Allianz's documented internal design. Metrics sourced from Otera/HFS and Allianz's own published data are labelled accordingly.
      </div>

      <div className="section-title">What makes this case useful</div>
      <div className="section-desc">
        Allianz Partners processes millions of travel insurance and assistance claims across 30 countries. The transformation is documented and real — making it a reliable anchor for understanding governance in production.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            The Problem Before
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Claims routed manually across 15+ systems. Adjusters in each country applying interpretation variance to identical policy rules. 29-day average resolution. Volume scaling required proportional headcount. No unified audit trail across the claims lifecycle.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            The Architecture After
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Specialist agents handle intake, triage, document extraction, policy validation, fraud detection, settlement calculation, and payment — collaborating under a unified governance layer. At the operational level, humans handle exceptions; at the governance level, humans actively oversee the system through weekly reviews, monthly authority checks, and quarterly board-level scrutiny. Every agent decision is traceable, explainable, and reversible. <em>Note: the seven-agent architecture in this reference is illustrative — constructed as a governance model. Allianz's own published Project Nemo also uses seven specialist agents for claims processing, confirming the pattern is realistic.</em>
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
            The Governance Challenge
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            When agents make autonomous financial decisions at scale, "trust" requires architecture — not just policy. Authority boundaries, escalation triggers, change control, accountability assignment, and regulatory audit trails must all be designed independently of the platform that runs the agents.
          </div>
        </div>
      </div>

      <div className="callout mt3">
        <strong>Key distinction:</strong> The governance architecture in this reference covers four independent design problems: authority (what each agent may decide), accountability (who owns outcomes), change (how the system evolves), and data and decision quality (what counts as sufficient explanation). A platform addresses none of these by design — they require explicit organisational decisions before deployment.
      </div>

      <ScalabilitySection data={scalabilitySections.overview} onNavigate={onNavigate} />
    </div>
  )
}
