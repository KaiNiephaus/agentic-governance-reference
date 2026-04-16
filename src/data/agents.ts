import type { Agent } from '../types'

export const agents: Agent[] = [
  {
    icon: '📥',
    name: 'Intake & Classification Agent',
    desc: 'Reads FNOL, extracts structured data, classifies claim type and complexity tier',
    riskTier: 'Low',
    color: 'tag-green',
    scope: ['Classify claim type from FNOL data', 'Assign complexity tier (Simple / Standard / Complex / Refer)', 'Route to correct processing track'],
    cannot: ['Make coverage determinations', 'Access full policy document', 'Contact the claimant'],
    escalates: ['Confidence score < 0.80 on classification', 'Claim type not matching known taxonomy', 'FNOL contains legal threat language'],
    owner: 'Head of Claims Operations',
    changeApproval: 'Model changes: Claims Ops + IT Change Board. Taxonomy changes: Claims Governance Committee.',
    monitoring: 'Daily: classification accuracy vs. adjuster overrides. Weekly: confidence score distribution. Monthly: new claim type emergence.',
    aiActStatus: 'Limited Risk — classification only, no consequential autonomous decision'
  },
  {
    icon: '📄',
    name: 'Document Extraction Agent (IDP)',
    desc: 'OCR + NLP extraction of structured data from medical reports, receipts, and supporting documents',
    riskTier: 'Medium',
    color: 'tag-amber',
    scope: ['Extract structured fields from supported document types', 'Assign per-field confidence scores', 'Flag missing or low-confidence fields'],
    cannot: ['Interpret medical diagnoses', 'Make judgements about document authenticity', 'Request documents directly from claimants'],
    escalates: ['Medical records with diagnoses requiring clinical interpretation', 'Documents in unsupported languages', 'Suspected document manipulation signals'],
    owner: 'Head of Claims Technology',
    changeApproval: 'Model updates: Claims Tech + Data Governance. New document type support: Claims Governance Committee.',
    monitoring: 'Daily: extraction accuracy per field class. Weekly: false negative rate on required fields. Monthly: drift detection on confidence score distributions.',
    aiActStatus: 'Limited Risk — extraction only; consequential decisions downstream. Likely qualifies for the Article 6(3) preparatory task exemption, but the preparatory-task rationale must be formally documented before deployment. Processes Art. 9 special category medical data — access controls and data minimisation obligations apply regardless of AI Act tier.'
  },
  {
    icon: '📋',
    name: 'Policy Rules Agent',
    desc: 'Maps claim facts against policy terms; determines coverage, exclusions, and applicable sublimits',
    riskTier: 'High',
    color: 'tag-red',
    scope: ['Determine coverage / exclusion based on policy rules', 'Apply deductibles and sublimits', 'Cite applicable policy sections'],
    cannot: ['Override documented policy exclusions', 'Apply goodwill payments outside policy terms', 'Make final determination if confidence < 0.90'],
    escalates: ['Confidence < 0.90 on coverage determination', '"Unclear" coverage cases', 'New exclusion scenarios not in training set', 'Customer disputes agent determination', 'Customer challenges a policy exclusion — routes to Senior Adjuster + Legal review'],
    owner: 'Chief Claims Officer',
    changeApproval: 'Policy ruleset changes: Legal + Actuarial + Claims Governance Committee. New product variants: full governance review required before activation.',
    monitoring: 'Daily: adjuster override rate on coverage determinations. Weekly: confidence score by claim type. Monthly: regulatory compliance audit sample.',
    aiActStatus: 'HIGH RISK — automated decision with direct financial and legal consequence. EU AI Act conformity obligations apply: technical documentation, human oversight mechanism, audit logging, transparency to claimant.'
  },
  {
    icon: '🔍',
    name: 'Fraud & Anomaly Detection Agent',
    desc: 'Assigns fraud risk score and identifies anomaly signals for human investigation',
    riskTier: 'High',
    color: 'tag-red',
    scope: ['Generate fraud risk score (0–100)', 'Identify top signal contributors', 'Recommend: Clear / Flag / Refer to SIU'],
    cannot: ['Determine that fraud has occurred', 'Communicate fraud suspicion to claimant', 'Delay claim processing without human authorisation'],
    escalates: ['Fraud score ≥ 65: automatic SIU queue', 'Network analysis reveals linked known-fraud entities', 'Document signals suggest manipulation'],
    owner: 'Head of Special Investigations',
    changeApproval: 'Model updates: SIU + Data Science + Legal (GDPR review). Fraud pattern library updates: SIU weekly review process.',
    monitoring: 'Weekly: false positive rate (target <8%), false negative audit sample. Monthly: SIU outcome feedback loop to model team. Quarterly: GDPR legitimate interest review.',
    aiActStatus: 'HIGH RISK — fraud flagging carries direct adverse consequence for the claimant. EU AI Act conformity obligations apply: technical documentation, human oversight mechanism, audit logging, transparency to claimant. GDPR Art. 22 also applies — claimant has the right to human review of any fraud-based decision.'
  },
  {
    icon: '🧮',
    name: 'Settlement Calculation Agent',
    desc: 'Computes settlement amount within authority bounds; applies deductibles, sublimits, and currency conversion',
    riskTier: 'High',
    color: 'tag-red',
    scope: ['Calculate settlement within policy sublimits', 'Apply deductibles per policy terms', 'Convert currency at live rates within tolerance band'],
    cannot: ['Exceed policy sublimits', 'Apply goodwill uplifts', 'Deviate from approved currency rounding rules'],
    escalates: ['Calculated amount requires authority above €5,000', 'Currency volatility exceeds defined tolerance', 'Claimant disputes calculation', 'Goodwill payment commercially appropriate but outside policy terms: routes to CCO + Legal. Agent cannot authorise ex-gratia payments.'],
    owner: 'Chief Financial Officer (delegated to Head of Claims Finance)',
    changeApproval: 'Formula changes: Finance + Actuarial + Legal. Authority limit changes: Board approval required.',
    monitoring: 'Daily: settlement accuracy vs. manual spot checks. Weekly: currency rate source integrity. Monthly: outlier settlement review.',
    aiActStatus: 'HIGH RISK — direct financial consequence. Solvency II audit trail requirements apply. Customer communication must include calculation summary in plain language.'
  },
  {
    icon: '💳',
    name: 'Payment Execution Agent',
    desc: 'Initiates authorised payments via banking API; generates audit record and customer notification',
    riskTier: 'Medium',
    color: 'tag-amber',
    scope: ['Execute payment instruction as issued by authority gate', 'Send customer notification', 'Generate immutable payment record'],
    cannot: ['Modify payment amount', 'Execute without confirmed authority gate pass', 'Retry more than once on failure without human escalation'],
    escalates: ['Payment API failure after one retry', 'Claimant bank account rejected / closed', 'Payment blocked by receiving bank compliance screen'],
    owner: 'Head of Operations',
    changeApproval: 'Banking integration changes: IT Change Board + Finance + Legal. Notification templates: Claims Comms team approval.',
    monitoring: 'Real-time: payment success / failure rate. Daily: retry queue review. Weekly: failed payment resolution time.',
    aiActStatus: 'Limited Risk. Executes authorised instruction only; no autonomous decision-making'
  }
]
