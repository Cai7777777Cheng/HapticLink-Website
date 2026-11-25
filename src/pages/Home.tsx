import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
const tagline = 'Helps visually impaired individuals experience mainstream visual games.'
const ease = [0.22, 1, 0.36, 1] as const

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

export function Home() {
  return (
    <main>
      <section className="hero" aria-label="HapticLink">
        <div className="hero-frame">
          <img
            className="hero-photo"
            src={asset('hero.jpg')}
            width={10132}
            height={5135}
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

      <Reveal className="band">
        <h2 className="statement">Direction headband & Distance wristband</h2>
        <div className="pair-copy">
          <div>
            <h3 className="kicker">Haptic Headband</h3>
            <p className="body">
              Features surface protrusions and dual ear-aligned arcs for correct wear, utilizing game
              data and 360° vibration electrodes to convey directional info about in-game objects.
            </p>
          </div>
          <div>
            <h3 className="kicker">Haptic Wristband</h3>
            <p className="body">
              Uses outer protrusions and wrist’s central axis for proper wear, and conveys distance
              info through linear vibration electrodes.
            </p>
          </div>
        </div>
        <figure className="plate">
          <img
            src={asset('board-12.png')}
            width={2048}
            height={1038}
            alt="Person wearing the HapticLink headband and wristband and holding game controllers, with close views of each device."
          />
        </figure>
      </Reveal>

      <Reveal className="band">
        <h2 className="kicker">Headband Details</h2>
        <figure className="plate">
          <img
            src={asset('board-13.png')}
            width={2048}
            height={1038}
            alt="Headband details, showing the row of vibration electrodes and the raised wear marks."
          />
        </figure>
      </Reveal>

      <Reveal className="band">
        <h2 className="kicker">Wristband Details</h2>
        <figure className="plate">
          <img
            src={asset('board-14.png')}
            width={2048}
            height={1038}
            alt="Wristband details, shown as a front curve, an open cuff, and a side view."
          />
        </figure>
      </Reveal>

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

      <Reveal className="band">
        <h2 className="kicker">Exploded View</h2>
        <figure className="plate dark">
          <img
            src={asset('board-15.png')}
            width={2048}
            height={1038}
            alt="Exploded view of the wristband layers and the headband layers."
          />
        </figure>
      </Reveal>
    </main>
  )
}
