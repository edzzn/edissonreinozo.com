<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	
	let { post } = $props<{ post: Post }>();
</script>

<article class="border-b border-border pb-6 last:border-0">
	<h3 class="text-xl font-semibold mb-2">
		<a 
			href="/articulos/{post.slug}" 
			class="text-primary hover:text-primary/80 transition-colors"
		>
			{post.title}
		</a>
	</h3>
	<div class="flex items-center gap-2 text-sm text-muted-foreground mb-2">
		<time>{formatDate(post.date)}</time>
		{#if post.tags && post.tags.length > 0}
			<span>•</span>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<a 
						href="/articulos?tag={encodeURIComponent(tag)}"
						class="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs hover:bg-secondary/80 transition-colors"
					>
						#{tag}
					</a>
				{/each}
			</div>
		{/if}
	</div>
	{#if post.description}
		<p class="text-muted-foreground">{post.description}</p>
	{/if}
</article>