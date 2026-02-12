import { Home, Factory, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';
import { useScrollSection } from '../hooks/useScrollSection';

const Servicios = () => {

  const scrollTo = useScrollSection();

  const services = [
    {
      title: "Estructuras Metálicas",
      description: "Diseño, fabricación y montaje de estructuras de alta resistencia para galpones, naves industriales y refuerzos estructurales de gran escala.",
      icon: <Factory className="w-8 h-8" />,
      image: "estructuras_metalicas.jpg"
    },
    {
      title: "Construcción de Casas",
      description: "Proyectos llave en mano. Desde la cimentación hasta las terminaciones finas, construimos el hogar de tus sueños con estándares residenciales premium.",
      icon: <Home className="w-8 h-8" />,
      image: "remodelacion_casa.avif"
    },
    {
      title: "Obras Menores",
      description: "Ampliaciones, remodelaciones de baños y cocinas, pintura, techumbres y mantenimiento general con personal altamente calificado.",
      icon: <Hammer className="w-8 h-8" />,
      image: "/cocina_obras_menores.jpg"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 overflow-hidden" id='servicios' data-theme="light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Nuestra Especialidad</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">Soluciones integrales de <span className="text-orange-600">construcción</span></h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Contamos con la infraestructura y el equipo técnico necesario para abordar proyectos de diversa complejidad, garantizando durabilidad y cumplimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              {/* Imagen de Servicio */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 p-3 bg-orange-600 rounded-xl text-white shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-slate-900 font-bold text-sm flex items-center gap-2 italic">
                    <ShieldCheck className="text-orange-600 w-4 h-4" /> Garantía de calidad
                  </span>
                  <button
                    onClick={() => {
                      scrollTo("contacto");
                      // Opcional: Pequeño delay para que el select cambie después del inicio del scroll
                      setTimeout(() => {
                        const select = document.getElementsByName("service")[0];
                        if (select) select.value = service.title;
                      }, 500);
                    }}
                    className="text-orange-600 hover:text-orange-700 font-bold text-sm flex items-center gap-1 group/btn transition-colors"
                  >
                    Cotizar Proyecto <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;