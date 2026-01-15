import React from 'react';

const MontagePage = () => {
  return (
    <div className="pt-32 px-10">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[70vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-6xl md:text-8xl glow-text mb-8 text-purple-400">مونتـــــــاج</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            المونتاج هو روح الفيديو. نحن نقوم بقص ودمج لقطاتك بأسلوب سينمائي يروي قصة ويبني شعوراً لا ينسى لدى المشاهد.
          </p>
          <div className="flex gap-4 justify-center lg:justify-end lg:text-right">
            <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition lg:text-right">اطلب خدمتك الآن</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/public/images/xxx.png" className="w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]" />
        </div>
      </section>
    </div>
  );
};

export default MontagePage;