import React from 'react';

export default function Features() {
  const features = [
    {
      id: "01",
      title: "Musculação",
      description: "Infraestrutura de ponta e metodologia personalizada. Acompanhamento focado em hipertrofia, performance e superação de limites.",
      details: ["Hipertrofia", "Foco individual", "Máquinas de ponta"]
    },
    {
      id: "02",
      title: "Jump",
      description: "Alta intensidade e absorção de impacto. Uma experiência coreografada para máximo gasto calórico e resistência cardiovascular.",
      details: ["Gasto Calórico: Alto", "Aeróbico", "Coreografado"]
    },
    {
      id: "03",
      title: "Ritmos",
      description: "Sincronia, movimento e energia. Aulas aeróbicas dinâmicas focadas em coordenação motora e bem-estar físico e mental.",
      details: ["Dança e Movimento", "Coordenação", "Energia e Saúde"]
    }
  ];

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8 text-white relative border-t border-zinc-900 overflow-hidden">
      
      {/* Detalhe de fundo estrutural */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho Minimalista e Tipográfico */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
              [ A Essência do Movimento ]
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none">
              Nossas <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                Modalidades.
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-xl max-w-sm font-light leading-relaxed">
            Mais do que treino, uma arquitetura corporal. Escolha a disciplina que alinha seu objetivo à nossa estrutura.
          </p>
        </div>

        {/* Grid Elegante e Responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-px bg-transparent lg:bg-zinc-900 border-none lg:border lg:border-zinc-900 rounded-xl overflow-hidden">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative bg-black p-8 sm:p-12 md:p-16 flex flex-col justify-between min-h-[350px] md:min-h-[450px] transition-all duration-700 hover:bg-zinc-900/40 border border-zinc-900 lg:border-none rounded-xl lg:rounded-none"
            >
              
              {/* Número Gigante Estilizado */}
              <div className="absolute top-4 right-6 md:top-8 md:right-8 text-7xl md:text-8xl font-black text-transparent opacity-10 font-mono tracking-tighter select-none"
                   style={{ WebkitTextStroke: '2px white' }}>
                {feature.id}
              </div>

              {/* Linha indicadora de hover */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-orange-500 transition-all duration-500 lg:group-hover:h-full rounded-l-xl lg:rounded-none"></div>

              <div className="relative z-10 mt-auto">
                <a 
                  href={`https://wa.me/5514996685286?text=${encodeURIComponent(`Olá! Quero saber mais sobre as aulas de ${feature.title} na Top Fit.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-orange-500 text-xs md:text-sm mb-6 opacity-80 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:text-orange-400 uppercase tracking-widest"
                >
                  Descobrir mais —
                </a>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white group-hover:text-orange-400 transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 mb-6 md:mb-8">
                  {feature.description}
                </p>

                {/* Detalhes específicos de cada aula (Tags) */}
                <div className="flex flex-wrap gap-2">
                  {feature.details.map((detail, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-[10px] md:text-xs font-mono uppercase tracking-wider text-zinc-400 border border-zinc-800 rounded-full group-hover:border-zinc-600 group-hover:text-zinc-200 transition-colors duration-500"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
