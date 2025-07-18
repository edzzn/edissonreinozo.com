<script lang="ts">
	import type { Post } from '$lib/types';
	import SEO from '$lib/components/SEO.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	
	let { data } = $props<{ data: { posts: Post[] } }>();
	
	const { posts } = data;
</script>

<SEO />

<div class="space-y-8">
	<section>
		<h1 class="text-4xl font-bold text-foreground mb-4">¡Hola! 👋</h1>
		<p class="text-lg text-muted-foreground">
			Bienvenido a mi blog. Aquí comparto mis experiencias con React, Flutter y AWS.
		</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-foreground mb-6">Artículos</h2>
		
		{#if posts.length > 0}
			<div class="space-y-6">
				{#each posts.slice(0, 5) as post}
					<PostCard {post} />
				{/each}
			</div>
			{#if posts.length > 5}
				<div class="mt-8 text-center">
					<a 
						href="/articulos" 
						class="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
					>
						Ver todos los artículos →
					</a>
				</div>
			{/if}
		{:else}
			<p class="text-muted-foreground">No hay artículos publicados todavía.</p>
		{/if}
	</section>
</div>
