<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Sobre mí"
	description="Full-stack engineer con ~6 años de experiencia. Actualmente en myflorie.com, buscando mi próximo rol remoto."
/>

<div class="content-container py-16 lg:py-24">
	<article class="mx-auto max-w-4xl">
		<header class="mb-12">
			<h1 class="text-foreground mb-6 text-4xl font-bold lg:text-5xl">Sobre mí</h1>
			<p class="text-muted-foreground text-xl">
				Full-stack engineer con ~6 años de experiencia. <br />
				Actualmente en myflorie.com, buscando mi próximo rol remoto.
			</p>
		</header>

		<section class="mb-12">
			<h2 class="mb-6 text-xl font-semibold">Experiencia</h2>
			<div class="space-y-6">
				<div class="border-border rounded-lg border p-6">
					<div class="mb-1 flex items-start justify-between gap-4">
						<h3 class="text-foreground font-semibold">Full-Stack Engineer — myflorie.com</h3>
						<span class="text-muted-foreground shrink-0 text-sm">2022 – presente</span>
					</div>
					<div class="mt-3 space-y-2">
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">SvelteKit + TypeScript en frontend, Nest.js en backend — transición desde Vue</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">Integración con FHIR / eClinicalWorks para registros médicos electrónicos</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">Lideré migración de app nativa a Flutter</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">Equipo remoto pequeño, mayoría en Europa</span>
						</div>
					</div>
				</div>

				<div class="border-border rounded-lg border p-6">
					<div class="mb-1 flex items-start justify-between gap-4">
						<h3 class="text-foreground font-semibold">Full-Stack Engineer — roles anteriores</h3>
						<span class="text-muted-foreground shrink-0 text-sm">2019 – 2022</span>
					</div>
					<div class="mt-3 space-y-2">
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">React + Redux en aplicaciones web</span>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-primary mt-1">→</span>
							<span class="text-muted-foreground text-sm">Desarrollo móvil con Flutter</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-4 text-xl font-semibold">Stack principal</h2>
				<div class="space-y-3">
					<div class="flex items-center gap-3">
						<span class="text-primary">→</span>
						<span class="text-muted-foreground">SvelteKit + TypeScript</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">→</span>
						<span class="text-muted-foreground">React + Redux</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">→</span>
						<span class="text-muted-foreground">Nest.js / Node.js</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">→</span>
						<span class="text-muted-foreground">Flutter (mobile)</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">→</span>
						<span class="text-muted-foreground">SQLite / Supabase / Convex</span>
					</div>
				</div>
			</div>

			<div>
				<h2 class="mb-4 text-xl font-semibold">Actualmente</h2>
				<div class="space-y-3">
					<div class="flex items-center gap-3">
						<span class="text-primary">•</span>
						<span class="text-muted-foreground">Open to remote senior full-stack roles</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">•</span>
						<span class="text-muted-foreground">Building side projects: Ganafy, TotalWA</span>
					</div>
					<div class="flex items-center gap-3">
						<span class="text-primary">•</span>
						<span class="text-muted-foreground">Escribiendo sobre SvelteKit, LLMs y SaaS</span>
					</div>
				</div>
			</div>
		</div>

		<section>
			<h2 class="mb-6 text-xl font-semibold">Conecta conmigo</h2>
			<div class="flex flex-wrap gap-4">
				<a
					href="https://www.linkedin.com/in/edzzn/"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
					LinkedIn
				</a>
				<a
					href="https://github.com/edzzn"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
				<a
					href="https://x.com/edzznr"
					target="_blank"
					rel="noopener noreferrer"
					class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200"
				>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
						/>
					</svg>
					Twitter
				</a>
				<a
					href="/cv.pdf"
					target="_blank"
					class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
					</svg>
					Descargar CV
				</a>
			</div>
		</section>
	</article>
</div>
