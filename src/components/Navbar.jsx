import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';
import { useLocation } from 'react-router-dom';

/**
 * Diseñado para superponerse al Hero o mantenerse fijo en la parte superior.
 */
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollSection();
  const [isDarkTheme, setIsDarkTheme] = useState(location.pathname === "/");
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // 1. Detectar si el fondo debe dejar de ser transparente
      setHasScrolled(window.scrollY > 50);

      // 2. Lógica para detectar secciones claras/oscuras
      // Buscamos todas las secciones que tengan un atributo data-theme
      const sections = document.querySelectorAll('section[data-theme]');

      if (sections.length === 0) {
        // En páginas sin secciones, forzamos tema claro si hay scroll, o el que prefieras
        setIsDarkTheme(location.pathname === "/");
        return;
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Si la sección está ocupando la parte superior de la pantalla
        if (rect.top <= 80 && rect.bottom >= 80) {
          const theme = section.getAttribute('data-theme');
          setIsDarkTheme(theme === 'dark');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Ejecutar al montar para detectar el estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navTextColor = isDarkTheme ? 'text-white' : 'text-slate-900';
  const navBg = hasScrolled
    ? (isDarkTheme ? 'bg-slate-900/80 backdrop-blur-md border-white/10' : 'bg-white/80 backdrop-blur-md border-slate-200 shadow-sm')
    : 'bg-transparent border-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${navBg} ${navTextColor}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo - El texto de VALCRI cambiará de color solo si no es una imagen fija */}
          <div className="flex items-center gap-2">
            <img src="/valcri_icono.png" alt="Logo ValCri" className="w-12 h-12 rounded-full border-2 border-orange-500" />
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${navTextColor}`}>
                VALCRI
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFB800] uppercase">
                Construcciones
              </span>
            </div>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 font-medium">
              <button onClick={() => scrollTo("inicio")} className="hover:text-orange-500 transition-colors">Inicio</button>
              {/*<button onClick={() => scrollTo("galeria")} className="hover:text-orange-500 transition-colors">Galería</button>*/}
              <button onClick={() => scrollTo("servicios")} className="hover:text-orange-500 transition-colors">Servicios</button>
              <button onClick={() => scrollTo("nosotros")} className="hover:text-orange-500 transition-colors">Nosotros</button>
              <button onClick={() => scrollTo("contacto")} className="hover:text-orange-500 transition-colors">Contacto</button>
              <button onClick={() => scrollTo("mapa")} className="hover:text-orange-500 transition-colors">Mapa</button>
            </nav>
          </div>

          {/* Botón de Contacto */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+56912345678"
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all border 
                ${isDarkTheme
                  ? 'bg-white/10 hover:bg-white/20 border-white/10 text-white'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900'}`}
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+56 9 56846193</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-1 rounded-md transition-colors ${isDarkTheme ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-100'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMenuOpen && (
        <div className={`
    absolute top-full left-0 w-full p-6 md:hidden flex flex-col gap-4 shadow-2xl 
    animate-in slide-in-from-top duration-300 border-b
    ${isDarkTheme
            ? 'bg-slate-900 border-slate-800' // Colores modo oscuro
            : 'bg-white border-slate-200'    // Colores modo claro
          }
  `}>
          <button onClick={() => scrollTo("inicio")} className="hover:text-orange-500 transition-colors">Inicio</button>
          {/*<button onClick={() => scrollTo("galeria")} className="hover:text-orange-500 transition-colors">Galería</button>*/}
          <button onClick={() => scrollTo("servicios")} className="hover:text-orange-500 transition-colors">Servicios</button>
          <button onClick={() => scrollTo("nosotros")} className="hover:text-orange-500 transition-colors">Nosotros</button>
          <button onClick={() => scrollTo("contacto")} className="hover:text-orange-500 transition-colors">Contacto</button>
          <button onClick={() => scrollTo("mapa")} className="hover:text-orange-500 transition-colors">Mapa</button>
          <div className="pt-2">
            <a href= "tel:+56956846193" value= "+56 9 56846193" className="text-orange-500 font-bold flex items-center gap-2 py-2"  >
              <Phone className="w-4 h-4" /> Llamar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
