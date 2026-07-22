<script lang="ts">
	import type { Component } from 'svelte';
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO.svelte';
	import ArticleAudioPlayer from '$lib/components/ArticleAudioPlayer.svelte';
	import PostCover from '$lib/components/PostCover.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';

	let { data } = $props<{
		data: {
			slug: string;
			alternatePath: string;
			hasTranslation: boolean;
			content: Component;
			metadata: { title: string; date: string; description?: string; tags?: string[] };
		};
	}>();
	const { content: Content, metadata } = data;
</script>

<SEO
	title={metadata.title}
	description={metadata.description || `Article published on ${formatDate(metadata.date, 'en')}`}
	locale="en"
	alternatePath={data.hasTranslation ? data.alternatePath : ''}
/>

<div class="content-container">
	<article class="max-w-full overflow-x-hidden">
		<header class="py-12 lg:py-16">
			<h1 class="text-foreground mb-6 text-4xl leading-tight font-bold lg:text-5xl">
				{metadata.title}
			</h1>
			<div class="text-muted-foreground flex flex-wrap items-center gap-3">
				<time class="text-sm">{formatDate(metadata.date, 'en')}</time>
				{#if metadata.tags?.length}
					<span>•</span>
					<div class="flex flex-wrap gap-2">
						{#each metadata.tags as tag (tag)}
							<a
								href="/en/blog?tag={encodeURIComponent(tag)}"
								class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium transition-all"
							>
								{tag}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</header>
		<div class="mb-6">
			<PostCover slug={data.slug} title={metadata.title} locale="en" variant="hero" />
		</div>
		<ArticleAudioPlayer src={`/audio/en/${data.slug}.mp3`} title={metadata.title} locale="en" />

		<div class="grid max-w-full grid-cols-1 gap-12 py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
			<div class="min-w-0 overflow-x-hidden">
				<div
					class="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-blockquote:border-l-primary prose-li:text-foreground/80 max-w-none pb-12 lg:pb-16"
				>
					<Content />
				</div>
			</div>
			<aside class="hidden lg:sticky lg:top-20 lg:block lg:self-start">
				<TableOfContents locale="en" />
			</aside>
		</div>

		<footer class="border-border border-t py-8">
			<a href="/en" class="text-primary hover:text-primary/80">← Back to home</a>
		</footer>
	</article>
</div>
