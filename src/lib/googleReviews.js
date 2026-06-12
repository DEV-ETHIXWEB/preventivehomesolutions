/**
 * Live Google reviews via the Google Maps JavaScript SDK (Places API – New).
 *
 * This is the only browser-safe, Terms-of-Service-compliant way to read a
 * business's Google reviews. Scraping google.com/maps is against Google's ToS
 * and is blocked by CORS, so it is intentionally not attempted here.
 *
 * To go live, set these in a `.env` file at the project root (see .env.example):
 *   VITE_GOOGLE_MAPS_API_KEY  – a Maps JS API key with the "Places API (New)"
 *                               enabled and billing turned on. Restrict it by
 *                               HTTP referrer to your domain.
 *   VITE_GOOGLE_PLACE_ID      – the Place ID of the Preventive Home Solutions
 *                               business profile (find it with Google's
 *                               "Place ID Finder").
 *
 * NOTE: Google's API returns at most 5 reviews per place — there is no API that
 * returns the full review history. We poll periodically so newly-surfaced
 * reviews show up without a page reload ("real time" within quota limits).
 */

let mapsLoader

/** Lazily inject the Maps JS SDK exactly once and resolve with `window.google`. */
function loadMaps(apiKey) {
  if (mapsLoader) return mapsLoader

  mapsLoader = new Promise((resolve, reject) => {
    if (window.google?.maps?.importLibrary) {
      resolve(window.google)
      return
    }
    const script = document.createElement('script')
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}` +
      '&libraries=places&loading=async&v=weekly'
    script.async = true
    script.onload = () => resolve(window.google)
    script.onerror = () => reject(new Error('Failed to load Google Maps SDK'))
    document.head.appendChild(script)
  })

  return mapsLoader
}

/**
 * Fetch up to 5 live reviews for a Place ID.
 * Returns `null` when not configured, or normalized data when successful.
 */
export async function fetchGoogleReviews({ apiKey, placeId } = {}) {
  if (!apiKey || !placeId) return null

  const google = await loadMaps(apiKey)
  const { Place } = await google.maps.importLibrary('places')

  const place = new Place({ id: placeId })
  await place.fetchFields({
    fields: ['reviews', 'rating', 'userRatingCount', 'displayName'],
  })

  // Deep-link to the business's reviews on Google as a reliable fallback when a
  // review has no direct author URL.
  const placeReviewsUrl = `https://search.google.com/local/reviews?placeid=${encodeURIComponent(
    placeId,
  )}`

  const reviews = (place.reviews ?? []).map((r) => ({
    author: r.authorAttribution?.displayName ?? 'Google user',
    avatar: r.authorAttribution?.photoURI ?? null,
    rating: r.rating ?? 5,
    text: typeof r.text === 'string' ? r.text : r.text?.text ?? '',
    time: r.relativePublishTimeDescription ?? '',
    url: r.authorAttribution?.uri ?? placeReviewsUrl,
  }))

  return {
    rating: place.rating ?? null,
    total: place.userRatingCount ?? null,
    name: place.displayName ?? null,
    reviews,
  }
}
