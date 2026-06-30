import type { NodeDetail } from '../types'

export const nodeDetails: Record<string, NodeDetail> = {
  fnol: {
    name: 'FNOL — First Notice of Loss',
    type: 'System Trigger',
    typeClass: 'tag-dim',
    desc: 'The triggering event for the claims lifecycle. Can arrive via email, web portal, mobile app, API from assistance provider, or voice-to-text transcript from call centre.',
    inputs: ['Customer email / portal submission', 'Assistance provider API webhook', 'Call centre voice transcript (STT)', 'Third-party claims notification'],
    outputs: ['Structured FNOL record in claims system', 'Unique claim ID generated', 'Timestamp and channel recorded'],
    governance: ['All FNOL sources logged with channel, timestamp, and source system', 'GDPR: lawful basis confirmed before processing begins (typically Art. 6(1)(b) — contract performance)', 'Duplicate detection run against open claim register'],
    risk: 'Low — intake only, no decision made'
  },
  intake: {
    name: 'Intake & Classification Agent',
    type: 'AI Agent',
    typeClass: 'tag-blue',
    desc: 'Reads the raw FNOL, extracts structured data fields, classifies claim type (medical, cancellation, baggage, liability), assesses complexity tier, and assigns to the correct processing track.',
    inputs: ['Raw FNOL text / structured form data', 'Policy reference number', 'Historical claim patterns (anonymised)'],
    outputs: ['Structured claim record', 'Claim type classification + confidence score', 'Complexity tier: Simple / Standard / Complex / Refer'],
    governance: ['Confidence < 0.80: flag for human classification review', 'Classification rationale recorded in audit log', 'Authority: classify only — no coverage decision made here'],
    risk: 'Low — classification error correctable downstream'
  },
  doc: {
    name: 'Document Extraction Agent',
    type: 'AI Agent — IDP',
    typeClass: 'tag-blue',
    desc: 'Processes unstructured documents submitted with the claim. Uses OCR + NLP to extract key data fields. Handles medical reports, expense receipts, police reports, flight confirmations, and death certificates.',
    inputs: ['PDF / image attachments', 'Structured extraction schema per doc type', 'Confidence threshold config per field class'],
    outputs: ['Structured JSON payload of extracted fields', 'Per-field confidence scores', 'Extraction failure log for missing / low-confidence fields'],
    governance: ['Per-field confidence thresholds — below threshold, field flagged for human verification', 'Original document preserved immutably; extraction is additive', 'Medical data: special handling under GDPR Art. 9 — access restricted to authorised adjusters only'],
    risk: 'Medium — extraction errors affect downstream decisions; must be auditable'
  },
  completeness: {
    name: 'Completeness Gate',
    type: 'Governance Gate',
    typeClass: 'tag-red',
    desc: 'Validates that the claim record has sufficient data quality to proceed. Acts as the first hard stop in the process — insufficient data triggers a structured information request to the claimant.',
    inputs: ['Extracted claim record', 'Required fields checklist per claim type', 'Minimum confidence thresholds per field class'],
    outputs: ['Pass: claim proceeds to Stage 2', 'Fail: auto-generated information request to claimant', 'Partial: proceed with flagged gaps noted'],
    governance: ['Threshold values are governance decisions — set by Claims Governance Committee, not platform default', 'Information requests are templated and logged; count toward SLA clock', 'Maximum 2 information requests before human adjuster takes over (examplary threshold — set per governance policy)'],
    risk: 'Medium — controls data quality entering the decision layer'
  },
  policy: {
    name: 'Policy Rules Agent',
    type: 'AI Agent',
    typeClass: 'tag-blue',
    desc: 'The most governance-sensitive agent in the network. Maps the extracted claim facts against the applicable policy document — determining coverage, exclusions, conditions, and applicable sublimits. Operates from a deterministic ruleset derived from the policy text.',
    inputs: ['Structured claim record', 'Policy document (versioned)', 'Jurisdiction-specific regulatory overrides', 'Customer segment and product variant'],
    outputs: ['Coverage determination: Covered / Excluded / Partial / Unclear', 'Applicable policy sections cited', 'Sublimits and deductibles applied', 'Confidence score for determination'],
    governance: ['Policy ruleset is version-controlled — agent always cites policy version used', 'Confidence < 0.90 or "Unclear" determination: automatic escalation to adjuster', 'New policy variants must pass through Policy Governance Review before activation', 'Customer challenging a policy exclusion → Senior Adjuster + Legal review required', 'EU AI Act: this agent makes a consequential automated decision — requires human oversight mechanism'],
    risk: 'High — coverage determination is the primary financial decision in the claim'
  },
  fraud: {
    name: 'Fraud & Anomaly Detection Agent',
    type: 'AI Agent — Risk',
    typeClass: 'tag-blue',
    desc: 'Cross-references claim signals against known fraud patterns, industry fraud intelligence feeds, and historical anomaly patterns. Assigns a fraud risk score. Does not make a fraud determination — only flags for human investigation.',
    inputs: ['Structured claim record', 'Customer history (claims frequency, prior flags)', 'Industry fraud pattern library', 'Network analysis signals (linked entities)'],
    outputs: ['Fraud risk score (0–100)', 'Top contributing signal factors', 'Recommendation: Clear / Flag / Refer to SIU'],
    governance: ['Agent cannot determine fraud — can only flag. All SIU referrals require human decision.', 'Fraud flags recorded but not visible to claimant-facing systems', 'False positive rate monitored monthly — if >8%, model review triggered', 'GDPR: fraud flag processing requires documented legitimate interest basis'],
    risk: 'High — false positives harm legitimate claimants; false negatives enable fraud'
  },
  riskgate: {
    name: 'Risk Threshold Gate',
    type: 'Governance Gate',
    typeClass: 'tag-red',
    desc: 'The key branching point between autonomous processing and human review. Routes claims based on fraud score, coverage complexity, claim value, and special circumstances flags.',
    inputs: ['Fraud risk score', 'Coverage determination confidence', 'Claim value vs. authority limit', 'Special flags: fatality, litigation, media, VIP'],
    outputs: ['Track A — Autonomous: straight-through to settlement', 'Track B — Human: routed to adjuster queue with full context package', 'Track C — SIU: routed to Special Investigations Unit'],
    governance: ['Routing thresholds are governance decisions — quarterly review by Claims Governance Committee', 'All threshold changes require documented rationale and impact assessment', 'Track B / C routing cannot be overridden by the agent — hard escalation'],
    risk: 'High — routing error here is the primary systemic risk in the architecture'
  },
  humanreview: {
    name: 'Senior Claims Adjuster',
    type: 'Human Decision',
    typeClass: 'tag-amber',
    desc: 'Handles all escalated claims. Receives a full context package from the agent network — not raw data. Reviews, decides, and documents rationale. Can override agent recommendations with documented justification.',
    inputs: ['Agent-prepared context package', 'Coverage recommendation + confidence', 'Fraud risk score + signal factors', 'Customer history and communication log'],
    outputs: ['Coverage decision (with override justification if applicable)', 'Settlement authority instruction', 'SIU referral or clear decision'],
    governance: ['All adjuster decisions logged with timestamp, adjuster ID, and rationale', 'Override decisions flagged for quality review sampling', 'SLA: adjuster must action within 4 business hours of queue entry', 'Decision authority limits: same financial authority matrix as autonomous track'],
    risk: 'Medium — adjuster decision quality is variable; override rate and outcome tracking are the primary controls'
  },
  settlement: {
    name: 'Settlement Calculation Agent',
    type: 'AI Agent — Finance',
    typeClass: 'tag-blue',
    desc: 'Computes the settlement amount based on approved coverage, applied deductibles, sublimits, currency exchange rates, and any applicable regulatory requirements. Works within a strictly bounded financial authority envelope.',
    inputs: ['Approved coverage determination', 'Claimed amounts and supporting receipts', 'Policy deductibles and sublimits', 'Live currency exchange rates', 'Jurisdiction-specific minimum payout rules'],
    outputs: ['Settlement amount in claim currency', 'Calculation breakdown (auditable)', 'Payment instruction payload', 'Excess / shortfall explanation for customer communication'],
    governance: ['Settlement amount hard-capped at policy sublimit — no exceptions without human approval', 'Currency rounding rules formally specified — agent cannot deviate', 'Goodwill / ex-gratia payments outside policy terms: agent cannot authorise — routes to CCO + Legal', 'All calculations logged with input values and formula version used'],
    risk: 'High — financial error directly affects claimant and P&L'
  },
  authgate: {
    name: 'Financial Authority Gate',
    type: 'Governance Gate — Critical',
    typeClass: 'tag-red',
    desc: 'Enforces the financial authority matrix. This is the hardest governance control in the system — the gate that determines whether a payment proceeds autonomously or requires human sign-off.',
    inputs: ['Settlement amount', 'Claim complexity tier', 'Customer segment', 'Prior exceptions on this claim'],
    outputs: ['All thresholds are examplary. Define by Board governance process', '€5,001–€25,000: Claims Manager approval required', '€25,001–€100,000: Senior Director approval required', '>€100,000: Chief Claims Officer + Legal sign-off'],
    governance: ['Authority thresholds are Board-approved — changes require formal governance process', 'No agent can self-authorise above its tier — hard system stop, not soft warning', 'All approvals timestamped and linked to approver identity in immutable log', 'Segregation of duties: approver cannot be the adjuster who handled the claim'],
    risk: 'Critical — financial authority control is primary SOX/Solvency II compliance mechanism'
  },
  payment: {
    name: 'Payment Execution Agent',
    type: 'AI Agent — Operations',
    typeClass: 'tag-blue',
    desc: 'Initiates payment via the banking API once financial authority is confirmed. Generates the customer communication, creates the immutable payment record, and triggers downstream accounting entries.',
    inputs: ['Authorised payment instruction', 'Banking API credentials (vaulted)', 'Customer payment details (bank or card)', 'Notification template selection'],
    outputs: ['Payment initiation confirmation', 'Customer notification (email/SMS)', 'Immutable audit record', 'Accounting system entry'],
    governance: ['Agent cannot modify payment amount — instruction is sealed at authority gate', 'Banking API call is idempotent — duplicate execution prevention built in', 'Failed payments: auto-retry once, then escalate to Operations team', 'GDPR: payment data encrypted in transit and at rest; access logged'],
    risk: 'Medium — payment failure is recoverable; duplicate payment is a financial control risk'
  },
  close: {
    name: 'Claim Closed',
    type: 'Output',
    typeClass: 'tag-green',
    desc: 'The claim lifecycle is complete. The audit log is sealed and archived. The customer receives a claim summary. The case enters the analytics pipeline for continuous improvement monitoring.',
    inputs: ['Payment confirmation', 'Customer communication delivery confirmation', 'Complete audit trail from all agents'],
    outputs: ['Sealed audit record (immutable)', 'Customer claim summary document', 'Analytics event for performance monitoring', 'Regulatory reporting entry if applicable'],
    governance: ['Audit log sealed — no modification permitted post-close without formal reopening process', 'Data retention: claim records held per jurisdiction-specific requirements (typically 7–10 years)', 'Regulatory reporting: claims above material thresholds (examplary: €50k) reported to the relevant supervisory authority within the defined timeframe'],
    risk: 'Low — archival step; risk is in record integrity and retention compliance'
  }
}
