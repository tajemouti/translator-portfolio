import { useState, useEffect } from 'react'
import { translations } from './translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Showroom from './components/Showroom'
import Journey from './components/Journey'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  // Apply dark class to <html>
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [darkMode])

  // Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang')
    if (saved && translations[saved]) setLang(saved)

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  const handleSetLang = (code) => {
    setLang(code)
    localStorage.setItem('portfolio-lang', code)
  }

  const t = translations[lang]

  return (
    <div
      dir={t.dir}
      lang={t.lang}
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark' : ''
      } ${t.dir === 'rtl' ? 'font-arabic' : 'font-body'}`}
    >
      <Navbar
        t={t}
        lang={lang}
        setLang={handleSetLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero t={t} />

        {/* Ink divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="ink-divider" />
        </div>

        <About t={t} />

        <Philosophy t={t} />

        <Showroom t={t} lang={lang} />

        <Journey t={t} />

        {/* Ink divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="ink-divider" />
        </div>

        <Recommendations t={t} />

        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  )
}
