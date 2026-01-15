import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
// حذف استيراد Hero و Goals منفردة لأنها الآن داخل Home
import ServicesPage from './pages/ServicesPage.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import MotionGraphicsPage from './pages/MotionGraphicsPage.jsx';
import MontagePage from './pages/MontagePage.jsx';
import PhotographyPage from './pages/PhotographyPage.jsx';
import StudioRentalPage from './pages/StudioRentalPage.jsx';
import WebDesignPage from './pages/WebDesignPage.jsx';
import ContentWritingPage from './pages/ContentWritingPage.jsx';
import MarketingPage from './pages/MarketingPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SocialSidebar from './components/SocialSidebar.jsx';
import CursorEffect from './components/CursorEffect.jsx';

// الصفحات الجديدة
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Home from './pages/Home.jsx'; // استيراد Home الجديد الذي يحتوي على كل المكونات
import Footer from './components/footer.jsx'; // إضافة استيراد الفوتر الجديد

const App = () => {
  return (
    <div className="min-h-screen text-white relative bg-[#080911] overflow-x-hidden">
      <BackgroundEffects />
      <CursorEffect />
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />
      
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/motion-graphics" element={<MotionGraphicsPage />} />
          <Route path="/services/montage" element={<MontagePage />} />
          <Route path="/services/photography" element={<PhotographyPage />} />
          <Route path="/services/studio-rental" element={<StudioRentalPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/content-writing" element={<ContentWritingPage />} />
          <Route path="/services/marketing" element={<MarketingPage />} />
          
          {/* الصفحات الجديدة */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      {/* إضافة الفوتر الجديد بدلاً من الفوتر القديم */}
      <Footer />
    </div>
  );
};

export default App;