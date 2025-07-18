import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['github-dark', 'github-light'],
				langs: ['javascript', 'typescript', 'python', 'jsx', 'tsx', 'css', 'html', 'bash', 'json', 'dart', 'yaml']
			});
			
			const darkHtml = highlighter.codeToHtml(code, {
				lang,
				theme: 'github-dark'
			});
			
			const lightHtml = highlighter.codeToHtml(code, {
				lang,
				theme: 'github-light'
			});
			
			// Escape curly braces for Svelte
			const escapedLightHtml = lightHtml.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
			const escapedDarkHtml = darkHtml.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
			
			return `<div class="code-block dark:hidden">${escapedLightHtml}</div><div class="code-block hidden dark:block">${escapedDarkHtml}</div>`;
		}
	},
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions)
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;
