<script lang="ts">
  import { siteConfig } from '$lib/config/site';
</script>

<section class="w-full bg-(--background) text-(--foreground) font-body py-24 px-6 md:px-12 border-b border-(--border)">
  <div class="max-w-350 mx-auto">
    
    <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
      
      <h2 class="text-5xl md:text-7xl font-normal tracking-tight text-(--foreground) leading-none">
        {siteConfig.values.heading} <span class="text-(--primary)">{siteConfig.values.highlight}</span>
      </h2>

      <div class="pb-1">
        <p class="text-(--muted) text-lg md:text-xl font-medium max-w-sm leading-relaxed text-left md:text-right">
          {siteConfig.values.description}
        </p>
      </div>
      
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-225">
      {#each siteConfig.values.items as item}
        <div class="group relative w-full h-125 md:h-full rounded-4xl overflow-hidden bg-(--surface)">
          
          <img 
            src={item.img} 
            alt={item.title}
            class="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 will-change-transform"
          />

          <div class="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>

          <div class="absolute top-0 left-0 p-10 md:p-12">
            <span class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em]">
              {item.label}
            </span>
          </div>

          <div class="absolute bottom-0 left-0 p-10 md:p-12 w-full max-w-xl">
            <h3 class="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {item.title}
            </h3>
            <p class="text-gray-200 text-base md:text-lg leading-relaxed font-medium opacity-90">
              {item.desc}
            </p>
            <div class="w-12 h-1 bg-(--primary) mt-6"></div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>