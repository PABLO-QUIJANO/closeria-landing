# Landing CloserIA — Deploy en Netlify

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3
- Sin librerías de terceros adicionales

## Variables de entorno

Crea un archivo `.env.local` en esta carpeta (`landing/`) con:

```
NEXT_PUBLIC_DEMO_PHONE=+34600000000
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/tu-usuario/demo-closeria
NEXT_PUBLIC_CONTACT_EMAIL=hola@nexautoia.com
```

## Desarrollo local

```bash
cd landing
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Deploy en Netlify

### Opción A — Desde la UI de Netlify (recomendado)

1. Ve a [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Conecta tu repositorio de GitHub/GitLab
3. Configuración de build:
   - **Base directory:** `closeria-mvp/landing`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
4. En **Environment variables**, añade las 3 variables de arriba
5. Haz clic en **Deploy site**

### Opción B — Netlify CLI

```bash
npm install -g netlify-cli
cd landing
netlify init
netlify env:set NEXT_PUBLIC_DEMO_PHONE "+34600000000"
netlify env:set NEXT_PUBLIC_BOOKING_URL "https://calendly.com/..."
netlify env:set NEXT_PUBLIC_CONTACT_EMAIL "hola@nexautoia.com"
netlify deploy --prod
```

## Personalización

Para adaptar la landing a un cliente concreto, edita solo estos archivos:

| Qué cambiar | Dónde |
|-------------|-------|
| Nombre del producto ("CloserIA") | `app/layout.tsx` → metadata |
| Número de demo | Variable `NEXT_PUBLIC_DEMO_PHONE` |
| URL de reserva de demo | Variable `NEXT_PUBLIC_BOOKING_URL` |
| Precios | `components/CTAFinal.tsx` → constante `PLANES` |
| Conversación de demostración | `components/Demo.tsx` → constante `MENSAJES` |
| Métricas del Hero | `components/Hero.tsx` → bloque de stats |
