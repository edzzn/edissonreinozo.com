<script lang="ts">
	// Taleb's barbell, applied to learning with AI: max friction on one end,
	// max leverage on the other, and an empty (fragile) middle.
	let { locale = 'es' } = $props<{ locale?: 'es' | 'en' }>();

	const copy = $derived(
		locale === 'en'
			? {
					title: 'The barbell: go to both extremes, avoid the middle',
					left: 'Max friction',
					leftSub: ['What you want', 'to learn (DRF)'],
					right: 'Max leverage',
					rightSub: ['Everything else', '(frontend, config)'],
					middle: 'The lukewarm middle — fragile'
				}
			: {
					title: 'La barra: ve a los dos extremos, evita el medio',
					left: 'Máxima fricción',
					leftSub: ['Lo que quieres', 'aprender (DRF)'],
					right: 'Máximo apalancamiento',
					rightSub: ['Todo lo demás', '(frontend, config)'],
					middle: 'El medio tibio — frágil'
				}
	);

	const W = 600;
	const H = 210;
	const cy = 92;
	const plateW = 196;
	const plateH = 128;
	const barY = cy - 6;
</script>

<figure class="diagram">
	<svg
		viewBox="0 0 {W} {H}"
		class="h-auto w-full"
		role="img"
		aria-label={copy.title}
		preserveAspectRatio="xMidYMid meet"
	>
		<!-- connecting bar -->
		<rect x={plateW} y={barY} width={W - 2 * plateW} height="12" rx="6" fill="var(--border)" />

		<!-- fragile middle marker -->
		<line
			x1={W / 2 - 24}
			y1={cy - 22}
			x2={W / 2 + 24}
			y2={cy + 34}
			stroke="var(--destructive)"
			stroke-width="2"
			opacity="0.6"
		/>
		<text x={W / 2} y={cy + 60} text-anchor="middle" font-size="12" fill="var(--muted-foreground)">
			{copy.middle}
		</text>

		<!-- left plate: friction -->
		<rect x="0" y={cy - plateH / 2} width={plateW} height={plateH} rx="10" fill="var(--primary)">
			<title>{copy.left} — {copy.leftSub.join(' ')}</title>
		</rect>
		<text
			x={plateW / 2}
			y={cy - 14}
			text-anchor="middle"
			font-size="15"
			font-weight="700"
			fill="var(--primary-foreground)"
		>
			{copy.left}
		</text>
		{#each copy.leftSub as line, i (i)}
			<text
				x={plateW / 2}
				y={cy + 8 + i * 15}
				text-anchor="middle"
				font-size="11"
				fill="var(--primary-foreground)"
				opacity="0.85"
			>
				{line}
			</text>
		{/each}

		<!-- right plate: leverage -->
		<rect
			x={W - plateW}
			y={cy - plateH / 2}
			width={plateW}
			height={plateH}
			rx="10"
			fill="var(--foreground)"
		>
			<title>{copy.right} — {copy.rightSub.join(' ')}</title>
		</rect>
		<text
			x={W - plateW / 2}
			y={cy - 14}
			text-anchor="middle"
			font-size="15"
			font-weight="700"
			fill="var(--background)"
		>
			{copy.right}
		</text>
		{#each copy.rightSub as line, i (i)}
			<text
				x={W - plateW / 2}
				y={cy + 8 + i * 15}
				text-anchor="middle"
				font-size="11"
				fill="var(--background)"
				opacity="0.85"
			>
				{line}
			</text>
		{/each}
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
