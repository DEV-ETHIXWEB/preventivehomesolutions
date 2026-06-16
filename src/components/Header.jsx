import { useRef, useState } from 'react'

const PHONE_DISPLAY = '(385) 453-9428'
const PHONE_TEL = '3854539428'
const LOGO_SRC = '/logo.svg'

// TODO: replace these placeholders with the real lists provided by the client.
const SERVICE_GROUPS = [
  {
    title: 'Cooling',
    items: [
      'AC Maintenance & Repair',
      'AC Installation and Replacement',
      'Heat Pumps',
      'Mini Splits',
      'Indoor Air Quality',
    ],
  },
  {
    title: 'Heating',
    items: [
      'Furnace Maintenance and Repair',
      'Furnace Installation and Replacement',
      'Boiler Service and Maintenance',
      'Thermostats Replacements',
      'Ductless Mini-Splits',
      'Air Handler',
    ],
  },
  {
    title: 'Water Heaters',
    items: [
      'Water Heater Repair and Maintenance',
      'Water Heater Installation and Replacement',
      'Tankless Waterheater',
    ],
  },
  {
    title: 'Drain & Sewer',
    items: [
      'Drain Clearing',
      'Drain Cleaning',
      'Main Line Clearing and Cleaning',
      'Sewer Services',
      'Sump Pumps',
    ],
  },
  {
    title: 'Plumbing',
    items: [
      'Leak Detection & Repair',
      'Faucet Replacement',
      'Toilet Repair and Replacement',
      'Water Quality Filters',
      'Water Line Replacement',
      'Emergency Services',
      'Garbage Disposal',
    ],
  },
]

const SERVICES = Array.from(new Set(SERVICE_GROUPS.flatMap(g => g.items)))

const SERVICE_AREAS = [
  'Ogden',
  'Clinton',
  'Layton',
  'Syracuse',
  'West Point',
  'Roy',
  'Clearfield',
  'Riverdale',
  'Brigham City',
  'Kaysville',
]

const MENUS = {
  services: { label: 'Services', items: SERVICES },
  areas: { label: 'Areas We Serve', items: SERVICE_AREAS },
}

function CaretIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3.5 9 4l1 4-2 1.5a12 12 0 0 0 5 5L14 12l4 1 .5 2.5a2 2 0 0 1-2 2.4A14 14 0 0 1 4.1 5.5a2 2 0 0 1 2.4-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false) // mobile menu
  const [openMenu, setOpenMenu] = useState(null) // 'services' | 'areas' | null
  const [query, setQuery] = useState('')

  // Keep showing the last menu's content while the panel fades out.
  const lastKeyRef = useRef('services')
  if (openMenu) lastKeyRef.current = openMenu
  const display = MENUS[openMenu ?? lastKeyRef.current]
  
  const isServices = (openMenu ?? lastKeyRef.current) === 'services'

  const filteredGroups = isServices
    ? SERVICE_GROUPS.map((group) => {
        const filteredItems = group.items.filter((item) =>
          item.toLowerCase().includes(query.trim().toLowerCase())
        )
        return { ...group, filteredItems }
      }).filter((group) => group.filteredItems.length > 0)
    : []

  const filteredAreas = !isServices
    ? SERVICE_AREAS.filter((area) =>
        area.toLowerCase().includes(query.trim().toLowerCase())
      )
    : []

  const showMenu = (key) => {
    setOpenMenu(key)
    setQuery('')
  }
  const closeMenu = () => {
    setOpenMenu(null)
    setQuery('')
  }

  const navLinkClass =
    'font-sans text-[15px] font-semibold text-phsInk/75 transition-colors hover:text-phsInk'

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-phsSky/10 bg-phsCream/95 backdrop-blur"
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 sm:gap-6 px-[clamp(12px,4vw,20px)] sm:px-5 pt-4 pb-[6px] lg:px-10">
        {/* Logo */}
        <a href="#" onMouseEnter={closeMenu} className="group flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Preventive Home Solutions"
            className="h-[clamp(3.25rem,5.8vw,5.6rem)] w-auto translate-y-[5px] rounded-lg transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <span className="font-sans text-[clamp(12px,3.5vw,18px)] sm:text-xl font-extrabold text-phsInk truncate max-w-[clamp(100px,40vw,200px)] sm:max-w-none">
            Preventive Home Solutions
          </span>
        </a>

        {/* Right cluster: nav + phone + CTA grouped together */}
        <div className="hidden items-center gap-5 lg:flex">
          <nav className="flex items-center gap-7">
            <button
              type="button"
              onMouseEnter={() => showMenu('services')}
              aria-expanded={openMenu === 'services'}
              aria-haspopup="true"
              className={`flex items-center gap-1 ${navLinkClass}`}
            >
              Services
              <CaretIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${openMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <button
              type="button"
              onMouseEnter={() => showMenu('areas')}
              aria-expanded={openMenu === 'areas'}
              aria-haspopup="true"
              className={`flex items-center gap-1 ${navLinkClass}`}
            >
              Areas We Serve
              <CaretIcon className={`h-3.5 w-3.5 transition-transform duration-300 ${openMenu === 'areas' ? 'rotate-180' : ''}`} />
            </button>

            <a href="#about" onMouseEnter={closeMenu} className={navLinkClass}>
              About Us
            </a>
            <a href="#blog" onMouseEnter={closeMenu} className={navLinkClass}>
              Blog
            </a>
          </nav>

          {/* Phone as a button */}
          <a
            href={`tel:${PHONE_TEL}`}
            onMouseEnter={closeMenu}
            className="hidden items-center gap-2 rounded-md border border-phsSky/20 bg-white px-4 py-2.5 font-sans text-sm font-bold text-phsInk shadow-sm transition-colors hover:border-phsSky hover:bg-phsSky/5 xl:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>

          {/* Highlighted CTA */}
          <a
            href="#scheduling"
            onMouseEnter={closeMenu}
            className="rounded-md bg-phsOrange px-6 py-3 font-sans text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-phsOrangeDark hover:shadow-md active:translate-y-0"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-phsInk lg:hidden min-h-[44px] min-w-[44px]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-width mega menu: spans the whole window, left to right */}
      <div
        className={`absolute inset-x-0 top-full border-t border-phsSky/10 bg-phsCream shadow-xl transition-all duration-200 ease-out ${
          openMenu ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 py-6 lg:px-10">
          <div className="mb-4 flex items-center gap-2 rounded-md border border-phsSky/15 bg-white px-3 py-2.5 focus-within:border-phsSky sm:max-w-sm">
            <SearchIcon className="h-4 w-4 shrink-0 text-phsInk/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${display.label.toLowerCase()}…`}
              className="w-full bg-transparent text-sm text-phsInk outline-none placeholder:text-phsInk/40"
            />
          </div>

          {isServices ? (
            filteredGroups.length === 0 ? (
              <p className="py-4 text-sm text-phsInk/40">No matches</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 items-start">
                {filteredGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-3">
                    {group.filteredItems.map((item, idx) => {
                      const isTopItem = idx === 0
                      return (
                        <div
                          key={item}
                          className={`rounded-xl border border-phsSky/10 bg-white/60 px-4 py-3 shadow-sm relative flex flex-col justify-center min-h-[58px] hover:border-phsOrange/30 hover:bg-white transition-all duration-300 ${
                            isTopItem ? 'pt-6' : ''
                          }`}
                        >
                          {/* Category label on the top left of ONLY the top box */}
                          {isTopItem && (
                            <span className="absolute -top-2.5 left-3 rounded bg-phsOrange px-2.5 py-0.5 text-[7.5px] font-mono font-bold tracking-widest text-white shadow-sm">
                              {group.title}
                            </span>
                          )}
                          
                          <a
                            href="#services"
                            onClick={closeMenu}
                            className="block text-[13px] font-bold text-phsInk/85 hover:text-phsOrange leading-snug transition-colors duration-200"
                          >
                            {item}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )
          ) : (
            filteredAreas.length === 0 ? (
              <p className="py-4 text-sm text-phsInk/40">No matches</p>
            ) : (
              <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3 lg:grid-cols-5 items-start">
                {filteredAreas.map((item) => (
                  <a
                    key={item}
                    href="#areas-we-serve"
                    onClick={closeMenu}
                    className="block rounded-xl border border-phsSky/10 bg-white/60 px-4 py-3 shadow-sm flex flex-col justify-center min-h-[58px] text-[13px] font-bold text-phsInk/85 hover:border-phsOrange/30 hover:bg-white hover:text-phsOrange transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-slide-down max-h-[80vh] overflow-y-auto border-t border-phsSky/10 bg-phsCream px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-6">
            {/* Emergency Services */}
            <a 
              href="#emergency" 
              onClick={() => setOpen(false)} 
              className="flex items-center justify-center gap-2 rounded-full bg-red-50 px-4 py-3 text-[15px] font-medium text-red-600 transition-colors hover:bg-red-100"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              Emergency services
            </a>

            {/* HVAC Section */}
            <div className="pt-2 border-t border-phsSky/10">
              <p className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] text-phsInk/45 uppercase">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
                HVAC
              </p>
              
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-[13px] font-bold text-phsInk/70">Air conditioning</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_GROUPS.find(g => g.title === 'Cooling')?.items.map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="rounded-full bg-phsSky/5 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:bg-phsSky/15 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[13px] font-bold text-phsInk/70">Heating</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_GROUPS.find(g => g.title === 'Heating')?.items.map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="rounded-full bg-phsSky/5 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:bg-phsSky/15 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Plumbing Section */}
            <div className="pt-6 border-t border-phsSky/10">
              <p className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] text-phsInk/45 uppercase">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                PLUMBING
              </p>
              
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-[13px] font-bold text-phsInk/70">Water heaters</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_GROUPS.find(g => g.title === 'Water Heaters')?.items.map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="rounded-full bg-phsSky/5 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:bg-phsSky/15 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[13px] font-bold text-phsInk/70">Drains & sewers</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_GROUPS.find(g => g.title === 'Drain & Sewer')?.items.map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="rounded-full bg-phsSky/5 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:bg-phsSky/15 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[13px] font-bold text-phsInk/70">Fixtures & water</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_GROUPS.find(g => g.title === 'Plumbing')?.items.filter(item => item !== 'Emergency Services').map(item => (
                      <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setOpen(false)} className="rounded-full bg-phsSky/5 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:bg-phsSky/15 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Areas We Serve Section */}
            <div className="pt-6 border-t border-phsSky/10">
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.2em] text-phsInk/45 uppercase">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                AREAS WE SERVE
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((s) => (
                  <a key={s} href="#areas-we-serve" onClick={() => setOpen(false)} className="rounded-full border border-phsSky/20 px-4 py-2 text-[14px] font-medium text-phsInk/80 hover:border-phsSky/40 hover:bg-phsSky/5 transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-phsSky/10 flex flex-col gap-4">
              <a href="#about" onClick={() => setOpen(false)} className="font-sans text-[15px] font-semibold text-phsInk/80">
                About Us
              </a>
              <a href="#blog" onClick={() => setOpen(false)} className="font-sans text-[15px] font-semibold text-phsInk/80">
                Blog
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-phsSky/20 px-4 py-3 font-mono text-sm font-bold text-phsInk"
              >
                <PhoneIcon className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="#scheduling"
                onClick={() => setOpen(false)}
                className="rounded-md bg-phsOrange px-5 py-3 text-center font-sans text-sm font-bold text-white"
              >
                Get Free Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
