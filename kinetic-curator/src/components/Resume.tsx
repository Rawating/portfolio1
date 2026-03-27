import React from 'react'
import { EDUCATION, EXPERIENCES, SKILLS, OWNER } from '../constants'

const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 22, letterSpacing: '-1px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 14 }}>
    {children}
    <span style={{ flex: 1, height: 1, background: 'rgba(255,87,87,.14)', display: 'block' }} />
  </div>
)

const Dot: React.FC = () => (
  <span style={{ position: 'absolute', left: -33, top: 5, width: 14, height: 14, borderRadius: '50%', border: '2px solid var(--primary)', background: 'var(--bg)', display: 'block' }} />
)

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ display: 'inline-block', background: 'rgba(255,87,87,.1)', color: 'var(--primary)', fontSize: 11, fontWeight: 700, borderRadius: 7, padding: '3px 12px', marginBottom: 6 }}>
    {children}
  </span>
)

export const Resume: React.FC = () => (
  <div id="Resume" className="pg" style={{
    background: 'var(--bg)',
    display: 'flex', flexDirection: 'column',
    padding: '48px 56px', overflowY: 'auto',
  }}>
    {/* Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
      <div>
        <span style={{ display: 'inline-block', background: 'rgba(255,87,87,.1)', color: 'var(--primary)', borderRadius: 999, padding: '4px 16px', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.18em', marginBottom: 10 }}>
          Curriculum Vitae
        </span>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(36px,4vw,54px)', letterSpacing: '-3px', lineHeight: 1.05 }}>
          My Professional Journey
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 10, maxWidth: 480, lineHeight: 1.75 }}>
          CS student at Georgia Tech passionate about AI, cloud infrastructure, and building products that matter.
        </p>
      </div>
      <a href={`mailto:${OWNER.email}`} style={{ textDecoration: 'none' }}>
        <button style={{ background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, padding: '14px 30px', fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
          Get in Touch
        </button>
      </a>
    </div>

    {/* Two columns */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, flex: 1 }}>
      {/* Left: Education + Skills */}
      <div>
        <ColTitle>Education</ColTitle>
        <div style={{ borderLeft: '2px solid rgba(255,87,87,.17)', paddingLeft: 26, display: 'flex', flexDirection: 'column', gap: 26 }}>
          {EDUCATION.map(edu => (
            <div key={edu.id} style={{ position: 'relative' }}>
              <Dot />
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 6 }}>{edu.degree}</div>
              <Badge>{edu.period}</Badge>
              <div style={{ color: 'var(--muted)', fontSize: 13, fontStyle: 'italic', marginBottom: 8, marginTop: 4 }}>{edu.school}, {edu.location}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>{edu.courses}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <ColTitle>Skills</ColTitle>
          {[
            { label: 'Languages',          items: SKILLS.languages },
            { label: 'Tools & Frameworks', items: SKILLS.tools },
            { label: 'Libraries',          items: SKILLS.libraries },
          ].map(({ label, items }) => (
            <div key={label} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--muted)', fontWeight: 700, marginBottom: 8 }}>{label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {items.map(s => (
                  <span key={s} style={{ background: 'var(--surf)', border: '1px solid var(--line)', borderRadius: 9, padding: '7px 14px', fontSize: 12, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Experience */}
      <div>
        <ColTitle>Professional Experience</ColTitle>
        <div style={{ borderLeft: '2px solid rgba(255,87,87,.17)', paddingLeft: 26, display: 'flex', flexDirection: 'column', gap: 28 }}>
          {EXPERIENCES.map(exp => (
            <div key={exp.id} style={{ position: 'relative' }}>
              <Dot />
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 17, marginBottom: 6 }}>{exp.title}</div>
              <Badge>{exp.period}</Badge>
              <div style={{ color: 'var(--muted)', fontSize: 13, fontStyle: 'italic', marginBottom: 12, marginTop: 4 }}>{exp.company} · {exp.location}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {exp.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
                    <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: 7, display: 'block' }} />
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
