<script lang="ts">
	// Two learning loops compared: the default "hidden" loop vs the coach loop.
	let { locale = 'es' } = $props<{ locale?: 'es' | 'en' }>();

	const copy = $derived(
		locale === 'en'
			? {
					title: 'Two loops, opposite outcomes',
					defaultLabel: 'Default loop',
					defaultOutcome: 'You understand nothing',
					coachLabel: 'Coach loop',
					coachOutcome: 'The knowledge is yours',
					defaultSteps: ['Ask for a feature', 'AI writes 60 lines', 'Paste, it works'],
					coachSteps: ['Ask for a hint', 'Predict the result', 'Type the line yourself']
				}
			: {
					title: 'Dos ciclos, resultados opuestos',
					defaultLabel: 'Ciclo por defecto',
					defaultOutcome: 'No entiendes nada',
					coachLabel: 'Ciclo entrenador',
					coachOutcome: 'El conocimiento es tuyo',
					defaultSteps: ['Pides una función', 'La IA escribe 60 líneas', 'Pegas, funciona'],
					coachSteps: ['Pides una pista', 'Predices el resultado', 'Tecleas la línea tú mismo']
				}
	);
</script>

<figure class="diagram">
	<div class="loop loop--default">
		<span class="loop-label">{copy.defaultLabel}</span>
		<div class="flow">
			{#each copy.defaultSteps as step, i (i)}
				<span class="node">{step}</span>
				<span class="arrow" aria-hidden="true">→</span>
			{/each}
			<span class="node node--outcome">{copy.defaultOutcome}</span>
		</div>
	</div>

	<div class="loop loop--coach">
		<span class="loop-label">{copy.coachLabel}</span>
		<div class="flow">
			{#each copy.coachSteps as step, i (i)}
				<span class="node">{step}</span>
				<span class="arrow" aria-hidden="true">→</span>
			{/each}
			<span class="node node--outcome">{copy.coachOutcome}</span>
		</div>
	</div>

	<figcaption>{copy.title}</figcaption>
</figure>

<style>
	.diagram {
		margin: 2.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		padding: 1.5rem 1.25rem 1.25rem;
	}
	.loop {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		border-radius: var(--radius);
		padding: 0.9rem 1rem;
	}
	.loop--default {
		background: color-mix(in srgb, var(--destructive) 8%, transparent);
		border: 1px solid color-mix(in srgb, var(--destructive) 25%, transparent);
	}
	.loop--coach {
		background: color-mix(in srgb, var(--primary) 8%, transparent);
		border: 1px solid color-mix(in srgb, var(--primary) 25%, transparent);
	}
	.loop-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted-foreground);
	}
	.flow {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem 0.5rem;
	}
	.node {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		border: 1px solid var(--border);
		background: var(--background);
		padding: 0.3rem 0.75rem;
		font-size: 0.875rem;
		color: var(--foreground);
	}
	.node--outcome {
		font-weight: 600;
		border-style: dashed;
	}
	.loop--default .node--outcome {
		color: var(--destructive);
		border-color: color-mix(in srgb, var(--destructive) 50%, transparent);
	}
	.loop--coach .node--outcome {
		color: var(--primary);
		border-color: color-mix(in srgb, var(--primary) 50%, transparent);
	}
	.arrow {
		color: var(--muted-foreground);
		font-size: 1rem;
		line-height: 1;
	}
	figcaption {
		text-align: center;
		font-size: 0.8125rem;
		font-style: italic;
		color: var(--muted-foreground);
	}
</style>
