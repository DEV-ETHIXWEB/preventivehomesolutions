// Rewrites raster image references (png/jpg/jpeg) to their new .webp paths
// across src/ and index.html. Run after optimize-images.mjs.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOTS = ['src', 'index.html']
const RASTER_REF = /(\/[^"'`)]+?)\.(png|PNG|jpe?g|JPE?G)(?=["'`)\s])/g

async function* walk(p) {
  const s = await stat(p)
  if (s.isFile()) { yield p; return }
  for (const e of await readdir(p, { withFileTypes: true })) {
    yield* walk(path.join(p, e.name))
  }
}

let changed = 0
for (const root of ROOTS) {
  for await (const file of walk(path.resolve(root))) {
    if (!/\.(jsx?|html|css|js)$/.test(file)) continue
    const text = await readFile(file, 'utf8')
    const next = text.replace(RASTER_REF, (_, base) => `${base}.webp`)
    if (next !== text) {
      await writeFile(file, next, 'utf8')
      changed++
      console.log('updated', path.relative(process.cwd(), file))
    }
  }
}
console.log(`\n${changed} files updated`)
