<script lang="ts">
	let count = $state(0);

	function increment() {
		count++;
	}
</script>

<button
	onclick={increment}
	class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-colors"
>
	<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
	</svg>
	<span>Clicks: {count}</span>
</button>
