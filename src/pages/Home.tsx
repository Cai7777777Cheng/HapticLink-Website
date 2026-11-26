import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Board12Scene } from '../components/Board12Scene.tsx'
import { FadeIn } from '../components/FadeIn.tsx'
import {
  board13,
  board14,
  board15,
  copy,
  explodedLabels,
  explodedLeaders,
  hero,
  labelType,
  leaderPoints,
  leaderStroke,
  overlayMotion,
  PLATE_HEIGHT,
  PLATE_WIDTH,
  place,
  taglineType,
} from '../overlayLayout.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

const criteria = [
  {
    title: 'Low learning curve',
    body: 'In-game orientation and distance are hard to discern with sound alone. User adaptability to the information should be considered.',
  },
  {
    title: 'Wearing guidance',
    body: 'New users need to have tactile/auditory guidance to help them use the product for the first time.',
  },
  {
    title: 'Complexity adjustable',
    body: 'After adaptation, the product should adjust to user preferences, providing more info for higher difficulty games or even sports.',
  },
  {
    title: 'Sifted Info without ambiguity',
    body: 'Product needs to filter and streamline information, rather than conveying all information to user.',
  },
]

const steps = [
  {
    title: 'Step 1: Stretch Test',
    photos: [
      {
        src: 'wear-stretch-band.png',
        width: 380,
        height: 268,
        alt: 'Hands stretching the wristband, with a row of soft vibration points along the fabric.',
      },
      {
        src: 'wear-stretch-head.png',
        width: 375,
        height: 288,
        alt: 'Person pulling the headband into place with both hands.',
      },
    ],
  },
  {
    title: 'Step 2: Feel wearing direction guide & wear',
    photos: [
      {
        src: 'wear-guide-wrist.png',
        width: 382,
        height: 288,
        alt: 'Hands feeling the raised guide on the wristband.',
      },
      {
        src: 'wear-guide-head.png',
        width: 373,
        height: 301,
        alt: 'Person wearing the headband and wristband, eyes closed, beside a close view of the headband surface.',
      },
    ],
  },
  {
    title: 'Step 3: Switch on, adjust volume & Play',
    photos: [
      {
        src: 'wear-play-wrist.png',
        width: 375,
        height: 223,
        alt: 'Wristband worn on the wrist while holding a game controller.',
      },
      {
        src: 'wear-play-head.png',
        width: 402,
        height: 223,
        alt: 'Finger resting on the headband’s wear mark while the band is worn.',
      },
    ],
  },
]

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
  const y = immediate ? overlayMotion.heroY : overlayMotion.plateY
  const duration = immediate ? overlayMotion.heroDuration : overlayMotion.plateDuration
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: true, margin: overlayMotion.viewportMargin }}
      transition={{ duration, ease: overlayMotion.ease }}
    >
      {children}
    </motion.div>
  )
}

function Glyph({
  file,
  alt,
  box,
  width,
  height,
  delay = 0,
  immediate = false,
}: {
  file: string
  alt: string
  box: { left: number; top: number; width: number; height: number }
  width: number
  height: number
  delay?: number
  immediate?: boolean
}) {
  return (
    <FadeIn immediate={immediate} delay={delay} className="stage-overlay" style={place(box)}>
      <img src={asset(file)} alt={alt} width={width} height={height} />
    </FadeIn>
  )
}

function PlatePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <FadeIn className="stage-fill">
      <img className="fill-img" src={asset(src)} alt={alt} width={4096} height={2076} />
    </FadeIn>
  )
}

const titleDelay = 0
const bodyDelay = overlayMotion.stagger

export function Home() {
  return (
    <main>
      <section className="hero" aria-label="HapticLink">
        <div className="stage">
          <div className="stage-canvas">
            <img
              className="stage-photo"
              src={asset('hero-photo.jpg')}
              width={6317}
              height={5135}
              alt="Person wearing the headband and wristband, eyes closed, holding a game controller."
              style={place(hero.photo)}
            />
            <Glyph
              file="logo-mark.png"
              alt=""
              box={hero.logo}
              width={1319}
              height={1226}
              immediate
              delay={0}
            />
            <Glyph
              file="wordmark.png"
              alt="HapticLink"
              box={hero.wordmark}
              width={1631}
              height={377}
              immediate
              delay={overlayMotion.stagger}
            />
            <FadeIn
              immediate
              delay={overlayMotion.stagger * 2}
              className="stage-overlay"
              style={place(hero.tagline)}
            >
              <p style={taglineType}>{copy.tagline}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Reveal className="intro" immediate>
        <div className="intro-title">
          <h1>HapticLink</h1>
          <p>{copy.tagline}</p>
        </div>
        <div className="intro-copy">
          <p className="kicker">Intro</p>
          <p className="body">
            As a fellow gamer, I’m passionate about creating a product that allows visually impaired
            people to independently play video games.
          </p>
        </div>
      </Reveal>

      <Reveal className="band copy">
        <h2 className="statement">Any games that can be played by the visually impaired?</h2>
        <div className="stack">
          <p className="body">
            With the rise of Black Myth WuKong, a special player is eager to experience it. Despite
            being visually impaired, he relies on a friend’s voice instructions to guide his
            operations.
          </p>
          <p className="body">
            Though there are games that rely solely on sound, many blind players all over the world
            continue to play various visual games. Many visually impaired, driven by their passion,
            struggle to participate.
          </p>
        </div>
      </Reveal>

      <Reveal className="band">
        <h2 className="kicker">Design Criteria</h2>
        <ol className="criteria">
          {criteria.map((item, index) => (
            <li key={item.title}>
              <h3>
                <span className="index">{index + 1}</span>
                {item.title}
              </h3>
              <p className="body">{item.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <section className="band">
        <Reveal>
          <h2 className="statement">Direction headband & Distance wristband</h2>
        </Reveal>
        <Board12Scene />
      </section>

      <section className="band">
        <div className="stage">
          <div className="stage-canvas">
            <PlatePhoto
              src="board-13-photos.jpg"
              alt="Close views of the headband, including the row of electrodes and the raised wear marks."
            />
            <Glyph
              file="title-headband-details.png"
              alt="Headband Details"
              box={board13.title}
              width={2106}
              height={214}
              delay={titleDelay}
            />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="stage">
          <div className="stage-canvas">
            <PlatePhoto
              src="board-14-photos.jpg"
              alt="Wristband shown as a front curve, an open cuff, and a side view."
            />
            <Glyph
              file="title-wristband-details.png"
              alt="Wristband Details"
              box={board14.title}
              width={2126}
              height={214}
              delay={titleDelay}
            />
          </div>
        </div>
      </section>

      <Reveal className="band">
        <h2 className="kicker">Wearing Guidance</h2>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <div className="step-photos">
                {step.photos.map((photo) => (
                  <img
                    key={photo.src}
                    src={asset(photo.src)}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                  />
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <section className="band">
        <div className="stage dark">
          <div className="stage-canvas">
            <PlatePhoto
              src="board-15-photos.jpg"
              alt="Exploded layers of the wristband and the headband."
            />
            <Glyph
              file="title-exploded-view.png"
              alt="Exploded View"
              box={board15.title}
              width={1171}
              height={185}
              delay={titleDelay}
            />
            <FadeIn className="stage-layer" delay={bodyDelay}>
              <svg
                className="leaders"
                viewBox={`0 0 ${PLATE_WIDTH} ${PLATE_HEIGHT}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {explodedLeaders.map((line) => {
                  const { x1, x2, y1, y2 } = leaderPoints(line)
                  return (
                    <line
                      key={line.id}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={leaderStroke.color}
                      strokeWidth={leaderStroke.width}
                      strokeDasharray={leaderStroke.dash}
                      strokeLinecap="round"
                    />
                  )
                })}
              </svg>
              {explodedLabels.map((label) => (
                <p
                  key={label.id}
                  className="plate-label"
                  style={{ ...place(label.box), ...labelType, color: label.color, textAlign: label.align }}
                >
                  {label.text}
                </p>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
