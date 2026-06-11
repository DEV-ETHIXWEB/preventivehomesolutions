import { useState } from 'react'
import Reveal from './Reveal.jsx'

const inputClass =
  'w-full rounded-lg bg-gray-100 border border-gray-200 px-5 py-4 text-[15px] text-phsInk placeholder-gray-400 outline-none transition-all duration-200 focus:border-phsOrange focus:ring-2 focus:ring-phsOrange/20 focus:bg-white'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="scheduling" className="scroll-mt-24 bg-phsCream py-12 lg:py-28 px-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Copy + Phone + Details */}
          <div className="lg:col-span-6 w-full">
            <Reveal variant="left" className="w-full">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] font-bold text-phsOrange uppercase mb-4 block">
                READY TO BOOK?
              </span>
              <h2 className="font-display font-black text-phsInk text-4xl sm:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.0] uppercase mb-6">
                Available <span className="text-phsOrange">7</span>
                <br />
                <span className="text-phsOrange">days</span> a week.
              </h2>
              <p className="text-[15px] sm:text-base leading-relaxed text-gray-600 font-sans mb-8 max-w-md">
                Call us directly or fill out the form and we'll get back to you same day.
              </p>

              {/* Call Now Button */}
              <a
                href="tel:3854539428"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-phsOrange px-8 py-4 text-base font-bold text-white shadow-md hover:-translate-y-0.5 hover:bg-phsOrangeDark hover:shadow-lg active:translate-y-0 active:scale-95 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(385) 453-9428</span>
              </a>

              {/* Small details */}
              <div className="mt-8 space-y-2 font-sans text-xs text-gray-500 leading-relaxed">
                <p className="flex flex-wrap gap-x-1">
                  <span className="font-semibold text-phsInk">Hours:</span>
                  <span className="text-phsOrange/90">Mon – Fri 7AM – 8PM | Sat 7AM – 7PM | Sun 7AM – 6PM</span>
                </p>
                <p className="flex flex-wrap gap-x-1">
                  <span className="font-semibold text-phsInk">Areas:</span>
                  <span className="text-phsOrange/90">Ogden, Syracuse, Layton, Clearfield, Farmington, Clinton &amp; more</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-6 w-full">
            <Reveal variant="right" delay={150} className="w-full">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e6ded4] shadow-[0_20px_50px_-25px_rgba(22,38,61,0.35)] w-full">

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-phsOrange/10 text-phsOrange mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-xl text-phsInk mb-2 uppercase">Request Received!</h3>
                    <p className="text-[14px] text-gray-600 font-sans leading-relaxed">
                      Thank you. An expert technician or comfort advisor will contact you shortly to provide your free quote.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <h3 className="font-display font-black text-[18px] text-phsInk uppercase tracking-wide mb-6">
                      GET A FREE QUOTE
                    </h3>

                    {/* Name Input */}
                    <input
                      className={inputClass}
                      type="text"
                      placeholder="Your name"
                      required
                    />

                    {/* Phone Input */}
                    <input
                      className={inputClass}
                      type="tel"
                      placeholder="Phone number"
                      required
                    />

                    {/* Service Dropdown */}
                    <div className="relative">
                      <select
                        className={`${inputClass} appearance-none`}
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>Choose a service</option>
                        <option>Plumbing Services</option>
                        <option>Heating Services</option>
                        <option>Cooling Services</option>
                        <option>Water Heater Services</option>
                        <option>Drain Clearing &amp; Cleaning</option>
                        <option>Maintenance</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-gray-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-phsOrange hover:bg-phsOrangeDark text-white py-4 px-6 font-bold text-[15px] shadow-sm hover:shadow active:scale-98 transition-all duration-300 uppercase tracking-wider"
                    >
                      Request Free Quote
                    </button>

                    {/* Trust line */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-xs text-gray-500 font-sans">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#f3741b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                      <span>35+ years serving Northern Utah</span>
                    </div>
                  </form>
                )}

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
