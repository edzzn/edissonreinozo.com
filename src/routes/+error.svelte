<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
	title="Página no encontrada"
	description="La página que buscas no existe."
/>

<div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
	<h1 class="text-6xl font-bold text-primary mb-4">404</h1>
	<h2 class="text-2xl font-semibold text-foreground mb-4">Página no encontrada</h2>
	<p class="text-muted-foreground mb-8">
		Lo siento, la página que buscas no existe o ha sido movida.
	</p>
	<a 
		href="/" 
		class="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
	>
		Volver al inicio
	</a>
</div>