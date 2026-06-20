// Shared blog content. The homepage teaser (Blog.jsx) shows the first few
// posts; the full /blog listing page (BlogPage.jsx) shows them all. Keep the
// list here so both stay in sync.
//
// NOTE: images for posts beyond the first three reuse the available blog
// artwork as placeholders — swap `image` for real per-article photos when the
// client provides them.
//
// When the client supplies real article content, add a long-form `body` and
// `keywords` per post — those feed the SEO meta + structured data on the
// (future) /blog/:slug article pages.
export const BLOG_AUTHOR = 'PHS Field Team'

export const BLOG_POSTS = [
  {
    slug: 'emergency-plumbing-steps',
    category: 'PLUMBING',
    title: 'Emergency Plumbing Steps: What To Do Before The Technician Arrives',
    excerpt:
      'Water on the floor can turn a normal evening into a fast-moving problem. The good news: a few quick moves protect your home.',
    date: 'JANUARY 17, 2026',
    readTime: '5 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'utah-inversions-indoor-air-quality',
    category: 'AIR QUALITY',
    title: 'Utah Inversions And Indoor Air Quality: Solutions That Actually Work',
    excerpt:
      'Winter along the Wasatch Front can feel a little upside down. You look toward the mountains and lose them in haze.',
    date: 'JANUARY 10, 2026',
    readTime: '6 min read',
    image: '/air_quality_blog.png',
  },
  {
    slug: 'seer2-2026-hvac-standards',
    category: 'HVAC',
    title: 'SEER2 And 2026 HVAC Efficiency Standards Explained For Utah Homeowners',
    excerpt:
      "Heating and cooling efficiency got a little harder to read in the last couple of years. Here's the plain-English version.",
    date: 'DECEMBER 29, 2025',
    readTime: '7 min read',
    image: '/hvac_blog.png',
  },
  {
    slug: 'tankless-vs-traditional-water-heater',
    category: 'WATER HEATERS',
    title: 'Tankless vs Traditional Water Heater In Cold Climates: Best Choice For Northern Utah Homes',
    excerpt:
      'Northern Utah winters change the math on water heaters. Incoming water is colder, garages and crawlspaces stay chilly.',
    date: 'DECEMBER 17, 2025',
    readTime: '6 min read',
    image: '/beforeandafterwaterheater.PNG',
  },
  {
    slug: 'utah-hard-water-impacts',
    category: 'PLUMBING',
    title: "Utah Hard Water: How It Impacts Your Home's Plumbing And Appliances",
    excerpt:
      'Northern Utah homeowners get used to a few regional realities: big temperature swings, dry air, and notably hard water.',
    date: 'DECEMBER 17, 2025',
    readTime: '5 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'sump-pump-maintenance',
    category: 'PLUMBING',
    title: 'The Silent Guardian: The Pros And Cons Of Sump Pump Maintenance',
    excerpt:
      'Sewer problems can disrupt your home and your daily routine. The sump pump is the most forgotten appliance in the house — until it fails.',
    date: 'DECEMBER 13, 2025',
    readTime: '5 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'hydro-jetting-vs-snaking',
    category: 'DRAIN & SEWER',
    title: 'Hydro Jetting vs. Snaking: Which Is Best For Your Clogged Drains?',
    excerpt:
      "If you have a sink that won't drain or a toilet that keeps backing up, you have two main options. Here's how to choose.",
    date: 'DECEMBER 3, 2025',
    readTime: '6 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'how-to-unclog-a-blocked-toilet',
    category: 'PLUMBING',
    title: 'How To Unclog A Seriously Blocked Toilet?',
    excerpt:
      'A badly clogged toilet can turn a normal day into a stressful mess within minutes. A few proven steps clear most blockages.',
    date: 'NOVEMBER 26, 2025',
    readTime: '4 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'trenchless-sewer-repair-pros-cons',
    category: 'DRAIN & SEWER',
    title: 'What Are The Pros And Cons Of Trenchless Sewer Repair?',
    excerpt:
      'Sewer problems can disrupt your home and your daily routine. When a sewer line fails, trenchless repair is worth understanding.',
    date: 'NOVEMBER 26, 2025',
    readTime: '6 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'plumbing-tip-top-shape-year-round',
    category: 'MAINTENANCE',
    title: 'Your Plumbing In Tip-Top Shape Year-Round',
    excerpt:
      'Keep your home in top condition year-round with our plumbing seasonal maintenance tips. From preparing for winter to spring checks.',
    date: 'NOVEMBER 12, 2025',
    readTime: '5 min read',
    image: '/plumbing_blog.png',
  },
  {
    slug: 'regular-deck-maintenance',
    category: 'MAINTENANCE',
    title: 'Why Regular Deck Maintenance Extends Its Life',
    excerpt:
      'Keep your home in top condition year-round with our deck maintenance seasonal tips. Small, regular care prevents costly repairs.',
    date: 'OCTOBER 28, 2025',
    readTime: '4 min read',
    image: '/hvac_blog.png',
  },
  {
    slug: 'home-maintenance-tips-every-season',
    category: 'MAINTENANCE',
    title: 'Home Maintenance Tips For Every Season',
    excerpt:
      'Keep your home in top condition year-round with our seasonal maintenance tips. From preparing for winter to summer readiness.',
    date: 'OCTOBER 14, 2025',
    readTime: '5 min read',
    image: '/air_quality_blog.png',
  },
]
