import type { Post } from '$lib/types';

export async function load({ url }) {
	const posts = import.meta.glob('/src/posts/*.md', { eager: true });

	// Obtener parámetros de búsqueda de la URL
	const searchQuery = url.searchParams.get('q') || '';
	const selectedTag = url.searchParams.get('tag') || '';

	const allPosts = Object.entries(posts)
		.map(([path, module]) => {
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			const post = module as any;
			const metadata = post.metadata || {};

			return {
				slug,
				title: metadata.title || 'Sin título',
				date: metadata.date || '',
				description: metadata.description || '',
				published: metadata.published !== false,
				tags: metadata.tags || []
			} satisfies Post;
		})
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	// Obtener todas las etiquetas únicas y sus conteos
	const tagCounts: Record<string, number> = {};
	const allTags = new Set<string>();

	allPosts.forEach((post) => {
		post.tags?.forEach((tag: string) => {
			allTags.add(tag);
			tagCounts[tag] = (tagCounts[tag] || 0) + 1;
		});
	});

	// Ordenar etiquetas alfabéticamente
	const tags = Array.from(allTags).sort();

	// Agrupar posts por año
	const postsByYear: Record<string, Post[]> = {};
	allPosts.forEach((post) => {
		const year = new Date(post.date).getFullYear().toString();
		if (!postsByYear[year]) {
			postsByYear[year] = [];
		}
		postsByYear[year].push(post);
	});

	return {
		posts: allPosts,
		tags,
		tagCounts,
		postsByYear,
		searchQuery,
		selectedTag
	};
}

export const prerender = false; // Desactivar prerendering para permitir búsqueda dinámica
