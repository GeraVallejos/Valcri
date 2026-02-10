import { MapPin, Clock, ExternalLink } from "lucide-react";

const Mapa = () => {
  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Información de Ubicación */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
              <MapPin size={14} />
              Ubicación
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Nuestra <br />
              <span className="text-orange-500">Oficina</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Estamos ubicados en el corazón del sector industrial, listos para recibirte y discutir los detalles de tu próximo gran proyecto de construcción.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Dirección</h4>
                  <p className="text-slate-400 text-sm italic">Av. Domingo Santa María 2950, Renca, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Horario de Atención</h4>
                  <p className="text-slate-400 text-sm">Lun - Vie: 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/JaZAPQ8q6buxnMbC9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold border border-white/10 transition-all group w-fit"
            >
              Cómo llegar
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Mapa Interactivo */}
          <div className="lg:w-2/3 relative min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Overlay para "oscurecer" el mapa de Google Maps estándar y que encaje con el tema oscuro */}
            <div className="absolute inset-0 pointer-events-none z-10 bg-slate-900/10 mix-blend-multiply"></div>
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13321.672205639072!2d-70.6837169!3d-33.4123437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4266168db03%3A0xa079cc66a1c4466f!2sEstudio%20Contable%20J.V.D!5e0!3m2!1ses-419!2scl!4v1770747289785!5m2!1ses-419!2scl"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.8] invert-[0.9] contrast-[1.2] brightness-[0.8]"
              style={{ border: 0, minHeight: '450px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Mapa;  