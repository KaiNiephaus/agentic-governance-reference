# Tab: Agentic Process Flow

`src/components/tabs/ProcessFlow.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "E2E Agentic Claims Processing Flow" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "How decisions move through the claim lifecycle" | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "A six-agent flow covering the claims processing..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Stage label ×3 | "Stage 1 — Intake & Triage" / "Stage 2 — Validation & Risk" / "Stage 3 — Settlement & Payment" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.12em | uppercase | (inherited 1.6) | `.flow-stage-label` |
| 5 | Node type label | data-driven (`node.typeLabel`), colored per node kind (`.node-agent`→accent-blue, `.node-human`→accent-amber, `.node-gate`→accent-red, `.node-system`→text-dim, `.node-output`→accent-green) | DM Mono, monospace | 0.55rem | (inherited 300*) | normal | per node-kind modifier | 0.1em | uppercase | (inherited 1.6) | `.flow-node-type` (+ `.node-* .flow-node-type` color modifier) |
| 6 | Node name | data-driven (`node.name`) | (inherited DM Sans) | 0.78rem | 500 | normal | text-bright | — | — | 1.3 | `.flow-node-name` |
| 7 | Node sub-text | data-driven (`node.sub`) | (inherited DM Sans) | 0.68rem | (inherited 300) | normal | text-dim | — | — | 1.4 | `.flow-node-sub` |
| 8 | Flow arrow | "→" | (inherited DM Sans) | 0.9rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.flow-arrow` |
| 9 | Inter-stage note | "↓ PASSED" | DM Mono, monospace | 0.7rem | (inherited 300*) | normal | text-dim | 0.08em | — | (inherited 1.6) | inline |
| 10 | Inter-stage note | "↓ CLEARED (both paths rejoin here)" | DM Mono, monospace | 0.7rem | (inherited 300*) | normal | text-dim | 0.08em | — | (inherited 1.6) | inline |
| 11 | Legend item ×5 | "AI Agent" / "Human Decision" / "Governance Gate" / "System Trigger" / "Output / Close" | DM Mono, monospace | 0.7rem | (inherited 300*) | normal | text-dim | — | — | (inherited 1.6) | `.legend-item` |
| — | Detail panel | — | — | — | — | — | — | — | — | — | see [Shared: DetailPanel](shared-components.md#detailpanel-srccomponentssharedetailpaneltsx) |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
