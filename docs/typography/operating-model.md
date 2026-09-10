# Tab: Operating Model

`src/components/tabs/OperatingModel.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Operating Model" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "Who reviews, escalades, decides, changes..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Three-tier governance structure covering strategic..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Tier label | data-driven (`tier.tier`), colored by `tier.color` | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | per-tier accent | 0.12em | uppercase | (inherited 1.6) | `.om-tier-label` |
| 5 | Tier name | data-driven (`tier.name`) | Fraunces, serif | 1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.om-tier-name` |
| 6 | Tier cadence | "Cadence: " + data-driven (`tier.cadence`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.om-tier-cadence` |
| 7 | Role name | data-driven (`role.name`) | (inherited DM Sans) | 0.75rem | 500 | normal | text | — | — | (inherited 1.6) | `.om-role-name` |
| 8 | Role description | data-driven (`role.desc`) | (inherited DM Sans) | 0.68rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.om-role-desc` |
| 9 | Activities title | "Key Activities" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.om-act-title` |
| 10 | Activity item | data-driven (`activity`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | 1.4 | `.om-act-item` |
| 11 | Sub-heading | "Escalation Matrix" | Fraunces, serif | 1.4rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-subtitle` (marginBottom overridden, not typography) |
| 12 | Section description | "Every key escalation scenario mapped to trigger type..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 13 | Table header ×7 | "Escalation Scenario" / "Originating Agent" / "Trigger Type" / "Routes To" / "SLA" / "Authority" / "Risk" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.esc-table th` |
| 14 | Table cell: scenario | data-driven (`row.scenario`) | (inherited DM Sans) | (inherited 0.75rem) | (inherited 300) | normal | text | — | — | (inherited 1.6) | inline (color only; size from `.esc-table`) |
| 15 | Table cell: agent | data-driven (`row.agent`) | (inherited DM Sans) | (inherited 0.75rem) | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | inline (color only) |
| 16 | Table cell: trigger | data-driven (`row.trigger`) | (inherited DM Sans) | (inherited 0.75rem) | (inherited 300) | normal | (inherited `.esc-table` — no color set, falls to body `--text`) | — | — | (inherited 1.6) | `.esc-table td` |
| 17 | Table cell: routes to | data-driven (`row.routeTo`) | (inherited DM Sans) | (inherited 0.75rem) | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | inline (color only) |
| 18 | Table cell: SLA | data-driven (`row.sla`) | DM Mono, monospace | 0.7rem | (inherited 300*) | normal | accent-cyan | — | — | (inherited 1.6) | inline |
| 19 | Table cell: authority | data-driven (`row.authority`) | (inherited DM Sans) | (inherited 0.75rem) | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | inline (color only) |
| 20 | Table cell: risk chip | data-driven (`row.risk`) | DM Mono, monospace | 0.58rem | (inherited 300*, 600 for `risk-crit`) | normal | tier color (green/amber/red/white-on-red) | 0.06em | uppercase | (inherited 1.6) | `.risk-chip` + `.risk-low`/`.risk-med`/`.risk-high`/`.risk-crit` |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
