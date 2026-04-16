import { useState } from 'react'
import Overview from './components/tabs/Overview'
import Regulatory from './components/tabs/Regulatory'
import AgentRegister from './components/tabs/AgentRegister'
import GovernanceLayers from './components/tabs/GovernanceLayers'
import OperatingModel from './components/tabs/OperatingModel'
import PlatformVsOrg from './components/tabs/PlatformVsOrg'
import GovFlow from './components/tabs/GovFlow'
import ProcessFlow from './components/tabs/ProcessFlow'
import ComplianceRef from './components/tabs/ComplianceRef'

type TabId = 'overview' | 'flow' | 'agents' | 'governance' | 'opmodel' | 'govflow' | 'platformorg' | 'regulatory' | 'compliance'

interface NavOptions {
  openLayerIndex?: number
  openBlockKey?: string
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'overview',    label: 'Overview' },
  { id: 'flow',        label: 'Process Flow' },
  { id: 'agents',      label: 'Agent Register' },
  { id: 'governance',  label: 'Governance Layers' },
  { id: 'opmodel',     label: 'Operating Model' },
  { id: 'govflow',     label: 'Gov. Flow' },
  { id: 'platformorg', label: 'Platform vs. Org' },
  { id: 'regulatory',  label: 'Regulatory' },
  { id: 'compliance',  label: 'Compliance Ref.' },
]

const BUILT: TabId[] = ['overview', 'flow', 'agents', 'governance', 'opmodel', 'platformorg', 'regulatory', 'govflow', 'compliance']

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [navOptions, setNavOptions] = useState<NavOptions>({})

  function navigate(tab: string, options: NavOptions = {}) {
    setNavOptions(options)
    setActiveTab(tab as TabId)
  }

  return (
    <>
      <nav aria-label="Main navigation">
        <div className="nav-logo">
          Agentic Governance Reference
        </div>
        <div className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => navigate(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
      {activeTab === 'overview'    && <Overview />}
      {activeTab === 'flow'        && <ProcessFlow />}
      {activeTab === 'agents'      && <AgentRegister />}
      {activeTab === 'governance'  && (
        <GovernanceLayers initialOpenIndex={navOptions.openLayerIndex} />
      )}
      {activeTab === 'opmodel'     && <OperatingModel />}
      {activeTab === 'platformorg' && <PlatformVsOrg onNavigate={navigate} />}
      {activeTab === 'govflow'     && <GovFlow initialBlockKey={navOptions.openBlockKey} />}
      {activeTab === 'regulatory'  && <Regulatory />}
      {activeTab === 'compliance'  && <ComplianceRef />}

      {!BUILT.includes(activeTab) && (
        <div className="section active" style={{ color: 'var(--text-dim)', paddingTop: '3rem' }}>
          Tab coming soon: <strong style={{ color: 'var(--text)' }}>{activeTab}</strong>
        </div>
      )}
      </main>
    </>
  )
}
