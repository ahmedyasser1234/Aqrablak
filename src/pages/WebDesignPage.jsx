import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const WebDesignPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-5xl md:text-8xl glow-text mb-8 text-purple-400">{t('page.web.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.web.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">{t('common.start_project')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/Asset 4@2x.png" alt="رائد فضاء مبرمج" className="w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl text-center glow-text mb-16">{t('page.web.why_us')}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat1_title')}</h3>
            <p className="text-gray-400">{t('page.web.feat1_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat2_title')}</h3>
            <p className="text-gray-400">{t('page.web.feat2_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat3_title')}</h3>
            <p className="text-gray-400">{t('page.web.feat3_desc')}</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;