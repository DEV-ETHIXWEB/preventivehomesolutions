// Chatbot free-text knowledge base — no LLM, no API key. A deterministic
// keyword/intent matcher scored against real site content, assembled from
// the same data files that already drive the actual pages (services.js,
// serviceAreas.js, coupons.js, homeFaqs.js, business.js, nav.js) so answers
// can never drift out of sync with what the site actually says.
//
// Each knowledge entry uses the exact same "option" shape ChatBot.jsx's
// FLOW already understands ({ label, next } / { label, href } /
// { label, form, service } / { label, tel }), so a free-text match is
// rendered through the same revealSeq()/setOptions() call a button click
// already uses — no new UI, no new option-handling code.

import { SERVICE_PAGES, subServiceHref } from './services.js'
import { AREA_PAGES } from './serviceAreas.js'
import { COUPONS } from './coupons.js'
import { HOME_FAQS } from './homeFaqs.js'
import { BUSINESS, FULL_ADDRESS } from './business.js'
import { LICENSE_NUMBER, PHONE_DISPLAY, PHONE_TEL, areaHref } from './nav.js'

const STOPWORDS = new Set([
  'and', 'or', 'the', 'a', 'an', 'of', 'for', 'to', 'in', 'on', 'with', '&',
  'do', 'you', 'your', 'is', 'are', 'what', 'how', 'can', 'does', 'my', 'i',
])

/** Lowercased whole phrase + individual significant words, for keyword scoring. */
function titleKeywords(title) {
  const clean = title.toLowerCase()
  const words = clean.replace(/[^\w\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOPWORDS.has(w))
  return [clean, ...words]
}

/* -------------------- Top-level trades: route into FLOW -------------------- */
// Broad trade words ("plumbing", "AC") reuse the existing FLOW node copy
// instead of duplicating it — same content whether clicked or typed.
export const TRADE_ROUTES = [
  { next: 'plumbing', serviceNoun: 'Plumbing', keywords: ['plumbing', 'plumber', 'pipe', 'pipes', 'faucet', 'toilet', 'leak'] },
  { next: 'heating', serviceNoun: 'Heating', keywords: ['heating', 'heater', 'furnace', 'boiler', 'heat pump'] },
  { next: 'cooling', serviceNoun: 'Cooling / AC', keywords: ['cooling', 'ac', 'a c', 'air conditioning', 'air conditioner'] },
  { next: 'waterheater', serviceNoun: 'Water Heater', keywords: ['water heater', 'hot water', 'tankless'] },
  { next: 'drain', serviceNoun: 'Drain & Sewer', keywords: ['drain', 'sewer', 'clog', 'clogged', 'sump pump'] },
]

/** Words that fast-track straight to the emergency FLOW node, ahead of any
 * informational reply — urgency matters more than accuracy of topic match. */
export const EMERGENCY_KEYWORDS = [
  'emergency', 'urgent', 'asap', 'right now', 'flooding', 'flooded',
  'burst pipe', 'burst', 'no heat', 'no hot water', 'gas smell', 'sewage backup',
]

/** Words that mean "I want to book this," routing into the existing intake
 * flow (startForm) instead of an informational reply. Deliberately excludes
 * "quote"/"estimate" — those show up in plain pricing questions ("do you
 * offer free estimates?") that should get the informational answer, not an
 * unprompted jump into the lead form. */
export const BOOKING_KEYWORDS = [
  'book', 'schedule', 'appointment', 'come out', 'send someone', 'set up a visit',
]

/* ------------------------------ Sub-services ------------------------------ */
// One entry per real sub-service (~30), generated from services.js so this
// list can never fall out of sync with the actual service pages.
const subServiceEntries = []
for (const trade of Object.values(SERVICE_PAGES)) {
  for (const svc of trade.services) {
    subServiceEntries.push({
      id: `svc-${trade.slug}-${svc.slug}`,
      keywords: titleKeywords(svc.title),
      serviceNoun: trade.name,
      reply: svc.description,
      quickReplies: [
        { label: 'Learn More', href: svc.slug ? subServiceHref(trade.slug, svc.slug) : `/${trade.slug}` },
        { label: 'Book Now', form: true, service: trade.name },
        { label: 'Ask Something Else', next: 'services' },
      ],
    })
  }
}

/* --------------------------------- Areas ----------------------------------- */
// One entry per real service-area city, generated from serviceAreas.js.
const areaEntries = Object.values(AREA_PAGES).map((area) => ({
  id: `area-${area.slug}`,
  keywords: [area.city.toLowerCase(), ...area.city.toLowerCase().split(' ')],
  reply: `Yes — ${area.city} (${area.county}) is one of our regular service areas.`,
  quickReplies: [
    { label: `${area.city} Info`, href: areaHref(area.city) },
    { label: 'Get a Free Quote', form: true },
    { label: 'Ask Something Else', next: 'services' },
  ],
}))

/* --------------------------------- Coupons ---------------------------------- */
const couponEntry = {
  id: 'coupons',
  keywords: ['coupon', 'coupons', 'discount', 'discounts', 'deal', 'deals', 'special', 'specials', 'promo', 'promotion', 'offer', 'offers', 'savings'],
  reply: `We've got a few offers running right now: ${COUPONS.slice(0, 4).map((c) => `${c.title} (${c.badge})`).join(', ')}. See the full list and claim one on our coupons page.`,
  quickReplies: [
    { label: 'View All Coupons', href: '/coupons' },
    { label: 'Get a Free Quote', form: true },
  ],
}

/* --------------------------- Site FAQ (verbatim) ---------------------------- */
// Reuses the exact, already-approved Q&A shown in the home page accordion and
// baked into its FAQPage schema — never separate/duplicate copy.
const faqEntries = HOME_FAQS.map((f, i) => ({
  id: `faq-${i}`,
  keywords: titleKeywords(f.q),
  reply: f.a,
  quickReplies: [
    { label: 'Get a Free Quote', form: true },
    { label: 'Ask Something Else', next: 'services' },
  ],
}))

/* ------------------------------- Meta topics -------------------------------- */
const metaEntries = [
  {
    id: 'license',
    keywords: ['license', 'licensed', 'insurance', 'insured', 'bonded', 'certified', 'certification', 'credentials'],
    reply: `Yes — every technician is fully licensed and insured. Our Utah contractor license number is ${LICENSE_NUMBER}, and every job is backed by a written warranty.`,
    quickReplies: [{ label: 'Get a Free Quote', form: true }],
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'costs', 'expensive', 'cheap', 'rate', 'rates', 'fee', 'fees'],
    reply: "We don't guess over the phone — every job gets a free, upfront, fixed quote before any work begins, so there are no hourly surprises.",
    quickReplies: [
      { label: 'Get a Free Quote', form: true },
      { label: 'View Coupons', href: '/coupons' },
    ],
  },
  {
    id: 'hours',
    keywords: ['hours', 'open', 'closed', 'available', 'availability', 'weekend', 'sunday', 'saturday', 'late night'],
    reply: `We're available 7 days a week, with 24/7 response for real emergencies. Call ${PHONE_DISPLAY} any time.`,
    quickReplies: [
      { label: `Call ${PHONE_DISPLAY}`, tel: PHONE_TEL },
      { label: 'I Have an Emergency', next: 'emergency' },
    ],
  },
  {
    id: 'contact',
    keywords: ['phone number', 'contact', 'email', 'address', 'located', 'location', 'where are you'],
    reply: `You can call or text us at ${PHONE_DISPLAY}, email ${BUSINESS.email}, or find us at ${FULL_ADDRESS}.`,
    quickReplies: [{ label: `Call ${PHONE_DISPLAY}`, tel: PHONE_TEL }],
  },
  {
    id: 'warranty',
    keywords: ['warranty', 'guarantee', 'guaranteed', 'backed'],
    reply: 'Every job we complete is backed by a written warranty, so you know the work will last.',
    quickReplies: [{ label: 'Get a Free Quote', form: true }],
  },
]

// Order matters for tie-breaks: more specific/curated entries first so a
// generic sub-service description never outranks a precise meta answer.
export const CHATBOT_KNOWLEDGE = [
  ...metaEntries,
  couponEntry,
  ...faqEntries,
  ...areaEntries,
  ...subServiceEntries,
]

function normalize(s) {
  return ` ${s.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()} `
}

/** Score every entry's keyword hits against the message; multi-word phrases
 * count for more (they're a much stronger signal than a single word). Ties
 * go to whichever entry appears first in `knowledgeBase`. */
export function matchIntent(text, knowledgeBase = CHATBOT_KNOWLEDGE) {
  const norm = normalize(text)
  let best = null
  let bestScore = 0
  for (const entry of knowledgeBase) {
    let score = 0
    for (const kw of entry.keywords) {
      if (norm.includes(` ${kw} `)) score += kw.includes(' ') ? 3 : 1
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return best
}

/** Same scoring approach, but against a small routing table instead of the
 * full knowledge base (used for TRADE_ROUTES / EMERGENCY_KEYWORDS / BOOKING_KEYWORDS
 * style plain string arrays and {keywords} objects alike). */
export function textIncludesAny(text, phrases) {
  const norm = normalize(text)
  return phrases.some((p) => norm.includes(` ${p} `))
}

export function matchTradeRoute(text) {
  const norm = normalize(text)
  let best = null
  let bestScore = 0
  for (const route of TRADE_ROUTES) {
    let score = 0
    for (const kw of route.keywords) {
      if (norm.includes(` ${kw} `)) score += kw.includes(' ') ? 3 : 1
    }
    if (score > bestScore) {
      bestScore = score
      best = route
    }
  }
  return best
}
