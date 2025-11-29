import React from 'react';
import { Plane } from 'lucide-react';

const MidCta: React.FC = () => {
  const whatsappLink = "https://wa.me/5521992658170?text=Ol%C3%A1!%20Estou%20pronto%20para%20viajar%20e%20gostaria%20de%20uma%20cota%C3%A7%C3%A3o.";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-brand-blue">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-900 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-md p-3 rounded-full mb-6">
          <Plane className="text-white w-8 h-8 animate-pulse" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Pronto para viajar? <br/>
          Receba uma cotação hoje mesmo!
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Deixe a parte chata com a gente. Preocupe-se apenas em fazer as malas e aproveitar cada momento.
        </p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-brand-blue px-10 py-5 rounded-full font-extrabold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          QUERO VIAJAR AGORA
        </a>
      </div>
    </section>
  );
};

export default MidCta;