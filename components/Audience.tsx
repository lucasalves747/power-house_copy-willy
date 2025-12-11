import React from 'react';
import { Target, PenTool, Briefcase, Layout, TrendingUp } from 'lucide-react';

const audienceList = [
  {
    icon: <TrendingUp />,
    title: "Resultados Existentes",
    text: "Já tem resultados, mas sente que ainda pode impactar muito mais."
  },
  {
    icon: <PenTool />,
    title: "Aspirante a Autor",
    text: "Sempre quis escrever um livro, dar uma palestra ou lançar algo próprio — mas nunca fez."
  },
  {
    icon: <Briefcase />,
    title: "Profissionais",
    text: "É empresário, especialista, educador, criador ou consultor."
  },
  {
    icon: <Layout />,
    title: "Expert sem Estrutura",
    text: "Tem conhecimento profundo, mas ainda não tem estrutura digital profissional."
  },
  {
    icon: <Target />,
    title: "Futura Referência",
    text: "Sabe que pode virar referência… mas não sabe por onde começar."
  }
];

export const Audience: React.FC = () => {
  return (
    <section className="py-10 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Para Quem É Essa Transmissão?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {audienceList.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-pink-500/20 transition-colors">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 mb-4">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};