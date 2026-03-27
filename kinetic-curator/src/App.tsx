import { useEffect, useRef, useState } from 'react'
import { Navbar }    from './components/Navbar'
import { Home }      from './components/Home'
import { About }     from './components/About'
import { Portfolio } from './components/Portfolio'
import { Resume }    from './components/Resume'
import { Contact }   from './components/Contact'
import type { SectionId } from './constants'
import { SECTIONS }  from './constants'

export default function App() {
  const [active, setActive] = useState<SectionId>('Home')
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Scroll to section when nav tab is clicked
  const goTo = (id: SectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }

  // Watch which section is in view and update the active tab
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActive(entry.target.id as SectionId)
          }
        })
      },
      { threshold: 0.5 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--bg)' }}>
      <Navbar active={active} onNav={goTo} />

      {/* All sections stack vertically — nav is fixed at top */}
      <div style={{ marginTop: 56 }}>
        <Home />
        <About    onNav={goTo} />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}
