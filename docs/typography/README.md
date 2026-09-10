# Typography Inventory

Catalogs every distinct text-bearing element's typographic properties (family, size, weight, style, color, letter-spacing, transform, line-height), in the order it appears in each tab. Purpose: if fonts change app-wide, these files are the reference to restore the current exact type layout.

**Structure:**
- [`shared-components.md`](shared-components.md) — components used across multiple tabs (`ScalabilitySection`, `Chevron`, `Badge`, `DetailPanel`). Cataloged once; each tab file links here instead of repeating these entries.
- One file per tab, named after the tab (`overview.md`, `agent-register.md`, etc.), covering only what that tab's own component file defines.

**How to read an entry:**
- **Source** = `inline` (styled directly on the element) or `.class-name` (styled via a shared CSS class in `base.css`/`components.css` — resolved values shown; if the element also has inline overrides on top of the class, those are noted separately).
- Values marked **(inherited)** aren't set on the element itself — they cascade from a parent (usually `body`: `font-family: 'DM Sans', sans-serif; font-weight: 300; line-height: 1.6;`, defined in `base.css:3-10`). Noted explicitly because an inherited value still needs updating on a font change, just not at this element.
- \* next to a weight means: DM Mono is only loaded in weights 400/500 (`variables.css:1`). An inherited `font-weight: 300` on a DM Mono element has no 300 to render, so the browser substitutes the nearest available weight (typically 400) — flagged because this is exactly the kind of mismatch a font swap could silently change.

**Two ways this gets used:**
1. **Restoring after a font change** — open the file for the tab you're fixing. Scoped on purpose: keeps you from misreading a similar-looking row from a different tab's section.
2. **Finding tokenization opportunities** (repeated style combinations worth turning into a shared class/CSS variable) — this needs a *cross-tab* view grouped by pattern, not by location, which these per-tab files don't provide directly. Generate that view fresh from these files when you're ready to do that review, rather than maintaining a third artifact that can drift out of sync with the other nine.
