import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">عـــن أقربــلك ميديــا</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            رحلة إبداعية في عالم الإعلام والتسويق الرقمي، نقدم حلولاً مبتكرة تجمع بين الإبداع والتقنية لتحقيق أهداف عملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686064/Asset_3_ypwlqu.png" 
              alt="عن أقربلك ميديا"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-bold mb-6">مــن نحــن</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              أقربلك ميديا هي وكالة إبداعية رائدة في مجال الإنتاج الإعلامي والتسويق الرقمي في مصر والعالم العربي. 
              نؤمن بأن كل فكرة تستحق أن تُروى بأسلوب مؤثر، وكل منتج يستحق أن يُعرض بطريقة جذابة.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              بدأنا رحلتنا برؤية واضحة: تقديم حلول إبداعية متكاملة تجمع بين الجودة الفنية والتأثير التسويقي، 
              لنكون شريكك المثالي في رحلة النجاح وبناء العلامات التجارية المميزة.
            </p>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12">رؤيتنا ورسالتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">رؤيــتــنــا</h3>
              <p className="text-gray-300">
                أن نكون الوجهة الأولى للشركات والعلامات التجارية الراغبة في تحقيق تأثير حقيقي في عالم الإعلام والتسويق الرقمي.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">رسالـــتـــنـــا</h3>
              <p className="text-gray-300">
                تقديم حلول إبداعية مبتكرة تجمع بين الجودة الفنية والاستراتيجية التسويقية لمساعدة عملائنا على تحقيق أهدافهم ونمو أعمالهم.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">لماذا تختار أقربلك ميديا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">دقة في التنفيذ</h3>
              <p className="text-gray-400">نلتزم بأعلى معايير الجودة في كل مشروع ننفذه.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">إبداع لا حدود له</h3>
              <p className="text-gray-400">نقدم أفكاراً مبتكرة تواكب أحدث الاتجاهات العالمية.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">شراكة حقيقية</h3>
              <p className="text-gray-400">نعمل كجزء من فريقك لتحقيق النتائج المطلوبة.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;