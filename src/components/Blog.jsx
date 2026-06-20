import Reveal from './Reveal.jsx'

const posts = [
  {
    category: 'PLUMBING',
    title: 'Emergency Plumbing Steps: What To Do Before The Technician Arrives',
    excerpt: 'Water on the floor can turn a normal evening into a fast-moving problem. The good news: a few quick moves protect your home.',
    date: 'JANUARY 17, 2026',
    image: '/plumbing_blog.png',
  },
  {
    category: 'AIR QUALITY',
    title: 'Utah Inversions And Indoor Air Quality: Solutions That Actually Work',
    excerpt: 'Winter along the Wasatch Front can feel a little upside down. You look toward the mountains and lose them in haze.',
    date: 'JANUARY 10, 2026',
    image: '/air_quality_blog.png',
  },
  {
    category: 'HVAC',
    title: 'SEER2 And 2026 HVAC Efficiency Standards Explained For Utah Homeowners',
    excerpt: "Heating and cooling efficiency got a little harder to read in the last couple of years. Here's the plain-English version.",
    date: 'DECEMBER 29, 2025',
    image: '/hvac_blog.png',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 bg-[#fbf7f0] py-20 lg:py-28 px-6">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Heading Block */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-8 md:mb-12 p-6 md:p-0 rounded-2xl bg-gradient-to-br from-white to-orange-50 md:bg-none shadow-sm md:shadow-none border border-phsOrange/10 md:border-transparent">
          <div>
            <Reveal
              as="p"
              className="text-[10px] sm:text-sm font-mono tracking-[0.25em] font-bold text-phsOrange mb-2 md:mb-4"
            >
              Field Notes
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="font-display font-black text-phsInk text-2xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.0] "
            >
              Latest from the Guard.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={200}
            className="max-w-md text-[13px] sm:text-base leading-relaxed text-gray-600 font-sans md:pt-4"
          >
            Tactical advice from the techs who service Northern Utah homes every day.
          </Reveal>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal
              key={post.title}
              as="article"
              variant="up"
              delay={i * 130}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              {/* Top Card Graphic Section */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 rounded bg-phsOrange px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest text-white shadow-sm z-10">
                  {post.category}
                </span>
              </div>

              {/* Bottom Card Content Section */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display font-bold text-[16px] sm:text-[17px] leading-snug text-phsInk mb-3 group-hover:text-phsOrange transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-500 mb-6 font-sans flex-1">
                  {post.excerpt}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-gray-400 ">
                    {post.date}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-phsOrange hover:text-phsOrangeDark transition-colors duration-300 group/link"
                  >
                    Read 
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
