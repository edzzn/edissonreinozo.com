<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
	let isEnglish = $derived($page.url.pathname === '/en' || $page.url.pathname.startsWith('/en/'));
</script>

<SEO
	title={isEnglish ? 'Page not found' : 'Página no encontrada'}
	description={isEnglish
		? 'The page you are looking for does not exist.'
		: 'La página que buscas no existe.'}
	locale={isEnglish ? 'en' : 'es'}
/>

<div class="flex min-h-[60vh] flex-col items-center justify-center text-center">
	<h1 class="text-primary mb-4 text-6xl font-bold">404</h1>
	<h2 class="text-foreground mb-4 text-2xl font-semibold">
		{isEnglish ? 'Page not found' : 'Página no encontrada'}
	</h2>
	<p class="text-muted-foreground mb-8">
		{isEnglish
			? 'Sorry, the page you are looking for does not exist or has been moved.'
			: 'Lo siento, la página que buscas no existe o ha sido movida.'}
	</p>
	<a
		href={isEnglish ? '/en' : '/'}
		class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 transition-colors"
	>
		{isEnglish ? 'Back to home' : 'Volver al inicio'}
	</a>
</div>
