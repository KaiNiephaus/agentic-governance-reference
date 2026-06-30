import type { OpModelTier, EscalationRow } from '../types'

export const opModel: OpModelTier[] = [
  {
    tier: 'Tier 1',
    name: 'Strategic Governance',
    cadence: 'Monthly / Quarterly',
    color: 'var(--tier-accent-1)',
    roles: [
      { name: 'Claims Governance Committee', desc: 'Cross-functional. Sets authority thresholds, approves Tier C changes, reviews aggregate performance, owns regulatory obligations.' },
      { name: 'Chief Claims Officer', desc: 'Executive accountable for agent network outcomes. Signs off on EU AI Act conformity documentation.' },
      { name: 'Legal & Compliance', desc: 'Regulatory horizon scanning. Translates new obligations into governance model updates.' }
    ],
    activities: [
      'Review Agent Authority Register — scope creep, coverage gaps',
      'Approve new agent deployments or significant scope expansions',
      'Aggregate exception pattern review — systemic issues identification',
      'EU AI Act conformity review — annual at minimum',
      'NIS-2 risk assessment update',
      'Performance vs. targets review: STP rate, resolution time, customer satisfaction'
    ]
  },
  {
    tier: 'Tier 2',
    name: 'Operational Governance',
    cadence: 'Weekly',
    color: 'var(--tier-accent-2)',
    roles: [
      { name: 'Claims Operations Manager', desc: 'Owns exception queue performance and adjuster capacity planning. Escalates systemic issues to Tier 1.' },
      { name: 'Head of Claims Technology', desc: 'Owns platform health, drift detection, change queue. Approves Tier B changes.' },
      { name: 'Data Steward — Claims', desc: 'Monitors input data quality SLAs. Owns upstream data quality escalations.' }
    ],
    activities: [
      'Exception queue review — volume, resolution time, pattern analysis',
      'Confidence threshold performance — is escalation rate within target band?',
      'Drift detection review — comparing agent decision distributions to baseline',
      'Change request intake — classify, prioritise, assign',
      'Adjuster override analysis — are overrides indicating agent failure patterns?',
      'Data quality SLA reporting — upstream source system health'
    ]
  },
  {
    tier: 'Tier 3',
    name: 'Real-Time Control',
    cadence: 'Continuous',
    color: 'var(--tier-accent-3)',
    roles: [
      { name: 'Platform Monitoring (Automated)', desc: 'Monitors agent health dashboards, anomaly alerts, authority gate logs, and payment success rates. Generates automated escalation on threshold breach.' },
      { name: 'On-Call Operations Analyst', desc: 'Responds to automated alerts. First escalation point for real-time incidents. 24/7 coverage.' },
      { name: 'On-Call Claims Manager', desc: 'Approves emergency rollbacks. Authorises temporary threshold changes pending Tier 2 review.' }
    ],
    activities: [
      'Automated: agent health monitoring against defined KPIs',
      'Automated: authority gate integrity checks — no autonomous payment above threshold',
      'Automated: payment success / failure tracking',
      'On-alert: incident triage and initial containment',
      'On-alert: NIS-2 incident detection — does this trigger 72-hour reporting clock?',
      'On-alert: emergency rollback authorisation if agent behaviour anomaly detected'
    ]
  }
]

export const escData: EscalationRow[] = [
  { scenario: 'Coverage determination confidence < 0.90', agent: 'Policy Rules Agent', trigger: 'Automatic', routeTo: 'Senior Adjuster queue', sla: '4 business hours', authority: 'Adjuster authority limits apply', risk: 'high' },
  { scenario: 'Fraud risk score ≥ 65', agent: 'Fraud Detection Agent', trigger: 'Automatic', routeTo: 'Special Investigations Unit', sla: '24 hours initial triage', authority: 'SIU team', risk: 'high' },
  { scenario: 'Settlement > €5,000', agent: 'Settlement Calculation Agent', trigger: 'Financial authority gate', routeTo: 'Claims Manager approval queue', sla: '4 business hours', authority: 'Claims Manager (up to €25k)', risk: 'med' },
  { scenario: 'Settlement > €25,000', agent: 'Settlement Calculation Agent', trigger: 'Financial authority gate', routeTo: 'Senior Director queue', sla: '8 business hours', authority: 'Senior Director (up to €100k)', risk: 'high' },
  { scenario: 'Settlement > €100,000', agent: 'Settlement Calculation Agent', trigger: 'Financial authority gate', routeTo: 'Chief Claims Officer + Legal', sla: '24 hours', authority: 'CCO + Legal sign-off required', risk: 'crit' },
  { scenario: 'Customer disputes automated decision', agent: 'Any', trigger: 'Customer complaint received', routeTo: 'Dedicated human review team', sla: '5 business days', authority: 'Team Lead sign-off on outcome. Right to review under GDPR Art. 22, mechanism satisfies EU AI Act Art. 14.', risk: 'med' },
  { scenario: 'Customer challenges policy exclusion specifically', agent: 'Policy Rules Agent', trigger: 'Customer complaint received', routeTo: 'Senior Adjuster + Legal review', sla: '5 business days', authority: 'Legal sign-off required — exclusion cannot be upheld by adjuster alone', risk: 'high' },
  { scenario: 'Payment API failure after retry', agent: 'Payment Execution Agent', trigger: 'System failure', routeTo: 'Operations on-call analyst', sla: '2 business hours', authority: 'Operations Analyst', risk: 'med' },
  { scenario: 'Agent drift detected (statistical)', agent: 'Any', trigger: 'Weekly drift detection run', routeTo: 'Head of Claims Technology', sla: 'Next Tier 2 governance meeting', authority: 'Change Board Tier B process', risk: 'med' },
  { scenario: 'Novel claim type — no taxonomy match', agent: 'Intake Agent', trigger: 'Automatic (unclassified)', routeTo: 'Claims Operations Manager', sla: '8 business hours', authority: 'Manager creates new taxonomy entry', risk: 'low' },
  { scenario: 'Goodwill payment appropriate but outside policy terms', agent: 'Settlement Calculation Agent', trigger: 'Manual referral from adjuster', routeTo: 'CCO + Legal', sla: '24 hours', authority: 'CCO sign-off required — agent cannot authorise ex-gratia payments', risk: 'high' },
  { scenario: 'Potential NIS-2 reportable incident', agent: 'Platform monitoring', trigger: 'Automated detection', routeTo: 'On-call Claims Manager → Legal', sla: 'Immediate (72-hour clock starts)', authority: 'CCO authorises regulatory notification (BSI for Germany; competent authority per jurisdiction)', risk: 'crit' }
]
