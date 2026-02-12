import { Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
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
    <section className="pt-12 pb-12 bg-white relative overflow-hidden" id='contacto' data-theme="light">
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
              {[
                { icon: <Phone size={24} />, label: "Llamada Directa", value: "+56 9 56846193", href: "tel:+56956846193" },
                { icon: <Mail size={24} />, label: "Correo Electrónico", value: "contacto@valcri.cl", href: "mailto:contacto@valcri.cl" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center gap-4 group p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{item.label}</h4>
                    <p className="text-slate-600 group-hover:text-orange-600 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">

            {/* --- MENSAJE DE ÉXITO--- */}
            {status === "SUCCESS" && (
              <div className="absolute inset-0 bg-white/90 z-10 flex flex-col items-center justify-center transition-all animate-in fade-in duration-500">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle2 size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado!</h3>
                <p className="text-slate-600 text-center mt-2 px-6">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setStatus("IDLE")}
                  className="mt-6 text-orange-600 font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            )}

            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6">
              {/* --- CAMPOS OCULTOS DE CONFIGURACIÓN --- */}
              <input type="hidden" name="subject" value="Nueva solicitud de presupuesto" />
              <input type="hidden" name="from_name" value="Desde pagina valcri.cl" />

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
                  <option value="Estructuras Metálicas">Estructuras Metálicas</option>
                  <option value="Construcción de Casas">Construcción de Casa</option>
                  <option value="Obras Menores">Obras Menores / Remodelación</option>
                  <option value="Otro Proyecto">Otro Proyecto</option>
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
    </section>
  );
};

export default Contacto;