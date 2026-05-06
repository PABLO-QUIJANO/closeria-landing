// Cada tarjeta describe un dolor real del propietario de una agencia inmobiliaria
const PROBLEMAS = [
  {
    emoji: "😤",
    titulo: "El 67% de los leads se pierden fuera de horario",
    descripcion:
      "Un cliente manda un WhatsApp a las 10 de la noche preguntando por un piso. Al día siguiente ya ha visitado a tu competencia.",
  },
  {
    emoji: "🔄",
    titulo: "Tus agentes repiten lo mismo 20 veces al día",
    descripcion:
      "Precio, metros, zona, disponibilidad... cada agente responde las mismas preguntas básicas que podría resolver un sistema automático.",
  },
  {
    emoji: "📅",
    titulo: "Leads cualificados que nunca llegan a visitar",
    descripcion:
      "Captar el interés no es suficiente. El 80% de los leads no agendan visita por falta de seguimiento rápido.",
  },
];

export default function Problema() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Cada noche pierdes dinero
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Mientras tu oficina está cerrada, los clientes siguen buscando piso.
            Y alguien les está respondiendo — solo que no eres tú.
          </p>
        </div>

        {/* Tarjetas de problemas */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROBLEMAS.map((p) => (
            <div
              key={p.titulo}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.titulo}</h3>
              <p className="text-gray-500 leading-relaxed">{p.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Dato de impacto al final */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-black text-gray-900">
            Una agencia media pierde{" "}
            <span className="text-green-600">al menos 3 ventas al mes</span>{" "}
            por respuesta tardía.
          </p>
          <p className="text-gray-500 mt-2">
            3 ventas × 12 meses × 10.000€ de comisión mínima ={" "}
            <strong className="text-gray-700">360.000€ al año.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
