import { useState } from 'react'
import { nodeDetails } from '../../data/nodeDetails'
import DetailPanel from '../shared/DetailPanel'
import type { NodeDetail } from '../../types'

interface FlowNode {
  key: string
  typeLabel: string
  name: string
  sub: string
  className: string
}

const stage1: FlowNode[] = [
  { key: 'fnol',         typeLabel: 'Trigger',          name: 'FNOL Received',                    sub: 'Email / portal / API / phone transcript',                                        className: 'node-system' },
  { key: 'intake',       typeLabel: 'Agent · Intake',   name: 'Intake & Classification Agent',    sub: 'Reads FNOL, extracts structured data, classifies claim type & complexity',        className: 'node-agent'  },
  { key: 'doc',          typeLabel: 'Agent · IDP',      name: 'Document Extraction Agent',         sub: 'OCR + NLP extraction from medical reports, receipts, police reports',             className: 'node-agent'  },
  { key: 'completeness', typeLabel: 'Gate · Validation',name: 'Completeness Check',               sub: 'Confidence threshold ≥ 0.85 to proceed; else request additional docs',           className: 'node-gate'   },
]

const stage2: FlowNode[] = [
  { key: 'policy',      typeLabel: 'Agent · Policy',   name: 'Policy Rules Agent',               sub: 'Maps claim against policy terms; determines coverage & exclusions',               className: 'node-agent'  },
  { key: 'fraud',       typeLabel: 'Agent · Risk',     name: 'Fraud & Anomaly Detection Agent',  sub: 'Cross-references claim signals against fraud pattern library',                    className: 'node-agent'  },
  { key: 'riskgate',    typeLabel: 'Gate · Risk',      name: 'Risk Threshold Gate',              sub: 'High-risk flags escalate to human; clear claims proceed',                        className: 'node-gate'   },
  { key: 'humanreview', typeLabel: 'Human · Exception',name: 'Senior Claims Adjuster',           sub: 'Reviews escalated claims; override/approve with documented rationale',            className: 'node-human'  },
]

const stage3: FlowNode[] = [
  { key: 'settlement', typeLabel: 'Agent · Finance',    name: 'Settlement Calculation Agent',    sub: 'Computes settlement within authority limits; applies deductibles & exchange rates', className: 'node-agent'  },
  { key: 'authgate',   typeLabel: 'Gate · Authority',   name: 'Financial Authority Gate',        sub: 'Illustrative thresholds: ≤€5k agent autonomous · €5–25k manager · >€25k director',className: 'node-gate'   },
  { key: 'payment',    typeLabel: 'Agent · Operations', name: 'Payment Execution Agent',         sub: 'Initiates payment via banking API; generates audit record',                        className: 'node-agent'  },
  { key: 'close',      typeLabel: 'Output',             name: 'Claim Closed',                    sub: 'Customer notified; immutable audit log sealed; case archived',                    className: 'node-output' },
]

function FlowRow({ nodes, selectedKey, onSelect }: {
  nodes: FlowNode[]
  selectedKey: string | null
  onSelect: (key: string) => void
}) {
  return (
    <div className="flow-row">
      {nodes.map((node, i) => (
        <>
          <div
            key={node.key}
            className={`flow-node ${node.className}${selectedKey === node.key ? ' selected' : ''}`}
            onClick={() => onSelect(node.key)}
            role="button"
            tabIndex={0}
            aria-pressed={selectedKey === node.key}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(node.key) } }}
          >
            <div className="flow-node-type">{node.typeLabel}</div>
            <div className="flow-node-name">{node.name}</div>
            <div className="flow-node-sub">{node.sub}</div>
          </div>
          {i < nodes.length - 1 && <div className="flow-arrow" aria-hidden="true">→</div>}
        </>
      ))}
    </div>
  )
}

export default function ProcessFlow() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  function handleSelect(key: string) {
    setSelectedKey(prev => prev === key ? null : key)
  }

  const detail: NodeDetail | null = selectedKey ? (nodeDetails[selectedKey] ?? null) : null

  return (
    <div className="section active" id="section-flow">
      <div className="section-title">End-to-End Agent Claims Processing Flow</div>
      <div className="section-tagline">How decisions move through the claim lifecycle</div>
      <div className="section-desc">
        A seven-agent flow covering the claims processing from first trigger to resolution — tailored to the travel insurance scenario. Select a node to inspect authority, inputs/outputs, controls, and escalation logic. Stated thresholds are representative values. In practice, each needs to be explicitly defined and signed off at board level.
      </div>

      <div className="flow-container">
        <div className="flow-stage-label">Stage 1 — Intake & Triage</div>
        <FlowRow nodes={stage1} selectedKey={selectedKey} onSelect={handleSelect} />

        <div style={{ margin: '0.75rem 0 0.75rem 162px', color: 'var(--text-dim)', fontSize: '0.7rem', fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em' }}>
          ↓ PASSED
        </div>

        <div className="flow-stage-label">Stage 2 — Validation & Risk</div>
        <FlowRow nodes={stage2} selectedKey={selectedKey} onSelect={handleSelect} />

        <div style={{ margin: '0.75rem 0 0.75rem 0', color: 'var(--text-dim)', fontSize: '0.7rem', fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em', paddingLeft: '2px' }}>
          ↓ CLEARED (both paths rejoin here)
        </div>

        <div className="flow-stage-label">Stage 3 — Settlement & Payment</div>
        <FlowRow nodes={stage3} selectedKey={selectedKey} onSelect={handleSelect} />

        <div className="flow-legend" aria-label="Node type legend">
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--accent-blue)' }} />AI Agent</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--accent-amber)' }} />Human Decision</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--accent-red)' }} />Governance Gate</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--text-dim)' }} />System Trigger</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--accent-green)' }} />Output / Close</div>
        </div>
      </div>

      <DetailPanel detail={detail} />
    </div>
  )
}
