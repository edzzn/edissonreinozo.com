---
title: Usé IA para aprender Django. El truco fue obligarla a no ayudarme.
date: 2026-07-21
description: Cómo invertí los roles con un asistente de IA, que entrene en vez de resolver, para de verdad aprender. Con algunas ideas prestadas de Antifrágil de Taleb.
tags: [ia, aprendizaje, django, antifragil]
---

<script>
	import LoopComparison from '$lib/components/diagrams/LoopComparison.svelte';
	import FadingScaffolding from '$lib/components/diagrams/FadingScaffolding.svelte';
	import BoilerplateShrinking from '$lib/components/diagrams/BoilerplateShrinking.svelte';
	import BarbellStrategy from '$lib/components/diagrams/BarbellStrategy.svelte';
</script>

Llevo un tiempo construyendo un backend con Django REST Framework y un frontend en Next.js. Nada exótico. Un tracker de materias: cursos, tareas, entregas, notas. El tipo de app que ya viste mil veces.

Lo interesante no es la app. Es cómo la construí. Usé un asistente de IA todo el camino, pero no de la forma en que lo usa casi todo el mundo. Le dije desde el principio que no tenía permitido escribir mi código de Django. Ni un serializer, ni un viewset, ni una clase de permisos. "Ni siquiera para mostrármelo."

Esa sola regla lo cambió todo. Este post trata de lo que aprendí sobre Django, pero en realidad trata de lo que aprendí sobre aprender cualquier cosa con IA, porque la forma en que usamos estas herramientas por defecto es silenciosamente pésima para volverte bueno en algo.

## La trampa

Este es el ciclo por defecto con un asistente de código con IA:

> Tú: "Agrégame autenticación JWT a mi app de DRF."
> La IA: escribe 60 líneas perfectas repartidas en cuatro archivos.
> Tú: "gracias" (pegas, funciona, sigues adelante)

Ahora tienes autenticación que funciona y no entiendes nada de ella. No podrías reconstruirla en una entrevista. No podrías depurarla cuando se rompa a las 2 de la mañana. Delegaste no solo el tecleo sino la comprensión, y la comprensión era justamente el punto.

La herramienta es tan buena produciendo código correcto que elimina la fricción de la que está hecho el aprendizaje. Batallar para saber dónde va una línea, adivinar qué devuelve un endpoint, leer un traceback y equivocarte. Esa fricción no es un defecto del proceso. Es el proceso entero. Usada sin cuidado, la IA la lija por completo y te deja con una app que funciona y la cabeza vacía.

## La inversión: entrenador, no autor

Así que invertí los papeles. Las reglas que le di:

1. Nunca escribas mi código de Django. Cuando esté atascado, dame el siguiente paso, no la respuesta.
2. Deja andamiaje con comentarios, no código. Pon marcadores TODO en mis archivos describiendo qué va ahí y por qué. Yo tecleo la línea real.
3. Hazme predecir antes de correr cualquier cosa. "¿Qué status va a devolver esto, 401, 403 o 404? ¿Por qué ese y no los otros?"
4. Cuando algo se rompa, muéstrame el traceback y pregúntame qué creo antes de explicar.
5. Tómame lección. Preguntas de repaso de temas viejos al inicio de cada sesión.

Había una única salida de emergencia, una frase que podía decir para apagar el modo entrenador por exactamente una respuesta, para cuando de verdad solo necesitaba ver un patrón. La usé poquísimo. Y eso importaba. La fricción tiene que ser lo que pasa por defecto, con una opción de saltarla, no al revés.

<LoopComparison locale="es" />

## El error de esconder demasiado

Al principio el entrenador escondía demasiado. Las pistas mínimas funcionaban con temas conocidos, pero no podía deducir qué era un ViewSet si nunca había visto uno. Eso no era aprendizaje: era quedarme atascado.

Cambiamos la regla: la primera vez, una explicación clara y andamiaje en el lugar exacto del archivo; la segunda, menos ayuda y mi código anterior como referencia. A medida que el patrón se volvía familiar, la ayuda desaparecía.

<FadingScaffolding locale="es" />

Entrenar es dar la ayuda necesaria para avanzar y reducirla a medida que aprendes.

## Empezó con libros y un plan, no con código

No sabía nada del tema. Así que antes de escribir una sola línea pedí lo aburrido: libros de referencia, la documentación oficial, un par de fuentes serias para tener de dónde agarrarme. Y en vez de ponerme a leer de corrido, decidimos arrancar con un proyecto práctico y aprender encima de él.

Eso obligó a la IA a tener claro hacia dónde iba todo desde el día uno. No era "resuélveme este endpoint", era un plan de aprendizaje entero, con un orden pensado, sabiendo que esto no era código para producción sino código para entender.

Y la parte que más me sorprendió: el plan incluía a propósito pasos que iba a tener que desaprender. Cosas que hice de la forma incorrecta, o de la forma más larga y tediosa, solo para después entender por qué existe la forma corta.

El mejor ejemplo fue cómo escribí las vistas. Primero una vista como función, a mano, con todo el trabajo explícito. Después la reescribí como una clase más formal. Después la colapsé en las vistas genéricas de DRF. Y al final en un ViewSet, que hace casi todo solo. Pude haber empezado por el ViewSet en la primera hora y ahorrarme tres cuartas partes del tecleo. Pero entonces las abstracciones habrían sido magia. Al hacerlo por el camino largo primero, sentí en carne propia qué me estaba quitando de encima cada nivel. Sentir el boilerplate era justamente el punto.

<BoilerplateShrinking locale="es" />

Con la seguridad pasó lo mismo. Primero filtré todo a mano por usuario, con la lógica repartida donde tocara, y solo después conocí la pieza que DRF tiene lista para eso. Aprendes la versión torpe, te duele un poco, y entonces la versión elegante tiene sentido en lugar de ser una receta que copias sin saber qué resuelve.

Suena ineficiente, y lo es si lo único que quieres es la app. Pero si lo que quieres es entender, hacer las cosas mal a propósito, en un orden pensado, resultó ser de lo más valioso de todo el proceso.

## Ver algo completo primero

Otra cosa que sirvió mucho: antes de construir la mía paso a paso, dejé que la IA armara sola una aplicación completa. No la misma, pero con muchos de los mismos conceptos, de principio a fin, terminada y funcionando.

Suena contradictorio después de todo lo que dije sobre no dejarla escribir mi código. Pero ver algo completo es otra forma de aprender, distinta de construirlo. Te da una figura de referencia, una foto de hacia dónde vas. La puedes abrir, seguir el hilo de una petición de punta a punta, ver cómo se conectan piezas que todavía no sabes ni nombrar.

Es la diferencia entre que te den un rompecabezas ya armado para estudiarlo un rato, y que te den las piezas sueltas sin la imagen de la caja. Primero la foto, después lo armas con tus manos. Analizar algo terminado y construir algo desde cero son dos músculos distintos, y usé los dos a propósito.

## Los bugs eran el temario

Yo ya sabía backend. Lo nuevo fue entender cómo resuelve Django problemas que ya conocía.

Con `prefetch_related`, por ejemplo, aprendí a evitar N+1 y a comprobarlo con varios registros. También descubrí que el versionado por URL pasa la versión a las vistas: mis acciones personalizadas no aceptaban ese argumento y fallaron, mientras las vistas incluidas en DRF siguieron funcionando.

Arreglar esos errores escribiendo el código yo mismo hizo que las decisiones de Django dejaran de parecer magia.

## Saber dónde dejar que la IA maneje

Solo protegí lo que quería aprender: DRF. La IA podía encargarse del frontend, la configuración, los datos de prueba y el estilo. Así concentré la dificultad en Django y avancé rápido con todo lo demás.

## Todo esto ya tenía un nombre: antifrágil

Mientras hacía todo esto estuve leyendo Antifrágil, de Nassim Taleb, y entendí que el libro describía exactamente lo que me estaba pasando.

Taleb separa tres cosas. Lo frágil se rompe con el estrés. Lo robusto lo aguanta. Y lo antifrágil se vuelve más fuerte con él, mejora justo por los golpes. El código que pego y no entiendo es conocimiento frágil: funciona hasta que la realidad se mueve un centímetro, y ahí me quedo indefenso. Lo que quiero construir es lo contrario, un entendimiento que se hace más fuerte cada vez que algo sale mal.

Y ahí encajan los bugs. Los errores, equivocarme, el traceback en rojo, no son accidentes que haya que evitar, son el estrés que me hace más fuerte. Es como el músculo, el hueso o el sistema inmune: una dosis chica de estrés construye capacidad, y la protección total produce atrofia. Un proceso de aprendizaje debería estar diseñado para ganar con los golpes, no para blindarte de ellos.

El giro más cruel que nombra Taleb es la iatrogenia: el daño que hace la ayuda. El que interviene para curar y termina empeorando lo que quería arreglar. Una IA que te escribe todo el código es iatrogénica para tu entendimiento. Te cura el síntoma, no tener código que funcione, y te agrava la enfermedad, no aprender nada. Se ve como ayuda, y por eso es tan peligrosa.

Hasta lo de dejar que la IA maneje el resto tiene nombre ahí: la estrategia de la barra. Ir a los dos extremos y no quedarte en el medio. Máximo esfuerzo y fricción en la única cosa que quieres aprender, máximo apalancamiento en todo lo demás, y nada en ese medio tibio donde aprendes todo a medias y no eres dueño de nada. El medio es lo frágil. Los dos extremos, juntos, son antifrágiles.

<BarbellStrategy locale="es" />

Y si me preguntas por qué esos bugs enseñaron tanto y un tutorial no, la respuesta también anda por ahí: tenía algo en juego. Eran mis bugs, en mi código, con mi tarde de por medio. Arriesgar lo tuyo es lo que hace que la lección se pegue.

## El manual, para cualquier cosa

Quita Django de en medio y todo esto se generaliza.

- Protege tu objetivo de aprendizaje. Nombra la única cosa en la que quieres mejorar y prohíbele a la IA hacer esa parte. Déjala con el resto.
- Pide el siguiente paso, no la respuesta. "Dame una pista" le gana a "dame la solución" cada vez que de verdad quieres retenerlo.
- Predice antes de correr. Di en voz alta qué crees que va a pasar primero. Equivocarte dejando constancia es donde está el aprendizaje.
- Lee tus propios errores. Que te muestre el traceback y te pregunte antes de explicar. Depurar solo es el examen de graduación.
- Trata los bugs como el temario, no como interrupciones.
- Ve primero a lo ancho, después a lo profundo. Hice una pasada rápida y superficial por todo el framework para tener el mapa, y después una segunda pasada lenta para la profundidad. No puedes profundizar en algo para lo que todavía no tienes un casillero.
- Revisa a la IA, porque a veces se equivoca con toda seguridad. Una vez me aseguró que un test protegía contra una regresión que no protegía. Confía, pero verifica, de preferencia corriendo la cosa.

## La parte incómoda

Mientras mejores se ponen estas herramientas, más fácil se vuelve entregar trabajo que no entiendes, y más deliberado tienes que ser para aprender algo. El camino de la productividad y el camino del aprendizaje se separaron sin que nos diéramos cuenta. La mayoría de los días quiero el de la productividad, y está bien. Pero cuando la meta es de verdad volverme mejor, para una entrevista, por el oficio, por la versión de mí que va a tener que mantener esto después, tengo que elegir el camino más lento a propósito y lograr que la herramienta me obligue a seguirlo.

Lo más útil que hizo mi asistente de IA fue negarse a ayudar, una y otra vez. Y se lo tuve que pedir yo. Esa es la parte que vale la pena recordar. La herramienta no va a elegir tu aprendizaje por ti. Tienes que configurarla para que te haga batallar, y después agradecerle cuando lo hace.
