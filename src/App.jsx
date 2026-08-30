import React from 'react';
import './styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import WhatWeCover from './components/WhatWeCover';
import Packages from './components/Packages';
import CustomPackage from './components/CustomPackage';
import HowItWorks from './components/HowItWorks';
import Samples from './components/Samples';
import Testimonials from './components/Testimonials';
import Terms from './components/Terms';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingPopup from './components/BookingPopup';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <SEO />
        <SmoothScroll />
        <Navbar />
        <BookingPopup />
        <div id="hero">
          <Hero />
        </div>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="what-we-cover">
          <WhatWeCover />
        </div>
        <div id="packages">
          <Packages />
        </div>
        <div id="custom-package">
          <CustomPackage />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="samples">
          <Samples />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="terms">
          <Terms />
        </div>
        <div id="contact">
          <ThankYou />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
