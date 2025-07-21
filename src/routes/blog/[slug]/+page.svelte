<script lang="ts">
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';

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

<div class="content-container">
	<article class="max-w-full overflow-x-hidden">
		<header class="py-12 lg:py-16">
			<h1 class="text-foreground mb-6 text-4xl leading-tight font-bold lg:text-5xl">
				{metadata.title}
			</h1>
			<div class="text-muted-foreground flex flex-wrap items-center gap-3">
				<time class="text-sm">{formatDate(metadata.date)}</time>
				{#if metadata.tags && metadata.tags.length > 0}
					<span class="text-sm">•</span>
					<div class="flex flex-wrap gap-2">
						{#each metadata.tags as tag}
							<a
								href="/blog?tag={encodeURIComponent(tag)}"
								class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center rounded-full
								       px-2.5 py-0.5 text-xs font-medium
								       transition-all duration-200 hover:scale-105"
							>
								{tag}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-12 py-8 max-w-full">
			<div class="min-w-0 overflow-x-hidden">
				<div
					class="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
			            prose-h1:text-4xl lg:prose-h1:text-5xl prose-h2:text-3xl
			            lg:prose-h2:text-4xl prose-h2:mt-12
			            prose-h2:mb-6 prose-h3:text-2xl lg:prose-h3:text-3xl prose-h3:mt-8
			            prose-h3:mb-4 prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
			            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
			            prose-a:font-medium prose-strong:text-foreground prose-strong:font-semibold prose-code:text-primary
			            prose-code:bg-muted prose-code:px-1.5
			            prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-surface prose-pre:border prose-pre:border-border
			            prose-pre:my-8 prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:pl-6
			            prose-blockquote:italic prose-blockquote:my-8 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal
			            prose-ol:pl-6 prose-li:text-foreground/80 prose-li:mb-2 prose-img:rounded-lg
			            prose-img:shadow-lg prose-img:my-8
			            prose-hr:border-border prose-hr:my-12 max-w-none
			            pb-12 lg:pb-16"
				>
					<Content />
				</div>
			</div>

			<aside class="hidden lg:block lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto">
				<TableOfContents />
			</aside>
		</div>

		<footer class="border-border border-t py-8">
			<a
				href="/"
				class="text-primary hover:text-primary/80 group inline-flex items-center gap-2 transition-colors"
			>
				<svg
					class="h-4 w-4 transition-transform group-hover:-translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Volver al inicio
			</a>
		</footer>
	</article>
</div>
