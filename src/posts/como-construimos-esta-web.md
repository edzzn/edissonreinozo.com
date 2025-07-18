---
title: Cómo construimos esta web con Claude y SvelteKit
date: 2025-01-18
description: La historia detrás de la migración de Gatsby a SvelteKit y cómo Claude Code transformó completamente el diseño en una sesión
tags: [sveltekit, claude, desarrollo, meta]
---

## De Gatsby a SvelteKit en una tarde

Lo que empezó como una simple migración de Gatsby a SvelteKit terminó siendo una transformación completa del sitio. Y todo gracias a una conversación con Claude Code.

Pero aquí está el insight clave: **ya no es prompt engineering, es context engineering**.

## El punto de partida

Tenía un blog en Gatsby que hablaba de React, Flutter y AWS. Temas que ya no me apasionaban tanto. Mi interés había evolucionado hacia los LLMs, SvelteKit y el emprendimiento SaaS. Era momento de un cambio.

### Context Engineering: El nuevo paradigma

El primer paso fue obtener un contexto completo del proyecto anterior. No se trataba de escribir mejores prompts, sino de darle a Claude toda la información necesaria para entender profundamente el sistema.

Le pedí que:

1. Explorara toda la estructura del proyecto Gatsby
2. Entendiera cómo funcionaba el blog
3. Documentara sus hallazgos
4. Generara un plan de migración

Claude analizó el código, entendió la arquitectura y creó un documento detallado. Este contexto rico y completo fue la base para todo lo que vino después. Sin él, habría sido imposible lograr una migración tan fluida.

### Los pasos de la migración

Con el contexto completo del proyecto anterior, seguimos estos pasos:

1. **`sv create`** - Creamos un proyecto SvelteKit nuevo desde cero
2. **Esqueleto basado en el contexto** - Usando el conocimiento del proyecto Gatsby, creamos la estructura base
3. **Theme básico + Dark mode** - Establecimos un sistema de temas desde el inicio con toggle funcional
4. **Features del blog** - Agregamos tags, filtros, búsqueda y todas las funcionalidades
5. **Perfeccionar el diseño** - Iteramos sobre la UI hasta lograr el minimalismo deseado

### Stack técnico resultante

- SvelteKit v2 con Svelte 5 (usando las nuevas runas)
- MDsveX para procesar Markdown
- Tailwind CSS v4
- TypeScript en modo estricto

## La transformación con Claude

Lo que hace especial a esta historia es cómo cada paso fue una conversación. No hubo documentación que consultar, ni tutoriales que seguir. Solo contexto y diálogo.

### Aplicando mejoras de UI

Después de navegar por el sitio, Claude hizo una crítica constructiva del diseño y sugirió mejoras. Con un simple "apply all", implementó:

- **Paleta minimalista**: Modo claro con blanco puro y modo oscuro con negro verdadero
- **Tipografía Inter**: Para mejor legibilidad
- **Sistema de espaciado 8px**: Consistencia visual en todo el sitio
- **Footer simplificado**: Menos altura, iconos SVG para redes sociales
- **Micro-interacciones**: Transiciones suaves, efectos hover, blur en el header al scrollear

### Feedback loops con Playwright

Un aspecto revolucionario fue cómo Claude puede validar su propio trabajo. Con Playwright integrado, Claude puede:

- **Navegar por el sitio** como lo haría un usuario real
- **Verificar que los enlaces funcionan** antes de reportar que terminó
- **Tomar screenshots** para confirmar que el diseño se ve correcto
- **Detectar errores 404** y crear las páginas faltantes automáticamente

Este ciclo de feedback instantáneo elimina el típico ping-pong de "arréglalo" → "¿así?" → "no, así". Claude puede iterar solo hasta que todo funcione perfectamente.

## El poder del proceso iterativo

La clave fue seguir un proceso estructurado pero flexible:

1. **Base sólida primero**: Empezar con `sv create` y un esqueleto funcional
2. **Funcionalidad antes que forma**: Theme toggle y features básicas antes de perfeccionar
3. **Iteración constante**: Cada paso construye sobre el anterior
4. **Contexto como guía**: El conocimiento del proyecto anterior informó cada decisión

No tuve que:

- Escribir CSS desde cero
- Buscar en documentación
- Debuggear errores de compilación
- Rehacer trabajo por falta de planificación

El contexto inicial y el proceso estructurado hicieron que todo fluyera naturalmente.

## Lecciones aprendidas

### 1. Context Engineering > Prompt Engineering

La calidad del resultado depende directamente de la calidad del contexto. Un buen contexto inicial del proyecto Gatsby fue más valioso que cualquier prompt elaborado.

### 2. El archivo CLAUDE.md como memoria persistente

El archivo `CLAUDE.md` actúa como la memoria del proyecto:

- Arquitectura y decisiones técnicas
- Convenciones de código
- Objetivos y restricciones
- Comandos importantes

Este archivo es el puente entre sesiones, permitiendo que cualquier instancia de Claude entienda inmediatamente el proyecto.

### 3. Feedback loops automáticos

Con Playwright, Claude no solo escribe código - lo valida. Puede navegar, hacer clic, verificar que todo funcione. Es como tener QA integrado en el proceso de desarrollo.

### 4. Iteración rápida

La combinación de contexto rico + feedback automático permite iteraciones rapidísimas. Los cambios se validan al instante.

### 5. Diseño emergente

En lugar de planificar cada detalle, dejé que el diseño emergiera de la conversación. El resultado fue más orgánico y coherente.

## Stack técnico final

- **Framework**: SvelteKit con Svelte 5
- **Estilos**: Tailwind CSS v4 + CSS personalizado
- **Contenido**: MDsveX para Markdown
- **Fuentes**: Inter de Google Fonts
- **Deploy**: Listo para Vercel/Cloudflare

## El código más importante

El cambio más significativo no fue técnico, sino conceptual. Este fragmento del nuevo CSS captura la esencia:

```css
/* Light mode - Minimalist monochrome with blue accent */
--background: #ffffff;
--foreground: #111111;
--primary: #0066cc;

/* Dark mode - True black with improved contrast */
.dark {
	--background: #000000;
	--foreground: #ffffff;
	--primary: #4d94ff;
}
```

Simplicidad y contraste. Eso resume todo el proyecto.

## El futuro del desarrollo: Context-First

Este proyecto demostró que el futuro del desarrollo con IA no está en escribir mejores prompts, sino en construir mejores contextos. Es un cambio fundamental:

- **Antes**: "¿Cómo le pido a la IA que haga X?"
- **Ahora**: "¿Cómo le doy a la IA el contexto necesario para entender X?"

## ¿Qué sigue?

Este sitio es ahora la base para compartir mi viaje construyendo productos SaaS con IA. Cada semana publicaré sobre:

- Implementaciones prácticas con LLMs
- Arquitecturas SaaS modernas
- Lecciones de emprendimiento
- Y por supuesto, más sobre Context Engineering

Todo empezó con darle a Claude el contexto correcto.

---

_¿Quieres ver el código? Todo está en [GitHub](https://github.com/edzzn/edissonreinozo.com). ¿Tienes preguntas sobre el proceso? [Contáctame](/contacto)._
