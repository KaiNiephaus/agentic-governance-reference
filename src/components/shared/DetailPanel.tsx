import type { NodeDetail } from '../../types'

interface DetailPanelProps {
  detail: NodeDetail | null
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
          <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: 'var(--surface2)', borderRadius: '4px', fontSize: '0.7rem' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.58rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
              Risk Level:{' '}
            </span>
            <span style={{ color: 'var(--text)' }}>{detail.risk}</span>
          </div>
        </div>
      )}
    </div>
  )
}
