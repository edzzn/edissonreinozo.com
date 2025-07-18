# Design System - edissonreinozo.com

Este documento define el sistema de diseño para el sitio web personal/blog de Edisson Reinozo, inspirado en las mejores prácticas observadas en sitios de referencia.

## Filosofía de Diseño

### Principios Fundamentales
- **Minimalismo con Propósito**: Cada elemento debe tener una función clara
- **Legibilidad Primero**: El contenido es el protagonista
- **Experiencia Consistente**: Coherencia visual en todas las páginas
- **Accesibilidad**: Diseño inclusivo para todos los usuarios

## Tipografía

### Escala Tipográfica (Major Third - 1.25)
```css
--font-size-xs: 0.64rem;    /* 10.24px */
--font-size-sm: 0.8rem;     /* 12.8px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.25rem;    /* 20px */
--font-size-xl: 1.563rem;   /* 25px */
--font-size-2xl: 1.953rem;  /* 31.25px */
--font-size-3xl: 2.441rem;  /* 39px */
--font-size-4xl: 3.052rem;  /* 48.8px */
```

### Familias Tipográficas
```css
--font-sans: system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
```

### Configuración de Texto
- **Line Height**: 1.6 para body, 1.2 para headings
- **Letter Spacing**: -0.02em para headings grandes
- **Max Width**: 65ch para contenido de artículos

## Paleta de Colores

### Colores Principales
```css
/* Tema Claro */
--color-primary: #663399;        /* rebeccapurple */
--color-primary-dark: #4a247c;
--color-primary-light: #8b5fc7;

--color-background: #ffffff;
--color-surface: #f9fafb;
--color-text: #111827;
--color-text-muted: #6b7280;

/* Tema Oscuro */
--color-background-dark: #0a0a0a;
--color-surface-dark: #1a1a1a;
--color-text-dark: #e5e7eb;
--color-text-muted-dark: #9ca3af;
```

### Colores de Acento
```css
--color-accent: #f59e0b;         /* amber para CTAs */
--color-success: #10b981;
--color-error: #ef4444;
--color-info: #3b82f6;
```

## Layout y Espaciado

### Sistema de Grid
```css
--container-max: 1280px;
--content-max: 65rem;           /* ~1040px */
--article-max: 65ch;            /* ~650px */
```

### Escala de Espaciado (8px base)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## Componentes

### Header/Navigation
- **Estilo**: Fixed o sticky, fondo con blur
- **Altura**: 64px desktop, 56px mobile
- **Navegación**: 3-6 links máximo
- **Logo**: Texto simple o marca mínima

### Hero Section
- **Altura**: 50-70vh en homepage
- **Contenido**: Título + subtítulo + CTA opcional
- **Animación**: Fade-in sutil al cargar

### Cards de Blog
```
┌─────────────────────────────┐
│ [Categoría] · 5 min lectura │
│                             │
│ Título del Artículo         │
│                             │
│ Breve descripción del       │
│ contenido del artículo...   │
│                             │
│ 15 Nov 2024                 │
└─────────────────────────────┘
```

### Botones
- **Primary**: Background rebeccapurple, hover más oscuro
- **Secondary**: Border 1px, background transparente
- **Padding**: 12px 24px
- **Border Radius**: 6px
- **Transición**: all 200ms ease

### Links
- **Color**: rebeccapurple
- **Hover**: underline con offset
- **Transición**: 150ms ease

## Animaciones y Transiciones

### Microinteracciones
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

### Efectos de Hover
- Links: underline animado
- Cards: sutil elevación con shadow
- Botones: cambio de color/opacidad

### Animaciones de Entrada
- Fade-in para contenido principal
- Slide-up sutil para cards
- Duración máxima: 500ms

## Responsive Design

### Breakpoints
```css
--screen-sm: 640px;   /* Mobile landscape */
--screen-md: 768px;   /* Tablet */
--screen-lg: 1024px;  /* Desktop */
--screen-xl: 1280px;  /* Wide desktop */
```

### Estrategia Mobile-First
1. Diseño base para mobile
2. Mejoras progresivas para tablets
3. Optimizaciones para desktop

## Modo Oscuro

### Implementación
- Toggle accesible en header
- Preferencia del sistema por defecto
- Transición suave entre temas
- Persistencia en localStorage

### Consideraciones
- Contraste WCAG AAA
- Colores ajustados para legibilidad
- Imágenes con filtros opcionales

## Elementos Especiales

### Código y Snippets
- Syntax highlighting con tema personalizado
- Fondo ligeramente diferenciado
- Copy button en hover
- Scrollbar personalizado

### Blockquotes
```
│ "Cita destacada con borde lateral
│ en color primario y fondo sutil"
```

### Tablas
- Bordes mínimos
- Zebra striping opcional
- Responsive con scroll horizontal

## Patrones de Interacción

### Navegación por Teclado
- Tab order lógico
- Focus visible personalizado
- Skip links para accesibilidad

### Estados de Loading
- Skeleton screens para contenido
- Spinners mínimos para acciones
- Mensajes de estado claros

### Formularios
- Labels claros y accesibles
- Validación en tiempo real sutil
- Mensajes de error descriptivos

## Performance

### Optimizaciones
- Lazy loading para imágenes
- Font subsetting
- CSS crítico inline
- Prefetch para navegación

### Métricas Objetivo
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Inspiración y Referencias

### Características Clave Observadas
1. **Minimalismo Elegante**: Espacios amplios, jerarquía clara
2. **Tipografía Como Arte**: Tamaños generosos, contraste fuerte
3. **Navegación Simple**: Pocos enlaces, acceso directo
4. **Dark Mode**: Implementación cuidadosa y accesible
5. **Microinteracciones**: Sutiles pero presentes
6. **Contenido Primero**: Diseño que no distrae

### Elementos a Implementar
- [ ] Theme toggle elegante
- [ ] Hero minimalista con animación
- [ ] Cards de blog con hover states
- [ ] Footer simple con links esenciales
- [ ] Newsletter signup sutil
- [ ] Indicador de progreso de lectura
- [ ] Tabla de contenidos sticky
- [ ] Share buttons discretos