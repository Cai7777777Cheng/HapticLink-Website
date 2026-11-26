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
  product: { left: '56.19%', top: '0.84%', width: '46.41%', height: '56.83%' },
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

