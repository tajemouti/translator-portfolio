import { useReveal } from '../hooks/useReveal'
import heroPhoto from '../assets/hero-photo.jpg'

export default function About({ t }) {
  const ref = useReveal()

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Vertical section rule */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink-200/50 dark:via-ink-700/50 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">
          {/* LEFT — Content */}
          <div className="space-y-10">
            <div className="reveal">
              <span className="section-label">{t.about.label}</span>
              <h2 className="section-title mt-3 text-ink-900 dark:text-parchment-50">
                {t.about.title}
              </h2>
            </div>

            {/* Intro */}
            <p className="reveal reveal-delay-1 font-display text-xl italic text-ink-600 dark:text-parchment-300 leading-relaxed border-s-2 border-azure-400 ps-6">
              {t.about.intro}
            </p>

            {/* Body paragraphs */}
            <div className="space-y-6">
              {t.about.body.map((para, i) => (
                <p
                  key={i}
                  className={`reveal reveal-delay-${i + 2} prose-literary`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-4 grid grid-cols-3 gap-6 pt-6 border-t border-ink-100 dark:border-ink-800">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <div
                    className="font-display text-4xl font-bold text-ink-900 dark:text-parchment-50"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {stat.number}
                  </div>
                  <div className="font-mono text-xs text-ink-400 dark:text-ink-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo + decorative card */}
          <div className="reveal reveal-delay-2">
            <div className="relative max-w-md mx-auto lg:max-w-full">
              <div className="overflow-hidden">
                <img
                  src={heroPhoto}
                  alt={t.about.portrait}
                  className="
                    w-full
                    h-[420px]
                    sm:h-[520px]
                    md:h-[650px]
                    object-cover
                    object-top
                    grayscale-[0.2]
                  "
                />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -end-4 w-24 h-24 border-b-2 border-e-2 border-azure-400/40 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
