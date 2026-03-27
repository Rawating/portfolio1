import React from 'react'
import { PROJECTS } from '../constants'

export const Portfolio: React.FC = () => (
  <div id="Portfolio" className="pg" style={{
    background: '#0e0e0e',
    display: 'flex', flexDirection: 'column',
    padding: '48px 56px', overflowY: 'auto',
  }}>
    <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 'clamp(38px,4vw,58px)', letterSpacing: '-3px', lineHeight: 1, marginBottom: 10 }}>Portfolio</h1>
    <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, maxWidth: 580, marginBottom: 28 }}>
      Projects spanning healthcare, AI, and full-stack engineering — built with real-world APIs and shipped end-to-end.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, flex: 1 }}>
      {PROJECTS.map(p => (
        <div
          key={p.id}
          style={{ background: 'var(--surf)', borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform .22s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
        >
          {/* Image / emoji area */}
          <div style={{ height: 200, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, position: 'relative', flexShrink: 0 }}>
            {p.emoji}
            {p.active && (
              <span style={{ position: 'absolute', top: 12, left: 12, background: 'var(--teal)', color: '#0a0a0a', fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.12em', borderRadius: 999, padding: '4px 12px' }}>
                Active
              </span>
            )}
            <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 8 }}>
              <a
                href={p.github} target="_blank" rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ background: 'rgba(19,19,19,.8)', border: '1px solid var(--line)', borderRadius: 8, padding: '5px 13px', fontSize: 11, fontWeight: 700, color: '#fff', textDecoration: 'none' }}
              >
                GitHub ↗
              </a>
              {p.demo && (
                <a
                  href={p.demo} target="_blank" rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ background: 'var(--primary)', borderRadius: 8, padding: '5px 13px', fontSize: 11, fontWeight: 700, color: '#fff', textDecoration: 'none' }}
                >
                  Demo ↗
                </a>
              )}
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.18em', color: 'var(--teal)', marginBottom: 8 }}>{p.category}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 21, letterSpacing: '-.5px', marginBottom: 10 }}>{p.title}</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 16, flex: 1 }}>{p.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.tags.map(t => (
                <span key={t} style={{ background: 'var(--surf3)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', padding: '5px 11px', borderRadius: 7 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
