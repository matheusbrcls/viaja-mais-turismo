import React from 'react';
import { Feature } from '../types';
import { Heart, Globe, MessageCircle, Zap, CreditCard, Briefcase } from 'lucide-react';

const features: Feature[] = [
  {
    id: 1,
    title: 'Atendimento Humanizado',
    description: 'Nada de robôs. Fale com especialistas reais que amam viajar tanto quanto você.',
    icon: Heart
  },
  {
    id: 2,
    title: 'Parceiros Globais',
    description: 'Acesso às melhores consolidadoras aéreas e hoteleiras do mundo.',
    icon: Globe
  },
  {
    id: 3,
    title: 'Suporte WhatsApp',
    description: 'Dúvidas? Resolvemos tudo na palma da sua mão, rápido e prático.',
    icon: MessageCircle
  },
  {
    id: 4,
    title: 'Agilidade Total',
    description: 'Cotações e fechamentos rápidos, sem enrolação burocrática.',
    icon: Zap
  },
  {
    id: 5,
    title: 'Pagamento Facilitado',
    description: 'Diversas formas de pagamento para caber no seu bolso.',
    icon: CreditCard
  },
  {
    id: 6,
    title: 'Pacotes Personalizados',
    description: 'Roteiros feitos sob medida para o seu estilo de viagem.',
    icon: Briefcase
  }
];

const Features: React.FC = () => {
  return (
    <section id="vantagens" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por que escolher a VIAJA+?</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Não somos apenas uma agência, somos seus parceiros na realização de sonhos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.id} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <feature.icon className="text-brand-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;