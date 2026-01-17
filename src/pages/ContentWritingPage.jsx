import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const ContentWritingPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">{t('page.content.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.content.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all">{t('common.request_sample')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/Asset 5@2x.png" alt="رائد فضاء كاتب" className="w-full animate-float" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          <ScrollReveal delay={0.1} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">{t('page.content.feat1_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat1_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">{t('page.content.feat2_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat2_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">{t('page.content.feat3_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat3_desc')}</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContentWritingPage;