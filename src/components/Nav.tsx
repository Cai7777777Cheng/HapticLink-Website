import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={stuck ? 'nav stuck' : 'nav'}>
      <Link to="/" className="mark">
        HapticLink
      </Link>
    </header>
  )
}
