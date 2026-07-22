<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import PostCover from './PostCover.svelte';

	let { post, locale = 'es' } = $props<{ post: Post; locale?: 'es' | 'en' }>();
	let basePath = $derived(locale === 'en' ? '/en/blog' : '/blog');
</script>

<article
	class="group border-border hover:border-primary/20 border-b pb-6 transition-all duration-300 last:border-0"
>
	<div class="flex flex-col gap-5 sm:flex-row sm:items-start">
		<div class="min-w-0 flex-1">
			<h3 class="mb-2 text-xl font-semibold">
				<a
					href="{basePath}/{post.slug}"
					class="text-foreground hover:text-primary inline-block transition-colors"
				>
					{post.title}
				</a>
			</h3>
			<div class="text-muted-foreground mb-3 flex flex-wrap items-center gap-2 text-sm">
				<time>{formatDate(post.date, locale)}</time>
				{#if post.tags && post.tags.length > 0}
					<span>•</span>
					<div class="flex flex-wrap gap-2">
						{#each post.tags as tag (tag)}
							<a
								href="{basePath}?tag={encodeURIComponent(tag)}"
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
			{#if post.description}
				<p class="text-muted-foreground leading-relaxed">{post.description}</p>
			{/if}
		</div>
		<a
			href="{basePath}/{post.slug}"
			class="order-first block sm:order-last sm:shrink-0"
			tabindex="-1"
			aria-hidden="true"
		>
			<PostCover slug={post.slug || ''} title={post.title} {locale} />
		</a>
	</div>
</article>
