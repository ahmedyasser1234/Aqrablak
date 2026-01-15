import React, { useState, useEffect, useCallback } from 'react';

const youtubeVideos = [
  "0NgXkHQTt4U", 
  "k9M60YJJ3iE",
  "m2mdBK91kQY"
];

const montageVideos = [
  "m2mdBK91kQY",
  "0NgXkHQTt4U", 
  "k9M60YJJ3iE"
];

const ServicesPage = () => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [activeMontage, setActiveMontage] = useState(1);

  const nextVideo = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % youtubeVideos.length);
  }, []);

  const prevVideo = useCallback(() => {
    setActiveVideo((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  }, []);

  const nextMontage = useCallback(() => {
    setActiveMontage((prev) => (prev + 1) % montageVideos.length);
  }, []);

  const prevMontage = useCallback(() => {
    setActiveMontage((prev) => (prev - 1 + montageVideos.length) % montageVideos.length);
  }, []);

  // دوران تلقائي للسلايدرز
  useEffect(() => {
    const timer1 = setInterval(nextVideo, 5000);
    const timer2 = setInterval(nextMontage, 5000);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [nextVideo, nextMontage]);

  return (
    <div className="relative">
      {/* سكشن الهيدر */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-10 pb-20 overflow-hidden">
        
        {/* الصخرة الرئيسية */}
        <div className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-[15rem] md:h-[15rem] pointer-events-none z-20">
          <img 
            src="/public/images/Asset 1.png" 
            alt="الصخرة الرئيسية" 
            className="w-full h-full object-contain brightness-90 contrast-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] opacity-95"
          />
        </div>

        {/* حاوية النص */}
        <div className="relative flex flex-col items-center select-none font-normal">
          <h2 className="text-5xl md:text-[6.5rem] text-white glow-text leading-[0.8] tracking-tighter mb-[-1rem] md:mb-[-1.5rem] font-normal relative -top-3 md:-top-6 z-10">
            اكتشـــــــــــف
          </h2>
          <h2 className="text-5xl md:text-[6.5rem] text-white glow-text leading-[0.8] tracking-tighter mt-16 md:mt-32 font-normal relative -top-4 md:-top-8 z-30">
            خدمـــــــــاتنا
          </h2>
        </div>

        {/* تأثيرات الإضاءة */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none"></div>
      </section>

      {/* سكشن موشن جرافيك */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* الجانب الأيمن: رائد الفضاء */}
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-56 z-50">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px]"></div>
              <img 
                src="/public/images/Asset 2@2x.png" 
                alt="رائد فضاء فنان" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              />
            </div>
          </div>

          {/* الجانب الأيسر: النصوص والسلايدر */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-mr-70 z-0 pointer-events-none whitespace-nowrap">
              موشـــــن جرافيك
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-mr-[100px]">
              موشن جرافيك يطيّر فكرتك في مدار جديد، ويحوّل رسالتك لقصة كونية تلفت انتباه عميلك من أول ثانية.
            </p>

            {/* سلايدر */}
            <div className="w-full relative h-[250px] md:h-[350px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center gap-4">
                {youtubeVideos.map((id, index) => {
                  const isActive = index === activeVideo;
                  const isPrev = index === (activeVideo - 1 + youtubeVideos.length) % youtubeVideos.length;
                  const isNext = index === (activeVideo + 1) % youtubeVideos.length;

                  let styleClass = "absolute transition-all duration-700 ease-in-out opacity-0 scale-50 z-0";
                  if (isActive) styleClass = "absolute z-30 scale-100 opacity-100 shadow-[0_0_50px_rgba(59,130,246,0.3)] border-2 border-white/20";
                  else if (isPrev) styleClass = "absolute z-10 -translate-x-[40%] scale-75 opacity-40 blur-[3px]";
                  else if (isNext) styleClass = "absolute z-10 translate-x-[40%] scale-75 opacity-40 blur-[3px]";

                  return (
                    <div key={index} onClick={() => !isActive && setActiveVideo(index)} className={`w-[280px] md:w-[450px] aspect-video rounded-3xl overflow-hidden cursor-pointer ${styleClass}`}>
                      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0`} title={`Video ${index + 1}`} frameBorder="0" allowFullScreen></iframe>
                    </div>
                  );
                })}
              </div>
              <button onClick={prevVideo} className="absolute left-0 z-40 p-4 hover:bg-white/5 rounded-full group"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={nextVideo} className="absolute right-0 z-40 p-4 hover:bg-white/5 rounded-full group"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <div className="w-full flex justify-center"><button className="mt-16 px-12 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-blue-400 font-medium">المزيــــد</button></div>
          </div>
        </div>
      </section>

      {/* سكشن مونتاج - رائد الفضاء في اليسار */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* الجانب الأيمن: النصوص والسلايدر (أولاً في الترتيب في الـ RTL ليظهر يميناً) */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-ml-70 z-0 pointer-events-none whitespace-nowrap">
              مونتـــــــــــــاج
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-ml-[100px]">
              فن المونتاج هو روح الفيديو، نجمع لقطاتك بلمسة احترافية تحول المشاهد البسيطة إلى تجربة سينمائية متكاملة ومؤثرة.
            </p>

            {/* سلايدر المونتاج */}
            <div className="w-full relative h-[250px] md:h-[350px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center gap-4">
                {montageVideos.map((id, index) => {
                  const isActive = index === activeMontage;
                  const isPrev = index === (activeMontage - 1 + montageVideos.length) % montageVideos.length;
                  const isNext = index === (activeMontage + 1) % montageVideos.length;

                  let styleClass = "absolute transition-all duration-700 ease-in-out opacity-0 scale-50 z-0";
                  if (isActive) styleClass = "absolute z-30 scale-100 opacity-100 shadow-[0_0_50px_rgba(168,85,247,0.3)] border-2 border-white/20";
                  else if (isPrev) styleClass = "absolute z-10 -translate-x-[40%] scale-75 opacity-40 blur-[3px]";
                  else if (isNext) styleClass = "absolute z-10 translate-x-[40%] scale-75 opacity-40 blur-[3px]";

                  return (
                    <div key={index} onClick={() => !isActive && setActiveMontage(index)} className={`w-[280px] md:w-[450px] aspect-video rounded-3xl overflow-hidden cursor-pointer ${styleClass}`}>
                      <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0`} title={`Montage Video ${index + 1}`} frameBorder="0" allowFullScreen></iframe>
                    </div>
                  );
                })}
              </div>
              <button onClick={prevMontage} className="absolute left-0 z-40 p-4 hover:bg-white/5 rounded-full group"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={nextMontage} className="absolute right-0 z-40 p-4 hover:bg-white/5 rounded-full group"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <div className="w-full flex justify-center"><button className="mt-16 px-12 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-purple-400 font-medium">المزيــــد</button></div>
          </div>

          {/* الجانب الأيسر: رائد الفضاء (ثانياً في الترتيب في الـ RTL ليظهر يساراً) */}
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-56 z-50 order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[100px]"></div>
              <img 
                src="/public/images/Asset 2@2x.png" 
                alt="رائد فضاء مونتاج" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;