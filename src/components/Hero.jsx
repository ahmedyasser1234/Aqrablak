import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const sliderRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { name: 'موشن جرافيك', path: '/services/motion-graphics', image: 'arct.png' },
    { name: 'مونتاج', path: '/services/montage', image: 'glax.png' },
    { name: 'تصوير إحترافي', path: '/services/photography', image: 'sharik.png' },
    { name: 'تأجير إستوديو', path: '/services/studio-rental', image: 'shelter.png' },
    { name: 'تصميم الويب', path: '/services/web-design', image: 'arct.png' },
    { name: 'كتابة المحتوى', path: '/services/content-writing', image: 'glax.png' },
    { name: 'التسويق', path: '/services/marketing', image: 'sharik.png' },
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
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderData.length]);

  return (
    <div className="flex flex-col w-full bg-[#080911]">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          
          <div className="flex flex-col items-start text-right w-fit relative">
            
            {/* الشهاب المتحرك دورانياً حول النص بالكامل - تم وضعه هنا ليدور حول المركز */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 z-50 animate-orbit pointer-events-none">
              <img 
                src="/public/images/Asset 1.png" 
                alt="شهاب مداري" 
                className="w-full h-full object-contain brightness-110 contrast-125 drop-shadow-[0_0_10px_rgba(232,232,232,0.1)]"
              />
            </div>

            {/* جملة "خرجنا من الصندوق بــــ" */}
            <div className="flex items-center gap-4 mb-2 opacity-80 relative">
              <p className="text-xl md:text-2xl font-light text-white/90 whitespace-nowrap">
                خرجنا من الصندوق بــــ
              </p>
              <span className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-white/60 to-transparent block"></span>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-16 md:-left-44 top-1/2 -translate-y-1/2 w-48 h-48 md:w-44 md:h-44 animate-float z-20 pointer-events-none">
                <img 
                  src="/public/images/Asset 1.png" 
                  alt="نيزك ثابت" 
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] brightness-90"
                  onError={(e) => {
                    const target = e.target;
                    target.src = "https://cdn-icons-png.flaticon.com/512/2534/2534124.png";
                    target.className += " invert opacity-10";
                  }}
                />
              </div>
              <br />
              <h1 className="text-4xl md:text-[7rem] text-white glow-text leading-[0.85]  ">
                أفكـــار خــار ج الكوكــب
              </h1>
            </div>

            <div className="max-w-2xl space-y-4 pr-1">
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                بإنطلاقة جديدة خرجنا خارج نطاق الفكر المحدود لننطلق بك في 
                رحلة مليئة بالإبداع خارج الكوكب.
              </p>
              <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
                ولأن الخروج خارج الكوكب لا يصلح للجميع، فلدينا إمكانيات تدفعنا 
                للمغامرة بكل أريحية وثقة.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none"></div>
      </section>

      <section className="relative min-h-screen py-32 flex flex-col items-center overflow-hidden">
        <div className="z-50 mb-16">
          <Link to="/services">
            <button className="px-14 py-4 rounded-2xl bg-[#1a1b26]/60 border border-blue-500/50 text-blue-400 text-4xl font-bold shadow-[0_0_35px_rgba(59,130,246,0.3)] backdrop-blur-xl transition-all hover:scale-105 active:scale-95">
              إكتشف خدماتنا
            </button>
          </Link>
        </div>

        <div className="relative w-full max-w-full flex items-center justify-center">
          <div className="absolute left-10 top-1/3 w-32 h-32 md:w-48 md:h-48 z-10 animate-float opacity-90 pointer-events-none">
            <img src="/public/images/Asset 1.png" className="w-full h-full object-contain -rotate-12" />
          </div>

          <div className="absolute right-10 top-1/2 w-28 h-28 md:w-40 md:h-40 z-10 animate-float opacity-80 pointer-events-none" style={{ animationDelay: '1.5s' }}>
            <img src="/public/images/Asset 1.png" className="w-full h-full object-contain rotate-[140deg]" />
          </div>

          <div 
            className="absolute z-40 top-1/2 left-1/2 pointer-events-none transition-transform duration-500 ease-out flex flex-col items-center"
            style={{ 
              transform: `translate(calc(-50% + ${(scrollPos - 0.5) * 150}px), -5%)`,
            }}
          >
            <div className="relative w-[100px] md:w-[240px] animate-float">
              <img 
                src="/public/images/ccc.png" 
                alt="رائد فضاء" 
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                onError={(e) => {
                  const target = e.target;
                  target.src = "https://cdn-icons-png.flaticon.com/512/2026/2026440.png";
                  target.className += " invert opacity-20";
                }}
              />
              <div className="absolute -left-12 bottom-10 w-16 h-16 animate-float opacity-90" style={{ animationDelay: '0.5s' }}>
                <img src="/public/images/Asset 1.png" className="w-full h-full object-contain rotate-90" />
              </div>
            </div>
          </div>

          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto py-20 px-[35vw] scrollbar-hide snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sliderData.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <Link 
                  key={index} 
                  to={service.path}
                  className={`flex-shrink-0 w-[80vw] md:w-[550px] aspect-video rounded-2xl border-4 bg-[#161720]/40 backdrop-blur-sm overflow-hidden snap-center relative transition-all duration-500 block group ${
                    isActive 
                      ? 'border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)] scale-100 opacity-100' 
                      : 'border-blue-500/20 scale-95 opacity-80'
                  } hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none"></div>
                  <img 
                    src={`/public/images/${service.image}`} 
                    alt={service.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isActive 
                        ? 'opacity-70 group-hover:opacity-100 blur-0' 
                        : 'opacity-40 blur-sm'
                    }`}
                    onError={(e) => {
                      const target = e.target;
                      target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                                   <div className={`absolute inset-0 flex flex-col justify-end p-10 text-right bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                     <h3 className="text-2xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">{service.name}</h3>
                     <div className="w-12 h-1 bg-blue-500 rounded-full mr-auto transition-all group-hover:w-20"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex gap-3 z-50">
          {sliderData.map((_, i) => (
            <button 
              key={i} 
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === i 
                ? 'w-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]' 
                : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-blue-900/10 blur-[180px] pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Hero;