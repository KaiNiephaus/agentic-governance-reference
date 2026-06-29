import { opModel, escData } from '../../data/opModel'
import { scalabilitySections } from '../../data/scalability'
import ScalabilitySection from '../shared/ScalabilitySection'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

interface OperatingModelProps {
  onNavigate: (tab: string, options?: NavOptions) => void
}

export default function OperatingModel({ onNavigate }: OperatingModelProps) {
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

      <div className="section-title" style={{ marginBottom: '0.4rem' }}>Escalation Matrix</div>
      <div className="section-desc">
        Every key escalation scenario mapped to trigger type, routing destination, SLA, and authority level.
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="esc-table" id="esc-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Trigger Type</th>
              <th>Routes To</th>
              <th>SLA</th>
              <th>Authority</th>
            </tr>
          </thead>
          <tbody>
            {escData.map((row, i) => (
              <tr key={i}>
                <td>{row.scenario}</td>
                <td><span className={`esc-tag ${row.triggerClass}`}>{row.trigger}</span></td>
                <td>{row.routesTo}</td>
                <td>{row.sla}</td>
                <td>{row.authority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ScalabilitySection data={scalabilitySections.opmodel} onNavigate={onNavigate} />
    </div>
  )
}
