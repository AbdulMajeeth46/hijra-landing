<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-(--background) text-(--foreground) font-body pt-32 pb-12 px-6 md:px-12">
  <div class="max-w-250 mx-auto text-center">
    
    <div class="opacity-0 translate-y-4 animate-fade-in-up mb-6 flex justify-center">
      <span class="px-4 py-1.5 rounded-full border border-(--border) bg-(--surface) text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-(--primary)">
        {siteConfig.aboutPage.header.badge}
      </span>
    </div>

    <h1 class="opacity-0 translate-y-4 animate-fade-in-up delay-100 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-8 text-(--foreground)">
      {siteConfig.aboutPage.header.heading} <br class="hidden md:block" />
      <span class="text-(--primary)">{siteConfig.aboutPage.header.highlight}</span>
    </h1>

    <p class="opacity-0 translate-y-4 animate-fade-in-up delay-200 text-lg md:text-xl text-(--muted) leading-relaxed font-medium max-w-2xl mx-auto">
      {siteConfig.aboutPage.header.description}
    </p>

  </div>
</section>