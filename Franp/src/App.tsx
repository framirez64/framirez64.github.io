import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header>
        <div className="ornament ornament-paper" />
        <nav>
          <Link to="/" className="nav-word" onClick={() => setMenuOpen(false)}>
            Francisco
          </Link>
          <ul className={menuOpen ? 'open' : ''}>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>/about</Link></li>
            <li><Link to="/projects" onClick={() => setMenuOpen(false)}>/projects</Link></li>
            <li><Link to="/resume" onClick={() => setMenuOpen(false)}>/resume</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>/contact</Link></li>
          </ul>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <div className="nav-wedge" />
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
