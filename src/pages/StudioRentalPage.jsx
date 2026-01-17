import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const StudioRentalPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8">{t('page.studio.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.studio.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold transition-all">{t('common.check_availability')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <ScrollReveal delay={0.3}>
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/public/images/bbb.png" alt="الاستوديو" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px]"></div>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ScrollReveal delay={0.1} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎥</div>
          <h3 className="text-xl font-bold mb-2">{t('page.studio.feat1_title')}</h3>
          <p className="text-gray-400">{t('page.studio.feat1_desc')}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎙️</div>
          <h3 className="text-xl font-bold mb-2">{t('page.studio.feat2_title')}</h3>
          <p className="text-gray-400">{t('page.studio.feat2_desc')}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.3} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">{t('page.studio.feat3_title')}</h3>
          <p className="text-gray-400">{t('page.studio.feat3_desc')}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.4} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-4xl mb-4">☕</div>
          <h3 className="text-xl font-bold mb-2">{t('page.studio.feat4_title')}</h3>
          <p className="text-gray-400">{t('page.studio.feat4_desc')}</p>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default StudioRentalPage;