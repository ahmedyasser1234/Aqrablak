import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.all_services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا',
    'nav.discover': 'إكتشف خدماتنا',
    // Hero
    'hero.out_of_box': 'خرجنا من الصندوق بــــ',
    'hero.title': 'أفكـــار خــار ج الكوكــب',
    'hero.desc1': 'بإنطلاقة جديدة خرجنا خارج نطاق الفكر المحدود لننطلق بك في رحلة مليئة بالإبداع خارج الكوكب.',
    'hero.desc2': 'ولأن الخروج خارج الكوكب لا يصلح للجميع، فلدينا إمكانيات تدفعنا للمغامرة بكل أريحية وثقة.',
    // Services Section
    'services.discover_title': 'اكتشـــــــــــف',
    'services.main_title': 'خدمـــــــــاتنا',
    'services.more': 'الــمــزيــــد',
    'service.motion.desc': 'موشن جرافيك يطيّر فكرتك في مدار جديد، ويحوّل رسالتك لقصة كونية تلفت انتبــــاه عميـــلك مــن أول ثــانــيــة.',
    'service.montage.desc': 'فن المونتاج هو روح الفيديو، نجمع لقطاتك بلمسة احترافية تحول المشاهد البسيطة إلى تجربة سينمائية متكاملة ومؤثرة.',
    'service.photography.desc': 'اســتــوديــو مجهّــز كأنــك عــلــى متــن مــركبــة تصويـــر؛ إضـــاءة، معـــدات، ومساحـــة جاهــزة لأي فـــكـــرة تــحــب تــطــلقــهـــا فــــي الــسمــاء.',
    'service.web.desc': 'نصــمــم موقــع يخلــى بــراندك محطـــة مضيئــة في الفضــاء الرقمــى ، سهــل الوصـــول ، سـريــع ويـــســتــقبــــل زوارك كــــأنــــ_ــــهم ضـــيــوف VIP',
    'service.content.desc': 'محتـــــوى مكتــــوب مخصــــوص لبــــرانـــدك كلمـــــاتهـــا كـــأنهـــا إشـــارت ضوئيــــة توضـــح فكرتـــك تقنــــع عميلــك وتخليـــه يخــتـــارك من بــين كل الكواكب',
    'service.marketing.desc': 'استـــراتيجيـــات تسويـــق رقميـــة توصــل بــرانـــدك لأقـــرب مـــدار لعميلـــك، بحمــلات مدروســـة تـــرفــــع وعـــــي العلامــــة وتحـــــول الــفضــــولــيــيــن لعمــــلاء دائــمــيــن.',
    // Services names for slider & titles
    'service.motion': 'موشن جرافيك',
    'service.montage': 'مونتاج',
    'service.photography': 'تصوير إحترافي',
    'service.studio': 'تأجير إستوديو',
    'service.web': 'تصميم وتطوير مواقع الويب',
    'service.content': 'كتابة المحتوى',
    'service.marketing': 'التسويق',
    // Goals
    'goals.title': 'أهــدافنـــــا',
    'goals.desc_main': 'نعيد صياغة المحتوى المرئي والأفكار لنقدم كل ما هو جديد، ونعبر بصدق عن رؤية مستقبلية تنطلق من خطوات الماضي المليئة بالخبرة، والحاضر المعزز بالثقة.',
    // Ambition
    'ambition.title': 'طموحنــــــا',
    'ambition.p1': 'الطموح بدون انطلاق لا يوصلك إلى ما تتمنى،',
    'ambition.p2': 'ونحن نصل ونطمح أكثر لأننا بالفعل انطلقنا،',
    'ambition.p3': 'فنحن في طريقنا قدمًا إلى المستقبل بإصرار',
    'ambition.p4': 'وعزيمة، فكن معنا شريكًا في الرحلة.',
    // Idea Planting
    'idea.title': 'نزرع الفكرة',
    'idea.p1': 'البذرة لا تنمو إلا في أرض صالحة للزراعة، وكذلك الفكرة',
    'idea.p2': 'لا تزدهر إلا في بيئة مناسبة لنموها. ونحن نعرف جيدًا',
    'idea.p3': 'أين نزرع الفكرة وكيف نرعاها حتى تكبر وتؤتي ثمارها.',
    // Footer
    'footer.rights': 'أقربلك ميديا - جميع الحقوق محفوظة',
    'footer.contact_us': 'تواصل معنا',
    
    // Common Buttons & Labels
    'common.order_now': 'اطلب خدمتك الآن',
    'common.view_work': 'شاهد أعمالنا',
    'common.portfolio': 'معرض أعمالنا',
    'common.work_video': 'فيديو عمل',
    'common.book_session': 'احجز جلستك',
    'common.check_availability': 'تحقق من التوافر',
    'common.start_project': 'ابدأ مشروعك',
    'common.request_sample': 'اطلب عينة الآن',
    'common.free_consultation': 'استشارة مجانية',

    // Page: Motion Graphics
    'page.motion.title': 'موشن جرافيك',
    'page.motion.desc': 'نحول الأفكار المعقدة إلى رسوم متحركة بسيطة وجذابة. موشن جرافيك يطيّر فكرتك في مدار جديد ويخطف أنظار العملاء من الثانية الأولى.',
    
    // Page: Montage
    'page.montage.title': 'مونتـــــــاج',
    'page.montage.desc': 'المونتاج هو روح الفيديو. نحن نقوم بقص ودمج لقطاتك بأسلوب سينمائي يروي قصة ويبني شعوراً لا ينسى لدى المشاهد.',
    
    // Page: Photography
    'page.photography.title': 'تصــويــر إحتــرافـــي',
    'page.photography.desc': 'نحن نؤمن أن الصورة هي ألف كلمة. في استوديوهاتنا, نلتقط لك لحظات تتجاوز الزمن، باستخدام أحدث المعدات العالمية وإضاءة تبرز أدق التفاصيل.',
    'page.photography.inside_studio': 'من داخل الاستوديو',
    'page.photography.session': 'جلسة تصوير',

    // Page: Studio Rental
    'page.studio.title': 'تأجيـــر إستوديــــو',
    'page.studio.desc': 'مساحة إبداعية متكاملة تحت تصرفك. نوفر لك الخصوصية، الإضاءة الاحترافية، وكافة الإكسسوارات التي تحتاجها لتنفيذ مشروعك الفني بأعلى جودة.',
    'page.studio.feat1_title': 'إضاءة سينمائية',
    'page.studio.feat1_desc': 'توزيع إضاءة احترافي لكل أنواع التصوير.',
    'page.studio.feat2_title': 'عزل صوتي',
    'page.studio.feat2_desc': 'هدوء تام لتسجيل البودكاست والفيديوهات.',
    'page.studio.feat3_title': 'خلفيات متنوعة',
    'page.studio.feat3_desc': 'تشكيلة واسعة من الخلفيات الملونة والـ Green Screen.',
    'page.studio.feat4_title': 'منطقة استراحة',
    'page.studio.feat4_desc': 'مكان مريح للطاقم والعملاء مع ضيافة مجانية.',

    // Page: Web Design
    'page.web.title': 'تصميم الويب',
    'page.web.desc': 'موقعك هو سفينتك في الفضاء الرقمي. نحن نبني تجارب مستخدم فريدة، سريعة، ومتوافقة مع كافة الأجهزة، لتترك انطباعاً لا ينسى لدى زوارك.',
    'page.web.why_us': 'لماذا تختارنا لتطوير موقعك؟',
    'page.web.feat1_title': 'تجربة مستخدم UX/UI',
    'page.web.feat1_desc': 'تصاميم جذابة وسهلة الاستخدام تضمن بقاء الزائر أطول فترة ممكنة.',
    'page.web.feat2_title': 'سرعة فائقة',
    'page.web.feat2_desc': 'مواقعنا تعمل بأعلى سرعة ممكنة لتصدر نتائج البحث وتحسين الأداء.',
    'page.web.feat3_title': 'تجاوب كامل',
    'page.web.feat3_desc': 'موقعك سيبدو رائعاً على الجوال، التابلت، والكمبيوتر بنفس الكفاءة.',

    // Page: Content Writing
    'page.content.title': 'كتابة المحتوى',
    'page.content.desc': 'الكلمات هي الوقود الذي يحرك علامتك التجارية. نكتب لك محتوى إبداعياً، مقنعاً، ومتوافقاً مع محركات البحث، يروي قصتك ويحول القراء إلى عملاء دائمين.',
    'page.content.feat1_title': 'كتابة السيناريوهات',
    'page.content.feat1_desc': 'نحول أفكارك إلى نصوص مرئية قوية تخدم المونتاج والموشن جرافيك وتجذب الانتباه من اللحظة الأولى.',
    'page.content.feat2_title': 'محتوى السوشيال ميديا',
    'page.content.feat2_desc': 'صناعة محتوى يومي تفاعلي يزيد من ظهورك ويقوي علاقتك بجمهورك على كافة المنصات.',
    'page.content.feat3_title': 'المقالات والتدوين',
    'page.content.feat3_desc': 'كتابة متخصصة تبني سلطة علامتك التجارية وتساعدك في تصدر نتائج البحث (SEO).',

    // Page: Marketing
    'page.marketing.title': 'التسويـــــق',
    'page.marketing.desc': 'لا نبيع فقط، نحن ننمو معاً. نضع لك استراتيجيات تسويقية شاملة تعتمد على البيانات، لنضمن وصول رسالتك للشخص الصحيح في الوقت الصحيح.',
    'page.marketing.methodology': 'منهجيتنا في النمو',
    'page.marketing.step1_title': 'التحليل',
    'page.marketing.step1_desc': 'ندرس السوق، المنافسين، وسلوك جمهورك بدقة.',
    'page.marketing.step2_title': 'التنفيذ',
    'page.marketing.step2_desc': 'إطلاق الحملات الممولة وإدارة المحتوى باحترافية.',
    'page.marketing.step3_title': 'التحسين',
    'page.marketing.step3_desc': 'مراقبة النتائج وتطوير الاستراتيجية للوصول لأفضل عائد.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Our Services',
    'nav.all_services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.discover': 'Discover Our Services',
    // Hero
    'hero.out_of_box': 'Out of the box with...',
    'hero.title': 'Off-Planet Ideas',
    'hero.desc1': 'With a new launch, we moved beyond limited thinking to take you on a journey full of off-planet creativity.',
    'hero.desc2': 'Since leaving the planet is not for everyone, we have the capabilities to adventure with full comfort and confidence.',
    // Services Section
    'services.discover_title': 'Discover',
    'services.main_title': 'Our Services',
    'services.more': 'More',
    'service.motion.desc': 'Motion graphics fly your idea into a new orbit, transforming your message into a cosmic story that catches your client\'s attention from the first second.',
    'service.montage.desc': 'The art of montage is the soul of the video; we combine your shots with a professional touch that turns simple scenes into a complete and impactful cinematic experience.',
    'service.photography.desc': 'A studio equipped as if you were on a filming craft; lighting, equipment, and a space ready for any idea you want to launch into the sky.',
    'service.web.desc': 'We design a website that makes your brand a bright station in digital space—accessible, fast, and welcoming your visitors as VIP guests.',
    'service.content.desc': 'Custom written content for your brand, words like light signals that clarify your idea, convince your client, and make them choose you among all planets.',
    'service.marketing.desc': 'Digital marketing strategies that bring your brand to the closest orbit of your client, with well-studied campaigns that raise brand awareness and turn the curious into permanent clients.',
    // Services names
    'service.motion': 'Motion Graphics',
    'service.montage': 'Montage',
    'service.photography': 'Professional Photography',
    'service.studio': 'Studio Rental',
    'service.web': 'Web Design & Development',
    'service.content': 'Content Writing',
    'service.marketing': 'Marketing',
    // Goals
    'goals.title': 'Our Goals',
    'goals.desc_main': 'We redefine visual content and ideas to present everything new, sincerely expressing a future vision stemming from experienced steps of the past and a confident present.',
    // Ambition
    'ambition.title': 'Our Ambition',
    'ambition.p1': 'Ambition without action won\'t get you where you want,',
    'ambition.p2': 'And we aim higher because we have already launched,',
    'ambition.p3': 'We are pushing forward to the future with persistence',
    'ambition.p4': 'And determination. Join us as a partner in this journey.',
    // Idea Planting
    'idea.title': 'Planting the Idea',
    'idea.p1': 'A seed only grows in fertile soil, and likewise, an idea',
    'idea.p2': 'Only flourishes in an environment suitable for its growth. We know well',
    'idea.p3': 'Where to plant the idea and how to nurture it to bear fruit.',
    // Footer
    'footer.rights': 'Aqrablik Media - All Rights Reserved',
    'footer.contact_us': 'Contact Us',

    // Common Buttons & Labels
    'common.order_now': 'Order Now',
    'common.view_work': 'View Our Work',
    'common.portfolio': 'Our Portfolio',
    'common.work_video': 'Work Video',
    'common.book_session': 'Book a Session',
    'common.check_availability': 'Check Availability',
    'common.start_project': 'Start Your Project',
    'common.request_sample': 'Request a Sample',
    'common.free_consultation': 'Free Consultation',

    // Page: Motion Graphics
    'page.motion.title': 'Motion Graphics',
    'page.motion.desc': 'We transform complex ideas into simple, attractive animations. Motion graphics fly your idea into a new orbit and capture customer attention from the first second.',
    
    // Page: Montage
    'page.montage.title': 'Montage',
    'page.montage.desc': 'Editing is the soul of the video. We cut and merge your footage with a cinematic style that tells a story and builds an unforgettable feeling for the viewer.',
    
    // Page: Photography
    'page.photography.title': 'Professional Photography',
    'page.photography.desc': 'We believe a picture is worth a thousand words. In our studios, we capture timeless moments using the latest global equipment and lighting that highlights the finest details.',
    'page.photography.inside_studio': 'Inside the Studio',
    'page.photography.session': 'Photo Session',

    // Page: Studio Rental
    'page.studio.title': 'Studio Rental',
    'page.studio.desc': 'A complete creative space at your disposal. We provide privacy, professional lighting, and all the accessories you need to execute your artistic project with the highest quality.',
    'page.studio.feat1_title': 'Cinematic Lighting',
    'page.studio.feat1_desc': 'Professional lighting distribution for all types of photography.',
    'page.studio.feat2_title': 'Sound Insulation',
    'page.studio.feat2_desc': 'Complete silence for recording podcasts and videos.',
    'page.studio.feat3_title': 'Various Backgrounds',
    'page.studio.feat3_desc': 'A wide selection of colored backgrounds and Green Screen.',
    'page.studio.feat4_title': 'Lounge Area',
    'page.studio.feat4_desc': 'A comfortable place for the crew and clients with complimentary hospitality.',

    // Page: Web Design
    'page.web.title': 'Web Design',
    'page.web.desc': 'Your website is your spaceship in the digital space. We build unique, fast, and fully responsive user experiences to leave an unforgettable impression on your visitors.',
    'page.web.why_us': 'Why Choose Us?',
    'page.web.feat1_title': 'UX/UI Experience',
    'page.web.feat1_desc': 'Attractive and easy-to-use designs ensure visitors stay as long as possible.',
    'page.web.feat2_title': 'Super Speed',
    'page.web.feat2_desc': 'Our sites run at maximum speed to top search results and improve performance.',
    'page.web.feat3_title': 'Fully Responsive',
    'page.web.feat3_desc': 'Your site will look amazing on mobile, tablet, and desktop with equal efficiency.',

    // Page: Content Writing
    'page.content.title': 'Content Writing',
    'page.content.desc': 'Words are the fuel that drives your brand. We write creative, persuasive, and SEO-friendly content that tells your story and turns readers into loyal customers.',
    'page.content.feat1_title': 'Script Writing',
    'page.content.feat1_desc': 'We turn your ideas into powerful visual scripts that serve montage and motion graphics, grabbing attention instantly.',
    'page.content.feat2_title': 'Social Media Content',
    'page.content.feat2_desc': 'Creating daily interactive content that increases your visibility and strengthens your relationship with your audience across all platforms.',
    'page.content.feat3_title': 'Articles & Blogging',
    'page.content.feat3_desc': 'Specialized writing that builds your brand authority and helps you top search results (SEO).',

    // Page: Marketing
    'page.marketing.title': 'Marketing',
    'page.marketing.desc': 'We don\'t just sell; we grow together. We develop comprehensive data-driven marketing strategies to ensure your message reaches the right person at the right time.',
    'page.marketing.methodology': 'Our Growth Methodology',
    'page.marketing.step1_title': 'Analysis',
    'page.marketing.step1_desc': 'We study the market, competitors, and your audience behavior precisely.',
    'page.marketing.step2_title': 'Execution',
    'page.marketing.step2_desc': 'Launching paid campaigns and managing content professionally.',
    'page.marketing.step3_title': 'Optimization',
    'page.marketing.step3_desc': 'Monitoring results and developing the strategy to reach the best ROI.',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (language === 'en') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'TheYearOfHandicrafts', 'Cairo', sans-serif";
    }
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};