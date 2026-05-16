import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import logoSrc from '../assets/logo.svg'

const LANGS = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'fr', label: 'FR', full: 'Français' },
  { code: 'ar', label: 'ع', full: 'العربية' },
]

export default function Navbar({ t, lang, setLang, darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (anchor) => {
    setMobileOpen(false)
    const el = document.getElementById(anchor)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment-50/95 dark:bg-ink-950/95 backdrop-blur-md shadow-sm border-b border-ink-100/60 dark:border-ink-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <img src={logoSrc} alt="AT Logo" className="h-8 w-auto animate-[spin_3s_linear_infinite]" />
          <span className="font-display text-base font-semibold text-ink-800 dark:text-parchment-100 tracking-wide hidden sm:block">
            {t.nav.logo}
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {t.nav.links.map((link, i) => (
            <li key={i}>
              <button
                onClick={() => handleNavClick(t.nav.anchors[i])}
                className="font-accent text-sm text-ink-600 dark:text-parchment-300 hover:text-ink-900 dark:hover:text-parchment-50 transition-colors tracking-wide relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-azure-400 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center border border-ink-200 dark:border-ink-700 divide-x divide-ink-200 dark:divide-ink-700 overflow-hidden">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1.5 text-xs font-mono transition-all duration-200 ${
                  lang === code
                    ? 'bg-ink-800 dark:bg-parchment-100 text-parchment-50 dark:text-ink-900'
                    : 'text-ink-500 dark:text-parchment-400 hover:bg-ink-100 dark:hover:bg-ink-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-ink-500 dark:text-parchment-400 hover:text-ink-800 dark:hover:text-parchment-100 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ink-600 dark:text-parchment-300"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-parchment-50 dark:bg-ink-950 border-t border-ink-100 dark:border-ink-800 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {t.nav.links.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => handleNavClick(t.nav.anchors[i])}
                  className="font-accent text-base text-ink-700 dark:text-parchment-200 hover:text-azure-500 transition-colors w-full text-start"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
