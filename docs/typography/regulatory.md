# Tab: Regulatory

`src/components/tabs/Regulatory.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Regulatory Frameworks" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "How EU AI Act, NIS-2, GDPR, and Solvency II shape..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Each key framework drives specific design decisions..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Callout | "Architectural lens: This tab covers how regulations..." (`<strong>` in text-bright/500) | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim | — | — | 1.6 | `.callout` |
| 5 | Callout link | "Compliance Ref. →" | (inherited DM Sans) | (inherited 0.78rem) | (inherited 300) | normal | accent-cyan | — | — | (inherited 1.6) | inline (color only; size/family inherited from `.callout`) |
| 6 | Framework icon | data-driven emoji (`framework.icon`) | (inherited DM Sans) | 1.2rem | (inherited 300) | normal | (emoji, not text color) | — | — | (inherited 1.6) | `.reg-icon` |
| 7 | Framework name | data-driven (`framework.name`) | Fraunces, serif | 1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.reg-name` |
| 8 | Framework scope | data-driven (`framework.scope`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.reg-scope` |
| 9 | Obligation label | data-driven (`ob.label`), colored by `ob.labelClass` (`.tag-blue`/`.tag-cyan`/`.tag-amber`/`.tag-red`/etc.) | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | per tag class | 0.08em | uppercase | (inherited 1.6) | `.reg-ob-label` |
| 10 | Obligation text | data-driven (`ob.text`, HTML with `<strong>` in text/500) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.reg-ob-text` |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
