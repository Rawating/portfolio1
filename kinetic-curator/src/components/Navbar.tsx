import React from 'react'
import { SECTIONS, OWNER } from '../constants'
import type { SectionId } from '../constants'

interface NavbarProps {
  active: SectionId
  onNav: (s: SectionId) => void
}

export const Navbar: React.FC<NavbarProps> = ({ active, onNav }) => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
    height: 56, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 48px',
    background: 'rgba(19,19,19,0.92)', backdropFilter: 'blur(20px)',
    borderBottom: '1px solid var(--line)',
  }}>
    {/* Brand */}
    <span
      onClick={() => onNav('Home')}
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800, fontSize: 18, letterSpacing: '-0.6px',
        color: 'var(--fg)', cursor: 'pointer', userSelect: 'none',
      }}
    >
      {OWNER.name}
    </span>

    {/* Tabs */}
    <div style={{ display: 'flex', gap: 4 }}>
      {SECTIONS.map(s => {
        const isOn = active === s
        return (
          <button
            key={s}
            onClick={() => onNav(s)}
            style={{
              background: 'none', border: 'none',
              color: isOn ? 'var(--primary)' : 'var(--muted)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: 13, cursor: 'pointer',
              padding: '7px 16px', borderRadius: 8,
              position: 'relative', transition: 'color 0.18s',
            }}
          >
            {s}
            {isOn && (
              <span style={{
                position: 'absolute', bottom: -1, left: 16, right: 16,
                height: 2, background: 'var(--primary)', borderRadius: 1,
                display: 'block',
              }} />
            )}
          </button>
        )
      })}
    </div>

    {/* CTA */}
    <a
      href="/resume.pdf"
      download="Pranjal_Rawat_Resume.pdf"
      style={{
        background: 'var(--primary)', color: '#fff',
        borderRadius: 999, padding: '8px 22px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700, fontSize: 13, textDecoration: 'none',
        letterSpacing: '-0.2px',
        display: 'flex', alignItems: 'center', gap: 7,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Resume
    </a>
  </nav>
)
