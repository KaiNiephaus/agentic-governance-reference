# Tab: Gov. Flow

`src/components/tabs/GovFlow.tsx`. See [`README.md`](README.md) for how to read this.

**Note before the table:** this tab renders its event-flow diagram as raw SVG markup built in a JS template string (lines 48-117), not as React/CSS elements. That text is styled with SVG `font-family`/`font-size` attributes directly in the string, completely separate from the CSS/inline-style system everything else in the app uses. **A CSS-based font swap will not touch this text** — it has to be edited in this file's source directly. Cataloged separately below for that reason.

## React-rendered text

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Governance Flow" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "How governance tiers operate over time" | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "The rhythm of governance: when each tier acts..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Axis header label | "Tier / Cadence" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | inline |
| 5 | Time column header ×5 | "Continuous" / "Daily" / "Weekly" / "Monthly" / "Quarterly" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | — | — | (inherited 1.6) | `.gf-time-col` |
| 6 | Tier number ×3 | "1" / "2" / "3", colored by `--tier-accent-N` | Fraunces, serif | 2.2rem | 900 | normal | per-tier accent | — | — | 1 | `.gf-tier-num` |
| 7 | Tier name ×3 | "Strategic" / "Operational" / "Real-time" | Fraunces, serif | 0.82rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.gf-tier-name` |
| 8 | Tier cadence ×3 | "Monthly · Quarterly" / "Weekly" / "Always on" | DM Mono, monospace | 0.56rem | (inherited 300*) | normal | per-tier accent | 0.1em | uppercase | (inherited 1.6) | `.gf-tier-cadence` |
| 9 | Block title | data-driven (`block.title`) | (inherited DM Sans) | 0.72rem | 500 | normal | text-bright | — | — | 1.3 | `.gf-block-title` |
| 10 | Block sub-text | data-driven (`block.sub`) | (inherited DM Sans) | 0.62rem | (inherited 300) | normal | text-dim | — | — | 1.3 | `.gf-block-sub` |
| 11 | Continuous-band text | "Platform monitoring · Alert detection · Authority gate integrity · Payment success tracking · On-call coverage 24/7" | DM Mono, monospace | 0.62rem | (inherited 300*) | normal | tier-accent-3 | 0.06em | — | (inherited 1.6) | inline |
| 12 | Detail panel tier tag | data-driven (`d.tier`) | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | `d.color` (per-flow) | 0.1em | uppercase | (inherited 1.6) | inline |
| 13 | Detail panel title | data-driven (`d.title`) | Fraunces, serif | 1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | inline |
| 14 | Detail panel description | data-driven (`d.what`) | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim | — | — | 1.65 | inline |
| 15 | Detail column label ×5 | "Accountable" / "Inputs" / "Outputs" / "↑ Triggers up" / "↓ Triggers down" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim (tier-accent-1 for "↑ Triggers up", tier-accent-3 for "↓ Triggers down") | 0.1em | uppercase | (inherited 1.6) | inline |
| 16 | Detail column value: Accountable | data-driven (`d.who`) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text | — | — | (inherited 1.6) | inline |
| 17 | Detail column value: Inputs/Outputs/Triggers | data-driven (`d.inputs`/`.outputs`/`.triggersUp`/`.triggersDown`) | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | inline |
| 18 | Event Flows heading | "Event Flows" | Fraunces, serif | 1.1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | inline |
| 19 | Event Flows instruction | "Select a trigger to trace propagation across tiers" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.12em | uppercase | (inherited 1.6) | inline |
| 20 | Flow chip label ×5 | "Incident detected" / "Agent drift" / "Change request" / "Regulatory trigger" / "✕ clear" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | per-chip color (via `--fc`) | 0.08em | uppercase | (inherited 1.6) | `.gf-flow-chip` |
| 21 | SVG canvas title | data-driven (`gfFlows[activeFlow].title`) | Fraunces, serif | 1rem | 600 | normal | per-flow color | — | — | (inherited 1.6) | `.gf-flow-title` |
| 22 | SVG canvas subtitle | data-driven (`gfFlows[activeFlow].subtitle`) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.gf-flow-subtitle` |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |

## SVG-injected text (JS template string, `GovFlow.tsx:48-117`)

| # | Location | Text (sample) | Family | Size (px, SVG attr) | Fill | Opacity | Letter-sp |
|---|---|---|---|---|---|---|---|
| 23 | Lane label ×3 | "T1" / "T2" / "T3" | DM Mono, monospace | 9 | per-tier accent | 0.6 | 1 (SVG unit, not em) |
| 24 | Branch note | "Tier A only" (change flow only) | DM Mono, monospace | 8 | per-flow color | 0.6 | — |
| 25 | Node time label | data-driven (`step.time`) | DM Mono, monospace | 8 | per-flow color | (unset, full) | — |
| 26 | Node label | data-driven (`step.label`, supports multi-line via `\n`) | DM Sans, sans-serif | 10 | text-bright | 0.9 | — |
