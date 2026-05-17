// ============================================================
// TRANSLATIONS DICTIONARY — Ajrass Tajemouti Portfolio
// Languages: English (en) | French (fr) | Arabic (ar)
// ============================================================

export const translations = {
  en: {
    dir: "ltr",
    lang: "en",
    fontClass: "font-body",

    // --- NAV ---
    nav: {
      logo: "Ajrass Tajemouti",
      links: ["About", "Philosophy", "Showroom", "Journey", "Contact"],
      anchors: ["about", "philosophy", "showroom", "journey", "contact"],
      languageLabel: "Language",
    },

    // --- HERO ---
    hero: {
      tagline: "Literary Translator",
      headline: "Bridging Arabic, English & French Literature",
      subheadline: "Through Artistic and Cultural Translation",
      description:
        "Every word carries the weight of a world. I translate not only language but memory, rhythm, and cultural breath — preserving the author's soul across three literary traditions.",
      cta: "Explore My Work",
      ctaSecondary: "Download CV",
      languages: ["Arabic", "English", "French"],
      languageScript: ["العربية", "English", "Français"],
      award: "Translator of the Dorothy Hewett Award 2025 Winner",
      scrollHint: "Scroll to discover",
    },

    // --- ABOUT ---
    about: {
      label: "About",
      title: "The Translator's Mind",
      portrait: "Ajrass Tajemouti",
      intro:
        "My name is Ajrass Tajemouti. I am a trilingual literary translator based in Morocco, working at the intersection of Arabic, English, and French literary worlds.",
      body: [
        "I translated The Hair of the Pigeon by Mohamed Massoud Morsi — winner of the Dorothy Hewett Award 2025 — from English into Arabic. I am currently working on the Arabic translation of his second novel, The Palace of Angels.",
        "My mother tongue is Arabic. My literary education spans English and French traditions. This triangulation is not a technical skill — it is an artistic sensibility forged over decades of reading, listening, and inhabiting languages as living cultures.",
        "I believe translation is the most intimate form of reading. To translate a novel is to rewrite it from the inside — to feel every metaphor, test every idiom against cultural memory, and ask: what does this mean here, now, in Arabic?",
      ],
      stats: [
        { number: "3", label: "Literary Languages" },
        { number: "2+", label: "Novels Translated" },
        { number: "2025", label: "Award-Winning Work" },
      ],
    },

    // --- PHILOSOPHY ---
    philosophy: {
      label: "Methodology",
      title: "A Philosophy of Fidelity",
      subtitle: "Not word-for-word. Soul-for-soul.",
      pillars: [
        {
          icon: "Feather",
          title: "Voice Preservation",
          body:
            "The author's voice is sacred. I read a work three times before translating — once as a reader, once as a critic, once as a translator. By then, the voice lives in me, and I carry it into Arabic.",
        },
        {
          icon: "Globe",
          title: "Cultural Transposition",
          body:
            "Idioms, proverbs, and cultural references cannot be literally translated — they must be culturally transposed. I ask: what is the Arabic equivalent that produces the same emotional register?",
        },
        {
          icon: "Waves",
          title: "Rhythmic Fidelity",
          body:
            "Prose has a heartbeat. I preserve the rhythm of sentences — their breath, their pauses, their acceleration. Arabic syntax allows extraordinary musicality when treated with care.",
        },
        {
          icon: "Eye",
          title: "Invisible Craft",
          body:
            "The best translation is the one the reader forgets is a translation. My goal is invisibility — a text that reads as if the author wrote it in Arabic from the very first word.",
        },
      ],
      quote: {
        text: "Translation is not a bridge between two languages. It is the act of becoming the author, for a time, in another tongue.",
        attribution: "— Ajrass Tajemouti",
      },
    },

    // --- SHOWROOM ---
    showroom: {
      label: "Showroom",
      title: "The Art of Crossing Languages",
      subtitle: "Three columns — three dimensions of the translator's work",
      columnHeaders: ["Original", "Arabic Translation", "Translator's Note"],
      samples: [
        {
          id: 1,
          workTitle: "The Hair of the Pigeon",
          author: "Mohamed Massoud Morsi",
          direction: "English → Arabic",
          original: {
            lang: "en",
            dir: "ltr",
            text: "He had crossed the sea carrying nothing but the smell of his mother's bread and the weight of a name he could no longer pronounce without weeping.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كان قد عبَرَ البحر لا يحمل شيئاً سوى رائحة خبز أمّه، وثقل اسمٍ لم يعد يستطيع النطق به دون أن تغرورق عيناه بالدموع.",
          },
          note:
            "The phrase 'weight of a name' posed a profound challenge. In Arabic, names carry tribal, familial, and spiritual gravity that English names rarely do. I chose to preserve the word 'ثقل' (thiqal — heaviness, burden) without euphemism, because Morsi's prose never softens grief.",
        },
        {
          id: 2,
          workTitle: "The Palace of Angels",
          author: "Mohamed Massoud Morsi",
          direction: "English → Arabic",
          original: {
            lang: "en",
            dir: "ltr",
            text: "The city remembered everything. It kept its wounds in the mortar between stones, in the silence of courtyards that had once known children's laughter.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كانت المدينة تتذكّر كل شيء. تحفظ جروحها في ملاط ما بين الحجارة، في صمت الأفنية التي عرفت ذات يوم قهقهات الأطفال.",
          },
          note:
            "'Mortar between stones' is architectural but also deeply metaphorical. I rendered it with 'ملاط' (the binding paste in masonry) to honor both the literal image and the metaphor of memory binding the broken. 'قهقهات' was chosen over 'ضحك' to convey the specific lightness of children's laughter — a word with onomatopoeic joy.",
        },
        {
          id: 3,
          workTitle: "The Hair of the Pigeon",
          author: "Mohamed Massoud Morsi",
          direction: "English → Arabic",
          original: {
            lang: "en",
            dir: "ltr",
            text: "Love, he discovered, was not a feeling but a country — one you could be exiled from without ever leaving.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "اكتشف أن الحب ليس شعوراً، بل وطن — وطن يمكن أن تُنفى منه دون أن تغادره أبداً.",
          },
          note:
            "The word 'وطن' (watan — homeland/country) resonates in Arabic with layers of loss, belonging, and exile that the English 'country' only partially captures. Given the novel's context of Syrian displacement, this choice transforms a romantic metaphor into a political echo — which I believe Morsi intended. The compression of 'دون أن تغادره أبداً' preserves the paradox without editorial addition.",
        },
      ],
    },

    // --- JOURNEY / CV ---
    journey: {
      label: "Journey",
      title: "A Life in Languages",
      subtitle: "The path that led to the page",
      downloadCV: "Download Full CV",
      milestones: [
        {
          year: "2025",
          type: "achievement",
          title: "Dorothy Hewett Award — Translator",
          body: "Completed and published the Arabic translation of The Hair of the Pigeon by Mohamed Massoud Morsi, winner of Australia's Dorothy Hewett Award 2025.",
          highlight: true,
        },
        {
          year: "2025",
          type: "work",
          title: "The Palace of Angels — In Progress",
          body: "Currently engaged in translating Mohamed Massoud Morsi's second novel — a cross-border narrative exploring war, identity, and human relationships across the Mediterranean.",
          highlight: false,
        },
        {
          year: "2000–2002",
          type: "education",
          title: "Computer Management Diploma — PIGIER",
          body: "Formal academic training that built the analytical rigor and structured thinking that underpins my approach to complex literary texts.",
          highlight: false,
        },
      ],
      languages: {
        title: "Language Proficiencies",
        items: [
          { language: "Arabic", level: "Native", script: "العربية", pct: 100 },
          { language: "English", level: "Professional", script: "English", pct: 92 },
          { language: "French", level: "Professional", script: "Français", pct: 85 },
        ],
      },
      skills: {
        title: "Specializations",
        items: [
          "Literary Fiction Translation",
          "Cultural Adaptation & Localization",
          "RTL Editorial Formatting",
          "AI Text Evaluation",
          "Content Review",
          "Remote Collaboration",
        ],
      },
    },

    // --- CONTACT ---
    contact: {
      label: "Contact",
      title: "Begin a Collaboration",
      subtitle: "For publishing houses, authors, and literary agents",
      description:
        "I accept commissions for Arabic literary translation from English and French. Each project begins with a conversation.",
      form: {
        name: "Your Name",
        namePlaceholder: "Full name",
        email: "Email Address",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectPlaceholder: "Project inquiry, collaboration...",
        message: "Message",
        messagePlaceholder: "Tell me about your text, its language, length, and the translation direction you need...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent. I'll respond within 48 hours.",
      },
      social: {
        title: "Find Me Online",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
          { label: "GitHub", href: "https://github.com", icon: "Github" },
          { label: "Email", href: "mailto:tajemouti@gmail.com", icon: "Mail" },
        ],
      },
      info: {
        location: "Bouznika, Morocco",
        email: "tajemouti@gmail.com",
        phone: "+212 617-708-648",
        availability: "Available for new projects",
      },
    },

    // --- FOOTER ---
    footer: {
      tagline: "Literary Translator — Arabic · English · French",
      rights: "All rights reserved.",
    },
  },

  // ============================================================
  // FRENCH
  // ============================================================
  fr: {
    dir: "ltr",
    lang: "fr",
    fontClass: "font-body",

    nav: {
      logo: "Ajrass Tajemouti",
      links: ["À propos", "Philosophie", "Vitrine", "Parcours", "Contact"],
      anchors: ["about", "philosophy", "showroom", "journey", "contact"],
      languageLabel: "Langue",
    },

    hero: {
      tagline: "Traductreur Littéraire",
      headline: "Tisser les littératures arabe, anglaise et française",
      subheadline: "Par une traduction artistique et culturelle",
      description:
        "Chaque mot porte le poids d'un monde. Je traduis non seulement la langue, mais la mémoire, le rythme et le souffle culturel — préservant l'âme de l'auteur à travers trois traditions littéraires.",
      cta: "Découvrir mon travail",
      ctaSecondary: "Télécharger CV",
      languages: ["Arabe", "Anglais", "Français"],
      languageScript: ["العربية", "English", "Français"],
      award: "Traducteur de l'œuvre lauréate du Dorothy Hewett Award 2025",
      scrollHint: "Défiler pour découvrir",
    },

    about: {
      label: "À propos",
      title: "L'esprit du traducteur",
      portrait: "Ajrass Tajemouti",
      intro:
        "Je m'appelle Ajrass Tajemouti. Je suis traducteur littéraire trilingue basée au Maroc, travaillant à l'intersection des mondes littéraires arabe, anglais et français.",
      body: [
        "J'ai traduit Le Cheveu du pigeon de Mohamed Massoud Morsi — lauréat du Dorothy Hewett Award 2025 — de l'anglais vers l'arabe. Je travaille actuellement sur la traduction arabe de son deuxième roman, Le Palais des Anges.",
        "Ma langue maternelle est l'arabe. Ma formation littéraire embrasse les traditions anglaise et française. Cette triangulation n'est pas une compétence technique — c'est une sensibilité artistique forgée au fil de décennies de lecture, d'écoute et d'habitation des langues comme cultures vivantes.",
        "Je crois que la traduction est la forme la plus intime de la lecture. Traduire un roman, c'est le réécrire de l'intérieur — ressentir chaque métaphore, tester chaque idiome contre la mémoire culturelle, et se demander : que signifie cela ici, maintenant, en arabe ?",
      ],
      stats: [
        { number: "3", label: "Langues littéraires" },
        { number: "2+", label: "Romans traduits" },
        { number: "2025", label: "Œuvre primée" },
      ],
    },

    philosophy: {
      label: "Méthodologie",
      title: "Une philosophie de la fidélité",
      subtitle: "Non pas mot à mot. Âme à âme.",
      pillars: [
        {
          icon: "Feather",
          title: "Préservation de la voix",
          body:
            "La voix de l'auteur est sacrée. Je lis une œuvre trois fois avant de la traduire — une fois en lectrice, une fois en critique, une fois en traducteur. À ce stade, la voix vit en moi, et je la porte en arabe.",
        },
        {
          icon: "Globe",
          title: "Transposition culturelle",
          body:
            "Les expressions idiomatiques, les proverbes et les références culturelles ne peuvent être traduits littéralement — ils doivent être transposés culturellement. Je demande : quel est l'équivalent arabe qui produit le même registre émotionnel ?",
        },
        {
          icon: "Waves",
          title: "Fidélité rythmique",
          body:
            "La prose a un battement de cœur. Je préserve le rythme des phrases — leur souffle, leurs pauses, leur accélération. La syntaxe arabe permet une musicalité extraordinaire lorsqu'elle est traitée avec soin.",
        },
        {
          icon: "Eye",
          title: "L'art de l'invisibilité",
          body:
            "La meilleure traduction est celle que le lecteur oublie être une traduction. Mon objectif est l'invisibilité — un texte qui se lit comme si l'auteur l'avait écrit en arabe dès le premier mot.",
        },
      ],
      quote: {
        text: "La traduction n'est pas un pont entre deux langues. C'est l'acte de devenir l'auteur, pour un temps, dans une autre langue.",
        attribution: "— Ajrass Tajemouti",
      },
    },

    showroom: {
      label: "Vitrine",
      title: "L'art de traverser les langues",
      subtitle: "Trois colonnes — trois dimensions du travail du traducteur",
      columnHeaders: ["Original", "Traduction arabe", "Note du traducteur"],
      samples: [
        {
          id: 1,
          workTitle: "Le Cheveu du pigeon",
          author: "Mohamed Massoud Morsi",
          direction: "Anglais → Arabe",
          original: {
            lang: "en",
            dir: "ltr",
            text: "He had crossed the sea carrying nothing but the smell of his mother's bread and the weight of a name he could no longer pronounce without weeping.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كان قد عبَرَ البحر لا يحمل شيئاً سوى رائحة خبز أمّه، وثقل اسمٍ لم يعد يستطيع النطق به دون أن تغرورق عيناه بالدموع.",
          },
          note:
            "L'expression 'le poids d'un nom' posait un défi profond. En arabe, les noms portent une gravité tribale, familiale et spirituelle que les noms anglais n'ont que rarement. J'ai choisi de préserver le mot 'ثقل' sans euphémisme, car la prose de Morsi n'adoucit jamais le deuil.",
        },
        {
          id: 2,
          workTitle: "Le Palais des Anges",
          author: "Mohamed Massoud Morsi",
          direction: "Anglais → Arabe",
          original: {
            lang: "en",
            dir: "ltr",
            text: "The city remembered everything. It kept its wounds in the mortar between stones, in the silence of courtyards that had once known children's laughter.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كانت المدينة تتذكّر كل شيء. تحفظ جروحها في ملاط ما بين الحجارة، في صمت الأفنية التي عرفت ذات يوم قهقهات الأطفال.",
          },
          note:
            "'Le mortier entre les pierres' est architectural mais aussi profondément métaphorique. J'ai rendu cela avec 'ملاط' pour honorer à la fois l'image littérale et la métaphore de la mémoire reliant ce qui est brisé. 'قهقهات' a été choisi pour sa joie onomatopéique spécifique aux rires d'enfants.",
        },
        {
          id: 3,
          workTitle: "Le Cheveu du pigeon",
          author: "Mohamed Massoud Morsi",
          direction: "Anglais → Arabe",
          original: {
            lang: "en",
            dir: "ltr",
            text: "Love, he discovered, was not a feeling but a country — one you could be exiled from without ever leaving.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "اكتشف أن الحب ليس شعوراً، بل وطن — وطن يمكن أن تُنفى منه دون أن تغادره أبداً.",
          },
          note:
            "Le mot 'وطن' (watan — patrie) résonne en arabe avec des couches de perte, d'appartenance et d'exil que le 'pays' anglais ne capture qu'en partie. Étant donné le contexte de déplacement syrien du roman, ce choix transforme une métaphore romantique en écho politique.",
        },
      ],
    },

    journey: {
      label: "Parcours",
      title: "Une vie dans les langues",
      subtitle: "Le chemin qui mène à la page",
      downloadCV: "Télécharger le CV complet",
      milestones: [
        {
          year: "2025",
          type: "achievement",
          title: "Dorothy Hewett Award — Traductrice",
          body: "Traduction arabe achevée et publiée du Cheveu du pigeon de Mohamed Massoud Morsi, lauréat du Dorothy Hewett Award 2025 en Australie.",
          highlight: true,
        },
        {
          year: "2025",
          type: "work",
          title: "Le Palais des Anges — En cours",
          body: "Actuellement engagée dans la traduction du deuxième roman de Mohamed Massoud Morsi — un récit transfrontalier explorant la guerre, l'identité et les relations humaines à travers la Méditerranée.",
          highlight: false,
        },
        {
          year: "2000–2002",
          type: "education",
          title: "Diplôme en gestion informatique — PIGIER",
          body: "Formation académique formelle qui a construit la rigueur analytique et la pensée structurée qui sous-tendent mon approche des textes littéraires complexes.",
          highlight: false,
        },
      ],
      languages: {
        title: "Compétences linguistiques",
        items: [
          { language: "Arabe", level: "Langue maternelle", script: "العربية", pct: 100 },
          { language: "Anglais", level: "Professionnel", script: "English", pct: 92 },
          { language: "Français", level: "Professionnel", script: "Français", pct: 85 },
        ],
      },
      skills: {
        title: "Spécialisations",
        items: [
          "Traduction de fiction littéraire",
          "Adaptation & localisation culturelle",
          "Mise en page éditoriale RTL",
          "Évaluation de textes IA",
          "Révision de contenu",
          "Collaboration à distance",
        ],
      },
    },

    contact: {
      label: "Contact",
      title: "Commencer une collaboration",
      subtitle: "Pour les maisons d'édition, auteurs et agents littéraires",
      description:
        "J'accepte des commissions de traduction littéraire arabe depuis l'anglais et le français. Chaque projet commence par une conversation.",
      form: {
        name: "Votre nom",
        namePlaceholder: "Nom complet",
        email: "Adresse e-mail",
        emailPlaceholder: "votre@email.com",
        subject: "Sujet",
        subjectPlaceholder: "Demande de projet, collaboration...",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre texte, sa langue, sa longueur et la direction de traduction souhaitée...",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé. Je répondrai dans les 48 heures.",
      },
      social: {
        title: "Me retrouver en ligne",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
          { label: "GitHub", href: "https://github.com", icon: "Github" },
          { label: "E-mail", href: "mailto:tajemouti@gmail.com", icon: "Mail" },
        ],
      },
      info: {
        location: "Bouznika, Maroc",
        email: "tajemouti@gmail.com",
        phone: "+212 617-708-648",
        availability: "Disponible pour de nouveaux projets",
      },
    },

    footer: {
      tagline: "Traductreur Littéraire — Arabe · Anglais · Français",
      rights: "Tous droits réservés.",
    },
  },

  // ============================================================
  // ARABIC
  // ============================================================
  ar: {
    dir: "rtl",
    lang: "ar",
    fontClass: "font-arabic",

    nav: {
      logo: "أجرس التجمعتي",
      links: ["عن المترجم", "الفلسفة", "معرض الترجمة", "المسيرة", "التواصل"],
      anchors: ["about", "philosophy", "showroom", "journey", "contact"],
      languageLabel: "اللغة",
    },

    hero: {
      tagline: "مترجم أدبي",
      headline: "جسر بين الأدب العربي والإنجليزي والفرنسي",
      subheadline: "عبر ترجمة فنية وثقافية عميقة",
      description:
        "كل كلمة تحمل ثقل عالم بأكمله. أنا لا أترجم اللغة فحسب، بل أترجم الذاكرة والإيقاع والنَّفَس الثقافي — محافظةً على روح الكاتب عبر ثلاث تقاليد أدبية.",
      cta: "استكشف أعمالي",
      ctaSecondary: "تحميل السيرة الذاتية",
      languages: ["العربية", "الإنجليزية", "الفرنسية"],
      languageScript: ["العربية", "English", "Français"],
      award: "مترجمة الرواية الفائزة بجائزة دوروثي هيويت 2025",
      scrollHint: "مرّر للاستكشاف",
    },

    about: {
      label: "عن المترجم",
      title: "عقل المترجم",
      portrait: "أجرس التجمعتي",
      intro:
        "اسمي أجرس التجمعتي. مترجم أدبي ثلاثي اللغة مقيم في المغرب، أعمل على ملتقى العوالم الأدبية العربية والإنجليزية والفرنسية.",
      body: [
        "ترجمتُ رواية «زقاق الريش» للكاتب محمد مسعود مرسي — الفائز بجائزة دوروثي هيويت 2025 — من الإنجليزية إلى العربية. وأعمل حالياً على الترجمة العربية لروايته الثانية «قصر الملائكة».",
        "لغتي الأم هي العربية. وتشمل تكويني الأدبي التقاليدين الإنجليزي والفرنسي. هذا التثليث ليس مهارةً تقنية — بل هو حساسية فنية صُقِلَت عبر عقود من القراءة والإنصات والعيش في اللغات بوصفها ثقافات حية.",
        "أؤمن بأن الترجمة هي أكثر أشكال القراءة حميمية. ترجمة رواية هي إعادة كتابتها من الداخل — الشعور بكل استعارة، واختبار كل تعبير في مواجهة الذاكرة الثقافية، والتساؤل: ماذا يعني هذا هنا، الآن، بالعربية؟",
      ],
      stats: [
        { number: "٣", label: "لغات أدبية" },
        { number: "٢+", label: "روايات مترجمة" },
        { number: "٢٠٢٥", label: "عمل حائز على جائزة" },
      ],
    },

    philosophy: {
      label: "المنهجية",
      title: "فلسفة الأمانة",
      subtitle: "ليس كلمةً بكلمة. بل روحاً بروح.",
      pillars: [
        {
          icon: "Feather",
          title: "الحفاظ على الصوت",
          body:
            "صوت الكاتب مقدّس. أقرأ العمل ثلاث مرات قبل الترجمة — مرة كقارئة، ومرة كناقدة، ومرة كمترجمة. عندها يسكن الصوت فيّ، فأحمله إلى العربية.",
        },
        {
          icon: "Globe",
          title: "التحويل الثقافي",
          body:
            "التعابير والأمثال والمراجع الثقافية لا يمكن ترجمتها حرفياً — بل يجب نقلها ثقافياً. أسأل: ما المقابل العربي الذي يُنتج نفس السجل العاطفي؟",
        },
        {
          icon: "Waves",
          title: "الأمانة الإيقاعية",
          body:
            "للنثر نبضة قلب. أحافظ على إيقاع الجمل — نَفَسها وتوقفاتها وتسارعها. تتيح التركيبة النحوية العربية موسيقية استثنائية حين تُعامَل بعناية.",
        },
        {
          icon: "Eye",
          title: "فن الاختفاء",
          body:
            "أفضل ترجمة هي تلك التي ينسى القارئ أنها ترجمة. هدفي هو الاختفاء — نص يُقرأ كما لو أن الكاتب قد كتبه بالعربية منذ الكلمة الأولى.",
        },
      ],
      quote: {
        text: "الترجمة ليست جسراً بين لغتين. إنها فعل التحوّل إلى الكاتب، لبعض الوقت، في لسان آخر.",
        attribution: "— أجرس التجمعتي",
      },
    },

    showroom: {
      label: "معرض الترجمة",
      title: "فن عبور اللغات",
      subtitle: "ثلاثة أعمدة — ثلاثة أبعاد لعمل المترجم",
      columnHeaders: ["النص الأصلي", "الترجمة العربية", "ملاحظة المترجمة"],
      samples: [
        {
          id: 1,
          workTitle: "شعرة الحمامة",
          author: "محمد مسعود مرسي",
          direction: "إنجليزي → عربي",
          original: {
            lang: "en",
            dir: "ltr",
            text: "He had crossed the sea carrying nothing but the smell of his mother's bread and the weight of a name he could no longer pronounce without weeping.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كان قد عبَرَ البحر لا يحمل شيئاً سوى رائحة خبز أمّه، وثقل اسمٍ لم يعد يستطيع النطق به دون أن تغرورق عيناه بالدموع.",
          },
          note:
            "شكّلت عبارة «ثقل الاسم» تحدياً عميقاً. فالأسماء في العربية تحمل ثقلاً قبلياً وعائلياً وروحياً نادراً ما تحمله الأسماء الإنجليزية. اخترتُ الحفاظ على كلمة «ثقل» دون مواربة، لأن نثر مرسي لا يُلطّف الحزن أبداً.",
        },
        {
          id: 2,
          workTitle: "قصر الملائكة",
          author: "محمد مسعود مرسي",
          direction: "إنجليزي → عربي",
          original: {
            lang: "en",
            dir: "ltr",
            text: "The city remembered everything. It kept its wounds in the mortar between stones, in the silence of courtyards that had once known children's laughter.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "كانت المدينة تتذكّر كل شيء. تحفظ جروحها في ملاط ما بين الحجارة، في صمت الأفنية التي عرفت ذات يوم قهقهات الأطفال.",
          },
          note:
            "«الملاط بين الحجارة» معماريٌّ لكنه استعاري في العمق. اخترتُ «ملاط» لأكرم الصورة الحرفية ومجاز الذاكرة التي تربط المكسور. وقد آثرتُ «قهقهات» على «ضحك» لما تحمله من بهجة صوتية خاصة بضحك الأطفال.",
        },
        {
          id: 3,
          workTitle: "زقاق الريش",
          author: "محمد مسعود مرسي",
          direction: "إنجليزي → عربي",
          original: {
            lang: "en",
            dir: "ltr",
            text: "Love, he discovered, was not a feeling but a country — one you could be exiled from without ever leaving.",
          },
          translation: {
            lang: "ar",
            dir: "rtl",
            text: "اكتشف أن الحب ليس شعوراً، بل وطن — وطن يمكن أن تُنفى منه دون أن تغادره أبداً.",
          },
          note:
            "تتردّد كلمة «وطن» في العربية بطبقات من الفقد والانتماء والمنفى لا يُحاكيها «البلد» الإنجليزي إلا جزئياً. ونظراً لسياق الرواية المتعلق بالنزوح السوري، يحوّل هذا الاختيار الاستعارة الرومانسية إلى صدى سياسي — وهو ما أعتقد أن مرسي أراده.",
        },
      ],
    },

    journey: {
      label: "المسيرة",
      title: "حياة في اللغات",
      subtitle: "الطريق الذي أفضى إلى الصفحة",
      downloadCV: "تحميل السيرة الذاتية الكاملة",
      milestones: [
        {
          year: "٢٠٢٥",
          type: "achievement",
          title: "جائزة دوروثي هيويت — مترجم",
          body: "أتممتُ ونشرتُ الترجمة العربية لرواية «شعرة الحمامة» لمحمد مسعود مرسي، الفائز بجائزة دوروثي هيويت 2025 في أستراليا.",
          highlight: true,
        },
        {
          year: "٢٠٢٥",
          type: "work",
          title: "قصر الملائكة — قيد الإنجاز",
          body: "أعمل حالياً على ترجمة الرواية الثانية لمحمد مسعود مرسي — رواية عابرة للحدود تستكشف الحرب والهوية والعلاقات الإنسانية عبر المتوسط.",
          highlight: false,
        },
        {
          year: "٢٠٠٠–٢٠٠٢",
          type: "education",
          title: "دبلوم إدارة الحاسوب — PIGIER",
          body: "تكوين أكاديمي رسمي أرسى الصرامة التحليلية والتفكير المنهجي اللذين يدعمان مقاربتي للنصوص الأدبية المعقدة.",
          highlight: false,
        },
      ],
      languages: {
        title: "الكفاءات اللغوية",
        items: [
          { language: "العربية", level: "لغة أم", script: "العربية", pct: 100 },
          { language: "الإنجليزية", level: "احترافي", script: "English", pct: 92 },
          { language: "الفرنسية", level: "احترافي", script: "Français", pct: 85 },
        ],
      },
      skills: {
        title: "التخصصات",
        items: [
          "ترجمة الرواية الأدبية",
          "التكيّف والتوطين الثقافي",
          "التنسيق التحريري RTL",
          "تقييم النصوص بالذكاء الاصطناعي",
          "مراجعة المحتوى",
          "التعاون عن بُعد",
        ],
      },
    },

    contact: {
      label: "التواصل",
      title: "ابدأ تعاوناً",
      subtitle: "لدور النشر والمؤلفين والوكلاء الأدبيين",
      description:
        "أقبل طلبات الترجمة الأدبية إلى العربية من الإنجليزية والفرنسية. كل مشروع يبدأ بحوار.",
      form: {
        name: "اسمك",
        namePlaceholder: "الاسم الكامل",
        email: "البريد الإلكتروني",
        emailPlaceholder: "بريدك@الالكتروني.com",
        subject: "الموضوع",
        subjectPlaceholder: "استفسار عن مشروع، تعاون...",
        message: "الرسالة",
        messagePlaceholder: "أخبرني عن نصّك، لغته، طوله، واتجاه الترجمة المطلوب...",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال...",
        success: "تم إرسال الرسالة. سأردّ في غضون ٤٨ ساعة.",
      },
      social: {
        title: "تجدني على الإنترنت",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
          { label: "GitHub", href: "https://github.com", icon: "Github" },
          { label: "البريد", href: "mailto:tajemouti@gmail.com", icon: "Mail" },
        ],
      },
      info: {
        location: "بوزنيقة، المغرب",
        email: "tajemouti@gmail.com",
        phone: "+212 617-708-648",
        availability: "متاحة لمشاريع جديدة",
      },
    },

    footer: {
      tagline: "مترجمة أدبية — العربية · الإنجليزية · الفرنسية",
      rights: "جميع الحقوق محفوظة.",
    },
  },
}
