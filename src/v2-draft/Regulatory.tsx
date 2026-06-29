import { regData } from '../../data/regulatory'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface RegulatoryProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function Regulatory({ onNavigate }: RegulatoryProps) {
  return (
    <div className="section active" id="section-regulatory">
      <div className="section-title">Regulatory Obligations</div>
      <div className="section-desc">
        Key regulatory frameworks shaping the governance architecture. Each framework drives specific design decisions — authority gates, audit logging, human oversight mechanisms, and incident reporting. See the Compliance Ref. tab for specific obligations, deadlines, and checklists.
      </div>

      <div className="callout">
        <strong>Architectural lens:</strong> This tab covers how regulations shape governance design. For specific article-level obligations, implementation deadlines, and readiness checklists, use the <strong>Compliance Ref.</strong> tab.
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

      <ScalabilitySection data={scalabilitySections.regulatory} onNavigate={onNavigate} />
    </div>
  )
}
