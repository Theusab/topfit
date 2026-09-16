import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana S.",
      role: "Aluna de Ritmos",
      text: "O ambiente mais acolhedor que já vi em Pederneiras. Os professores são atenciosos e a energia das aulas de ritmos muda o meu dia por completo.",
      initials: "MS",
      link: "https://www.instagram.com/topfit.academia.pederneiras/" // Substitua pelo link direto do post
    },
    {
      name: "Carlos Eduardo",
      role: "Aluno de Musculação",
      text: "Infraestrutura impecável. O que mais me impressiona é a dedicação dos instrutores em corrigir a postura e acompanhar a evolução do treino de perto.",
      initials: "CE",
      link: "https://www.instagram.com/topfit.academia.pederneiras/" // Substitua pelo link direto do post
    },
    {
      name: "Fernanda L.",
      role: "Aluna de Jump",
      text: "Treinar na Top Fit não é obrigação, é o meu momento de descompressão. Muito feliz com os resultados que alcancei em apenas 3 meses.",
      initials: "FL",
      link: "https://www.instagram.com/topfit.academia.pederneiras/" // Substitua pelo link direto do post
    }
  ];

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-8 text-white relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-orange-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            [ A Voz de Quem Vive ]
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            Experiências <span className="text-zinc-500">Reais.</span>
          </h2>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-950 p-8 md:p-12 border border-zinc-900 rounded-2xl hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col relative"
            >
              
              {/* Ícone de Aspas e Link Externo */}
              <div className="flex justify-between items-start mb-6">
                <div className="text-orange-500 text-4xl font-serif opacity-50 group-hover:opacity-100 transition-opacity">
                  "
                </div>
                {/* Seta indicando link externo */}
                <div className="text-zinc-700 group-hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              {/* Texto do depoimento */}
              <p className="text-zinc-400 font-light leading-relaxed mb-10 flex-grow group-hover:text-zinc-300 transition-colors">
                {item.text}
              </p>

              {/* Informações do Aluno */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{item.name}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider font-mono mt-1 flex items-center gap-2">
                    {item.role}
                  </p>
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
