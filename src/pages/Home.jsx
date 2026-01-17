import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundEffects from '../components/BackgroundEffects';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

// تعريف مكونات فرعية خارج Home
const Hero = () => {
  const { t, language } = useLanguage();
  const sliderRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { name: t('service.motion'), path: '/services/motion-graphics', image: 'arct.png', color: '#3b82f6' },
    { name: t('service.montage'), path: '/services/montage', image: 'glax.png', color: '#a855f7' },
    { name: t('service.photography'), path: '/services/photography', image: 'sharik.png', color: '#22d3ee' },
    { name: t('service.studio'), path: '/services/studio-rental', image: 'shelter.png', color: '#fb923c' },
    { name: t('service.web'), path: '/services/web-design', image: 'arct.png', color: '#6366f1' },
    { name: t('service.content'), path: '/services/content-writing', image: 'glax.png', color: '#38bdf8' },
    { name: t('service.marketing'), path: '/services/marketing', image: 'sharik.png', color: '#ec4899' },
  ];

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const targetItem = container.children[index];
      if (targetItem) {
        const targetScroll = targetItem.offsetLeft - (container.clientWidth / 2) + (targetItem.offsetWidth / 2);
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const percentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollPos(percentage);

      const containerCenter = scrollLeft + clientWidth / 2;
      const items = Array.from(sliderRef.current.children);
      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const element = item;
        const itemCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextIndex = (activeIndex + 1) % sliderData.length;
        scrollToIndex(nextIndex);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderData.length]);

  return (
    <div className="flex flex-col w-full" style={{ backgroundColor: 'transparent' }}>
      <section className="relative min-h-[65vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-10 md:pt-16 overflow-hidden">
        <div className="relative z-30 w-full max-w-5xl flex flex-col items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start w-full relative">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 z-50 animate-orbit pointer-events-none hidden md:block">
              <img src="/public/images/Asset 1.png" alt="شهاب مداري" className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_10px_rgba(232,232,232,0.1)]" />
            </div>

            <ScrollReveal className="flex items-center gap-4 mb-0 md:mb-2 opacity-80 relative mx-auto lg:mx-0">
              <p className="text-sm md:text-2xl font-light text-white/90 whitespace-nowrap">
                {t('hero.out_of_box')}
              </p>
              <span className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-white/60 to-transparent block"></span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative mb-1 md:mb-6 w-full">
              <div className="absolute end-full top-0 lg:top-1/2 -translate-y-1/2 w-16 h-16 lg:w-44 lg:h-44 animate-float z-40 pointer-events-none translate-x-1/2 lg:translate-x-0 opacity-30 lg:opacity-100">
                <img src="/public/images/Asset 1.png" alt="نيزك ثابت" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]" />
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-[7rem] text-white glow-text leading-[1.1] md:leading-[0.85] font-black">
                {t('hero.title')}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="max-w-2xl space-y-0 md:space-y-4 px-2 lg:px-0">
              <p className="text-xs md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                {t('hero.desc1')}
              </p>
              <p className="text-xs md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light hidden md:block">
                {t('hero.desc2')}
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[180px] pointer-events-none z-10"></div>
      </section>

      <section className="relative min-h-[50vh] py-2 md:py-20 flex flex-col items-center overflow-hidden">
        <ScrollReveal delay={0.2} className="z-50 mb-6 md:mb-16">
          <Link to="/services">
            <button className="px-6 md:px-14 py-2 md:py-4 rounded-xl md:rounded-2xl bg-[#1a1b26]/60 border border-blue-500/50 text-blue-400 text-lg md:text-4xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-xl transition-all hover:scale-105">
              {t('nav.discover')}
            </button>
          </Link>
        </ScrollReveal>

        <div className="relative w-full max-w-full flex items-center justify-center">
          <div className="absolute start-2 top-1/4 w-12 h-12 md:w-48 md:h-48 z-40 animate-float opacity-30 md:opacity-90 pointer-events-none">
            <img src="/public/images/Asset 1.png" className="w-full h-full object-contain -rotate-12" />
          </div>

          <div 
            className="absolute z-50 top-1/2 left-1/2 pointer-events-none transition-transform duration-500 ease-out flex flex-col items-center"
            style={{ 
              transform: `translate(calc(-50% + ${(scrollPos - 0.5) * (language === 'ar' ? 80 : -80)}px), -10%)`,
            }}
          >
            <div className="relative w-[80px] md:w-[240px] animate-float mb-4 md:mb-0">
              <img 
                src="/public/images/ccc.png" 
                alt="رائد فضاء" 
                className={`w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${language === 'en' ? 'scale-x-[-1]' : ''}`}
              />
            </div>
          </div>

          <ScrollReveal delay={0.4} className="w-full relative z-30">
            <div 
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-4 md:gap-6 overflow-x-auto py-6 md:py-20 px-[20vw] md:px-[35vw] scrollbar-hide snap-x snap-mandatory w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sliderData.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <Link 
                    key={index} 
                    to={service.path}
                    className={`flex-shrink-0 w-[65vw] md:w-[550px] aspect-video rounded-xl md:rounded-2xl border-2 md:border-4 bg-[#161720]/40 backdrop-blur-sm overflow-hidden snap-center relative transition-all duration-500 block group ${
                      isActive 
                        ? 'scale-100 opacity-100' 
                        : 'border-white/10 scale-90 opacity-40 blur-[2px]'
                    }`}
                    style={isActive ? { 
                      borderColor: service.color,
                      boxShadow: `0 0 25px ${service.color}aa, 0 0 50px ${service.color}44, inset 0 0 15px ${service.color}33`
                    } : {}}
                  >
                    <img 
                      src={`/public/images/${service.image}`} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 flex flex-col justify-end p-4 md:p-10 text-start bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                       <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2">{service.name}</h3>
                       <div className="w-6 md:w-12 h-1 rounded-full" style={{ backgroundColor: service.color }}></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6} className="mt-2 md:mt-10 flex gap-2 md:gap-3 z-50">
          {sliderData.map((service, i) => (
            <button 
              key={i} 
              onClick={() => scrollToIndex(i)}
              className={`h-1 md:h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-4 md:w-10' : 'w-1 md:w-2 bg-white/20'}`}
              style={activeIndex === i ? { backgroundColor: service.color } : {}}
            ></button>
          ))}
        </ScrollReveal>
      </section>
    </div>
  );
};

const Goals = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative py-6 md:py-24 px-6 z-20" style={{ backgroundColor: 'transparent' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-20">
        
        {/* سطر الصور للموبايل فقط - يظهر قبل النصوص */}
        <div className="flex md:hidden w-full justify-between items-center mb-6 px-2" dir="ltr">
          {/* رائد الفضاء - يسار دائماً */}
          <div className="w-[40%] animate-float pointer-events-none z-40">
            <img 
              src="/public/images/cccc.png" 
              alt="رائد فضاء" 
              className="w-full h-auto opacity-100"
            />
          </div>
          
          {/* لوحة الهدف - يمين دائماً */}
          <div className="w-[30%] animate-float pointer-events-none z-40" style={{ animationDelay: '1s' }}>
            <img 
              src="/public/images/Asset 8.png" 
              alt="لوحة الهدف" 
              className="w-full h-auto opacity-100"
            />
          </div>
        </div>

        {/* صور الديسكتوب - مخفية في الموبايل ومتموضعة بشكل مطلق في الكمبيوتر */}
        <div className="hidden md:block absolute left-[-130px] top-[-55%] -translate-y-1/2 w-[300px] pointer-events-none z-40 animate-float opacity-100">
          <img 
            src="/public/images/cccc.png" 
            alt="رائد فضاء" 
            className={`w-full h-auto ${language === 'en' ? 'scale-x-[1]' : ''}`}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* النص المركزي */}
        <ScrollReveal className="relative z-30 flex flex-col items-center max-w-3xl pt-0 md:pt-0">
          <h2 className="text-2xl md:text-[7rem] glow-text mb-2 md:mb-8 ">
            {t('goals.title')}
          </h2>
          <p className="text-sm md:text-3xl text-white/90 leading-relaxed text-center font-light px-2 md:px-4">
            {t('goals.desc_main')}
          </p>
        </ScrollReveal>

        {/* لوحة الهدف للديسكتوب - مخفية في الموبايل */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[250px] pointer-events-none z-40 opacity-100">
          <div className="relative animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="/public/images/Asset 8.png" 
              alt="لوحة الهدف" 
              className={`w-full h-auto ${language === 'en' ? 'scale-x-[1]' : ''}`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none z-10"></div>
    </section>
  );
};

const Ambition = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative py-4 md:py-20 px-6 md:px-20 min-h-[40vh] md:min-h-[80vh] flex items-center justify-center z-20" style={{ backgroundColor: 'transparent' }}>
      
      {/* رائد الفضاء - متموضع في المنتصف للموبايل وفي أقصى الشمال للإنجليزي ديسكتوب */}
      <div className={`absolute left-1/2 -translate-x-1/2 md:translate-x-0 top-4 md:top-10 w-40 md:w-[600px] h-auto animate-float z-40 pointer-events-none ${
        language === 'en' 
          ? 'md:left-0 md:right-auto' 
          : 'md:right-10 md:left-auto'
      }`}>
        <img 
          src={language === 'en' ? '/public/images/xxxxx.png' : '/public/images/xxxxx.png'} 
          alt="Astronaut holding flag" 
          className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,255,255,0.15)] opacity-100"
          onError={(e) => { e.target.style.opacity = '1'; }}
        />
      </div>

      {/* حاوية النص مع إزاحة إضافية لليمين في الإنجليزية ديسكتوب */}
      <div className={`relative z-30 max-w-5xl w-full flex flex-col items-center md:items-start text-center md:text-start pt-44 md:pt-0 ${
        language === 'en' 
          ? 'md:ms-64 lg:ms-[28rem]' 
          : 'md:ms-32 lg:ms-48'
      }`}>
        <ScrollReveal>
          <h2 className="text-2xl md:text-[7rem] glow-text mb-4 md:mb-6 ">
            {t('ambition.title')}
          </h2>
        </ScrollReveal>
        <br />
        <div className="max-w-2xl space-y-2 px-2 md:px-0">
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium"> {t('ambition.p1')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium"> {t('ambition.p2')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium hidden md:block"> {t('ambition.p3')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium hidden md:block"> {t('ambition.p4')} </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[200px] pointer-events-none z-10"></div>
    </section>
  );
};

const StudioShowcase = () => {
  return (
    <section className="relative w-full py-10 px-0 overflow-hidden" style={{ backgroundColor: 'transparent' }}>
      <ScrollReveal className="max-w-[1920px] mx-auto relative group">
        {/* حاوية الصورة الرئيسية بتصميم منحني يشبه سفينة الفضاء */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <img 
            src="/public/images/zzzz.png" 
            alt="Studio Preview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.backgroundColor = '#1a1b26';
            }}
          />
          
          {/* تأثيرات الإضاءة والظلال فوق الصورة لتعزيز العمق */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080911] via-transparent to-[#080911] opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#080911] via-transparent to-[#080911] opacity-40"></div>
          
          {/* لمسات تقنية (HUD) اختيارية لتعزيز الثيم الفضائي */}
          <div className="absolute top-10 left-10 border-l border-t border-blue-500/30 w-20 h-20 pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 border-r border-b border-purple-500/30 w-20 h-20 pointer-events-none"></div>
        </div>
      
      </ScrollReveal>

      {/* توهج خلفي للسكشن */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>
    </section>
  );
};

const IdeaPlanting = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-6 md:py-20 px-6 md:px-20 flex flex-col items-center justify-center text-center z-20" style={{ backgroundColor: 'transparent' }}>
      
      <div className="relative z-30 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-[7rem] glow-text mb-6 md:mb-12 ">
            {t('idea.title')}
          </h2>
        </ScrollReveal>
        <br />
        <div className="space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p1')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p2')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p3')}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-30 z-10"></div>
      <div className="absolute right-1/4 top-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/10 blur-xl rounded-full animate-pulse z-10"></div>
    </section>
  );
};

// مكون Home الرئيسي
const Home = () => {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* الخلفية المتحركة - تأكد من أنها في الخلف */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0 
      }}>
        <BackgroundEffects />
      </div>
      
      {/* المحتوى الرئيسي */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Goals />
        <Ambition />
        <StudioShowcase />
        <IdeaPlanting />
      </div>
    </div>
  );
};

export default Home;