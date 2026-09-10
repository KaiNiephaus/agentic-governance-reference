# Tab: Agent Register

`src/components/tabs/AgentRegister.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Agent Authority Register" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "What each agent may and may not do..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Every agent in the claims processing network..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Agent icon | data-driven emoji (`agent.icon`) | (inherited DM Sans) | (unset, default browser emoji size) | (inherited 300) | normal | — | — | — | (inherited 1.6) | inline (background only) |
| 5 | Agent name | data-driven (`agent.name`) | (inherited DM Sans) | 0.82rem | 500 | normal | text-bright | — | — | (inherited 1.6) | `.agent-name` |
| 6 | Agent description | data-driven (`agent.desc`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.agent-desc` |
| — | Risk badge | "Risk: " + data-driven (`agent.riskTier`) | — | — | — | — | — | — | — | — | see [Shared: Badge](shared-components.md#badge-srccomponentssharedbadgetsx) |
| — | Chevron | ▼ | — | 0.8rem | — | — | text-dim | — | — | — | see [Shared: Chevron](shared-components.md#chevron-srccomponentssharedchevrontsx) |
| 7 | Detail column title ×4 | "✓ Decision Scope" / "✗ Cannot Decide" / "⚡ Escalation Triggers" / "Governance" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.agent-detail-col-title` |
| 8 | Detail item body | data-driven (`agent.scope`/`.cannot`/`.escalates`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.agent-detail-item` |
| 9 | Detail item label (`<strong>`) | "Owner" / "Change Approval" / "Monitoring" / "EU AI Act Status" | (inherited DM Sans) | (inherited 0.7rem) | 500 | normal | text | — | — | (inherited 1.5) | `.agent-detail-item strong` |
| 10 | Governance detail values | data-driven (`agent.owner`/`.changeApproval`/`.monitoring`/`.aiActStatus`) | (inherited DM Sans) | (inherited 0.7rem) | (inherited 300) | normal | text-dim | — | — | (inherited 1.5) | `.agent-detail-item` (same class as #8, listed separately since it's plain text following the `<strong>` label rather than the label itself) |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
