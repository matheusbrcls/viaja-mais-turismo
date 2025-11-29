import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappLink = "https://wa.me/5521992658170?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20com%20a%20VIAJA%2B.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Altura aproximada do header + margem
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Destinos', id: 'destinos' },
    { name: 'Vantagens', id: 'vantagens' },
    { name: 'Depoimentos', id: 'depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-extrabold tracking-tighter"
          >
            <span className="text-brand-blue">VIAJA</span>
            <span className="text-brand-cyan">+</span>
            <span className={`ml-2 text-sm font-semibold tracking-widest ${isScrolled ? 'text-gray-600' : 'text-white'}`}>TURISMO</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-cyan text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-brand-cyan/50 transform hover:-translate-y-0.5"
          >
            Cotar Agora
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? 'text-brand-blue' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-brand-blue' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl flex flex-col p-6 space-y-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              className="text-gray-800 font-medium text-lg"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-center text-white py-3 rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cotar Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;