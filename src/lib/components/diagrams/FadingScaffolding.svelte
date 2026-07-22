<script lang="ts">
	// Inline-SVG diagram: AI scaffolding fades as a pattern becomes familiar.
	// Each bar is the same task split between "IA (andamiaje)" and "Tú".
	let { locale = 'es' } = $props<{ locale?: 'es' | 'en' }>();

	const copy = $derived(
		locale === 'en'
			? {
					title: 'Help fades as the pattern becomes familiar',
					ai: 'AI scaffolding',
					you: 'You',
					steps: ['1st time', '2nd time', '3rd time']
				}
			: {
					title: 'La ayuda se desvanece a medida que el patrón se vuelve conocido',
					ai: 'Andamiaje de la IA',
					you: 'Tú',
					steps: ['1.ª vez', '2.ª vez', '3.ª vez']
				}
	);

	// Share of AI help per occurrence (the rest is you).
	const aiShare = [0.8, 0.4, 0.1];

	// Layout constants in viewBox units.
	const W = 560;
	const H = 240;
	const padTop = 16;
	const padBottom = 34;
	const barW = 96;
	const gap = 72;
	const chartH = H - padTop - padBottom;
	const groupW = aiShare.length * barW + (aiShare.length - 1) * gap;
	const startX = (W - groupW) / 2;
</script>

<figure class="diagram">
	<svg
		viewBox="0 0 {W} {H}"
		class="h-auto w-full"
		role="img"
		aria-label={copy.title}
		preserveAspectRatio="xMidYMid meet"
	>
		{#each aiShare as share, i (i)}
			{@const x = startX + i * (barW + gap)}
			{@const aiH = chartH * share}
			{@const youH = chartH - aiH}
			<!-- AI scaffolding portion (top, muted) -->
			<rect
				{x}
				y={padTop}
				width={barW}
				height={aiH}
				rx="6"
				fill="var(--muted-foreground)"
				opacity="0.35"
			>
				<title>{copy.ai}: {Math.round(share * 100)}%</title>
			</rect>
			<!-- Your portion (bottom, primary) -->
			<rect
				{x}
				y={padTop + aiH}
				width={barW}
				height={youH}
				rx="6"
				fill="var(--primary)"
			>
				<title>{copy.you}: {Math.round((1 - share) * 100)}%</title>
			</rect>
			<text
				x={x + barW / 2}
				y={H - 12}
				text-anchor="middle"
				font-size="14"
				fill="var(--muted-foreground)"
			>
				{copy.steps[i]}
			</text>
		{/each}
	</svg>

	<div class="legend">
		<span class="legend-item">
			<span class="swatch" style="background: var(--primary)"></span>
			{copy.you}
		</span>
		<span class="legend-item">
			<span class="swatch" style="background: var(--muted-foreground); opacity: 0.35"></span>
			{copy.ai}
		</span>
	</div>
	<figcaption>{copy.title}</figcaption>
</figure>

<style>
	.diagram {
		margin: 2.5rem 0;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--surface);
		padding: 1.5rem 1.25rem 1.25rem;
	}
	.legend {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 0.75rem;
		font-size: 0.8125rem;
		color: var(--muted-foreground);
	}
	.legend-item {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}
	.swatch {
		display: inline-block;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 3px;
	}
	figcaption {
		margin-top: 0.5rem;
		text-align: center;
		font-size: 0.8125rem;
		font-style: italic;
		color: var(--muted-foreground);
	}
</style>
