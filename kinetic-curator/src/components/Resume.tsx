import React from 'react'
import { EDUCATION, EXPERIENCES, SKILLS, OWNER } from '../constants'

const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: '-1.2px', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
    {children}
    <span style={{ flex: 1, height: 1, background: 'rgba(255,87,87,.14)', display: 'block' }} />
  </div>
)

const Dot: React.FC = () => (
  <span style={{ position: 'absolute', left: -37, top: 6, width: 16, height: 16, borderRadius: '50%', border: '2px solid var(--primary)', background: 'var(--bg)', display: 'block' }} />
)

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ display: 'inline-block', background: 'rgba(255,87,87,.1)', color: 'var(--primary)', fontSize: 13, fontWeight: 700, borderRadius: 8, padding: '4px 14px', marginBottom: 8 }}>
    {children}
  </span>
)

export const Resume: React.FC = () => (
  <div id="Resume" className="pg" style={{
    background: 'var(--bg)',
    display: 'flex', flexDirection: 'column',
    padding: '52px 64px', overflowY: 'auto',
  }}>
    {/* Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
      <div>
        <span style={{ display: 'inline-block', background: 'rgba(255,87,87,.1)', color: 'var(--primary)', borderRadius: 999, padding: '5px 18px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: 12 }}>
          Curriculum Vitae
        </span>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(40px,4.5vw,60px)', letterSpacing: '-3px', lineHeight: 1.05 }}>
          My Professional Journey
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 17, marginTop: 12, maxWidth: 540, lineHeight: 1.75 }}>
          CS student at Georgia Institute of Technology passionate about data science, AI, and building products that matter.
        </p>
      </div>
      <a href="/resume.pdf" download="Pranjal_Rawat_Resume.pdf" style={{ textDecoration: 'none' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, padding: '16px 34px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </button>
      </a>
    </div>

    {/* Two columns */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, flex: 1 }}>
      {/* Left: Education + Skills */}
      <div>
        <ColTitle>Education</ColTitle>
        <div style={{ borderLeft: '2px solid rgba(255,87,87,.17)', paddingLeft: 30, display: 'flex', flexDirection: 'column', gap: 30 }}>
          {EDUCATION.map(edu => (
            <div key={edu.id} style={{ position: 'relative' }}>
              <Dot />
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 21, marginBottom: 8 }}>{edu.degree}</div>
              <Badge>{edu.period}</Badge>
              <div style={{ color: 'var(--muted)', fontSize: 16, fontStyle: 'italic', marginBottom: 10, marginTop: 4 }}>{edu.school}, {edu.location}</div>
              <div style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8 }}>{edu.courses}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 44 }}>
          <ColTitle>Skills</ColTitle>
          {[
            { label: 'Languages',          items: SKILLS.languages },
            { label: 'Tools & Frameworks', items: SKILLS.tools },
            { label: 'Libraries',          items: SKILLS.libraries },
          ].map(({ label, items }) => (
            <div key={label} style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--muted)', fontWeight: 700, marginBottom: 10 }}>{label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                {items.map(s => (
                  <span key={s} className="glow-card" style={{ background: 'var(--surf)', borderRadius: 10, padding: '9px 18px', fontSize: 14, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Experience */}
      <div>
        <ColTitle>Professional Experience</ColTitle>
        <div style={{ borderLeft: '2px solid rgba(255,87,87,.17)', paddingLeft: 30, display: 'flex', flexDirection: 'column', gap: 34 }}>
          {EXPERIENCES.map(exp => (
            <div key={exp.id} style={{ position: 'relative' }}>
              <Dot />
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 21, marginBottom: 8 }}>{exp.title}</div>
              <Badge>{exp.period}</Badge>
              <div style={{ color: 'var(--muted)', fontSize: 16, fontStyle: 'italic', marginBottom: 14, marginTop: 4 }}>{exp.company} · {exp.location}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {exp.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: 'var(--muted)', lineHeight: 1.75 }}>
                    <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: '50%', background: 'var(--primary)', marginTop: 9, display: 'block' }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)