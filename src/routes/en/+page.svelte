<script lang="ts">
	import type { Post } from '$lib/types';
	import SEO from '$lib/components/SEO.svelte';
	import PostCard from '$lib/components/PostCard.svelte';

	let { data } = $props<{ data: { posts: Post[] } }>();
	const { posts } = data;
</script>

<SEO
	title="Edisson Reinozo | Senior Full-Stack Engineer"
	description="Full-stack engineer with ~6 years of experience building end-to-end web products with SvelteKit, Nest.js, and Flutter. Open to remote senior roles."
	locale="en"
	alternatePath="/"
/>

<div class="content-container">
	<section class="py-16 lg:py-24">
		<h1 class="text-foreground text-gradient mb-6 text-4xl font-bold lg:text-5xl">
			Hi, I’m Edisson Reinozo
		</h1>
		<p class="text-muted-foreground mb-4 max-w-3xl text-lg leading-relaxed lg:text-xl">
			I’m a full-stack engineer with ~6 years of experience, including the last 3+ at myflorie.com
			building products with SvelteKit, TypeScript, and Nest.js. I work across backend, frontend,
			and mobile with Flutter, and thrive in small remote teams where I can take features from idea
			to production in short cycles.
		</p>
		<p class="text-primary mb-8 font-medium">Open to remote senior roles.</p>
		<div class="flex flex-wrap gap-4">
			<a
				href="/en/about"
				class="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200"
			>
				About me →
			</a>
		</div>
	</section>

	<section class="pb-16 lg:pb-24">
		<div class="mb-8 flex items-center justify-between">
			<h2 class="text-foreground text-2xl font-semibold lg:text-3xl">Articles</h2>
			{#if posts.length > 5}
				<a href="/en/blog" class="text-primary hover:text-primary/80 text-sm font-medium">
					View all →
				</a>
			{/if}
		</div>

		{#if posts.length > 0}
			<div class="space-y-8">
				{#each posts.slice(0, 5) as post (post.slug)}
					<PostCard {post} locale="en" />
				{/each}
			</div>
		{:else}
			<div class="bg-muted/30 rounded-lg py-12 text-center">
				<p class="text-muted-foreground">No articles have been published yet.</p>
			</div>
		{/if}
	</section>
</div>
