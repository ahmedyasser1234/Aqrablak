import React from 'react';

const ContentWritingPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2">
          <img src="/public/images/Asset 5@2x.png" alt="رائد فضاء كاتب" className="w-full animate-float" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">كتابة المحتوى</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            الكلمات هي الوقود الذي يحرك علامتك التجارية. نكتب لك محتوى إبداعياً، مقنعاً، ومتوافقاً مع محركات البحث، يروي قصتك ويحول القراء إلى عملاء دائمين.
          </p>
          <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all">اطلب عينة الآن</button>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="border-r-4 border-blue-500 pr-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">كتابة السيناريوهات</h3>
            <p className="text-gray-400 text-lg">نحول أفكارك إلى نصوص مرئية قوية تخدم المونتاج والموشن جرافيك وتجذب الانتباه من اللحظة الأولى.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">محتوى السوشيال ميديا</h3>
            <p className="text-gray-400 text-lg">صناعة محتوى يومي تفاعلي يزيد من ظهورك ويقوي علاقتك بجمهورك على كافة المنصات.</p>
          </div>
          <div className="border-r-4 border-blue-500 pr-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">المقالات والتدوين</h3>
            <p className="text-gray-400 text-lg">كتابة متخصصة تبني سلطة علامتك التجارية وتساعدك في تصدر نتائج البحث (SEO).</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentWritingPage;