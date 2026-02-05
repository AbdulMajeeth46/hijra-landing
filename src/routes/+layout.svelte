<script lang="ts">
  import '../app.css';
  import { siteConfig } from '$lib/config/site';

  // Layout Components (Moved to 'layout' folder for organization)
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  
  // CTA (Still in root components folder for now)
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