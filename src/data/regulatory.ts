import type { RegFramework } from '../types'

export const regData: RegFramework[] = [
  {
    icon: '⚖️',
    name: 'EU AI Act',
    scope: 'Automated decision-making with legal / financial consequence',
    color: 'tag-blue',
    obligations: [
      { label: 'HIGH RISK', labelClass: 'tag-red', text: '<strong>Classification:</strong> The Policy Rules Agent, Fraud Detection Agent, and Settlement Calculation Agent are likely high-risk AI systems under Annex III. The classification depends on whether the system significantly influences individual decisions. This determination must be made and documented before deployment.' },
      { label: 'TECH DOC', labelClass: 'tag-blue', text: '<strong>Technical Documentation:</strong> Each high-risk agent requires maintained technical documentation covering model design, training data, performance metrics, and known limitations. Must be available to regulators on request.' },
      { label: 'OVERSIGHT', labelClass: 'tag-amber', text: '<strong>Human Oversight Mechanism:</strong> Must be operationally realisable — not just stated in policy. Claimants must be able to request human review. Adjusters must have the authority and context to genuinely review, not just rubber-stamp.' },
      { label: 'AUDIT LOG', labelClass: 'tag-purple', text: '<strong>Logging Obligations:</strong> High-risk agents must log inputs, outputs, and the decision-making context for each consequential decision. Logs retained per regulatory retention requirements.' },
      { label: 'ACCURACY', labelClass: 'tag-green', text: '<strong>Performance Monitoring:</strong> Ongoing monitoring of accuracy and reliability. Significant performance degradation triggers mandatory review. No specific threshold defined — governance committee sets and owns this.' },
      { label: 'DEADLINE', labelClass: 'tag-red', text: '<strong>Compliance timeline:</strong> High-risk stand-alone AI system obligations apply from <strong>2 December 2027</strong>. Safety component AI systems: <strong>2 August 2028</strong>. Confirmed via the digital omnibus simplification package approved by the European Parliament (423–57, June 2026). The original 2 August 2026 deadline has been superseded.' }
    ]
  },
  {
    icon: '🛡️',
    name: 'NIS-2',
    scope: 'Network and information security — NIS-2 applies where Allianz Partners qualifies as Important/Essential Entity. Note: DORA is the primary cyber-resilience framework for regulated EU insurance entities and overlaps substantially with NIS-2 obligations.',
    color: 'tag-cyan',
    obligations: [
      { label: 'SCOPE', labelClass: 'tag-cyan', text: '<strong>Allianz Partners classification:</strong> Allianz Partners operates across 30 countries at scale, making it a likely "Important Entity" under NIS-2, with possible "Essential" classification in some jurisdictions based on systemic significance.' },
      { label: '72 HRS', labelClass: 'tag-red', text: '<strong>Incident Reporting:</strong> Significant incidents affecting the availability, integrity, or confidentiality of the agent network must be reported to BSI (Germany) within 72 hours. The governance model must define what counts as "significant" and who authorises the report.' },
      { label: 'SUPPLY CHAIN', labelClass: 'tag-amber', text: '<strong>Third-Party Risk:</strong> The agentic platform vendor and any external model providers are in scope for supply chain security obligations. Vendor security assessments and contractual security requirements must be maintained.' },
      { label: 'MGMT LBL', labelClass: 'tag-purple', text: '<strong>Management Liability:</strong> NIS-2 introduces personal liability for senior management for non-compliance. The Chief Claims Officer and CTO need documented evidence of governance oversight.' },
      { label: 'MEASURES', labelClass: 'tag-green', text: '<strong>Technical Measures:</strong> Multi-factor authentication, encryption, access logging, and network segmentation for the agent infrastructure. Penetration testing cadence must be defined and executed.' }
    ]
  },
  {
    icon: '🔒',
    name: 'GDPR — Article 22',
    scope: 'Automated decision-making with significant effect on individuals',
    color: 'tag-blue',
    obligations: [
      { label: 'Art. 22', labelClass: 'tag-blue', text: '<strong>Right to human review:</strong> Claimants have the right not to be subject to solely automated decisions with significant legal or similarly significant effect. Coverage denial, fraud flagging, and settlement calculation all qualify. The human oversight mechanism required by EU AI Act Art. 14 doubles as the Art. 22 compliance mechanism — design once, satisfy both.' },
      { label: 'Art. 9', labelClass: 'tag-amber', text: '<strong>Special category data:</strong> Medical records processed by the Document Extraction agent are special category data. Requires explicit consent or vital interests legal basis. Access must be role-restricted; data minimisation applies at field level.' },
      { label: 'Explainability', labelClass: 'tag-purple', text: "<strong>Explainability obligation:</strong> Automated decisions subject to Art. 22 must be explainable to the claimant on request. This is an organisational design obligation. The agent's output must map to a plain-language explanation standard defined before deployment, not after a complaint arrives." }
    ]
  },
  {
    icon: '🏛️',
    name: 'Solvency II',
    scope: 'Prudential framework for EU insurance undertakings — operational risk and outsourcing',
    color: 'tag-purple',
    obligations: [
      { label: 'ORSA', labelClass: 'tag-purple', text: '<strong>Own Risk and Solvency Assessment:</strong> The operational risk profile changes materially when claims decisions are automated at scale. The ORSA must explicitly model agentic failure scenarios — concentration risk, systemic bias, and vendor dependency on a single platform.' },
      { label: 'Art. 49', labelClass: 'tag-amber', text: '<strong>Outsourcing obligations:</strong> If the agentic platform supports critical or important functions, Solvency II outsourcing rules apply — written agreement, audit rights, ability to terminate and transfer, BaFin notification for material arrangements. The Otera platform relationship likely qualifies.' },
      { label: 'Governance', labelClass: 'tag-blue', text: '<strong>Governance requirements:</strong> Solvency II requires a clear organisational structure with well-defined lines of responsibility. The four-layer governance framework and Claims Governance Committee structure in the Operating Model tab are the institutional response to this requirement.' }
    ]
  }
]
