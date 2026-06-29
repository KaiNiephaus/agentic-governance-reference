import { useState } from 'react'
import type { ScalabilitySection as ScalabilitySectionType } from '../../data/scalability'

// Axis label config
const AXIS_CONFIG: Record<string, { label: string; color: string }> = {
  'use-cases':    { label: 'Use Cases',      color: 'var(--accent-blue)'   },
  'jurisdictions':{ label: 'Jurisdictions',  color: 'var(--accent-amber)'  },
  'people':       { label: 'People & Roles', color: 'var(--accent-purple)' },
}

const TAG_COLORS: Record<string, string> = {
  blue:   'var(--accent-blue)',
  amber:  'var(--accent-amber)',
  purple: 'var(--accent-purple)',
  green:  'var(--accent-green)',
  red:    'var(--accent-red)',
  cyan:   'var(--accent-cyan)',
}

interface Props {
  data: ScalabilitySectionType
  onNavigate: (tab: string, options?: { openLayerIndex?: number; openBlockKey?: string }) => void
}

export default function ScalabilitySection({ data, onNavigate }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '2rem' }}>
      <div style={{
        border: '1px solid var(--scalability-border)',
        borderLeft: '3px solid var(--accent-purple)',
        borderRadius: '6px',
        background: 'var(--scalability-bg)',
        overflow: 'hidden',
      }}>
        {/* Header — always visible, click to expand */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.875rem 1.25rem',
            cursor: 'pointer',
            userSelect: 'none',
            borderBottom: open ? '1px solid var(--scalability-header-border)' : 'none',
          }}
        >
          {/* Label */}
          <div style={{
            fontFamily: "'Fraunces', serif",
            fontSize: '1.1rem',
            fontWeight: 600,
            color: 'var(--accent-purple)',
            whiteSpace: 'nowrap',
          }}>
            Requirements for Scalability
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Axis tags */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {data.axes.map((axis) => {
                const cfg = AXIS_CONFIG[axis]
                if (!cfg) return null
                return (
                  <span key={axis} style={{
                    fontSize: '0.6rem',
                    fontFamily: "'DM Mono', monospace",
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: cfg.color,
                    border: `1px solid ${cfg.color}`,
                    borderRadius: '3px',
                    padding: '0.1rem 0.45rem',
                    opacity: 0.85,
                  }}>
                    {cfg.label}
                  </span>
                )
              })}
            </div>

            {/* Chevron */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{
                color: 'var(--accent-purple)',
                opacity: 0.7,
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
              }}
            >
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Body — revealed on expand */}
        {open && (
          <div style={{ padding: '1.25rem' }}>

            {/* Framing statement */}
            <div style={{
              fontSize: '1rem',
              color: 'var(--text-dim)',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--scalability-divider)',
            }}>
              {data.framing}
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.items.map((item, i) => (
                <div key={i} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '5px',
                  padding: '1rem 1.125rem',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.5rem',
                  }}>
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </div>
                    {item.tags?.map((t, ti) => (
                      <span key={ti} style={{
                        fontSize: '0.55rem',
                        fontFamily: "'DM Mono', monospace",
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: TAG_COLORS[t.color] ?? 'var(--text-dim)',
                        border: `1px solid ${TAG_COLORS[t.color] ?? 'var(--border)'}`,
                        borderRadius: '3px',
                        padding: '0.1rem 0.4rem',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    lineHeight: 1.75,
                  }}>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Caveat — known limitation */}
            {data.caveat && (
              <div style={{
                marginTop: '1rem',
                padding: '0.875rem 1.125rem',
                background: 'var(--caveat-bg)',
                border: '1px solid var(--caveat-border)',
                borderLeft: '3px solid var(--accent-red)',
                borderRadius: '4px',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.58rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-red)',
                  marginBottom: '0.4rem',
                }}>
                  Known Limitation
                </div>
                <div style={{
                  fontSize: '0.76rem',
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                }}>
                  {data.caveat}
                </div>
              </div>
            )}

            {/* Cross-links */}
            {data.crossLinks && data.crossLinks.length > 0 && (
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--scalability-divider)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.58rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-dim)',
                  alignSelf: 'center',
                }}>
                  Connects to:
                </span>
                {data.crossLinks.map((link, i) => (
                  <span
                    key={i}
                    onClick={() => onNavigate(link.tab, link.options)}
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--accent-cyan)',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      textDecorationColor: 'var(--link-underline)',
                      textUnderlineOffset: '2px',
                    }}
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
