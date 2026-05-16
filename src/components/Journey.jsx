import { Star, Briefcase, GraduationCap, Download } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const TYPE_ICONS = {
  achievement: Star,
  work: Briefcase,
  education: GraduationCap,
}

const TYPE_COLORS = {
  achievement: 'text-amber-500 border-amber-400/30 bg-amber-400/5',
  work: 'text-azure-500 border-azure-400/30 bg-azure-400/5 dark:text-azure-400',
  education: 'text-ink-500 border-ink-300/30 bg-ink-100/50 dark:text-ink-400 dark:bg-ink-800/30',
}

export default function Journey({ t }) {
  const ref = useReveal()

  return (
    <section
      id="journey"
      ref={ref}
      className="py-28 bg-parchment-100/60 dark:bg-ink-900/60 relative overflow-hidden"
    >
      {/* Decorative vertical timeline rule (absolute, full height) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink-200/60 dark:bg-ink-700/40 hidden lg:block transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="section-label">{t.journey.label}</span>
          <h2 className="section-title mt-3 text-ink-900 dark:text-parchment-50">
            {t.journey.title}
          </h2>
          <p className="mt-3 font-display text-xl italic text-ink-400 dark:text-ink-500">
            {t.journey.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-8 lg:gap-0">
          {/* LEFT col — Timeline */}
          <div className="lg:pe-12 space-y-8">
            {t.journey.milestones.map((item, i) => {
              const Icon = TYPE_ICONS[item.type] || Briefcase
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} relative p-6 border ${
                    item.highlight
                      ? 'border-amber-400/40 bg-amber-50/60 dark:bg-amber-900/10'
                      : 'border-ink-200 dark:border-ink-700 bg-white/60 dark:bg-ink-900/40'
                  }`}
                >
                  {item.highlight && (
                    <div className="absolute top-0 start-0 end-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex p-2 border ${TYPE_COLORS[item.type]} shrink-0 mt-0.5`}>
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <span className="font-mono text-xs text-azure-500 dark:text-azure-400 tracking-widest">
                          {item.year}
                        </span>
                        {item.highlight && (
                          <span className="font-mono text-[10px] px-2 py-0.5 bg-amber-400/20 text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                            Award
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-ink-800 dark:text-parchment-100 leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CENTER — timeline dot (visual only, hidden on mobile) */}
          <div className="hidden lg:flex flex-col items-center gap-6 pt-4">
            {t.journey.milestones.map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1 mt-8">
                <div className="w-3 h-3 rounded-full border-2 border-azure-400 bg-parchment-50 dark:bg-ink-950" />
              </div>
            ))}
          </div>

          {/* RIGHT col — Skills & Languages */}
          <div className="lg:ps-12 space-y-10">
            {/* Language Bars */}
            <div className="reveal reveal-delay-2">
              <h3 className="font-display text-xl font-semibold text-ink-800 dark:text-parchment-100 mb-6">
                {t.journey.languages.title}
              </h3>
              <div className="space-y-5">
                {t.journey.languages.items.map((lang, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-body text-sm font-medium text-ink-700 dark:text-parchment-200"
                        >
                          {lang.language}
                        </span>
                        <span
                          className="font-arabic text-base text-ink-400 dark:text-ink-500"
                          dir={lang.language === 'Arabic' || lang.language === 'العربية' ? 'rtl' : 'ltr'}
                          style={{ fontFamily: 'Tajawal, serif' }}
                        >
                          {lang.script}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-ink-100 dark:bg-ink-800 overflow-hidden">
                      <div
                        className="h-full bg-azure-400 transition-all duration-1000"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="reveal reveal-delay-3">
              <h3 className="font-display text-xl font-semibold text-ink-800 dark:text-parchment-100 mb-6">
                {t.journey.skills.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.journey.skills.items.map((skill, i) => (
                  <span
                    key={i}
                    className="font-body text-sm px-3 py-1.5 border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-parchment-300 hover:border-azure-400/50 hover:text-azure-600 dark:hover:text-azure-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="reveal reveal-delay-4">
              <a
                href="#"
                className="btn-primary inline-flex"
                onClick={(e) => e.preventDefault()}
              >
                <Download size={15} />
                {t.journey.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
