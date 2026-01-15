import React from 'react';

const Goals = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-[#080911]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-20">
        
        {/* رائد الفضاء (تم رفعه للأعلى ونقله لليسار قليلاً عبر تعديل كلاسات التمركز) */}
        <div className="absolute -left-24 lg:-left-32 top-[-55%] -translate-y-1/2 w-[200px] md:w-[300px] pointer-events-none z-10 animate-float">
          <img 
            src="/public/images/cccc.png" 
            alt="رائد فضاء" 
            className="w-full h-auto "
            onError={(e) => {
              const target = e.target;
              target.style.display = 'none';
            }}
          />
        </div>

        {/* النص المركزي */}
        <div className="relative z-30 flex flex-col items-center max-w-3xl">
          <h2 className="text-6xl md:text-[7rem] text-white glow-text mb-8 select-none  leading-none">
            أهــدافنـــــا
          </h2>
          <p className="text-xl md:text-3xl text-white/90 leading-relaxed text-center font-light">
            نعيد صياغة المحتوى المرئي والأفكار لنقدم كل ما هو جديد، 
            ونعبر بصدق عن رؤية مستقبلية تنطلق من خطوات الماضي 
            المليئة بالخبرة، والحاضر المعزز بالثقة.
          </p>
        </div>

        {/* لوحة الهدف والنيزك (جهة اليمين) */}
        <div className="absolute -right-20 lg:right-0 top-1/2 -translate-y-1/2 w-[100px] md:w-[250px] pointer-events-none z-10">
          <div className="relative animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="/public/images/Asset 8.png" 
              alt="لوحة الهدف" 
              className="w-full h-auto "
              onError={(e) => {
                const target = e.target;
                target.style.display = 'none';
              }}
            />
            {/* نيزك صغير فوق الهدف */}
            <div className="absolute -top-20 right-1/4 w-20 h-20 animate-float" style={{ animationDelay: '0.5s' }}>
              <img 
                src="/public/images/Asset 1.png" 
                alt="نيزك صغير" 
                className="w-full h-full object-contain rotate-45 brightness-75" 
              />
            </div>
          </div>
        </div>

      </div>

      {/* تأثيرات خلفية إضافية للسكشن */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default Goals;