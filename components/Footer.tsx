import React from 'react';
import { Button } from './ui/Button';
import { Timer, Globe, Lock, AlertTriangle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="bg-brand-dark pt-10 pb-12 relative overflow-hidden">
        {/* Scarcity Section */}
        <div className="container mx-auto px-4 mb-20">
            <div className="max-w-5xl mx-auto bg-gradient-to-b from-gray-900 to-black border border-red-500/20 rounded-3xl p-8 md:p-12 text-center relative">
                
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                    <div className="space-y-2">
                        <Globe className="w-8 h-8 text-blue-500 mx-auto" />
                        <h4 className="text-white font-bold">100% Online</h4>
                        <p className="text-gray-500 text-sm">Assista de onde estiver</p>
                    </div>
                    <div className="space-y-2">
                        <Timer className="w-8 h-8 text-red-500 mx-auto" />
                        <h4 className="text-white font-bold">Sem Replay</h4>
                        <p className="text-gray-500 text-sm">Transmissão única ao vivo</p>
                    </div>
                    <div className="space-y-2">
                        <Lock className="w-8 h-8 text-yellow-500 mx-auto" />
                        <h4 className="text-white font-bold">Vagas Limitadas</h4>
                        <p className="text-gray-500 text-sm">Grupo VIP Exclusivo</p>
                    </div>
                    <div className="space-y-2">
                        <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto" />
                        <h4 className="text-white font-bold">Sem 2ª Chance</h4>
                        <p className="text-gray-500 text-sm">Quem não entrar, perde</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                É gratuito. É ao vivo. E pode ser a virada que faltava.
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
                Clique no botão abaixo, entre agora no grupo VIP gratuito e garanta seu lugar para finalmente transformar o que sabe em autoridade digital.
            </p>
            
            <Button variant="primary" onClick={onCtaClick} className="mx-auto   px-3 shadow-2xl shadow-purple-600/30" pulse>
                QUERO ENTRAR NO GRUPO VIP <ArrowRight />
            </Button>

            <div className="mt-16 pt-8 border-t border-white/5 text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Power House Event. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  );
};