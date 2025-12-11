import React from 'react';
import { Brain, Cpu, MessageSquare, Rocket, Video, LayoutTemplate } from 'lucide-react';

const steps = [
  {
    icon: <Brain />,
    title: "Idea Mining",
    desc: "Extração profunda das histórias e experiências que posicionam uma pessoa como autoridade."
  },
  {
    icon: <LayoutTemplate />,
    title: "Framework Engineering",
    desc: "Transformação dos insights em métodos estruturados, prontos para vender."
  },
  {
    icon: <Cpu />,
    title: "AI Production Tracks",
    desc: "Criação acelerada de livros, palestras, workshops e produtos com inteligência artificial como copiloto."
  },
  {
    icon: <MessageSquare />,
    title: "Authority Narrative",
    desc: "Storytelling e posicionamento que fazem você ser lembrado como especialista."
  },
  {
    icon: <Rocket />,
    title: "Launch Engine",
    desc: "Criação da página, copy, promessa e funil de vendas em tempo real."
  },
  {
    icon: <Video />,
    title: "Livestream Strategy",
    desc: "Transformação de toda essa construção em conteúdo estratégico e audiência real."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-6 relative overflow-hidden bg-brand-card">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Como Isso É Possível Em <span className="text-purple-400">Apenas 3 Dias?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Simples. Usamos um modelo de aceleração que quebraria qualquer evento tradicional.
          </p>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 inline-block text-left">
             <p className="text-gray-300 mb-2">Durante 72 horas, todos os bloqueios são removidos.</p>
             <p className="text-white font-bold">No lugar de teoria, existe um processo validado, prático e intenso.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              <div className="relative h-full bg-brand-dark p-8 rounded-xl border border-white/10 group-hover:border-transparent transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-800 text-purple-400 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-purple-600 transition-colors">
                    {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
            <div className="inline-flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-black/40 border border-white/10 rounded-2xl">
                <div className="text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Eles pagaram</p>
                    <p className="text-3xl font-bold text-white line-through decoration-red-500 decoration-2">$2.000</p>
                </div>
                <div className="hidden md:block h-12 w-px bg-white/10"></div>
                <div className="text-center">
                    <p className="text-purple-400 text-sm uppercase tracking-wider mb-1 font-bold">Você paga</p>
                    <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">ZERO</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};