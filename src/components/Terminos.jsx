

const Terminos = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Términos y Condiciones
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Última actualización: 2026
        </p>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Bienvenido al sitio web de <strong>Construcciones ValCri SPA</strong>.
            Al acceder y utilizar este sitio web, aceptas los siguientes
            Términos y Condiciones. Si no estás de acuerdo con estos términos,
            te recomendamos no utilizar este sitio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            1. Información General
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Empresa:</strong> Construcciones ValCri SPA
            </li>
            <li>
              <strong>Email de contacto:</strong> contacto@valcri.cl
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            2. Uso del Sitio Web
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Utilizar el sitio únicamente con fines legales.</li>
            <li>No intentar vulnerar la seguridad del sitio.</li>
            <li>No utilizar el sitio para distribuir contenido malicioso.</li>
            <li>No copiar contenido sin autorización.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            3. Propiedad Intelectual
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Todo el contenido de este sitio, incluyendo textos, imágenes,
            logotipos, diseño y código, es propiedad de Construcciones ValCri
            SPA o de sus respectivos licenciantes y está protegido por las
            leyes de propiedad intelectual aplicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            4. Información de Servicios
          </h2>
          <p className="text-gray-700 leading-relaxed">
            La información publicada en este sitio es referencial y puede
            modificarse sin previo aviso. Construcciones ValCri SPA se reserva
            el derecho de actualizar, modificar o eliminar información cuando
            sea necesario.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            5. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-700 leading-relaxed">
            No garantizamos que el sitio esté disponible de forma continua ni
            que esté libre de errores. Construcciones ValCri SPA no será
            responsable por daños derivados del uso del sitio web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            6. Enlaces a Terceros
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Este sitio puede contener enlaces a sitios externos. No somos
            responsables del contenido ni de las políticas de privacidad de
            dichos sitios.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            7. Privacidad
          </h2>
          <p className="text-gray-700 leading-relaxed">
            El uso de este sitio también se rige por nuestra Política de
            Privacidad.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            8. Modificaciones
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Construcciones ValCri SPA puede actualizar estos términos en
            cualquier momento. Los cambios serán publicados en esta misma
            página.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            9. Legislación Aplicable
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Estos términos se rigen por las leyes de la República de Chile.
          </p>
        </section>

        <section className="mt-10 border-t pt-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">
            Contacto
          </h2>
          <p className="text-gray-700">
            Si tienes dudas sobre estos términos puedes escribir a:
          </p>
          <a
              href="mailto:contacto@valcri.cl"
              className="inline-block mt-3 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              contacto@valcri.cl
            </a>
        </section>
      </div>
    </div>
  );
}

export default Terminos;