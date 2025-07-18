<script lang="ts">
	let { 
		tags = [], 
		selectedTags = $bindable([]),
		tagCounts = {}
	} = $props<{
		tags?: string[];
		selectedTags?: string[];
		tagCounts?: Record<string, number>;
	}>();
	
	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter(t => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}
</script>

<div class="space-y-3">
	<h3 class="font-semibold text-gray-900">Etiquetas</h3>
	<div class="space-y-2">
		{#each tags as tag}
			<button
				type="button"
				onclick={() => toggleTag(tag)}
				class="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors
					{selectedTags.includes(tag) 
						? 'bg-[#663399] text-white' 
						: 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
			>
				<span>#{tag}</span>
				{#if tagCounts[tag]}
					<span class="ml-2 text-xs {selectedTags.includes(tag) ? 'text-purple-100' : 'text-gray-500'}">
						({tagCounts[tag]})
					</span>
				{/if}
			</button>
		{/each}
	</div>
	
	{#if selectedTags.length > 0}
		<button
			type="button"
			onclick={() => selectedTags = []}
			class="text-sm text-[#663399] hover:text-purple-800"
		>
			Limpiar filtros
		</button>
	{/if}
</div>