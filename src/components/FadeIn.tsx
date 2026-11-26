import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { overlayMotion } from '../overlayLayout.ts'

export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  immediate = false,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  immediate?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  const ease = overlayMotion.ease
  if (immediate) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y: overlayMotion.heroY }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: overlayMotion.heroDuration, delay, ease }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: overlayMotion.plateY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: overlayMotion.viewportMargin }}
      transition={{ duration: overlayMotion.plateDuration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
