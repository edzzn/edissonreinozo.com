<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="About me"
	description="Senior full-stack engineer with ~6 years of experience, including 3+ at Florie. SvelteKit, Nest.js, Flutter, and complex healthcare integrations. Open to remote roles."
	locale="en"
	alternatePath="/sobre-mi"
/>

<div class="content-container py-16 lg:py-24">
	<article class="mx-auto max-w-4xl">
		<header class="mb-12">
			<h1 class="text-foreground mb-6 text-4xl font-bold lg:text-5xl">About me</h1>
			<p class="text-muted-foreground text-xl">
				Senior full-stack engineer with ~6 years of experience, including the last 3+ at Florie.
				<br />Currently looking for my next remote role.
			</p>
			<p class="text-muted-foreground mt-6 leading-relaxed">
				I work end to end—from backend logic to frontend and mobile with Flutter. I built a strong
				foundation in React/Redux and Vue on earlier projects, and today I work primarily with
				SvelteKit and Nest.js. I’m comfortable owning features from concept to production in small,
				remote teams and shipping in short cycles. I also have experience with complex healthcare
				integrations (FHIR/ECW) and leading technical transitions from Vue to SvelteKit and native
				mobile to Flutter.
			</p>
		</header>

		<section class="mb-12">
			<h2 class="mb-6 text-xl font-semibold">Experience</h2>
			<div class="space-y-6">
				<div class="border-border rounded-lg border p-6">
					<div class="mb-1 flex items-start justify-between gap-4">
						<h3 class="text-foreground font-semibold">Full-Stack Engineer — myflorie.com</h3>
						<span class="text-muted-foreground shrink-0 text-sm">2022 – present</span>
					</div>
					<div class="mt-3 space-y-2">
						{#each ['SvelteKit + TypeScript on the frontend and Nest.js on the backend—transitioning from Vue', 'FHIR / eClinicalWorks integration for electronic health records', 'Led the migration from native mobile apps to Flutter', 'End-to-end feature ownership, from concept to production in short cycles', 'Small remote team, mostly based in Europe'] as item (item)}
							<div class="flex items-start gap-3">
								<span class="text-primary mt-1">→</span>
								<span class="text-muted-foreground text-sm">{item}</span>
							</div>
						{/each}
					</div>
				</div>

				<div class="border-border rounded-lg border p-6">
					<div class="mb-1 flex items-start justify-between gap-4">
						<h3 class="text-foreground font-semibold">Full-Stack Engineer — previous roles</h3>
						<span class="text-muted-foreground shrink-0 text-sm">2019 – 2022</span>
					</div>
					<div class="mt-3 space-y-2">
						{#each ['React + Redux web applications', 'Mobile development with Flutter'] as item (item)}
							<div class="flex items-start gap-3">
								<span class="text-primary mt-1">→</span>
								<span class="text-muted-foreground text-sm">{item}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<div class="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<h2 class="mb-4 text-xl font-semibold">Core stack</h2>
				<div class="space-y-3">
					{#each ['SvelteKit + TypeScript', 'React + Redux', 'Nest.js / Node.js', 'Flutter (mobile)', 'SQLite / Supabase / Convex'] as item (item)}
						<div class="flex items-center gap-3">
							<span class="text-primary">→</span>
							<span class="text-muted-foreground">{item}</span>
						</div>
					{/each}
				</div>
			</div>

			<div>
				<h2 class="mb-4 text-xl font-semibold">Currently</h2>
				<div class="space-y-3">
					{#each ['Open to remote senior full-stack roles', 'Building side projects: Ganafy, TotalWA', 'Writing about SvelteKit, LLMs, and SaaS'] as item (item)}
						<div class="flex items-center gap-3">
							<span class="text-primary">•</span>
							<span class="text-muted-foreground">{item}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<section>
			<h2 class="mb-6 text-xl font-semibold">Connect with me</h2>
			<div class="flex flex-wrap gap-4">
				{#each [{ href: 'https://www.linkedin.com/in/edzzn/', label: 'LinkedIn' }, { href: 'https://github.com/edzzn', label: 'GitHub' }, { href: 'https://x.com/edzznr', label: 'Twitter' }] as link (link.href)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center rounded-lg px-4 py-2 transition-all duration-200"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/cv.pdf"
					target="_blank"
					class="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center rounded-lg px-4 py-2 transition-all duration-200"
				>
					Download CV
				</a>
			</div>
		</section>
	</article>
</div>
