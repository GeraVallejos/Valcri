import { useState } from 'react';
import { Menu, X, Phone, BrickWall } from 'lucide-react';

/**
 * Diseñado para superponerse al Hero o mantenerse fijo en la parte superior.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-[2px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
              <img src="/valcri_icono.png" alt="Logo ValCri" className="w-12 h-12 rounded-full border-2 border-orange-500" />
            <div className="flex flex-col leading-none">
              
                  <span className="text-2xl font-black tracking-tighter text-white">
                    VALCRI
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFB800] uppercase">
                    Construcciones
                  </span>
                </div>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors">Servicios</a>
            <a href="#" className="text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors">Proyectos</a>
            <a href="#" className="text-sm font-medium text-slate-200 hover:text-orange-500 transition-colors">Nosotros</a>
          </div>

          {/* Botón de Contacto y Toggle Móvil */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+56912345678" 
              className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-semibold transition-all border border-white/10 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+56 9 56846193</span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-1 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Alternar menú"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <a href="#" className="text-slate-300 hover:text-orange-500 font-medium py-2 border-b border-white/5">Inicio</a>
          <a href="#" className="text-slate-300 hover:text-orange-500 font-medium py-2 border-b border-white/5">Servicios</a>
          <a href="#" className="text-slate-300 hover:text-orange-500 font-medium py-2 border-b border-white/5">Proyectos</a>
          <a href="#" className="text-slate-300 hover:text-orange-500 font-medium py-2 border-b border-white/5">Nosotros</a>
          <div className="pt-2">
            <a href="#" className="text-orange-500 font-bold flex items-center gap-2 py-2">
              <Phone className="w-4 h-4" /> Llamar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
