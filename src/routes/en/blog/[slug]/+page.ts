import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../../posts/en/${params.slug}.md`);
		const spanishPosts = import.meta.glob('/src/posts/*.md');
		const hasSpanishTranslation = Object.keys(spanishPosts).some((path) =>
			path.endsWith(`/${params.slug}.md`)
		);
		return {
			slug: params.slug,
			alternatePath: hasSpanishTranslation ? `/blog/${params.slug}` : '/blog',
			hasTranslation: hasSpanishTranslation,
			content: post.default,
			metadata: { ...post.metadata, tags: post.metadata?.tags || [] }
		};
	} catch {
		error(404, `Article not found: ${params.slug}`);
	}
};

export const prerender = true;
