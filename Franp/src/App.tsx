import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import type { Tone } from './tones'
import './App.css'

/**
 * Each tone is the `right` tone of that section's SectionHead. The header
 * splits 68%/38%, so the right-hand triangle is what sits directly under the
 * nav links — the marker runs into that band instead of cutting across it.
 * Change a page's SectionHead `right` tone and this table has to follow.
 */
const NAV_ITEMS: { path: string; label: string; tone: Tone }[] = [
  { path: '/about', label: '/about', tone: 'caracol' },
  { path: '/projects', label: '/projects', tone: 'cinnabar' },
  { path: '/resume', label: '/resume', tone: 'sky' },
  { path: '/contact', label: '/contact', tone: 'brick' },
]

/** The landing page has no tab and no band below the wordmark, so its marker
 *  is a plain accent rather than a match — brick, like the hero's last wedge. */
const HOME_TONE: Tone = 'brick'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <header>
        <div className="ornament ornament-paper" />
        <nav>
          <div className="nav-brand">
            <Link to="/" className="nav-word" onClick={() => setMenuOpen(false)}>
              Francisco
            </Link>
            {pathname === '/' && <span className={`nav-wedge tone-${HOME_TONE}`} />}
          </div>
          <ul className={menuOpen ? 'open' : ''}>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                {pathname === item.path && (
                  <span className={`nav-wedge tone-${item.tone}`} />
                )}
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div className="ornament" />
    </>
  )
}

export default App
