import { frameLength } from '../overlayLayout.ts'
import { board8Manifest } from '../board8Manifest.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`
const FW = 10131.697265625
const FH = 5135

function at(x: number, y: number, w: number, h: number) {
  return {
    position: 'absolute' as const,
    left: `${(x / FW) * 100}%`,
    top: `${(y / FH) * 100}%`,
    width: `${(w / FW) * 100}%`,
    height: `${(h / FH) * 100}%`,
  }
}

const faces = [
  { file: 'board-8/icon-sad-1.svg', x: 4765, y: 1096, w: 400, h: 400 },
  { file: 'board-8/icon-sad-2.svg', x: 4765, y: 2377, w: 400, h: 400 },
  { file: 'board-8/icon-lol.svg', x: 4765, y: 3890, w: 400, h: 400 },
]

const titles = [
  { file: 'board-8/title-concept.png', alt: 'Concept Development', x: 200, y: 200, w: 1830, h: 186, pw: 1813, ph: 185 },
  { file: 'board-8/title-final.png', alt: 'Final Concept Refinement', x: 5328, y: 200, w: 2087, h: 186, pw: 2071, ph: 185 },
  { file: 'board-8/title-material.png', alt: 'Material reference', x: 5336, y: 2492, w: 1601, h: 186, pw: 1585, ph: 142 },
]

export function Board8Plate() {
  return (
    <div className="stage b8-stage" aria-label="Concept Development">
      <div className="stage-canvas">
        {board8Manifest.shapes.map((shape) => (
          <div
            key={`${shape.x}-${shape.y}-${shape.w}`}
            style={{
              ...at(shape.x, shape.y, shape.w, shape.h),
              background: `#${shape.fill}`,
              opacity: shape.a * shape.op,
              borderRadius: shape.t === 'E' ? '50%' : shape.r ? frameLength(shape.r) : undefined,
              zIndex: shape.w > 2000 || shape.h > 1000 ? 1 : 14,
            }}
          />
        ))}
        {board8Manifest.images.map((image) => (
          <img
            key={image.file}
            src={asset(image.file)}
            alt=""
            width={image.pw}
            height={image.ph}
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{
              ...at(image.x, image.y, image.w, image.h),
              objectFit: image.fit,
              borderRadius: image.r ? frameLength(image.r) : undefined,
              zIndex: 4,
            }}
          />
        ))}
        {board8Manifest.texts.map((text) => (
          <p
            key={`${text.x}-${text.y}-${text.segs[0]?.t.slice(0, 12)}`}
            style={{
              ...at(text.x, text.y, text.w, text.h),
              margin: 0,
              zIndex: 40,
              fontFamily: 'var(--sans)',
              textAlign: text.align === 'center' ? 'center' : text.align === 'right' ? 'right' : 'left',
              whiteSpace: 'pre-line',
              lineHeight: 1.25,
            }}
          >
            {text.segs.map((seg, index) => (
              <span key={index} style={{ fontSize: frameLength(seg.size), fontWeight: seg.w, color: `#${seg.fill}` }}>
                {seg.t}
              </span>
            ))}
          </p>
        ))}
        {faces.map((face) => (
          <img
            key={face.file}
            src={asset(face.file)}
            alt=""
            width={400}
            height={400}
            draggable={false}
            style={{ ...at(face.x, face.y, face.w, face.h), zIndex: 30, objectFit: 'contain' }}
          />
        ))}
        {titles.map((title) => (
          <img
            key={title.file}
            src={asset(title.file)}
            alt={title.alt}
            width={title.pw}
            height={title.ph}
            draggable={false}
            style={{ ...at(title.x, title.y, title.w, title.h), zIndex: 50, objectFit: 'contain' }}
          />
        ))}
      </div>
    </div>
  )
}
