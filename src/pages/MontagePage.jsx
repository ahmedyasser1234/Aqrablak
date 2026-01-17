import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const MontagePage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[70vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8 text-purple-400">{t('page.montage.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.montage.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition">{t('common.order_now')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/xxx.png" className="w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MontagePage;