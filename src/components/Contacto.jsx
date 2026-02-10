import { Phone, Mail, Send } from 'lucide-react';

const Contacto = () => {
  return (
    <section className="pt-12 pb-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Información Lateral */}
          <div className="lg:w-1/3">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Hablemos</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              ¿Listo para dar el <span className="text-orange-600">siguiente paso?</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Nuestro equipo de expertos está listo para asesorarte en la planificación técnica y financiera de tu obra.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Llamada Directa</h4>
                  <p className="text-slate-600">+56 9 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Correo Electrónico</h4>
                  <p className="text-slate-600">proyectos@vertice.cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <form className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Juan Pérez" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="juan@empresa.com" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Tipo de Servicio</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white appearance-none">
                    <option>Construcción de Casa</option>
                    <option>Estructuras Metálicas</option>
                    <option>Obras Menores / Remodelación</option>
                    <option>Otro Proyecto</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mensaje o Detalles del Proyecto</label>
                  <textarea 
                    rows="4" 
                    placeholder="Cuéntanos un poco sobre lo que necesitas construir..." 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white resize-none"
                  ></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-slate-900/10 hover:shadow-orange-600/20 group">
                    Enviar Solicitud
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-xs text-slate-400 mt-4 text-center sm:text-left italic">
                    * Al enviar aceptas nuestra política de privacidad y tratamiento de datos.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;