import { imageVariants } from './imageVariants.ts'

const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`

/** Layout width of a full-bleed plate inside the page edge. */
export const plateSizes = 'calc(100vw - 30px)'

export function plateFractionSizes(fraction: number) {
  return `calc((100vw - 30px) * ${fraction})`
}

export function responsiveImage(file: string, sizes: string) {
  const variant = imageVariants[file]
  if (!variant) return { src: asset(file) }
  return {
    src: asset(variant.src),
    srcSet: variant.widths.map((item) => `${asset(item.src)} ${item.width}w`).join(', '),
    sizes,
  }
}
