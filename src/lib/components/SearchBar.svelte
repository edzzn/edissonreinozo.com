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
		class="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#663399] focus:ring-1 focus:ring-[#663399]"
	/>
	<div class="absolute inset-y-0 left-0 flex items-center pl-3">
		<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
		</svg>
	</div>
	{#if value}
		<button
			type="button"
			onclick={() => value = ''}
			class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
		>
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
			</svg>
		</button>
	{/if}
</div>