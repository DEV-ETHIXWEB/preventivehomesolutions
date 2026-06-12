import Reveal from './Reveal.jsx'
import GoogleReviews from './GoogleReviews.jsx'

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  )
}

function BadgeCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function AlarmSirenIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 2v2M5 22h14M19 12a7 7 0 0 0-14 0v6h14v-6zM9 22h6v-4H9v4zM4 12h1M19 12h1M6.3 6.3l.7.7M17 7l.7-.7" />
    </svg>
  )
}

const features = [
  {
    title: 'Proactive Maintenance Plans',
    Icon: ShieldCheckIcon,
    description: 'Prevent costly repairs with customized maintenance services.',
  },
  {
    title: 'Certified Technicians',
    Icon: BadgeCheckIcon,
    description: 'Our licensed plumbers team consists of highly skilled professionals.',
  },
  {
    title: 'Emergency Services',
    Icon: AlarmSirenIcon,
    description: "We're available after hours to same-day emergency service to keep your home safe.",
  },
]

export default function WhyChoose() {
  return (
    <section className="bg-white py-12 lg:py-28 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Trust Badges Row */}
        <Reveal variant="scale" className="flex items-center justify-center mb-16">
          <div className="rounded-3xl bg-white px-8 py-6 -translate-y-[25px] scale-[1.15]">
            <img
              src="/badges.png"
              alt="Trust Badges"
              className="h-52 sm:h-64 md:h-80 lg:h-[346px] w-auto object-contain scale-x-110 transition-transform duration-300 hover:scale-x-[1.12] hover:scale-y-[1.02]"
            />
          </div>
        </Reveal>

        {/* Heading Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal as="p" className="text-xs sm:text-sm font-mono tracking-[0.25em] font-bold text-phsOrange mb-4">
            Why Choose Preventive Home Solutions
          </Reveal>
          <Reveal as="h2" delay={100} className="font-display font-black text-phsNavy text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.0] ">
            Benefits of the<br />Best in the Trade.
          </Reveal>
          <Reveal as="p" delay={200} className="mt-4 text-[15px] leading-relaxed text-gray-500 font-sans">
            Choosing Preventive Home Solutions means partnering with a team dedicated to exceptional service and lasting solutions for your home.
          </Reveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ title, Icon, description }, i) => (
            <Reveal key={title} variant="up" delay={i * 100}>
              <div className="group relative z-10 flex h-full flex-col overflow-hidden p-8 rounded-3xl border border-[#e6ded4] bg-white/50 transition-all duration-300 ease-out hover:bg-white hover:border-phsOrange/40 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-phsOrange/10">
                {/* Light-glare sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-phsOrange/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />

                {/* Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-phsOrange/10 border border-phsOrange/20 text-phsOrange mb-6 transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:bg-phsOrange group-hover:text-white group-hover:border-transparent">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-phsNavy text-lg tracking-wide transition-colors duration-300 group-hover:text-phsOrange">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-sans leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Live, continuously-scrolling Google reviews */}
        <GoogleReviews />

      </div>
    </section>
  )
}
