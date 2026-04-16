import type { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
  variant?: 'cyan' | 'amber'
}

export default function Callout({ children, variant = 'cyan' }: CalloutProps) {
  const amberStyle = variant === 'amber'
    ? { borderColor: 'rgba(245,166,35,0.3)', background: 'rgba(245,166,35,0.04)' }
    : undefined

  return (
    <div className="callout" style={amberStyle}>
      {children}
    </div>
  )
}
