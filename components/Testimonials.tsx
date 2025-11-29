import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Souza',
    text: 'A viagem para Porto de Galinhas foi impecável! O suporte da equipe foi incrível do início ao fim.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/ana/100/100'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    text: 'Preço justo e atendimento rápido. Consegui fechar meu pacote para Disney em 2 dias sem dor de cabeça.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/carlos/100/100'
  },
  {
    id: 3,
    name: 'Mariana Lima',
    text: 'Melhor agência! A sugestão de hotel em Paris foi perfeita. Com certeza viajo com vocês de novo.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/mariana/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">O que dizem nossos viajantes</h2>
          <div className="w-20 h-1 bg-brand-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-brand-blue/10 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-cyan"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Cliente VIAJA+</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;