<script lang="ts">
	let { value = $bindable(''), placeholder = 'Buscar artículos...' } = $props<{
		value?: string;
		placeholder?: string;
	}>();
</script>

<div class="relative">
	<input
		type="search"
		bind:value
		{placeholder}
		class="text-foreground bg-background border-border focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-2 pr-4 pl-10 focus:ring-1 focus:outline-none"
	/>
	<div class="absolute inset-y-0 left-0 flex items-center pl-3">
		<svg
			class="text-muted-foreground h-5 w-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			></path>
		</svg>
	</div>
	{#if value}
		<button
			type="button"
			onclick={() => (value = '')}
			class="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3"
			aria-label="Clear search"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				></path>
			</svg>
		</button>
	{/if}
</div>
