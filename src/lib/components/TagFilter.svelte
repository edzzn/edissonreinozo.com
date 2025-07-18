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
	<h3 class="font-semibold text-foreground">Etiquetas</h3>
	<div class="space-y-2">
		{#each tags as tag}
			<button
				type="button"
				onclick={() => toggleTag(tag)}
				class="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors
					{selectedTags.includes(tag) 
						? 'bg-primary text-primary-foreground' 
						: 'bg-muted text-muted-foreground hover:bg-muted/80'}"
			>
				<span>#{tag}</span>
				{#if tagCounts[tag]}
					<span class="ml-2 text-xs {selectedTags.includes(tag) ? 'text-primary-foreground/80' : 'text-muted-foreground'}">
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
			class="text-sm text-primary hover:text-primary/80"
		>
			Limpiar filtros
		</button>
	{/if}
</div>