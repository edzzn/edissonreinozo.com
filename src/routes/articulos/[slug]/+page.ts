import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    error(404, `No se encontró el artículo: ${params.slug}`);
  }
};

export const prerender = true;