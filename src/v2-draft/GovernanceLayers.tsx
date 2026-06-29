import { useState } from 'react'
import { govLayers } from '../../data/govLayers'
import Badge from '../shared/Badge'
import Chevron from '../shared/Chevron'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

const accentColors = ['blue', 'amber', 'red', 'purple'] as const

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface GovernanceLayersProps {
  initialOpenIndex?: number
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function GovernanceLayers({ initialOpenIndex, onNavigate }: GovernanceLayersProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex ?? null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="section active" id="section-governance">
      <div className="section-title">Governance Layers</div>
      <div className="section-desc">
        Four independent governance design problems that must be solved before deploying an agentic claims network. Click any layer to see what it covers, how it works in practice, and the failure modes it prevents.
      </div>

      <div className="layers-container" id="gov-layers">
        {govLayers.map((layer, i) => (
          <div
            className={`gov-layer${openIndex === i ? ' open' : ''}`}
            key={layer.num}
          >
            <div className="gov-layer-header" onClick={() => toggle(i)}>
              <div
                className="gov-layer-num"
                style={{ color: `var(--accent-${accentColors[i]})` }}
              >
                {layer.num}
              </div>
              <div className="gov-layer-info">
                <div className="gov-layer-name">{layer.name}</div>
                <div className="gov-layer-subtitle">{layer.subtitle}</div>
              </div>
              <div className="gov-layer-badges">
                {layer.badges.map((badge) => (
                  <Badge key={badge} label={badge} className={layer.color} />
                ))}
              </div>
              <Chevron className="gov-layer-chevron" />
            </div>

            <div className="gov-layer-body">
              <div className="gov-body-grid">
                <div>
                  <div className="gov-col-title">What It Covers</div>
                  {layer.what.map((item) => (
                    <div className="gov-item" key={item.title}>
                      <div className="gov-item-title">{item.title}</div>
                      <div className="gov-item-body">{item.body}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="gov-col-title">How It Works In Practice</div>
                  {layer.how.map((item) => (
                    <div className="gov-item" key={item.title}>
                      <div className="gov-item-title">{item.title}</div>
                      <div className="gov-item-body">{item.body}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="gov-col-title">Failure Modes & Mitigations</div>
                  {layer.failure.map((item) => (
                    <div
                      className="gov-item"
                      key={item.title}
                      style={{ borderColor: 'rgba(224,82,82,0.2)' }}
                    >
                      <div className="gov-item-title" style={{ color: 'var(--accent-red)' }}>
                        {item.title}
                      </div>
                      <div className="gov-item-body">{item.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScalabilitySection data={scalabilitySections.governance} onNavigate={onNavigate} />
    </div>
  )
}
