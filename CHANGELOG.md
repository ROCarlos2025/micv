# CHANGELOG — Roberto Pineda Portfolio v2.0.0

## Resumen / Summary

Rediseño completo del portafolio CV de un diseño básico Ionic a un portafolio premium inspirado en Apple/Samsung con soporte bilingüe, animaciones profesionales y diseño responsivo.

Complete redesign from a basic Ionic CV to a premium Apple/Samsung-inspired portfolio with bilingual support, professional animations, and responsive design.

---

## 🚀 Stack Tecnológico / Technology Stack

| Tecnología     | Versión Anterior | Versión Actual | Propósito                                                |
| -------------- | ---------------- | -------------- | -------------------------------------------------------- |
| **Angular**    | 14.x             | **19.x**       | Framework principal con mejoras de rendimiento y signals |
| **Ionic**      | 6.x              | **8.x**        | Componentes UI nativos multiplataforma                   |
| **Capacitor**  | 4.x              | **7.3**        | Build nativo para Android/iOS con APIs modernas          |
| **RxJS**       | 7.5              | **7.8**        | Programación reactiva y manejo de streams                |
| **Zone.js**    | 0.11             | **0.15**       | Detección de cambios Angular                             |
| **TypeScript** | 4.7              | **5.6**        | Tipado estático con mejoras de inferencia                |

---

## 🎨 Diseño / Design System

### Sistema de Variables CSS

- **Colores**: Paleta completa con modo claro/oscuro automático (`--color-*`)
- **Espaciado**: Sistema consistente de 4px base (`--space-*`)
- **Bordes**: Radio de bordes escalable (`--radius-*`)
- **Sombras**: Sistema de elevación multi-nivel (`--shadow-*`)
- **Tipografía**: Inter (body) + Space Grotesk (display) via Google Fonts
- **Transiciones**: Curvas de animación predefinidas (`--transition-*`)

### Componentes Visuales Nuevos

- **Floating Navigation**: Barra de navegación flotante con efecto glassmorphism que aparece al hacer scroll
- **Hero Section**: Sección hero con foto de perfil, estadísticas animadas y CTAs
- **Orbs Animados**: Esferas de fondo con animaciones CSS para efecto visual premium
- **Timeline Cards**: Tarjetas de experiencia con línea de tiempo vertical y marcadores
- **Skill Bars**: Barras de progreso animadas con porcentajes
- **Education Cards**: Tarjetas con efecto hover y iconografía
- **Contact Grid**: Grid de contacto con iconos y enlaces directos

---

## ✨ Animaciones y Transiciones

### CSS Keyframes Implementados

| Animación    | Uso                                  |
| ------------ | ------------------------------------ |
| `fadeInUp`   | Entrada de secciones al hacer scroll |
| `morphBlob`  | Animación de orbs del hero           |
| `rotateGlow` | Efecto de brillo giratorio           |
| `shimmer`    | Efecto de shimmer en elementos       |
| `float`      | Elementos flotantes suaves           |
| `slideDown`  | Entrada de navegación                |
| `pulse`      | Indicador de scroll                  |

### IntersectionObserver

- Detección automática de elementos visibles en viewport
- Clase `.animate-on-scroll` para activar animaciones al entrar en vista
- Stagger animations para elementos en lista (cards, skills)

---

## 🌐 Internacionalización / i18n

### Sistema Bilingüe (Español/Inglés)

- **Idioma por defecto**: Español (`'es'`)
- **Detección automática**: Cambia a inglés si `navigator.language` empieza con `'en'`
- **Campos duplicados**: Cada experiencia tiene `title`/`titleEn`, `description`/`descriptionEn`, `period`/`periodEn`
- **Secciones traducidas**: Hero, About, Experience, Skills, Education, Contact, Footer
- **Botón de idioma**: Toggle manual ES/EN en la interfaz

---

## 📱 Responsive Design

### Breakpoints

- **< 480px**: Mobile portrait — CTAs full-width, foto reducida, timeline simplificado
- **481px - 768px**: Mobile landscape / tablet — Grid 2 columnas
- **769px - 1024px**: Tablet horizontal — Layout optimizado
- **> 1024px**: Desktop — Experiencia completa

### Soporte Nativo (Capacitor)

- Safe areas para iOS notch (`env(safe-area-inset-*)`)
- Ajustes para barra de estado en apps nativas (`.plt-capacitor`)
- Landscape orientation handling para dispositivos móviles
- Touch targets optimizados (mínimo 44px)

---

## 📂 Estructura de Archivos Modificados

```
src/
├── index.html              → Google Fonts (Inter + Space Grotesk), meta tags
├── global.scss             → Animaciones globales, utilities, scrollbar styling
├── theme/
│   └── variables.scss      → Sistema completo de design tokens (light/dark)
├── app/
│   ├── home/
│   │   ├── home.page.ts    → Lógica bilingüe, datos, IntersectionObserver
│   │   ├── home.page.html  → Template premium con todas las secciones
│   │   └── home.page.scss  → ~60KB de estilos premium + responsive
│   ├── data/
│   │   └── experiencias.data.ts → Datos de experiencias (ES) con logos
│   └── pages/
│       └── experiencia-detalle/ → Página de detalle con animaciones
├── assets/
│   └── empresas/
│       └── telcel.svg      → Logo Telcel (proyecto actual)
```

---

## 🔧 Configuración

### angular.json

- `baseHref`: `/micv/` para deploy en subdirectorio
- `outputPath`: `www` para compatibilidad con Capacitor
- `budgets`: Component style aumentado a 100kb para acomodar estilos premium

### package.json

- Nombre: `roberto-pineda-portfolio`
- Versión: `2.0.0`
- Dependencias removidas: `html2canvas`, `jspdf`, `angularx-qrcode` (no necesarias)

### capacitor.config.ts

- `appId`: `com.micv`
- `webDir`: `www`

---

## 📋 Experiencias Actualizadas

1. **Minsait - Telcel** (08/2025 — Presente) — Lead Front-End Developer
2. **Santander / Loyalty Platform** (09/2024 — 07/2025) — Lead Front-End Developer
3. **CI-Banco** (12/2023 — 08/2024) — Front-End Developer
4. **AXA** (03/2023 — 12/2023) — Front-End Developer
5. **Santander Global Facilities** (10/2021 — 08/2022) — MEX Front End Specialist
6. **GFT México / Santander Móvil** (01/2020 — 10/2021) — Senior Front-End Developer

---

## 🛠 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start
# → http://localhost:4200/micv

# Build de producción
npm run build

# Sincronizar con Android
npx cap sync android

# Abrir proyecto Android
npx cap open android
```

---

## 📝 Notas

- Las imágenes de logos de empresas deben estar en `src/assets/empresas/`
- La foto de perfil está en `src/assets/roberto.jpg`
- El CV descargable está en `src/assets/CV_2025_English.pdf`
- Para cambiar el idioma por defecto, modificar `lang: 'en' | 'es' = 'es'` en `home.page.ts`
