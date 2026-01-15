import React from 'react';

const WebDesignPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-5xl md:text-8xl glow-text mb-8 text-purple-400">تصميم الويب</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            موقعك هو سفينتك في الفضاء الرقمي. نحن نبني تجارب مستخدم فريدة، سريعة، ومتوافقة مع كافة الأجهزة، لتترك انطباعاً لا ينسى لدى زوارك.
          </p>
          <div className="flex gap-4 justify-center lg:justify-end">
            <button className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">ابدأ مشروعك</button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/public/images/Asset 4@2x.png" alt="رائد فضاء مبرمج" className="w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]" />
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center glow-text mb-16">لماذا تختارنا لتطوير موقعك؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">تجربة مستخدم UX/UI</h3>
            <p className="text-gray-400">تصاميم جذابة وسهلة الاستخدام تضمن بقاء الزائر أطول فترة ممكنة.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">سرعة فائقة</h3>
            <p className="text-gray-400">مواقعنا تعمل بأعلى سرعة ممكنة لتصدر نتائج البحث وتحسين الأداء.</p>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">تجاوب كامل</h3>
            <p className="text-gray-400">موقعك سيبدو رائعاً على الجوال، التابلت، والكمبيوتر بنفس الكفاءة.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;