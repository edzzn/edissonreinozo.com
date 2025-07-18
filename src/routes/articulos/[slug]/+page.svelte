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
		<h1 class="text-4xl font-bold text-gray-900 mb-4">{metadata.title}</h1>
		<div class="flex items-center gap-3 text-gray-500">
			<time>{formatDate(metadata.date)}</time>
			{#if metadata.tags && metadata.tags.length > 0}
				<span>•</span>
				<div class="flex flex-wrap gap-2">
					{#each metadata.tags as tag}
						<span class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
							#{tag}
						</span>
					{/each}
				</div>
			{/if}
		</div>
	</header>
	
	<div class="markdown-content">
		<Content />
	</div>
	
	<footer class="mt-12 pt-6 border-t border-gray-200">
		<a href="/" class="text-[#663399] hover:text-purple-800 transition-colors">
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
		color: #663399;
		transition: color 150ms ease;
	}
	
	.markdown-content :global(a:hover) {
		color: rgb(147, 51, 234);
	}
	
	.markdown-content :global(code) {
		background-color: rgb(243, 244, 246);
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
	}
	
	.markdown-content :global(pre) {
		background-color: rgb(243, 244, 246);
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}
	
	.markdown-content :global(pre code) {
		background-color: transparent;
		padding: 0;
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
		border-left: 4px solid rgb(209, 213, 219);
		padding-left: 1rem;
		font-style: italic;
		margin: 1rem 0;
	}
</style>