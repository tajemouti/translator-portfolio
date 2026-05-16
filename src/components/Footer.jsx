import logoSrc from '../assets/logo.svg'

export default function Footer({ t }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-100 dark:border-ink-800 py-12 bg-ink-900 dark:bg-ink-950 text-parchment-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="AT" className="h-6 w-auto opacity-60 invert" />
          <span className="font-display text-sm text-parchment-400">
            {t.nav.logo}
          </span>
        </div>
        <p className="font-mono text-xs text-ink-500 tracking-widest uppercase text-center">
          {t.footer.tagline}
        </p>
        <p className="font-mono text-xs text-ink-600 tracking-wider">
          © {year} — {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
