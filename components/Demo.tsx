// Conversación de demostración — refleja un caso real de cualificación y agendado
// Los mensajes simulan una agencia llamada "Inmobiliaria Sol" para el mock visual
const MENSAJES: { de: "lead" | "bot"; texto: string; hora: string }[] = [
  {
    de: "lead",
    texto: "Hola, vi un piso en vuestra web en Chamberí de 3 habitaciones. ¿Sigue disponible?",
    hora: "21:47",
  },
  {
    de: "bot",
    texto: "¡Hola! Soy el asistente de Inmobiliaria Sol 🏠 Al continuar, aceptas el tratamiento de tus datos para gestionar tu consulta según nuestra política de privacidad. El piso de Chamberí sigue disponible. Es un 3 hab. de 92m² en Calle Fuencarral 145, a 285.000€. ¿Quieres que te cuente más?",
    hora: "21:47",
  },
  {
    de: "lead",
    texto: "Sí! ¿Tiene garaje y cuánto son los gastos de comunidad?",
    hora: "21:48",
  },
  {
    de: "bot",
    texto: "Incluye plaza de garaje en el sótano y los gastos de comunidad son 85€/mes. ¿Cuál es tu presupuesto aproximado? Así puedo mostrarte también otras opciones si te interesa comparar.",
    hora: "21:48",
  },
  {
    de: "lead",
    texto: "Sobre 300k. Y busco para comprar, para vivir yo.",
    hora: "21:50",
  },
  {
    de: "bot",
    texto: "Perfecto, entonces este piso te encaja muy bien. ¿Te gustaría visitarlo esta semana? Tengo disponibilidad el jueves a las 11h o el viernes a las 17h 📅",
    hora: "21:50",
  },
  {
    de: "lead",
    texto: "El jueves a las 11 perfecto!",
    hora: "21:51",
  },
  {
    de: "bot",
    texto: "¡Anotado! He reservado el jueves 8 de mayo a las 11:00 en Calle Fuencarral 145. Te mandaremos confirmación y el día antes te avisamos. ¿Me dices tu nombre?",
    hora: "21:51",
  },
  {
    de: "lead",
    texto: "María, gracias!",
    hora: "21:52",
  },
  {
    de: "bot",
    texto: "Perfecto María, ¡hasta el jueves! Si tienes cualquier duda, aquí estamos 👋",
    hora: "21:52",
  },
];

// Métricas que se muestran junto al chat
const METRICAS = [
  { etiqueta: "Tiempo de primera respuesta", valor: "< 30 segundos" },
  { etiqueta: "Tiempo total hasta agendar", valor: "5 minutos" },
  { etiqueta: "Intervención humana", valor: "Ninguna" },
  { etiqueta: "Hora de la conversación", valor: "21:47 — fuera de oficina" },
];

export default function Demo() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna izquierda — texto explicativo y métricas */}
          <div>
            <div className="inline-block bg-green-900/50 border border-green-500/30 text-green-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
              Conversación real
            </div>
            <h2 className="text-4xl font-black text-white mb-6">
              De extraño a visita<br />agendada en 5 minutos
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Esta conversación ocurrió a las 21:47h, fuera de horario de
              oficina. Sin ningún agente humano. El lead fue cualificado,
              informado y tuvo su visita agendada antes de las 22:00.
            </p>

            {/* Métricas de la conversación */}
            <div className="space-y-0 divide-y divide-gray-700 border border-gray-700 rounded-2xl overflow-hidden">
              {METRICAS.map((m) => (
                <div
                  key={m.etiqueta}
                  className="flex justify-between items-center px-5 py-4"
                >
                  <span className="text-gray-400 text-sm">{m.etiqueta}</span>
                  <span className="text-green-400 font-semibold text-sm">{m.valor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — mock de WhatsApp */}
          <div className="bg-[#0b141a] rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto w-full">

            {/* Cabecera del chat (estilo WhatsApp) */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                IS
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Inmobiliaria Sol</div>
                <div className="text-green-400 text-xs">en línea</div>
              </div>
            </div>

            {/* Área de mensajes */}
            <div className="p-4 space-y-2 max-h-[420px] overflow-y-auto">
              {MENSAJES.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.de === "lead" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                      msg.de === "lead"
                        ? "bg-[#005c4b] text-white"
                        : "bg-[#202c33] text-gray-100"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.texto}</p>
                    <p
                      className={`text-xs mt-1 text-right ${
                        msg.de === "lead" ? "text-green-200/70" : "text-gray-500"
                      }`}
                    >
                      {msg.hora}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pie del chat — campo de texto desactivado (es un mock) */}
            <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-gray-500 text-sm">
                Escribe un mensaje...
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
