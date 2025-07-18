<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="Página no encontrada" description="La página que buscas no existe." />

<div class="flex min-h-[60vh] flex-col items-center justify-center text-center">
	<h1 class="text-primary mb-4 text-6xl font-bold">404</h1>
	<h2 class="text-foreground mb-4 text-2xl font-semibold">Página no encontrada</h2>
	<p class="text-muted-foreground mb-8">
		Lo siento, la página que buscas no existe o ha sido movida.
	</p>
	<a
		href="/"
		class="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 transition-colors"
	>
		Volver al inicio
	</a>
</div>
