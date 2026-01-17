import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const PhotographyPage = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">{t('page.photography.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.photography.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">{t('common.book_session')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img src="/public/images/Asset 3@2x.png" alt="رائد فضاء مصور" className="w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl text-center glow-text mb-16">{t('page.photography.inside_studio')}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i, index) => (
            <ScrollReveal key={i} delay={index * 0.1}>
              <div className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold">{t('page.photography.session')} {i}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotographyPage;