import type { CSSProperties } from 'react'

/**
 * Typography and logo overlays for the Figma plates (10131.697 × 5135).
 * Nudge positions, type size, and stagger here. Every left/top/width/height
 * value is a percentage of that plate, so type stays locked to the photo
 * when the stage scales. Font sizes use cqw/cqh on `.stage-canvas`.
 */

export const PLATE_WIDTH = 10131.697
export const PLATE_HEIGHT = 5135

export const overlayMotion = {
  ease: [0.22, 1, 0.36, 1] as const,
  heroY: 12,
  heroDuration: 0.9,
  plateY: 18,
  plateDuration: 0.8,
  viewportMargin: '-10% 0px',
  /** Logo, then wordmark, then tagline. Titles, then body / labels / leaders. */
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

const sc =
  '"PingFang SC", "Hiragino Sans GB", "Noto Sans SC", "Source Han Sans SC", sans-serif'
const inter = 'Inter, "Inter Tight", sans-serif'
const labelFont = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'

export const copy = {
  tagline: 'Helps visually impaired individuals experience mainstream visual games.',
  wristband:
    "Uses outer protrusions and wrist's central axis for proper wear, and conveys distance info through linear vibration electrodes.",
  headband:
    'Features surface protrusions and dual ear-aligned arcs for correct wear, utilizing game data and 360° vibration electrodes to convey directional info about in-game objects.',
} as const

export const hero = {
  photo: { left: 0, top: 0, width: 62.3489, height: 100 },
  logo: { left: 74.0978, top: 28.8023, width: 12.4486, height: 22.7505 },
  wordmark: { left: 72.0876, top: 54.642, width: 16.4336, height: 7.4002 },
  tagline: { left: 65.7708, top: 65.1217, width: 29.0573, height: 3.8948 },
} as const

export const taglineType: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: sc,
  fontWeight: 100,
  fontSize: '0.9475cqw',
  letterSpacing: '-0.020061cqw',
  lineHeight: '3.8948cqh',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '#000000',
}

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
  arm: { left: '0%', top: '0%', width: '57.3%', height: '100%' },
  product: { left: '56.19%', top: '0.84%', width: '46.41%', height: '56.83%' },
  hotspots: {
    wristband: { left: '21%', top: '67%', width: '16%', height: '14%' },
    headband: { left: '66%', top: '7%', width: '22%', height: '12%' },
  },
  wristTitle: { left: 38, top: 5.2, width: 13.6897, height: 3.6222 },
  wristBody: { left: 38, top: 10.6, width: 22.5, height: 16 },
  headbandTitle: { left: 84.4775, top: 76.1052, width: 13.5515, height: 3.6222 },
  headbandBody: { left: 71.8142, top: 82.2006, width: 26.2148, height: 13.9435 },
} as const

export const wristbandBodyType: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '100%',
  fontFamily: inter,
  fontWeight: 300,
  fontSize: '1.2634cqw',
  letterSpacing: '-0.020061cqw',
  lineHeight: 1.25,
  textAlign: 'left',
  color: '#0a0a0a',
}

export const headbandBodyType: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '100%',
  fontFamily: sc,
  fontWeight: 300,
  fontSize: '1.2634cqw',
  letterSpacing: '-0.020061cqw',
  lineHeight: 1.25,
  textAlign: 'right',
  color: '#0a0a0a',
}

export const board13 = {
  title: { left: 39.4899, top: 57.6631, width: 21.033, height: 5.4528 },
} as const

export const board14 = {
  title: { left: 39.3814, top: 50.0097, width: 21.2403, height: 5.4528 },
} as const

export const board15 = {
  title: { left: 1.974, top: 3.8948, width: 11.7157, height: 3.6222 },
} as const

export type PlateLabel = {
  id: string
  text: string
  align: 'left' | 'right'
  color: '#ffffff' | '#d2d6e7'
  box: Box
}

export const explodedLabels: PlateLabel[] = [
  { id: 'cushioned-rubber', text: 'Cushioned rubber', align: 'left', color: '#ffffff', box: { left: 5.0238, top: 22.7264, width: 9.7121, height: 2.4927 } },
  { id: 'velcro', text: 'Velcro', align: 'left', color: '#ffffff', box: { left: 5.0238, top: 30.6329, width: 3.5927, height: 2.4927 } },
  { id: 'fabric-left', text: 'Skin-friendly fabric', align: 'left', color: '#ffffff', box: { left: 5.0238, top: 38.5394, width: 10.7781, height: 2.4927 } },
  { id: 'fiber', text: 'Fiber wire & components', align: 'left', color: '#ffffff', box: { left: 5.0238, top: 46.446, width: 13.8871, height: 2.4927 } },
  { id: 'anti-slip', text: 'Anti-slip rubber', align: 'left', color: '#ffffff', box: { left: 5.0238, top: 65.0438, width: 8.7448, height: 2.4927 } },
  { id: 'protrusions', text: 'Position Protrusions', align: 'right', color: '#ffffff', box: { left: 5.0238, top: 83.6417, width: 11.163, height: 2.4927 } },
  { id: 'rubber-surface', text: 'Rubber Surface', align: 'left', color: '#d2d6e7', box: { left: 85.0203, top: 43.4378, width: 8.6461, height: 2.4927 } },
  { id: 'touching-sensor', text: 'Touching sensor', align: 'right', color: '#d2d6e7', box: { left: 84.438, top: 48.1792, width: 9.2285, height: 2.4927 } },
  { id: 'vibrating', text: 'Vibrating components', align: 'right', color: '#d2d6e7', box: { left: 81.5263, top: 53.4956, width: 12.1401, height: 2.4927 } },
  { id: 'wrapping', text: 'Wrapping fiber wires', align: 'right', color: '#d2d6e7', box: { left: 82.1087, top: 64.7907, width: 11.5578, height: 2.4927 } },
  { id: 'waving', text: 'Waving strings', align: 'right', color: '#d2d6e7', box: { left: 85.4151, top: 75.7741, width: 8.2513, height: 2.4927 } },
  { id: 'fabric-right', text: 'Skin-friendly fabric', align: 'left', color: '#d2d6e7', box: { left: 82.8884, top: 83.0574, width: 10.7781, height: 2.4927 } },
]

export type LeaderLine = {
  id: string
  left: number
  top: number
  width: number
}

export const explodedLeaders: LeaderLine[] = [
  { id: 'cushioned-rubber', left: 15.032, top: 23.9727, width: 17.9832 },
  { id: 'velcro', left: 8.9126, top: 31.8793, width: 17.9239 },
  { id: 'fabric-left', left: 16.098, top: 39.7858, width: 11.7947 },
  { id: 'fiber', left: 19.207, top: 47.6923, width: 13.8082 },
  { id: 'anti-slip', left: 14.0648, top: 66.4654, width: 9.4555 },
  { id: 'protrusions', left: 16.4829, top: 84.888, width: 19.7005 },
  { id: 'rubber-surface', left: 77.6474, top: 44.6933, width: 7.0768 },
  { id: 'touching-sensor', left: 78.7331, top: 49.4839, width: 5.4088 },
  { id: 'vibrating', left: 77.1638, top: 54.742, width: 3.9776 },
  { id: 'wrapping', left: 77.4303, top: 66.037, width: 4.3823 },
  { id: 'waving', left: 77.1638, top: 77.0204, width: 7.5604 },
  { id: 'fabric-right', left: 76.4729, top: 84.3038, width: 6.1194 },
]

export const labelType: CSSProperties = {
  margin: 0,
  fontFamily: labelFont,
  fontWeight: 400,
  fontSize: '1.2634cqw',
  lineHeight: 1,
  whiteSpace: 'nowrap',
}

/** Figma stroke 7, dash [1, 20], in plate units. */
export const leaderStroke = {
  color: '#ffffff',
  width: 7,
  dash: '1 20',
} as const

export function leaderPoints(line: LeaderLine) {
  const y = (line.top / 100) * PLATE_HEIGHT
  return {
    x1: (line.left / 100) * PLATE_WIDTH,
    x2: ((line.left + line.width) / 100) * PLATE_WIDTH,
    y1: y,
    y2: y,
  }
}
