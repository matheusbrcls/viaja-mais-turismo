import React from 'react';
import { Destination } from '../types';
import { ArrowRight } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Rio de Janeiro',
    price: 'R$ 899',
    // Imagem Clássica do Cristo Redentor
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop',
    badges: ['Cidade Maravilhosa', 'Praia']
  },
    {
    id: 2,
    name: "Porto de Galinhas",
    price: "R$ 1.299",
    // Imagem local que você colocou
    image: "/images/porto.jpg",
    badges: ["Nordeste", "Jangadas"]
  },
  {
    id: 3,
    name: "Orlando, EUA",
    price: "U$ 699",
    // Imagem disney.jpg local
    image: "/images/disney.jpg",
    badges: ["Disney", "Parques"]
  }
];

const Destinations: React.FC = () => {
  const getWhatsappLink = (destName: string) => {
    return `https://wa.me/5521992658170?text=Ol%C3%A1!%20Vi%20o%20destino%20${encodeURIComponent(destName)}%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`;
  };

  return (
    <section id="destinos" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Top Destinos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Destinos em Alta</h2>
          <div className="w-20 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="h-96 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex gap-2 mb-3">
                  {dest.badges?.map((badge, idx) => (
                    <span key={idx} className="bg-brand-cyan/20 backdrop-blur-md text-brand-cyan text-xs font-bold px-2 py-1 rounded">
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-300 text-sm">A partir de</p>
                    <p className="text-brand-cyan font-bold text-xl">{dest.price}</p>
                  </div>
                  <a 
                    href={getWhatsappLink(dest.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brand-blue p-3 rounded-full hover:bg-brand-cyan hover:text-white transition-colors"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;