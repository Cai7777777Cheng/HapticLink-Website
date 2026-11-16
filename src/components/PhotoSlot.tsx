export function PhotoSlot({ className = '' }: { className?: string }) {
  return (
    <div className={className ? `photo ${className}` : 'photo'} role="img" aria-label="Photo to come">
      <span>Photo to come</span>
    </div>
  )
}
