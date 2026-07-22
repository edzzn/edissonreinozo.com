<script lang="ts">
	let {
		slug,
		title,
		locale = 'es',
		variant = 'card'
	} = $props<{
		slug: string;
		title: string;
		locale?: 'es' | 'en';
		variant?: 'card' | 'hero';
	}>();

	let failed = $state(false);
	let src = $derived(`/images/posts/${slug}.jpg`);
	let alt = $derived(
		locale === 'en' ? `Cover illustration for ${title}` : `Ilustración de portada para ${title}`
	);
</script>

<div
	class="cover-frame bg-primary/8 border-border relative isolate overflow-hidden border {variant ===
	'hero'
		? 'aspect-video w-full rounded-2xl'
		: 'aspect-[16/9] w-full rounded-xl sm:w-56 sm:shrink-0'}"
>
	<div class="fallback-grid absolute inset-0" aria-hidden="true">
		<div class="fallback-disc"></div>
		<div class="fallback-line"></div>
	</div>
	{#if !failed}
		<img
			{src}
			{alt}
			loading={variant === 'card' ? 'lazy' : 'eager'}
			fetchpriority={variant === 'hero' ? 'high' : 'auto'}
			class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
			onerror={() => (failed = true)}
		/>
	{/if}
</div>

<style>
	.fallback-grid {
		background-color: color-mix(in oklab, var(--color-primary) 12%, var(--color-background));
		background-image:
			linear-gradient(
				color-mix(in oklab, var(--color-primary) 12%, transparent) 1px,
				transparent 1px
			),
			linear-gradient(
				90deg,
				color-mix(in oklab, var(--color-primary) 12%, transparent) 1px,
				transparent 1px
			);
		background-size: 1.6rem 1.6rem;
	}

	.fallback-disc {
		position: absolute;
		width: 42%;
		aspect-ratio: 1;
		left: 29%;
		top: 8%;
		border-radius: 999px;
		background: var(--color-primary);
		opacity: 0.86;
	}

	.fallback-line {
		position: absolute;
		width: 58%;
		height: 12%;
		left: 21%;
		bottom: 15%;
		background: var(--color-foreground);
		transform: rotate(-7deg);
		opacity: 0.82;
	}
</style>
