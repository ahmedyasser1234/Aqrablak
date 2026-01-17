import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Goals from './components/Goals.jsx';
import Ambition from './components/Ambition.jsx';
import StudioShowcase from './components/StudioShowcase.jsx';
import IdeaPlanting from './components/IdeaPlanting.jsx';
import Footer from './components/Footer.jsx';
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

const Home = () => (
  <>
    <Hero />
    <Goals />
    <Ambition />
    <StudioShowcase />
    <IdeaPlanting />
  </>
);

const App = () => {
  return (
    <div className="min-h-screen text-white relative bg-[#080911] overflow-x-hidden">
      <BackgroundEffects />
      <CursorEffect />
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />
      <main className="relative z-10">
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
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;