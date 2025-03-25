type TranslationKey = string
type LanguageCode = string
type TranslationValue = string

// Translation dictionary
const translations: Record<LanguageCode, Record<TranslationKey, TranslationValue>> = {
  en: {
    // English translations (default)
    "app.title": "Nigerian Constitution Hub",
    "app.description": "Explore the Constitution of the Federal Republic of Nigeria",

    // Navigation
    "nav.home": "Home",
    "nav.constitution": "Constitution",
    "nav.learn": "Learn",
    "nav.community": "Community",
    "nav.resources": "Resources",
    "nav.about": "About",
    "nav.signIn": "Sign In",
    "nav.signUp": "Sign Up",
    "nav.toggleMenu": "Toggle menu",
    "nav.interactiveReader": "Interactive Reader",
    "nav.tableOfContents": "Table of Contents",
    "nav.search": "Search",
    "nav.fullText": "Full Text",
    "nav.download": "Download",
    "nav.chapters": "Chapters",
    "nav.explanations": "Explanations",
    "nav.quizzes": "Quizzes",
    "nav.forum": "Forum",
    "nav.askExpert": "Ask an Expert",
    "nav.videos": "Videos",
    "nav.infographics": "Infographics",
    "nav.aboutUs": "About Us",
    "nav.contact": "Contact",
    "nav.interactiveReaderDesc": "Read and explore the constitution with our interactive reader",
    "nav.tableOfContentsDesc": "Browse the complete table of contents of the Nigerian Constitution",
    "nav.searchDesc": "Search for specific terms, sections, or topics in the constitution",
    "nav.fullTextDesc": "View the complete text of the Nigerian Constitution",
    "nav.downloadDesc": "Download the constitution in various formats (PDF, EPUB, etc.)",
    "nav.aboutDesc": "Learn about the history and significance of the Nigerian Constitution",

    // Table of Contents
    "toc.byChapters": "By Chapters",
    "toc.byTopics": "By Topics",
    "toc.loading": "Loading constitution...",
    "toc.about.title": "About the Nigerian Constitution",
    "toc.about.p1":
      "The Constitution of the Federal Republic of Nigeria is the supreme law of Nigeria. It provides the framework for the organization of the government and defines the relationship between the citizens and the state, as well as the rights and duties of citizens.",
    "toc.about.p2":
      "The current constitution, adopted in 1999, is Nigeria's fourth constitution since independence in 1960. It has undergone several amendments to address evolving national needs and challenges.",
    "toc.about.p3":
      "Use the table of contents to navigate through the chapters and sections of the constitution. Click on any chapter to expand it and view its sections, then click on a section to read its content.",

    // Error messages
    "error.title": "Error",
    "error.fallback": "Using sample data instead.",
    "error.retry": "Try Again",

    // Footer
    "footer.copyright": "Nigerian Constitution Hub. All rights reserved.",

    // Hero section
    "hero.badge": "Nigeria's Premier Constitutional Resource",
    "hero.title.part1": "Know Your Rights,",
    "hero.title.part2": "Know Your Constitution",
    "hero.subtitle":
      "Explore, learn, and understand the Nigerian Constitution through our comprehensive, interactive platform designed for every Nigerian citizen.",
    "hero.searchPlaceholder": "Search the Constitution...",
    "hero.searchButton": "Search",
    "hero.exploreButton": "Explore Constitution",
    "hero.learnButton": "Start Learning",
    "hero.userCount": "citizens already using our platform",
    "hero.imageAlt": "Nigerian Constitution",
    "hero.featuresTitle": "Why Use Nigerian Constitution Hub?",

    // Features
    "hero.feature1.title": "Interactive Constitution",
    "hero.feature1.description":
      "Explore the Nigerian Constitution with our interactive reader featuring simplified explanations.",
    "hero.feature2.title": "Know Your Rights",
    "hero.feature2.description":
      "Understand your fundamental rights and how they are protected under the Constitution.",
    "hero.feature3.title": "Legal Insights",
    "hero.feature3.description": "Get expert insights on constitutional provisions and landmark court cases.",
    "hero.feature4.title": "Community Discussions",
    "hero.feature4.description": "Join discussions with fellow citizens and legal experts on constitutional matters.",

    // Home page
    "home.explore.title": "Explore the Constitution",
    "home.explore.subtitle": "Navigate through the Nigerian Constitution with our interactive tools and resources.",
    "home.explore.card1.title": "Interactive Reader",
    "home.explore.card1.description":
      "Read and navigate through the Constitution with our interactive reader featuring simplified explanations.",
    "home.explore.card1.button": "Start Reading",
    "home.explore.card2.title": "AI Assistant",
    "home.explore.card2.description":
      "Ask questions about the Constitution and get instant answers from our AI-powered assistant.",
    "home.explore.card2.button": "Ask Questions",
    "home.explore.card3.title": "Learning Resources",
    "home.explore.card3.description":
      "Access educational materials, quizzes, and case studies to deepen your understanding.",
    "home.explore.card3.button": "Start Learning",

    "home.community.title": "Join Our Community",
    "home.community.subtitle":
      "Connect with fellow citizens, legal experts, and scholars to discuss constitutional matters.",
    "home.community.button1": "Join Discussions",
    "home.community.button2": "Ask an Expert",

    // Statistics
    "stats.sections": "Constitutional Sections",
    "stats.users": "Active Users",
    "stats.discussions": "Community Discussions",
    "stats.downloads": "Downloads",

    // Testimonials
    "testimonials.title": "What People Are Saying",
    "testimonials.subtitle":
      "Hear from citizens, legal professionals, and educators who are using the Nigerian Constitution Hub.",
    "testimonials.prevButton": "Previous testimonial",
    "testimonials.nextButton": "Next testimonial",
    "testimonials.goToTestimonial": "Go to testimonial {{number}}",

    "testimonials.1.content":
      "This platform has transformed how I understand the Nigerian Constitution. The interactive features and AI assistant make complex legal concepts accessible to everyone.",
    "testimonials.1.author": "Oluwaseun Adebayo",
    "testimonials.1.title": "Law Student, University of Lagos",

    "testimonials.2.content":
      "As a civic educator, I've found the Nigerian Constitution Hub to be an invaluable resource. The simplified explanations and multilingual support help me reach diverse audiences.",
    "testimonials.2.author": "Amina Ibrahim",
    "testimonials.2.title": "Civic Education Coordinator, Kano",

    "testimonials.3.content":
      "The search functionality and bookmarking features have made my research so much easier. I can quickly find relevant sections and save them for future reference.",
    "testimonials.3.author": "Chinedu Okonkwo",
    "testimonials.3.title": "Legal Practitioner, Enugu",

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.description":
      "Subscribe to our newsletter for updates on constitutional matters, legal developments, and new resources.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribe": "Subscribe",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.successMessage": "Thank you for subscribing to our newsletter!",
    "newsletter.errorMessage": "An error occurred. Please try again later.",
    "newsletter.invalidEmail": "Please enter a valid email address",
    "newsletter.privacyNotice": "By subscribing, you agree to our Privacy Policy and Terms of Service.",

    "search.placeholder": "Search the constitution...",
    "search.button": "Search",
    "search.searching": "Searching...",
    "search.result": "result",
    "search.results": "results",
    "search.foundFor": "found for",
    "search.viewFullSection": "View full section",
    "search.noResults": "No results found for",
    "search.tryDifferent": "Try using different keywords or check your spelling",
    "search.enterTerm": "Enter a search term to find relevant sections in the constitution",
    "search.canSearch": "You can search for keywords, topics, or specific rights",
    "constitution.fetchError": "Failed to load constitution",
    "constitution.noTextError": "No constitution text received from API",
    "constitution.parseError": "Failed to parse constitution text",
    "constitution.loadError": "Error loading constitution",
    "constitution.unknownError": "An unknown error occurred",

    "chatbot.title": "Constitution Assistant",
    "chatbot.welcome": "Hello! I'm your Constitution AI assistant. Ask me anything about the Nigerian Constitution.",
    "chatbot.thinking": "Thinking...",
    "chatbot.error": "Sorry, I couldn't process your request. Please try again.",
    "chatbot.inputPlaceholder": "Ask about the constitution...",
  },
  ha: {
    // Hausa translations
    "app.title": "Kundin Tsarin Mulkin Najeriya",
    "app.description": "Bincika Kundin Tsarin Mulkin Taraiyar Jamhuriyar Najeriya",

    // Navigation
    "nav.home": "Gida",
    "nav.constitution": "Kundin Tsarin Mulki",
    "nav.learn": "Koyo",
    "nav.community": "Al'umma",
    "nav.resources": "Albarkatu",
    "nav.about": "Game da",
    "nav.signIn": "Shiga",
    "nav.signUp": "Yi Rajista",
    "nav.toggleMenu": "Canza allon",
    "nav.interactiveReader": "Mai Karatu Mai Hulda",
    "nav.tableOfContents": "Jerin Abubuwan Ciki",
    "nav.search": "Bincika",
    "nav.fullText": "Cikakken Rubutu",
    "nav.download": "Sauke",
    "nav.chapters": "Sashe-sashe",
    "nav.explanations": "Bayani",
    "nav.quizzes": "Gwaje-gwaje",
    "nav.forum": "Dandalin",
    "nav.askExpert": "Tambayi Masani",
    "nav.videos": "Bidiyoyi",
    "nav.infographics": "Hoto-hoto",
    "nav.aboutUs": "Game da Mu",
    "nav.contact": "Tuntuɓa",
    "nav.interactiveReaderDesc": "Karanta kuma bincika kundin tsarin mulki tare da mai karatun mu mai hulda",
    "nav.tableOfContentsDesc": "Duba cikakken jerin abubuwan cikin Kundin Tsarin Mulkin Najeriya",
    "nav.searchDesc": "Bincika kalmomin musamman, sashe-sashe, ko batutuwa a cikin kundin tsarin mulki",
    "nav.fullTextDesc": "Duba cikakken rubutun Kundin Tsarin Mulkin Najeriya",
    "nav.downloadDesc": "Sauke kundin tsarin mulki a cikin sigogin daban-daban (PDF, EPUB, da sauransu)",
    "nav.aboutDesc": "Koyi game da tarihin da muhimmancin Kundin Tsarin Mulkin Najeriya",

    // Table of Contents
    "toc.byChapters": "Ta Sashe-sashe",
    "toc.byTopics": "Ta Batun",
    "toc.loading": "Ana loda kundin tsarin mulki...",
    "toc.about.title": "Game da Kundin Tsarin Mulkin Najeriya",
    "toc.about.p1":
      "Kundin Tsarin Mulkin Taraiyar Jamhuriyar Najeriya shine babban doka a Najeriya. Yana ba da tsarin shirya gwamnati kuma yana bayyana dangantaka tsakanin 'yan kasa da kasa, da kuma hakkin da nauyin 'yan kasa.",
    "toc.about.p2":
      "Kundin tsarin mulkin na yanzu, wanda aka amince da shi a 1999, shine kundin tsarin mulki na hudu na Najeriya tun da samun 'yanci a 1960. An yi gyare-gyare da yawa don magance bukatu da kalubalen kasa masu ci gaba.",
    "toc.about.p3":
      "Yi amfani da jerin abubuwan ciki don tafiya ta sashe-sashe da sassa na kundin tsarin mulki. Danna kowane sashe don fadada shi ka gani sassa, sannan ka danna sashe don karanta abin da ke ciki.",

    // Error messages
    "error.title": "Kuskure",
    "error.fallback": "Ana amfani da samfuran bayanai a maimakon.",

    // Footer
    "footer.copyright": "Kundin Tsarin Mulkin Najeriya. Duk hakkin mallaka.",

    // Hero section
    "hero.badge": "Babban Albarkacin Tsarin Mulkin Najeriya",
    "hero.title.part1": "San Hakkinku,",
    "hero.title.part2": "San Kundin Tsarin Mulkinku",
    "hero.subtitle":
      "Bincika, koyi, kuma fahimci Kundin Tsarin Mulkin Najeriya ta hanyar dandamalinmu mai cike da hulda wanda aka tsara don kowane ɗan Najeriya.",
    "hero.searchPlaceholder": "Bincika Kundin Tsarin Mulki...",
    "hero.searchButton": "Bincika",
    "hero.exploreButton": "Bincika Kundin Tsarin Mulki",
    "hero.learnButton": "Fara Koyo",
    "hero.userCount": "'yan kasa suna amfani da dandamalinmu",
    "hero.imageAlt": "Kundin Tsarin Mulkin Najeriya",
    "hero.featuresTitle": "Me Ya Sa Za Ka Yi Amfani Da Kundin Tsarin Mulkin Najeriya?",

    // Features
    "hero.feature1.title": "Kundin Tsarin Mulki Mai Hulda",
    "hero.feature1.description":
      "Bincika Kundin Tsarin Mulkin Najeriya tare da mai karatunmu mai hulda wanda ke da bayani mai sauƙi.",
    "hero.feature2.title": "San Hakkinku",
    "hero.feature2.description": "Fahimci hakkinku na asali da yadda ake kare su a ƙarƙashin Kundin Tsarin Mulki.",
    "hero.feature3.title": "Basira na Doka",
    "hero.feature3.description":
      "Sami basirorin masana game da tanadin kundin tsarin mulki da muhimman shari'o'in kotu.",
    "hero.feature4.title": "Tattaunawar Al'umma",
    "hero.feature4.description":
      "Shiga tattaunawa tare da 'yan kasa da masanan doka don tattauna al'amuran kundin tsarin mulki.",

    // Home page
    "home.explore.title": "Bincika Kundin Tsarin Mulki",
    "home.explore.subtitle":
      "Yi tafiya cikin Kundin Tsarin Mulkin Najeriya tare da kayayyakinmu masu hulda da albarkatu.",
    "home.explore.card1.title": "Mai Karatu Mai Hulda",
    "home.explore.card1.description":
      "Karanta kuma yi tafiya cikin Kundin Tsarin Mulki tare da mai karatunmu mai hulda wanda ke da bayani mai sauƙi.",
    "home.explore.card1.button": "Fara Karatu",
    "home.explore.card2.title": "Mataimaki na AI",
    "home.explore.card2.description":
      "Tambayi tambayoyi game da Kundin Tsarin Mulki kuma sami amsa nan take daga mataimakinmu mai ƙarfin AI.",
    "home.explore.card2.button": "Yi Tambayoyi",
    "home.explore.card3.title": "Albarkatu na Koyo",
    "home.explore.card3.description": "Samun kayayyakin ilimi, gwaje-gwaje, da nazarin lamari don ƙara fahimtarka.",
    "home.explore.card3.button": "Fara Koyo",

    "home.community.title": "Shiga Al'ummarmu",
    "home.community.subtitle":
      "Haɗa kai da 'yan kasa, masanan doka, da malamai don tattauna al'amuran kundin tsarin mulki.",
    "home.community.button1": "Shiga Tattaunawa",
    "home.community.button2": "Tambayi Masani",

    // Statistics
    "stats.sections": "Sassan Kundin Tsarin Mulki",
    "stats.users": "Masu Amfani Masu Aiki",
    "stats.discussions": "Tattaunawar Al'umma",
    "stats.downloads": "Saukewa",

    // Testimonials
    "testimonials.title": "Abin Da Mutane Ke Cewa",
    "testimonials.subtitle":
      "Ji daga 'yan kasa, masanan doka, da malamai waɗanda ke amfani da Kundin Tsarin Mulkin Najeriya.",
    "testimonials.prevButton": "Shaida ta baya",
    "testimonials.nextButton": "Shaida ta gaba",
    "testimonials.goToTestimonial": "Je shaida {{number}}",

    "testimonials.1.content":
      "Wannan dandali ya canza yadda nake fahimtar Kundin Tsarin Mulkin Najeriya. Abubuwan hulda da mataimaki na AI suna sa fahimtar doka mai wahala ya zama sauƙi ga kowa.",
    "testimonials.1.author": "Oluwaseun Adebayo",
    "testimonials.1.title": "Ɗalibin Doka, Jami'ar Lagos",

    "testimonials.2.content":
      "A matsayina na malamin ilimin ɗan ƙasa, na tarar da Kundin Tsarin Mulkin Najeriya yana da muhimmanci sosai. Bayanan da aka saukake da tallafin harsuna da dama suna taimaka min kai ga masu sauraro daban-daban.",
    "testimonials.2.author": "Amina Ibrahim",
    "testimonials.2.title": "Mai Kula da Ilimin Ɗan Ƙasa, Kano",

    "testimonials.3.content":
      "Ayyukan bincike da alamar littafi sun sa bincikina ya zama mai sauƙi sosai. Zan iya samun sassan da suka dace da sauri kuma in ajiye su don amfani a nan gaba.",
    "testimonials.3.author": "Chinedu Okonkwo",
    "testimonials.3.title": "Mai Aikin Doka, Enugu",

    // Newsletter
    "newsletter.title": "Kasance da Sabuntawa",
    "newsletter.description":
      "Yi rajista don jarida don sabuntawa game da al'amuran kundin tsarin mulki, ci gaban doka, da sabbin albarkatu.",
    "newsletter.placeholder": "Shigar da imel ɗinka",
    "newsletter.subscribe": "Yi Rajista",
    "newsletter.subscribing": "Ana Rajista...",
    "newsletter.successMessage": "Mun gode da rajista ga jaridarmu!",
    "newsletter.errorMessage": "An sami kuskure. Da fatan za a sake gwadawa daga baya.",
    "newsletter.invalidEmail": "Da fatan a shigar da adireshin imel mai inganci",
    "newsletter.privacyNotice": "Ta hanyar rajista, kun yarda da Manufar Sirri da Sharuɗɗan Aiki.",
  },
  yo: {
    // Yoruba translations
    "app.title": "Ìwé Òfin Nàìjíríà",
    "app.description": "Ṣe Àyẹ̀wò Ìwé Òfin Àpapọ̀ Orílẹ̀-èdè Olómìnira Nàìjíríà",

    // Navigation
    "nav.home": "Ilé",
    "nav.constitution": "Ìwé Òfin",
    "nav.learn": "Kọ́",
    "nav.community": "Àwùjọ",
    "nav.resources": "Àwọn Ohun Èlò",
    "nav.about": "Nípa",
    "nav.signIn": "Wọlé",
    "nav.signUp": "Forúkọsílẹ̀",
    "nav.toggleMenu": "Yí àkójọ",
    "nav.interactiveReader": "Olùkà Ìbáṣepọ̀",
    "nav.tableOfContents": "Tábìlì Àwọn Àkóónú",
    "nav.search": "Wá",
    "nav.fullText": "Ọ̀rọ̀ Kíkún",
    "nav.download": "Gbà Sílẹ̀",
    "nav.chapters": "Àwọn Orí",
    "nav.explanations": "Àlàyé",
    "nav.quizzes": "Ìdánwò",
    "nav.forum": "Fóròmù",
    "nav.askExpert": "Béèrè Lọ́wọ́ Àwọn Òǹkọ́wé",
    "nav.videos": "Fídíò",
    "nav.infographics": "Àwòrán Àlàyé",
    "nav.aboutUs": "Nípa Wa",
    "nav.contact": "Kàn Sí Wa",
    "nav.interactiveReaderDesc": "Ka kí o sì ṣe àyẹ̀wò ìwé òfin pẹ̀lú olùkà ìbáṣepọ̀ wa",
    "nav.tableOfContentsDesc": "Ṣe àyẹ̀wò tábìlì àkóónú kíkún ti Ìwé Òfin Nàìjíríà",
    "nav.searchDesc": "Wá àwọn ọ̀rọ̀ pàtó, àwọn apá, tàbí àwọn kókó nínú ìwé òfin",
    "nav.fullTextDesc": "Wo ọ̀rọ̀ kíkún ti Ìwé Òfin Nàìjíríà",
    "nav.downloadDesc": "Gbà ìwé òfin sílẹ̀ ní àwọn ọ̀nà oríṣiríṣi (PDF, EPUB, abbl)",
    "nav.aboutDesc": "Kọ́ nípa ìtàn àti pàtàkì Ìwé Òfin Nàìjíríà",

    // Table of Contents
    "toc.byChapters": "Nípa Àwọn Orí",
    "toc.byTopics": "Nípa Àwọn Kókó",
    "toc.loading": "Ń gbé ìwé òfin wọlé...",
    "toc.about.title": "Nípa Ìwé Òfin Nàìjíríà",
    "toc.about.p1":
      "Ìwé Òfin Àpapọ̀ Orílẹ̀-èdè Olómìnira Nàìjíríà ni òfin tó ga jùlọ ní Nàìjíríà. Ó pèsè àgbékalẹ̀ fún ètò ìjọba àti ìbáṣepọ̀ láàrin àwọn ọmọ orílẹ̀-èdè àti ìjọba, àti bẹ́ẹ̀ náà àwọn ẹ̀tọ́ àti ojúṣe àwọn ọmọ orílẹ̀-èdè.",
    "toc.about.p2":
      "Ìwé òfin lọ́wọ́lọ́wọ́, tí a gbà ní ọdún 1999, ni ìwé òfin kẹrin Nàìjíríà láti ìgbà tí a ti gba òmìnira ní ọdún 1960. Ó ti kọjá lọ́pọ̀ àwọn àtúnṣe láti yanjú àwọn àìní àti ìṣòro orílẹ̀-èdè tó ń dàgbà.",
    "toc.about.p3":
      "Lo àkójọpọ̀ àwọn àkóónú láti ṣe ìrìn àjò láàrin àwọn orí àti àwọn apá ìwé òfin. Tẹ orí kọ̀ọ̀kan láti fẹ̀ ẹ́ sí i kí o sì wo àwọn apá rẹ̀, lẹ́yìn náà tẹ apá kan láti kà àkóónú rẹ̀.",

    // Error messages
    "error.title": "Àṣìṣe",
    "error.fallback": "Ń lo àwọn àpẹẹrẹ dátà ní ààyò.",

    // Footer
    "footer.copyright": "Ìwé Òfin Nàìjíríà. Gbogbo ẹ̀tọ́ wà ní àbò.",

    // Hero section
    "hero.badge": "Ìwé Òfin Nàìjíríà Tó Dára Jùlọ",
    "hero.title.part1": "Mọ Àwọn Ẹ̀tọ́ Rẹ,",
    "hero.title.part2": "Mọ Ìwé Òfin Rẹ",
    "hero.subtitle":
      "Ṣe àyẹ̀wò, kọ́, kí o sì mọ Ìwé Òfin Nàìjíríà nípa ojú ìwé wa tó péye, tó ní ìbáṣepọ̀, tí a ṣe fún gbogbo ọmọ orílẹ̀-èdè Nàìjíríà.",
    "hero.searchPlaceholder": "Wá Ìwé Òfin...",
    "hero.searchButton": "Wá",
    "hero.exploreButton": "Ṣe Àyẹ̀wò Ìwé Òfin",
    "hero.learnButton": "Bẹ̀rẹ̀ Ẹ̀kọ́",
    "hero.userCount": "àwọn ọmọ orílẹ̀-èdè ti ń lo ojú ìwé wa",
    "hero.imageAlt": "Ìwé Òfin Nàìjíríà",
    "hero.featuresTitle": "Kí Ló Dé Tí O Fi Ń Lo Ìwé Òfin Nàìjíríà?",

    // Features
    "hero.feature1.title": "Ìwé Òfin Ìbáṣepọ̀",
    "hero.feature1.description": "Ṣe àyẹ̀wò Ìwé Òfin Nàìjíríà pẹ̀lú olùkà ìbáṣepọ̀ wa tó ní àlàyé tó rọrùn.",
    "hero.feature2.title": "Mọ Àwọn Ẹ̀tọ́ Rẹ",
    "hero.feature2.description": "Mọ àwọn ẹ̀tọ́ pàtàkì rẹ àti bí wọ́n ṣe ń dáàbò bò wọ́n lábẹ́ Ìwé Òfin.",
    "hero.feature3.title": "Ìmọ̀ Òfin",
    "hero.feature3.description": "Gba ìmọ̀ lọ́wọ́ àwọn òǹkọ́wé lórí àwọn ìpèsè ìwé òfin àti àwọn ìdájọ́ pàtàkì.",
    "hero.feature4.title": "Ìjíròrò Àwùjọ",
    "hero.feature4.description":
      "Darapọ̀ mọ́ àwọn ìjíròrò pẹ̀lú àwọn ọmọ orílẹ̀-èdè àti àwọn òǹkọ́wé òfin lórí àwọn ọ̀rọ̀ ìwé òfin.",

    // Home page
    "home.explore.title": "Ṣe Àyẹ̀wò Ìwé Òfin",
    "home.explore.subtitle": "Ṣe ìrìn àjò láàrin Ìwé Òfin Nàìjíríà pẹ̀lú àwọn irinṣẹ́ ìbáṣepọ̀ àti àwọn ìwé ìrànlọ́wọ́ wa.",
    "home.explore.card1.title": "Olùkà Ìbáṣepọ̀",
    "home.explore.card1.description":
      "Ka kí o sì ṣe ìrìn àjò láàrin Ìwé Òfin pẹ̀lú olùkà ìbáṣepọ̀ wa tó ní àlàyé tó rọrùn.",
    "home.explore.card1.button": "Bẹ̀rẹ̀ Kíkà",
    "home.explore.card2.title": "Olùrànlọ́wọ́ AI",
    "home.explore.card2.description":
      "Béèrè àwọn ìbéèrè nípa Ìwé Òfin kí o sì gba ìdáhùn lẹ́sẹ̀kẹsẹ̀ láti ọwọ́ olùrànlọ́wọ́ AI wa.",
    "home.explore.card2.button": "Béèrè Àwọn Ìbéèrè",
    "home.explore.card3.title": "Àwọn Ìwé Ìrànlọ́wọ́ Ẹ̀kọ́",
    "home.explore.card3.description":
      "Wọlé sí àwọn ohun èlò ẹ̀kọ́, àwọn ìdánwò, àti àwọn ìwádìí láti jẹ́ kí òye rẹ jinlẹ̀ sí i.",
    "home.explore.card3.button": "Bẹ̀rẹ̀ Ẹ̀kọ́",

    "home.community.title": "Darapọ̀ Mọ́ Àwùjọ Wa",
    "home.community.subtitle":
      "Darapọ̀ mọ́ àwọn ọmọ orílẹ̀-èdè, àwọn òǹkọ́wé òfin, àti àwọn olùkọ́ láti jíròrò àwọn ọ̀rọ̀ ìwé òfin.",
    "home.community.button1": "Darapọ̀ Mọ́ Àwọn Ìjíròrò",
    "home.community.button2": "Béèrè Lọ́wọ́ Òǹkọ́wé",

    // Statistics
    "stats.sections": "Àwọn Apá Ìwé Òfin",
    "stats.users": "Àwọn Olùlò Tó Ń Ṣiṣẹ́",
    "stats.discussions": "Àwọn Ìjíròrò Àwùjọ",
    "stats.downloads": "Àwọn Ìgbasílẹ̀",

    // Testimonials
    "testimonials.title": "Ohun Tí Àwọn Ènìyàn Ń Sọ",
    "testimonials.subtitle":
      "Gbọ́ láti ọwọ́ àwọn ọmọ orílẹ̀-èdè, àwọn òǹkọ́wé òfin, àti àwọn olùkọ́ tí wọ́n ń lo Ìwé Òfin Nàìjíríà.",
    "testimonials.prevButton": "Ẹ̀rí tí ó kọjá",
    "testimonials.nextButton": "Ẹ̀rí tí ó tẹ̀le",
    "testimonials.goToTestimonial": "Lọ sí ẹ̀rí {{number}}",

    "testimonials.1.content":
      "Ojú òpó yìí ti yí ọ̀nà tí mo fi ń mọ Ìwé Òfin Nàìjíríà padà. Àwọn ẹ̀ya ìbáṣepọ̀ àti olùrànlọ́wọ́ AI jẹ́ kí àwọn ìmọ̀ òfin tó ṣòro wà ní ìrọ̀rùn fún gbogbo ènìyàn.",
    "testimonials.1.author": "Oluwaseun Adebayo",
    "testimonials.1.title": "Akẹ́kọ̀ọ́ Òfin, Yunifásítì Lagos",

    "testimonials.2.content":
      "Gẹ́gẹ́ bí olùkọ́ ìgbàlódé, mo ti rí Ìwé Òfin Nàìjíríà bí ohun èlò tí kò ṣe é fọwọ́ rọ́. Àwọn àlàyé tí ó rọrùn àti àtìlẹ́yìn ọ̀pọ̀lọpọ̀ èdè ń ràn mí lọ́wọ́ láti dé ọ̀dọ̀ àwọn ìgbọ́ran oríṣiríṣi.",
    "testimonials.2.author": "Amina Ibrahim",
    "testimonials.2.title": "Alábòójútó Ẹ̀kọ́ Ìgbàlódé, Kano",

    "testimonials.3.content":
      "Ìṣe ìwádìí àti àwọn ẹ̀ya ìṣàmì ìwé ti jẹ́ kí ìwádìí mi rọrùn púpọ̀. Mo lè rí àwọn apá tó bá mu láìpẹ́ kí n sì fi pamọ́ fún ìtọ́kasí ọjọ́ iwájú.",
    "testimonials.3.author": "Chinedu Okonkwo",
    "testimonials.3.title": "Òǹṣe Òfin, Enugu",

    // Newsletter
    "newsletter.title": "Wà Ní Ìmúdójúìwọ̀n",
    "newsletter.description":
      "Forúkọsílẹ̀ fún ìwé ìròyìn wa fún ìmúdójúìwọ̀n lórí àwọn ọ̀rọ̀ ìwé òfin, ìdàgbàsókè òfin, àti àwọn ohun èlò tuntun.",
    "newsletter.placeholder": "Tẹ ímeèlì rẹ sí i",
    "newsletter.subscribe": "Forúkọsílẹ̀",
    "newsletter.subscribing": "Ń forúkọsílẹ̀...",
    "newsletter.successMessage": "O ṣeun fún fíforúkọsílẹ̀ fún ìwé ìròyìn wa!",
    "newsletter.errorMessage": "Àṣìṣe kan ṣẹlẹ̀. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan síi lẹ́yìn.",
    "newsletter.invalidEmail": "Jọ̀wọ́ tẹ àdírẹ́ẹ̀sì ímeèlì tó tọ́ sí i",
    "newsletter.privacyNotice": "Nípa fíforúkọsílẹ̀, o gbà pẹ̀lú Ìlànà Àṣírí àti Àwọn Òfin Iṣẹ́ wa.",
  },
  ig: {
    // Igbo translations
    "app.title": "Iwu Ọchịchị Naịjirịa",
    "app.description": "Nyocha Iwu Ọchịchị Etiti Mba Naịjirịa",

    // Navigation
    "nav.home": "Ụlọ",
    "nav.constitution": "Iwu Ọchịchị",
    "nav.learn": "Mụta",
    "nav.community": "Obodo",
    "nav.resources": "Akụ",
    "nav.about": "Maka",
    "nav.signIn": "Banye",
    "nav.signUp": "Debanye Aha",
    "nav.toggleMenu": "Gbanwee menu",
    "nav.interactiveReader": "Ọgụgụ Mmekọrịta",
    "nav.tableOfContents": "Tebụl Ọdịnaya",
    "nav.search": "Chọọ",
    "nav.fullText": "Ederede Zuru Ezu",
    "nav.download": "Budata",
    "nav.chapters": "Isi",
    "nav.explanations": "Nkọwa",
    "nav.quizzes": "Ajụjụ",
    "nav.forum": "Ogige",
    "nav.askExpert": "Jụọ Ọkachamara",
    "nav.videos": "Vidiyo",
    "nav.infographics": "Infographics",
    "nav.aboutUs": "Maka Anyị",
    "nav.contact": "Kpọtụrụ Anyị",
    "nav.interactiveReaderDesc": "Gụọ ma nyochaa iwu ọchịchị site na ọgụgụ mmekọrịta anyị",
    "nav.tableOfContentsDesc": "Lelee tebụl ọdịnaya nke Iwu Ọchịchị Naịjirịa",
    "nav.searchDesc": "Chọọ okwu pụrụ iche, ngalaba, ma ọ bụ isiokwu n'ime iwu ọchịchị",
    "nav.fullTextDesc": "Lelee ederede zuru ezu nke Iwu Ọchịchị Naịjirịa",
    "nav.downloadDesc": "Budata iwu ọchịchị n'ụdị dị iche iche (PDF, EPUB, wdg)",
    "nav.aboutDesc": "Mụta banyere akụkọ ihe mere eme na mkpa Iwu Ọchịchị Naịjirịa",

    // Table of Contents
    "toc.byChapters": "Site na Isi",
    "toc.byTopics": "Site na Okwu",
    "toc.loading": "Na-ebubata iwu ọchịchị...",
    "toc.about.title": "Maka Iwu Ọchịchị Naịjirịa",
    "toc.about.p1":
      "Iwu Ọchịchị Etiti Mba Naịjirịa bụ iwu kachasị elu nke Naịjirịa. Ọ na-enye usoro maka nhazi gọọmentị na kwa mmekọrịta dị n'etiti ndị mmadụ na ọchịchị, nakwa ikike na ọrụ ndị mmadụ.",
    "toc.about.p2":
      "Iwu ọchịchị ugbu a, nke e nabatara na 1999, bụ iwu ọchịchị nke anọ nke Naịjirịa kemgbe nnwere onwe na 1960. Ọ gafela ọtụtụ mgbanwe iji dozie mkpa na nsogbu mba na-agbanwe agbanwe.",
    "toc.about.p3":
      "Jiri ndepụta ihe ndị dị n'ime ya iji gaa n'isi na ngalaba nke iwu ọchịchị. Pịa isi ọ bụla iji mepee ya ma hụ ngalaba ya, mgbe ahụ pịa ngalaba iji gụọ ihe dị n'ime ya.",

    // Error messages
    "error.title": "Njehie",
    "error.fallback": "Na-eji ọmụmaatụ data kama.",

    // Footer
    "footer.copyright": "Iwu Ọchịchị Naịjirịa. Ikike niile echekwabara.",

    // Hero section
    "hero.badge": "Isi Akụ Iwu Ọchịchị Naịjirịa",
    "hero.title.part1": "Mara Ikike Gị,",
    "hero.title.part2": "Mara Iwu Ọchịchị Gị",
    "hero.subtitle":
      "Nyochaa, mụta, ma ghọta Iwu Ọchịchị Naịjirịa site na usoro anyị zuru ezu, nke mmekọrịta e mere maka onye ọ bụla bi na Naịjirịa.",
    "hero.searchPlaceholder": "Chọọ Iwu Ọchịchị...",
    "hero.searchButton": "Chọọ",
    "hero.exploreButton": "Nyochaa Iwu Ọchịchị",
    "hero.learnButton": "Malite Ịmụta",
    "hero.userCount": "ndị mmadụ na-eji usoro anyị ugbu a",
    "hero.imageAlt": "Iwu Ọchịchị Naịjirịa",
    "hero.featuresTitle": "Gịnị Mere Ị Ga-eji Iwu Ọchịchị Naịjirịa?",

    // Features
    "hero.feature1.title": "Iwu Ọchịchị Mmekọrịta",
    "hero.feature1.description": "Nyochaa Iwu Ọchịchị Naịjirịa site na ọgụgụ mmekọrịta anyị nke nwere nkọwa dị mfe.",
    "hero.feature2.title": "Mara Ikike Gị",
    "hero.feature2.description": "Ghọta ikike gị bụ isi na otú e si echebe ha n'okpuru Iwu Ọchịchị.",
    "hero.feature3.title": "Nghọta Iwu",
    "hero.feature3.description": "Nweta nghọta ndị ọkachamara banyere iwu ọchịchị na ikpe ụlọ ikpe dị mkpa.",
    "hero.feature4.title": "Mkparịta Ụka Obodo",
    "hero.feature4.description": "Sonye na mkparịta ụka ndị mmadụ na ndị ọkachamara iwu banyere okwu iwu ọchịchị.",

    // Home page
    "home.explore.title": "Nyochaa Iwu Ọchịchị",
    "home.explore.subtitle": "Gaa n'Iwu Ọchịchị Naịjirịa site na ngwá ọrụ mmekọrịta na akụ anyị.",
    "home.explore.card1.title": "Ọgụgụ Mmekọrịta",
    "home.explore.card1.description": "Gụọ ma gaa n'Iwu Ọchịchị site na ọgụgụ mmekọrịta anyị nke nwere nkọwa dị mfe.",
    "home.explore.card1.button": "Malite Ịgụ",
    "home.explore.card2.title": "Onye Nnyemaka AI",
    "home.explore.card2.description":
      "Jụọ ajụjụ banyere Iwu Ọchịchị ma nweta azịza ozugbo site n'aka onye nnyemaka anyị nke AI.",
    "home.explore.card2.button": "Jụọ Ajụjụ",
    "home.explore.card3.title": "Akụ Mmụta",
    "home.explore.card3.description": "Nweta ihe mmụta, ajụjụ, na ọmụmaatụ iji mee ka nghọta gị mie emi.",
    "home.explore.card3.button": "Malite Ịmụta",

    "home.community.title": "Banye n'Obodo Anyị",
    "home.community.subtitle":
      "Jikọọ ya na ndị mmadụ, ndị ọkachamara iwu, na ndị nkuzi iji kparịta ụka banyere okwu iwu ọchịchị.",
    "home.community.button1": "Sonye na Mkparịta Ụka",
    "home.community.button2": "Jụọ Ọkachamara",

    // Statistics
    "stats.sections": "Ngalaba Iwu Ọchịchị",
    "stats.users": "Ndị Na-eji Ya Ugbu A",
    "stats.discussions": "Mkparịta Ụka Obodo",
    "stats.downloads": "Mbudata",

    // Testimonials
    "testimonials.title": "Ihe Ndị Mmadụ Na-ekwu",
    "testimonials.subtitle": "Nụrụ site n'aka ndị mmadụ, ndị ọkachamara iwu, na ndị nkuzi na-eji Iwu Ọchịchị Naịjirịa.",
    "testimonials.prevButton": "Akaebe gara aga",
    "testimonials.nextButton": "Akaebe na-esote",
    "testimonials.goToTestimonial": "Gaa na akaebe {{number}}",

    "testimonials.1.content":
      "Usoro a agbanweela otú m si aghọta Iwu Ọchịchị Naịjirịa. Atụmatụ mmekọrịta na onye nnyemaka AI na-eme ka echiche iwu siri ike dị mfe maka onye ọ bụla.",
    "testimonials.1.author": "Oluwaseun Adebayo",
    "testimonials.1.title": "Nwata Akwụkwọ Iwu, Mahadum Lagos",

    "testimonials.2.content":
      "Dị ka onye nkuzi ọha mmadụ, achọtala m na Iwu Ọchịchị Naịjirịa bụ akụ dị oké ọnụ ahịa. Nkọwa dị mfe na nkwado asụsụ dị iche iche na-enyere m aka iru ndị ọgbọ dị iche iche.",
    "testimonials.2.author": "Amina Ibrahim",
    "testimonials.2.title": "Onye Nhazi Mmụta Ọha Mmadụ, Kano",

    "testimonials.3.content":
      "Ọrụ ịchọ na ihe ngosi akwụkwọ emeela ka nchọpụta m dị mfe. Enwere m ike ịchọta ngalaba dị mkpa ngwa ngwa ma chekwaa ha maka ọdịnihu.",
    "testimonials.3.author": "Chinedu Okonkwo",
    "testimonials.3.title": "Onye Ọrụ Iwu, Enugu",

    // Newsletter
    "newsletter.title": "Nọgide Na-enweta Ozi",
    "newsletter.description":
      "Debanye aha maka akwụkwọ akụkọ anyị maka ozi banyere okwu iwu ọchịchị, mmepe iwu, na akụ ọhụrụ.",
    "newsletter.placeholder": "Tinye email gị",
    "newsletter.subscribe": "Debanye Aha",
    "newsletter.subscribing": "Na-edebanye aha...",
    "newsletter.successMessage": "Daalụ maka ịdebanye aha n'akwụkwọ akụkọ anyị!",
    "newsletter.errorMessage": "Nsogbu mere. Biko gbalịa ọzọ ma e mesịa.",
    "newsletter.invalidEmail": "Biko tinye adreesị email dị mma",
    "newsletter.privacyNotice": "Site na ịdebanye aha, ị kwenyere na Iwu Nzuzo na Usoro Ọrụ anyị.",
  },
}

// Get translation for a key in the specified language
export function getTranslation(key: TranslationKey, language: LanguageCode = "en"): string {
  // If the language doesn't exist, fall back to English
  if (!translations[language]) {
    language = "en"
  }

  // If the key doesn't exist in the specified language, fall back to English
  return translations[language][key] || translations["en"][key] || key
}

// Check if a translation exists for a key in the specified language
export function hasTranslation(key: TranslationKey, language: LanguageCode = "en"): boolean {
  return Boolean(translations[language]?.[key])
}

// Get all available languages
export function getAvailableLanguages(): Array<{ code: string; name: string; flag: string }> {
  return [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ha", name: "Hausa", flag: "🇳🇬" },
    { code: "yo", name: "Yoruba", flag: "🇳🇬" },
    { code: "ig", name: "Igbo", flag: "🇳🇬" },
  ]
}

