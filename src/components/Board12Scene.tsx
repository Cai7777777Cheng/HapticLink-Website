import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { decodeImage, useDecoded } from '../decodeImage.ts'
import {
  board12Scene,
  copy,
  headbandBodyType,
  overlayMotion,
  place,
  wristbandBodyType,
} from '../overlayLayout.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

const sceneFiles = {
  person: { file: 'person.webp', width: 2480, height: 2080 },
  arm: { file: 'arm-detail.jpg', width: 2560, height: 2265 },
  headband: { file: 'headband-detail.webp', width: 2200, height: 1365 },
} as const

const sceneSrcs = [
  asset(sceneFiles.person.file),
  asset(sceneFiles.arm.file),
  asset(sceneFiles.headband.file),
] as const

sceneSrcs.forEach((src) => {
  void decodeImage(src)
})

type SceneState = 'initial' | 'wristband' | 'headband'

const ease = overlayMotion.ease

function Ripples() {
  return (
    <span className="ripples" aria-hidden="true">
      <span className="ripple" />
      <span className="ripple delay" />
    </span>
  )
}

export function Board12Scene() {
  const reduce = useReducedMotion()
  const ready = useDecoded(sceneSrcs)
  const [state, setState] = useState<SceneState>('initial')

  const travel = reduce ? { duration: 0 } : { duration: 0.8, ease }
  const fade = reduce ? { duration: 0.2, ease } : { duration: 0.8, ease }

  function toggle(next: Exclude<SceneState, 'initial'>) {
    setState((current) => (current === next ? 'initial' : next))
  }

  const armOpen = state === 'wristband'
  const bandOpen = state === 'headband'

  return (
    <div className="stage follow scene" onClick={() => setState('initial')}>
      <div className={`stage-canvas${ready ? ' scene-ready' : ''}`}>
        {ready ? (
          <>
            <motion.img
              className="scene-layer scene-arm"
              src={sceneSrcs[1]}
              alt=""
              width={sceneFiles.arm.width}
              height={sceneFiles.arm.height}
              draggable={false}
              decoding="sync"
              initial={false}
              animate={
                reduce
                  ? { x: '0%', opacity: armOpen ? 1 : 0 }
                  : { x: armOpen ? '0%' : '-108%', opacity: 1 }
              }
              transition={{ x: travel, opacity: fade }}
              style={board12Scene.arm}
            />

            <motion.div
              className="scene-person"
              initial={false}
              animate={{ left: board12Scene.person.left[state] }}
              transition={travel}
              style={{
                top: board12Scene.person.top,
                width: board12Scene.person.width,
                height: board12Scene.person.height,
              }}
            >
              <img
                src={sceneSrcs[0]}
                alt="Person wearing the headband and wristband, holding game controllers."
                width={sceneFiles.person.width}
                height={sceneFiles.person.height}
                draggable={false}
                decoding="sync"
              />
              <button
                type="button"
                className="hotspot"
                style={board12Scene.hotspots.wristband}
                aria-pressed={armOpen}
                aria-label="Haptic Wristband"
                onClick={(event) => {
                  event.stopPropagation()
                  toggle('wristband')
                }}
              >
                {state !== 'wristband' ? <Ripples /> : null}
              </button>
              <button
                type="button"
                className="hotspot"
                style={board12Scene.hotspots.headband}
                aria-pressed={bandOpen}
                aria-label="Haptic Headband"
                onClick={(event) => {
                  event.stopPropagation()
                  toggle('headband')
                }}
              >
                {state !== 'headband' ? <Ripples /> : null}
              </button>
            </motion.div>

            <motion.img
              className="scene-layer scene-product"
              src={sceneSrcs[2]}
              alt=""
              width={sceneFiles.headband.width}
              height={sceneFiles.headband.height}
              draggable={false}
              decoding="sync"
              initial={false}
              animate={
                reduce
                  ? { x: '0%', opacity: bandOpen ? 1 : 0 }
                  : { x: bandOpen ? '0%' : '115%', opacity: 1 }
              }
              transition={{ x: travel, opacity: fade }}
              style={board12Scene.product}
            />

            <AnimatePresence>
              {armOpen ? (
                <motion.div
                  key="wrist-type"
                  className="scene-type"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  transition={fade}
                >
                  <div className="stage-overlay" style={place(board12Scene.wristTitle)}>
                    <img
                      className="scene-title-dark"
                      src={asset('title-haptic-wristband.png')}
                      alt="Haptic Wristband"
                      width={1371}
                      height={185}
                    />
                  </div>
                  <div className="stage-overlay" style={place(board12Scene.wristBody)}>
                    <p style={wristbandBodyType}>{copy.wristband}</p>
                  </div>
                </motion.div>
              ) : null}
              {bandOpen ? (
                <motion.div
                  key="head-type"
                  className="scene-type"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  transition={fade}
                >
                  <div className="stage-overlay" style={place(board12Scene.headbandTitle)}>
                    <img
                      src={asset('title-haptic-headband.png')}
                      alt="Haptic Headband"
                      width={1357}
                      height={185}
                    />
                  </div>
                  <div className="stage-overlay" style={place(board12Scene.headbandBody)}>
                    <p style={headbandBodyType}>{copy.headband}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </>
        ) : (
          <p className="scene-loading" role="status">
            <span className="scene-spinner" aria-hidden="true" />
            Loading
          </p>
        )}
      </div>
    </div>
  )
}
