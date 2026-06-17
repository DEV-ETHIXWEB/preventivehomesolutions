import { useLoading } from '../loading.js'

/** Orange shield with a white inner emblem — kept symmetric so the 3D flip
 *  reads correctly from both sides. Shared visual with the static loader in
 *  index.html so the hand-off after React mounts is seamless. */
function ShieldMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 4 L54 12 V30 C54 44 44 54 32 60 C20 54 10 44 10 30 V12 Z"
        fill="#f3741b"
      />
      <path
        d="M32 14 L46 19 V31 C46 41 39 48 32 52 C25 48 18 41 18 31 V19 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M27 31 L31 35 L38 26"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Loader() {
  const loading = useLoading()

  return (
    <div
      aria-hidden={!loading}
      role="status"
      style={{ perspective: '800px' }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7 bg-phsCream transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="phs-shield-spin h-20 w-20 sm:h-24 sm:w-24 drop-shadow-xl">
        <ShieldMark />
      </div>
      <span className="font-mono text-[11px] font-bold tracking-[0.4em] text-phsOrange/80">
        LOADING
      </span>
    </div>
  )
}
