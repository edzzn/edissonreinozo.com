import type { Post } from '$lib/types';

export async function load() {
  const posts = import.meta.glob('/src/posts/*.md', { eager: true });
  
  const processedPosts = Object.entries(posts)
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
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  return {
    posts: processedPosts
  };
}

export const prerender = true;