# Tab: Compliance Reference

`src/components/tabs/ComplianceRef.tsx`. See [`README.md`](README.md) for how to read this.

**Note:** most of this file's 578 lines are the `frameworks` data array (lines 62-383) — obligation text, checklist items, timeline entries, table rows. That's *content*, not distinct style declarations; every obligation/checklist-item/timeline-item/table-row renders through one of the handful of components defined below it (`ChecklistSection`, `ObligationList`, `TimelineList`, `SubsectionBlock`, `FrameworkCardBlock`), so the styling is fully covered by the entries below despite the file's length.

| # | Location | Text (sample) | Family | Size | Weight | Style | Color | Letter-sp | Transform | Line-height | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Section title | "Compliance Reference & Checklist" | Fraunces, serif | 1.8rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.section-title` |
| 2 | Section tagline | "Which specific obligations, deadlines, and procedural..." | Fraunces, serif | 1.225rem | 300 | italic | accent-amber | — | — | (inherited 1.6) | `.section-tagline` |
| 3 | Section description | "Distinct from the Regulatory tab, which maps..." | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.section-desc` |
| 4 | Callout | "Regulations and obligations below are summarised..." | (inherited DM Sans) | 0.78rem | (inherited 300) | normal | text-dim | — | — | 1.6 | `.callout` |
| 5 | Callout links ×2 | "EUR-Lex" / "EU AI Act Explorer" | (inherited DM Sans) | (inherited 0.78rem) | (inherited 300) | normal | accent-cyan | — | — | (inherited 1.6) | inline (color only) |
| 6 | Step heading ×2 | "Step 1 — Establish what applies to your organisation" / "Step 2 — Obligations by framework" | Fraunces, serif | 1.1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.cr-section-head` |
| 7 | Decision-tree question | data-driven (`cr-dn-q`) | (inherited DM Sans) | 0.8rem | 500 | normal | text-bright | — | — | (inherited 1.6) | `.cr-dn-q` |
| 8 | Decision-tree "Yes" answer | data-driven | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | accent-green | — | — | (inherited 1.6) | `.cr-dn-yes` |
| 9 | Decision-tree "No" answer | data-driven | (inherited DM Sans) | 0.72rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.cr-dn-no` |
| 10 | Tree arrow | "↓" ×4 | (inherited DM Sans) | 1.2rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.cr-tree-arrow` |
| 11 | Framework icon | data-driven emoji (`fw.icon`) | (inherited DM Sans) | 1.2rem | (inherited 300) | normal | — | — | — | (inherited 1.6) | `.cr-fw-icon` |
| 12 | Framework name | data-driven (`fw.name`) | Fraunces, serif | 1rem | 600 | normal | text-bright | — | — | (inherited 1.6) | `.cr-fw-name` |
| 13 | Framework scope | data-driven (`fw.scope`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.cr-fw-scope` |
| 14 | Framework status label | data-driven (`fw.statusLabel`) | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | accent-green (active) / accent-amber (upcoming) | 0.08em | uppercase | (inherited 1.6) | `.cr-fw-status` + `.cr-status-active`/`.cr-status-upcoming` |
| 15 | Framework chevron | "▼" | (inherited DM Sans) | 0.8rem | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.cr-fw-chevron` |
| 16 | Subsection title | data-driven (`sub.title`) | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.1em | uppercase | (inherited 1.6) | `.cr-subsection-title` |
| 17 | Obligation label | data-driven (`ob.label`) | DM Mono, monospace | 0.58rem | (inherited 300*) | normal | text-dim | 0.08em | uppercase | (inherited 1.6) | `.cr-ob-label` |
| 18 | Obligation text | data-driven (`ob.text`, HTML with `<strong>` in text/500) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text-dim | — | — | 1.6 | `.cr-ob-text` |
| 19 | Checklist checkbox glyph | "☑" / "☐" | (inherited DM Sans) | 1rem | (inherited 300) | normal | text-dim (accent-green when checked) | — | — | (inherited 1.6) | `.cr-check-box` |
| 20 | Checklist item title | data-driven (`item.title`) | (inherited DM Sans) | 0.78rem | 500 | normal | text-bright (text-dim + strikethrough when checked) | — | — | (inherited 1.6) | `.cr-check-title` |
| 21 | Checklist item description | data-driven (`item.desc`) | (inherited DM Sans) | 0.7rem | (inherited 300) | normal | text-dim | — | — | 1.55 | `.cr-check-desc` |
| 22 | Timeline date | data-driven (`item.date`) | DM Mono, monospace | 0.65rem | (inherited 300*) | normal | accent-cyan | — | — | (inherited 1.6) | `.cr-tl-date` |
| 23 | Timeline event | data-driven (`item.event`, HTML with `<strong>` in text/500) | (inherited DM Sans) | 0.75rem | (inherited 300) | normal | text-dim | — | — | 1.5 | `.cr-tl-event` |
| 24 | Table header | data-driven (`c.headers`) | DM Mono, monospace | 0.6rem | (inherited 300*) | normal | text-dim | 0.08em | uppercase | (inherited 1.6) | `.cr-table th` |
| 25 | Table cell (first column) | data-driven (`row.activity`) | (inherited DM Sans) | (inherited 0.72rem) | 500 | normal | text | — | — | (inherited 1.6) | `.cr-table td:first-child` |
| 26 | Table cell (other columns) | data-driven (`row.basis`/`row.note`) | (inherited DM Sans) | (inherited 0.72rem) | (inherited 300) | normal | text-dim | — | — | (inherited 1.6) | `.cr-table td` |
| — | Scalability section | — | — | — | — | — | — | — | — | — | see [Shared: ScalabilitySection](shared-components.md#scalabilitysection-srccomponentssharedscalabilitysectiontsx) |
