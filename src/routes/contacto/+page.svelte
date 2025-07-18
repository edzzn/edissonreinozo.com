<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	let email = $state('');
	let nombre = $state('');
	let mensaje = $state('');
	let enviando = $state(false);
	let enviado = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		enviando = true;

		// Aquí normalmente enviarías el formulario a tu backend
		// Por ahora, simulamos el envío
		await new Promise((resolve) => setTimeout(resolve, 1000));

		enviando = false;
		enviado = true;

		// Limpiar formulario
		email = '';
		nombre = '';
		mensaje = '';

		// Reset mensaje de éxito después de 5 segundos
		setTimeout(() => {
			enviado = false;
		}, 5000);
	}
</script>

<SEO
	title="Contacto"
	description="Conecta conmigo para hablar sobre proyectos, colaboraciones o simplemente para saludar"
/>

<div class="content-container py-16 lg:py-24">
	<div class="mx-auto max-w-4xl">
		<header class="mb-12 text-center">
			<h1 class="text-foreground mb-6 text-4xl font-bold lg:text-5xl">Hablemos</h1>
			<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
				¿Tienes un proyecto en mente? ¿Quieres colaborar? ¿O simplemente quieres saludar? Me
				encantaría escucharte.
			</p>
		</header>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Formulario de contacto -->
			<div>
				<form onsubmit={handleSubmit} class="space-y-6">
					<div>
						<label for="nombre" class="text-foreground mb-2 block text-sm font-medium">
							Nombre
						</label>
						<input
							id="nombre"
							type="text"
							bind:value={nombre}
							required
							class="bg-surface border-border focus:ring-primary w-full rounded-lg border px-4
							       py-3 transition-all duration-200 focus:border-transparent
							       focus:ring-2 focus:outline-none"
							placeholder="Tu nombre"
						/>
					</div>

					<div>
						<label for="email" class="text-foreground mb-2 block text-sm font-medium">
							Email
						</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							class="bg-surface border-border focus:ring-primary w-full rounded-lg border px-4
							       py-3 transition-all duration-200 focus:border-transparent
							       focus:ring-2 focus:outline-none"
							placeholder="tu@email.com"
						/>
					</div>

					<div>
						<label for="mensaje" class="text-foreground mb-2 block text-sm font-medium">
							Mensaje
						</label>
						<textarea
							id="mensaje"
							bind:value={mensaje}
							required
							rows="6"
							class="bg-surface border-border focus:ring-primary w-full resize-none rounded-lg border
							       px-4 py-3 transition-all duration-200
							       focus:border-transparent focus:ring-2 focus:outline-none"
							placeholder="Cuéntame sobre tu proyecto o idea..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={enviando}
						class="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift w-full rounded-lg
						       px-6 py-3 font-medium transition-all
						       duration-200 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{#if enviando}
							Enviando...
						{:else}
							Enviar mensaje
						{/if}
					</button>

					{#if enviado}
						<div class="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
							<p class="text-sm text-green-600 dark:text-green-400">
								¡Mensaje enviado! Te responderé lo antes posible.
							</p>
						</div>
					{/if}
				</form>
			</div>

			<!-- Información de contacto -->
			<div class="space-y-8">
				<div>
					<h2 class="mb-4 text-2xl font-semibold">Otras formas de contacto</h2>
					<p class="text-muted-foreground mb-6">
						Si prefieres, también puedes encontrarme en estas plataformas:
					</p>

					<div class="space-y-4">
						<a
							href="https://x.com/edzznr"
							target="_blank"
							rel="noopener noreferrer"
							class="bg-surface border-border hover:border-primary group flex items-center gap-4 rounded-lg
						          border p-4 transition-all duration-200"
						>
							<div class="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors">
								<svg class="text-primary h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-foreground font-medium">Twitter</h3>
								<p class="text-muted-foreground text-sm">@edzznr</p>
							</div>
						</a>

						<a
							href="https://github.com/edzzn"
							target="_blank"
							rel="noopener noreferrer"
							class="bg-surface border-border hover:border-primary group flex items-center gap-4 rounded-lg
						          border p-4 transition-all duration-200"
						>
							<div class="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-3 transition-colors">
								<svg class="text-primary h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="text-foreground font-medium">GitHub</h3>
								<p class="text-muted-foreground text-sm">@edzzn</p>
							</div>
						</a>
					</div>
				</div>

				<div class="bg-muted/30 rounded-lg p-6">
					<h3 class="text-foreground mb-2 font-medium">Horario de respuesta</h3>
					<p class="text-muted-foreground text-sm">
						Generalmente respondo dentro de 24-48 horas. Si tu mensaje es urgente, considera
						contactarme por Twitter para una respuesta más rápida.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
