import React from 'react';

const StudioRentalPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-6xl md:text-8xl glow-text mb-8">تأجيـــر إستوديــــو</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            مساحة إبداعية متكاملة تحت تصرفك. نوفر لك الخصوصية، الإضاءة الاحترافية، وكافة الإكسسوارات التي تحتاجها لتنفيذ مشروعك الفني بأعلى جودة.
          </p>
          <button className="px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold transition-all">تحقق من التوافر</button>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="/public/images/bbb.png" alt="الاستوديو" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px]"></div>
        </div>
      </section>
      
      <section className="py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎥</div>
          <h3 className="text-xl font-bold mb-2">إضاءة سينمائية</h3>
          <p className="text-gray-400">توزيع إضاءة احترافي لكل أنواع التصوير.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎙️</div>
          <h3 className="text-xl font-bold mb-2">عزل صوتي</h3>
          <p className="text-gray-400">هدوء تام لتسجيل البودكاست والفيديوهات.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">خلفيات متنوعة</h3>
          <p className="text-gray-400">تشكيلة واسعة من الخلفيات الملونة والـ Green Screen.</p>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">☕</div>
          <h3 className="text-xl font-bold mb-2">منطقة استراحة</h3>
          <p className="text-gray-400">مكان مريح للطاقم والعملاء مع ضيافة مجانية.</p>
        </div>
      </section>
    </div>
  );
};

export default StudioRentalPage;