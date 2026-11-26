import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { overlayMotion } from '../overlayLayout.ts'
import { Board8Plate } from './Board8Plate.tsx'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

export function Board8Prompt() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const openRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()

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
        <img
          src={asset('board-8/cardboard-prototype.jpg')}
          width={830}
          height={549}
          alt="Black-and-white collage of cardboard headband prototypes and wearing tests."
          decoding="async"
        />
        <button ref={openRef} type="button" className="prototype-open" onClick={() => setOpen(true)}>
          SEE DETAILS
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
            className="b8-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="b8-bar">
              <p id={titleId}>Concept Development</p>
              <button ref={closeRef} type="button" className="b8-close" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="b8-scroll">
              <Board8Plate />
            </div>
          </div>
        </motion.div>,
          document.body,
        )}
    </>
  )
}
