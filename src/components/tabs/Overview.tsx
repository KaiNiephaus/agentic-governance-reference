import { useState } from 'react'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'
import Chevron from '../shared/Chevron'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface OverviewProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function Overview({ onNavigate }: OverviewProps) {
  const [caseOpen, setCaseOpen] = useState(false)

  return (
    <div className="section active" id="section-overview">

      {/* ── HERO ── */}
      <div className="hero" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
          Version 2.4 | August 2026
        </div>
        <div className="hero-label">Autonomous Claims Processing · Insurance</div>
        <h1>Agentic Governance in Practice</h1>
        <div style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '1.5rem', color: 'var(--accent-amber)', marginTop: '0.5rem' }}>
          An applied architecture for governing autonomous travel-claims resolution
        </div>
        <div className="hero-sub" style={{ marginTop: '1.5rem', maxWidth: 'calc(50% - 0.5rem)' }}>
          Agentic governance, particularly in regulated contexts, is genuinely complex. This reference makes it explorable in context through one applied scenario: a six-agent travel claims processing flow from intake to resolution, paired with the required governance architecture to run it responsibly.
        <br />
          The scope is deliberately narrowed to one use-case, one regulated entity operating within EU context, and a centralised governance model. This keeps the architecture tractable while exposing governance relationships — authority boundaries, escalation logic, change control, audit trails, operating cadences — that apply broadly to organisations deploying autonomous systems under the EU AI Act.
        <br />
         <br />
          For the applied scenario, travel-insurance claims resolution provides the operational context; the main subject, however, is the interplay of agentic systems, compliance obligations, and their implications for organisational and process design. Thus, product- and operation-specific aspects of travel insurance — coverage rules, emergency response, destination risk — are out of scope
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-bright)', marginTop: '0.75rem', lineHeight: 1.6, maxWidth: 'calc(50% - 0.5rem)' }}>
          The value of autonomous systems depends on the governance that makes them operational, accountable, and scalable in practice.
        </div>
      </div>

      {/* ── THE GOVERNANCE ARCHITECTURE ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="section-subtitle">The Governance Architecture</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

          {/* The Accountability Challenge */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              The Accountability Challenge
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              When agents make autonomous financial decisions at scale, trust requires architecture, not just policy. Authority boundaries, escalation triggers, change control, accountability assignment, and regulatory audit trails must all be designed independently of the platform that runs the agents. Under the EU AI Act, this is a legal requirement, not just good practice. The challenge compounds when operations span jurisdictions and require federated, regional governance structures — excluded here to keep the reference tractable.
            </div>
          </div>

          {/* The Target Architecture */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              The Target Architecture
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              For this reference — that covers the scenario of end-to-end travel claims resolution for a single regulated entity — specialist agents handle intake, document extraction, policy validation, fraud detection, settlement calculation, and payment, collaborating under a unified governance layer. Humans handle exceptions at the operational level and actively oversee the system through weekly reviews, monthly authority checks, and quarterly board-level scrutiny. Every agent decision is traceable and explainable. Reversibility is classified per decision class.
            </div>
          </div>

        </div>
      </div>

      {/* ── THE FOUR ORGANISATIONAL CHALLENGES ── */}
      <div style={{ marginTop: '2rem' }}>
      <div className="section-subtitle">The Four Organisational Challenges at the Center</div>
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

      {/* ── THE TRANSFORMATION CASE ── */}
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '2rem' }}>
        <div style={{ border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden' }}>

          {/* Header — always visible, click to expand */}
          <div
            onClick={() => setCaseOpen(!caseOpen)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.875rem 1.25rem', cursor: 'pointer', userSelect: 'none',
              borderBottom: caseOpen ? '1px solid var(--border)' : 'none',
            }}
          >
            <div className="section-subtitle" style={{ marginBottom: 0, fontSize: '1.1rem', color: 'var(--text-dim)' }}>The Inspiration Behind</div>

            {/* Chevron */}
            <Chevron style={{
              color: 'var(--text-dim)', fontSize: '0.8rem',
              transform: caseOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease', flexShrink: 0,
            }} />
          </div>

          {/* Body — revealed on expand */}
          {caseOpen && (
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

                {/* Left column: intro text */}
                <div className="section-desc" style={{ marginBottom: 0 }}>
                  While the governance architecture and agent pipeline are independently designed for this reference, the use case is inspired by Allianz Partners / Otera's autonomous travel-claims transformation, a real deployment operating across 30 countries.
                </div>

                {/* Right column: case content, card-wrapped */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                  {/* Card wrapping all case-sourced content */}
                  <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                    {/* Intro */}
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-bright)', marginBottom: '0.5rem' }}>
                        The Case
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: 0 }}>
                        Allianz Partners processes millions of travel insurance and assistance claims across 30 countries — a scale at which manual processing creates structural inconsistency, cost, and speed problems that headcount alone cannot solve. Here, autonomous agents offer a path to adress these business challenges through consistent, fast, auditable claims handling across all markets.
                      </div>
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

                  {/* Footnote */}
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    Information and metrics sourced from HFS Research / Otera case study (2025) and Allianz Partners published data.
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
