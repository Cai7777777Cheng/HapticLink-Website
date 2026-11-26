import { useEffect, useState } from 'react'

const pending = new Map<string, Promise<void>>()

/** Decode an image off the DOM so a later <img> can paint from cache. */
export function decodeImage(src: string): Promise<void> {
  const existing = pending.get(src)
  if (existing) return existing

  const promise = new Promise<void>((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      const decoded = img.decode?.()
      if (decoded) void decoded.then(() => resolve(), () => resolve())
      else resolve()
    }
    const timer = window.setTimeout(finish, 12000)
    img.onload = () => {
      window.clearTimeout(timer)
      finish()
    }
    img.onerror = () => {
      window.clearTimeout(timer)
      if (!settled) {
        settled = true
        resolve()
      }
    }
    img.src = src
    if (img.complete && img.naturalWidth > 0) {
      window.clearTimeout(timer)
      finish()
    }
  })

  pending.set(src, promise)
  return promise
}

export function useDecoded(srcs: readonly string[]) {
  const key = srcs.join('\n')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let live = true
    void Promise.all(key.split('\n').filter(Boolean).map((src) => decodeImage(src))).then(() => {
      if (live) setReady(true)
    })
    return () => {
      live = false
    }
  }, [key])

  return ready
}
