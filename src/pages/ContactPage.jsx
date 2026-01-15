import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'موشن جرافيك',
    'مونتاج',
    'تصوير إحترافي',
    'تأجير إستوديو',
    'تصميم الويب',
    'كتابة المحتوى',
    'التسويق'
  ];

  return (
    <div className="pt-32 px-10 pb-20">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400">تواصل معنا</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا الآن لنبدأ رحلة الإبداع معاً.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* معلومات التواصل */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-right">معلومات التواصل</h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">الهاتف</p>
                  <p className="text-xl font-bold">01099822822</p>
                  <p className="text-xl font-bold">01014700317</p>

                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">البريد الإلكتروني</p>
                  <p className="text-xl font-bold">info@aqrablk.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">العنوان</p>
                  <p className="text-xl font-bold">دكرنس  - الدقهلية - مصر </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">ساعات العمل</p>
                  <p className="text-xl font-bold">من السبت إلى الخميس</p>
                  <p className="text-gray-400">9:00 صباحاً - 5:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-right">أرسل رسالتك</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم بالكامل *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-right"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-right"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-right"
                    required
                  />
                </div>
              </div>

              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-right"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="رسالتك *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all text-right"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-xl"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;