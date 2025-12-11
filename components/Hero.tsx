import React from 'react';
import { RegistrationForm } from './RegistrationForm';
import { Calendar, Users, Zap, AlertCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Ambience - Softer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Copy - Simplified and Cleaner */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Logo in Hero */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6939cbe358db0bac66414662.png" 
                alt="Power House Logo" 
                className="h-[200px] w-auto object-contain rotate-90"
              />
            </div>

            {/* Top Status */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-green-400 tracking-widest uppercase">Evento Online e Gratuito</span>
            </div>

            {/* Main Headline - Improved spacing and readability */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
              Eles Pagaram <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">$2.000</span> Para Viver Essa Transformação.
            </h1>

            {/* Secondary Headline & Description */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 mb-8">
               <p className="text-2xl text-white font-medium">
                 Você Pode Assistir Tudo — <span className="text-purple-300">Ao Vivo e 100% Gratuito.</span>
               </p>
               <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                 Durante 3 dias, 15 especialistas vão criar seus próprios métodos, produtos e funis com mentoria de alto nível — e você vai ver tudo acontecer, em tempo real.
               </p>
            </div>

            {/* Key Tags - Replaces the heavy grid/box */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 lg:mb-0">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-purple-400" /> 3 Dias
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300">
                    <Users className="w-4 h-4 text-purple-400" /> 15 Experts
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm text-gray-300">
                    <Zap className="w-4 h-4 text-purple-400" /> 100% Prático
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 rounded-full border border-red-500/20 text-sm text-red-400 font-medium">
                    <AlertCircle className="w-4 h-4" /> Sem Replay
                </span>
            </div>

            {/* Mobile-only CTA */}
            <div className="lg:hidden w-full mt-4">
                <Button variant="primary" fullWidth onClick={onCtaClick} className="shadow-xl shadow-purple-900/20">
                    QUERO GARANTIR MEU ACESSO GRATUITO
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3">Vagas limitadas no grupo VIP.</p>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5 w-full">
            <RegistrationForm />
          </div>

        </div>
      </div>
    </section>
  );
};