# Shared Components

See [`README.md`](README.md) for how to read this. Components here are used across multiple tabs — cataloged once, linked from each tab file that uses them.

## `ScalabilitySection` (`src/components/shared/ScalabilitySection.tsx`)
Used at the bottom of all 9 tabs.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| S1 | Header title | "Requirements for Scalability" | Fraunces, serif | 1.1rem | 600 | normal | accent-purple | — | — | (inherited 1.6) | inline |
| S2 | Header axis tags | "Use Cases" / "Jurisdictions" / "People & Roles" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | axis color (blue/amber/sage) | 0.08em | uppercase | (inherited 1.6) | inline |
| S3 | Body framing statement | data-driven (`data.framing`) | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | 1.7 | inline |
| S4 | Item title | data-driven (`item.title`) | (inherited DM Sans) | 0.78rem | 600 | normal | text | — | — | 1.3 | inline |
| S5 | Item tags | data-driven (`t.label`) | DM Mono, monospace | 0.55rem | (inherited 300*) | normal | tag color | 0.08em | uppercase | (inherited 1.6) | inline |
| S6 | Item body | data-driven (`item.body`) | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim | — | — | 1.75 | inline |
| S7 | Caveat label | "Known Limitation" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | accent-red | 0.1em | uppercase | (inherited 1.6) | inline |
| S8 | Caveat body | data-driven (`data.caveat`) | (inherited DM Sans) | 0.76rem | (inherited 300) | normal | text-dim | — | — | 1.7 | inline |
| S9 | Cross-link label | "Connects to:" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | inline |
| S10 | Cross-link items | data-driven (`link.label`) | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | accent-cyan | — | — | (inherited 1.6) | inline |

## `Chevron` (`src/components/shared/Chevron.tsx`)
Renders `▼`. No default styling of its own — every usage passes `fontSize`/`color` via `style` or `className`. Sized/colored per-usage; noted inline where it appears in each tab file rather than cataloged here.

## `Badge` (`src/components/shared/Badge.tsx`)
Renders `<span className="badge ...">`.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| B1 | Badge label | data-driven | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | (set by modifier class per usage) | 0.08em | uppercase | (inherited 1.6) | `.badge` |

## `DetailPanel` (`src/components/shared/DetailPanel.tsx`)
Used by `ProcessFlow` and `GovFlow` to show node/block detail on click.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| D1 | Type tag | data-driven (`detail.type`) | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | (set by `typeClass` modifier) | 0.1em | uppercase | (inherited 1.6) | `.detail-tag` |
| D2 | Heading | data-driven (`detail.name`) | Fraunces, serif | 1.1rem | (inherited 300) | normal | text-bright | — | — | (inherited 1.6) | `.detail-panel h3` |
| D3 | Description | data-driven (`detail.desc`) | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim | — | — | 1.6 | inline |
| D4 | Block title ×3 | "Inputs" / "Outputs" / "Governance Controls" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.detail-block-title` |
| D5 | Block list items | data-driven | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim (text-bright for `<strong>`) | — | — | 1.6 | `.detail-block-body` / `.detail-block-body li` |
| D6 | Risk level label | "Risk Level:" | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | inline |
| D7 | Risk chip | data-driven (parsed from `detail.risk`) | DM Mono, monospace | 0.58rem | (inherited 300*, 600 for `risk-crit`) | normal | tier color (green/amber/red/white-on-red) | 0.06em | uppercase | (inherited 1.6) | `.risk-chip` + `.risk-low`/`.risk-med`/`.risk-high`/`.risk-crit` |
| D8 | Risk remainder text | data-driven (parsed from `detail.risk`) | (inherited DM Sans) | (inherited 0.7rem\*\*) | (inherited 300) | normal | text | — | — | (inherited 1.6) | inline |

\*\* Inherits from the parent chip container's `fontSize: '0.7rem'` (`DetailPanel.tsx:57`), not a class.
