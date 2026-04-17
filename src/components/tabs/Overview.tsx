export default function Overview() {
  return (
    <div className="section active" id="section-overview">

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-label">Applied Usecase · Insurance · Autonomous Claims Processing</div>
        <h1>Agentic Governance in Practice</h1>
        <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--accent-amber)', marginTop: '0.5rem' }}>
          An applied architecture based on the Allianz Partners / Otera claims automation case
        </div>
        <div className="hero-sub" style={{ marginTop: '0.75rem', maxWidth: '700px' }}>
        Agentic governance, particularly in regulated and international contexts, is genuinely complex — and most frameworks stay abstract. This interactive reference aims to make agentic governance concrete and explorable. It defines an end-to-end organisational governance infrastructure for a seven-agent autonomous travel insurance claims pipeline — covering authority boundaries, operating model, escalation cadences, and regulatory obligations.<br />While the agent architecture, definitions, and thresholds have been specifically designed for the travel insurance claims scenario, grounded in the Allianz Partners / Otera transformation case, the governance relationships they demonstrate apply broadly to any organisation deploying autonomous agents at scale in a regulated environment.        </div>
      </div>

      {/* ── THE CASE ── */}
      <div className="section-title">The Case</div>
      <div className="section-desc">
        Allianz Partners processes millions of travel insurance and assistance claims across 30 countries — a scale at which manual processing creates structural inconsistency, cost, and speed problems that headcount alone cannot solve. Autonomous agents offer a path to consistent, fast, auditable claims handling across all markets, a transformation Allianz Partners and Otera are running in production today.
      </div>

      <div className="hero-metrics" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
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
          <span className="metric-val">30<span className="metric-unit">Countries</span></span>
          <span className="metric-label">In scope</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-blue)', marginBottom: '0.5rem' }}>
            The Problem
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Claims routed manually across 15+ systems. Adjusters in each country applying interpretation variance to identical policy rules. 29-day average resolution. Volume scaling required proportional headcount. No unified audit trail across the claims lifecycle.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
            The Target Architecture
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            Specialist agents handle intake, document extraction, policy validation, fraud detection, settlement calculation, and payment, collaborating under a unified governance layer. Humans handle exceptions at the operational level and actively oversee the system through weekly reviews, monthly authority checks, and quarterly board-level scrutiny. Every agent decision is traceable and explainable. Reversibility is classified per decision class.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>
            The Governance Challenge
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
            When agents make autonomous financial decisions at scale, trust requires architecture, not just policy. Authority boundaries, escalation triggers, change control, accountability assignment, and regulatory audit trails must all be designed independently of the platform that runs the agents. Under the EU AI Act, this is a legal requirement, not just good practice.
          </div>
        </div>
      </div>

      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.875rem', fontStyle: 'italic', lineHeight: 1.6 }}>
        Metrics sourced from HFS Research / Otera case study (2025) and Allianz Partners published data.
      </div>

      {/* ── THE GOVERNANCE ARCHITECTURE ── */}
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '5rem', paddingTop: '2rem' }}>
      <div className="section-title">The Governance Architecture</div>
      <div className="section-desc">
        The seven-agent and governance architecture developed in this reference addresses four distinct design problems that require explicit organisational decisions — independent of whatever platform runs the agents.
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

      {/* ── HOW TO NAVIGATE (hidden) ── */}
      {/* <div className="callout" style={{ marginTop: '2rem' }}>
        <strong>How to navigate this reference:</strong> Each tab covers a distinct governance domain. Start with Process Flow to understand what the agent network does, then work through Agent Register (authority boundaries per agent), Governance Layers (the four design problems in detail), Operating Model (who does what and when), and Regulatory (compliance obligations by framework). Every section is interactive — click nodes and cards for detail.<br /><br />
      </div> */}

    </div>
  )
}
