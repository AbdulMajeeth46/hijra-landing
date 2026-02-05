<script lang="ts">
  import AboutHeader from '$lib/components/AboutHeader.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import Values from '$lib/components/Values.svelte';
  import Team from '$lib/components/Team.svelte';
  import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
  <title>About Us | {siteConfig.brand.name}</title>
</svelte:head>

<div class="bg-white min-h-screen">
  <AboutHeader />
  <AboutHero />
  <Values />
  <Team />
</div>