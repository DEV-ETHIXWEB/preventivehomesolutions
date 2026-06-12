import Reveal from './Reveal.jsx'

/** Faint concentric-arc decoration reused on both sides. */
function Arcs({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute text-gray-200 ${className}`}
      width="380"
      height="380"
      viewBox="0 0 380 380"
      fill="none"
      aria-hidden="true"
    >
      {[60, 105, 150, 195, 240].map((r) => (
        <circle key={r} cx="190" cy="190" r={r} stroke="currentColor" strokeWidth="2" />
      ))}
    </svg>
  )
}

const testimonials = [
  {
    name: 'Marcus Whitfield',
    location: 'Layton, UT',
    rating: 5,
    quote:
      'Showed up the same day for a burst pipe and had it fixed in under two hours. Clean, professional, and fairly priced. Could not ask for more.',
  },
  {
    name: 'Danielle Pierce',
    location: 'Ogden, UT',
    rating: 5,
    quote:
      'Our furnace died on the coldest night of the year and they came out after hours. Honest about what needed fixing instead of upselling us. Lifesavers.',
  },
  {
    name: 'Trevor Hansen',
    location: 'Syracuse, UT',
    rating: 5,
    quote:
      'Signed up for their maintenance plan and it has already paid for itself. The technicians actually explain what they are doing. Highly recommend.',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < count ? 'text-[#fbbc05]' : 'text-gray-300'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.6l-4.95 2.6.95-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-10 sm:py-20">
      <Arcs className="-left-32 top-0 animate-spin-slow" />
      <Arcs className="-right-28 bottom-0 animate-spin-slow [animation-direction:reverse]" />

      <div className="relative mx-auto max-w-[1100px] px-4">
        {/* Heading block */}
        <Reveal
          as="p"
          className="text-center text-sm font-bold tracking-wide text-phsOrange"
        >
          Testimonials
        </Reveal>
        <Reveal
          as="h2"
          delay={100}
          className="mt-2 text-center text-3xl font-bold text-phsInk sm:text-4xl"
        >
          What Our Customers Are Saying About Us
        </Reveal>
        <Reveal
          as="p"
          delay={200}
          className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-relaxed text-gray-600"
        >
          Read firsthand experiences from homeowners who trust us for their plumbing and HVAC needs.
        </Reveal>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ name, location, rating, quote }, i) => (
            <Reveal key={name} as="figure" variant="up" delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                {/* Quote mark */}
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-phsOrange/30" fill="currentColor" aria-hidden="true">
                  <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.2 0 .4 0 .6-.05C7.5 16.7 6 18 4 18.5l.7 1.5C8.3 18.9 10.5 16 10.5 12V10.5C10.5 8 8.5 6 7.5 6zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.2 0 .4 0 .6-.05C16.5 16.7 15 18 13 18.5l.7 1.5c3.6-1.1 5.8-4 5.8-8V10.5C19.5 8 17.5 6 16.5 6z" />
                </svg>

                <Stars count={rating} />

                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">
                  “{quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-phsOrange/10 font-display font-bold text-phsOrange">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-phsInk">{name}</p>
                    <p className="text-xs text-gray-400">{location}</p>
                  </div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
