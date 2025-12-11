import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Criação de um método autoral",
  "Estrutura de livro (modelo Amazon)",
  "Produto digital pronto para lançar",
  "Palestra ou workshop modelado",
  "Página de captura + funil funcionando",
  "Posicionamento e narrativa de autoridade",
  "Conteúdos profissionais sendo gravados",
  "Estratégia de lançamento com mentores"
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-card relative border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Que Você Vai Ver Acontecer <span className="text-purple-500">Ao Vivo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Não é sobre o que eles vão aprender. É sobre o que eles vão <span className="text-white font-bold">construir</span> na sua frente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-brand-dark/50 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all hover:bg-white/5 group">
              <CheckCircle2 className="w-8 h-8 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-lg font-medium text-white">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};