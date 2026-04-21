import { regData } from '../../data/regulatory'

interface RegulatoryProps {
  onNavigate: (tab: string) => void
}

export default function Regulatory({ onNavigate }: RegulatoryProps) {
  return (
    <div className="section active" id="section-regulatory">
      <div className="section-title">Regulatory Frameworks</div>
      <div className="section-tagline">How EU AI Act, NIS-2, GDPR, and Solvency II shape governance architecture</div>
      <div className="section-desc">
        Each key framework drives specific design decisions — authority gates, audit logging, human oversight mechanisms, and incident reporting. See the Compliance Ref. tab for specific obligations, deadlines, and checklists.
      </div>

      <div className="callout">
        <strong>Architectural lens:</strong> This tab covers how regulations shape governance design. For specific article-level obligations, implementation deadlines, and readiness checklists, use the{' '}
        <span
          onClick={() => onNavigate('compliance')}
          style={{ color: 'var(--accent-cyan)', cursor: 'pointer' }}
        >
          Compliance Ref. →
        </span>
      </div>

      <div className="reg-grid" id="reg-grid">
        {regData.map((framework) => (
          <div className="reg-card" key={framework.name}>
            <div className="reg-card-header">
              <div className="reg-icon">{framework.icon}</div>
              <div>
                <div className="reg-name">{framework.name}</div>
                <div className="reg-scope">{framework.scope}</div>
              </div>
            </div>
            <div className="reg-body">
              {framework.obligations.map((ob, i) => (
                <div className="reg-obligation" key={i}>
                  <span className={`reg-ob-label ${ob.labelClass}`}>{ob.label}</span>
                  <div
                    className="reg-ob-text"
                    dangerouslySetInnerHTML={{ __html: ob.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
