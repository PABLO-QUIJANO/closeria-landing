import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CloserIA — Tu Agente Inmobiliario Automatizado 24/7",
  description:
    "Responde leads de WhatsApp en 30 segundos, cualifica automáticamente y agenda visitas en tu calendario. Para agencias inmobiliarias en España.",
  keywords: [
    "agencia inmobiliaria automatización",
    "WhatsApp bot inmobiliaria",
    "CRM inmobiliario automatizado",
    "inteligencia artificial inmobiliaria",
    "CloserIA",
  ],
  openGraph: {
    title: "CloserIA — Tu Agente Inmobiliario Automatizado 24/7",
    description:
      "Responde leads en 30 segundos y agenda visitas automáticamente. Sin intervención humana.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
