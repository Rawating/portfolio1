import React from 'react'
import { OWNER } from '../constants'

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const socials = [
  { icon: <MailIcon />,     label: 'Email',    href: `mailto:${OWNER.email}` },
  { icon: <GitHubIcon />,   label: 'GitHub',   href: OWNER.github },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: OWNER.linkedin },
]

export const Home: React.FC = () => (
  <div id="Home" className="pg" style={{
    position: 'relative', overflow: 'hidden',
    background: 'linear-gradient(140deg, #0d1b2a 0%, #1a1a3e 45%, #0f2a1a 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    {/* Grid overlay */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.035,
      backgroundImage:
        'repeating-linear-gradient(0deg,transparent,transparent 44px,rgba(255,87,87,.8) 44px,rgba(255,87,87,.8) 45px),' +
        'repeating-linear-gradient(90deg,transparent,transparent 44px,rgba(255,87,87,.8) 44px,rgba(255,87,87,.8) 45px)',
    }} />
    {/* Fade */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to bottom, rgba(13,27,42,.2), rgba(19,19,19,.6), #131313)',
    }} />

    {/* Content */}
    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 32px', maxWidth: 800 }}>
      <div style={{
        display: 'inline-block',
        background: 'rgba(255,87,87,.12)', color: 'var(--primary)',
        border: '1px solid rgba(255,87,87,.25)',
        borderRadius: 999, padding: '5px 18px',
        fontSize: 11, fontWeight: 700, letterSpacing: '.22em',
        textTransform: 'uppercase', marginBottom: 28,
      }}>
        Georgia Tech · CS '28 · SWE Intern @ TechX
      </div>

      <h1 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 900, fontSize: 'clamp(44px, 6vw, 76px)',
        letterSpacing: '-3px', lineHeight: 0.98, marginBottom: 20,
      }}>
        Hi, I'm<br />
        <span style={{ color: 'var(--primary)' }}>{OWNER.name}</span>
      </h1>

      <div style={{
        color: 'rgba(229,226,225,.48)', fontSize: 20,
        fontWeight: 500, letterSpacing: '-.4px', marginBottom: 44,
      }}>
        Full Stack Developer &amp; AI Builder
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 40 }}>
        {socials.map(({ icon, label, href }) => (
          <a
            key={label} href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 9, color: 'rgba(229,226,225,.28)', textDecoration: 'none',
              transition: 'color .2s, transform .2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--primary)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(229,226,225,.28)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            {icon}
            <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.24em', color: 'rgba(229,226,225,.16)' }}>
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
)
