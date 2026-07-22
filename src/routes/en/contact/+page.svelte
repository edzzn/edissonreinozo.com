<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	let email = $state('');
	let name = $state('');
	let message = $state('');
	let sending = $state(false);
	let sent = $state(false);

	async function handleSubmit(event: Event) {
		event.preventDefault();
		sending = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		sending = false;
		sent = true;
		email = '';
		name = '';
		message = '';
		setTimeout(() => (sent = false), 5000);
	}

	const contactLinks = [
		{ href: 'mailto:edisson@punto593.com', title: 'Email', value: 'edisson@punto593.com' },
		{
			href: 'https://www.linkedin.com/in/edzzn/',
			title: 'LinkedIn',
			value: 'linkedin.com/in/edzzn'
		},
		{ href: 'https://x.com/edzznr', title: 'Twitter', value: '@edzznr' },
		{ href: 'https://github.com/edzzn', title: 'GitHub', value: '@edzzn' }
	];
</script>

<SEO
	title="Contact"
	description="Get in touch to talk about projects, collaborations, or remote senior engineering roles."
	locale="en"
	alternatePath="/contacto"
/>

<div class="content-container py-16 lg:py-24">
	<div class="mx-auto max-w-4xl">
		<header class="mb-12 text-center">
			<h1 class="text-foreground mb-6 text-4xl font-bold lg:text-5xl">Let’s talk</h1>
			<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
				Have a project in mind, want to collaborate, or just want to say hello? I’d love to hear
				from you.
			</p>
		</header>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<form onsubmit={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="text-foreground mb-2 block text-sm font-medium">Name</label>
					<input
						id="name"
						type="text"
						bind:value={name}
						required
						autocomplete="name"
						class="bg-surface border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
						placeholder="Your name"
					/>
				</div>
				<div>
					<label for="email-en" class="text-foreground mb-2 block text-sm font-medium">Email</label>
					<input
						id="email-en"
						type="email"
						bind:value={email}
						required
						autocomplete="email"
						class="bg-surface border-border focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
						placeholder="you@example.com"
					/>
				</div>
				<div>
					<label for="message" class="text-foreground mb-2 block text-sm font-medium">Message</label
					>
					<textarea
						id="message"
						bind:value={message}
						required
						rows="6"
						class="bg-surface border-border focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
						placeholder="Tell me about your project or idea..."
					></textarea>
				</div>
				<button
					type="submit"
					disabled={sending}
					class="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift w-full rounded-lg px-6 py-3 font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50"
				>
					{sending ? 'Sending...' : 'Send message'}
				</button>
				{#if sent}
					<div class="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
						<p class="text-sm text-green-600 dark:text-green-400">
							Message sent! I’ll get back to you as soon as possible.
						</p>
					</div>
				{/if}
			</form>

			<div class="space-y-8">
				<div>
					<h2 class="mb-4 text-2xl font-semibold">Other ways to reach me</h2>
					<p class="text-muted-foreground mb-6">You can also find me on these platforms:</p>
					<div class="space-y-4">
						{#each contactLinks as link (link.href)}
							<a
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : undefined}
								rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								class="bg-surface border-border hover:border-primary group flex items-center gap-4 rounded-lg border p-4 transition-all"
							>
								<div
									class="bg-primary/10 group-hover:bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-lg font-semibold"
								>
									{link.title.slice(0, 1)}
								</div>
								<div>
									<h3 class="text-foreground font-medium">{link.title}</h3>
									<p class="text-muted-foreground text-sm">{link.value}</p>
								</div>
							</a>
						{/each}
					</div>
				</div>

				<div class="bg-muted/30 rounded-lg p-6">
					<h3 class="text-foreground mb-2 font-medium">Response time</h3>
					<p class="text-muted-foreground text-sm">
						I usually respond within 24–48 hours. For something urgent, Twitter is often the fastest
						way to reach me.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
