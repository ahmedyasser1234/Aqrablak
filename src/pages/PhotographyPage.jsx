import React from 'react';

const PhotographyPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
          <div className="w-full lg:w-1/2">
          <img src="/public/images/Asset 3@2x.png" alt="رائد فضاء مصور" className="w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">تصــويــر إحتــرافـــي</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            نحن نؤمن أن الصورة هي ألف كلمة. في استوديوهاتنا، نلتقط لك لحظات تتجاوز الزمن، باستخدام أحدث المعدات العالمية وإضاءة تبرز أدق التفاصيل.
          </p>
          <div className="flex gap-4 justify-center lg:justify-end">
            <button className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">احجز جلستك</button>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl text-center glow-text mb-16">من داخل الاستوديو</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold">جلسة تصوير {i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotographyPage;