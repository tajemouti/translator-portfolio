import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const ICON_MAP = { Linkedin, Github, Mail }

export default function Contact({ t }) {
  const ref = useReveal()
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const f = t.contact.form
  const info = t.contact.info

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-azure-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title mt-3 text-ink-900 dark:text-parchment-50">
            {t.contact.title}
          </h2>
          <p className="mt-2 font-mono text-xs text-ink-400 dark:text-ink-500 uppercase tracking-widest">
            {t.contact.subtitle}
          </p>
          <p className="mt-5 prose-literary max-w-lg mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
          {/* LEFT — Form */}
          <div className="reveal reveal-delay-1">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 border border-azure-400/30 bg-azure-400/5">
                <CheckCircle size={40} className="text-azure-400" />
                <p className="font-display text-lg text-ink-700 dark:text-parchment-200 text-center">
                  {f.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                      {f.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={f.namePlaceholder}
                      className="w-full border border-ink-200 dark:border-ink-700 bg-white/80 dark:bg-ink-900/60 text-ink-800 dark:text-parchment-100 px-4 py-3 font-body text-base placeholder:text-ink-300 dark:placeholder:text-ink-600 focus:outline-none focus:border-azure-400 dark:focus:border-azure-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                      {f.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={f.emailPlaceholder}
                      className="w-full border border-ink-200 dark:border-ink-700 bg-white/80 dark:bg-ink-900/60 text-ink-800 dark:text-parchment-100 px-4 py-3 font-body text-base placeholder:text-ink-300 dark:placeholder:text-ink-600 focus:outline-none focus:border-azure-400 dark:focus:border-azure-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                    {f.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={f.subjectPlaceholder}
                    className="w-full border border-ink-200 dark:border-ink-700 bg-white/80 dark:bg-ink-900/60 text-ink-800 dark:text-parchment-100 px-4 py-3 font-body text-base placeholder:text-ink-300 dark:placeholder:text-ink-600 focus:outline-none focus:border-azure-400 dark:focus:border-azure-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                    {f.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={f.messagePlaceholder}
                    className="w-full border border-ink-200 dark:border-ink-700 bg-white/80 dark:bg-ink-900/60 text-ink-800 dark:text-parchment-100 px-4 py-3 font-body text-base placeholder:text-ink-300 dark:placeholder:text-ink-600 focus:outline-none focus:border-azure-400 dark:focus:border-azure-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                  {status === 'sending' ? f.sending : f.submit}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — Info */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div className="reveal reveal-delay-2 space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-ink-200 dark:border-ink-700 text-azure-400 shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500 mb-0.5">Location</p>
                  <p className="font-body text-ink-700 dark:text-parchment-200">{info.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-ink-200 dark:border-ink-700 text-azure-400 shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500 mb-0.5">Email</p>
                  <a
                    href={`mailto:${info.email}`}
                    className="font-body text-ink-700 dark:text-parchment-200 hover:text-azure-500 dark:hover:text-azure-400 transition-colors"
                  >
                    {info.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 border border-ink-200 dark:border-ink-700 text-azure-400 shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500 mb-0.5">Phone</p>
                  <p className="font-body text-ink-700 dark:text-parchment-200">{info.phone}</p>
                </div>
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  {info.availability}
                </span>
              </div>
            </div>

            <div className="ink-divider" />

            {/* Social Links */}
            <div className="reveal reveal-delay-3 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-400 dark:text-ink-500">
                {t.contact.social.title}
              </h3>
              <div className="space-y-3">
                {t.contact.social.links.map((link, i) => {
                  const Icon = ICON_MAP[link.icon] || ExternalLink
                  return (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-2.5 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-parchment-400 group-hover:border-azure-400 group-hover:text-azure-400 dark:group-hover:text-azure-400 transition-all">
                        <Icon size={15} />
                      </div>
                      <span className="font-accent text-sm text-ink-600 dark:text-parchment-300 group-hover:text-azure-500 dark:group-hover:text-azure-400 transition-colors">
                        {link.label}
                      </span>
                      <ExternalLink size={11} className="text-ink-300 dark:text-ink-600 group-hover:text-azure-400/60 transition-colors ms-auto" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
