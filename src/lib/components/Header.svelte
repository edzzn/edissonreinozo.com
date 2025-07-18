<script lang="ts">
  let { title = "Edisson Reinozo | React/Flutter y AWS" } = $props<{
    title?: string;
  }>();
</script>

<header class="bg-[#663399] text-white">
  <div class="max-w-5xl mx-auto px-4 py-6">
    <a href="/" class="text-2xl font-bold hover:opacity-90 transition-opacity">
      {title}
    </a>
  </div>
</header>