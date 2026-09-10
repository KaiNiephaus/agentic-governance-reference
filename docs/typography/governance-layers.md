# Tab: Governance Layers

`src/components/tabs/GovernanceLayers.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Governance Layers" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "How governance must cater to the four structural..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Four independent governance design problems..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Layer number | data-driven (`layer.num`), colored by `--layer-accent-N` | Fraunces, serif | 2rem | 900 | normal | per-layer accent | — | — | 1 | `.gov-layer-num` |
| 5 | Layer name | data-driven (`layer.name`) | Fraunces, serif | 1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.gov-layer-name` |
| 6 | Layer subtitle | data-driven (`layer.subtitle`) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.gov-layer-subtitle` |
| — | Layer badges | data-driven (`layer.badges`) | — | — | — | — | — | — | — | — | see [Shared: Badge](shared-components.md#badge-srccomponentssharedbadgetsx) |
| — | Chevron | ▼ | — | 0.8rem | — | — | text-dim | — | — | — | see [Shared: Chevron](shared-components.md#chevron-srccomponentssharedchevrontsx) |
| 7 | Column title ×3 | "What It Covers" / "How It Works In Practice" / "Failure Modes & Mitigations" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.gov-col-title` |
| 8 | Item title | data-driven (`item.title`) | (inherited DM Sans) | 0.78rem | 500 | normal | text-bright (accent-red for failure-mode items) | — | — | (inherited 1.6) | `.gov-item-title` (+ inline color override in Failure column) |
| 9 | Item body | data-driven (`item.body`) | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.gov-item-body` |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
