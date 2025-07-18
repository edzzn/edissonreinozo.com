<script lang="ts">
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
	title="Página no encontrada"
	description="La página que buscas no existe."
/>

<div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
	<h1 class="text-6xl font-bold text-[#663399] mb-4">404</h1>
	<h2 class="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</h2>
	<p class="text-gray-600 mb-8">
		Lo siento, la página que buscas no existe o ha sido movida.
	</p>
	<a 
		href="/" 
		class="bg-[#663399] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
	>
		Volver al inicio
	</a>
</div>