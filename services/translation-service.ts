type TranslationKey = string;
type LanguageCode = string;
type TranslationValue = string;

// Translation dictionary
const translations: Record<
  LanguageCode,
  Record<TranslationKey, TranslationValue>
> = {
  en: {
    // English translations (default)
    "app.title": "Nigerian Constitution Hub",
    "app.description":
      "Explore the Constitution of the Federal Republic of Nigeria",

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
    "nav.interactiveReaderDesc":
      "Read and explore the constitution with our interactive reader",
    "nav.tableOfContentsDesc":
      "Browse the complete table of contents of the Nigerian Constitution",
    "nav.searchDesc":
      "Search for specific terms, sections, or topics in the constitution",
    "nav.fullTextDesc": "View the complete text of the Nigerian Constitution",
    "nav.downloadDesc":
      "Download the constitution in various formats (PDF, EPUB, etc.)",
    "nav.aboutDesc":
      "Learn about the history and significance of the Nigerian Constitution",

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
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.followUs": "Follow Us",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.disclaimer": "Disclaimer",
    "footer.twitter": "Twitter",
    "footer.facebook": "Facebook",
    "footer.linkedin": "LinkedIn",
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
    "hero.feature3.description":
      "Get expert insights on constitutional provisions and landmark court cases.",
    "hero.feature4.title": "Community Discussions",
    "hero.feature4.description":
      "Join discussions with fellow citizens and legal experts on constitutional matters.",

    // Home page
    "home.explore.title": "Explore the Constitution",
    "home.explore.subtitle":
      "Navigate through the Nigerian Constitution with our interactive tools and resources.",
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
    "newsletter.privacyNotice":
      "By subscribing, you agree to our Privacy Policy and Terms of Service.",

    "search.placeholder": "Search the constitution...",
    "search.button": "Search",
    "search.searching": "Searching...",
    "search.result": "result",
    "search.results": "results",
    "search.foundFor": "found for",
    "search.viewFullSection": "View full section",
    "search.noResults": "No results found for",
    "search.tryDifferent":
      "Try using different keywords or check your spelling",
    "search.enterTerm":
      "Enter a search term to find relevant sections in the constitution",
    "search.canSearch":
      "You can search for keywords, topics, or specific rights",
    "constitution.fetchError": "Failed to load constitution",
    "constitution.noTextError": "No constitution text received from API",
    "constitution.parseError": "Failed to parse constitution text",
    "constitution.loadError": "Error loading constitution",
    "constitution.unknownError": "An unknown error occurred",

    "chatbot.title": "Constitution Assistant",
    "chatbot.welcome":
      "Hello! I'm your Constitution AI assistant. Ask me anything about the Nigerian Constitution.",
    "chatbot.thinking": "Thinking...",
    "chatbot.error":
      "Sorry, I couldn't process your request. Please try again.",
    "chatbot.inputPlaceholder": "Ask about the constitution...",

    //learn content

    "learn.title": "Learn the Nigerian Constitution",
    "learn.subtitle":
      "Explore our interactive learning resources designed to help you understand the Nigerian Constitution in simple, accessible language.",
    "learn.quizButton": "Take a Quiz",
    "learn.chatButton": "Chat with AI",
    "learn.explanations.title": "Simplified Explanations",
    "learn.explanations.subtitle":
      "Understanding complex legal concepts made easy with plain language explanations.",
    "learn.readMore": "Read Explanation",
    "learn.fundamentalRights.title": "Fundamental Rights",
    "learn.fundamentalRights.description": "Chapter IV of the Constitution",
    "learn.fundamentalRights.content":
      "Learn about the rights guaranteed to every Nigerian citizen, including the right to life, dignity, personal liberty, fair hearing, privacy, freedom of thought, expression, and more.",
    "learn.federalSystem.title": "Federal System of Government",
    "learn.federalSystem.description": "Chapters V, VI, and VII",
    "learn.federalSystem.content":
      "Understand how power is shared between the federal, state, and local governments in Nigeria, including the roles of the legislature, executive, and judiciary at each level.",
    "learn.citizenship.title": "Citizenship Rights",
    "learn.citizenship.description": "Chapter III of the Constitution",
    "learn.citizenship.content":
      "Learn about who qualifies as a Nigerian citizen, how citizenship can be acquired, and the rights and privileges that come with Nigerian citizenship.",

    //community content
    "community.title": "Join the Constitutional Conversation",
    "community.subtitle":
      "Connect with fellow citizens, legal experts, and scholars to discuss, debate, and learn about the Nigerian Constitution.",
    "community.joinDiscussion": "Join Discussion",
    "community.askExpert": "Ask a Legal Expert",
    "community.recentDiscussions": "Recent Discussions",
    "community.newDiscussion": "New Discussion",

    // about content

    "about.title": "About the Nigerian Constitution",
    "about.subtitle":
      "Learn about the history, significance, and evolution of Nigeria's supreme law",
    "about.tabs.history": "History",
    "about.tabs.structure": "Structure",
    "about.tabs.amendments": "Amendments",
    "about.tabs.significance": "Significance",
    // Timeline translations
    "about.timeline.1922": "Clifford Constitution introduced",
    "about.timeline.1946": "Richards Constitution",
    "about.timeline.1951": "Macpherson Constitution",
    "about.timeline.1954": "Lyttleton Constitution",
    "about.timeline.1960": "Independence Constitution",
    "about.timeline.1963": "Republican Constitution",
    "about.timeline.1979": "Second Republic Constitution",
    "about.timeline.1989": "Third Republic Constitution",
    "about.timeline.1999": "Current Constitution adopted",
    "about.timeline.2010": "First, Second, and Third Amendments",
    "about.timeline.2017": "Fourth Amendment",
    "about.timeline.2023": "Fifth Amendment",
    // Chapters translations
    "about.chapters.1": "General Provisions",
    "about.chapters.2":
      "Fundamental Objectives and Directive Principles of State Policy",
    "about.chapters.3": "Citizenship",
    "about.chapters.4": "Fundamental Rights",
    "about.chapters.5": "The Legislature",
    "about.chapters.6": "The Executive",
    "about.chapters.7": "The Judicature",
    "about.chapters.8":
      "Federal Capital Territory, Abuja and General Supplementary Provisions",
    // Features translations
    "about.features.federal.title": "Federal System",
    "about.features.federal.description":
      "Establishes Nigeria as a federation with powers shared between the federal, state, and local governments.",
    // ... add other feature translations similarly
    // Cases translations
    "about.cases.resource.title":
      "Attorney-General of the Federation v. Attorney-General of Abia State & Ors",
    "about.cases.resource.description":
      "This case addressed the issue of offshore resources and states' territorial waters.",

    // Modal translations
    "community.modal.title": "Create New Discussion",
    "community.modal.topicLabel": "Topic",
    "community.modal.bodyLabel": "Content",
    "community.modal.cancelButton": "Cancel",
    "community.modal.submitButton": "Create Discussion",
    "community.modal.submitting": "Creating...",

    // Privacy translations
    "privacy.title": "Privacy Policy",
    "privacy.introduction.title": "Introduction",
    "privacy.introduction.content":
      "This Privacy Policy explains how we collect, use, and protect your personal information when you use our Nigerian Constitution Hub platform.",

    "privacy.dataCollection.title": "Information We Collect",
    "privacy.dataCollection.content":
      "We collect the following types of information:",
    "privacy.dataCollection.items.1":
      "Personal information (name, email address) when you create an account",
    "privacy.dataCollection.items.2":
      "Usage data and interaction with our platform",
    "privacy.dataCollection.items.3": "Device information and browser details",
    "privacy.dataCollection.items.4": "Comments and discussion contributions",
    "privacy.dataCollection.items.5":
      "Cookies and similar tracking technologies",

    "privacy.dataUsage.title": "How We Use Your Information",
    "privacy.dataUsage.content":
      "We use your information for the following purposes:",
    "privacy.dataUsage.items.1": "To provide and improve our services",
    "privacy.dataUsage.items.2": "To personalize your experience",
    "privacy.dataUsage.items.3": "To communicate with you about our services",
    "privacy.dataUsage.items.4":
      "To ensure platform security and prevent abuse",

    "privacy.security.title": "Data Security",
    "privacy.security.content":
      "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.",

    "privacy.cookies.title": "Cookies and Tracking",
    "privacy.cookies.content":
      "We use cookies and similar tracking technologies to enhance your experience and collect usage data. You can control cookie settings through your browser.",

    "privacy.rights.title": "Your Rights",
    "privacy.rights.content":
      "You have the following rights regarding your personal information:",
    "privacy.rights.items.1": "Access your personal information",
    "privacy.rights.items.2": "Correct inaccurate information",
    "privacy.rights.items.3": "Request deletion of your information",
    "privacy.rights.items.4": "Object to processing of your information",
    "privacy.rights.items.5": "Data portability",

    "privacy.contact.title": "Contact Us",
    "privacy.contact.content":
      "If you have any questions about this Privacy Policy, please contact us at privacy@constitutionhub.ng",

    // Terms translation

    "terms.title": "Terms of Service",
    "terms.acceptance.title": "Acceptance of Terms",
    "terms.acceptance.content":
      "By accessing and using the Nigerian Constitution Hub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",

    "terms.usage.title": "Acceptable Use",
    "terms.usage.content":
      "You agree to use our platform in accordance with the following guidelines:",
    "terms.usage.items.1": "Use the service for lawful purposes only",
    "terms.usage.items.2": "Respect other users and their rights",
    "terms.usage.items.3":
      "Do not attempt to disrupt or compromise the service",
    "terms.usage.items.4": "Maintain the security of your account credentials",
    "terms.usage.items.5": "Report any security vulnerabilities or violations",

    "terms.content.title": "User Content",
    "terms.content.content":
      "You retain ownership of any content you submit to our platform. By submitting content, you grant us a non-exclusive license to use, display, and distribute that content in connection with our services.",

    "terms.intellectual.title": "Intellectual Property",
    "terms.intellectual.content":
      "All content, features, and functionality of the Nigerian Constitution Hub, including but not limited to text, graphics, logos, and software, are owned by or licensed to us and are protected by Nigerian and international intellectual property laws.",

    "terms.liability.title": "Limitation of Liability",
    "terms.liability.content":
      "The Nigerian Constitution Hub provides information for educational purposes only. We are not liable for any damages arising from your use of our service or reliance on the information provided.",

    "terms.termination.title": "Termination",
    "terms.termination.content":
      "We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.",

    "terms.governing.title": "Governing Law",
    "terms.governing.content":
      "These Terms of Service are governed by the laws of Nigeria. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of Nigeria.",

    "terms.contact.title": "Contact Information",
    "terms.contact.content":
      "If you have any questions about these Terms of Service, please contact us at terms@constitutionhub.ng",

    // Disclaimer translation

    "disclaimer.title": "Disclaimer",
    "disclaimer.information.title": "Information Purpose",
    "disclaimer.information.content":
      "The Nigerian Constitution Hub website is provided for general information and educational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the information contained on the website.",

    "disclaimer.accuracy.title": "Accuracy and Completeness",
    "disclaimer.accuracy.content":
      "Any reliance you place on such information is strictly at your own risk. We recommend verifying any information obtained from or through this website with official government sources or qualified legal professionals before taking any actions based on such information.",

    "disclaimer.legal.title": "Legal Advice",
    "disclaimer.legal.content":
      "The content on this website does not constitute legal advice and should not be relied upon as such. We recommend consulting with qualified legal professionals for specific legal matters.",

    "disclaimer.external.title": "External Links",
    "disclaimer.external.content":
      "This website may contain links to external websites. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.",

    "disclaimer.changes.title": "Changes and Updates",
    "disclaimer.changes.content":
      "We reserve the right to make additions, deletions, or modifications to the contents of this website at any time without prior notice. We encourage users to regularly check this disclaimer for any updates.",

    "disclaimer.contact.title": "Contact Information",
    "disclaimer.contact.content":
      "If you have any questions about this disclaimer, please contact us at disclaimer@constitutionhub.ng",
  },
  ha: {
    // Hausa translations
    "app.title": "Kundin Tsarin Mulkin Najeriya",
    "app.description":
      "Bincika Kundin Tsarin Mulkin Taraiyar Jamhuriyar Najeriya",

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
    "nav.interactiveReaderDesc":
      "Karanta kuma bincika kundin tsarin mulki tare da mai karatun mu mai hulda",
    "nav.tableOfContentsDesc":
      "Duba cikakken jerin abubuwan cikin Kundin Tsarin Mulkin Najeriya",
    "nav.searchDesc":
      "Bincika kalmomin musamman, sashe-sashe, ko batutuwa a cikin kundin tsarin mulki",
    "nav.fullTextDesc": "Duba cikakken rubutun Kundin Tsarin Mulkin Najeriya",
    "nav.downloadDesc":
      "Sauke kundin tsarin mulki a cikin sigogin daban-daban (PDF, EPUB, da sauransu)",
    "nav.aboutDesc":
      "Koyi game da tarihin da muhimmancin Kundin Tsarin Mulkin Najeriya",

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
    "footer.resources": "Albarkatu",
    "footer.legal": "Na Shari'a",
    "footer.followUs": "Bi Mu",
    "footer.privacyPolicy": "Ka'idojin Sirri",
    "footer.termsOfService": "Sharuɗɗan Aiki",
    "footer.disclaimer": "Bayani",
    "footer.twitter": "Twitter",
    "footer.facebook": "Facebook",
    "footer.linkedin": "LinkedIn",
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
    "hero.featuresTitle":
      "Me Ya Sa Za Ka Yi Amfani Da Kundin Tsarin Mulkin Najeriya?",

    // Features
    "hero.feature1.title": "Kundin Tsarin Mulki Mai Hulda",
    "hero.feature1.description":
      "Bincika Kundin Tsarin Mulkin Najeriya tare da mai karatunmu mai hulda wanda ke da bayani mai sauƙi.",
    "hero.feature2.title": "San Hakkinku",
    "hero.feature2.description":
      "Fahimci hakkinku na asali da yadda ake kare su a ƙarƙashin Kundin Tsarin Mulki.",
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
    "home.explore.card3.description":
      "Samun kayayyakin ilimi, gwaje-gwaje, da nazarin lamari don ƙara fahimtarka.",
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
    "newsletter.errorMessage":
      "An sami kuskure. Da fatan za a sake gwadawa daga baya.",
    "newsletter.invalidEmail":
      "Da fatan a shigar da adireshin imel mai inganci",
    "newsletter.privacyNotice":
      "Ta hanyar rajista, kun yarda da Manufar Sirri da Sharuɗɗan Aiki.",

    //learn content

    "learn.title": "Koyi Kundin Tsarin Mulkin Najeriya",
    "learn.subtitle":
      "Bincika kayayyakin koyarwar mu don taimaka maka fahimtar Kundin Tsarin Mulkin Najeriya a hanyar da ta fi saukin fahimta.",
    "learn.quizButton": "Yi Gwaji",
    "learn.chatButton": "Yi Magana da AI",
    "learn.explanations.title": "Bayani Mai Saukin Fahimta",
    "learn.explanations.subtitle":
      "Fahimtar dokokin da suka fi ƙarfi a hanyar da ta fi saukin fahimta.",
    "learn.readMore": "Karanta Bayani",
    "learn.fundamentalRights.title": "Hakkokin Asali",
    "learn.fundamentalRights.description":
      "Sashe na Hudu na Kundin Tsarin Mulki",
    "learn.fundamentalRights.content":
      "Koyi game da hakkokin da aka tanada wa kowane ɗan Najeriya, kamar hakkin rayuwa, mutunci, 'yancin kai, shari'a mai gaskiya, sirri, 'yancin tunani, magana, da sauransu.",
    "learn.federalSystem.title": "Tsarin Mulkin Tarayya",
    "learn.federalSystem.description": "Sashe na Biyar, Shida, da Bakwai",
    "learn.federalSystem.content":
      "Fahimci yadda aka raba iko tsakanin gwamnatin tarayya, jiha, da kananan hukumomi a Najeriya, tare da nauyin majalisar dokoki, shugabanci, da shari'a.",
    "learn.citizenship.title": "Hakkokin 'Yan Ƙasa",
    "learn.citizenship.description": "Sashe na Uku na Kundin Tsarin Mulki",
    "learn.citizenship.content":
      "Koyi game da wanda zai iya zama ɗan Najeriya, yadda za a sami 'yan ƙasa, da hakkokin da 'yan ƙasa ke da su.",

    //community content

    "community.title": "Shiga Tattaunawa akan Kundin Tsarin Mulki",
    "community.subtitle":
      "Haɗa kai da 'yan ƙasa, masana dokoki, da masana ilimi don tattauna, muhawara, da koyon game da Kundin Tsarin Mulkin Najeriya.",
    "community.joinDiscussion": "Shiga Tattaunawa",
    "community.askExpert": "Tambayi Masani",
    "community.recentDiscussions": "Sabbin Tattaunawa",
    "community.newDiscussion": "Sabon Tattaunawa",

    //about content

    "about.title": "Game da Kundin Tsarin Mulkin Najeriya",
    "about.subtitle":
      "Koyi game da tarihi, muhimmanci, da cigaban dokoki mafi girma na Najeriya",

    "community.modal.title": "Ƙirƙiri Sabon Tattaunawa",
    "community.modal.topicLabel": "Jigo",
    "community.modal.bodyLabel": "Abinda Ke Ciki",
    "community.modal.cancelButton": "Soke",
    "community.modal.submitButton": "Ƙirƙiri Tattaunawa",
    "community.modal.submitting": "Ana ƙirƙira...",

    // privacy translation

    "privacy.title": "Ka'idojin Sirri",
    "privacy.introduction.title": "Gabatarwa",
    "privacy.introduction.content":
      "Wannan Ka'idojin Sirri yana bayyana yadda muke tattara, amfani, da kuma kare bayananku na sirri lokacin da kuke amfani da dandamalin Kundin Tsarin Mulkin Najeriya.",

    "privacy.dataCollection.title": "Bayanan da Muke Tattara",
    "privacy.dataCollection.content": "Muna tattara wadannan nau'ikan bayanai:",
    "privacy.dataCollection.items.1":
      "Bayanan sirri (suna, adireshin imel) lokacin da kuka ƙirƙiri asusu",
    "privacy.dataCollection.items.2":
      "Bayanai game da amfani da hulɗa da dandamalinmu",
    "privacy.dataCollection.items.3":
      "Bayanai game da na'ura da bayanin mai bincike",
    "privacy.dataCollection.items.4": "Ra'ayoyi da gudanar da tattaunawa",
    "privacy.dataCollection.items.5": "Kukis da sauran fasahar bi",

    "privacy.dataUsage.title": "Yadda Muke Amfani da Bayananku",
    "privacy.dataUsage.content":
      "Muna amfani da bayananku don waɗannan dalilai:",
    "privacy.dataUsage.items.1": "Don samar da inganta ayyukanmu",
    "privacy.dataUsage.items.2": "Don keɓance ƙwarewarku",
    "privacy.dataUsage.items.3": "Don sadarwa game da ayyukanmu",
    "privacy.dataUsage.items.4":
      "Don tabbatar da tsaron dandamali da hana mummunan amfani",

    "privacy.security.title": "Tsaron Bayanai",
    "privacy.security.content":
      "Muna aiwatar da matakan tsaro masu dacewa don kare bayananku na sirri daga shiga ba izini, canza, ko bayyanawa.",

    "privacy.cookies.title": "Kukis da Bi",
    "privacy.cookies.content":
      "Muna amfani da kukis da makamancin fasahar bi don inganta ƙwarewarku da tattara bayanai game da amfani. Za ku iya sarrafa saituna na kukis ta hanyar mai binciken ku.",

    "privacy.rights.title": "Hakkokinku",
    "privacy.rights.content":
      "Kuna da waɗannan hakkokin game da bayananku na sirri:",
    "privacy.rights.items.1": "Shiga bayananku na sirri",
    "privacy.rights.items.2": "Gyara bayanai marasa daidaito",
    "privacy.rights.items.3": "Nema a share bayananku",
    "privacy.rights.items.4": "Ƙi aikin bayanai",
    "privacy.rights.items.5": "Dauke bayanai",

    "privacy.contact.title": "Tuntuɓe Mu",
    "privacy.contact.content":
      "Idan kuna da wata tambaya game da wannan Ka'idojin Sirri, da fatan za a tuntuɓe mu a privacy@constitutionhub.ng",

    //Terms translation

    "terms.content.title": "Abinda Mai Amfani Ya Wallafa",
    "terms.content.content":
      "Kana da mallakan duk abinda ka wallafa a dandalinmu. Ta wurin wallafa abinda ka wallafa, ka ba mu damar amfani da shi, nuna shi, da raba shi tare da ayyukanmu.",

    "terms.intellectual.title": "Mallakan Basira",
    "terms.intellectual.content":
      "Duk abinda ke cikin Kundin Tsarin Mulkin Najeriya, har da rubutu, zane-zane, alamomi, da manhajar kwamfuta, muke mallakar sa ko an ba mu damar amfani da shi kuma yana da kariya ta ƙarƙashin dokoki na mallakan basira na Najeriya da na duniya.",

    "terms.liability.title": "Iyakancin Hakki",
    "terms.liability.content":
      "Kundin Tsarin Mulkin Najeriya yana ba da bayani ne kawai don ilimi. Ba mu da alhakin duk wani asara da ya samo asali daga amfani da ayyukanmu ko dogaro da bayanin da muka bayar.",

    "terms.termination.title": "Dakatar da Amfani",
    "terms.termination.content":
      "Muna da hakkin dakatar da ko tsayar da shiga ku ga ayyukanmu a kowane lokaci, ba tare da sanarwa ba, saboda wata hali da muka yi imanin ta saba wa waɗannan Sharuɗɗan Aiki ko ta cutar da wasu masu amfani, mu, ko wasu bangare na uku.",

    "terms.governing.title": "Doka mai Mulki",
    "terms.governing.content":
      "Waɗannan Sharuɗɗan Aiki suna ƙarƙashin dokoki na Najeriya. Duk wata gardama da ta taso daga waɗannan sharuɗɗa za ta kasance a ƙarƙashin ikon kotun Najeriya.",

    "terms.contact.title": "Bayanin Tuntuɓa",
    "terms.contact.content":
      "Idan kuna da wata tambaya game da waɗannan Sharuɗɗan Aiki, da fatan za a tuntuɓe mu a terms@constitutionhub.ng",

    // Disclaimer translations

    "disclaimer.title": "Bayani",
    "disclaimer.information.title": "Manufar Bayani",
    "disclaimer.information.content":
      "An samar da yanar gizon Kundin Tsarin Mulkin Najeriya ne kawai don bayani na gama-gari da kuma ilimi. Ko da yake muna kokarin kiyaye bayanin ya kasance na yanzu kuma daidai, ba mu yi wakilci ko tabbatarwa ta kowace irin, bayyane ko ɓoye, game da cikakkiyar, daidaiton, amincewa, dacewa ko samuwar bayanin da ke cikin wannan yanar gizon.",

    "disclaimer.accuracy.title": "Daidaito da Cikakke",
    "disclaimer.accuracy.content":
      "Duk dogaro da kuka yi akan irin wannan bayani yana kan alhakinku. Muna ba da shawarar tabbatar da duk wani bayani da aka samu daga ko ta hanyar wannan yanar gizon tare da tushen gwamnati na hukuma ko masanan doka kafin ɗaukar mataki akan irin wannan bayani.",

    "disclaimer.legal.title": "Shawarar Shari'a",
    "disclaimer.legal.content":
      "Abinda ke cikin wannan yanar gizo ba shawarar shari'a bane kuma ba ya kamata a dogara da shi haka. Muna ba da shawarar tuntuɓar masanan doka masu cancanta don al'amuran shari'a na musamman.",

    "disclaimer.external.title": "Mahanga na Waje",
    "disclaimer.external.content":
      "Wannan yanar gizon na iya ƙunshe da mahanga zuwa yanar gizo na waje. Ba mu da iko akan yanayin, abinda ke ciki, da samuwar waɗannan saituna. Haɗawa da wani mahanga ba tabbacin shawarwari ko goyon bayan ra'ayoyin da aka bayyana a cikinsu bane.",

    "disclaimer.changes.title": "Canje-canje da Sabuntawa",
    "disclaimer.changes.content":
      "Muna da hakkin yin ƙari, share, ko gyara abinda ke cikin wannan yanar gizon a kowane lokaci ba tare da sanarwa ba. Muna ƙarfafa wa masu amfani da su dinga dubawa wannan bayani don sabuntawa.",

    "disclaimer.contact.title": "Bayanin Tuntuɓi",
    "disclaimer.contact.content":
      "Idan kuna da wata tambaya game da wannan bayani, da fatan za a tuntuɓe mu a disclaimer@constitutionhub.ng",
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
    "nav.interactiveReaderDesc":
      "Ka kí o sì ṣe àyẹ̀wò ìwé òfin pẹ̀lú olùkà ìbáṣepọ̀ wa",
    "nav.tableOfContentsDesc":
      "Ṣe àyẹ̀wò tábìlì àkóónú kíkún ti Ìwé Òfin Nàìjíríà",
    "nav.searchDesc":
      "Wá àwọn ọ̀rọ̀ pàtó, àwọn apá, tàbí àwọn kókó nínú ìwé òfin",
    "nav.fullTextDesc": "Wo ọ̀rọ̀ kíkún ti Ìwé Òfin Nàìjíríà",
    "nav.downloadDesc":
      "Gbà ìwé òfin sílẹ̀ ní àwọn ọ̀nà oríṣiríṣi (PDF, EPUB, abbl)",
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
    "footer.resources": "Àwọn Ohun Èlò",
    "footer.legal": "Òfin",
    "footer.followUs": "Tẹ̀lé Wa",
    "footer.privacyPolicy": "Ìlànà Àṣírí",
    "footer.termsOfService": "Àwọn Òfin Iṣẹ́",
    "footer.disclaimer": "Ìkìlọ̀",
    "footer.twitter": "Twitter",
    "footer.facebook": "Facebook",
    "footer.linkedin": "LinkedIn",
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
    "hero.feature1.description":
      "Ṣe àyẹ̀wò Ìwé Òfin Nàìjíríà pẹ̀lú olùkà ìbáṣepọ̀ wa tó ní àlàyé tó rọrùn.",
    "hero.feature2.title": "Mọ Àwọn Ẹ̀tọ́ Rẹ",
    "hero.feature2.description":
      "Mọ àwọn ẹ̀tọ́ pàtàkì rẹ àti bí wọ́n ṣe ń dáàbò bò wọ́n lábẹ́ Ìwé Òfin.",
    "hero.feature3.title": "Ìmọ̀ Òfin",
    "hero.feature3.description":
      "Gba ìmọ̀ lọ́wọ́ àwọn òǹkọ́wé lórí àwọn ìpèsè ìwé òfin àti àwọn ìdájọ́ pàtàkì.",
    "hero.feature4.title": "Ìjíròrò Àwùjọ",
    "hero.feature4.description":
      "Darapọ̀ mọ́ àwọn ìjíròrò pẹ̀lú àwọn ọmọ orílẹ̀-èdè àti àwọn òǹkọ́wé òfin lórí àwọn ọ̀rọ̀ ìwé òfin.",

    // Home page
    "home.explore.title": "Ṣe Àyẹ̀wò Ìwé Òfin",
    "home.explore.subtitle":
      "Ṣe ìrìn àjò láàrin Ìwé Òfin Nàìjíríà pẹ̀lú àwọn irinṣẹ́ ìbáṣepọ̀ àti àwọn ìwé ìrànlọ́wọ́ wa.",
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
    "newsletter.errorMessage":
      "Àṣìṣe kan ṣẹlẹ̀. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan síi lẹ́yìn.",
    "newsletter.invalidEmail": "Jọ̀wọ́ tẹ àdírẹ́ẹ̀sì ímeèlì tó tọ́ sí i",
    "newsletter.privacyNotice":
      "Nípa fíforúkọsílẹ̀, o gbà pẹ̀lú Ìlànà Àṣírí àti Àwọn Òfin Iṣẹ́ wa.",

    //learn content

    "learn.title": "Kọ́ Ìwé Òfin Nàìjíríà",
    "learn.subtitle":
      "Ṣàwárí àwọn ohun èlò ẹ̀kọ́ tó wúlò láti ràn ọ́ lọ́wọ́ láti mọ Ìwé Òfin Nàìjíríà ní ọ̀nà tó rọrùn.",
    "learn.quizButton": "Ṣe Ìdánwò",
    "learn.chatButton": "Bá AI Sọ̀rọ̀",
    "learn.explanations.title": "Àlàyé Tó Rọrùn",
    "learn.explanations.subtitle":
      "Níní òye àwọn ìmọ̀ òfin tó ṣòro ní ọ̀nà tó rọrùn.",
    "learn.readMore": "Ka Àlàyé",
    "learn.fundamentalRights.title": "Àwọn Ẹ̀tọ́ Pàtàkì",
    "learn.fundamentalRights.description": "Orí Kẹrin Ìwé Òfin",
    "learn.fundamentalRights.content":
      "Kọ́ nípa àwọn ẹ̀tọ́ tí gbogbo ọmọ Nàìjíríà ní, bíi ẹ̀tọ́ sí ìgbé ayé, ọlá ènìyàn, òmìnira, ìdájọ́ tó tọ́, àṣírí, òmìnira èrò, ọ̀rọ̀, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.",
    "learn.federalSystem.title": "Ètò Ìjọba Àpapọ̀",
    "learn.federalSystem.description": "Orí Karùn-ún, Kẹfà, àti Keje",
    "learn.federalSystem.content":
      "Mọ bí a ṣe pín agbára láàárín ìjọba àpapọ̀, ìpínlẹ̀, àti ìjọba ìbílẹ̀ ní Nàìjíríà, pẹ̀lú àwọn iṣẹ́ aṣòfin, olùdarí, àti onídàjọ́.",
    "learn.citizenship.title": "Ẹ̀tọ́ Ọmọ Ìbílẹ̀",
    "learn.citizenship.description": "Orí Kẹta Ìwé Òfin",
    "learn.citizenship.content":
      "Kọ́ nípa ta ni ó lè jẹ́ ọmọ ìbílẹ̀ Nàìjíríà, bí a ṣe lè di ọmọ ìbílẹ̀, àti àwọn ẹ̀tọ́ àti àǹfààní tó wà fún ọmọ ìbílẹ̀ Nàìjíríà.",

    //community content

    "community.title": "Darapọ̀ mọ́ Ìjírọ̀rọ̀ lórí Ìwé Òfin",
    "community.subtitle":
      "Báńṣe pàdé pẹ̀lú àwọn ènìyàn ilẹ̀ wa, àwọn amòfin, àti àwọn onímọ̀ láti sọ̀rọ̀, jíròrò, àti kọ́ nípa Ìwé Òfin Nàìjíríà.",
    "community.joinDiscussion": "Darapọ̀ mọ́ Ìjírọ̀rọ̀",
    "community.askExpert": "Bí Amòfin",
    "community.recentDiscussions": "Àwọn Ìjírọ̀rọ̀ Tuntun",
    "community.newDiscussion": "Ìjírọ̀rọ̀ Tuntun",

    //about content

    "about.title": "Nípa Ìwé Òfin Nàìjíríà",
    "about.subtitle":
      "Kọ́ nípa ìtàn, pàtàkì, àti ìdàgbàsókè òfin tó ga jù lọ ní Nàìjíríà",

    // Modal translations
    "community.modal.title": "Ṣẹ̀dá Ìjírọ̀rọ̀ Tuntun",
    "community.modal.topicLabel": "Kókó Ọ̀rọ̀",
    "community.modal.bodyLabel": "Àkóónú",
    "community.modal.cancelButton": "Fagílé",
    "community.modal.submitButton": "Ṣẹ̀dá Ìjírọ̀rọ̀",
    "community.modal.submitting": "Ń ṣẹ̀dá...",

    //privacy translations
    "privacy.title": "Ìlànà Àṣírí",
    "privacy.introduction.title": "Ìfáárà",
    "privacy.introduction.content":
      "Ìlànà Àṣírí yìí ṣàlàyé bí a ṣe ń gbà, lo, àti dáàbò bo àwọn àlàyé àdáni rẹ nígbà tí o bá ń lo àwọn ohun èlò Ìwé Òfin Nàìjíríà.",

    "privacy.dataCollection.title": "Àwọn Àlàyé Tí A Ń Gbà",
    "privacy.dataCollection.content": "A ń gbà àwọn oríṣi àlàyé wọ̀nyí:",
    "privacy.dataCollection.items.1":
      "Àlàyé àdáni (orúkọ, àdírẹ́ẹ̀sì ímeèlì) nígbà tí o bá ṣẹ̀dá àpamọ́",
    "privacy.dataCollection.items.2": "Dátà ìlò àti ìbáṣepọ̀ pẹ̀lú ojú òpó wa",
    "privacy.dataCollection.items.3": "Àlàyé ẹ̀rọ àti àwọn alábápàdé",
    "privacy.dataCollection.items.4": "Àwọn àròkọ àti àwọn ìdáhùn ìjíròrò",
    "privacy.dataCollection.items.5": "Àwọn kúkì àti àwọn ìmọ̀ ẹ̀rọ tó jọra",

    "privacy.dataUsage.title": "Bí A Ṣe Ń Lo Àlàyé Rẹ",
    "privacy.dataUsage.content": "A ń lo àlàyé rẹ fún àwọn èrèdí wọ̀nyí:",
    "privacy.dataUsage.items.1": "Láti pèsè àti mú àwọn iṣẹ́ wa dára sí i",
    "privacy.dataUsage.items.2": "Láti ṣe àṣàyàn ìrírí rẹ",
    "privacy.dataUsage.items.3": "Láti bá ọ sọ̀rọ̀ nípa àwọn iṣẹ́ wa",
    "privacy.dataUsage.items.4": "Láti ríi dájú àbò ojú òpó àti dínà ìlòkulò",

    "privacy.security.title": "Àbò Dátà",
    "privacy.security.content":
      "A ń mú àwọn ọ̀nà àbò tó yẹ wá láti dáàbò bo àlàyé àdáni rẹ kúrò nínú wíwọlé àìmọ̀, àyípadà, tàbí àfihàn.",

    "privacy.cookies.title": "Àwọn Kúkì àti Ìtẹ̀lé",
    "privacy.cookies.content":
      "A ń lo àwọn kúkì àti àwọn ìmọ̀ ẹ̀rọ ìtẹ̀lé láti mú ìrírí rẹ dára sí i àti láti gbà dátà ìlò. O lè ṣàkóso àwọn ìtò kúkì láti inú aláàbápàdé rẹ.",

    "privacy.rights.title": "Àwọn Ẹ̀tọ́ Rẹ",
    "privacy.rights.content": "O ní àwọn ẹ̀tọ́ wọ̀nyí nípa àlàyé àdáni rẹ:",
    "privacy.rights.items.1": "Wọlé sí àlàyé àdáni rẹ",
    "privacy.rights.items.2": "Tún àlàyé àìtọ́ ṣe",
    "privacy.rights.items.3": "Bèrè fún píparẹ́ àlàyé rẹ",
    "privacy.rights.items.4": "Takò ìṣiṣẹ́ àlàyé rẹ",
    "privacy.rights.items.5": "Ìgbéga dátà",

    "privacy.contact.title": "Kàn Sí Wa",
    "privacy.contact.content":
      "Tí o bá ní ìbéèrè nípa Ìlànà Àṣírí yìí, jọ̀wọ́ kàn sí wa ní privacy@constitutionhub.ng",

    // Terms translations

    "terms.content.title": "Àkóónú Olùlò",
    "terms.content.content":
      "O ni ẹ̀tọ́ sí ohunkóhun tí o fi sílẹ̀ sí ojú òpó wa. Nípa fífi àkóónú sílẹ̀, o fún wa ní àṣẹ láìnípọn láti lo, fihàn, àti pín àkóónú náà ní ìbámu pẹ̀lú àwọn iṣẹ́ wa.",

    "terms.intellectual.title": "Ohun Ìní Ọgbọ́n",
    "terms.intellectual.content":
      "Gbogbo àkóónú, àwọn ẹ̀ya, àti iṣẹ́ ṣíṣe ti Ìwé Òfin Nàìjíríà, pẹ̀lú ọ̀rọ̀, àwòrán, àmì, àti sọ́ọ̀fụwẹ́ẹ̀, jẹ́ ohun ìní tàbí ní àṣẹ fún wa tí a sì dáàbò bò lábẹ́ àwọn òfin ohun ìní ọgbọ́n Nàìjíríà àti ti àgbáyé.",

    "terms.liability.title": "Ìdíwọ́ Ẹ̀bi",
    "terms.liability.content":
      "Ìwé Òfin Nàìjíríà ń pèsè àlàyé fún ìdánilẹ́kọ̀ọ́ nìkan. A kò ní ẹ̀bi fún èyíkéyìí àdánù tó bá wá láti ìlò iṣẹ́ wa tàbí gbígbẹ́kẹ̀lé àlàyé tí a pèsè.",

    "terms.termination.title": "Ìparí",
    "terms.termination.content":
      "A ní ẹ̀tọ́ láti parí tàbí dá ìwọlé rẹ sí àwọn iṣẹ́ wa dúró ní ìgbàkígbà, láìsí ìkìlọ̀ ṣáájú, fún ìwà tí a gbàgbọ́ pé ó ta àwọn Òfin Iṣẹ́ yìí kọjá tàbí tó léwu fún àwọn olùlò mìíràn, àwa, tàbí àwọn ẹlẹgbẹ́.",

    "terms.governing.title": "Òfin Àkóso",
    "terms.governing.content":
      "Àwọn Òfin Iṣẹ́ yìí wà lábẹ́ àwọn òfin Nàìjíríà. Èyíkéyìí ìjà tó bá wá láti àwọn òfin yìí yóò wà lábẹ́ àṣẹ pàtàkì ti àwọn ilé ẹjọ́ Nàìjíríà.",

    "terms.contact.title": "Àlàyé Fún Ìkànsí",
    "terms.contact.content":
      "Tí o bá ní ìbéèrè nípa àwọn Òfin Iṣẹ́ yìí, jọ̀wọ́ kàn sí wa ní terms@constitutionhub.ng",

    // Disclaimer translations

    "disclaimer.title": "Ìkìlọ̀",
    "disclaimer.information.title": "Èrèdí Ìfitónilétí",
    "disclaimer.information.content":
      "A pèsè ojú òpó Ìwé Òfin Nàìjíríà fún ìfitónilétí gbogbogbò àti èrèdí ẹ̀kọ́ nìkan. Bí a tilẹ̀ ń gbìyànjú láti jẹ́ kí ìfitónilétí wà ní ìgbàlódé àti tọ́, a kò ṣe àfihàn tàbí ìdánilójú kankan, gbangba tàbí fífihàn, nípa pípé, tọ́, gbígbẹ́kẹ̀lé, yíyẹ tàbí wíwà ní ìfitónilétí tó wà lórí ojú òpó yìí.",

    "disclaimer.accuracy.title": "Òtítọ́ àti Pípé",
    "disclaimer.accuracy.content":
      "Gbogbo gbígbẹ́kẹ̀lé tí o bá fi sí irú ìfitónilétí bẹ́ẹ̀ wà lábẹ́ ewu ara rẹ. A dábàá pé kí o ṣe ìfidájú ìfitónilétí tí a rí láti ojú òpó yìí pẹ̀lú àwọn orí ìfitónilétí ìjọba tàbí àwọn òǹkọ́wé òfin tó yẹ ṣáájú kí o tó ṣe ohunkóhun lórí ìfitónilétí náà.",

    "disclaimer.legal.title": "Ìmọ̀ràn Òfin",
    "disclaimer.legal.content":
      "Àkóónú lórí ojú òpó yìí kò jẹ́ ìmọ̀ràn òfin bẹ́ẹ̀ sì ni kò yẹ kí a gbẹ́kẹ̀lé bí bẹ́ẹ̀. A dábàá pé kí o bá àwọn òǹkọ́wé òfin tó yẹ sọ̀rọ̀ fún àwọn ọ̀rọ̀ òfin pàtó.",

    "disclaimer.external.title": "Àwọn Ọ̀nà Àjẹsára",
    "disclaimer.external.content":
      "Ojú òpó yìí lè ní àwọn ọ̀nà àjẹsára sí àwọn ojú òpó òde. A kò ní ìdarí lórí irú, àkóónú, àti wíwà ní àwọn ojú òpó náà. Fífi àwọn ọ̀nà àjẹsára kankan sí i kò túmọ̀ sí ìdábàá tàbí ìfọwọ́sí àwọn èrò tí wọ́n fihàn nínú wọn.",

    "disclaimer.changes.title": "Àwọn Àyípadà àti Ìmúdójúìwọ̀n",
    "disclaimer.changes.content":
      "A ní ẹ̀tọ́ láti ṣe àfikún, yọkúrò, tàbí ṣe àtúnṣe sí àwọn àkóónú ojú òpó yìí ní ìgbàkígbà láìsí ìkìlọ̀ ṣáájú. A gbà àwọn olùlò níyànjú láti máa ṣàyẹ̀wò ìkìlọ̀ yìí fún àwọn ìmúdójúìwọ̀n.",

    "disclaimer.contact.title": "Àlàyé Fún Ìkànsí",
    "disclaimer.contact.content":
      "Tí o bá ní ìbéèrè nípa ìkìlọ̀ yìí, jọ̀wọ́ kàn sí wa ní disclaimer@constitutionhub.ng",
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
    "nav.interactiveReaderDesc":
      "Gụọ ma nyochaa iwu ọchịchị site na ọgụgụ mmekọrịta anyị",
    "nav.tableOfContentsDesc": "Lelee tebụl ọdịnaya nke Iwu Ọchịchị Naịjirịa",
    "nav.searchDesc":
      "Chọọ okwu pụrụ iche, ngalaba, ma ọ bụ isiokwu n'ime iwu ọchịchị",
    "nav.fullTextDesc": "Lelee ederede zuru ezu nke Iwu Ọchịchị Naịjirịa",
    "nav.downloadDesc":
      "Budata iwu ọchịchị n'ụdị dị iche iche (PDF, EPUB, wdg)",
    "nav.aboutDesc":
      "Mụta banyere akụkọ ihe mere eme na mkpa Iwu Ọchịchị Naịjirịa",

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
    "footer.resources": "Akụ",
    "footer.legal": "Iwu",
    "footer.followUs": "Soro Anyị",
    "footer.privacyPolicy": "Iwu Nzuzo",
    "footer.termsOfService": "Usoro Ọrụ",
    "footer.disclaimer": "Nkwupụta",
    "footer.twitter": "Twitter",
    "footer.facebook": "Facebook",
    "footer.linkedin": "LinkedIn",
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
    "hero.feature1.description":
      "Nyochaa Iwu Ọchịchị Naịjirịa site na ọgụgụ mmekọrịta anyị nke nwere nkọwa dị mfe.",
    "hero.feature2.title": "Mara Ikike Gị",
    "hero.feature2.description":
      "Ghọta ikike gị bụ isi na otú e si echebe ha n'okpuru Iwu Ọchịchị.",
    "hero.feature3.title": "Nghọta Iwu",
    "hero.feature3.description":
      "Nweta nghọta ndị ọkachamara banyere iwu ọchịchị na ikpe ụlọ ikpe dị mkpa.",
    "hero.feature4.title": "Mkparịta Ụka Obodo",
    "hero.feature4.description":
      "Sonye na mkparịta ụka ndị mmadụ na ndị ọkachamara iwu banyere okwu iwu ọchịchị.",

    // Home page
    "home.explore.title": "Nyochaa Iwu Ọchịchị",
    "home.explore.subtitle":
      "Gaa n'Iwu Ọchịchị Naịjirịa site na ngwá ọrụ mmekọrịta na akụ anyị.",
    "home.explore.card1.title": "Ọgụgụ Mmekọrịta",
    "home.explore.card1.description":
      "Gụọ ma gaa n'Iwu Ọchịchị site na ọgụgụ mmekọrịta anyị nke nwere nkọwa dị mfe.",
    "home.explore.card1.button": "Malite Ịgụ",
    "home.explore.card2.title": "Onye Nnyemaka AI",
    "home.explore.card2.description":
      "Jụọ ajụjụ banyere Iwu Ọchịchị ma nweta azịza ozugbo site n'aka onye nnyemaka anyị nke AI.",
    "home.explore.card2.button": "Jụọ Ajụjụ",
    "home.explore.card3.title": "Akụ Mmụta",
    "home.explore.card3.description":
      "Nweta ihe mmụta, ajụjụ, na ọmụmaatụ iji mee ka nghọta gị mie emi.",
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
    "testimonials.subtitle":
      "Nụrụ site n'aka ndị mmadụ, ndị ọkachamara iwu, na ndị nkuzi na-eji Iwu Ọchịchị Naịjirịa.",
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
    "newsletter.successMessage":
      "Daalụ maka ịdebanye aha n'akwụkwọ akụkọ anyị!",
    "newsletter.errorMessage": "Nsogbu mere. Biko gbalịa ọzọ ma e mesịa.",
    "newsletter.invalidEmail": "Biko tinye adreesị email dị mma",
    "newsletter.privacyNotice":
      "Site na ịdebanye aha, ị kwenyere na Iwu Nzuzo na Usoro Ọrụ anyị.",

    //Learn content
    "learn.title": "Mụta Iwu Ọchịchị Naịjirịa",
    "learn.subtitle":
      "Nyochaa ihe mmụta anyị mere maka inyere gị aka ịghọta Iwu Ọchịchị Naịjirịa n'uzọ dị mfe.",
    "learn.quizButton": "Nwaa Onwe Gị",
    "learn.chatButton": "Kparịta Ụka na AI",
    "learn.explanations.title": "Nkọwa Dị Mfe",
    "learn.explanations.subtitle": "Ịghọta iwu siri ike n'uzọ dị mfe.",
    "learn.readMore": "Gụọ Nkọwa",
    "learn.fundamentalRights.title": "Ikike Ndị Dị Mkpa",
    "learn.fundamentalRights.description": "Isi Nke Anọ nke Iwu Ọchịchị",
    "learn.fundamentalRights.content":
      "Mụta maka ikike niile e nyere onye Naịjirịa ọ bụla, gụnyere ikike inwe ndụ, ugwu, nnwere onwe, ikpe ziri ezi, nzuzo, nnwere uche, okwu, na ndị ọzọ.",
    "learn.federalSystem.title": "Usoro Ọchịchị Etiti",
    "learn.federalSystem.description": "Isi Nke Ise, Isii, na Asaa",
    "learn.federalSystem.content":
      "Ghọta ka e si kewaa ike n'etiti ọchịchị etiti, steeti, na ọchịchị obodo na Naịjirịa, gụnyere ọrụ ndị ome iwu, ndị isi ọchịchị, na ndị ikpe.",
    "learn.citizenship.title": "Ikike Ọnye Ala",
    "learn.citizenship.description": "Isi Nke Atọ nke Iwu Ọchịchị",
    "learn.citizenship.content":
      "Mụta onye nwere ike ịbụ onye Naịjirịa, ka e si enweta ya, na ikike na ohere dịịrị ndị Naịjirịa.",

    //community content

    "community.title": "Soro na Mkparịta ụka Iwu Ọchịchị",
    "community.subtitle":
      "Jikọọ ndị ọzọ, ndị ọkàiwu, na ndị ọkà mmụta ka ị na-akparịta ụka, na-amụta gbasara Iwu Ọchịchị Naịjirịa.",
    "community.joinDiscussion": "Soro na Mkparịta ụka",
    "community.askExpert": "Jụọ Ọkàiwu",
    "community.recentDiscussions": "Mkparịta ụka Ọhụrụ",
    "community.newDiscussion": "Mkparịta ụka Ọhụrụ",

    //about content

    "about.title": "Maka Iwu Ọchịchị Naịjirịa",
    "about.subtitle":
      "Mụta maka akụkọ, mkpa, na ọganihu iwu kacha mkpa na Naịjirịa",

    "community.modal.title": "Mepụta Mkparịta ụka Ọhụrụ",
    "community.modal.topicLabel": "Isiokwu",
    "community.modal.bodyLabel": "Ọdịnaya",
    "community.modal.cancelButton": "Kagbuo",
    "community.modal.submitButton": "Mepụta Mkparịta ụka",
    "community.modal.submitting": "Na-emepụta...",

    //privacy translation

    "privacy.title": "Iwu Nzuzo",
    "privacy.introduction.title": "Mkpọlite",
    "privacy.introduction.content":
      "Iwu Nzuzo a na-akọwa otú anyị si anakọta, eji, nakwa echebe ozi gbasara gị mgbe ị na-eji sistemụ Iwu Ọchịchị Naịjirịa.",

    "privacy.dataCollection.title": "Ozi Anyị Na-anakọta",
    "privacy.dataCollection.content": "Anyị na-anakọta ụdị ozi ndị a:",
    "privacy.dataCollection.items.1":
      "Ozi onwe (aha, adreesị email) mgbe ị na-eme akaụntụ",
    "privacy.dataCollection.items.2":
      "Data ojiji na mmekọrịta gị na sistemụ anyị",
    "privacy.dataCollection.items.3": "Ozi ngwaọrụ na ihe nchọgharị",
    "privacy.dataCollection.items.4": "Nghọta na mkparịta ụka",
    "privacy.dataCollection.items.5": "Kuki na teknụzụ nchịkọta yiri ya",

    "privacy.dataUsage.title": "Otú Anyị Si Eji Ozi Gị",
    "privacy.dataUsage.content": "Anyị na-eji ozi gị maka ihe ndị a:",
    "privacy.dataUsage.items.1": "Inye ma mee ka ọrụ anyị ka mma",
    "privacy.dataUsage.items.2": "Ime ka ahụmịhe gị dị mma",
    "privacy.dataUsage.items.3": "Ikwukọrịta gbasara ọrụ anyị",
    "privacy.dataUsage.items.4":
      "Ịhụ na sistemụ dị nchebe ma gbochie mmebi iwu",

    "privacy.security.title": "Nchekwa Data",
    "privacy.security.content":
      "Anyị na-etinye usoro nchekwa kwesịrị ekwesị iji chebe ozi gị site na ịbanye na-enweghị ikike, mgbanwe, ma ọ bụ mkpughe.",

    "privacy.cookies.title": "Kuki na Nchịkọta",
    "privacy.cookies.content":
      "Anyị na-eji kuki na teknụzụ nchịkọta yiri ya iji mee ka ahụmịhe gị ka mma nakwa ịnakọta data ojiji. Ị nwere ike ịchịkwa ntọala kuki site na nchọgharị gị.",

    "privacy.rights.title": "Ikike Gị",
    "privacy.rights.content": "I nwere ikike ndị a gbasara ozi gị:",
    "privacy.rights.items.1": "Ịbanye na ozi gị",
    "privacy.rights.items.2": "Idozi ozi na-ezighị ezi",
    "privacy.rights.items.3": "Ịrịọ ka ehichapụ ozi gị",
    "privacy.rights.items.4": "Ịgọnarị usoro ozi",
    "privacy.rights.items.5": "Mbufe data",

    "privacy.contact.title": "Kpọtụrụ Anyị",
    "privacy.contact.content":
      "Ọ bụrụ na ị nwere ajụjụ ọ bụla gbasara Iwu Nzuzo a, biko kpọtụrụ anyị na privacy@constitutionhub.ng",

    // Terms translation
    "terms.content.title": "Ọdịnaya Ndị Ọrụ",
    "terms.content.content":
      "Ị na-ejide ikike niile n'ọdịnaya ọ bụla ị na-etinye na sistemụ anyị. Site n'itinye ọdịnaya, ị na-enye anyị ikike iji, gosipụta, nakwa kesaa ọdịnaya ahụ n'usoro ọrụ anyị.",

    "terms.intellectual.title": "Ikike Mmepụta",
    "terms.intellectual.content":
      "Ọdịnaya niile, atụmatụ, na ọrụ nke Iwu Ọchịchị Naịjirịa, gụnyere ederede, eserese, akara, na ngwaọrụ, bụ nke anyị ma ọ bụ e nyere anyị ikike ya nakwa e chekwara ya n'okpuru iwu ikike mmepụta Naịjirịa na mba ụwa.",

    "terms.liability.title": "Mmigbu Ikike",
    "terms.liability.content":
      "Iwu Ọchịchị Naịjirịa na-enye ozi maka mmụta naanị. Anyị anaghị ahụta onwe anyị ka ndị ikpe maka mmebi ọ bụla si n'ojiji ọrụ anyị ma ọ bụ ntụkwasị obi n'ozi anyị na-enye.",

    "terms.termination.title": "Ịkwụsị",
    "terms.termination.content":
      "Anyị nwere ikike ịkwụsị ma ọ bụ gbochie ịbanye gị n'ọrụ anyị n'oge ọ bụla, na-enweghị ozi gboo, maka omume anyị kwenyere na-emebiri usoro ndị a ma ọ bụ na-emebi ndị ọrụ ndị ọzọ, anyị, ma ọ bụ ndị ọzọ.",

    "terms.governing.title": "Iwu Na-achị",
    "terms.governing.content":
      "Usoro ndị a dị n'okpuru iwu Naịjirịa. Nsogbu ọ bụla si n'usoro ndị a ga-adị n'okpuru ikike pụrụ iche nke ụlọ ikpe Naịjirịa.",

    "terms.contact.title": "Ozi Mkpọtụrụ",
    "terms.contact.content":
      "Ọ bụrụ na ị nwere ajụjụ ọ bụla gbasara Usoro ndị a, biko kpọtụrụ anyị na terms@constitutionhub.ng",

    // Disclaimer translation

    "disclaimer.title": "Nkwupụta",
    "disclaimer.information.title": "Ebumnuche Ozi",
    "disclaimer.information.content":
      "Weebụsaịtị Iwu Ọchịchị Naịjirịa bụ maka ozi niile na ebumnuche ọmụmụ naanị. Ọ bụ ezie na anyị na-agbalị idebe ozi dị ọhụrụ ma ziri ezi, anyị anaghị eme nkwupụta ma ọ bụ nkwa ọ bụla, kpọmkwem ma ọ bụ na-atụle, gbasara nzuzu, ịdị mma, ntụkwasị obi, ịdị mma ma ọ bụ ịdị mma nke ozi dị na weebụsaịtị a.",

    "disclaimer.accuracy.title": "Ịdị Mma na Nzuzu",
    "disclaimer.accuracy.content":
      "Ntụkwasị obi ọ bụla ị na-etinye n'ozi dị otú a dị naanị n'ihe ị na-eme. Anyị na-atụ aro ịtụle ozi ọ bụla nwetara site na ma ọ bụ site na weebụsaịtị a site na isi mmalite gọọmentị ma ọ bụ ndị ọkachamara iwu tupu ime ihe ọ bụla dabere na ozi dị otú ahụ.",

    "disclaimer.legal.title": "Ndụmọdụ Iwu",
    "disclaimer.legal.content":
      "Ọdịnaya dị na weebụsaịtị a abụghị ndụmọdụ iwu ma ọ bụghị ka a ga-eji ya tụkwasị obi dị ka nke ahụ. Anyị na-atụ aro ịkpọtụrụ ndị ọkachamara iwu maka okwu iwu pụrụ iche.",

    "disclaimer.external.title": "Njikọ na Mpụga",
    "disclaimer.external.content":
      "Weebụsaịtị a nwere ike inwe njikọ gaa na weebụsaịtị ndị ọzọ. Anyị enweghị njikwa n'elu ụdị, ọdịnaya, na ọdịdị nke saịtị ndị ahụ. Ịtinye njikọ ọ bụla anaghị epute ntụziaka ma ọ bụ nkwado nke echiche e gosipụtara n'ime ha.",

    "disclaimer.changes.title": "Mgbanwe na Mmelite",
    "disclaimer.changes.content":
      "Anyị nwere ikike imezi, ihichapụ, ma ọ bụ gbanwee ọdịnaya nke weebụsaịtị a n'oge ọ bụla na-enweghị ọkwa mbụ. Anyị na-agba ndị ọrụ ume ka ha na-enyocha nkwupụta a mgbe niile maka mmelite ọ bụla.",

    "disclaimer.contact.title": "Ozi Mkpọtụrụ",
    "disclaimer.contact.content":
      "Ọ bụrụ na ị nwere ajụjụ ọ bụla gbasara nkwupụta a, biko kpọtụrụ anyị na disclaimer@constitutionhub.ng",
  },
};

// Get translation for a key in the specified language
export function getTranslation(
  key: TranslationKey,
  language: LanguageCode = "en"
): string {
  // If the language doesn't exist, fall back to English
  if (!translations[language]) {
    language = "en";
  }

  // If the key doesn't exist in the specified language, fall back to English
  return translations[language][key] || translations["en"][key] || key;
}

// Check if a translation exists for a key in the specified language
export function hasTranslation(
  key: TranslationKey,
  language: LanguageCode = "en"
): boolean {
  return Boolean(translations[language]?.[key]);
}

// Get all available languages
export function getAvailableLanguages(): Array<{
  code: string;
  name: string;
  flag: string;
}> {
  return [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ha", name: "Hausa", flag: "🇳🇬" },
    { code: "yo", name: "Yoruba", flag: "🇳🇬" },
    { code: "ig", name: "Igbo", flag: "🇳🇬" },
  ];
}
