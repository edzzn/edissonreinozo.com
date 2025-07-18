<script lang="ts">
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO.svelte';
	
	let { data } = $props<{
		data: {
			content: any;
			metadata: {
				title: string;
				date: string;
				description?: string;
				tags?: string[];
			};
		};
	}>();
	
	const { content: Content, metadata } = data;
</script>

<SEO 
	title={metadata.title}
	description={metadata.description || `Artículo publicado el ${formatDate(metadata.date)}`}
/>

<article class="prose prose-lg max-w-none">
	<header class="mb-8">
		<h1 class="text-4xl font-bold text-foreground mb-4">{metadata.title}</h1>
		<div class="flex items-center gap-3 text-muted-foreground">
			<time>{formatDate(metadata.date)}</time>
			{#if metadata.tags && metadata.tags.length > 0}
				<span>•</span>
				<div class="flex flex-wrap gap-2">
					{#each metadata.tags as tag}
						<a 
							href="/articulos?tag={encodeURIComponent(tag)}"
							class="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm hover:bg-muted/80 transition-colors"
						>
							#{tag}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</header>
	
	<div class="markdown-content">
		<Content />
	</div>
	
	<footer class="mt-12 pt-6 border-t border-border">
		<a href="/" class="text-primary hover:text-primary/80 transition-colors">
			← Volver al inicio
		</a>
	</footer>
</article>

<style>
	.markdown-content :global(h2) {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(h3) {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}
	
	.markdown-content :global(p) {
		margin-bottom: 1rem;
		line-height: 1.625;
	}
	
	.markdown-content :global(a) {
		color: var(--color-primary);
		transition: color 150ms ease;
	}
	
	.markdown-content :global(a:hover) {
		opacity: 0.8;
	}
	
	/* Inline code */
	.markdown-content :global(:not(pre) > code) {
		background-color: var(--color-muted);
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: var(--font-mono, monospace);
	}
	
	/* Code blocks from Shiki */
	.markdown-content :global(.code-block) {
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(.code-block pre) {
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
	}
	
	.markdown-content :global(.code-block code) {
		background-color: transparent;
		padding: 0;
		font-family: var(--font-mono, monospace);
	}
	
	/* Shiki theme overrides */
	.markdown-content :global(.shiki) {
		background-color: var(--shiki-bg) !important;
	}
	
	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}
	
	.markdown-content :global(li) {
		margin-bottom: 0.5rem;
	}
	
	.markdown-content :global(blockquote) {
		border-left: 4px solid var(--color-border);
		padding-left: 1rem;
		font-style: italic;
		margin: 1rem 0;
	}
</style>