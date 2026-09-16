import React from 'react';

export default function Hero() {
  const whatsappNumber = "5514996685286";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a academia e agendar uma aula experimental.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative bg-zinc-900 text-white py-20 px-4 md:px-8 min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-zinc-900/90 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          SEU CORPO, <span className="text-orange-500">SUA MAIOR FORÇA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
          Venha para a Top Fit Academia em Pederneiras. Ambiente familiar, professores qualificados e equipamentos de primeira para você atingir seus resultados.
        </p>
        
        <div className="pt-8">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Agende sua Aula Experimental Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
