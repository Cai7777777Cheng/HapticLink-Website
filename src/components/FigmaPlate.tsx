import type { CSSProperties, ReactNode } from 'react'
import {
  board11Layers,
  board6Bars,
  board6Layers,
  type PlateLayer,
} from '../boardLayers.ts'
import { FadeIn } from './FadeIn.tsx'
import { board6Labels, board6Titles, frameLength, place } from '../overlayLayout.ts'
import { plateFractionSizes, plateSizes, responsiveImage } from '../responsiveImage.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

function box(left: number, top: number, w: number, h: number): CSSProperties {
  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${w}%`,
    height: `${h}%`,
  }
}

function HoverPlate({
  dir,
  plate,
  layers,
  children,
}: {
  dir: string
  plate: string
  layers: PlateLayer[]
  children?: ReactNode
}) {
  return (
    <div className="stage hover-plate">
      <div className="stage-canvas">
        <img
          className="plate-img"
          {...responsiveImage(`${dir}/${plate}`, plateSizes)}
          alt=""
          width={3840}
          height={1947}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        {layers.map((layer) => (
          <div
            key={layer.file}
            className="hover-layer"
            style={box(layer.left, layer.top, layer.w, layer.h)}
          >
            <img
              {...responsiveImage(`${dir}/${layer.file}`, plateFractionSizes(layer.w / 100))}
              alt={layer.alt}
              width={layer.width}
              height={layer.height}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
        {children}
      </div>
    </div>
  )
}

function CategoryChart() {
  return (
    <div className="chart">
      {board6Bars.map((bar) => (
        <div key={bar.label} className="chart-row">
          <button
            type="button"
            className="chart-bar"
            style={{ ...box(bar.left, bar.top, bar.w, bar.h), background: bar.color }}
            aria-label={bar.label}
          />
          <button
            type="button"
            className="chart-label-hit"
            style={box(bar.labelLeft, bar.labelTop, bar.labelW, bar.labelH)}
            tabIndex={-1}
            aria-hidden="true"
          />
          <span
            className="chart-label-dim"
            style={box(bar.labelLeft, bar.labelTop, bar.labelW, bar.labelH)}
          />
        </div>
      ))}
    </div>
  )
}

function Board6Titles() {
  return board6Titles.map((title) => (
    <FadeIn key={title.file} className="stage-overlay" style={place(title.box)}>
      <img
        src={asset(title.file)}
        alt={title.alt}
        width={title.width}
        height={title.height}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </FadeIn>
  ))
}

function Board6Labels() {
  return board6Labels.map((label) => (
    <FadeIn
      key={label.id}
      className="stage-overlay plate-copy"
      style={{
        ...place(label.box),
        fontSize: frameLength(label.fontSize),
        lineHeight: frameLength(label.lineHeight),
        fontWeight: label.weight,
        color: label.color,
      }}
    >
      {label.lines.map((line, lineIndex) => (
        <span key={lineIndex} className="plate-copy-line">
          {line.map((run, runIndex) =>
            run.emphasis ? <em key={runIndex}>{run.text}</em> : <span key={runIndex}>{run.text}</span>,
          )}
        </span>
      ))}
    </FadeIn>
  ))
}

export function Board6Plate() {
  return (
    <HoverPlate dir="board-6" plate="board-6-plate.webp" layers={board6Layers}>
      <Board6Titles />
      <Board6Labels />
      <CategoryChart />
    </HoverPlate>
  )
}

export function Board11Plate() {
  return <HoverPlate dir="board-11" plate="board-11-plate.webp" layers={board11Layers} />
}
