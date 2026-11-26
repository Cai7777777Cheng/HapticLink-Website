import { useRef, type CSSProperties, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { FadeIn } from './FadeIn.tsx'
import { frameLength, overlayMotion } from '../overlayLayout.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
const FW = 10131.697265625
const FH = 5135
const EASE = overlayMotion.ease

type Box = { x: number; y: number; w: number; h: number }

function at(x: number, y: number, w: number, h: number): CSSProperties {
  return {
    position: 'absolute',
    left: `${(x / FW) * 100}%`,
    top: `${(y / FH) * 100}%`,
    width: `${(w / FW) * 100}%`,
    height: `${(h / FH) * 100}%`,
  }
}

function rel(parent: Box, x: number, y: number, w: number, h: number): CSSProperties {
  return {
    position: 'absolute',
    left: `${((x - parent.x) / parent.w) * 100}%`,
    top: `${((y - parent.y) / parent.h) * 100}%`,
    width: `${(w / parent.w) * 100}%`,
    height: `${(h / parent.h) * 100}%`,
  }
}

function Copy({
  box,
  size,
  weight,
  color,
  children,
  lh = 1.4,
  align = 'left',
  tracking,
  parent,
}: {
  box: Box
  size: number
  weight: number
  color: string
  children: ReactNode
  lh?: number
  align?: 'left' | 'center'
  tracking?: number
  parent?: Box
}) {
  const place = parent ? rel(parent, box.x, box.y, box.w, box.h) : at(box.x, box.y, box.w, box.h)
  return (
    <p
      className="b7-copy"
      style={{
        ...place,
        fontSize: frameLength(size),
        fontWeight: weight,
        color,
        lineHeight: lh,
        textAlign: align,
        letterSpacing: tracking ? `${tracking}em` : undefined,
        whiteSpace: 'pre-line',
      }}
    >
      {children}
    </p>
  )
}

function Mark({ box, color, parent }: { box: Box; color: string; parent: Box }) {
  return <span className="b7-mark" style={{ ...rel(parent, box.x, box.y, box.w, box.h), background: color }} />
}

function Photo({
  parent,
  box,
  file,
  alt,
  width,
  height,
  radius,
  fit = 'fill',
}: {
  parent: Box
  box: Box
  file: string
  alt: string
  width: number
  height: number
  radius?: string
  fit?: 'fill' | 'cover'
}) {
  return (
    <img
      style={{ ...rel(parent, box.x, box.y, box.w, box.h), objectFit: fit, borderRadius: radius, zIndex: 2 }}
      src={asset(file)}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  )
}

const cardFace: CSSProperties = {
  background: '#fbfbfb',
  borderRadius: frameLength(60),
  boxShadow: `0 ${frameLength(4)} ${frameLength(125.4)} rgba(0, 0, 0, 0.16)`,
}

const photoTop = `${frameLength(40)} ${frameLength(40)} 0 0`
const photoBottom = `0 0 ${frameLength(40)} ${frameLength(40)}`

const cards: {
  box: Box
  icon: { box: Box; file: string }
  photos: { box: Box; file: string; alt: string; width: number; height: number; radius: string; fit?: 'cover' }[]
}[] = [
  {
    box: { x: 200, y: 484, w: 2496, h: 990 },
    icon: { box: { x: 277, y: 583, w: 397, h: 226 }, file: 'board-7/icon-easy.svg' },
    photos: [
      {
        box: { x: 2114, y: 577, w: 533, h: 399 },
        file: 'board-7/game-easy-a.webp',
        alt: 'Person from behind playing a bowling video game, with another person seated beside the screen.',
        width: 1174,
        height: 876,
        radius: photoTop,
        fit: 'cover',
      },
      {
        box: { x: 2114, y: 978, w: 533, h: 397 },
        file: 'board-7/game-easy-b.webp',
        alt: 'Person from behind during a bowling video game, with Joy-Con instructions on the screen.',
        width: 1231,
        height: 915,
        radius: photoBottom,
      },
    ],
  },
  {
    box: { x: 200, y: 1637, w: 2496, h: 990 },
    icon: { box: { x: 277, y: 1736, w: 287.1, h: 226 }, file: 'board-7/icon-medium.svg' },
    photos: [
      {
        box: { x: 2114, y: 1731, w: 533, h: 399 },
        file: 'board-7/game-medium-a.webp',
        alt: 'Blindfolded person playing a tennis video game.',
        width: 2361,
        height: 1757,
        radius: photoTop,
      },
      {
        box: { x: 2114, y: 2130, w: 533, h: 398 },
        file: 'board-7/game-medium-b.webp',
        alt: 'Second view of the sight-deprived tennis play test.',
        width: 2179,
        height: 1632,
        radius: photoBottom,
      },
    ],
  },
  {
    box: { x: 200, y: 2790, w: 2496, h: 990 },
    icon: { box: { x: 277, y: 2882, w: 224, h: 226 }, file: 'board-7/icon-basket.svg' },
    photos: [
      {
        box: { x: 2114, y: 2884, w: 533, h: 403 },
        file: 'board-7/game-basket-a.webp',
        alt: 'Person raising an arm to play a basketball video game.',
        width: 1072,
        height: 812,
        radius: photoTop,
      },
      {
        box: { x: 2114, y: 3287, w: 533, h: 394 },
        file: 'board-7/game-basket-b.webp',
        alt: 'Second view of the basketball play test.',
        width: 2102,
        height: 1555,
        radius: photoBottom,
      },
    ],
  },
  {
    box: { x: 200, y: 3943, w: 2496, h: 990 },
    icon: { box: { x: 277, y: 4035, w: 227.4, h: 226.4 }, file: 'board-7/icon-soccer.svg' },
    photos: [
      {
        box: { x: 2114, y: 4030, w: 533, h: 405 },
        file: 'board-7/game-soccer-a.webp',
        alt: 'Sight-deprived player during a soccer video game.',
        width: 777,
        height: 590,
        radius: photoTop,
      },
      {
        box: { x: 2114, y: 4435, w: 533, h: 392 },
        file: 'board-7/game-soccer-b.webp',
        alt: 'Second view of the soccer play test.',
        width: 1986,
        height: 1460,
        radius: photoBottom,
      },
    ],
  },
]

function GameCard({ index }: { index: number }) {
  const card = cards[index]
  const p = card.box
  return (
    <FadeIn className="stage-overlay" style={at(p.x, p.y, p.w, p.h)}>
      <div className="hover-layer b7-fill">
        <div className="b7-card-face" style={cardFace} />
        <img
          alt=""
          src={asset(card.icon.file)}
          style={rel(p, card.icon.box.x, card.icon.box.y, card.icon.box.w, card.icon.box.h)}
          draggable={false}
        />
        {card.photos.map((photo) => (
          <Photo key={photo.file} parent={p} {...photo} />
        ))}
        {index === 0 && <EasyCopy parent={p} />}
        {index === 1 && <MediumCopy parent={p} />}
        {index === 2 && <BasketCopy parent={p} />}
        {index === 3 && <SoccerCopy parent={p} />}
      </div>
    </FadeIn>
  )
}

function InfoHead({ parent, y }: { parent: Box; y: number }) {
  return (
    <>
      <Mark parent={parent} color="#d2d6e7" box={{ x: 1131, y: y + 40, w: 456, h: 28 }} />
      <Copy parent={parent} box={{ x: 1131, y, w: 470.2, h: 90 }} size={64} weight={600} color="#000">
        Necessary info
      </Copy>
    </>
  )
}

function PainHead({ parent, y }: { parent: Box; y: number }) {
  return (
    <>
      <Mark parent={parent} color="#ffb6b6" box={{ x: 1131, y: y + 31, w: 322, h: 37 }} />
      <Copy parent={parent} box={{ x: 1131, y, w: 322, h: 90 }} size={64} weight={600} color="#000">
        Painpoints
      </Copy>
    </>
  )
}

function Ops({
  parent,
  box,
  n,
  nColor,
  wordWeight,
}: {
  parent: Box
  box: Box
  n: string
  nColor: string
  wordWeight: number
}) {
  return (
    <p className="b7-copy" style={{ ...rel(parent, box.x, box.y, box.w, box.h), lineHeight: 1, color: '#000' }}>
      <span style={{ fontSize: frameLength(96), fontWeight: 600, color: nColor }}>{n} </span>
      <span style={{ fontSize: frameLength(64), fontWeight: wordWeight }}>control operations</span>
    </p>
  )
}

function EasyCopy({ parent }: { parent: Box }) {
  return (
    <>
      <Copy parent={parent} box={{ x: 277, y: 859, w: 171, h: 90 }} size={64} weight={600} color="#000">
        EASY
      </Copy>
      <InfoHead parent={parent} y={577} />
      <PainHead parent={parent} y={976} />
      <Copy parent={parent} box={{ x: 1131, y: 667, w: 587, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Track position
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 757, w: 667, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Spinning influence
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 847, w: 508, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Time warning
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 1066, w: 806, h: 90 }} size={64} weight={600} color="#ff6363">
        Unclear spinning effect
      </Copy>
      <Copy parent={parent} box={{ x: 277, y: 949, w: 521, h: 134 }} size={48} weight={200} color="#000">
        • Auto track calculation reduces difficulty.
      </Copy>
      <Copy parent={parent} box={{ x: 1224, y: 1156, w: 806, h: 134 }} size={48} weight={200} color="#1b1b1b">
        • Rotation angle cannot be conveyed through oral description simply.
      </Copy>
      <Ops parent={parent} box={{ x: 277, y: 1248, w: 624, h: 134 }} n="3" nColor="#000" wordWeight={300} />
    </>
  )
}

function MediumCopy({ parent }: { parent: Box }) {
  return (
    <>
      <Copy parent={parent} box={{ x: 277, y: 2012, w: 245, h: 90 }} size={64} weight={600} color="#000">
        Medium
      </Copy>
      <InfoHead parent={parent} y={1776} />
      <PainHead parent={parent} y={2130} />
      <Copy parent={parent} box={{ x: 1131, y: 1866, w: 661, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Timing & Distance
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 1956, w: 764, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Sifted player position
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 2220, w: 595, h: 90 }} size={64} weight={600} color="#ff6363">
        Unclear position
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 2444, w: 708, h: 90 }} size={64} weight={600} color="#ff6363">
        Delayed timing
      </Copy>
      <Copy parent={parent} box={{ x: 277, y: 2102, w: 664, h: 134 }} size={48} weight={200} color="#000">
        <span style={{ color: '#000' }}>• Semi-auto position moving{'\n'}</span>
        <span style={{ color: '#e5504b' }}>• Still Quick reactions required</span>
      </Copy>
      <Copy parent={parent} box={{ x: 1224, y: 2310, w: 764, h: 134 }} size={48} weight={200} color="#1b1b1b">
        • Swing direction ambiguity{'\n'}• Can’t move the defender
      </Copy>
      <Ops parent={parent} box={{ x: 277, y: 2384, w: 624, h: 134 }} n="2" nColor="#000" wordWeight={300} />
    </>
  )
}

function BasketCopy({ parent }: { parent: Box }) {
  return (
    <>
      <Copy parent={parent} box={{ x: 277, y: 3158, w: 147, h: 90 }} size={64} weight={600} color="#000">
        Hard
      </Copy>
      <InfoHead parent={parent} y={2905} />
      <PainHead parent={parent} y={3283} />
      <Copy parent={parent} box={{ x: 1131, y: 2995, w: 888, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Block/Pass/Shoot timing
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 3085, w: 887, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Basket direction/distance
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 3175, w: 811, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Shift of defense/attack
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 3373, w: 789, h: 90 }} size={64} weight={600} color="#ff6363">
        Lack of location sense
      </Copy>
      <Copy parent={parent} box={{ x: 1224, y: 3463, w: 590, h: 67 }} size={48} weight={200} color="#1b1b1b">
        • Unclear shooting position
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 3591, w: 552, h: 90 }} size={64} weight={600} color="#ff6363">
        Delayed timing
      </Copy>
      <Copy parent={parent} box={{ x: 277, y: 3248, w: 626, h: 201 }} size={48} weight={200} color="#000">
        <span>• Semi-auto position moving{'\n'}</span>
        <span style={{ color: '#e4504b' }}>• No sense of direction{'\n'}• Quick reactions required</span>
      </Copy>
      <Ops parent={parent} box={{ x: 277, y: 3555, w: 633, h: 134 }} n="6" nColor="#ff6363" wordWeight={400} />
    </>
  )
}

function SoccerCopy({ parent }: { parent: Box }) {
  return (
    <>
      <Copy parent={parent} box={{ x: 277, y: 4311, w: 147, h: 90 }} size={64} weight={600} color="#000">
        Hard
      </Copy>
      <InfoHead parent={parent} y={4047} />
      <PainHead parent={parent} y={4334} />
      <Copy parent={parent} box={{ x: 1131, y: 4137, w: 543, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Sifted location
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 4227, w: 831, h: 90 }} size={64} weight={600} color="#5e6ca4">
        Kick/Pass/Shoot timing
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 4424, w: 588, h: 90 }} size={64} weight={600} color="#ff6363">
        Easy to confuse
      </Copy>
      <Copy parent={parent} box={{ x: 1224, y: 4514, w: 540, h: 67 }} size={48} weight={200} color="#1b1b1b">
        • Too much position info
      </Copy>
      <Copy parent={parent} box={{ x: 1131, y: 4581, w: 872, h: 90 }} size={64} weight={600} color="#ff6363">
        Blind pass easy to be cut
      </Copy>
      <Copy parent={parent} box={{ x: 1224, y: 4693, w: 780, h: 134 }} size={48} weight={200} color="#1b1b1b">
        • Teammates & Opponent’s action changes dynamically.
      </Copy>
      <Copy parent={parent} box={{ x: 277, y: 4401, w: 809, h: 201 }} size={48} weight={200} color="#e4504b">
        • User control position{'\n'}• Too many targets arouse confusion{'\n'}• Quick reactions required
      </Copy>
      <Ops parent={parent} box={{ x: 277, y: 4712, w: 633, h: 134 }} n="5" nColor="#ff6363" wordWeight={400} />
    </>
  )
}

const portraits = [
  { box: { x: 5084, y: 1214.1, w: 426.1, h: 426.1 }, file: 'board-7/portrait-beard.webp', alt: 'Wrist wearing a dark band with a round sensor.', w: 470, h: 466 },
  { box: { x: 5532.1, y: 927, w: 451.7, h: 451.7 }, file: 'board-7/portrait-orange.webp', alt: 'Bearded person wearing a slim sensor on a pair of glasses.', w: 529, h: 528 },
  { box: { x: 5897, y: 1108.1, w: 418.8, h: 418.8 }, file: 'board-7/portrait-top.webp', alt: 'Diagram of headphones and a visor.', w: 939, h: 939 },
  { box: { x: 5333, y: 1800, w: 398.7, h: 398.7 }, file: 'board-7/portrait-left.webp', alt: 'Research photograph from the technical comparison.', w: 516, h: 521 },
  { box: { x: 6531, y: 1869.1, w: 325.3, h: 325.3 }, file: 'board-7/portrait-small.webp', alt: 'Small research photograph from the technical comparison.', w: 335, h: 334 },
  { box: { x: 5982, y: 2258, w: 497.3, h: 497.3 }, file: 'board-7/portrait-play.webp', alt: 'Person seen from behind in a light training vest, with a play button.', w: 368, h: 368 },
  { box: { x: 5532, y: 2356.8, w: 431.4, h: 431.4 }, file: 'board-7/portrait-dark.webp', alt: 'Research photograph from the technical comparison.', w: 792, h: 792 },
  { box: { x: 6668.9, y: 2574, w: 376.4, h: 376.4 }, file: 'board-7/portrait-device.webp', alt: 'Research photograph of a wearable device.', w: 354, h: 354 },
]

const needs = [
  {
    icon: { x: 3355, y: 1006, w: 531, h: 531 },
    caption: { x: 3413, y: 1557, w: 415, h: 179 },
    file: 'board-7/icon-instant.webp',
    label: 'Instant',
    w: 531,
    h: 531,
  },
  {
    icon: { x: 3355, y: 2018, w: 531, h: 531 },
    caption: { x: 3439, y: 2569, w: 363, h: 179 },
    file: 'board-7/icon-sifted.webp',
    label: 'Sifted',
    w: 529,
    h: 528,
  },
  {
    icon: { x: 3328, y: 3030, w: 584.2, h: 569 },
    caption: { x: 3153, y: 3619, w: 935, h: 179 },
    file: 'board-7/icon-target.svg',
    label: 'Target Position',
    w: 585,
    h: 569,
  },
  {
    icon: { x: 3345, y: 4080, w: 549, h: 549 },
    caption: { x: 2958, y: 4649, w: 1324, h: 179 },
    file: 'board-7/icon-timing.webp',
    label: 'Timing for Interaction',
    w: 548,
    h: 549,
  },
]

function union(a: Box, b: Box): Box {
  const x = Math.min(a.x, b.x)
  const y = Math.min(a.y, b.y)
  const right = Math.max(a.x + a.w, b.x + b.w)
  const bottom = Math.max(a.y + a.h, b.y + b.h)
  return { x, y, w: right - x, h: bottom - y }
}

const EXPAND = 0.52
const FADE = 0.34
const STEP = EXPAND + FADE

type UnfoldRow = {
  id: string
  box: Box
  pill: Box
  pillColor: string
  radius: number
  orb: Box
  orbColor: string
  icon?: { box: Box; file: string }
  num?: string
  label: { box: Box; text: string; color: string }
  body?: { box: Box; text: string }
}

const unfold: UnfoldRow[] = [
  {
    id: 'req-1',
    box: { x: 7660, y: 479, w: 2272, h: 403 },
    pill: { x: 7959.4, y: 479, w: 1972.6, h: 403 },
    pillColor: 'rgba(255, 79, 79, 0.2)',
    radius: 229,
    orb: { x: 7660, y: 484, w: 392, h: 392 },
    orbColor: '#e4504b',
    icon: { box: { x: 7727, y: 563, w: 268.5, h: 246.1 }, file: 'board-7/icon-req-learn.svg' },
    label: { box: { x: 8295, y: 609, w: 1144, h: 154 }, text: 'Low learning curve', color: '#ea584a' },
  },
  {
    id: 'req-2',
    box: { x: 7660, y: 961, w: 2272, h: 403 },
    pill: { x: 7959.4, y: 961, w: 1972.6, h: 403 },
    pillColor: 'rgba(255, 79, 79, 0.2)',
    radius: 229,
    orb: { x: 7660, y: 965, w: 392, h: 392 },
    orbColor: '#e4504b',
    icon: { box: { x: 7756, y: 1064, w: 187.5, h: 194.6 }, file: 'board-7/icon-req-adapt.svg' },
    label: { box: { x: 8353, y: 1084, w: 1028, h: 154 }, text: 'Quick adaptation', color: '#e4504b' },
  },
  {
    id: 'req-3',
    box: { x: 7660, y: 1443, w: 2272, h: 403 },
    pill: { x: 7959.4, y: 1443, w: 1972.6, h: 403 },
    pillColor: 'rgba(255, 79, 79, 0.2)',
    radius: 229,
    orb: { x: 7660, y: 1448, w: 392, h: 392 },
    orbColor: '#e4504b',
    icon: { box: { x: 7742, y: 1499, w: 237, h: 290.4 }, file: 'board-7/icon-req-future.svg' },
    label: { box: { x: 8404, y: 1567, w: 926, h: 154 }, text: 'Future oriented', color: '#e4504b' },
  },
  {
    id: 'crit-1',
    box: { x: 7660, y: 2549, w: 2272, h: 535 },
    pill: { x: 7846.65, y: 2549, w: 2084.86, h: 252 },
    pillColor: '#45459c',
    radius: 143,
    orb: { x: 7660, y: 2552.12, w: 244.83, h: 244.83 },
    orbColor: '#e4e9ff',
    num: '1',
    label: { box: { x: 7979, y: 2585, w: 1124, h: 179 }, text: 'Low learning curve', color: '#fff' },
    body: {
      box: { x: 7843, y: 2853, w: 2049, h: 231 },
      text: 'In-game orientation and distance are hard to discern with sound alone. User adaptability to the information should be considered.',
    },
  },
  {
    id: 'crit-2',
    box: { x: 7660, y: 3174, w: 2272, h: 455 },
    pill: { x: 7846.65, y: 3174, w: 2084.86, h: 252 },
    pillColor: '#45459c',
    radius: 143,
    orb: { x: 7660, y: 3177.12, w: 244.83, h: 244.83 },
    orbColor: '#e4e9ff',
    num: '2',
    label: { box: { x: 7979, y: 3210, w: 1070, h: 179 }, text: 'Wearing guidance', color: '#fff' },
    body: {
      box: { x: 7847, y: 3475, w: 1932, h: 154 },
      text: 'New users need to have tactile/auditory guidance to help them use the product for the first time.',
    },
  },
  {
    id: 'crit-3',
    box: { x: 7660, y: 3789, w: 2272, h: 532 },
    pill: { x: 7846.65, y: 3789, w: 2084.86, h: 252 },
    pillColor: '#45459c',
    radius: 143,
    orb: { x: 7660, y: 3792.12, w: 244.83, h: 244.83 },
    orbColor: '#e4e9ff',
    num: '3',
    label: { box: { x: 7979, y: 3825, w: 1314, h: 179 }, text: 'Complexity adjustable', color: '#fff' },
    body: {
      box: { x: 7847, y: 4090, w: 1932, h: 231 },
      text: 'After adaptation, the product should adjust to user preferences, providing more info for higher difficulty games or even sports.',
    },
  },
  {
    id: 'crit-4',
    box: { x: 7660, y: 4483, w: 2272, h: 452 },
    pill: { x: 7846.7, y: 4483, w: 2085.3, h: 252 },
    pillColor: '#45459c',
    radius: 143,
    orb: { x: 7660, y: 4486.12, w: 244.83, h: 244.83 },
    orbColor: '#e4e9ff',
    num: '4',
    label: { box: { x: 7979, y: 4519, w: 1768, h: 179 }, text: 'Sifted Info without ambiguity', color: '#fff' },
    body: {
      box: { x: 7847, y: 4781, w: 1932, h: 154 },
      text: 'Product needs to filter and streamline information, rather than conveying all information to user.',
    },
  },
]

const adv: Box = { x: 4781, y: 3940, w: 2594, h: 995 }

export function Board7Scene() {
  const reduce = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)
  const inView = useInView(root, { once: true, margin: overlayMotion.viewportMargin })
  const go = Boolean(reduce) || inView
  const panel: Box = { x: 2826, y: 484, w: 1589, h: 4451 }

  return (
    <div className="stage hover-plate" ref={root}>
      <div className="stage-canvas">
        <FadeIn className="stage-overlay" style={at(200, 200, 3145, 186)}>
          <img src={asset('board-7/title-motion.png')} alt="Motion Game Test with Sight Deprived" width={3129} height={185} />
        </FadeIn>
        <FadeIn className="stage-overlay" style={at(4790, 200, 1558, 186)}>
          <img src={asset('board-7/title-research.png')} alt="Technical Research" width={1540} height={142} />
        </FadeIn>
        <FadeIn className="stage-overlay" style={at(7660, 200, 2001, 186)}>
          <img src={asset('board-7/title-requirements.png')} alt="Technical Requirements:" width={1970} height={184} />
        </FadeIn>
        <FadeIn className="stage-overlay" style={at(7660, 2263, 1158, 186)}>
          <img src={asset('board-7/title-criteria.png')} alt="Design Criteria" width={1142} height={170} />
        </FadeIn>

        {cards.map((_, index) => (
          <GameCard key={cards[index].box.y} index={index} />
        ))}

        <FadeIn className="stage-overlay" style={at(panel.x, panel.y, panel.w, panel.h)}>
          <div className="b7-panel-face" style={{ background: '#e4e9ff', borderRadius: frameLength(50) }} />
          <Copy
            parent={panel}
            box={{ x: 2897, y: 569, w: 1446, h: 307 }}
            size={128}
            weight={600}
            color="#e4504b"
            lh={1.2}
            align="center"
          >
            Special info needs of{'\n'}the visually impaired
          </Copy>
        </FadeIn>

        {needs.map((item, index) => {
          const group = union(item.icon, item.caption)
          return (
            <motion.div
              key={item.label}
              style={{ ...at(group.x, group.y, group.w, group.h), zIndex: 4 }}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={go ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: reduce ? 0 : 0.55, delay: reduce ? 0 : 0.75 + index * 0.3, ease: EASE }}
            >
              <div className="hover-layer" style={rel(group, item.icon.x, item.icon.y, item.icon.w, item.icon.h)}>
                <img
                  className={item.file.endsWith('.svg') ? undefined : 'b7-cover'}
                  src={asset(item.file)}
                  alt=""
                  width={item.w}
                  height={item.h}
                  draggable={false}
                />
              </div>
              <p
                className="b7-copy"
                style={{
                  ...rel(group, item.caption.x, item.caption.y, item.caption.w, item.caption.h),
                  fontSize: frameLength(128),
                  fontWeight: 600,
                  color: '#e4504b',
                  lineHeight: 1.2,
                  textAlign: 'center',
                }}
              >
                {item.label}
              </p>
            </motion.div>
          )
        })}

        <FadeIn className="stage-overlay" style={at(5049, 2106.6, 2054.4, 8)}>
          <div style={{ width: '100%', height: '100%', background: '#cecccc' }} />
        </FadeIn>
        <FadeIn className="stage-overlay" style={at(6084.8, 845.5, 8, 2576.8)}>
          <div style={{ width: '100%', height: '100%', background: '#cecccc' }} />
        </FadeIn>
        <FadeIn className="stage-overlay" style={{ ...at(5957, 967, 1311, 1310), zIndex: 1, pointerEvents: 'none' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(94, 108, 164, 0.4)' }} />
        </FadeIn>
        {[
          { box: { x: 5920.3, y: 741, w: 336.7, h: 65.5 }, text: 'Low threshold' },
          { box: { x: 5917.6, y: 3457.5, w: 342, h: 65.5 }, text: 'High threshold' },
          { box: { x: 7161.9, y: 2075, w: 213.1, h: 65.5 }, text: 'Future' },
          { box: { x: 4790, y: 2078.6, w: 234.1, h: 65.5 }, text: 'Recent' },
        ].map((label) => (
          <FadeIn key={label.text} className="stage-overlay" style={at(label.box.x, label.box.y, label.box.w, label.box.h)}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#5e6ca4',
                border: `${frameLength(2.25)} solid #000`,
                color: '#fff',
                fontSize: frameLength(41.5),
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: frameLength(16.5),
                boxSizing: 'border-box',
              }}
            >
              {label.text}
            </div>
          </FadeIn>
        ))}
        {portraits.map((photo) => (
          <FadeIn key={photo.file} className="stage-overlay" style={{ ...at(photo.box.x, photo.box.y, photo.box.w, photo.box.h), zIndex: 3 }}>
            <div className="hover-layer b7-fill">
              <img className="b7-cover" src={asset(photo.file)} alt={photo.alt} width={photo.w} height={photo.h} draggable={false} />
            </div>
          </FadeIn>
        ))}

        <FadeIn className="stage-overlay" style={{ ...at(adv.x, adv.y, adv.w, adv.h), zIndex: 3 }}>
          <div className="hover-layer b7-fill">
            <div
              className="b7-adv-face"
              style={{
                background: 'rgba(255,255,255,0.3)',
                border: `${frameLength(2)} solid #45459c`,
                borderRadius: frameLength(64.2),
              }}
            />
            {[
              { box: { x: 4924, y: 4034, w: 298.1, h: 298.1 }, file: 'board-7/portrait-play.webp', alt: 'Training vest shown again beside the advantages.', w: 368, h: 368 },
              { box: { x: 5072.4, y: 4127.7, w: 297.5, h: 297.5 }, file: 'board-7/portrait-dark.webp', alt: 'Research photograph beside the advantages.', w: 792, h: 792 },
              { box: { x: 4924, y: 4459, w: 299.9, h: 299.9 }, file: 'board-7/portrait-orange.webp', alt: 'Glasses sensor shown again beside the advantages.', w: 529, h: 528 },
              { box: { x: 5072.1, y: 4542.2, w: 299.9, h: 299.9 }, file: 'board-7/portrait-beard.webp', alt: 'Wrist sensor shown again beside the advantages.', w: 470, h: 466 },
            ].map((photo) => (
              <img
                key={photo.file + photo.box.y}
                className="b7-cover"
                style={rel(adv, photo.box.x, photo.box.y, photo.box.w, photo.box.h)}
                src={asset(photo.file)}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                draggable={false}
              />
            ))}
            <Copy parent={adv} box={{ x: 5565, y: 4068, w: 374, h: 90 }} size={64} weight={600} color="#000">
              Advantages:
            </Copy>
            <Copy parent={adv} box={{ x: 6428, y: 4068, w: 428, h: 90 }} size={64} weight={600} color="#000">
              Disadvantages:
            </Copy>
            <Copy parent={adv} box={{ x: 5565, y: 4186, w: 605, h: 90 }} size={64} weight={300} color="#000">
              • Instant information
            </Copy>
            <Copy parent={adv} box={{ x: 5565, y: 4283, w: 384, h: 90 }} size={64} weight={300} color="#000">
              • Clear order
            </Copy>
            <Copy parent={adv} box={{ x: 5565, y: 4578, w: 572, h: 90 }} size={64} weight={300} color="#000">
              • Short-term adapt
            </Copy>
            <Copy parent={adv} box={{ x: 5565, y: 4675, w: 345, h: 90 }} size={64} weight={300} color="#000">
              • Small size
            </Copy>
            <Copy parent={adv} box={{ x: 6428, y: 4186, w: 562, h: 90 }} size={64} weight={300} color="#000">
              • Long-term adapt
            </Copy>
            <Copy parent={adv} box={{ x: 6428, y: 4283, w: 438, h: 90 }} size={64} weight={300} color="#000">
              • Hard to wear
            </Copy>
            <Copy parent={adv} box={{ x: 6428, y: 4578, w: 640, h: 90 }} size={64} weight={300} color="#000">
              • Delayed information
            </Copy>
          </div>
        </FadeIn>

        {unfold.map((row, index) => {
          const delay = 0.35 + index * STEP
          const shown = go
          return (
            <div key={row.id} className="hover-layer" style={{ ...at(row.box.x, row.box.y, row.box.w, row.box.h), zIndex: 4 }}>
              <motion.div
                className="b7-pill"
                style={{
                  ...rel(row.box, row.pill.x, row.pill.y, row.pill.w, row.pill.h),
                  background: row.pillColor,
                  borderRadius: frameLength(row.radius),
                  transformOrigin: 'left center',
                }}
                initial={false}
                animate={{ scaleX: shown ? 1 : 0 }}
                transition={reduce ? { duration: 0 } : { duration: EXPAND, delay, ease: EASE }}
              >
                <motion.span
                  style={{
                    ...rel(row.pill, row.label.box.x, row.label.box.y, row.label.box.w, row.label.box.h),
                    color: row.label.color,
                    fontSize: frameLength(128),
                    fontWeight: 400,
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                  initial={false}
                  animate={{ opacity: shown ? 1 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: FADE, delay: delay + EXPAND, ease: EASE }}
                >
                  {row.label.text}
                </motion.span>
              </motion.div>
              <div className="b7-orb" style={{ ...rel(row.box, row.orb.x, row.orb.y, row.orb.w, row.orb.h), background: row.orbColor }}>
                {row.num && (
                  <span style={{ color: '#45459c', fontSize: frameLength(128), fontWeight: 600, lineHeight: 1 }}>{row.num}</span>
                )}
              </div>
              {row.icon && (
                <img
                  alt=""
                  src={asset(row.icon.file)}
                  draggable={false}
                  style={{ ...rel(row.box, row.icon.box.x, row.icon.box.y, row.icon.box.w, row.icon.box.h), zIndex: 5, pointerEvents: 'none' }}
                />
              )}
              {row.body && (
                <motion.p
                  className="b7-body"
                  style={{
                    ...rel(row.box, row.body.box.x, row.body.box.y, row.body.box.w, row.body.box.h),
                    fontSize: frameLength(64),
                    fontWeight: 300,
                    lineHeight: 1.2,
                    letterSpacing: '0.04em',
                    color: '#000',
                  }}
                  initial={false}
                  animate={{ opacity: shown ? 1 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: FADE, delay: delay + EXPAND, ease: EASE }}
                >
                  {row.body.text}
                </motion.p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
