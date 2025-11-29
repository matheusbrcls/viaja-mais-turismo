import React from 'react';
import { Clock, CreditCard, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5521992658170?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20personalizada.";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop" 
          alt="Paraíso Tropical" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Viaje Sem Complicações. <br />
            Viaje com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">VIAJA+</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-medium">
            Ofertas exclusivas, atendimento humano e os melhores destinos do Brasil e do mundo preparados especialmente para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-cyan text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,125,255,0.5)] hover:shadow-[0_0_30px_rgba(0,194,255,0.6)] transform hover:-translate-y-1 text-center"
            >
              Fazer Cotação Gratuita
            </a>
            <a 
              href="#destinos" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              Ver Destinos
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-white/90 text-sm font-medium">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <Clock size={18} className="text-brand-cyan" /> Atendimento 24h
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <CreditCard size={18} className="text-brand-cyan" /> Parcelamento até 12x
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
              <CheckCircle size={18} className="text-brand-cyan" /> Sem burocracia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;