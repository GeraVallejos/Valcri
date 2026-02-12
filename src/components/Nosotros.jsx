import { Award, Target, Eye, Users } from 'lucide-react';

const Nosotros = () => {
  return (
    <section className="pt-12 bg-white overflow-hidden pb-12" id='nosotros' data-theme="light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen y Decoración */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipo de construcción trabajando" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-600 rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 border-8 border-slate-100 w-32 h-32 -z-0 hidden md:block"></div>
            
            {/* Tarjeta Flotante de Experiencia */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 hidden xl:block max-w-[200px] border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Award className="text-orange-600 w-8 h-8" />
                <span className="text-3xl font-bold text-slate-900">15</span>
              </div>
              <p className="text-sm font-semibold text-slate-600 leading-tight">Años construyendo sueños con excelencia.</p>
            </div>
          </div>

          {/* Contenido de Texto */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm italic">Sobre Nosotros</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
                Más que edificios, <span className="text-orange-600">construimos legados.</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Vértice nació en 2009 con la firme convicción de elevar los estándares de la construcción civil. Lo que comenzó como una pequeña PyME familiar, hoy es un referente de innovación y seguridad en proyectos industriales y residenciales premium.
            </p>

            {/* Misión y Visión Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Target className="text-orange-600 w-6 h-6" />
                  </div>
                  Misión
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Entregar soluciones constructivas que superen las expectativas de calidad, tiempo y presupuesto, garantizando la seguridad absoluta.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Eye className="text-slate-900 w-6 h-6" />
                  </div>
                  Visión
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ser la constructora líder en sostenibilidad e innovación tecnológica, transformando el paisaje urbano de forma responsable.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Users className="text-orange-600 w-5 h-5" />
                <span className="text-slate-900 font-bold italic">Equipo Profesional</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-orange-600 w-5 h-5" />
                <span className="text-slate-900 font-bold italic">Calidad ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;