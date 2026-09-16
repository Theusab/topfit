import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Plano Mensal",
      price: "R$ 99",
      period: "/mês",
      description: "Flexibilidade total para você treinar sem fidelidade.",
      features: [
        "Acesso livre à Musculação",
        "Acesso às aulas de Ritmos e Jump",
        "Avaliação física inclusa",
        "Suporte integral dos professores"
      ],
      highlight: false,
      buttonText: "Começar Agora"
    },
    {
      name: "Plano Semestral",
      price: "R$ 79",
      period: "/mês",
      description: "O melhor custo-benefício para transformar seu corpo.",
      features: [
        "Todas as vantagens do plano mensal",
        "Desconto exclusivo na mensalidade",
        "Sem taxa de matrícula",
        "Acesso liberado de Seg a Sáb"
      ],
      highlight: true,
      buttonText: "Garantir Desconto"
    }
  ];

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8 text-white relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-orange-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            [ Investimento em Você ]
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            Planos sem <span className="text-zinc-500">complicação.</span>
          </h2>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 md:p-12 rounded-3xl transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-zinc-900 border-2 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.15)] scale-100 md:scale-105 z-10' 
                  : 'bg-zinc-950 border border-zinc-900'
              }`}
            >
              
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white font-mono text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Mais Escolhido
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-zinc-500 font-mono text-sm ml-2">{plan.period}</span>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-zinc-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/5514996685286?text=${encodeURIComponent(`Olá! Quero me matricular na Top Fit pelo ${plan.name} de ${plan.price}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-orange-500 text-white hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
