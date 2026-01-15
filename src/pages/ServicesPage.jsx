import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const youtubeVideos = [
  "0NgXkHQTt4U", 
  "k9M60,YJJ3iE",
  "m2mdBK91kQY"
];

const montageVideos = [
  "m2mdBK91kQY",
  "0NgXkHQTt4U", 
  "k9M60YJJ3iE"
];

// بيانات مشاريع الويب (صور وروابط)
const webProjects = [
  { image: "/public/images/arct.png", url: "https://architectegypt.com" },
  { image: "/public/images/glax.png", url: "https://galaxyrepairuae.com" },
  { image: "/public/images/sharik.png", url: "https://sharke1.netlify.app" },
  { image: "/public/images/shelter.png", url: "https://shelterhouseofcheese.com" }
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeMontage, setActiveMontage] = useState(0);
  const [activeWeb, setActiveWeb] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [playingMontage, setPlayingMontage] = useState(null);
  
  // Refs لتتبع timers
  const videoTimerRef = useRef(null);
  const montageTimerRef = useRef(null);
  const webTimerRef = useRef(null);

  const clearAllTimers = () => {
    if (videoTimerRef.current) clearInterval(videoTimerRef.current);
    if (montageTimerRef.current) clearInterval(montageTimerRef.current);
    if (webTimerRef.current) clearInterval(webTimerRef.current);
    videoTimerRef.current = null;
    montageTimerRef.current = null;
    webTimerRef.current = null;
  };

  const nextVideo = useCallback(() => {
    if (!playingVideo) {
      setActiveVideo((prev) => (prev + 1) % youtubeVideos.length);
    }
  }, [playingVideo]);

  const prevVideo = useCallback(() => {
    if (!playingVideo) {
      setActiveVideo((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
    }
  }, [playingVideo]);

  const nextMontage = useCallback(() => {
    if (!playingMontage) {
      setActiveMontage((prev) => (prev + 1) % montageVideos.length);
    }
  }, [playingMontage]);

  const prevMontage = useCallback(() => {
    if (!playingMontage) {
      setActiveMontage((prev) => (prev - 1 + montageVideos.length) % montageVideos.length);
    }
  }, [playingMontage]);

  const nextWeb = useCallback(() => {
    setActiveWeb((prev) => (prev + 1) % webProjects.length);
  }, []);

  const prevWeb = useCallback(() => {
    setActiveWeb((prev) => (prev - 1 + webProjects.length) % webProjects.length);
  }, []);

  const startAllTimers = useCallback(() => {
    clearAllTimers();
    videoTimerRef.current = setInterval(nextVideo, 5000);
    montageTimerRef.current = setInterval(nextMontage, 5000);
    webTimerRef.current = setInterval(nextWeb, 5000);
  }, [nextVideo, nextMontage, nextWeb]);

  const handleVideoClick = (index) => {
    if (index !== activeVideo) {
      // إذا كان هناك فيديو شغال، أوقفه أولاً
      if (playingVideo) {
        setPlayingVideo(null);
      }
      setActiveVideo(index);
      setPlayingVideo(youtubeVideos[index]);
      clearAllTimers();
    } else {
      // إذا كان الفيديو نشط بالفعل، قم بتشغيله أو إيقافه
      if (playingVideo === youtubeVideos[index]) {
        setPlayingVideo(null);
        startAllTimers();
      } else {
        setPlayingVideo(youtubeVideos[index]);
        clearAllTimers();
      }
    }
  };

  const handleMontageClick = (index) => {
    if (index !== activeMontage) {
      // إذا كان هناك فيديو شغال، أوقفه أولاً
      if (playingMontage) {
        setPlayingMontage(null);
      }
      setActiveMontage(index);
      setPlayingMontage(montageVideos[index]);
      clearAllTimers();
    } else {
      // إذا كان الفيديو نشط بالفعل، قم بتشغيله أو إيقافه
      if (playingMontage === montageVideos[index]) {
        setPlayingMontage(null);
        startAllTimers();
      } else {
        setPlayingMontage(montageVideos[index]);
        clearAllTimers();
      }
    }
  };

  // بدء التوقيتات عند تحميل المكون
  useEffect(() => {
    startAllTimers();
    
    return () => {
      clearAllTimers();
    };
  }, [startAllTimers]);

  // إعادة تشغيل التوقيتات عند إيقاف الفيديو
  useEffect(() => {
    if (!playingVideo && !playingMontage) {
      startAllTimers();
    }
  }, [playingVideo, playingMontage, startAllTimers]);

  return (
    <div className="relative">
      {/* سكشن الهيدر */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-10 pb-20 overflow-hidden">
        
        {/* الصخرة الرئيسية */}
        <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-[12rem] md:h-[12rem] pointer-events-none z-20">
          <img 
            src="/public/images/Asset 1.png" 
            alt="الصخرة الرئيسية" 
            className="w-full h-full object-contain brightness-90 contrast-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] opacity-95"
          />
        </div>

        {/* حاوية النص */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-[6.5rem] glow-text leading-[0.8] mb-[-1rem] md:mb-[-1.5rem] -top-3 md:-top-6 z-10">
            اكتشـــــــــف
          </h2>
          
          <div className="relative">
            <h2 className="text-5xl md:text-[6.5rem] glow-text leading-[0.8] mt-16 md:mt-32 -top-4 md:-top-2 z-30 -translate-y-[30px]">
              خدمـــــــــاتنا
            </h2>
            {/* الصخرة الإضافية بجانب حرف الخاء */}
            <div className="absolute -right-10 md:-right-30 top-[60%] md:top-[70%] w-10 h-10 md:w-20 md:h-20 animate-float pointer-events-none z-40">
              <img 
                src="/public/images/Asset 1.png" 
                alt="صخرة صغيرة" 
                className="w-full h-full object-contain brightness-75 contrast-125 rotate-45"
              />
            </div>
          </div>
        </div>

        {/* تأثيرات الإضاءة */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none"></div>
      </section>

      {/* سكشن موشن جرافيك */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-80 z-50 order-1">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float">
              <img src="/public/images/Asset 2@2x.png" alt="رائد فضاء فنان" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right order-2">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-mr-40 z-0 pointer-events-none whitespace-nowrap">مــــــوشـــــن جــرافــــيــك</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-mr-[100px]">موشن جرافيك يطيّر فكرتك في مدار جديد،<br />ويحوّل رسالتك لقصة كونية تلفت انتبــــاه <br />عميـــلك مــن أول ثــانــيــة.</p>
            <div className="w-full relative h-[250px] md:h-[350px] flex items-center justify-center [perspective:1200px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {youtubeVideos.map((id, index) => {
                  const isActive = index === activeVideo;
                  const isPrev = index === (activeVideo - 1 + youtubeVideos.length) % youtubeVideos.length;
                  const isNext = index === (activeVideo + 1) % youtubeVideos.length;
                  
                  let styleClass = "absolute transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) opacity-0 scale-50 z-0 blur-xl";
                  if (isActive) {
                    styleClass = "absolute z-30 scale-100 opacity-100 shadow-[0_0_60px_rgba(59,130,246,0.4)] border-2 border-white/20 translate-x-0 rotate-y-0 blur-0 cursor-pointer";
                  } else if (isPrev) {
                    styleClass = "absolute z-10 -translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] -rotate-y-[25deg] cursor-pointer";
                  } else if (isNext) {
                    styleClass = "absolute z-10 translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] rotate-y-[25deg] cursor-pointer";
                  }
                  
                  const shouldAutoplay = isActive && playingVideo === id;
                  const videoUrl = `https://www.youtube.com/embed/${id}?controls=0&modestbranding=1&rel=0${shouldAutoplay ? '&autoplay=1' : ''}`;
                  
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleVideoClick(index)} 
                      className={`w-[280px] md:w-[450px] aspect-video rounded-3xl overflow-hidden ${styleClass}`}
                    >
                      <iframe 
                        className="w-full h-full pointer-events-none" 
                        src={videoUrl} 
                        title={`Video ${index + 1}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
              <button onClick={prevVideo} className="absolute left-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={nextVideo} className="absolute right-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <button onClick={() => navigate('/services/motion-graphics')} className="px-12 py-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-2xl hover:bg-white/10 transition-all">الــمــزيــــد</button>
          </div>
        </div>
      </section>

      {/* سكشن مونتاج */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-end text-center lg:text-right order-1">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-translate-x-[220px] z-0 pointer-events-none whitespace-nowrap">مونتــــــــــاج</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-translate-x-[80px]">فن المونتاج هو روح الفيديو،<br />نجمع لقطاتك بلمسة احترافية<br />تحول المشاهد البسيطة إلى تجربة<br />سينمائية متكاملة ومؤثرة.</p>
            <div className="w-full relative h-[250px] md:h-[350px] flex items-center justify-center [perspective:1200px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {montageVideos.map((id, index) => {
                  const isActive = index === activeMontage;
                  const isPrev = index === (activeMontage - 1 + montageVideos.length) % montageVideos.length;
                  const isNext = index === (activeMontage + 1) % montageVideos.length;
                  
                  let styleClass = "absolute transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) opacity-0 scale-50 z-0 blur-xl";
                  if (isActive) {
                    styleClass = "absolute z-30 scale-100 opacity-100 shadow-[0_0_60px_rgba(168,85,247,0.4)] border-2 border-white/20 translate-x-0 rotate-y-0 blur-0 cursor-pointer";
                  } else if (isPrev) {
                    styleClass = "absolute z-10 -translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] -rotate-y-[25deg] cursor-pointer";
                  } else if (isNext) {
                    styleClass = "absolute z-10 translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] rotate-y-[25deg] cursor-pointer";
                  }
                  
                  const shouldAutoplay = isActive && playingMontage === id;
                  const videoUrl = `https://www.youtube.com/embed/${id}?controls=0&modestbranding=1&rel=0${shouldAutoplay ? '&autoplay=1' : ''}`;
                  
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleMontageClick(index)} 
                      className={`w-[280px] md:w-[450px] aspect-video rounded-3xl overflow-hidden ${styleClass}`}
                    >
                      <iframe 
                        className="w-full h-full pointer-events-none" 
                        src={videoUrl} 
                        title={`Montage Video ${index + 1}`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </div>
              <button onClick={prevMontage} className="absolute left-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={nextMontage} className="absolute right-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <div className="w-full flex justify-center">            
              <button onClick={() => navigate('/services/Montage')} className="mt-16 px-12 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-purple-400 font-medium text-2xl transition-all">الــمــزيــــد</button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-[140px] z-50 order-2">
            <div className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] animate-float" style={{ animationDelay: '1s' }}>
              <img src="/public/images/xxx.png" alt="رائد فضاء مونتاج" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* سكشن تصوير إحترافي */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-20 z-50 order-1">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float">
              <img src="/public/images/Asset 3@2x.png" alt="رائد فضاء تصوير" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right order-2">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-mr-40 z-0 pointer-events-none whitespace-nowrap">تصــويــر إحتــرافـــي</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-mr-[100px]">اســتــوديــو مجهّــز كأنــك عــلــى متــن مــركبــة<br />تصويـــر؛ إضـــاءة، معـــدات، ومساحـــة جاهــزة<br />لأي فـــكـــرة تــحــب تــطــلقــهـــا فــــي الــسمــاء.</p>
            <div className="w-full flex justify-center lg:justify-start lg:pr-20">
              <button onClick={() => navigate('/services/Photography')} className="px-12 py-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-2xl hover:bg-white/10 transition-all">الــمــزيــــد</button>
            </div>
          </div>
        </div>
      </section>

      {/* سكشن تأجير إستوديو */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/public/images/bbb.png" alt="خلفية الاستوديو" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080911]/80 via-transparent to-[#080911]/80"></div>
        </div>
        <div className="relative z-10 px-10">
          <h2 className="text-6xl md:text-[5rem] text-white glow-text mb-8 font-bold select-none whitespace-nowrap">تأجيـــر إستوديــــو</h2>
          <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">اســتــوديــو مجهّــز كأنــك عــلــى متــن مــركبــة<br />تصويـــر؛ إضـــاءة، معـــدات، ومساحـــة جاهــزة<br />لأي فـــكـــرة تــحــب تــطــلقــهـــا فــــي الــسمــاء.</p>
          <div className="flex justify-center">
              <button onClick={() => navigate('/services/studio-rental')} className="px-12 py-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-2xl hover:bg-white/10 transition-all">الــمــزيــــد</button>
            </div>
        </div>
      </section>

      {/* سكشن الويب */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-end text-center lg:text-right order-1">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-translate-x-[220px] z-0 pointer-events-none whitespace-nowrap">تــصـميــم وتــطويـــر <br />مــــواقــــع الـــــويـــــب</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-translate-x-[80px]">نصــمــم موقــع يخلــى بــراندك محطـــة مضيئــة <br />فـــي الفضــاء الرقمــى ، سهــل الوصـــول ، سـريــع <br />ويـــســتــقبــــل زوارك كــــأنـــــهــــم ضـــيــوف VIP</p>
            <div className="w-full relative h-[250px] md:h-[350px] flex items-center justify-center [perspective:1200px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {webProjects.map((project, index) => {
                  const isActive = index === activeWeb;
                  const isPrev = index === (activeWeb - 1 + webProjects.length) % webProjects.length;
                  const isNext = index === (activeWeb + 1) % webProjects.length;
                  let styleClass = "absolute transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) opacity-0 scale-50 z-0 blur-xl";
                  if (isActive) styleClass = "absolute z-30 scale-100 opacity-100 shadow-[0_0_60px_rgba(168,85,247,0.4)] border-2 border-white/20 translate-x-0 rotate-y-0 blur-0 cursor-pointer";
                  else if (isPrev) styleClass = "absolute z-10 -translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] -rotate-y-[25deg] cursor-pointer";
                  else if (isNext) styleClass = "absolute z-10 translate-x-[45%] scale-[0.65] opacity-30 blur-[4px] rotate-y-[25deg] cursor-pointer";
                  return (
                    <div key={index} onClick={() => !isActive && setActiveWeb(index)} className={`w-[280px] md:w-[450px] aspect-video rounded-3xl overflow-hidden ${styleClass}`}>
                      <a href={isActive ? project.url : '#'} target={isActive ? "_blank" : "_self"} rel="noopener noreferrer" className={`w-full h-full block ${!isActive ? 'pointer-events-none' : ''}`}>
                        <img src={project.image} className="w-full h-full object-cover" alt={`Web Project ${index + 1}`} />
                      </a>
                    </div>
                  );
                })}
              </div>
              <button onClick={prevWeb} className="absolute left-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
              <button onClick={nextWeb} className="absolute right-0 z-40 p-4 hover:bg-white/5 rounded-full group transition-all"><svg className="w-8 h-8 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
            </div>
            <div className="w-full flex justify-center">
              <button onClick={() => navigate('/services/web-design')} className="mt-16 px-12 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-purple-400 font-medium text-2xl transition-all">الــمــزيــــد</button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-[300px] z-50 order-2">
            <div className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] animate-float" style={{ animationDelay: '1s' }}>
              <img src="/public/images/Asset 4@2x.png" alt="رائد فضاء ويب" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* سكشن كتابة المحتوى */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-2/5 flex justify-center relative lg:-mt-20 z-50 order-1">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float">
              <img src="/public/images/Asset 5@2x.png" alt="رائد فضاء كاتب" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-right order-2">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-mr-40 z-0 pointer-events-none whitespace-nowrap">كــتابـــة الــمــحتــوى</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-mr-[100px]">محتـــــوى مكتــــوب مخصــــوص لبــــرانـــدك <br />كلمـــــاتهـــا كـــأنهـــا إشـــارت ضوئيــــة توضـــح <br />فكرتـــك تقنــــع عميلــك وتخليـــه يخــتـــارك <br />مـــــــن بــــــيــــــــن كـــل الكـــــــواكــــب</p>
            <div className="w-full flex justify-center lg:justify-start lg:pr-20">
              <button onClick={() => navigate('/services/content-writing')} className="px-12 py-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-2xl hover:bg-white/10 transition-all">الــمــزيــــد</button>
            </div>
          </div>
        </div>
      </section>

      {/* سكشن التسويق - نفس سكشن المونتاج بدون سلايدر */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-end text-center lg:text-right order-1">
            <h2 className="text-5xl md:text-7xl text-white glow-text mb-6 font-bold relative lg:-translate-x-[220px] z-0 pointer-events-none whitespace-nowrap">التســـــويــــــق</h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-loose mb-12 relative lg:-translate-x-[80px]">
              استـــراتيجيـــات تسويـــق رقميـــة توصــل
              <br />
               بــرانـــدك لأقـــرب مـــدار لعميلـــك، 
              بحمــلات 
              <br />
              مدروســـة تـــرفــــع وعـــــي العلامــــة وتحـــــول
              <br />
               الــفضــــولــيــيــن لعمــــلاء دائــمــيــن.
            </p>
            <div className="w-full flex justify-center lg:justify-end lg:pl-20">
              <button onClick={() => navigate('/services/Marketing')} className="mt-16 px-12 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 text-purple-400 font-medium text-2xl transition-all">الــمــزيــــد</button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center relative lg:mt-[200px] z-50 order-2">
            <div className="relative w-72 h-72 md:w-[32rem] md:h-[32rem] animate-float" style={{ animationDelay: '1.5s' }}>
              <img src="/public/images/Asset 6@2x.png" alt="رائد فضاء مسوق" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;