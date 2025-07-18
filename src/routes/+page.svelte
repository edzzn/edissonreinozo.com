<script lang="ts">
	import type { Post } from '$lib/types';
	import SEO from '$lib/components/SEO.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	
	let { data } = $props<{ data: { posts: Post[] } }>();
	
	const { posts } = data;
</script>

<SEO />

<div class="content-container">
	<section class="py-16 lg:py-24">
		<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-gradient">
			¡Hola! 👋
		</h1>
		<p class="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
			Bienvenido. Aquí exploro la intersección entre LLMs, desarrollo moderno con SvelteKit y el emprendimiento SaaS.
		</p>
	</section>

	<section class="pb-16 lg:pb-24">
		<div class="flex items-center justify-between mb-8">
			<h2 class="text-2xl lg:text-3xl font-semibold text-foreground">Artículos</h2>
			{#if posts.length > 5}
				<a 
					href="/blog" 
					class="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
				>
					Ver todos →
				</a>
			{/if}
		</div>
		
		{#if posts.length > 0}
			<div class="space-y-8">
				{#each posts.slice(0, 5) as post}
					<PostCard {post} />
				{/each}
			</div>
			
			{#if posts.length > 5}
				<div class="mt-12 text-center">
					<a 
						href="/blog" 
						class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
						       rounded-lg hover:bg-primary/90 transition-all duration-200 hover-lift font-medium"
					>
						Ver todos los artículos
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</a>
				</div>
			{/if}
		{:else}
			<div class="text-center py-12 bg-muted/30 rounded-lg">
				<svg class="mx-auto h-12 w-12 text-muted-foreground mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
				</svg>
				<p class="text-muted-foreground">No hay artículos publicados todavía.</p>
			</div>
		{/if}
	</section>
</div>