import { Phone, BrickWall, Mail, ArrowRight, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 font-sans">
      {/* Sección Superior: CTA de Proyecto */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">¿Tienes un proyecto en mente?</h2>
            <p className="text-slate-400">Hagamos realidad tu visión con los mejores estándares del mercado.</p>
          </div>
          <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-orange-600/20">
            Comenzar Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sección Media: Enlaces e Info */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Columna 1: Branding */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-md">
              <BrickWall className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              VÉRTICE<span className="text-orange-500">.</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Líderes en soluciones constructivas innovadoras. Comprometidos con la excelencia operativa y la seguridad en cada obra desde 2009.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Columna 2: Servicios */}
        <div>
          <h3 className="text-white font-bold mb-6">Nuestros Servicios</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Edificación Industrial</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Obra Civil y Vialidad</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Remodelaciones Premium</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Gestión de Proyectos</a></li>
          </ul>
        </div>

        {/* Columna 3: Enlaces Rápidos */}
        <div>
          <h3 className="text-white font-bold mb-6">Empresa</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Nuestros Proyectos</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Seguridad y Calidad</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="text-white font-bold mb-6">Contacto Directo</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-orange-500 w-5 h-5 shrink-0" />
              <span>Av. Domingo Santa María 2950, Renca, Chile</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-orange-500 w-5 h-5 shrink-0" />
              <span>+56 9 56846193</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-orange-500 w-5 h-5 shrink-0" />
              <span>contacto@vertice.cl</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sección Inferior: Copyright */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
          <p>© 2026 Construcciones ValCri SPA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;