import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import { Nav } from './components/Nav.tsx'
import { Home } from './pages/Home.tsx'
import { Missing } from './pages/Missing.tsx'

function ScrollWithRoute() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    document.title = 'HapticLink'
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
  }, [path])

  return null
}

export default function App() {
  return (
    <>
      <ScrollWithRoute />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  )
}
