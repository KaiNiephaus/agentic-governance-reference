import { opModel, escData } from '../../data/opModel'

export default function OperatingModel() {
  return (
    <div className="section active" id="section-opmodel">
      <div className="section-title">Operating Model</div>
      <div className="section-desc">
        Three-tier governance structure covering strategic, operational, and real-time control. Each tier has defined roles, cadence, and activities. The escalation matrix below maps every key scenario to the right human decision-maker.
      </div>

      <div className="om-grid" id="om-grid">
        {opModel.map((tier) => (
          <div className="om-tier" key={tier.tier}>
            <div
              className="om-tier-header"
              style={{ borderLeft: `3px solid ${tier.color}` }}
            >
              <div className="om-tier-label" style={{ color: tier.color }}>
                {tier.tier}
              </div>
              <div className="om-tier-name">{tier.name}</div>
              <div className="om-tier-cadence">Cadence: {tier.cadence}</div>
            </div>
            <div className="om-tier-body">
              {tier.roles.map((role) => (
                <div className="om-role" key={role.name}>
                  <div
                    className="om-role-dot"
                    style={{ background: tier.color }}
                  />
                  <div>
                    <div className="om-role-name">{role.name}</div>
                    <div className="om-role-desc">{role.desc}</div>
                  </div>
                </div>
              ))}
              <div className="om-activities">
                <div className="om-act-title">Key Activities</div>
                {tier.activities.map((activity, i) => (
                  <div className="om-act-item" key={i}>{activity}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-subtitle" style={{ marginBottom: '0.4rem' }}>Escalation Matrix</div>
      <div className="section-desc">
        Every key escalation scenario mapped to trigger type, routing destination, SLA, and authority level.
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
        <table className="esc-table" id="esc-table">
          <thead>
            <tr>
              <th>Escalation Scenario</th>
              <th>Originating Agent</th>
              <th>Trigger Type</th>
              <th>Routes To</th>
              <th>SLA</th>
              <th>Authority</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {escData.map((row, i) => (
              <tr key={i}>
                <td style={{ color: 'var(--text)' }}>{row.scenario}</td>
                <td style={{ color: 'var(--text-dim)' }}>{row.agent}</td>
                <td>{row.trigger}</td>
                <td style={{ color: 'var(--text-dim)' }}>{row.routeTo}</td>
                <td style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                  {row.sla}
                </td>
                <td style={{ color: 'var(--text-dim)' }}>{row.authority}</td>
                <td>
                  <span className={`risk-chip risk-${row.risk}`}>{row.risk}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
