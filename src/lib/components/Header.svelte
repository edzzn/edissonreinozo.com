<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from './ThemeToggle.svelte';
  
  let { title = "Edisson Reinozo | React/Flutter y AWS" } = $props<{
    title?: string;
  }>();
  
  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 10;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/articulos', label: 'Artículos' },
    { href: '/sobre-mi', label: 'Sobre mí' },
    { href: '/contacto', label: 'Contacto' }
  ];
</script>

<header 
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-background shadow-md' : 'bg-primary'}"
>
  <nav class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a 
        href="/" 
        class="text-xl font-semibold transition-colors {scrolled ? 'text-primary' : 'text-primary-foreground'}"
      >
        {title}
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <ul class="flex items-center gap-8">
          {#each navLinks as link}
            <li>
              <a 
                href={link.href}
                class="transition-colors hover:opacity-80 {scrolled ? 'text-foreground' : 'text-primary-foreground'}"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
        <ThemeToggle />
      </div>
      
      <!-- Mobile Menu Button and Theme Toggle -->
      <div class="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          onclick={() => mobileMenuOpen = !mobileMenuOpen}
          class="p-2 -mr-2 transition-colors {scrolled ? 'text-foreground' : 'text-primary-foreground'}"
          aria-label="Toggle menu"
        >
        <svg 
          class="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
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
      <div class="md:hidden border-t {scrolled ? 'border-border' : 'border-primary-foreground/20'} py-4">
        <ul class="space-y-3">
          {#each navLinks as link}
            <li>
              <a 
                href={link.href}
                onclick={() => mobileMenuOpen = false}
                class="block py-2 transition-colors hover:opacity-80 {scrolled ? 'text-foreground' : 'text-primary-foreground'}"
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