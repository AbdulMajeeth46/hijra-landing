<script>
  import AboutHeader from '$lib/components/AboutHeader.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import Values from '$lib/components/Values.svelte';
  import Team from '$lib/components/Team.svelte';
</script>

<svelte:head>
  <title>About Us | Hijra</title>
</svelte:head>

<div class="bg-white min-h-screen">
  <AboutHeader />
  <AboutHero />
  <Values />
  <Team />
</div>