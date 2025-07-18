<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	let { post } = $props<{ post: Post }>();
</script>

<article
	class="group border-border hover:border-primary/20 border-b pb-6 transition-all duration-300 last:border-0"
>
	<h3 class="mb-2 text-xl font-semibold">
		<a
			href="/blog/{post.slug}"
			class="text-foreground hover:text-primary inline-block transition-colors"
		>
			{post.title}
		</a>
	</h3>
	<div class="text-muted-foreground mb-3 flex items-center gap-2 text-sm">
		<time>{formatDate(post.date)}</time>
		{#if post.tags && post.tags.length > 0}
			<span>•</span>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
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
	{#if post.description}
		<p class="text-muted-foreground leading-relaxed">{post.description}</p>
	{/if}
</article>
