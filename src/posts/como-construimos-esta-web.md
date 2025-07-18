---
title: Context Engineering - El nuevo paradigma del desarrollo con IA
date: 2025-01-18
description: Cómo un cambio de mentalidad transformó por completo la forma de construir software con Claude
tags: [ai, desarrollo, context-engineering, claude]
---

## Ya no es prompt engineering, es context engineering

Este es el cambio más importante en el desarrollo con IA que nadie está discutiendo. Dejé de escribir prompts elaborados y empecé a construir contextos ricos. El resultado fue una transformación completa de mi sitio web en una sola sesión con Claude.

## El descubrimiento

Todo empezó con una migración aparentemente simple: mover un blog de Gatsby a SvelteKit. Pero lo que descubrí en el proceso cambió fundamentalmente mi forma de trabajar con IA.

En lugar de escribir prompts como:

- "Crea un componente de blog con filtros"
- "Añade dark mode al sitio"
- "Implementa búsqueda en los posts"

Hice algo diferente. Le di a Claude acceso completo al proyecto existente y le pedí que lo entendiera profundamente. El resultado fue revelador.

## Context Engineering en acción

### Paso 1: Construcción del contexto

```
"Explora toda la estructura del proyecto Gatsby.
Entiende cómo funciona el blog.
Documenta tus hallazgos.
Genera un plan de migración."
```

Claude no solo leyó archivos. Entendió:

- La arquitectura del proyecto
- Las convenciones de código
- Los patrones de diseño
- Las decisiones técnicas implícitas

### Paso 2: El contexto como guía

Con este conocimiento profundo, cada decisión posterior fue informada y coherente. No tuve que explicar:

- Qué estructura de carpetas usar
- Cómo nombrar los componentes
- Qué librerías preferir
- Cómo organizar los estilos

Claude ya lo sabía por el contexto.

### Paso 3: Validación automática

Aquí viene la parte revolucionaria. Con Playwright integrado, Claude no solo escribió código, lo validó:

```javascript
// Claude navegó al sitio
// Verificó cada enlace
// Detectó un 404
// Creó la página faltante
// Verificó de nuevo
// Todo en una sola iteración
```

No hubo ping-pong. No hubo "prueba esto". Claude iteró automáticamente hasta que todo funcionó.

## El poder del feedback instantáneo

La integración con Playwright cambió todo. Claude puede:

1. **Ver lo que construye** - Navega como un usuario real
2. **Detectar problemas** - Encuentra errores antes que tú
3. **Autocorregirse** - Itera sin intervención humana
4. **Validar el resultado** - Confirma que todo funciona

Esto no es solo automatización. Es un cambio fundamental en cómo la IA entiende y valida su propio trabajo.

## Resultados concretos

En una sola sesión:

- Migración completa de Gatsby a SvelteKit
- Sistema de temas con transiciones suaves
- Blog con búsqueda, filtros y tags
- Diseño minimalista coherente
- Cero bugs, cero iteraciones manuales

Pero el verdadero resultado fue el cambio de mentalidad.

## El archivo CLAUDE.md: Memoria persistente

El contexto no muere con la sesión. El archivo `CLAUDE.md` actúa como memoria del proyecto:

```markdown
## Arquitectura

- SvelteKit con Svelte 5 (runas)
- MDsveX para Markdown
- Tailwind CSS v4

## Convenciones

- Componentes en /src/lib/components
- Posts en /src/posts
- Rutas españolas (/articulos, /sobre-mi)

## Comandos

bun run dev
bun run build
bun run check
```

Cualquier instancia futura de Claude entiende inmediatamente el proyecto.

## Lecciones clave

### 1. El contexto es todo

No necesitas prompts perfectos. Necesitas contexto perfecto. La diferencia:

**Prompt Engineering:**

```
"Crea un componente de tarjeta para blog posts con título,
fecha, extracto, tags, modo oscuro, transiciones suaves,
que sea responsive y siga las mejores prácticas de accesibilidad"
```

**Context Engineering:**

```
"Mira cómo están construidos los componentes existentes"
```

Claude entendió más del segundo que del primero.

### 2. La memoria persistente importa

El archivo CLAUDE.md no es documentación. Es el contexto vivo del proyecto. Cada decisión, cada convención, cada comando útil. Es la diferencia entre empezar de cero cada vez y continuar donde lo dejaste.

### 3. El feedback automático es transformador

Cuando Claude puede ver lo que construye, todo cambia. No es solo sobre encontrar errores. Es sobre entender el impacto real del código. Es la diferencia entre programar a ciegas y programar con los ojos abiertos.

### 4. El proceso emerge del contexto

No planifiqué cada paso. El contexto rico permitió que el proceso emergiera naturalmente:

- El conocimiento de Gatsby informó la estructura de SvelteKit
- Las convenciones existentes guiaron las nuevas
- Los patrones del proyecto anterior evolucionaron en el nuevo

## Implicaciones para el futuro

Este cambio de paradigma tiene implicaciones profundas:

### Para desarrolladores

- Invierte más tiempo en construir contexto
- Documenta decisiones, no solo código
- Usa herramientas que permitan validación automática

### Para equipos

- El contexto compartido es más valioso que las guías de estilo
- CLAUDE.md puede ser el nuevo README
- La IA puede mantener consistencia mejor que los linters

### Para la industria

- Las herramientas evolucionarán hacia context-awareness
- La documentación se volverá contexto ejecutable
- El pair programming con IA será la norma

## Un ejemplo real de transformación

Durante la migración, Claude sugirió eliminar complejidad innecesaria. No porque se lo pidiera, sino porque el contexto le mostró que el proyecto original tenía abstracciones prematuras.

El resultado: 40% menos código, 100% más funcionalidad.

## El verdadero poder

Context Engineering no es solo una técnica. Es un cambio de mentalidad:

- De instruir a colaborar
- De especificar a explorar
- De controlar a confiar

Cuando le das a la IA el contexto correcto, no necesitas controlar cada detalle. El resultado emerge naturalmente, y suele ser mejor de lo que habrías especificado.

## Próximos pasos

Este descubrimiento cambió cómo construyo software. Ahora cada proyecto empieza con:

1. Construcción meticulosa del contexto
2. CLAUDE.md desde el día uno
3. Validación automática integrada
4. Iteración basada en feedback real

## Conclusión

El futuro del desarrollo con IA no está en escribir mejores instrucciones. Está en construir mejores contextos.

La próxima vez que trabajes con Claude o cualquier IA, no empieces con lo que quieres que haga. Empieza con lo que necesita entender.

El contexto es el nuevo código.

---

_¿Quieres experimentar Context Engineering? Prueba [Claude Code](https://claude.ai/code). ¿Tienes preguntas? [Hablemos](/contacto)._
