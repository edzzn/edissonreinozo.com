<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import SEO from '$lib/components/SEO.svelte';
	
	let { data } = $props<{ data: { posts: Post[] } }>();
	
	const { posts } = data;
</script>

<SEO />

<div class="space-y-8">
	<section>
		<h1 class="text-4xl font-bold text-gray-900 mb-4">¡Hola! 👋</h1>
		<p class="text-lg text-gray-600">
			Bienvenido a mi blog. Aquí comparto mis experiencias con React, Flutter y AWS.
		</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-gray-800 mb-6">Artículos</h2>
		
		{#if posts.length > 0}
			<div class="space-y-6">
				{#each posts as post}
					<article class="border-b border-gray-200 pb-6 last:border-0">
						<h3 class="text-xl font-semibold mb-2">
							<a 
								href="/articulos/{post.slug}" 
								class="text-[#663399] hover:text-purple-800 transition-colors"
							>
								{post.title}
							</a>
						</h3>
						<time class="text-sm text-gray-500">{formatDate(post.date)}</time>
						{#if post.description}
							<p class="mt-2 text-gray-600">{post.description}</p>
						{/if}
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-gray-500">No hay artículos publicados todavía.</p>
		{/if}
	</section>
</div>
