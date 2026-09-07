import type { CSSProperties } from 'react'

interface ChevronProps {
  className?: string
  style?: CSSProperties
}

export default function Chevron({ className = '', style }: ChevronProps) {
  return (
    <span className={className} style={style}>▼</span>
  )
}
