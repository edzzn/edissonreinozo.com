<script lang="ts">
	let {
		title = 'Edisson Reinozo | LLMs, SvelteKit y SaaS',
		description = 'Explorando LLMs, desarrollo con SvelteKit y emprendimiento SaaS.',
		url = '',
		image = ''
	} = $props<{
		title?: string;
		description?: string;
		url?: string;
		image?: string;
	}>();
	
	const siteTitle = 'Edisson Reinozo | LLMs, SvelteKit y SaaS';
	const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	
	<!-- Open Graph -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if url}
		<meta property="og:url" content={url} />
	{/if}
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}
</svelte:head>