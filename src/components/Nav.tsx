import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="mark">
        HapticLink
      </Link>
      <a className="nav-personal" href="https://cai7777777cheng.github.io/Personal-Website/">
        Personal site
      </a>
    </header>
  )
}
