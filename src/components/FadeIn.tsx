import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { overlayMotion } from '../overlayLayout.ts'

export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  immediate = false,
  duration,
  rise,
  ready = true,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  immediate?: boolean
  duration?: number
  rise?: number
  ready?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  if (!ready) {
    return (
      <div className={className} style={{ ...style, opacity: 0 }} aria-hidden="true">
        {children}
      </div>
    )
  }

  const ease = overlayMotion.ease
  const distance = rise ?? (immediate ? overlayMotion.heroY : overlayMotion.plateY)
  const time = duration ?? (immediate ? overlayMotion.heroDuration : overlayMotion.plateDuration)

  if (immediate) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: distance }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: time, delay, ease }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: overlayMotion.viewportMargin }}
      transition={{ duration: time, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
