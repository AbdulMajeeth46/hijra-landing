<script lang="ts">
  import ContactHeader from '$lib/components/ContactHeader.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
  <title>Contact Us | {siteConfig.brand.name}</title>
</svelte:head>

<ContactHeader />
<ContactForm />