import { useState, type CSSProperties, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Board12Scene } from '../components/Board12Scene.tsx'
import { Board11Plate, Board6Plate } from '../components/FigmaPlate.tsx'
import { FadeIn } from '../components/FadeIn.tsx'
import {
  board13,
  board14,
  hero,
  overlayMotion,
  place,
} from '../overlayLayout.ts'
import { plateSizes, responsiveImage } from '../responsiveImage.ts'

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
    titleImage: { src: 'title-step-1.png', width: 1670, height: 186 },
    ratio: '1820 / 1336',
    photos: [
      {
        src: 'wear-stretch-band.png',
        width: 1598,
        height: 1080,
        alt: 'Hands stretching the wristband, with a row of soft vibration points along the fabric.',
      },
      {
        src: 'wear-stretch-head.png',
        width: 1820,
        height: 1336,
        alt: 'Person pulling the headband into place with both hands.',
      },
    ],
  },
  {
    title: 'Step 2: Feel wearing direction guide & wear',
    titleImage: { src: 'title-step-2.png', width: 3585, height: 186 },
    ratio: '1427 / 1184',
    photos: [
      {
        src: 'wear-guide-wrist.png',
        width: 1435,
        height: 1080,
        alt: 'Hands feeling the raised guide on the wristband.',
      },
      {
        src: 'wear-guide-head.png',
        width: 1427,
        height: 1276,
        alt: 'Person wearing the headband and wristband, eyes closed, beside a close view of the headband surface.',
      },
    ],
  },
  {
    title: 'Step 3: Switch on, adjust volume & Play',
    titleImage: { src: 'title-step-3.png', width: 3342, height: 186 },
    ratio: '568 / 338',
    photos: [
      {
        src: 'wear-play-wrist.png',
        width: 568,
        height: 338,
        alt: 'Wristband worn on the wrist while holding a game controller.',
      },
      {
        src: 'wear-play-head.png',
        width: 1540,
        height: 797,
        objectPosition: 'right center',
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
  duration,
  rise,
  ready = true,
}: {
  file: string
  alt: string
  box: { left: number; top: number; width: number; height: number }
  width: number
  height: number
  delay?: number
  immediate?: boolean
  duration?: number
  rise?: number
  ready?: boolean
}) {
  return (
    <FadeIn
      immediate={immediate}
      delay={delay}
      duration={duration}
      rise={rise}
      ready={ready}
      className="stage-overlay"
      style={place(box)}
    >
      <img
        src={asset(file)}
        alt={alt}
        width={width}
        height={height}
        loading={immediate ? 'eager' : 'lazy'}
        decoding="async"
      />
    </FadeIn>
  )
}

function PlatePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <FadeIn className="stage-fill">
      <img
        className="fill-img"
        {...responsiveImage(src, plateSizes)}
        alt={alt}
        width={3400}
        height={1723}
        loading="lazy"
        decoding="async"
      />
    </FadeIn>
  )
}

const titleDelay = 0

export function Home() {
  const [heroReady, setHeroReady] = useState(false)
  const lockup = {
    duration: overlayMotion.lockupDuration,
    rise: overlayMotion.lockupY,
    ready: heroReady,
  }

  return (
    <main>
      <section className="hero" aria-label="HapticLink">
        <div className="stage">
          <div className="stage-canvas">
            <img
              className="stage-photo"
              src={asset('hero-photo.jpg')}
              width={2880}
              height={2341}
              alt="Person wearing the headband and wristband, eyes closed, holding a game controller."
              style={place(hero.photo)}
              fetchPriority="high"
              decoding="async"
              onLoad={() => setHeroReady(true)}
            />
            <Glyph
              file="logo-mark.png"
              alt=""
              box={hero.logo}
              width={1319}
              height={1226}
              immediate
              delay={0}
              {...lockup}
            />
            <Glyph
              file="wordmark.png"
              alt="HapticLink"
              box={hero.wordmark}
              width={1631}
              height={377}
              immediate
              delay={overlayMotion.lockupStagger}
              {...lockup}
            />
          </div>
        </div>
      </section>

      <section className="band" aria-label="Any games that can be played by the visually impaired?">
        <Board6Plate />
      </section>

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
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>
                <img
                  src={asset(step.titleImage.src)}
                  width={step.titleImage.width}
                  height={step.titleImage.height}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                />
              </h3>
              <div
                className="step-photos"
                style={{ '--row-aspect': step.ratio } as CSSProperties}
              >
                {step.photos.map((photo) => (
                  <img
                    key={photo.src}
                    {...responsiveImage(photo.src, 'calc((100vw - 40px) / 2)')}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    style={
                      'objectPosition' in photo
                        ? { objectPosition: photo.objectPosition }
                        : undefined
                    }
                  />
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <section className="band" aria-label="In-Game UX Test">
        <Board11Plate />
      </section>

      <section className="band">
        <div className="stage dark">
          <div className="stage-canvas">
            <FadeIn className="stage-fill">
              <img
                className="fill-img"
                {...responsiveImage('board-15.webp', plateSizes)}
                width={3840}
                height={1946}
                alt="Exploded View. Wristband layers: Cushioned rubber, Velcro, Skin-friendly fabric, Fiber wire & components, Anti-slip rubber, Position Protrusions. Headband layers: Rubber Surface, Touching sensor, Vibrating components, Wrapping fiber wires, Waving strings, Skin-friendly fabric."
                loading="lazy"
                decoding="async"
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
