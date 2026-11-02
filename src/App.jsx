import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Shared Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DeepCleaning from './pages/DeepCleaning';
import PackingMoving from './pages/PackingMoving';
import EventPlanning from './pages/EventPlanning';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-container">
      {/* Scroll listener to scroll up on route change */}
      <ScrollToTop />

      {/* Shared Header & Sticky Navbar */}
      <Navbar />

      {/* Main Page Router */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/services/packing-moving" element={<PackingMoving />} />
          <Route path="/services/event-planning" element={<EventPlanning />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer />

      {/* Reusable Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
