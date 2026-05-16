import { useEffect, useState } from 'react'
import { ChevronDown, Award } from 'lucide-react'
import heroPhoto from '../assets/hero-photo.jpg'

export default function Hero({ t }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleScroll = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large decorative Arabic/literary character watermark */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-8 opacity-[0.035] dark:opacity-[0.05] select-none">
          <span
            style={{
              fontFamily: 'Amiri, serif',
              fontSize: 'clamp(300px, 40vw, 600px)',
              color: 'currentColor',
              lineHeight: 1,
              display: 'block',
            }}
          >
            ت
          </span>
        </div>

        {/* Horizontal ink lines */}
        <div className="absolute top-[20%] left-0 w-24 h-px bg-azure-400/40" />
        <div className="absolute top-[22%] left-0 w-12 h-px bg-azure-400/20" />
        <div className="absolute bottom-[25%] right-0 w-32 h-px bg-ink-300/30 dark:bg-ink-600/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* LEFT — Text Content */}
          <div className="space-y-8">
            {/* Award badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-2 border border-azure-400/30 bg-azure-400/5 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Award size={14} className="text-azure-400 shrink-0" />
              <span className="font-mono text-xs tracking-widest text-azure-500 dark:text-azure-400 uppercase">
                {t.hero.award}
              </span>
            </div>

            {/* Tagline */}
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="section-label">{t.hero.tagline}</span>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-ink-900 dark:text-parchment-50 leading-[1.1] tracking-tight text-balance">
                {t.hero.headline}
              </h1>
              <p className="mt-4 font-display text-2xl md:text-3xl font-light italic text-ink-400 dark:text-ink-400">
                {t.hero.subheadline}
              </p>
            </div>

            {/* Description */}
            <p
              className={`prose-literary max-w-xl transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {t.hero.description}
            </p>

            {/* Language Badges */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {t.hero.languageScript.map((script, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 border border-ink-200 dark:border-ink-700 bg-parchment-100/60 dark:bg-ink-900/40"
                >
                  <span
                    className={`text-base font-medium text-ink-700 dark:text-parchment-200 ${
                      i === 0 ? 'font-arabic' : 'font-body'
                    }`}
                    dir={i === 0 ? 'rtl' : 'ltr'}
                  >
                    {script}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-azure-400" />
                  <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                    {t.hero.languages[i]}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById('showroom')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('journey')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            } hidden lg:block`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Decorative frame offset */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-azure-400/25" />
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 border border-ink-200/40 dark:border-ink-700/40" />

            <div className="relative overflow-hidden">
              <img
                src={heroPhoto}
                alt={t.about.portrait}
                className="w-full h-[540px] object-cover object-top grayscale-[0.15] contrast-105"
              />
              {/* Ink overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-xl font-semibold text-parchment-50 drop-shadow-lg">
                  {t.about.portrait}
                </p>
                <p className="font-mono text-xs text-parchment-200/80 mt-1 tracking-widest uppercase">
                  {t.hero.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <span className="font-mono text-xs text-ink-400 dark:text-ink-600 tracking-widest uppercase">
            {t.hero.scrollHint}
          </span>
          <button
            onClick={handleScroll}
            className="animate-bounce text-ink-300 dark:text-ink-600 hover:text-azure-400 transition-colors"
          >
            <ChevronDown size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
