---
title: Migrar en producción — de Vue a SvelteKit, de nativo a Flutter
date: 2026-07-28
description: Dos migraciones en producción, ambas hechas como strangler fig en lugar de una reescritura, y lo que realmente se rompió en el camino
tags: [svelte, flutter, migracion, arquitectura]
---

## Por qué migrar

Dos productos distintos, dos migraciones distintas, la misma presión de fondo: mantener dos stacks
en paralelo costaba más que la migración en sí. La app en Vue se había vuelto lenta para construir
funcionalidad nueva y generaba más quejas de DX en el equipo de las que valía la pena sostener. Las
apps nativas significaban contratar — y mantener — equipos separados de iOS y Android para
funcionalidad que no necesitaba diverger por plataforma. Consolidar en SvelteKit y Flutter fue
tanto una decisión de contratación y mantenimiento como una decisión técnica.

## La regla: nada de reescritura de golpe

Ninguna de las dos migraciones fue una reescritura que detuviera el mundo. Ambas se ejecutaron
como strangler fig, durante meses:

- Del lado web, las funcionalidades nuevas se construyeron como componentes de Svelte viviendo
  dentro de la aplicación Vue existente, sección por sección, mientras el resto de la app seguía
  corriendo en Vue.
- En mobile, las pantallas nuevas se construyeron en Flutter y se incrustaron dentro de las apps
  nativas de iOS/Android existentes, mientras el resto de la app seguía corriendo de forma nativa.

La ventaja de este enfoque es que ninguno de los dos productos quedó "apagado" durante una ventana
de migración — los usuarios nunca vieron un estado de "reescritura en progreso". El costo es que,
durante meses, dos frameworks tuvieron que coexistir de verdad dentro de la misma app corriendo en
producción, y ahí es donde estuvo el trabajo real.

## Lo que realmente se rompió: la capa de interoperabilidad

La parte difícil en ambos casos no fue portar componentes — fue lograr que el framework viejo y el
nuevo compartieran estado sin convertirse en dos fuentes de verdad distintas. El sistema de
reactividad de Vue y el de Svelte no se hablan de forma nativa, y tampoco lo hacen el estado de la
plataforma nativa y el árbol de widgets de Flutter. En ambas migraciones, eso significó construir
una capa de bridging dedicada: algo capaz de pasar estado y eventos a través del límite entre
frameworks de forma confiable, en ambas direcciones, sin que ninguno de los dos lados quedara
desactualizado en silencio.

Lograr que ese puente funcionara bien fue la mayor parte de la ingeniería real. También es la parte
que no aparece en una captura de "antes/después" — la UI se veía idéntica para el usuario todo el
tiempo; la mecánica de coexistencia por debajo fue lo que tomó tiempo.

## Particularidades de cada plataforma

Además de la capa de interoperabilidad, cada migración sacó a la luz fricciones específicas de
plataforma — casos donde el framework "nuevo" no se comportaba exactamente como prometía su
promesa multiplataforma, y necesitaba un workaround específico de plataforma antes de poder
convivir con el código nativo/Vue existente sin costuras visibles.

## Cómo terminó todo

Ambas migraciones se completaron en varios meses en lugar de semanas, de forma deliberada — el
ritmo de un strangler fig es más lento que una reescritura por diseño, a cambio de nunca tener una
ventana rota. En retrospectiva, el trabajo de interoperabilidad/bridging es la parte a la que le
daría más tiempo por adelantado la próxima vez: es fácil dimensionar una migración contando
pantallas o componentes, y fácil subestimar la capa que permite que dos frameworks compartan una
misma app en ejecución.
