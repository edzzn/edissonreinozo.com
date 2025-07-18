<script lang="ts">
	import type { Post } from '$lib/types';
	import SEO from '$lib/components/SEO.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import TagFilter from '$lib/components/TagFilter.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let { data } = $props<{
		data: {
			posts: Post[];
			tags: string[];
			tagCounts: Record<string, number>;
			postsByYear: Record<string, Post[]>;
			searchQuery: string;
			selectedTag: string;
		};
	}>();

	let searchTerm = $state(data.searchQuery);
	let selectedTags = $state(data.selectedTag ? [data.selectedTag] : []);
	let showMobileFilters = $state(false);

	// Filtrar posts reactivamente
	const filteredPosts = $derived.by(() => {
		let filtered = data.posts;

		// Filtrar por búsqueda
		if (searchTerm) {
			const term = searchTerm.toLowerCase();
			filtered = filtered.filter(
				(post) =>
					post.title.toLowerCase().includes(term) ||
					post.description?.toLowerCase().includes(term) ||
					post.tags?.some((tag) => tag.toLowerCase().includes(term))
			);
		}

		// Filtrar por etiquetas
		if (selectedTags.length > 0) {
			filtered = filtered.filter((post) => selectedTags.every((tag) => post.tags?.includes(tag)));
		}

		return filtered;
	});

	// Actualizar URL cuando cambian los filtros
	$effect(() => {
		const params = new URLSearchParams();
		if (searchTerm) params.set('q', searchTerm);
		if (selectedTags.length > 0) params.set('tag', selectedTags[0]);

		const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog';
		if ($page.url.pathname + $page.url.search !== newUrl) {
			goto(newUrl, { replaceState: true, keepFocus: true });
		}
	});
</script>

<SEO
	title="Blog"
	description="Artículos sobre LLMs, desarrollo con SvelteKit, Supabase y emprendimiento SaaS."
/>

<div class="mx-auto max-w-7xl">
	<header class="mb-8">
		<h1 class="text-foreground mb-4 text-4xl font-bold">Blog</h1>
		<p class="text-muted-foreground text-lg">
			Explorando la intersección entre IA, desarrollo moderno y emprendimiento.
		</p>
	</header>

	<div class="lg:grid lg:grid-cols-4 lg:gap-8">
		<!-- Sidebar de filtros (desktop) -->
		<aside class="hidden lg:col-span-1 lg:block">
			<div class="sticky top-4 space-y-6">
				<SearchBar bind:value={searchTerm} />

				<TagFilter tags={data.tags} bind:selectedTags tagCounts={data.tagCounts} />

				<!-- Estadísticas -->
				<div class="bg-muted rounded-lg p-4 text-sm">
					<p class="text-muted-foreground">
						<span class="text-foreground font-semibold">{data.posts.length}</span> artículos publicados
					</p>
					<p class="text-muted-foreground mt-1">
						<span class="text-foreground font-semibold">{data.tags.length}</span> etiquetas
					</p>
				</div>
			</div>
		</aside>

		<!-- Contenido principal -->
		<main class="lg:col-span-3">
			<!-- Controles móviles -->
			<div class="mb-6 space-y-4 lg:hidden">
				<SearchBar bind:value={searchTerm} />

				<button
					type="button"
					onclick={() => (showMobileFilters = !showMobileFilters)}
					class="text-muted-foreground bg-background border-border hover:bg-muted flex w-full items-center justify-between rounded-lg border px-4 py-2 text-sm font-medium"
				>
					<span>Filtros</span>
					<svg
						class="h-5 w-5 transform transition-transform {showMobileFilters ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</button>

				{#if showMobileFilters}
					<div class="bg-muted rounded-lg p-4">
						<TagFilter tags={data.tags} bind:selectedTags tagCounts={data.tagCounts} />
					</div>
				{/if}
			</div>

			<!-- Filtros activos -->
			{#if searchTerm || selectedTags.length > 0}
				<div class="mb-6 flex flex-wrap items-center gap-2">
					<span class="text-muted-foreground text-sm">Filtros activos:</span>

					{#if searchTerm}
						<button
							type="button"
							onclick={() => (searchTerm = '')}
							class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm"
						>
							<span>"{searchTerm}"</span>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					{/if}

					{#each selectedTags as tag}
						<button
							type="button"
							onclick={() => (selectedTags = selectedTags.filter((t) => t !== tag))}
							class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm"
						>
							<span>#{tag}</span>
							<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					{/each}

					<button
						type="button"
						onclick={() => {
							searchTerm = '';
							selectedTags = [];
						}}
						class="text-primary hover:text-primary/80 text-sm"
					>
						Limpiar todo
					</button>
				</div>
			{/if}

			<!-- Contador de resultados -->
			<div class="text-muted-foreground mb-6 text-sm">
				Mostrando <span class="text-foreground font-semibold">{filteredPosts.length}</span>
				de <span class="text-foreground font-semibold">{data.posts.length}</span> artículos
			</div>

			<!-- Lista de artículos -->
			{#if filteredPosts.length > 0}
				<div class="space-y-6">
					{#each filteredPosts as post}
						<PostCard {post} />
					{/each}
				</div>
			{:else}
				<div class="py-12 text-center">
					<svg
						class="text-muted-foreground mx-auto h-12 w-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<h3 class="text-foreground mt-2 text-sm font-medium">No se encontraron artículos</h3>
					<p class="text-muted-foreground mt-1 text-sm">
						Intenta ajustar los filtros o términos de búsqueda.
					</p>
					<button
						type="button"
						onclick={() => {
							searchTerm = '';
							selectedTags = [];
						}}
						class="text-primary hover:text-primary/80 mt-4 text-sm"
					>
						Limpiar filtros
					</button>
				</div>
			{/if}
		</main>
	</div>
</div>
