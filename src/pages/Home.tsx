import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PhotoSlot } from '../components/PhotoSlot.tsx'

const heroSrc = `${import.meta.env.BASE_URL}hero.jpg`
const tagline = 'Helps visually impaired individuals experience mainstream visual games.'
const ease = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode
  className?: string
  immediate?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: immediate ? 12 : 18 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  )
}

function CopySlot() {
  return (
    <div className="slot">
      <p className="kicker">Copy to come</p>
      <p className="body">Copy to come</p>
    </div>
  )
}

export function Home() {
  return (
    <main>
      <section className="hero" aria-label="HapticLink">
        <div className="hero-frame">
          <img
            className="hero-photo"
            src={heroSrc}
            alt={`Person wearing a headband and wristband, holding a game controller, beside the HapticLink wordmark. ${tagline}`}
          />
        </div>
      </section>

      <Reveal className="intro" immediate>
        <div className="intro-title">
          <h1>HapticLink</h1>
          <p>{tagline}</p>
        </div>
        <div className="intro-copy">
          <p className="kicker">Intro</p>
          <p className="body">{tagline}</p>
        </div>
      </Reveal>

      <Reveal className="band split">
        <PhotoSlot className="tall" />
        <CopySlot />
      </Reveal>

      <Reveal className="band trio">
        <PhotoSlot />
        <PhotoSlot />
        <PhotoSlot />
      </Reveal>

      <Reveal className="band">
        <PhotoSlot className="wide" />
      </Reveal>

      <Reveal className="band prose">
        <CopySlot />
      </Reveal>

      <Reveal className="band pair">
        <PhotoSlot />
        <PhotoSlot />
      </Reveal>

      <Reveal className="band split flip">
        <PhotoSlot className="tall" />
        <CopySlot />
      </Reveal>

      <Reveal className="band">
        <PhotoSlot className="wide" />
      </Reveal>

      <Reveal className="band trio">
        <PhotoSlot />
        <PhotoSlot />
        <PhotoSlot />
      </Reveal>

      <Reveal className="band prose">
        <CopySlot />
      </Reveal>

      <Reveal className="band">
        <PhotoSlot className="wide" />
      </Reveal>
    </main>
  )
}
