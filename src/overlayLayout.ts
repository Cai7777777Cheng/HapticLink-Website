import type { CSSProperties } from 'react'

/**
 * Typography and logo overlays for the Figma plates (10131.697 × 5135).
 * Nudge positions, type size, and stagger here. Every left/top/width/height
 * value is a percentage of that plate, so type stays locked to the photo
 * when the stage scales. Font sizes use cqw/cqh on `.stage-canvas`.
 */

export const overlayMotion = {
  ease: [0.22, 1, 0.36, 1] as const,
  heroY: 12,
  heroDuration: 0.9,
  /** Logo, then wordmark. Slower than the rest of the page. */
  lockupY: 18,
  lockupDuration: 1.95,
  lockupStagger: 0.38,
  plateY: 18,
  plateDuration: 0.8,
  viewportMargin: '-10% 0px',
  /** Titles, then body. */
  stagger: 0.12,
} as const

export type Box = {
  left: number
  top: number
  width: number
  height: number
}

export function place(box: Box): CSSProperties {
  return {
    left: `${box.left}%`,
    top: `${box.top}%`,
    width: `${box.width}%`,
    height: `${box.height}%`,
  }
}

const sans = 'var(--sans)'

export const copy = {
  wristband:
    "Uses outer protrusions and wrist's central axis for proper wear, and conveys distance info through linear vibration electrodes.",
  headband:
    'Features surface protrusions and dual ear-aligned arcs for correct wear, utilizing game data and 360° vibration electrodes to convey directional info about in-game objects.',
} as const

export const hero = {
  photo: { left: 0, top: 0, width: 62.3489, height: 100 },
  logo: { left: 74.0978, top: 28.8023, width: 12.4486, height: 22.7505 },
  wordmark: { left: 72.0876, top: 54.642, width: 16.4336, height: 7.4002 },
} as const

/**
 * Board 12 scene. Person/arm/headband boxes are percentages of the plate.
 * Hotspots are percentages of the person image (it has empty canvas on the left;
 * these track the visible wristband and headband, not the canvas center).
 * Wristband type sits in the white gap beside the arm, not on the Figma
 * top-left box, which would cover the arm photo. Headband type keeps the
 * Figma bottom-right box, which stays clear of the product.
 */
export const board12Scene = {
  person: {
    top: '6.8%',
    width: '56.21%',
    height: '93.03%',
    left: {
      initial: '9.37%',
      wristband: '29.9%',
      headband: '-2%',
    },
  },
  /**
   * Full arm photo, scaled down just enough to sit in the vertical middle
   * of the plate. Width tracks the same aspect so the picture is not
   * stretched or cropped. Left edge stays put.
   */
  arm: { left: '0%', top: '6%', width: '50.4%', height: '88%' },
  /**
   * Opaque right tip of headband-detail.webp is 2072/2200 of the file.
   * Left is set so that tip meets the shared right edge of the headband
   * title and blurb (98.029% of the plate). Width and height stay put.
   */
  product: { left: '54.319%', top: '0.84%', width: '46.41%', height: '56.83%' },
  hotspots: {
    wristband: { left: '21%', top: '67%', width: '16%', height: '14%' },
    headband: { left: '66%', top: '7%', width: '22%', height: '12%' },
  },
  wristTitle: { left: 43, top: 5.2, width: 13.6897, height: 3.6222 },
  wristBody: { left: 43, top: 10.6, width: 22.5, height: 16 },
  headbandTitle: { left: 84.4775, top: 76.1052, width: 13.5515, height: 3.6222 },
  headbandBody: { left: 71.8142, top: 82.2006, width: 26.2148, height: 13.9435 },
} as const

const sceneBodyType: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '100%',
  fontFamily: sans,
  fontWeight: 300,
  fontSize: '0.96cqw',
  letterSpacing: '-0.012cqw',
  lineHeight: 1.4,
  color: '#6f6f6f',
}

export const wristbandBodyType: CSSProperties = {
  ...sceneBodyType,
  textAlign: 'left',
}

export const headbandBodyType: CSSProperties = {
  ...sceneBodyType,
  textAlign: 'right',
}

export const board13 = {
  title: { left: 39.4899, top: 57.6631, width: 21.033, height: 5.4528 },
} as const

export const board14 = {
  title: { left: 39.3814, top: 50.0097, width: 21.2403, height: 5.4528 },
} as const

/** Figma frame width. Lengths in cqw track this so type stays locked to the plate. */
export const frameWidth = 10131.697265625

export function frameLength(px: number) {
  return `${(px / frameWidth) * 100}cqw`
}

export type Board6Run = {
  text: string
  emphasis?: boolean
}

/**
 * Board 6 labels that used to be baked into the plate. Boxes are the Figma
 * node frames on the 10131.697 × 5135 board, as percentages. Font sizes and
 * line heights are Figma px on that same frame.
 */
export const board6Labels: readonly {
  id: string
  box: Box
  fontSize: number
  lineHeight: number
  weight: number
  color: string
  lines: readonly (readonly Board6Run[])[]
}[] = [
  {
    id: 'platform-research',
    box: { left: 36.1243, top: 18.9679, width: 7.9158, height: 2.6095 },
    fontSize: 102,
    lineHeight: 134,
    weight: 400,
    color: '#111111',
    lines: [[{ text: 'Platform Research' }]],
  },
  {
    id: 'desk-research',
    box: { left: 65.5665, top: 18.9679, width: 27.9716, height: 2.6095 },
    fontSize: 102,
    lineHeight: 134,
    weight: 400,
    color: '#111111',
    lines: [[{ text: 'Desk Research – Interview with Visually impaired players in Japan' }]],
  },
  {
    id: 'nintendo-easiest',
    box: { left: 44.8197, top: 43.4275, width: 18.4372, height: 2.2395 },
    fontSize: 104,
    lineHeight: 115,
    weight: 500,
    color: '#e1504b',
    lines: [[{ text: 'Nintendo have easiest operation system.' }]],
  },
  {
    id: 'motion-easiest',
    box: { left: 49.5179, top: 75.5794, width: 13.7391, height: 2.2395 },
    fontSize: 104,
    lineHeight: 115,
    weight: 500,
    color: '#e1504b',
    lines: [[{ text: 'Motion games are the easiest.' }]],
  },
  {
    id: 'conclusion-passion',
    box: { left: 1.9839, top: 90.8861, width: 31.0313, height: 5.2191 },
    fontSize: 103,
    lineHeight: 134,
    weight: 400,
    color: '#111111',
    lines: [
      [
        { text: 'As a fellow gamer, I’m passionate about ' },
        { text: 'creating a product that', emphasis: true },
      ],
      [{ text: 'allows visually impaired people to independently play video games.', emphasis: true }],
    ],
  },
  {
    id: 'conclusion-switch',
    box: { left: 39.411, top: 90.8861, width: 15.2788, height: 5.2191 },
    fontSize: 103,
    lineHeight: 134,
    weight: 400,
    color: '#111111',
    lines: [
      [{ text: 'Motion games Switch Sports can', emphasis: true }],
      [{ text: 'be selected as the test object.', emphasis: true }],
    ],
  },
  {
    id: 'conclusion-learning',
    box: { left: 65.6159, top: 90.8861, width: 32.4131, height: 5.2191 },
    fontSize: 103,
    lineHeight: 134,
    weight: 400,
    color: '#111111',
    lines: [
      [
        { text: '1. Visually impaired are ' },
        { text: 'easy to give up games with high learning curve.', emphasis: true },
      ],
      [
        { text: '2. Hard to pass without ' },
        { text: 'long–term and painful practice in games.', emphasis: true },
      ],
    ],
  },
]

/**
 * Board 6 pixel titles. Node boxes from the 10131.697 × 5135 frame, mapped
 * onto the 3840 × 1947 plate. Game category and Targret are a few pixels
 * taller than the 186px em box so the g/y descenders are in the overlay
 * instead of left behind on the plate.
 */
export const board6Titles = [
  {
    file: 'board-6/title-any-games.png',
    alt: 'Any games that can be played by the visually impaired?',
    width: 1114,
    height: 171,
    box: { left: 1.9792, top: 6.7283, width: 29.0104, height: 8.7827 },
  },
  {
    file: 'board-6/title-game-category.png',
    alt: 'Game category Research',
    width: 786,
    height: 79,
    box: { left: 36.1198, top: 6.7283, width: 20.4688, height: 4.0575 },
  },
  {
    file: 'board-6/title-targret-feedback.png',
    alt: 'Targret User Feedback',
    width: 716,
    height: 79,
    box: { left: 65.5469, top: 6.7283, width: 18.6458, height: 4.0575 },
  },
  {
    file: 'board-6/title-conclusion.png',
    alt: 'Conclusion',
    width: 332,
    height: 71,
    box: { left: 1.9792, top: 83.6158, width: 8.6458, height: 3.6466 },
  },
] as const

