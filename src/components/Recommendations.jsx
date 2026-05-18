import { useReveal } from '../hooks/useReveal'
import mohammedImg from '../assets/Mohammed_Massoud_Morsi.jpg'
import salsabeelImg from '../assets/Salsabeel_Hamdan.jpg'

// Data is hardcoded here as it's specific image/person data
const RECOMMENDATIONS = [
  {
    id: 1,
    name: 'Mohammmed Massoud Morsi',
    nameAr: 'محمد مسعود مرسي',
    role: {
      en: 'Journalist, Photographer & Writer — Living In The Strange',
      fr: 'Journaliste, Photographe & Écrivain — Living In The Strange',
      ar: 'صحفي، مصوّر وكاتب — Living In The Strange',
    },
    relation: {
      en: 'Client · May 2026',
      fr: 'Client · Mai 2026',
      ar: 'عميل · مايو 2026',
    },
    quote: {
      en: `I highly recommend Ajrass for translating from the English to the Arabic. As an Arabic speaker myself, I wrote the novel in English as I recognised the need to be able to master the written language in a way I wasn't able to. Reading Ajrass' work is evidence of how a translator is able to convey not just words but also emotion across two very different languages. The Hair of The Pigeon, in Arabic The Alley of Feathers, زقاق الريش, is an award winning novel published in 2026 by UWAP in Australia and Godine in the USA.`,
      fr: `Je recommande vivement Ajrass pour la traduction de l'anglais vers l'arabe. En tant qu'arabophone, j'ai écrit le roman en anglais car je reconnaissais le besoin de maîtriser la langue écrite d'une manière qui m'échappait. Lire le travail d'Ajrass est la preuve qu'un traducteur peut transmettre non seulement des mots, mais aussi des émotions entre deux langues très différentes.`,
      ar: 'أوصي بشدة أجرس لترجمة النصوص من الإنجليزية إلى العربية. بوصفي متحدثاً عربياً، كتبتُ الرواية بالإنجليزية لأنني أدركتُ الحاجة إلى إتقان اللغة المكتوبة بطريقة لم أكن قادراً عليها. قراءة عمل أجرس دليلٌ على قدرة المترجم على نقل ليس الكلمات فحسب، بل المشاعر أيضاً عبر لغتين مختلفتين تماماً. رواية «شعرة الحمامة»، بعنوانها العربي «زقاق الريش»، رواية حائزة على جائزة نُشرت عام 2026 عن دار UWAP في أستراليا ودار Godine في الولايات المتحدة.',
    },
    image: mohammedImg,
    linkedin: 'https://linkedin.com/in/morsiman',
  },
  {
    id: 2,
    name: 'Salsabeel Hamdan',
    nameAr: 'سلسبيل حمدان',
    role: {
      en: 'Bilingual Content Writer · Content Strategist · SaaS Product Localization · UX Writer',
      fr: 'Rédactrice bilingue · Stratège de contenu · Localisation SaaS · UX Writer',
      ar: 'كاتبة محتوى ثنائية اللغة · استراتيجية المحتوى · توطين منتجات SaaS · كاتبة UX',
    },
    relation: {
      en: 'Mentor · May 2026',
      fr: 'Mentor · Mai 2026',
      ar: 'مرشدة · مايو 2026',
    },
    quote: {
      en: `I worked with Ajrass through my professional network as a literary and audiovisual translator working across English, Arabic, and French, and I later began confidently recommending him for literary and documentary translation work. What stands out in his work is his accuracy, patience, and his focus on translation and localization that conveys meaning and intent rather than literal, word-for-word rendering. This makes his work feel natural, faithful, and culturally appropriate in both literary and audiovisual contexts. Beyond technical skill, Ajrass is collaborative, receptive to feedback, and consistent in his delivery. He is reliable to work with and approaches projects with care rather than speed-driven compromise. His work is especially well suited to publishing and literary arts, audiovisual and media production, NGOs and humanitarian aid organizations, human rights advocacy organizations, as well as cultural institutions and foundations. I would warmly recommend Ajrass for literary, audiovisual, and documentary translation across English, Arabic, and French.`,
      fr: `J'ai travaillé avec Ajrass via mon réseau professionnel en tant que traducteur littéraire et audiovisuel travaillant en anglais, arabe et français, et j'ai commencé à le recommander avec confiance pour des travaux de traduction littéraire et documentaire. Ce qui se distingue dans son travail, c'est sa précision, sa patience et son souci de traduire le sens et l'intention plutôt qu'une restitution mot à mot. Cela rend son travail naturel, fidèle et culturellement approprié. Je recommande chaleureusement Ajrass pour la traduction littéraire, audiovisuelle et documentaire en anglais, arabe et français.`,
      ar: 'تعاملتُ مع أجرس عبر شبكتي المهنية بوصفه مترجماً أدبياً وسمعياً بصرياً يعمل بين الإنجليزية والعربية والفرنسية، ثم بدأتُ لاحقاً بالتوصية به بثقة كاملة لأعمال الترجمة الأدبية والوثائقية. ما يميّز عمله هو دقّته وصبره وتركيزه على الترجمة والتوطين الذي ينقل المعنى والقصد لا مجرد الكلمات حرفياً، مما يجعل نصوصه تبدو طبيعية وأمينة ومناسبة ثقافياً. وراء المهارة التقنية، أجرس شخص تعاوني ومنفتح على التغذية الراجعة وثابت في تسليم عمله. أوصي بدفء أجرس لأعمال الترجمة الأدبية والسمعية البصرية والوثائقية بين العربية والإنجليزية والفرنسية.',
    },
    image: salsabeelImg,
    linkedin: 'https://linkedin.com/in/salsabeel-hamdan-2460a318a/',
  },
]

export default function Recommendations({ t }) {
  const ref = useReveal()
  const lang = t.lang || 'en'

  const labels = {
    en: {
      label: 'Recommendations',
      title: 'Voices of Trust',
      subtitle: 'What those I have worked with say',
      via: 'via LinkedIn',
    },
    fr: {
      label: 'Recommandations',
      title: 'Des Voix de Confiance',
      subtitle: `Ce que disent ceux avec qui j'ai travaillé`,
      via: 'via LinkedIn',
    },
    ar: {
      label: 'التوصيات',
      title: 'أصوات الثقة',
      subtitle: 'ما يقوله من تعاملتُ معهم',
      via: 'عبر LinkedIn',
    },
  }

  const l = labels[lang] || labels.en

  return (
    <section
      id="recommendations"
      ref={ref}
      className="py-28 bg-white/40 dark:bg-ink-950/60 relative overflow-hidden"
    >
      {/* Soft background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="section-label">{l.label}</span>
          <h2 className="section-title mt-3 text-ink-900 dark:text-parchment-50">
            {l.title}
          </h2>
          <p className="mt-3 font-display text-xl italic text-ink-400 dark:text-ink-500">
            {l.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {RECOMMENDATIONS.map((rec, i) => (
            <div
              key={rec.id}
              className={`reveal reveal-delay-${i + 1} relative group`}
            >
              {/* Card */}
              <div className="relative bg-parchment-50/80 dark:bg-ink-900/60 border border-ink-200/70 dark:border-ink-700/50 p-8 md:p-10 h-full flex flex-col transition-shadow duration-300 hover:shadow-xl dark:hover:shadow-ink-900/60">

                {/* Top accent line */}
                <div className="absolute top-0 start-0 end-0 h-0.5 bg-gradient-to-r from-transparent via-azure-400/60 to-transparent" />

                {/* Large decorative quote mark */}
                <div
                  className="absolute top-6 end-8 text-7xl leading-none text-azure-200/40 dark:text-azure-900/40 select-none pointer-events-none"
                  style={{ fontFamily: "'Caveat', cursive", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Quote text — handwriting font */}
                <blockquote
                  className="flex-1 mb-8 relative z-10"
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: lang === 'ar' ? '1.25rem' : '1.2rem',
                    lineHeight: 1.65,
                    color: 'inherit',
                  }}
                >
                  <p className="text-ink-700 dark:text-parchment-200 leading-relaxed">
                    {rec.quote[lang] || rec.quote.en}
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="ink-divider my-0 mb-6" />

                {/* Author row */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-azure-400/30 dark:border-azure-600/30 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* LinkedIn badge */}
                    <a
                      href={rec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-1 -end-1 w-5 h-5 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      title="LinkedIn"
                      aria-label="LinkedIn profile"
                    >
                      <svg
                        className="w-3 h-3 fill-white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>

                  {/* Name & role */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="font-display font-semibold text-ink-800 dark:text-parchment-100 leading-tight truncate"
                      style={{ fontSize: '1rem' }}
                    >
                      {lang === 'ar' ? rec.nameAr : rec.name}
                    </p>
                    <p className="font-body text-xs text-ink-500 dark:text-ink-400 mt-0.5 line-clamp-2 leading-snug">
                      {rec.role[lang] || rec.role.en}
                    </p>
                    <p className="font-mono text-[10px] text-azure-500 dark:text-azure-400 mt-1 tracking-wider uppercase">
                      {rec.relation[lang] || rec.relation.en}
                    </p>
                  </div>
                </div>

                {/* Subtle corner ornament */}
                <div className="absolute bottom-4 end-6 text-ink-200/30 dark:text-ink-700/30 select-none pointer-events-none font-display text-2xl italic">
                  ✦
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load Caveat handwriting font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');
      `}</style>
    </section>
  )
}
