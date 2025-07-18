<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	
	let { post } = $props<{ post: Post }>();
</script>

<article class="group border-b border-border pb-6 last:border-0 hover:border-primary/20 transition-all duration-300">
	<h3 class="text-xl font-semibold mb-2">
		<a 
			href="/blog/{post.slug}" 
			class="text-foreground hover:text-primary transition-colors inline-block"
		>
			{post.title}
		</a>
	</h3>
	<div class="flex items-center gap-2 text-sm text-muted-foreground mb-3">
		<time>{formatDate(post.date)}</time>
		{#if post.tags && post.tags.length > 0}
			<span>•</span>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
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
	{#if post.description}
		<p class="text-muted-foreground leading-relaxed">{post.description}</p>
	{/if}
</article>