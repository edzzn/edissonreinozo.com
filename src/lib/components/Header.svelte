<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { localizedPath } from '$lib/utils';
	import ThemeToggle from './ThemeToggle.svelte';

	let { title = 'Edisson Reinozo' } = $props<{
		title?: string;
	}>();

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let isEnglish = $derived($page.url.pathname === '/en' || $page.url.pathname.startsWith('/en/'));
	let locale = $derived(isEnglish ? 'en' : 'es');
	let pageAlternatePath = $derived(($page.data as { alternatePath?: string }).alternatePath);
	let languageHref = $derived(
		pageAlternatePath || localizedPath($page.url.pathname, isEnglish ? 'es' : 'en')
	);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	let navLinks = $derived(
		isEnglish
			? [
					{ href: '/en', label: 'Home' },
					{ href: '/en/blog', label: 'Blog' },
					{ href: '/en/about', label: 'About' },
					{ href: '/en/contact', label: 'Contact' }
				]
			: [
					{ href: '/', label: 'Inicio' },
					{ href: '/blog', label: 'Blog' },
					{ href: '/sobre-mi', label: 'Sobre mí' },
					{ href: '/contacto', label: 'Contacto' }
				]
	);
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300
         {scrolled ? 'bg-background/80 shadow-sm backdrop-blur-md' : 'bg-background'}"
>
	<nav class="content-container">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="text-foreground hover:text-primary text-xl font-semibold transition-colors"
			>
				{title}
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center gap-8 md:flex">
				<ul class="flex items-center gap-8">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="text-muted-foreground hover:text-foreground group relative
                       text-sm font-medium transition-colors"
							>
								{link.label}
								<span
									class="bg-primary absolute -bottom-1 left-0 h-0.5 w-0
                           transition-all duration-300 group-hover:w-full"
								></span>
							</a>
						</li>
					{/each}
				</ul>
				<a
					href={languageHref}
					hreflang={isEnglish ? 'es' : 'en'}
					lang={isEnglish ? 'es' : 'en'}
					class="border-border text-muted-foreground hover:border-primary hover:text-primary rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors"
					aria-label={isEnglish ? 'Ver sitio en español' : 'View site in English'}
				>
					{isEnglish ? 'ES' : 'EN'}
				</a>
				<ThemeToggle />
			</div>

			<!-- Mobile Menu Button and Theme Toggle -->
			<div class="flex items-center gap-3 md:hidden">
				<a
					href={languageHref}
					hreflang={isEnglish ? 'es' : 'en'}
					lang={isEnglish ? 'es' : 'en'}
					class="border-border text-muted-foreground hover:text-primary rounded-full border px-2.5 py-1 text-xs font-semibold"
					aria-label={isEnglish ? 'Ver sitio en español' : 'View site in English'}
				>
					{isEnglish ? 'ES' : 'EN'}
				</a>
				<ThemeToggle />
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="text-foreground hover:text-primary -mr-2 p-2 transition-colors"
					aria-label={locale === 'en' ? 'Toggle menu' : 'Abrir o cerrar menú'}
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="border-border border-t py-4 md:hidden">
				<ul class="space-y-3">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								onclick={() => (mobileMenuOpen = false)}
								class="text-muted-foreground hover:text-foreground block py-2 text-sm
                       font-medium transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</nav>
</header>

<!-- Spacer for fixed header -->
<div class="h-16"></div>
