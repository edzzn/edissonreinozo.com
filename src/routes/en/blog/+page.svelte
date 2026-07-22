<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import type { Post } from '$lib/types';
	import SEO from '$lib/components/SEO.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import PostCard from '$lib/components/PostCard.svelte';

	let { data } = $props<{
		data: {
			posts: Post[];
			tags: string[];
			tagCounts: Record<string, number>;
			searchQuery: string;
			selectedTag: string;
		};
	}>();

	let searchTerm = $state(data.searchQuery);
	let selectedTags = $state(data.selectedTag ? [data.selectedTag] : []);
	let showMobileFilters = $state(false);

	let filteredPosts = $derived.by(() => {
		let filtered = data.posts;
		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(post: Post) =>
					post.title.toLowerCase().includes(term) ||
					post.description?.toLowerCase().includes(term) ||
					post.tags?.some((tag: string) => tag.toLowerCase().includes(term))
			);
		}
		if (selectedTags.length > 0) {
			filtered = filtered.filter((post: Post) =>
				selectedTags.every((tag) => post.tags?.includes(tag))
			);
		}
		return filtered;
	});

	$effect(() => {
		const params = new SvelteURLSearchParams();
		if (searchTerm) params.set('q', searchTerm);
		if (selectedTags.length) params.set('tag', selectedTags[0]);
		const newUrl = params.size ? `/en/blog?${params}` : '/en/blog';
		if ($page.url.pathname + $page.url.search !== newUrl) {
			goto(newUrl, { replaceState: true, keepFocus: true });
		}
	});

	function clearFilters() {
		searchTerm = '';
		selectedTags = [];
	}
</script>

<SEO
	title="Blog"
	description="Articles about LLMs, SvelteKit development, Supabase, and building SaaS products."
	locale="en"
	alternatePath="/blog"
/>

<div class="mx-auto max-w-7xl">
	<header class="mb-8">
		<h1 class="text-foreground mb-4 text-4xl font-bold">Blog</h1>
		<p class="text-muted-foreground text-lg">
			Exploring the intersection of AI, modern software development, and entrepreneurship.
		</p>
	</header>

	<div class="lg:grid lg:grid-cols-4 lg:gap-8">
		<aside class="hidden lg:col-span-1 lg:block">
			<div class="sticky top-20 space-y-6">
				<SearchBar bind:value={searchTerm} placeholder="Search articles..." locale="en" />
				<TagFilter tags={data.tags} bind:selectedTags tagCounts={data.tagCounts} locale="en" />
				<div class="bg-muted rounded-lg p-4 text-sm">
					<p class="text-muted-foreground">
						<span class="text-foreground font-semibold">{data.posts.length}</span> published articles
					</p>
					<p class="text-muted-foreground mt-1">
						<span class="text-foreground font-semibold">{data.tags.length}</span> tags
					</p>
				</div>
			</div>
		</aside>

		<main class="lg:col-span-3">
			<div class="mb-6 space-y-4 lg:hidden">
				<SearchBar bind:value={searchTerm} placeholder="Search articles..." locale="en" />
				<button
					type="button"
					onclick={() => (showMobileFilters = !showMobileFilters)}
					class="text-muted-foreground bg-background border-border hover:bg-muted flex w-full items-center justify-between rounded-lg border px-4 py-2 text-sm font-medium"
				>
					<span>Filters</span><span aria-hidden="true">{showMobileFilters ? '−' : '+'}</span>
				</button>
				{#if showMobileFilters}
					<div class="bg-muted rounded-lg p-4">
						<TagFilter tags={data.tags} bind:selectedTags tagCounts={data.tagCounts} locale="en" />
					</div>
				{/if}
			</div>

			{#if searchTerm || selectedTags.length > 0}
				<div class="mb-6 flex flex-wrap items-center gap-2">
					<span class="text-muted-foreground text-sm">Active filters:</span>
					{#if searchTerm}
						<button
							type="button"
							onclick={() => (searchTerm = '')}
							class="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm"
						>
							“{searchTerm}” ×
						</button>
					{/if}
					{#each selectedTags as tag (tag)}
						<button
							type="button"
							onclick={() => (selectedTags = selectedTags.filter((item) => item !== tag))}
							class="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm"
						>
							#{tag} ×
						</button>
					{/each}
					<button type="button" onclick={clearFilters} class="text-primary text-sm"
						>Clear all</button
					>
				</div>
			{/if}

			<p class="text-muted-foreground mb-6 text-sm">
				Showing <span class="text-foreground font-semibold">{filteredPosts.length}</span> of
				<span class="text-foreground font-semibold">{data.posts.length}</span> articles
			</p>

			{#if filteredPosts.length > 0}
				<div class="space-y-6">
					{#each filteredPosts as post (post.slug)}
						<PostCard {post} locale="en" />
					{/each}
				</div>
			{:else}
				<div class="py-12 text-center">
					<h2 class="text-foreground font-medium">No articles found</h2>
					<p class="text-muted-foreground mt-1 text-sm">Try changing your search or filters.</p>
					<button type="button" onclick={clearFilters} class="text-primary mt-4 text-sm">
						Clear filters
					</button>
				</div>
			{/if}
		</main>
	</div>
</div>
