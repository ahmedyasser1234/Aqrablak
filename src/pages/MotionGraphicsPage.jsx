import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const MotionGraphicsPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[70vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8">{t('page.motion.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.motion.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">{t('common.order_now')}</button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition">{t('common.view_work')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/Asset 2@2x.png" className="w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
          </ScrollReveal>
        </div>
      </section>
      
      {/* سكشن معرض الأعمال */}
      <section className="py-12">
        <ScrollReveal>
          <h2 className="text-4xl text-center glow-text mb-16">{t('common.portfolio')}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((i, index) => (
            <ScrollReveal key={i} delay={index * 0.1}>
              <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 transition-all cursor-pointer overflow-hidden group">
                <div className="w-full h-full bg-gray-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <span className="text-white/20 text-xl">{t('common.work_video')} {i}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MotionGraphicsPage;