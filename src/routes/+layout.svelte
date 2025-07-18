<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<ModeWatcher />

<div class="min-h-screen flex flex-col">
	<Header />
	
	<main class="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
		{@render children()}
	</main>
	
	<Footer />
</div>
