import { Link } from 'react-router-dom'

export function Missing() {
  return (
    <main className="missing">
      <h1>This page isn’t here</h1>
      <p>Helps visually impaired individuals experience mainstream visual games.</p>
      <Link to="/" className="quiet-link">
        Back to HapticLink
      </Link>
    </main>
  )
}
