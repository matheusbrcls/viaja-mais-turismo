import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import MidCta from './components/MidCta';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <MidCta />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;