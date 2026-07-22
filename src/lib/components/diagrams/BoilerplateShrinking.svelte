<script lang="ts">
	// Inline-SVG bar chart: the view progression removes boilerplate at each level.
	// función a mano -> clase -> vistas genéricas -> ViewSet
	let { locale = 'es' } = $props<{ locale?: 'es' | 'en' }>();

	const copy = $derived(
		locale === 'en'
			? {
					title: 'Each level removes boilerplate',
					axis: 'Explicit code you write',
					stages: ['Function view', 'Class view', 'Generic views', 'ViewSet']
				}
			: {
					title: 'Cada nivel te quita boilerplate de encima',
					axis: 'Código explícito que escribes',
					stages: ['Vista función', 'Vista clase', 'Vistas genéricas', 'ViewSet']
				}
	);

	// Relative amount of boilerplate (0-1) at each stage.
	const values = [1, 0.68, 0.34, 0.12];

	const W = 560;
	const H = 260;
	const padTop = 16;
	const padBottom = 48;
	const barW = 84;
	const gap = 40;
	const chartH = H - padTop - padBottom;
	const groupW = values.length * barW + (values.length - 1) * gap;
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
		<!-- baseline -->
		<line
			x1={startX - 12}
			y1={padTop + chartH}
			x2={W - startX + 12}
			y2={padTop + chartH}
			stroke="var(--border)"
		/>
		{#each values as v, i (i)}
			{@const x = startX + i * (barW + gap)}
			{@const h = chartH * v}
			{@const y = padTop + chartH - h}
			<rect
				{x}
				{y}
				width={barW}
				height={h}
				rx="6"
				fill="var(--primary)"
				opacity={0.4 + 0.6 * v}
			>
				<title>{copy.stages[i]}: {Math.round(v * 100)}%</title>
			</rect>
			<text
				x={x + barW / 2}
				y={y - 8}
				text-anchor="middle"
				font-size="13"
				font-weight="600"
				fill="var(--foreground)"
			>
				{Math.round(v * 100)}%
			</text>
			<text
				x={x + barW / 2}
				y={H - 24}
				text-anchor="middle"
				font-size="13"
				fill="var(--muted-foreground)"
			>
				{copy.stages[i]}
			</text>
		{/each}
		<text
			x={W / 2}
			y={H - 6}
			text-anchor="middle"
			font-size="12"
			fill="var(--muted-foreground)"
			opacity="0.8"
		>
			{copy.axis}
		</text>
	</svg>
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
	figcaption {
		margin-top: 0.5rem;
		text-align: center;
		font-size: 0.8125rem;
		font-style: italic;
		color: var(--muted-foreground);
	}
</style>
