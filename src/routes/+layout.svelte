<script lang="ts">
  import '../app.css';
  import { siteConfig } from '$lib/config/site';

  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  
  import Cta from '$lib/components/Cta.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={siteConfig.brand.logo} />
  <title>{siteConfig.brand.name}</title>
</svelte:head>

<Navbar />

{@render children()}

<Cta />
<Footer />