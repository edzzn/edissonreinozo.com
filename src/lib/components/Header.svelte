<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  
  let { title = "Edisson Reinozo | React/Flutter y AWS" } = $props<{
    title?: string;
  }>();
</script>

<header class="bg-[#663399] text-white">
  <div class="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold hover:opacity-90 transition-opacity">
      {title}
    </a>
    <ThemeToggle />
  </div>
</header>