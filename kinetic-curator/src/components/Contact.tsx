import React from 'react'
import { OWNER } from '../constants'

const links = [
  {
    label: OWNER.email,
    href: `mailto:${OWNER.email}`,
    primary: true,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,
  },
  {
    label: 'linkedin.com/in/prawat007',
    href: OWNER.linkedin,
    primary: false,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'github.com/Rawating',
    href: OWNER.github,
    primary: false,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
]

export const Contact: React.FC = () => (
  <div id="Contact" className="pg" style={{
    background: '#0e0e0e',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{ textAlign: 'center', maxWidth: 500, padding: '0 24px', width: '100%' }}>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.26em', color: 'var(--primary)', fontWeight: 700, marginBottom: 14 }}>
        Let's Connect
      </div>
      <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(38px,4vw,58px)', letterSpacing: '-3px', lineHeight: 1, marginBottom: 16 }}>
        Get in Touch
      </h1>
      <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.85 }}>
        Always open to new opportunities, collaborations, and conversations. Whether it's about engineering, AI, or just a cool idea — reach out.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
        {links.map(({ label, href, primary, icon }) => (
          <a
            key={label} href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11,
              padding: '17px 28px', borderRadius: 14,
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15,
              textDecoration: 'none', transition: 'opacity .18s',
              background: primary ? 'var(--primary)' : 'var(--surf)',
              color: primary ? '#fff' : 'var(--fg)',
              border: primary ? 'none' : '1px solid var(--line)',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
          >
            {icon}
            {label}
          </a>
        ))}
        <div style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>📞 {OWNER.phone}</div>
      </div>
    </div>
  </div>
)
