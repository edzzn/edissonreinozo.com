<script lang="ts">
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: 'https://github.com/edzzn', label: 'GitHub', icon: 'github' },
    { href: 'https://twitter.com/edzzn', label: 'Twitter', icon: 'twitter' },
    { href: 'https://linkedin.com/in/edzzn', label: 'LinkedIn', icon: 'linkedin' }
  ];
  
  const footerLinks = [
    { href: '/articulos', label: 'Artículos' },
    { href: '/sobre-mi', label: 'Sobre mí' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/rss.xml', label: 'RSS' }
  ];
</script>

<footer class="mt-auto border-t border-[var(--color-border)] bg-[var(--color-surface)]">
  <div class="container mx-auto px-4 py-12">
    <div class="content-container">
      <!-- Main Footer Content -->
      <div class="grid gap-8 md:grid-cols-3">
        <!-- About Section -->
        <div>
          <h3 class="mb-4 text-lg font-semibold">Edisson Reinozo</h3>
          <p class="text-[var(--color-text-muted)]">
            Desarrollador Full Stack apasionado por crear experiencias web modernas y escalables.
          </p>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-semibold">Enlaces</h3>
          <ul class="space-y-2">
            {#each footerLinks as link}
              <li>
                <a 
                  href={link.href}
                  class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        
        <!-- Social Links -->
        <div>
          <h3 class="mb-4 text-lg font-semibold">Conecta</h3>
          <div class="flex gap-4">
            {#each socialLinks as social}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                aria-label={social.label}
              >
                <!-- Icons placeholder - you can add SVG icons here -->
                <span class="text-sm">{social.label}</span>
              </a>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="mt-8 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-text-muted)]">
        <p>
          © {currentYear} Edisson Reinozo. Construido con 
          <a 
            href="https://kit.svelte.dev" 
            class="text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            SvelteKit
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>