<script lang="ts">
	import { onMount } from 'svelte';

	interface TocItem {
		id: string;
		text: string;
		level: number;
		children?: TocItem[];
	}

	let activeId = $state<string>('');
	let headings = $state<TocItem[]>([]);

	onMount(() => {
		// Extract headings from the article content
		const article = document.querySelector('article');
		if (!article) {
			console.log('No article element found');
			return;
		}

		const headingElements = article.querySelectorAll('h2');
		console.log('Found h2 headings:', headingElements.length);
		const items: TocItem[] = [];

		headingElements.forEach((heading) => {
			const id = heading.id;
			const text = heading.textContent || '';
			const level = parseInt(heading.tagName.charAt(1));

			items.push({ id, text, level });
		});

		headings = items; // No need for nested structure with only h2s
		console.log('Processed h2 headings:', headings);

		// Set up intersection observer for scroll spy
		const observerOptions = {
			rootMargin: '-80px 0px -80% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeId = entry.target.id;
				}
			});
		}, observerOptions);

		headingElements.forEach((heading) => {
			observer.observe(heading);
		});

		return () => {
			headingElements.forEach((heading) => {
				observer.unobserve(heading);
			});
		};
	});

	function buildNestedStructure(items: TocItem[]): TocItem[] {
		const result: TocItem[] = [];
		const stack: { item: TocItem; level: number }[] = [];

		items.forEach((item) => {
			const newItem = { ...item, children: [] };

			while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
				stack.pop();
			}

			if (stack.length === 0) {
				result.push(newItem);
			} else {
				const parent = stack[stack.length - 1].item;
				if (!parent.children) parent.children = [];
				parent.children.push(newItem);
			}

			stack.push({ item: newItem, level: item.level });
		});

		return result;
	}

	function scrollToHeading(id: string) {
		const element = document.getElementById(id);
		if (element) {
			const offset = 80; // Account for any fixed header
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth'
			});
		}
	}

	function renderTocItems(items: TocItem[]) {
		return items;
	}
</script>

{#if headings.length > 0}
	<nav class="toc" aria-label="Tabla de contenidos">
		<h2 class="toc-title">Contenido</h2>
		<ul class="toc-list">
			{#each headings as item}
				{@render tocItem(item)}
			{/each}
		</ul>
	</nav>
{/if}

{#snippet tocItem(item: TocItem)}
	<li class="toc-item" data-level={item.level}>
		<a
			href="#{item.id}"
			class="toc-link"
			class:active={activeId === item.id}
			onclick={(e) => {
				e.preventDefault();
				scrollToHeading(item.id);
			}}
		>
			{item.text}
		</a>
		{#if item.children && item.children.length > 0}
			<ul class="toc-sublist">
				{#each item.children as child}
					{@render tocItem(child)}
				{/each}
			</ul>
		{/if}
	</li>
{/snippet}

<style>
	.toc {
		position: sticky;
		top: 5rem;
		max-height: calc(100vh - 10rem);
		overflow-y: auto;
		padding: 1.5rem;
		border-radius: 0.5rem;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		min-width: 250px;
	}

	.toc-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-foreground);
	}

	.toc-list,
	.toc-sublist {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.toc-sublist {
		margin-left: 1rem;
		margin-top: 0.25rem;
	}

	.toc-item {
		margin-bottom: 0.25rem;
	}

	.toc-link {
		display: block;
		padding: 0.375rem 0.75rem;
		color: var(--color-muted-foreground);
		text-decoration: none;
		font-size: 0.875rem;
		line-height: 1.5;
		border-radius: 0.375rem;
		transition: all 0.2s ease;
		border-left: 2px solid transparent;
	}

	.toc-link:hover {
		color: var(--color-foreground);
		background-color: var(--color-muted);
	}

	.toc-link.active {
		color: var(--color-primary);
		background-color: var(--color-primary-background);
		border-left-color: var(--color-primary);
		font-weight: 500;
	}

	/* No indentation needed - only h2 headings */

	/* Scrollbar styling */
	.toc::-webkit-scrollbar {
		width: 6px;
	}

	.toc::-webkit-scrollbar-track {
		background: transparent;
	}

	.toc::-webkit-scrollbar-thumb {
		background: var(--color-border);
		border-radius: 3px;
	}

	.toc::-webkit-scrollbar-thumb:hover {
		background: var(--color-muted-foreground);
	}

	/* Hide on mobile */
	@media (max-width: 1024px) {
		.toc {
			display: none;
		}
	}
</style>