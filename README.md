# Bytlane Studio — Landing Page

Landing page profesional para Bytlane Studio, construida con Next.js 14+, TypeScript y Tailwind CSS.

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Tecnologías

- **Next.js 14+** — App Router, React Server Components
- **TypeScript** — tipado estricto
- **Tailwind CSS** — utilidades CSS
- **lucide-react** — íconos SVG
- **Google Fonts** — Space Grotesk + Inter (cargadas con `next/font`)

## Estructura de archivos

```
app/
  layout.tsx        ← configuración de fuentes y metadata SEO
  page.tsx          ← página principal (importa componentes)
  globals.css       ← estilos base y clase hero-grid
components/
  Hero.tsx          ← sección hero con CTA principal
  About.tsx         ← quiénes somos
  Services.tsx      ← 3 servicios con iconos y beneficios
  FeaturedProject.tsx ← proyecto destacado con stack
  Process.tsx       ← 4 pasos del proceso
  CTA.tsx           ← llamado a acción final con WhatsApp
tailwind.config.ts  ← fuentes y colores personalizados
```

## Cómo personalizar

### Número de WhatsApp
Busca `506XXXXXXXX` en `components/Hero.tsx` y `components/CTA.tsx` y reemplaza por el número real (sin `+`, sin espacios).

### Colores
Edita `tailwind.config.ts` en la sección `colors.brand`. Las claves son:
- `primary` / `primaryHover` — azul principal
- `text` / `muted` — colores de texto
- `border` — color de bordes
- `bgAlt` — fondo de secciones alternadas

### Textos
Cada componente tiene sus textos hardcodeados como constantes o directamente en JSX. Modifica los archivos en `components/`.

### Fuentes
Las fuentes se cargan en `app/layout.tsx` vía `next/font/google`. Para cambiarlas, reemplaza `Inter` y `Space_Grotesk` por las fuentes deseadas.

### Proyecto destacado
Edita el objeto `project` en `components/FeaturedProject.tsx`. Reemplaza la imagen placeholder con un tag `<Image>` de Next.js apuntando a tu imagen real.

## Nota sobre Google Fonts
Las fuentes se cargan automáticamente en build time con `next/font`. No requieren CDN externo ni imports adicionales en el HTML.
