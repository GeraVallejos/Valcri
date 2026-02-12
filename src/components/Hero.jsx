import { ArrowRight, HardHat, Ruler, CheckCircle2 } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';

/**
 * Componente Hero para Empresas de Construcción.
 * Diseñado para ser insertado directamente bajo un Navbar.
 */
const Hero = () => {
  const stats = [
    { id: 1, label: "Años de Experiencia", value: "15+", icon: <HardHat className="w-6 h-6 text-orange-500" /> },
    { id: 2, label: "Proyectos Entregados", value: "320", icon: <CheckCircle2 className="w-6 h-6 text-orange-500" /> },
    { id: 3, label: "Profesionales", value: "50+", icon: <Ruler className="w-6 h-6 text-orange-500" /> },
  ];
  const scrollTo = useScrollSection();

  return (
    <section className="relative w-full h-[85vh] min-h-[900px] flex items-center overflow-hidden bg-slate-900 font-sans" id='inicio' data-theme="dark">
      
      {/* 1. CAPA DE FONDO (POSICIÓN ABSOLUTA)
          'absolute inset-0' asegura que la imagen cubra todo el contenedor del section.
      */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Fondo de construcción profesional" 
          className="w-full h-full object-cover object-center scale-105"
        />
        
        {/* Overlay dinámico: Oscurece la imagen para que el texto sea legible */}
        <div className="absolute inset-0 bg-slate-950/80 lg:bg-gradient-to-r lg:from-slate-950 lg:via-slate-900/70 lg:to-transparent z-10"></div>
      </div>

      {/* 2. CAPA DE CONTENIDO (Z-INDEX SUPERIOR)
          Al usar 'relative z-20', este contenido se dibuja encima de la imagen.
      */}
      <div className="container mx-auto px-6 relative z-20">
  {/* Cambiamos grid-cols-2 por una estructura de 12 columnas para más control */}
  <div className="grid lg:grid-cols-12 gap-12 items-center">
    
    {/* Lado Izquierdo: Ahora ocupa 8 de 12 columnas (66% de la pantalla) */}
    <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8 text-center lg:text-left">
      
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs md:text-sm font-semibold w-fit mx-auto lg:mx-0 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        Disponibles para proyectos 2026
      </div>

      <h1 className="flex flex-col gap-3">
        <span className="text-xl md:text-2xl font-bold text-orange-500 uppercase tracking-[0.3em]">
          ValCri Construcciones
        </span>
        {/* Aumentamos el tamaño y permitimos que se extienda más */}
        <span className="text-5xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tighter">
          Estructuras Metálicas <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500">
            Remodelaciones
          </span>
        </span>
      </h1>

      <p className="text-lg md:text-2xl text-slate-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
        Expertos en infraestructura de alta complejidad. Llevamos tu visión desde los planos hasta la realidad con estándares residenciales e industriales premium en todo Chile.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 mt-4 justify-center lg:justify-start">
        <button onClick={() => scrollTo("contacto")} className="group flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-2xl shadow-orange-600/30 hover:-translate-y-1 text-lg">
          Cotizar Proyecto
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold transition-all border border-white/10 backdrop-blur-md text-lg">
          Ver Portafolio
        </button>
      </div>

            
            {/* Prueba Social */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm justify-center lg:justify-start">
              <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="/ecasa.png" alt="Cliente" />
                  <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100" alt="Cliente" />
                  <img className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100" alt="Cliente" />
              </div>
              <p>Importantes clientes confían en nosotros</p>
            </div>
          </div>

          {/* Lado Derecho: Estadísticas (Solo Desktop) */}
          <div className="lg:col-span-4 relative hidden lg:block">
      {/* Aquí tus estadísticas se verán como un complemento lateral y no como algo que aprieta al texto */}
      <div className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              

                <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  ValCri en números
                </h3>
                
                <div className="space-y-8">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex items-center gap-5 group">
                      <div className="p-3.5 rounded-xl bg-slate-800/50 group-hover:bg-orange-500/20 transition-all border border-white/5 group-hover:border-orange-500/40">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-4xl font-black text-white tracking-tighter leading-none mb-1">{stat.value}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-semibold">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </div>
        </div>
      </div>

      {/* Decoración: Gradiente inferior para suavizar la transición al resto de la página */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
