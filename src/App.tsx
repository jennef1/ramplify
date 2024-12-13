import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import ValueSection from './components/ValueSection';
import Testimonials from './components/Testimonials';
import WorkProcess from './components/WorkProcess';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <UseCases />
      <ValueSection />
      <WorkProcess />
      <Testimonials />
      <CtaSection />
    </div>
  );
}

export default App;