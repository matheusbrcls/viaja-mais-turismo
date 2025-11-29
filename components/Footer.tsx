import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <a href="#" className="text-3xl font-extrabold tracking-tighter mb-6 block">
              <span className="text-brand-blue">VIAJA</span>
              <span className="text-brand-cyan">+</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua agência de confiança para explorar o mundo. Conectamos você aos melhores destinos com segurança e economia.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/viajamais" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@viajamaisturismo.com.br" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Suporte (Links úteis) */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-cyan">Suporte</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Cancelamento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguro Viagem</a></li>
              <li><a href="https://wa.me/5521992658170" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-cyan">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="https://wa.me/5521992658170" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} className="text-brand-blue" />
                  <span>+55 (21) 99265-8170</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue" />
                <span>contato@viajamaisturismo.com.br</span>
              </li>
              <li>
                <p className="text-gray-500 italic">Atendimento Online</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 VIAJA+ TURISMO. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;