import React from 'react';

export default function Footer() {
  const whatsappNumber = "5514996685286";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const instagramLink = "https://www.instagram.com/topfit.academia.pederneiras/";

  return (
    <footer className="bg-black py-16 px-4 md:px-8 text-zinc-400 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand / About */}
        <div className="lg:col-span-1">
          <h4 className="text-3xl font-extrabold text-white mb-6 tracking-tighter">
            TOP <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">FIT</span>
          </h4>
          <p className="mb-6 font-light leading-relaxed text-sm">
            A academia com o ambiente mais familiar de Pederneiras. Onde seu corpo encontra sua maior força, com profissionais focados no seu resultado.
          </p>
          <div className="flex space-x-4">
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Informações de Contato */}
        <div>
          <h4 className="text-sm font-mono uppercase tracking-widest text-white mb-6">Contato</h4>
          <address className="not-italic flex flex-col space-y-4 text-sm font-light">
            <p>
              <strong className="block text-zinc-300 font-normal mb-1">Endereço</strong>
              Rua Jorge Neme, 1170<br />
              Altos do Alvorada (Atrás do Posto Pedra de Fogo)<br />
              Pederneiras, SP
            </p>
            <p>
              <strong className="block text-zinc-300 font-normal mb-1">Telefone / WhatsApp</strong>
              <a href={whatsappLink} className="text-orange-500 hover:text-orange-400 transition-colors">
                (14) 99668-5286
              </a>
            </p>
            <p>
              <strong className="block text-zinc-300 font-normal mb-1">Horário</strong>
              Segunda a Sexta: 05:00 às 22:00
            </p>
          </address>
        </div>

        {/* Mapa do Google Embed */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-zinc-900 h-[250px] relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://maps.google.com/maps?q=Top%20Fit%20Academia%20Pederneiras&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização da Top Fit Academia"
          ></iframe>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest gap-4">
        <p>&copy; {new Date().getFullYear()} Top Fit Academia. Todos os direitos reservados.</p>
        <p>Criado com V.L.A.E.G Protocol</p>
      </div>
    </footer>
  );
}
