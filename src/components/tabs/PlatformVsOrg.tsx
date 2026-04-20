interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface PlatformVsOrgProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function PlatformVsOrg({ onNavigate }: PlatformVsOrgProps) {
  return (
    <div className="section active" id="section-platformorg">
      <div className="section-title">Platform vs. Organisation</div>
      <div className="section-desc">
        Platforms like Otera make autonomous claims operations at scale genuinely possible — handling the execution layer that would otherwise take years to build: routing, extracting, scoring, deciding, paying. What the organisation must define alongside it is the governance foundation that makes it safe to operate: authority boundaries, accountability structures, change governance, and operational oversight. Both are required. Neither substitutes for the other.
      </div>


      

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '0.875rem 1.25rem', borderBottom: '2px solid var(--accent-blue)', background: 'var(--surface2)' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-blue)' }}>
              What the platform provides
            </div>
          </div>
          <div style={{ padding: '1rem 1.25rem' }}>
            {[
              'Audit logs of agent decisions',
              'Confidence scoring',
              'Exception routing',
              'Self-enforcing rulesets from documents',
              'Auto-optimisation',
              'Human-in-the-loop interface',
            ].map((item) => (
              <div className="gov-item" key={item}>
                <div className="gov-item-body" style={{ color: 'var(--text-dim)' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ padding: '0.875rem 1.25rem', borderBottom: '2px solid var(--accent-amber)', background: 'var(--surface2)' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-amber)' }}>
              What the organisation must design
            </div>
          </div>
          <div style={{ padding: '1rem 1.25rem' }}>
            {[
              'What counts as a reviewable decision',
              'Acceptable thresholds per decision class',
              'Who exceptions route to and what they must do',
              'Which documents are authoritative, at what version, who owns them',
              'Change governance controlling whether optimisation is permitted',
              'The policy for when humans are required, not just available',
            ].map((item) => (
              <div className="gov-item" key={item}>
                <div className="gov-item-body" style={{ color: 'var(--text-dim)' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-subtitle" style={{ marginBottom: '1rem' }}>
        The trade-offs that sit in between
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent-red)', borderRadius: '4px', padding: '1.25rem' }}>
          <div className="gov-item-title" style={{ marginBottom: '0.5rem' }}>Autonomy vs. Control</div>
          <div className="gov-item-body" style={{ marginBottom: '0.75rem' }}>
            Every increase in autonomous processing reduces human oversight. Every additional governance control reduces velocity. The governance model must define where on this spectrum each decision class sits — and review it regularly as volumes and model performance change.
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            See also:{' '}
            <span
              onClick={() => onNavigate('agents')}
              style={{ color: 'var(--accent-cyan)', cursor: 'pointer' }}
            >
              Agent Register →
            </span>
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent-amber)', borderRadius: '4px', padding: '1.25rem' }}>
          <div className="gov-item-title" style={{ marginBottom: '0.5rem' }}>Velocity vs. Change Control</div>
          <div className="gov-item-body" style={{ marginBottom: '0.75rem' }}>
            The value proposition of agentic platforms includes rapid optimisation and deployment. Governance change processes introduce friction. The Tier A/B/C change classification is the mechanism for resolving this — but only if it is enforced, not routed around under delivery pressure.
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            See also:{' '}
            <span
              onClick={() => onNavigate('governance', { openLayerIndex: 2 })}
              style={{ color: 'var(--accent-cyan)', cursor: 'pointer' }}
            >
              Governance Layer 03 →
            </span>
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent-cyan)', borderRadius: '4px', padding: '1.25rem' }}>
          <div className="gov-item-title" style={{ marginBottom: '0.5rem' }}>Exception Rate as Governance Signal</div>
          <div className="gov-item-body" style={{ marginBottom: '0.75rem' }}>
            If for example 20%+ of a decision class is escalating to human review, the agent is not fit for that decision scope. Exception rates are governance data, not just operational metrics. This threshold connects directly to the quarterly Exception Pattern Board Review in the Operating Model.
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            See also:{' '}
            <span
              onClick={() => onNavigate('govflow', { openBlockKey: 't1-patterns' })}
              style={{ color: 'var(--accent-cyan)', cursor: 'pointer' }}
            >
              Gov. Flow tab →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
