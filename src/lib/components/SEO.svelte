<script lang="ts">
	let {
		title = 'Edisson Reinozo | Senior Full-Stack Engineer',
		description = 'Full-stack engineer con ~6 años de experiencia construyendo productos web end-to-end con SvelteKit, Nest.js y Flutter. Open to remote senior roles.',
		url = '',
		image = '',
		locale = 'es',
		alternatePath = ''
	} = $props<{
		title?: string;
		description?: string;
		url?: string;
		image?: string;
		locale?: 'es' | 'en';
		alternatePath?: string;
	}>();

	const siteTitle = 'Edisson Reinozo | Senior Full-Stack Engineer';
	const fullTitle = title === siteTitle ? title : title;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_ES'} />
	{#if alternatePath}
		<link rel="alternate" hreflang={locale === 'en' ? 'es' : 'en'} href={alternatePath} />
	{/if}

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
