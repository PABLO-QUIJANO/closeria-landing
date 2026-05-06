// Variables configurables por cliente
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "#";
const DEMO_PHONE = process.env.NEXT_PUBLIC_DEMO_PHONE ?? "+34600000000";

// Definición de planes de precios
const PLANES = [
  {
    nombre: "Básico",
    precio: 199,
    descripcion: "Para agencias pequeñas que empiezan a automatizar",
    features: [
      "1 número de WhatsApp",
      "Hasta 200 conversaciones/mes",
      "1 agente en Google Calendar",
      "Catálogo hasta 20 inmuebles",
      "Soporte por email (48h)",
    ],
    destacado: false,
    cta: "Empezar con Básico",
  },
  {
    nombre: "Pro",
    precio: 349,
    descripcion: "Para agencias de hasta 8 agentes con volumen medio-alto",
    features: [
      "1 número de WhatsApp",
      "Conversaciones ilimitadas",
      "Hasta 8 agentes y calendarios",
      "Catálogo ilimitado de inmuebles",
      "Recordatorios automáticos 24h",
      "Soporte prioritario por WhatsApp",
      "Puesta en marcha en 48h",
    ],
    destacado: true,
    cta: "Empezar con Pro",
  },
] as const;

// Icono de check reutilizable
function CheckIcon({ destacado }: { destacado: boolean }) {
  return (
    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg
        className="w-3 h-3 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function CTAFinal() {
  const whatsappHref = `https://wa.me/${DEMO_PHONE.replace(/\D/g, "")}`;

  return (
    <section id="precios" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado de precios */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Precios simples y transparentes
          </h2>
          <p className="text-xl text-gray-500">
            Sin permanencias. Cancela cuando quieras.{" "}
            <span className="text-green-600 font-semibold">El primer mes, gratis.</span>
          </p>
        </div>

        {/* Tarjetas de planes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {PLANES.map((plan) => (
            <div
              key={plan.nombre}
              className={`rounded-3xl p-8 relative ${
                plan.destacado
                  ? "bg-gray-900 text-white ring-2 ring-green-500"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              {/* Badge "Más popular" solo en el plan Pro */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Más popular
                </div>
              )}

              {/* Nombre y descripción */}
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.destacado ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.nombre}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.destacado ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {plan.descripcion}
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className={`text-5xl font-black ${
                    plan.destacado ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.precio}€
                </span>
                <span className={plan.destacado ? "text-gray-400" : "text-gray-500"}>
                  /mes
                </span>
              </div>

              {/* Lista de features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon destacado={plan.destacado} />
                    <span
                      className={`text-sm ${
                        plan.destacado ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón CTA del plan */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold py-4 rounded-xl transition-all ${
                  plan.destacado
                    ? "bg-green-500 hover:bg-green-400 text-white"
                    : "bg-gray-900 hover:bg-gray-700 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bloque de CTA final — demo gratuita */}
        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-black mb-4">
            ¿Prefieres verlo en acción primero?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Agenda una demo presencial de 15 minutos. Instalamos CloserIA con
            los datos de tu agencia y lo pruebas con un lead real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-800 font-bold text-lg px-8 py-4 rounded-xl hover:bg-green-50 transition-all"
            >
              Reservar demo gratis →
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-900/50 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-green-900 transition-all"
            >
              Probar el bot ahora
            </a>
          </div>
          {/* Nota de pie */}
          <p className="text-green-200/70 text-sm mt-6">
            Sin tarjeta de crédito · Sin permanencias · Puesta en marcha en 48h
          </p>
        </div>

        {/* Footer mínimo */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>
            CloserIA es un producto de{" "}
            <strong className="text-gray-600">NexAutoIA</strong> ·{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@nexautoia.com"}`}
              className="hover:text-gray-700 transition-colors"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hola@nexautoia.com"}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
