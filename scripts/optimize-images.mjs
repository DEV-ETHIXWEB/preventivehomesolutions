// One-shot asset optimizer for the public/ folder.
//
//  - Raster images (png/jpg/jpeg) are resized to a sensible max width and
//    re-encoded as WebP (quality 80, alpha preserved). The originals are then
//    removed so Vite no longer copies multi-MB files into dist/.
//  - SVGs are minified in place with SVGO (the hand-exported vector files carry
//    absurd path precision — e.g. logo.svg is ~960 KB of coordinates).
//  - Fully orphaned assets (not referenced anywhere in src/ or index.html) are
//    deleted outright.
//
// Run with: node scripts/optimize-images.mjs

import { readdir, readFile, writeFile, unlink, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { optimize } from 'svgo'

const PUBLIC = path.resolve('public')

// Per-file max display width. Anything not listed uses DEFAULT_WIDTH.
const WIDTH_OVERRIDES = {
  'main logo.png': 420,
  'Group 12.png': 520,
  'Group 13.png': 520,
  'Group 14.png': 520,
  'Shield tagline.png': 760,
}
const DEFAULT_WIDTH = 1400
const QUALITY = 80

// Orphans confirmed unreferenced in the codebase — delete to slim dist/.
const ORPHANS = [
  'slide 2.jpg', 'slide 3.jpeg', 'slide 4.jpeg',
  'Coverphoto.png', 'ready to book.png', 'air_quality_blog.png',
  'd0484732fe6d7b7993abcea3ba29e28d.jpg', 'ms.jpg',
  '896c33fe-d6b8-456f-88c4-a002594afb20.jpg',
]

const RASTER = /\.(png|jpe?g)$/i
const kb = (n) => `${Math.round(n / 1024)} KB`

async function main() {
  const entries = await readdir(PUBLIC, { withFileTypes: true })
  let beforeTotal = 0
  let afterTotal = 0

  // 1. Delete orphans.
  for (const name of ORPHANS) {
    const p = path.join(PUBLIC, name)
    try {
      const s = await stat(p)
      beforeTotal += s.size
      await unlink(p)
      console.log(`orphan  �delete  ${name}  (${kb(s.size)})`)
    } catch { /* already gone */ }
  }

  for (const e of entries) {
    if (!e.isFile()) continue
    const name = e.name
    if (ORPHANS.includes(name)) continue
    const src = path.join(PUBLIC, name)
    const s = await stat(src)

    if (RASTER.test(name)) {
      beforeTotal += s.size
      const width = WIDTH_OVERRIDES[name] ?? DEFAULT_WIDTH
      const out = src.replace(RASTER, '.webp')
      const img = sharp(src)
      const meta = await img.metadata()
      let pipe = img
      if (meta.width && meta.width > width) pipe = pipe.resize({ width })
      await pipe.webp({ quality: QUALITY }).toFile(out)
      const os = await stat(out)
      afterTotal += os.size
      await unlink(src)
      console.log(`raster  ${name}  ${kb(s.size)} -> ${path.basename(out)} ${kb(os.size)}`)
    } else if (name.toLowerCase().endsWith('.svg')) {
      beforeTotal += s.size
      const svg = await readFile(src, 'utf8')
      const res = optimize(svg, {
        path: src,
        multipass: true,
        floatPrecision: 2,
      })
      await writeFile(src, res.data, 'utf8')
      const os = (await stat(src)).size
      afterTotal += os
      if (s.size - os > 1024) console.log(`svg     ${name}  ${kb(s.size)} -> ${kb(os.size)}`)
    }
  }

  console.log(`\nTOTAL  ${kb(beforeTotal)} -> ${kb(afterTotal)}`)
}

main().catch((err) => { console.error(err); process.exit(1) })
