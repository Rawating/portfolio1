import React, { useEffect, useRef, useState } from 'react'

export const Reveal: React.FC<{ children: React.ReactNode; delay?: 0|1|2|3 }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''}`}>
      {children}
    </div>
  )
}