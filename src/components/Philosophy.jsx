import { Feather, Globe, Waves, Eye, Quote } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const ICONS = { Feather, Globe, Waves, Eye }

export default function Philosophy({ t }) {
  const ref = useReveal()

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-28 bg-ink-900 dark:bg-ink-950 text-parchment-50 relative overflow-hidden"
    >
      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-parchment-50/[0.02] font-display font-black leading-none"
          style={{ fontSize: 'clamp(80px, 15vw, 200px)', letterSpacing: '-0.05em' }}
        >
          TRANSLATION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-azure-400">
            {t.philosophy.label}
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-parchment-50 leading-tight">
            {t.philosophy.title}
          </h2>
          <p className="mt-4 font-display text-xl italic text-ink-400">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-ink-700/50">
          {t.philosophy.pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon] || Feather
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} bg-ink-900 dark:bg-ink-950 p-8 group hover:bg-ink-800 dark:hover:bg-ink-900 transition-colors duration-300`}
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 border border-azure-400/20 group-hover:border-azure-400/40 transition-colors">
                    <Icon size={20} className="text-azure-400" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-parchment-100 mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-body text-base text-ink-300 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pull Quote */}
        <div className="reveal reveal-delay-4 mt-20 max-w-3xl mx-auto text-center">
          <div className="relative">
            <Quote
              size={48}
              className="text-azure-400/20 absolute -top-4 -start-4 transform -scale-x-100"
              aria-hidden="true"
            />
            <blockquote className="font-display text-2xl md:text-3xl italic font-light text-parchment-200 leading-relaxed px-8">
              {t.philosophy.quote.text}
            </blockquote>
            <div className="mt-6 font-mono text-sm text-azure-400 tracking-widest">
              {t.philosophy.quote.attribution}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
