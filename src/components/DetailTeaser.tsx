import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { overlayMotion } from '../overlayLayout.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

export function DetailTeaser({
  image,
  width,
  height,
  alt,
  dialogLabel,
  buttonLabel,
  dialogClassName,
  children,
}: {
  image: string
  width: number
  height: number
  alt: string
  dialogLabel: string
  buttonLabel: string
  dialogClassName?: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const openRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    const closeButton = closeRef.current
    const openButton = openRef.current
    document.body.style.overflow = 'hidden'
    closeButton?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
      openButton?.focus()
    }
  }, [open])

  return (
    <>
      <div className="prototype-frame">
        <img src={asset(image)} width={width} height={height} alt={alt} decoding="async" />
        <button ref={openRef} type="button" className="prototype-open" onClick={() => setOpen(true)}>
          {buttonLabel}
        </button>
      </div>
      {open &&
        createPortal(
          <motion.div
            className="b8-backdrop"
            onClick={() => setOpen(false)}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: overlayMotion.ease }}
          >
            <div
              className={dialogClassName ? `b8-dialog ${dialogClassName}` : 'b8-dialog'}
              role="dialog"
              aria-modal="true"
              aria-label={dialogLabel}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="b8-bar">
                <button ref={closeRef} type="button" className="b8-close" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
              <div className="b8-scroll">{children}</div>
            </div>
          </motion.div>,
          document.body,
        )}
    </>
  )
}
