// Variables personalizables por cliente — cambiar solo estos dos valores
const DEMO_PHONE = process.env.NEXT_PUBLIC_DEMO_PHONE ?? "+34600000000";
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "#";

// Icono de WhatsApp inline para evitar dependencias externas
function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero() {
  // Formateamos el número para el enlace wa.me (solo dígitos)
  const waMessage = encodeURIComponent("Hola, me gustaría probar la demo.");
  const whatsappHref = `https://wa.me/${DEMO_PHONE.replace(/\D/g, "")}?text=${waMessage}`;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Fondo decorativo — círculos de opacidad baja */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #22c55e, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #16a34a, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">

          {/* Badge de estado activo */}
          <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-sm font-medium">Sistema activo 24/7</span>
          </div>

          {/* Titular principal */}
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            No pierdas otro<br />
            <span className="text-green-400">lead</span> fuera<br />
            de horario
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            CloserIA responde por WhatsApp en menos de{" "}
            <strong className="text-white">30 segundos</strong>, cualifica al
            lead y agenda la visita en tu calendario — sin que muevas un dedo.
          </p>

          {/* Botones de llamada a la acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/50"
            >
              <WhatsAppIcon />
              Probar demo ahora
            </a>
          </div>

          {/* Métricas clave — confianza rápida */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {[
              { valor: "30s", etiqueta: "Tiempo de respuesta" },
              { valor: "24/7", etiqueta: "Disponibilidad" },
              { valor: "+60%", etiqueta: "Más leads contactados" },
            ].map((stat) => (
              <div key={stat.etiqueta}>
                <div className="text-3xl font-black text-green-400">{stat.valor}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.etiqueta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
