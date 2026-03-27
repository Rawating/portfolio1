import React from 'react'
import { OWNER, SKILL_BARS } from '../constants'
import type { SectionId } from '../constants'

interface AboutProps { onNav: (s: SectionId) => void }

const INFO = [
  { icon: '🎓', label: 'School',     val: 'Georgia Tech',                    small: false, hl: false },
  { icon: '📅', label: 'Graduation', val: 'Spring 2028',                     small: false, hl: false },
  { icon: '📍', label: 'Location',   val: OWNER.location,                    small: false, hl: false },
  { icon: '✉️', label: 'Email',      val: OWNER.email,                       small: true,  hl: false },
  { icon: '📞', label: 'Phone',      val: OWNER.phone,                       small: false, hl: false },
  { icon: '✅', label: 'Status',     val: 'Open to Work',                    small: false, hl: true  },
]

export const About: React.FC<AboutProps> = ({ onNav }) => (
  <div id="About" className="pg" style={{ display: 'flex', overflow: 'hidden' }}>

    {/* ── Sidebar ── */}
    <aside style={{
      width: 340, minWidth: 340, background: 'var(--surf)',
      borderRight: '1px solid var(--line)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '32px 36px', gap: 0,
      overflowY: 'auto',
    }}>
      {/* Avatar */}
      <div style={{ position: 'relative', width: 170, height: 170, marginBottom: 22, flexShrink: 0 }}>
        <div style={{
          position: 'absolute', inset: -6, borderRadius: '50%',
          border: '3px solid var(--primary)', opacity: 0.4,
          animation: 'ring 2.4s ease-in-out infinite',
        }} />
        <img
          src={OWNER.avatar} alt={OWNER.name}
          style={{ width: 170, height: 170, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: '-.5px', marginBottom: 5 }}>{OWNER.name}</div>
      <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.45, marginBottom: 6 }}>{OWNER.role}</div>
      <div style={{ color: 'var(--teal)', fontSize: 12, fontWeight: 700, marginBottom: 14 }}>{OWNER.school}</div>
      <div style={{ color: 'var(--primary)', fontSize: 18, marginBottom: 22, letterSpacing: 2 }}>★★★★★</div>

      {/* Stats */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', width: '100%',
        padding: '18px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
        marginBottom: 22,
      }}>
        {[['3','Projects'],['2','Internships'],['1','NSF Grant']].map(([n,l]) => (
          <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 28 }}>{n}</span>
            <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', fontWeight: 700 }}>{l}</span>
          </div>
        ))}
      </div>

      <button onClick={() => onNav('Resume')} style={{ background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 11, padding: '13px 0', width: '100%', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', marginBottom: 9 }}>View Resume</button>
      <button onClick={() => onNav('Contact')} style={{ background: 'transparent', color: 'var(--fg)', border: '1px solid var(--line)', borderRadius: 11, padding: '13px 0', width: '100%', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Contact Me</button>
    </aside>

    {/* ── Main ── */}
    <section style={{ flex: 1, padding: '48px 56px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(38px,4vw,58px)', letterSpacing: '-3px', lineHeight: 1, marginBottom: 8 }}>About Me</h1>

      <div style={{ fontSize: 18, color: 'var(--teal)', fontWeight: 600, marginBottom: 16 }}>Building at the intersection of AI and full-stack engineering</div>
      <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 30, maxWidth: 700 }}>{OWNER.bio}</p>

      {/* Info grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 32 }}>
        {INFO.map(({ icon, label, val, small, hl }) => (
          <div key={label} style={{ background: 'var(--surf)', border: `1px solid ${hl ? 'rgba(91,220,180,.22)' : 'var(--line)'}`, borderRadius: 13, padding: '16px 14px' }}>
            <div style={{ fontSize: 20, marginBottom: 7 }}>{icon}</div>
            <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.12em', color: hl ? 'var(--teal)' : 'var(--muted)', fontWeight: 700, marginBottom: 5 }}>{label}</div>
            <div style={{ fontSize: small ? 12 : 14, fontWeight: 700, color: hl ? 'var(--teal)' : 'var(--fg)', wordBreak: 'break-all', lineHeight: 1.35 }}>{val}</div>
          </div>
        ))}
      </div>

      {/* Skill bars */}
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: '-1px', marginBottom: 20 }}>Technical Skills</div>
      <div style={{ maxWidth: 680 }}>
        {SKILL_BARS.map(({ label, pct }) => (
          <div key={label} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
              <span>{label}</span>
              <span style={{ color: 'var(--primary)' }}>{pct}%</span>
            </div>
            <div style={{ height: 5, background: 'var(--surf2)', borderRadius: 3, overflow: 'hidden' }}>
              <div className="sk-fill" style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: 'var(--primary)' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)
