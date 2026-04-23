import { useState } from 'react'


interface CheckItem {
  title: string
  desc: string
}

interface Obligation {
  label: string
  text: string
  variant: 'red' | 'amber' | 'blue' | 'green'
}

interface TimelineItem {
  date: string
  event: string
  variant: 'past' | 'now' | 'upcoming' | 'future'
  dateStyle?: React.CSSProperties
  itemStyle?: React.CSSProperties
}

interface TableRow {
  activity: string
  basis: string
  note: string
}

type SubsectionContent =
  | { type: 'obligations'; items: Obligation[] }
  | { type: 'checklist'; id?: string; items: CheckItem[] }
  | { type: 'timeline'; items: TimelineItem[] }
  | { type: 'timeline+obligation'; timeline: TimelineItem[]; obligation: Obligation }
  | { type: 'table'; headers: string[]; rows: TableRow[] }
  | { type: 'obligation+checklist'; obligation: Obligation; items: CheckItem[] }

interface Subsection {
  title: string
  content: SubsectionContent
}

interface FrameworkCard {
  id: string
  icon: string
  name: string
  scope: string
  statusLabel: string
  statusVariant: 'active' | 'upcoming'
  subsections: Subsection[]
}

const frameworks: FrameworkCard[] = [
  {
    id: 'aiact',
    icon: '⚖️',
    name: 'EU AI Act',
    scope: 'Regulation (EU) 2024/1689 · In force 1 Aug 2024 · Current legal deadline: 2 Aug 2026 · Parliament proposes: 2 Dec 2027 (trilogue pending)',
    statusLabel: '⚠ Deadline under revision',
    statusVariant: 'upcoming',
    subsections: [
      {
        title: 'High-Risk Classification — Is your system in scope?',
        content: {
          type: 'obligations',
          items: [
            {
              label: 'Annex III · 5(b)(c)',
              variant: 'red',
              text: 'AI systems used for <strong>risk assessment and pricing in life and health insurance</strong>, and <strong>creditworthiness evaluation</strong>, are explicitly listed as high-risk. Travel insurance claims automation is not explicitly listed — classification depends on whether the system significantly influences individual decisions on coverage or payout. If yes: treat as high-risk. Document the assessment regardless.',
            },
            {
              label: 'Article 6(3)',
              variant: 'amber',
              text: 'An Annex III system is <strong>not</strong> high-risk if it: performs only a narrow procedural task; detects decision patterns without replacing human assessment; or performs a preparatory task to an assessment. The Document Extraction (IDP) agent may qualify for this exemption — but the exemption must be <strong>documented before deployment.</strong>',
            },
            {
              label: 'Article 6(4)',
              variant: 'amber',
              text: 'If you believe a system falls within Annex III but is not high-risk, you must <strong>document the assessment</strong> before placing it on the market or putting it into service. The system must still be registered in the EU AI database.',
            },
          ],
        },
      },
      {
        title: 'High-Risk System Obligations Checklist',
        content: {
          type: 'checklist',
          items: [
            {
              title: 'Technical documentation (Article 11)',
              desc: 'Maintained documentation covering: system design and purpose, training methodology, performance metrics, known limitations, human oversight mechanisms. Must be available to regulators on request. Required per high-risk agent.',
            },
            {
              title: 'Record-keeping / audit logging (Article 12)',
              desc: 'Automatic logging of events relevant to national-level risk identification and substantial modifications throughout the system lifecycle. Logs must enable post-hoc reconstruction of each consequential decision.',
            },
            {
              title: 'Human oversight mechanism (Article 14)',
              desc: 'Must be operationally realisable — not just stated in policy. Designated individuals must have the authority, context, and capacity to genuinely review and override automated decisions. Right to human review must be accessible to claimants.',
            },
            {
              title: 'Accuracy, robustness and cybersecurity (Article 15)',
              desc: 'Ongoing performance monitoring. Significant degradation triggers mandatory review. Resilience against adversarial manipulation, particularly for fraud detection agents whose outputs affect financial decisions.',
            },
            {
              title: 'Fundamental Rights Impact Assessment (Article 27)',
              desc: 'Required for deployers of high-risk AI systems before first use. In insurance: underwriting, claims automation, and eligibility assessments likely require a FRIA. Must be completed before the system is put into use.',
            },
            {
              title: 'EU AI database registration (Article 49)',
              desc: 'All high-risk AI systems must be registered in the EU database before deployment — including systems where the provider has assessed non-high-risk status under Article 6(4).',
            },
            {
              title: 'Post-market monitoring (Article 72)',
              desc: 'Ongoing monitoring plan for accuracy and reliability. No specific threshold defined by the Act — governance committee must set and own performance thresholds. Significant incidents must be reported to relevant authorities.',
            },
          ],
        },
      },
      {
        title: 'Timeline',
        content: {
          type: 'timeline',
          items: [
            { date: '1 Aug 2024', event: 'AI Act entered into force', variant: 'past' },
            { date: '2 Feb 2025', event: 'Prohibited AI provisions applicable', variant: 'past' },
            { date: 'Now', event: 'Prepare: gap analysis, technical docs, FRIA, governance model', variant: 'now' },
            {
              date: '2 Aug 2026',
              event: '<strong>Current legal deadline — High-risk AI system obligations (Annex III).</strong> Remains in force until trilogue concludes. Systems placed on market after this date must comply under current law. Systems already deployed: comply if subject to significant change.',
              variant: 'upcoming',
            },
            {
              date: '2 Dec 2027 ⚠',
              event: "<strong>Parliament's proposed revised deadline for Annex III high-risk systems.</strong> European Parliament adopted this position April 2026 (569–45). Trilogue with Council now begins — final date not yet law. The Digital Omnibus proposal also introduces a \"grandfathering\" clause permitting early deployment without full compliance. Monitor closely.",
              variant: 'future',
              dateStyle: { color: 'var(--accent-amber)' },
              itemStyle: { borderLeftColor: 'var(--accent-amber)' },
            },
            {
              date: '2 Aug 2028',
              event: "Parliament proposes this date for Annex I product safety component AI systems (replacing 2 Aug 2027 under current law). Also subject to trilogue.",
              variant: 'future',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'nis2',
    icon: '🛡️',
    name: 'NIS-2 / German BSI Act (NIS2UmsuCG)',
    scope: 'Directive (EU) 2022/2555 · German implementation in force 6 December 2025 · No grace period — obligations apply from day of implementation',
    statusLabel: 'In force now',
    statusVariant: 'active',
    subsections: [
      {
        title: 'Entity Classification',
        content: {
          type: 'obligations',
          items: [
            {
              label: 'Essential Entity',
              variant: 'red',
              text: 'Large enterprises (≥250 employees <strong>or</strong> >€50M revenue and >€43M balance sheet) operating in Annex I sectors. Subject to <strong>proactive supervision</strong> and higher penalties (up to €10M or 2% global turnover). In Germany: called "besonders wichtige Einrichtungen." KRITIS operators automatically classified as Essential. <strong>Allianz Partners, operating at scale across 30+ countries: likely qualifies as Essential. Legal counsel should confirm classification before BSI registration.</strong>',
            },
            {
              label: 'Important Entity',
              variant: 'amber',
              text: 'Medium enterprises (≥50 employees <strong>or</strong> >€10M revenue) in Annex I or II sectors. Subject to <strong>reactive supervision</strong> and lower penalties (up to €7M or 1.4% global turnover). In Germany: called "wichtige Einrichtungen."',
            },
            {
              label: 'Insurance + DORA',
              variant: 'blue',
              text: 'Insurance is not listed in NIS-2 Annex I or II directly. For regulated financial/insurance entities, <strong>DORA (Digital Operational Resilience Act, Regulation (EU) 2022/2554)</strong> is the primary cybersecurity framework. NIS-2 applies to the digital infrastructure layer. The two are complementary — DORA Article 4 governs the relationship. Verify with legal which framework governs which systems.',
            },
          ],
        },
      },
      {
        title: 'Incident Reporting — the 3-step cascade',
        content: {
          type: 'timeline+obligation',
          timeline: [
            {
              date: '24 hours',
              event: '<strong>Early warning to BSI.</strong> Notify of any significant incident within 24 hours of detection. This is the operationally critical window. Must indicate whether the incident is suspected to be caused by unlawful or malicious action.',
              variant: 'upcoming',
            },
            {
              date: '72 hours',
              event: '<strong>Incident notification.</strong> Detailed report including: initial assessment of severity and impact, indicators of compromise, whether the incident is ongoing. Update or replace the 24-hour early warning.',
              variant: 'now',
            },
            {
              date: '1 month',
              event: '<strong>Final report.</strong> Detailed description of the incident, type of threat or root cause, applied and ongoing mitigation measures, cross-border impact where applicable.',
              variant: 'future',
            },
          ],
          obligation: {
            label: 'Significant incident',
            variant: 'red',
            text: 'An incident is significant if it: causes severe operational disruption or financial loss; has affected or is capable of affecting other entities; or affects a large number of persons. The governance model must define what constitutes "significant" for the agentic claims platform specifically — this definition must be documented and owned.',
          },
        },
      },
      {
        title: 'Key Obligations Checklist',
        content: {
          type: 'checklist',
          items: [
            {
              title: 'Self-assessment and registration with BSI',
              desc: 'Entities must self-assess their classification (BSI will not inform you). Register via BSI Portal within 3 months of qualifying. Requires "Mein Unternehmenskonto" (MUK) and Elster organisation certificate.',
            },
            {
              title: 'Cybersecurity risk management measures',
              desc: 'Risk analysis, incident handling, business continuity, supply chain security, access control, encryption, MFA, vulnerability handling. Must be documented. ISO 27001 certification covers ~70–80% of requirements.',
            },
            {
              title: 'Supply chain security',
              desc: 'Assess and manage cybersecurity risks in third-party/vendor relationships. Agentic platform vendor and external model providers are in scope. Right-to-audit clauses, security requirements in contracts, regular assessments.',
            },
            {
              title: 'Management accountability and training',
              desc: 'Senior management personally liable for non-compliance. Must approve cybersecurity measures, oversee implementation, and undergo regular cybersecurity training. Document training cadence and attendance.',
            },
            {
              title: 'Incident detection and response capability',
              desc: "Operational capability to detect significant incidents and initiate the 24-hour reporting clock. The governance operating model's Tier 3 real-time monitoring layer must be configured to identify NIS-2 reportable events and trigger the escalation path to CCO + Legal immediately.",
            },
          ],
        },
      },
    ],
  },
  {
    id: 'gdpr',
    icon: '🔒',
    name: 'GDPR',
    scope: 'Regulation (EU) 2016/679 · In force · Focus: Art. 22 automated decisions + Art. 9 special category data',
    statusLabel: 'In force now',
    statusVariant: 'active',
    subsections: [
      {
        title: 'Article 22 — Automated Decision-Making',
        content: {
          type: 'obligations',
          items: [
            {
              label: 'Art. 22 trigger',
              variant: 'red',
              text: 'Claimants have the right not to be subject to <strong>solely automated decisions</strong> that produce legal or similarly significant effects. A coverage denial, fraud flag causing delay, or settlement calculation are all in scope. The human oversight mechanism required by EU AI Act Article 14 doubles as the Art. 22 compliance mechanism — but must be equally operationally realisable.',
            },
            {
              label: 'Operationalisation requirement',
              variant: 'amber',
              text: 'The right to human review must be <strong>accessible, not just stated</strong>. This means: a documented process for claimants to request review, a named team with authority to genuinely reassess, an SLA (recommended 5 business days), and outcome documentation regardless of whether the original decision is upheld.',
            },
          ],
        },
      },
      {
        title: 'Article 9 — Special Category Data',
        content: {
          type: 'obligations',
          items: [
            {
              label: 'Medical data',
              variant: 'red',
              text: 'Medical records processed by the Document Extraction Agent are special category data. Lawful basis options: explicit consent (Art. 9(2)(a)), vital interests (Art. 9(2)(c)), or medical purposes where applicable (Art. 9(2)(h)). Legal counsel should confirm the appropriate basis per processing context. Access must be role-restricted. Data minimisation applies — extract only what is necessary for the claim decision. Retention must be limited and documented.',
            },
          ],
        },
      },
      {
        title: 'Lawful Basis by Processing Activity',
        content: {
          type: 'table',
          headers: ['Processing Activity', 'Lawful Basis', 'Note'],
          rows: [
            { activity: 'Claims processing (standard)', basis: 'Art. 6(1)(b) — Contract performance', note: 'Core processing basis' },
            { activity: 'Fraud detection and flagging', basis: 'Art. 6(1)(f) — Legitimate interest', note: 'Must be documented; LIA required' },
            { activity: 'Medical record processing', basis: 'Art. 9(2)(a) — Explicit consent, or Art. 9(2)(c) — Vital interests', note: 'Special category; stricter controls' },
            { activity: 'Automated coverage decision', basis: 'Art. 6(1)(b) + Art. 22(2)(a) — Necessary for contract', note: 'Right to human review must be provided' },
            { activity: 'Audit log retention', basis: 'Art. 6(1)(c) — Legal obligation', note: 'Retention period per jurisdiction' },
          ],
        },
      },
    ],
  },
  {
    id: 'dora',
    icon: '🏦',
    name: 'DORA — Digital Operational Resilience Act',
    scope: 'Regulation (EU) 2022/2554 · In force 17 Jan 2025 · Primary framework for regulated financial/insurance entities',
    statusLabel: 'In force now',
    statusVariant: 'active',
    subsections: [
      {
        title: 'Relationship to NIS-2',
        content: {
          type: 'obligations',
          items: [
            {
              label: 'DORA vs NIS-2',
              variant: 'blue',
              text: 'For regulated financial entities (insurers, banks, investment firms), <strong>DORA is the lex specialis</strong> — it takes precedence over NIS-2 for ICT risk requirements under Article 4 NIS-2. NIS-2 applies to the digital infrastructure layer where DORA does not reach. Both may apply simultaneously to different parts of the organisation. Verify with legal which framework governs which systems and functions.',
            },
          ],
        },
      },
      {
        title: 'Key DORA Obligations for Agentic Systems',
        content: {
          type: 'checklist',
          items: [
            {
              title: 'ICT risk management framework',
              desc: 'Board-approved ICT risk framework. Agentic claims platform must be included in ICT asset inventory and risk register. Change management for agent updates must feed into ICT change governance.',
            },
            {
              title: 'Third-party ICT provider oversight (Chapter V)',
              desc: 'Agentic platform vendor qualifies as a critical ICT third-party provider if it supports critical or important functions. Requires: written agreement, exit strategy, concentration risk assessment, regulatory notification if material. Register of ICT third-party arrangements must be maintained and reported to supervisor annually.',
            },
            {
              title: 'Digital operational resilience testing',
              desc: 'Annual basic testing for all entities. Significant financial entities must conduct Threat-Led Penetration Testing (TLPT) every 3 years. Agentic platform and its integration points should be in scope for TLPT where applicable.',
            },
            {
              title: 'Major ICT incident reporting',
              desc: 'Major incidents reported to competent authority (BaFin in Germany for insurers). Classification criteria include: number of clients affected, duration, geographic spread, data losses, criticality of services impacted. Separate from NIS-2 reporting — both may apply.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'solvency',
    icon: '📊',
    name: 'Solvency II',
    scope: 'Directive 2009/138/EC · In force · Applicable to regulated insurance undertakings',
    statusLabel: 'In force now',
    statusVariant: 'active',
    subsections: [
      {
        title: 'Key Obligations for Agentic Claims Platforms',
        content: {
          type: 'checklist',
          items: [
            {
              title: 'ORSA — Own Risk and Solvency Assessment',
              desc: 'The operational risk profile changes materially when claims decisions are automated at scale. ORSA must explicitly model: agentic system failure scenarios, model error concentration risk (single agent class failing across millions of claims), systemic bias scenarios, and vendor dependency risk.',
            },
            {
              title: 'System of governance (Article 41)',
              desc: 'Solvency II requires a documented system of governance with clear allocation of responsibilities. The Agent Authority Register and Claims Governance Committee structure directly serve this requirement and should be explicitly referenced in governance documentation submitted to supervisors.',
            },
            {
              title: 'Outsourcing rules (Article 49)',
              desc: 'If agentic platform vendor supports critical or important functions: written agreement required, including: description of services, data protection obligations, business continuity provisions, ability to terminate and transfer, right to audit. Competent supervisory authority (BaFin in Germany) must be notified of material outsourcing arrangements before implementation. Verify notification requirements for each jurisdiction.',
            },
            {
              title: 'Audit trail for financial decisions',
              desc: 'Settlement calculations must be auditable to the standard required for external audit. Every input, formula version, and authority approval must be traceable. The audit log specification should be designed to meet Solvency II audit requirements — not just operational convenience.',
            },
          ],
        },
      },
    ],
  },
]

function ChecklistSection({ items }: { items: CheckItem[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false))

  function toggle(i: number) {
    setChecked(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  return (
    <div className="cr-checklist">
      {items.map((item, i) => (
        <div
          key={i}
          className={`cr-check-item${checked[i] ? ' checked' : ''}`}
          onClick={() => toggle(i)}
          role="checkbox"
          aria-checked={checked[i]}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}
        >
          <div className="cr-check-box">{checked[i] ? '☑' : '☐'}</div>
          <div className="cr-check-content">
            <div className="cr-check-title">{item.title}</div>
            <div className="cr-check-desc">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ObligationList({ items }: { items: Obligation[] }) {
  return (
    <>
      {items.map((ob, i) => (
        <div key={i} className={`cr-obligation cr-ob-${ob.variant}`}>
          <div className="cr-ob-label">{ob.label}</div>
          <div className="cr-ob-text" dangerouslySetInnerHTML={{ __html: ob.text }} />
        </div>
      ))}
    </>
  )
}

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="cr-timeline">
      {items.map((item, i) => (
        <div key={i} className={`cr-tl-item cr-tl-${item.variant}`} style={item.itemStyle}>
          <div className="cr-tl-date" style={item.dateStyle}>{item.date}</div>
          <div className="cr-tl-event" dangerouslySetInnerHTML={{ __html: item.event }} />
        </div>
      ))}
    </div>
  )
}

function SubsectionBlock({ sub }: { sub: Subsection }) {
  const c = sub.content
  return (
    <div className="cr-subsection">
      <div className="cr-subsection-title">{sub.title}</div>
      {c.type === 'obligations' && <ObligationList items={c.items} />}
      {c.type === 'checklist' && <ChecklistSection items={c.items} />}
      {c.type === 'timeline' && <TimelineList items={c.items} />}
      {c.type === 'timeline+obligation' && (
        <>
          <TimelineList items={c.timeline} />
          <div style={{ marginTop: '0.75rem' }}>
            <ObligationList items={[c.obligation]} />
          </div>
        </>
      )}
      {c.type === 'table' && (
        <div className="cr-table-wrap">
          <table className="cr-table">
            <thead>
              <tr>{c.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.activity}</td>
                  <td>{row.basis}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function FrameworkCardBlock({ fw }: { fw: FrameworkCard }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`cr-fw-card${open ? ' open' : ''}`}>
      <div
        className="cr-fw-header"
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o) } }}
      >
        <div className="cr-fw-icon">{fw.icon}</div>
        <div className="cr-fw-info">
          <div className="cr-fw-name">{fw.name}</div>
          <div className="cr-fw-scope" dangerouslySetInnerHTML={{ __html: fw.scope }} />
        </div>
        <div className={`cr-fw-status cr-status-${fw.statusVariant}`}>{fw.statusLabel}</div>
        <div className="cr-fw-chevron">▼</div>
      </div>
      {open && (
        <div className="cr-fw-body">
          {fw.subsections.map((sub, i) => (
            <SubsectionBlock key={i} sub={sub} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ComplianceRef() {
  return (
    <div className="section active" id="section-compliance">
      <div className="section-title">Compliance Reference & Checklist</div>
      <div className="section-tagline">Which specific obligations, deadlines, and procedural requirements apply – by framework</div>
      <div className="section-desc">
        Distinct from the Regulatory tab, which maps frameworks to governance design decisions. This tab is for the compliance officer and legal team.
      </div>

      <div className="callout">
        Regulations and obligations below are summarised for architectural decision-making from a governance design lens. They are not legal advice.<br /> Last updated: April 2026.<br />For latest regulatory developments please refer to{' '}
        <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>EUR-Lex</a>{' '}
        and{' '}
        <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>EU AI Act Explorer</a>.
      </div>

      <div className="cr-section-head">Step 1 — Establish what applies to your organisation</div>
      <div className="cr-decision-tree">
        <div className="cr-decision-node cr-dn-root">
          <div className="cr-dn-q">Does your organisation process personal data of EU residents in an automated claims or financial decision context?</div>
          <div className="cr-dn-answers">
            <div className="cr-dn-yes">Yes → GDPR Art. 22 applies. Continue.</div>
            <div className="cr-dn-no">No → GDPR Art. 22 likely out of scope. Verify with legal.</div>
          </div>
        </div>

        <div className="cr-tree-arrow">↓</div>

        <div className="cr-decision-node cr-dn-blue">
          <div className="cr-dn-q">Do your AI systems make or significantly influence individual decisions on insurance coverage, claims, or pricing?</div>
          <div className="cr-dn-answers">
            <div className="cr-dn-yes">Yes → Likely High-Risk under EU AI Act Annex III. Full conformity obligations apply from <strong>2 August 2026</strong> under current law — Parliament's simplification proposal (adopted April 2026, trilogue pending) proposes extending this to <strong>2 December 2027.</strong> Plan for 2026; monitor trilogue outcome.</div>
            <div className="cr-dn-no">No → Limited Risk tier. Transparency obligations only (Article 50).</div>
          </div>
        </div>

        <div className="cr-tree-arrow">↓</div>

        <div className="cr-decision-node cr-dn-amber">
          <div className="cr-dn-q">Is your organisation a financial/insurance entity providing digital services in the EU with &gt;50 employees or &gt;€10M turnover?</div>
          <div className="cr-dn-answers">
            <div className="cr-dn-yes">Yes → NIS-2 / German BSI Act applies (in force 6 Dec 2025). DORA also applies if you are a regulated financial entity — check overlap.</div>
            <div className="cr-dn-no">No → Check if micro/small enterprise exemption applies. Some categories in scope regardless of size.</div>
          </div>
        </div>

        <div className="cr-tree-arrow">↓</div>

        <div className="cr-decision-node cr-dn-purple">
          <div className="cr-dn-q">Is your organisation a regulated insurance undertaking subject to Solvency II?</div>
          <div className="cr-dn-answers">
            <div className="cr-dn-yes">Yes → ORSA must reflect agentic operational risk. Outsourcing rules apply to third-party agentic platforms. Audit trail requirements apply to settlement decisions.</div>
            <div className="cr-dn-no">No → Solvency II out of scope. Verify if other sectoral regulation applies.</div>
          </div>
        </div>
      </div>

      <div className="cr-section-head" style={{ marginTop: '2rem' }}>Step 2 — Obligations by framework</div>
      <div className="cr-frameworks">
        {frameworks.map(fw => (
          <FrameworkCardBlock key={fw.id} fw={fw} />
        ))}
      </div>
    </div>
  )
}
