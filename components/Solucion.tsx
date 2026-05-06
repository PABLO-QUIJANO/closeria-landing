// Los 3 pasos del flujo principal de CloserIA
const PASOS = [
  {
    numero: "01",
    titulo: "El lead manda un WhatsApp",
    descripcion:
      "Da igual si son las 3 de la mañana o el domingo. CloserIA responde en menos de 30 segundos con el tono de tu agencia.",
  },
  {
    numero: "02",
    titulo: "El bot cualifica y presenta inmuebles",
    descripcion:
      "Pregunta presupuesto, zona y plazo. Consulta tu catálogo real y propone los inmuebles más adecuados. Nunca inventa datos.",
  },
  {
    numero: "03",
    titulo: "Agenda la visita en tu calendario",
    descripcion:
      "Si el lead quiere visitar, el bot propone fecha, crea el evento en Google Calendar y envía confirmación por WhatsApp.",
  },
];

// Lista completa de funcionalidades incluidas
const FEATURES = [
  "Respuesta en menos de 30 segundos, 24/7",
  "Usa solo los datos reales de tu catálogo",
  "Historial completo de cada lead en Google Sheets",
  "Recordatorio automático 24h antes de la visita",
  "Adaptado a tu agencia: nombre, zona y tono",
  "Cumplimiento RGPD incluido en el primer mensaje",
  "Sin aplicaciones extra — funciona en WhatsApp",
  "Puesta en marcha en menos de 48 horas",
];

// Icono de check reutilizable
function CheckIcon() {
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

export default function Solucion() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
            Cómo funciona
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            De WhatsApp a visita agendada<br />
            en menos de 2 minutos
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            CloserIA actúa como un agente más de tu equipo, disponible las 24
            horas sin coste adicional por conversación.
          </p>
        </div>

        {/* Los 3 pasos */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {PASOS.map((paso) => (
            <div key={paso.numero}>
              {/* Número decorativo grande */}
              <div className="text-6xl font-black text-green-100 mb-4 leading-none">
                {paso.numero}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {paso.titulo}
              </h3>
              <p className="text-gray-500 leading-relaxed">{paso.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Caja de features — todo incluido */}
        <div className="bg-gray-50 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Todo lo que incluye CloserIA
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
