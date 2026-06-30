import type { NodeDetail } from '../../types'

interface DetailPanelProps {
  detail: NodeDetail | null
}

const RISK_CLASS_MAP: Record<string, string> = {
  low: 'low',
  medium: 'med',
  high: 'high',
  critical: 'crit',
}

function parseRisk(risk: string): { label: string; rest: string; chipClass: string | null } {
  const [label, ...restParts] = risk.split(' — ')
  const rest = restParts.join(' — ')
  const chipClass = RISK_CLASS_MAP[label.trim().toLowerCase()] ?? null
  return { label: label.trim(), rest, chipClass }
}

export default function DetailPanel({ detail }: DetailPanelProps) {
  return (
    <div className={`detail-panel${detail ? ' visible' : ''}`} id="node-detail">
      {detail && (
        <div id="node-detail-content">
          <span className={`detail-tag ${detail.typeClass}`}>{detail.type}</span>
          <h3>{detail.name}</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '1rem' }}>
            {detail.desc}
          </p>
          <div className="detail-grid">
            <div className="detail-block">
              <div className="detail-block-title">Inputs</div>
              <div className="detail-block-body">
                <ul>
                  {detail.inputs.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="detail-block">
              <div className="detail-block-title">Outputs</div>
              <div className="detail-block-body">
                <ul>
                  {detail.outputs.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="detail-block">
              <div className="detail-block-title">Governance Controls</div>
              <div className="detail-block-body">
                <ul>
                  {detail.governance.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: 'var(--surface2)', borderRadius: '4px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
              Risk Level:
            </span>
            {(() => {
              const { label, rest, chipClass } = parseRisk(detail.risk)
              return (
                <>
                  {chipClass
                    ? <span className={`risk-chip risk-${chipClass}`}>{label}</span>
                    : <span style={{ color: 'var(--text)' }}>{label}</span>}
                  {rest && <span style={{ color: 'var(--text)' }}>— {rest}</span>}
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
