import { useState, useEffect, useRef } from 'react'
import { gfDetails, gfFlows, blockToFlow, tierY, tierColors } from '../../data/govFlow'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface GovFlowProps {
  initialBlockKey?: string
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function GovFlow({ initialBlockKey, onNavigate }: GovFlowProps) {
  const [activeBlock, setActiveBlock] = useState<string | null>(initialBlockKey ?? null)
  const [activeFlow, setActiveFlow]   = useState<string | null>(
    initialBlockKey ? (blockToFlow[initialBlockKey] ?? null) : null
  )
  const svgRef      = useRef<SVGSVGElement>(null)
  const flowRef     = useRef<HTMLDivElement>(null)
  const detailRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeFlow || !svgRef.current) return
    const f = gfFlows[activeFlow]
    if (!f) return

    const col = f.colorHex
    let h = `<defs>
      <marker id="gfarrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="${col}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>`

    ;([1, 2, 3] as const).forEach(t => {
      const y  = tierY[t]
      const tc = tierColors[t]
      h += `<rect x="0" y="${y - 28}" width="860" height="56" rx="2" fill="${tc}" fill-opacity="0.04"/>`
      h += `<text x="8" y="${y - 14}" font-family="'DM Mono',monospace" font-size="9" fill="${tc}" opacity="0.6" letter-spacing="1">T${t}</text>`
    })

    h += `<line x1="0" y1="${tierY[2] - 28}" x2="860" y2="${tierY[2] - 28}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`
    h += `<line x1="0" y1="${tierY[1] - 28}" x2="860" y2="${tierY[1] - 28}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`

    const steps = f.steps

    for (let i = 0; i < steps.length - 1; i++) {
      const s = steps[i]
      const n = steps[i + 1]
      if (n.branch) continue
      const sy = tierY[s.tier]
      const ny = tierY[n.tier]
      if (s.tier !== n.tier) {
        const mx = (s.x + n.x) / 2
        h += `<path d="M${s.x} ${sy} C${mx} ${sy} ${mx} ${ny} ${n.x} ${ny}"
          fill="none" stroke="${col}" stroke-width="1.5" stroke-dasharray="5 3" opacity="0.65"
          marker-end="url(#gfarrow)"
          style="animation:gfFlowIn 0.5s ease ${i * 0.1}s both;"/>`
      } else {
        h += `<line x1="${s.x + 20}" y1="${sy}" x2="${n.x - 20}" y2="${ny}"
          stroke="${col}" stroke-width="1.5" opacity="0.8"
          marker-end="url(#gfarrow)"
          style="animation:gfFlowIn 0.5s ease ${i * 0.1}s both;"/>`
      }
    }

    if (activeFlow === 'change') {
      const s = steps[1]
      const b = steps[2]
      h += `<path d="M${s.x} ${tierY[s.tier] + 6} C${s.x} ${tierY[3]} ${b.x} ${tierY[3]} ${b.x} ${tierY[3]}"
        fill="none" stroke="${col}" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.5"
        marker-end="url(#gfarrow)"/>`
      h += `<text x="${(s.x + b.x) / 2 - 20}" y="${tierY[3] - 18}" font-family="'DM Mono',monospace" font-size="8" fill="${col}" opacity="0.6">Tier A only</text>`
    }

    steps.forEach((s, i) => {
      const sy    = tierY[s.tier]
      const lines = s.label.split('\n')
      const labelAbove = s.tier === 1
      h += `<g style="animation:gfFlowIn 0.4s ease ${i * 0.1}s both; opacity:0;">`
      h += `<circle cx="${s.x}" cy="${sy}" r="7" fill="${col}" opacity="0.85"/>`
      h += `<circle cx="${s.x}" cy="${sy}" r="7" fill="none" stroke="${col}" stroke-width="1.5" opacity="0.4"/>`
      h += `<rect x="${s.x - 24}" y="${sy + 11}" width="48" height="14" rx="3" fill="${col}" fill-opacity="0.15"/>`
      h += `<text x="${s.x}" y="${sy + 21}" text-anchor="middle" font-family="'DM Mono',monospace" font-size="8" fill="${col}">${s.time}</text>`
      const baseY = labelAbove ? sy - 18 : sy + 38
      lines.forEach((line, li) => {
        const ly = labelAbove
          ? baseY - (lines.length - 1 - li) * 13
          : baseY + li * 13
        h += `<text x="${s.x}" y="${ly}" text-anchor="middle" font-family="'DM Sans',sans-serif" font-size="10" fill="#e8f0ff" opacity="0.9">${line}</text>`
      })
      h += `</g>`
    })

    svgRef.current.innerHTML = h
  }, [activeFlow])

  useEffect(() => {
    if (activeBlock && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [activeBlock])

  function handleBlockClick(key: string) {
    setActiveBlock(key)
    const mapped = blockToFlow[key]
    if (mapped) setActiveFlow(mapped)
  }

  function handleFlowChip(key: string) {
    setActiveFlow(key)
    setActiveBlock(null)
  }

  function clearFlow() {
    setActiveFlow(null)
    setActiveBlock(null)
  }

  const d = activeBlock ? gfDetails[activeBlock] : null

  return (
    <div className="section active" id="section-govflow">
      <div className="section-title">Governance Flow — How the Tiers Operate Over Time</div>
      <div className="section-desc">
        The rhythm of governance: when each tier acts, what it produces, and how events propagate across tiers. Select an event flow below to trace how a trigger moves from detection to resolution.
      </div>

      {/* Time axis + tier lanes */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>

        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
          <div style={{ width: '140px', flexShrink: 0, padding: '0.6rem 1rem', borderRight: '1px solid var(--border)' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
              Tier / Cadence
            </span>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            {['Continuous', 'Daily', 'Weekly', 'Monthly', 'Quarterly'].map(col => (
              <div className="gf-time-col" key={col}>{col}</div>
            ))}
          </div>
        </div>

        {/* Tier 1 */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', minHeight: '190px' }}>
          <div className="gf-tier-sidebar gf-t1">
            <div className="gf-tier-num" style={{ color: 'var(--accent-purple)' }}>1</div>
            <div className="gf-tier-name">Strategic</div>
            <div className="gf-tier-cadence" style={{ color: 'var(--accent-purple)' }}>Monthly · Quarterly</div>
          </div>
          <div className="gf-tier-canvas">
            {[
              { key: 't1-authority', style: { left: '60%', top: '12px',  width: '17%' }, title: 'Authority Register Review',  sub: 'Scope creep · Coverage gaps' },
              { key: 't1-deployment',style: { left: '60%', top: '72px',  width: '17%' }, title: 'Agent Deployment Approval',   sub: 'New scope sign-off' },
              { key: 't1-reg',       style: { left: '60%', top: '132px', width: '17%' }, title: 'Regulatory Review',           sub: 'NIS-2 · AI Act horizon' },
              { key: 't1-patterns',  style: { left: '80%', top: '12px',  width: '17%' }, title: 'Exception Pattern Review',    sub: 'Board-level systemic view' },
              { key: 't1-aiact',     style: { left: '80%', top: '72px',  width: '17%' }, title: 'EU AI Act Conformity',        sub: 'Annual audit + sign-off' },
              { key: 't1-pl',        style: { left: '80%', top: '132px', width: '17%' }, title: 'P&L vs. Governance',          sub: 'Performance vs targets' },
            ].map(block => (
              <div
                key={block.key}
                className={`gf-block gf-b-purple${activeBlock === block.key ? ' selected' : ''}`}
                style={{ ...block.style, outline: activeBlock === block.key ? '2px solid var(--accent-purple)' : undefined }}
                onClick={() => handleBlockClick(block.key)}
              >
                <div className="gf-block-title">{block.title}</div>
                <div className="gf-block-sub">{block.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', minHeight: '190px' }}>
          <div className="gf-tier-sidebar gf-t2">
            <div className="gf-tier-num" style={{ color: 'var(--accent-amber)' }}>2</div>
            <div className="gf-tier-name">Operational</div>
            <div className="gf-tier-cadence" style={{ color: 'var(--accent-amber)' }}>Weekly</div>
          </div>
          <div className="gf-tier-canvas">
            {[
              { key: 't2-exceptions', style: { left: '40%', top: '12px',  width: '17%' }, title: 'Exception Queue Review',      sub: 'Volume · Pattern · SLA' },
              { key: 't2-thresholds', style: { left: '40%', top: '72px',  width: '17%' }, title: 'Confidence Threshold Check',  sub: 'Escalation rate in band?' },
              { key: 't2-drift',      style: { left: '40%', top: '132px', width: '17%' }, title: 'Drift Detection Run',          sub: 'vs. baseline distributions' },
              { key: 't2-changes',    style: { left: '60%', top: '12px',  width: '17%' }, title: 'Change Request Intake',        sub: 'Classify · Prioritise' },
              { key: 't2-overrides',  style: { left: '60%', top: '72px',  width: '17%' }, title: 'Override Analysis',            sub: 'Agent failure patterns?' },
              { key: 't2-data',       style: { left: '60%', top: '132px', width: '17%' }, title: 'Data Quality SLA Report',      sub: 'Upstream source health' },
            ].map(block => (
              <div
                key={block.key}
                className={`gf-block gf-b-amber${activeBlock === block.key ? ' selected' : ''}`}
                style={{ ...block.style, outline: activeBlock === block.key ? '2px solid var(--accent-amber)' : undefined }}
                onClick={() => handleBlockClick(block.key)}
              >
                <div className="gf-block-title">{block.title}</div>
                <div className="gf-block-sub">{block.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3 */}
        <div style={{ display: 'flex', minHeight: '80px' }}>
          <div className="gf-tier-sidebar gf-t3">
            <div className="gf-tier-num" style={{ color: 'var(--accent-green)' }}>3</div>
            <div className="gf-tier-name">Real-time</div>
            <div className="gf-tier-cadence" style={{ color: 'var(--accent-green)' }}>Always on</div>
          </div>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
            <div
              className="gf-continuous-band"
              style={{ outline: activeBlock === 't3-monitoring' ? '2px solid var(--accent-green)' : undefined }}
              onClick={() => handleBlockClick('t3-monitoring')}
            >
              <div className="gf-pulse-dot" />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: 'var(--accent-green)', letterSpacing: '0.06em' }}>
                Platform monitoring &nbsp;·&nbsp; Alert detection &nbsp;·&nbsp; Authority gate integrity &nbsp;·&nbsp; Payment success tracking &nbsp;·&nbsp; On-call coverage 24/7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity detail panel */}
      <div
        ref={detailRef}
        className={`gf-detail-panel${d ? ' visible' : ''}`}
        id="gf-detail-panel"
      >
        {d && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase',
                letterSpacing: '0.1em', padding: '0.2rem 0.5rem', borderRadius: '2px',
                border: `1px solid ${d.color}`, color: d.color, background: `${d.color}18`
              }}>
                {d.tier}
              </span>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--text-bright)' }}>
                {d.title}
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '1rem' }}>
              {d.what}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.4rem', paddingBottom: '0.3rem', borderBottom: '1px solid var(--border)' }}>Accountable</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text)' }}>{d.who}</div>
                <div style={{ marginTop: '0.75rem', fontFamily: "'DM Mono',monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.4rem', paddingBottom: '0.3rem', borderBottom: '1px solid var(--border)' }}>Inputs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{d.inputs}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '0.4rem', paddingBottom: '0.3rem', borderBottom: '1px solid var(--border)' }}>Outputs</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{d.outputs}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-purple)', marginBottom: '0.4rem', paddingBottom: '0.3rem', borderBottom: '1px solid var(--border)' }}>↑ Triggers up</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>{d.triggersUp}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-green)', marginBottom: '0.4rem', paddingBottom: '0.3rem', borderBottom: '1px solid var(--border)' }}>↓ Triggers down</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>{d.triggersDown}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event flows */}
      <div style={{ marginTop: '1.5rem' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-bright)', marginBottom: '0.3rem' }}>
          Event Flows
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '1rem' }}>
          Select a trigger to trace propagation across tiers
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {[
            { key: 'incident', label: 'Incident detected',  color: 'var(--accent-red)',    hex: '#e05252' },
            { key: 'drift',    label: 'Agent drift',         color: 'var(--accent-cyan)',   hex: '#00c4cc' },
            { key: 'change',   label: 'Change request',      color: 'var(--accent-orange)', hex: '#f97316' },
            { key: 'reg',      label: 'Regulatory trigger',  color: 'var(--accent-purple)', hex: '#8b5cf6' },
          ].map(chip => (
            <button
              key={chip.key}
              id={`gfc-${chip.key}`}
              className={`gf-flow-chip${activeFlow === chip.key ? ' active' : ''}`}
              style={{ '--fc': chip.color } as React.CSSProperties}
              onClick={() => handleFlowChip(chip.key)}
            >
              <span className="gf-chip-dot" style={{ background: chip.color }} />
              {chip.label}
            </button>
          ))}
          <button
            className="gf-flow-chip"
            style={{ '--fc': 'var(--text-dim)' } as React.CSSProperties}
            onClick={clearFlow}
          >
            ✕ clear
          </button>
        </div>

        {activeFlow && (
          <div
            ref={flowRef}
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <div className="gf-flow-title" style={{ color: gfFlows[activeFlow]?.color }}>
                {gfFlows[activeFlow]?.title}
              </div>
              <div className="gf-flow-subtitle">{gfFlows[activeFlow]?.subtitle}</div>
            </div>
            <svg
              ref={svgRef}
              width="100%"
              viewBox="0 0 860 280"
              role="img"
              aria-label={`Event flow diagram: ${gfFlows[activeFlow]?.title} — ${gfFlows[activeFlow]?.subtitle}`}
              style={{ overflow: 'visible', display: 'block' }}
            />
          </div>
        )}
      </div>

      <ScalabilitySection data={scalabilitySections.govflow} onNavigate={onNavigate} />
    </div>
  )
}
