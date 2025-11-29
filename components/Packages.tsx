import React from 'react';
import { Package } from '../types';
import { Calendar, Star } from 'lucide-react';

const packages: Package[] = [
  {
    id: 1,
    destination: 'Cancún, México',
    description: 'All inclusive em resort 5 estrelas de frente para o mar do Caribe.',
    price: 'R$ 4.590',
    duration: '7 dias',
    image: 'https://picsum.photos/seed/cancun/600/400'
  },
  {
    id: 2,
    destination: 'Gramado, RS',
    description: 'O charme europeu no sul do Brasil com passeio de Maria Fumaça.',
    price: 'R$ 1.890',
    duration: '5 dias',
    image: 'https://picsum.photos/seed/gramado/600/400'
  },
  {
    id: 3,
    destination: 'Paris, França',
    description: 'Voo direto + Hotel próximo à Torre Eiffel com café da manhã.',
    price: 'R$ 5.990',
    duration: '6 dias',
    image: 'https://picsum.photos/seed/paris/600/400'
  },
  {
    id: 4,
    destination: 'Maragogi, AL',
    description: 'O caribe brasileiro. Águas cristalinas e piscinas naturais.',
    price: 'R$ 2.100',
    duration: '5 dias',
    image: 'https://picsum.photos/seed/maragogi/600/400'
  }
];

const Packages: React.FC = () => {
  return (
    <section id="pacotes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pacotes Populares</h2>
            <p className="text-gray-500 mt-2">As melhores ofertas da semana selecionadas para você.</p>
          </div>
          <button className="hidden md:block text-brand-blue font-bold hover:text-brand-cyan transition-colors">
            Ver todos os pacotes &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.destination} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md shadow-sm flex items-center gap-1 text-xs font-bold text-gray-800">
                   <Star size={12} className="text-yellow-400 fill-yellow-400" /> 4.9
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-brand-cyan font-bold uppercase tracking-wide mb-1">{pkg.duration}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.destination}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{pkg.description}</p>
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <p className="text-xs text-gray-400">A partir de</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-brand-blue">{pkg.price}</span>
                    <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-cyan transition-colors">
                      Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-brand-blue font-bold hover:text-brand-cyan transition-colors border border-brand-blue rounded-full px-6 py-3 w-full">
            Ver todos os pacotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;