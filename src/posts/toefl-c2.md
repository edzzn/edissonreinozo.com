---
title: El TOEFL no mide tu inglés. Mide cómo ejecutas un formato bajo reloj.
date: 2026-07-28
description: Saqué 118 de 120 en once días tratando el examen como un problema de ingeniería. Leer el spec, montar un loop de feedback y automatizar la estructura. Incluye la charla completa que di para JavaScript Ecuador.
tags: [toefl, ingles, ia, aprendizaje]
---

Llevo seis años escribiendo código, documentación y pull requests en inglés. Calls con clientes, revisiones de código, todo. Entré al TOEFL pensando que era un trámite.

El primer simulacro me bajó del caballo. No porque no supiera inglés, sino porque el formato y el reloj son otro deporte.

Al final saqué 118 de 120, nivel C2. Me registré el 16 de junio de 2026 y rendí el 27. Once días, unas quince horas de estudio. Este post es lo que hice, y sobre todo el cambio de encuadre que lo hizo posible.

Si prefieres verlo en formato charla, está todo acá: **[Cómo alcanzar un nivel C2 en el examen TOEFL](/charla-toefl-c2.html)**. Es la presentación que di para la Comunidad JavaScript Ecuador, con botón de presentar y navegación por teclado. También hay [PDF](/charla-toefl-c2.pdf).

## El error de encuadre

Creí que estaba rindiendo un examen de inglés. No lo estaba.

El TOEFL mide qué tan bien ejecutas un formato bajo presión de tiempo. Es la diferencia entre saber programar y resolver un ejercicio de LeetCode en veinte minutos. El conocimiento está; lo que falta es el formato y el reloj.

Esto tiene una consecuencia incómoda para quienes ya trabajamos en inglés: nuestro nivel real no se traduce automáticamente en puntaje. Y tiene una consecuencia útil: si el cuello de botella es el formato, el formato se puede estudiar en días, no en meses.

Todo lo que sigue se deriva de ahí.

## Antes de nada: el examen cambió en enero de 2026

Esto es lo más importante que puedo decirle a alguien que vaya a rendirlo pronto, y casi nadie lo sabe.

El 21 de enero de 2026 ETS rehizo el examen. Reading y Listening ahora son adaptativos por etapas, o sea que cómo te va en la primera define el techo de la segunda. El examen bajó de unas tres horas a unos noventa minutos efectivos. La escala pasó a bandas de 1 a 6 por sección, con el 0 a 120 reportándose en paralelo durante la transición. Y aparecieron tipos de tarea que antes no existían: _Complete the Words_, _Listen and Repeat_, _Build a Sentence_, _Write an Email_.

Buena parte del material gratis que hay dando vueltas es del formato anterior, y sigue apareciendo primero en Google. Videos de 2023 y 2024 con miles de vistas. Revisa la fecha antes de estudiar con algo. Practicar el examen viejo es entrenar para otro deporte.

La fuente de verdad es la documentación oficial de ETS, no un blog. Ni este.

## Regla uno: lee el spec antes de escribir código

Si tuviera que rankear todo lo que hice, esto va primero, antes de cualquier práctica.

Entender cómo te califican vale más que subir tu nivel de inglés. Y es justo lo que nadie hace: la gente se pone a "practicar" sin saber qué premia el examen.

Tres cosas que me sorprendieron al leer los criterios:

1. Cada tarea premia elementos concretos. Estructura, desarrollo de la idea, precisión, manejo del tiempo. No premia sonar elegante ni usar palabras difíciles.
2. Los puntos casi nunca se pierden por gramática. Se pierden por omisión. No cumpliste una parte de la tarea, no diste el ejemplo, no cerraste la idea.
3. Los criterios son públicos y leerlos completos toma veinte minutos.

Nadie implementa una feature adivinando los requisitos. Pero rendimos exámenes adivinando la rúbrica.

## El loop: la IA como calificador, no como autor

Acá está el 80% de mi práctica de Writing y Speaking, y es lo mismo que ya conté cuando [usé IA para aprender Django](/blog/aprender-con-ia): la herramienta sirve cuando entrena, no cuando resuelve.

El ciclo es de cuatro pasos:

1. **Escribir** con cronómetro, en el tiempo real de la tarea. El reloj es parte de lo que estás practicando.
2. **Calificar**, con la guía oficial cargada en el contexto, pidiendo nota por criterio.
3. **Diagnosticar**. Y este es el paso donde casi todos se equivocan.
4. **Repetir** la misma tarea, no una nueva, hasta que ese error específico deja de aparecer.

Sobre el paso tres: nunca pidas "mejóralo". Si lo pides, te devuelve un texto perfecto que no escribiste tú, dices "qué bien" y no aprendiste nada. La pregunta correcta es dónde exactamente perdiste puntos y por qué.

Lo que le pedí, más o menos:

```text
[adjunto: la guía oficial del examen, en PDF]

Con base en esta guía, genérame preguntas
de práctica para [tipo de tarea].

Cuando te dé mi respuesta:
1. Califícala con los criterios de la guía.
2. Dime dónde perdí puntos y por qué.
3. Dame los tres arreglos de mayor impacto.

No reescribas mi respuesta.
```

La redacción del prompt importa menos de lo que parece. Lo que cambia todo es subirle el documento oficial: sin él califica con criterio inventado, que suena convincente y no sirve.

Un truco extra que me ayudó a calibrar: pedirle que además prediga la nota. Cuando su predicción y mi propia sensación empezaron a coincidir, ya tenía interiorizado el criterio, y eso es lo que usé el día del examen.

Es un ciclo de TDD. Test rojo, arreglo, verde. Solo que el feedback llega en treinta segundos.

## Speaking: la variante que funcionó mejor

Grabarme, transcribir y pedir calificación funciona. Ver tus propias palabras escritas te quita las excusas: ahí están los "um", las frases que empezaste y abandonaste, las oraciones que nunca cerraste. Importante, transcribe tal cual; si lo arreglas al escribirlo, borraste el dato.

Pero es lento. Lo que de verdad cambió mi práctica fue explicarle el formato una sola vez y después practicar **hablando**, en llamada de voz, en vez de escribiendo.

Ahí ya no estás redactando. Estás hablando bajo presión, que es exactamente lo que mide el examen, y el feedback llega al terminar sin transcribir nada a mano.

Y un detalle del día del examen que casi nadie aprovecha: en la tarea de repetir puedes tomar apuntes. Se puede usar papel durante todo el examen, y en esa tarea parece que es solo de memoria, así que nadie lo usa. Anotar las palabras clave mientras escuchas te salva la segunda mitad de las oraciones largas.

## Plantillas: no es trampa, es la estructura esperada

Cuando digo plantillas, alguien siempre piensa que es hacer trampa.

Piensa en un correo de trabajo. Todos empiezan igual, todos terminan igual, y en el medio están siempre las mismas partes. Nadie dice que escribir correos sea hacer trampa. Pero nadie improvisa la estructura de un correo tampoco.

El examen tiene una tarea que es literalmente escribir un correo. Un escenario, tres cosas que tienes que cubrir, unos siete minutos. Algo así:

> Trabajas en un proyecto grupal de un curso. Un compañero no ha estado participando y ha faltado a varias entregas. Escríbele un correo donde describas el avance del proyecto, expliques cómo su ausencia afecta al grupo y propongas cómo puede contribuir.

Mi respuesta se vería más o menos así. Marqué en negrita lo que se repite en cualquier correo, o sea lo que yo ya sabía antes de entrar al examen:

> **Hi Alex,**
>
> **I'm writing about** our group project.
> **Right now** we've finished the research and the first draft, and we present next week.
>
> **The problem is that** your parts haven't come in, so the rest of us covered them and we fell behind.
>
> **Would you be able to** take the data section and send it by Friday? **If that doesn't work, tell me what does.**
>
> **Thanks, and let me know how you'd like to handle it.**
> **Best, Edisson**

Casi la mitad del correo es estructura. Esa mitad no la pensé el día del examen: la tenía.

Lo que quedó en texto normal es lo único que tuve que producir, y es exactamente lo que la tarea pedía cubrir: el avance, cómo nos afectó, y qué le pido.

Ahí está toda la idea en un ejemplo. No escribí mejor inglés que el resto. Gasté el reloj en un solo problema en vez de dos.

El consejo importante: no memorices la plantilla de un video de YouTube. Constrúyela tú, con los criterios oficiales en la mano y con las correcciones que el loop te fue dando. Una plantilla que no practicaste con cronómetro no la vas a recordar.

## En qué no gasté tiempo

Con la advertencia de que esto es un solo caso, el mío, y yo ya trabajaba en inglés todos los días. Mi cuello de botella era el formato, no el idioma. Si el tuyo es otro, esta lista cambia.

No usé apps de vocabulario, no abrí un libro de gramática, no tomé ningún curso pagado, no estudié durante meses, y descarté todo el material que era del formato anterior a 2026.

No copies mi lista. Copia el método de averiguar cuál es tu propio cuello de botella, que es hacer un simulacro completo y cronometrado antes de estudiar nada. Duele y sirve.

## El error que me costó 29 dólares

Este es mi favorito, porque el error no fue de inglés.

Cuando te registras puedes elegir cuatro instituciones que reciben tu puntaje, gratis. Yo no las elegí. Me registré pensando en el examen, no en para qué era el examen.

Rendí el 27 de junio. Cuando llegó el momento de mandar el puntaje a la universidad, ya era tarde: el envío gratis solo aplica si lo eliges antes. Pagué 29 dólares por un reporte adicional.

No es plata que me arruine. Es plata que era gratis diez días antes.

La lección vale más que los 29 dólares: yo estaba resolviendo "rendir el examen" cuando el problema real era "hacer llegar un puntaje a una universidad". El examen era un paso, no el objetivo. Cuando optimizas el paso equivocado, pagas el recargo.

Si vas a rendirlo, ten la lista de universidades lista al momento de registrarte. Y corre el equipment check dos o tres veces, a distintas horas, antes de pagar: si falla el día del examen no hay devolución.

## Tres ideas para llevarse

1. No estudies inglés. Estudia el formato. Vale sobre todo si ya trabajas en inglés todos los días.
2. Consigue feedback rápido y contra los criterios reales. Rápido para poder iterar, contra los criterios para que sea el criterio de verdad y no una opinión amable.
3. Automatiza la estructura, para gastar el reloj en contenido y no en decidir cómo empezar.

118 de 120 no fue nivel de inglés. Fue tratar el examen como un problema de ingeniería.

## Recursos

Todo gratis y del formato actual:

- La documentación oficial de ETS: la estructura vigente sección por sección, el documento de especificaciones con los criterios, y un practice test gratuito. Es lo primero que deberías abrir, y el PDF de especificaciones es el que le subes a la IA.
- [TST Prep](https://www.youtube.com/@TSTPrep) en YouTube y [tstprep.com](https://tstprep.com). Lo lleva un ex-calificador del examen, así que explica el criterio y no solo la respuesta. Fue casi toda mi preparación. Tienen curso pagado, pero no lo tomé y no puedo opinar sobre él.
- r/TOEFL, para reportes de gente que ya rindió el formato nuevo.

Y una advertencia: circulan PDFs pirata del libro oficial en sitios cualquiera. Además del tema legal, muchas de esas copias son de antes de 2026, así que estarías practicando otro examen. Los documentos oficiales que necesitas son gratis.

Los ejemplos de tarea y de respuesta de este post los escribí yo. No son material oficial del examen.
