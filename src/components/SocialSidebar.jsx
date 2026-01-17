import React, { useState, useEffect } from 'react';

const SocialSidebar = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const socialLinks = [
    { id: 'facebook', name: 'Facebook', icon: '/public/images/Asset 15.png', url: 'https://www.facebook.com/profile.php?id=61575001066937' },
    { id: 'tiktok', name: 'TikTok', icon: '/public/images/Asset 16.png', url: 'https://www.tiktok.com/@aqrablaak' },
    { id: 'instagram', name: 'Instagram', icon: '/public/images/insta.png', url: 'https://www.instagram.com/aqrablaak/' },
    { id: 'X', name: 'X', icon: '/public/images/Asset 17.png', url: 'https://x.com/aqrablaak' },
    { id: 'youtyube', name: 'youtube', icon: '/public/images/Asset 18.png', url: 'https://www.youtube.com/@aqrablaak' },
    { id: 'whatsapp', name: 'WhatsApp', icon: '/public/images/Asset 14.png', url: 'https://wa.me/201099822822' }, 
    { id: 'phone', name: 'Phone', icon: '/public/images/phon.png', url: 'tel:+201099822822' }, 
  ];

  // تعريف المجموعات
  const alwaysVisibleIds = ['facebook', 'whatsapp', 'phone'];

  useEffect(() => {
    const handleScroll = () => {
      // التحقق مما إذا كان المستخدم قد وصل إلى نهاية الصفحة (مع هامش بسيط 50 بكسل)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const isBottom = scrollTop + windowHeight >= documentHeight - 50;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderLink = (social, index) => (
    <a
      key={social.id}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-12 h-12 md:w-16 md:h-16 flex items-center justify-center 
        transition-all duration-300 
        hover:scale-125 hover:-translate-y-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
        animate-subtle-bounce group
      "
      style={{ 
        animationDelay: `${index * 0.2}s` 
      }}
    >
      <img 
        src={social.icon} 
        alt={social.name} 
        className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-12"
        onError={(e) => {
          const target = e.target;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.fallback')) {
            const span = document.createElement('span');
            span.className = 'fallback flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white font-bold text-[10px] md:text-xs';
            span.innerText = social.name[0];
            parent.appendChild(span);
          }
        }}
      />
    </a>
  );

  return (
    <>
      {/* العرض على الكمبيوتر (Desktop) - ثابت دائماً بجميع الأيقونات */}
      <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-[100] pointer-events-auto">
        {socialLinks.map((social, index) => renderLink(social, index))}
      </div>

      {/* العرض على الموبايل (Mobile) - الجنب المتغير بخلفية بلور عند الوصول للقاع بدون حدود بيضاء */}
      <div className={`
        flex md:hidden fixed left-2 top-1/2 -translate-y-1/2 flex-col gap-3 z-[100] pointer-events-auto transition-all duration-700
        ${isAtBottom ? 'bg-black/20 backdrop-blur-lg rounded-full py-4 px-1 shadow-2xl' : 'bg-transparent'}
      `}>
        {socialLinks.map((social, index) => {
          const isPrimary = alwaysVisibleIds.includes(social.id);
          // يظهر إذا كان أساسياً أو إذا كنا في نهاية الصفحة
          if (isPrimary || isAtBottom) {
            return (
              <div key={social.id} className="animate-in fade-in slide-in-from-left-4 duration-500">
                {renderLink(social, index)}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default SocialSidebar;