import { useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Pen, MessageSquare } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

function ShowroomCard({ sample, headers, lang }) {
  return (
    <article className="group border border-ink-100 dark:border-ink-800 overflow-hidden bg-white/60 dark:bg-ink-900/60 backdrop-blur-sm hover:border-azure-400/30 transition-colors duration-300">
      {/* Card Header */}
      <div className="border-b border-ink-100 dark:border-ink-800 px-6 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-base font-semibold text-ink-800 dark:text-parchment-100 italic">
            {sample.workTitle}
          </p>
          <p className="font-mono text-xs text-ink-400 dark:text-ink-500 mt-0.5">
            {sample.author}
          </p>
        </div>
        <span className="shrink-0 font-mono text-xs px-2.5 py-1 bg-azure-400/10 text-azure-500 dark:text-azure-400 border border-azure-400/20">
          {sample.direction}
        </span>
      </div>

      {/* Three Columns */}
      <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-ink-100 dark:divide-ink-800">
        {/* Column 1: Original */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={13} className="text-azure-400 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500">
              {headers[0]}
            </span>
          </div>
          <p
            className="font-body text-base leading-relaxed text-ink-700 dark:text-parchment-300 italic"
            dir={sample.original.dir}
            lang={sample.original.lang}
          >
            "{sample.original.text}"
          </p>
        </div>

        {/* Column 2: Arabic Translation */}
        <div className="p-6 bg-parchment-100/50 dark:bg-ink-800/30 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <Pen size={13} className="text-azure-400 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500">
              {headers[1]}
            </span>
          </div>
          <p
            className="font-arabic text-base leading-[2.2] text-ink-800 dark:text-parchment-100"
            dir="rtl"
            lang="ar"
            style={{ fontFamily: 'Tajawal, Amiri, serif' }}
          >
            «{sample.translation.text}»
          </p>
        </div>

        {/* Column 3: Translator's Note */}
        <div className="p-6 space-y-3 bg-ink-50/50 dark:bg-ink-900/80">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare size={13} className="text-azure-400 shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500">
              {headers[2]}
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {sample.note}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Showroom({ t, lang }) {
  const ref = useReveal()
  const [active, setActive] = useState(0)
  const samples = t.showroom.samples
  const total = samples.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  return (
    <section id="showroom" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            currentColor,
            currentColor 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="section-label">{t.showroom.label}</span>
              <h2 className="section-title mt-3 text-ink-900 dark:text-parchment-50">
                {t.showroom.title}
              </h2>
              <p className="mt-3 prose-literary max-w-xl">
                {t.showroom.subtitle}
              </p>
            </div>

            {/* Desktop nav arrows */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <button
                onClick={prev}
                className="p-3 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-parchment-400 hover:border-ink-500 dark:hover:border-parchment-300 hover:text-ink-800 dark:hover:text-parchment-100 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-mono text-sm text-ink-400 dark:text-ink-500 min-w-[50px] text-center">
                {active + 1} / {total}
              </span>
              <button
                onClick={next}
                className="p-3 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-parchment-400 hover:border-ink-500 dark:hover:border-parchment-300 hover:text-ink-800 dark:hover:text-parchment-100 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Column Headers (desktop only) */}
        <div className="reveal reveal-delay-1 hidden lg:grid lg:grid-cols-3 gap-px mb-2">
          {t.showroom.columnHeaders.map((h, i) => (
            <div key={i} className="px-6 pb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-300 dark:text-ink-600">
                {String(i + 1).padStart(2, '0')} — {h}
              </span>
            </div>
          ))}
        </div>

        {/* Active sample */}
        <div className="reveal reveal-delay-2">
          <ShowroomCard
            sample={samples[active]}
            headers={t.showroom.columnHeaders}
            lang={lang}
          />
        </div>

        {/* Dot navigation + mobile arrows */}
        <div className="reveal reveal-delay-3 flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="md:hidden p-2 border border-ink-200 dark:border-ink-700 text-ink-500"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {samples.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'bg-azure-400 w-8'
                    : 'bg-ink-200 dark:bg-ink-700 w-4 hover:bg-ink-300 dark:hover:bg-ink-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="md:hidden p-2 border border-ink-200 dark:border-ink-700 text-ink-500"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
