<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	
	let { post } = $props<{ post: Post }>();
</script>

<article class="border-b border-gray-200 pb-6 last:border-0">
	<h3 class="text-xl font-semibold mb-2">
		<a 
			href="/articulos/{post.slug}" 
			class="text-[#663399] hover:text-purple-800 transition-colors"
		>
			{post.title}
		</a>
	</h3>
	<div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
		<time>{formatDate(post.date)}</time>
		{#if post.tags && post.tags.length > 0}
			<span>•</span>
			<div class="flex flex-wrap gap-2">
				{#each post.tags as tag}
					<button 
						type="button"
						class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs hover:bg-gray-200 transition-colors"
						onclick={() => window.location.href = `/articulos?tag=${encodeURIComponent(tag)}`}
					>
						#{tag}
					</button>
				{/each}
			</div>
		{/if}
	</div>
	{#if post.description}
		<p class="text-gray-600">{post.description}</p>
	{/if}
</article>