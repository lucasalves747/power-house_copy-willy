import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Audience } from './components/Audience';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';

function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-purple-500/30">
      <Header onCtaClick={scrollToForm} />
      
      <main>
        <Hero onCtaClick={scrollToForm} />
        <Features />
        <Audience />
        <Methodology />
      </main>

      <Footer onCtaClick={scrollToForm} />
    </div>
  );
}

export default App;