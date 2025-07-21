# Design System - edissonreinozo.com

Este documento define el sistema de diseño implementado para el sitio web personal/blog de Edisson Reinozo, basado en principios de diseño minimalista y moderno.

## Filosofía de Diseño

### Principios Fundamentales

- **Minimalismo con Propósito**: Cada elemento debe tener una función clara
- **Legibilidad Primero**: El contenido es el protagonista
- **Experiencia Consistente**: Coherencia visual en todas las páginas
- **Accesibilidad**: Diseño inclusivo para todos los usuarios
- **Modo Oscuro Nativo**: Soporte completo para preferencias del sistema

## Tipografía

### Escala Tipográfica

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
```

### Familias Tipográficas

```css
/* Sans-serif: Inter como fuente principal */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* Monospace: Stack de fuentes del sistema */
--font-mono: ui-monospace, 'SFMono-Regular', 'SF Mono', Consolas, 
             'Liberation Mono', 'Menlo', monospace;
```

### Configuración de Texto

- **Line Height**: 1.6 para body, 1.2 para headings
- **Letter Spacing**: -0.02em para headings (600 font-weight)
- **Font Smoothing**: -webkit-font-smoothing: antialiased
- **Max Width**: 65ch para contenido de artículos

## Paleta de Colores

### Sistema de Colores Minimalista

```css
/* Tema Claro */
--background: #ffffff;
--foreground: #111111;
--primary: #0066cc; /* Azul primario */
--primary-foreground: #ffffff;
--secondary: #f5f5f5;
--secondary-foreground: #111111;
--muted: #f9f9f9;
--muted-foreground: #666666;
--border: #e5e5e5;
--ring: #0066cc;

/* Tema Oscuro */
--background: #000000;
--foreground: #ffffff;
--primary: #4d94ff; /* Azul más claro para modo oscuro */
--primary-foreground: #000000;
--card: #0a0a0a;
--secondary: #1a1a1a;
--secondary-foreground: #ffffff;
--muted: #262626;
--muted-foreground: #a3a3a3;
--border: #262626;
```

### Colores de Estado y Utilidad

```css
/* Superficies y variantes */
--surface: var(--background);
--surface-hover: var(--secondary);
--surface-active: var(--muted);

/* Texto */
--text-primary: var(--foreground);
--text-secondary: #666666; /* Claro */ /* #999999 Oscuro */
--text-disabled: #999999; /* Claro */ /* #666666 Oscuro */

/* Estados */
--destructive: #dc2626;
--destructive-foreground: #ffffff;
```

## Layout y Espaciado

### Sistema de Contenedores

```css
/* Contenedor principal con márgenes automáticos */
.content-container: mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;

/* Layout principal */
--container-max: max-w-5xl;
--article-max: 65ch; /* ~650px para lectura óptima */
```

### Escala de Espaciado (8px base)

```css
--space-1: 0.5rem; /* 8px */
--space-2: 1rem; /* 16px */
--space-3: 1.5rem; /* 24px */
--space-4: 2rem; /* 32px */
--space-5: 2.5rem; /* 40px */
--space-6: 3rem; /* 48px */
--space-8: 4rem; /* 64px */
--space-10: 5rem; /* 80px */
```

### Espaciado de Secciones

- **Padding de secciones**: py-12 lg:py-16
- **Espaciado entre elementos**: gap-6 o gap-8
- **Márgenes de contenido**: my-8 o my-12

## Componentes

### Header/Navigation

- **Posicionamiento**: Fixed con backdrop blur en scroll
- **Altura**: 16 (64px) usando escala de Tailwind
- **Transiciones**: Suaves para efectos de scroll
- **Navegación mobile**: Menú hamburguesa con theme toggle
- **Links**: Animación de underline en hover

```css
/* Efecto de scroll */
--header-bg: rgba(255, 255, 255, 0.8); /* Con blur */
--header-border: rgba(0, 0, 0, 0.1);
```

### Footer

- **Layout**: Simple con enlaces sociales (GitHub, Twitter/X)
- **Iconos**: SVG inline
- **Copyright**: Con atribución a SvelteKit

### Cards de Blog

**BlogCard** (Estilo personalizado):
```css
/* Variables CSS personalizadas */
--card-bg: var(--background);
--card-border: var(--border);
--card-hover-border: var(--primary);
/* Efecto hover lift con sombra */
```

**PostCard** (Diseño simplificado):
- Separación con border-bottom
- Padding vertical consistente

### Botones (shadcn-svelte)

Variantes disponibles:
- **default**: Fondo primary, texto white
- **destructive**: Fondo rojo para acciones peligrosas
- **outline**: Border sin fondo
- **secondary**: Fondo secondary sutil
- **ghost**: Sin bordes, hover sutil
- **link**: Estilo de enlace

Tamaños: default, sm, lg, icon

```css
/* Ejemplo de uso */
<Button variant="default" size="default">
  Click me
</Button>
```

### Links y Navegación

- **Color base**: var(--primary)
- **Hover**: Transición de color (150ms)
- **Nav links**: Underline animado desde el centro
- **Focus**: Ring de 2px con color primary

## Animaciones y Transiciones

### Variables de Transición

```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
```

### Efectos de Hover

**Links**:
- Cambio de color con transición suave
- Nav links: underline animado desde el centro

**Cards**:
- `.hover-lift`: translateY(-2px) con shadow
- Cambio de color de borde
- Transición de elevación

**Botones**:
- Cambio de opacidad/color según variante
- Scale sutil en algunos casos

### Theme Switching

- Transición de colores: 250ms
- Rotación de icono en toggle
- Prevención de flash con mode-watcher

### Estados de Focus

```css
/* Focus visible personalizado */
--ring: var(--primary);
--ring-offset: 2px;
outline: 2px solid var(--ring);
outline-offset: var(--ring-offset);
```

## Responsive Design

### Breakpoints (Tailwind v4)

```css
/* Valores por defecto de Tailwind */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Wide desktop */
2xl: 1536px /* Ultra wide */
```

### Estrategia Mobile-First

1. Diseño base optimizado para mobile
2. Mejoras progresivas con breakpoints
3. Contenedores responsivos con padding adaptativo

### Patrones Responsivos

- **Grid del blog**: 1 columna mobile, 4 columnas desktop (1 sidebar + 3 contenido)
- **Navegación**: Menú hamburguesa en mobile, links completos en desktop
- **Espaciado**: Escalado con prefijos sm:, lg:, etc.

## Modo Oscuro

### Implementación Técnica

- **Toggle**: Botón en header con iconos Sol/Luna
- **Detección**: Preferencia del sistema por defecto
- **Persistencia**: localStorage via mode-watcher
- **Transición**: 250ms en cambios de color

### Sistema de Colores Dual

```css
/* Variant personalizado para Tailwind v4 */
@custom-variant dark (&:is(.dark *))

/* Uso en clases */
.dark:bg-black
.dark:text-white
```

### Consideraciones de Diseño

- Contraste WCAG AAA mantenido
- Inversión completa black/white
- Ajustes sutiles en colores secundarios
- Sin filtros en imágenes (diseño puro)

## Elementos Especiales

### Código y Snippets

- Syntax highlighting integrado
- Fondo diferenciado con var(--muted)
- Font monospace del sistema
- Scrollbar personalizado para bloques largos
- Bordes sutiles para delimitación

### Blockquotes (Prose)

- Borde lateral en color primary
- Padding izquierdo aumentado
- Estilo italic por defecto
- Integrado con @tailwindcss/typography

### Tablas

- Diseño minimalista sin bordes excesivos
- Header con font-weight: 600
- Responsive con overflow-x: auto
- Alineación consistente

### Listas (Prose)

- Markers personalizados en color primary
- Espaciado optimizado para legibilidad
- Soporte para listas anidadas

## Patrones de Interacción

### Navegación por Teclado

- Tab order lógico y predecible
- Focus visible con ring personalizado
- Skip links disponibles (sr-only)
- Navegación accesible en menú mobile

### Estados de Loading

- Transiciones suaves entre estados
- Skeleton screens para contenido dinámico
- Indicadores de carga mínimos
- Feedback inmediato en interacciones

### Formularios

- Labels semánticos y accesibles
- Estados de error claros
- Validación con mensajes útiles
- Focus management apropiado

## Utilidades CSS

### Clases Especiales

```css
/* Efectos visuales */
.hover-lift {
  transition: transform 250ms ease, box-shadow 250ms ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Gradientes de texto */
.text-gradient {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Scrollbar Personalizado

```css
/* Scrollbar con tema */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--muted-foreground);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--foreground);
}
```

## Performance y Optimización

### Estrategias Implementadas

- **Fuentes**: Inter cargada desde Google Fonts con display=swap
- **CSS**: Tailwind v4 con Vite para optimización automática
- **Imágenes**: Lazy loading nativo del navegador
- **Componentes**: Code splitting automático con SvelteKit

### Configuración de Tailwind v4

```css
/* En app.css */
@import 'tailwindcss/theme' layer(theme);
@import 'tailwindcss/utilities' layer(utilities);

/* Variant personalizado */
@custom-variant dark (&:is(.dark *));
```

## Resumen de Implementación Actual

### Diferencias Clave vs Documentación Original

1. **Color Principal**: Azul (#0066cc) en lugar de purple (#663399)
2. **Fuente**: Inter (Google Fonts) como principal
3. **Espaciado**: Sistema base-8 simplificado
4. **Componentes**: Integración con shadcn-svelte
5. **Config**: Tailwind v4 con configuración CSS

### Stack Tecnológico

- **Framework**: SvelteKit v2.22.0 + Svelte 5
- **Estilos**: Tailwind CSS v4 + CSS Variables
- **Componentes**: shadcn-svelte (parcial)
- **Markdown**: MDsveX configurado
- **Theme**: mode-watcher para dark mode

### Estado Actual

✅ Sistema de diseño base implementado
✅ Modo oscuro funcional
✅ Componentes principales (Header, Footer, Cards)
✅ Tipografía y colores definidos
✅ Blog con artículos funcionando
⏳ Componentes adicionales por implementar
