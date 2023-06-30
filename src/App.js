import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductFeatures from './components/ProductFeatures'
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <ProductFeatures />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
