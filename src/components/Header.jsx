import { NavLink, Link } from "react-router-dom";
import '../styles/Header.css'
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Link to="/" className="logo">Modern Studio</Link>

      <button 
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
