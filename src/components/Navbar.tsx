import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home',          to: '/' },
  { label: 'Shop',          to: '/shop', dropdown: true },
  { label: 'Custom Orders', to: '/custom-orders' },
  { label: 'About Us',      to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Lilly & Looms – Home" onClick={closeMenu}>
          <img
            alt="Lily & Looms"
            width={64}
            height={64}
            src="/logo.png"
            style={{ width: 64, height: 64, objectFit: 'contain', display: 'block' }}
          />
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
              {link.dropdown && (
                <svg className="navbar__link-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__backdrop" aria-hidden="true" onClick={closeMenu} />
      )}
    </header>
  )
}
