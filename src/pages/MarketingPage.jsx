import React from 'react';

const MarketingPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h1 className="text-6xl md:text-[6rem] glow-text mb-8 text-pink-500">التسويـــــق</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            لا نبيع فقط، نحن ننمو معاً. نضع لك استراتيجيات تسويقية شاملة تعتمد على البيانات، لنضمن وصول رسالتك للشخص الصحيح في الوقت الصحيح.
          </p>
          <button className="px-10 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)]">استشارة مجانية</button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/public/images/Asset 6@2x.png" alt="رائد فضاء مسوق" className="w-full animate-float" />
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">منهجيتنا في النمو</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-pink-500 mb-4">01</div>
              <h4 className="text-xl font-bold mb-2">التحليل</h4>
              <p className="text-gray-400">ندرس السوق، المنافسين، وسلوك جمهورك بدقة.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-500 mb-4">02</div>
              <h4 className="text-xl font-bold mb-2">التنفيذ</h4>
              <p className="text-gray-400">إطلاق الحملات الممولة وإدارة المحتوى باحترافية.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-500 mb-4">03</div>
              <h4 className="text-xl font-bold mb-2">التحسين</h4>
              <p className="text-gray-400">مراقبة النتائج وتطوير الاستراتيجية للوصول لأفضل عائد.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;