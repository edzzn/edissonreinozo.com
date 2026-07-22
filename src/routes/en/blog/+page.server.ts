import type { Post } from '$lib/types';

export async function load({ url }) {
	const posts = import.meta.glob('/src/posts/en/*.md', { eager: true });
	const searchQuery = url.searchParams.get('q') || '';
	const selectedTag = url.searchParams.get('tag') || '';

	const allPosts = Object.entries(posts)
		.map(([path, module]) => {
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			const post = module as { metadata?: Partial<Post> };
			const metadata = post.metadata || {};
			return {
				slug,
				title: metadata.title || 'Untitled',
				date: metadata.date || '',
				description: metadata.description || '',
				published: metadata.published !== false,
				tags: metadata.tags || []
			} satisfies Post;
		})
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const tagCounts: Record<string, number> = {};
	const allTags = new Set<string>();
	allPosts.forEach((post) =>
		post.tags?.forEach((tag) => {
			allTags.add(tag);
			tagCounts[tag] = (tagCounts[tag] || 0) + 1;
		})
	);

	return {
		posts: allPosts,
		tags: Array.from(allTags).sort(),
		tagCounts,
		searchQuery,
		selectedTag
	};
}

export const prerender = false;
