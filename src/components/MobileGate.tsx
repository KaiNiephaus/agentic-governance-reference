import { useState } from 'react'

export default function MobileGate() {
  const [showFallback, setShowFallback] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Agentic Governance Reference',
          text: 'An interactive governance reference for autonomous claims processing — best explored on a larger screen.',
          url: window.location.href,
        })
      } catch {
        // user cancelled — do nothing
      }
    } else {
      setShowFallback(true)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setShowFallback(false)
    }
  }

  return (
    <div className="mobile-gate">
      <div className="mobile-gate-inner">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="48" height="48" style={{ marginBottom: '1.5rem' }}>
          <rect width="32" height="32" rx="6" fill="#0a0e14"/>
          <line x1="16" y1="16" x2="16" y2="7"  stroke="#00c4cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <line x1="16" y1="16" x2="25" y2="22" stroke="#00c4cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <line x1="16" y1="16" x2="7"  y2="22" stroke="#00c4cc" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <circle cx="16" cy="7"  r="2.5" fill="#00c4cc" opacity="0.65"/>
          <circle cx="25" cy="22" r="2.5" fill="#00c4cc" opacity="0.65"/>
          <circle cx="7"  cy="22" r="2.5" fill="#00c4cc" opacity="0.65"/>
          <circle cx="16" cy="16" r="4.5" fill="#00c4cc"/>
        </svg>

        <div className="mobile-gate-label">Agentic Governance Reference</div>

        <p className="mobile-gate-text">
          This experience is intentionally designed for larger screens — where interactive charts, architectural relationships, and data can be explored in context. Please revisit on a larger screen.
        </p>

        <button className="mobile-gate-btn" onClick={handleShare}>
          Send to desktop
        </button>

        {showFallback && (
          <div className="mobile-gate-fallback">
            <div className="mobile-gate-fallback-label">Copy the link and open on a larger screen</div>
            <button className="mobile-gate-copy" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
