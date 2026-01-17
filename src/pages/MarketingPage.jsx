import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const MarketingPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-[6rem] glow-text mb-8 text-pink-500">{t('page.marketing.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.marketing.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)]">{t('common.free_consultation')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/Asset 6@2x.png" alt="رائد فضاء مسوق" className="w-full animate-float" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto">
        <ScrollReveal className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center">
          <h2 className="text-4xl font-bold mb-8">{t('page.marketing.methodology')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="text-5xl font-bold text-pink-500 mb-4">01</div>
              <h4 className="text-xl font-bold mb-2">{t('page.marketing.step1_title')}</h4>
              <p className="text-gray-400">{t('page.marketing.step1_desc')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-5xl font-bold text-pink-500 mb-4">02</div>
              <h4 className="text-xl font-bold mb-2">{t('page.marketing.step2_title')}</h4>
              <p className="text-gray-400">{t('page.marketing.step2_desc')}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-5xl font-bold text-pink-500 mb-4">03</div>
              <h4 className="text-xl font-bold mb-2">{t('page.marketing.step3_title')}</h4>
              <p className="text-gray-400">{t('page.marketing.step3_desc')}</p>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default MarketingPage;