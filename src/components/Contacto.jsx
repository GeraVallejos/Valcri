import { Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Contacto = () => {


  const [status, setStatus] = useState("IDLE")

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(event.target);

    // Tu Access Key de Web3Forms
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("SUCCESS");
      event.target.reset();
      setTimeout(() => setStatus("IDLE"), 5000);
    } else {
      console.log("Error", data);
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 5000);
    }
    } catch (error) {
      console.log("Error al enviar el formulario:", error);
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 5000);
    }
    
  };

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
                  <p className="text-slate-600">+56 9 56846193</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Correo Electrónico</h4>
                  <p className="text-slate-600">contacto@valcri.cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6">
                {/* --- CAMPOS OCULTOS DE CONFIGURACIÓN --- */}
                <input type="hidden" name="subject" value="Nueva solicitud de presupuesto" />
                <input type="hidden" name="from_name" value="Mi Constructora Web" />

                {/* Honeypot (Anti-spam): Si un bot lo llena, el correo no se envía */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                {/* --------------------------------------- */}
                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nombre Completo</label>
                  <input
                    name="name" // IMPORTANTE: Agregar atributo name
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-900"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input
                    name="email" // IMPORTANTE: Agregar atributo name
                    type="email"
                    required
                    placeholder="juan@empresa.com"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white text-slate-900"
                  />
                </div>

                {/* Servicio */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Tipo de Servicio</label>
                  <select name="service" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white appearance-none text-slate-900">
                    <option>Construcción de Casa</option>
                    <option>Estructuras Metálicas</option>
                    <option>Obras Menores / Remodelación</option>
                    <option>Otro Proyecto</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Mensaje o Detalles del Proyecto</label>
                  <textarea
                    name="message" // IMPORTANTE: Agregar atributo name
                    required
                    rows="4"
                    placeholder="Cuéntanos un poco sobre lo que necesitas construir..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-white resize-none text-slate-900"
                  ></textarea>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === "SENDING"}
                    className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-bold transition-all shadow-xl group
                ${status === "SENDING" ? 'bg-slate-400 cursor-not-allowed' : 'bg-slate-900 hover:bg-orange-600 text-white shadow-slate-900/10 hover:shadow-orange-600/20'}`}
                  >
                    {status === "SENDING" ? (
                      <>
                        Enviando...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status === "ERROR" && (
                    <p className="text-red-500 text-sm mt-4 font-bold">Ocurrió un error. Inténtalo de nuevo.</p>
                  )}
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