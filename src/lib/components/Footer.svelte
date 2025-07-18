<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="mt-auto py-8 px-4 text-center text-gray-600">
  <div class="max-w-5xl mx-auto">
    <p>
      © {currentYear}, Construido con{' '}
      <a 
        href="https://kit.svelte.dev" 
        class="text-[#663399] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        SvelteKit
      </a>
    </p>
  </div>
</footer>