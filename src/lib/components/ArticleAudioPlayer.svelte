<script lang="ts">
	import { onMount } from 'svelte';

	let {
		src,
		title,
		locale = 'es'
	} = $props<{
		src: string;
		title: string;
		locale?: 'es' | 'en';
	}>();

	let audio = $state<HTMLAudioElement>();
	let available = $state(false);
	let checking = $state(true);
	let playing = $state(false);
	let currentTime = $state(0);
	let duration = $state(0);
	let playbackRate = $state(1);
	let progress = $derived(duration > 0 ? (currentTime / duration) * 100 : 0);

	const copy = $derived(
		locale === 'en'
			? {
					eyebrow: 'Audio article',
					listen: 'Listen to this article',
					play: 'Play narration',
					pause: 'Pause narration',
					seek: 'Audio progress',
					speed: 'Playback speed',
					checking: 'Checking audio…',
					pending: 'Narration pending generation'
				}
			: {
					eyebrow: 'Artículo en audio',
					listen: 'Escucha este artículo',
					play: 'Reproducir narración',
					pause: 'Pausar narración',
					seek: 'Progreso del audio',
					speed: 'Velocidad de reproducción',
					checking: 'Comprobando audio…',
					pending: 'Narración pendiente de generación'
				}
	);

	onMount(async () => {
		try {
			let response = await fetch(src, { method: 'HEAD' });
			if (response.status === 405) {
				response = await fetch(src, { headers: { Range: 'bytes=0-0' } });
			}
			available = response.ok;
		} catch {
			available = false;
		} finally {
			checking = false;
		}
	});

	function formatTime(value: number): string {
		if (!Number.isFinite(value)) return '0:00';
		const minutes = Math.floor(value / 60);
		const seconds = Math.floor(value % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	}

	async function togglePlayback() {
		if (!audio) return;
		if (playing) audio.pause();
		else await audio.play();
	}

	function seek(event: Event) {
		if (!audio) return;
		const target = event.currentTarget as HTMLInputElement;
		audio.currentTime = Number(target.value);
		currentTime = audio.currentTime;
	}

	function changeRate(event: Event) {
		if (!audio) return;
		const target = event.currentTarget as HTMLSelectElement;
		playbackRate = Number(target.value);
		audio.playbackRate = playbackRate;
	}
</script>

<section
	class="audio-shell border-border bg-surface relative overflow-hidden rounded-2xl border p-5 shadow-sm sm:p-6"
	class:opacity-75={!available}
	aria-label={copy.listen}
>
	<div class="audio-orbit" aria-hidden="true"></div>
	{#if available}
		<audio
			bind:this={audio}
			{src}
			preload="metadata"
			onloadedmetadata={() => (duration = audio?.duration || 0)}
			ontimeupdate={() => (currentTime = audio?.currentTime || 0)}
			onplay={() => (playing = true)}
			onpause={() => (playing = false)}
			onended={() => {
				playing = false;
				currentTime = 0;
			}}
		>
			<track kind="captions" />
		</audio>
	{/if}

	<div class="relative flex items-center gap-4 sm:gap-5">
		<button
			type="button"
			onclick={togglePlayback}
			disabled={!available}
			class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary grid h-14 w-14 shrink-0 place-items-center rounded-full shadow-lg transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 sm:h-16 sm:w-16"
			aria-label={playing ? copy.pause : copy.play}
		>
			{#if playing}
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M6 5h4v14H6zm8 0h4v14h-4z" />
				</svg>
			{:else}
				<svg class="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path d="M8 5v14l11-7z" />
				</svg>
			{/if}
		</button>

		<div class="min-w-0 flex-1">
			<div class="mb-3 flex items-end justify-between gap-4">
				<div class="min-w-0">
					<p class="text-primary mb-0.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase">
						{copy.eyebrow}
					</p>
					<h2 class="text-foreground truncate text-sm font-semibold sm:text-base">{title}</h2>
					{#if !available}
						<p class="text-muted-foreground mt-0.5 text-xs">
							{checking ? copy.checking : copy.pending}
						</p>
					{/if}
				</div>
				<select
					value={playbackRate}
					onchange={changeRate}
					class="border-border bg-background text-muted-foreground focus:border-primary shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold outline-none"
					aria-label={copy.speed}
					disabled={!available}
				>
					{#each [0.75, 1, 1.25, 1.5, 2] as speed (speed)}
						<option value={speed}>{speed}×</option>
					{/each}
				</select>
			</div>

			<div class="flex items-center gap-3">
				<span class="text-muted-foreground w-9 text-right font-mono text-[0.68rem] tabular-nums">
					{formatTime(currentTime)}
				</span>
				<input
					type="range"
					min="0"
					max={duration || 0}
					step="0.1"
					value={currentTime}
					oninput={seek}
					class="audio-progress min-w-0 flex-1"
					style={`--audio-progress: ${progress}%`}
					aria-label={copy.seek}
					disabled={!available}
				/>
				<span class="text-muted-foreground w-9 font-mono text-[0.68rem] tabular-nums">
					{formatTime(duration)}
				</span>
			</div>
		</div>
	</div>
</section>

<style>
	.audio-shell {
		isolation: isolate;
	}

	.audio-orbit {
		position: absolute;
		width: 11rem;
		height: 11rem;
		right: -4rem;
		top: -5rem;
		border: 1px solid color-mix(in oklab, var(--color-primary) 22%, transparent);
		border-radius: 999px;
		box-shadow:
			0 0 0 1.5rem color-mix(in oklab, var(--color-primary) 5%, transparent),
			0 0 0 3.25rem color-mix(in oklab, var(--color-primary) 3%, transparent);
	}

	.audio-progress {
		appearance: none;
		height: 0.3rem;
		border-radius: 999px;
		background: linear-gradient(
			to right,
			var(--color-primary) 0 var(--audio-progress),
			var(--color-muted) var(--audio-progress) 100%
		);
		cursor: pointer;
	}

	.audio-progress::-webkit-slider-thumb {
		appearance: none;
		width: 0.85rem;
		height: 0.85rem;
		border: 2px solid var(--color-background);
		border-radius: 999px;
		background: var(--color-primary);
		box-shadow: 0 1px 5px color-mix(in oklab, var(--color-foreground) 20%, transparent);
	}

	.audio-progress::-moz-range-thumb {
		width: 0.7rem;
		height: 0.7rem;
		border: 2px solid var(--color-background);
		border-radius: 999px;
		background: var(--color-primary);
	}
</style>
