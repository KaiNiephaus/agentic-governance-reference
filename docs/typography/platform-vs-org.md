# Tab: Platform vs. Org

`src/components/tabs/PlatformVsOrg.tsx`. See [`README.md`](README.md) for how to read this.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Platform vs. Organisation" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "What the platform provides and what the organisation..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Platforms like Otera make autonomous claims operations..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Column header | "What the platform provides" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | accent-blue | 0.1em | uppercase | (inherited 1.6) | inline |
| 5 | Column header | "What the organisation must design" | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | accent-amber | 0.1em | uppercase | (inherited 1.6) | inline |
| 6 | List item (both columns) | "Audit logs of agent decisions" / "What counts as a reviewable decision" / etc. | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.gov-item-body` (color override, same as class default) |
| 7 | Sub-heading | "The trade-offs that sit in between" | Fraunces, serif | 1.4rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-subtitle` (marginBottom overridden, not typography) |
| 8 | Trade-off card title ×3 | "Autonomy vs. Control" / "Velocity vs. Change Control" / "Exception Rate as Governance Signal" | (inherited DM Sans) | 0.78rem | 500 | normal | text-bright | — | — | (inherited 1.6) | `.gov-item-title` (marginBottom overridden, not typography) |
| 9 | Trade-off card body ×3 | "Every increase in autonomous processing reduces..." | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.gov-item-body` (marginBottom overridden, not typography) |
| 10 | Cross-link label ×3 | "See also:" | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | inline |
| 11 | Cross-link ×3 | "Agent Register →" / "Governance Layer 03 →" / "Gov. Flow tab →" | (inherited DM Sans) | (inherited 0.7rem) | (inherited 300) | normal | accent-cyan | — | — | (inherited 1.6) | inline (color only; size inherited from parent) |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
