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

<article class="content-container">
	<header class="py-12 lg:py-16">
		<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{metadata.title}</h1>
		<div class="flex flex-wrap items-center gap-3 text-muted-foreground">
			<time class="text-sm">{formatDate(metadata.date)}</time>
			{#if metadata.tags && metadata.tags.length > 0}
				<span class="text-sm">•</span>
				<div class="flex flex-wrap gap-2">
					{#each metadata.tags as tag}
						<a 
							href="/blog?tag={encodeURIComponent(tag)}"
							class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
							       bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground 
							       transition-all duration-200 hover:scale-105"
						>
							{tag}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</header>
	
	<div class="prose prose-lg prose-neutral dark:prose-invert max-w-none pb-12 lg:pb-16
	            prose-headings:font-semibold prose-headings:tracking-tight
	            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
	            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
	            prose-p:text-muted-foreground prose-p:leading-relaxed
	            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
	            prose-strong:text-foreground prose-strong:font-semibold
	            prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal
	            prose-pre:bg-muted prose-pre:border prose-pre:border-border
	            prose-blockquote:border-l-primary prose-blockquote:pl-6 prose-blockquote:italic
	            prose-ul:list-disc prose-ol:list-decimal
	            prose-img:rounded-lg prose-img:shadow-lg">
		<Content />
	</div>
	
	<footer class="py-8 border-t border-border">
		<a href="/" class="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
			<svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			Volver al inicio
		</a>
	</footer>
</article>