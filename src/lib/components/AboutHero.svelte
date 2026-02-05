<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-(--background) text-(--foreground) font-body pt-32 pb-20 px-6 md:px-12 border-b border-(--border)">
  <div class="max-w-350 mx-auto">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
      
      <div>
        <h1 class="text-5xl md:text-7xl font-semibold tracking-tighter leading-none text-(--foreground)">
          {siteConfig.aboutPage.hero.heading} <br />
          <span class="text-(--primary)">{siteConfig.aboutPage.hero.highlight}</span>
        </h1>
      </div>

      <div class="lg:pb-2">
        <p class="text-lg md:text-xl text-(--muted) leading-relaxed font-medium">
          {siteConfig.aboutPage.hero.description}
        </p>
      </div>

    </div>

    <div class="w-full h-100 md:h-137.5 rounded-2xl overflow-hidden relative group">
      <img 
        src={siteConfig.aboutPage.hero.image} 
        alt="Makkah Skyline" 
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>

  </div>
</section>