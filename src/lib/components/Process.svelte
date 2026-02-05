<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-(--background) text-(--foreground) font-body py-24 md:py-32 border-b border-(--border)">
  <div class="max-w-350 mx-auto px-6 md:px-12">
    
    <div class="mb-20 md:mb-24 max-w-2xl">
      <span class="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-(--primary) mb-4 block">
        {siteConfig.process.label}
      </span>
      <h2 class="text-4xl md:text-6xl font-semibold tracking-tighter leading-none text-(--foreground)">
        {siteConfig.process.heading} <br />
        <span class="text-(--primary)">{siteConfig.process.highlight}</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
      {#each siteConfig.process.steps as step}
        <div class="group relative flex flex-col pt-8 border-t border-(--border) transition-colors duration-500 hover:border-(--primary) cursor-default">
          
          <div class="mb-8">
            <span class="text-6xl md:text-7xl font-light tracking-tighter text-(--border) group-hover:text-(--foreground) transition-colors duration-500 select-none">
              {step.num}
            </span>
          </div>

          <div class="relative z-10">
            <h3 class="text-2xl font-bold tracking-tight mb-4 flex items-center transition-transform duration-300 group-hover:translate-x-4">
              
              <span class="absolute -left-4 w-1.5 h-1.5 rounded-full bg-(--primary) opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              
              {step.title}
            </h3>
            
            <p class="text-base text-(--muted) leading-relaxed max-w-sm group-hover:text-(--foreground) transition-colors">
              {step.desc}
            </p>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>