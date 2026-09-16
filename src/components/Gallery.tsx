import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  // Por enquanto, usando imagens de banco de imagens gratuitas (Unsplash) focadas em academia.
  // Você pode baixar as fotos do Instagram e colocá-las na pasta `public/` e alterar esses links depois.
  const photos = [
    { src: '/foto1.jfif', alt: 'Treino na academia' },
    { src: '/foto2.jfif', alt: 'Equipamentos modernos' },
    { src: '/foto3.jfif', alt: 'Ambiente familiar' },
    { src: '/foto4.jfif', alt: 'Treino de peso' },
  ];

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Vem pra <span className="text-orange-500">Top Fit</span></h2>
            <p className="text-zinc-400">Um pouco do nosso dia a dia na academia</p>
          </div>
          <a 
            href="https://www.instagram.com/topfit.academia.pederneiras/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 flex items-center space-x-2 text-white border border-zinc-700 hover:border-orange-500 hover:text-orange-500 rounded-full px-6 py-3 transition-colors"
          >
            <span>Siga no Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-xl group">
              <Image 
                src={photo.src} 
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
