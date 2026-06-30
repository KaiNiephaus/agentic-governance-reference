import { useState } from 'react'
import { agents } from '../../data/agents'
import Badge from '../shared/Badge'
import Chevron from '../shared/Chevron'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface AgentRegisterProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function AgentRegister({ onNavigate }: AgentRegisterProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set())

  function toggle(i: number) {
    setOpenIndices(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="section active" id="section-agents">
      <div className="section-title">Agent Authority Register</div>
      <div className="section-tagline">What each agent may and may not do – and who governs it</div>
      <div className="section-desc">
        Every agent in the claims processing network. Click any agent to see its permitted decision scope, hard boundaries, escalation triggers, and governance profile. In practice, authority boundaries need to be defined independently of the platform's technical capabilities.
      </div>

      <div className="agent-register" id="agent-register">
        {agents.map((agent, i) => (
          <div
            className={`agent-card${openIndices.has(i) ? ' open' : ''}`}
            key={agent.name}
          >
            <div className="agent-card-header" onClick={() => toggle(i)}>
              <div className="agent-icon" style={{ background: 'var(--surface2)' }}>
                {agent.icon}
              </div>
              <div className="agent-info">
                <div className="agent-name">{agent.name}</div>
                <div className="agent-desc">{agent.desc}</div>
              </div>
              <div className="agent-meta">
                <Badge label={`Risk: ${agent.riskTier}`} className={agent.color} />
              </div>
              <Chevron className="agent-chevron" />
            </div>

            <div className="agent-detail-body">
              <div className="agent-detail-grid">
                <div>
                  <div className="agent-detail-col-title">✓ Decision Scope</div>
                  {agent.scope.map((s, j) => (
                    <div className="agent-detail-item" key={j}>
                      <strong>{s}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="agent-detail-col-title">✗ Cannot Decide</div>
                  {agent.cannot.map((s, j) => (
                    <div
                      className="agent-detail-item"
                      key={j}
                      style={{ borderColor: 'var(--accent-red)', opacity: 0.7 }}
                    >
                      <strong>{s}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="agent-detail-col-title">⚡ Escalation Triggers</div>
                  {agent.escalates.map((s, j) => (
                    <div
                      className="agent-detail-item"
                      key={j}
                      style={{ borderColor: 'var(--accent-amber)' }}
                    >
                      <strong>{s}</strong>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="agent-detail-col-title">Governance</div>
                  <div className="agent-detail-item">
                    <strong>Owner</strong>{agent.owner}
                  </div>
                  <div className="agent-detail-item" style={{ marginTop: '0.4rem' }}>
                    <strong>Change Approval</strong>{agent.changeApproval}
                  </div>
                  <div className="agent-detail-item" style={{ marginTop: '0.4rem' }}>
                    <strong>Monitoring</strong>{agent.monitoring}
                  </div>
                  <div
                    className="agent-detail-item"
                    style={{
                      marginTop: '0.4rem',
                      borderColor: agent.riskTier === 'High' ? 'var(--accent-red)' : 'var(--accent-amber)'
                    }}
                  >
                    <strong>EU AI Act Status</strong>{agent.aiActStatus}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScalabilitySection data={scalabilitySections.agents} onNavigate={onNavigate} />
    </div>
  )
}
