import { useState } from 'react'
import MobileGate from './components/MobileGate'
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
  { id: 'flow',        label: 'Agentic Process Flow' },
  { id: 'agents',      label: 'Agent Register' },
  { id: 'platformorg', label: 'Platform vs. Org' },
  { id: 'governance',  label: 'Governance Layers' },
  { id: 'opmodel',     label: 'Operating Model' },
  { id: 'govflow',     label: 'Gov. Flow' },
  { id: 'regulatory',  label: 'Regulatory' },
  { id: 'compliance',  label: 'Compliance Reference' },
]

const BUILT: TabId[] = ['overview', 'flow', 'agents', 'platformorg', 'governance', 'opmodel', 'govflow', 'regulatory', 'compliance']

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [navOptions, setNavOptions] = useState<NavOptions>({})
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  function navigate(tab: string, options: NavOptions = {}) {
    setNavOptions(options)
    setActiveTab(tab as TabId)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      <MobileGate />
      <nav aria-label="Main navigation">
        <div className="nav-inner">
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
          <div className="nav-scroll-indicator">›</div>
        </div>
        <button
          onClick={toggleTheme}
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: 0,
            background: 'none',
            border: 'none',
            borderLeft: '1px solid var(--border)',
            padding: '0 0.75rem',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: 'var(--text-dim)',
            cursor: 'pointer',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </nav>

      <main>
      {activeTab === 'overview'    && <Overview onNavigate={navigate} />}
      {activeTab === 'flow'        && <ProcessFlow onNavigate={navigate} />}
      {activeTab === 'agents'      && <AgentRegister onNavigate={navigate} />}
      {activeTab === 'governance'  && (
        <GovernanceLayers initialOpenIndex={navOptions.openLayerIndex} onNavigate={navigate} />
      )}
      {activeTab === 'opmodel'     && <OperatingModel onNavigate={navigate} />}
      {activeTab === 'platformorg' && <PlatformVsOrg onNavigate={navigate} />}
      {activeTab === 'govflow'     && <GovFlow initialBlockKey={navOptions.openBlockKey} onNavigate={navigate} />}
      {activeTab === 'regulatory'  && <Regulatory onNavigate={navigate} />}
      {activeTab === 'compliance'  && <ComplianceRef onNavigate={navigate} />}

      {!BUILT.includes(activeTab) && (
        <div className="section active" style={{ color: 'var(--text-dim)', paddingTop: '3rem' }}>
          Tab coming soon: <strong style={{ color: 'var(--text)' }}>{activeTab}</strong>
        </div>
      )}
      </main>

      <footer style={{ borderTop: '1px solid var(--border)', marginTop: '5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 2rem 3rem' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontStyle: 'italic', lineHeight: 1.6 }}>
          Disclaimer: The agent architecture and governance design developed throughout this reference are not affiliated with or representative of Allianz Partners' or Otera's internal design. They have been independently developed as an interpretive working example of what a governance-ready architecture for this type of operation could look like, grounded in publicly available data from Allianz Partners, Otera and official regulatory institutions. The reference does not claim to be complete, and gaps or omissions may remain. Kai is human and may make mistakes.
          <br /><br />
          <span style={{ fontStyle: 'normal', fontSize: '0.875rem' }}>© 2026 Kai-Uwe Niephaus | <a href="https://linkedin.com/in/kai-uwe-niephaus" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>LinkedIn</a> | <a href="https://kainiephaus.com/" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>Work</a> | Occasional writings on AI transformation strategy, governance, and organizational design → <a href="https://substack.com/@kaiuweniephaus" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>Substack</a></span>
        </div>
        </div>
      </footer>
    </>
  )
}
