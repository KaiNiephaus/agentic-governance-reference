interface ChevronProps {
  className?: string
}

export default function Chevron({ className = '' }: ChevronProps) {
  return (
    <span className={className}>▼</span>
  )
}
