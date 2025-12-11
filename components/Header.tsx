import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-start">
            <img 
              src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/693af904517c3a084b5d8cf1.png" 
              alt="Power House Logo" 
              className="h-14  w-auto object-contain"
            />
        </div>

        <div className="hidden md:block">
           {/* Desktop CTA */}
           <Button variant="primary" onClick={onCtaClick} className="text-sm py-2 px-6">
             QUERO GARANTIR MEU ACESSO GRATUITO
           </Button>
        </div>

        <div className="md:hidden">
          {/* Mobile CTA (Smaller) */}
          <Button variant="primary" onClick={onCtaClick} className="text-xs py-2 px-3">
             GARANTIR ACESSO
          </Button>
        </div>
      </div>
    </header>
  );
};