const PoliticaPrivacidad = () => {
  return (
    <section
      id="privacidad"
      data-theme="light"
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
            Legal
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Política de <span className="text-orange-600">Privacidad</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            En <strong>Construcciones ValCri SpA</strong> respetamos la privacidad de nuestros
            clientes y protegemos sus datos personales conforme a la legislación chilena vigente,
            especialmente la Ley N° 19.628 sobre Protección de la Vida Privada.
          </p>

          <p className="text-sm text-slate-400 mt-4">
            Última actualización: 2026
          </p>
        </div>

        {/* Card contenido */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-10">
          
          {/* Sección 1 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Datos que recopilamos
            </h2>

            <p className="text-slate-600 mb-4">
              A través de nuestro formulario de contacto podemos solicitar:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Nombre de contacto</li>
              <li>Correo electrónico</li>
              <li>Información entregada por el usuario para solicitar cotización</li>
            </ul>

            <p className="text-slate-600 mt-4">
              Estos datos son entregados voluntariamente por el usuario.
            </p>
          </div>

          {/* Sección 2 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Finalidad del uso de los datos
            </h2>

            <p className="text-slate-600 mb-4">
              La información será utilizada únicamente para:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Responder consultas</li>
              <li>Preparar y enviar cotizaciones</li>
              <li>Contactar al cliente cuando sea necesario</li>
            </ul>

            <p className="text-slate-600 mt-4">
              Construcciones ValCri SpA no vende, arrienda ni comparte datos personales con terceros.
            </p>
          </div>

          {/* Sección 3 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Almacenamiento de la información
            </h2>

            <p className="text-slate-600">
              La información enviada se recibe a través de correo electrónico y se utiliza
              únicamente para gestionar la comunicación con el cliente.
            </p>
          </div>

          {/* Sección 4 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Derechos del usuario
            </h2>

            <p className="text-slate-600 mb-4">
              El usuario puede solicitar:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Eliminación de sus datos</li>
              <li>Modificación de la información enviada</li>
            </ul>

            <p className="text-slate-600 mt-4">
              Para ejercer estos derechos puede escribir a:
            </p>

            <a
              href="mailto:contacto@valcri.cl"
              className="inline-block mt-3 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              contacto@valcri.cl
            </a>
          </div>

          {/* Sección 5 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Seguridad
            </h2>

            <p className="text-slate-600">
              Aplicamos medidas razonables para proteger la información recibida.
            </p>
          </div>

          {/* Sección 6 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Legislación aplicable
            </h2>

            <p className="text-slate-600">
              Esta política se rige por las leyes de la República de Chile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PoliticaPrivacidad;
